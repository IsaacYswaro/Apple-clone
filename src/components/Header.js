
import React, { Component } from "react";
import Image from "../constant/Image";

const navLinks = [
  { urlLink: "/mac", nameLink: "Mac" },
  { urlLink: "/iphone", nameLink: "iPhone" },
  { urlLink: "/ipad", nameLink: "iPad" },
  { urlLink: "/watch", nameLink: "Watch" },
  { urlLink: "/tv", nameLink: "TV" },
  { urlLink: "/music", nameLink: "Music" },
  { urlLink: "/support", nameLink: "Support" },
  { urlLink: "/search", nameLink: <img src={Image.Search} /> },
  { urlLink: "/cart", nameLink: <img src={Image.Cart} /> },
];

class Header extends Component {
  render() {
    const Navbar = ({ urlLink, nameLink }) => (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={urlLink}>
          {nameLink}
        </a>
      </li>
    );

    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a className="navbar-brand mx-auto" href="#">
                <img src={Image.Logo} />
              </a>

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  {navLinks.map((link, index) => (
                    <Navbar
                      key={index}
                      urlLink={link.urlLink}
                      nameLink={link.nameLink}
                    />
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
