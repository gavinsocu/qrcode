<template>
    <div class="mdui-appbar-fixed ">
        <div class="mdui-toolbar mdui-color-indigo face">
            <!-- <a href="https://gdmuna.com/" style="text-decoration: none;">
                <logoicon style="float: left; margin-left: 18px; margin-right: 10px ;" />
            </a> -->
            <button  @click="handleNodeClick" class="mdui-btn mdui-btn-icon mdui-ripple "><i class="mdui-icon material-icons ">&#xe3c7;</i></button>
            <nalogo class="gun"></nalogo>
            <span>|</span>
            <logo />
            <div class="mdui-toolbar-spacer"></div>
            <div  @click=" goLogin "><icon type="user" extraclass="iconclass"></icon></div>
        </div>
    </div>
    <!-- :style="{ width:`${width}px`}" -->
</template>
<!-- 很明显当我使用布局组件时，这些，完全不用 -->
<script>
import logo from './logo.vue';
import logoicon from './logoicon.vue';
import nalogo from './na.logo.vue';
import icon from './icon.vue';
export default {
    components:{
        logo,icon, nalogo,logoicon,
    },
    methods:{
        goLogin(){
            this.$router.push('/login');
        },
        handleNodeClick() {
            this.$emit('listmake');
        }
    },
    // data() {
    //     return {
    //     width: 0
    //     };
    // },
    // mounted() {
    //     this.updateWidth(); // 初始化时获取视口宽度

    //     window.addEventListener('resize', this.updateWidth);
    // },
    // beforeUnmount() {
    //     window.removeEventListener('resize', this.updateWidth);
    // },
    // methods: {
    //     updateWidth() {
    //     this.width = window.innerWidth;
    //     }
    // }
}

</script>

<style scoped>
.icon{
    cursor: pointer;
}
.face{

    height: 60px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
}

.gun{
    margin-left: 25px;
}

.iconclass{
    float: right;
    margin-top: 5px;
    font-size: 30px;
    cursor: pointer;
}
</style>