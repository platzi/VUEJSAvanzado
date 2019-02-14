<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input
              class="input__search"
              id="where"
              type="text"
              placeholder="Mexico City, Mexico">
          </div>
        </form>
      </div>
    </section>
    <section class="section__items py-8">
      <div class="container">
        <h1 class="text-3xl font-light mb-3">Explore all</h1>
        <div class="search__content grid-container mb-8">
          <div class="house__card mb-3" v-for="i in 12" :key="i">
            <div class="house__thumbnail relative overflow-hidden">
              <img class="house__image absolute w-full" width="250" src="https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80">
            </div>
            <div class="house__content bg-white p-3 border rounded">
              <div class="house__type font-semibold text-xs uppercase text-teal-dark mb-1">
                Private Room
              </div>
              <div class="house__title font-bold mb-2">
                Guest Suite in Historic Architecture Home
              </div>
              <div class="house__price text-xs">
                <span class="font-bold">$592 MXN</span> per night
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a
            class="py-3 px-12 bg-yellow-dark no-underline text-yellow-darker text-lg rounded"
            href="#">Show all</a>
        </div>
      </div>
    </section>
  </page-layout>
</template>


<script>
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  name: 'SearchPage',
  components: {
    PageLayout,
  },
};
</script>

<style>
.section__items .grid-container {
  grid-template-columns: repeat(4, 1fr);
}

@media(max-width: 992px) {
  .section__items .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media(max-width: 576px) {
  .section__items .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
