<template>
  <header class="bg-white py-5 shadow">
    <div class="container">
      <div class="flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-no-shrink mr-6">
          <a
            class="text-black hover:text-grey-darkest no-underline font-semibold text-lg"
            href="#">Platzi Rooms</a>
        </div>
        <div class="flex items-center w-auto">
          <div class="items__controls">
            <div class="flex" v-if="false">
              <button class="mr-2 flex items-center">
                <i class="material-icons">add</i>
              </button>
              <button class="mr-4 flex items-center">
                <i class="material-icons">notifications</i>
              </button>
              <div class="flex items-center">
                <img class="w-8 h-8 rounded-full mr-2" src="https://avatars2.githubusercontent.com/u/1901273?s=460&v=4" alt="Avatar of Javier Diaz">
                <div class="text-sm">
                  <p class="text-black leading-none">Javier Diaz</p>
                  <p class="text-grey-dark">Online</p>
                </div>
              </div>
            </div>
            <div v-else>
              <button class="btn__outline btn__outline--teal rounded mr-2">Login</button>
              <button
                class="bg-yellow-dark text-yellow-darker font-semibold py-2 px-4 rounded">
                Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPartial',
  data() {
    return {
      isAuthenticated: true,
    };
  },
  methods: {
    getLogin() {
      console.log('Login Click');
    },
    signUp() {
      console.log('Sign Up Click');
    },
  },
};
</script>
