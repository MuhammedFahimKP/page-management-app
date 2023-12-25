import {createRouter,createWebHashHistory} from 'vue-router';
import PageViewer from "./views/PageViewer.vue";
import CreatPage from "./views/CreatPage.vue";
import Pages from "./views/Pages.vue";
import PagesList from "./views/PagesList.vue";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/:index?',component:PageViewer,props:true},
        {
            path:'/pages',
            component:Pages,
            children:[
                {path:'',component:PagesList},
                {path:'create',component:CreatPage}
            ]
        },

    ]
});

export default router;

