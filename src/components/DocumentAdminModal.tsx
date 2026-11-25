import React, { useState } from 'react';
import { DocumentItem, DocumentCategory } from '../types/document';
import { DOCUMENT_CATEGORIES } from '../data/categories';
import { 
  X, Plus, Trash2, Edit2, ShieldAlert, CheckCircle2, RotateCcw, 
  FileText, Upload, AlertCircle, Save, Info
} from 'lucide-react';

interface DocumentAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: DocumentItem[];
  onAddDocument: (doc: DocumentItem) => void;
  onUpdateDocument: (doc: DocumentItem) => void;
  onDeleteDocument: (docId: string) => void;
  onResetDefaults: () => void;
}

export const DocumentAdminModal: React.FC<DocumentAdminModalProps> = ({
  isOpen,
  onClose,
  documents,
  onAddDocument,
  onUpdateDocument,
  onDeleteDocument,
  onResetDefaults
}) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<DocumentCategory>(DOCUMENT_CATEGORIES[0].name);
  const [format, setFormat] = useState<'PDF' | 'Word' | 'Excel' | 'Otro'>('PDF');
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('Responsable del SG-SST');
  const [legalBasis, setLegalBasis] = useState('Decreto 1072 de 2015');
  const [date, setDate] = useState('2027');
  const [version, setVersion] = useState('01');
  const [tagsInput, setTagsInput] = useState('SST, Procedimiento');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Delete Confirmation State
  const [deleteConfirmDoc, setDeleteConfirmDoc] = useState<DocumentItem | null>(null);

  const resetForm = () => {
    setCode('');
    setTitle('');
    setCategory(DOCUMENT_CATEGORIES[0].name);
    setFormat('PDF');
    setDescription('');
    setResponsible('Responsable del SG-SST');
    setLegalBasis('Decreto 1072 de 2015');
    setDate('2027');
    setVersion('01');
    setTagsInput('SST, Procedimiento');
    setFormError('');
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEditClick = (doc: DocumentItem) => {
    setIsEditing(true);
    setEditingId(doc.id);
    setCode(doc.code);
    setTitle(doc.title);
    setCategory(doc.category);
    setFormat(doc.format);
    setDescription(doc.description);
    setResponsible(doc.responsible);
    setLegalBasis(doc.legalBasis || '');
    setDate(doc.date);
    setVersion(doc.version);
    setTagsInput(doc.tags.join(', '));
    setFormError('');
    setFormSuccess('');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !code.trim() || !description.trim()) {
      setFormError('Por favor complete los campos obligatorios: Código, Título y Descripción.');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    if (isEditing && editingId) {
      const existing = documents.find(d => d.id === editingId);
      const updatedDoc: DocumentItem = {
        id: editingId,
        code: code.trim().toUpperCase(),
        title: title.trim(),
        category,
        format,
        description: description.trim(),
        responsible: responsible.trim(),
        legalBasis: legalBasis.trim(),
        date: date.trim(),
        version: version.trim(),
        tags,
        filePath: existing?.filePath || '/assets/aistudio/POL_TICA_DE_SEGURIDAD_Y_SALUD_EN_EL_TRABAJO-_J_V_LIMPIA_PLUS_a151d538.pdf',
        isOriginal: existing?.isOriginal ?? false,
        extractedDataKey: existing?.extractedDataKey
      };
      onUpdateDocument(updatedDoc);
      setFormSuccess('Documento actualizado correctamente en la base documental.');
    } else {
      const newDoc: DocumentItem = {
        id: `doc-custom-${Date.now()}`,
        code: code.trim().toUpperCase(),
        title: title.trim(),
        category,
        format,
        description: description.trim(),
        responsible: responsible.trim(),
        legalBasis: legalBasis.trim(),
        date: date.trim(),
        version: version.trim(),
        tags,
        filePath: '/assets/aistudio/POL_TICA_DE_SEGURIDAD_Y_SALUD_EN_EL_TRABAJO-_J_V_LIMPIA_PLUS_a151d538.pdf', // default sample fallback
        isOriginal: false
      };
      onAddDocument(newDoc);
      setFormSuccess('Nuevo documento registrado y guardado en almacenamiento local.');
    }

    setTimeout(() => {
      resetForm();
      setFormSuccess('');
    }, 1800);
  };

  const executeDelete = () => {
    if (deleteConfirmDoc) {
      onDeleteDocument(deleteConfirmDoc.id);
      setDeleteConfirmDoc(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Official Logo */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/95 p-1 border border-sky-400/30 flex items-center justify-center shrink-0 shadow-xs">
              <img 
                src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.22.09_PM_c2b74bfa.jpeg" 
                alt="Logo J&V" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wide block">
                J&V Limpia Plus S.A.S. · Módulo de Control Documental
              </span>
              <h2 className="text-lg font-bold text-white">
                Panel Administrativo y Registro de Documentos
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Storage Information Disclaimer */}
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-950 flex items-start gap-3">
            <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">
                Arquitectura de Almacenamiento Local (Local Persistence)
              </p>
              <p className="text-sky-800 leading-relaxed">
                Este módulo permite agregar nuevos documentos, editar su codificación y organizarlos por categorías empresariales. La información se almacena de forma persistente en el <code className="bg-white px-1 py-0.5 rounded font-mono border border-sky-200">localStorage</code> de su navegador, por lo que permanecerá guardada incluso si recarga o cierra la aplicación. Los 11 documentos oficiales del SENA están protegidos contra pérdida definitiva mediante el botón de restauración.
              </p>
            </div>
          </div>

          {/* Form to Add or Edit */}
          <form onSubmit={handleSave} className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                {isEditing ? <Edit2 className="w-4 h-4 text-sky-600" /> : <Plus className="w-4 h-4 text-sky-600" />}
                <span>{isEditing ? 'Editar Metadatos de Documento' : 'Registrar Nuevo Documento'}</span>
              </h3>
              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Cancelar Edición
                </button>
              )}
            </div>

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {formSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{formSuccess}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Código Documental *</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Ej: SST-FOR-05"
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 font-mono"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">Nombre Oficial del Documento *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej: Procedimiento de Limpieza de Campanas Extractoras"
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Formato</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as any)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                >
                  <option value="PDF">PDF</option>
                  <option value="Word">Word (.docx)</option>
                  <option value="Excel">Excel (.xlsx)</option>
                  <option value="Otro">Otro Formato</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">Categoría Empresarial *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                >
                  {DOCUMENT_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Responsable</label>
                <input
                  type="text"
                  value={responsible}
                  onChange={(e) => setResponsible(e.target.value)}
                  placeholder="Ej: Responsable SST / Jefe de Operaciones"
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Vigencia / Fecha</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Ej: 2027 o Diciembre 2026"
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Descripción Breve *</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Explique el propósito del documento y su relación con los procesos de la empresa..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Palabras Clave (Separadas por comas)</label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Ej: Alturas, Procedimiento, Ductos, Químicos"
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 mb-2"
                />
                <label className="font-semibold text-slate-700 block mb-1">Marco Legal / Requisito</label>
                <input
                  type="text"
                  value={legalBasis}
                  onChange={(e) => setLegalBasis(e.target.value)}
                  placeholder="Ej: Decreto 1072 de 2015, Art. 2.2.4.6.18"
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Guardar Cambios' : 'Registrar Documento'}</span>
              </button>
            </div>
          </form>

          {/* List of Registered Documents with Controls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">
                Documentos Registrados en el Sistema ({documents.length})
              </h3>
              <button
                onClick={onResetDefaults}
                className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1.5 underline"
                title="Restablecer los 11 documentos oficiales del SENA"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restablecer documentos oficiales</span>
              </button>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto max-h-72">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="sticky top-0 bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase">
                    <tr>
                      <th className="p-3">Código</th>
                      <th className="p-3">Título</th>
                      <th className="p-3">Categoría</th>
                      <th className="p-3">Formato</th>
                      <th className="p-3">Tipo</th>
                      <th className="p-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {documents.map((doc) => (
                      <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-mono font-bold text-slate-900 whitespace-nowrap">{doc.code}</td>
                        <td className="p-3 font-medium text-slate-900 max-w-xs truncate" title={doc.title}>{doc.title}</td>
                        <td className="p-3 text-slate-600 whitespace-nowrap">{doc.category.split('(')[0]}</td>
                        <td className="p-3 font-mono text-slate-700">{doc.format}</td>
                        <td className="p-3 whitespace-nowrap">
                          {doc.isOriginal ? (
                            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                              Oficial SENA
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono text-sky-800 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded">
                              Personalizado
                            </span>
                          )}
                        </td>
                        <td className="p-3 text-right whitespace-nowrap space-x-2">
                          <button
                            onClick={() => handleEditClick(doc)}
                            className="p-1 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                            title="Editar información"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirmDoc(doc)}
                            className="p-1 rounded text-red-500 hover:text-red-700 hover:bg-red-50"
                            title="Eliminar documento"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Cerrar Panel
          </button>
        </div>

      </div>

      {/* Confirmation Dialog before deleting a document (Prompt Section 14) */}
      {deleteConfirmDoc && (
        <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="text-center space-y-2">
              <h4 className="text-base font-bold text-slate-900">¿Confirmar eliminación de documento?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Estás a punto de eliminar <strong>"{deleteConfirmDoc.title}"</strong> ({deleteConfirmDoc.code}). Esta acción no se puede deshacer de forma accidental.
              </p>
              {deleteConfirmDoc.isOriginal && (
                <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
                  Aviso: Este es uno de los 11 documentos oficiales del SENA. Podrás restablecerlo en cualquier momento pulsando "Restablecer documentos oficiales".
                </p>
              )}
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmDoc(null)}
                className="flex-1 py-2 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={executeDelete}
                className="flex-1 py-2 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors"
              >
                Sí, Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
