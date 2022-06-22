Vue.component('search-form', {
   data() {
      return {
         userSearch: ''
      }
   },
   template: `
   <nav class="navbar navbar-light bg-light">
   <form action="#" method="post" class="form-inline" @submit.prevent="$parent.$refs.products.filter(userSearch)">
       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="userSearch">
       <button class="btn my-2 my-sm-0" type="submit">Search</button>
   </form>
</nav>
 `
});