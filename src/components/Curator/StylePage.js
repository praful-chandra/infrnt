import React, { Component } from "react";
import CuratedStylesContainer from "../CuratedStyles/CuratedStylesContainer";
import CuratedStyles from "../CuratedStyles/CuratedStyles";
class StylePage extends Component {
  demoStyle = [
    {
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
  render() {
    const arrowRight = require("../../images/style/arrow-right.png");
    const arrowLeft = require("../../images/style/arrow-left.png");
    const coverImg = require("../../images/style/image-of-caucasian-brunette-woman-wearing-casual-P5MJBQZ.png");


    const firstTile = () =>(
      <div className="style-hero">
      <div className="style-hero-imgContainer">
        <img src={coverImg} alt="" />
      </div>
      <div className="style-hero-arrow">
        <img src={arrowRight} alt="" />
      </div>
      <div className="style-hero-desc">
        <div className="style-hero-desc-left">
          <p>
            A two line brief on The design, on how To pair or on what
            occasions to wear this And so on…
          </p>
        </div>
        <div className="style-hero-desc-right">
          <p className="style-hero-desc-right-name">
            Design Description
          </p>
          <p className="style-hero-desc-right-label">
            Name of the label
          </p>
          <p className="style-hero-desc-right-price">₹ 2,500</p>
          <p className="style-hero-desc-right-bag">
            <i className="fas fa-shopping-bag" />
            Add to bag
          </p>
          <p className="style-hero-desc-right-heart">
            <i className="fas fa-heart" />
            210
          </p>
        </div>
      </div>
    </div>
    )

    const secondTile = ()=>(
      <div className="style-hero-2 ">
              <div className="style-hero-desc style-hero-2-desc">
                <div className="style-hero-desc-left">
                  <p>
                    A two line brief on The design, on how To pair or on what
                    occasions to wear this And so on…
                  </p>
                </div>
                <div className="style-hero-desc-right">
                  <p className="style-hero-desc-right-name">
                    Design Description
                  </p>
                  <p className="style-hero-desc-right-label">
                    Name of the label
                  </p>
                  <p className="style-hero-desc-right-price">₹ 2,500</p>
                  <p className="style-hero-desc-right-bag">
                    <i className="fas fa-shopping-bag" />
                    Add to bag
                  </p>
                  <p className="style-hero-desc-right-heart">
                    <i className="fas fa-heart" />
                    210
                  </p>
                </div>
              </div>

              <div className="style-hero-2-arrow">
                <img src={arrowLeft} alt="" />
              </div>
              <div className="style-hero-imgContainer style-hero-2-image">
                <img src={coverImg} alt="" />
              </div>
            </div>
    )

    const mobileTile = ()=>(
      <div className="mobile-style-hero-container">
      <div className="style-hero-imgContainer">
        <img src={coverImg} alt="" />
      </div>

      <div className="style-hero-desc">
        <div className="style-hero-desc-left">
          <p>
            A two line brief on The design, on how To pair or on what
            occasions to wear this And so on…
          </p>
        </div>
        <div className="style-hero-desc-right">
          <p className="style-hero-desc-right-name">Design Description</p>
          <p className="style-hero-desc-right-label">Name of the label</p>
          <p className="style-hero-desc-right-price">₹ 2,500</p>
          <p className="style-hero-desc-right-bag">
            <i className="fas fa-shopping-bag" />
            Add to bag
          </p>
          <p className="style-hero-desc-right-heart">
            <i className="fas fa-heart" />
            210
          </p>
        </div>
      </div>
    </div>
    )

    return (
      <div>
        {/* --------------------------------------------------- Desktop version ----------------------------------------------------------------------------- */}
        <div className="style-desktop">
          <div className="style-hero">
            <div className="style-hero-text">
              <img
                className="style-hero-text-arrowRight"
                src={arrowRight}
                alt=""
              />
              <span>Street wear for the one on the go</span>
            </div>
            {firstTile()}
           {secondTile()}
           {firstTile()}
           {secondTile()}
        
        

          </div>

          <CuratedStylesContainer containerHeader="Other Styles by sripriya" containerFooter="none">
              <CuratedStyles content={this.demoStyle} />
              <CuratedStyles content={this.demoStyle} />
              <CuratedStyles content={this.demoStyle} /> 
            </CuratedStylesContainer>
        </div>
        {/* --------------------------------------------------- Desktop version ----------------------------------------------------------------------------- */}

        {/* --------------------------------------------------- Mobile version ----------------------------------------------------------------------------- */}

        <div className="mobile-style-wrapper">
          <div className="mobile-style-hero-text">
            Street wear for the One on the go
          </div>

          {mobileTile()}
          {mobileTile()}
          {mobileTile()}
          {mobileTile()}
    
        
        </div>
        {/* --------------------------------------------------- Mobile version ----------------------------------------------------------------------------- */}
      </div>
    );
  }
}

export default StylePage;
