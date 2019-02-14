<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input class="input__search" id="where" type="text" placeholder="Mexico City, Mexico">
          </div>
        </form>
      </div>
    </section>
    <section class="section__profile py-6">
      <div class="container">
        <h1 class="text-3xl font-light m-3">Profile Account</h1>
        <div class="grid-container">
          <aside class="profile__aside px-3">
            <div class="profile__card">
              <div class="profile__thumbnail">
                <img class="profile__image w-full" src="https://avatars1.githubusercontent.com/u/9919?s=500&v=4">
              </div>
            </div>
          </aside>
          <div class="profile__fields">
            <form class="form">
              <div class="mb-4">
                <label class="input__label" for="name">Name</label>
                <div class="form__field relative">
                  <input class="input__field" id="name" type="text" placeholder="Bruce Wayne">
                </div>
              </div>
              <div class="mb-4">
                <label class="input__label" for="username">Username</label>
                <div class="form__field relative">
                  <input class="input__field" id="username" type="text" placeholder="bruce.wayne">
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="input__label"
                  for="avatar">Avatar</label>
                <div class="form__field relative">
                  <input class="input__field" id="avatar" type="text" placeholder="https://avatars1.githubusercontent.com/u/9919?s=500&v=4">
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="input__label"
                  for="email">Email</label>
                <div class="form__field relative">
                  <input
                    class="input__field"
                    id="email"
                    type="text"
                    placeholder="bruce.wayne@imnotbatman.org">
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="input__label"
                  for="email">Bio</label>
                <div class="form__field relative">
                  <textarea
                    class="input__field"
                    rows="5"
                    id="email"
                    type="text"
                    placeholder="bruce.wayne@imnotbatman.org"></textarea>
                </div>
              </div>
              <div class="flex items-center w-auto mb-4">
                <button
                  class="btn mr-3">
                  Cancel
                </button>
                <button
                  class="bg-yellow-dark text-yellow-darker font-semibold py-2 px-4 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  name: 'ProfilePage',
  components: {
    PageLayout,
  },
};
</script>
<style>
.section__profile .grid-container {
  grid-template-columns: 3fr 9fr;
}
</style>
