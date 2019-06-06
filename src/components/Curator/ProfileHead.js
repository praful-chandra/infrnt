import React,{Component} from "react";
import {connect} from "react-redux";

import {followCurator,getCurrentUser} from "../../actions/userActions";
class ProfileHead extends Component{


  constructor(props) {
    super(props)
  
    this.state = {
       follow : false,
   
    }
  }

  componentDidMount(){

    this.props.getCurrentUser();

    
   
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user){

      if(this.props.profile.subscribers.filter(subData =>{
        return (subData.userId === nextProps.user.user._id)
      }).length >0){
        this.setState({
            follow : true
        })
      }else{
        this.setState({
          follow : false
      })
      }

    }
    
  }

  

     handleFollow = (e)=>{
            e.preventDefault();

            if(!this.props.user.isAuthenticated){
              alert("login to follow");
            }else{
             this.setState({
               follow : !this.state.follow
             })
             this.props.followCurator(this.props.profile.curatorCode)
            }
           
    }

 render(){
  if(this.state.user === null){
    this.setState({
      user : this.props.user.user
    })

  }


  
  return (
    <div>
      <div className="curatorPage-hero container">
        <div className="row">
          <div className="col-md-5 mobile-curatorPage-hero-img">
            <div className="curatorPage-hero-image-wrapper">
              <img src={this.props.profile.avatar} alt="" />
            </div>

            <ul className="curatorPage-hero-image-dots">
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="col-md-7 curatorPage-hero-right-desktop">
            <div className="curatorPage-hero-title ">
              <div className="curatorPage-hero-title-name">
                {this.props.profile.name}
              </div>
            {this.state.follow ? 
              <button className="curatorPage-hero-title-followingBtn" onClick={this.handleFollow}>
              following
            </button> : 
            <button className="curatorPage-hero-title-followbtn" onClick={this.handleFollow}>
            Follow
          </button>}
            </div>

            <div className="curatorPage-hero-divider curatorPage-hero-divider-top">
              {" "}
            </div>
            <div className="curatorPage-hero-text ">
              <textarea
                name="bio"
                cols="40"
                rows="10"
                disabled
                value={this.props.profile.profile}
                className="curatorPage-hero-text-p1"
              />
            </div>
            <div className="curatorPage-hero-divider curatorPage-hero-divider-bottom">
              {" "}
            </div>
            <table className="curator-landing-hero-table">
              <tbody>
                <tr>
                  <td>Styles Curated</td>
                  <td>{this.props.profile.styles.length}</td>
                  <td>Followers</td>
                  <td>{this.props.profile.subscribers.length}</td>
                </tr>
                <tr>
                  <td>Labels</td>
                  <td>null</td>
                  <td>views</td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>Designs</td>
                  <td>{this.props.profile.designs.length}</td>
                  <td>Designs sold</td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>Accessories</td>
                  <td>null</td>
                  <td>total sales amount</td>
                  <td>null</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ------------------------------------------------- Mobile version --------------------------------------------------------------------------------  */}

          <div className="mobile-curatorPage mobile-curatorPage-box">
            <div className="mobile-curatorPage-hero-title">
              <div className="curatorPage-hero-title-name">
              {this.props.profile.name}
              </div>
              {this.state.follow ? 
              <button className="curatorPage-hero-title-unFollowbtn" onClick={this.handleFollow}>
              Un follow
            </button> : 
            <button className="curatorPage-hero-title-followbtn" onClick={this.handleFollow}>
            Follow
          </button>}
            </div>
            <div className="mobile-curatorPage-hero-text">
              <textarea
                className="curatorPage-hero-text-p1"
                value={this.props.profile.profile}
                disabled

              />
            </div>
            <table className="curator-landing-hero-table ">
              <tbody>
                <tr>
                  <td>Styles Curated</td>
                  <td>{this.props.profile.styles.length}</td>
                  <td>Followers</td>
                  <td>{this.props.profile.subscribers.length}</td>
                </tr>
                <tr>
                  <td>Labels</td>
                  <td>null</td>
                  <td>views</td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>Designs</td>
                  <td>{this.props.profile.designs.length}</td>
                  <td>Designs sold</td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>Accessories</td>
                  <td>null</td>
                  <td>total sales amount</td>
                  <td>null</td>
                </tr>
              </tbody>
            </table>
          
            <br />
          </div>
          {/* ------------------------------------------------- Mobile version --------------------------------------------------------------------------------  */}
        </div>
      </div>
    </div>
  );
 }
}

const mapStateToProps = state =>({
user : state.user
})

export default connect (mapStateToProps , {followCurator,getCurrentUser})(ProfileHead)