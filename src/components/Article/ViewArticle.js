import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getSelectedBlog,
  likeBlog,
  getAllBlogs
} from "../../actions/blogActions";

import ViewArticleBody from "./ViewArticleBody";
import Loading from "../common/Loading";

class ViewArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: null,
      selectedBlog: null,
      share: false,
      blogsToLoad: 0,
      allBlogs: [],
      blogLoading: false
    };
  }

  componentDidMount() {
    this.props.getSelectedBlog(this.props.match.params.id);
    window.addEventListener("scroll", this.handleScroll);
    this.props.getAllBlogs();
  }

  handleScroll = () => {
    let scrolledHeight =
      document.documentElement.scrollTop +
      document.documentElement.clientHeight;
    let totalHeight = document.documentElement.scrollHeight;

    //  console.log(totalHeight + "/" +scrolledHeight );

    if (totalHeight - 10 <= scrolledHeight) {
      this.setState({
        blogsToLoad: this.state.blogsToLoad + 1
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        auth: nextProps.auth,
        selectedBlog: nextProps.blogs.selectedBlog,
        allBlogs: nextProps.blogs.allBlogs,
        blogLoading: nextProps.blogs.blogLoading
      });
    }
  }

  like = id => {
    if (this.state.auth.isAuthenticated) {
      this.props.likeBlog(id);
      this.props.history.push("/article/" + id);

      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 15);
        }
      };
      scrollToTop();
    } else {
      alert("please login");
    }
  };

  blogShare = () => {
    this.setState({
      share: !this.state.share
    });
  };

  loadMoreBlogs = () => {
    let allBlogs = this.state.allBlogs;
    allBlogs.splice(
      this.state.allBlogs.findIndex(
        blog => blog["_id"] === this.state.selectedBlog._id
      ),
      1
    );

    if (allBlogs.length < this.state.allBlogs.length) {
      this.setState({
        allBlogs
      });
    }

    let body = [];

    for (let i = 0; i < allBlogs.length; i++) {
      if (this.state.blogsToLoad - 1 > allBlogs.length) {
        this.setState({
          blogsToLoad : allBlogs.length
        })
        window.removeEventListener("scroll", this.handleScroll);

      }

      if (this.state.blogsToLoad - 1 >= i) {
        body.push(
          <div key={i}>
            <ViewArticleBody
              content={allBlogs[i]}
              isLiked={
                this.state.auth.user &&
                allBlogs[i].likedBy.filter(
                  user => user["userId"] === this.state.auth.user._id
                ).length > 0
              }
              blogShare={this.blogShare}
              share={this.state.share}
              like={this.like}
              containerHeader="check out similar styles"
            />
          </div>
        );
      }
    }

    return body;
  };

  render() {
    if (this.state.blogLoading) {
      return <Loading />;
    }
    if (this.state.selectedBlog) {
      return (
        <>
          <ViewArticleBody
            content={this.state.selectedBlog}
            isLiked={
              this.state.auth.user &&
              this.state.selectedBlog.likedBy.filter(
                user => user["userId"] === this.state.auth.user._id
              ).length > 0
            }
            blogShare={this.blogShare}
            share={this.state.share}
            like={this.like}
            containerHeader="check out similar styles"
          />
          {this.state.blogsToLoad > 0 ? this.loadMoreBlogs() : null}
        </>
      );
    } else {
      return null;
    }
  }
}

ViewArticle.propTypes = {
  auth: PropTypes.object.isRequired,
  blogs: PropTypes.object.isRequired,
  getSelectedBlog: PropTypes.func.isRequired,
  likeBlog: PropTypes.func.isRequired,
  getAllBlogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  blogs: state.blogs
});
export default connect(
  mapStateToProps,
  { getSelectedBlog, likeBlog, getAllBlogs }
)(ViewArticle);
