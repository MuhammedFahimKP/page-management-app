<template>
    <navbar
        :pages="pages"
        :active-page="activePage"
    ></navbar>


    <router-view></router-view>
<!--    <page-viewer-->
<!--        v-if="pages.length > 0"-->
<!--        :page="pages[activePage]"-->
<!--    ></page-viewer>-->


<!--  <creat-page-->
<!--      @page-created="pageCreated"-->
<!--  ></creat-page>-->

</template>

<script>

   import Navbar from "./components/Navbar.vue";
   import PageViewer from "./components/PageViewer.vue";
   import CreatPage from "./components/CreatPage.vue";
   export default {

     components:{
       PageViewer,
       Navbar,
       CreatPage,

     },

     created() {
       this.getPages()
       this.$bus.$on('navbarLinkActivated', (index)=> {

           this.activePage = index;
       })
     },
     data(){
       return {
         activePage:0,
         pages:[]
       } ;
     },
     methods:{
        async getPages() {
           let res  =  await fetch('pages.json');
           let data =  await  res.json();
           this.pages = data;
        },
        pageCreated(pageObj){
            this.pages.push(pageObj);

       },
     },


   }


</script>