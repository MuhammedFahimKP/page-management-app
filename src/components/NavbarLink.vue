<template>

  <li class="nav-item active">
    <router-link
        :to="`/${index}`"
        class="nav-link"
        active-class="active"
        :href="page.link.url"
       :title="`this is ${page.link.text} page`"

    >{{page.link.text}}</router-link>
  </li>


</template>



<script>




    export  default {

        props:['page','isActive','index'],



    }

</script>



