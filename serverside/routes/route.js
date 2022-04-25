const express = require('express')
const postcontroller = require('../conreollers/postsController')
const postrouter = express.Router()
const multer = require('multer')
let storage = multer.diskStorage({
      destination: function(req,file,cb){
            cb(null,'./uploads');
      },
      filename: function(req,file,cb){
            cb(null, file.filename + "_"+ Date.now + "_" + file.originalname);     
      }

});
let upload = multer({
      storage:storage
}).single('image')
postrouter.route('/post')
          .get(postcontroller.getAllPost)
          .post(upload,postcontroller.createPost)
postrouter.route('/post/:id')
          .get(postcontroller.getPostByID)
          .delete(postcontroller.deletePost)
          .put(postcontroller.updatePost)
module.exports = postrouter
