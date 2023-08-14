import "./App.css";
import { Counter } from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      
      <Counter count={1} />

      <Header />

      <section className="slider_section position-relative">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="img_container">
                <div className="img-box">
                  <img src="images/slider-bg.jpg" className="" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="img_container">
                <div className="img-box">
                  <img src="images/slider-bg.jpg" className="" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="img_container">
                <div className="img-box">
                  <img src="images/slider-bg.jpg" className="" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn_box">
            <a
              className="carousel-control-prev"
              href="#customCarousel1"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#customCarousel1"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="detail-box">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="inner_detail-box">
              <h1>
                Interior Design <br />
                Studio
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem
              </p>
              <div>
                <a href="" className="slider-link">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti dolorem eum consequuntur ipsam repellat dolor soluta
                  aliquid laborum, eius odit consectetur vel quasi in quidem,
                  eveniet ab est corporis tempore.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery_section layout_padding2">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2>Gallery</h2>
          </div>
          <div className="row">
            <div className=" col-sm-8 col-md-6 px-0">
              <div className="img-box">
                <img src="images/g1.jpg" alt="" />
                <a
                  href="images/g1.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 px-0">
              <div className="img-box">
                <img src="images/g2.jpg" alt="" />
                <a
                  href="images/g2.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 px-0">
              <div className="img-box">
                <img src="images/g3.jpg" alt="" />
                <a
                  href="images/g3.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 px-0">
              <div className="img-box">
                <img src="images/g4.jpg" alt="" />
                <a
                  href="images/g4.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 px-0">
              <div className="img-box">
                <img src="images/g5.jpg" alt="" />
                <a
                  href="images/g5.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-8 col-md-6 px-0">
              <div className="img-box">
                <img src="images/g6.jpg" alt="" />
                <a
                  href="images/g6.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All</a>
          </div>
        </div>
      </div>

      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Services</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/s1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Residential Decoration</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque distinctio aspernatur officiis exercitationem
                    asperiores praesentium
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/s2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Ecommercial Decoration</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque distinctio aspernatur officiis exercitationem
                    asperiores praesentium
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/s3.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Office Decoration</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque distinctio aspernatur officiis exercitationem
                    asperiores praesentium
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_section ">
        <div className="container-fluid">
          <div className="heading_container">
            <h2>Latest Blog</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="box">
                <div className="img-box">
                  <img src="images/b1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Velit tempora molestias quae</h5>
                  <p>
                    Omnis itaque ducimus excepturi dignissimos voluptatibus
                    sequi nisi ut ullam, perspiciatis doloribus! Cum itaque sint
                    quibusdam aut vel. A esse labore.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="box">
                <div className="img-box">
                  <img src="images/b2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Repudiandae voluptatum quaerat</h5>
                  <p>
                    Totam non minus suscipit, exercitationem deserunt doloribus
                    provident dolor quos nulla impedit, perspiciatis excepturi
                    eius hic vero harum deleniti.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Testimonial</h2>
          </div>
          <div
            id="carouselExample2Controls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a
                className="carousel-control-prev"
                href="#carouselExample2Controls"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExample2Controls"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_section  ">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-6 ">
              <div className="form_container">
                <div className="heading_container ">
                  <h2>Contact Us</h2>
                </div>
                <form action="">
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 col-lg-6">
              <div className="subscribe-box">
                <h3>Subscribe To Our Newsletter</h3>
                <p>
                  Neque, omnis? Maiores consectetur molestiae assumenda earum ea
                  exercitationem velit tempora molestias quae, neque voluptas
                  magnam maxime, repudiandae voluptatum quaerat tempore
                  accusamus.
                </p>
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info_section ">
        <div className="container">
          <div className="row info_main_row">
            <div className="col-md-6 col-lg-3">
              <div className="info_insta">
                <h4>
                  <a href="index.html" className="navbar-brand m-0 p-0">
                    <span>Shapel</span>
                  </a>
                </h4>
                <p className="mb-0">
                  Asperiores at, error, delectus aut voluptatem provident cum
                  quam magni necessitatibus molestias eveniet reprehenderit
                  maiores voluptate.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_detail">
                <h4>Company</h4>
                <p className="mb-0">
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Contact Us</h4>
              <div className="info_contact">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Follow Us</h4>
              <div className="social_box">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
