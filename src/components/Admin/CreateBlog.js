import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postBlog } from "../../actions/blogActions";
import classnames from 'classnames';

class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      cover: "",
      content: [],
      auth: {},
      blogs: {
        UploadBlog: null
      }
    };
  }

  componentDidMount() {
    this.setState({
      auth: this.props.auth,
      blogs: this.props.blogs
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({
        auth: nextProps.auth,
        blogs: nextProps.blogs
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleContentAdd = () => {
    this.setState({
      content: [...this.state.content, { img: "", link: "", blogContent: "" }]
    });
  };

  handleChange = (e, i) => {
    let content = this.state.content;

    content[i][e.target.name] = e.target.value;

    this.setState({
      content
    });
  };

  onChangeImage = e => {
    this.setState({
      cover: e.target.files[0]
    });
  };

  handleDelete = (e, i) => {
    e.preventDefault();
    let content = this.state.content;

    content.splice(i, 1);

    this.setState({
      content
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.blogs.UploadBlog === null) {
      let blog = {
        title: this.state.title,
        description: this.state.description
      };
      let formData = new FormData();

      Object.keys(blog).forEach(key => formData.append(key, blog[key]));

      const content = this.state.content;

      content.map(data =>
        Object.keys(data).forEach(key => formData.append(key, data[key]))
      );

      formData.append("cover", this.state.cover);

      this.props.postBlog(formData, "blogHead");
    } else {
      let blog = {
        id: this.state.blogs.UploadBlog._id,
        content: this.state.content
      };

      this.setState({
        title: "",
        description: "",
        cover: "",
        content: []
      });

      this.props.postBlog(blog, "blogContent");
    }
  };

  render() {
    const createBlog = this.state.blogs.UploadBlog === null ? false : true;
    const styles = {
      fontSize: "2rem",
      height: "5rem"
    };

    if (this.state.auth.isAuthenticated) {
      if (this.state.auth.user.typeOfUser === "user") {
        window.location.replace("/user");
      }
    } else {
      // window.location.replace("/curator");
    }

  
    return (
      <div className="container" style={styles}>
            <div className="createBlog-form">
            <form 
            onSubmit={e => this.handleSubmit(e)}
            encType="multipart/form-data"
            multiple="multiple">

<div className={classnames("createBlog-form-initial",{
  "hidden" : this.state.blogs.UploadBlog !== null
})}>

<div className="form-group">
        <label htmlFor="blogTitle">Title</label>
        <input
          type="text"
          className="form-control"
          id="blogTitle"
          aria-describedby="titleHelp"
          placeholder="Enter Title"
          name="title"
          onChange={e => this.onChange(e)}
          value={this.state.title}
          style={styles}
          disabled={createBlog}
        />
      </div>

      <label htmlFor="blogDesc">Description</label>
      <textarea
        type="text"
        className="form-control"
        id="blogDesc"
        aria-describedby="desceHelp"
        placeholder="Enter Description"
        cols="30"
        rows="10"
        name="description"
        onChange={e => this.onChange(e)}
        value={this.state.description}
        style={styles}
        disabled={createBlog}
      />

      <label htmlFor="cover">Cover img</label>
      <input
        type="file"
        className="form-control"
        name=""
        onChange={this.onChangeImage}
        id="cover"
        style={styles}
        disabled={createBlog}
      />
<br/><br/>
<div className="createBlog-form-next btn btn-block btn-success"
style={styles}
onClick={this.handleSubmit}>Next</div>
</div>

<div className={classnames("createBlog-form-content",{
  "hidden" :this.state.blogs.UploadBlog === null
})}>
<label htmlFor="Content">Content</label>

{createBlog
  ? this.state.content.map((content, i) => {
      return (
        <div
          style={{
            border: "1px solid",
            padding: "1rem",
            margin: "1rem"
          }}
          key={`division ${i}`}
        >
          <label>img</label>
          <input
            type="text"
            className="form-control"
            name="img"
            onChange={e => this.handleChange(e, i)}
            placeholder="paste link to image"
            style={styles}
          />

          <label>blog content</label>
          <textarea
            className="form-control"
            cols="30"
            rows="10"
            name="blogContent"
            onChange={e => this.handleChange(e, i)}
            value={this.state.content[i].blogContent}
            style={styles}
          />

          <label>Link to buy</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Link"
            name="link"
            onChange={e => this.handleChange(e, i)}
            value={this.state.content[i].link}
            style={styles}
          />

          <button
            className="btn btn-danger"
            onClick={e => this.handleDelete(e, i)}
            style={styles}
          >
            Delete
          </button>
        </div>
      );
    })
  : null}
<button
  className="btn btn-warning "
  disabled={!createBlog}
  onClick={e => {
    e.preventDefault();
    this.handleContentAdd();
  }}
  style={styles}
>
  Add
</button>

<br />
<button type="submit" className="btn btn-success btn-block" style={styles}>
  Submit
</button>
</div>


            </form>
            </div>
      </div>
    );
  }
}

CreateBlog.propTypes = {
  auth: PropTypes.object.isRequired,
  blogs: PropTypes.object.isRequired,
  postBlog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  blogs: state.blogs
});

export default connect(
  mapStateToProps,
  { postBlog }
)(CreateBlog);
