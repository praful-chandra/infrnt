import React, { Component } from "react";

class CuratedStyles extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  interval = null;

  leftSlide = e => {
    e.persist();
    let temp = () => {
      e.target.parentElement.getElementsByTagName("div")[6].scrollBy(-2, 0);
    };

    this.interval = setInterval(() => {
      temp();
    }, 1);
  };

  rightSlide = e => {
    e.persist();
    
    let temp = () => {
      e.target.parentElement.getElementsByTagName("div")[6].scrollBy(2, 0);
    };

    this.interval = setInterval(() => {
      temp();
    }, 1);
  };

  imgClick = e => {
    e.persist();
    //  console.log(e.target.parentElement.offsetLeft);
  };

  clearInterval = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="curatedStyles-wrapper">
        {this.props.content.length > 5 ? (
          <i
            className="fas fa-chevron-left curatedStyles-wrapper-slider curatedStyles-wrapper-slider-left"
            onMouseDown={this.leftSlide}
            onMouseUp={this.clearInterval}
          />
        ) : null}

        <div className="curatedStyles-curatorInfo-wrapper">
          <div className="curatedStyles-curatorInfo-image">
            <img
              src={require("../../images/curator-dp.png")}
              alt="curator dp"
            />
          </div>

          <div className="curatedStyles-curatorInfo-details">
            <div className="curatedStyles-curatorInfo-details-title">
              SRIPRIYA JAIN
            </div>
            <div className="curatedStyles-curatorInfo-details-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
              libero suscipit, faucibus diam vel, tristique ex.
            </div>

            <div className="curatedStyles-curatorInfo-details-exploreBtn">
              <a href="/curator/style">Explore this Style</a>
            </div>
          </div>
        </div>
        <div className="curatedStyles-wrapper-img-container" id="imgScroller">
          {this.props.content.map((data, i) => {
            return (
              <div
                key={i}
                onClick={this.imgClick}
                className="curatedStyles-wrapper-img-small"
              >
                <img src={data.cover} alt="" />
              </div>
            );
          })}
        </div>

        {this.props.content.length > 5 ? (
          <i
            className="fas fa-chevron-right  curatedStyles-wrapper-slider curatedStyles-wrapper-slider-right"
            onMouseDown={this.rightSlide}
            onMouseUp={this.clearInterval}
          />
        ) : null}
      </div>
    );
  }
}

export default CuratedStyles;
