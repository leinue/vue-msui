webpackJsonp([8],{48:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var s=t(2),i=r(s),a=t(49),l=r(a),o=i["default"].extend({template:l["default"],ready:function(){},data:function(){return{updateTime:(new Date).getTime()}},methods:{refresh:function(){var e=this;return function(){return new Promise(function(n,t){setTimeout(function(){e.updateTime=(new Date).getTime(),n("刷新了")},3e3)})}}},computed:{},route:{data:function(e){e.next()}}});n["default"]=o},49:function(e,n){e.exports='<div class="page page-current">\n    <!-- 标题栏 -->\n    <header class="bar bar-nav">\n        <a class="icon icon-left pull-left" href="javascript:;" @click="goBack(this)"></a>\n        <h1 class="title">下拉刷新</h1>\n    </header>\n\n    <!-- 这里是页面内容区 -->\n    <div class="content pull-to-refresh-content" v-pull-to-refresh="refresh()" data-ptr-distance="55">\n        <!-- 默认的下拉刷新层 -->\n        <div class="pull-to-refresh-layer">\n            <div class="preloader"></div>\n            <div class="pull-to-refresh-arrow"></div>\n            <div style="position:absolute;bottom:-3px;width:100%;text-align: center;font-size: 12px;">更新时间:{{updateTime}}</div>\n        </div>\n<pre style="font-size: .5rem">\n<xmp>\n<div class="content pull-to-refresh-content" v-pull-to-refresh="refresh()" data-ptr-distance="55">\n    <!-- 默认的下拉刷新层 -->\n    <div class="pull-to-refresh-layer">\n        <div class="preloader"></div>\n        <div class="pull-to-refresh-arrow"></div>\n    </div>\n</div>\n</xmp>\n\n//返回的是一个生成promise的函数\nrefresh(){\n    return ()=>{\n        return new Promise((resolve,reject)=>{\n            setTimeout(()=>{\n                this.updateTime = new Date().getTime()\n                resolve(\'刷新了\')\n            },3e3)\n        })\n    }\n}\n\n</pre>\n    </div>\n</div>'}});