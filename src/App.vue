<template>
    <navbar
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

   export default {

     components:{
       Navbar,


     },


     data(){
       return {
         activePage:0,
         pages:[]
       } ;
     },
     methods:{

        pageCreated(pageObj){
            this.pages.push(pageObj);

       },
     },


   }


</script>