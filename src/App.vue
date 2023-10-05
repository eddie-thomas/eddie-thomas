<template>
  <div id="app">
    <div id="top"></div>
    <HomeView />
    <ProjectsView />
    <div id="bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { scrollElementIntoView } from './utils';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue'

let firstScrollTop: number | undefined
let lastScrollTop: number | undefined

/**
 * Scroll all the way up or down, depending on recent scroll information
 */
function scrollToTopOrBottom() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (firstScrollTop === undefined) {
    firstScrollTop = scrollTop;
    return;
  }
  if (firstScrollTop !== undefined && lastScrollTop === undefined) {
    lastScrollTop = scrollTop;
    return;
  }
  if (firstScrollTop !== undefined && lastScrollTop !== undefined) {
    onscroll = null
    const diff = firstScrollTop < lastScrollTop

    const elementSelector = diff ? "#bottom" : "#top"
    console.log(elementSelector)
    firstScrollTop = undefined
    lastScrollTop = undefined

    scrollElementIntoView(elementSelector)
    setTimeout(() => onscroll = scrollToTopOrBottom, 100)
  }
};

onscroll = scrollToTopOrBottom

</script>

<style scoped></style>
