import "./header.css";
import { header, Play } from "../../assets";

const Header = () => {
  return (
    <header>
      <div className="headerContainer max   ">
        <div className="headerInfo flexcl font2 gap1">
          <h3 className="logoCl">Fund<span className="logoSec">Fussion</span></h3>
          <h1 className="font1">
            THE NEXT <br /> GENERATION OF
            <br /> <span>PAYMENT METHOD</span>
          </h1>
          <p>
            Yet preference connection unpleasant yet melancholy but end
            appearance. And excellence partiality estimating terminated day
            everything.
          </p>
          <div className="headerBtn flex">
            <a href="#">Get started</a>
            <a href="#" className="flex1">
              <img src={Play} alt="play" /> Watch Video
            </a>
          </div>
        </div>

        <div className="headerContent">
         
          <div className="cardImage">
          <img src={header} alt="" />

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
