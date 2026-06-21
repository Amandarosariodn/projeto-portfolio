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
      { name: 'Angular', icon: '/img/angular.svg' },
      { name: 'TypeScript', icon: '/img/typescript.svg' },
      { name: 'HTML5', icon: '/img/html.svg' },
      { name: 'CSS3', icon: '/img/css.svg' },
      { name: 'Tailwind CSS', icon: '/img/tailwind.svg' },
    ],
  },
  {
    title: 'backend.',
    className: 'technologies-back',
    technologies: [
      { name: 'C#', icon: '/img/csharp.svg' },
      { name: '.NET', icon: '/img/dotnet.svg' },
      { name: 'NHibernate', icon: '/img/nhibernate.svg' },
    ],
  },
  {
    title: 'databases.',
    className: 'technologies-data',
    technologies: [
      { name: 'PostgreSQL', icon: '/img/postgresql.svg' },
      { name: 'MySQL', icon: '/img/mysql.svg' },
      { name: 'Oracle', icon: '/img/oracle.svg' },
    ],
  },
  {
    title: 'tools.',
    className: 'technologies-tools',
    technologies: [
      { name: 'Git', icon: '/img/git.svg' },
      { name: 'GitHub', icon: '/img/github.svg' },
      { name: 'Swagger', icon: '/img/swagger.svg' },
      { name: 'Postman', icon: '/img/postman.svg' },
    ],
  },
  {
    title: 'architecture.',
    className: 'technologies-architecture',
    technologies: [
      { name: 'DDD', icon: '/img/ddd.svg' },
      { name: 'REST API', icon: '/img/rest.svg' },
      { name: 'SOLID', icon: '/img/solid.svg' },
      { name: 'xUnit', icon: '/img/xunit.svg' },
    ],
  },
];
