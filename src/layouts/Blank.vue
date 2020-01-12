<template>
  <div class="full_height">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <nav>
          <a href="/about" class="hvr-hang">About</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/blog" class="hvr-hang">Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/project" class="hvr-hang">Projects</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <!-- <a href="/contact" class="hvr-hang">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp; -->
        </nav>
        <ToggleTheme />
      </div>
    </header>

    <div class="full_height">
      <div class="container full_height">
        <div class="row full_height">
          <!-- <div class="col align-self-start">One of three columns</div> -->
          <main class="main align-items-center align-middle">
            <slot/>
          </main>
          <!-- <div class="col align-self-end">One of three columns</div> -->
          <footer class="footer col align-items-end align-bottom">
            <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
            <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
          </footer>
        </div>
      </div>

      
      

      
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
};
</script>

<style lang="scss">
main {
  align-self: flex-end !important;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
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
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
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
</style>
