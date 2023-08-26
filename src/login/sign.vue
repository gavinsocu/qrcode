<template>
    <div id="father" :style="{height:`${height}px`, width:`${width}px`}">
        <div id="son">
            <div id="bb">Sign up</div>
            <div id="sign">
                <div id="denlu">
                    <br>
                    <h5 style="margin: 22.178px 0px 22.178px 0px;">&nbsp;&nbsp;username: <br>&nbsp;&nbsp;<input type="text"></h5>
                    <h5 style="margin: 22.178px 0px 22.178px 0px;">&nbsp;&nbsp;account:<br>&nbsp;&nbsp;<input type="text"></h5>
                    <h5 style="margin: 22.178px 0px 22.178px 0px;">&nbsp;&nbsp;password:<br> &nbsp;&nbsp;<input type="password"></h5>
                    <h5 style="margin: 22.178px 0px 22.178px 0px;">&nbsp;&nbsp;reconfirm:<br> &nbsp;&nbsp;<input type="password"></h5>
                    <button @click="goLogin" class="anniu xuanfu">Sign up</button>
                    </div>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            
            <h4>Can't register?</h4>
            <h4><a href="https://blog.seeleclover.com/2022/12/28/npm-settings/">Click here</a></h4>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goLogin(){
            this.$router.push('/login');
        },
    },
    computed: {
        width() {
        return window.innerWidth;
        },
        height(){
            return window.innerHeight
        }
    }
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
    height: 600px;
    margin-top: 7%;
    display: inline-block;  
    box-shadow: 10px 10px 5px black;
    border-radius: 20px;
    background-color: white;
}

#bb {
    width: 100%;
    height: 15%;
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
    margin-top: 7px;
    outline: 0;
    border-bottom: 1px solid black;
    width: 93%;
}

button{
    margin-top: 5px;
    font-weight: bold;
}

a{
    text-decoration-line: none;
            color: #abc1ee;
}

a:hover{
    text-decoration-line: underline;
}
</style>