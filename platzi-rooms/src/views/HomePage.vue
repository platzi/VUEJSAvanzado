<template>
  <default-layout>
    <section class="container py-6">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Explore</h1>
      <div class="section__explore grid-container mb-8">
        <div class="house__card mb-3" v-for="i in 12" :key="i">
          <div class="house__thumbnail relative overflow-hidden">
            <img class="house__image absolute w-full" width="250" src="https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80">
          </div>
          <div class="house__content bg-white p-3 border rounded">
            <div class="house__type font-semibold text-xs uppercase text-teal-dark mb-1">
              Private Room
            </div>
            <div class="house__title font-bold mb-2">Guest Suite in Historic Architecture Home</div>
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
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'HomePage',
  components: {
    DefaultLayout,
  },
};
</script>

<style lang="css">
  .section__explore {
    grid-template-columns: repeat(4, 1fr);
  }

  .house__card > .house__thumbnail {
    height: 170px;
  }

  .house__thumbnail > .house__image {
    width: 100%;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  @media(max-width: 992px) {
    .house__card > .house__thumbnail {
      height: 150px;
    }
    .section__explore {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media(max-width: 576px) {
    .section__explore {
      grid-template-columns: repeat(1, 1fr);
    }

    .house__card > .house__thumbnail {
      height: 120px;
    }
  }
</style>
