import { DocumentItem } from '../types/document';
import { INITIAL_DOCUMENTS } from '../data/initialDocuments';

const STORAGE_KEY = 'jv_limpia_plus_documents_v1';

export function getStoredDocuments(): DocumentItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DOCUMENTS));
      return INITIAL_DOCUMENTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_DOCUMENTS;
  } catch (err) {
    console.error('Error reading documents from localStorage:', err);
    return INITIAL_DOCUMENTS;
  }
}

export function saveStoredDocuments(docs: DocumentItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(docs));
  } catch (err) {
    console.error('Error saving documents to localStorage:', err);
  }
}

export function resetDocumentsToDefaults(): DocumentItem[] {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DOCUMENTS));
  return INITIAL_DOCUMENTS;
}

export interface DocumentMetrics {
  totalDocs: number;
  totalCategories: number;
  pdfCount: number;
  wordCount: number;
  excelCount: number;
  otherCount: number;
  originalDocsCount: number;
  customDocsCount: number;
  totalAnnualBudgetCop: number;
  exposedPersonnel: number;
  riskClass: string;
}

export function calculateMetrics(docs: DocumentItem[]): DocumentMetrics {
  const categories = new Set(docs.map(d => d.category));
  
  let pdf = 0;
  let word = 0;
  let excel = 0;
  let other = 0;
  let original = 0;
  let custom = 0;

  for (const doc of docs) {
    if (doc.format === 'PDF') pdf++;
    else if (doc.format === 'Word') word++;
    else if (doc.format === 'Excel') excel++;
    else other++;

    if (doc.isOriginal) original++;
    else custom++;
  }

  return {
    totalDocs: docs.length,
    totalCategories: categories.size,
    pdfCount: pdf,
    wordCount: word,
    excelCount: excel,
    otherCount: other,
    originalDocsCount: original,
    customDocsCount: custom,
    totalAnnualBudgetCop: 3800000, // Presupuesto documentado en Plan Anual SG-SST 2027
    exposedPersonnel: 4, // 4 Técnicos de Limpieza expuestos según Matriz GTC 45
    riskClass: 'Clase V'
  };
}
