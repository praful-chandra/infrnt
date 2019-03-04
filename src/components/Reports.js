import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ArticleBig from "./Article/ArticleBig";
import ArticleSmall from "./Article/ArticleSmall";
import CuratedStylesContainer from "./CuratedStyles/CuratedStylesContainer";
import CuratedStyles from "./CuratedStyles/CuratedStyles";
import  Loading from './common/Loading';

import { getAllBlogs } from "../actions/blogActions";
class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: null,
      blogs: null,
      blogLoading : false,
      divToLoad : 1
    };
  }

  componentDidMount() {
    this.props.getAllBlogs();
    window.addEventListener("scroll", this.handleScroll);

  }

  handleScroll = () => {
    let scrolledHeight =
      document.documentElement.scrollTop +
      document.documentElement.clientHeight;
    let totalHeight = document.documentElement.scrollHeight;

    //  console.log(totalHeight + "/" +scrolledHeight );

    if (totalHeight - 10 <= scrolledHeight) {
      this.setState({
        divToLoad: this.state.divToLoad + 1
      });
    }
  };

  removeScroll = (divisions)=>{
    this.setState({
      divToLoad : divisions
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        auth: nextProps.auth,
        blogs: nextProps.blogs,
        blogLoading : nextProps.blogs.blogLoading
      });
    }
  }

  demoStyle = [{
    cover: require("../images/article-big-cover.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-2.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-3.png"),
    title: "Style1"
  },{
    cover: require("../images/article-small-1.png"),
    title: "Style1"
  }];
  
  
  makeid = () => {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  renderBlogBody = () => { 
    const content = [];
    if (this.state.blogs && this.state.blogs.allBlogs) {
      const allBlogs = this.state.blogs.allBlogs;
      const blogCount = allBlogs.length;
      let divisions = Math.ceil(blogCount / 6);
      let toLoad = this.state.divToLoad
      let blogIndex = -1;
      if(toLoad >= divisions){
        toLoad = divisions
      window.removeEventListener("scroll", this.handleScroll);
      }
      for (let d = 0; d < toLoad; d++) {
        for (let i = 0; i < 6; i++) {
          if (i === 0) {
            content.push(
              <div key={this.makeid()}>
                <ArticleBig invert={false} content={allBlogs[++blogIndex]} />{" "}
              </div>
            );
          }

          if (blogCount >= blogIndex + 3)
            if (i > 0 && i <= 3) {
              content.push(
                <div key={this.makeid()}>
                  <ArticleSmall
                    content1={allBlogs[++blogIndex]}
                    content2={allBlogs[++blogIndex]}
                    content3={allBlogs[++blogIndex]}
                  />
                </div>
              );
              i += 3;
            }

          if (i === 4) {
            content.push(
              <div key={this.makeid()}>
                <ArticleBig invert={true} content={allBlogs[++blogIndex]} />{" "}
              </div>
            );
          }

          if (i === 5) {
            content.push(
              <div key={this.makeid()}>
                <ArticleBig invert={false} content={allBlogs[++blogIndex]} />{" "}
              </div>
            );
          }
        }

        content.push(
          <div key={this.makeid()}>
            <CuratedStylesContainer>
              <CuratedStyles content={this.demoStyle} />
              <CuratedStyles content={this.demoStyle} />
            </CuratedStylesContainer>
          </div>
        );
      }
    }
    return content;
  };

  render() {

    

    if(this.state.blogLoading){
      return( <Loading /> )
    }
    return (
      <div className="container-fluid">
        {this.renderBlogBody().map(blog => blog)}
      </div>
    );
  }
}

Reports.propTypes = {
  auth: PropTypes.object.isRequired,
  blogs: PropTypes.object.isRequired,
  getAllBlogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  blogs: state.blogs
});
export default connect(
  mapStateToProps,
  { getAllBlogs }
)(Reports);
