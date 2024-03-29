import "../Styles/LandingPage.css";
import Footer from "./Footer";
import { productContext } from "../Context/ProductContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

  console.log('ran landingPage component');
  const reDirect = useNavigate();
  const { category_filter } = useContext(productContext);
  return (
    <div>
      <div className="banner1_main_container anime">
        <div className="Banner1_1">
          <img
            src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671021150_k-beauty_web_hp.gif"
            alt="banner_1_loading..."
          />
        </div>
        <div className="banner1_2">
          <img
            src="https://media6.ppl-media.com/tr:w-512,ar-40-47,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671005781_lip-balm-copy-5.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="banner2_main_container">
        <div className="banner2_1">
          <div className="img_cont">
            <img
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670876548_revlon-728x992.jpeg"
              alt=""
            />
          </div>
          <div className="img_cont">
            <img
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671005204_plume-728x992.jpeg"
              alt=""
            />
          </div>
          <div className="img_cont">
            <img
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670876537_de-lanci-728x992.jpeg"
              alt=""
            />
          </div>
          <div className="img_cont">
            <img
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670876544_one-on-one-728x992.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="banner3_main_container">
        <span className="category_text_container">| SHOP BY CATEGORY |</span>
      </div>
      <div className="banner3_2_category_images" data-aos="fade-up">
        <div
          className="img_cont"
          onClick={() => {
            category_filter("ALLFRAGRANCE");
            reDirect("/products");
          }}
        >
          <img
            src="https://media6.ppl-media.com/tr:w-320,ar-360-463,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1654781843_fragrance.png"
            alt=""
          />
        </div>
        <div className="img_cont">
          <img
            src="https://media6.ppl-media.com/tr:w-320,ar-360-463,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1654781844_wellness.png"
            alt=""
          />
        </div>
        <div className="img_cont">
          <img
            src="https://media6.ppl-media.com/tr:w-320,ar-360-463,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1654781842_appliance.png"
            alt=""
          />
        </div>
        <div className="img_cont">
          <img
            src="https://media6.ppl-media.com/tr:w-320,ar-360-463,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1657536132_jewellery.png"
            alt=""
          />
        </div>
      </div>

      <div className="banner4_main_container" data-aos="fade-up">
        <div className="banner4_1">
          <img
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671428262_generic-banner-thick-strip-web-2.gif?tr=f-gif"
            alt=""
          />
        </div>
      </div>

      <div className="banner5_main_container" data-aos="fade-up">
        <div className="banner5_1">
          <img src="/Logo2.jpg" alt="" />
        </div>
        <div className="banner5_2">
          <p>
            Bath and Body Works is your go-to place for gifts & goodies that
            surprise & delight. From fresh fragrances to soothing skin care, we
            make finding your perfect something special a happy-memory-making
            experience. Searching for new seasonal creations or your favorite
            favourite scents? We’ve got you covered there, too. Oh! And while
            you're browsing, shop our latest & greatest selection of
            lotions,soaps and candles!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
