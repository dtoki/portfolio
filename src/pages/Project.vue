<template>
  <BlankLayout :show-logo="true">
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->
    
    <div class="container">
      <div class="row align-items-center">
        <h1>Projects 🚀</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis venenatis risus, ut maximus felis rhoncus ut. Ut nec porttitor augue. Curabitur rutrum sollicitudin metus, nec sollicitudin diam consectetur in. Quisque aliquet justo magna. Pellentesque in enim enim.</p>
      </div>
    </div>
  
  </BlankLayout>
</template>

<script>
import Lottie from 'vue-lottie';

export default {
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

<style lang="scss">
h1{
  font-family: Lora;
  width:100%;
}
</style>