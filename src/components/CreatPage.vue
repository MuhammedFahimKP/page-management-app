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
        <div class="mb-3">
          <label for="" class="form-label">
            Link URL
          </label>
          <input
              type="text"
              class="form-control"
              v-model="linkUrl"

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


<script>

    export default {
          props:[
              'pageCreated',


          ],
          computed:{
            isFormInvalid() {
              return !this.title||!this.content||!this.linkText||!this.linkUrl
            }
          },
          data() {
            return {
              title: '',
              content:'',
              linkText:'',
              linkUrl:'',
              published:false,

            }
          },
          methods:{

            submitForm(e){
              if (!this.title||!this.content||!this.linkText||!this.linkUrl){
                 alert('please fill form');
                 return;
              }

              this.pageCreated({
                title:this.title,
                content:this.content,
                link:{
                  text:this.linkText,
                  url:this.linkUrl
                },
                published:this.published
              });

              this.title     = '';
              this.content   = '';
              this.linkUrl   = ''
              this.linkText  = '';
              this.published = false;


            }
          }
    }

</script>


