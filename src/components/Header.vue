<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <a @click="Logout" href="#">Logout</a>
    </div>
</template>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
    margin-right: 5px;
    color: white;
    font-weight: bold;

}
</style>
<script>
import {toast} from "vue3-toastify";

export default {
    name: "Header",
    components:{
    },
    mounted() {
        let user = localStorage.getItem('userInfo');
        if(!user) {
            this.$router.push({name: 'Login'})
        }
    },
    data() {
        return {
        };
    },
    methods : {
        Logout(){
            localStorage.removeItem("userInfo");
            toast.success('Logout successfully.');
            this.$router.push({name: 'Login'})
        },
    },
    computed: {
    }
}
</script>