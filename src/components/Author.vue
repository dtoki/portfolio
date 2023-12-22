<template>
	<div class="author">
		<g-image alt="Author image" class="author__image" src="~/assets/images/author2.jpeg" width="180" height="180" blur="5" />
		<div class="author__container">
			<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>
		<p class="author__intro">
			<a > personal Blog by <b>0xdt</b> </a>
		</p>
		</div>	
		<p v-if="showLinks" class="author__links">
			<a href="//twitter.com/gridsome">twitter</a>
			<a href="//github.com/gridsome/gridsome-starter-blog">
				<!-- <lottie style="display: inline-block; overflow:unset;" :options="defaultOptions" :height="25" :width="25" v-on:animCreated="handleAnimation"/> -->
			 github
			</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '../assets/anim/lf30_editor_Qxe03Q.json'

export default {
	props: ['showTitle', 'showLinks'],
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
		}
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: var(--content-width);
	// text-align: center;
	padding: calc(var(--space) / 2) 0;

	b{
		font-family: Lora;
	}

	&__container {
		display: inline-block; 
		vertical-align:middle; 
		margin-left: var(--card-mini-padding);
	}

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
		a {
			color: var(--gray-dark) !important;
		}
	}

	&__site-title {
		font-size: 1.5em;
		font-weight: 700;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
