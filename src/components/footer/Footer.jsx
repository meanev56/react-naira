import React, { useEffect, useState } from 'react'
import { FaAngleUp, FaClock, FaFacebook, FaInstagram, FaRss, FaTwitter, FaYoutube } from 'react-icons/fa'
import makeAPICall from '../../helpers/apiUtils'
import he from 'he'
import moment from 'moment'

const Footer = () => {
  const [naijaNews, setNaijaNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNaijaNews = () => {
    setLoading(true);
    return makeAPICall({
      path: "https://nairametrics.com/wp-json/wp/v2/posts", 
      method: "GET",
    })
      .then((res) => {
        setNaijaNews(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  };

  const fetchAllAfricaNews = () => {
    setLoading(true);
    return makeAPICall({
      path: "https://nairametrics.com/wp-json/wp/v2/posts",
      method: "GET",
    })
      .then((res) => {
        setAllNews(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  };

  useEffect(() => {
    fetchNaijaNews();
    fetchAllAfricaNews();
  }, []);

  // Function to remove the <p> tag from the HTML string
  const removePTag = (htmlString) => {
    if (typeof document === "undefined") {
      return null; // or handle the absence of localStorage according to your requirements
    }
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.textContent;
  };




  return (
    <div>
        <div className="home page-template page-template-template-builder page-template-template-builder-php page page-id-431441 wp-embed-responsive jeg_toggle_light jnews jsc_normal wpb-js-composer js-comp-ver-6.13.0 vc_responsive">
  <div className="jeg_viewport">
    <div className="jeg_header_wrapper">
      <div className="jeg_main">
        <div className="jeg_container">
      
      
        <div className="jeg_ad jnews_above_footer_ads ">
            <div className="ads-wrapper  " />
        </div>


      </div>
      </div>





      <div className="footer-holder" id="footer" data-id="footer">
  <div className="jeg_footer jeg_footer_2 dark">
    <div className="jeg_footer_container jeg_container">
      <div className="jeg_footer_content">
        <div className="container">
          <div className="row">
            <div className="jeg_footer_primary clearfix">
              <div className="col-lg-4 col-md-3 footer_column">
                <div
                  className="footer_widget widget_jnews_about"
                  id="jnews_about-1"
                >
                  {" "}
                  <div className="jeg_about ">
                    <p>
                      Business News | Stock Market | Money Market | Cryptos |
                      Financial Literacy | SME |
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="col-md-3 footer_column">
                <div
                  className="footer_widget widget_recent_entries"
                  id="recent-posts-3"
                >
                  <div className="jeg_footer_heading jeg_footer_heading_1">
                    <h3 className="jeg_footer_title">
                      <span>Recent News</span>
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/">
                        NCC alerts Nigerians on increase in electronic fraud on
                        telecom platforms
                      </a>
                    </li>
                    <li>
                      <a href="https://nairametrics.com/2023/09/14/fg-certifies-lagos-blue-rail-as-safe/">
                        FG certifies Lagos Blue Rail as safe
                      </a>
                    </li>
                    <li>
                      <a href="https://nairametrics.com/2023/09/14/breaking-zacch-adedeji-appointed-as-new-acting-chairman-of-firs/">
                        Breaking: Zacch Adedeji appointed as New Acting Chairman
                        of FIRS
                      </a>
                    </li>
                  </ul>
                </div>{" "}
              </div>
              <div className="col-lg-2 col-md-3 footer_column">
                <div
                  className="footer_widget widget_jnews_social"
                  id="jnews_social-1"
                >
                  <div className="jeg_social_wrap ">
                    <p>Follow us on social media: </p>
                    <div className="socials_widget   nobg">
                      <a
                        href="https://www.facebook.com/nairametrics/"
                        target="_blank"
                        rel="external noopener nofollow"
                        className="jeg_facebook"
                      >
                        <FaFacebook className="fa fa-facebook" />
                      </a>
                      <a
                        href="https://twitter.com/nairametrics"
                        target="_blank"
                        rel="external noopener nofollow"
                        className="jeg_twitter"
                      >
                        <FaTwitter className="fa fa-twitter" />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="external noopener nofollow"
                        className="jeg_instagram"
                      >
                        <FaInstagram className="fa fa-instagram" />
                      </a>
                      <a
                        href="https://www.instagram.com/nairametrics/"
                        target="_blank"
                        rel="external noopener nofollow"
                        className="jeg_youtube"
                      >
                        <FaYoutube className="fa fa-youtube-play" />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC1GBKv15keKOgHbEBEMeo9w/videos"
                        target="_blank"
                        rel="external noopener nofollow"
                        className="jeg_rss"
                      >
                        <FaRss className="fa fa-rss" />
                      </a>{" "}
                    </div>
                    <style
                      scoped=""
                      dangerouslySetInnerHTML={{
                        __html:
                          "#jnews_social-1 .jeg_social_wrap .socials_widget i{color:#0c2461;}"
                      }}
                    />{" "}
                  </div>
                </div>{" "}
              </div>
              <div className="col-md-3 footer_column">
                <div
                  className="footer_widget widget_jnews_recent_news"
                  id="jnews_recent_news-1"
                >
                  <div className="jeg_footer_heading jeg_footer_heading_1">
                    <h3 className="jeg_footer_title">
                      <span>Recent News</span>
                    </h3>
                  </div>{" "}
                  <div className="jeg_postblock">
                    <div className="jeg_post jeg_pl_sm post-465191 post type-post status-publish format-standard has-post-thumbnail hentry category-business-news category-nigeria-business-news tag-mr-alkasim-uma tag-ncc">
                      <div className="jeg_thumb">
                        <a href={naijaNews[0]?.link}>
                          <div className=" animate-lazy  size-715 ">
                            <img
                              width={120}
                              height={86}
                              src={naijaNews[0]?.jetpack_featured_media_url}
                              className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                              alt="NCC"
                              decoding="async"
                              sizes="(max-width: 120px) 100vw, 120px"
                              data-src="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-120x86.png"
                              data-srcset="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-120x86.png 120w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png 350w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-750x536.png 750w"
                              data-sizes="auto"
                              data-expand={700}
                            />
                          </div>{" "}
                        </a>
                      </div>
                      <div className="jeg_postblock_content">
                        <h3 property="headline" className="jeg_post_title">
                          <a
                            property="url"
                            href={naijaNews[0]?.link}
                          >
                             {he.decode(naijaNews[0]?.title?.rendered || "")}
                          </a>
                        </h3>
                        <div className="jeg_post_meta">
                          <div
                            property="datePublished"
                            className="jeg_meta_date"
                          >
                            <FaClock className="fa fa-clock-o" /> 
                            {moment(allNews[0]?.modified).format("MMMM Do, YYYY")}

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="jeg_post jeg_pl_sm post-465165 post type-post status-publish format-standard has-post-thumbnail hentry category-nigeria-business-news tag-lamata tag-lrmt">
                      <div className="jeg_thumb">
                        <a href={naijaNews[1]?.link}>
                          <div className=" animate-lazy  size-715 ">
                            <img
                              width={120}
                              height={86}
                              src={naijaNews[1]?.jetpack_featured_media_url}
                              className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                              alt="Gov Sanwo-Olu takes inaugural ride to flag off commencement of Blue Rail Mass Transi"
                              decoding="async"
                              sizes="(max-width: 120px) 100vw, 120px"
                              data-src="https://nairametrics.com/wp-content/uploads/2023/09/Lagos-Blue-line-1-120x86.png"
                              data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/Lagos-Blue-line-1-120x86.png 120w, https://nairametrics.com/wp-content/uploads/2023/09/Lagos-Blue-line-1-350x250.png 350w, https://nairametrics.com/wp-content/uploads/2023/09/Lagos-Blue-line-1-750x536.png 750w, https://nairametrics.com/wp-content/uploads/2023/09/Lagos-Blue-line-1-1140x815.png 1140w"
                              data-sizes="auto"
                              data-expand={700}
                            />
                          </div>{" "}
                        </a>
                      </div>
                      <div className="jeg_postblock_content">
                        <h3 property="headline" className="jeg_post_title">
                          <a
                            property="url"
                            href={naijaNews[1]?.link}
                          >
                            {he.decode(naijaNews[1]?.title?.rendered || "")}
                          </a>
                        </h3>
                        <div className="jeg_post_meta">
                          <div
                            property="datePublished"
                            className="jeg_meta_date"
                          >
                            <FaClock className="fa fa-clock-o" /> 
                            {moment(allNews[1]?.modified).format("MMMM Do, YYYY")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="jeg_footer_secondary clearfix">
            {/* secondary footer right */}
            <div className="footer_right">
              <ul className="jeg_menu_footer">
                <li
                  id="menu-item-313523"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-313523"
                >
                  <a href="https://apps.apple.com/us/app/nairametrics/id1492484159">
                    Download Nairametrics iOS App
                  </a>
                </li>
                <li
                  id="menu-item-443364"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-443364"
                >
                  <a href="https://play.google.com/store/apps/details?id=com.nairametrics.app&hl=en_US">
                    Download Nairametrics Android App
                  </a>
                </li>
                <li
                  id="menu-item-464071"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-464071"
                >
                  <a href="https://nairametrics.com/contact-us/">Contact Us</a>
                </li>
                <li
                  id="menu-item-313521"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-313521"
                >
                  <a href="https://nairametrics.com/" aria-current="page">
                    Home
                  </a>
                </li>
                <li
                  id="menu-item-443357"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-443357"
                >
                  <a href="https://nairametrics.com/category/exclusives/">
                    Exclusives
                  </a>
                </li>
                <li
                  id="menu-item-443360"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-443360"
                >
                  <a href="https://nairametrics.com/category/market-news/">
                    Markets
                  </a>
                </li>
                <li
                  id="menu-item-443361"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-443361"
                >
                  <a href="https://nairametrics.com/category/industries/">
                    Industries
                  </a>
                </li>
                <li
                  id="menu-item-443365"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-443365"
                >
                  <a href="https://nairametrics.com/category/economy/">
                    Economy
                  </a>
                </li>
                <li
                  id="menu-item-443366"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-443366"
                >
                  <a href="https://nairametrics.com/category/nigeria-business-news/">
                    Business News
                  </a>
                </li>
                <li
                  id="menu-item-443367"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-443367"
                >
                  <a href="https://nairametrics.com/category/financial-literacy-for-nigerians/">
                    Financial Literacy
                  </a>
                </li>
                <li
                  id="menu-item-443368"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-443368"
                >
                  <a href="https://nairametrics.com/category/opinion-editorials/">
                    Opinions
                  </a>
                </li>
              </ul>
            </div>
            {/* secondary footer left */}
            <p className="copyright">
              {" "}
              © 2023{" "}
              <a href="https://nairametrics.com" title="Nairametrics">
                Nairametrics
              </a>{" "}
            </p>
          </div>{" "}
          {/* secondary menu */}
        </div>
      </div>
    </div>
  </div>
  {/* /.footer */}
</div>


<div className="jscroll-to-top">
  <a href="#back-to-top" className="jscroll-to-top_link">
    <FaAngleUp className="fa fa-angle-up" />
  </a>
</div>


   
   
   
   
   
   
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
