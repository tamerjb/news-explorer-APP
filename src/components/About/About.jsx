import React from "react";
import "./About.css";
import about from "../../images/about.jpg";

export default function About() {
  return (
    <section className="about">
      <img className="about__image" src={about} alt="author" />
      <div className="about__main">
        <h2 className="about__title">About the author</h2>
        <p className="about__info">
          Hi, My name is Tamer Gabarin, im happy to share my final project for
          my Fullstack web development Bootcamp. I'm excited to show you how i
          put all of my knowledge together both the frontend/backend. I hope you
          enjoy it! Feel free to reach out to me on my{" "}
          <a
            href="https://www.linkedin.com/in/tamerjb/"
            target="_blank"
            className="about__link__linkedin"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          profile or my{" "}
          <a
            href="https://github.com/tamerjb"
            target="_blank"
            className="about__link__github"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          . Thank you!
        </p>
      </div>
    </section>
  );
}
