import React, { useEffect, useState } from 'react'
import makeAPICall from '../../helpers/apiUtils';
import he from 'he'
import { FaAngleLeft, FaAngleRight, FaClock } from 'react-icons/fa';
import moment from 'moment/moment';
import VideoFile from '../video/VideoFile';

const General = () => {
    const [naijaNews, setNaijaNews] = useState([]);
    const [allNews, setAllNews] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchNaijaNews = () => {
      setLoading(true);
      return makeAPICall({
        path: "https://nairametrics.com/wp-json/wp/v2/posts?tags=204", 
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
          
          <div className="jeg_content">
            <div className="jeg_vc_content">
              <section className="wpb-content-wrapper">
                <div className="row vc_row wpb_row vc_row-fluid">
                  <div className="jeg-vc-wrapper">


                  <div className="row vc_row wpb_row vc_row-fluid">
  <div className="jeg-vc-wrapper">
    <div className="wpb_column jeg_column vc_column_container vc_col-sm-6 vc_col-md-3 jeg_main_content">
      <div className="jeg_wrapper wpb_wrapper">
        <div
          className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_4_6503363edd882  jeg_pb_boxed jeg_pb_boxed_shadow  "
          data-unique="jnews_module_431441_4_6503363edd882"
        >
          <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
            <h3 className="jeg_block_title">
              <span>EXCLUSIVES</span>
            </h3>
          </div>
          <div className="jeg_block_container">
            <div className="jeg_posts">
              <article className="jeg_post jeg_pl_sm format-standard">
                <div className="jeg_thumb">
                  <a href={allNews[0]?.link}>
                    <div className=" animate-lazy  size-715 ">
                      <img
                        width={120}
                        height={86}
                        src={allNews[0]?.jetpack_featured_media_url}
                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                        alt={allNews[0]?.title?.rendered}
                        decoding="async"
                        sizes="(max-width: 120px) 100vw, 120px"
                        data-src="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp"
                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp 120w, https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-350x250.webp 350w"
                        data-sizes="auto"
                        data-expand={700}
                      />
                    </div>
                  </a>
                </div>
                <div className="jeg_postblock_content">
                  <h3 className="jeg_post_title">
                    <a href={allNews[0]?.link}>
                    {he.decode(allNews[0]?.title?.rendered || "")}
                    </a>
                  </h3>
                  <div className="jeg_post_meta">
                    <div className="jeg_meta_date">
                      <a href={allNews[0]?.link}>
                        <FaClock className="fa fa-clock-o" /> 
                        {moment(allNews[0]?.modified).format("MMMM Do, YYYY")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[1]?.link}>
                    {he.decode(allNews[1]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[1]?.link}>
                          <FaClock className="fa fa-clock-o" />
                          {moment(allNews[1]?.modified).format("MMMM Do, YYYY")}

                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[2]?.link}>
                    {he.decode(allNews[2]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[2]?.link}>
                          <FaClock className="fa fa-clock-o" /> 
                          {moment(allNews[1]?.modified).format("MMMM Do, YYYY")}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="jeg_post jeg_pl_xs format-standard">
  <div className="jeg_postblock_content">
    <h3 className="jeg_post_title">
    <a href={allNews[3]?.link}>        
    {he.decode(allNews[2]?.title?.rendered || "")}
      </a>
    </h3>
    <div className="jeg_post_meta">
      <div className="jeg_meta_date">
      <a href={allNews[3]?.link}>
          <FaClock className="fa fa-clock-o" /> 
          {moment(allNews[1]?.modified).format("MMMM Do, YYYY")}

        </a>
      </div>
    </div>
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
        ".jnews_module_431441_4_6503363edd882 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }"
    }}
  />



        </div>
      </div>
    </div>




    <div className="wpb_column jeg_column vc_column_container vc_col-sm-6 vc_col-md-3 jeg_main_content">
  <div className="jeg_wrapper wpb_wrapper">
    <div
      className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_5_6503363ee2e69  jeg_pb_boxed jeg_pb_boxed_shadow  "
      data-unique="jnews_module_431441_5_6503363ee2e69"
    >
      <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
        <h3 className="jeg_block_title">
          <span>BREAKING NEWS</span>
        </h3>
      </div>
     
      <div className="jeg_block_container">
            <div className="jeg_posts">
              <article className="jeg_post jeg_pl_sm format-standard">
                <div className="jeg_thumb">
                  <a href={allNews[4]?.link}>
                    <div className=" animate-lazy  size-715 ">
                      <img
                        width={120}
                        height={86}
                        src={allNews[4]?.jetpack_featured_media_url}
                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                        alt={allNews[4]?.title?.rendered}
                        decoding="async"
                        sizes="(max-width: 120px) 100vw, 120px"
                        data-src="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp"
                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp 120w, https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-350x250.webp 350w"
                        data-sizes="auto"
                        data-expand={700}
                      />
                    </div>
                  </a>
                </div>
                <div className="jeg_postblock_content">
                  <h3 className="jeg_post_title">
                    <a href={allNews[4]?.link}>
                    {he.decode(allNews[4]?.title?.rendered || "")}
                    </a>
                  </h3>
                  <div className="jeg_post_meta">
                    <div className="jeg_meta_date">
                      <a href={allNews[4]?.link}>
                        <FaClock className="fa fa-clock-o" /> 
                        {moment(allNews[4]?.modified).format("MMMM Do, YYYY")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[5]?.link}>
                    {he.decode(allNews[5]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[5]?.link}>
                          <FaClock className="fa fa-clock-o" />
                          {moment(allNews[5]?.modified).format("MMMM Do, YYYY")}

                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[6]?.link}>
                    {he.decode(allNews[6]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[6]?.link}>
                          <FaClock className="fa fa-clock-o" /> 
                          {moment(allNews[6]?.modified).format("MMMM Do, YYYY")}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="jeg_post jeg_pl_xs format-standard">
  <div className="jeg_postblock_content">
    <h3 className="jeg_post_title">
    <a href={allNews[7]?.link}>        
    {he.decode(allNews[7]?.title?.rendered || "")}
      </a>
    </h3>
    <div className="jeg_post_meta">
      <div className="jeg_meta_date">
      <a href={allNews[7]?.link}>
          <FaClock className="fa fa-clock-o" /> 
          {moment(allNews[7]?.modified).format("MMMM Do, YYYY")}

        </a>
      </div>
    </div>
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
        ".jnews_module_431441_4_6503363edd882 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }"
    }}
  />

    </div>
  </div>
</div>




<div className="wpb_column jeg_column vc_column_container vc_col-sm-6 vc_col-md-3 jeg_main_content">
  <div className="jeg_wrapper wpb_wrapper">
    <div
      className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_6_6503363ee68d1  jeg_pb_boxed jeg_pb_boxed_shadow  "
      data-unique="jnews_module_431441_6_6503363ee68d1"
    >
      <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
        <h3 className="jeg_block_title">
          <span>MARKETS</span>
        </h3>
      </div>



      <div className="jeg_block_container">
            <div className="jeg_posts">
              <article className="jeg_post jeg_pl_sm format-standard">
                <div className="jeg_thumb">
                  <a href={allNews[8]?.link}>
                    <div className=" animate-lazy  size-715 ">
                      <img
                        width={120}
                        height={86}
                        src={allNews[8]?.jetpack_featured_media_url}
                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                        alt={allNews[8]?.title?.rendered}
                        decoding="async"
                        sizes="(max-width: 120px) 100vw, 120px"
                        data-src="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp"
                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp 120w, https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-350x250.webp 350w"
                        data-sizes="auto"
                        data-expand={700}
                      />
                    </div>
                  </a>
                </div>
                <div className="jeg_postblock_content">
                  <h3 className="jeg_post_title">
                    <a href={allNews[8]?.link}>
                    {he.decode(allNews[8]?.title?.rendered || "")}
                    </a>
                  </h3>
                  <div className="jeg_post_meta">
                    <div className="jeg_meta_date">
                      <a href={allNews[8]?.link}>
                        <FaClock className="fa fa-clock-o" /> 
                        {moment(allNews[8]?.modified).format("MMMM Do, YYYY")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[9]?.link}>
                    {he.decode(allNews[9]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[9]?.link}>
                          <FaClock className="fa fa-clock-o" />
                          {moment(allNews[9]?.modified).format("MMMM Do, YYYY")}

                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[1]?.link}>
                    {he.decode(allNews[1]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[1]?.link}>
                          <FaClock className="fa fa-clock-o" /> 
                          {moment(allNews[1]?.modified).format("MMMM Do, YYYY")}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="jeg_post jeg_pl_xs format-standard">
  <div className="jeg_postblock_content">
    <h3 className="jeg_post_title">
    <a href={allNews[2]?.link}>        
    {he.decode(allNews[2]?.title?.rendered || "")}
      </a>
    </h3>
    <div className="jeg_post_meta">
      <div className="jeg_meta_date">
      <a href={allNews[2]?.link}>
          <FaClock className="fa fa-clock-o" /> 
          {moment(allNews[2]?.modified).format("MMMM Do, YYYY")}

        </a>
      </div>
    </div>
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
        ".jnews_module_431441_4_6503363edd882 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }"
    }}
  />
    </div>
  </div>
</div>



<div className="wpb_column jeg_column vc_column_container vc_col-sm-6 vc_col-md-3 jeg_main_content">
  <div className="jeg_wrapper wpb_wrapper">
    <div
      className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_7_6503363f0628b  jeg_pb_boxed jeg_pb_boxed_shadow  "
      data-unique="jnews_module_431441_7_6503363f0628b"
    >
      <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
        <h3 className="jeg_block_title">
          <a href="https://nairametrics.com/tag/featured/">
            <span>ECONOMY</span>
          </a>
        </h3>
      </div>


      <div className="jeg_block_container">
            <div className="jeg_posts">
              <article className="jeg_post jeg_pl_sm format-standard">
                <div className="jeg_thumb">
                  <a href={allNews[3]?.link}>
                    <div className=" animate-lazy  size-715 ">
                      <img
                        width={120}
                        height={86}
                        src={allNews[3]?.jetpack_featured_media_url}
                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                        alt={allNews[3]?.title?.rendered}
                        decoding="async"
                        sizes="(max-width: 120px) 100vw, 120px"
                        data-src="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp"
                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp 120w, https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-350x250.webp 350w"
                        data-sizes="auto"
                        data-expand={700}
                      />
                    </div>
                  </a>
                </div>
                <div className="jeg_postblock_content">
                  <h3 className="jeg_post_title">
                    <a href={allNews[3]?.link}>
                    {he.decode(allNews[3]?.title?.rendered || "")}
                    </a>
                  </h3>
                  <div className="jeg_post_meta">
                    <div className="jeg_meta_date">
                      <a href={allNews[3]?.link}>
                        <FaClock className="fa fa-clock-o" /> 
                        {moment(allNews[3]?.modified).format("MMMM Do, YYYY")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[3]?.link}>
                    {he.decode(allNews[3]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[3]?.link}>
                          <FaClock className="fa fa-clock-o" />
                          {moment(allNews[3]?.modified).format("MMMM Do, YYYY")}

                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[4]?.link}>
                    {he.decode(allNews[4]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[4]?.link}>
                          <FaClock className="fa fa-clock-o" /> 
                          {moment(allNews[4]?.modified).format("MMMM Do, YYYY")}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="jeg_post jeg_pl_xs format-standard">
  <div className="jeg_postblock_content">
    <h3 className="jeg_post_title">
    <a href={allNews[5]?.link}>        
    {he.decode(allNews[5]?.title?.rendered || "")}
      </a>
    </h3>
    <div className="jeg_post_meta">
      <div className="jeg_meta_date">
      <a href={allNews[5]?.link}>
          <FaClock className="fa fa-clock-o" /> 
          {moment(allNews[5]?.modified).format("MMMM Do, YYYY")}

        </a>
      </div>
    </div>
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
        ".jnews_module_431441_4_6503363edd882 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }"
    }}
  />
    </div>
  </div>
