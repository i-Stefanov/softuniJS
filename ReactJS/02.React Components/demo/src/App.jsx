import Header from "./components/Header";
import ServiceSection from "./components/Service";
function App() {
  return (
    <>
      <Header></Header>
      <ServiceSection />
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Magni quod blanditiis non minus sed aut voluptatum illum quisquam
              aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are Finexo</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <p>
                  Molestiae odio earum non qui cumque provident voluptates,
                  repellendus exercitationem, possimus at iste corrupti officiis
                  unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                  ab omnis quasi expedita.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src="images/w1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Expert Management</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Secure Investment</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Instant Trading</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Happy Customers</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>
      <section className="team_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2 className="">
              Our <span> Team</span>
            </h2>
          </div>
          <div className="team_container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/team-1.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Joseph Br/own</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/team-2.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Nancy White</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/team-3.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Earl Martinez</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/team-4.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Josephine Allard</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Customers</span>
            </h2>
          </div>
          <div className="carousel-wrap ">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client2.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Zen Court</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client2.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Zen Court</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>Location</span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html">
                    Home
                  </a>
                  <a className="" href="about.html">
                    About
                  </a>
                  <a className="" href="service.html">
                    Services
                  </a>
                  <a className="" href="why.html">
                    Why Us
                  </a>
                  <a className="" href="team.html">
                    Team
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="footer_section">
        <div className="container">
          <p>
            © <span id="displayYear" /> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
