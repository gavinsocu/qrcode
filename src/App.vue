<template>
    <div v-if="$route.meta.login" class="over">
        <router-view></router-view>
    </div>
    <div v-if="$route.meta.sign" class="over">
        <router-view></router-view>
    </div>
    <div v-if="!$route.meta.login && !$route.meta.sign">
        <router-view></router-view>
    </div>
</template>

<script>
import home from "./home/home.vue";
import sign from "./login/sign.vue";
import login from "./login/login.vue";

export default {
    name: "App",
    components: {
        home,
        sign,
        login,
    },
};
</script>

<style scoped>
.over {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
