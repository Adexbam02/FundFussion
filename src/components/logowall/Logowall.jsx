import "./logowall.css"
import { mastercard, visa, L2, L3 } from "../../assets"

const Logowall = () => {
  return (
    <section>
        <div className="logowallContent">
            <h3>OUR PARTNERS</h3>

            <div className="logowalls">
                <img src={mastercard} alt="" />
                <img src={visa} alt="" />
                <img src={L2} alt="" />
                <img src={L3} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Logowall