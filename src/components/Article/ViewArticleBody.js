import React from 'react'

import CuratedStylesContainer from "../CuratedStyles/CuratedStylesContainer";
import CuratedStyles from "../CuratedStyles/CuratedStyles";
import Share from '../common/Share';


export default function ViewArticleBody(props) {


    
 const demoStyle = [{
    cover: require("../../images/article-big-cover.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../../images/article-small-1.png"),
    title: "Style1"
  }];


  return (
    <div className="container-fluid">

        
          <div className="viewArticle-img-wrapper">
            <img src={"/" + props.content.cover} alt="cover" />
          </div>
            <div className="viewArticle-socialLinks">
            {props.isLiked ? (
              <span><i className="fas fa-thumbs-up" onClick={()=>props.like(props.content._id)} ></i>{' '}<span>{props.content.likes}</span></span> 
            ):(
              <span><i className="far fa-thumbs-up" onClick={()=>props.like(props.content._id)} ></i>{' '}<span>{props.content.likes}</span></span> 
            )}
           <i className="fas fa-share-alt" onClick={props.blogShare}></i>
              {props.share ? <Share link={window.location.href} /> : null}
            </div>
          <div className="viewArticle-title">
            {props.content.title}
          </div>

          <div className="viewArticle-desc container">
            {props.content.description}
          </div>
          {props.content.content.map((content, i) =>
            (i + 1) % 2 !== 0 ? (
              <div key={i} className="viewArticle-content-wrapper">
                <a
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={content.img}
                    alt=""
                    className="viewArticle-content-img"
                  />
                </a>
                <div className="viewArticle-content-body">
                  {content.blogContent}
                </div>
              </div>
            ) : (
              <div key={i} className="viewArticle-content-wrapper">
                <a
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={content.img}
                    alt=""
                    className="viewArticle-content-img-invert"
                  />
                </a>
                <div className="viewArticle-content-body-invert">
                  {content.blogContent}
                </div>
              </div>
            )
          )}

          <CuratedStylesContainer containerHeader={props.containerHeader}>
            <CuratedStyles content={demoStyle} />
            <CuratedStyles content={demoStyle} />
          </CuratedStylesContainer>

        </div>
  )
}
