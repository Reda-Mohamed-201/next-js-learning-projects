import "./blog.css";
import "./all.min.css";
import blog from "../../public/blog1.jpg";
import blog1 from "../../public/blog11.jpg";
import blog2 from "../../public/blog22.jpg";
import blog3 from "../../public/blog33.jpg";
import Image from "next/image";
function page() {
  console.log("Google ID:", process.env.AUTH_GOOGLE_ID);
  console.log("Google Secret:", process.env.AUTH_GOOGLE_SECRET);

  return (
    <div className="about">
      <div className="">
        <div className="top_section">
          <div className="talk">
            <h3>Our Story</h3>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>

          <div className="about_img">
            <Image src={blog} alt="blog" width={500} height={500} />
          </div>
        </div>
        <div className="container">
          <div className="mid">
            <div className="whole">
              <div className="out">
                <div className="in">
                  <i className="fa-solid fa-calendar-week"></i>
                </div>
              </div>
              <div className="par">
                <h4>10K</h4>
                <p>Sallers active our site</p>
              </div>
            </div>

            <div className="whole">
              <div className="out">
                <div className="in">
                  <i className="fa-solid fa-dollar-sign"></i>
                </div>
              </div>
              <div className="par">
                <h4>3.3K</h4>
                <p>Mapnthly Product Sale</p>
              </div>
            </div>
            <div className="whole">
              <div className="out">
                <div className="in">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
              </div>
              <div className="par">
                <h4>45.5K</h4>
                <p>Customer active in our site</p>
              </div>
            </div>
            <div className="whole">
              <div className="out">
                <div className="in">
                  <i className="fa-solid fa-sack-dollar"></i>
                </div>
              </div>
              <div className="par">
                <h4>25K</h4>
                <p>Anual gross sale in our site</p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="main">
              <div className="maim_img">
                <Image src={blog1} alt="blog1 pic" />
              </div>
              <div className="text">
                <h4>Tom Cruise</h4>
                <p>Founder & Chairman</p>
              </div>
              <div className="links">
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="">
                  {" "}
                  <i className="fa-brands fa-square-facebook "></i>
                </a>
              </div>
            </div>
            <div className="main">
              <div className="maim_img">
                <Image src={blog3} alt="blog3 pic" />
              </div>
              <div className="text">
                <h4>Emma Watson </h4>
                <p>Managing Director</p>
              </div>
              <div className="links">
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="">
                  {" "}
                  <i className="fa-brands fa-square-facebook "></i>
                </a>
              </div>
            </div>
            <div className="main ">
              <div className="maim_img">
                <Image src={blog2} alt="blog2 pic" />
              </div>
              <div className="text">
                <h4>Will Smith</h4>
                <p>Product Designer</p>
              </div>
              <div className="links">
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="">
                  {" "}
                  <i className="fa-brands fa-square-facebook "></i>
                </a>
              </div>
            </div>
          </div>

          <div className="container1">
            <div className="fotter mb-20">
              <div className="whole1">
                <div className="out1">
                  <div className="in1">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                </div>
                <div className="par1">
                  <h4>FREE AND FAST DELIVERY</h4>
                  <p>free delivery for all orders over $300</p>
                </div>
              </div>
              <div className="whole1">
                <div className="out1">
                  <div className="in1">
                    <i className="fa-solid fa-headphones-simple"></i>
                  </div>
                </div>
                <div className="par1">
                  <h4>24/7 CUSROMR SERVICE</h4>
                  <p>feiendly24/7 customer suuport</p>
                </div>
              </div>
              <div className="whole1">
                <div className="out1">
                  <div className="in1">
                    <i className="fa-regular fa-square-check"></i>
                  </div>
                </div>
                <div className="par1">
                  <h4>MONEY BACK GUARATEE</h4>
                  <p>we return money with 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
