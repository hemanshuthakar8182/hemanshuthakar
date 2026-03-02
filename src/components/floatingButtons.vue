<template>
  <div class="floating-container" :class="{ 'show-top': showBackToTop }">
    <a href="tel:+917016283990" class="float-btn call-btn" title="Call Me">
      <i class="fas fa-phone-alt"></i>
    </a>
    
    <button @click="scrollToTop" class="float-btn top-btn" :class="{ 'visible': showBackToTop }" title="Back to Top">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

const checkScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.floating-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 999;
}

.float-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  background: rgba(13, 22, 34, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
}

.call-btn {
  background: var(--accent);
  border-color: var(--accent);
}

.call-btn:hover {
  background: #2563eb;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
}

.top-btn {
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
}

.top-btn.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.top-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Responsive Scaling */
@media (max-width: 768px) {
  .floating-container {
    bottom: 30px;
    right: 20px;
    gap: 12px;
  }
  
  .float-btn {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .floating-container {
    bottom: 30px;
    right: 15px;
    gap: 10px;
  }
  
  .float-btn {
    width: 48px;
    height: 48px;
    font-size: 18px;
  }

  /* When only call button is visible (top-btn hidden) */
  .floating-container:not(.show-top) {
    bottom: 30px;
  }

  /* When both buttons are visible */
  .floating-container.show-top {
    bottom: 80px; 
  }
}
</style>
