const express = require("express")
const routes = express.Router()
const WorkController = require("../src/Controllers/WorkController")
const WasherController = require("./Controllers/WasherController")
const Admincontroller = require("./Controllers/Admincontroller")
const MaintenanceController = require("./Controllers/MaintenanceController")

const app = express()

//Work Routes
routes.post('/work', WorkController.store)
routes.get('/work', WorkController.index)
routes.put('/work/:id', WorkController.change)
routes.delete('/work/:id', WorkController.delete)

//Washer routes

routes.post('/washer', WasherController.store)
routes.get('/washer', WasherController.index)
routes.put('/washer/:id', WasherController.change)
routes.delete('/washer/:id', WasherController.delete)

//Admin Routes

routes.post('/admin',Admincontroller.store)
routes.get('/admin',Admincontroller.index)
routes.put('/admin/:id', Admincontroller.change)

//Maintenance routes

routes.post('/maintenance', MaintenanceController.store)
routes.get('/maintenance', MaintenanceController.index)
routes.put('/maintenance/:id', MaintenanceController.change)
routes.delete('/maintenance/:id', MaintenanceController.delete)

module.exports = routes