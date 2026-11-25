export interface ObjectiveItem {
  number: number;
  objective: string;
  indicator: string;
  meta: string;
  deadline: string;
  responsible: string;
  evidence: string;
}

export interface TrainingProgramItem {
  theme: string;
  objective: string;
  modality: string;
  evaluation: string;
  facilitator: string;
  date: string;
  status: string;
}

export interface AnnualPlanItem {
  cycle: 'PLANEAR' | 'HACER' | 'VERIFICAR' | 'VERIFICAR/ACTUAR';
  objective: string;
  activity: string;
  expectedResult: string;
  indicator: string;
  responsible: string;
  budgetEstimated: string;
  schedule: string[];
}

export interface IndicatorRow {
  name: string;
  category: 'Resultado' | 'Proceso' | 'Estructura';
  objectiveApplied: string;
  formula: string;
  periodicity: string;
  source: string;
}

export interface LegalNormRow {
  number: number;
  normYear: string;
  article: string;
  theme: string;
  requirement: string;
  applicability: string;
  evidence: string;
  suinLink?: string;
}

export interface RiskEvaluationRow {
  activity: string;
  task: string;
  routine: string;
  hazardDescription: string;
  classification: string;
  possibleEffects: string;
  nd: number;
  ne: number;
  np: number;
  npInterpretation: string;
  nc: number;
  nr: number;
  nrAcceptability: string;
  controls: {
    source?: string;
    medium?: string;
    individual?: string;
  };
  intervention: {
    elimination?: string;
    substitution?: string;
    engineering?: string;
    administrative?: string;
    epp?: string;
  };
}

export interface AuditChecklistItem {
  item: string;
  criteria: string;
  verificationMode: string;
  status: string;
  observations: string;
}

