'use strict';

console.log('Starting server side Lysa Noe app');

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const authentication = require('feathers-authentication');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');
const handler = require('feathers-errors/handler');
//const multer = require('multer');
//const multipartMiddleware = multer();
//const dauria = require('dauria');
//
//// feathers-blob service
//const blobService = require('feathers-blob');
//// Here we initialize a FileSystem storage,
//// but you can use feathers-blob with any other
//// storage service like AWS or Google Drive.
//const fs = require('fs-blob-store');
//const blobStorage = fs(__dirname + '/imageStore');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

let configAuth = app.get('auth');

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware)
  .configure(authentication());
  
// Register a nicer error handler than the default Express one
app.use(handler());
  
module.exports = app;
