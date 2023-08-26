<template>
    <div class="qrcode">
        <div v-if=" isMyCode == true"><mycode/></div>
        <div v-if="isCode==true"><codel/></div>
        <div class="start" v-if="isCode == false && isMyCode == false" >
            <h1>开启动态二维码之旅</h1>
            <Button type="primary" size="large" @click="isCode = true">创建动态二维码</Button>
            <br/><br/><br/>
            <h1>我的二维码</h1>
            <Button type="primary" size="large" @click="isMyCode = true">查看我的二维码</Button>
        </div>
    </div>

</template>

<script>
import codel from './codel.vue';
// import { Button } from '@opentiny/vue';
import mycode from './mycode.vue'
export default {
components:{
    mycode,codel,
},
props:{
        isCode:{
            type: Boolean,
            // required: true
            default: false,
        },
        isMyCode:{
            type: Boolean,
            // required: true
            default: false,
        },
    },
}
</script>

<style scoped>
.start{
    height: 300px;
    width: 100%;
    text-align: center;
}
h1{
    font-size: 80px;
    background:linear-gradient(to right,black,black) no-repeat right bottom;
    background-size: 0 5px;
    transition: background-size 3300ms;
}
h1:hover{
    background-size: 100% 5px;
    background-position-x: left;
}
</style>