<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>
<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
export default {
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Arvin',
                title: 'Amazing post!',
                content: 'Super amazing! thanks',
                thumbnailLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PzgGejsPxVgxwXSsWT3PXX3qB-D-ZTpApw&usqp=CAU'
            }
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>