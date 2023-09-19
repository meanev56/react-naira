import React, { useEffect, useState } from 'react'
import makeAPICall from '../../helpers/apiUtils';
import he from 'he'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; 

const Market = () => {
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
      <div className="wpb_column jeg_column vc_column_container vc_col-sm-4 jeg_sticky_sidebar jeg_main_content">
  <div className="jegStickyHolder">
    <div className="theiaStickySidebar">
      <div className="jeg_wrapper wpb_wrapper">
        <div className="wpb_text_column wpb_content_element ">
          <div className="wpb_wrapper">
            <p>{/*Incontent_300x250 */}</p>
            <div className="gptslot" data-adunitid={3} />
          </div>
        </div>
        <div
          className="jeg_postblock_28 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_3_6503363eccd5d vc_custom_1693945458915 jeg_pb_boxed jeg_pb_boxed_shadow  "
          data-unique="jnews_module_431441_3_6503363eccd5d"
        >
          <div className="jeg_block_heading jeg_block_heading_3 jeg_subcat_right">
            <h3 className="jeg_block_title">
              <span>MARKETS</span>
            </h3>
          </div>
          <div className="jeg_block_container">
            <div className="jeg_posts show_border">
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                      <a href={naijaNews[0]?.link}>
                      {he.decode(naijaNews[0]?.title?.rendered || "")}

                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[1]?.link}>
                      {he.decode(naijaNews[1]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[2]?.link}>
                      {he.decode(naijaNews[2]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[3]?.link}>
                      {he.decode(naijaNews[3]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[4]?.link}>
                      {he.decode(naijaNews[4]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[5]?.link}>
                      {he.decode(naijaNews[5]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[6]?.link}>
                      {he.decode(naijaNews[6]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[7]?.link}>
                      {he.decode(naijaNews[7]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[8]?.link}>
                      {he.decode(naijaNews[8]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs_4 format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={naijaNews[9]?.link}>
                      {he.decode(naijaNews[9]?.title?.rendered || "")}
                      </a>
                    </h3>
                  </div>
                </article>
              </div>
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
            <div className="jeg_block_nav  showtext">
              <a href="https://nairametrics.com/" className="prev disabled" title="Previous">
                <FaAngleLeft className="fa fa-angle-left" /> Prev
              </a>
              <a href="https://nairametrics.com/" className="next " title="Next">
                Next <FaAngleRight className="fa fa-angle-right" />
              </a>
            </div>
          </div>
          <style
            scoped=""
            dangerouslySetInnerHTML={{
              __html:
                ".jnews_module_431441_3_6503363eccd5d .jeg_block_heading_3 { background: #dd3333; }.jnews_module_431441_3_6503363eccd5d .jeg_block_heading_3 .jeg_block_title span, .jnews_module_431441_3_6503363eccd5d .jeg_block_heading_3 .jeg_block_title i { color: #ffffff; }.jnews_module_431441_3_6503363eccd5d .jeg_post_title a, .jnews_module_431441_3_6503363eccd5d.jeg_postblock .jeg_subcat_list > li > a, .jnews_module_431441_3_6503363eccd5d .jeg_pl_md_card .jeg_post_category a:hover { color: #000000 }.jnews_module_431441_3_6503363eccd5d .jeg_meta_author a, .jnews_module_431441_3_6503363eccd5d .jeg_post_title a:hover { color: #000000 }.jnews_module_431441_3_6503363eccd5d .jeg_readmore:hover { background-color: #000000; }.jnews_module_431441_3_6503363eccd5d .jeg_readmore:hover { border-color: #000000; }.jnews_module_431441_3_6503363eccd5d .jeg_post_meta, .jnews_module_431441_3_6503363eccd5d .jeg_post_meta .fa, .jnews_module_431441_3_6503363eccd5d.jeg_postblock .jeg_subcat_list > li > a:hover, .jnews_module_431441_3_6503363eccd5d .jeg_pl_md_card .jeg_post_category a, .jnews_module_431441_3_6503363eccd5d.jeg_postblock .jeg_subcat_list > li > a.current { color: #ffffff }.jnews_module_431441_3_6503363eccd5d .jeg_post_excerpt { color: #ffffff }"
            }}
          />
        </div>
        <div className="wpb_text_column wpb_content_element ">
          <div className="wpb_wrapper">
            <p>{/* /21634543682/double-banner-4 */}</p>
          </div>
        </div>
        <div className="wpb_text_column wpb_content_element ">
          <div className="wpb_wrapper"></div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Market
