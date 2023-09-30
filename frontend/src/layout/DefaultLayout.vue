<template>
  <div className="flex h-screen false">
    <Sidebar />

    <div className="flex flex-col flex-1 w-full">
      <HeaderComponent />

      <main className="h-full overflow-y-auto bg-gray-100 p-8 pt-10">
        <router-view></router-view>
      </main>

      <FooterComponent />

    </div>
  </div>


  <!-- <div>
    <HeaderComponent />

    <main>
      <router-view></router-view>
    </main>

    <FooterComponent />
  </div> -->
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import Sidebar from '../components/SidebarComponent.vue';
</script>