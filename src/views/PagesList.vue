<template>
  <h3>Pages</h3>

  <div class="text-end">
    <router-link
        to="/pages/create"
        class="btn btn-primary"
    >New Page</router-link>
  </div>

  <table class="table  table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link Text</th>
        <th>Is Published</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(page,index) in  $pages.getAllPages()"
        :key="index"
        @click="goToPage(index)"
      >

            <td>{{page.title}}</td>
            <td>{{page.link.text}}</td>
            <td>{{page.published ? 'Yes' : 'No'}}</td>


      </tr>
    </tbody>
  </table>
</template>


<script setup>

  import  {ref,reactive,inject} from "vue";
  import {useRouter} from "vue-router";

  const data = reactive({counter:0})
  const $pages = inject('$pages');

  const router = useRouter()

  function goToPage(index) {
    router.push({path:`/pages/${index}/edit`})
  }




</script>