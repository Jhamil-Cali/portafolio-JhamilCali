export const profile = {
  name: 'Jhamil Cali',
  role: 'Estudiante de Informática · Seguridad de la Información',
  tagline:
    'Ciberseguridad, desarrollo web y tecnologías Web3 — construyendo soluciones con trazabilidad, confianza e innovación.',
  email: 'jhamilquea@gmail.com',
  github: 'https://github.com/JHAMILCALI',
  githubHandle: 'github.com/JHAMILCALI',
  linkedin: 'https://linkedin.com/in/jhamilcali',
  linkedinHandle: 'linkedin.com/in/jhamilcali',
  summary:
    'Estudiante de Informática con mención en Seguridad de la Información en la Universidad Mayor de San Andrés (UMSA), con interés en ciberseguridad, desarrollo web, blockchain y tecnologías Web3. Cuento con experiencia en el desarrollo de interfaces frontend, creación de contratos inteligentes y participación en proyectos tecnológicos orientados a la innovación y trazabilidad digital. He participado en hackatones y congresos, destacando mi reconocimiento en el Hackathon de Ethereum Bolivia 2024 con el proyecto HarvestChain, Hackathon de Ethereum Bolivia 2025 con el proyecto certifyCHAIN y CochaBlock 2025 con el proyecto AIni-Pay. Además, complemento mi formación con conocimientos en ciberseguridad móvil, hacking ético para entornos Android, redes, análisis de vulnerabilidades y seguridad de la información.',
};

export const highlights = [
  { value: '9+', label: 'Hackathones y retos Web3' },
  { value: '1°', label: 'Lugar en CochaBlock 2025' },
  { value: '30+', label: 'Cursos y certificaciones' },
  { value: '3', label: 'Áreas: Web, Blockchain y CiberSec' },
];

export const education = [
  {
    institution: 'Universidad Mayor de San Andrés (UMSA)',
    degree: 'Ingeniería Informática — Mención: Seguridad de la Información',
    period: '2023 — Actualidad',
    detail: '6° semestre',
  },
];

export type Certification = {
  title: string;
  org: string;
  date: string;
};

export type CertificationYear = {
  year: string;
  items: Certification[];
};

export const certifications: CertificationYear[] = [
  {
    year: '2026',
    items: [
      {
        title: 'Dispositivos de red y configuración inicial',
        org: 'CISCO y Women Speed Up Academy',
        date: '10 de junio',
      },
      {
        title: 'Creación de un agente de IA',
        org: 'Microsoft',
        date: '9 de marzo',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        title: 'Instalación y configuración de Firewall a Nivel Empresarial',
        org: 'Exabol',
        date: 'Noviembre — Diciembre',
      },
      { title: 'Curso de Spring Boot Java', org: 'Exabol', date: 'Noviembre' },
      {
        title: 'Kotlin Básico',
        org: 'UMSA — Carrera de Informática',
        date: '27 de junio',
      },
      {
        title: 'Ciberseguridad Móvil y Hacking Ético para Entornos Android Corporativos',
        org: 'CENEFCO Ingeniería y Tecnología / EduTecno',
        date: 'Junio',
      },
      {
        title: 'Hacking Ético e Informática Forense',
        org: 'CISCO y Academia Evolución Tecnológica — EVOLUTECH',
        date: 'Abril — Junio',
      },
      {
        title: 'Introducción y configuración de Redes',
        org: 'Lidebol SRL y U.P.E.A',
        date: 'Abril',
      },
      {
        title: 'Curso Especializado en React 19: Nivel Avanzado',
        org: 'CENEFCO Ingeniería y S.I.B La Paz',
        date: 'Abril',
      },
      { title: 'Curso de Fundamentos de Ethereum', org: 'Platzi', date: '6 de abril' },
      { title: 'Curso de Docker: Fundamentos', org: 'Platzi', date: '2 de abril' },
      {
        title: 'Prework para Desarrollo de Aplicaciones Blockchain',
        org: 'Platzi',
        date: '31 de marzo',
      },
      { title: 'No-Code con Appsheet', org: 'Platzi', date: '31 de marzo' },
      {
        title: 'Curso de Ethical Hacking',
        org: 'Universidad Pública de El Alto (UPEA) / FESUD-UPEA',
        date: '28 de marzo',
      },
      {
        title: 'Desarrollo de Herramientas de Ciberseguridad con Pentesting y Python',
        org: 'CENEFCO Ingeniería y S.I.B La Paz',
        date: 'Marzo',
      },
      {
        title: 'Curso de Azure DevOps: Flujos de CI/CD',
        org: 'Platzi',
        date: '27 de febrero',
      },
      {
        title: 'Curso Especializado en React JS: Desde Cero a Nivel Intermedio',
        org: 'CENEFCO Ingeniería y S.I.B La Paz',
        date: 'Febrero — Marzo',
      },
      { title: 'Curso Laravel 10', org: 'Lidebol SRL y U.P.E.A', date: 'Febrero' },
      { title: 'Curso de Hacking Ético', org: 'Platzi', date: '8 de enero' },
      {
        title: 'Curso Práctico de Sistemas de Diseño con Figma',
        org: 'Platzi',
        date: '5 de enero',
      },
      { title: 'Curso de Figma', org: 'Platzi', date: '3 de enero' },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'Escaneo Activo y Análisis de Vulnerabilidades',
        org: 'Platzi',
        date: '25 de diciembre',
      },
      {
        title: 'Diseño de Interfaces con Android Studio',
        org: 'Platzi',
        date: '25 de diciembre',
      },
      {
        title: 'Bases de Datos en la Nube con Azure',
        org: 'Código Facilito',
        date: '18 de diciembre',
      },
      { title: 'Fundamentos de Python', org: 'Platzi', date: '1 de agosto' },
      { title: 'Curso Profesional de Git y GitHub', org: 'Platzi', date: '21 de junio' },
      { title: 'Fundamentos de Software', org: 'Platzi', date: '19 de abril' },
      {
        title: 'Introducción a Ciberseguridad: Prevención de Ataques Informáticos',
        org: 'Platzi',
        date: '15 de abril',
      },
    ],
  },
];

