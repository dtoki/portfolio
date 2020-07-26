<template>
  <BlankLayout :show-logo="true">
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->
    
    <!-- -->
    <div>
      <div class="row align-items-center">
        <h1>Hi, I am Dolapo 👋</h1>
        <p>A Software Developer from Vancouver, Canada 🇨🇦. I'm interested in cloud-native computing, distributed systems and embedded systems engineering. I enjoy working in problem spaces related to scaling and automation tools for developers.</p>
        <div style="display: inline-flex;">
          <p>Checkout my <a href="#bottom">resume</a>, visit the <a href="/blog">blog</a>, or say hi to me on <a href="/contact">twitter</a></p>
          <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
        </div>
        

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
        defaultOptions: {animationData: animationData.default},
        animationSpeed: 1
      }
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
h1{
  font-family: Lora;
}
</style>