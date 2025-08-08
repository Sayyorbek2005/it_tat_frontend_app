import React from "react";
import "./negabizniTanlashadi.css";
import back_img_1 from "../../../assets/Cheese Half 3.svg";
import back_img_2 from "../../../assets/Torus2.svg";

// ? img
import img_1 from "../../../assets/negaBizniTanlashadi_1.png";
import img_2 from "../../../assets/tanlashadi_2.png";
import img_3 from "../../../assets/tanlashadi_3.png";
import img_4 from "../../../assets/tanlashadi4.png";

const WhyChoosUs = () => {
  
  return (
    <div className="background_section">
      <div className="max-width">
        <section>
          <img className="back_img_1" src={back_img_1} alt="" />
          <h1 className="font-size-40">Nimaga bizni tanlashadi</h1>
          <div className="section_dis">
            <div className="box box_2">
              <img src={img_1} alt="" />

              <h3 className="font-size-24-600">Yuqori malakali mentorlar</h3>
              <p className="font-size-16">
                Bizning mentorlarimiz xalqaro darajadagi tajribali
                mutaxassislar. Ular o‘z sohasida katta tajribaga ega bo‘lib,
                o‘quvchilarga real loyihalar ustida ishlashni o‘rgatadi va
                ularning professional ko‘nikmalarini rivojlantirishda yaqindan
                ko‘mak beradi.)
              </p>
            </div>
            <div className="box">
              <img src={img_2} alt="" />

              <h3 className="font-size-24-600">Real loyihalarda amaliyot</h3>
              <p className="font-size-16">
                Bizda o‘quvchilar nazariyani amaliyot bilan mustahkamlashadi!
                Ular real loyihalarda ishtirok etib, dasturlash, muammolarni hal
                qilish va jamoa bilan ishlash ko‘nikmalarini rivojlantirishadi.
                Bu esa ularning kelajakdagi ish faoliyatiga mustahkam poydevor
                yaratadi
              </p>
            </div>
            <div className="box box_2">
              <img src={img_3} alt="" />

              <h3 className="font-size-24-600">
                Natijaga yo'naltirilgan ta'lim
              </h3>
              <p className="font-size-16">
                Natijaga yo‘naltirilgan ta’lim – muvaffaqiyat garovi! Bizning
                o‘quv tizimimiz o‘quvchilarning haqiqiy natijalarga erishishini
                ta’minlaydi. Darslar davomida: Amaliy mashg‘ulotlar, Mentorlar
                ko‘magi, Ishga tayyorgarlik jarayonlari yuritiladi
              </p>
            </div>
            <div className="box">
              <img src={img_4} alt="" />

              <h3 className="font-size-24-600">Ish taklifi</h3>
              <p className="font-size-16">
                IT TAT o‘quv markazida o‘qishni muvaffaqiyatli yakunlagan eng
                iqtidorli o‘quvchilarga ishga joylashish imkoniyati taqdim
                etiladi.
                {/* iqtidorli o‘quvchilarga ishga joylashish imkoniyati taqdim
                etiladi. */}
              </p>
            </div>
          </div>
          <img className="back_img_2" src={back_img_2} alt="" />
        </section>
      </div>
    </div>
  );
};

export default WhyChoosUs;
