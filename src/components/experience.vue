<template>
  <section id="experience">
    <div class="container timeline-container">
      <div class="text-center">
        <span class="section-tag">Career Path</span>
        <h2 class="section-title">Professional <span class="gradient-text">Experience.</span></h2>
      </div>
      
      <div class="timeline">
        <div v-for="job in experienceData" :key="job.company + job.period" class="timeline-item">
          <div class="timeline-dot-wrapper">
            <div class="timeline-dot glass"></div>
          </div>
          <div class="timeline-content glass glass-card reveal">
            <div class="job-header">
              <div class="job-role">
                <h3>{{ job.title }}</h3>
                <p class="company text-accent">{{ job.company }}</p>
                <p class="location-text"><i class="fas fa-map-marker-alt"></i> {{ job.location }}</p>
              </div>
              <span class="date-badge glass">{{ job.period }}</span>
            </div>
            <ul class="job-points">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experienceData } from '../data/projects.js'
</script>

<style scoped>
.text-center { text-align: center; }

.timeline-container {
  max-width: 900px;
}

.timeline {
  position: relative;
  margin-top: 60px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, var(--accent), transparent);
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 50px;
}

.timeline-dot-wrapper {
  position: absolute;
  left: 0;
  top: 10px;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 15px var(--accent);
}

.timeline-content {
  padding: 40px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.job-role h3 {
  font-size: 24px;
  margin-bottom: 4px;
  font-weight: 800;
  color: #fff;
}

.company {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4px;
}

.location-text {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}

.location-text i {
  margin-right: 4px;
  color: var(--accent);
}

.date-badge {
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 50px;
  color: var(--accent);
  border: 1px solid var(--border-accent);
}

.job-points {
  list-style: none;
}

.job-points li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.job-points li::marker {
  content: '';
}

.job-points li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

@media (max-width: 600px) {
  .job-header { flex-direction: column; gap: 16px; }
  .timeline-content { padding: 30px; }
}

@media (max-width: 480px) {
  .timeline::before { left: 10px; }
  .timeline-item { padding-left: 35px; margin-bottom: 40px; }
  .timeline-dot-wrapper { left: -10px; width: 40px; height: 40px; }
  .timeline-content { padding: 20px; }
  .job-role h3 { font-size: 20px; }
  .company { font-size: 14px; }
  .job-points li { font-size: 14px; padding-left: 20px; }
}
</style>
