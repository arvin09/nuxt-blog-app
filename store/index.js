import Vuex from 'vuex';
import Cookie from 'js-cookie';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                )
                state.loadedPosts[postIndex] = editedPost;
            },
            setToken(state, token) {
                state.token = token;
            },
            clearToken(state) {
                state.token = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                .$get('/posts.json')
                .then(data => {
                    const postsArray = [];
                    for(const key in data) {
                        postsArray.push({...data[key], id: key});
                    }
                    vuexContext.commit('setPosts', postsArray);
                })
                .catch(e => context.error(e));
            },
            setPosts(vuexContext, posts) {  
                vuexContext.commit('setPosts', posts);
            },
            addPost(vuexContext, post) {
                const createdPost = { ...post, updatedDate: new Date()}
                return this.$axios
                .$post(`/posts.json?auth=${vuexContext.state.token}`, createdPost)
                .then(data => {
                    vuexContext.commit('addPost', { ...createdPost, id: data.name })
                })
                .catch((e) => console.log(e));
            },
            editPost(vuexContext, editedPost) {
                return this.$axios
                .$put(`/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
                .then(data => {
                    vuexContext.commit('editPost', editedPost);
                })
                .catch(e => console.log(e))
            },
            authenticateUser(vuexContext, authData) {
                let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`
                if(!authData.isLogin) {
                    authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`;
                }
                return this.$axios
                .$post(authUrl, 
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(result => {
                    const token = result.idToken;
                    const tokenExpiration = parseInt (result.expiresIn * 1000);

                    vuexContext.commit('setToken', token);
                    localStorage.setItem('token', token);
                    Cookie.set('token', token);

                    localStorage.setItem('tokenExpiration', new Date().getTime() + tokenExpiration);
                    Cookie.set('tokenExpiration', new Date().getTime() + tokenExpiration);
                    return this.$axios.post('http://localhost:3000/api/track-data', {data: 'Authenticated !'})
                })
                .catch(e => console.log(e))
            },
            initAuth(vuexContext, req) {
                let token;
                let tokenExpiration;
                if(req) {
                    if(!req.headers.cookie) {
                        return;
                    }
                    const tokenCookie = req.headers.cookie
                    .split(';')
                    .find(c => c.trim().startsWith('token='));

                    if(!tokenCookie) {
                        return;
                    }
                    token = tokenCookie.split('=')[1];
                    tokenExpiration = req.headers.cookie
                    .split(';')
                    .find(c => c.trim().startsWith('tokenExpiration='))
                    .split("=")[1];

                } else if(process.client) {
                    token = localStorage.getItem('token');
                    tokenExpiration = localStorage.getItem('tokenExpiration');
                }
                if(!token || new Date().getTime() > +tokenExpiration) {
                    console.log('No Token or invalid Token');
                    vuexContext.commit('clearToken');
                    return;
                }
                vuexContext.commit('setToken', token);
            },
            logout(vuexContext) {
                vuexContext.commit('clearToken');
                Cookie.remove('token');
                Cookie.remove('tokenExpiration');
                if(process.client) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('tokenExpiration');
                }
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}

export default createStore;