</div>


  </div>
</div>





<div className="row vc_row wpb_row vc_row-fluid">
  <div className="jeg-vc-wrapper">
    <div className="wpb_column jeg_column vc_column_container vc_col-sm-6 vc_col-md-3 jeg_main_content">
      <div className="jeg_wrapper wpb_wrapper">
        <div
          className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_8_6503363f13a09  jeg_pb_boxed jeg_pb_boxed_shadow  "
          data-unique="jnews_module_431441_8_6503363f13a09"
        >
          <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
            <h3 className="jeg_block_title">
              <span>BUSINESS NEWS</span>
            </h3>
          </div>


          <div className="jeg_block_container">
            <div className="jeg_posts">
              <article className="jeg_post jeg_pl_sm format-standard">
                <div className="jeg_thumb">
                  <a href={allNews[7]?.link}>
                    <div className=" animate-lazy  size-715 ">
                      <img
                        width={120}
                        height={86}
                        src={allNews[7]?.jetpack_featured_media_url}
                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                        alt={allNews[7]?.title?.rendered}
                        decoding="async"
                        sizes="(max-width: 120px) 100vw, 120px"
                        data-src="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp"
                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp 120w, https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-350x250.webp 350w"
                        data-sizes="auto"
                        data-expand={700}
                      />
                    </div>
                  </a>
                </div>
                <div className="jeg_postblock_content">
                  <h3 className="jeg_post_title">
                    <a href={allNews[7]?.link}>
                    {he.decode(allNews[7]?.title?.rendered || "")}
                    </a>
                  </h3>
                  <div className="jeg_post_meta">
                    <div className="jeg_meta_date">
                      <a href={allNews[7]?.link}>
                        <FaClock className="fa fa-clock-o" /> 
                        {moment(allNews[7]?.modified).format("MMMM Do, YYYY")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[7]?.link}>
                    {he.decode(allNews[7]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[7]?.link}>
                          <FaClock className="fa fa-clock-o" />
                          {moment(allNews[7]?.modified).format("MMMM Do, YYYY")}

                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[8]?.link}>
                    {he.decode(allNews[8]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[8]?.link}>
                          <FaClock className="fa fa-clock-o" /> 
                          {moment(allNews[8]?.modified).format("MMMM Do, YYYY")}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="jeg_post jeg_pl_xs format-standard">
  <div className="jeg_postblock_content">
    <h3 className="jeg_post_title">
    <a href={allNews[9]?.link}>        
    {he.decode(allNews[9]?.title?.rendered || "")}
      </a>
    </h3>
    <div className="jeg_post_meta">
      <div className="jeg_meta_date">
      <a href={allNews[9]?.link}>
          <FaClock className="fa fa-clock-o" /> 
          {moment(allNews[9]?.modified).format("MMMM Do, YYYY")}

        </a>
      </div>
    </div>
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
        ".jnews_module_431441_4_6503363edd882 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }"
    }}
  />



        </div>
      </div>
    </div>


    <div className="wpb_column jeg_column vc_column_container vc_col-sm-6 vc_col-md-3 jeg_main_content">
  <div className="jeg_wrapper wpb_wrapper">
    <div
      className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_9_6503363f56f09  jeg_pb_boxed jeg_pb_boxed_shadow  "
      data-unique="jnews_module_431441_9_6503363f56f09"
    >
      <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
        <h3 className="jeg_block_title">
          <span>TECH</span>
        </h3>
      </div>


      <div className="jeg_block_container">
            <div className="jeg_posts">
              <article className="jeg_post jeg_pl_sm format-standard">
                <div className="jeg_thumb">
                  <a href={allNews[0]?.link}>
                    <div className=" animate-lazy  size-715 ">
                      <img
                        width={120}
                        height={86}
                        src={allNews[0]?.jetpack_featured_media_url}
                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                        alt={allNews[0]?.title?.rendered}
                        decoding="async"
                        sizes="(max-width: 120px) 100vw, 120px"
                        data-src="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp"
                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp 120w, https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-350x250.webp 350w"
                        data-sizes="auto"
                        data-expand={700}
                      />
                    </div>
                  </a>
                </div>
                <div className="jeg_postblock_content">
                  <h3 className="jeg_post_title">
                    <a href={allNews[1]?.link}>
                    {he.decode(allNews[1]?.title?.rendered || "")}
                    </a>
                  </h3>
                  <div className="jeg_post_meta">
                    <div className="jeg_meta_date">
                      <a href={allNews[1]?.link}>
                        <FaClock className="fa fa-clock-o" /> 
                        {moment(allNews[1]?.modified).format("MMMM Do, YYYY")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[1]?.link}>
                    {he.decode(allNews[1]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[1]?.link}>
                          <FaClock className="fa fa-clock-o" />
                          {moment(allNews[1]?.modified).format("MMMM Do, YYYY")}

                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[2]?.link}>
                    {he.decode(allNews[2]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[2]?.link}>
                          <FaClock className="fa fa-clock-o" /> 
                          {moment(allNews[2]?.modified).format("MMMM Do, YYYY")}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="jeg_post jeg_pl_xs format-standard">
  <div className="jeg_postblock_content">
    <h3 className="jeg_post_title">
    <a href={allNews[3]?.link}>        
    {he.decode(allNews[3]?.title?.rendered || "")}
      </a>
    </h3>
    <div className="jeg_post_meta">
      <div className="jeg_meta_date">
      <a href={allNews[3]?.link}>
          <FaClock className="fa fa-clock-o" /> 
          {moment(allNews[3]?.modified).format("MMMM Do, YYYY")}

        </a>
      </div>
    </div>
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
        ".jnews_module_431441_4_6503363edd882 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }"
    }}
  />

    </div>
  </div>
