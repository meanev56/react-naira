import React, { useEffect, useState } from 'react'
import makeAPICall from '../../helpers/apiUtils'
import LatestStory from '../latestStory/LatestStory'
import Market from '../market/Market'
import { FaAngleLeft, FaAngleRight, FaClock } from 'react-icons/fa'
import he from 'he'
import moment from 'moment/moment'

const Main = () => {
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
    <div className="home page-template page-template-template-builder page-template-template-builder-php page page-id-431441 wp-embed-responsive jeg_toggle_light jnews jsc_normal wpb-js-composer js-comp-ver-6.13.0 vc_responsive">
  {/* The Main Wrapper
    ============================================= */}
  <div className="jeg_viewport">
    <div className="jeg_header_wrapper">
      {/* HEADER */}
      <div className="jeg_main">
        <div className="jeg_container">
          <div className="jeg_content">
            <div className="jeg_vc_content">
              <section className="wpb-content-wrapper">
                <div className="row vc_row wpb_row vc_row-fluid">
                  <div className="jeg-vc-wrapper">
                    <div className="wpb_column jeg_column vc_column_container vc_col-sm-8 jeg_main_content">
                      <div className="jeg_wrapper wpb_wrapper">
                        <div className="jeg_slider_wrapper jeg_slider_type_7_wrapper jnews_module_431441_0_6503363e94a1a  ">
                          <div
                            className="jeg_slider_type_7 jeg_slider jeg_col_2o3 featured-right"
                            data-autoplay=""
                            data-delay={3000}
                            data-nav-prev="prev"
                            data-nav-next="next"
                          >
                            <div className="jeg_slide_item clearfix format-standard">


                                <div
                                    className="jeg_slide_image"
                                    style={{ backgroundImage: `url(${naijaNews[0]?.jetpack_featured_media_url})` }}
                                    alt={naijaNews[0]?.title?.rendered}
                                >
                                    <a href={naijaNews[0]?.link}></a>
                                </div>
                                <div className="jeg_slide_caption">
                                    <div className="jeg_caption_container">
                                    <div className="jeg_post_category">
                                        <a
                                        href="https://nairametrics.com/category/breaking-news/"
                                        className="category-breaking-news"
                                        >
                                        Breaking News
                                        </a>
                                    </div>
                                    <h2 className="jeg_post_title">
                                      <a href={naijaNews[0]?.link}>
                                        {he.decode(naijaNews[0]?.title?.rendered || "")}
                                        </a>
                                    </h2>
                                    <div className="jeg_post_excerpt">
                                        <p>
                                        {removePTag(
                                          he.decode(naijaNews[0]?.excerpt?.rendered || "")
                                           )}
                                        </p>
                                    </div>
                                    <a
                                        href={naijaNews[0]?.link}
                                        className="jeg_readmore"
                                    >
                                        Read more
                                    </a>
                                    </div>
                                    <div className="jeg_block_nav ">
                                    <a href="#" className="prev">
                                        <FaAngleLeft className="fa fa-angle-left" />
                                        prev
                                    </a>
                                    <a href="#" className="next">
                                        next
                                        <FaAngleRight className="fa fa-angle-right" />
                                    </a>
                                    </div>
                                </div>
                                </div>



                                <div className="jeg_slide_item clearfix format-standard">
                                  <div
                                    className="jeg_slide_image"
                                    style={{
                                      backgroundImage: `url(${naijaNews[1]?.jetpack_featured_media_url})`
                                    }}
                                  >
                                    <a href={naijaNews[1]?.link} />
                                  </div>
                                  <div className="jeg_slide_caption">
                                    <div className="jeg_caption_container">
                                      <div className="jeg_post_category">
                                        <a
                                          href="https://nairametrics.com/category/exclusives/"
                                          className="category-exclusives"
                                        >
                                          Exclusives
                                        </a>
                                      </div>
                                      <h2 className="jeg_post_title">
                                        <a href={naijaNews[1]?.link}>
                                        {he.decode(naijaNews[1]?.title?.rendered || "")}
                                        </a>
                                      </h2>
                                      <div className="jeg_post_excerpt">
                                        <p>
                                        {removePTag(
                                           he.decode(naijaNews[1]?.excerpt?.rendered || "")
                                          )}
                                        </p>
                                      </div>
                                      <a
                                        href={naijaNews[1]?.link}
                                        className="jeg_readmore"
                                      >
                                        Read more
                                      </a>
                                    </div>
                                    <div className="jeg_block_nav ">
                                      <a href="#" className="prev">
                                        <FaAngleLeft className="fa fa-angle-left" />
                                        prev
                                      </a>
                                      <a href="#" className="next">
                                        next
                                        <FaAngleRight className="fa fa-angle-right" />
                                      </a>
                                    </div>
                                  </div>
                                </div>



                                <div className="jeg_slide_item clearfix format-standard">
                                  <div
                                  className="jeg_slide_image"
                                  style={{
                                    backgroundImage:
                                    `url(${naijaNews[2]?.jetpack_featured_media_url})`
                                  }}
                                >
                                  <a href={naijaNews[2]?.link} />
                                </div>
                                <div className="jeg_slide_caption">
                                  <div className="jeg_caption_container">
                                    <div className="jeg_post_category">
                                      <a
                                        href="https://nairametrics.com/category/market-news/equities/"
                                        className="category-equities"
                                      >
                                        Equities
                                      </a>
                                    </div>
                                    <h2 className="jeg_post_title">
                                      <a href={naijaNews[2]?.link}>
                                      {he.decode(naijaNews[2]?.title?.rendered || "")}
                                      </a>
                                    </h2>
                                    <div className="jeg_post_excerpt">
                                      <p>
                                      {removePTag(
                                        he.decode(naijaNews[2]?.excerpt?.rendered || "")
                                      )}
                                      </p>
                                    </div>
                                    <a
                                      href={naijaNews[2]?.link}
                                      className="jeg_readmore"
                                    >
                                      Read more
                                    </a>
                                  </div>
                                  <div className="jeg_block_nav ">
                                    <a href="#" className="prev">
                                      <FaAngleLeft className="fa fa-angle-left" />
                                      prev
                                    </a>
                                    <a href="#" className="next">
                                      next
                                      <FaAngleRight className="fa fa-angle-right" />
                                    </a>
                                  </div>
                                </div>
                              </div>                          



                            </div>
                        </div>



                        <div
                          className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_2o3 jnews_module_431441_1_6503363ea359a   "
                          data-unique="jnews_module_431441_1_6503363ea359a"
                        >
                          <div className="jeg_block_container">
                            <div className="jeg_postsmall jeg_load_more_flag">
                              <article className="jeg_post jeg_pl_sm format-standard">
                                <div className="jeg_thumb">
                                  <a href={naijaNews[4]?.link}>
                                    <div className=" animate-lazy  size-715 ">
                                      <img
                                        width={120}
                                        height={86}
                                        src={naijaNews[4]?.jetpack_featured_media_url}
                                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                                        alt=""
                                        decoding="async"
                                        sizes="(max-width: 120px) 100vw, 120px"
                                      
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="jeg_postblock_content">
                                  <h3 className="jeg_post_title">
                                    <a href={naijaNews[4]?.link}>
                                    {he.decode(naijaNews[4]?.title?.rendered || "")}
                                    </a>
                                  </h3>
                                  <div className="jeg_post_meta">
                                    <div className="jeg_meta_date">
                                      <a href={naijaNews[4]?.link}>
                                        <FaClock className="fa fa-clock-o" /> 
                                        {moment(naijaNews[4]?.modified).format("MMMM Do, YYYY")}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article className="jeg_post jeg_pl_sm format-standard">
                                <div className="jeg_thumb">
                                  <a href={naijaNews[5]?.link}>
                                    <div className=" animate-lazy  size-715 ">
                                      <img
                                        width={120}
                                        height={86}
                                        src={naijaNews[5]?.jetpack_featured_media_url}
                                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                                        alt="Announcement of VFD Group’s Majority Shareholder Unbundling"
                                        decoding="async"
                                        sizes="(max-width: 120px) 100vw, 120px"
                                        data-src="https://nairametrics.com/wp-content/uploads/2023/05/stock-Market-0-scaled-e1685539664250-120x86.jpg"
                                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/05/stock-Market-0-scaled-e1685539664250-120x86.jpg 120w, https://nairametrics.com/wp-content/uploads/2023/05/stock-Market-0-scaled-e1685539664250-350x250.jpg 350w"
                                        data-sizes="auto"
                                        data-expand={700}
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="jeg_postblock_content">
                                  <h3 className="jeg_post_title">
                                    <a href={naijaNews[5]?.link}>
                                    {he.decode(naijaNews[5]?.title?.rendered || "")}
                                    </a>
                                  </h3>
                                  <div className="jeg_post_meta">
                                    <div className="jeg_meta_date">
                                      <a href={naijaNews[5]?.link}>
                                        <FaClock className="fa fa-clock-o" /> 
                                        {moment(naijaNews[5]?.modified).format("MMMM Do, YYYY")}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="module-overlay">
                              <div className="preloader_type preloader_dot">
                                <div className="module-preloader jeg_preloader dot">
                                  <span />
                                  <span />
                                  <span />
                                </div>
                                <div className="module-preloader jeg_preloader circle">
                                  <div className="jnews_preloader_circle_outer">
                                    <div className="jnews_preloader_circle_inner" />
                                  </div>
                                </div>
                                <div className="module-preloader jeg_preloader square">
                                  <div className="jeg_square">
                                    <div className="jeg_square_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jeg_block_navigation">
                            <div className="navigation_overlay">
                              <div className="module-preloader jeg_preloader">
                                <span />
                                <span />
                                <span />
                              </div>
                            </div>
                          </div>
                        </div>

                        <LatestStory />

                        <div className="vc_wp_text wpb_content_element">
                          <div className="widget widget_text">
                            <div className="textwidget">
                              <p>
                                {/*</p>
                        <div align="center"><a href="https://yellowcard.io/send-money/?utm_source=nairametrics&utm_medium=bannerads&utm_campaign=yellowpaysep22" target="_blank" rel="noopener noreferrer"><img decoding="async" src="https://nairametrics.com/wp-content/uploads/2022/09/YPP-728-x-90.png" alt="Yellow Card" /></a></div>


                        <p>*/}
                              </p>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>



                    <Market />


                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Main