export type Experience = {
  project: string;
  role: string;
  event: string;
  period?: string;
  repo?: string;
  award?: string;
  description: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    project: 'Nova Registry Agent',
    role: 'Desarrollador Web3',
    event: 'Stellar Agents x402 Stripe MPP / DoraHacks',
    repo: 'https://github.com/NOVA-REGISTRY-AGENT',
    description: [
      'Desarrollo de una solución Web3 para registro de activos digitales en Stellar, integrando pagos automatizados con x402, agentes de IA y trazabilidad blockchain, creando un SDK para npm.',
    ],
    tags: ['Stellar', 'x402', 'Agentes IA', 'SDK / npm'],
  },
  {
    project: 'AnticreticSafe',
    role: 'Desarrollador Web3',
    event: 'iExec Vibe Coding Challenge / DoraHacks',
    period: '2026',
    repo: 'https://github.com/AnticreticSafe',
    description: [
      'Participé en el desarrollo de AnticreticSafe, una dApp orientada a acuerdos anticréticos inmobiliarios, combinando verificación pública en blockchain con privacidad de datos financieros y documentación sensible.',
      'Integré funcionalidades Web3 relacionadas con contratos inteligentes, conexión blockchain, registro de documentos mediante hashes y seguimiento del estado del acuerdo.',
    ],
    tags: ['Solidity', 'iExec Nox', 'ERC-7984', 'Hardhat', 'Arbitrum Sepolia'],
  },
  {
    project: 'CREator',
    role: 'Desarrollador Web3',
    event: 'Chainlink Hackathon 2026',
    repo: 'https://github.com/Constellation-team',
    description: [
      'Desarrollo de una plataforma no-code para crear workflows visuales sobre Chainlink CRE, integrando IA, frontend React, backend Node.js y tecnologías Web3 como Chainlink Price Feeds, CCIP y Functions.',
    ],
    tags: ['Chainlink CRE', 'React', 'Node.js', 'CCIP', 'Functions'],
  },
  {
    project: 'HappyHODLers',
    role: 'Desarrollador Frontend Web3',
    event: 'ETHGlobal Buenos Aires 2025 — Argentina',
    repo: 'https://github.com/HappyHODLers',
    description: [
      'Participé en el desarrollo de HappyHODLers, un chatbot cripto impulsado por IA para consultar precios en tiempo real, configurar alertas y gestionar información de portafolio DeFi mediante lenguaje natural.',
      'Colaboré en la integración Web3 con wallets y servicios blockchain, utilizando Wagmi, RainbowKit y Pyth Network para feeds de precios en tiempo real.',
    ],
    tags: ['Wagmi', 'RainbowKit', 'Pyth Network', 'IA'],
  },
  {
    project: 'AIni Pay',
    role: 'Desarrollador Blockchain',
    event: 'Hackathon CochaBlock 2025',
    award: '1er lugar',
    repo: 'https://github.com/AIni-Pay',
    description: [
      'Obtuve el primer lugar con AIni Pay, una solución basada en blockchain orientada a pagos digitales con IA y tecnología Web3.',
      'Participé en el desarrollo de funcionalidades relacionadas con contratos inteligentes, trazabilidad y validación de transacciones.',
    ],
    tags: ['Solidity', 'IA', 'Pagos digitales', 'Web3'],
  },
  {
    project: 'certifyCHAIN',
    role: 'Desarrollador Blockchain',
    event: 'Hackathon Ethereum Bolivia 2025',
    repo: 'https://github.com/certify-CHAIN',
    description: [
      'Participé en el desarrollo de certifyCHAIN, una solución basada en blockchain orientada a la certificación y verificación de documentos digitales.',
      'Implementé funcionalidades relacionadas con contratos inteligentes, tokens ERC721, trazabilidad y validación de información en la red blockchain.',
      'Colaboré en el diseño del prototipo, lógica descentralizada y presentación técnica del proyecto durante el hackathon.',
    ],
    tags: ['ERC721', 'Contratos inteligentes', 'Trazabilidad'],
  },
  {
    project: 'HarvestChain',
    role: 'Desarrollador Blockchain',
    event: 'Hackathon de Ethereum Bolivia 2024',
    award: '2° lugar',
    repo: 'https://github.com/JHAMILCALI/harvestCHAIN',
    description: [
      'Desarrollo de una plataforma de comercio justo utilizando contratos inteligentes, enfocada en trazabilidad, transparencia y confianza en las transacciones.',
    ],
    tags: ['Comercio justo', 'Contratos inteligentes', 'Trazabilidad'],
  },
  {
    project: 'R3foresta',
    role: 'Desarrollador Frontend / Backend / Web3',
    event: 'Proyecto en desarrollo — trazabilidad forestal',
    description: [
      'Actualmente en el desarrollo de R3foresta, una plataforma orientada a la trazabilidad forestal y tokenización de bonos de carbono mediante tecnología blockchain.',
      'Colaboré en la construcción de una solución Web3 enfocada en la generación, trazabilidad y verificación de bonos de carbono tokenizados.',
      'Aporté en el desarrollo frontend y backend de la plataforma utilizando tecnologías web modernas, priorizando una experiencia de usuario clara.',
    ],
    tags: ['Tokenización', 'Bonos de carbono', 'Frontend', 'Backend'],
  },
  {
    project: 'Yasta 2.0',
    role: 'Desarrollador de Software / FinTech',
    event: 'Hackathon BUN — Banco Unión',
    award: '4° lugar',
    description: [
      'Desarrollo de una solución orientada a inclusión financiera y servicios digitales, participando en la construcción del prototipo, integración técnica y presentación del proyecto.',
    ],
    tags: ['FinTech', 'Inclusión financiera'],
  },
  {
    project: 'VigiaGG',
    role: 'Desarrollador de Software',
    event: 'Hackathon de Innovación Digital DSDR — Ipas Bolivia',
    description: [
      'Desarrollo de un prototipo digital con enfoque de impacto social, orientado a fortalecer el acceso a información, prevención y defensa de derechos mediante tecnología.',
    ],
    tags: ['Impacto social', 'Prototipo digital'],
  },
];

