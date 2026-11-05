import { Localized } from '../core/i18n/i18n';

/*
 * Todo o conteúdo do portfólio fica aqui.
 */

export interface Profile {
  name: string;
  github: string;
  linkedin: string;
  /** Caminho do PDF dentro de /public. Enquanto for null, o botão de currículo não aparece. */
  cv: { pt: string | null; en: string | null };
  education: {
    course: Localized;
    institution: string | null;
  };
}

export interface ProjectDetail {
  problem: Localized;
  solution: Localized;
  goal: Localized;
  features: Localized[];
  architecture: Localized[];
}

export interface Project {
  slug: string;
  name: string;
  summary: Localized;
  tags: string[];
  /** Imagem em /img. Sem imagem, o card mostra `codePreview`. */
  image?: string;
  codePreview?: string;
  status?: Localized;
  site?: string;
  repo?: string;
  detail?: ProjectDetail;
}

/** Um cargo dentro de uma empresa. */
export interface ExperienceRole {
  title: Localized;
  /** "AAAA-MM" */
  start: string | null;
  /** "AAAA-MM"; null no cargo atual vira "hoje". */
  end: string | null;
  highlights: Localized[];
  /** Conquistas: aparecem destacadas acima dos tópicos. */
  achievements?: Localized[];
}

/** Uma empresa/instituição. Vários cargos = promoções, do mais recente ao mais antigo. */
export interface Experience {
  place: string | null;
  mode?: Localized;
  current: boolean;
  roles: ExperienceRole[];
}

export type TechGroup = 'front' | 'back' | 'data' | 'tools' | 'arch';

export interface Technology {
  name: string;
  group: TechGroup;
  note?: string;
}

/** Como cada curiosidade aparece no mural. */
export type FunFactStyle = 'note' | 'polaroid' | 'ticket' | 'card';

export interface FunFact {
  style: FunFactStyle;
  label: Localized;
  value: Localized | null;
  image?: string;
}

export const PROFILE: Profile = {
  name: 'Amanda Rosario',
  github: 'https://github.com/Amandarosariodn',
  linkedin: 'https://www.linkedin.com/in/amanda-rosario-30848932a/',
  cv: { pt: null, en: null },
  education: {
    course: { pt: 'Sistemas de Informação', en: 'Information Systems' },
    institution: 'Unisales',
  },
};

