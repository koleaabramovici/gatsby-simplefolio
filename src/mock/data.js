import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is',
  name: 'Nicolae',
  subtitle: 'Scroll down to see who I am.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'BAL00495.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '1',
    title: 'About me page',
    info: 'This is my very first project using HTML and CSS. Probably the one which motivated me to keep doing what I started.',
    info2: '',
    url: '',
    repo: 'https://github.com/koleaabramovici/myWeb', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '2',
    title: 'Chloe',
    info: 'A kind of shoping website, I had to implement this website from Figma to HTML and CSS.',
    info2: '',
    url: '',
    repo: 'https://github.com/koleaabramovici/chloe-figma-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '3',
    title: 'Random Meal',
    info: 'This website brings to the UI a new meal everytime you press the button GET MEAL, it fetching data from an external API.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'antir.nicu.97@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicolae-antir-ab9946205/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/koleaabramovici',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
