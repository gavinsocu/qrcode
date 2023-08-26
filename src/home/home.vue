<template class="mdui-drawer-body-left">
            <failMenu  @listmake=" makelist "/>
            <div style="margin-top:50px;">
                <div class="mdui-drawer " id="drawer" style="z-index:-1;">
                    <div><treeMenu @main="mainid = $event, reloadComponent()"/></div>
                </div>
                
                <div  class="mdui-container" style="margin-top:60px;">
                    <qrcode v-show=" mainid === 100" :is="currentComponent"/>
                    <guide v-show=" mainid === 200"/>
                </div>
            </div>

</template>

<script>
import treeMenu from '../components/treeMenu.vue';
import failMenu from '../components/failMenu.vue';
import qrcode from '../main/qrcode.vue'
import guide from '../guide/guide.vue'
import mdui from 'mdui';
import Button from "@opentiny/vue-button"
import  Layout from '@opentiny/vue-layout'
import  Container from '@opentiny/vue-container'

export default {
    name: 'home',
    components:{
    treeMenu,failMenu,qrcode,guide,Button,
    TinyContainer: Container,
    TinyLayout: Layout
    },

    data(){
        return{
        mainid: {
            type:Number,
            default:100,
        },
        isList:{
            type:Boolean,
            default:false,
        },
        currentComponent: 'qrcode',
        };
    },
    methods:{
        makelist(){
            this.isList = !this.isList;
            console.log('kkk');
            if(this.isList){
                this.drawer.open();
            }
            else{
                this.drawer.close();
            }
        },
        openDrawer() {
            this.drawer.open();
        },
        closeDrawer() {
            this.drawer.close();
        },
        arr(){
        event.preventDefault();

        },
        reloadComponent() {
            this.currentComponent = ''; // 清空当前组件
            this.$nextTick(() => {
            this.currentComponent = 'ChildComponent'; // 切换回原始组件
            });
        },
    },
    props:{
        isMain:{
            type: Boolean,
            // required: true
            default: false,
        },
    },
    mounted() {
        this.drawer = new mdui.Drawer('#drawer');

        // event
        this.drawer.$element.on('open.mdui.drawer', () => {
            console.log('open');
        });

        this.drawer.$element.on('opened.mdui.drawer', () => {
            console.log('opened');
        });

        this.drawer.$element.on('close.mdui.drawer', () => {
            console.log('close');
        });

        this.drawer.$element.on('closed.mdui.drawer', () => {
            console.log('closed');
        });
    },
}
</script>

<style scoped>
.main{
    height: 800px;
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>