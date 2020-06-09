const routes = require('express').Router();

const userRoute = require('./user');
const projectRoute=require('./project');
const buildRoute=require('./build');
const moduleRoute=require('./module');
const changerequirmentsRoute=require('./change_requirments');
const correctivemaintenanceRoute=require('./corrective_maintenanace');
const adaptivemaintenanceRoute=require('./adaptive_maintenance');
const perfectivemaintenanceRoute=require('./perfective_maintenance');
const taskRoute=require('./task');
const defectRoute=require('./defect');
const reportRoute=require('./reports');
const teamRoute=require('./team');
const testRoute=require('./test');



routes.use('/', userRoute);
routes.use('/',projectRoute);
routes.use('/',buildRoute);
routes.use('/',moduleRoute);
routes.use('/',changerequirmentsRoute);
routes.use('/',correctivemaintenanceRoute);
routes.use('/',adaptivemaintenanceRoute);
routes.use('/',perfectivemaintenanceRoute);
routes.use('/',taskRoute);
routes.use('/',defectRoute);
routes.use('/',reportRoute);
routes.use('/',teamRoute);
routes.use('/',testRoute);
module.exports = routes;