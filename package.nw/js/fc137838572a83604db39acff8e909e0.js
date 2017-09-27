'use strict';!function(require,directRequire){const a=require('path'),b=require('fs'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./15ba1827c7f6564a45df6bd44da3a977.js'),e=require('./f171257bbcaef547a3cf27266ccb0db2.js'),f=require('./89ba85d67a88f7636d657c22b5d3e038.js'),g=require('./3bfffbe88b3d923921f851c0697974fe.js'),h=require('./92320c1386e6db6a6f2556736a9bc280.js'),i=require('./common/locales/index.js'),j=require('glob'),k=require('rmdir');module.exports={toggleNetworkToobar:function(){return{type:c.TOOLBAR_TOGGLE_NETWORK}},toggleDeviceToolbar:function(){return{type:c.TOOLBAR_TOGGLE_DEVICE}},toggleCompileTypeToolbar:function(){return{type:c.TOOLBAR_TOGGLE_COMPILETYPE}},selectDevice:function(a){return{type:c.TOOLBAR_SELECT_DEVICE,data:a}},selectNetwork:function(a){return{type:c.TOOLBAR_SELECT_NETWORK,data:a}},selectCompileType:function(a){return{type:c.TOOLBAR_SELECT_COMPILETYPE,data:a}},toggleClickKey:function(a){return{type:c.TOOLBAR_TOGGLE_CLICKKEY,clickKey:a}},togglePreviewCode:function(a){return{type:c.TOOLBAR_PREVIEW_CODE,data:a}},setDeviceStatus:function(a){return{type:c.TOOLBAR_SET_DEVICE_STATUS,data:a}},clearAuth:function(){return(a)=>{let b=2,f=[],g=(d)=>{b--,d&&f.push(d),0==b&&(0==f.length?a({type:c.INFO_SHOW_SUCCESS,data:i.config.CLEAN_USER_AUTH_SUCCESS}):a({type:c.INFO_SHOW_ERROR,data:{message:i.config.CLEAN_USER_AUTH_ERROR.format(f.join(','))}}),a({type:c.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'}))};d({method:'post',url:`${e.cleanUserAuth}`,needToken:1,needAppID:1}).then(()=>{g()}).catch((a)=>{g(a)}),d({method:'post',url:`${e.clearUserAutoFillInfo}`,needToken:1,needAppID:1}).then(()=>{g()}).catch((a)=>{g(a)})}},cleanFileCache:function(){let d=f.getUserInfo(),e=d&&d.openid?d.openid:'unknow',l=g.getCurrent(),m=l.hash,n=h.WeappFileCache;return(d)=>{j('*',{cwd:n},(e,f)=>{f.forEach((c)=>{let d=a.join(n,c);b.unlink(d,()=>{})}),k(a.join(n,l.appid),()=>{}),d({type:c.INFO_SHOW_SUCCESS,data:i.config.CLEAN_FILE_CACHE_SUCCESS}),d({type:c.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})})}},cleanStorageCache:function(){let d=f.getUserInfo(),e=d&&d.openid?d.openid:'unknow',j=h.WeappStorage,k=g.getCurrent(),l=a.join(j,`${k.hash}_${e}.json`);return(a)=>{b.unlink(l,()=>{a({type:c.INFO_SHOW_SUCCESS,data:i.config.CLEAN_DATA_CACHE_SUCCESS}),a({type:c.PROJECT_SET_STORAGE,data:{cache:{},openid:e}}),a({type:c.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})})}},setDeviceScale:function(a){return{type:c.TOOLBAR_SET_DEVICESCALE,data:a}},addDevice:function(a){return{type:c.TOOLBAR_ADD_DEVICE,data:a}},removeDevice:function(a){return{type:c.TOOLBAR_REMOVE_DEVICE,data:a}}}}(require('lazyload'),require);