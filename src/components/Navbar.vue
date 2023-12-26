<template>
  <nav :class="[`navbar-${theme}`,`bg-${theme}`,'navbar','navbar-expand-lg','d-flex' ]">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

          <navbar-link

              v-for="(page,index) in publishedPages"
              :index = "index"
              :page="page"
              :isActive="activePage == index"
              @actived="$emit('actived')"

          >
          </navbar-link>

        <li class="nav-item active">
          <router-link

              :to="`/pages/create`"
              class="nav-link"
              active-class="active"

          >CreatePage</router-link>
        </li>


      </ul>
      <form class="d-flex justify-content-end">
        <button

            class="btn btn-primary"
            @click.prevent="changeTheme()"
        >

        </button>
      </form>


    </div>
  </nav>
</template>

<script>

  import NavbarLink from "./NavbarLink.vue";
  export default {
    components:{
      NavbarLink,

    },
    created(){
      this.pages = this.$pages.getAllPages()

      this.$bus.$on('page-updated', () => {
          this.pages = [...this.$pages.getAllPages()];
      });

      this.$bus.$on('page-created', () => {
        this.pages = [...this.$pages.getAllPages()];
      });

      this.$bus.$on('page-deleted', () => {
        this.pages = [...this.$pages.getAllPages()];
      });

      this.getThemeSettings()

    },
    computed:{
      publishedPages() {
          return this.pages.filter(p => p.published);
      }
    },
    props: ['activePage'],
    inject:['$pages','$bus'],
    data(){
      return {
        theme:"light",
        pages : []
      };
    },
    methods:{

      changeTheme(){

        let theme = 'light';

        if(this.theme == 'light'){

          theme = 'dark';

        }

        this.theme = theme;
        this.storeThemeSettings()


      },
      storeThemeSettings(){
          localStorage.setItem('theme',this.theme)
      },
      getThemeSettings(){
          let theme = localStorage.getItem('theme')
          if (theme) {
            this.theme = theme;

          }
      }
    }

  }
</script>