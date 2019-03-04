import React, { Component } from "react";
import { connect } from "react-redux";
import ClassNames from "classnames";
import {
  getStyle,
  addDesign,
  getDesign
} from "../../actions/curatorActions";

class EditStyle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      editDesign: false,
      editDesignObj : {
        coverImg:"",
        name : "",
        Description: "",
        url:"",
        label:"",
        coverImgStream :""
      },
      addDesign: false,
      add: {
        image: "",
        title: "",
        description: "",
        label: "",
        url: "",
        imageStream: ""
      }
    };
  }

  componentDidMount() {
    this.props.getStyle(this.props.match.params.styleId);    
    this.props.getDesign(this.props.match.params.styleId);
  }

  styleCard = (design) => (
    <div className="col" key={design._id}>
      <div className="curator-landing-curated-styles-card">
        <div className="curator-landing-curated-styles-card-image">
          <img src={design.coverImg} alt="" />
        </div>
        <div className="curator-landing-curated-styles-card-info">
        <div className="curator-landing-curated-styles-card-info-name">
            {design.name}
          </div>
          <div className="curator-landing-curated-styles-card-info-name">
            {design.Description}
          </div>
          <div className="curator-landing-curated-styles-card-info-desc">
            {design.label}
          </div>
          <div
            onClick={e => {
              e.preventDefault();
              this.setState({
                editDesign: !this.state.editDesign,
                editDesignObj : design
              });
            }}
            className="curator-landing-curated-styles-card-info-link"
          >
            Edit
          </div>
          <div
            className="curator-landing-curated-styles-card-info-price btn btn-danger btn-sm"
            onClick={this.removeStyleDesign}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );

  addStyleDesign = () => {
    this.setState({
      addDesign: !this.state.addDesign
    });
  };
  

  removeStyleDesign = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  onEditChange = (e)=>{
    this.setState({
      editDesignObj:{
        ...this.state.editDesignObj,
        [e.target.name]: e.target.value
      }
    })
  }
editImage = (e)=>{
  this.setState({
    editDesignObj: {
      ...this.state.editDesignObj,
      coverImg: e.target.files[0],
      coverImgStream: URL.createObjectURL(e.target.files[0])
    }
  });
}

