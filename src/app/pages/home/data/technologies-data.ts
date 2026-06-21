export interface Technology {
  name: string;
  icon: string;
}

export interface TechnologyCategory {
  title: string;
  className: string;
  technologies: Technology[];
}

export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    title: 'frontend.',
    className: 'technologies-front',
    technologies: [
      { name: 'Angular', icon: '/img/Angular.svg' },
      { name: 'TypeScript', icon: '/img/TypeScript.svg' },
      { name: 'HTML5', icon: '/img/HTML5.svg' },
      { name: 'CSS3', icon: '/img/CSS3.svg' },
      { name: 'Tailwind CSS', icon: '/img/TailwindCSS.svg' },
    ],
  },
  {
    title: 'backend.',
    className: 'technologies-back',
    technologies: [
      { name: 'C#', icon: '/img/CSharp.svg' },
      { name: '.NET Core', icon: '/img/DotNet.svg' },
      { name: 'NHibernate', icon: '/img/NHibernate.svg' },
    ],
  },
  {
    title: 'databases.',
    className: 'technologies-data',
    technologies: [
      { name: 'PostgreSQL', icon: '/img/PostgresSQL.svg' },
      { name: 'MySQL', icon: '/img/MySQL.svg' },
      { name: 'Oracle', icon: '/img/Oracle.svg' },
    ],
  },
  {
    title: 'tools.',
    className: 'technologies-tools',
    technologies: [
      { name: 'Git', icon: '/img/Git.svg' },
      { name: 'GitHub', icon: '/img/GitHub.svg' },
      { name: 'Swagger', icon: '/img/Swagger.svg' },
      { name: 'Postman', icon: '/img/Postman.svg' },
    ],
  },
  {
    title: 'architecture.',
    className: 'technologies-architecture',
    technologies: [
      { name: 'DDD', icon: '/img/domain.svg' },
      { name: 'REST API', icon: '/img/rest-api.svg' },
      { name: 'SOLID', icon: '/img/solid.svg' },
      { name: 'xUnit', icon: '/img/xunit.svg' },
    ],
  },
];
