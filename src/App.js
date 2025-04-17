// Example.js
// Example of using the Roadmap component

import React from "react";
import Roadmap from "./components";
import SimpleRoadmap from "./singleroadmap";

// Sample roadmap data
const roadmapData = {
  title: "Frontend Development",
  steps: [
    {
      title: "HTML",
      description:
        "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure of web content.\n\nThis is the foundation of all web development. Before moving forward, you should have a good understanding of HTML tags, attributes, and document structure.",
      links: [
        {
          title: "MDN Web Docs - HTML Basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
        },
        {
          title: "W3Schools HTML Tutorial",
          url: "https://www.w3schools.com/html/",
        },
        {
          title: "HTML Crash Course For Absolute Beginners",
          url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        },
      ],
    },
    {
      title: "CSS",
      description:
        "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.\n\nYou should understand selectors, box model, flexbox, grid, and responsive design principles.",
      links: [
        {
          title: "MDN Web Docs - CSS Basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        { title: "CSS Tricks", url: "https://css-tricks.com/" },
        {
          title: "Flexbox Froggy - A game for learning CSS flexbox",
          url: "https://flexboxfroggy.com/",
        },
      ],
    },
    {
      title: "JavaScript",
      description:
        "JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications, and all major web browsers have a dedicated JavaScript engine to execute it.\n\nYou should understand variables, data types, functions, DOM manipulation, events, and asynchronous programming.",
      links: [
        {
          title: "MDN Web Docs - JavaScript Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        },
        { title: "JavaScript.info", url: "https://javascript.info/" },
        {
          title: "Eloquent JavaScript - Online Book",
          url: "https://eloquentjavascript.net/",
        },
      ],
    },
  ],
};

function App() {
  return <SimpleRoadmap />;
}

export default App;
