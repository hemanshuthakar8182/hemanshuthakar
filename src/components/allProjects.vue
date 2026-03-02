<template>
  <div class="projects-page">
    <div class="container">
      <div class="text-center">
        <span class="section-tag">Portfolio</span>
        <h2 class="section-title">All Projects.</h2>
      </div>
      
      <div class="projects-flex">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
        />
      </div>

      <!-- Fixed Back to Home Button -->
      <div class="fixed-back-btn">
        <button class="glass-btn" @click="$emit('close')">
          <i class="fas fa-arrow-left"></i> Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ProjectCard from '../components/projectCard.vue'
import { projects } from '../data/projects.js'

defineEmits(['close'])

onMounted(() => {
  window.scrollTo(0, 0); // scroll to top when visiting all projects
  
  setTimeout(() => {
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }, 100)
})
</script>

<style scoped>
.projects-page {
  padding: 60px 0;
}

.text-center { text-align: center; }

.projects-flex {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
}

.fixed-back-btn {
  position: fixed;
  bottom: 40px;
  left: 40px;
  z-index: 999;
}

.glass-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(13, 22, 34, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  font-family: inherit;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.glass-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
  color: #fff;
}

@media (max-width: 480px) {
  .projects-page { padding: 40px 0; }
  .section-title { font-size: 32px; margin-bottom: 20px; text-align: left; }
  .section-tag { font-size: 13px; text-align: left; }
  .text-center { text-align: left; }
  .fixed-back-btn { bottom: 20px; left: 20px; }
  .glass-btn { padding: 10px 20px; font-size: 14px; }
}
</style>
