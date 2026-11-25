import React, { useState } from 'react';
import { DocumentItem } from '../types/document';
import { STRUCTURED_DOCUMENTS_DATA } from '../data/structuredDocumentData';
import { COMPANY_LOGO_PATH } from '../data/companyInfo';
import { 
  X, Download, Printer, ExternalLink, FileText, ArrowLeft, 
  Table, Info, ShieldCheck, CheckCircle2, AlertCircle, Building2, User
} from 'lucide-react';

interface DocumentViewerModalProps {
  document: DocumentItem | null;
  onClose: () => void;
  onDownload: (doc: DocumentItem) => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  document,
  onClose,
  onDownload
}) => {
  if (!document) return null;

  const [activeViewMode, setActiveViewMode] = useState<'pdf' | 'structured'>('pdf');
  const structuredData = document.extractedDataKey 
    ? (STRUCTURED_DOCUMENTS_DATA as any)[document.extractedDataKey] 
    : null;

  const handlePrint = () => {
    window.print();
  };

  const handleOpenNewTab = () => {
    window.open(document.filePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div 
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-6xl max-h-[94vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150 print-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="viewer-doc-title"
      >
        {/* Top Header / Bar */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 gap-4 no-print">
          <div className="flex items-center gap-3.5 min-w-0">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Regresar"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Official Logo thumbnail */}
            <div className="w-9 h-9 rounded-lg bg-white/95 p-1 border border-sky-400/30 flex items-center justify-center shrink-0 shadow-2xs">
              <img 
                src={COMPANY_LOGO_PATH} 
                alt="Logo J&V" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-sky-400 font-mono">
                <span>{document.code}</span>
                <span className="text-slate-500">·</span>
                <span className="truncate">{document.category}</span>
                <span className="text-slate-500">·</span>
                <span>{document.format}</span>
              </div>
              <h2 id="viewer-doc-title" className="text-base sm:text-lg font-bold text-white truncate">
                {document.title}
              </h2>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 shrink-0">
            {/* View Mode Toggle if structured data is present */}
            {structuredData && (
              <div className="hidden sm:flex items-center p-1 bg-slate-800 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setActiveViewMode('pdf')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeViewMode === 'pdf'
                      ? 'bg-sky-500 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Visor PDF</span>
                  </span>
                </button>
                <button
                  onClick={() => setActiveViewMode('structured')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeViewMode === 'structured'
                      ? 'bg-sky-500 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Table className="w-3.5 h-3.5" />
                    <span>Ficha y Datos</span>
                  </span>
                </button>
              </div>
            )}

            <button
              onClick={handleOpenNewTab}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Abrir en pestaña nueva"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Nueva Pestaña</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Imprimir documento"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            <button
              onClick={() => onDownload(document)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors shadow-xs"
              title="Descargar archivo original"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Cerrar visor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Toggle */}
        {structuredData && (
          <div className="sm:hidden px-4 py-2 bg-slate-100 border-b border-slate-200 flex gap-2 no-print">
            <button
              onClick={() => setActiveViewMode('pdf')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md text-center ${
                activeViewMode === 'pdf' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 border'
              }`}
            >
              Visor PDF
            </button>
            <button
              onClick={() => setActiveViewMode('structured')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md text-center ${
                activeViewMode === 'structured' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 border'
              }`}
            >
              Ficha y Datos
            </button>
          </div>
        )}

        {/* Print Only Header (Visible only when printing) */}
        <div className="hidden print-only p-6 border-b border-slate-300">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-16 flex items-center justify-center">
                <img 
                  src={COMPANY_LOGO_PATH} 
                  alt="Logo J&V Limpia Plus S.A.S." 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">J&V LIMPIA PLUS S.A.S.</h1>
                <p className="text-xs text-slate-600">NIT: 901907414-8 · Medellín, Antioquia, Colombia</p>
                <p className="text-xs text-slate-600">Entregable Gestión Empresarial SENA — SG-SST (Riesgo Laboral Clase V)</p>
              </div>
            </div>
            <div className="text-right text-xs">
              <p className="font-mono font-bold text-slate-900 text-sm">{document.code}</p>
              <p className="text-slate-600">Versión: {document.version}</p>
              <p className="text-slate-600">Fecha: {document.date}</p>
            </div>
          </div>
          <h2 className="text-base font-bold text-slate-900 border-t border-slate-200 pt-3">{document.title}</h2>
          <p className="text-xs text-slate-700 mt-1">{document.description}</p>
        </div>

        {/* Document Body Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6">
          
          {/* Metadata Card Strip */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-xs grid grid-cols-1 md:grid-cols-4 gap-4 text-xs no-print">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Responsable</span>
              <span className="font-semibold text-slate-800 block truncate">{document.responsible}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Marco Legal / Requisito</span>
              <span className="text-slate-700 block truncate">{document.legalBasis || 'Decreto 1072 de 2015'}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Vigencia / Fecha</span>
              <span className="font-mono text-slate-800 block">{document.date}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Disponibilidad</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Archivo original listo</span>
              </span>
            </div>
          </div>

          {/* VIEW MODE: PDF IFRAME / OBJECT */}
          {activeViewMode === 'pdf' ? (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[65vh]">
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 no-print">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-600" />
                  <span>Documento oficial: <strong className="text-slate-800">{document.filePath.split('/').pop()}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleOpenNewTab}
                    className="text-sky-700 hover:text-sky-900 underline flex items-center gap-1"
                  >
                    <span>Abrir visor nativo</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* PDF Container */}
              <div className="flex-1 w-full bg-slate-800 relative">
                <iframe
                  src={`${document.filePath}#toolbar=1&navpanes=0`}
                  title={document.title}
                  className="w-full h-full border-none"
                  allow="fullscreen"
                />
              </div>
            </div>
          ) : (
            /* VIEW MODE: STRUCTURED DATA & TABLES */
            <div className="space-y-6">
              
              {/* If it's Objetivos SG-SST */}
              {document.extractedDataKey === 'objetivos_sgsst' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                  <div className="border-b border-slate-200 pb-4 mb-4">
                    <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
                      Marco Normativo: Art. 2.2.4.6.18 Decreto 1072 de 2015
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Matriz de Objetivos Estratégicos SG-SST 2026 — J&V Limpia Plus S.A.S.
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider">
                          <th className="p-3 w-12 text-center">N.°</th>
                          <th className="p-3">Objetivo del SG-SST</th>
                          <th className="p-3">Indicador</th>
                          <th className="p-3">Meta</th>
                          <th className="p-3">Plazo</th>
                          <th className="p-3">Responsable</th>
                          <th className="p-3">Evidencia Objetiva</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {structuredData.items.map((row: any) => (
                          <tr key={row.number} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 font-mono font-bold text-center text-slate-700">{row.number}</td>
                            <td className="p-3 font-medium text-slate-900">{row.objective}</td>
                            <td className="p-3 font-mono text-slate-700">{row.indicator}</td>
                            <td className="p-3 font-bold text-sky-800 whitespace-nowrap">{row.meta}</td>
                            <td className="p-3 text-slate-600 whitespace-nowrap">{row.deadline}</td>
                            <td className="p-3 text-slate-700 font-medium">{row.responsible}</td>
                            <td className="p-3 text-slate-600">{row.evidence}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* If it's Política SG-SST */}
              {document.extractedDataKey === 'politica_sgsst' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs max-w-4xl mx-auto">
                  <div className="text-center border-b border-slate-200 pb-5 mb-5">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">SST-POL-01 · Versión 01</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      POLÍTICA DE SEGURIDAD Y SALUD EN EL TRABAJO – SG-SST
                    </h3>
                    <p className="text-xs text-slate-600 max-w-2xl mx-auto mt-2">
                      {structuredData.preamble}
                    </p>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    {structuredData.commitments.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-slate-800 leading-relaxed pt-0.5">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
                    <div>
                      <p><strong>Fecha de emisión:</strong> {structuredData.signDate}</p>
                      <p><strong>Estado:</strong> Vigente y aprobada</p>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                      <p className="font-bold text-slate-900">{structuredData.legalRepresentative}</p>
                      <p className="text-slate-500">Representante Legal · {structuredData.idNumber}</p>
                      <p className="font-mono text-slate-500">NIT: {structuredData.nit}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* If it's Indicadores SG-SST */}
              {document.extractedDataKey === 'indicadores_sgsst' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                  <div className="border-b border-slate-200 pb-4 mb-4">
                    <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
                      Matriz de 11 Indicadores de Desempeño
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Indicadores SG-SST — Servicios de Limpieza Técnica en Restaurantes
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase">
                          <th className="p-3">Nombre del Indicador</th>
                          <th className="p-3">Categoría</th>
                          <th className="p-3">Definición / Aplicación en J&V</th>
                          <th className="p-3">Fórmula de Cálculo</th>
                          <th className="p-3">Periodicidad</th>
                          <th className="p-3">Fuente Sugerida</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {structuredData.items.map((row: any, i: number) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 font-bold text-slate-900 whitespace-nowrap">{row.name}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                                row.category === 'Resultado' ? 'bg-amber-100 text-amber-800' :
                                row.category === 'Proceso' ? 'bg-sky-100 text-sky-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {row.category}
                              </span>
                            </td>
                            <td className="p-3 text-slate-700 max-w-xs">{row.objectiveApplied}</td>
                            <td className="p-3 font-mono text-[11px] text-slate-800 bg-slate-50/80 p-2 rounded max-w-xs">
                              {row.formula}
                            </td>
                            <td className="p-3 font-medium text-slate-700 whitespace-nowrap">{row.periodicity}</td>
                            <td className="p-3 text-slate-600 max-w-xs">{row.source}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* If it's Matriz Legal */}
              {document.extractedDataKey === 'matriz_legal_colombia' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                  <div className="border-b border-slate-200 pb-4 mb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block">
                        20 Normas Obligatorias en Colombia
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Matriz Legal SG-SST — J&V Limpia Plus S.A.S.
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      Asesoría: {structuredData.advisor}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase">
                          <th className="p-2.5 w-10 text-center">N.°</th>
                          <th className="p-2.5">Norma / Año</th>
                          <th className="p-2.5">Artículo</th>
                          <th className="p-2.5">Tema</th>
                          <th className="p-2.5">Requisito Legal Aplicable</th>
                          <th className="p-2.5">Aplicabilidad en J&V</th>
                          <th className="p-2.5">Evidencia</th>
                          <th className="p-2.5 text-center">Fuente</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {structuredData.items.map((row: any) => (
                          <tr key={row.number} className="hover:bg-slate-50 transition-colors">
                            <td className="p-2.5 font-mono text-center font-bold text-slate-600">{row.number}</td>
                            <td className="p-2.5 font-bold text-slate-900 whitespace-nowrap">{row.normYear}</td>
                            <td className="p-2.5 font-mono text-slate-600 whitespace-nowrap">{row.article}</td>
                            <td className="p-2.5 text-slate-800 font-medium">{row.theme}</td>
                            <td className="p-2.5 text-slate-700 max-w-sm">{row.requirement}</td>
                            <td className="p-2.5 text-slate-700 font-medium">{row.applicability}</td>
                            <td className="p-2.5 text-slate-600">{row.evidence}</td>
                            <td className="p-2.5 text-center">
                              {row.suinLink && (
                                <a
                                  href={row.suinLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sky-600 hover:text-sky-800 inline-flex items-center gap-0.5 font-mono text-[10px]"
                                  title="Ver en SUIN-Juriscol"
                                >
                                  SUIN <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* If it's Matriz GTC 45 */}
              {document.extractedDataKey === 'matriz_gtc45' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                  <div className="border-b border-slate-200 pb-4 mb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block">
                        Código: {structuredData.code} · Versión: {structuredData.version}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Matriz GTC 45 — Identificación de Peligros y Valoración de Riesgos
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Cargo evaluado: <strong>{structuredData.targetPosition}</strong>
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      Actualización: {structuredData.date}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {structuredData.risks.map((risk: any, idx: number) => (
                      <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">#{idx + 1} {risk.classification}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-xs text-slate-600">{risk.task}</span>
                          </div>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            risk.nrAcceptability.includes('I -') ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {risk.nrAcceptability}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Descripción del Peligro</span>
                            <p className="text-slate-800 font-medium">{risk.hazardDescription}</p>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Efectos Posibles</span>
                            <p className="text-slate-700">{risk.possibleEffects}</p>
                          </div>
                          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                            <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-1">Cálculo GTC 45</span>
                            <div className="flex items-center gap-2 text-xs font-mono">
                              <span>ND: <strong>{risk.nd}</strong></span>
                              <span>· NE: <strong>{risk.ne}</strong></span>
                              <span>· NP: <strong>{risk.np}</strong> ({risk.npInterpretation})</span>
                              <span>· NR: <strong className="text-red-700">{risk.nr}</strong></span>
                            </div>
                          </div>
                        </div>

                        {/* Controls & Intervention */}
                        <div className="bg-white rounded-lg p-3 border border-slate-200 text-xs space-y-1.5">
                          <span className="text-slate-500 font-semibold block text-[11px]">Medidas de Intervención Establecidas:</span>
                          {risk.intervention.elimination && (
                            <p><strong className="text-slate-700">Eliminación:</strong> {risk.intervention.elimination}</p>
                          )}
                          {risk.intervention.substitution && (
                            <p><strong className="text-slate-700">Sustitución:</strong> {risk.intervention.substitution}</p>
                          )}
                          {risk.intervention.engineering && (
                            <p><strong className="text-slate-700">Controles de Ingeniería:</strong> {risk.intervention.engineering}</p>
                          )}
                          {risk.intervention.administrative && (
                            <p><strong className="text-slate-700">Controles Administrativos:</strong> {risk.intervention.administrative}</p>
                          )}
                          {risk.intervention.epp && (
                            <p><strong className="text-slate-700">EPP Requerido:</strong> {risk.intervention.epp}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* If it's Plan de Capacitación */}
              {document.extractedDataKey === 'plan_capacitacion_2027' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                  <div className="border-b border-slate-200 pb-4 mb-4">
                    <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider block">
                      Plan Anual de Capacitación 2027 (12 Módulos Mensuales)
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Cronograma Formativo Técnico para Prevención de Riesgos Clase V
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase">
                          <th className="p-3">Mes</th>
                          <th className="p-3">Temática</th>
                          <th className="p-3">Objetivo de Aprendizaje</th>
                          <th className="p-3">Modalidad</th>
                          <th className="p-3">Evaluación</th>
                          <th className="p-3">Facilitador</th>
                          <th className="p-3 text-center">Estado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {structuredData.items.map((row: any, i: number) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 font-mono font-bold text-sky-800 whitespace-nowrap">{row.date}</td>
                            <td className="p-3 font-bold text-slate-900">{row.theme}</td>
                            <td className="p-3 text-slate-700 max-w-sm">{row.objective}</td>
                            <td className="p-3 text-slate-600 whitespace-nowrap">{row.modality}</td>
                            <td className="p-3 text-slate-600">{row.evaluation}</td>
                            <td className="p-3 text-slate-700 font-medium">{row.facilitator}</td>
                            <td className="p-3 text-center">
                              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* If it's Plan Anual de Trabajo 2027 */}
              {document.extractedDataKey === 'plan_anual_2027' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                  <div className="border-b border-slate-200 pb-4 mb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
                        Presupuesto Asignado: {structuredData.totalBudget} · Ciclo PHVA
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Plan Anual de Trabajo SG-SST — Vigencia 2027
                      </h3>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase">
                          <th className="p-3">Ciclo</th>
                          <th className="p-3">Objetivo Específico</th>
                          <th className="p-3">Actividad / Tarea</th>
                          <th className="p-3">Meta / Resultado Esperado</th>
                          <th className="p-3">Responsable</th>
                          <th className="p-3">Presupuesto</th>
                          <th className="p-3">Meses</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {structuredData.activities.map((act: any, i: number) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                act.cycle === 'PLANEAR' ? 'bg-blue-100 text-blue-800' :
                                act.cycle === 'HACER' ? 'bg-amber-100 text-amber-800' :
                                act.cycle === 'VERIFICAR' ? 'bg-purple-100 text-purple-800' :
                                'bg-emerald-100 text-emerald-800'
                              }`}>
                                {act.cycle}
                              </span>
                            </td>
                            <td className="p-3 font-medium text-slate-900">{act.objective}</td>
                            <td className="p-3 text-slate-700">{act.activity}</td>
                            <td className="p-3 text-slate-600">{act.expectedResult}</td>
                            <td className="p-3 text-slate-700 font-medium">{act.responsible}</td>
                            <td className="p-3 font-mono text-slate-900 font-bold whitespace-nowrap">{act.budgetEstimated}</td>
                            <td className="p-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">{act.schedule.join(', ')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* If it's Auditoría SG-SST */}
              {document.extractedDataKey === 'auditoria_sgsst' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs max-w-4xl mx-auto space-y-6">
                  <div className="border-b border-slate-200 pb-4">
                    <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider block">
                      Auditor Líder: {structuredData.proposedLeadAuditor} · Equipo: {structuredData.auditTeam}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      Protocolo de Auditoría Interna del SG-SST — Vigencia 2026
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Criterios: {structuredData.criteria}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                      6 Recomendaciones Prioritarias para la Operación de J&V:
                    </h4>
                    <div className="space-y-2.5">
                      {structuredData.recommendations.map((rec: string, i: number) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-xs text-slate-800 font-medium">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Fallback structured view for general documents */}
              {!['objetivos_sgsst', 'politica_sgsst', 'indicadores_sgsst', 'matriz_legal_colombia', 'matriz_gtc45', 'plan_capacitacion_2027', 'plan_anual_2027', 'auditoria_sgsst'].includes(document.extractedDataKey || '') && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 text-center max-w-lg mx-auto">
                  <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">{document.title}</h3>
                  <p className="text-xs text-slate-600 mb-4">{document.description}</p>
                  <button
                    onClick={() => setActiveViewMode('pdf')}
                    className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
                  >
                    Ver archivo original en PDF
                  </button>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-5 py-3 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 no-print">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-sky-600 shrink-0" />
            <span>J&V Limpia Plus S.A.S. — Sistema de Gestión Documental Empresarial (Medellín)</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => onDownload(document)}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
            >
              Descargar {document.format}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
