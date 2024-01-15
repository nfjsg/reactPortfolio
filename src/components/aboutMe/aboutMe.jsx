import React from 'react';
import './aboutMe.css';
import avatarImage from './avatar.jpg'; // Import the image with the correct path

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <img
          src={avatarImage} // Use the imported image variable
          alt="Your Avatar"
          className="avatar"
        />
        <p className="bio">

        I am a passionate web developer with a diverse set of skills and experiences. With a background in computer science, I have honed my abilities in front-end and back-end development, allowing me to create dynamic and responsive web applications.

In terms of front-end development, I am proficient in HTML, CSS, and JavaScript. I have a keen eye for design, ensuring that user interfaces are not only functional but also visually appealing. I am experienced in using popular front-end frameworks like React.js to build interactive and efficient user interfaces.

On the back-end, I have expertise in server-side languages such as Node.js and Python, along with a solid understanding of databases like MongoDB and MySQL. I am skilled in crafting robust and scalable back-end systems that support seamless functionality for web applications.

My interest in web development extends beyond coding. I am enthusiastic about staying updated with the latest industry trends and technologies, always eager to explore new tools that can enhance the development process. I am also committed to writing clean, maintainable code and following best practices to ensure the highest quality in my work.

Having worked on various projects, I have gained valuable experience in collaborating with cross-functional teams, problem-solving, and delivering projects within deadlines. My adaptability and continuous learning mindset make me well-suited for the dynamic field of web development.

Outside of coding, I enjoy contributing to open-source projects, attending tech meetups, and engaging in the developer community. These experiences not only enhance my skills but also provide me with a broader perspective on the ever-evolving landscape of web development.
         
          {/* Your bio content */}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
