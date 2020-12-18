<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList
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
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>