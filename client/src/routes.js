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
const module= React.lazy(() => import('./phases/Module/module'));
const createmodule = React.lazy(() => import('./phases/Module/create'));
const profile = React.lazy(() => import('./components/Account/Profile'));
const settings = React.lazy(() => import('./components/Account/Settings'));
const envAdaptation = React.lazy(() => import('./phases/Changephase/EnvironmentalAdaptation'));
const AdaptationM =React.lazy(() => import('./phases/Changephase/AdoptativeMaintenance/AdoptativeMaintenance'));
const faultRepairs = React.lazy(() => import('./phases/Changephase/FaultRepairs'));
const FaultRepairs=React.lazy(() => import('./phases/Changephase/FaultRepairs/faultpairs'));
const funAddition = React.lazy(() => import('./phases/Changephase/FunctionalityAddition'));
const perfectiveM = React.lazy(() => import('./phases/Changephase/PerfectiveMaintenance/PerfectiveMaintenance'));
const taskManagemnt = React.lazy(() => import('./phases/TaskManagement/create'));
const TaskManagement=React.lazy(() => import('./phases/TaskManagement/Task'));
const testphase =React.lazy(()=> import('./phases/Testphase/create'));
const defectManagement =React.lazy(()=> import('./phases/DefectManagement/create'));
const Defect =React.lazy(()=> import('./phases/DefectManagement/Defect'));


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
    { path: '/project/module', exact: true, name: 'Module', component: module },
    { path: '/project/module/create', exact: true, name: 'Create Module', component: createmodule},

    { path: '/project/build', exact: true, name: 'Build', component: build },
    { path: '/project/build/create', exact: true, name: 'Create Build', component: createBuild },
    { path: '/project/changePhase', exact: true, name: 'Invite', component: changephase },
    { path: '/project/changePhase/environmentalAdaptation/create', exact: true, name: 'Invite', component: envAdaptation },
    { path: '/project/changePhase/environmentalAdaptation', exact: true, name: 'Invite', component: AdaptationM },
    { path: '/project/changePhase/faultRepairs/create', exact: true, name: 'Invite', component: faultRepairs },
    { path: '/project/changePhase/faultRepairs', exact: true, name: 'Invite', component: FaultRepairs },
    { path: '/project/changePhase/functionatilityAddition', exact: true, name: 'Invite', component: perfectiveM },
    { path: '/project/changePhase/functionatilityAddition/create', exact: true, name: 'Invite', component: funAddition },
    { path: '/profile', exact: true, name: 'Invite', component: profile },
    { path: '/settings', exact: true, name: 'Invite', component: settings },
    { path: '/project/createTask', exact: true, name: 'Task', component: taskManagemnt },
    { path: '/project/Task', exact: true, name: 'Task', component: TaskManagement },
    { path: '/project/createTest', exact: true, name: 'Test', component: testphase },
    { path: '/project/createDefect', exact: true, name: 'Test', component: defectManagement },
    { path: '/project/Defect', exact: true, name: 'Test', component: Defect },


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