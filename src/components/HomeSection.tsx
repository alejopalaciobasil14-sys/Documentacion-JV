import React from 'react';
import { DocumentItem } from '../types/document';
import { DOCUMENT_CATEGORIES } from '../data/categories';
import { COMPANY_INFO } from '../data/companyInfo';
import { DocumentMetrics } from '../services/documentStore';
import { CategoryCard } from './CategoryCard';
import { DocumentCard } from './DocumentCard';
import { 
  FolderTree, Shield, FileCheck, ArrowRight, Award, 
  Layers, HardHat, FileText, CheckCircle2, ChevronRight, Eye
} from 'lucide-react';

interface HomeSectionProps {
  metrics: DocumentMetrics;
  documents: DocumentItem[];
  onExploreDocuments: () => void;
  onSelectCategory: (categoryName: string) => void;
  onViewDocument: (doc: DocumentItem) => void;
  onDownloadDocument: (doc: DocumentItem) => void;
  onPrintDocument: (doc: DocumentItem) => void;
  setActiveTab: (tab: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  metrics,
  documents,
  onExploreDocuments,
  onSelectCategory,
  onViewDocument,
  onDownloadDocument,
  onPrintDocument,
  setActiveTab
}) => {
  // Highlight documents for quick consultation
  const featuredDocs = documents.slice(0, 3);

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Main Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            {/* Institutional Kicker with subtle unboxed metadata */}
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-4 tracking-wide">
              <span>SENA · Gestión Empresarial</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Medellín, Antioquia</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Riesgo Laboral Clase V</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 text-balance">
              PLATAFORMA DOCUMENTAL EMPRESARIAL
            </h1>

            <p className="text-base sm:text-lg font-semibold text-sky-200 mb-3 text-balance">
              J&V Limpia Plus S.A.S. — Gestión, organización y consulta de información empresarial.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl text-pretty">
              Bienvenido al sistema documental de J&V Limpia Plus S.A.S. Aquí podrás consultar de manera organizada la documentación relacionada con los procesos administrativos, operativos, de calidad y de gestión empresarial.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreDocuments}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg hover:shadow-sky-500/20 flex items-center gap-2.5 cursor-pointer"
              >
                <span>EXPLORAR DOCUMENTOS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('empresa')}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-colors flex items-center gap-2"
              >
                <span>Conoce Nuestra Empresa</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Official Logo Showcase in the Platform Entrance */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-white/95 rounded-3xl p-6 border-2 border-sky-400/30 shadow-2xl backdrop-blur-md max-w-xs text-center space-y-3">
              <div className="w-48 h-36 mx-auto flex items-center justify-center">
                <img 
                  src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.22.09_PM_c2b74bfa.jpeg" 
                  alt="Logo Oficial J&V Limpia Plus S.A.S." 
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div className="border-t border-slate-200/80 pt-2">
                <span className="text-[11px] font-bold text-slate-900 block uppercase tracking-wider">
                  Logo Oficial Registrado
                </span>
                <span className="text-[10px] text-slate-500 font-mono block">
                  NIT: 901907414-8 · Medellín
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Trust Banner inside Hero */}
        <div className="relative mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-300">
          <div>
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">Actividad Principal</span>
            <span className="font-semibold text-white">Limpieza técnica de campanas y ductos</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">Ubicación y Sede</span>
            <span className="font-semibold text-white">Medellín, Colombia</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">Representante Legal</span>
            <span className="font-semibold text-white">{COMPANY_INFO.legalRepresentative}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">Identificación Tributaria</span>
            <span className="font-mono font-bold text-sky-400">NIT: {COMPANY_INFO.nit}</span>
          </div>
        </div>
      </section>

      {/* 2. Panel de Control Documental (Automatic Live Indicators) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Panel de Control Documental
            </h2>
            <p className="text-xs text-slate-500">
              Métricas calculadas en tiempo real a partir del acervo documental oficial.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Actualización: Vigencia 2026 – 2027
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 block">Total Documentos</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
                {metrics.totalDocs}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">archivos</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 block">Categorías</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
                {metrics.totalCategories}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">procesos</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 block">Formato PDF</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold font-mono text-sky-700 tabular-nums">
                {metrics.pdfCount}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">100% oficial</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 block">Word / Excel</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold font-mono text-slate-500 tabular-nums">
                {metrics.wordCount + metrics.excelCount}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">editables</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 block">Presupuesto SG-SST</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-xl font-bold font-mono text-emerald-700 tabular-nums">
                $3.8M
              </span>
              <span className="text-[10px] text-slate-400 font-mono">COP 2027</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 block">Personal Expuesto</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
                {metrics.exposedPersonnel}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">técnicos</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catálogo de Categorías Documentales */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Categorías Documentales
            </h2>
            <p className="text-xs text-slate-500">
              Estructuradas con base en la documentación técnica y legal de J&V Limpia Plus S.A.S.
            </p>
          </div>
          <button
            onClick={onExploreDocuments}
            className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1"
          >
            <span>Ver todo el catálogo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENT_CATEGORIES.map((cat) => {
            const count = documents.filter((d) => d.category === cat.name).length;
            if (count === 0) return null; // No vacías
            return (
              <CategoryCard
                key={cat.id}
                category={cat}
                count={count}
                onSelect={(catName) => {
                  onSelectCategory(catName);
                  setActiveTab('documentos');
                }}
              />
            );
          })}
        </div>
      </section>

      {/* 4. Documentación Destacada y Reciente */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Documentos Principales del Sistema
            </h2>
            <p className="text-xs text-slate-500">
              Archivos fundamentales aprobados por la gerencia y el equipo técnico asesor.
            </p>
          </div>
          <button
            onClick={onExploreDocuments}
            className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1"
          >
            <span>Explorar los {documents.length} archivos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDocs.map((doc) => (
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

      {/* 5. Enterprise Methodology & SENA Project Banner */}
      <section className="bg-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold font-mono text-sky-800 uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Proyecto de Gestión Empresarial · SENA</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-balance">
              Garantía de Cumplimiento Técnico, Normativo y Operativo
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-pretty">
              Esta plataforma consolida la totalidad del sistema de gestión para <strong>J&V Limpia Plus S.A.S.</strong>, garantizando que los técnicos en limpieza de ductos y extractores en Medellín cuenten con protocolos estrictos bajo la metodología <strong>GTC 45</strong>, el ciclo <strong>PHVA 2027</strong> y las directrices del <strong>Decreto 1072 de 2015</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Archivos Originales</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Visor y Descarga Verificable</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Persistencia y Administración</span>
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 text-xs space-y-3 shadow-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-slate-500 border-b pb-2">
              Datos Institucionales de Entrega
            </h4>
            <div>
              <span className="text-slate-400 block text-[10px]">Empresa</span>
              <span className="font-semibold text-slate-800">J&V Limpia Plus S.A.S.</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Autores / Formuladores</span>
              <span className="font-semibold text-slate-800">Alejandro Palacio Basil & Ricardo Correa Ledesma</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Programa</span>
              <span className="text-slate-700">Tecnología en Gestión Empresarial</span>
            </div>
            <button
              onClick={() => setActiveTab('instalacion')}
              className="w-full py-2 bg-slate-900 text-white rounded-lg font-semibold text-center hover:bg-slate-800 transition-colors"
            >
              Manual para Instructora
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
