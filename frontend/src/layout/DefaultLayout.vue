<template>
  <div>
    <HeaderComponent />

    <main>
      <router-view></router-view>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>