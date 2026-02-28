<template>
  <section id="home" class="hero-section">
    <!-- Ambient background glows -->
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
    <div class="grid-overlay"></div>

    <div class="container hero-container">
      <!-- Left: Text Content -->
      <div class="hero-content">
        <div class="badge">
          <span class="badge-dot"></span>
          Available for opportunities
        </div>

        <h1 class="hero-title">
          I'm <span class="gradient-text name-highlight">{{ profileData.name }}</span>
        </h1>

        <div class="role-row">
          <span class="role-chip">
            <i class="fas fa-code"></i>
            {{ profileData.role }}
          </span>
        </div>

        <p class="hero-desc">
          Building scalable web apps with clean code, from intuitive UIs to robust APIs —
          turning complex problems into seamless digital experiences.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary" @click.prevent="scrollTo('projects')">
            <i class="fas fa-rocket"></i> View Projects
          </a>
          <a :href="resumeUrl" target="_blank" download="Hemanshu_Thakar_Resume.pdf" class="btn btn-outline">
            <i class="fas fa-download"></i> Download CV
          </a>
        </div>

        <!-- Quick Stats Row -->
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-num">1+</span>
            <span class="stat-label">Yrs Experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">7+</span>
            <span class="stat-label">Projects Built</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">10+</span>
            <span class="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <!-- Right: Code Card -->
      <div class="hero-visual">
        <div class="visual-float">
          <!-- Code Editor Card -->
          <div class="code-card">
            <div class="code-header">
              <div class="traffic-lights">
                <span class="tl red"></span>
                <span class="tl yellow"></span>
                <span class="tl green"></span>
              </div>
              <span class="filename">developer.js</span>
              <div class="tab-dot"></div>
            </div>
            <div class="code-body">
<pre><code><span class="c-purple">const</span> <span class="c-blue">developer</span> <span class="c-white">=</span> <span class="c-yellow">{</span>
  <span class="c-green">name</span><span class="c-white">:</span> <span class="c-orange">'Hemanshu Thakar'</span><span class="c-white">,</span>
  <span class="c-green">role</span><span class="c-white">:</span> <span class="c-orange">'Full-Stack Developer'</span><span class="c-white">,</span>
  <span class="c-green">location</span><span class="c-white">:</span> <span class="c-orange">'Ahmedabad, India'</span><span class="c-white">,</span>
  <span class="c-green">stack</span><span class="c-white">:</span> <span class="c-white">[</span>
    <span class="c-orange">'React'</span><span class="c-white">,</span> <span class="c-orange">'Angular'</span><span class="c-white">,</span>
    <span class="c-orange">'.NET API'</span><span class="c-white">,</span> <span class="c-orange">'MySQL'</span>
  <span class="c-white">],</span>
  <span class="c-green">status</span><span class="c-white">:</span> <span class="c-orange">'Open for work'</span>
<span class="c-yellow">}</span>
</code></pre>
              <div class="cursor-blink"></div>
            </div>
          </div>

          <!-- Floating skill badges -->
          <div class="float-badge badge-react">
            <i class="fab fa-react"></i> React JS
          </div>
          <div class="float-badge badge-dotnet">
            <i class="fas fa-server"></i> .NET API
          </div>
          <div class="float-badge badge-sql">
            <i class="fas fa-database"></i> SQL Server
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>Scroll down</span>
    </div>
  </section>
</template>

<script setup>
import { profileData } from '../data/projects.js'

const resumeUrl = '/Hemanshu_Thakar_Final_Resume.pdf'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Section Base */
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 10% 80px;
}

/* Background Glows */
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}
.glow-1 {
  width: 600px; height: 600px;
  top: -100px; right: -100px;
  background: radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%);
}
.glow-2 {
  width: 400px; height: 400px;
  bottom: 0; left: -80px;
  background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
}
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 0;
}

/* Layout */
.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
  position: relative;
  z-index: 1;
  width: 100%;
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  border-radius: 50px;
  border: 1px solid rgba(59,130,246,0.3);
  background: rgba(59,130,246,0.07);
  font-size: 13px;
  font-weight: 600;
  color: #93c5fd;
  margin-bottom: 24px;
  letter-spacing: 0.3px;
}
.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px #22c55e;
  animation: pulse-dot 2s ease infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* Title */
.hero-title {
  font-size: clamp(28px, 8vw, 68px);
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 20px 0;
  letter-spacing: -1.5px;
  color: #fff;
  word-wrap: break-word;
  word-break: break-word;
}
.name-highlight {
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
  animation: shimmer 4s linear infinite;
}
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* Role */
.role-row {
  margin-bottom: 24px;
}
.role-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.3px;
}
.role-chip i { color: var(--accent); }

