import "./navbar.css";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navContainer max flex2 font1">
        <a href="#" className="logo">
          <h3 className="logoCl">
            Fund<span className="logoSec">Fussion</span>
          </h3>
        </a>

        <div className="navLinks">
          <ul className="flex2 gap2">
            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Clients</a>
            </li>

            <li>
              <a href="#">Features</a>
            </li>

            <li>
              <a href="#">Insight</a>
            </li>

            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>

        <div className="navBtn btn">
          <a href="#">Sign Up</a>
        </div>

        <div className="navMenu">
          {isOpen ? (
            <UilTimes onClick={toggleMenu} className="menus" />
          ) : (
            <UilBars onClick={toggleMenu} className="menus" />
          )}

          {isOpen && (
            <div className="menuContent flexcl">
              <ul className="flexcl ">
                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="#">Clients</a>
                </li>

                <li>
                  <a href="#">Features</a>
                </li>

                <li>
                  <a href="#">Insight</a>
                </li>

                <li>
                  <a href="#">Security</a>
                </li>
              </ul>

              <div className=" btn">
                <a href="#">Sign Up</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
