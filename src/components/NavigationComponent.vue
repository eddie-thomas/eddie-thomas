<template>
  <div class="nav-container">
    <div class="nav">
      <div @click="handleChange('/')">Home</div>
      <div @click="handleChange('/about')">About Eddie</div>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router'

export default {
  methods: {
    /**
     * Change event for routing
     */
    handleChange(route: string) {
      router.push(route)
    }
  }
}
</script>
