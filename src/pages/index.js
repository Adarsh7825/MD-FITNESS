import { PriceCard } from "./../components/priceCard";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>MD Fitness</title>
        <meta
          name="description"
          content="Unlock your greatness and forge the body you want at Atlas Gym. We offer personalized training, a juice bar, sauna & spa, and professional trainers to help you achieve your fitness goals. Join now and experience a game-changing fitness journey!"
        />
        <meta
          name="keywords"
          content="Md Fitness Gym, gym, fitness, personalized training, juice bar, sauna, spa, professional trainers, fitness goals, membership plans, gym membership, fitness journey"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossOrigin="anonymous"
        />
      </Head>
      <div
        id={"modal"}
        className={`${modal ? "fixed" : "hidden"
          } w-screen h-screen bg-black/50 z-50 overflow-y-hidden flex justify-center items-center `}
      >

      </div>
      <main className="bg-black w-screen relative">
        <Navbar />
        <div className="flex justify-center items-center mx-auto">
          <div className="h-[98vh] overflow-hidden z-0 w-screen relative">
            <video autoPlay muted loop className="object-cover w-full h-full absolute">
              <source src="/videos/landing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              name="bgChild"
              className="relative flex flex-col justify-center items-center sm:items-end text-left  w-full h-full pr-12"
            >
              <div className="w-full md:w-2/5 mx-5 px-10 sm:px-5 py-10 leading-[3em] transition-all duration-300 text-center">
                <div className="text-blue-500 font-bold text-5xl sm:text-6xl md:text-7xl [text-shadow:_0_3px_3px_rgb(0_0_0_/_40%)]">
                  MD FITNESS
                </div>
                <div className="text-yellow-500 font-bold text-5xl sm:text-6xl md:text-7xl [text-shadow:_0_3px_3px_rgb(0_0_0_/_40%)]">
                  BEST FITNESS GYM FOR 2024
                </div>
                <div className="text-yellow-500 text-5xl sm:text-6xl md:text-6xl [text-shadow:_0_3px_3px_rgb(0_0_0_/_40%)] font-light mt-2">
                  AT YOUR NEAREST LOCATION
                </div>
                <button
                  id="hero-cta"
                  className="bg-white my-4 py-4 px-8 text-lg sm:text-xl uppercase font-bold border border-white hover:border-red-500 transition-all duration-300 relative transform hover:scale-105"
                  onMouseEnter={() => {
                    document
                      .getElementById("hero-cta-button-arrow")
                      .classList.add("left-2");
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("hero-cta-button-arrow")
                      .classList.remove("left-2");
                  }}
                  onClick={() => {
                    window.location.assign("/pricing");
                  }}
                >
                  Membership Plans{" "}
                  <i
                    id="hero-cta-button-arrow"
                    className="absolute fa-solid fa-arrow-right text-red-500 left-0 transition-all duration-200"
                  ></i>
                </button>
              </div>


            </div>
          </div>
        </div>



        <ul class="intro-cards container">



          <li class="intro-cards__row">
            <div class="intro-cards__img">
              <img src="https://images.jdmagicbox.com/comp/palghar/n8/022pxx22.xx22.180419090540.k8n8/catalogue/md-fitness-palghar-o2wc6ktho6.jpg"
                alt="GYMBOX INSTRUCTORS FOR YOUR ULTIMATE HYPE TEAM" />
            </div>
            <div class="intro-cards__copy text-white text-center md:text-left">
              <h3 class="mb-2 text-2xl font-bold text-yellow-400 uppercase font-helv1">GYMBOX INSTRUCTORS FOR YOUR ULTIMATE HYPE TEAM</h3>
              <p class="font-medium">
                Get to know everyone’s favorite Gymbox instructors to dish the chat, serve the energy, and motivate your muscles to get your ass to class.
              </p>
            </div>
          </li>





          <li class="intro-cards__row">
            <div class="intro-cards__img">
              <img src="https://images.jdmagicbox.com/comp/palghar/n8/022pxx22.xx22.180419090540.k8n8/catalogue/md-fitness-palghar-15dxduwtzz.jpg" alt="FRESH CLASSES EVERY WEEK" />
            </div>
            <div class="intro-cards__copy text-white">
              <h3>FRESH CLASSES EVERY WEEK</h3>
              <p>Get your Gymbox fix wherever you are, whenever you want. Say goodbye to repetitive training and never do the same workout twice with brand new classes dropping every week.</p>
            </div>
          </li>





          <li class="intro-cards__row">
            <div class="intro-cards__img">
              <img src="https://images.jdmagicbox.com/comp/palghar/n8/022pxx22.xx22.180419090540.k8n8/catalogue/md-fitness-palghar-0oug7t8rpy.jpg"
                alt="GYMBOX INSTRUCTORS FOR YOUR ULTIMATE HYPE TEAM" />
            </div>
            <div class="intro-cards__copy text-white">
              <h3>GYMBOX INSTRUCTORS FOR YOUR ULTIMATE HYPE TEAM</h3>
              <p>Get to know everyone’s favourite Gymbox instructors to dish the chat, serve the energy and motivate your
                muscles to get your ass your class.</p>
            </div>
          </li>




          <li class="intro-cards__row">
            <div class="intro-cards__img">
              <img src="https://images.jdmagicbox.com/comp/palghar/n8/022pxx22.xx22.180419090540.k8n8/catalogue/md-fitness-palghar-aewftocnci.jpg"
                alt="PERFECT A SKILL AND TRAIN LIKE A BOSS" />
            </div>
            <div class="intro-cards__copy text-white">
              <h3>PERFECT A SKILL AND TRAIN LIKE A BOSS</h3>
              <p>A whole section of workouts and skill-based sessions designed to help you get the most out of your
                training. New skill you’re after? Or just fancy focusing on something a bit different? All-level lessons
                for the jacks and jills of all trades.</p>
            </div>
          </li>

        </ul>

        <>
          <div className="c-profile-grid">
            <div className="c-profile-grid__header">
              <div className="c-profile-grid__filters">
                <div className="c-profile-grid__filter  js-profile-grid-func">
                  <button
                    className="c-btn  c-btn--quinary  c-header__btn js-profile-grid-clear"
                    value="reset"
                  >
                    ALL
                  </button>
                  <button
                    className="c-btn  c-btn--quinary  c-header__btn js-profile-grid-positions-btn "
                    value="barre"
                  >
                    BARRE
                  </button>
                  <button
                    className="c-btn  c-btn--quinary  c-header__btn js-profile-grid-positions-btn "
                    value="condition"
                  >
                    CONDITION
                  </button>
                  <button
                    className="c-btn  c-btn--quinary  c-header__btn js-profile-grid-positions-btn "
                    value="strength"
                  >
                    STRENGTH
                  </button>
                  <button
                    className="c-btn  c-btn--quinary  c-header__btn js-profile-grid-positions-btn "
                    value="u-cycle"
                  >
                    U-CYCLE
                  </button>
                  <button
                    className="c-btn  c-btn--quinary  c-header__btn js-profile-grid-positions-btn "
                    value="yoga"
                  >
                    YOGA
                  </button>
                </div>
                <div className="c-profile-grid__filter  js-profile-grid-func js-specialty ">
                  <div className="c-profile-grid__filter-label">
                    <p>View by Specialty:</p>
                  </div>
                  <div className="c-form__select-wp c-profile-grid__filter-wp">
                    <div className="custom-select js-select-pc">
                      <select className="c-profile-grid__filter-wp-select  js-profile-grid-focus-areas">
                        <option value="reset">Please Select</option>
                        <option value="reset">All</option>
                        <option value="evolve">EVOLVE</option>
                        <option value="glutes-core">GLUTES &amp; CORE</option>
                        <option value="hiit-run">HIIT &amp; RUN</option>
                        <option value="pbb-burn">PBB BURN</option>
                        <option value="pbb-burn-sculpt">PBB BURN &amp; SCULPT</option>
                        <option value="pbb-signature">PBB SIGNATURE</option>
                        <option value="power-yoga">POWER YOGA</option>
                        <option value="strength">STRENGTH</option>
                        <option value="the-games">THE GAMES</option>
                        <option value="threashold">THRESHOLD</option>
                        <option value="u-cycle">U-CYCLE</option>
                        <option value="vinyasa">VINYASA</option>
                        <option value="yin">YIN</option>
                      </select>
                      <svg className="icon-down-white">
                        <use xlinkHref="#icon-down-white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="c-profile-grid__filter  js-profile-grid-func">
                  <input
                    type="hidden"
                    className="c-profile-grid__search-input  js-profile-grid-search"
                    placeholder="Name"
                  />
                  <svg className="c-profile-grid__search-icon">
                    <use xlinkHref="#search-def" />
                  </svg>
                </div>
              </div>
              <div className="c-profile-grid__cards">
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/aaron-sweeney-harris/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/03/Aaron-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/03/Aaron.jpg 400w, https://www.kxu.co.uk/propeller/uploads/2023/03/Aaron-300x300.jpg 300w, https://www.kxu.co.uk/propeller/uploads/2023/03/Aaron-150x150.jpg 150w, https://www.kxu.co.uk/propeller/uploads/2023/03/Aaron-12x12.jpg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="AARON<br> SWEENEY - HARRIS"
                        >
                          <a href="../profiles/aaron-sweeney-harris/index.html">
                            AARON
                            <br /> SWEENEY - HARRIS{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/aaron-sweeney-harris/index.html">
                            CONDITION{" "}
                          </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="threashold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/alex-lawson/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/03/Alex-Lawson-headshot-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/03/Alex-Lawson-headshot.jpg 400w, https://www.kxu.co.uk/propeller/uploads/2023/03/Alex-Lawson-headshot-300x300.jpg 300w, https://www.kxu.co.uk/propeller/uploads/2023/03/Alex-Lawson-headshot-150x150.jpg 150w, https://www.kxu.co.uk/propeller/uploads/2023/03/Alex-Lawson-headshot-12x12.jpg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="ALEX LAWSON"
                        >
                          <a href="../profiles/alex-lawson/index.html">ALEX LAWSON </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/alex-lawson/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/alex-rogers/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/03/Alex-Rogers-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/03/Alex-Rogers.jpg 400w, https://www.kxu.co.uk/propeller/uploads/2023/03/Alex-Rogers-300x300.jpg 300w, https://www.kxu.co.uk/propeller/uploads/2023/03/Alex-Rogers-150x150.jpg 150w, https://www.kxu.co.uk/propeller/uploads/2023/03/Alex-Rogers-12x12.jpg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="Alex Rogers"
                        >
                          <a href="../profiles/alex-rogers/index.html">Alex Rogers </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="strength"
                        >
                          <a href="../profiles/alex-rogers/index.html">STRENGTH </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="strength"
                        ></span>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="yoga"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="the-games"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="yin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/ali-mckenzie/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/03/Ali-Mc-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/03/Ali-Mc.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/03/Ali-Mc-300x300.jpg 300w, https://www.kxu.co.uk/propeller/uploads/2023/03/Ali-Mc-150x150.jpg 150w, https://www.kxu.co.uk/propeller/uploads/2023/03/Ali-Mc-12x12.jpg 12w, https://www.kxu.co.uk/propeller/uploads/2023/03/Ali-Mc-400x400.jpg 400w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="Ali McKenzie"
                        >
                          <a href="../profiles/ali-mckenzie/index.html">
                            Ali McKenzie{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/ali-mckenzie/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="strength"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="evolve"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="the-games"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="threashold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/andre-williams/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/03/Andre_211122_162421-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/03/Andre_211122_162421.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/03/Andre_211122_162421-300x300.jpg 300w, https://www.kxu.co.uk/propeller/uploads/2023/03/Andre_211122_162421-150x150.jpg 150w, https://www.kxu.co.uk/propeller/uploads/2023/03/Andre_211122_162421-12x12.jpg 12w, https://www.kxu.co.uk/propeller/uploads/2023/03/Andre_211122_162421-400x400.jpg 400w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="ANDRE WILLIAMS"
                        >
                          <a href="../profiles/andre-williams/index.html">
                            ANDRE WILLIAMS{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/andre-williams/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/anna-maria-ronnqvist/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Anna-Maria--400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Anna-Maria-.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Anna-Maria--300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Anna-Maria--150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Anna-Maria--12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="ANNA-MARIA RONNQVIST"
                        >
                          <a href="../profiles/anna-maria-ronnqvist/index.html">
                            ANNA-MARIA RONNQVIST{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/anna-maria-ronnqvist/index.html">
                            CONDITION{" "}
                          </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="strength"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="evolve"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="the-games"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="threashold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/anthony-garcia/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Anthony-Garcia-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Anthony-Garcia.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Anthony-Garcia-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Anthony-Garcia-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Anthony-Garcia-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="ANTHONY GARCIA"
                        >
                          <a href="../profiles/anthony-garcia/index.html">
                            ANTHONY GARCIA{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/anthony-garcia/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/beatrice-hayes/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Beatrice-Hayes-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Beatrice-Hayes.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Beatrice-Hayes-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Beatrice-Hayes-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Beatrice-Hayes-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="BEATRICE HAYES"
                        >
                          <a href="../profiles/beatrice-hayes/index.html">
                            BEATRICE HAYES{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/beatrice-hayes/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/653/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/IMG_0651-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/IMG_0651-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/IMG_0651-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="BRADEN BAUGH"
                        >
                          <a href="../profiles/653/index.html">BRADEN BAUGH </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/653/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/caleb-jude-packham/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Caleb-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Caleb.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Caleb-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Caleb-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Caleb-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="CALEB JUDE-PACKHAM"
                        >
                          <a href="../profiles/caleb-jude-packham/index.html">
                            CALEB JUDE-PACKHAM{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="yoga"
                        >
                          <a href="../profiles/caleb-jude-packham/index.html">YOGA </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="yoga"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="power-yoga"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="vinyasa"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="yin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/carl-van-heerden/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/2E2A1189-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A1189-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A1189-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="CARL VAN HEERDEN"
                        >
                          <a href="../profiles/carl-van-heerden/index.html">
                            CARL VAN HEERDEN{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/carl-van-heerden/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/charlie-peters/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Charlie-Peters-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Charlie-Peters.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Charlie-Peters-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Charlie-Peters-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Charlie-Peters-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="CHARLIE PETERS"
                        >
                          <a href="../profiles/charlie-peters/index.html">
                            CHARLIE PETERS{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/charlie-peters/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/chez-liebenberg/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/2E2A6264-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A6264-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A6264-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="CHEZ LIEBENBERG"
                        >
                          <a href="../profiles/chez-liebenberg/index.html">
                            CHEZ LIEBENBERG{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/chez-liebenberg/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/claudia-evans/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Claudia-Evans-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Claudia-Evans.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Claudia-Evans-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Claudia-Evans-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Claudia-Evans-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="CLAUDIA EVANS"
                        >
                          <a href="../profiles/claudia-evans/index.html">
                            CLAUDIA EVANS{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="barre"
                        >
                          <a href="../profiles/claudia-evans/index.html">BARRE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="barre"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="pbb-burn"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="pbb-burn-sculpt"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="pbb-signature"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/ellie-rhodes/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/2E2A0759-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A0759-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A0759-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="ELLIE RHODES"
                        >
                          <a href="../profiles/ellie-rhodes/index.html">
                            ELLIE RHODES{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/ellie-rhodes/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/elliot-powell/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/elliot-powell-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/elliot-powell.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/elliot-powell-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/elliot-powell-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/elliot-powell-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="ELLIOT POWELL"
                        >
                          <a href="../profiles/elliot-powell/index.html">
                            ELLIOT POWELL{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/elliot-powell/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/hannah-rushforth/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Hannah-Rushforth-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Hannah-Rushforth.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Hannah-Rushforth-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Hannah-Rushforth-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Hannah-Rushforth-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="HANNAH RUSHFORTH"
                        >
                          <a href="../profiles/hannah-rushforth/index.html">
                            HANNAH RUSHFORTH{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="yoga"
                        >
                          <a href="../profiles/hannah-rushforth/index.html">YOGA </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="yoga"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="power-yoga"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="vinyasa"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="yin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/hiba-alsady/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/2E2A6103-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A6103-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A6103-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="HIBA ALSADY"
                        >
                          <a href="../profiles/hiba-alsady/index.html">HIBA ALSADY </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/hiba-alsady/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/james-stirling/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/James-Stirling-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/James-Stirling.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/James-Stirling-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/James-Stirling-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/James-Stirling-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="JAMES STIRLING"
                        >
                          <a href="../profiles/james-stirling/index.html">
                            JAMES STIRLING{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/james-stirling/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="threashold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/joe-corrie/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/2E2A1777-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A1777-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A1777-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="JOE CORRIE"
                        >
                          <a href="../profiles/joe-corrie/index.html">JOE CORRIE </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/joe-corrie/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/lea-isabelle-suthmann/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/2E2A6448-1-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A6448-1-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A6448-1-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="LEA ISABELLE SUTHMANN"
                        >
                          <a href="../profiles/lea-isabelle-suthmann/index.html">
                            LEA ISABELLE SUTHMANN{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/lea-isabelle-suthmann/index.html">
                            U-CYCLE{" "}
                          </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/louis-quaye/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Louis-Quaye-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Louis-Quaye.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Louis-Quaye-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Louis-Quaye-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Louis-Quaye-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="LOUIS QUAYE"
                        >
                          <a href="../profiles/louis-quaye/index.html">LOUIS QUAYE </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/louis-quaye/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/luke-bailey/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/2E2A1841-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A1841-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A1841-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="LUKE BAILEY"
                        >
                          <a href="../profiles/luke-bailey/index.html">LUKE BAILEY </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/luke-bailey/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="threashold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/681/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/1A5A1171-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/1A5A1171-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/1A5A1171-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="MADDY JUPP"
                        >
                          <a href="../profiles/681/index.html">MADDY JUPP </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="strength"
                        >
                          <a href="../profiles/681/index.html">STRENGTH </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="strength"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="glutes-core"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/maddy-slade/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/4CB1C88D-D604-44CB-9D14-40BCDFADE604-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/4CB1C88D-D604-44CB-9D14-40BCDFADE604-600x600.jpeg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/4CB1C88D-D604-44CB-9D14-40BCDFADE604-150x150.jpeg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="MADDY SLADE"
                        >
                          <a href="../profiles/maddy-slade/index.html">MADDY SLADE </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/maddy-slade/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/mira-khreino/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/06/2E2A1282-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/2E2A1282-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/06/2E2A1282-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="MIRA KHREINO"
                        >
                          <a href="../profiles/mira-khreino/index.html">
                            MIRA KHREINO{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="yoga"
                        >
                          <a href="../profiles/mira-khreino/index.html">YOGA </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="yoga"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="power-yoga"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="vinyasa"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="yin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/nicky-lopez/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Nicky-Lopez-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Nicky-Lopez.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Nicky-Lopez-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Nicky-Lopez-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Nicky-Lopez-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="NICKY LOPEZ "
                        >
                          <a href="../profiles/nicky-lopez/index.html">NICKY LOPEZ </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/nicky-lopez/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/niklas-liljesand/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/06/2E2A0601-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/2E2A0601-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/06/2E2A0601-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="NIKLAS LILJESAND"
                        >
                          <a href="../profiles/niklas-liljesand/index.html">
                            NIKLAS LILJESAND{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="u-cycle"
                        >
                          <a href="../profiles/niklas-liljesand/index.html">U-CYCLE </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="u-cycle"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="u-cycle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/omar-mansour/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Omar-Mansour-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Omar-Mansour.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Omar-Mansour-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Omar-Mansour-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Omar-Mansour-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="OMAR MANSOUR"
                        >
                          <a href="../profiles/omar-mansour/index.html">
                            OMAR MANSOUR{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/omar-mansour/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="threashold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/poppy-ross/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/380888254_629517905953794_4943459066260336531_n-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/380888254_629517905953794_4943459066260336531_n-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/380888254_629517905953794_4943459066260336531_n-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="POPPY ROSS"
                        >
                          <a href="../profiles/poppy-ross/index.html">POPPY ROSS </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/poppy-ross/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="hiit-run"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="threashold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/rose-firouzbakht/index.html">
                          <img
                            width={600}
                            height={600}
                            src="../propeller/uploads/2023/10/2E2A0408-600x600.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A0408-600x600.jpg 600w, https://www.kxu.co.uk/propeller/uploads/2023/10/2E2A0408-150x150.jpg 150w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="ROSE FIROUZBAKHT"
                        >
                          <a href="../profiles/rose-firouzbakht/index.html">
                            ROSE FIROUZBAKHT{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="yoga"
                        >
                          <a href="../profiles/rose-firouzbakht/index.html">YOGA </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="yoga"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="vinyasa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/saskia-vidler/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Saskia-Vidler-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Saskia-Vidler.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Saskia-Vidler-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Saskia-Vidler-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Saskia-Vidler-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="SASKIA VIDLER"
                        >
                          <a href="../profiles/saskia-vidler/index.html">
                            SASKIA VIDLER{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="yoga"
                        >
                          <a href="../profiles/saskia-vidler/index.html">YOGA </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="yoga"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="power-yoga"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="vinyasa"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="yin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-profile-card    js-profile-card">
                  <div className="c-profile-card__inner">
                    <div className="c-profile-card__header">
                      <div className="c-profile-card__image">
                        <a href="../profiles/will-mclaren/index.html">
                          <img
                            width={400}
                            height={400}
                            src="../propeller/uploads/2023/06/Will-McLaren-400x400.jpg"
                            className="o-img  o-img--absolute  o-img--cover lazyloaded"
                            alt=""
                            loading="lazy"
                            srcSet="https://www.kxu.co.uk/propeller/uploads/2023/06/Will-McLaren.jpeg 400w, https://www.kxu.co.uk/propeller/uploads/2023/06/Will-McLaren-300x300.jpeg 300w, https://www.kxu.co.uk/propeller/uploads/2023/06/Will-McLaren-150x150.jpeg 150w, https://www.kxu.co.uk/propeller/uploads/2023/06/Will-McLaren-12x12.jpeg 12w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />{" "}
                        </a>
                      </div>
                      <div className="c-profile-card__content">
                        <h4
                          className="c-profile-card__name  js-profile-card-name"
                          data-profile-name="WILL MCLAREN"
                        >
                          <a href="../profiles/will-mclaren/index.html">
                            WILL MCLAREN{" "}
                          </a>
                        </h4>
                        <p
                          className="c-profile-card__position  js-profile-card-position"
                          data-position="condition"
                        >
                          <a href="../profiles/will-mclaren/index.html">CONDITION </a>
                        </p>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="condition"
                        ></span>
                        <span
                          className="c-profile-card__position c-profile-gird__is-hidden js-profile-card-position"
                          data-position="strength"
                        ></span>
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="evolve"
                        />
                        <span
                          className="c-profile-card__focus-area  js-profile-card-focus-area"
                          data-focus-area="threashold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-profile-grid__footer">
                <div className="c-profile-grid__no-more  js-profile-grid-no-more">
                  <p>Sorry, there are no more profiles to show.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-cookie-banner  js-cookie-banner  is-hidden  is-visiblyhidden">
            <div className="c-cookie-banner__inner o-container">
              <div className="c-cookie-banner__text">
                This website uses cookies to help you get the best experience on our
                website.{" "}
                <a href="../privacy-policy.html" className="c-cookie-banner__link">
                  Learn More
                </a>
              </div>
              <div className="btn-cookie">
                <button className="c-cookie-banner__accept  js-cookie-banner-accept-close">
                  <span>GOT IT!</span>
                </button>
                <button className="c-cookie-banner__close  js-cookie-banner-close">
                  <span>×</span>
                </button>
              </div>
            </div>
          </div>
        </>
        <div className="bg-white flex flex-col py-8 items-center border-b-2">
          <div className="text-black  text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
            Testimonials
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
          </div>

          <div className="flex max-w-[1000px] mx-10 my-16">
            <div className="h-[425px] w-[250px]  rounded-tr-[6.7em] relative overflow-hidden hidden md:block">
              <Image
                className="object-cover z-10 "
                alt="Fit Atlas Gym Member With Testimonial"
                src="/images/testimonial-guy.webp"
                fill
              />
            </div>
            <div className="max-w-[750px]">
              <div className="h-[100px]"></div>
              <div className="h-[325px] px-4 py-6 bg-black text-white align-bottom md:pl-24">
                <i className="fa-solid fa-quote-right text-white text-[2em] sm:text-[3.5em]"></i>
                <div
                  id="testimonial text"
                  className="font-thin italic text-[.8em] sm:text-[1em] md:text-[1.1em]"
                >
                  &quot;The Atlas Gym has truly been a game-changer in my
                  fitness journey. Its welcoming environment, top-notch
                  equipment, and expert trainers have supported me in surpassing
                  my fitness goals. From tailor-made personal training plans to
                  diverse group classes, they offer an all-encompassing approach
                  to health. Thanks to Atlas Gym, I am stronger, healthier, and
                  more confident than ever.&quot;
                </div>
                <div className="flex justify-between h-[100px]">
                  <div>
                    <div className="font-semibold text-md sm:text-2xl">
                      Matthew M. Walsh
                    </div>
                    <div className="text-sm sm:text-md">Fitness Influencer</div>
                  </div>
                  <div className="flex flex-col h-[px] justify-end">
                    <div className="flex gap-4">
                      <button
                        id="testimonial-left-btn"
                        role="button"
                        aria-label="Previous Testimonial Button"
                        className="bg-white my-4 py-3 px-6 text-sm uppercase font-bold text-black hover:bg-red-500 hover:text-white transition-all duration-300"
                      >
                        <i
                          id="testimonial-left-arrow"
                          className="relative fa-solid fa-arrow-left"
                        ></i>
                      </button>

                      <button
                        id="testimonial-right-btn"
                        role="button"
                        aria-label="Next Testimonial Button"
                        className="bg-white my-4 sm:py-3 px-6 text-sm uppercase font-bold text-black hover:bg-red-500 hover:text-white transition-all duration-300"
                      >
                        <i
                          id="testimonial-right-arrow"
                          className="relative fa-solid fa-arrow-right"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black  text-center text-xl mt-10 mb-10 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold underline">
            Brands We Work With
          </div>
          <div className="flex justify-center w-screen pb-4">
            <div className="flex justify-evenly w-[1080px] flex-wrap gap-10 ">
              <div className="flex flex-col sm:flex-row gap-10 child:opacity-60 child-hover:opacity-100">
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-scale-down"
                    src="/images/brands/gymshark.webp"
                    alt="Brand Partner Gymshark"
                    fill
                  ></Image>
                </div>
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-scale-down"
                    src="/images/brands/ryse.webp"
                    alt="Brand Partner Ryse"
                    fill
                  ></Image>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-10 child:opacity-60 child-hover:opacity-100">
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-scale-down"
                    src="/images/brands/bodybuilding-com.webp"
                    alt="Brand Partner Bodybuilding.com"
                    fill
                  ></Image>
                </div>
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-scale-down"
                    src="/images/brands/news.webp"
                    alt="Brand Partner Blank News"
                    fill
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-8 items-center border-b-2">
          <div className="text-black  text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
            Pricing
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center gap-10 flex-wrap">
              <PriceCard
                title={"Newcomer"}
                price="2000"
                features={""}
                thumbnail="/images/pricing/pricing-2.jpg"
                tier={1}
              />
              <PriceCard
                title={"Experienced"}
                price="3000"
                features={""}
                thumbnail="/images/pricing/pricing-1.webp"
                tier={2}
              />
              <PriceCard
                title={"Mr. Olympia"}
                price="5000"
                features={""}
                thumbnail="/images/pricing/pricing-3.webp"
                tier={3}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
