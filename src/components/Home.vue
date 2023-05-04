<template>
    <Header></Header>
    <div class="container mt-10">
        <div class="row justify-content-left">
            <div class="col-md-4 col-xl-3">
                <div class="card bg-c-blue order-card">
                    <div class="card-block">
                        <h6 class="m-b-20">Total restaurant</h6>
                        <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>{{ restaurant.length }}</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
    <div>
    </div>
    <div class="container text-end mt-10">
        <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6 input-group mb-3">
                <input type="text" v-model="searchQuery" class="form-control" id="searchQuery" aria-label="searchQuery  " aria-describedby="basic-addon2">
                 <span v-if="searchQuery !== ''">
                    <button  @click="clear()" class="input-group-text" id="basic-addon2">x</button>
                 </span>
            </div>
        </div>
    </div>
    <div class="container mt-10">
    <table class="table">
        <thead  class="table-secondary">
            <tr>
                <th width="20%" @click="sortList('id')" style="border-top-left-radius: 15px 15px;" scope="col">
                    ID
                    <svg style="height: 10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V288H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H448V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 109.3V224H192 128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96zM128 192h64V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192zM448 320H384V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320z"/></svg>
                </th>
                <th width="20%" @click="sortList('id')" scope="col">
                    NAME
                    <svg style="height: 10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V288H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H448V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 109.3V224H192 128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96zM128 192h64V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192zM448 320H384V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320z"/></svg>
                </th>
                <th width="20%" @click="sortList('id')" scope="col">
                    CONTACT
                    <svg style="height: 10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V288H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H448V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 109.3V224H192 128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96zM128 192h64V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192zM448 320H384V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320z"/></svg>
                </th>
                <th width="20%" @click="sortList('id')" scope="col">
                    ADDRESS
                    <svg style="height: 10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V288H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H448V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 109.3V224H192 128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96zM128 192h64V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192zM448 320H384V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320z"/></svg>
                </th>
                <th width="20%" style="border-top-right-radius: 15px 15px;" scope="col">ACTION</th>
            </tr>
        </thead>
            <tbody v-if="filteredItems.length > 0 " v-for="item in filteredItems" :key=item.id>
                <tr class="blank-tr"></tr>
                <tr class="align-middle tr-after" >
                        <th width="20%">{{item.id}}</th>
                        <th width="20%">{{item.name}}</th>
                        <th width="20%">{{item.contact}}</th>
                        <th width="20%">{{item.address}}</th>
                        <th width="20%"><router-link :to="'/update-restaurant/'+item.id"> <font-awesome-icon icon="pen"  class="pen" />
                        </router-link>  |  <a @click="deleteRestaurant(item.id)" href="#"><font-awesome-icon icon="trash" class="trash" /></a> </th>
                </tr>
            </tbody>
            <tbody v-else>
                <tr class="no-records-found">
                    <td colspan="5">No matching records found</td>
                </tr>
            </tbody>
    </table>
    <div class="container text-end">
        <div v-if="filteredItems.length > 0 ">
            <vue-awesome-paginate
                :total-items=totalFilteredData.length
                :items-per-page="10"
                :max-pages-shown="10"
                v-model="currentPage"
                :on-click="onClickHandler"
            />
        </div>
    </div>
</div>
</template>
<script>

import {toast} from "vue3-toastify";
import Header from "@/components/Header.vue";
import axios from "axios";
import ConfirmDialogue from "@/components/ConfirmDialogue.vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";

