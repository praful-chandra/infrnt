import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';

import {addStyle} from '../../actions/curatorActions';

 class AddStyle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        title: "",
        description: "",
        cover : ""
      }
    }
    

    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      onChangeImage = e => {
        this.setState({
          cover: e.target.files[0]
        });
      };

      handleSubmit = ()=>{
          let formData = new FormData();

          formData.append("styleCover",this.state.cover);
          formData.append("name",this.state.title);
          formData.append("description",this.state.description);

          this.props.addStyle(formData);

      }


  render() {
    const styles = {
        fontSize: "2rem",
        height: "5rem"
      };
    return (
      <div className="container">
        <div className="container" style={styles}>
            <div className="createBlog-form">
            <form 
            onSubmit={this.handelSubmit}
            encType="multipart/form-data"
            multiple="multiple">

<div className={classnames("createBlog-form-initial",{
  "hidden" : false
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
      />
 
      <label htmlFor="cover">Cover img</label>
       <input
         type="file"
        className="form-control"
        name=""
        onChange={this.onChangeImage}
         id="cover"
        style={styles}
      />
<br/><br/>
<div className="createBlog-form-next btn btn-block btn-success"
style={styles}
onClick={this.handleSubmit}>Next</div>
</div>
</form>
      </div>
      </div>
      </div>
    )
  }
}

 const mapStateToProps = (state)=>{



}


export default connect(mapStateToProps,{addStyle})(AddStyle);