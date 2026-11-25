import React from 'react';
import { COMPANY_INFO, COMPANY_LOGO_PATH } from '../data/companyInfo';
import { ShieldCheck, MapPin, Phone, MessageSquare, Award, ExternalLink } from 'lucide-react';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Empresa & Identidad */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/95 p-1 border border-sky-400/30 flex items-center justify-center shrink-0 shadow-xs">
                <img 
                  src={COMPANY_LOGO_PATH} 
                  alt="Logo J&V" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-bold text-base block">{COMPANY_INFO.legalName}</span>
                <span className="text-xs text-slate-400 font-mono">NIT: {COMPANY_INFO.nit}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_INFO.slogan}
            </p>
            <div className="pt-2 text-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.primaryAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.cellphone} · {COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/573246222819`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp: {COMPANY_INFO.whatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navegación de la Plataforma */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('inicio')} className="hover:text-white transition-colors">
                  Inicio Institucional
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('documentos')} className="hover:text-white transition-colors">
                  Catálogo Documental Completo
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gestion')} className="hover:text-white transition-colors">
                  Gestión Empresarial y PHVA
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('empresa')} className="hover:text-white transition-colors">
                  Conoce Nuestra Empresa
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('manual-usuario')} className="hover:text-white transition-colors">
                  Manual de Usuario
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('instalacion')} className="hover:text-white transition-colors">
                  Manual de Instalación y Desinstalación
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Marco Normativo y Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Marco Legal SG-SST
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-sky-400">·</span>
                <span>Decreto 1072 de 2015 (Decreto Único Reglamentario)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-sky-400">·</span>
                <span>Resolución 0312 de 2019 (Estándares Mínimos)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-sky-400">·</span>
                <span>Resolución 4272 de 2021 (Trabajo Seguro en Alturas)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-sky-400">·</span>
                <span>Decreto 1496 de 2018 (Sistema Globalmente Armonizado)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-sky-400">·</span>
                <span>Guía Técnica Colombiana GTC 45 (2012)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contexto Académico SENA */}
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                Proyecto SENA
              </h4>
            </div>
            <p className="text-xs text-slate-300 mb-2">
              <strong>{COMPANY_INFO.academicContext.institution}</strong><br />
              {COMPANY_INFO.academicContext.program}
            </p>
            <p className="text-[11px] text-slate-400 mb-3">
              {COMPANY_INFO.academicContext.deliverableType}
            </p>
            <div className="text-[11px] text-slate-400 border-t border-slate-700 pt-2 space-y-0.5">
              <span className="block text-slate-300 font-medium">Autores / Formuladores:</span>
              {COMPANY_INFO.academicContext.authors.map((author, i) => (
                <span key={i} className="block text-slate-400">· {author}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>
              © {new Date().getFullYear()} J&V Limpia Plus S.A.S. — Todos los derechos reservados.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Riesgo Laboral: {COMPANY_INFO.riskClass}</span>
            <span>·</span>
            <span>Medellín, Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
