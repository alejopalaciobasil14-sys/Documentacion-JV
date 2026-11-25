import React, { useState } from 'react';
import { Shield, Menu, X, FolderLock, PlusCircle, HelpCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAdmin: () => void;
  onOpenHelp: () => void;
  totalDocs: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAdmin,
  onOpenHelp,
  totalDocs
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'documentos', label: 'Documentación' },
    { id: 'gestion', label: 'Gestión Empresarial' },
    { id: 'empresa', label: 'Nuestra Empresa' },
    { id: 'manual-usuario', label: 'Manual de Usuario' },
    { id: 'instalacion', label: 'Instalación' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          
          {/* Zone 1: Single-element brand wordmark with Official Logo */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 text-left text-white hover:text-sky-300 transition-colors shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-white/95 p-1 border border-sky-400/30 flex items-center justify-center shrink-0 shadow-xs">
              <img 
                src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.22.09_PM_c2b74bfa.jpeg" 
                alt="Logo J&V Limpia Plus S.A.S." 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white whitespace-nowrap block leading-tight">
                J&V Limpia Plus S.A.S.
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-medium uppercase block leading-tight">
                Plataforma Documental
              </span>
            </div>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-1 hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  activeTab === link.id
                    ? 'border-sky-400 text-sky-400'
                    : 'border-transparent text-slate-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary action button & utilities */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenHelp}
              title="Centro de Ayuda y Contacto"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-sky-400" />
              <span className="hidden xl:inline">Ayuda</span>
            </button>

            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <FolderLock className="w-3.5 h-3.5 text-slate-900" />
              <span>Administrar</span>
              <span className="bg-sky-950/20 text-slate-900 px-1.5 py-0.5 rounded text-[10px] font-mono tabular-nums">
                {totalDocs}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === link.id
                  ? 'bg-slate-800 text-sky-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHelp();
              }}
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-sky-400 py-1"
            >
              <HelpCircle className="w-4 h-4 text-sky-400" />
              <span>Centro de Ayuda</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
