import {createRouter,createWebHashHistory} from 'vue-router';
import pageViewer from "./components/PageViewer.vue";
import CreatPage from "./components/CreatPage.vue";


const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/:index?',component:pageViewer},
        {path:'/create',component:CreatPage}
    ]
});

export default router;

