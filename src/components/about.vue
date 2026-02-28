<template>
  <section id="about" class="about-section">
    <!-- Background glow -->
    <div class="about-glow"></div>

    <div class="container">
      <!-- Header -->
      <div class="section-header reveal">
        <span class="section-tag">About Me</span>
        <h2 class="section-title">
          Passionate About <span class="gradient-text">Building</span> Great Software.
        </h2>
        <p class="section-sub">
          Full-Stack Developer with 1+ year of hands-on experience in React, Angular, PHP, and ASP.NET
          Web APIs — specializing in scalable web apps with clean architecture and great user experience.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid reveal">
        <div class="stat-card glass">
          <div class="stat-icon"><i class="fas fa-briefcase"></i></div>
          <div class="stat-value">1+</div>
          <div class="stat-label">Years of Experience</div>
        </div>
        <div class="stat-card glass">
          <div class="stat-icon"><i class="fas fa-layer-group"></i></div>
          <div class="stat-value">7+</div>
          <div class="stat-label">Projects Completed</div>
        </div>
        <div class="stat-card glass">
          <div class="stat-icon"><i class="fas fa-building"></i></div>
          <div class="stat-value">2</div>
          <div class="stat-label">Companies Worked</div>
        </div>
        <div class="stat-card glass">
          <div class="stat-icon"><i class="fas fa-code"></i></div>
          <div class="stat-value">10+</div>
          <div class="stat-label">Technologies Used</div>
        </div>
      </div>

      <!-- Two Column: Strengths + Details -->
      <div class="about-body reveal">

        <!-- Core Strengths -->
        <div class="strengths-panel glass">
          <div class="panel-heading">
            <div class="panel-icon"><i class="fas fa-bolt"></i></div>
            <h3>Core Strengths</h3>
          </div>
          <ul class="strength-list">
            <li v-for="s in strengths" :key="s.label" class="strength-item">
              <div class="s-icon-wrap">
                <i :class="s.icon"></i>
              </div>
              <div class="s-text">
                <span class="s-title">{{ s.label }}</span>
                <span class="s-desc">{{ s.desc }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Profile Snapshot -->
        <div class="profile-panel">
          <div class="profile-card glass">
            <div class="profile-row">
              <i class="fas fa-user-circle profile-ico"></i>
              <div>
                <div class="profile-name">Hemanshu Thakar</div>
                <div class="profile-role">Full-Stack Developer</div>
              </div>
            </div>
            <div class="profile-details">
              <div class="detail-row">
                <i class="fas fa-envelope"></i>
                <span>Himanshuthakar8181@gmail.com</span>
              </div>
              <div class="detail-row">
                <i class="fas fa-phone"></i>
                <span>+91 70162 83990</span>
              </div>
              <!-- <div class="detail-row">
                <i class="fas fa-birthday-cake"></i>
                <span>May 14, 2003</span>
              </div> -->
              <div class="detail-row">
                <i class="fas fa-map-marker-alt"></i>
                <span>Ahmedabad, Gujarat</span>
              </div>
              <div class="detail-row">
                <i class="fas fa-graduation-cap"></i>
                <span>B.E. Computer Engineering</span>
              </div>
            </div>
            <div class="profile-actions">
              <a href="#contact" class="btn btn-primary btn-sm" @click.prevent="scrollTo('contact')">
                <i class="fas fa-paper-plane"></i> Contact Me
              </a>
              <a href="#projects" class="btn btn-outline btn-sm" @click.prevent="scrollTo('projects')">
                <i class="fas fa-eye"></i> My Work
              </a>
            </div>
          </div>

          <!-- Expertise Tags removed as they are present in Skills section -->
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const strengths = [
  { icon: 'fas fa-cubes',         label: 'Full-Stack Development', desc: 'End-to-end from API design to pixel-perfect UI' },
  { icon: 'fas fa-bolt',          label: 'Fast Delivery',           desc: 'Agile workflow with quality-first mindset' },
  { icon: 'fas fa-shield-alt',    label: 'Secure & Scalable Code',  desc: 'Auth, REST APIs, and modular architecture' },
  { icon: 'fas fa-database',      label: 'Database Design',         desc: 'MySQL, MongoDB, SQL Server — optimized queries' },
  { icon: 'fas fa-mobile-alt',    label: 'Responsive Design',       desc: 'Mobile-first layouts across all devices' },
  { icon: 'fas fa-sync-alt',      label: 'API Integration',         desc: 'RESTful APIs, 3rd-party services, data flows' },
]


const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.about-section {
  padding: 120px 10%;
  position: relative;
  overflow: hidden;
}

.about-glow {
  position: absolute;
  width: 700px; height: 700px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.container { position: relative; z-index: 1; }

/* ===== HEADER ===== */
.section-header {
  text-align: center;
  margin-bottom: 64px;
}
.section-sub {
  font-size: 16.5px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.75;
}

/* ===== STATS GRID ===== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 64px;
}

.stat-card {
  padding: 32px 24px;
  border-radius: 18px;
  text-align: center;
  transition: all 0.35s ease;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
}
.stat-card:hover {
  transform: translateY(-6px);
  border-color: rgba(59,130,246,0.3);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(59,130,246,0.08);
}

.stat-icon {
  width: 52px; height: 52px;
  border-radius: 14px;
  background: rgba(59,130,246,0.1);
  border: 1px solid rgba(59,130,246,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 20px;
  color: var(--accent);
}
.stat-value {
  font-size: 40px;
  font-weight: 900;
  color: #fff;
  line-height: 1;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #fff 40%, #60a5fa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

/* ===== ABOUT BODY ===== */
.about-body {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: start;
}

/* --- Strengths Panel --- */
.strengths-panel {
  padding: 36px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
}
.panel-heading {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;
}
.panel-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  background: rgba(59,130,246,0.12);
  border: 1px solid rgba(59,130,246,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--accent);
}
.panel-heading h3 {
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  margin: 0;
}

.strength-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.strength-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 14px;
  background: rgba(255,255,255,0.018);
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.25s ease;
}
.strength-item:hover {
  background: rgba(59,130,246,0.05);
  border-color: rgba(59,130,246,0.15);
}
.s-icon-wrap {
  width: 38px; height: 38px;
  border-radius: 10px;
  background: rgba(59,130,246,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: var(--accent);
  flex-shrink: 0;
}
.s-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.s-title {
  font-size: 14.5px;
  font-weight: 700;
  color: #fff;
}
.s-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* --- Profile Panel --- */
.profile-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-card {
  padding: 30px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
}
.profile-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.profile-ico {
  font-size: 48px;
  color: var(--accent);
  opacity: 0.85;
}
.profile-name {
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 4px;
}
.profile-role {
  font-size: 13px;
  color: var(--accent);
  font-weight: 600;
}
.profile-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}
.detail-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--text-secondary);
}
.detail-row i {
  width: 16px;
  color: var(--accent);
  font-size: 13px;
  flex-shrink: 0;
}
.profile-actions {
  display: flex;
  gap: 12px;
}
.btn-sm {
  padding: 9px 20px !important;
  font-size: 13px !important;
  border-radius: 50px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}


/* ===== RESPONSIVE ===== */
@media (max-width: 1100px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .about-body { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .about-section { padding: 80px 6%; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .stat-card { padding: 20px 14px; }
  .stat-value { font-size: 32px; }
  .strengths-panel { padding: 24px; }
}
@media (max-width: 480px) {
  .about-section { padding: 60px 5%; }
  .stat-card { padding: 16px 10px; }
  .stat-value { font-size: 26px; }
  .stat-label { font-size: 11px; }
  .profile-card { padding: 20px; }
  .profile-row { flex-direction: column; text-align: center; gap: 12px; }
  .profile-actions { flex-direction: column; width: 100%; }
  .profile-actions .btn { width: 100%; justify-content: center; }
  .detail-row { font-size: 13px; }
  .strength-item { flex-direction: column; text-align: center; align-items: center; }
}
</style>
