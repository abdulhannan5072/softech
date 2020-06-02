import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

//own code

const Projects = React.lazy(() => import('./phases/Projects/Projects'));
const createProject = React.lazy(() => import('./phases/Projects/Create'));
const users = React.lazy(() => import('./components/Users/Users'));
const invite = React.lazy(() => import('./components/Users/Invite'));
const build = React.lazy(() => import('./phases/Build/Build'));
const changephase = React.lazy(() => import('./phases/Changephase/Changephase'));
const createBuild = React.lazy(() => import('./phases/Build/create'));
const profile = React.lazy(() => import('./components/Account/Profile'));
const settings = React.lazy(() => import('./components/Account/Settings'));
const envAdaptation = React.lazy(() => import('./phases/Changephase/EnvironmentalAdaptation'));
const faultRepairs = React.lazy(() => import('./phases/Changephase/FaultRepairs'));
const funAddition = React.lazy(() => import('./phases/Changephase/FunctionalityAddition'));
const taskManagemnt = React.lazy(() => import('./phases/TaskManagement/create'));

// end

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const routes = [
    { path: '/projects', exact: true, name: 'Projects', component: Projects },
    { path: '/projects/create', exact: true, name: 'Create new Project', component: createProject },
    { path: '/users', exact: true, name: 'Users', component: users },
    { path: '/users/invite', exact: true, name: 'Invite', component: invite },
    { path: '/project/build', exact: true, name: 'Build', component: build },
    { path: '/project/build/create', exact: true, name: 'Create Build', component: createBuild },

    { path: '/project/changePhase', exact: true, name: 'Invite', component: changephase },
    { path: '/project/changePhase/environmentalAdaptation', exact: true, name: 'Invite', component: envAdaptation },
    { path: '/project/changePhase/faultRepairs', exact: true, name: 'Invite', component: faultRepairs },
    { path: '/project/changePhase/functionatilityAddition', exact: true, name: 'Invite', component: funAddition },
    { path: '/profile', exact: true, name: 'Invite', component: profile },
    { path: '/settings', exact: true, name: 'Invite', component: settings },
    { path: '/project/createTask', exact: true, name: 'Task', component: taskManagemnt },


    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;