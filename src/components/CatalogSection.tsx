import React, { useState, useMemo } from 'react';
import { DocumentItem, DocumentCategory } from '../types/document';
import { DOCUMENT_CATEGORIES } from '../data/categories';
import { DocumentCard } from './DocumentCard';
import { 
  Search, X, Filter, ArrowUpDown, FileText, Folder, Check, 
  RotateCcw, SlidersHorizontal, Sparkles, UploadCloud, LayoutGrid, 
  ListTree, FolderCheck, PlusCircle
} from 'lucide-react';

interface CatalogSectionProps {
  documents: DocumentItem[];
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
  onViewDocument: (doc: DocumentItem) => void;
  onDownloadDocument: (doc: DocumentItem) => void;
  onPrintDocument: (doc: DocumentItem) => void;
  onOpenAdmin: () => void;
  onOpenImport: () => void;
}

const CATEGORY_ORDER_WEIGHT: Record<DocumentCategory, number> = {
  'Seguridad y Salud en el Trabajo (SG-SST)': 1,
  'Gestión de Riesgos y Peligros Operativos': 2,
  'Cumplimiento Normativo y Legal': 3,
  'Capacitación y Talento Humano': 4,
  'Auditoría, Evaluación y Mejora Continua': 5,
};

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  documents,
  selectedCategory,
  onSelectCategory,
  onViewDocument,
  onDownloadDocument,
  onPrintDocument,
  onOpenAdmin,
  onOpenImport
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'auto' | 'name' | 'code' | 'recent' | 'date'>('auto');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'grouped' | 'grid'>('grouped');

  // Check if any recent imports exist
  const recentImportsCount = useMemo(() => {
    return documents.filter(d => d.isRecentImport).length;
  }, [documents]);

  // Filter & Search Logic with Automatic Ordering
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      // Category filter
      if (selectedCategory !== 'all' && doc.category !== selectedCategory) {
        return false;
      }

      // Format filter
      if (selectedFormat !== 'all' && doc.format !== selectedFormat) {
        return false;
      }

      // Search query (matches title, code, description, category, tags, legal basis)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = doc.title.toLowerCase().includes(q);
        const inCode = doc.code.toLowerCase().includes(q);
        const inDesc = doc.description.toLowerCase().includes(q);
        const inCat = doc.category.toLowerCase().includes(q);
        const inTags = doc.tags.some(t => t.toLowerCase().includes(q));
        const inLegal = (doc.legalBasis || '').toLowerCase().includes(q);
        const inResp = doc.responsible.toLowerCase().includes(q);

        if (!inTitle && !inCode && !inDesc && !inCat && !inTags && !inLegal && !inResp) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'auto') {
        // Automatic ordering: by Category weight, then by Code
        const weightA = CATEGORY_ORDER_WEIGHT[a.category] || 99;
        const weightB = CATEGORY_ORDER_WEIGHT[b.category] || 99;
        if (weightA !== weightB) {
          return sortOrder === 'asc' ? weightA - weightB : weightB - weightA;
        }
        return sortOrder === 'asc' 
          ? a.code.localeCompare(b.code) 
          : b.code.localeCompare(a.code);
      } else if (sortBy === 'recent') {
        // Newly imported first
        if (a.isRecentImport && !b.isRecentImport) return -1;
        if (!a.isRecentImport && b.isRecentImport) return 1;
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'name') {
        return sortOrder === 'asc' 
          ? a.title.localeCompare(b.title) 
          : b.title.localeCompare(a.title);
      } else if (sortBy === 'code') {
        return sortOrder === 'asc' 
          ? a.code.localeCompare(b.code) 
          : b.code.localeCompare(a.code);
      } else {
        return sortOrder === 'asc' 
          ? a.date.localeCompare(b.date) 
          : b.date.localeCompare(a.date);
      }
    });
  }, [documents, selectedCategory, selectedFormat, searchQuery, sortBy, sortOrder]);

  // Grouped documents by category for Grouped view
  const groupedDocuments = useMemo(() => {
    const groups: { category: DocumentCategory; meta: (typeof DOCUMENT_CATEGORIES)[0]; docs: DocumentItem[] }[] = [];
    
    for (const catMeta of DOCUMENT_CATEGORIES) {
      const docsInCat = filteredDocuments.filter(d => d.category === catMeta.name);
      if (docsInCat.length > 0) {
        groups.push({
          category: catMeta.name,
          meta: catMeta,
          docs: docsInCat
        });
      }
    }

    return groups;
  }, [filteredDocuments]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedFormat('all');
    onSelectCategory('all');
    setSortBy('auto');
    setSortOrder('asc');
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedFormat !== 'all' || sortBy !== 'auto';

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header of Section */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-wide">
              <span>J&V Limpia Plus S.A.S.</span>
              <span>/</span>
              <span>Gestión Documental</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Catálogo Documental Empresarial
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Explora, visualiza y descarga los expedientes oficiales de la empresa. Puedes importar nuevos documentos y el sistema los acomodará en orden automáticamente.
            </p>
          </div>

          {/* Quick Import Action Priority Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenImport}
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md flex items-center gap-2 cursor-pointer"
              title="Importar un archivo PDF, Word o Excel a la plataforma"
            >
              <UploadCloud className="w-4 h-4 text-slate-950" />
              <span>Importar Documento</span>
              <span className="bg-slate-950/20 text-slate-950 text-[10px] font-mono px-1.5 py-0.5 rounded">
                Auto-Orden
              </span>
            </button>

            <button
              onClick={onOpenAdmin}
              className="px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5 text-slate-300" />
              <span>Registrar Manual</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Imports Notice Banner */}
      {recentImportsCount > 0 && (
        <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-sky-950">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-sky-600 shrink-0" />
            <div>
              <span className="font-bold">
                ¡{recentImportsCount} documento(s) importado(s) y ordenado(s) automáticamente!
              </span>
              <p className="text-[11px] text-sky-800">
                Los archivos importados se han ubicado de forma automática en su categoría oficial y están listos para ser visualizados, descargados o impresos.
              </p>
            </div>
          </div>
          <button
            onClick={() => setSortBy('recent')}
            className="text-xs font-bold text-sky-700 hover:text-sky-900 underline whitespace-nowrap"
          >
            Ver importados primero
          </button>
        </div>
      )}

      {/* Search and Filters Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
        
        {/* Row 1: Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre, código oficial (GTH-AN-06), químico, norma, COPASST o palabra clave..."
            className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Row 2: Category Filter Buttons */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Filtrar por Categoría:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todas las categorías ({documents.length})
            </button>
            {DOCUMENT_CATEGORIES.map((cat) => {
              const count = documents.filter((d) => d.category === cat.name).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.name)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    selectedCategory === cat.name
                      ? 'bg-sky-600 text-white font-semibold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.shortName}</span>
                  <span className="font-mono text-[10px] opacity-80">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 3: Automated Sorting & View Mode Controls */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Orden:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-lg px-2.5 py-1 focus:outline-none focus:border-sky-500"
              >
                <option value="auto">⚡ Acomodo Automático Oficial (Por Categoría & Código)</option>
                <option value="recent">✨ Recién Importados Primero</option>
                <option value="name">Nombre Alfabético</option>
                <option value="code">Código Documental</option>
                <option value="date">Fecha / Vigencia</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-1 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600"
                title={`Invertir orden (actual: ${sortOrder === 'asc' ? 'Ascendente' : 'Descendente'})`}
              >
                <ArrowUpDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Format Filter */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Formato:</span>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-2.5 py-1 focus:outline-none focus:border-sky-500"
              >
                <option value="all">Todos los formatos</option>
                <option value="PDF">PDF ({documents.filter(d => d.format === 'PDF').length})</option>
                <option value="Word">Word ({documents.filter(d => d.format === 'Word').length})</option>
                <option value="Excel">Excel ({documents.filter(d => d.format === 'Excel').length})</option>
              </select>
            </div>

            {/* View Mode Switch */}
            <div className="hidden sm:flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
              <button
                onClick={() => setViewMode('grouped')}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1 ${
                  viewMode === 'grouped' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Ver documentos agrupados por categoría"
              >
                <ListTree className="w-3 h-3" />
                <span>Por Categoría</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1 ${
                  viewMode === 'grid' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Ver cuadrícula continua"
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Cuadrícula</span>
              </button>
            </div>

          </div>

          {/* Results count & Clear */}
          <div className="flex items-center gap-3">
            <span className="text-slate-500">
              Total: <strong className="text-slate-900 font-mono">{filteredDocuments.length}</strong> de <strong className="text-slate-900 font-mono">{documents.length}</strong>
            </span>

            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="text-sky-700 hover:text-sky-900 font-semibold flex items-center gap-1 underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restablecer</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Documents Display */}
      {filteredDocuments.length > 0 ? (
        viewMode === 'grouped' && selectedCategory === 'all' && sortBy === 'auto' ? (
          /* GROUPED VIEW: Automatically grouped by category sections */
          <div className="space-y-10">
            {groupedDocuments.map((group) => (
              <section key={group.category} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                      <FolderCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-slate-900">
                        {group.category}
                      </h2>
                      <p className="text-[11px] text-slate-500">
                        {group.meta.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {group.docs.length} {group.docs.length === 1 ? 'documento' : 'documentos'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.docs.map((doc) => (
                    <DocumentCard
                      key={doc.id}
                      document={doc}
                      onView={onViewDocument}
                      onDownload={onDownloadDocument}
                      onPrint={onPrintDocument}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* CONTINUOUS GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                onView={onViewDocument}
                onDownload={onDownloadDocument}
                onPrint={onPrintDocument}
              />
            ))}
          </div>
        )
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <Search className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            No se encontraron documentos
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
            No hay ningún archivo que coincida con los filtros actuales. Puedes restablecer los filtros o importar un nuevo documento.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
            >
              Ver todos los documentos
            </button>
            <button
              onClick={onOpenImport}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <UploadCloud className="w-3.5 h-3.5 text-sky-400" />
              <span>Importar Documento</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
