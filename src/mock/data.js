import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dan Murphy | Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'My Personal Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Dan Murphy.',
  subtitle: 'I am a self-taught Software Developer.',
  cta: 'More About Dan',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'I am a self-taught software developer with a passion for problem solving. As long as I can remember, I have asked the question "Why?"..."why is the sky blue?", "why am I not allowed to do that?", "why does that solution work when others would not?" This curiosity has stayed with me into my adult years, and I feel that it makes me a good developer and problem solver. It is not enough that I solve the problem (development or otherwise); rather, I aim to understand why the solution works and to learn from that experience with new information to further my own understanding and to help others.',
  paragraphTwo: 'My first venture into development/coding came during my senior year of undergrad, where I took a Visual Basic course to fulfill a general education requirement. I learned the basics in that class of writing code and solving problems like a developer. Those basics have served me well during my journey as a self-taught developer - learning more advanced languages and technologies such as HTML/CSS, JavaScript, Node, and React. As a dedicated life-long learner, each time that I sit down to work on a project or to study, I am excited knowing that I will learn something that I didn\'t know before.',
  paragraphThree: 'In addition to being a self-taught developer, I am also a veteran of the United States Navy. While serving in the Navy, I was an Avionics Technician. As an AT, I had the pleasure of maintaining (AKA repairing and troubleshooting) some of the most advanced avionics suites in the world. I was routinely called upon to troubleshoot and repair some of the most difficult discrepancies. In doing so, I stretched my critical thinking and problem solving skills. I believe that experience has helped me to think as a developer when solving problems and squishing bugs in my code. Moreover, my experience in the Navy provided me with sold team-work and leadership skills that make me a great addition to any team environment.',
  resume: 'https://drive.google.com/file/d/1Ml6iW-JEjYJavhdkY4m2jNOghrXCr0Lj/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