export const skills = [
  {
    category: 'Lenguajes de Programación',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Solidity', 'Kotlin'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Spring Boot', 'APIs REST'],
  },
  {
    category: 'Blockchain y Web3',
    items: [
      'Solidity',
      'Ethereum',
      'Contratos inteligentes',
      'Hardhat',
      'Web3',
      'Tokenización',
      'Trazabilidad blockchain',
      'Stellar',
      'Chainlink',
      'Arbitrum Sepolia',
    ],
  },
  {
    category: 'Ciberseguridad',
    items: [
      'Hacking ético',
      'Pentesting',
      'Análisis de vulnerabilidades',
      'Seguridad móvil Android',
      'Informática forense',
      'Configuración de firewalls',
      'Seguridad de redes',
    ],
  },
  {
    category: 'Redes',
    items: ['Configuración inicial de dispositivos de red', 'Routing', 'Cisco Packet Tracer'],
  },
  {
    category: 'Bases de Datos y Cloud',
    items: ['Supabase', 'Bases de datos en la nube con Azure'],
  },
  {
    category: 'DevOps y Herramientas',
    items: ['Git', 'GitHub', 'Docker', 'VS Code'],
  },
  {
    category: 'Diseño UI/UX',
    items: ['Figma', 'Adobe Photoshop'],
  },
];

export const congresses = [
  { title: 'Congreso de Ciencias de la Computación Bolivia — CCBOL', year: '2023' },
  { title: 'XLIX Conferencia Latinoamericana en Informática — CLEI', year: '2023' },
  { title: 'Hackathon de Ethereum Bolivia — 2° lugar', year: '2024' },
  { title: 'Hackathon CochaBlock — 1er lugar', year: '2025' },
  {
    title:
      'Reconocimiento Decanato de la Facultad de Ciencias Puras y Naturales — Representar a la UMSA en Hackathon CochaBlock',
    year: '2025',
  },
  {
    title:
      'Reconocimiento Facultad de Ciencias Puras y Naturales — Participar en ETHGlobal Buenos Aires, Argentina',
    year: '2025',
  },
];
