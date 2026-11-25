import React from 'react';
import { DocumentItem } from '../types/document';
import { COMPANY_LOGO_PATH } from '../data/companyInfo';
import { FileText, Eye, Download, Printer, Shield, Calendar, UserCheck, Sparkles } from 'lucide-react';

interface DocumentCardProps {
  document: DocumentItem;
  onView: (doc: DocumentItem) => void;
  onDownload: (doc: DocumentItem) => void;
  onPrint: (doc: DocumentItem) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  onView,
  onDownload,
  onPrint
}) => {
  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group relative">
      {/* Newly imported badge if applicable */}
      {document.isRecentImport && (
        <div className="absolute top-0 right-0 bg-sky-500 text-white text-[9px] font-bold font-mono uppercase px-2 py-0.5 rounded-bl-lg shadow-xs flex items-center gap-1 z-10">
          <Sparkles className="w-2.5 h-2.5" />
          <span>Importado</span>
        </div>
      )}

      <div className="p-5">
        {/* Header with Official Logo & Code */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shrink-0 shadow-2xs">
              <img 
                src={COMPANY_LOGO_PATH} 
                alt="Logo J&V" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-sky-800 uppercase tracking-wider block">
                {document.code}
              </span>
              <span className="text-xs font-medium text-slate-500 block line-clamp-1">
                {document.category}
              </span>
            </div>
          </div>
          
          <span className="text-[11px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
            {document.format}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-800 transition-colors line-clamp-2 mb-2 leading-snug">
          {document.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {document.description}
        </p>

        {/* Metadata info */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-y-1 gap-x-3 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            <span>{document.date}</span>
          </div>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <div className="flex items-center gap-1 truncate max-w-[200px]" title={document.responsible}>
            <UserCheck className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate">{document.responsible.split('(')[0]}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons as explicitly required */}
      <div className="p-3 bg-slate-50/80 border-t border-slate-100 grid grid-cols-3 gap-1.5 text-xs font-semibold">
        <button
          onClick={() => onView(document)}
          className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer text-center"
          title="Abrir visor interactivo del documento"
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="truncate">Visualizar</span>
        </button>

        <button
          onClick={() => onDownload(document)}
          className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer text-center"
          title="Descargar archivo original"
        >
          <Download className="w-3.5 h-3.5 text-slate-600" />
          <span className="truncate">Descargar</span>
        </button>

        <button
          onClick={() => onPrint(document)}
          className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer text-center"
          title="Imprimir documento oficial"
        >
          <Printer className="w-3.5 h-3.5 text-slate-600" />
          <span className="truncate">Imprimir</span>
        </button>
      </div>
    </article>
  );
};
