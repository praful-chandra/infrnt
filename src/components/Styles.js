import React, { Component } from "react";

import CuratedStyles from "./CuratedStyles/CuratedStyles";
import CuratedStylesContainer from "./CuratedStyles/CuratedStylesContainer";
import QuickInfo from "./Curator/QuickInfo";

const demoStyle = [
  {
    cover: require("../images/article-big-cover.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },
  {
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  }
];

class Styles extends Component {
  render() {
    return (
      <div>
        <CuratedStylesContainer containerHeader=" " containerFooter="none">
          <CuratedStyles content={demoStyle} />
        </CuratedStylesContainer>

        <CuratedStylesContainer containerHeader=" " containerFooter="none">
          <CuratedStyles content={demoStyle} />
        </CuratedStylesContainer>

        <QuickInfo />

        <CuratedStylesContainer containerHeader=" " containerFooter="none">
          <CuratedStyles content={demoStyle} />
        </CuratedStylesContainer>

        <CuratedStylesContainer containerHeader=" " containerFooter="none">
          <CuratedStyles content={demoStyle} />
        </CuratedStylesContainer>

        <CuratedStylesContainer containerHeader=" " containerFooter="none">
          <CuratedStyles content={demoStyle} />
        </CuratedStylesContainer>

        <QuickInfo />

        <CuratedStylesContainer containerHeader=" " containerFooter="none">
          <CuratedStyles content={demoStyle} />
        </CuratedStylesContainer>

        <CuratedStylesContainer containerHeader=" " containerFooter="none">
          <CuratedStyles content={demoStyle} />
        </CuratedStylesContainer>

        <CuratedStylesContainer containerHeader=" " containerFooter="none">
          <CuratedStyles content={demoStyle} />
        </CuratedStylesContainer>
      </div>
    );
  }
}

export default Styles;
