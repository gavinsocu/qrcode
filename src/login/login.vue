<template>
        <div id="father" :style="{height:`${height}px`, width:`${width}px`}">
        <div id="son">
            <div id="bb">Login</div>
            <div id="sign">
                <div id="denlu">
                    <br>
                    <h5 style="margin: 22.178px 0px 22.178px 0px;">&nbsp;&nbsp;username: <br>&nbsp;&nbsp;<input type="text"></h5>
                    <h5 style="margin: 22.178px 0px 22.178px 0px;">&nbsp;&nbsp;password: <br> &nbsp;&nbsp;<input type="password"></h5>
                    
                    <button @click="goHmoe" class="anniu xuanfu">Login</button>
                    </div>
            </div>
            <br>
            <h4>Don't have account? </h4>
            <h4><a @click="goSign">sign up</a></h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    computed: {
        width() {
        return window.innerWidth;
        },
        height(){
            return window.innerHeight
        }
    },
    methods:{
        goSign(){
            this.$router.push('/sign');
        },
        goHmoe(){
            this.$router.push('/home');
        },
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

#father {

    margin: 0px auto;
    text-align: center;   
    background-image: linear-gradient(to right, #f1aee4, #d7baf4, #bfc5fa, #aecef7, #a9d4ee);
}
#son {
    width: 400px;
    height: 566px;
    margin-top: 7%;
    display: inline-block;  
    box-shadow: 10px 10px 5px black;
    border-radius: 20px;
    background-color: white;
}

#bb {
    width: 100%;
    height: 20%;
    text-align: center;
    margin-top:40px;
    font-size: 36px;
    font-weight: bold;
}

#sign {
    width: 100%;
    text-align: center;
    height: 40%;
    
}

#denlu{
    display: inline-block;
    width: 80%;
    height: 100%;
    border-top: 2px solid black;
    text-align: left;
}

.anniu {
    font-size: 20px;
    color: white;
    width: 100%;
    height: 15%;
    background-image: linear-gradient(to left, #f1aee4, #d7baf4, #bfc5fa, #aecef7, #a9d4ee);
    border-radius: 2px;
    border: 0px;
    
}

.xuanfu:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

input{
    border: 0;
    margin-top: 15px;
    outline: 0;
    border-bottom: 1px solid black;
    width: 93%;
}

button{
    margin-top: 10px;
    font-weight: bold;
}

a[onclick]{
    text-decoration-line: none;
            color: #abc1ee;
}

a:hover{
    text-decoration-line: underline;
}
</style>