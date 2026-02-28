<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import Preloader from './components/preloader.vue'
import FloatingButtons from './components/floatingButtons.vue'

const isLoading = ref(true)

onMounted(() => {
  const finishLoading = () => {
    setTimeout(() => {
      isLoading.value = false
    }, 1200) // Small delay to let the animation play out beautifully
  }

  if (document.readyState === 'complete') {
    finishLoading()
  } else {
    window.addEventListener('load', finishLoading)
    setTimeout(finishLoading, 4000) // Fallback in case load takes too long
  }
})
</script>

<template>
  <Preloader :loading="isLoading" />
  
  <div class="app-container">
    <Navbar />
    
    <main>
      <router-view />
    </main>

    <Footer />
    <FloatingButtons />
  </div>
</template>

<style>
/* Global App Styles */
.app-container {
  min-height: 100vh;
  overflow-x: clip;
}

main {
  margin-top: 80px; /* Offset for fixed navbar */
}
</style>
