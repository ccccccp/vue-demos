<template>
    <div id="root">
        <div class="app">
            <hello-world></hello-world>
            <ul>
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/about">about</router-link></li>
                <li><router-link to="/item/100">item</router-link></li>
            </ul>
            <div>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from './components/helloWorld.vue';
export default {
    name: 'app',
    components: {
        'hello-world': HelloWorld
    }
}
</script>

<style>
    #root{
        font-size:16px;
    }
    .app{
        padding:10px;
        margin:0;
    }
</style>