<template>
    <v-container>
        <v-row>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img  :src="`/${post.image}`"></v-img>
                    
                            <v-card-actions class="pb-0">
                                <v-row class="mt-1 mx-1">
                                    <v-col sm="2">
                                        <v-btn small outlined color="primary">{{post.category}}</v-btn>
                                    </v-col>
                                    <v-col sm="10" class="d-flex justify-end">
                                            <v-btn color="success" text :to="{name:'edit', params:{id:post._id}}">Edit</v-btn>
                                             <v-btn color="red" @click="removePost(post._id)">Delete</v-btn>
                                    </v-col>
                                </v-row>
                                
                                
                            </v-card-actions>
                            <v-row>
                                    <v-card-title class="headline">
                                     {{post.title}}
                                    </v-card-title>
                                    <v-card-text class="py-0">
                                    <p>{{post.content}}</p>
                </v-card-text>
                            
                            </v-row>
                                
                                        
               
            </v-card>

            </v-col>
        </v-row>
    </v-container>
 </template>

<script>
import API from "../api"
export default {
  name:"post",
  data(){
    return {
      post:[]
    }

  },
  async created(){
    const id = this.$route.params.id
    this.post = await API.getPostByID(id)
    console.log(this.post)
  },
  methods:{
     
  async  removePost(){
      const id = this.$route.params.id
      const res = await API.removePost(id)
      this.$router.push({path:'/',params: {delmsg:res.msg}})
    }
  }  
};
</script>
