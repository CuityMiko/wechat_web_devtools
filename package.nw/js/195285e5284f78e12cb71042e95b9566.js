'use strict';!function(require,directRequire){const a=require('redux'),b=require('./110d9d6fbf9b67da49ca942cde9b4d27.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:e}=require('react-redux');module.exports=e((a)=>{let b=a.simulator.chooseInvoiceTitle,c=a.toolbar.deviceInfo;return{show:b.show,callbackID:b.callbackID,api:b.api,navigationbarHeight:c.navigationbarHeight,screenHeight:c.screenHeight,screenWidth:c.screenWidth,appName:a.project.current.appShowName,deviceScale:a.toolbar.deviceScale}},(a)=>{return{hideChooseInvoiceTitle:d.bindActionCreators(c.hideChooseInvoiceTitle,a)}})(b)}(require('lazyload'),require);