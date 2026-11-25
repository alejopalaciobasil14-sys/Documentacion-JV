import React from 'react';
import { Terminal, Laptop, Trash2, CheckCircle2, AlertTriangle, ShieldCheck, HardDrive, RefreshCw } from 'lucide-react';

export const InstallManualSection: React.FC = () => {
  return (
    <div className="space-y-10 pb-16">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-wide">
          <span>Guía Técnica para Evaluadores e Instructores SENA</span>
          <span>/</span>
          <span>Despliegue y Mantenimiento</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          MANUAL DE INSTALACIÓN Y DESINSTALACIÓN
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
          Instrucciones técnicas rigurosas para la ejecución, verificación en navegadores y desinstalación o depuración de datos locales.
        </p>
      </div>

      {/* PARTE 1: MANUAL DE INSTALACIÓN */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              MANUAL DE INSTALACIÓN Y PUESTA EN MARCHA
            </h2>
            <p className="text-xs text-slate-500">
              Arquitectura de aplicación web moderna SPA (Single Page Application) basada en React + TypeScript + Vite.
            </p>
          </div>
        </div>

        {/* Requisitos del sistema */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
            1. Requisitos del Sistema
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Navegador Web</span>
              <p className="text-slate-600 text-[11px]">
                Google Chrome 90+, Mozilla Firefox 88+, Microsoft Edge 90+ o Safari 14+. Soporta visores PDF nativos y localStorage.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Entorno de Ejecución Local</span>
              <p className="text-slate-600 text-[11px]">
                Node.js versión 18.x o 20.x LTS y gestor de paquetes npm versión 9+.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Resolución de Pantalla</span>
              <p className="text-slate-600 text-[11px]">
                Diseño 100% responsivo adaptable desde dispositivos móviles (360px) hasta computadores de escritorio y portátiles (1440px+).
              </p>
            </div>
          </div>
        </div>

        {/* Cómo acceder y cómo ejecutar */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
            2. Modalidades de Acceso y Ejecución
          </h3>

          <div className="space-y-4 text-xs">
            {/* Modalidad A */}
            <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-200 space-y-2">
              <span className="font-bold text-sky-950 block text-sm">
                Modalidad A: Acceso Directo Web en la Nube (No requiere instalación)
              </span>
              <p className="text-slate-700 leading-relaxed">
                Al ser una solución web alojada en servidores de Google AI Studio / Cloud Run, los usuarios e instructores no necesitan descargar instaladores pesados ni configurar bases de datos locales. Solo deben ingresar al enlace web provisto con cualquier navegador para acceder al catálogo completo con visor PDF en tiempo real.
              </p>
            </div>

            {/* Modalidad B */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="font-bold text-slate-900 block text-sm">
                Modalidad B: Ejecución en Entorno Local de Desarrollo (Para evaluación técnica del código)
              </span>
              <p className="text-slate-600">
                Si la instructora o evaluador desea ejecutar el proyecto directamente en su computador a partir del repositorio:
              </p>

              <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-[11px] space-y-2">
                <p className="text-slate-400"># 1. Clonar o descargar el código fuente</p>
                <p className="text-sky-400">cd plataforma-documental-jv-limpiaplus</p>
                <p className="text-slate-400"># 2. Instalar dependencias del proyecto</p>
                <p className="text-sky-400">npm install</p>
                <p className="text-slate-400"># 3. Iniciar el servidor local de desarrollo</p>
                <p className="text-sky-400">npm run dev</p>
                <p className="text-slate-400"># El servidor iniciará en http://localhost:3000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Verificación de funcionamiento */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
            3. Verificación de Correcto Funcionamiento
          </h3>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Verificación del Visor:</strong> Abrir la sección "Documentación" y pulsar [Visualizar] en cualquier tarjeta. El modal debe desplegar el PDF original o la tabla de datos técnicos de inmediato.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Verificación de Búsqueda:</strong> Escribir palabras como "químico" o "COPASST" en el buscador. El contador debe actualizarse y listar los expedientes exactos.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Verificación de Descarga:</strong> Pulsar [Descargar] en un documento para comprobar que el archivo se transfiere intacto con su nombre oficial.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PARTE 2: MANUAL DE DESINSTALACIÓN */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
            <Trash2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              MANUAL DE DESINSTALACIÓN Y DEPURACIÓN
            </h2>
            <p className="text-xs text-slate-500">
              Procedimiento transparente para el cierre de sesión, eliminación de archivos locales y gestión de datos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">
              1. Cierre y Salida de la Plataforma Web
            </h3>
            <p className="leading-relaxed text-slate-600">
              Para salir de la plataforma, simplemente cierra la pestaña o ventana del navegador web. Al ser una aplicación cliente web, no deja servicios en segundo plano ni procesos ocultos residentes en la memoria del sistema operativo del usuario.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">
              2. Eliminación de Archivos en Ejecución Local
            </h3>
            <p className="leading-relaxed text-slate-600">
              Si se ejecutó mediante Node.js en consola local, presione <kbd className="bg-slate-100 border px-1 py-0.5 rounded font-mono">Ctrl + C</kbd> para detener el servidor de desarrollo y elimine la carpeta del proyecto en su explorador de archivos.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">
              3. ¿Qué sucede con los documentos y datos almacenados?
            </h3>
            <p className="leading-relaxed text-slate-600">
              Los 11 documentos oficiales originales forman parte del código y se cargan automáticamente. Los documentos nuevos agregados por el usuario desde el panel "Administrar" se almacenan en el <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-800">localStorage</code> del navegador. Para eliminarlos, puede usar el botón "Restablecer a documentos oficiales" en el panel o borrar las cookies y datos del sitio en la configuración del navegador.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">
              4. Aclaración de Instalador Nativo
            </h3>
            <p className="leading-relaxed text-slate-600">
              La plataforma ha sido desarrollada como una <strong>solución web empresarial multiplataforma</strong>, cumpliendo con los lineamientos del SENA para entornos accesibles sin necesidad de instalar ejecutables (.exe o .msi) que pudieran comprometer la seguridad del equipo evaluador.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
