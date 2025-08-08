import React, { useState } from "react";
import { Radio, Select, Space } from "antd";
import "./RoyxatdanOtish.css";

// ?imgs
import telegram from "../../assets/telegram.kurs.png";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "Frontend", label: "Frontend" },
  { value: "backend", label: "backend" },
  { value: "Foundation", label: "Foundation" },
  { value: "Robototexnika", label: "Robototexnika" },
  { value: "Kompiuter savodxonlik", label: "Kompiuter savodxonlik" },
  { value: "SMM", label: "SMM" },
  { value: "Grafik dizayn", label: "Grafik dizayn" },
  { value: "Robototexnika kids", label: "Robototexnika kids" }
];

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

const RoyxatdanOtish = () => {
  const navigate = useNavigate();

  const [size, setSize] = useState("select");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="background_blue">
      <div className="max-width">
        <div className="royxatdan_otish">
          <h1 className="font-size-40">
            Kurslarga ro'yxatdan o'tib, <br /> kelajagingizni boshlang!
          </h1>
          <div className="display">
            {/* Kurslar ro‘yxati va Telegram rasmi */}
            <div>
              <img src={telegram} alt="Telegram logo" />
              <div className="grids">
                <button onClick={() => navigate(-1)} className="font-size-16">
                 ⬅️ Go back
                </button>
              </div>
            </div>

            {/* Ro‘yxatdan o‘tish formasi */}
            <div>
              <form>
                <h2>Bepul konsultatsiya</h2>
                <p className="font-size-18-500">
                  Aloqa ma'lumotlaringizni qoldiring, va mutaxassisimiz <br />
                  siz bilan bog'lanadi.
                </p>
                <input
                  className="font-size-16"
                  type="text"
                  placeholder="Sizning ismingiz"
                />
                <br />
                <input
                  className="font-size-16"
                  type="text"
                  placeholder="Telefon Raqamingiz"
                />
                <br />
                <Space className="select">
                  <Select
                    defaultValue="Qaysi kursga yozilmoqchisiz?"
                    onChange={handleChange}
                    className="select font-size-16"
                    options={options}
                  />
                </Space>
               
                <button className="font-size-18-500"> Ro‘yxatdan o‘tish</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default RoyxatdanOtish;