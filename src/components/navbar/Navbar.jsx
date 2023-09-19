import React from 'react'
import Ads from '../ads/Ads'
import {FaBars, FaFacebook, FaLinkedinIn, FaLock, FaSearch, FaTwitter, FaUser, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
        <Ads />
        <div className="home page-template page-template-template-builder page-template-template-builder-php page page-id-431441 wp-embed-responsive jeg_toggle_light jnews jsc_normal wpb-js-composer js-comp-ver-6.13.0 vc_responsive">
  {/* The Main Wrapper
    ============================================= */}
  <div className="jeg_viewport">
    <div className="jeg_header_wrapper">
      <div className="jeg_header_instagram_wrapper"></div>
      {/* HEADER */}
      <div className="jeg_header normal">
        <div className="jeg_topbar jeg_container jeg_navbar_wrapper dark">
          <div className="container">
            <div className="jeg_nav_row">
              <div className="jeg_nav_col jeg_nav_left  jeg_nav_normal">
                <div className="item_wrap jeg_nav_alignleft"></div>
              </div>
              <div className="jeg_nav_col jeg_nav_center  jeg_nav_grow">
                <div className="item_wrap jeg_nav_aligncenter">
                  <div className="jeg_nav_item jeg_nav_account">
                    <ul className="jeg_accountlink jeg_menu">
                      <li>
                        <a href="#jeg_loginform" className="jeg_popuplink">
                          <FaLock className="fa fa-lock" /> Login
                        </a>
                      </li>
                      <li>
                        <a href="#jeg_registerform" className="jeg_popuplink">
                          <FaUser className="fa fa-user" /> Register
                        </a>
                      </li>{" "}
                    </ul>
                  </div>{" "}
                </div>
              </div>
              <div className="jeg_nav_col jeg_nav_right  jeg_nav_normal">
                <div className="item_wrap jeg_nav_alignright"></div>
              </div>
            </div>
          </div>
        </div>
        {/* /.jeg_container */}
        <div className="jeg_midbar jeg_container jeg_navbar_wrapper normal">
          <div className="container">
            <div className="jeg_nav_row">
              <div className="jeg_nav_col jeg_nav_left jeg_nav_normal">
                <div className="item_wrap jeg_nav_alignleft"></div>
              </div>
              <div className="jeg_nav_col jeg_nav_center jeg_nav_grow">
                <div className="item_wrap jeg_nav_aligncenter">
                  <div className="jeg_nav_item jeg_logo jeg_desktop_logo">
                    <h1 className="site-title">
                      <a
                        href="https://nairametrics.com/"
                        style={{ padding: "0 0 0 0" }}
                      >
                        <img
                          className="jeg_logo_img"
                          src="images/nairametrics-logo-2022.jpg"
                          srcSet="images/nairametrics-logo-2022.jpg 1x, images/nairametrics-logo-2022.jpg 2x"
                          alt="Nairametrics"
                          data-light-src="https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg"
                          data-light-srcset="https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg 1x, https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg 2x"
                          data-dark-src="https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg"
                          data-dark-srcset="https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg 1x, https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg 2x"
                        />
                        <span
                          style={{
                            border: 0,
                            padding: 0,
                            margin: 0,
                            position: "absolute!important",
                            height: 1,
                            width: 1,
                            overflow: "hidden",
                            clip: "rect(1px,1px,1px,1px)",
                            WebkitClipPath: "inset(50%)",
                            clipPath: "inset(50%)",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Nairametrics
                        </span>{" "}
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
                <div className="item_wrap jeg_nav_alignright"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="jeg_bottombar jeg_navbar jeg_container jeg_navbar_wrapper jeg_navbar_normal jeg_navbar_normal">
          <div className="container">
            <div className="jeg_nav_row">
              <div className="jeg_nav_col jeg_nav_left jeg_nav_normal">
                <div className="item_wrap jeg_nav_alignleft">
                  <div className="jeg_nav_item socials_widget jeg_social_icon_block nobg">
                    <a
                      href="https://www.facebook.com/nairametrics/"
                      target="_blank"
                      rel="external noopener nofollow noreferrer"
                      className="jeg_facebook"
                    >
                      <FaFacebook className="fa fa-facebook" />{" "}
                    </a>
                    <a
                      href="https://twitter.com/nairametrics"
                      target="_blank"
                      rel="external noopener nofollow noreferrer"
                      className="jeg_twitter"
                    >
                      <FaTwitter className="fa fa-twitter" />{" "}
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC1GBKv15keKOgHbEBEMeo9w/videos"
                      target="_blank"
                      rel="external noopener nofollow noreferrer"
                      className="jeg_youtube"
                    >
                      <FaYoutube className="fa fa-youtube-play" />{" "}
                    </a>
                    <a
                      href="https://www.linkedin.com/company/nairametrics/"
                      target="_blank"
                      rel="external noopener nofollow noreferrer"
                      className="jeg_linkedin"
                    >
                      <FaLinkedinIn className="fa fa-linkedin" />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="jeg_nav_col jeg_nav_center jeg_nav_grow">
                <div className="item_wrap jeg_nav_aligncenter">
                  <div className="jeg_nav_item jeg_main_menu_wrapper">
                    <div className="jeg_mainmenu_wrap">
                      <ul
                        className="jeg_menu jeg_main_menu jeg_menu_style_1"
                        data-animation="animate"
                      >
                        <li
                          id="menu-item-238380"
                          className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-238380 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/">Home</a>
                        </li>
                        <li
                          id="menu-item-386454"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-386454 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/category/exclusives/">
                            Exclusives
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-388140"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388140 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/market-news/financial/">
                                Financial Analysis
                              </a>
                            </li>
                            <li
                              id="menu-item-388141"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388141 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/exclusives/corporate-stories/">
                                Corporate Stories
                              </a>
                            </li>
                            <li
                              id="menu-item-388142"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388142 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/exclusives/interviews/">
                                Interviews
                              </a>
                            </li>
                            <li
                              id="menu-item-388143"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388143 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/exclusives/investigations/">
                                Investigations
                              </a>
                            </li>
                            <li
                              id="menu-item-388135"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388135 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/metrics/">
                                Metrics
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-238382"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-238382 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/category/market-news/">
                            Markets
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-430470"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-430470 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/market-news/naira-dollar-exchange-rate/">
                                Currencies
                              </a>
                            </li>
                            <li
                              id="menu-item-262200"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262200 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/market-news/cryptocurrency-news/">
                                Cryptos
                              </a>
                            </li>
                            <li
                              id="menu-item-262197"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262197 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/market-news/commodities/">
                                Commodities
                              </a>
                            </li>
                            <li
                              id="menu-item-388168"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-388168 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/market-news/equities/">
                                Equities
                              </a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-301016"
                                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-301016 bgnav"
                                  data-item-row="default"
                                >
                                  <a href="https://nairametrics.com/category/market-news/equities/dividends/">
                                    Dividends
                                  </a>
                                </li>
                                <li
                                  id="menu-item-388170"
                                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388170 bgnav"
                                  data-item-row="default"
                                >
                                  <a href="https://nairametrics.com/category/market-news/equities/nigerian-stock-exchange-market/">
                                    Stock Market
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-388169"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388169 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/market-news/fixed-income/">
                                Fixed Income
                              </a>
                            </li>
                            <li
                              id="menu-item-262202"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262202 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/market-news/market-views/">
                                Market Views
                              </a>
                            </li>
                            <li
                              id="menu-item-390463"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-390463 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/market-news/fixed-income/equities-moneymarket-bonds-funds/">
                                Securities
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-387828"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-387828 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/category/industries/">
                            Industries
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-387829"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387829 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/latest-nigerian-company-news/">
                                Company News
                              </a>
                            </li>
                            <li
                              id="menu-item-387830"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387830 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/nigeria-business-news/consumer-goods/">
                                Consumer Goods
                              </a>
                            </li>
                            <li
                              id="menu-item-387831"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387831 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/corporates/">
                                Corporate Updates
                              </a>
                            </li>
                            <li
                              id="menu-item-387832"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387832 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/nigeria-business-news/corporate-deals/">
                                Corporate deals
                              </a>
                            </li>
                            <li
                              id="menu-item-387833"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387833 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/corporate-official-press-releases-from-nigerian-companies/">
                                Corporate Press Releases
                              </a>
                            </li>
                            <li
                              id="menu-item-387834"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387834 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/energy/">
                                Energy
                              </a>
                            </li>
                            <li
                              id="menu-item-387835"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387835 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/wealth/entertainment/">
                                Entertainment
                              </a>
                            </li>
                            <li
                              id="menu-item-387836"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387836 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/financial-services/">
                                Financial Services
                              </a>
                            </li>
                            <li
                              id="menu-item-387837"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387837 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/hospitality-travel/">
                                Hospitality &amp; Travel
                              </a>
                            </li>
                            <li
                              id="menu-item-387838"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387838 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/manufacturing/">
                                Manufacturing
                              </a>
                            </li>
                            <li
                              id="menu-item-390460"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-390460 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/real-estate-and-construction/">
                                Real Estate and Construction
                              </a>
                            </li>
                            <li
                              id="menu-item-390461"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-390461 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/industries/tech-news/">
                                Tech News
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-384841"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-384841 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/category/economy/">
                            Economy
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-238417"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-238417 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairalytics.com/">Nairalytics</a>
                            </li>
                            <li
                              id="menu-item-388134"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388134 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/economy/macro-economic/">
                                Macro-Economic News
                              </a>
                            </li>
                            <li
                              id="menu-item-390462"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-390462 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/economy/analysis-on-financial-and-macroeconomic-data-from-nigeria/">
                                Research Analysis
                              </a>
                            </li>
                            <li
                              id="menu-item-430471"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-430471 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/economy/budget/">
                                Budget
                              </a>
                            </li>
                            <li
                              id="menu-item-430472"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-430472 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/economy/public-debt/">
                                Public Debt
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-238387"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-238387 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/category/nigeria-business-news/">
                            Business News
                          </a>
                        </li>
                        <li
                          id="menu-item-238385"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-238385 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/category/financial-literacy-for-nigerians/">
                            Financial Literacy
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-262194"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262194 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/financial-literacy-for-nigerians/career-tips/">
                                Career tips
                              </a>
                            </li>
                            <li
                              id="menu-item-262195"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262195 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/financial-literacy-for-nigerians/personal-finance/">
                                Personal Finance
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-388137"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-388137 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/category/wealth/">
                            Lifestyle
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-388136"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388136 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/people/billionaire-watch/">
                                Billionaire Watch
                              </a>
                            </li>
                            <li
                              id="menu-item-388138"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388138 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/people/profiles/">
                                Profiles
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-238401"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-238401 bgnav"
                          data-item-row="default"
                        >
                          <a href="https://nairametrics.com/category/opinion-editorials/">
                            Opinions
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-295855"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-295855 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/opinion-editorials/blurb/">
                                Blurb
                              </a>
                            </li>
                            <li
                              id="menu-item-301000"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-301000 bgnav"
                              data-item-row="default"
                            >
                              <a href="https://nairametrics.com/category/opinion-editorials/columnists/">
                                Op-Eds
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
                <div className="item_wrap jeg_nav_alignright">
                  {/* Search Icon */}
                  <div className="jeg_nav_item jeg_search_wrapper search_icon jeg_search_popup_expand">
                    <a href="#" className="jeg_search_toggle">
                      <FaSearch className="fa fa-search" />
                    </a>
                    <form
                      action="https://nairametrics.com/"
                      method="get"
                      className="jeg_search_form"
                      target="_top"
                    >
                      <input
                        name="s"
                        className="jeg_search_input"
                        placeholder="Search..."
                        type="text"
                        defaultValue=""
                        autoComplete="off"
                      />
                      <button
                        aria-label="Search Button"
                        type="submit"
                        className="jeg_search_button btn"
                      >
                        <FaSearch className="fa fa-search" />
                      </button>
                    </form>
                    {/* jeg_search_hide with_result no_result */}
                    <div className="jeg_search_result jeg_search_hide with_result">
                      <div className="search-result-wrapper"></div>
                      <div className="search-link search-noresult">
                        No Result{" "}
                      </div>
                      <div className="search-link search-all-button">
                        <FaSearch className="fa fa-search" /> View All Result{" "}
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.jeg_header */}
    </div>{" "}



    <div className="jeg_header_sticky">
  <div className="sticky_blankspace" />
  <div className="jeg_header normal">
    <div className="jeg_container">
      <div
        data-mode="scroll"
        className="jeg_stickybar jeg_navbar jeg_navbar_wrapper jeg_navbar_normal jeg_navbar_normal"
      >
        <div className="container">
          <div className="jeg_nav_row">
            <div className="jeg_nav_col jeg_nav_left jeg_nav_grow">
              <div className="item_wrap jeg_nav_alignleft">
                <div className="jeg_nav_item jeg_main_menu_wrapper">
                  <div className="jeg_mainmenu_wrap">
                    <ul
                      className="jeg_menu jeg_main_menu jeg_menu_style_1"
                      data-animation="animate"
                    >
                      <li
                        id="menu-item-238380"
                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-238380 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/">Home</a>
                      </li>
                      <li
                        id="menu-item-386454"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-386454 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/category/exclusives/">
                          Exclusives
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-388140"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388140 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/market-news/financial/">
                              Financial Analysis
                            </a>
                          </li>
                          <li
                            id="menu-item-388141"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388141 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/exclusives/corporate-stories/">
                              Corporate Stories
                            </a>
                          </li>
                          <li
                            id="menu-item-388142"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388142 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/exclusives/interviews/">
                              Interviews
                            </a>
                          </li>
                          <li
                            id="menu-item-388143"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388143 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/exclusives/investigations/">
                              Investigations
                            </a>
                          </li>
                          <li
                            id="menu-item-388135"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388135 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/metrics/">
                              Metrics
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-238382"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-238382 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/category/market-news/">
                          Markets
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-430470"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-430470 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/market-news/naira-dollar-exchange-rate/">
                              Currencies
                            </a>
                          </li>
                          <li
                            id="menu-item-262200"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262200 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/market-news/cryptocurrency-news/">
                              Cryptos
                            </a>
                          </li>
                          <li
                            id="menu-item-262197"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262197 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/market-news/commodities/">
                              Commodities
                            </a>
                          </li>
                          <li
                            id="menu-item-388168"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-388168 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/market-news/equities/">
                              Equities
                            </a>
                            <ul className="sub-menu">
                              <li
                                id="menu-item-301016"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-301016 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://nairametrics.com/category/market-news/equities/dividends/">
                                  Dividends
                                </a>
                              </li>
                              <li
                                id="menu-item-388170"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388170 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://nairametrics.com/category/market-news/equities/nigerian-stock-exchange-market/">
                                  Stock Market
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="menu-item-388169"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388169 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/market-news/fixed-income/">
                              Fixed Income
                            </a>
                          </li>
                          <li
                            id="menu-item-262202"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262202 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/market-news/market-views/">
                              Market Views
                            </a>
                          </li>
                          <li
                            id="menu-item-390463"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-390463 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/market-news/fixed-income/equities-moneymarket-bonds-funds/">
                              Securities
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-387828"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-387828 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/category/industries/">
                          Industries
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-387829"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387829 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/latest-nigerian-company-news/">
                              Company News
                            </a>
                          </li>
                          <li
                            id="menu-item-387830"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387830 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/nigeria-business-news/consumer-goods/">
                              Consumer Goods
                            </a>
                          </li>
                          <li
                            id="menu-item-387831"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387831 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/corporates/">
                              Corporate Updates
                            </a>
                          </li>
                          <li
                            id="menu-item-387832"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387832 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/nigeria-business-news/corporate-deals/">
                              Corporate deals
                            </a>
                          </li>
                          <li
                            id="menu-item-387833"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387833 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/corporate-official-press-releases-from-nigerian-companies/">
                              Corporate Press Releases
                            </a>
                          </li>
                          <li
                            id="menu-item-387834"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387834 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/energy/">
                              Energy
                            </a>
                          </li>
                          <li
                            id="menu-item-387835"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387835 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/wealth/entertainment/">
                              Entertainment
                            </a>
                          </li>
                          <li
                            id="menu-item-387836"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387836 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/financial-services/">
                              Financial Services
                            </a>
                          </li>
                          <li
                            id="menu-item-387837"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387837 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/hospitality-travel/">
                              Hospitality &amp; Travel
                            </a>
                          </li>
                          <li
                            id="menu-item-387838"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-387838 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/manufacturing/">
                              Manufacturing
                            </a>
                          </li>
                          <li
                            id="menu-item-390460"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-390460 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/real-estate-and-construction/">
                              Real Estate and Construction
                            </a>
                          </li>
                          <li
                            id="menu-item-390461"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-390461 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/industries/tech-news/">
                              Tech News
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-384841"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-384841 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/category/economy/">
                          Economy
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-238417"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-238417 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairalytics.com/">Nairalytics</a>
                          </li>
                          <li
                            id="menu-item-388134"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388134 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/economy/macro-economic/">
                              Macro-Economic News
                            </a>
                          </li>
                          <li
                            id="menu-item-390462"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-390462 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/economy/analysis-on-financial-and-macroeconomic-data-from-nigeria/">
                              Research Analysis
                            </a>
                          </li>
                          <li
                            id="menu-item-430471"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-430471 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/economy/budget/">
                              Budget
                            </a>
                          </li>
                          <li
                            id="menu-item-430472"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-430472 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/economy/public-debt/">
                              Public Debt
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-238387"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-238387 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/category/nigeria-business-news/">
                          Business News
                        </a>
                      </li>
                      <li
                        id="menu-item-238385"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-238385 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/category/financial-literacy-for-nigerians/">
                          Financial Literacy
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-262194"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262194 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/financial-literacy-for-nigerians/career-tips/">
                              Career tips
                            </a>
                          </li>
                          <li
                            id="menu-item-262195"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-262195 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/financial-literacy-for-nigerians/personal-finance/">
                              Personal Finance
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-388137"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-388137 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/category/wealth/">
                          Lifestyle
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-388136"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388136 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/people/billionaire-watch/">
                              Billionaire Watch
                            </a>
                          </li>
                          <li
                            id="menu-item-388138"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-388138 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/people/profiles/">
                              Profiles
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-238401"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-238401 bgnav"
                        data-item-row="default"
                      >
                        <a href="https://nairametrics.com/category/opinion-editorials/">
                          Opinions
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-295855"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-295855 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/opinion-editorials/blurb/">
                              Blurb
                            </a>
                          </li>
                          <li
                            id="menu-item-301000"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-301000 bgnav"
                            data-item-row="default"
                          >
                            <a href="https://nairametrics.com/category/opinion-editorials/columnists/">
                              Op-Eds
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="jeg_nav_col jeg_nav_center jeg_nav_normal">
              <div className="item_wrap jeg_nav_aligncenter"></div>
            </div>
            <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
              <div className="item_wrap jeg_nav_alignright">
                {/* Search Icon */}
                <div className="jeg_nav_item jeg_search_wrapper search_icon jeg_search_popup_expand">
                  <a href="#" className="jeg_search_toggle">
                    <FaSearch className="fa fa-search" />
                  </a>
                  <form
                    action="https://nairametrics.com/"
                    method="get"
                    className="jeg_search_form"
                    target="_top"
                  >
                    <input
                      name="s"
                      className="jeg_search_input"
                      placeholder="Search..."
                      type="text"
                      defaultValue=""
                      autoComplete="off"
                    />
                    <button
                      aria-label="Search Button"
                      type="submit"
                      className="jeg_search_button btn"
                    >
                      <FaSearch className="fa fa-search" />
                    </button>
                  </form>
                  {/* jeg_search_hide with_result no_result */}
                  <div className="jeg_search_result jeg_search_hide with_result">
                    <div className="search-result-wrapper"></div>
                    <div className="search-link search-noresult">
                      No Result{" "}
                    </div>
                    <div className="search-link search-all-button">
                      <FaSearch className="fa fa-search" /> View All Result{" "}
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  </div>
</div>



<div className="jeg_navbar_mobile_wrapper">
  <div className="jeg_navbar_mobile" data-mode="scroll">
    <div className="jeg_mobile_bottombar jeg_mobile_midbar jeg_container dark">
      <div className="container">
        <div className="jeg_nav_row">
          <div className="jeg_nav_col jeg_nav_left jeg_nav_normal">
            <div className="item_wrap jeg_nav_alignleft">
              <div className="jeg_nav_item">
                <a href="#" className="toggle_btn jeg_mobile_toggle">
                  <FaBars className="fa fa-bars" />
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="jeg_nav_col jeg_nav_center jeg_nav_grow">
            <div className="item_wrap jeg_nav_aligncenter">
              <div className="jeg_nav_item jeg_mobile_logo">
                <div className="site-title">
                  <a href="https://nairametrics.com/">
                    <img
                      className="jeg_logo_img"
                      src="images/nairametrics-logo-2022.jpg"
                      srcSet="images/nairametrics-logo-2022.jpg 1x, images/nairametrics-logo-2022.jpg 2x"
                      alt="Nairametrics"
                      data-light-src="https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg"
                      data-light-srcset="https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg 1x, https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg 2x"
                      data-dark-src="https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg"
                      data-dark-srcset="https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg 1x, https://nairametrics.com/wp-content/uploads/2022/05/nairametrics-logo-2022.jpg 2x"
                    />{" "}
                  </a>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
            <div className="item_wrap jeg_nav_alignright">
              <div className="jeg_nav_item jeg_search_wrapper jeg_search_popup_expand">
                <a href="#" className="jeg_search_toggle">
                  <FaSearch className="fa fa-search" />
                </a>
                <form
                  action="https://nairametrics.com/"
                  method="get"
                  className="jeg_search_form"
                  target="_top"
                >
                  <input
                    name="s"
                    className="jeg_search_input"
                    placeholder="Search..."
                    type="text"
                    defaultValue=""
                    autoComplete="off"
                  />
                  <button
                    aria-label="Search Button"
                    type="submit"
                    className="jeg_search_button btn"
                  >
                    <FaSearch className="fa fa-search" />
                  </button>
                </form>
                {/* jeg_search_hide with_result no_result */}
                <div className="jeg_search_result jeg_search_hide with_result">
                  <div className="search-result-wrapper"></div>
                  <div className="search-link search-noresult">No Result </div>
                  <div className="search-link search-all-button">
                    <FaSearch className="fa fa-search" /> View All Result{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sticky_blankspace" style={{ height: 60 }}></div>
</div>



<div className="jeg_ad jeg_ad_top jnews_header_bottom_ads">
  <div className="ads-wrapper  " />
</div>



  </div>
</div>
    </div>
  )
}

export default Navbar
