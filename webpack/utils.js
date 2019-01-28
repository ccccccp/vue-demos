const path = require("path");
module.exports = {
    assetPath:(resolvePath)=>{
        return path.join(__dirname,'../',resolvePath || '');
    },
    loaderFileConfig:{
        exclude: /node_modules/,
        include:[path.join(__dirname,'../src')],
    }
}