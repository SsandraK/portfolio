
export const skills = [
  { text: "HTML", logo: "bx bxl-html5" },

  { text: "CSS", logo: "bx bxl-css3" },

  { text: "JavaScript", logo: "bx bxl-javascript" },

  { text: "PostgreSQL", logo: "bx bxl-postgresql" },

  { text: "SQLite", logo: "/icons/sql.svg" },

  { text: "Docker", logo: "bx bxl-docker" },

  { text: "GitHub", logo: "bx bxl-github" },

  { text: "Git", logo: "bx bxl-git" },

  { text: "Flutter", logo: "/icons/flutter.svg" },

  { text: "GoLang", logo: "/icons/go.svg" },
];


export const projects = [
  {
    title: "GraphQL",
    slug: "graphql",
    description:
     "This project is a personalized profile dashboard that retrieves and visualizes user data from Kood/Jõhvi's GraphQL API. I implemented GraphQL queries to authenticate users via JWT and fetch key profile information such as XP, done projects, and audit history. Additionally, I designed an interactive UI that includes SVG-based statistical graphs, displaying progress and audit ratio. The authentication system supports login via both username/password and email/password.",
    image: "./images/graph.png",
    color: '#121234'
  },
  {
    title: "Social-Network",
    slug: "social-network",
    description:
      "This project is a Facebook-like social platform developed as a group collaboration. I was responsible for the Groups feature, where users can create groups, post messages, add pictures, and leave comments. Users can also invite others to join or leave a group. The project uses Golang for the backend, SQLite for the database, and Vue.js with TypeScript for the frontend. Additionally, it can be deployed using Docker.",
    image: "./images/Social-Network.png",
  },
  {
    title: "Bomberman-dom",
    slug: "bomberman-dom",
    description:
      "This project was developed as a group collaboration, a Bomberman-like multiplayer game where players battle until only one remains standing. The game supports up to four players, each starting with three health points. Players can collect power-ups such as increased flame range, additional bombs, and speed boosts to gain an advantage. Real-time communication is handled using WebSockets, ensuring smooth and responsive gameplay. The project was built using JavaScript for the frontend, Golang for the backend, along with CSS and HTML for styling and structure.",
    image: "./images/bomber.png",
  },
  {
    title: "twenty-forty-eight",
    slug: "twenty-forty-eight",
    description:
      "This is a mobile application game where users can play the classic 2048 game on both iOS and Android devices. The game was developed using Flutter, ensuring a smooth and responsive experience across platforms.",
    image: "./images/pic.png",
  },
  {
    title: "Chess",
    slug: "chess",
    description:
      "This application is a real-time chess game built with Flutter. It leverages Firebase for live, real-time interactions between players. Players can create a username, join a waiting room, and wait for an opponent. Once both players are ready, the game begins.",
    image: "./images/chess.png",
  },
  {
    title: "Sky-map",
    slug: "sky-map",
    description:
    "This interactive sky map mobile application offers a real-time view of the night sky, allowing users to explore celestial objects from their current location. " +
    "By leveraging GPS, accelerometer, and magnetometer sensors, the app precisely determines the user's position and orientation to display an accurate representation of the stars, planets, constellations, the Sun, and the Moon. " +
    "Users can move their device to dynamically adjust the sky view and tap on celestial objects to access detailed information. " +
    "With real-time updates at 10 frames per second, the app ensures a smooth and immersive stargazing experience. " +
    "Built using the Provider state management pattern, this app combines high performance with a user-friendly design for seamless navigation of the cosmos.",
  
    image: "./images/sky.png",
  },
  
    {
      title: "Kaquiz",
      slug: "kaquiz",
      description:
        "This full-stack mobile application enables users to seamlessly connect with friends and track their last known location in real time. " +
        "Users can search for friends by email, send and manage friend requests, and view their friends' latest locations on an interactive map. " +
        "The app leverages location tracking technology to update users' locations every 5 seconds when the app is active, ensuring accuracy and real-time data. " +
        "Built with Firebase Firestore, it efficiently handles authentication, friend management, and location data storage for a secure and smooth user experience.",
      image: "./images/kaquiz.png",
  },
  
  {
    title: "Stock-market",
    slug: "stock-market",
    description:
      "This mobile application simulates a real-time stock market using mock stock data. The app allows users to monitor 20 selected stocks, manage a virtual wallet with fake money, and track historical data for both stocks and wallet transactions.",
    image: "./images/stock.png",
  },
  {
    title: "Secure-Messenger",
    slug: "secure-messenger",
    description:
      "Secure Messenger is a fully encrypted messaging app designed for private, secure, and seamless communication. It ensures end-to-end encryption for text messages, images, videos, and audio files. The app provides biometric authentication, QR-based profile sharing, and cross-platform support for iOS & Android.",
    image: "./images/messenger.png",
  },
];


export const videos = {
  "sky-map": "./assets/videos/Sky-map.mp4",
  "stock-market": "./assets/videos/stock_market.mp4",
  "kaquiz": "./assets/videos/kaquiz.mp4",
  "chess": "./assets/videos/chess.mp4",
  "secure-messenger": "./assets/videos/secure_mes.mp4"
};


