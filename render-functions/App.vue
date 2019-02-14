<template>
  <div id="app">
    <button>Toggle Modal</button>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background: #cecece;
}
.modal {
  position: absolute;
  top: 50%;
  left:50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 250px;
  background: #fff;
  padding: 15px;
}
.modal > .message {
  margin: 0;
  margin-bottom: 10px;
}
</style>