</div>



<div className="wpb_column jeg_column vc_column_container vc_col-sm-6 vc_col-md-3 jeg_main_content">
  <div className="jeg_wrapper wpb_wrapper">
    <div
      className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_10_6503363f5c336  jeg_pb_boxed jeg_pb_boxed_shadow  "
      data-unique="jnews_module_431441_10_6503363f5c336"
    >
      <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
        <h3 className="jeg_block_title">
          <span>CORPORATE UPDATES</span>
        </h3>
      </div>


      <div className="jeg_block_container">
            <div className="jeg_posts">
              <article className="jeg_post jeg_pl_sm format-standard">
                <div className="jeg_thumb">
                  <a href={allNews[4]?.link}>
                    <div className=" animate-lazy  size-715 ">
                      <img
                        width={120}
                        height={86}
                        src={allNews[4]?.jetpack_featured_media_url}
                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                        alt={allNews[4]?.title?.rendered}
                        decoding="async"
                        sizes="(max-width: 120px) 100vw, 120px"
                        data-src="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp"
                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp 120w, https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-350x250.webp 350w"
                        data-sizes="auto"
                        data-expand={700}
                      />
                    </div>
                  </a>
                </div>
                <div className="jeg_postblock_content">
                  <h3 className="jeg_post_title">
                    <a href={allNews[5]?.link}>
                    {he.decode(allNews[5]?.title?.rendered || "")}
                    </a>
                  </h3>
                  <div className="jeg_post_meta">
                    <div className="jeg_meta_date">
                      <a href={allNews[5]?.link}>
                        <FaClock className="fa fa-clock-o" /> 
                        {moment(allNews[5]?.modified).format("MMMM Do, YYYY")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[6]?.link}>
                    {he.decode(allNews[6]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[6]?.link}>
                          <FaClock className="fa fa-clock-o" />
                          {moment(allNews[6]?.modified).format("MMMM Do, YYYY")}

                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[7]?.link}>
                    {he.decode(allNews[7]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[7]?.link}>
                          <FaClock className="fa fa-clock-o" /> 
                          {moment(allNews[7]?.modified).format("MMMM Do, YYYY")}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="jeg_post jeg_pl_xs format-standard">
  <div className="jeg_postblock_content">
    <h3 className="jeg_post_title">
    <a href={allNews[8]?.link}>        
    {he.decode(allNews[8]?.title?.rendered || "")}
      </a>
    </h3>
    <div className="jeg_post_meta">
      <div className="jeg_meta_date">
      <a href={allNews[8]?.link}>
          <FaClock className="fa fa-clock-o" /> 
          {moment(allNews[8]?.modified).format("MMMM Do, YYYY")}

        </a>
      </div>
    </div>
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
        ".jnews_module_431441_4_6503363edd882 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }"
    }}
  />

    </div>
  </div>
