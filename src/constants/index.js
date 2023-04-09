import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  java,
  git,
  podcastr,
  dtmoney,
  ignews,
  azulSystem,
  nextjs,
  expogo,
  graphql,
  reactNative,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre',
  },
  {
    id: 'work',
    title: 'Experiência',
  },
  {
    id: 'contact',
    title: 'Contato',
  },
]

const services = [
  {
    title: 'React',
    icon: web,
  },
  {
    title: 'Next JS',
    icon: mobile,
  },
  {
    title: 'React Native',
    icon: backend,
  },
  {
    title: 'Node JS',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'React Native',
    icon: reactNative,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Java',
    icon: java,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Expo GO',
    icon: expogo,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
]

const experiences = [
  {
    title: 'Desenvolvedor Front-end',
    company_name: 'Grupo Azul - Venture Builder',
    icon: azulSystem,
    iconBg: '#E6DEDD',
    date: 'Dez 2021 - Presente',
    points: [
      'Desenvolvimento e manutenção de aplicações web usando React.js e NextJS e outras tecnologias relacionadas.',
      'Desenvolvimento e manuntenção de uma aplicação mobile usando React Native do design a produção.',
      'Trabalhei em  projetos de NFT com foco no desenvolvimento e manutenção do front-end.',
      'Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.',
    ],
  },
]

const projects = [
  {
    name: 'Podcastr',
    description:
      'Esta é uma aplicação web que permite os usuários ouvirem seus podcasts favoritos, ver os últimos lançamentos e obter mais informações dos podcasts que estiverem ouvindo no momento.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
    ],
    image: podcastr,
    source_code_link: 'https://github.com/Lucas-barreto1/podcastr',
  },
  {
    name: 'DT Money',
    description:
      ' Esta é uma aplicação web que permite o usuário cadastrar suas entradas e saídas financeiras além de separar por categorias, e assim permitindo gerenciar e ter um maior controle de suas finanças.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: dtmoney,
    source_code_link: 'https://github.com/Lucas-barreto1/dt-money',
  },
  {
    name: 'Ignews',
    description:
      'É um portal de notícias no qual os usuários pagam para ter acesso. o usuário só tem acesso das postagens caso ele tenha uma inscrição ativa. caso contrário, poderá ler apenas um resumo das postagens.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'faunadb',
        color: 'pink-text-gradient',
      },
    ],
    image: ignews,
    source_code_link: 'https://github.com/Lucas-barreto1/ignews',
  },
]

export { services, technologies, experiences, projects }
