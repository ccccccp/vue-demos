const proxys = require('./proxy.json');
let proxy = proxys['dev'];
for(let e in proxys){
    if(process.env[`npm_config_${e}`]){
        proxy = proxys[e]
    }
}

module.exports = {
    proxy,
    eslint: true
}