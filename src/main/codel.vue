<template>
    <div class="min">
        <h1>请在这里放一个二维码图片</h1>
        <h2>(其实可以是任何图片)</h2>
        <div class="file">
            <file/>
        </div>
        <button type="success" size="large">点击生成</button>
        <div class="kuang">
            <output class="kuang2" type="text"/>
        </div>
    </div>
</template>

<script>
import file from '../components/file.vue'
// import {Button} from '@opentiny/vue'
export default {
    components:{
        file,
    }
}
</script>

<style scoped>
.min{
    text-align: center;
}
Button{
    margin-top: 20px;
}
.kuang{
    margin-top: 20px;
    height: 32px;
    width: 405px;
    border: 2px solid #8FC1B1;
}
.kuang2{
    height: 30px;
    width: 400px;
    border: none;
    outline: none;
}
</style>