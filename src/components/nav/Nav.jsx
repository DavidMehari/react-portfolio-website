import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import Scrollspy from 'react-scrollspy';

const Nav = () => {

  return (
    <nav>
      <Scrollspy
        items={ ['home', 'about', 'experience', 'services', 'contact'] }
        currentClassName="active"
      >
        <a href="#home"><AiOutlineHome /></a>
        <a href="#about"><AiOutlineUser /></a>
        <a href="#experience"><BiBook /></a>
        <a href="#services"><RiServiceLine /></a>
        <a href="#contact"><BiMessageSquareDetail /></a>
      </Scrollspy>
    </nav>
  );
};

export default Nav;
