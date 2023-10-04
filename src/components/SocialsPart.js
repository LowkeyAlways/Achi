import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../facebook.svg';
import insta from '../instagram.svg';
import twitter from '../twitter.svg';



function SocialsPart() {
  return (
    <div className="d-flex p-5 justify-content-evenly socials-part">
            <a href="https://www.facebook.com/">
            <img className="socials" src={facebook} alt="facebook-logo"></img>
            <figcaption>Facebook</figcaption></a>
        <a href="https://www.instagram.com/">
            <img className="socials" src={insta} alt="instagram-logo"></img>
            <figcaption>Instagram</figcaption>
        </a>
        <a href="https://twitter.com/">
            <img className="socials" src={twitter} alt="twitter-logo"></img>
            <figcaption>Twitter</figcaption>
        </a>
    </div>
  )
}

export default SocialsPart