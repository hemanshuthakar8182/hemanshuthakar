<template>
  <nav class="navbar glass" :class="{ 'scrolled': isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="logo">
      <a href="/" class="logo-link" @click.prevent="handleNavClick({ id: 'home' }, $event)">
        <img src="/logo.svg" alt="Hemanshu Thakar" class="logo-img" />
      </a>
    </div>
    
    <div class="nav-links-wrapper">
      <ul class="nav-links" ref="navLinksList">
        <li v-for="item in navItems" :key="item.id" class="nav-item">
          <a href="#"
             class="nav-link" 
             :class="{ 'active': activeSection === item.id }"
             @click.prevent="handleNavClick(item, $event)"
             :ref="el => setNavLinkRef(el, item.id)">
            {{ item.label }}
          </a>
        </li>
      </ul>
      <div class="active-indicator" :style="indicatorStyle"></div>
    </div>

    <div class="nav-cta">
      <a href="#" class="btn btn-primary nav-btn" @click.prevent="handleNavClick({ id: 'contact' }, $event)">Start Project</a>
    </div>

    <!-- Mobile Menu Toggle -->
    <div class="mobile-toggle" @click="toggleMobileMenu">
      <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </div>

    <!-- Mobile Menu Backdrop -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="mobile-backdrop" @click="toggleMobileMenu"></div>
    </transition>

    <!-- Mobile Nav Overlay -->
    <transition name="mobile-nav">
      <div v-if="isMobileMenuOpen" class="mobile-nav-overlay glass">
        <ul class="mobile-nav-links">
          <li v-for="item in navItems" :key="item.id" class="mobile-nav-item">
            <a href="#" 
               class="mobile-nav-link"
               :class="{ 'active': activeSection === item.id }"
               @click.prevent="handleNavClick(item, $event)">
              {{ item.label }}
            </a>
          </li>
          <li class="mobile-nav-item" style="margin-top: 20px;">
            <a href="#" class="btn btn-primary nav-btn" style="width: 100%; justify-content: center;" @click.prevent="handleNavClick({ id: 'contact' }, $event)">Start Project</a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isScrolled = ref(false)
const activeSection = ref('home')
const navLinkRefs = ref({})
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

const setNavLinkRef = (el, id) => {
  if (el) navLinkRefs.value[id] = el
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 100
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    activeSection.value = id
  }
}

const handleNavClick = (item, event) => {
  if (event) event.preventDefault()
  activeSection.value = item.id
  isMobileMenuOpen.value = false // Close mobile menu if open

  if (route.path !== '/') {
    // Navigate to home first, then scroll after route settles
    router.push({ path: '/', query: { scrollTo: item.id } })
  } else {
    scrollToSection(item.id)
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  
  if (route.path === '/projects') {
    activeSection.value = 'projects'
    return
  }

  for (const item of navItems) {
    const el = document.getElementById(item.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 200 && rect.bottom >= 200) {
        activeSection.value = item.id
        break
      }
    }
  }
}

watch(() => route.path, (newPath) => {
  if (newPath === '/projects') {
    activeSection.value = 'projects'
  } else {
    setTimeout(handleScroll, 100)
  }
})

// After navigating home via scrollTo query param, scroll to target section
watch(() => route.query.scrollTo, (sectionId) => {
  if (sectionId) {
    setTimeout(() => {
      scrollToSection(sectionId)
      // Clean up the query param
      router.replace({ path: '/', query: {} })
    }, 200)
  }
})

const indicatorStyle = computed(() => {
  const activeEl = navLinkRefs.value[activeSection.value]
  if (!activeEl) return { opacity: 0 }
  
  return {
    width: `${activeEl.offsetWidth - 24}px`, // Slight padding adjustment
    left: `${activeEl.offsetLeft + 12}px`,
    opacity: 1
  }
})

onMounted(() => {
  if (route.path === '/projects') {
    activeSection.value = 'projects'
  }
  // Handle scrollTo query on initial load
  if (route.query.scrollTo) {
    setTimeout(() => {
      scrollToSection(route.query.scrollTo)
      router.replace({ path: '/', query: {} })
    }, 300)
  }
  window.addEventListener('scroll', handleScroll)
  // Ensure we measure after mount
  nextTick(() => {
    handleScroll()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 1100px;
  padding: 10px 28px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
  gap: 12px;
}

.navbar.scrolled {
  top: 12px;
  background: rgba(11, 22, 34, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 10px 24px;
}

.navbar.menu-open {
  background: #0b1622;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.logo-link {
  font-weight: 800;
  font-size: 22px;
  text-decoration: none;
  letter-spacing: -1px;
  color: #fff;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.08);
}

.nav-links-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 0;
  flex-wrap: nowrap;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 13.5px;
  transition: var(--transition);
  padding: 10px 12px;
  display: block;
  white-space: nowrap;
  cursor: pointer;
}

.nav-link:hover, .nav-link.active {
  color: #fff;
}

.active-indicator {
  position: absolute;
  bottom: 6px;
  height: 2px;
  background: var(--accent);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 10px;
  box-shadow: 0 0 10px var(--accent-glow);
  pointer-events: none;
}

.nav-cta {
  flex-shrink: 0;
}

.nav-btn {
  padding: 8px 20px !important;
  font-size: 13px !important;
  border-radius: 50px;
  white-space: nowrap;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.mobile-toggle {
  display: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}

.mobile-nav-overlay {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px;
  border-radius: 0 0 20px 20px;
  background: #0b1622;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.mobile-nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: block;
  padding: 10px;
  border-radius: 10px;
  transition: var(--transition);
  text-align: center;
}

.mobile-nav-link:hover, .mobile-nav-link.active {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.mobile-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(8, 15, 24, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: -1;
}

.mobile-nav-enter-active, .mobile-nav-leave-active {
  transition: all 0.3s ease;
}
.mobile-nav-enter-from, .mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

@media (max-width: 900px) {
  .nav-links-wrapper, .nav-cta {
    display: none;
  }
  .mobile-toggle {
    display: block;
  }
  .navbar {
    padding: 12px 20px;
    width: 95%;
  }
}
</style>
