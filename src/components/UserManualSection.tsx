import React from 'react';
import { 
  BookOpen, Search, Eye, Download, Printer, Filter, 
  Home, ShieldAlert, FolderLock, CheckCircle2, ArrowRight
} from 'lucide-react';

interface UserManualSectionProps {
  setActiveTab: (tab: string) => void;
  onOpenAdmin: () => void;
}

export const UserManualSection: React.FC<UserManualSectionProps> = ({
  setActiveTab,
  onOpenAdmin
}) => {
  const steps = [
    {
      number: 1,
      title: 'Cómo ingresar a la plataforma',
      icon: Home,
      instructions: 'La plataforma es una aplicación web empresarial accesible desde cualquier navegador moderno (Google Chrome, Firefox, Safari o Microsoft Edge). Al cargar la URL institucional, ingresarás automáticamente a la página principal con el resumen ejecutivo de J&V Limpia Plus S.A.S.'
    },
    {
      number: 2,
      title: 'Cómo navegar por las categorías',
      icon: BookOpen,
      instructions: 'En la sección "Inicio" o en la pestaña "Documentación", encontrarás las 5 categorías oficiales. Haz clic en "Ver documentos" en cualquier tarjeta de categoría para filtrar instantáneamente el catálogo y consultar los archivos correspondientes a esa área.'
    },
    {
      number: 3,
      title: 'Cómo buscar documentos',
      icon: Search,
      instructions: 'En el encabezado del catálogo documental encontrarás una barra de búsqueda en tiempo real. Puedes escribir el nombre del documento, su código oficial (ej: GTH-AN-06), el nombre del químico, la norma legal o palabras clave como "auditoría", "alturas" o "COPASST". Los resultados se filtran dinámicamente.'
    },
    {
      number: 4,
      title: 'Cómo visualizar archivos',
      icon: Eye,
      instructions: 'Cada documento cuenta con un botón [VISUALIZAR]. Al hacer clic, se abre el visor documental integrado donde podrás leer el archivo PDF original de forma directa o alternar a la pestaña "Ficha y Datos" para explorar las tablas estructuradas, cálculos GTC 45, matrices legales o indicadores sin salir de la plataforma.'
    },
    {
      number: 5,
      title: 'Cómo descargar documentos',
      icon: Download,
      instructions: 'Para guardar una copia en tu computador o dispositivo móvil, pulsa el botón [DESCARGAR] presente en la tarjeta del documento o en la barra superior del visor. El archivo se descargará de inmediato conservando su formato PDF y nombre original oficial.'
    },
    {
      number: 6,
      title: 'Cómo imprimir un documento',
      icon: Printer,
      instructions: 'Haz clic en el botón [IMPRIMIR] en la tarjeta o dentro del visor. La plataforma activa automáticamente una vista de impresión limpia que oculta los menús de navegación, barras laterales y botones, conservando el membrete institucional de J&V Limpia Plus S.A.S. y la información reglamentaria del SENA.'
    },
    {
      number: 7,
      title: 'Cómo utilizar los filtros y ordenamiento',
      icon: Filter,
      instructions: 'En el catálogo puedes combinar filtros por categoría (botones superiores), formato de archivo (PDF, Word, Excel) y criterio de orden (por nombre alfabético, por código documental o por fecha). Si deseas volver a ver todos los documentos, pulsa el botón "Restablecer filtros".'
    },
    {
      number: 8,
      title: 'Cómo regresar al inicio',
      icon: Home,
      instructions: 'Puedes regresar a la página principal en cualquier momento haciendo clic en el enlace "Inicio" del menú de navegación superior o pulsando directamente sobre el logotipo "J&V Limpia Plus S.A.S."'
    },
    {
      number: 9,
      title: 'Cómo identificar archivos no disponibles o en proceso',
      icon: ShieldAlert,
      instructions: 'La plataforma identifica con total transparencia los documentos originales verificados mediante la etiqueta de archivo original. Si un documento complementario estuviese en proceso de actualización o no contara con visualizador nativo compatible, la plataforma te lo indicará claramente con una alerta informativa y la opción de descarga alternativa.'
    },
    {
      number: 10,
      title: 'Cómo importar documentos y administrarlos con auto-orden',
      icon: FolderLock,
      instructions: 'Haz clic en el botón [Importar Documento] en el catálogo o en [Administrar]. Puedes arrastrar o seleccionar un archivo de tu computador (PDF, Word, Excel). El sistema detecta automáticamente su formato, sugiere la categoría idónea, asigna el código correlativo oficial y lo acomoda en orden dentro de su categoría empresarial. Toda la información queda guardada de manera persistente en tu navegador.'
    }
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-wide">
          <span>Guía de Uso del Sistema</span>
          <span>/</span>
          <span>Instrucciones Oficiales</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          MANUAL DE USUARIO
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
          Instrucciones paso a paso para la consulta, búsqueda, visualización, descarga, impresión y control de documentos de J&V Limpia Plus S.A.S.
        </p>
      </div>

      {/* Steps List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-sky-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                {step.number}
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-sky-600 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed text-pretty">
                  {step.instructions}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Action Banner */}
      <div className="bg-sky-50 rounded-2xl border border-sky-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-sky-950">¿Listo para probar las funcionalidades?</h4>
          <p className="text-xs text-sky-800 mt-0.5">
            Ingresa directamente al catálogo documental o prueba el módulo de administración empresarial.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('documentos')}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Ir al Catálogo
          </button>
          <button
            onClick={onOpenAdmin}
            className="px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-lg hover:bg-sky-700 transition-colors"
          >
            Abrir Administración
          </button>
        </div>
      </div>

    </div>
  );
};
