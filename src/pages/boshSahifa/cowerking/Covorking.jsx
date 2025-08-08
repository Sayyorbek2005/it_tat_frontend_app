import React from "react";
import { Button } from "@mui/material";
import cowercing_img_1 from "../../../assets/IMG_cowercing.jpg";
import cowercing_img_2 from "../../../assets/IMG_cowercing_2.jpg";
import cowercing_img_3 from "../../../assets/IMGcowercing_3.jpg";

import "./Cowercing.css";

const Coworking = () => {
  
  return (
    <div className="background_section">
      <div className="max-width">
        <div className="cowerking">
          <h2 className="font-size-40">Bepul coworking</h2>
          {/* <Button className="button" variant="contained">
              Ro`yxatdan o`tish
            </Button> */}

          <div className="cowercing_img_bar">
            <div>
              <img src={cowercing_img_3} alt="" />
            </div>
            <div className="cowercing_div_2" >
              <img
                className="c_div_img_2 img_center_margin"
                src={cowercing_img_2}
                alt=""
              />
              <img className="c_div_img_2 " src={cowercing_img_1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coworking;
