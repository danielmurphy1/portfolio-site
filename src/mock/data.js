import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dan Murphy | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'My Personal Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Dan Murphy.',
  subtitle: 'I am a self-taught Software Engineer.',
  cta: 'More About Dan',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'I am a software engineer with a passion for problem solving. As long as I can remember, I have asked the question "Why?", and I feel that asking that question makes me a better engineer. It is not enough that I solve the problem (development or otherwise); rather, I aim to understand why the solution works and to learn from that experience with new information to further my own understanding and to help others.',
  paragraphTwo:
    'I became a software engineer due to my desire to continuously challenge myself and my dedication to being a life-long learner. I am not certain which I love more about this profession: the logical thinking, problem-solving thought process that comes with development or the ability to create solutions to real-world problems that can both help people or bring them joy. Regardless of which it is, I do love this career, and I am happy and proud to be a self-taught engineer. I work hard, I am dedicated, and I certainly follow-through.',
  paragraphThree:
    'In addition to being an engineer, I am also a veteran of the United States Navy, having served as an Avionics Technician. As an Avionics Tech, I had the pleasure of maintaining (that is, repairing and troubleshooting) some of the most advanced avionics suites in the world. I was routinely called upon to troubleshoot and repair some of the most difficult discrepancies. In doing so, I stretched my critical thinking and problem-solving skills, which I believe make me a better developer. Moreover, my experience in the Navy provided me with solid teamwork and leadership skills that make me a great addition to any team environment.',
  paragraphFour: 'Lastly, as you can see, I have a pretty sweet beard, of which I am quite proud.',
  resume: 'https://drive.google.com/file/d/14No2QhMWkW1aKuex0Sc_bySxJd16_jm9/view?usp=drive_link', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'forum.jpg',
    title: 'Eclectic Forums',
    info: 'Eclectic Forums is a forum project that I developed to continue my development of full-stack, fully functional CRUD applications. It allows users to post, comment, and reply in a forum based on topics that are interesting to me.',
    info2:
      'This project was the first one that I developed using a back-end that did not use Node.js/Express. Rather, it uses C#/.NET stack for the backend - leveraging ASP.NET to build out the internal API that is used for the application. It uses PostgreSQL as its database, with Entity Framework as the database ORM. With this project, I also continued to learn more in the Angular Framework as well. I used Angular Guards for route protection for the first time as well as Interceptors as middleware to modify HTTP requests being sent to the server. Additionally, I learned more about Subjects and BehaviorSubjects to track and use client state through a service so that components could share that state for authorization.',
    url: 'https://forumproject.azurewebsites.net/',
    repo: 'https://github.com/danielmurphy1/ForumProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stocks.jpg',
    title: 'Fantasy Stock Trader',
    info: 'A full-stack, fully functional CRUD application, Fantasy Stock Trader allows the user to take on the ups and downs of trading their favorite stocks without any of the risk. User and stock information is stored in a SQL database. Node and Express handle the backend traffic of the internal API between the database and the Twelve Data API and then serve the information to the user through React. React Hooks allow the frontend client to be organized and purposeful, providing a great user experience.',
    info2:
      'This application allowed me to use the skills that I have gained through my journey as a self-taught engineer to create a fun application with real-world use. In order to create this application I had to learn SQL and how to authenticate users. I enjoyed learning SQL and the problem solving that goes into some queries. This application was also the most difficult to deploy, and I ran into some hurdles doing so. Here the perseverance and critical thinking skills that I have developed as a self-taught engineer were instrumental in my ability to come through the other end. ',
    url: 'https://fantasy-stocks-app.onrender.com/',
    repo: 'https://github.com/danielmurphy1/fantasystockapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snake.jpg',
    title: 'Snake Game',
    info: "This is my take on the classic snake game that came pre-installed on many cellphones in the late 1990's and early 2000's (looking at you Nokia!). I created this project to learn how to use the HTML canvas element and how to continuously draw over the canvas using the setInterval() function to mimic animation. The application is created with HTML, basic CSS, and JavaScript without any libraries or frameworks. ",
    info2:
      'Creating this application, I ran into a few problems. First was getting the body pieces of the snake to follow the head. I solved this problem by moving only the head of the snake, and redrawing each segment taking the place of the segment that was in front of it. Debugging this application helped me to learn how the logic flows while the code runs.',
    url: 'https://danielmurphy1.github.io/SnakeGame/',
    repo: 'https://github.com/danielmurphy1/SnakeGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brewery.jpg',
    title: 'Brewery Database App',
    info: "The Brewery Database Application consumes data from the Open Brewery Database API and displays the data to the user. The user can search the database by city, state, or brewery name using a resolved fetch request with promises. The requested data is displayed to the user with React and the built-in Bootstrap card component. Using the Bootstrap card allowed me to really take advantage of React's ability to create re-usable components - each displayed card being the output of the JavaScript .map method.",
    info2:
      'I created this application to get more experience with React. At the point when I created this application, I had already made a few with React, but each of them used Class components. So, when I went to create this application, I decided to challenge myself and use Functional components to hold state, thus forcing me to learn how to use React Hooks. I really enjoyed creating this application, and I am glad that I forced myself to grow as an engineer and learn to use Hooks.',
    url: 'https://brewery-database-app.onrender.com',
    repo: 'https://github.com/danielmurphy1/brewery-database-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'starwars.jpg',
    title: 'Star Wars API',
    info: "This application creates a searchable table of Star Wars characters using the swapi.dev API. My goal in creating this application was to get more experience consuming data from an API and displaying it to the user. In creating the application I used JavaScript's async...await functionality to resolve the promises of each fetch request to the external API. The returned data is displayed to the user in a dynamic table created in React and styled with Bootstrap.",
    info2:
      'In creating this application, I ran into a problem where some of the returned JSON data at an endpoint contained other endpoints as values. This was a head-scratcher for me. Ultimately, I was able to handle this problem by creating another fetch request and resolving the promise created by it, as well as the original promise from the initial data fetch. In doing so, the Postman API tool was critical to help me keep track of the layered endpoints. This project certainly caused me to grow as an engineer and stretched my problem-solving skills.',
    url: 'https://star-wars-api-3n5d.onrender.com',
    repo: 'https://github.com/danielmurphy1/star-wars-api', // if no repo, the button will not show up
  },

  // {
  //   id: nanoid(),
  //   img: 'twitter.jpg',
  //   title: 'Tweet Grabber',
  //   info: 'This application is a full-stack application. The back-end uses Node and Express to serve the application, connect to the Twitter API, create a local API, and pass the consumed data to the front-end. In addition to serving the returned data to the front end, I used Axios POST for OAuth2 authentication, as the Twitter API only grants access to authenticated users. The front-end utilizes React to display the data served to the local API by the back-end. The application allows the user to search for tweets from any public user of Twitter, search for tweets by topic, and to retrieve a random tweet from any one of my favorite five Twitter users. I used React Router to display the different pages for this application.',
  //   info2:
  //     'Creating this application was certainly a challenge. The Twitter API was the most complicated API that I had used to that point. I used the Twitter API documentation extensively to be able to consume the data that I needed. Once again, Postman was an invaluable tool in being able to find the JSON data that I needed to display properly to the user. I really enjoyed all the moving parts in creating this full-stack application; it certainly allowed me to learn and grow as a developer as well as stretch my problem-solving skills.',
  //   url: 'https://mighty-reaches-83026.herokuapp.com/',
  //   repo: 'https://github.com/danielmurphy1/twitter-api-app', // if no repo, the button will not show up
  // },
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
