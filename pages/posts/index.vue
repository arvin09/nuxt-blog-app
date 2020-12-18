<template>
    <div class="post-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>
<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList,
  },
    asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "Amazing post! First",
              previewText: "Super amazing! thanks - First",
              thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PzgGejsPxVgxwXSsWT3PXX3qB-D-ZTpApw&usqp=CAU",
            },
            {
              id: "2",
              title: "Amazing post! Second",
              previewText: "Super amazing! thanks - Second",
              thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PzgGejsPxVgxwXSsWT3PXX3qB-D-ZTpApw&usqp=CAU",
            },
            {
              id: "3",
              title: "Amazing post! Third",
              previewText: "Super amazing! thanks - Third",
              thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PzgGejsPxVgxwXSsWT3PXX3qB-D-ZTpApw&usqp=CAU",
            },
          ],
        });
      }, 1000);
    })
    .then( data => {
      return data;
    })
    .catch( e => {
      context.error(e);
    })
  }
};
</script>
<style scoped>
.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>