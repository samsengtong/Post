const e = require('express')
const Post = require('../models/Post')
const fs = require('fs')
const  postcontroller = {
getAllPost : async(req,res)=>{
    try {
        const posts = await Post.find()
        return res.status(200).json(posts)
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
},
getPostByID: async(req,res)=>{
    try {
        const id = req.params.id
        const post = await Post.findById(id)
        return res.status(200).json(post)
    } catch (error) {  
        res.status(500).json({msg:error.message}) 
        
    }

},
createPost: async(req,res)=>{
    const post = req.body
    const imagename = req.file.filename;
    post.image  = imagename
    try {
        await Post.create(post);
        res.status(200).json({msg:"post created successfully"})

        } catch (error) {
        res.status(200).json({msg:error.message})
    }
},
deletePost:async(req,res)=>{
    const id =req.params.id
    try {
        await Post.findByIdAndDelete(id)
        res.status(200).json({msg:'Delete successfully'})
    } catch (error) {
        res.status(400).json()
    }
},
updatePost:async(req,res)=>{
    const id= req.params.id
    let new_image = ""
    if (req.file){
        new_image = req.file.filename
               
            try {
                fs.unlinkSync('/uploads' + req.body.old_image)

            } catch (error) {
                console.log(err)
            }
    }else{
        const newpost = req.body
        newpost.image = new_image
       try {
           await Post.findByIdAndUpdate(id,newpost)
           res.status(200).json({msg:'posts updated'})
       } catch (error) {
           res.status(400).json({msg:error.message})
       }
            
        }
}

    
    
}



module.exports = postcontroller