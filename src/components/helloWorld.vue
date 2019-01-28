<template>
    <div class="hello">
        <div class="title">title!!</div>
        <div class="content">
            content!!
            <img width="32" height="32" src="@/assets/images/logo.png" />
            <img width="32" height="32" src="../assets/images/logo.png" />

        </div>
    </div>
</template>
<script>
export default {
    name: 'helloWorld'
}
</script>
<style scoped lang="less">
    .hello{
        .title{
            background-color:red;
            transform:translateX(15px);
        }
        .content{
            border:1px solid black;
        }
    }
    
</style>
