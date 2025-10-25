import { Movie, Movie2, rock, Tictactoe, book, book2, bus, quiz } from "../images/images";

// Your real projects — images already imported in images.js
export const projects = [
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
    img: Movie,
    img2: Movie2,
    summary: "Genre filtering, recommendations and movie descriptions built with JS + Python + MongoDB.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "MongoDB"],
    repo: "https://github.com/siddhi-rungta/Movie-Recommendation-System", // add GitHub link if available
    demo: "",
    details:
      "A movie recommendation system with genre-based filtering, movie detail pages and a recommendation engine. Frontend uses HTML/CSS/JS; backend recommendation logic implemented in Python and data stored in MongoDB. Includes search, filters and description pages for each movie.",
  },

  {
    id: "ecommerce-book-website",
    title: "E-commerce Book Website",
    img: book,
    img2: book2,
    summary: "A simple online bookstore UI built with HTML and CSS (product listing, details, cart UI).",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/siddhi-rungta/ecommerce/settings/pages",
    demo: "https://siddhi-rungta.github.io/ecommerce/index.html",
    details:
      "Static e-commerce style website showcasing books, product listing and detail pages, a cart UI and responsive layouts. Built using semantic HTML and modern CSS techniques. Replace placeholders with backend endpoints to make it functional.",
  },

  {
    id: "quiz-c",
    title: "Quiz Application (C)",
    img: quiz,
    summary: "Command-line quiz program written in C.",
    tech: ["C"],
    repo: "https://github.com/siddhi-rungta/quiz",
    demo: "",
    details:
      "A console-based quiz application written in C. Features multiple-choice questions, scoring, and simple input validation. Useful for practicing file I/O and basic control flow in C.",
  },

  {
    id: "tictactoe-c",
    title: "Tic Tac Toe (C)",
    img: Tictactoe,
    summary: "Classic Tic Tac Toe implemented in C (console).",
    tech: ["C"],
    repo: "https://github.com/siddhi-rungta/tic-tac-toe",
    demo: "",
    details:
      "A terminal-based Tic Tac Toe game in C supporting two players, board rendering, win/draw detection and simple AI (optional). Demonstrates use of arrays, functions and program flow control.",
  },

  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    img: rock,
    summary: "Browser-based Rock Paper Scissors game using HTML/CSS/JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/siddhi-rungta/rock-paper-scissors",
    demo: "https://siddhi-rungta.github.io/rock-paper-scissors/",
    details:
      "Interactive rock-paper-scissors game with score tracking and simple animations. Built with HTML, CSS and vanilla JavaScript for DOM manipulation and game logic.",
  },

  {
    id: "bus-booking-system",
    title: "Bus Booking System",
    img: bus,
    summary: "Bus reservation prototype using PHP, Bootstrap and XAMPP.",
    tech: ["HTML", "CSS", "Bootstrap", "PHP", "XAMPP"],
    repo: "https://github.com/siddhi-rungta/bus_booking_sys",
    demo: "https://siddhi-rungta.github.io/bus_booking_sys/",
    details:
      "A bus booking system prototype with seat selection, booking form and server-side processing using PHP on XAMPP. Demonstrates form handling, basic server-side validation and integration with a local database.",
  },
];

export default projects;
