import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { X, MessageSquare, Phone, MapPin, Mail, HelpCircle, FileCheck, CheckCircle2 } from 'lucide-react';

interface HelpSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpSupportModal: React.FC<HelpSupportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-400" />
            <h2 className="text-base font-bold text-white">
              Centro de Ayuda y Canales de Contacto
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-xs text-slate-700">
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              Atención Directa — J&V Limpia Plus S.A.S.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Comunícate con los canales oficiales de la empresa para resolver dudas sobre el sistema documental o solicitar servicios de limpieza técnica especializada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/573246222819"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-colors flex items-start gap-3"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-950 block">Canal Oficial WhatsApp</span>
                <span className="text-emerald-800 font-mono text-[11px] block mt-0.5">{COMPANY_INFO.whatsapp}</span>
                <span className="text-[10px] text-emerald-700 mt-1 block">Clic para chatear directamente</span>
              </div>
            </a>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Líneas Telefónicas</span>
              </div>
              <p className="text-slate-700 font-mono text-[11px]">Celular: {COMPANY_INFO.cellphone}</p>
              <p className="text-slate-700 font-mono text-[11px]">Fijo Medellín: {COMPANY_INFO.phone}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Sedes en Medellín, Colombia</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              • Sede operativa: {COMPANY_INFO.primaryAddress}<br />
              • Sede administrativa / ref: {COMPANY_INFO.secondaryAddress}
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Preguntas Frecuentes
            </h4>
            <div className="space-y-2">
              <details className="p-3 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                <summary className="font-semibold text-slate-900">¿Cómo descargo un archivo original?</summary>
                <p className="text-slate-600 mt-2 text-[11px] leading-relaxed">
                  Haz clic en el botón [Descargar] en la tarjeta del documento o en la barra superior del visor integrado. Se descargará el archivo PDF en su formato y resolución original.
                </p>
              </details>
              <details className="p-3 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                <summary className="font-semibold text-slate-900">¿Cómo imprimo con el membrete institucional?</summary>
                <p className="text-slate-600 mt-2 text-[11px] leading-relaxed">
                  Pulsa el botón [Imprimir]. La plataforma cuenta con estilos de impresión que eliminan automáticamente los menús y preparan el documento en hoja tamaño carta con el NIT y encabezado de J&V Limpia Plus S.A.S.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
