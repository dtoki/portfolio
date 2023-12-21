<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" /> 
      </div>
      
      <div class="header__right">
        <nav>
          <a href="/about" class="hvr-grow">about</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/blog" class="hvr-grow">blog</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <!-- <a href="/project" class="hvr-grow">projects</a>&nbsp;&nbsp;&nbsp;&nbsp; -->
          <!-- <a href="/contact" class="hvr-hang">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp; -->
        </nav>    
        <ToggleTheme />
      </div>
    </header>
    <transition name="fade" appear> 
      <main class="main">
        <slot/>
      </main>
    </transition>
    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Lora:700&display=swap');

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
nav {
  > a {
    text-decoration: none;
    font-family: Lora, sans-serif;
    font-weight: 700;
    transition: all 0.3s ease 0s;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }  
}
// animate page fade in
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}
</style>
