<template>
  <section id="skills">
    <div class="container">
      <div class="text-center">
        <span class="section-tag">Expertise</span>
        <h2 class="section-title">Technical Proficiency.</h2>
      </div>
      
      <div class="skills-grid">
        <div v-for="category in skillsData" :key="category.category" class="skill-category glass glass-card glass-hover reveal">
          <div class="category-header">
            <div class="category-icon glass">
              <i :class="getIcon(category.category)"></i>
            </div>
            <h3>{{ category.category }}</h3>
          </div>
          <div class="skills-list">
            <div v-for="skill in category.items" :key="skill" class="skill-badge glass glass-hover">
              <img v-if="getSkillIcon(skill)" :src="getSkillIcon(skill)" :alt="skill" class="skill-icon" :class="{'invert-icon': needsInversion(skill)}" />
              <span>{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillsData } from '../data/projects.js'

const getIcon = (category) => {
  const icons = {
    'Languages': 'fas fa-code',
    'Frontend': 'fas fa-layer-group',
    'Backend': 'fas fa-server',
    'Database': 'fas fa-database',
    'Tools & Platforms': 'fas fa-tools',
    'Tools': 'fas fa-tools', // Handle 'Tools' gracefully based on your data structure
    'Version Control': 'fas fa-code-branch'
  }
  return icons[category] || 'fas fa-star'
}

// Function to map string skills to their respective original SVGs
const getSkillIcon = (skillName) => {
  const iconMap = {
    'React JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    'Next JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'Vue JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    
    'Node JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'Express JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    '.NET Web API': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    '.NET MVC': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
    
    'Mongo DB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'Microsoft SQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    'Visual Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg',
    
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
  }
  return iconMap[skillName] || ''
}

// Certain icons are dark/black by default, making them hard to see on your dark theme.
// We can invert them to white for better visibility.
const needsInversion = (skill) => {
  const needsInvertList = ['Next JS', 'Express JS']
  return needsInvertList.includes(skill)
}
</script>

<style scoped>
.text-center {
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
  gap: 30px;
}

.skill-category {
  padding: 40px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.category-icon {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: var(--accent);
  border-radius: 12px;
}

.skill-category h3 {
  font-size: 22px;
  margin-bottom: 0;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-size: 14.5px;
  font-weight: 600;
  border-radius: 50px;
  cursor: default;
  transition: var(--transition);
}

.skill-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.invert-icon {
  filter: invert(1) brightness(2); /* Ensures black logos become brilliant white on dark bg */
}

.skill-badge:hover .skill-icon {
  transform: scale(1.15); /* Slight pop effect for the icon on hover */
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
