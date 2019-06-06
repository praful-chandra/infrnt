import React, { Component } from 'react'
import {connect} from "react-redux";

class dashboard extends Component {
    render() {
        return (
            <div className="adminDash">
                     <div className="adminDash-leftPanel">
        <div className="adminDash-leftPanel-profile">

        <div className="adminDash-leftPanel-profile-avatar"> 
        {/* <img src={this.props.admin.avatar} alt=""/> */}
             </div>
        <div className="adminDash-leftPanel-profile-name"> TEAM LEADER </div>

        </div>

        <div className="adminDash-leftPanel-links">
                <ul>
                    
                </ul>
        </div>
      </div>

      <div className="adminDash-right">
          HI
      </div>

            </div>
        )
    }
}

const mapStateToProps = state=>({
tl : state.tl
})

export default connect(mapStateToProps,{})(dashboard)