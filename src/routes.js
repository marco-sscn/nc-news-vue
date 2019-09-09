import Topics from "./pages/Topics.vue";
import Articles from "./pages/Articles.vue";
import Dashboard from "./pages/Dashboard.vue";
import SingleArticle from "./pages/SingleArticle.vue";

const routes = [{
  path: "/topics",
  component: Topics
}, {
  path: "/articles",
  component: Articles
}, {
  path: "/dashboard",
  component: Dashboard
}, {
  path: "/articles/:id",
  component: SingleArticle
}];

export default routes;