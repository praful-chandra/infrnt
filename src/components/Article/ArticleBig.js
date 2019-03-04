import React, { Component } from "react";
import {Link} from 'react-router-dom';

class ArticleBig extends Component {

  viewArticle = (id)=>{
    window.location.replace("/article/"+id);
  }


  render() {
    if(!this.props.content){
      return null
    }
    return (
      <div className="articleBig">
      
      {!this.props.invert ? (
          <>
          <div className="articleBig-left">
          <img src={this.props.content.cover} alt="" />
        </div>

        <div className="articleBig-right">
          <p className="articleBig-right-title">{this.props.content.title}</p>
          <p className="articleBig-right-desc">{this.props.content.description.substring(0,114)+"..."}</p>
       <Link to={"/article/"+this.props.content._id}  className="articleBig-right-btn">   <button className="btn btn-outline-secondary " >Read more </button></Link> 
        </div>
          </>
        ) : 
        <>
        <div className="articleBig-right articleBig-right-invert">
          <img  className="articleBig-right-invert-img" src={this.props.content.cover} alt="" />
        </div>

        <div className="articleBig-left-invert">
          <p className="articleBig-right-title">{this.props.content.title}</p>
          <p className="articleBig-right-desc">{this.props.content.description.substring(0,114)+"..."}</p>
         <Link to={"/article/"+this.props.content._id} className="articleBig-right-invert-btn" > <button className="btn btn-outline-secondary " >Read more </button></Link> 

        </div>
        </>
     }

      </div>
    );
  }
}

export default ArticleBig;
