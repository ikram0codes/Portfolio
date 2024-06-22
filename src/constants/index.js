import {
  facebook,
  linkedin,
  instagram,
  twitter,
  github,
  facebook1,
  linkedin1,
  instagram1,
  twitter1,
  github1,
  tictactoe,
  mathmagician,
  recipeapp,
  trackbudget,
  tictactoe1,
  tictactoe2,
  tictactoe3,
  recipeapp3,
  recipeapp4,
  recipeapp6,
  trackbuget1,
  trackbuget2,
  trackbuget5,
  chitchat1,
  chitchat3,
  chitchat4,
  chitchat5,
  apple1,
  apple2,
  apple3,
  apple4,
  apple5,
  cch1,
  cch2,
  cch3,
  cch4,
  cch5,
  responsive,
  react,
  fullstack,
} from "../assets";

const social = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ikram-khan-b93251311",
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: "Facebook",
    url: "https://www.facebook.com/ikram0pakistan",
    icon: facebook,
    icon1: facebook1,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/ikram0pakistan_7",
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 4,
    name: "Twitter",
    url: "https://twitter.com/ikram0pakistan",
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 5,
    name: "Github",
    url: "https://github.com/ikram0codes",
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ["languages", "all"],
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "Node Js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    stack: ["languages", "all"],
    name: "Mongo DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
  },

  {
    stack: ["frameworks", "all"],
    name: "Socket.io",
    icon: "https://avatars.githubusercontent.com/u/10566080?s=200&v=4",
  },

  {
    stack: ["frameworks", "all"],
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Next JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Three Js",
    icon: "https://avatars.githubusercontent.com/u/10566080?s=200&v=4",
  },

  {
    stack: ["frameworks", "all"],
    name: "Redux Toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "MUI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "GitHub",
    icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },

  {
    stack: ["tools", "all"],
    name: "Webpack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Visual Studio Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },

  {
    stack: ["tools", "all"],
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const projects = [
  {
    id: 1,
    name: "Real-Time Chat App",
    desc: "Chit Chat is a real-time chat application built using Node Js and Socket.io for real-time connection between browsers. While it is a compete MERN app with React Js in frontend and a very seamless and user friendly Ui. This app has all the neccessary features for a Chat Application such as single chat, group chat, profiles, friends and notifications etc.",
    tech: ["Node Js", "Socket.io", "React", "Mongo DB"],
    img: chitchat1,
    carousel: [chitchat1, chitchat3, chitchat4, chitchat5],
    source_link: "https://github.com/ikram0codes/Chit_Chat_Frontend",
    live_link: "https://github.com/ikram0codes/Chit_Chat_baceknd",
  },
  {
    id: 2,
    name: "Apple IPhone 15 Clone",
    desc: "Chit Chat is a real-time chat application built using Node Js and Socket.io for real-time connection between browsers. While it is a compete MERN app with React Js in frontend and a very seamless and user friendly Ui. This app has all the neccessary features for a Chat Application such as single chat, group chat, profiles, friends and notifications etc.",
    tech: ["React Js", "Three Js", "GSAP", "tailwindcss"],
    img: apple1,
    carousel: [apple1, apple2, apple3, apple4, apple5],
    source_link: "https://github.com/ikram0codes/apple-cloned",
    live_link: "https://apple-clone-ten-beige.vercel.app",
  },

  {
    id: 3,
    name: "Full-Stack Blog",
    desc: "This is the 1st version of my full-stack blog CyberCodeHub. The primary technology used in Next Js because of it's extraordinary SEO performance due to Server Side Rendering. For styling I have used Modular Css. In this blog i have also added features like active Table of Content and dark mode etc.",
    tech: ["Next Js", "Modular CSS", "Mongo Db"],
    img: cch1,
    carousel: [cch1, cch2, cch3, cch4, cch5],
    source_link: "https://github.com/ikram0codes/cybercodehub",
    live_link: "  https://www.cybercodehub.com",
  },
  {
    id: 4,
    name: "Recipe App",
    desc: "The Recipe app keeps track of all your foods, recipes, and ingredients. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Since sharing recipes is an important part, it allows you to make them public so anyone can access them.",
    tech: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    img: recipeapp,
    carousel: [recipeapp3, recipeapp4, recipeapp6],
    source_link: "https://github.com/ikram0codes/",
    live_link: "https://recipe-app121-b8888e20687b.herokuapp.com/",
  },

  {
    id: 7,
    name: "Track Budget App",
    desc: "Track Budget is a mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what category.",
    tech: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    img: trackbudget,
    carousel: [trackbuget1, trackbuget2, trackbuget5],
    sourc_link: "https://github.com/ikram0codes/",
    live_link: "https://track-budget121-70a570d4e3e1.herokuapp.com/",
  },
  {
    id: 8,
    name: "Math Magicians",
    desc: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    tech: ["React"],
    img: mathmagician,
    carousel: [mathmagician],
    source_link: "https://github.com/ikram0codes/",
    live_link: "https://math-magicians121.netlify.app/",
  },
  {
    id: 9,
    name: "Tic Tac Toe",
    desc: "Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: tictactoe,
    carousel: [tictactoe1, tictactoe2, tictactoe3],
    source_link: "https://github.com/ikram0codes/",
    live_link: "https://tic-tac-toe121.netlify.app/",
  },
 
];

const testimonials = [
  
  {
    id: 3,
    name: "Muhammad Talha Hanif",
    image:
      "https://media.licdn.com/dms/image/D4D35AQFAyNEYRXzHgg/profile-framedphoto-shrink_400_400/0/1687861232819?e=1701936000&v=beta&t=7YS0lpSFgX1meg_AubaY4MJLyL7_x1z42qRnGXU8PTo",
    text: "He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.",
    country: "Pakistan",
    linkedIn: "https://www.linkedin.com/in/muhammad-talha-hanif/",
  },
  {
    id: 4,
    name: "Ahmed Hasan Rony",
    image: "https://avatars.githubusercontent.com/u/77187003?v=4",
    text: "I really am comfortable with collaborating and coding with Ikram. His ingenious ideas give me a lot of ideas solving a problem multiple ways.",
    country: "India",
    linkedIn: "https://www.linkedin.com/in/ahroniy/",
  },
  {
    id: 5,
    name: "Innocent N.",
    image:
      "https://media.licdn.com/dms/image/D5603AQE1qYMUswBOAw/profile-displayphoto-shrink_400_400/0/1688151359384?e=1705536000&v=beta&t=b6QNQZaBEBBfH0g7fvcZdS0L9jXgScAvXANDsOE6548",
    text: "Communication was another strength that Ikram brought to the table. He actively listened, communicated ideas clearly, and collaborated effectively with team members.",
    country: "Rwanda",
    linkedIn: "https://www.linkedin.com/in/innocent-n/",
  },
  {
    id: 6,
    name: "Marko Kermichiev",
    image: "https://avatars.githubusercontent.com/u/112749658?v=4",
    text: "I learned too much from you and I can say that you are fantastic developer. Working with you is always a pleasure, hope that we can work on some project asap.",
    country: "Macedonia",
    linkedIn: "https://www.linkedin.com/in/marko-kermichiev/",
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: "Responsive Design",
    text: "I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.",
  },
  {
    id: 2,
    icon: react,
    title: "Front-end Development",
    text: "I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.",
  },
  {
    id: 3,
    icon: fullstack,
    title: "Back-end Development",
    text: "My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.",
  },
  // {
  //   id: 3,
  //   icon: fullstack,
  //   title: "SEO and Website Maintenance",
  //   text: "My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.",
  // },

  // {
  //   id: 4,
  //   icon: fullstack,
  //   title: "Back-end Development",
  //   text: "My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.",
  // },
];

const navLinks = [
  {
    id: 1,
    name: "About",
    url: "/#about",
  },
  {
    id: 2,
    name: "Service",
    url: "/#service",
  },
  {
    id: 3,
    name: "Work",
    url: "/#work",
  },
  {
    id: 4,
    name: "Testimonial",
    url: "/#testimonial",
  },
  {
    id: 5,
    name: "Contact",
    url: "/#contact",
  },
  {
    id: 5,
    name: "Blog",
    url: "https://www.cybercodehub.com",
  },
];

export { technologies, projects, testimonials, social, services, navLinks };
