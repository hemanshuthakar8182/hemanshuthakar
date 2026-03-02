<template>
  <transition name="preloader-fade">
    <div v-if="loading" class="preloader-overlay">
      <div class="loader-wrapper">
        <!-- Single elegant rotating ring -->
        <div class="loader-ring"></div>
        <!-- Animated Name Text instead of Logo -->
        <div class="loader-text">
          <span class="name-gradient">Hemanshu</span>
          <span class="name-gradient name-last">Thakar</span>
        </div>
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
  width: 180px;
  height: 180px;
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

/* Beautiful Animated Text */
.loader-text {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.1;
  text-align: center;
  animation: pulse-text 2s ease-in-out infinite;
}

.name-gradient {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
  animation: shimmer-text 4s linear infinite;
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.4));
}

.name-last {
  font-size: 15px;
  letter-spacing: 5px;
  opacity: 0.9;
  margin-top: 4px;
}

/* Keyframes */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes shimmer-text {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

@keyframes pulse-text {
  0%, 100% { 
    transform: scale(0.95); 
    filter: drop-shadow(0 0 5px rgba(167, 139, 250, 0.3));
  }
  50% { 
    transform: scale(1.05); 
    filter: drop-shadow(0 0 15px rgba(96, 165, 250, 0.6));
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
