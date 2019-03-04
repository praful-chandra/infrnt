import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCurrentUser, logoutUser } from "../../actions/authActions";
import { testBlog, getCuratorBlogs } from "../../actions/blogActions";
import {updateProfile } from '../../actions/curatorActions';

import ArticleBig from "../Article/ArticleBig";


class Curator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: {},
      blogs: null,
      edit:false,
      bio : ""
        };
  }

   formData = new FormData();


  testBlogs = () => {
    this.props.testBlog();
  };

  componentDidMount() {
    this.setState({
      auth: this.props.auth,
      blogs: this.props.blogs
    });

  
    if (this.state.auth.isAuthenticated) 
      
      if(this.state.blogs.CuratorBlogs === null && !this.state.blogs.blogLoading){  
        this.props.getCuratorBlogs();
      }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({
        auth: nextProps.auth,
        blogs: nextProps.blogs,
        bio : nextProps.auth.user.profile.bio
      });
    }

  }

  editProfile = ()=>{
    this.setState({
      edit : !this.state.edit
    });
  }

  uploadAvatar = (e)=>{
      let file = e.target.files[0];

    this.formData.append("avatar",file);

    
  }

  handleSaveProfile = ()=>{
console.log(this.state.bio);


    if(this.state.bio.length > 200 && this.state.bio.length < 300){
      this.formData.append("bio",this.state.bio);

    
      this.props.updateProfile(this.formData);
      this.formData = new FormData();
      this.editProfile();
    }else{
      alert("bio must be between 200 and 300characters only")
    }
   
  }

  handleBioChange = (e)=>{
    this.setState({
      bio : e.target.value
    })
  }
  curatorData = () => (
    <div>
   
   <div className="curatorPage-hero curator-landing container">
                <div className="row">
                    <div className="col-md-5 mobile-curatorPage-hero-img ">
                        <div className="curatorPage-hero-image-wrapper curator-landing-hero-image-wrapper">
                            <img src={this.state.auth.user.avatar} alt="add avatar" />
                        </div>
        
                        <ul className="curatorPage-hero-image-dots curator-landing-hero-image-dots">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-7 curatorPage-hero-right-desktop">
                        <div className="curatorPage-hero-title ">
                            <div className="curatorPage-hero-title-name curator-landing-hero-title-name">{this.state.auth.user.name}</div>
                            <div className="curator-landing-editProfile curator-landing-hero-title-editProfile" onClick={this.editProfile}> <i className="fas fa-pencil-alt"></i> edit profile</div>
                        </div>
    
                        <div className="curatorPage-hero-divider curatorPage-hero-divider-top curator-landing-hero-divider"> </div>
                        <div className="curatorPage-hero-text">
                             <p className="curatorPage-hero-text-p1">
                             {this.state.auth.user.profile.bio}
                    
                            </p>    
        
                        </div>
        
                        <div className="curatorPage-hero-divider curatorPage-hero-divider-bottom curator-landing-hero-divider"> </div>
                        <table className="curator-landing-hero-table">
                            <tbody>
                            <tr>
                                <td>Styles Curated</td>
                                <td>77</td>
                                <td>Followers</td>
                                <td>{this.state.auth.user.subscriberCount}</td>
                            </tr>
                            <tr>
                                <td>Labels</td>
                                <td>77</td>
                                <td>views</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>Designs</td>
                                <td>77</td>
                                <td>Designs sold</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                                <td>77</td>
                                <td>total sales amount</td>
                                <td>77</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="curator-landing-hero-btn">Promote your Curation</div>
                    </div>
                    {/* <!-- ------------------------------------------------- Mobile version -------------------------------------------------------------------------------- --> */}
        
                    <div className="mobile-curatorPage mobile-curatorPage-box">
                        <div className="mobile-curatorPage-hero-title">
                            <div className="curatorPage-hero-title-name curator-landing-hero-title-name">{this.state.auth.user.name}</div>
                            <div className="curator-landing-editProfile curator-landing-hero-title-editProfile"> <i className="fas fa-pencil-alt"></i> edit profile</div>
                        </div>
                        <div className="mobile-curatorPage-hero-text">
                        <p className="curatorPage-hero-text-p1">{this.state.auth.user.profile.bio}</p>
                            {/* <p className="curatorPage-hero-text-p2">
                                She has Travelled excessively in Search of her calling
                                of Lorem Ipsum of the nice and beautiful description about
                                the curato
                            </p> */}   
        
                        </div>
                        <table className="curator-landing-hero-table ">
                            <tbody>
                            <tr>
                                <td>Styles Curated</td>
                                <td>8</td>
                                <td>Followers</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Labels</td>
                                <td>26</td>
                                <td>views</td>
                                <td>26</td>
                            </tr>
                            <tr>
                                <td>Designs</td>
                                <td>786</td>
                                <td>Designs sold</td>
                                <td>785</td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                                <td>65</td>
                                <td>total sales amount</td>
                                <td>65</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="curator-landing-hero-btn">Promote your Curation</div>

                    </div>
                    {/* <!-- ------------------------------------------------- Mobile version -------------------------------------------------------------------------------- --> */}
        
                </div>
        
        
            </div>
  

    </div>
  );

 

  editCuratorData = ()=>(
    <div>
     <div className="curatorPage-hero curator-landing container">
                <div className="row">
                    <div className="col-md-5 mobile-curatorPage-hero-img ">
                        <div className="curatorPage-hero-image-wrapper curator-landing-hero-image-wrapper">
                            <form method="post" encType="multipart/form-data">
                              <label htmlFor="avatarUpload">
                              <img className="curator-landing-hero-image-wrapper-edit"  src={this.state.auth.user.avatar} alt="add avatar" />
                              <div className="curator-landing-hero-image-wrapper-edit-overlay">
                              <i class="fas fa-plus-circle"></i>
                              <br/>
                              change image
                              </div>
                              </label>

                              <input id="avatarUpload" type="file" style={{display:"none"}} onChange={this.uploadAvatar}/>
                            </form>

                        </div>
        
                        <ul className="curatorPage-hero-image-dots curator-landing-hero-image-dots">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-7 curatorPage-hero-right-desktop">
                        <div className="curatorPage-hero-title ">
                            <div className="curatorPage-hero-title-name curator-landing-hero-title-name">{this.state.auth.user.name}</div>
                            <div className="curator-landing-editProfile curator-landing-hero-title-editProfile" onClick={this.handleSaveProfile}> <i className="fas fa-save"></i> Save profile</div>
                        </div>
    
                        <div className="curatorPage-hero-text-edit ">
                             <textarea name="bio"  cols="40" rows="10" value={this.state.bio} onChange={this.handleBioChange}/>          
        
                        </div>
        
                        
                    </div>
                    {/* <!-- ------------------------------------------------- Mobile version -------------------------------------------------------------------------------- --> */}
        
                    <div className="mobile-curatorPage mobile-curatorPage-box">
                        <div className="mobile-curatorPage-hero-title">
                            <div className="curatorPage-hero-title-name curator-landing-hero-title-name">{this.state.auth.user.name}</div>
                            <div className="curator-landing-editProfile curator-landing-hero-title-editProfile" onClick={this.editProfile}> <i className="fas fa-pencil-alt"></i> edit profile</div>
                        </div>
                        <div className="mobile-curatorPage-hero-text">
                             <textarea name="bio"  cols="40" rows="10">
                             {this.state.auth.user.profile.bio}
                             </textarea> 
        
        
        
                        </div>
                        
        
                    </div>
                    {/* <!-- ------------------------------------------------- Mobile version -------------------------------------------------------------------------------- --> */}
        
                </div>
        
        
            </div>
    </div>

  );

  render() {
    
    if (this.state.auth.isAuthenticated) {
      
    
      if (this.state.auth.user.typeOfUser === "user") {
        window.location.replace("/user");
      }
    }


    return (
      <div >
        {!this.state.auth.isAuthenticated ? (
          <a
            className="btn btn-fluid btn-danger btn-lg"
            href="/api/auth/user/google/curator"
          >
            Curator Login with google
          </a>
        ) : (
          !this.state.edit ? this.curatorData() : this.editCuratorData()
        )}
      </div>
    );
  }
}

Curator.propTypes = {
  auth: PropTypes.object.isRequired,
  blogs: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  getCuratorBlogs: PropTypes.func.isRequired,
  updateProfile:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  blogs: state.blogs
});

export default connect(
  mapStateToProps,
  { getCurrentUser, logoutUser, testBlog, getCuratorBlogs,updateProfile }
)(Curator);
