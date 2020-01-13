<template>
	<g-link class="logo" to="/">
	  <span class="logo__text">
	    <!-- &larr; &larr; {{ $static.metadata.siteName }} -->
			&lt;&lt;
	  </span>
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
	text-decoration: none;
  color: var(--body-color)!important;
	font-size: .9em;
	
	&__text {
		font-family: Lora;
		font-size: 1.3em;
		font-weight: 700;
	}

	&__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 40px;
		margin-right: .5em;
	}
}
</style>
