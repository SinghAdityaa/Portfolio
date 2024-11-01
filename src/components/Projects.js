import React from 'react';
import Project from './Project';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const projects = [
  {
    title: 'Simon Game',
    description: 'A web-based memory game where users follow color patterns.',
    technologies: 'JavaScript',
    link: 'https://github.com/SinghAdityaa/Simon-Game'
  },
  {
    title: 'Forgot Password Login Page',
    description: 'A login page with a forgot password option and OTP verification.',
    technologies: 'JavaScript, React',
    link: 'https://github.com/SinghAdityaa/Forgot-password-login-page'
  },
  {
    title: 'Drum Kit',
    description: 'A virtual drum kit that plays sounds when keys are pressed.',
    technologies: 'JavaScript',
    link: 'https://github.com/SinghAdityaa/Drum-kit'
  },
  {
    title: 'Weather App',
    description: 'Search the weather in cities across the globe.',
    technologies: 'JavaScript, API integration',
    link: 'https://github.com/SinghAdityaa/Weather-app'
  },
  {
    title: 'CleverBooks',
    description: 'An online bookstore platform.',
    technologies: 'HTML',
    link: 'https://github.com/SinghAdityaa/CleverBooks'
  },
  {
    title: 'figma-to-code',
    description: 'Converts Figma designs into code for web projects.',
    technologies: 'HTML',
    link: 'https://github.com/SinghAdityaa/figma-to-code'
  },
  {
    title: 'Amazon Clone',
    description: 'A clone of the Amazon website for practice.',
    technologies: 'HTML',
    link: 'https://github.com/SinghAdityaa/amazon-clone'
  },
  {
    title: 'Product Card',
    description: 'A reusable product card component.',
    technologies: 'HTML',
    link: 'https://github.com/SinghAdityaa/product-card'
  },
  {
    title: 'Food Platform (React)',
    description: 'A food ordering platform built with React.',
    technologies: 'JavaScript, React',
    link: 'https://github.com/SinghAdityaa/food-platform-using-react'
  },
  {
    title: 'E-commerce Platform (React)',
    description: 'An e-commerce site built with React.',
    technologies: 'JavaScript, React',
    link: 'https://github.com/SinghAdityaa/e-commerce-using-react'
  },
  {
    title: 'Product Card (Chakra UI)',
    description: 'A product card built using Chakra UI for styling.',
    technologies: 'JavaScript, Chakra UI',
    link: 'https://github.com/SinghAdityaa/product-card-using-chakra-ui'
  },
  {
    title: 'Neumorphic App',
    description: 'An app demonstrating neumorphic design.',
    technologies: 'JavaScript',
    link: 'https://github.com/SinghAdityaa/Neumorphic-App'
  },
  {
    title: 'Twitter Clone',
    description: 'A simplified clone of the Twitter website.',
    technologies: 'JavaScript',
    link: 'https://github.com/SinghAdityaa/Twitter-clone'
  },
  {
    title: 'Doctor Appointment',
    description: 'An application for scheduling doctor appointments.',
    technologies: 'JavaScript',
    link: 'https://github.com/SinghAdityaa/doctor-appointment'
  },
  {
    title: 'Online Learning Platform',
    description: 'A platform for online learning courses.',
    technologies: 'CSS',
    link: 'https://github.com/SinghAdityaa/Online-Learning-Platform'
  }
];

function Projects() {
  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </ProjectsContainer>
  );
}

export default Projects;