export const PROJECTS: Project[] = [
  {
    slug: 'bookfly',
    name: 'BookFly',
    image: '/img/preview-bookfly.png',
    status: { pt: 'no ar', en: 'live' },
    summary: {
      pt: 'Rede social para leitores: avaliações, comunidades, estantes e metas de leitura. Fiz o backend e a integração com a Google Books API.',
      en: 'A social network for readers: reviews, communities, shelves and reading goals. I built the backend and the Google Books API integration.',
    },
    tags: ['Angular', '.NET', 'PostgreSQL', 'NHibernate', 'Google Books API'],
    site: 'https://bookfly-ivory.vercel.app/index.html',
    repo: 'https://github.com/Amandarosariodn/bookfly',
    detail: {
      problem: {
        pt: 'Leitores muitas vezes têm dificuldade para encontrar pessoas com gostos parecidos e acompanhar suas leituras em um ambiente voltado para livros.',
        en: 'Readers often struggle to find people with similar taste and to keep track of their reading in a space made for books.',
      },
      solution: {
        pt: 'O BookFly centraliza avaliações, comunidades, estantes e recomendações, criando uma experiência social focada no universo literário.',
        en: 'BookFly brings reviews, communities, shelves and recommendations together in one social experience built around books.',
      },
      goal: {
        pt: 'Construir uma aplicação web completa, aplicando frontend, backend, banco de dados, integração externa e arquitetura em camadas.',
        en: 'Build a complete web application covering frontend, backend, database, an external integration and a layered architecture.',
      },
      features: [
        { pt: 'Avaliação de livros', en: 'Book reviews' },
        { pt: 'Criação de comunidades literárias', en: 'Reading communities' },
        { pt: 'Comentários e interações entre usuários', en: 'Comments and interactions between users' },
        { pt: 'Estantes personalizadas', en: 'Custom shelves' },
        { pt: 'Metas de leitura', en: 'Reading goals' },
        { pt: 'Integração com a Google Books API', en: 'Google Books API integration' },
      ],
      architecture: [
        {
          pt: 'O backend foi desenvolvido com ASP.NET Core, PostgreSQL e NHibernate para o mapeamento objeto-relacional, em camadas: API, aplicação, domínio e infraestrutura.',
          en: 'The backend runs on ASP.NET Core with PostgreSQL and NHibernate for object-relational mapping, split into API, application, domain and infrastructure layers.',
        },
        {
          pt: 'No frontend, a interface foi construída com Angular e TypeScript, consumindo os endpoints da API para livros, comunidades, avaliações e usuários.',
          en: 'The frontend is built with Angular and TypeScript and consumes the API endpoints for books, communities, reviews and users.',
        },
        {
          pt: 'Fiquei responsável pela implementação do backend e pela integração com a Google Books API.',
          en: 'I was responsible for the backend implementation and the Google Books API integration.',
        },
      ],
    },
  },
  {
  slug: 'hint-match',
  name: 'Hint Match',
  image: '/img/preview-hintmatch.png',
  status: { pt: 'em desenvolvimento', en: 'in development' },
  summary: {
    pt: 'Plataforma de troca de habilidades que conecta pessoas interessadas em compartilhar conhecimentos e aprender umas com as outras, por meio de combinações entre habilidades oferecidas e desejadas.',
    en: 'A skill-exchange platform that connects people interested in sharing knowledge and learning from each other through matches between offered and desired skills.',
  },
  tags: ['Angular', 'TypeScript', 'Supabase', 'PostgreSQL'],
  detail: {
    problem: {
      pt: 'Muitas pessoas querem aprender novas habilidades, mas encontram dificuldades para acessar oportunidades de aprendizado acessíveis e personalizadas.',
      en: 'Many people want to learn new skills but struggle to find accessible and personalized learning opportunities.',
    },
    solution: {
      pt: 'O Hint Match conecta pessoas com interesses complementares, permitindo que compartilhem conhecimentos e aprendam umas com as outras por meio de trocas de habilidades.',
      en: 'Hint Match connects people with complementary interests, allowing them to share knowledge and learn from each other through skill exchanges.',
    },
    goal: {
      pt: 'Desenvolver uma plataforma que incentive o aprendizado colaborativo, conectando pessoas por meio de conhecimentos que desejam ensinar e aprender.',
      en: 'Develop a platform that encourages collaborative learning by connecting people through the skills they want to teach and learn.',
    },
    features: [
      {
        pt: 'Cadastro de habilidades que deseja ensinar e aprender',
        en: 'Registration of skills users want to teach and learn',
      },
      {
        pt: 'Descoberta de pessoas com interesses complementares',
        en: 'Discovery of people with complementary interests',
      },
      {
        pt: 'Sistema de matches entre usuários',
        en: 'User matching system',
      },
      {
        pt: 'Perfis com habilidades oferecidas e desejadas',
        en: 'Profiles with offered and desired skills',
      },
      {
        pt: 'Propostas de troca de conhecimentos',
        en: 'Knowledge exchange proposals',
      },
    ],
    architecture: [
      {
        pt: 'Banco de dados PostgreSQL gerenciado pelo Supabase, com estrutura versionada por meio de migrations.',
        en: 'PostgreSQL database managed by Supabase, with schema versioning through migrations.',
      },
    ],
  },
  },
];

