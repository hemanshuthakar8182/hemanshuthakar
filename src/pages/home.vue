<script setup>
import Hero from '../components/hero.vue'
import About from '../components/about.vue'
import Skills from '../components/skills.vue'
import Projects from '../components/latestProjects.vue'
import Experience from '../components/experience.vue'
import Education from '../components/education.vue'
import Certificates from '../components/certificates.vue'
import Contact from '../components/contact.vue'
import AllProjects from '../components/allProjects.vue'
import { onMounted, ref } from 'vue'

const showAllProjects = ref(false)

const handleViewAll = () => {
  showAllProjects.value = true
  window.scrollTo(0, 0)
}

const handleCloseAll = () => {
  showAllProjects.value = false
  // Briefly scroll back to projects section
  setTimeout(() => {
    const el = document.getElementById('projects')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'instant' })
    }
  }, 50)
}

onMounted(() => {
  const observerOptions = {
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Needs a slight delay for DOM to properly render initial components after router-view mount
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }, 100)
})
</script>

<template>
  <div>
    <div v-show="!showAllProjects">
      <Hero id="home" />
      <About id="about" class="reveal" />
      <Skills id="skills" class="reveal" />
      <Experience id="experience" class="reveal" />
      <Projects id="projects" class="reveal" @view-all="handleViewAll" />
      <Certificates id="certificates" class="reveal" />
      <Education id="education" class="reveal" />
      <Contact id="contact" class="reveal" />
    </div>
    
    <div v-if="showAllProjects">
      <AllProjects @close="handleCloseAll" />
    </div>
  </div>
</template>
