import React, { useState, useRef } from 'react';
import { DocumentItem, DocumentCategory } from '../types/document';
import { DOCUMENT_CATEGORIES } from '../data/categories';
import { COMPANY_LOGO_PATH } from '../data/companyInfo';
import { 
  X, UploadCloud, FileText, CheckCircle2, AlertCircle, 
  Sparkles, ArrowRight, ShieldCheck, FileSpreadsheet, FileCode
} from 'lucide-react';

interface DocumentImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  existingDocuments: DocumentItem[];
  onImportDocument: (newDoc: DocumentItem) => void;
}

export const DocumentImportModal: React.FC<DocumentImportModalProps> = ({
  isOpen,
  onClose,
  existingDocuments,
  onImportDocument
}) => {
  if (!isOpen) return null;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  // File state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileDataUrl, setFileDataUrl] = useState<string>('');
  const [fileSizeStr, setFileSizeStr] = useState<string>('');

  // Form state
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState<DocumentCategory>(DOCUMENT_CATEGORIES[0].name);
  const [format, setFormat] = useState<'PDF' | 'Word' | 'Excel' | 'Otro'>('PDF');
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('Responsable del SG-SST / Operaciones');
  const [legalBasis, setLegalBasis] = useState('Decreto 1072 de 2015');
  const [date, setDate] = useState(new Date().getFullYear().toString());
  const [tagsInput, setTagsInput] = useState('Importado, J&V Limpia Plus');
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Helper to guess category and code from file name
  const analyzeAndFillDefaults = (file: File) => {
    const rawName = file.name;
    const ext = rawName.substring(rawName.lastIndexOf('.')).toLowerCase();
    const nameWithoutExt = rawName.substring(0, rawName.lastIndexOf('.'));
    
    // Clean title
    const cleanTitle = nameWithoutExt
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');

    // Detect format
    let detectedFormat: 'PDF' | 'Word' | 'Excel' | 'Otro' = 'PDF';
    if (ext === '.pdf') detectedFormat = 'PDF';
    else if (['.doc', '.docx'].includes(ext)) detectedFormat = 'Word';
    else if (['.xls', '.xlsx', '.csv'].includes(ext)) detectedFormat = 'Excel';
    else detectedFormat = 'Otro';

    // Guess category from keywords
    const lowerName = nameWithoutExt.toLowerCase();
    let guessedCategory: DocumentCategory = 'Seguridad y Salud en el Trabajo (SG-SST)';
    let prefix = 'SST-DOC';

    if (lowerName.includes('peligro') || lowerName.includes('riesgo') || lowerName.includes('gtc') || lowerName.includes('iper')) {
      guessedCategory = 'Gestión de Riesgos y Peligros Operativos';
      prefix = 'GTH-DOC';
    } else if (lowerName.includes('legal') || lowerName.includes('ley') || lowerName.includes('decreto') || lowerName.includes('resolucion')) {
      guessedCategory = 'Cumplimiento Normativo y Legal';
      prefix = 'LEG-DOC';
    } else if (lowerName.includes('capacit') || lowerName.includes('inducc') || lowerName.includes('formacion') || lowerName.includes('taller')) {
      guessedCategory = 'Capacitación y Talento Humano';
      prefix = 'CAP-DOC';
    } else if (lowerName.includes('auditor') || lowerName.includes('indicador') || lowerName.includes('mejora') || lowerName.includes('evalua')) {
      guessedCategory = 'Auditoría, Evaluación y Mejora Continua';
      prefix = 'AUD-DOC';
    }

    // Auto-sequence code
    const existingInCat = existingDocuments.filter(d => d.category === guessedCategory);
    const nextSeq = String(existingInCat.length + 1).padStart(2, '0');
    const generatedCode = `${prefix}-${nextSeq}`;

    // Format file size
    const sizeInKb = file.size / 1024;
    const formattedSize = sizeInKb > 1024 
      ? `${(sizeInKb / 1024).toFixed(1)} MB` 
      : `${Math.round(sizeInKb)} KB`;

    setTitle(cleanTitle);
    setCode(generatedCode);
    setCategory(guessedCategory);
    setFormat(detectedFormat);
    setFileSizeStr(formattedSize);
    setDescription(`Documento técnico importado al sistema de gestión documental de J&V Limpia Plus S.A.S. Formato original ${detectedFormat}.`);
    setTagsInput(`${guessedCategory.split(' ')[0]}, ${detectedFormat}, 2027`);
  };

  const handleFileChange = (file: File) => {
    if (!file) return;
    setErrorMessage('');
    setSelectedFile(file);
    setIsProcessing(true);

    analyzeAndFillDefaults(file);

    // Read as Data URL so browser can view and download real content
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setFileDataUrl(result);
      setIsProcessing(false);
    };
    reader.onerror = () => {
      setIsProcessing(false);
      setErrorMessage('No se pudo leer el archivo. Intente con otro archivo.');
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !code.trim() || !selectedFile) {
      setErrorMessage('Por favor seleccione un archivo y complete el título y código documental.');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const newDoc: DocumentItem = {
      id: `doc-import-${Date.now()}`,
      code: code.trim().toUpperCase(),
      title: title.trim(),
      category,
      format,
      description: description.trim(),
      filePath: fileDataUrl, // Real local data url for PDF viewing and downloading
      fileSize: fileSizeStr,
      version: '01',
      date: date.trim(),
      responsible: responsible.trim(),
      legalBasis: legalBasis.trim(),
      tags,
      isOriginal: false,
      isRecentImport: true,
      fileName: selectedFile.name
    };

    onImportDocument(newDoc);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Official Logo */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img 
              src={COMPANY_LOGO_PATH} 
              alt="Logo J&V Limpia Plus S.A.S." 
              className="w-10 h-10 object-contain bg-white/10 rounded-lg p-0.5 border border-white/20"
            />
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wide block">
                J&V Limpia Plus S.A.S. · Importador Inteligente
              </span>
              <h2 className="text-base font-bold text-white">
                Importar Documento a la Plataforma
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Drag & Drop File Zone */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              1. Selecciona o arrastra el archivo (PDF, Word, Excel, Imagen)
            </label>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                dragActive 
                  ? 'border-sky-500 bg-sky-50/50' 
                  : selectedFile 
                    ? 'border-emerald-400 bg-emerald-50/30' 
                    : 'border-slate-300 hover:border-sky-400 hover:bg-slate-50'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileChange(e.target.files[0]);
                  }
                }}
                className="hidden"
              />

              {selectedFile ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{selectedFile.name}</p>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Tamaño: {fileSizeStr} · Formato detectado: <strong className="text-emerald-700">{format}</strong>
                    </p>
                  </div>
                  <span className="text-[11px] text-sky-700 hover:underline mt-1">
                    Haga clic para cambiar de archivo
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      Haz clic para examinar o arrastra aquí tu archivo
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Soporta documentos PDF oficiales, formatos Word, Excel e informes técnicos
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Automatic Organization Preview */}
          {selectedFile && (
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200 text-xs text-sky-950 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">
                  Acomodo y Orden Automático Activado
                </span>
                <p className="text-sky-800 text-[11px] leading-relaxed mt-0.5">
                  El sistema detectó los metadatos y ha asignado el código correlativo <strong>{code}</strong> dentro de la categoría <strong>{category}</strong>. Al guardar, el documento se integrará automáticamente en su lugar correspondiente en el catálogo.
                </p>
              </div>
            </div>
          )}

          {/* Form Fields for Customization */}
          <div className="space-y-4 pt-1">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
              2. Revisión y Personalización de Metadatos
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">Nombre Oficial del Documento *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej: Formato de Inspección Preoperacional de Ductos"
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Código Asignado *</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Ej: SST-DOC-06"
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">Categoría Empresarial</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                >
                  {DOCUMENT_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Formato</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                >
                  <option value="PDF">PDF</option>
                  <option value="Word">Word</option>
                  <option value="Excel">Excel</option>
                  <option value="Otro">Otro Formato</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">Descripción Breve</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Breve resumen del contenido y su aplicación..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Responsable</label>
                <input
                  type="text"
                  value={responsible}
                  onChange={(e) => setResponsible(e.target.value)}
                  placeholder="Ej: Supervisor Técnico"
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              El documento se indexará y guardará de inmediato en el catálogo de J&V Limpia Plus S.A.S.
            </span>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={!selectedFile || isProcessing}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  !selectedFile || isProcessing
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md'
                }`}
              >
                <span>Importar y Ordenar en la Plataforma</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
