<template>
  <div id="content" class="container">
    <h1 class="emphasize">page.title</h1>
    <p>page.content</p>
  </div>
</template>

<script>
  export default{
      created(){
        console.log(this.$route.params)
      }
  }
 </script>

<style scoped>

  .emphasize {
    color: blue !important;
  }

</style>