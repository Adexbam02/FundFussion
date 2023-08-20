import "./service.css";
import { play2, happyStaff, tick, point, FundFussionCard } from "../../assets/index";
const Service = () => {
  return (
    <section>
      <div className="serviceContent flexcl sectionP">
        <div className="servicecard1  flex1 gap2">
          <div className="serviceImg">
            <div>
              <p>WATCH VIDEO</p>
              <img src={play2} alt="" />
            </div>

            <img src={happyStaff} alt="" />
          </div>

          <div className="serviceInfo gap1 flexCl">
            <h3>SERVICE</h3>

            <h2>
              Easily Control your Billing <br /> and Invoicing.
            </h2>

            <p>
              Multiple listening columns help you stay tuned to everything
              that&apos;s relevant. Respond in real-time and engage with your
              audience as often as you like.
            </p>

            <div className="ticks wrap">
              <span>
                <img src={tick} alt="" />
                <small>Concept Design</small>
              </span>
              <span>
                <img src={tick} alt="" />
                <small>Concept Development</small>
              </span>
              <span>
                <img src={tick} alt="" />
                <small>Concept Implementation</small>
              </span>
              <span>
                <img src={tick} alt="" />
                <small>Testing work</small>
              </span>
            </div>
          </div>
        </div>

        <div className="servicecard1 service2 flex1 gap2">
          <div className="serviceInfo gap1 flexCl">
            <h2>Find a Better card Deal in few Easy Steps..</h2>

            <div className="service flexcl gap2">
              <div className="servicePoint">
                <div className="flex gap1">
                  <img src={point} alt="" />
                  <h4>For Innovation team</h4>
                </div>

                <p>
                  After brainstorming about insights, get the power to create
                  something real. Bring your ideas to life and share your vision
                  with concrete elements.
                </p>
              </div>
              <div className="servicePoint">
                <div className="flex gap1">
                  <img src={point} alt="" />
                  <h4>For Consultancies</h4>
                </div>

                <p>
                  Make collaboration and communication easier with your team or
                  your client. With one tool, you can work together and keep
                  everyone on the same page.
                </p>
              </div>
            </div>
          </div>

          <div className="FundFussionCard">
            <img src={FundFussionCard} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
