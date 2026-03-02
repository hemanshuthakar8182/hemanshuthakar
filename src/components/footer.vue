<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container footer-grid">

        <!-- Brand & Tagline -->
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="/logo.svg" alt="Hemanshu Thakar" class="footer-logo-img" />
          </div>
          <p class="brand-tagline">
            Crafting scalable, modern web applications with a passion for clean code and great user experiences.
          </p>
          <div class="social-row">
            <a href="https://www.linkedin.com/in/hemanshu-thakar" target="_blank" title="LinkedIn" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/hemanshuthakar8182" target="_blank" title="GitHub" class="social-icon">
              <i class="fab fa-github"></i>
            </a>
            <a href="mailto:Himanshuthakar8181@gmail.com" title="Email" class="social-icon">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="tel:+917016283990" title="Phone" class="social-icon">
              <i class="fas fa-phone"></i>
            </a>
            <a href="https://wa.me/917016283990" target="_blank" title="WhatsApp" class="social-icon">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Quick Navigation -->
        <div class="footer-col">
          <h4 class="col-title">Navigation</h4>
          <ul>
            <li><a href="#home" @click.prevent="scrollTo('home')">Home</a></li>
            <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
            <li><a href="#skills" @click.prevent="scrollTo('skills')">Skills</a></li>
            <li><a href="#experience" @click.prevent="scrollTo('experience')">Experience</a></li>
            <li><a href="#projects" @click.prevent="scrollTo('projects')">Projects</a></li>
            <li><a href="#certificates" @click.prevent="scrollTo('certificates')">Certificates</a></li>
            <li><a href="#education" @click.prevent="scrollTo('education')">Education</a></li>
          </ul>
        </div>

        <!-- Projects column -->
        <div class="footer-col">
          <h4 class="col-title">Live Projects</h4>
          <ul>
            <li><a href="https://app.homearize.com/" target="_blank">HomeArize App</a></li>
            <li><a href="https://narodagroup.com/" target="_blank">Naroda Group</a></li>
            <li><a href="https://vibrantindiatrade.in/" target="_blank">Vibrant India Trade</a></li>
            <li><a href="https://arrowlasermachine.com/" target="_blank">Arrow Laser Machine</a></li>
            <li><a href="https://www.homearize.com/" target="_blank">HomeArize Website</a></li>
            <li><a href="https://natrajsteel.com/" target="_blank">Natraj Steel</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4 class="col-title">Get In Touch</h4>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:Himanshuthakar8181@gmail.com">Himanshuthakar8181@gmail.com</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <a href="tel:+917016283990">+91 70162 83990</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Ahmedabad, Gujarat, India</span>
          </div>
          <a href="#contact" class="hire-btn" @click.prevent="scrollTo('contact')">
            <i class="fas fa-paper-plane"></i> Hire Me
          </a>
        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; {{ new Date().getFullYear() }} <span class="gradient-text">Hemanshu Thakar</span>. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 100
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid rgba(255,255,255,0.07);
  background: rgba(8, 15, 24, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.footer-top {
  padding: 80px 8% 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr 1.6fr;
  gap: 60px;
  align-items: start;
}

/* Brand */
.brand-logo {
  margin-bottom: 20px;
}

.footer-logo-img {
  width: 64px;
  height: 64px;
  border-radius: 14px;
  display: block;
}

.brand-tagline {
  color: var(--text-secondary);
  font-size: 14.5px;
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 280px;
}

.social-row {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(59,130,246,0.3);
}

/* Columns */
.col-title {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 24px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 12px;
}

.footer-col ul li a,
.footer-col a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14.5px;
  transition: color 0.25s ease, padding-left 0.25s ease;
  display: inline-block;
}

.footer-col ul li a:hover,
.footer-col a:hover {
  color: #fff;
  padding-left: 4px;
}

/* Contact column */
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
}

.contact-item i {
  color: var(--accent);
  font-size: 13px;
  margin-top: 3px;
  flex-shrink: 0;
}

.contact-item a,
.contact-item span {
  color: var(--text-secondary);
  font-size: 14px;
  text-decoration: none;
  line-height: 1.5;
  word-break: break-all;
  transition: color 0.25s ease;
}

.contact-item a:hover {
  color: #fff;
}

.footer-col .hire-btn {
  color: #fff !important;
}

.hire-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  margin-top: 24px;
  padding: 12px 32px;
  background: var(--accent);
  color: #fff !important;
  border-radius: 50px;
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hire-btn:hover {
  background: #2563eb;
  box-shadow: 0 8px 20px rgba(59,130,246,0.4);
  transform: translateY(-2px);
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 24px 8%;
}

.footer-bottom-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  text-align: center;
}

.footer-bottom p {
  color: var(--text-secondary);
  font-size: 13.5px;
  margin: 0;
}

.built-with {
  font-size: 13px !important;
}

.built-with span {
  color: #e25555;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 40px; text-align: left; }
  .brand-logo { display: flex; justify-content: flex-start; margin-bottom: 20px; }
  .brand-tagline { margin: 0 0 24px 0; }
  .social-row { justify-content: flex-start; }
  .contact-item { flex-direction: row; align-items: flex-start; justify-content: flex-start; text-align: left; gap: 12px; }
  .contact-item i { margin-top: 3px; margin-bottom: 0; }
  .hire-btn { width: 100%; justify-content: center; margin-top: 10px; }
  .footer-col { display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
  .footer-top { padding: 60px 6% 40px; }
}

@media (max-width: 640px) {
  .footer-bottom-inner { flex-direction: column; text-align: center; gap: 8px; }
}

@media (max-width: 480px) {
  .footer-top { padding: 40px 5% 30px; }
  .footer-grid { gap: 35px; text-align: left; }
  .brand-logo { display: flex; justify-content: flex-start; margin-bottom: 20px; }
  .footer-logo-img { width: 72px; height: 72px; }
  .brand-tagline { font-size: 15px; margin: 0 0 24px 0; text-align: left; max-width: 100%; }
  .social-row { justify-content: flex-start; gap: 16px; }
  .col-title { padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 16px; text-align: left; }
  .footer-col { display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
  .footer-col ul { display: flex; flex-direction: column; gap: 10px; align-items: flex-start; }
  .footer-col ul li { margin-bottom: 0; }
  .contact-item { flex-direction: row; justify-content: flex-start; text-align: left; gap: 10px; align-items: flex-start; }
  .contact-item i { margin-top: 3px; font-size: 13px; margin-bottom: 0; }
  .hire-btn { width: 100%; justify-content: center; margin-top: 16px; padding: 14px; font-size: 15px; }
  .footer-bottom { padding: 24px 5%; }
  .footer-bottom p { font-size: 14px; line-height: 1.6; }
}
</style>
