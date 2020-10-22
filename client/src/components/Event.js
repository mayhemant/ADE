import React from "react";
import { Link } from "react-router-dom";
import Podcast1 from "../img/podcast/podcast-1.jpg";

function Event() {
  return (
    // <!-- Podcast Section Begin -->
    <section class="podcast spad">
      <div class="container">
        <div class="podcast__top">
          <div class="row">
            <div class="col-lg-5 col-md-5">
              <h2>Live & Upcoming</h2>
            </div>
            <div class="col-lg-7 col-md-7">
              <ul class="filter__controls">
                <li class="active" data-filter="*">
                  All
                </li>
                <li data-filter=".entrepreneurship">Entrepreneurship</li>
                <li data-filter=".media">Media</li>
                <li data-filter=".tech">Tech</li>
                <li data-filter=".tutorials">Tutorials</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row podcast-filter">
          <Link to="/event/slug">
            <div class="col-lg-12 mix entrepreneurship mb-5">
              <div class="podcast__item">
                <div class="podcast__item__pic">
                  <img src={Podcast1} alt="" />
                </div>
                <div class="podcast__item__text">
                  <a href="#" class="heart-icon">
                    <i class="fa fa-heart"></i>
                  </a>
                  <ul>
                    <li>
                      <span class="icon_calendar"></span> 7 Jun 2019{" "}
                    </li>
                    <li>
                      <span class="icon_profile"></span> by John Smith
                    </li>
                    <li>
                      <span class="icon_tags_alt"></span> Radio, Musican, Camp
                    </li>
                  </ul>
                  <h4>Episode 01: Learn To Use CSS</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/event/slug">
            <div class="col-lg-12 mix entrepreneurship mb-5">
              <div class="podcast__item">
                <div class="podcast__item__pic">
                  <img src={Podcast1} alt="" />
                </div>
                <div class="podcast__item__text">
                  <a href="#" class="heart-icon">
                    <i class="fa fa-heart"></i>
                  </a>
                  <ul>
                    <li>
                      <span class="icon_calendar"></span> 7 Jun 2019{" "}
                    </li>
                    <li>
                      <span class="icon_profile"></span> by John Smith
                    </li>
                    <li>
                      <span class="icon_tags_alt"></span> Radio, Musican, Camp
                    </li>
                  </ul>
                  <h4>Episode 01: Learn To Use CSS</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/event/slug">
            <div class="col-lg-12 mix entrepreneurship mb-5">
              <div class="podcast__item">
                <div class="podcast__item__pic">
                  <img src={Podcast1} alt="" />
                </div>
                <div class="podcast__item__text">
                  <a href="#" class="heart-icon">
                    <i class="fa fa-heart"></i>
                  </a>
                  <ul>
                    <li>
                      <span class="icon_calendar"></span> 7 Jun 2019{" "}
                    </li>
                    <li>
                      <span class="icon_profile"></span> by John Smith
                    </li>
                    <li>
                      <span class="icon_tags_alt"></span> Radio, Musican, Camp
                    </li>
                  </ul>
                  <h4>Episode 01: Learn To Use CSS</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/event/slug">
            <div class="col-lg-12 mix entrepreneurship mb-5">
              <div class="podcast__item">
                <div class="podcast__item__pic">
                  <img src={Podcast1} alt="" />
                </div>
                <div class="podcast__item__text">
                  <a href="#" class="heart-icon">
                    <i class="fa fa-heart"></i>
                  </a>
                  <ul>
                    <li>
                      <span class="icon_calendar"></span> 7 Jun 2019{" "}
                    </li>
                    <li>
                      <span class="icon_profile"></span> by John Smith
                    </li>
                    <li>
                      <span class="icon_tags_alt"></span> Radio, Musican, Camp
                    </li>
                  </ul>
                  <h4>Episode 01: Learn To Use CSS</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Event;
