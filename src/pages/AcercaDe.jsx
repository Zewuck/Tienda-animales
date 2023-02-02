import React from "react";
import { img } from "../assets/imagenes.js";
import "../fondoinicio.css";

export default function AcercaDe() {
  return (
    <>
      <div className="bg-light mx-5">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-2">
            <div className="col-lg-6">
              <h1 className="display-4 boogaloo">About us page</h1>
              <p className="lead text-muted mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi commodi veritatis pariatur sapiente facilis repudiandae tenetur quidem libero! Debitis nihil doloremque, praesentium obcaecati facere saepe perferendis sunt necessitatibus cumque!
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="conejo-container">
                <img src={img.conejo} alt="" className="img-fluid conejo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-3 mx-5">
        <div className="container py-3">
          <div className="row align-items-center mb-4">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light boogaloo">
                Lorem Ipsum
              </h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est quas doloribus eaque ipsa? Reprehenderit, nihil eos. Fuga, ullam cum? Culpa autem quaerat fugiat, suscipit maxime et eaque cum temporibus?
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
            <div className="col-lg-5 px-3 order-1 order-lg-2 mx-auto">
              <div className="perro-container">
                <img
                  src={img.perro2}
                  alt=""
                  className="img-fluid mb-4 mb-lg-0 perro"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img src={img.perro} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light boogaloo">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.loremLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.loremLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-2 mx-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light boogaloo">Our team</h2>
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-4 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Deyner Higuera</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Sebastian Almeida</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Joel Ochoa</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
      <div>
        <h3>Sobre nosotros</h3>
        <h1>Helping businesses succeed through the power of video.</h1>
        <p>
          Video is the future of business in this digital-focused world. Vidyard
          uses video to change the way companies connect and communicate. We
          help organizations of all sizes humanize their communications and
          personalize their customer experiences
        </p>
        <img src="" alt="" />
      </div>
      <div>
        <h2>
          Record and send videos to reach prospects, connect with customers, and
          change the way you work
        </h2>
        <p>
          Vidyard is built for business. Our platform goes beyond just video
          hosting and management. Connect with viewers through personalized
          video experiences. Explore analytical insights about your audience.
          Turn those insights into action through integrations with top
          enterprise tools. Prove the impact of your video programs. Global
          leaders and industry pioneers on the Fortune 500 list and beyond rely
          on Vidyard to power their video strategies and turn viewers into
          customers.
        </p>
      </div>
      {
        
      }
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h3>OUR HISTORY</h3>
        <h2>The Story of Vidyard</h2>
        <p>After meeting at the University of Waterloo, co-founders Michael Litt and Devon Galloway formed an innovative video startup that would ultimately graduate from the elite Y Combinator program. Since then, Vidyard has grown to include competitive features, integrations, and thought leadership that position us as a top video business platform.</p>
        <img src="" alt="" />
        <h2>Redwoods Media Becomes Vidyard</h2>
        <p>Michael Litt and Devon Galloway found Redwoods Media, the first video production company to offer video hosting, analytics, and performance guarantees. Envisioning the future needs of customers, the potential of video, and the power of analytics, Redwoods Media later becomes Vidyard to focus exclusively on video sales and marketing technology.</p>
      </div>
    </div> */}
    </>
  );
}
