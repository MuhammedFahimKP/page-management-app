<template>


  <a class="nav-link"
     :class="activeClasses"
     :href="page.link.url"
     :title="`this is ${page.link.text} page`"
  >{{page.link.text}}</a>



</template>



<script>

    export  default {

        props:['page','isActive'],
        computed:{
          activeClasses(){
            return {
              active:this.isActive,
              emphasize:this.isActive
            }

          }
        }


    }

</script>



<style scoped>
  .emphasize {
    color: #08af40 !important;
  }
</style>