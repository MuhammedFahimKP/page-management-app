<template>

  <li class="nav-item active">
    <a class="nav-link"
       :class="activeClasses"
       :href="page.link.url"
       :title="`this is ${page.link.text} page`"
       @click.prevent = "$bus.$emit('navbarLinkActivated',indexer)"
    >{{page.link.text}}</a>
  </li>


</template>



<script>




    export  default {

        props:['page','isActive','indexer'],
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