import Topics from "./pages/Topics.vue";
import Articles from "./pages/Articles.vue";
import Dashboard from "./pages/Dashboard.vue";

const routes = [{
  path: "/topics",
  component: Topics
}, {
  path: "/articles",
  component: Articles
}, {
  path: "/dashboard",
  component: Dashboard
}];

export default routes;