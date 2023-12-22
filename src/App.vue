<template>
    <navbar
        :pages="pages"
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
    ></navbar>
    <page-viewer
        :page="pages[activePage]"
    ></page-viewer>
</template>

<script>

   import Navbar from "./components/Navbar.vue";
   import PageViewer from "./components/PageViewer.vue";

   export default {

     components:{
       PageViewer,
       Navbar,

     },
     data(){
       return {
         activePage:0,
         useDarkNavbar:false,



         pages:[
           {
             link:{text:'Home',url: 'home.html'},
             content:'this Home Page',
             title:'Home Page'
           },
           {
             link:{text:'About',url: 'about.html'},
             content:'this About Page',
             title:'About Page'
           },
           {
             link:{text:'Contact',url: 'contact.html'},
             content:'this Contact Page',
             title:'Contact Page'
           }

         ]
       } ;
     },
   }


</script>