<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit-post="onSubmitPost" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  middleware: ['check-auth','auth'],
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitPost(postData) {
      this.$store.dispatch('addPost', postData)
      .then(() => {
        this.$router.push('/admin');
      });
    },
  },
};
</script>
<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>