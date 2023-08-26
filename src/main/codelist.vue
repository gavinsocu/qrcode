<template>
    <div class="makeimg" v-for="item in datacode" :key="item.id" 
    @mouseenter=" ativeid = item.id" @mouseleave="ativeid = 0">
        <img :src="item.url" alt="加载中"/>
            <div class="cover" :class="{ 'show': ativeid == item.id }" >
                <h3>网址</h3>
                <h3 >{{ item.url }}</h3>
                <Button @click="copyText(item.url)" type="success">copy</Button>
                <hr>
                <h3>名称</h3>
                <h3 >{{ item.name }}</h3>
                <Button type="warning">更换名称</Button>
                <hr>
                <h3>更换静态二维码</h3>
                <FileUpload size="small" :data="requestData" ref="upload" :action="action">
                    <template #trigger>
                        <Button type="primary">点击上传</Button>
                    </template>
                </FileUpload>
            </div>
    </div>
</template>

<script>
// import {Button,FileUpload} from '@opentiny/vue';
export default {
    components:{
        // Button,FileUpload
    },
    props:{
        datacode:{
            type:Array,
            required: true
        },
        ativeid:{  
            type:Number,
            requied:true,
        },
    },
    data(){
        return{
            width:0,
            requestData: {
            id: 123
            },
            action: 'http://localhost:3000/api/upload'
        }
    },
    methods: {
        copyText(text) {
            this.copyToClipboard(text);
            },
            copyToClipboard(text) {
            navigator.clipboard.writeText(text)
            .then(() => {
            alert("已复制到剪贴板: " + text);
            })
            .catch((error) => {
            alert("复制失败: " + error);
            });
            console.log(text);
    }
    },
}

</script>

<style scoped>

.makeimg{
    margin: 5px;
    width: 380px;
    border: 1px solid #999;
    position: relative;
    box-shadow: 8px 8px 13px rgba(0, 0, 0, 0.3);
}
.makeimg:hover{
    box-shadow: none;
    transition: all 1000ms;
}

.cover {
    top:0;
    left: 0;
	width: 380px;
	height: 100%;
	text-align: center;
	position: absolute;
	background:linear-gradient(to right,rgba(51, 83,105, 0.9),rgba(51, 83,105, 0.9)) no-repeat right bottom;
    box-shadow: 8px 8px 13px rgba(0, 0, 0, 0.3);
    border-bottom:1px solid black;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 1000ms;
}
/* 鼠标hover,显示遮罩,设置过渡时间 */
.cover.show  {
    opacity: 1;
    transform: translateY(0);
}
img{
    object-fit: cover;
    width: 380px; /* 图片宽度填充容器 */
    height: 100%;
}
h3{
    color: white;
}
hr{
    color: #999;
    size: 0.2px;
    margin-bottom: 40px;
    margin-top: 40px;
}
</style>