export type DocumentCategory = 
  | 'Seguridad y Salud en el Trabajo (SG-SST)'
  | 'Gestión de Riesgos y Peligros Operativos'
  | 'Cumplimiento Normativo y Legal'
  | 'Capacitación y Talento Humano'
  | 'Auditoría, Evaluación y Mejora Continua';

export interface DocumentItem {
  id: string;
  code: string;
  title: string;
  category: DocumentCategory;
  description: string;
  format: 'PDF' | 'Word' | 'Excel' | 'Otro';
  filePath: string;
  fileSize?: string;
  version: string;
  date: string;
  responsible: string;
  legalBasis?: string;
  tags: string[];
  isOriginal: boolean; // true for the 11 real documents provided
  extractedDataKey?: string; // key to structured representation
  orderIndex?: number; // automated sorting index
  isRecentImport?: boolean; // highlight newly imported documents
  fileName?: string; // original uploaded file name
}

export interface CategoryMetadata {
  id: string;
  name: DocumentCategory;
  shortName: string;
  description: string;
  iconName: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
}

export interface CompanyProfile {
  legalName: string;
  commercialName: string;
  nit: string;
  legalRepresentative: string;
  representativeId: string;
  phone: string;
  cellphone: string;
  whatsapp: string;
  city: string;
  department: string;
  country: string;
  primaryAddress: string;
  secondaryAddress?: string;
  economicActivity: string;
  economicActivityDetail: string;
  riskClass: string;
  slogan: string;
  academicContext: {
    institution: string;
    program: string;
    deliverableType: string;
    authors: string[];
  };
}
