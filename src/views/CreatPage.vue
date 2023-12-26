<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label">
          Page Title
        </label>
        <input
            type="text"
            class="form-control"
            v-model="title"
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
            v-model="content"

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
              v-model="linkText"

          />
        </div>

        <div class="row mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="published">
            <label class="form-check-label" for="gridCheck1">
              Published
            </label>
          </div>

        </div>
      </div>
      <div class="mb-3">
        <button
            class="btn btn-primary"
            :disabled="isFormInvalid"
            @click.prevent="submitForm"
        >Create Page</button>
      </div>
    </form>
  </div>
</template>

<script setup>

  import {ref,inject,computed,watch} from 'vue'
  import {useRouter} from "vue-router";
  import routers from "../routers.js";

  const pages  = inject('$pages')
  const bus    = inject('$bus');
  const router = useRouter();

  let title     = ref('');
  let content   = ref('');
  let linkText  = ref('');
  let published = ref(true);




  function submitForm(){
    if (!title||!content||!linkText){
      alert('please fill form');
      return;
    }

    let newPage = {
      title:title.value,
      content:content.value,
      link : {
        text : linkText.value,
        url  : `${linkText.value}.html`
      }

    }

    pages.addPage(newPage);

    bus.$emit('page-created',newPage);

    router.push({path:'/pages'})




  }

  const isFormInvalid = computed(() =>  !title||!content||!linkText)
  watch(title,(newTitle,oldTitle) => {


          if (linkText.value == oldTitle) {
            linkText.value = newTitle;
          }
  })






</script>






