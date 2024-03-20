<template>
    <img class="logo" src="../assets/img.png"/>
    <h3>Login</h3>
    <Form  @submit="Login">
        <div class="container">
            <div class="mb-3 row justify-content-center">
                <div class="col-md-3">
                    <label for="formGroupExampleInput2" class="form-label">Email</label>
                    <Field type="text"  v-model="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter email" name="email" rules="required|email"  />
                    <ErrorMessage class="danger" name="email" />
                    <br />
                </div>
            </div>
            <div class="mb-3 row justify-content-center">
                <div class="col-md-3">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <Field type="password" v-model="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter password" name="password" rules="required"  />
                    <ErrorMessage class="danger" name="password" />
                    <br />
                </div>
            </div>
            <div class="mb-3 row justify-content-center">
                <div class="col-md-3 vikas">
                <button class="btn btn-primary form-control">Submit</button>
                </div>
            </div>
            <div class="mb-3">
                <router-link  to="/sign-up">SignUp</router-link>
            </div>
        </div>
    </Form>
</template>

<style>
.danger{
    color: red;
}
</style>
<script >
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { Form, Field, ErrorMessage,defineRule } from "vee-validate";

defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
});
defineRule('email', value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }
    // Check if email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return 'This field must be a valid email';
    }
    return true;
});
export default {
    name: "SignUp",
    data()
    {
        return {
            email : "",
            password : ""
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    methods:{
        async Login(submitEvent){
            let result = await axios.get(
                `http://localhost:3000/user?email=${submitEvent.email}&password=${submitEvent.password}`
            )
            if(result.status === 200 && result.data.length > 0){
                toast.success('Login successfully.');
                localStorage.setItem("userInfo",JSON.stringify(result.data[0]));
                await this.$router.push({name: 'Home'})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('userInfo');
        if(user) {
            this.$router.push({name: 'Home'})
        }
    }
}
</script>
<style>
.logo{
    height: 100px;
    width: 100px;
}
.register input{

}
</style>
