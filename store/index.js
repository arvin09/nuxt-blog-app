import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit("setPosts", [
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
                        ]);
                        resolve();
                    },  1000);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    })
}

export default createStore;