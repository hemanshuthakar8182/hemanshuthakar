<template>
  <section id="contact">
    <div class="container contact-container">
      <div class="contact-header text-center reveal">
        <span class="section-tag">Get in Touch</span>
        <h2 class="section-title">Let’s innovate <span class="gradient-text">together.</span></h2>
        <p class="contact-subtitle">
          Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
      </div>
      
      <div class="contact-wrapper">
        <form @submit.prevent="handleSubmit" class="contact-form glass reveal">
          <div class="form-row">
            <div class="input-container">
              <input type="text" id="name" placeholder=" " required />
              <label for="name">Your Name</label>
              <div class="focus-line"></div>
            </div>
            <div class="input-container">
              <input type="email" id="email" placeholder=" " required />
              <label for="email">Email Address</label>
              <div class="focus-line"></div>
            </div>
          </div>
          
          <div class="input-container">
            <input type="text" id="subject" placeholder=" " required />
            <label for="subject">Subject</label>
            <div class="focus-line"></div>
          </div>
          
          <div class="input-container">
            <textarea id="message" rows="5" placeholder=" " required></textarea>
            <label for="message">Your Message</label>
            <div class="focus-line"></div>
          </div>
          
          <button type="submit" class="btn btn-primary submit-btn">
            Send Message <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  alert('Message sent successfully!')
}
</script>

<style scoped>
.text-center { text-align: center; }

.contact-container { max-width: 900px; }

.contact-subtitle {
  color: var(--text-secondary);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 60px;
}

.contact-form {
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.input-container {
  position: relative;
  width: 100%;
}

.input-container input,
.input-container textarea {
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border-white);
  outline: none;
  transition: var(--transition);
}

.input-container label {
  position: absolute;
  top: 12px;
  left: 0;
  color: var(--text-secondary);
  pointer-events: none;
  transition: var(--transition);
  font-size: 16px;
}

.focus-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: var(--transition);
  box-shadow: 0 0 10px var(--accent-glow);
}

.input-container input:focus ~ label,
.input-container input:not(:placeholder-shown) ~ label,
.input-container textarea:focus ~ label,
.input-container textarea:not(:placeholder-shown) ~ label {
  top: -20px;
  font-size: 13px;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.input-container input:focus ~ .focus-line,
.input-container textarea:focus ~ .focus-line {
  width: 100%;
}

.submit-btn {
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  padding: 16px;
}

@media (max-width: 768px) {
  .contact-form { padding: 40px 20px; }
  .form-row { grid-template-columns: 1fr; gap: 40px; }
}

@media (max-width: 480px) {
  .contact-form { padding: 30px 20px; border-radius: 20px; gap: 20px; }
  .form-row { gap: 20px; }
  .contact-subtitle { font-size: 14.5px; margin-bottom: 30px; }
  .input-container input, .input-container textarea { font-size: 14px; padding: 10px 0; }
  .submit-btn { padding: 12px; font-size: 14px; }
}
</style>
