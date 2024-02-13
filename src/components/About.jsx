import React from "react";
import "../style/about.css";

function About() {
  return (
    <div className="about">
      <div className="about__container about_intro">
        <h2>About the project</h2>
        <p>
          This Kanban app was created as part of our Ironhack full-stack web
          development bootcamp. Built following the React project brief, it
          showcases our ability to work with JSON data, create single-page
          applications, and implement essential React features. This project
          demonstrates the skills and understanding we have gained during our
          training.
        </p>
      </div>
      <div>
        <div className="about__container__person">
          <div className="about__profile-image thomas"></div>
          <div className="about__person">
            <h2>Thomas Deblay</h2>
            <div className="about__buttons">
            <a href="#" ><button className="about__buttons_github">Github</button></a>
              <a href="#"><button className="about__buttons__linkedin">LinkedIn</button></a>
            </div>
          </div>
        </div>
        <div className="about__container__person ">
          <div className="about__profile-image stefan"></div>
          <div className="about__person">
            <h2>Stefan Kummerlöw</h2>
            <div className="about__buttons">
              <a href="#" ><button className="about__buttons_github">Github</button></a>
              <a href="#"><button className="about__buttons__linkedin">LinkedIn</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
