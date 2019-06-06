import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "./ProfileHead";
import CuratedStyles from "../CuratedStyles/CuratedStyles";
import CuratedStylesContainer from "../CuratedStyles/CuratedStylesContainer";

import { getCuratorByCode } from "../../actions/curatorActions";
import { getByCuratorCode } from "../../actions/styleActions";
import {getDesignByCuratorCode} from "../../actions/designActions";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: null
    };
  }

  componentDidMount() {
    const curatorCode  = this.props.match.params.id;
    this.props.getCuratorByCode(curatorCode);
    this.props.getByCuratorCode(curatorCode);
    this.props.getDesignByCuratorCode(curatorCode);
  }
  
  render() {
    if (this.props.curator.curatorLoading)
      return (
        <div>
          <h1 className="jumbotron bigger">Loading </h1>
        </div>
      );

    if (this.props.curator.selectedCurator)
      return (
        <div>
          <Head profile={this.props.curator.selectedCurator} />

          {this.props.styles.styleLoading ? ( <h1 className="jumbotron bigger">Style loading ..</h1> ) :
        (
          this.props.styles.curatorStyles.map(
            styleData =>{

              const designs  = this.props.designs.curatorDesigns.filter(design=>{
                if(design.styleCode === styleData.styleCode)
                 return design
                 else
                 return null
              })

             

              return(
                
              <CuratedStylesContainer containerHeader=" " containerFooter="none">
              <CuratedStyles
               content={{...styleData , curatorAvatar : this.props.curator.selectedCurator.avatar}} 
               design={designs}/>
            </CuratedStylesContainer>
            
              )
            }
            
          )
        )
        }

        </div>
      );
    else
      return (
        <div>
          <h1 className="jumbotron bigger">Curator code error </h1>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  curator: state.curator,
  styles : state.styles,
  designs : state.designs
});

export default connect(
  mapStateToProps,
  { getCuratorByCode,
    getByCuratorCode,
    getDesignByCuratorCode }
)(Profile);
