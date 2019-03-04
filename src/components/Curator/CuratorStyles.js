import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../common/Loading';

import { getCurrentUser } from "../../actions/authActions";
import { getCuratorStyles } from "../../actions/curatorActions";


 class CuratorStyles extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }

    }

    componentDidMount(){

        this.props.getCurrentUser();
        this.props.getCuratorStyles({curatorId : this.props.auth.user._id});
        
            if(this.props.auth.user){
                if(this.props.auth.user.typeOfUser !== "curator"){
                    window.location.replace("/");
                }
            }
    }


    styleHead = (style)=>(
        <>
         {/* <!-- ------------------------------------------------- Desktop version -------------------------------------------------------------------------------- --> */}

    <div className="curator-landing-2-trending-wrapper wrapper-trending">
    <div className="curator-landing-trending-info">
        {style.name}
    </div>
    <div className="curator-landing-2-trending">
        <ul>
            <li>Get unique link of style</li>
            <li>Add Collaborators</li>
            <li>Add more photos/videos</li>
            <li>Check Stats</li>
            <li onClick={()=>window.location.replace("/curatorb/styles/edit/"+style._id)}><i className="fas fa-pencil-alt"></i> Edit</li>

        </ul>




    </div>
</div>
{/* <!-- ------------------------------------------------- Desktop version -------------------------------------------------------------------------------- --> */}
{/* <!-- ------------------------------------------------- Mobile version -------------------------------------------------------------------------------- --> */}

<div className="mobile-curatorPage">
    <div className="mobile-wrapper-trending mobile-wrapper-trending-2">

            <div className="mobile-curator-landing-trending-info">
                   {style.name}

                </div>

                <div className="mobile-curator-landing-2-trending">
                        <ul>
                            <li>Get unique link of style</li>
                            <li>Add Collaborators</li>
                            <li>Add more photos/videos</li>
                            <li>Check Stats</li>
                            <li onClick={()=>window.location.replace("/curatorb/styles/edit/"+style._id)}><i className="fas fa-pencil-alt"></i>Edit</li>

                        </ul>
            
            
            
            
                    </div>

    </div>


</div>




{/* <!-- ------------------------------------------------- Mobile version -------------------------------------------------------------------------------- --> */}
</>
    )

    styleCard = ()=>(
        <div className="col ">
            <div className="curator-landing-curated-styles-card">
                    <div className="curator-landing-curated-styles-card-image">
                            <img src={require('../../images/curator/style2.png')} alt="" />
                        </div>
                        <div className="curator-landing-curated-styles-card-info">
                           <div className="curator-landing-curated-styles-card-info-name">Design Description</div>
                           <div className="curator-landing-curated-styles-card-info-desc">Name of the label</div>
                           <div className="curator-landing-curated-styles-card-info-price">SP - ₹ 2,500</div>
                           <div className="curator-landing-curated-styles-card-info-link">Get unique link of design</div>
                        </div>
            </div>
         
        </div>
    )

addStyle=()=>{
    window.location.replace("/curatorb/styles/add");
}
    

  render() {

    if(this.props.curator.isCuratorLoading){
        return (  <Loading />   )
    }else{
    return (
      <div>
         <div className="addBtn" onClick={this.addStyle}>
         <i className="fas fa-plus"></i>
         </div>
        
       {this.props.curator.curatorStyles ? (
           this.props.curator.curatorStyles.map(style=>{
            return(
                <>
             {this.styleHead(style)}
             <div className="row curator-landing-curated-styles-wrapper">
                 
             </div>
             </>
            )
        })
       ) : ( <h3>ADD styles</h3> )}

   
    
      </div>
    )}
  }
}

CuratorStyles.propTypes = {
    auth : PropTypes.object.isRequired,
    getCurrentUser : PropTypes.func.isRequired,
    getCuratorStyles : PropTypes.func.isRequired
}

const mapStateToProps = (state)=>(
 {   auth : state.auth,
    curator : state.curator
})

export default connect(mapStateToProps,{getCurrentUser,getCuratorStyles})(CuratorStyles);
