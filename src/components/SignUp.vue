<template>
    <img class="logo" src="../assets/img.png"/>
  <h3>Sign up</h3>
    <Form  @submit="signUp">
      <div class="container">
        <div class="mb-3 row justify-content-center">
            <div class="col-md-3">
                <label for="formGroupExampleInput2" class="form-label">Name</label>
                <Field type="text"  v-model="name" class="form-control" id="formGroupExampleInput2" placeholder="Enter name" name="name" rules="required"  />
                <ErrorMessage class="danger" name="name" />
            </div>
        </div>
        <div class="mb-3 row justify-content-center">
            <div class="col-md-3">
              <label for="formGroupExampleInput2" class="form-label">Email</label>
              <Field type="email"  v-model="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter email" name="email" rules="required|email"  />
              <ErrorMessage class="danger" name="email" />
            </div>
        </div>
        <div class="mb-3 row justify-content-center">
            <div class="col-md-3">
              <label for="formGroupExampleInput2" class="form-label">Password</label>
              <Field type="password" v-model="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter password" name="password" rules="required"  />
              <ErrorMessage class="danger" name="password" />
            </div>
        </div>
        <div class="mb-3 row justify-content-center">
            <div class="col-md-3">
                <button type="submit" class="btn btn-primary form-control"> Submit </button>
            </div>
        </div>
        <div class="mb-3">
            <router-link  to="/login">Login</router-link>
        </div>
      </div>
    </Form>
</template>

<script>
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
            name : "",
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
      async signUp(submitEvent){

            let result = await axios.post("http://localhost:3000/user",{
              email : submitEvent.email,
              password : submitEvent.password,
              name : submitEvent.name
            })
            if(result.status === 201){
                toast.success('Your account created successfully.');
                localStorage.setItem("userInfo",JSON.stringify(result.data));
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