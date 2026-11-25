import React from 'react';
import { COMPANY_INFO, COMPANY_LOGO_PATH } from '../data/companyInfo';
import { 
  Building2, MapPin, Phone, MessageSquare, ShieldCheck, 
  Award, HardHat, Users, FileCheck, CheckCircle2, Clock
} from 'lucide-react';

export const CompanyInfoSection: React.FC = () => {
  return (
    <div className="space-y-10 pb-16">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-wide">
          <span>Identidad Corporativa</span>
          <span>/</span>
          <span>Información Oficial</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          CONOCE NUESTRA EMPRESA
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
          Ficha institucional de J&V Limpia Plus S.A.S., construida con base estricta en los documentos y registros oficiales de la organización.
        </p>
      </div>

      {/* Main Corporate Profile Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-white p-2 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
              <img 
                src={COMPANY_LOGO_PATH} 
                alt="Logo Oficial J&V Limpia Plus S.A.S." 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                {COMPANY_INFO.legalName}
              </h2>
              <p className="text-xs font-mono text-slate-500 mt-0.5">
                NIT: <strong className="text-slate-800">{COMPANY_INFO.nit}</strong> · Medellín, Antioquia, Colombia
              </p>
              <p className="text-xs text-sky-700 font-semibold mt-1">
                «{COMPANY_INFO.slogan}»
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <div className="bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-lg text-sky-900 font-semibold">
              Riesgo Laboral: {COMPANY_INFO.riskClass}
            </div>
            <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-emerald-900 font-semibold">
              SG-SST Decreto 1072/15
            </div>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-xs">
          
          {/* Card: Representación Legal */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Users className="w-4 h-4 text-sky-600" />
              <span>Representación Legal</span>
            </div>
            <p className="text-slate-800 font-semibold text-sm">
              {COMPANY_INFO.legalRepresentative}
            </p>
            <p className="text-slate-500 font-mono">
              Documento: {COMPANY_INFO.representativeId}
            </p>
            <p className="text-slate-500">
              Celular: {COMPANY_INFO.cellphone}
            </p>
          </div>

          {/* Card: Actividad Económica */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <HardHat className="w-4 h-4 text-sky-600" />
              <span>Actividad Económica</span>
            </div>
            <p className="text-slate-800 font-semibold">
              {COMPANY_INFO.economicActivity}
            </p>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              {COMPANY_INFO.economicActivityDetail}
            </p>
          </div>

          {/* Card: Sedes y Contacto */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Ubicación y Canales</span>
            </div>
            <p className="text-slate-700">
              <strong>Sede Principal:</strong> {COMPANY_INFO.primaryAddress}
            </p>
            <p className="text-slate-700">
              <strong>Sede Administrativa / Ref:</strong> {COMPANY_INFO.secondaryAddress}
            </p>
            <p className="text-slate-700">
              <strong>WhatsApp:</strong> {COMPANY_INFO.whatsapp}
            </p>
          </div>

        </div>
      </div>

      {/* Services and Technical Scope */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <h3 className="text-base font-bold text-slate-900">
              Servicios Técnicos Especializados
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Conforme a la caracterización operativa de la empresa y la matriz de riesgos GTC 45, los servicios autorizados comprenden:
          </p>
          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Limpieza y desengrase técnico de campanas extractoras industriales de restaurantes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Mantenimiento preventivo, remoción de grasas y lavado a presión en sistemas de ductos.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Inspección de motores extractores, turbinas y filtros metálicos en cocinas comerciales.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Protocolo de trabajo en alturas con escaleras certificadas y delimitación perimetral.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">
              Equipo Formulador y Asesoría Técnica
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Profesionales y tecnólogos identificados en la documentación técnica oficial:
          </p>
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <p className="font-bold text-slate-900">Ricardo Correa Ledesma & Alejandro Palacio Basil</p>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Elaboración y actualización de la Matriz de Peligros GTC 45 (Código GTH-AN-06), Matriz Legal y documentación del SG-SST.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <p className="font-bold text-slate-900">León Gómez Zea</p>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Auditor líder propuesto para la evaluación de estándares mínimos del SG-SST (Octubre 2026).
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Corporate Declarations & Transparent Status */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Transparencia y Estado de Formalización Estratégica
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block mb-1">Misión y Visión</span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              En proceso de redacción formal en el plan estratégico corporativo 2027. No se incorporan enunciados ficticios sin aprobación previa de la Junta.
            </p>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded mt-2">
              <Clock className="w-3 h-3" />
              <span>Pendiente de formalización</span>
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block mb-1">Valores Corporativos</span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Autocuidado, rigor técnico, cumplimiento legal y responsabilidad operativa, sustentados en la Política de Seguridad y Salud en el Trabajo.
            </p>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-2">
              <CheckCircle2 className="w-3 h-3" />
              <span>Sustentados en SST-POL-01</span>
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block mb-1">Certificaciones Externas</span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Cumplimiento de estándares mínimos de la Resolución 0312 de 2019 en evaluación interna, sin certificación ISO externa vigente a la fecha.
            </p>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded mt-2">
              <CheckCircle2 className="w-3 h-3" />
              <span>Estándares Res. 0312</span>
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};
