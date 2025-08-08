import React from "react";
import individual_img1 from "../../../assets/talimformati.png";
import individual_img2 from "../../../assets/talimformati2.png";

import "./EducationFormating.css"



const EducationFormat = () => {
  return (
    <div className="background_blue">
      <div className="max-width">
        <div className="talim_formati">
          <h2 className="font-size-40">Ta`lim Formati</h2>
          <div className="talim_cont">
            <div className="individual">
              <h2>Individual</h2>
              <p>
              Har bir o'quvchining bilim darajasi, maqsadlari va o‘rganish tezligiga moslashtirilgan maxsus o‘quv dasturi. Ushbu kurs orqali siz IT sohasini chuqur o‘zlashtirish, o‘z kasbiy mahoratingizni oshirish va individual yondashuv orqali o‘zingizga qulay va samarali usulda o‘qish imkoniyatiga ega bo‘lasiz
              </p>
              <img src={individual_img2} alt="" />
            </div>
            <div>
              <div className="miniGruh">
                <div>
                  <h2> Mini guruh</h2>
                  <p>
                  Bu kichik guruhda (odatda 4-5 kishi) o‘qitish usuli bo‘lib, individual yondashuv va jamoaviy o‘rganish muhitini birlashtiradi. Ushbu kurs sizga zamonaviy IT yo‘nalishlarini samarali o‘rganish, amaliy mashg‘ulotlar orqali tajriba orttirish va jamoa bilan ishlash ko‘nikmalarini rivojlantirish imkonini beradi.
                  </p>
                </div>
                <img src={individual_img2} alt="" />
              </div>
              <div className="gruh">
                <div>
                  <h2>Guruh</h2>
                  <p>
                  Bu 10-12 kishidan iborat jamoada ta’lim olish tizimi bo‘lib, o‘quvchilarga o‘zaro tajriba almashish, jamoaviy muhitda ishlash va IT sohasida zarur ko‘nikmalarni o‘zlashtirish imkonini beradi. Ushbu kurs turli darajadagi o‘quvchilar uchun mos bo‘lib, nazariy va amaliy mashg‘ulotlar uyg‘unligi asosida olib boriladi.
                  </p>
                </div>
                <img src={individual_img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFormat;