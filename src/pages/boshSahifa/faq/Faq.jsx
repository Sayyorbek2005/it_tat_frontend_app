import React, { useState } from "react";
import arrow from "../../../assets/arrow.svg";
import beriladiganSavollar from "../../../assets/glossy.png";
import Loading from "../../../Loading";
import "./Faq.css";
import useFatch from "../../../components/useFatch";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { data: faqData, isLoading, isError } = useFatch("apifaqs/", "test");

  // Loading holatida yuklash indikatorini ko'rsatish
  if (isLoading) return <Loading />;

  // Xatolik bo‘lsa xabar chiqarish
  if (isError) return <p style={{ color: "red", textAlign: "center" }}>Ma'lumotlarni olishda xatolik yuz berdi.</p>;

  // Ma'lumot array emas yoki bo‘sh bo‘lsa
  if (!Array.isArray(faqData) || faqData.length === 0) {
    return <p style={{ textAlign: "center" }}>Hozircha savollar mavjud emas.</p>;
  }

  return (
    <div className="backgroun">
      <div className="max-width">
        <div className="beriladigan_savollar">
          <h1 className="font-size-40">Tez-tez beriladigan savollar</h1>
          <div className="display">
            <div>
              <img className="glossy" src={beriladiganSavollar} alt="glossy" />
            </div>

            <div className="savollar_div_2">
              {faqData.map((faq_in_data, index) => (
                <div key={faq_in_data.id || index} className="cont">
                  {/* Savol qismi */}
                  <div
                    className="savollar_div_3"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="font-size-18">{faq_in_data.question}</p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className={openIndex === index ? "rotated" : ""}
                    />
                  </div>

                  {/* Javob qismi */}
                  <div
                    className={`savollar_div_3 answer-box ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <p className="font-size-18-500 color_min_white">
                      {faq_in_data.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
