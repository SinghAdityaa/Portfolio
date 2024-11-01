import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  margin: 10px 0;
  color: #555;
`;

const Technologies = styled.p`
  font-size: 0.9em;
  color: #888;
`;

const LinkButton = styled.a`
  display: inline-block;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }
`;

function Project({ project }) {
  return (
    <Card>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Technologies>Technologies: {project.technologies}</Technologies>
      <LinkButton href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </LinkButton>
    </Card>
  );
}

export default Project;
