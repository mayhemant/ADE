import React from "react";

function Home() {
  return (
    <section class="hero spad set-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="hero__text">
              <h5>
                <span class="icon_calendar"></span> 10 Dec 2020
              </h5>
              <h2>All Your Events in One Place</h2>
              <a href="#" class="primary-btn">
                Join the Event
              </a>
              <a href="#" class="primary-btn white-btn">
                Host Your Event
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="hero__pic set-bg"
              data-setbg="../img/hero/hero-video.png">
              <a
                href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249690664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                class="play-btn video-popup">
                <img src="../img/hero/play-btn.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="single__track">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="single__track__item">
                <div class="single__track__item__pic">
                  <img src="../img/hero/hero-track.jpg" alt="" />
                </div>
                <div class="single__track__item__text">
                  <h5>Understanding Operating</h5>
                  <span>Kyle Hawkins</span>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="single__track__option">
                <div class="jp-audio jp_container" aria-label="media player">
                  <div class="jp-btns">
                    <a href="#">
                      <i class="social_share"></i> Share
                    </a>
                    <a href="#">
                      <i class="fa fa-download"></i> Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
