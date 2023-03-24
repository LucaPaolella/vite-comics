<script>
import AppHeader from './components/AppHeader.vue';
import AppMainTop from './components/AppMainTop.vue';
import AppMainBot from './components/AppMainBot.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: "DCComics",
  components: {
    AppHeader,
    AppMainTop,
    AppMainBot,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <AppMainTop />
  <AppMainBot />
  <AppFooter />
</template>

<style lang="scss" scoped>
@import "./assets/style/main.scss";
</style>
