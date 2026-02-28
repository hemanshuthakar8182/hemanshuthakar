<template>
  <section id="certificates">
    <div class="container certificates-container">
      <div class="text-center">
        <span class="section-tag">Recognition</span>
        <h2 class="section-title">Certificates & <span class="gradient-text">Achievements.</span></h2>
      </div>
      
      <div class="certificates-grid">
        <div v-for="cert in certificatesData" :key="cert.title" class="cert-card glass reveal">
          <div class="cert-glow"></div>
          
          <div class="cert-header">
            <div class="cert-icon-box glass">
              <i class="fas fa-certificate"></i>
            </div>
            <span class="cert-year glass">{{ cert.year }}</span>
          </div>
          
          <div class="cert-body">
            <h3 class="cert-title">{{ cert.title }}</h3>
            <div class="cert-issuer">
              <i class="fas fa-award"></i>
              <span>{{ cert.issuedBy }}</span>
            </div>
            <p class="cert-description">{{ cert.description }}</p>
          </div>
          
          <div class="cert-footer">
            <div class="cert-status">
              <span class="status-dot"></span>
              Verified Achievement
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { certificatesData } from '../data/projects.js'
</script>

<style scoped>
.text-center { text-align: center; margin-bottom: 60px; }

.certificates-container {
  padding-bottom: 100px;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.cert-card {
  position: relative;
  padding: 40px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cert-card:hover {
  transform: translateY(-10px);
  border-color: rgba(var(--accent-rgb), 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.cert-glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  opacity: 0.05;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.cert-card:hover .cert-glow {
  opacity: 0.15;
}

.cert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.cert-icon-box {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  font-size: 26px;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.05);
  border: 1px solid rgba(var(--accent-rgb), 0.1);
}

.cert-card:hover .cert-icon-box {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 0 20px var(--accent-glow);
}

.cert-year {
  padding: 8px 18px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 700;
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb), 0.1);
}

.cert-body {
  flex-grow: 1;
}

.cert-title {
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 12px;
  line-height: 1.3;
}

.cert-issuer {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 20px;
}

.cert-description {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-secondary);
  opacity: 0.8;
  margin: 0;
}

.cert-footer {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.cert-status {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-secondary);
  font-weight: 700;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #27c93f;
  border-radius: 50%;
  box-shadow: 0 0 10px #27c93f;
}

@media (max-width: 768px) {
  .cert-card { padding: 30px; }
  .cert-title { font-size: 20px; }
}

@media (max-width: 480px) {
  .certificates-grid { grid-template-columns: 1fr; }
  .cert-card { padding: 20px; border-radius: 20px; }
  .cert-header { margin-bottom: 20px; }
  .cert-icon-box { width: 50px; height: 50px; font-size: 20px; }
  .cert-title { font-size: 18px; }
  .cert-description { font-size: 14.5px; }
  .cert-status { font-size: 11px; }
}
</style>
