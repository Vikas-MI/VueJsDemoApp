<template>
    <Header></Header>
    <h3>Add restaurant</h3>
    <Form  @submit="addRestaurant">
        <div class="container">
            <div class="mb-3 row justify-content-center">
                <div class="col-md-3">
                    <label for="formGroupExampleInput2" class="form-label">Name</label>
                    <Field type="text"  v-model="restaurant.name" class="form-control" id="formGroupExampleInput2" placeholder="Enter name" name="name" rules="required"  />
                    <ErrorMessage class="danger" name="name" />
                </div>
            </div>
            <div class="mb-3 row justify-content-center">
                <div class="col-md-3">
                    <label for="formGroupExampleInput2" class="form-label">Contact</label>
                    <Field type="text" maxlength="10" pattern="[1-9]{1}[0-9]{9}"  v-model="restaurant.contact" class="form-control" id="formGroupExampleInput2" placeholder="Enter contact" name="contact" rules="required|mobile"  />
                    <ErrorMessage class="danger" name="contact" />
                </div>
            </div>
            <div class="mb-3 row justify-content-center">
                <div class="col-md-3">
                    <label for="formGroupExampleInput2" class="form-label">Address</label>
                    <Field type="text" v-model="restaurant.address" class="form-control" id="formGroupExampleInput2" placeholder="Enter address" name="address" rules="required"  />
                    <ErrorMessage class="danger" name="address" />
                </div>
            </div>
            <div class="mb-3 row justify-content-center">
                <div class="col-md-3">
                    <button type="submit" class="btn btn-primary form-control"> Submit </button>
                </div>
            </div>
        </div>
    </Form>
</template>

<script>

import {defineRule, ErrorMessage, Field, Form} from "vee-validate";
import axios from "axios";
import Header from "@/components/Header.vue";
import {toast} from "vue3-toastify";

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
defineRule('mobile', value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }
    if (value.length !== 10) {
        return "Please provide 10 Digit numeric value";
    }
    // Check if email
    if (!/^[1-9]{1}[0-9]{9}$/.test(value)) {
        return 'This field must be a valid mobile';
    }
    return true;
});

export default {
    name: "Add",
    data()
    {
        return {
            restaurant: {
                name : "",
                contact : "",
                address : ""
            }
        }
    },
    components: {
        Header,
        Form,
        Field,
        ErrorMessage,
    },
    methods : {
        async addRestaurant(submitEvent){
            let result = await axios.post("http://localhost:3000/restaurant",{
                name : submitEvent.name,
                contact : submitEvent.contact,
                address : submitEvent.address
            })
            if(result.status === 201){
                toast.success('Record Added successfully.');
            }
            await this.$router.push({name: 'Home'})
        }
    }
}
</script>
<style>

</style>