import React from "react";
import ResumePdf from "../../docs/ResumeOla.pdf"

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Profile</h2>
          <ul>
            <li>
              Core competencies in enterpirse content management, full-stack web
              development, data architecture, managing integrations, and systems support.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/olamide-bello-19079830/" target= "_blank">
             
             
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
                
              /> Linkedin Profile
            </a>
          </p>

          <a
            href={ResumePdf} target= "_blank"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,
            <br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
