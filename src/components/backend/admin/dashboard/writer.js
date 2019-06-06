import React, { Component } from 'react'
import {connect} from "react-redux";
import {getAllWriters} from "../../../../actions/writerActions";

class writer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: {
        cards: true,
        profile: null,
        addProfile : false
      },
      newProfile : {
        name : "",
        email : "",
        password : ""
      },
      allWriters :[]
    };
  }

  componentDidMount(){
    this.props.getAllWriters();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.writer){
      if(nextProps.writer.allWriters){
        this.setState({
          allWriters : nextProps.writer.allWriters
        })
      }
    }
  }

  renderCards = ()=>{
    let data= []
    
    this.state.allWriters.map(writerData=>
      data.push(
        <div className="col">
        <div className="profile-card">
            <div className="profile-card-body">
              <div className="profile-card-body-left" >
              <img src={writerData.avatar} className="profile-card-body-left-avatar" alt=""/>
              <div className="profile-card-body-left-content">
              <div className="profile-card-body-left-name">
                  {writerData.name}
                </div>  
                <div className="profile-card-body-left-details">
                <ul>
                  <li><i class="fas fa-blog"><div>50 <br/> <span>{writerData.blogs.length}</span></div></i></li>
                  <li><i class="fas fa-eye"> <div>50  <br/> <span>views</span></div> </i></li>
                  <li><i class="fas fa-trophy"> <div>50  <br/> <span>others</span></div> </i></li>  
                </ul>
                <div className="profile-card-body-left-details-btn">
                  <button className="btn btn-outline-light"><span>View More</span></button>
                </div>
                </div>
              </div>
              </div>
              <div className="profile-card-body-right">
                <div className="profile-card-body-right-name">
                {writerData.name}
                </div>  
                <div className="profile-card-body-right-description">
                 
      
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
  
    return data
  }   

  render() {
    return (
      <div className="adminDash container">
      {this.state.view.addProfile ? (
        <div className="adminDash-addProfile">
          <div className="container authPage-signIn adminAuth adminDash-addProfile-container">
          <i class="fas fa-times-circle adminDash-addProfile-close" style={{cursor : "pointer"}} onClick={this.viewCards}></i>              
    
          <h1>Add new Writer</h1>
    
          <form className="authPage-signIn-form" onSubmit={this.handleFormSubmit}>
      <input type="email" name="curatorEmail" placeholder="email" id="curatorEmail" onChange={this.inputChanged} required value={this.state.newProfile.email}/>
      <input type="password" name="curatorPassword" placeholder="password" id="curatorPassword" onChange={this.inputChanged} required value={this.state.newProfile.password}/>
      <input type="text" name="curatorName" placeholder="Name" id="curatorName" onChange={this.inputChanged} required value={this.state.newProfile.name}/>
    
      <input type="submit" className="authPage-signIn-form-btn adminAuth-btn" value="Log In"/>
    </form>
          </div>
    
        </div>
      ) : null}

      <h3>Writers</h3>
      <div>
      <div className="row">
   {this.renderCards()}
      </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state=>({
  writer : state.writer
})


export default connect(mapStateToProps,{getAllWriters})(writer)