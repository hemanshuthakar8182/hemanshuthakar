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

      <div class="text-center" style="margin-top: 50px;">
        <router-link to="/" class="btn btn-outline" style="color: var(--text-primary, #f8fafc);">
          &larr; Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ProjectCard from '../components/projectCard.vue'
import { projects } from '../data/projects.js'

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

@media (max-width: 480px) {
  .projects-page { padding: 40px 0; }
  .section-title { font-size: 32px; margin-bottom: 20px; text-align: left; }
  .section-tag { font-size: 13px; text-align: left; }
  .text-center { text-align: left; }
}
</style>
