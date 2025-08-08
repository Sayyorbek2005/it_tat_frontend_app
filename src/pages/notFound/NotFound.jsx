import React, { useEffect } from "react";
import "./NotFound.css";

import error from "../../assets/404.png";
import img_1 from "../../assets/frontend.png"; // ? images
import img_2 from "../../assets/robo.png"; // ? images
import hour from "../../assets/qumsoat.png"; // ? images
import el from "../../assets/el.png"; // ? images
const NotFound = () => {

  useEffect(() => {
    document.title = "Bunday sahifa mavjudemas";
  }, []);

  return (
    <div className="err">
      <div className="background_blue">
        <div className="max-width">
          <div className="not-found">
            <img src={error} alt="" />
            <img className="err_img_1" src={img_1} alt="" />
            <img className="err_img_2" src={img_2} alt="" />
            <img className="err_img_3" src={hour} alt="" />
            <img className="err_img_4" src={el} alt="" />

            <a  href="/" className="back_button">
               <button className="not_found_button">Bosh sahifaga qaytish</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
