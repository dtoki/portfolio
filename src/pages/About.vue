<template>
  <BlankLayout :show-logo="true">
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->

    <!-- -->
    <div class="container">
      <div class="row align-items-center">
        <h1>hi there 👋🏽, i'm Oxdt</h1>
        <p>a software / site reliability engineer from vancouver, canada 🇨🇦. i'm interested in cloud-native
          computing, distributed and embedded systems engineering. I enjoy working in the production operations space, security and automation tooling for developers; and the occasional hacking with microcontrollers.</p>
        <div style="display: inline-flex;">
          <p>checkout my <a href="https://linkedin.com/in/dtoki" target="_blank">resume</a>, visit my <a href="/blog">blog</a>, or say hi to me on <a
              href="http://x.com/0xdtoki" target="_blank">x</a></p>
        </div>
        <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation" />


      </div>
      <div>
        <!-- <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/> -->
      </div>
    </div>

    <!-- List posts -->
    <!-- <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div> -->

  </BlankLayout>
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '../assets/anim/monkey-dance.json'

export default {
  name: 'app',
  components: {
    'lottie': Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1
    }
  },
  metaInfo : {
    title: 'about'
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },

    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: Lora;
}
</style>
