'use strict';

const hooks       = require('./hooks');
const service     = require('feathers-mongoose');
const fileUpload  = require('express-fileupload');
const fs          = require('file-system');


const getImagesModel = require('../getImage/getImage-model');

module.exports = function() {
  const app = this;

  app.use('/imagesInfo', service({Model: getImagesModel}));
  var imagesInfoService = app.service('imagesInfo');
  
  app.use(fileUpload());
   
  app.post('/uploadImages', function(req, res) {
      console.log('UploadImages: request');//:, req);
            
      var fileName = req.files ? req.files.file.name : null;
      const binaryData = req.body.data ? JSON.parse(req.body.data) : null;

      console.log('UploadImages: by, fileName, binary:', process.env.USER, fileName, binaryData ? 'isBinary' : null );
      
      // TODO: Must check here if permissions, filetypes, etc are correct !!!
      // TODO: check on existing file name ?
      // TODO: save to current ablbum
      // TODO: fix lastUpload
      // TODO: respond to client: status, done, etc

      if (binaryData) {
        
                // Get the data
                const buffer = new Buffer(binaryData, 'binary');
                
                var caption = fileName;

                // Create the file name
               const uploadTo = process.cwd() + '/public/imageStore/';
               fileName = uploadTo + req.body.fileName;
               
               console.log('Starting file write for: ' + fileName);
               
               fs.writeFile(fileName, buffer, function (err) {
                    if (err) {
                        console.log('Err bij opslaan', err);
                        return false;
                    } else {
                        console.log('File uploaded: ' + fileName);
                        
                        // Update the database
                        imagesInfoService.create({
                            imageId: fileName,
                            caption: caption,
                            lastUpload: 1,
                            isOriginal: 1,
                            albums: ['__general'],
                            inSlider: 0,
                            visibility: 0 
                        }).then(function(data){
                            //console.log('Result of save to db:', data._id, data.imageId, data.createdAt);
                            res.status(200).send({
                                status: 200,
                                _id: data._id,
                                text: 'File \'' + data.imageId + '\' saved'
                            });
                        });
                        return true;
                    }
                });

      } else if (fileName) {
        
          // Move the file to the images store
          req.files.file.mv(process.cwd() + '/public/imageStore/' + fileName, function(err){
              if (err) {
                  //console.log('Error during save to db:', fileName, error);
                  res.status(500).send({
                      status: 500,
                      error: err
                  });
              } else {
                  console.log('File uploaded:', fileName);
                  
                  // Update the database
                  imagesInfoService.create({
                      imageId: fileName,
                      caption: fileName,
                      lastUpload: 1,
                      isOriginal: 1,
                      albums: ['__general'],
                      inSlider: 0,
                      visibility: 0 
                  }).then(function(data){
                      //console.log('Result of save to db:', data._id, data.imageId, data.createdAt);
                      res.status(200).send({
                          status: 200,
                          _id: data._id,
                          text: 'File \'' + data.imageId + '\' saved'
                      });
                  });
              }
              return;
          });
          
      } else {
          res.status(201).send('Nothing to do');
      }
  });
  
  
  
  //const options = {
  //  Model: uploadImages,
  //  paginate: false
  //  //paginate: {
  //  //  default: 5,
  //  //  max: 25
  //  //}    
  //};

//  // Upload Service with multipart support
//  app.use('/uploadImages',
//  
//      // multer parses the file named 'uri'.
//      // Without extra params the data is
//      // temporarely kept in memory
//      multipartMiddleware.any(),//single('uri'),
//  
//      // another middleware, this time to
//      // transfer the received file to feathers
//      function(req, res, next){
//          console.log('REQST', req.files, req.file);
//          req.feathers.file = req.files;
//          next();
//      },
//      blobService({Model: blobStorage})
//      
//      //function (req, res, next) {
//      //    console.log('REQST', req.file);
//      //}
//  );
//
//  // before-create Hook to get the file (if there is any)
//  // and turn it into a datauri,
//  // transparently getting feathers-blob
//  // to work with multipart file uploads
//  const uploadImagesService = app.service('/uploadImages');
////console.log('UPLOADService', uploadImagesService);  
//  uploadImagesService.before({
//      create: [
//          function(hook) {
//              if (!hook.data.uri && hook.params.file){
//                  const file = hook.params.file;
//                  const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
//                  hook.data = {uri: uri};
//              }
//          }
//      ]
//  });
//
//  // Set up our before hooks
//  //uploadImagesService.before(hooks.before);
//
//  // Set up our after hooks
//  //uploadImagesService.after(hooks.after);
};
