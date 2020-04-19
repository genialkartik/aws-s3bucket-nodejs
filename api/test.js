const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');


function Test() {};

//configuring the AWS environment
AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY_ID",
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY"    
});
var s3 = new AWS.S3();
Test.prototype = {
  
    test : function(file){
      // upload all
      if(file.length){
        for(var i =0; i < file.length; i++){
          fileUP(file[i]); 
        }
      }else{
        fileUP(file);
    }

      // call fileUP() to upload 1 at once
      function fileUP(fyl){
        var filename = fyl.name;
        var tempPath = './api/data'+filename;
        fyl.mv(tempPath, function(err){
          if(err){
            console.log("file.mv() err");
          }
        fs.readFile(tempPath, function(err, data){
          if(err){
            console.log("fs.readFile() err");
          }
        var params = {
          Bucket: 'BUCKET_NAME',
          Body: data,
          Key: Date.now()+filename
        };
    
        s3.upload(params, function (err, data) {
          if (err) {
            console.log("Error in s3.upload", err);
          }
          if (data) {
            /*
            fs.unlink(tempPath, (err) => {
              if (err) {
                console.error(err)
                return
              }
              else{
                console.log("file removed");
              }
            });
            */
            console.log("Uploaded in:", data.Location);
          }
        });
      });
      });
      }
      
  },

 
  test2: function(callback){
    
   var params = {
    Bucket: 'BUCKET_NAME'
  };

  s3.listObjectsV2(params, function(err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      callback (data.Contents);
    }
  });
  
},

  deleteFile: function(FilenameToDel) {
    var bucketInstance = new AWS.S3();
    var params = {
        Bucket: 'BUCKET_NAME',
        Key: FilenameToDel
    };
    bucketInstance.deleteObject(params, function (err, data) {
        if (data) {
            console.log("File deleted successfully");
        }
        else {
            console.log("Check if you have sufficient permissions : "+err);
        }
    });
}

}


module.exports = Test;

