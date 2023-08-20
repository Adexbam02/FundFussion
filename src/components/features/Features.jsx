import "./features.css";
import { comment1, comment2, BarPie } from "../../assets/index";

const Features = () => {
  return (
    <section className="featuresSection sectionP">
      <div className="featuresContent flex">
        <div className="featuresInfo flexcl gap1 font2">
          <h3>FEATURES</h3>

          <h2>
            You Do the Business, <br /> We’ll Handle the Money.
          </h2>

          <p>
            Multiple listening columns help you stay tuned to everything
            that&apos;s relevant. Respond in real-time and engage with your
            audience as often as you like.
          </p>

          <a href="#">Learn more about monitoring</a>
        </div>

        <div className="featuresComment flexcl">
          <img src={comment1} className="comment1" alt="" />
          <div className="flex">
            <img src={comment2} className="comment2" alt="" />
            <img src={BarPie} className="BarPie" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
