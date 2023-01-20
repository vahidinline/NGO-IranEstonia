import React from 'react';
import { UilInstagram , UilTwitter , UilFacebookF } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div>
        <div>
            <h2>Iranian supportive organization</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc eros, accumsan at nisl ut, bibendum ornare ipsum. Donec velit.</p>
        </div>
        <div>
            <h2>Main Menu</h2>
            <ul>
                <li>
                    <a href="">Home Page</a>
                </li>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">News</a>
                </li>
            </ul>
        </div>
        <div>
            <h2>Contact us</h2>
            <ul>
                <li>
                    <a href=""><UilFacebookF /></a>
                </li>
                <li>
                    <a href=""><UilInstagram/></a>
                </li>
                <li>
                    <a href=""><UilTwitter/></a>
                </li>
            </ul>
        </div>
    </div>
  )
};

export default Footer;