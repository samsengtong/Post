import axios from "axios"
let url = "/api/post"
export default class API{
static async getAllPost(){
    const res = await axios.get(url)

    return res.data
    

}


static async getPostByID(id){
    const res = await axios.get(`${url}/${id}`)
    return res.data  
}


static async addPost(post){
 const res = await axios.post(url,post)
 return res.data
}
static async updatePost(id,post){
    const res = await axios.put(`${url}/${id}`,post)
 return res.data
}
static async removePost(id){
    const res = await axios.delete(`${url}/${id}`)
    return res.data
}


}