<template>
  <section id="education">
    <div class="container education-container">
      <div class="text-center">
        <span class="section-tag">Academic Background</span>
        <h2 class="section-title">Educational <span class="gradient-text">Journey.</span></h2>
      </div>
      
      <div class="education-grid">
        <div v-for="edu in educationData" :key="edu.degree" class="edu-card glass reveal">
          <div class="edu-header">
            <div class="edu-icon-box glass">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <span class="edu-period glass">{{ edu.period }}</span>
          </div>
          
          <div class="edu-body">
            <h3 class="edu-degree">{{ edu.degree }}</h3>
            <p class="edu-institution">
              <i class="fas fa-university"></i> {{ edu.institution }}
            </p>
            <p class="edu-location">
              <i class="fas fa-map-marker-alt"></i> {{ edu.location }}
            </p>
          </div>
          
          <div class="edu-footer">
            <div class="edu-score-badge">
              <span class="score-label">Achievement</span>
              <span class="score-value">{{ edu.score }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { educationData } from '../data/projects.js'
</script>

<style scoped>
.text-center { text-align: center; margin-bottom: 60px; }

.education-container {
  padding-bottom: 100px;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 30px;
}

.edu-card {
  padding: 40px;
  border-radius: 24px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.edu-card:hover {
  transform: translateY(-10px);
  border-color: rgba(var(--accent-rgb), 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.edu-icon-box {
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  font-size: 24px;
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
}

.edu-card:hover .edu-icon-box {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--accent-glow);
}

.edu-period {
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb), 0.1);
}

.edu-body {
  flex-grow: 1;
}

.edu-degree {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 15px;
  line-height: 1.3;
  color: #fff;
  word-wrap: break-word;
}

.edu-institution {
  font-size: 16px;
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  word-wrap: break-word;
}

.edu-location {
  font-size: 14px;
  color: var(--text-secondary);
  opacity: 0.7;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  word-wrap: break-word;
}

.edu-institution i, .edu-location i {
  color: var(--accent);
  width: 16px;
  margin-top: 4px;
  flex-shrink: 0;
}

.edu-footer {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.edu-score-badge {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.score-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-secondary);
  font-weight: 700;
}

.score-value {
  font-size: 18px;
  font-weight: 800;
  color: var(--accent);
}

@media (max-width: 768px) {
  .edu-card { padding: 30px; }
  .edu-degree { font-size: 20px; }
}

@media (max-width: 480px) {
  .education-grid { grid-template-columns: 1fr; }
  .edu-card { padding: 20px; border-radius: 20px; }
  .edu-header { margin-bottom: 20px; }
  .edu-icon-box { width: 48px; height: 48px; font-size: 20px; }
  .edu-degree { font-size: 18px; }
  .edu-institution { font-size: 14.5px; }
  .edu-location { font-size: 13px; }
  .score-value { font-size: 16px; }
}
</style>
