import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { useAxios } from '@/utils/request.js';

const router = new VueRouter({
    routes,
    mode: 'history'
});
Vue.use(VueRouter);
useAxios(Vue);
router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from);
    console.log(to, from);
    console.log(matched, prevMatched);
    next();
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#root');

function logger (level) {
    console.log(level + 'want-start');
    return function (prototype, decoedName, desc) {
        console.log(prototype, decoedName, desc)
        const oldFun = desc.value;
        desc.value = function () {
            console.log(`${level}--call ${name} with args:`);
            return oldFun.apply(this, arguments);
        };
        return desc;
    }
}

class Test {
    constructor () {
        this.text = 'test-text';
    }
    @logger('输出1')
    @logger('输出2')
    print (a) {
        return this.text + a;
    }
};
var t1 = new Test();
console.log(t1);
console.log(t1.print('!!!!!!'));
if (module.hot) {
    module.hot.accept();
}