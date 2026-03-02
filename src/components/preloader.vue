<template>
  <transition name="preloader-fade">
    <div v-if="loading" class="preloader-overlay">
      <div class="loader-content">
        <!-- Horizontal Animated Name Text -->
        <div class="loader-text">
          <span class="name-gradient">Hemanshu</span>
          <span class="name-gradient name-last">Thakar</span>
        </div>
        
        <!-- Progress Bar and Percentage -->
        <div class="progress-wrapper">
          <div class="progress-track">
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="progress-percent">{{ progress }}%</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: true
  }
})

const progress = ref(0)
let timer = null

const startProgress = () => {
  const duration = 1100 // Simulate until preloader finishes (App.vue uses 1200ms approx)
  const interval = 15
  const steps = duration / interval
  let currentStep = 0

  timer = setInterval(() => {
    currentStep++
    progress.value = Math.min(Math.round((currentStep / steps) * 100), 100)
    if (progress.value >= 100) {
      clearInterval(timer)
    }
  }, interval)
}

// Prevent scrolling while the preloader is active
watch(() => props.loading, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    progress.value = 100
    clearInterval(timer)
  }
})

onMounted(() => {
  if (props.loading) {
    document.body.style.overflow = 'hidden'
    startProgress()
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  clearInterval(timer)
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

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* Beautiful Animated Text Horizontal */
.loader-text {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  animation: pulse-text 2s ease-in-out infinite;
}

.name-gradient {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 26px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
  animation: shimmer-text 4s linear infinite;
  filter: drop-shadow(0 0 10px rgba(96, 165, 250, 0.5));
}

.name-last {
  opacity: 0.9;
}

/* Progress Bar and text */
.progress-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.progress-track {
  width: 220px;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: var(--accent);
  border-radius: 4px;
  box-shadow: 0 0 10px var(--accent-glow);
  transition: width 0.05s linear;
}

.progress-percent {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 2px;
}


/* Keyframes */
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
