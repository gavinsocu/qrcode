<template>
    <div class="over">
        <h1>这是我的二维码</h1>
        <Button type="success" size="large">查看我的二维码</Button>
    </div>
    <div class="node" :style="{width:`${width-282}px`}" v-scroll>
        <codelist :datacode="mycode"/>
    </div>
</template>

<script>
// import {Button} from '@opentiny/vue';
import codelist from './codelist.vue'
export default {
    components:{
        codelist,
    },
    data(){
        return{
            width:0,
            mycode:[
                {
                    id:1,
                    name:'na',
                    url: 'https://qr.gdmuna.com/org_qr/na.jpg',
                },
                {
                    id:2,
                    name:'dch',
                    url: 'https://qr.gdmuna.com/org_qr/dch.jpg',
                },
                {
                    id:3,
                    name:'na',
                    url: 'https://qr.gdmuna.com/org_qr/na.jpg',
                },
                {
                    id:4,
                    name:'web',
                    url: 'https://ts1.cn.mm.bing.net/th/id/R-C.5245459c4835900f30183bebecb3cb55?rik=koS%2bxytGvrBRHw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0723%2fsdidjj4.jpg&ehk=WJLRakwfHBZS2aO2sK%2bCdh4ijkXwyYijy5Z2BFUdnz4%3d&risl=&pid=ImgRaw&r=0',
                }
            ]
        }
    },
    mounted() {
        this.updateWidth(); // 初始化时获取视口宽度
        window.addEventListener('resize', this.updateWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    },
    methods: {
        updateWidth() {
        this.width = window.innerWidth;
        },
    },
    directives: {
        scroll: {
            inserted(el) {
                el.addEventListener('mousewheel', function(e) {
                    e.preventDefault();
                    el.scrollLeft += e.deltaY;
                });
            }
        }
    }
}
</script>

<style scoped>
.over{
    text-align: center;
}

.node{
    margin-top: 20px;
    border: 5px solid black;
    height: 550px;
    display: flex; 
    overflow: hidden;
    overflow-x: scroll; /* 允许横向滚动 */
    white-space: nowrap; /* 防止内容换行 */
}
</style>