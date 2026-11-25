import React, { useState, useEffect } from 'react';
import { DocumentItem } from './types/document';
import { 
  getStoredDocuments, saveStoredDocuments, 
  resetDocumentsToDefaults, calculateMetrics, DocumentMetrics 
} from './services/documentStore';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { CatalogSection } from './components/CatalogSection';
import { BusinessManagementSection } from './components/BusinessManagementSection';
import { CompanyInfoSection } from './components/CompanyInfoSection';
import { UserManualSection } from './components/UserManualSection';
import { InstallManualSection } from './components/InstallManualSection';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { DocumentAdminModal } from './components/DocumentAdminModal';
import { DocumentImportModal } from './components/DocumentImportModal';
import { HelpSupportModal } from './components/HelpSupportModal';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function App() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [metrics, setMetrics] = useState<DocumentMetrics>({
    totalDocs: 0,
    totalCategories: 0,
    pdfCount: 0,
    wordCount: 0,
    excelCount: 0,
    otherCount: 0,
    originalDocsCount: 0,
    customDocsCount: 0,
    totalAnnualBudgetCop: 3800000,
    exposedPersonnel: 4,
    riskClass: 'Clase V'
  });

  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Modals state
  const [viewingDocument, setViewingDocument] = useState<DocumentItem | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Initial load
  useEffect(() => {
    const loaded = getStoredDocuments();
    setDocuments(loaded);
    setMetrics(calculateMetrics(loaded));
  }, []);

  // Update metrics whenever documents change
  const updateDocumentsAndMetrics = (newDocs: DocumentItem[]) => {
    setDocuments(newDocs);
    saveStoredDocuments(newDocs);
    setMetrics(calculateMetrics(newDocs));
  };

  // Admin Actions
  const handleAddDocument = (newDoc: DocumentItem) => {
    const updated = [newDoc, ...documents];
    updateDocumentsAndMetrics(updated);
    showToast(`Documento ${newDoc.code} registrado correctamente.`);
  };

  const handleImportDocument = (newDoc: DocumentItem) => {
    const updated = [newDoc, ...documents];
    updateDocumentsAndMetrics(updated);
    showToast(`Documento "${newDoc.title}" importado y acomodado automáticamente.`);
  };

  const handleUpdateDocument = (updatedDoc: DocumentItem) => {
    const updated = documents.map(d => d.id === updatedDoc.id ? updatedDoc : d);
    updateDocumentsAndMetrics(updated);
    showToast(`Documento ${updatedDoc.code} actualizado correctamente.`);
  };

  const handleDeleteDocument = (docId: string) => {
    const deletedDoc = documents.find(d => d.id === docId);
    const updated = documents.filter(d => d.id !== docId);
    updateDocumentsAndMetrics(updated);
    showToast(`Documento ${deletedDoc?.code || ''} eliminado de la base.`);
  };

  const handleResetDefaults = () => {
    const reset = resetDocumentsToDefaults();
    updateDocumentsAndMetrics(reset);
    showToast('Documentos oficiales restaurados exitosamente.');
  };

  // Document Operations
  const handleViewDocument = (doc: DocumentItem) => {
    setViewingDocument(doc);
  };

  const handleDownloadDocument = (doc: DocumentItem) => {
    try {
      const link = window.document.createElement('a');
      link.href = doc.filePath;
      link.download = doc.filePath.split('/').pop() || `${doc.code}.pdf`;
      link.target = '_blank';
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
      showToast(`Descarga iniciada: ${doc.title}`, 'success');
    } catch (err) {
      console.error('Error during download:', err);
      showToast('Error al iniciar la descarga del archivo.', 'error');
    }
  };

  const handlePrintDocument = (doc: DocumentItem) => {
    setViewingDocument(doc);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setActiveTab('documentos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-60 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 text-xs animate-in slide-in-from-bottom duration-200 no-print">
          {toastMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-sky-400 shrink-0" />
          )}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        totalDocs={documents.length}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'inicio' && (
          <HomeSection
            metrics={metrics}
            documents={documents}
            onExploreDocuments={() => {
              setSelectedCategory('all');
              setActiveTab('documentos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCategory={handleCategorySelect}
            onViewDocument={handleViewDocument}
            onDownloadDocument={handleDownloadDocument}
            onPrintDocument={handlePrintDocument}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'documentos' && (
          <CatalogSection
            documents={documents}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onViewDocument={handleViewDocument}
            onDownloadDocument={handleDownloadDocument}
            onPrintDocument={handlePrintDocument}
            onOpenAdmin={() => setIsAdminOpen(true)}
            onOpenImport={() => setIsImportOpen(true)}
          />
        )}

        {activeTab === 'gestion' && (
          <BusinessManagementSection
            documents={documents}
            onViewDocument={handleViewDocument}
            onDownloadDocument={handleDownloadDocument}
          />
        )}

        {activeTab === 'empresa' && (
          <CompanyInfoSection />
        )}

        {activeTab === 'manual-usuario' && (
          <UserManualSection
            setActiveTab={setActiveTab}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />
        )}

        {activeTab === 'instalacion' && (
          <InstallManualSection />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Modals */}
      <DocumentViewerModal
        document={viewingDocument}
        onClose={() => setViewingDocument(null)}
        onDownload={handleDownloadDocument}
      />

      <DocumentImportModal
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
        existingDocuments={documents}
        onImportDocument={handleImportDocument}
      />

      <DocumentAdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        documents={documents}
        onAddDocument={handleAddDocument}
        onUpdateDocument={handleUpdateDocument}
        onDeleteDocument={handleDeleteDocument}
        onResetDefaults={handleResetDefaults}
      />

      <HelpSupportModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

    </div>
  );
}