export const STRUCTURED_DOCUMENTS_DATA = {
  // 1. OBJETIVOS SG-SST
  objetivos_sgsst: {
    legalCitation: 'Artículo 2.2.4.6.18 del Decreto 1072 de 2015',
    notes: 'Los objetivos deben expresarse de conformidad con la política de seguridad y salud en el trabajo establecida en la empresa y el resultado de la evaluación inicial y auditorías.',
    items: [
      {
        number: 1,
        objective: 'Identificar los peligros y valorar los riesgos presentes en las actividades de limpieza especializada de extractores, campanas y sistemas de ductos.',
        indicator: 'Áreas / actividades evaluadas ÷ total de áreas / actividades × 100',
        meta: '100 %',
        deadline: 'Diciembre de 2026',
        responsible: 'Responsable del SG-SST',
        evidence: 'Matriz de peligros y valoración de riesgos (GTC 45)'
      },
      {
        number: 2,
        objective: 'Capacitar a los trabajadores en la prevención de riesgos laborales asociados con el trabajo en alturas, manejo de productos químicos, uso de herramientas y equipos y demás actividades propias del servicio.',
        indicator: 'Trabajadores capacitados ÷ total de trabajadores × 100',
        meta: '≥ 90 %',
        deadline: 'Diciembre de 2026',
        responsible: 'SST / Talento Humano',
        evidence: 'Listados de asistencia, evaluaciones y certificados de capacitación'
      },
      {
        number: 3,
        objective: 'Ejecutar las actividades programadas en el Plan Anual de Trabajo del SG-SST para fortalecer la prevención de accidentes y enfermedades laborales.',
        indicator: 'Actividades ejecutadas ÷ actividades programadas × 100',
        meta: '≥ 90 %',
        deadline: 'Diciembre de 2026',
        responsible: 'Responsable del SG-SST',
        evidence: 'Plan Anual de Trabajo, cronogramas e informes de cumplimiento'
      },
      {
        number: 4,
        objective: 'Realizar inspecciones de seguridad a los equipos, herramientas, elementos de protección personal y áreas de trabajo utilizadas en la prestación de los servicios.',
        indicator: 'Inspecciones realizadas ÷ inspecciones programadas × 100',
        meta: '100 %',
        deadline: 'Trimestralmente',
        responsible: 'SST / COPASST',
        evidence: 'Formatos de inspección, registros y planes de acción'
      },
      {
        number: 5,
        objective: 'Disminuir la ocurrencia de accidentes e incidentes laborales mediante la implementación de medidas preventivas y correctivas frente a los peligros identificados.',
        indicator: 'N.° de accidentes e incidentes del periodo actual vs. periodo anterior',
        meta: 'Reducir en 20 %',
        deadline: 'Diciembre de 2026',
        responsible: 'Gerencia / Responsable SST',
        evidence: 'Reportes e investigaciones de accidentes e incidentes, registros de acciones correctivas'
      }
    ] as ObjectiveItem[]
  },

  // 2. POLÍTICA SG-SST
  politica_sgsst: {
    legalRepresentative: 'Viladis Ledesma González',
    idNumber: 'C.C. 39.423.441',
    nit: '901907414-8',
    signDate: '24 de agosto de 2026',
    preamble: 'J&V limpia plus S.A.S. reconoce la importancia de proteger la seguridad, la salud y el bienestar de sus trabajadores, contratistas, proveedores y demás personas relacionadas con sus actividades.',
    commitments: [
      'Identificar los peligros, evaluar y valorar los riesgos presentes en las actividades desarrolladas por la empresa y establecer los controles necesarios para prevenir accidentes de trabajo y enfermedades laborales.',
      'Proteger la seguridad y salud de los trabajadores, promoviendo ambientes de trabajo seguros y saludables.',
      'Cumplir la normatividad legal vigente y demás requisitos aplicables en materia de Seguridad y Salud en el Trabajo.',
      'Promover la participación y consulta de los trabajadores en las actividades relacionadas con el SG-SST y fomentar una cultura de autocuidado y prevención.',
      'Asignar los recursos humanos, físicos, técnicos y financieros necesarios para la implementación y mantenimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo.',
      'Desarrollar actividades de capacitación, prevención y promoción de la salud, orientadas al control de los riesgos laborales.',
      'Prevenir los accidentes de trabajo, las enfermedades laborales y los daños a la salud relacionados con las condiciones de trabajo.',
      'Mejorar continuamente el SG-SST, mediante la evaluación de sus resultados, el seguimiento de indicadores y la implementación de acciones correctivas y de mejora.'
    ]
  },

  // 3. PLAN ANUAL DE CAPACITACIÓN 2027
  plan_capacitacion_2027: {
    targetAudience: 'Personal vinculado y participantes en actividades operativas y de apoyo (Clase V)',
    slogan: 'LIMPIEZA ESPECIALIZADA. CONFIANZA QUE SE DEMUESTRA CON RESULTADOS.',
    items: [
      {
        theme: 'Inducción general al SG-SST',
        objective: 'Conocer la política, los peligros y riesgos de la empresa, las responsabilidades y los planes de emergencia.',
        modality: 'Presencial',
        evaluation: 'Registro de asistencia y evaluación escrita.',
        facilitator: 'Responsable del SG-SST / apoyo de la ARL.',
        date: 'Enero 2027',
        status: 'Programado'
      },
      {
        theme: 'Reinducción anual en SST',
        objective: 'Actualizar conocimientos sobre el SG-SST, responsabilidades, procedimientos y cambios aplicables.',
        modality: 'Presencial o virtual',
        evaluation: 'Evaluación de conocimientos y registro de asistencia.',
        facilitator: 'Responsable del SG-SST / apoyo de la ARL.',
        date: 'Febrero 2027',
        status: 'Programado'
      },
      {
        theme: 'Identificación de peligros y reporte de actos y condiciones inseguras',
        objective: 'Reconocer peligros durante la limpieza de campanas y ductos y reportar oportunamente condiciones inseguras.',
        modality: 'Teórico-práctica',
        evaluation: 'Taller práctico de diligenciamiento del formato de reporte.',
        facilitator: 'Responsable del SG-SST / líder operativo.',
        date: 'Marzo 2027',
        status: 'Programado'
      },
      {
        theme: 'Primeros auxilios básicos',
        objective: 'Reconocer cómo activar la ayuda, proteger el área y brindar atención inicial dentro del nivel de formación recibido.',
        modality: 'Teórico-práctica',
        evaluation: 'Evaluación teórica y simulación guiada.',
        facilitator: 'Personal competente en primeros auxilios / entidad capacitada.',
        date: 'Abril 2027',
        status: 'Programado'
      },
      {
        theme: 'Prevención del riesgo psicosocial',
        objective: 'Identificar factores de riesgo psicosocial y promover comunicación respetuosa, manejo del estrés y prevención del acoso laboral.',
        modality: 'Presencial o virtual',
        evaluation: 'Registro de asistencia y actividad de verificación.',
        facilitator: 'Responsable del SG-SST / profesional competente.',
        date: 'Mayo 2027',
        status: 'Programado'
      },
      {
        theme: 'Conservación auditiva y visual y uso de EPP',
        objective: 'Promover el cuidado de la visión y audición y el uso, inspección y conservación de los EPP requeridos en la labor.',
        modality: 'Teórico-práctica',
        evaluation: 'Lista de chequeo de uso e inspección de EPP.',
        facilitator: 'Responsable del SG-SST / líder operativo.',
        date: 'Junio 2027',
        status: 'Programado'
      },
      {
        theme: 'Ergonomía y manejo seguro de cargas',
        objective: 'Aplicar principios de higiene postural y manipulación segura para reducir el riesgo de lesiones osteomusculares.',
        modality: 'Teórico-práctica',
        evaluation: 'Observación de prácticas y lista de verificación.',
        facilitator: 'Responsable del SG-SST / apoyo de la ARL.',
        date: 'Julio 2027',
        status: 'Programado'
      },
      {
        theme: 'Seguridad vial y desplazamientos seguros',
        objective: 'Fomentar comportamientos seguros durante los desplazamientos relacionados con la prestación del servicio.',
        modality: 'Presencial o virtual',
        evaluation: 'Cuestionario y registro de asistencia.',
        facilitator: 'Responsable designado / apoyo de la ARL.',
        date: 'Agosto 2027',
        status: 'Programado'
      },
      {
        theme: 'Prevención del riesgo químico',
        objective: 'Reconocer peligros de los productos químicos, interpretar etiquetas y fichas de datos de seguridad y aplicar controles.',
        modality: 'Teórico-práctica',
        evaluation: 'Taller de lectura de etiquetas y fichas de datos de seguridad.',
        facilitator: 'Responsable del SG-SST / proveedor o persona competente.',
        date: 'Septiembre 2027',
        status: 'Programado'
      },
      {
        theme: 'Uso y manejo de extintores',
        objective: 'Reconocer clases de fuego, medidas de prevención y uso seguro de extintores según capacitación recibida.',
        modality: 'Teórico-práctica',
        evaluation: 'Verificación de conocimientos y práctica supervisada por personal competente.',
        facilitator: 'Personal competente / organismo de capacitación.',
        date: 'Octubre 2027',
        status: 'Programado'
      },
      {
        theme: 'Orden, aseo y manejo de residuos',
        objective: 'Aplicar prácticas de orden, limpieza y segregación de residuos generados durante las actividades de la empresa.',
        modality: 'Teórico-práctica',
        evaluation: 'Inspección del área y lista de chequeo.',
        facilitator: 'Líder operativo / responsable del SG-SST.',
        date: 'Noviembre 2027',
        status: 'Programado'
      },
      {
        theme: 'Cierre y evaluación anual del plan de capacitación',
        objective: 'Verificar cumplimiento, asistencia, resultados y necesidades de formación para el siguiente periodo.',
        modality: 'Reunión de evaluación',
        evaluation: 'Consolidado de evidencias, evaluación de eficacia y acta de cierre.',
        facilitator: 'Gerencia / responsable del SG-SST.',
        date: 'Diciembre 2027',
        status: 'Programado'
      }
    ] as TrainingProgramItem[]
  },

  // 4. INDICADORES SG-SST
  indicadores_sgsst: {
    activity: 'Servicios de limpieza técnica de ductos y extractores en restaurantes',
    objective: 'Realizar seguimiento al desempeño del SG-SST de J&V Limpia Plus S.A.S. mediante indicadores que permitan medir la accidentalidad, las enfermedades laborales, el ausentismo, la ejecución de actividades preventivas, el presupuesto y el cumplimiento de los requisitos legales aplicables.',
    items: [
      {
        name: 'Frecuencia de accidentalidad',
        category: 'Resultado',
        objectiveApplied: 'Mide la frecuencia de accidentes de trabajo ocurridos durante las labores de limpieza técnica, inspección y mantenimiento de ductos y extractores.',
        formula: '(Número de accidentes de trabajo en el mes / Número de trabajadores en el mes) × 100',
        periodicity: 'Mensual',
        source: 'Reportes e investigaciones de accidentes; registro de trabajadores.'
      },
      {
        name: 'Severidad de accidentalidad',
        category: 'Resultado',
        objectiveApplied: 'Mide los días de incapacidad y días cargados asociados a accidentes de trabajo del personal.',
        formula: '((Días de incapacidad por AT en el mes + días cargados) / Número de trabajadores en el mes) × 100',
        periodicity: 'Mensual',
        source: 'Incapacidades, reportes de accidentes e investigaciones.'
      },
      {
        name: 'Proporción de accidentes mortales',
        category: 'Resultado',
        objectiveApplied: 'Mide qué porcentaje de los accidentes de trabajo registrados en el año resultaron mortales.',
        formula: '(Número de accidentes de trabajo mortales en el año / Total de accidentes de trabajo en el año) × 100',
        periodicity: 'Anual',
        source: 'Registro anual de accidentes e investigaciones.'
      },
      {
        name: 'Prevalencia de enfermedad laboral',
        category: 'Resultado',
        objectiveApplied: 'Mide los casos nuevos y antiguos de enfermedad laboral existentes en el periodo entre los trabajadores de la empresa.',
        formula: '(Número de casos nuevos y antiguos de EL en el periodo / Promedio de trabajadores en el periodo) × 100.000',
        periodicity: 'Anual',
        source: 'Registros de salud ocupacional y diagnósticos reconocidos como laborales, respetando la confidencialidad.'
      },
      {
        name: 'Incidencia de enfermedad laboral',
        category: 'Resultado',
        objectiveApplied: 'Mide los casos nuevos de enfermedad laboral diagnosticados durante el periodo.',
        formula: '(Número de casos nuevos de EL en el periodo / Promedio de trabajadores en el periodo) × 100.000',
        periodicity: 'Anual',
        source: 'Registros ocupacionales y reportes correspondientes.'
      },
      {
        name: 'Ausentismo por causa médica',
        category: 'Resultado',
        objectiveApplied: 'Mide los días de ausencia por incapacidades médicas comunes y laborales del personal operativo y administrativo.',
        formula: '(Número de días de ausencia por incapacidad en el mes / Número de días de trabajo programados en el mes) × 100',
        periodicity: 'Mensual',
        source: 'Registro de ausencias, incapacidades y programación de turnos.'
      },
      {
        name: 'Ejecución del plan de trabajo',
        category: 'Proceso',
        objectiveApplied: 'Mide el avance de las actividades del plan anual del SG-SST, por ejemplo inspecciones, controles de riesgos, entrega de EPP y acciones preventivas.',
        formula: '(Número de actividades ejecutadas / Número de actividades programadas) × 100',
        periodicity: 'Semestral',
        source: 'Plan anual del SG-SST y evidencias de ejecución.'
      },
      {
        name: 'Ejecución del plan de capacitación',
        category: 'Proceso',
        objectiveApplied: 'Mide el cumplimiento de las capacitaciones programadas en seguridad y salud, incluyendo manejo seguro de químicos, uso de EPP y procedimientos de trabajo seguro según los riesgos identificados.',
        formula: '(Número de capacitaciones realizadas / Número de capacitaciones propuestas) × 100',
        periodicity: 'Semestral',
        source: 'Plan de capacitación, listas de asistencia y evaluaciones.'
      },
      {
        name: 'Cumplimiento de inspecciones',
        category: 'Proceso',
        objectiveApplied: 'Evalúa el cumplimiento de inspecciones planeadas a equipos, herramientas, elementos de protección personal y condiciones de las áreas o sitios de servicio.',
        formula: '(Número de inspecciones realizadas / Número de inspecciones planeadas) × 100',
        periodicity: 'Trimestral',
        source: 'Formatos de inspección y planes de acción.'
      },
      {
        name: 'Ejecución del presupuesto del SG-SST',
        category: 'Estructura',
        objectiveApplied: 'Evalúa el uso del presupuesto asignado a prevención, capacitación, elementos de protección personal, inspecciones y demás actividades del SG-SST.',
        formula: '(Presupuesto ejecutado para el SG-SST / Presupuesto asignado para el SG-SST) × 100',
        periodicity: 'Anual',
        source: 'Presupuesto aprobado, comprobantes y registros contables.'
      },
      {
        name: 'Cumplimiento de requisitos legales',
        category: 'Estructura',
        objectiveApplied: 'Evalúa el cumplimiento de los requisitos legales vigentes que sean aplicables al SG-SST de la empresa.',
        formula: '(Número de requisitos legales cumplidos / Número de requisitos legales aplicables) × 100',
        periodicity: 'Anual',
        source: 'Matriz legal actualizada y evidencias de cumplimiento.'
      }
    ] as IndicatorRow[]
  },

  // 5. MATRIZ LEGAL
  matriz_legal_colombia: {
    advisor: 'Ricardo Ledesma - Alejandro Palacio',
    totalNorms: 20,
    items: [
      {
        number: 1,
        normYear: 'Ley 9 de 1979',
        article: 'Título III',
        theme: 'Salud ocupacional',
        requirement: 'Establece disposiciones sanitarias y de protección de la salud aplicables a los lugares de trabajo.',
        applicability: 'Aplicable',
        evidence: 'Inspecciones; procedimientos; registros de capacitación',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 2,
        normYear: 'Resolución 2400 de 1979',
        article: 'Disposiciones aplicables',
        theme: 'Higiene y seguridad industrial',
        requirement: 'Establece disposiciones sobre condiciones de seguridad e higiene en establecimientos de trabajo, herramientas, equipos y condiciones locativas.',
        applicability: 'Aplicable',
        evidence: 'Inspecciones; mantenimiento; listas de chequeo',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 3,
        normYear: 'Resolución 2013 de 1986',
        article: 'Art. 1 y ss.',
        theme: 'Participación de trabajadores',
        requirement: 'Reglamenta la organización y funcionamiento de los comités de medicina, higiene y seguridad industrial, hoy COPASST, según corresponda al tamaño de la empresa.',
        applicability: 'Aplicable según número de trabajadores',
        evidence: 'Acta de elección/designación; actas de reuniones',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 4,
        normYear: 'Decreto 1295 de 1994',
        article: 'Art. 21 y ss.',
        theme: 'Sistema General de Riesgos Laborales',
        requirement: 'Establece obligaciones del empleador dentro del Sistema General de Riesgos Laborales.',
        applicability: 'Aplicable',
        evidence: 'Afiliaciones ARL; certificados; pagos',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 5,
        normYear: 'Ley 1562 de 2012',
        article: 'Art. 1 y ss.',
        theme: 'Riesgos laborales',
        requirement: 'Modifica el Sistema General de Riesgos Laborales y fortalece la prevención de accidentes y enfermedades laborales.',
        applicability: 'Aplicable',
        evidence: 'SG-SST; matriz de peligros; indicadores',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 6,
        normYear: 'Decreto 1072 de 2015',
        article: 'Libro 2, Parte 2, Título 4, Capítulo 6',
        theme: 'SG-SST',
        requirement: 'Establece las disposiciones para implementar, mantener y mejorar el Sistema de Gestión de SST bajo el ciclo PHVA.',
        applicability: 'Aplicable',
        evidence: 'Política; objetivos; matriz de peligros; plan anual; auditoría; revisión por la dirección',
        suinLink: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019522'
      },
      {
        number: 7,
        normYear: 'Resolución 0312 de 2019',
        article: 'Estándar aplicable según tamaño y clase de riesgo',
        theme: 'Estándares mínimos SG-SST',
        requirement: 'Define los Estándares Mínimos del SG-SST según número de trabajadores, actividad económica y clase de riesgo.',
        applicability: 'Aplicable',
        evidence: 'Autoevaluación; plan de mejoramiento; soportes',
        suinLink: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Resolucion/30036681'
      },
      {
        number: 8,
        normYear: 'Resolución 1401 de 2007',
        article: 'Art. 1 y ss.',
        theme: 'Investigación de accidentes e incidentes',
        requirement: 'Establece requisitos para investigar accidentes e incidentes de trabajo y determinar causas y acciones correctivas.',
        applicability: 'Aplicable',
        evidence: 'Investigaciones; informes; planes de acción',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 9,
        normYear: 'Resolución 1843 de 2025',
        article: 'Según disposición aplicable',
        theme: 'Evaluaciones médicas ocupacionales',
        requirement: 'Regula la práctica de evaluaciones médicas ocupacionales y las historias clínicas ocupacionales.',
        applicability: 'Aplicable',
        evidence: 'Conceptos de aptitud; evaluaciones ocupacionales; custodia de historias clínicas',
        suinLink: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30054873'
      },
      {
        number: 10,
        normYear: 'Resolución 2764 de 2022',
        article: 'Anexo técnico y disposiciones aplicables',
        theme: 'Riesgo psicosocial',
        requirement: 'Adopta instrumentos y guías para la evaluación e intervención de factores de riesgo psicosocial.',
        applicability: 'Aplicable según condiciones y periodicidad',
        evidence: 'Instrumentos; informe; plan de intervención',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 11,
        normYear: 'Resolución 4272 de 2021',
        article: 'Requisitos aplicables',
        theme: 'Trabajo en alturas',
        requirement: 'Establece requisitos mínimos de seguridad para trabajo en alturas.',
        applicability: 'Condicional: solo si el servicio configura trabajo en alturas',
        evidence: 'Procedimiento; capacitación/certificación; inspecciones; controles requeridos',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 12,
        normYear: 'Decreto 1496 de 2018',
        article: 'Art. 1 y ss.',
        theme: 'Sistema Globalmente Armonizado',
        requirement: 'Adopta el Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos.',
        applicability: 'Aplicable si se utilizan productos químicos',
        evidence: 'Inventario químico; etiquetas; fichas de datos de seguridad',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 13,
        normYear: 'Resolución 773 de 2021',
        article: 'Requisitos aplicables',
        theme: 'Productos químicos / SGA',
        requirement: 'Establece acciones para aplicar el Sistema Globalmente Armonizado en los lugares de trabajo.',
        applicability: 'Aplicable si se utilizan productos químicos',
        evidence: 'FDS; inventario; etiquetas; capacitación; almacenamiento',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 14,
        normYear: 'Resolución 5018 de 2019',
        article: 'Requisitos aplicables',
        theme: 'Riesgo eléctrico',
        requirement: 'Establece lineamientos de SST para actividades relacionadas con instalaciones y procesos eléctricos.',
        applicability: 'Condicional: según actividades reales de J&V',
        evidence: 'Procedimiento; inspecciones; capacitación; controles',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 15,
        normYear: 'Resolución 0491 de 2020',
        article: 'Requisitos aplicables',
        theme: 'Espacios confinados',
        requirement: 'Establece requisitos mínimos de seguridad para trabajos en espacios confinados.',
        applicability: 'Condicional: solo si un lugar intervenido cumple la definición legal',
        evidence: 'Identificación; procedimiento; permisos; capacitación; controles',
        suinLink: 'https://www.suin-juriscol.gov.co/'
      },
      {
        number: 16,
        normYear: 'Decreto 1072 de 2015',
        article: 'Capítulo 6',
        theme: 'Identificación de peligros y valoración de riesgos',
        requirement: 'Exige identificar peligros, evaluar y valorar riesgos y establecer controles dentro del SG-SST.',
        applicability: 'Aplicable',
        evidence: 'Matriz de peligros; controles; inspecciones',
        suinLink: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019522'
      },
      {
        number: 17,
        normYear: 'Decreto 1072 de 2015',
        article: 'Capítulo 6',
        theme: 'Emergencias',
        requirement: 'Exige contemplar prevención, preparación y respuesta ante emergencias dentro del SG-SST.',
        applicability: 'Aplicable',
        evidence: 'Plan de emergencias; simulacros; inspecciones; registros',
        suinLink: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019522'
      },
      {
        number: 18,
        normYear: 'Decreto 1072 de 2015',
        article: 'Capítulo 6',
        theme: 'Capacitación SST',
        requirement: 'Exige un programa de capacitación en SST e inducción/reinducción según corresponda.',
        applicability: 'Aplicable',
        evidence: 'Programa anual; inducciones; reinducciones; asistencias; evaluaciones',
        suinLink: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019522'
      },
      {
        number: 19,
        normYear: 'Decreto 1072 de 2015',
        article: 'Capítulo 6',
        theme: 'Contratistas y subcontratistas',
        requirement: 'Establece responsabilidades de SST frente a contratistas y subcontratistas.',
        applicability: 'Aplicable cuando existan contratistas',
        evidence: 'Evaluación de contratistas; afiliaciones; inducción; documentos SST',
        suinLink: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019522'
      },
      {
        number: 20,
        normYear: 'Decreto 1072 de 2015',
        article: 'Capítulo 6',
        theme: 'Auditoría y mejora continua',
        requirement: 'El SG-SST debe evaluarse, auditarse y mejorarse continuamente.',
        applicability: 'Aplicable',
        evidence: 'Auditoría; indicadores; revisión por la dirección; plan de mejora',
        suinLink: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019522'
      }
    ] as LegalNormRow[]
  },

  // 6. MATRIZ DE RIESGOS GTC 45
  matriz_gtc45: {
    code: 'GTH-AN-06',
    version: '01',
    date: '14/09/2026',
    authors: 'Ricardo Correa Ledesma - Alejandro Palacio Basil',
    targetPosition: 'Técnico de Limpieza Técnica (4 vinculados)',
    environment: 'Instalaciones del cliente (cocinas, extractores, ductos)',
    risks: [
      {
        activity: 'Limpieza técnica de extractores y ductos',
        task: 'Aplicación de desengrasante y remoción de grasa acumulada',
        routine: 'Sí (2-4 h por servicio)',
        hazardDescription: 'Contacto con productos químicos de limpieza (desengrasantes, detergentes)',
        classification: 'Químico',
        possibleEffects: 'Irritación o dermatitis en piel y ojos; afectación respiratoria por contacto o salpicaduras.',
        nd: 6,
        ne: 3,
        np: 18,
        npInterpretation: 'Alto',
        nc: 25,
        nr: 450,
        nrAcceptability: 'II - No Aceptable o Aceptable con control específico',
        controls: {
          source: 'Envases rotulados y fichas de seguridad; selección del producto según procedimiento.',
          medium: 'Ventilación del área; delimitación de la zona de trabajo; almacenamiento seguro.',
          individual: 'Capacitación en manipulación de químicos; procedimiento de trabajo seguro; higiene de manos.'
        },
        intervention: {
          substitution: 'Sustituir por productos de menor peligrosidad cuando técnicamente sea viable.',
          engineering: 'Sistemas de dosificación y recipientes seguros.',
          administrative: 'Capacitación, FDS, señalización, inspección de envases y control de derrames.',
          epp: 'Guantes resistentes a químicos, gafas de seguridad, protección respiratoria según FDS.'
        }
      },
      {
        activity: 'Limpieza técnica de extractores y ductos',
        task: 'Uso de aspiradora industrial, equipos de extracción y herramientas eléctricas',
        routine: 'Sí (2-4 h por servicio)',
        hazardDescription: 'Exposición a ruido generado por equipos de aspiración y herramientas',
        classification: 'Físico',
        possibleEffects: 'Fatiga auditiva, disminución temporal de la audición, estrés y dificultad para la comunicación.',
        nd: 2,
        ne: 3,
        np: 6,
        npInterpretation: 'Medio',
        nc: 25,
        nr: 150,
        nrAcceptability: 'II - No Aceptable o Aceptable con control específico',
        controls: {
          source: 'Mantenimiento básico de equipos; selección de equipos en buen estado.',
          medium: 'Separación de fuentes de ruido cuando sea posible.',
          individual: 'Pausas activas; capacitación; inspección preoperacional; limitar tiempo de exposición.'
        },
        intervention: {
          engineering: 'Mantenimiento preventivo y equipos de menor emisión sonora.',
          administrative: 'Control del tiempo de exposición; señalización; protección auditiva según evaluación.',
          epp: 'Protección auditiva tipo inserción o copa según nivel de exposición.'
        }
      },
      {
        activity: 'Limpieza técnica de extractores y ductos',
        task: 'Desplazamiento y trabajo sobre superficies húmedas durante lavado',
        routine: 'Sí (1-3 h por servicio)',
        hazardDescription: 'Superficies húmedas, resbalosas y obstáculos en el área',
        classification: 'Condiciones de seguridad (Locativo)',
        possibleEffects: 'Caídas al mismo nivel, golpes, esguinces y contusiones.',
        nd: 6,
        ne: 4,
        np: 24,
        npInterpretation: 'Muy Alto',
        nc: 25,
        nr: 600,
        nrAcceptability: 'I - No Aceptable (Intervención urgente)',
        controls: {
          source: 'Señalización básica y elementos de limpieza disponibles.',
          medium: 'Delimitación del área y control de derrames.',
          individual: 'Orden y aseo permanente; inspección del área; rutas de circulación despejadas.'
        },
        intervention: {
          elimination: 'Eliminar inmediatamente derrames y obstáculos.',
          engineering: 'Tapetes o superficies antideslizantes cuando el lugar lo permita.',
          administrative: 'Señalización de piso húmedo, orden y aseo, inspección antes y durante el servicio.',
          epp: 'Calzado de seguridad antideslizante con puntera de protección.'
        }
      },
      {
        activity: 'Limpieza técnica de extractores y ductos',
        task: 'Acceso a campanas, ductos y puntos elevados mediante escalera',
        routine: 'Sí (1-2 h por servicio)',
        hazardDescription: 'Trabajo en alturas o cerca de desniveles durante acceso a ductos',
        classification: 'Condiciones de seguridad (Alturas)',
        possibleEffects: 'Caídas a diferente nivel, golpes, fracturas y lesiones graves.',
        nd: 6,
        ne: 2,
        np: 12,
        npInterpretation: 'Alto',
        nc: 60,
        nr: 720,
        nrAcceptability: 'I - No Aceptable (Control prioritario estricto)',
        controls: {
          source: 'Escaleras inspeccionadas; capacitación del personal autorizado; elementos de protección.',
          medium: 'Ubicación estable de la escalera; bloqueo de acceso al área.',
          individual: 'Inspección preoperacional; permiso/procedimiento cuando aplique; capacitación y supervisión.'
        },
        intervention: {
          elimination: 'Evitar el acceso en altura cuando pueda realizarse desde nivel seguro o con extensiones.',
          engineering: 'Escalera certificada y estable; sistemas de acceso adecuados.',
          administrative: 'Procedimiento de trabajo seguro, inspección de escaleras, delimitación y supervisión.',
          epp: 'Arnés y sistema anticaídas únicamente cuando lo requiera la altura; casco con barbuquejo.'
        }
      },
      {
        activity: 'Limpieza técnica de extractores y ductos',
        task: 'Conexión y uso de equipos eléctricos en ambientes de limpieza húmedos',
        routine: 'Sí (1-3 h por servicio)',
        hazardDescription: 'Contacto eléctrico por cables, conexiones o equipos en presencia de humedad',
        classification: 'Condiciones de seguridad (Eléctrico)',
        possibleEffects: 'Descarga eléctrica, quemaduras, caídas secundarias y lesiones graves.',
        nd: 6,
        ne: 2,
        np: 12,
        npInterpretation: 'Alto',
        nc: 100,
        nr: 1200,
        nrAcceptability: 'I - No Aceptable (Riesgo Crítico)',
        controls: {
          source: 'Inspección visual de cables y equipos; equipos con mantenimiento.',
          medium: 'Protección de conexiones y separación de fuentes eléctricas del agua.',
          individual: 'Procedimiento de bloqueo/desenergización cuando aplique; capacitación; inspecciones.'
        },
        intervention: {
          elimination: 'Desenergizar y retirar de servicio equipos eléctricos antes de intervenirlos.',
          engineering: 'Protección diferencial y tomas adecuadas en el sitio cuando existan.',
          administrative: 'Inspección preoperacional, bloqueo/desenergización, prohibición de conexiones improvisadas.',
          epp: 'Guantes y calzado de seguridad dieléctrico / adecuado.'
        }
      },
      {
        activity: 'Limpieza técnica de extractores y ductos',
        task: 'Intervención en áreas con acumulación de grasa y operación de cocina',
        routine: 'Sí (0,5-2 h por servicio)',
        hazardDescription: 'Incendio o evento tecnológico asociado a grasa acumulada, calor o instalaciones del cliente',
        classification: 'Condiciones de seguridad (Tecnológico / Incendio)',
        possibleEffects: 'Quemaduras, inhalación de humo, lesiones graves y daños materiales.',
        nd: 6,
        ne: 2,
        np: 12,
        npInterpretation: 'Alto',
        nc: 100,
        nr: 1200,
        nrAcceptability: 'I - No Aceptable (Riesgo Crítico)',
        controls: {
          source: 'Coordinación previa con el cliente; extintores disponibles en las instalaciones; inspección visual.',
          medium: 'Aislamiento del área y control de fuentes de ignición cuando sea posible.',
          individual: 'Procedimiento de emergencias; capacitación; rutas de evacuación; comunicación con cliente.'
        },
        intervention: {
          elimination: 'Retirar acumulaciones de grasa y controlar fuentes de ignición antes de iniciar la tarea.',
          engineering: 'Extintores y sistemas de detección/protección contra incendios propios del restaurante.',
          administrative: 'Coordinación con cliente, inspección previa, prohibición de fuentes de ignición, plan de emergencia.',
          epp: 'Casco, guantes, gafas, ropa de trabajo y protección respiratoria según evaluación.'
        }
      }
    ] as RiskEvaluationRow[]
  },

  // 7. PLAN ANUAL DE TRABAJO 2027
  plan_anual_2027: {
    totalBudget: 'COP $3.800.000',
    totalActivities: 12,
    year: '2027',
    activities: [
      {
        cycle: 'PLANEAR',
        objective: 'Definir las prioridades del SG-SST según los riesgos reales de J&V.',
        activity: 'Revisar la evaluación inicial, autoevaluación de estándares mínimos y plan de mejora de la vigencia anterior.',
        expectedResult: 'Evaluación y prioridades aprobadas durante enero de 2027.',
        indicator: 'Evaluación realizada y prioridades definidas: Sí/No.',
        responsible: 'Empleador y responsable del SG-SST competente',
        budgetEstimated: '$250.000 COP',
        schedule: ['Ene']
      },
      {
        cycle: 'PLANEAR',
        objective: 'Identificar peligros y valorar riesgos de limpieza técnica de campanas y ductos.',
        activity: 'Actualizar la matriz de peligros considerando grasa acumulada, químicos, equipos eléctricos, herramientas y alturas.',
        expectedResult: 'Matriz actualizada y socializada antes de finalizar marzo.',
        indicator: 'Matriz actualizada: Sí/No; trabajadores informados / expuestos × 100.',
        responsible: 'Responsable SG-SST y trabajadores operativos',
        budgetEstimated: '$350.000 COP',
        schedule: ['Ene', 'Feb', 'Mar']
      },
      {
        cycle: 'PLANEAR',
        objective: 'Mantener al día los requisitos legales aplicables al SG-SST.',
        activity: 'Revisar matriz legal y verificar requisitos aplicables a la empresa (estándares, químicos, emergencias).',
        expectedResult: 'Matriz legal revisada y evaluación de cumplimiento documentada.',
        indicator: 'Requisitos evaluados / requisitos aplicables × 100.',
        responsible: 'Responsable SG-SST competente con apoyo del empleador',
        budgetEstimated: '$150.000 COP',
        schedule: ['Ene', 'Feb', 'Mar']
      },
      {
        cycle: 'HACER',
        objective: 'Prevenir accidentes durante los servicios en restaurantes y zonas de cocina.',
        activity: 'Realizar inspección preoperacional antes de cada servicio: acceso, piso, iluminación, cables y herramientas.',
        expectedResult: 'Lista de chequeo diligenciada en el 100% de los servicios programados.',
        indicator: 'Inspecciones preoperacionales realizadas / servicios ejecutados × 100.',
        responsible: 'Líder operativo y trabajadores; supervisión del empleador',
        budgetEstimated: '$300.000 COP',
        schedule: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      },
      {
        cycle: 'HACER',
        objective: 'Asegurar el uso y estado adecuado de elementos de protección personal.',
        activity: 'Verificar selección, entrega, uso, limpieza y reposición de EPP según fichas de productos químicos.',
        expectedResult: '100% de trabajadores con EPP requerido disponible y registros actualizados.',
        indicator: 'Trabajadores con EPP requerido / trabajadores expuestos × 100.',
        responsible: 'Empleador y responsable SG-SST',
        budgetEstimated: '$600.000 COP',
        schedule: ['Feb', 'May', 'Ago', 'Nov']
      },
      {
        cycle: 'HACER',
        objective: 'Reducir exposición a productos químicos utilizados en limpieza técnica.',
        activity: 'Revisar etiquetas y FDS; capacitar en dilución, almacenamiento, incompatibilidades y derrames.',
        expectedResult: 'Todos los productos usados identificados y trabajadores capacitados antes de junio.',
        indicator: 'Productos con FDS disponible / productos utilizados × 100.',
        responsible: 'Responsable SG-SST y compras/operación',
        budgetEstimated: '$350.000 COP',
        schedule: ['Feb', 'Mar', 'May', 'Jun']
      },
      {
        cycle: 'HACER',
        objective: 'Fortalecer competencias para tareas críticas y seguras.',
        activity: 'Ejecutar capacitación sobre hidrolavadora, riesgo eléctrico, químicos, caídas y primeros auxilios.',
        expectedResult: 'Plan de capacitación ejecutado según necesidades y requisitos aplicables.',
        indicator: 'Capacitaciones realizadas / capacitaciones programadas × 100.',
        responsible: 'Empleador y responsable SG-SST / ARL',
        budgetEstimated: '$500.000 COP',
        schedule: ['Feb', 'Abr', 'Jun', 'Jul', 'Sep', 'Oct']
      },
      {
        cycle: 'HACER',
        objective: 'Mantener equipos de trabajo en condiciones seguras.',
        activity: 'Aplicar mantenimiento preventivo y revisión antes de uso de hidrolavadora, mangueras y herramientas.',
        expectedResult: 'Inspección antes del uso y mantenimiento conforme a manual/frecuencia.',
        indicator: 'Inspecciones registradas / servicios realizados × 100.',
        responsible: 'Operario responsable y empleador',
        budgetEstimated: '$450.000 COP',
        schedule: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      },
      {
        cycle: 'HACER',
        objective: 'Preparar al personal para responder ante emergencias.',
        activity: 'Actualizar instrucciones de emergencia para servicios en restaurantes; verificar botiquín y contactos.',
        expectedResult: 'Procedimiento socializado y ejercicio de preparación realizado.',
        indicator: 'Procedimiento revisado: Sí/No; ejercicio realizado: Sí/No.',
        responsible: 'Empleador y responsable SG-SST',
        budgetEstimated: '$300.000 COP',
        schedule: ['Mar', 'Jun', 'Sep', 'Nov']
      },
      {
        cycle: 'HACER',
        objective: 'Cumplir actividades de vigilancia de la salud según los riesgos identificados.',
        activity: 'Coordinar evaluaciones médicas ocupacionales aplicables y seguimiento a recomendaciones laborales.',
        expectedResult: '100% de evaluaciones ocupacionales programadas y aplicables gestionadas.',
        indicator: 'Evaluaciones realizadas / programadas × 100.',
        responsible: 'Empleador y prestador de salud ocupacional autorizado',
        budgetEstimated: 'Según cotización',
        schedule: ['Ene', 'Abr', 'Jul', 'Oct']
      },
      {
        cycle: 'VERIFICAR',
        objective: 'Investigar y hacer seguimiento a incidentes, accidentes y condiciones inseguras.',
        activity: 'Registrar y analizar los eventos que se presenten, determinar causas e implementar medidas correctivas.',
        expectedResult: 'Todo evento reportado investigado y con acciones asignadas dentro de los plazos.',
        indicator: 'Eventos investigados / eventos reportados × 100.',
        responsible: 'Empleador y responsable SG-SST con trabajadores',
        budgetEstimated: '$200.000 COP',
        schedule: ['Permanente (Ene-Dic)']
      },
      {
        cycle: 'VERIFICAR/ACTUAR',
        objective: 'Evaluar resultados y preparar la siguiente vigencia.',
        activity: 'Revisar indicadores trimestralmente; realizar auditoría anual de estándares; rendir cuentas y formular plan 2028.',
        expectedResult: 'Cuatro seguimientos trimestrales, auditoría y cierre anual documentados.',
        indicator: 'Seguimientos realizados / 4 × 100; auditoría realizada: Sí/No.',
        responsible: 'Empleador, responsable SG-SST y auditor competente',
        budgetEstimated: '$600.000 COP',
        schedule: ['Mar', 'Jun', 'Sep', 'Nov', 'Dic']
      }
    ] as AnnualPlanItem[]
  },

  // 8. AUDITORÍA SG-SST
  auditoria_sgsst: {
    company: 'J&V Limpia Plus S.A.S.',
    city: 'Medellín, Antioquia',
    auditDate: '26 de octubre de 2026',
    proposedLeadAuditor: 'León Gómez Zea',
    auditTeam: 'Alejandro Palacio y Ricardo Correa',
    objective: 'Evaluar documentalmente y mediante entrevistas/observación el cumplimiento de los requisitos aplicables del SG-SST y definir acciones de mejora para prevenir lesiones y enfermedades laborales durante los servicios de limpieza técnica.',
    scope: 'Actividades administrativas y operativas relacionadas con la preparación, desplazamiento, ejecución y cierre de servicios de limpieza de ductos y extractores; personal directo y contratistas.',
    criteria: 'Decreto 1072 de 2015; Resolución 0312 de 2019 (Estándares Mínimos); Ley 1562 de 2012; Resolución 4272 de 2021.',
    recommendations: [
      'Actualizar la matriz de peligros por tarea y sitio del cliente.',
      'Asegurar fichas de datos de seguridad (FDS) y rotulado de productos químicos según SGA.',
      'Documentar formalmente la entrega, inspección y reposición de EPP.',
      'Mantener registros periódicos de inspecciones y mantenimiento preventivo de equipos eléctricos y mecánicos.',
      'Capacitar al personal operativo en procedimientos seguros de trabajo y respuesta a derrames / emergencias en restaurantes.',
      'Formalizar el plan anual e indicadores con soportes y evidencias objetivas para la rendición de cuentas.'
    ]
  },

  // 9. LISTA DE CHEQUEO COPASST
  lista_chequeo_copasst: {
    title: 'Lista de Chequeo para Conformación y Seguimiento del COPASST — J&V Limpia Plus S.A.S.',
    targetActivity: 'Limpieza técnica de campanas extractoras y ductos de restaurantes',
    sections: [
      {
        name: '1. Identificación del acta',
        items: ['Nombre de la empresa', 'NIT', 'Nombre del comité (COPASST)', 'Número consecutivo del acta', 'Tipo de reunión (ordinaria / extraordinaria)', 'Fecha de la reunión', 'Hora de inicio y finalización', 'Lugar o modalidad (presencial / virtual)']
      },
      {
        name: '2. Verificación de asistencia y quórum',
        items: ['Lista de asistentes', 'Cargo o rol (principal / suplente)', 'Representación (empleador / trabajadores)', 'Invitados (si aplica)', 'Verificación de quórum']
      },
      {
        name: '3. Orden del día',
        items: ['Orden del día propuesto', 'Aprobación del orden del día', 'Aprobación del acta anterior']
      },
      {
        name: '4. Desarrollo de la reunión',
        items: ['Seguimiento a compromisos anteriores', 'Resultados de inspecciones o investigaciones', 'Accidentes / incidentes laborales', 'Actividades SG-SST revisadas', 'Recomendaciones del COPASST', 'Sugerencias de trabajadores', 'Intervenciones de los miembros']
      },
      {
        name: '5. Decisiones y recomendaciones',
        items: ['Decisiones adoptadas', 'Recomendaciones a la empresa', 'Conceptos técnicos del comité']
      },
      {
        name: '6. Compromisos y plan de acción',
        items: ['Actividad acordada', 'Responsable', 'Fecha de cumplimiento', 'Estado o seguimiento']
      },
      {
        name: '7. Cierre del acta',
        items: ['Hora de cierre', 'Fecha próxima reunión', 'Observaciones finales']
      },
      {
        name: '8. Firmas',
        items: ['Firma del presidente COPASST', 'Firma del secretario COPASST', 'Firmas de miembros']
      },
      {
        name: '9. Archivo y control documental',
        items: ['Archivo físico o digital del acta', 'Disponibilidad para autoridades y trabajadores', 'Código del formato SST', 'Versión del documento', 'Control de cambios', 'Evidencias anexas']
      }
    ],
    operationalAnnex: [
      'Revisión de inspecciones preoperacionales de hidrolavadora, cables, conexiones, mangueras y herramientas.',
      'Revisión del uso, estado y reposición de elementos de protección personal definidos para cada tarea.',
      'Revisión de fichas de datos de seguridad, etiquetado, almacenamiento y uso de productos químicos.',
      'Verificación de riesgos por grasa, superficies resbalosas, electricidad, manipulación de cargas y acceso a zonas elevadas cuando aplique.',
      'Revisión de incidentes, accidentes, condiciones inseguras y acciones correctivas relacionadas con servicios en restaurantes.',
      'Seguimiento a capacitaciones, inducciones y procedimientos seguros para los trabajadores operativos.',
      'Revisión de mantenimiento preventivo/correctivo de la hidrolavadora y demás equipos de trabajo.',
      'Verificación de coordinación con el restaurante cliente: delimitación del área, accesos, emergencias y riesgos del lugar.'
    ]
  }
};
