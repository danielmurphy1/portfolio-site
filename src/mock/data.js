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
  paragraphTwo: 'My first venture into development/coding came during my senior year of undergrad, where I took a Visual Basic course to fulfill a general education requirement. I learned the basics  of writing code and solving problems like a developer in that class. Those basics have served me well during my journey as a self-taught developer - learning more advanced languages and technologies such as HTML/CSS, JavaScript, Node, and React. As a dedicated life-long learner, each time that I sit down to work on a project or to study, I am excited knowing that I will learn something that I didn\'t know before.',
  paragraphThree: 'In addition to being a self-taught developer, I am also a veteran of the United States Navy. While serving in the Navy, I was an Avionics Technician. As an AT, I had the pleasure of maintaining (AKA repairing and troubleshooting) some of the most advanced avionics suites in the world. I was routinely called upon to troubleshoot and repair some of the most difficult discrepancies. In doing so, I stretched my critical thinking and problem-solving skills. I believe that experience has helped me to think as a developer when solving problems and squishing bugs in my code. Moreover, my experience in the Navy provided me with solid teamwork and leadership skills that make me a great addition to any team environment.',
  paragraphFour: 'Lastly, as you can see, I have a pretty sweet beard, of which I am quite proud.',
  resume: 'https://drive.google.com/file/d/1Ml6iW-JEjYJavhdkY4m2jNOghrXCr0Lj/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'snake.jpg',
    title: 'Snake Game',
    info: 'This is my take on the classic snake game that came pre-installed on many cellphones in the late 1990\'s and early 2000\'s (looking at you Nokia!). I created this project to learn how use the HTML canvas element and how to continually draw over the canvas using the setInterval() function to mimic animation. The application is created with HTML, basic CSS, and JavaScript without any libraries or frameworks. ' ,
    info2: 'Creating this application, I ran into a few problems. First was getting the body pieces of the snake to follow the head. I solved this problem by moving only the head of the snake, and redrawing each segment taking the place of the segment that was in front of it. Debugging this application helped me to learn how the logic flows while the code runs.',
    url: 'https://danielmurphy1.github.io/SnakeGame/',
    repo: 'https://github.com/danielmurphy1/SnakeGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'starwars.jpg',
    title: 'Star Wars API',
    info: 'This application creates a searchable table of Star Wars characters using the swapi.dev API. My goal in creating this application was to get more experience consuming data from an API and displaying it to the user. In creating the application I used JavaScript\'s async...await functionality to resolve the promises of each fetch request to the external API. The returned data is displayed to the user in a dynamic table created in React and styled with Bootstrap.',
    info2: 'In creating this application, I ran into a problem where some of the returned JSON data at an endpoint contained other endpoints as values. This was a headscratcher for me. Ultimately, I was able to handle this problem by creating another fetch request and resolving the promise created by it, as well as the original promise from the initial data fetch. In doing so, the Postman API tool was critical to help me keep track of the layered endpoints. This project certainly caused me to grow as a developer and stretched my problem-solving skills.',
    url: 'https://pacific-harbor-78489.herokuapp.com/',
    repo: 'https://github.com/danielmurphy1/star-wars-api/blob/master/src/App.js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brewery.jpg',
    title: 'Brewery Database App',
    info: 'The Brewery Database Application consumes data from the Open Brewery Database API and displays the data to the user. The user can search the database by city, state, or brewery name using a resolved fetch request with promises. The requested data is displayed to the user with React and the built-in Bootstrap card component. Using the Bootstrap card allowed me to really take advantage of React\'s ability to create re-usable components - each displayed card being the output of the JavaScript .map method.',
    info2: 'I created this application to get more experience with React. At the point when I created this application, I had already made a few with React, but each of the used Class components. So, when I went to create this application, I decided to challenge myself and use Functional components to hold state, thus forcing me to learn how to use React Hooks. I really enjoyed creating this application, and I am glad that I forced myself to grow as a developer and learn to use Hooks.',
    url: 'https://mighty-stream-27218.herokuapp.com/',
    repo: 'https://github.com/danielmurphy1/brewery-database-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter.jpg',
    title: 'Tweeter Grabberer',
    info: 'This application is a full-stack application. The back-end uses Node and Express to serve the application, connect to the Twitter API, create a local API, and pass the consumed data to the front-end. In addition to serving the returned data to the front end, I used Axios POST for OAuth2 authentication, as the Twitter API only grants access to authenticated users. The front-end utilizes React to display the data served to the local API by the back-end. The application allows the user to search for tweets from any public user of Twitter, search for tweets by topic, and to retrieve a random tweet from any one of my favorite five Twitter users. I used React Router to display the different pages for this application.',
    info2: 'Creating this application was certainly a challenge. The Twitter API was the most complicated API that I had used to that point. I used the Twitter API documentation extensively to be able to consume the data that I needed. Once again, Postman was an invaluable tool in being able to find the JSON data that I needed to display properly to the user. I really enjoyed all the moving parts in creating this full-stack application; it certainly allowed me to learn and grow as a developer as well as stretch my problem-solving skills.',
    url: 'https://mighty-reaches-83026.herokuapp.com/',
    repo: 'https://github.com/danielmurphy1/twitter-api-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Dan',
  email: 'murphydanielt@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-murphy-055/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/danielmurphy1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
