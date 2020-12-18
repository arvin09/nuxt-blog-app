<template>
    <section class="post-list">
      <PostPreview
        id="1"
        :is-admin= "isAdmin"
        title="Hello there - First post!"
        previewText="This is my first post!"
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuEjSjquLk26I6BDa-MZjR82r3kO10aYoUw&usqp=CAU"
      />
      <PostPreview
        id="2"
        :is-admin= "isAdmin"
        title="Hello there - Second post!"
        previewText="This is my second post!"
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PzgGejsPxVgxwXSsWT3PXX3qB-D-ZTpApw&usqp=CAU"
      />
      <PostPreview
        id="3"
        :is-admin= "isAdmin"
        title="Hello there - Third post!"
        previewText="This is my first post!"
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hZQsVYLg61aIJigQIq4Z9h1nZlHAmyb7nw&usqp=CAU"
      />
    </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>

