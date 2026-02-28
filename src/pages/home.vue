<script setup>
import Hero from '../components/hero.vue'
import About from '../components/about.vue'
import Skills from '../components/skills.vue'
import Projects from '../components/latestProjects.vue'
import Experience from '../components/experience.vue'
import Education from '../components/education.vue'
import Certificates from '../components/certificates.vue'
import Contact from '../components/contact.vue'
import { onMounted } from 'vue'

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
    <Hero id="home" />
    <About id="about" class="reveal" />
    <Skills id="skills" class="reveal" />
    <Experience id="experience" class="reveal" />
    <Projects id="projects" class="reveal" />
    <Certificates id="certificates" class="reveal" />
    <Education id="education" class="reveal" />
    <Contact id="contact" class="reveal" />
  </div>
</template>
