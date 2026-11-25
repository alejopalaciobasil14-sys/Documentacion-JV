import { CategoryMetadata } from '../types/document';

export const DOCUMENT_CATEGORIES: CategoryMetadata[] = [
  {
    id: 'sg-sst',
    name: 'Seguridad y Salud en el Trabajo (SG-SST)',
    shortName: 'SG-SST Institucional',
    description: 'Políticas oficiales, objetivos estratégicos, planes de trabajo anuales y listas de control del COPASST.',
    iconName: 'ShieldCheck',
    colorScheme: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      accent: 'text-blue-600'
    }
  },
  {
    id: 'riesgos-peligros',
    name: 'Gestión de Riesgos y Peligros Operativos',
    shortName: 'Matrices y Peligros',
    description: 'Matriz GTC 45 completa, valoración de niveles de riesgo operativo en cocinas y tabla técnica de clasificación.',
    iconName: 'AlertTriangle',
    colorScheme: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      accent: 'text-amber-600'
    }
  },
  {
    id: 'legal-normativo',
    name: 'Cumplimiento Normativo y Legal',
    shortName: 'Matriz Legal',
    description: 'Marco normativo colombiano aplicable (Leyes, Decretos y Resoluciones de SST, trabajo en alturas y SGA).',
    iconName: 'Scale',
    colorScheme: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      accent: 'text-emerald-600'
    }
  },
  {
    id: 'capacitacion-th',
    name: 'Capacitación y Talento Humano',
    shortName: 'Capacitación 2027',
    description: 'Plan anual de formación técnica, inducciones, seguridad química y manejo de contingencias.',
    iconName: 'GraduationCap',
    colorScheme: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-900',
      accent: 'text-indigo-600'
    }
  },
  {
    id: 'auditoria-mejora',
    name: 'Auditoría, Evaluación y Mejora Continua',
    shortName: 'Auditoría e Indicadores',
    description: 'Protocolos de auditoría de estándares mínimos (Res. 0312), hallazgos y matriz de 11 indicadores clave.',
    iconName: 'Activity',
    colorScheme: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-900',
      accent: 'text-cyan-600'
    }
  }
];
