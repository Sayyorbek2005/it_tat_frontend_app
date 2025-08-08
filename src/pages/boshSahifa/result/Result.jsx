import React from "react";
import "./Result.css";

import resultWrap from "../../../assets/res_1.png";
import resultWrapTwo from "../../../assets/res2.png";
import resultWrapThree from "../../../assets/res3.png";
import resultWrapFour from "../../../assets/res4.png";
// import back_img from "../../../assets/Torus2.svg";

const timelineData = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfolioingiz shakllanadi. Bu sizga IT sohasida ",
  },
  {
    id: 2,
    title: "Networking",
    description:
      "Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfolioingiz shakllanadi. Bu sizga IT sohasida ",
  },
  {
    id: 3,
    title: "Ish taklifi",
    description:
      "Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfolioingiz shakllanadi. Bu sizga IT sohasida ",
  },
  {
    id: 4,
    title: "Sertifikat",
    description:
      "Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfolioingiz shakllanadi. Bu sizga IT sohasida ",
  },
];

const Result = () => {
  return (
    <div className="timeline-container">
      <div className="max-width">
        <h2 className=" font-size-40 timeline-title">
          Kursni tugatganda nimalarga erishasiz
        </h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-circle">
                {item.id < 10 ? `0${item.id}` : item.id}
              </div>
              <div
                className={`timeline-content ${
                  index % 2 === 0 ? "blue-border" : "light-blue-border"
                }`}
              >
                <h3 className="font-size-32">{item.title}</h3>
                <br />
                <p className="font-size-16">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
