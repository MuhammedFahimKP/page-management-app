<template>

  <h3>Edit Page </h3>

  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label">
          Page Title
        </label>
        <input
            type="text"
            class="form-control"
            v-model="page.title"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">
          Content
        </label>
        <textarea
            type="text"
            class="form-control"
            rows="5"
            v-model="page.content"

        ></textarea>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label">
            Link Text
          </label>
          <input
              type="text"
              class="form-control"
              v-model="page.link.text"

          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Link URL
          </label>
          <input
              type="text"
              class="form-control"
              v-model="page.link.url"

          />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="page.published">
            <label class="form-check-label" for="gridCheck1">
              Published
            </label>
          </div>

        </div>
      </div>
      <div class="mb-3">
        <button
            class="btn btn-primary"
            @click.prevent="submit"
        >Save </button>
        <button
            class="btn btn-secondary ms-3"
            @click.prevent="goToPagesList"
        >Cancel
        </button>
        <button
            class="btn btn-danger ms-3"
            @click.prevent="deletePage"
        >Delete
        </button>


      </div>
    </form>
  </div>
</template>


<script setup>

  import {useRouter} from "vue-router";
  import {inject,computed} from "vue";


  const route = useRouter();
  const pages = inject('$pages');
  const bus   = inject('$bus');


  const {index} = defineProps(['index']);


  let page = pages.getSinglePage(index);

  function submit(){
    pages.editPage(index,page)

    bus.$emit('page-updated',{
        index,
        page
    });

    goToPagesList();

  }

  function deletePage(index){
    pages.removePage(index);
    bus.$emit('page-deleted',{index});
    goToPagesList()
  }


  function goToPagesList(){
      route.push({ path :'/pages' })
  }




</script>


<style scoped>

  .table.table-hover tr:hover{
    cursor : pointer;
  }



</style>