/* Description */
.hero-desc {
  font-size: 16.5px;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 36px;
}

/* CTA Buttons */
.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 44px;
  flex-wrap: wrap;
}

.hero-actions .btn {
  flex: 1;
  min-width: fit-content;
}

/* Stats Row */
.stats-row {
  display: flex;
  align-items: center;
  gap: 28px;
}
.stat-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.stat-num {
  font-size: 26px;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}
.stat-label {
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}
.stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.1);
}

/* ===== RIGHT: CODE CARD ===== */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.visual-float {
  position: relative;
  width: 420px;
  animation: float 5s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

.code-card {
  border-radius: 18px;
  overflow: hidden;
  background: rgba(13, 17, 26, 0.85);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.08);
  backdrop-filter: blur(12px);
}

.code-header {
  padding: 14px 20px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  gap: 14px;
}
.traffic-lights { display: flex; gap: 7px; }
.tl {
  width: 12px; height: 12px;
  border-radius: 50%;
}
.tl.red    { background: #ff5f56; }
.tl.yellow { background: #febc2e; }
.tl.green  { background: #28c840; }
.filename {
  font-size: 12.5px;
  color: rgba(255,255,255,0.4);
  font-family: 'Courier New', monospace;
  flex: 1;
  text-align: center;
}
.tab-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.7;
}

.code-body {
  padding: 28px 28px 20px;
  position: relative;
  overflow-x: auto;
}
pre { margin: 0; white-space: pre-wrap; word-break: break-all; }
code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  line-height: 1.9;
  white-space: pre-wrap;
}
.c-purple { color: #c678dd; }
.c-blue   { color: #61afef; }
.c-green  { color: #98c379; }
.c-yellow { color: #e5c07b; }
.c-orange { color: #e6a463; }
.c-white  { color: #abb2bf; }

.cursor-blink {
  display: inline-block;
  width: 9px; height: 17px;
  background: var(--accent);
  opacity: 0.9;
  margin-left: 2px;
  vertical-align: middle;
  animation: blink 1.1s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 0; }
}

/* Floating Badges */
.float-badge {
  position: absolute;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 12.5px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 7px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  white-space: nowrap;
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}
.badge-react {
  top: -18px; right: -30px;
  background: rgba(97, 218, 251, 0.12);
  color: #61dafb;
  border-color: rgba(97,218,251,0.25);
  animation: float 5s ease-in-out infinite 0.5s;
}
.badge-dotnet {
  bottom: 50px; right: -40px;
  background: rgba(139,92,246,0.12);
  color: #a78bfa;
  border-color: rgba(139,92,246,0.25);
  animation: float 5s ease-in-out infinite 1s;
}
.badge-sql {
  bottom: -16px; left: -20px;
  background: rgba(59,130,246,0.12);
  color: #60a5fa;
  border-color: rgba(59,130,246,0.25);
  animation: float 5s ease-in-out infinite 1.5s;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
}
.scroll-indicator span {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.25);
}
.scroll-mouse {
  width: 24px; height: 38px;
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 7px;
}
.scroll-wheel {
  width: 3px; height: 8px;
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
  animation: scroll-anim 1.8s ease infinite;
}
@keyframes scroll-anim {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}

/* Responsive */
@media (max-width: 1100px) {
  .hero-title { font-size: 54px; }
  .visual-float { width: 360px; }
}
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 60px;
  }
  .hero-desc { max-width: 100%; margin: 0 auto 36px auto; }
  .hero-actions { justify-content: center; max-width: 500px; margin: 0 auto 44px auto; }
  .stats-row { justify-content: center; }
  .badge { justify-content: center; }
  .role-row { display: flex; justify-content: center; }
  .visual-float { width: 100%; max-width: 420px; margin: 0 auto; }
  .float-badge { display: none; }
  .scroll-indicator { display: none; }
}
@media (max-width: 600px) {
  .hero-title { font-size: 42px; letter-spacing: -1px; }
  .hero-section { padding: 120px 6% 60px; }
  .hero-actions { flex-direction: column; width: 100%; }
  .hero-actions .btn { width: 100%; justify-content: center; }
}
@media (max-width: 480px) {
  .hero-title { font-size: 34px; }
  .role-chip { font-size: 15px; padding: 6px 16px; }
  .stats-row { flex-wrap: wrap; gap: 16px; justify-content: center; }
  .stat-divider { display: none; }
  .stat-item { width: 40%; align-items: center; }
  .stat-num { font-size: 24px; }
  .visual-float { width: 100%; }
  .code-body { padding: 20px 15px 15px; overflow-x: auto; }
  code { font-size: 12px; }
}
</style>
