<template>
    <div class="about">
        <div class="title">
            about-title
        </div>
        about-page!!
    </div>
</template>
<script>
export default {
    name: 'about-page',
    mounted () {
        const params = {
            name: 'zs',
            age: 23
        }
        console.log(this.$http('/api/douban/movie/in_theaters'));
        console.log(this.$http('/api/douban/movie/top250', params, { method: 'post' }))
    }
}
</script>

<style scoped lang="less">
    .about{
        .title{
            background-color:blue
        }   
    }
</style>