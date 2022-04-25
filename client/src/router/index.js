import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Addpost from "../views/Addpost.vue";
import Post from "../views/Post.vue";
import EditPost from "../views/EditPost.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component:About
  },
  {
  path:"/addpost",
  name:'addpost',
  component: Addpost
  },
  {
    path:'/post/:id',

    name:'post',
    component:Post
  },
  {
    path:'/edit/:id',
    name:'edit',
    component:EditPost
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
