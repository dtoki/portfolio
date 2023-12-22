<template>
  <BlankLayout :show-logo="true">
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->

    <!-- -->
    <div class="container">
      <div class="row align-items-center">
        <h1>hi there 👋🏽, i'm Oxdt</h1>
        <p>a software / site reliability engineer from vancouver, canada 🇨🇦.</p>
        <p>i currently work in the cloud native computing space, specializing in distributed systems and production operations. my expertise lies in building tools for developers. I also occasionally dabble with micro controllers.</p>
        <div style="display: inline-flex;">
          <p>visit my <a href="/blog">blog</a>, say hi on <a
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
import * as animationData from '../assets/anim/hover-black.json'

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
