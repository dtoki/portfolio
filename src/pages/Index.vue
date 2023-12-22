<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    <!-- List posts -->
    <!-- <h6 class="_h5">writings:</h6> -->
    <div class="posts">
      <PostCardMini v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <!-- <hr class="_h5">

    <h6 class="_h5">most recent writings:</h6> 
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div> -->

  </Layout>
</template>

<style lang="scss">
  ._h5 {
    max-width: var(--content-width);
    margin-left: auto;
    margin-right: auto;
    font-size: 1.1rem;
    color: var(--gray-dark);
    font-family: 'Poppins', sans-serif !important;
    margin-bottom: 20px;
  }
  nav {
    a{
      //Hover Transition property
      -webkit-transition: all 0.5s ease 0s !important;
      transition: all 0.5s ease 0s !important;
      -webkit-transition-property: all !important;
      transition-property: all !important;
    }
  }
</style>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import PostCardMini from '~/components/PostCardMini.vue'

export default {
  components: {
    Author,
    PostCard,
    PostCardMini
  },
  metaInfo: {
    title: '👋🏾'
  }
}
</script>
