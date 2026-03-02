<template>
  <section id="projects">
    <div class="container">
      <div class="text-center">
        <span class="section-tag">Portfolio</span>
        <h2 class="section-title">Latest Innovations.</h2>
      </div>
      
      <div class="projects-flex">
        <ProjectCard 
          v-for="(project, index) in displayedProjects" 
          :key="project.id" 
          :project="project" 
          :displayIndex="index + 1"
        />
      </div>

      <div class="text-center" style="margin-top: 50px;">
        <router-link to="/projects" class="btn btn-primary">
          View All Projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ProjectCard from './projectCard.vue'
import { projects } from '../data/projects.js'

const displayedProjects = computed(() => {
  const targetIds = [1, 2, 3]
  return targetIds.map(id => projects.find(p => p.id === id)).filter(Boolean)
})
</script>

<style scoped>
.text-center { text-align: center; }

.projects-flex {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
