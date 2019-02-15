import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDN6XptK-8PRvR6Sr0Bpd2IJFMlTi2wonY',
  authDomain: 'platzi-rooms-b9291.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-b9291.firebaseio.com',
  projectId: 'platzi-rooms-b9291',
  storageBucket: 'platzi-rooms-b9291.appspot.com',
  messagingSenderId: '31419217426',
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('FETCH_USER', { id: store.state.authId });
  },
}).$mount('#app');