export const EXPERIENCES: Experience[] = [
  {
    place: 'Maxpar',
    current: true,
    roles: [
      {
        title: { pt: 'Desenvolvedora I', en: 'Software Developer I' },
        start: '2026-07',
        end: null,
        achievements: [
          {
            pt: 'Efetivada como Desenvolvedora I após 11 meses de estágio',
            en: 'Hired as Software Developer I after a 11-month internship',
          },
        ],
        highlights: [
          {
            pt: 'Desenvolvimento e manutenção de aplicações web e APIs REST com ASP.NET Core (.NET 8) e Angular',
            en: 'Building and maintaining web applications and REST APIs with ASP.NET Core (.NET 8) and Angular',
          },
          {
            pt: 'Refatoração de grande parte do código da aplicação junto com o time',
            en: 'Refactored a large part of the application codebase together with the team',
          },
          {
            pt: 'Acompanhamento de logs e da aplicação em produção com Grafana',
            en: 'Monitoring logs and production behavior with Grafana',
          },
          {
            pt: 'Refinamento de cards com o time e apresentação de soluções técnicas',
            en: 'Backlog refinement with the team and presenting technical solutions',
          },
        ],
      },
      {
        title: { pt: 'Estagiária de Desenvolvimento de Software', en: 'Software Development Intern' },
        start: '2025-09',
        end: '2026-07',
        achievements: [
          {
            pt: 'Participei do desenvolvimento de um produto de uso interno, entregue em produção pelo time após 3 meses',
            en: 'Helped build an internal product that the team shipped to production after 3 months',
          },
        ],
        highlights: [
          {
            pt: 'Desenvolvimento e manutenção de aplicações web com ASP.NET Core e Angular',
            en: 'Building and maintaining web applications with ASP.NET Core and Angular',
          },
          {
            pt: 'APIs REST, regras de negócio e integração com banco de dados',
            en: 'REST APIs, business rules and database integration',
          },
          {
            pt: 'Correção de bugs e evolução de aplicações em produção',
            en: 'Fixing bugs and evolving applications in production',
          },
        ],
      },
    ],
  },
  {
    place: 'Ctrl+Play',
    current: false,
    roles: [
      {
        title: {
          pt: 'Professora de Informática e Lógica de Programação',
          en: 'Computing & Programming Logic Teacher',
        },
        start: '2025-02',
        end: '2025-09',
        highlights: [
          {
            pt: 'Aulas de lógica com jogos e atividades interativas',
            en: 'Logic classes built around games and interactive activities',
          },
          {
            pt: 'Projetos com Construct, GameMaker, Unity e Blender',
            en: 'Projects with Construct, GameMaker, Unity and Blender',
          },
        ],
      },
    ],
  },
];

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: 'Angular', group: 'front' },
  { name: 'TypeScript', group: 'front' },
  { name: 'JavaScript', group: 'front' },
  { name: 'HTML5', group: 'front' },
  { name: 'CSS3', group: 'front' },
  { name: 'Tailwind CSS', group: 'front' },

  // Backend
  { name: 'C#', group: 'back' },
  { name: '.NET 8', group: 'back' },
  { name: 'ASP.NET Core', group: 'back' },
  { name: 'Java', group: 'back' },
  { name: 'NHibernate', group: 'back' },

  // Databases
  { name: 'Oracle', group: 'data', note: 'PL/SQL' },
  { name: 'MySQL', group: 'data' },
  { name: 'PostgreSQL', group: 'data' },
  { name: 'MongoDB', group: 'data' },
  { name: 'DynamoDB', group: 'data' },

  // Tools
  { name: 'Git', group: 'tools' },
  { name: 'GitHub', group: 'tools' },
  { name: 'Azure DevOps', group: 'tools' },
  { name: 'Swagger', group: 'tools' },
  { name: 'Postman', group: 'tools' },

  // Architecture and quality
  { name: 'DDD', group: 'arch' },
  { name: 'SOLID', group: 'arch' },
  { name: 'REST APIs', group: 'arch' },
  { name: 'xUnit', group: 'arch' },
  { name: 'NSubstitute', group: 'arch' },
];

export const FUN_FACTS: FunFact[] = [
  {
    style: 'card',
    label: { pt: 'café ou chá?', en: 'coffee or tea?' },
    value: {pt: 'café!!', en: 'coffee!!'},
  },
  {
    style: 'card',
    label: { pt: 'hobbies favoritos', en: 'favorite hobbies' },
    value: {pt: 'pintura aquarela, pilates, jogos de tabuleiro', en: 'watercolor painting, pilates, board games'},
  },
  {
    style: 'card',
    label: { pt: 'uma curiosidade aleatória', en: 'a random fact' },
    value: {pt: 'antes de escrever código, eu trabalhava com design', en: 'before writing code, I worked with design'},
  },
  {
    style: 'ticket',
    label: { pt: 'antes da TI', en: 'before tech' },
    value: {
      pt: 'cursei 3 períodos de Pedagogia',
      en: 'I studied Education for 3 semesters',
    },
  },
  {
    style: 'note',
    label: { pt: 'um fato curioso', en: 'a curious fact' },
    value: {pt: 'eu sou canhota', en: 'I am left-handed'},
  }
];
