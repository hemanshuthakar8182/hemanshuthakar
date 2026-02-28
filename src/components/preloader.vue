<template>
  <transition name="preloader-fade">
    <div v-if="loading" class="preloader-overlay">
      <div class="loader-wrapper">
        <!-- Single elegant rotating ring -->
        <div class="loader-ring"></div>
        <!-- Logo centered securely -->
        <img src="/logo.svg" alt="Hemanshu Thakar" class="loader-logo" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: true
  }
})

// Prevent scrolling while the preloader is active
watch(() => props.loading, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  if (props.loading) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.preloader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-start);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.loader-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Elegant Rotating Ring Animation */
.loader-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.05); /* Subtle trail track */
  border-top-color: var(--accent); /* Bright accent color for the tip */
  border-right-color: var(--accent-glow); /* Slight trailing glow */
  box-shadow: 0 0 20px var(--accent-glow);
  animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

/* Bigger Center Logo */
.loader-logo {
  position: relative;
  z-index: 10;
  width: 80px; /* Increased size to be clearly visible */
  height: 80px;
  object-fit: contain;
  border-radius: 12px;
  animation: pulse 2s ease-in-out infinite;
}

/* Keyframes */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { 
    transform: scale(0.95); 
    filter: drop-shadow(0 0 5px var(--accent-glow));
  }
  50% { 
    transform: scale(1.05); 
    filter: drop-shadow(0 0 15px var(--accent));
  }
}

/* Fade Out Transition Classes */
.preloader-fade-enter-active,
.preloader-fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.preloader-fade-enter-from,
.preloader-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