export default {
    name:"Home",
    components : {
        VueAwesomePaginate,
        ConfirmDialogue,
        Header
    },
    watch: {
        // whenever question changes, this function will run
    },
    computed:{
        pages() {
            let pages = [];
            for (let i = 1; i <= Math.ceil(this.restaurant.length / this.itemsPerPage); i++) {
                pages.push(i);
            }
            return pages;
        },
        filteredItems() {
            let filteredData = this.restaurant;
            if(this.searchQuery !== ''){
                filteredData =  this.restaurant.filter(user => {
                    return user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        user.contact.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        user.address.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
                this.totalFilteredData = filteredData
                const totalPages = Math.ceil(filteredData.length / this.itemsPerPage);
                const start = (totalPages - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return filteredData.slice(start, end);
            }
            this.totalFilteredData = filteredData
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return filteredData.slice(start, end);
        },
    },
    data(){
        return{
            name :'',
            restaurant : [],
            currentPage: 1,
            itemsPerPage: 10,
            searchQuery: '',
            totalFilteredData : '',
            sortedbyASC : "asc",
            sortBy : "id"
        }
    },
    mounted() {
        this.loadData()
    },
    methods:{
        async deleteRestaurant(id){
            const ok = await this.$refs.confirmDialogue.show({
                title: 'Delete record ?',
                message: 'Are you sure you want to delete this page? It cannot be undone.',
                okButton: 'Delete Forever',
            })
            if (ok) {
                let result = await axios.delete("http://localhost:3000/restaurant/"+id)
                if(result.status === 200){
                    toast.success('Record deleted successfully.');
                    await this.$router.push({name: 'Home'})
                    await this.loadData()
                }
            }
        },
        async sortList(sortBy) {
            this.sortedbyASC = this.sortedbyASC==='asc'?'desc':'asc';
            console.log(this.sortedbyASC)
            let result = await axios.get("http://localhost:3000/restaurant?_sort="+sortBy+"&_order="+this.sortedbyASC);
            this.restaurant =  result.data
            console.log(this.restaurant)
        },
        async loadData(){
            let user = localStorage.getItem('userInfo');
            this.name = JSON.parse(user).name;
            if(!user){
                this.$router.push({name: 'Login'})
            }
            let result = await axios.get("http://localhost:3000/restaurant");
            this.restaurant = result.data
        },
        onClickHandler(page)  {
            console.log(page);
        },
        clear(){
            this.searchQuery = '';
        },
        filteredItemsInfo() {
            let filteredData = this.restaurant;
            if (this.searchQuery !== '') {
                console.log("aaa")
                filteredData = this.restaurant.filter(user => {
                    return user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        user.contact.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        user.address.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }
            return filteredData;
        }
    },
}
</script>
<style>
.input-group{
    width: 50%;
}
.table thead th {
    position: sticky;
    top: 0;
    z-index: 1;
}
.pagination-container {
    display: flex;
    column-gap: 10px;
}
.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
}
.paginate-buttons:hover {
    background-color: #d8d8d8;
}
.active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
}
.active-page:hover {
    background-color: #2988c8;
}
.pen,.trash{
    color: #1d201d;
}
.table{
    border-radius: 15px;
    outline: 1px solid gray;
}
.tr-after{
    position: relative;

}
.blank-tr{
    height: 10px;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    display: inline-block;
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
}

li.active {
    background-color: #ccc;
}

.VueCarousel-slide {
    height:100px;
    color:#FFF;
    background:#59ecff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right:1px solid #FFF;
    box-sizing:border-box;
    font-size:12px;
    text-align:center;
}
.example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
}
.mt-10{
    margin-top: 10px;
}
.order-card {
    color: #fff;
}

.bg-c-blue {
    background: linear-gradient(45deg,#4099ff,#73b4ff);
}

.bg-c-green {
    background: linear-gradient(45deg,#2ed8b6,#59e0c5);
}

.bg-c-yellow {
    background: linear-gradient(45deg,#FFB64D,#ffcb80);
}

.bg-c-pink {
    background: linear-gradient(45deg,#FF5370,#ff869a);
}

.

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    border: none;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.card .card-block {
    padding: 25px;
}

.order-card i {
    font-size: 26px;
}

.f-left {
    float: left;
}

.f-right {
    float: right;
}
.pagination-container {
    display: flex;
    column-gap: 10px;
}
.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
}
.paginate-buttons:hover {
    background-color: #d8d8d8;
}
.active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
}
.active-page:hover {
    background-color: #2988c8;
}

</style>