</div>







<div className="wpb_column jeg_column vc_column_container vc_col-sm-6 vc_col-md-3 jeg_main_content">
  <div className="jeg_wrapper wpb_wrapper">
    <div
      className="jeg_postblock_20 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_1o3 jnews_module_431441_11_6503363f6276e  jeg_pb_boxed jeg_pb_boxed_shadow  "
      data-unique="jnews_module_431441_11_6503363f6276e"
    >
      <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
        <h3 className="jeg_block_title">
          <a href="https://nairametrics.com/tag/featured/">
            <span>INDUSTRIES</span>
          </a>
        </h3>
      </div>


      <div className="jeg_block_container">
            <div className="jeg_posts">
              <article className="jeg_post jeg_pl_sm format-standard">
                <div className="jeg_thumb">
                  <a href={allNews[1]?.link}>
                    <div className=" animate-lazy  size-715 ">
                      <img
                        width={120}
                        height={86}
                        src={allNews[1]?.jetpack_featured_media_url}
                        className="attachment-jnews-120x86 size-jnews-120x86 lazyload wp-post-image"
                        alt={allNews[1]?.title?.rendered}
                        decoding="async"
                        sizes="(max-width: 120px) 100vw, 120px"
                        data-src="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp"
                        data-srcset="https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-120x86.webp 120w, https://nairametrics.com/wp-content/uploads/2023/09/NCAT-Zaria-350x250.webp 350w"
                        data-sizes="auto"
                        data-expand={700}
                      />
                    </div>
                  </a>
                </div>
                <div className="jeg_postblock_content">
                  <h3 className="jeg_post_title">
                    <a href={allNews[2]?.link}>
                    {he.decode(allNews[2]?.title?.rendered || "")}
                    </a>
                  </h3>
                  <div className="jeg_post_meta">
                    <div className="jeg_meta_date">
                      <a href={allNews[2]?.link}>
                        <FaClock className="fa fa-clock-o" /> 
                        {moment(allNews[2]?.modified).format("MMMM Do, YYYY")}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="jeg_postsmall jeg_load_more_flag">
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[3]?.link}>
                    {he.decode(allNews[3]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[3]?.link}>
                          <FaClock className="fa fa-clock-o" />
                          {moment(allNews[3]?.modified).format("MMMM Do, YYYY")}

                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="jeg_post jeg_pl_xs format-standard">
                  <div className="jeg_postblock_content">
                    <h3 className="jeg_post_title">
                    <a href={allNews[4]?.link}>
                    {he.decode(allNews[4]?.title?.rendered || "")}

                      </a>
                    </h3>
                    <div className="jeg_post_meta">
                      <div className="jeg_meta_date">
                      <a href={allNews[4]?.link}>
                          <FaClock className="fa fa-clock-o" /> 
                          {moment(allNews[4]?.modified).format("MMMM Do, YYYY")}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="jeg_post jeg_pl_xs format-standard">
  <div className="jeg_postblock_content">
    <h3 className="jeg_post_title">
    <a href={allNews[5]?.link}>        
    {he.decode(allNews[8]?.title?.rendered || "")}
      </a>
    </h3>
    <div className="jeg_post_meta">
      <div className="jeg_meta_date">
      <a href={allNews[5]?.link}>
          <FaClock className="fa fa-clock-o" /> 
          {moment(allNews[5]?.modified).format("MMMM Do, YYYY")}

        </a>
      </div>
    </div>
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
        ".jnews_module_431441_4_6503363edd882 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }"
    }}
  />






    </div>


    <div className="vc_wp_text wpb_content_element">
  <div className="widget widget_text">
    <div className="textwidget" />
  </div>
</div>







  </div>
</div>





  </div>
</div>


<VideoFile />







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

    </div>
  )
}

export default General
