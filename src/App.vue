<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="routes" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.routes-enter-from {
  opacity: 0;
  transform: translateY(50vh);
}

.routes-leave-to {
  transform: translateX(50vw);
  opacity: 0;
}
.routes-enter-to,
.routes-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.routes-enter-active {
  transition: 0.5s ease-out;
}

.routes-leave-active {
  transition: 0.5s ease-in;
}
</style>
