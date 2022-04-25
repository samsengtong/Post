<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm-10 class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>
                        Add New Post
                    </v-card-title>
                    <v-divider>

                    </v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field v-model="post.title" label="title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="category" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <v-textarea label="content" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules">
                        </v-textarea>    

                        <v-file-input  @change="selectFile" :rules="rules" show-size counter multiple label="select image">
                        </v-file-input>           
           
                        <v-btn type="submit" class="mt-3" color="primary">Add Post</v-btn>

                    </v-form>
                </v-card>
            </v-col>
            
        </v-row>
    </v-container>
</template>
<script>
import API from "../api"
export default {
    name:'addpost',
    data(){

        return{
            rules:[(value)=>!!value||"The field is required"],
            post:{
                title:'',
                content:'',
                category:'',
                image:''

                
            },
            image:''

        }

    },
    methods: {
        
         selectFile(file){
                this.image = file[0];
            },
        
     
        async submitForm(){
              const formdata = new FormData();
              formdata.append("image", this.image);
              formdata.append("title",this.post.title);
              formdata.append('category',this.post.category);
              formdata.append('content',this.post.content);
              //alert(this.post.title)
              if(this.$refs.form.validate()){
                   const res= await API.addPost(formdata)
                   console.log(res.data)
                   this.$router.push({name:'Home',params: {message:res.msg}})

              }
              
              
              }
    }
}
</script>