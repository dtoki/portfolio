<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    
    <!-- -->

    <!-- List posts -->
    <h5 class="test_h5">highlighted writings:</h5>
    <div class="posts">
      <PostCardMini v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <hr class="test_h5">

    <h5 class="test_h5">most recent writings:</h5> 
    <div class="posts">
      <PostCardMini v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<style lang="scss" scoped>
  .test_h5 {
    max-width: var(--content-width);
    margin-left: auto;
    margin-right: auto;
    font-size: 1.1rem;
    color: var(--gray-dark);
    font-family: 'Poppins', sans-serif !important;
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
    title: 'Hello, world!'
  }
}
</script>
