<template>
    <div class="menu" :style="{
        height:`${height-60}px`
    }">
        <tiny-tree-menu :data="treeData" class="treemenu"  @node-click="handleNodeClick"></tiny-tree-menu>
        <!-- <div :data="treeData" class="treemenu"  @node-click="handleNodeClick"></div> -->
    </div>
</template>

<script lang="jsx">
import  TreeMenu from '@opentiny/vue-tree-menu'

export default {
    components: {
        TinyTreeMenu: TreeMenu
    },
    computed:{
        height(){
            return window.innerHeight;
        }
    },
    data() {
    return {
        treeData: [
        {                        
            id: 100,
            label: '动态二维码',
            
        },
        {
            id: 200,
            label: '指南',
            
        },
        {
            id: 300,
            label: '组件',
            children: [
            {
                id: 300,
                label: '组件'
            },
            {
                id: 301,
                label: '表单组件',
                children: [
                {
                    id: 30101,
                    label: 'Button 按钮',
                    url: 'button'
                },
                { id: 30102, label: 'Datepicker 日期', url: '' },
                { id: 30103, label: 'Dropdown 下拉框', url: '' },
                { id: 30104, label: 'DropTimes 下拉时间', url: '' },
                { id: 30105, label: 'Input 输入框', url: '' }
                ]
            },
            { id: 302, label: '数据组件' },
            { id: 303, label: '导航组件' },
            { id: 304, label: '业务组件' }
            ]
        },
        {
            id: 400,
            label: '更新日志'
        }
        ]
    }
    },
    methods: {
        handleNodeClick(data) {
            this.$emit('main',data.id);
        }
    },
}
</script>

<style scoped>
.menu{
    position: fixed;
    top:60px;
    left:0;
    margin-top:1px ;
    /* box-shadow: 1px 0 2px rgba(0, 0, 0, 0.1); */
}
.treemenu{
    margin-top: 10px;
}
</style>