handelEditDesign = ()=>{
  e.preventDefault();
    let formData = new FormData();
    formData.append("designCover", this.state.editDesignObj.image);
    formData.append("name", this.state.editDesignObj.title);
    formData.append("description", this.state.editDesignObj.description);
    formData.append("label", this.state.editDesignObj.label);
    formData.append("url", this.state.editDesignObj.url);
    formData.append("designId", this.props.match.params.designId);

    this.props.editDesign(formData);
}
  editStyle = () => (
    <div
      className={ClassNames("editStyle-edit", {
        hidden: !this.state.editDesign
      })}
    >
      <div className="editStyle-edit-body">
        <div className="editStyle-edit-body-left">
          <div className="editStyle-edit-body-left-image">
            <img src={this.state.editDesignObj.coverImgStream || this.state.editDesignObj.coverImg} alt="" />
            <div className="editStyle-edit-body-left-image-edit btn btn-block btn-light">
              <form method="post" encType="multipart/form-data">
                <label htmlFor="changeImg">
                  <i className="fas fa-image" /> Change
                </label>
                <input
                  type="file"
                  name="coverImg"
                  id="changeImg"
                  style={{ display: "none" }}
                  onChange={this.editImage}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="editStyle-edit-body-right">
          Edit Design
          <form className="editStyle-edit-body-right-form"  onSubmit={this.handelEditDesign}>
            <div className="form-group">
              <label htmlFor="designTitle">Title</label>
              <input
                type="text"
                className="form-control "
                id="designTitle"
                aria-describedby="emailHelp"
                placeholder="Title"
                value={this.state.editDesignObj.name}
                onChange={this.onEditChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="designDescription">Description</label>
              <input
                type="text"
                className="form-control "
                id="designDescription"
                aria-describedby="emailHelp"
                placeholder="Description"
                value={this.state.editDesignObj.Description}
                onChange={this.onEditChange}
                name="Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="designLabel">Label</label>
              <input
                type="text"
                className="form-control "
                id="designLabel"
                aria-describedby="emailHelp"
                placeholder="Label"
                value={this.state.editDesignObj.label}
                onChange={this.onEditChange}
                name="label"
              />
            </div>

            <div className="form-group">
              <label htmlFor="designUrl">Url</label>
              <input
                type="text"
                className="form-control "
                id="designUrl"
                aria-describedby="emailHelp"
                placeholder="Url"
                value={this.state.editDesignObj.url}
                onChange={this.onEditChange}
                name="url"
              />
            </div>
            <button type="submit" className="btn btn-success">
              <i className="fas fa-save" /> Save
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                this.setState({
                  editDesign: !this.state.editDesign
                });
              }}
              className="btn btn-danger \"
            >
              <i className="fas fa-ban" /> Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  addImage = e => {

    this.setState({
      add: {
        ...this.state.add,
        image: e.target.files[0],
        imageStream: URL.createObjectURL(e.target.files[0])
      }
    });
  };

  onAddChange = e => {
    this.setState({
      add: {
        ...this.state.add,
        [e.target.name]: e.target.value
      }
    });
  };

  handelAddDesign = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("designCover", this.state.add.image);
    formData.append("name", this.state.add.title);
    formData.append("description", this.state.add.description);
    formData.append("label", this.state.add.label);
    formData.append("url", this.state.add.url);
    formData.append("styleId", this.props.match.params.styleId);

    this.props.addDesign(formData);
  };

  addStyle = () => (
    <div
      className={ClassNames("editStyle-edit", {
        hidden: !this.state.addDesign
      })}
    >
      <div className="editStyle-edit-body">
        <div className="editStyle-edit-body-left">
          <div className="editStyle-edit-body-left-image">
            <img
              src={
                this.state.add.imageStream ||
                require("../../images/article-small-1.png")
              }
              alt=""
            />
            <div className="editStyle-edit-body-left-image-edit btn btn-block btn-light">
              <form method="post" encType="multipart/form-data">
                <label htmlFor="addImg">
                  <i className="fas fa-image" /> Change
                </label>
                <input
                  type="file"
                  name="img"
                  id="addImg"
                  onChange={this.addImage}
                  className="hidden"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="editStyle-edit-body-right">
          Add Design
          <form
            className="editStyle-edit-body-right-form"
            onSubmit={this.handelAddDesign}
          >
            <div className="form-group">
              <label htmlFor="designTitle">Title</label>
              <input
                type="text"
                name="title"
                className="form-control "
                id="designTitle"
                aria-describedby="emailHelp"
                placeholder="Title"
                onChange={this.onAddChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="designDescription">Description</label>
              <input
                type="text"
                name="description"
                className="form-control "
                id="designDescription"
                aria-describedby="emailHelp"
                onChange={this.onAddChange}
                placeholder="Description"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="designLabel">Label</label>
              <input
                type="text"
                name="label"
                className="form-control "
                id="designLabel"
                aria-describedby="emailHelp"
                onChange={this.onAddChange}
                placeholder="Label"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="designUrl">Url</label>
              <input
                type="text"
                name="url"
                className="form-control "
                id="designUrl"
                aria-describedby="emailHelp"
                onChange={this.onAddChange}
                placeholder="Url"
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              <i className="fas fa-save" /> Save
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                this.setState({
                  addDesign: !this.state.addDesign
                });
              }}
              className="btn btn-danger \"
            >
              <i className="fas fa-ban" /> Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  render() {

    return (
      <div>
        {this.editStyle()}
        {this.addStyle()}

        <div className="addBtn" onClick={this.addStyleDesign}>
          <i className="fas fa-plus" />
        </div>
        <div className="row curator-landing-curated-styles-wrapper">

        {this.props.curator.styleDesign ? this.props.curator.styleDesign.map(design=>{
           return this.styleCard(design);
        }):null}
      
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  curator: state.curator
});

export default connect(
  mapStateToProps,
  { getStyle, addDesign, getDesign }
)(EditStyle);
