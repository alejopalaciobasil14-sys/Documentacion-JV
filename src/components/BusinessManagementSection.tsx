import React, { useState } from 'react';
import { STRUCTURED_DOCUMENTS_DATA } from '../data/structuredDocumentData';
import { DocumentItem } from '../types/document';
import { 
  Briefcase, ShieldAlert, Scale, GraduationCap, LineChart, 
  CheckCircle2, ExternalLink, Calendar, DollarSign, Users, FileText
} from 'lucide-react';

interface BusinessManagementSectionProps {
  documents: DocumentItem[];
  onViewDocument: (doc: DocumentItem) => void;
  onDownloadDocument: (doc: DocumentItem) => void;
}

export const BusinessManagementSection: React.FC<BusinessManagementSectionProps> = ({
  documents,
  onViewDocument,
  onDownloadDocument
}) => {
  const [activeProcessTab, setActiveProcessTab] = useState<'phva' | 'gtc45' | 'legal' | 'indicadores' | 'capacitacion'>('phva');

  const findDocByCode = (code: string) => documents.find(d => d.code === code);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-wide">
              <span>J&V Limpia Plus S.A.S.</span>
              <span>/</span>
              <span>Organización de Procesos</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Gestión Empresarial y Operativa
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Estructura formal de los procesos de planeación, seguridad y salud en el trabajo, mitigación de riesgos operativos, auditoría y cumplimiento normativo en Medellín, Colombia.
            </p>
          </div>
        </div>
      </div>

      {/* Process Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveProcessTab('phva')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeProcessTab === 'phva'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-sky-400" />
          <span>Plan Anual PHVA 2027</span>
        </button>

        <button
          onClick={() => setActiveProcessTab('gtc45')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeProcessTab === 'gtc45'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          <span>Matriz GTC 45 (Riesgos)</span>
        </button>

        <button
          onClick={() => setActiveProcessTab('legal')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeProcessTab === 'legal'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Scale className="w-3.5 h-3.5 text-emerald-400" />
          <span>Matriz Legal Colombiana</span>
        </button>

        <button
          onClick={() => setActiveProcessTab('indicadores')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeProcessTab === 'indicadores'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <LineChart className="w-3.5 h-3.5 text-cyan-400" />
          <span>11 Indicadores SG-SST</span>
        </button>

        <button
          onClick={() => setActiveProcessTab('capacitacion')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeProcessTab === 'capacitacion'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
          <span>Plan Capacitación 2027</span>
        </button>
      </div>

      {/* TAB 1: PHVA PLAN ANUAL */}
      {activeProcessTab === 'phva' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-sky-700 uppercase tracking-wide">
                Código: SST-PLA-01 · Vigencia Enero – Diciembre 2027
              </span>
              <h2 className="text-lg font-bold text-slate-900 mt-1">
                Plan Anual de Trabajo SG-SST — Metodología PHVA
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Presupuesto oficial proyectado: <strong className="text-emerald-700 font-mono">COP $3.800.000</strong> asignado para prevención, inspección, EPP y capacitación.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {findDocByCode('SST-PLA-01') && (
                <button
                  onClick={() => onViewDocument(findDocByCode('SST-PLA-01')!)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Documento PDF</span>
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase">
                    <th className="p-3">Fase PHVA</th>
                    <th className="p-3">Objetivo Específico</th>
                    <th className="p-3">Actividad / Tarea Operativa</th>
                    <th className="p-3">Meta / Resultado</th>
                    <th className="p-3">Responsable</th>
                    <th className="p-3 text-right">Presupuesto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {STRUCTURED_DOCUMENTS_DATA.plan_anual_2027.activities.map((act, i) => (
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
                      <td className="p-3 font-semibold text-slate-900 max-w-xs">{act.objective}</td>
                      <td className="p-3 text-slate-700 max-w-md">{act.activity}</td>
                      <td className="p-3 text-slate-600 max-w-xs">{act.expectedResult}</td>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">{act.responsible}</td>
                      <td className="p-3 font-mono font-bold text-slate-900 text-right whitespace-nowrap">{act.budgetEstimated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MATRIZ GTC 45 */}
      {activeProcessTab === 'gtc45' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-amber-700 uppercase tracking-wide">
                Código: GTH-AN-06 · Versión 01 (14/09/2026)
              </span>
              <h2 className="text-lg font-bold text-slate-900 mt-1">
                Matriz de Identificación de Peligros y Valoración de Riesgos (GTC 45)
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Elaborada por <strong>Alejandro Palacio Basil</strong> y <strong>Ricardo Correa Ledesma</strong> para el cargo <strong>Técnico de Limpieza Técnica</strong> (4 expuestos en restaurantes).
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {findDocByCode('GTH-AN-06') && (
                <button
                  onClick={() => onViewDocument(findDocByCode('GTH-AN-06')!)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Matriz GTC 45 Original</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {STRUCTURED_DOCUMENTS_DATA.matriz_gtc45.risks.map((risk, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500">#{idx + 1}</span>
                    <span className="text-sm font-bold text-slate-900">{risk.classification}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-xs text-slate-600">{risk.task}</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    risk.nrAcceptability.includes('I -') ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {risk.nrAcceptability}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-4">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Descripción del Peligro</span>
                    <p className="text-slate-800 font-medium mt-0.5">{risk.hazardDescription}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Efectos Posibles</span>
                    <p className="text-slate-700 mt-0.5">{risk.possibleEffects}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold mb-1">Valoración GTC 45</span>
                    <p className="font-mono text-xs text-slate-800">
                      ND: <strong>{risk.nd}</strong> · NE: <strong>{risk.ne}</strong> · NP: <strong>{risk.np} ({risk.npInterpretation})</strong> · NC: <strong>{risk.nc}</strong> · NR: <strong className="text-red-700 font-bold">{risk.nr}</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <span className="font-semibold text-slate-900 block text-[11px]">Medidas de Intervención Establecidas:</span>
                  {risk.intervention.elimination && (
                    <p><strong className="text-slate-700">Eliminación:</strong> {risk.intervention.elimination}</p>
                  )}
                  {risk.intervention.substitution && (
                    <p><strong className="text-slate-700">Sustitución:</strong> {risk.intervention.substitution}</p>
                  )}
                  {risk.intervention.engineering && (
                    <p><strong className="text-slate-700">Ingeniería:</strong> {risk.intervention.engineering}</p>
                  )}
                  {risk.intervention.administrative && (
                    <p><strong className="text-slate-700">Administrativos:</strong> {risk.intervention.administrative}</p>
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

      {/* TAB 3: MATRIZ LEGAL */}
      {activeProcessTab === 'legal' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wide">
                Código: SST-MAT-LEG · Compendio de 20 Normas
              </span>
              <h2 className="text-lg font-bold text-slate-900 mt-1">
                Matriz de Requisitos Legales de Seguridad y Salud en el Trabajo
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Normativa vigente aplicable a J&V Limpia Plus S.A.S. con enlaces directos a las fuentes oficiales de <strong>SUIN-Juriscol</strong>.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {findDocByCode('SST-MAT-LEG') && (
                <button
                  onClick={() => onViewDocument(findDocByCode('SST-MAT-LEG')!)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Matriz Legal PDF</span>
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase">
                    <th className="p-3 w-10 text-center">N.°</th>
                    <th className="p-3">Norma / Año</th>
                    <th className="p-3">Artículo</th>
                    <th className="p-3">Tema</th>
                    <th className="p-3">Requisito Legal Aplicable</th>
                    <th className="p-3">Aplicabilidad J&V</th>
                    <th className="p-3 text-center">Enlace Oficial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {STRUCTURED_DOCUMENTS_DATA.matriz_legal_colombia.items.map((row) => (
                    <tr key={row.number} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-mono font-bold text-center text-slate-500">{row.number}</td>
                      <td className="p-3 font-bold text-slate-900 whitespace-nowrap">{row.normYear}</td>
                      <td className="p-3 font-mono text-slate-600 whitespace-nowrap">{row.article}</td>
                      <td className="p-3 font-semibold text-slate-800">{row.theme}</td>
                      <td className="p-3 text-slate-700 max-w-sm">{row.requirement}</td>
                      <td className="p-3 text-slate-700 whitespace-nowrap">{row.applicability}</td>
                      <td className="p-3 text-center whitespace-nowrap">
                        {row.suinLink && (
                          <a
                            href={row.suinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 font-mono text-[11px]"
                          >
                            <span>SUIN</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: INDICADORES SG-SST */}
      {activeProcessTab === 'indicadores' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-cyan-700 uppercase tracking-wide">
                Código: SST-IND-01 · Decreto 1072 de 2015
              </span>
              <h2 className="text-lg font-bold text-slate-900 mt-1">
                Matriz de 11 Indicadores de Desempeño SG-SST
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Seguimiento a la accidentalidad, ausentismo, cumplimiento de planes e inspecciones para el servicio técnico en restaurantes.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {findDocByCode('SST-IND-01') && (
                <button
                  onClick={() => onViewDocument(findDocByCode('SST-IND-01')!)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Indicadores PDF</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STRUCTURED_DOCUMENTS_DATA.indicadores_sgsst.items.map((ind, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-900 leading-tight">{ind.name}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      ind.category === 'Resultado' ? 'bg-amber-100 text-amber-800' :
                      ind.category === 'Proceso' ? 'bg-sky-100 text-sky-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {ind.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {ind.objectiveApplied}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block uppercase font-mono text-[9px]">Fórmula Oficial:</span>
                    <p className="font-mono text-slate-800 bg-slate-50 p-1.5 rounded border border-slate-100 mt-0.5">
                      {ind.formula}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-slate-500 pt-1">
                    <span>Periodicidad: <strong>{ind.periodicity}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: PLAN CAPACITACIÓN 2027 */}
      {activeProcessTab === 'capacitacion' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-indigo-700 uppercase tracking-wide">
                Código: SST-CAP-01 · 12 Módulos Anuales
              </span>
              <h2 className="text-lg font-bold text-slate-900 mt-1">
                Plan Anual de Capacitación SG-SST — Vigencia 2027
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Programa formativo obligatorio para técnicos en trabajo en alturas, químicos, EPP, primeros auxilios y extintores.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {findDocByCode('SST-CAP-01') && (
                <button
                  onClick={() => onViewDocument(findDocByCode('SST-CAP-01')!)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Plan PDF</span>
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase">
                    <th className="p-3">Mes</th>
                    <th className="p-3">Temática de Formación</th>
                    <th className="p-3">Objetivo Específico</th>
                    <th className="p-3">Modalidad</th>
                    <th className="p-3">Mecanismo de Evaluación</th>
                    <th className="p-3">Facilitador</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {STRUCTURED_DOCUMENTS_DATA.plan_capacitacion_2027.items.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-mono font-bold text-sky-800 whitespace-nowrap">{row.date}</td>
                      <td className="p-3 font-bold text-slate-900">{row.theme}</td>
                      <td className="p-3 text-slate-700 max-w-sm">{row.objective}</td>
                      <td className="p-3 text-slate-600 whitespace-nowrap">{row.modality}</td>
                      <td className="p-3 text-slate-600">{row.evaluation}</td>
                      <td className="p-3 text-slate-700 font-medium">{row.facilitator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
