// src/data/serviciosData.js
// Catálogo local de Tecnologías y Habilidades de TI

export const SERVICIOS_DATA = [
  {
    id: 1,
    titulo: 'Desarrollo Frontend Moderno',
    subtitulo: 'React 19, Single Page Applications & UI Reactiva',
    categoria: 'Frontend',
    nivel: 'Avanzado',
    descripcion:
      'Construcción de interfaces de usuario altamente reactivas, modulares y de máxima velocidad utilizando React 19, Vite, React Router y arquitectura de componentes reutilizables con Hooks personalizados.',
    imagen:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    etiquetas: ['React 19', 'JavaScript ES6+', 'Vite', 'React Router', 'HTML5 & CSS3'],
    proyectos: '12+ proyectos desarrollados',
    icono: '💻'
  },
  {
    id: 2,
    titulo: 'Desarrollo Backend & APIs RESTful',
    subtitulo: 'Node.js, Express & Microservicios',
    categoria: 'Backend',
    nivel: 'Avanzado',
    descripcion:
      'Diseño e implementación de servicios web escalables, endpoints RESTful seguros, autenticación con JWT, sanitización de entradas y orquestación de llamadas asíncronas con promesas y middleware.',
    imagen:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    etiquetas: ['Node.js', 'Express', 'APIs REST', 'JWT', 'Async/Await'],
    proyectos: '8+ arquitecturas desplegadas',
    icono: '⚙️'
  },
  {
    id: 3,
    titulo: 'Gestión de Bases de Datos',
    subtitulo: 'Modelado Relacional (SQL) y No Relacional (NoSQL)',
    categoria: 'Bases de Datos',
    nivel: 'Intermedio - Alto',
    descripcion:
      'Modelado entidad-relación, optimización de consultas complejas, indexación y transacciones seguras con PostgreSQL y MySQL, así como almacenamiento documental flexible con MongoDB.',
    imagen:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    etiquetas: ['PostgreSQL', 'MySQL', 'MongoDB', 'ORM / ODM', 'Normalización'],
    proyectos: '10+ esquemas optimizados',
    icono: '🗄️'
  },
  {
    id: 4,
    titulo: 'DevOps, CI/CD & Despliegue en la Nube',
    subtitulo: 'Automatización con Git, Docker & Cloud Hosting',
    categoria: 'DevOps',
    nivel: 'Intermedio',
    descripcion:
      'Contenerización de aplicaciones con Docker, gestión de repositorios con Git y GitHub, pipelines automatizados de integración continua y publicación en plataformas como GitHub Pages, Vercel y AWS.',
    imagen:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    etiquetas: ['Docker', 'Git & GitHub', 'CI/CD Pipelines', 'GitHub Pages', 'Nube'],
    proyectos: '15+ despliegues automatizados',
    icono: '☁️'
  },
  {
    id: 5,
    titulo: 'Diseño UI/UX & Sistemas de Diseño',
    subtitulo: 'Prototipado, Accesibilidad Web & Responsive Design',
    categoria: 'Frontend',
    nivel: 'Avanzado',
    descripcion:
      'Creación de experiencias visuales intuitivas, wireframes en Figma, implementación Mobile First con CSS Grid y Flexbox, contraste WCAG y micro-animaciones fluidas para interacción premium.',
    imagen:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    etiquetas: ['Figma', 'UI/UX', 'Mobile First', 'Accesibilidad (a11y)', 'CSS Moderno'],
    proyectos: '20+ layouts interactivos',
    icono: '🎨'
  },
  {
    id: 6,
    titulo: 'Ciberseguridad y Validación de Datos',
    subtitulo: 'Protección contra XSS, Inyección & Sanitización',
    categoria: 'Seguridad',
    nivel: 'Intermedio - Alto',
    descripcion:
      'Implementación de validaciones robustas en cliente y servidor mediante expresiones regulares, sanitización de inputs, protección CORS, cabeceras HTTP seguras y gestión estricta de credenciales.',
    imagen:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    etiquetas: ['Seguridad Web', 'Regex', 'Sanitización', 'CORS', 'Protección XSS'],
    proyectos: 'Auditorías y controles continuos',
    icono: '🛡️'
  }
];

export const CATEGORIAS_SERVICIOS = [
  'Todos',
  'Frontend',
  'Backend',
  'Bases de Datos',
  'DevOps',
  'Seguridad'
];
