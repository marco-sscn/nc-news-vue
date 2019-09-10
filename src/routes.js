import Topics from "./pages/Topics.vue";
import Articles from "./pages/Articles.vue";
import Dashboard from "./pages/Dashboard.vue";
import SingleArticle from "./pages/SingleArticle.vue";
import Login from "./pages/Login.vue";

const routes = [
  {
    path: "/topics",
    component: Topics
  },
  {
    path: "/articles",
    component: Articles
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/articles/:id",
    component: SingleArticle
  },
  {
    path: "/topics/:slug",
    component: Articles
  },
  {
    path: "/login",
    component: Login
  }
];

export default routes;
