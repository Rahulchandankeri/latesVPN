import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "../Assets/Styles/sass/layouts/testimonal.scss";
import netflix from "../Assets/Images/netflix.svg";
import amazon from "../Assets/Images/amazon.svg";
import discord from "../Assets/Images/discord.svg";
import reddit from "../Assets/Images/reddit.svg";
import spotify from "../Assets/Images/spotify.svg";
import person1 from "../Assets/Images/person1.png";
import person2 from "../Assets/Images/person2.png";
import person3 from "../Assets/Images/person3.png";
import rating from "../Assets/Images/person3.png";
function Testimonsal() {
  return (
    <section className="testimonal-wrap">
      <div className="wrapper">
        <div className="brands-logo">
          <img src={netflix} alt="netflix" />
          <img src={reddit} alt="reddit" />
          <img src={amazon} alt="amazon" />
          <img src={discord} alt="discord" />
          <img src={spotify} alt="spotify" />
        </div>
        <div className="caption-wrapper">
          <p className="main-caption">
            Trusted by Thousands of <br />
            Happy Customer
          </p>
          <p className="secondary-caption">
            These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.
          </p>
        </div>

        <Splide
          className="testimonials-slider"
          options={{
            rewind: true,
            perMove: 2,
            perPage: 1,
            width: "100%",
            pauseOnFocus: true,
            drag: true,
            autoWidth: true,
            pagination: false,
            dragMinThreshold: {
              mouse: 25,
              touch: 20,
            },
            breakpoints: {
              700: { arrows: true, perMove: 1, perPage: 1 },
            },
          }}
        >
          <SplideSlide className="testimonial-item">
            <div class="person-info-rating">
              <div class="person-info">
                <div class="person-icon-ctr">
                  <img src={person1} alt="person" />
                </div>
                <div class="person-info-text">
                  <p class="person-name">Yessica, Christy</p>
                  <p class="person-location">Shanxi, China</p>
                </div>
              </div>
              <div class="person-rating">
                <p>4.5</p>
                <div class="rating-icon-ctr">
                  <svg width="15" height="15" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.30268 2.09442L4.43879 1.82354L3.60559 0.134366C3.58283 0.0881171 3.54539 0.0506779 3.49914 0.0279207C3.38315 -0.0293393 3.24221 0.0183774 3.18421 0.134366L2.351 1.82354L0.487119 2.09442C0.435731 2.10176 0.388749 2.12599 0.352778 2.16269C0.309291 2.20739 0.285328 2.26752 0.286153 2.32988C0.286979 2.39223 0.312527 2.45171 0.357182 2.49524L1.70573 3.81002L1.38713 5.66656C1.37966 5.70975 1.38444 5.75417 1.40092 5.79478C1.41741 5.83539 1.44495 5.87056 1.48041 5.89632C1.51587 5.92208 1.55784 5.93738 1.60156 5.9405C1.64528 5.94361 1.68899 5.93442 1.72775 5.91396L3.3949 5.03744L5.06205 5.91396C5.10756 5.93818 5.16042 5.94626 5.21107 5.93745C5.3388 5.91542 5.42469 5.7943 5.40267 5.66656L5.08407 3.81002L6.43262 2.49524C6.46932 2.45927 6.49355 2.41229 6.50089 2.3609C6.52071 2.23243 6.43115 2.11351 6.30268 2.09442Z"
                      fill="#FEA250"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="person-testimonial">
              <p>"I like it because I can connect with high speeds even when I travel far".</p>
            </div>
          </SplideSlide>{" "}
          <SplideSlide className="testimonial-item">
            <div class="person-info-rating">
              <div class="person-info">
                <div class="person-icon-ctr">
                  <img src={person2} alt="person" />
                </div>
                <div class="person-info-text">
                  <p class="person-name">Yessica, Christssy</p>
                  <p class="person-location">Shanxi, China</p>
                </div>
              </div>
              <div class="person-rating">
                <p>4.5</p>
                <div class="rating-icon-ctr">
                  <svg width="15" height="15" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.30268 2.09442L4.43879 1.82354L3.60559 0.134366C3.58283 0.0881171 3.54539 0.0506779 3.49914 0.0279207C3.38315 -0.0293393 3.24221 0.0183774 3.18421 0.134366L2.351 1.82354L0.487119 2.09442C0.435731 2.10176 0.388749 2.12599 0.352778 2.16269C0.309291 2.20739 0.285328 2.26752 0.286153 2.32988C0.286979 2.39223 0.312527 2.45171 0.357182 2.49524L1.70573 3.81002L1.38713 5.66656C1.37966 5.70975 1.38444 5.75417 1.40092 5.79478C1.41741 5.83539 1.44495 5.87056 1.48041 5.89632C1.51587 5.92208 1.55784 5.93738 1.60156 5.9405C1.64528 5.94361 1.68899 5.93442 1.72775 5.91396L3.3949 5.03744L5.06205 5.91396C5.10756 5.93818 5.16042 5.94626 5.21107 5.93745C5.3388 5.91542 5.42469 5.7943 5.40267 5.66656L5.08407 3.81002L6.43262 2.49524C6.46932 2.45927 6.49355 2.41229 6.50089 2.3609C6.52071 2.23243 6.43115 2.11351 6.30268 2.09442Z"
                      fill="#FEA250"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="person-testimonial">
              <p>"I like it because I can connect with high speeds even when I travel far".</p>
            </div>
          </SplideSlide>{" "}
          <SplideSlide className="testimonial-item">
            <div class="person-info-rating">
              <div class="person-info">
                <div class="person-icon-ctr">
                  <img src={person3} alt="person" />
                </div>
                <div class="person-info-text">
                  <p class="person-name">Yessica, Christy</p>
                  <p class="person-location">Shanxi, China</p>
                </div>
              </div>
              <div class="person-rating">
                <p>4.5</p>
                <div class="rating-icon-ctr">
                  <svg width="15" height="15" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.30268 2.09442L4.43879 1.82354L3.60559 0.134366C3.58283 0.0881171 3.54539 0.0506779 3.49914 0.0279207C3.38315 -0.0293393 3.24221 0.0183774 3.18421 0.134366L2.351 1.82354L0.487119 2.09442C0.435731 2.10176 0.388749 2.12599 0.352778 2.16269C0.309291 2.20739 0.285328 2.26752 0.286153 2.32988C0.286979 2.39223 0.312527 2.45171 0.357182 2.49524L1.70573 3.81002L1.38713 5.66656C1.37966 5.70975 1.38444 5.75417 1.40092 5.79478C1.41741 5.83539 1.44495 5.87056 1.48041 5.89632C1.51587 5.92208 1.55784 5.93738 1.60156 5.9405C1.64528 5.94361 1.68899 5.93442 1.72775 5.91396L3.3949 5.03744L5.06205 5.91396C5.10756 5.93818 5.16042 5.94626 5.21107 5.93745C5.3388 5.91542 5.42469 5.7943 5.40267 5.66656L5.08407 3.81002L6.43262 2.49524C6.46932 2.45927 6.49355 2.41229 6.50089 2.3609C6.52071 2.23243 6.43115 2.11351 6.30268 2.09442Z"
                      fill="#FEA250"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="person-testimonial">
              <p>"I like it because I can connect with high speeds even when I travel far".</p>
            </div>
          </SplideSlide>
        </Splide>
        <div className="slider-controls">
          <div class="item-links">
            <div class="item-link selected"></div>
            <div class="item-link false"></div>
            <div class="item-link false"></div>
          </div>
          <div className="slider-btns">
            <button className="slider-btn left" type="button" aria-label="Go to first slide" aria-controls="splide01-track">
              <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.870456 4.34195H7.83562L5.70379 1.7814C5.6041 1.66147 5.55614 1.50685 5.57046 1.35155C5.58478 1.19626 5.6602 1.05301 5.78013 0.95333C5.90007 0.853646 6.05469 0.805687 6.20998 0.820005C6.36527 0.834323 6.50852 0.909744 6.6082 1.02968L9.54461 4.55337C9.56437 4.5814 9.58203 4.61084 9.59747 4.64146C9.59747 4.67083 9.59747 4.68844 9.63858 4.71781C9.6652 4.78515 9.67913 4.85682 9.67969 4.92923C9.67913 5.00164 9.6652 5.07331 9.63858 5.14065C9.63858 5.17002 9.63858 5.18763 9.59747 5.217C9.58203 5.24762 9.56437 5.27706 9.54461 5.30509L6.6082 8.82878C6.55298 8.89508 6.48384 8.94839 6.40568 8.98493C6.32752 9.02147 6.24227 9.04035 6.15599 9.04021C6.01877 9.04047 5.88579 8.99268 5.78013 8.90513C5.72067 8.85583 5.67151 8.79528 5.63548 8.72695C5.59945 8.65862 5.57725 8.58386 5.57016 8.50694C5.56307 8.43002 5.57122 8.35245 5.59415 8.27869C5.61708 8.20492 5.65434 8.13641 5.70379 8.07706L7.83562 5.51651H0.870456C0.714699 5.51651 0.565321 5.45464 0.455184 5.3445C0.345047 5.23436 0.283174 5.08499 0.283174 4.92923C0.283174 4.77347 0.345047 4.6241 0.455184 4.51396C0.565321 4.40382 0.714699 4.34195 0.870456 4.34195Z"
                  fill="#F53838"
                />
              </svg>
            </button>
            <button className="slider-btn right">
              <svg width="15" height="15" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.50576 4.34195H2.5406L4.67243 1.7814C4.77212 1.66147 4.82008 1.50685 4.80576 1.35155C4.79144 1.19626 4.71602 1.05301 4.59609 0.95333C4.47615 0.853646 4.32153 0.805687 4.16624 0.820005C4.01095 0.834323 3.8677 0.909744 3.76802 1.02968L0.831608 4.55337C0.811852 4.5814 0.794186 4.61084 0.778753 4.64146C0.778753 4.67083 0.778753 4.68844 0.737643 4.71781C0.711024 4.78515 0.697086 4.85682 0.696533 4.92923C0.697086 5.00164 0.711024 5.07331 0.737643 5.14065C0.737643 5.17002 0.737643 5.18763 0.778753 5.217C0.794186 5.24762 0.811852 5.27706 0.831608 5.30509L3.76802 8.82878C3.82324 8.89508 3.89238 8.94839 3.97054 8.98493C4.0487 9.02147 4.13395 9.04035 4.22023 9.04021C4.35745 9.04047 4.49043 8.99268 4.59609 8.90513C4.65555 8.85583 4.70471 8.79528 4.74074 8.72695C4.77677 8.65862 4.79897 8.58386 4.80606 8.50694C4.81315 8.43002 4.805 8.35245 4.78207 8.27869C4.75914 8.20492 4.72188 8.13641 4.67243 8.07706L2.5406 5.51651H9.50576C9.66152 5.51651 9.8109 5.45464 9.92104 5.3445C10.0312 5.23436 10.093 5.08499 10.093 4.92923C10.093 4.77347 10.0312 4.6241 9.92104 4.51396C9.8109 4.40382 9.66152 4.34195 9.50576 4.34195Z"
                  fill="#FFF"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonsal;
