<template>
  <div class="project-card reveal">
    <div class="project-card-inner glass">
      <!-- Animated Background Glow -->
      <div class="card-glow"></div>
      
      <div class="project-content">
        <!-- Project Header -->
        <div class="project-header">
          <div class="title-area">
            <div class="number-box">
              <span class="project-number">{{ displayNumber }}</span>
            </div>
            <div class="title-group">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-meta">
                <span class="meta-item company">
                  <i class="fas fa-building"></i> {{ project.company }}
                </span>
                <span class="meta-divider"></span>
                <span class="meta-item type">
                  <i :class="project.company === 'College Final Year Project' ? 'fas fa-graduation-cap' : 'fas fa-briefcase'"></i>
                  {{ project.company === 'College Final Year Project' ? 'Academic' : 'Commercial' }}
                </span>
              </div>
            </div>
          </div>
          
          <div class="project-links">
            <a v-if="project.github !== '#'" :href="project.github" target="_blank" class="link-circle" title="View Source">
              <i class="fab fa-github"></i>
            </a>
            <a v-if="project.demo !== '#'" :href="project.demo" target="_blank" class="link-circle demo-link" title="Live Demo">
              <i class="fas fa-external-link-alt"></i> <span class="demo-text">View Live</span>
            </a>
          </div>
        </div>

        <!-- Project Main Body -->
        <div class="project-body">
          <div class="tech-sidebar">
            <h4 class="sidebar-label">Technologies</h4>
            <div class="tech-grid">
              <span v-for="tag in project.tags" :key="tag" class="tech-pill">
                <img v-if="getTechIcon(tag)" :src="getTechIcon(tag)" :alt="tag" class="tech-icon" :class="{'invert-icon': needsInversion(tag)}" />
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="description-area">
            <ul class="project-points">
              <li v-for="point in project.points" :key="point">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Footer Action Hint -->
      <div class="card-footer-bar"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: Object,
  displayIndex: {
    type: Number,
    default: null
  }
})

const displayNumber = computed(() => {
  const num = props.displayIndex !== null ? props.displayIndex : (props.project.id || 1)
  return num < 10 ? `0${num}` : num
})

const getTechIcon = (tagName) => {
  const iconMap = {
    'React JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'PHP (REST API)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    'ASP.NET C# API': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  }
  return iconMap[tagName] || ''
}

const needsInversion = (tag) => {
  const needsInvertList = ['Next JS', 'Express JS']
  return needsInvertList.includes(tag)
}
</script>

<style scoped>
.project-card {
  width: 100%;
  margin-bottom: 50px;
}

.project-card-inner {
  position: relative;
  border-radius: 28px;
  background: rgba(13, 22, 34, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}

.project-card-inner:hover {
  transform: translateY(-10px) scale(1.01);
  border-color: rgba(var(--accent-rgb), 0.4);
  background: rgba(13, 22, 34, 0.6);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 
              0 0 20px rgba(var(--accent-rgb), 0.1);
}

.card-glow {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.project-card-inner:hover .card-glow {
  opacity: 0.15;
  transform: translate(-10%, 10%);
}

.project-content {
  position: relative;
  z-index: 1;
  padding: 50px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
}

.title-area {
  display: flex;
  gap: 30px;
  align-items: center;
}

.number-box {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}

.project-card-inner:hover .number-box {
  background: rgba(var(--accent-rgb), 0.1);
  border-color: rgba(var(--accent-rgb), 0.2);
  transform: rotate(-5deg);
}

.project-number {
  font-size: 32px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.2);
  font-family: 'Outfit', sans-serif;
  transition: all 0.4s ease;
}

.project-card-inner:hover .project-number {
  color: var(--accent);
  transform: scale(1.1);
}

.title-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-title {
  font-size: 36px;
  font-weight: 800;
  margin: 0;
  letter-spacing: -1px;
  color: #fff;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.meta-item {
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.company { color: var(--accent); }
.type { color: var(--text-secondary); opacity: 0.8; }

.meta-divider {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 480px) {
  .meta-divider { display: none; }
  .project-meta { gap: 6px; flex-direction: column; align-items: flex-start; }
}

.project-links {
  display: flex;
  gap: 12px;
}

.link-circle {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.link-circle:hover {
  background: #fff;
  color: #000;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.demo-link {
  width: auto;
  padding: 0 28px;
  gap: 10px;
  background: var(--accent);
  color: #fff;
  border: 1px solid var(--accent);
  border-radius: 50px;
}

.demo-link:hover {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
}

.demo-text {
  font-size: 14.5px;
  font-weight: 600;
  white-space: nowrap;
}

.project-body {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 60px;
  position: relative;
}

.project-body::before {
  content: '';
  position: absolute;
  left: 310px; /* Aligned between sidebar and area */
  top: 10%;
  bottom: 0%;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  opacity: 0.1;
  transition: opacity 0.4s ease;
}

.project-card-inner:hover .project-body::before {
  opacity: 0.3;
}

.sidebar-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-weight: 700;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 100px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.tech-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.invert-icon {
  filter: invert(1) brightness(2);
}

.project-card-inner:hover .tech-pill {
  background: rgba(var(--accent-rgb), 0.05);
  border-color: rgba(var(--accent-rgb), 0.2);
  color: #fff;
}

.project-card-inner:hover .tech-icon {
  transform: scale(1.1);
}

.description-area {
  position: relative;
}

.project-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-points li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  font-size: 17px;
  line-height: 1.6;
  color: var(--text-secondary);
  opacity: 0.9;
  text-align: left;
}

.project-points li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 800;
  font-size: 18px;
  transition: transform 0.3s ease;
}

.project-card-inner:hover .project-points li::before {
  transform: translateX(4px);
}

.card-footer-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}

.project-card-inner:hover .card-footer-bar {
  transform: scaleX(1);
}

@media (max-width: 1100px) {
  .project-body {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .project-body::before { display: none; }
}

@media (max-width: 768px) {
  .project-content { padding: 30px; }
  .project-header { flex-direction: column; gap: 20px; align-items: flex-start; }
  .title-area { align-items: flex-start; }
  .project-links { align-self: flex-start; width: 100%; display: flex; justify-content: stretch; }
  .demo-link { flex: 1; justify-content: center; }
  .project-title { font-size: 28px; }
  .number-box { width: 60px; height: 60px; border-radius: 14px; }
  .project-number { font-size: 24px; }
  .tech-sidebar { width: 100%; }
}

@media (max-width: 480px) {
  .project-card { margin-bottom: 30px; }
  .project-content { padding: 25px 20px; }
  .title-area { flex-direction: column; align-items: flex-start; gap: 15px; }
  .number-box { width: 50px; height: 50px; border-radius: 12px; }
  .project-number { font-size: 20px; }
  .project-title { font-size: 24px; }
  .project-links { width: 100%; display: flex; flex-direction: column; justify-content: stretch; gap: 12px; }
  .link-circle { width: 100%; height: 50px; justify-content: center; }
  .demo-link { flex: 1; justify-content: center; width: 100%; }
  .tech-grid { gap: 8px; }
  .tech-pill { padding: 8px 12px; font-size: 13px; }
  .project-body { gap: 24px; }
  .project-points li { font-size: 15px; padding-left: 22px; }
  .project-points li::before { font-size: 16px; }
}
</style>
