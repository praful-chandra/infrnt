import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch ,Redirect} from "react-router-dom";
import { Provider } from "react-redux";
import ProtectedRoute from './components/common/ProtectedRoute';
import classnames  from 'classnames';

import store from "./store";

import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import CuratorNav from './components/Navbar/CuratorNav';
import Reports from "./components/Reports";
import Styles from "./components/Styles";
import CreateBlog from "./components/Admin/CreateBlog";
import Curator from "./components/Curator/Curator";
import ViewArticle from "./components/Article/ViewArticle";
import CuratorProfile from './components/Curator/Profile';
import StylePage from './components/Curator/StylePage';
import CuratorStyles from './components/Curator/CuratorStyles';
import AddStyle from './components/Curator/AddStyle';
import EditStyle from './components/Curator/EditStyle'

import User from "./components/users/Users";
import UserLogin from "./components/users/Login";



class App extends Component {

   redirect = ()=>{
   return <Redirect to="/reports" />
  }

  render() {
    return (
      <Provider store={store}>
          <Router>
            <div>
            {!window.location.pathname.includes("curatorb") ? <Navbar /> : <CuratorNav/>} 

              <Route exact path="/" component={this.redirect} />
              <Route exact path="/reports" component={Reports} />
              <Route exact path="/styles" component={Styles} />
              <Route exact path="/curatorb" component={Curator} />
              <Route exact path="/users/login" component={UserLogin} />
              <Route exact path="/article/:id" component={ViewArticle}/>
              <Route exact path="/profile/curator" component={CuratorProfile} />
              <Route exact path="/curator/style" component={StylePage} />
              <Switch>
              <ProtectedRoute exact path="/users" component={User} />
            <ProtectedRoute exact path="/curatorb/blog" component={CreateBlog} />
            <ProtectedRoute exact path="/curatorb/styles" component={CuratorStyles} />
            <ProtectedRoute exact path="/curatorb/styles/add" component={AddStyle} />
            <ProtectedRoute exact path="/curatorb/styles/edit/:styleId" component={EditStyle} />

            </Switch>
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
