import React, { useEffect, useState } from 'react'
import makeAPICall from '../../helpers/apiUtils'
import he from 'he'
import moment from 'moment/moment'
import {FaAngleLeft, FaAngleRight, FaClock, FaComment} from 'react-icons/fa'

const LatestStory = () => {
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
      <div
  className="jeg_postblock_4 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_3o3 jnews_module_431441_2_6503363eae110  jeg_pb_boxed  "
  data-unique="jnews_module_431441_2_6503363eae110"
>
  <div className="jeg_block_heading jeg_block_heading_2 jeg_subcat_right">
    <h3 className="jeg_block_title">
      <span>LATEST STORIES</span>
    </h3>
  </div>
  <div className="jeg_posts jeg_block_container">
    <div className="jeg_posts jeg_load_more_flag">
      <article className="jeg_post jeg_pl_md_3 format-standard">
        <div className="jeg_thumb">
          <a href={naijaNews[0]?.link}>
            <div className=" animate-lazy  size-715 ">
              <img
                width={350}
                height={250}
                src={naijaNews[0]?.jetpack_featured_media_url}
                className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image"
                alt="NCC"
                decoding="async"
                sizes="(max-width: 350px) 100vw, 350px"
                data-src="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png"
                data-srcset="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png 350w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-120x86.png 120w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-750x536.png 750w"
                data-sizes="auto"
                data-expand={700}
              />
            </div>
          </a>
        </div>
        <div className="jeg_postblock_content">
          <h3 className="jeg_post_title">
            <a href={naijaNews[0]?.link}>
            {he.decode(naijaNews[0]?.title?.rendered || "")}
            </a>
          </h3>
          <div className="jeg_post_meta">
            <div className="jeg_meta_author coauthor">
              <span className="meta_text by">by</span>
              <a href="https://nairametrics.com/author/chike-olisah/">
              {naijaNews[0]?.yoast_head_json?.author}
              </a>
            </div>
            <div className="jeg_meta_date">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/">
                <FaClock className="fa fa-clock-o" /> 5 mins ago
              </a>
            </div>
            <div className="jeg_meta_comment">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/#comments">
                <FaComment className="fa fa-comment-o" /> 0{" "}
              </a>
            </div>
          </div>
          <div className="jeg_post_excerpt">
            <p>
            {removePTag(
                        he.decode(naijaNews[0]?.excerpt?.rendered || "")
                      )}
            </p>
          </div>
        </div>
      </article>
      <article className="jeg_post jeg_pl_md_3 format-standard">
        <div className="jeg_thumb">
          <a href={naijaNews[1]?.link}>
            <div className=" animate-lazy  size-715 ">
              <img
                width={350}
                height={250}
                src={naijaNews[1]?.jetpack_featured_media_url}
                className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image"
                alt="NCC"
                decoding="async"
                sizes="(max-width: 350px) 100vw, 350px"
                data-src="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png"
                data-srcset="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png 350w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-120x86.png 120w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-750x536.png 750w"
                data-sizes="auto"
                data-expand={700}
              />
            </div>
          </a>
        </div>
        <div className="jeg_postblock_content">
          <h3 className="jeg_post_title">
            <a href={naijaNews[1]?.link}>
            {he.decode(naijaNews[1]?.title?.rendered || "")}
            </a>
          </h3>
          <div className="jeg_post_meta">
            <div className="jeg_meta_author coauthor">
              <span className="meta_text by">by</span>
              <a href="https://nairametrics.com/author/chike-olisah/">
              {naijaNews[1]?.yoast_head_json?.author}
              </a>
            </div>
            <div className="jeg_meta_date">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/">
                <FaClock className="fa fa-clock-o" /> 5 mins ago
              </a>
            </div>
            <div className="jeg_meta_comment">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/#comments">
                <FaComment className="fa fa-comment-o" /> 0{" "}
              </a>
            </div>
          </div>
          <div className="jeg_post_excerpt">
            <p>
            {removePTag(
                        he.decode(naijaNews[1]?.excerpt?.rendered || "")
                      )}
            </p>
          </div>
        </div>
      </article>
      <article className="jeg_post jeg_pl_md_3 format-standard">
        <div className="jeg_thumb">
          <a href={naijaNews[2]?.link}>
            <div className=" animate-lazy  size-715 ">
              <img
                width={350}
                height={250}
                src={naijaNews[2]?.jetpack_featured_media_url}
                className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image"
                alt="NCC"
                decoding="async"
                sizes="(max-width: 350px) 100vw, 350px"
                data-src="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png"
                data-srcset="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png 350w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-120x86.png 120w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-750x536.png 750w"
                data-sizes="auto"
                data-expand={700}
              />
            </div>
          </a>
        </div>
        <div className="jeg_postblock_content">
          <h3 className="jeg_post_title">
            <a href={naijaNews[2]?.link}>
            {he.decode(naijaNews[2]?.title?.rendered || "")}
            </a>
          </h3>
          <div className="jeg_post_meta">
            <div className="jeg_meta_author coauthor">
              <span className="meta_text by">by</span>
              <a href="https://nairametrics.com/author/chike-olisah/">
              {naijaNews[2]?.yoast_head_json?.author}
              </a>
            </div>
            <div className="jeg_meta_date">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/">
                <FaClock className="fa fa-clock-o" /> 5 mins ago
              </a>
            </div>
            <div className="jeg_meta_comment">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/#comments">
                <FaComment className="fa fa-comment-o" /> 0{" "}
              </a>
            </div>
          </div>
          <div className="jeg_post_excerpt">
            <p>
            {removePTag(
                        he.decode(naijaNews[2]?.excerpt?.rendered || "")
                      )}
            </p>
          </div>
        </div>
      </article>
      <article className="jeg_post jeg_pl_md_3 format-standard">
        <div className="jeg_thumb">
          <a href={naijaNews[3]?.link}>
            <div className=" animate-lazy  size-715 ">
              <img
                width={350}
                height={250}
                src={naijaNews[3]?.jetpack_featured_media_url}
                className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image"
                alt="NCC"
                decoding="async"
                sizes="(max-width: 350px) 100vw, 350px"
                data-src="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png"
                data-srcset="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png 350w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-120x86.png 120w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-750x536.png 750w"
                data-sizes="auto"
                data-expand={700}
              />
            </div>
          </a>
        </div>
        <div className="jeg_postblock_content">
          <h3 className="jeg_post_title">
            <a href={naijaNews[3]?.link}>
            {he.decode(naijaNews[3]?.title?.rendered || "")}
            </a>
          </h3>
          <div className="jeg_post_meta">
            <div className="jeg_meta_author coauthor">
              <span className="meta_text by">by</span>
              <a href="https://nairametrics.com/author/chike-olisah/">
              {naijaNews[0]?.yoast_head_json?.author}
              </a>
            </div>
            <div className="jeg_meta_date">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/">
                <FaClock className="fa fa-clock-o" /> 5 mins ago
              </a>
            </div>
            <div className="jeg_meta_comment">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/#comments">
                <FaComment className="fa fa-comment-o" /> 0{" "}
              </a>
            </div>
          </div>
          <div className="jeg_post_excerpt">
            <p>
            {removePTag(
                        he.decode(naijaNews[3]?.excerpt?.rendered || "")
                      )}
            </p>
          </div>
        </div>
      </article>
      <article className="jeg_post jeg_pl_md_3 format-standard">
        <div className="jeg_thumb">
          <a href={naijaNews[4]?.link}>
            <div className=" animate-lazy  size-715 ">
              <img
                width={350}
                height={250}
                src={naijaNews[4]?.jetpack_featured_media_url}
                className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image"
                alt="NCC"
                decoding="async"
                sizes="(max-width: 350px) 100vw, 350px"
                data-src="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png"
                data-srcset="https://nairametrics.com/wp-content/uploads/2023/08/NCCC-350x250.png 350w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-120x86.png 120w, https://nairametrics.com/wp-content/uploads/2023/08/NCCC-750x536.png 750w"
                data-sizes="auto"
                data-expand={700}
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
            <div className="jeg_meta_author coauthor">
              <span className="meta_text by">by</span>
              <a href="https://nairametrics.com/author/chike-olisah/">
              {naijaNews[4]?.yoast_head_json?.author}
              </a>
            </div>
            <div className="jeg_meta_date">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/">
                <FaClock className="fa fa-clock-o" /> 5 mins ago
              </a>
            </div>
            <div className="jeg_meta_comment">
              <a href="https://nairametrics.com/2023/09/14/ncc-alerts-nigerians-on-increase-in-electronic-fraud-on-telecom-platforms/#comments">
                <FaComment className="fa fa-comment-o" /> 0{" "}
              </a>
            </div>
          </div>
          <div className="jeg_post_excerpt">
            <p>
            {removePTag(
                        he.decode(naijaNews[4]?.excerpt?.rendered || "")
                      )}
            </p>
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
    <div className="jeg_block_nav ">
      <a href="#" className="prev disabled" title="Previous">
        <FaAngleLeft className="fa fa-angle-left" />
      </a>
      <a href="#" className="next " title="Next">
        <FaAngleRight className="fa fa-angle-right" />
      </a>
    </div>
  </div>
  <style
    scoped=""
    dangerouslySetInnerHTML={{
      __html:
        ".jnews_module_431441_2_6503363eae110 .jeg_block_heading_2 .jeg_block_title span { background: #283b91; }.jnews_module_431441_2_6503363eae110 .jeg_post_title a, .jnews_module_431441_2_6503363eae110.jeg_postblock .jeg_subcat_list > li > a, .jnews_module_431441_2_6503363eae110 .jeg_pl_md_card .jeg_post_category a:hover { color: #283b91 }"
    }}
  />
</div>

    </div>
  )
}

export default LatestStory
