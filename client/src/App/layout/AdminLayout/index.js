import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

import navItems from '../../../menu-items';
import navItems2 from '../../../internalItems';
import navPhasesI from '../../../nav-items/phases';
import navHomeI from '../../../nav-items/home';
import chPhaseItems from '../../../nav-items/changephase';

import ChildNav from './ChildNav';
import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import routes from "../../../routes";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";

import './app.scss';




class AdminLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
          //Get initial depth of current page 
          prevDepth: this.getPathDepth(this.props.location)
        };
      }

 

      
      UNSAVE_componentWillReceiveProps() {
        //When props are updated, update the current path 
        //props supplies us with the location object which has a router location info
        this.setState({ prevDepth: this.getPathDepth(this.props.location) });
      }

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    UNSAVE_componentWillMount() {
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    getPathDepth(location) {
        let pathArr = location.pathname.split("/");
        pathArr = pathArr.filter(n => n !== "");
        return pathArr.length;
      }

    render() {

        const { location } = this.props;
        /*Used to track if the page path did change so when can re-render the routes to apply animation */
        const currentKey = location.pathname.split("/")[1] || "/";
        //Specify the duration of the animation (on enter and on exit)
        const timeout = { enter: 800, exit: 400 };
        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });


        let nav = '';
        switch(currentKey){
            case 'dashboard':
                nav = (<Navigation navI = {navItems2}/>) ;
                break;
            case 'projects':
                nav = (<Navigation navI = {navHomeI}/>) ;
                break;
            case 'project':
                nav = (<Navigation navI = {navPhasesI}/>) ;
                break;
            default:
                nav = (<Navigation navI = {navHomeI}/>) ;
        }
            
        const currentKey2 = location.pathname.split("/")[2] || "/";
        let childNav = '';
        
        switch(currentKey2){
            case 'changePhase':
                childNav = (<ChildNav navI = {chPhaseItems} />);
                break;
            default:
                childNav = '';
        }


        

        return (
            <Aux>
                <TransitionGroup>
                    <CSSTransition
                        key={currentKey}
                        timeout={timeout}
                        classNames="pageSlider"
                        mountOnEnter={false}
                        unmountOnExit={true}
                    >
                <Fullscreen enabled={this.props.isFullScreen}>
                    {nav}
                    <NavBar />
                    <div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    {childNav}
                                    <br/>
                                    <Breadcrumb />
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                        <div className={this.getPathDepth(location) - this.state.prevDepth >= 0? "left": "right"}>
                                            <Suspense fallback={<Loader/>}>
                                                <Switch location={location}>
                                                    {menu}
                                                    <Redirect from="/" to={this.props.defaultPath} />
                                                </Switch>
                                            </Suspense>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fullscreen>
                </CSSTransition>
                </TransitionGroup>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        isFullScreen: state.isFullScreen,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU})
    }
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout)));