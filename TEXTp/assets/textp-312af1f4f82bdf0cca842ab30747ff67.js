define("textp/app",["ember","ember/resolver","ember/load-initializers","exports"],function(e,t,s,n){"use strict";var i=e["default"],a=t["default"],o=s["default"];i.MODEL_FACTORY_INJECTIONS=!0;var r=i.Application.extend({modulePrefix:"textp",Resolver:a});o(r,"textp"),"production"===TEXTpENV.environment&&(!function(e,t,s,n,i,a,o){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,a=t.createElement(s),o=t.getElementsByTagName(s)[0],a.async=1,a.src=n,o.parentNode.insertBefore(a,o)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create",TEXTpENV.gaTrackingCode,"auto"),ga("send","pageview")),n["default"]=r}),define("textp/config/environment",["exports"],function(e){"use strict";e["default"]={environment:"production",version:"0.9.2",baseURL:"/TEXTp/",locationType:"hash",gaTrackingCode:"UA-54993858-1",EmberENV:{FEATURES:{}},APP:{}}}),define("textp/config/environments/production",["exports"],function(e){"use strict";e["default"]={environment:"production",version:"0.9.2",baseURL:"/TEXTp/",locationType:"hash",gaTrackingCode:"UA-54993858-1",EmberENV:{FEATURES:{}},APP:{}}}),define("textp/controllers/application",["ember","exports"],function(e,t){"use strict";var s,n=e["default"];s=n.Controller.extend({needs:["images"],noImagesFound:!1,isProcessing:!1,observesIsProcessing:function(){this.set("isProcessing",this.get("controllers.images.isProcessing"))}.observes("controllers.images.isProcessing"),_unsetNoImagesFound:function(){this.set("noImagesFound",!1)},notifyNoImagesFound:function(){this.set("noImagesFound",!0),n.run.debounce(this,this._unsetNoImagesFound,3e3)},actions:{select:function(e){var t=[];n.ArrayPolyfills.forEach.call(e,function(e){"image"===e.type.split("/")[0]&&t.push(e)}),t.length?(this.get("controllers.images").set("content",t),this.transitionToRoute("images")):this.notifyNoImagesFound()},dragEnter:function(){this.set("noImagesFound",!1)},drop:function(e){var t=this,s=[],i=e.length,a=0,o=function(){a++,i===a&&(s.length?(t.get("controllers.images").set("content",s),t.transitionToRoute("images")):t.notifyNoImagesFound())};t.get("controllers.images.isProcessing")||("undefined"!=typeof DataTransferItemList&&e instanceof DataTransferItemList?n.ArrayPolyfills.forEach.call(e,function r(e){var t=e;e.getAsEntry?t=e.getAsEntry():e.webkitGetAsEntry&&(t=e.webkitGetAsEntry()),t.isFile?t.file(function(e){"image"===e.type.split("/")[0]&&s.push(e),o()}):t.isDirectory&&t.createReader().readEntries(function(e){i+=e.length,e.forEach(r),o()})}):n.ArrayPolyfills.forEach.call(e,function(e){"image"===e.type.split("/")[0]&&s.push(e),o()}))}}}),t["default"]=s}),define("textp/controllers/images",["ember","textp/utils/asciify","exports"],function(e,t,s){"use strict";var n,i=e["default"],a=t["default"],o=i.set;n=i.ArrayController.extend({index:0,showTEXTp:!0,showFitView:!0,current:function(){return this.get("index")+1}.property("index"),total:function(){return this.get("content.length")}.property("content.length"),isPaginated:function(){return this.get("content.length")>1}.property("content.length"),isPreviousDisabled:function(){return 0===this.get("index")}.property("index"),isNextDisabled:function(){return this.get("index")===this.get("content.length")-1}.property("index"),onProcessUpdate:function(){this.set("progressFillStyle","width: "+this.get("percentProcessed")+"%;")}.observes("percentProcessed"),progressFillStyle:"",percentProcessed:0,pixelCount:0,pixelsProcessed:0,isProcessing:!1,isLoading:!1,isDrawing:!1,processImages:function(){if(!this.get("isLoading")){var e=this,t=this.get("content"),s=0,n=t.get("length");e.set("index",0),e.set("pixelCount",t.reduce(function(e,t){return e+t.height*t.width},0)),function r(h){var l=t[h],c=e.get("pixelCount"),u=e.get("pixelsProcessed");a(l.context,function(t){u+=t.processed,e.set("pixelsProcessed",u),e.set("percentProcessed",Math.ceil(u/c*100))}).then(function(){e.set("isDrawing",!0),e.set("pixelsProcessed",u),e.set("percentProcessed",Math.ceil(u/c*100)),i.run.later(function(){o(l,"TEXTp",l.context.canvas.toDataURL("image/png")),o(l,"isProcessed",!0),s++,e.set("isDrawing",!1),s===n?(e.set("isProcessing",!1),e.set("percentProcessed",0),e.set("pixelsProcessed",0),e.set("pixelCount",0)):r(h+1)},25)})}(0),"production"===TEXTpENV.environment&&ga("send","event","process","image-count",n)}}.observes("isLoading"),loadImages:function(){var e=this,t=e.get("content.length"),s=0;this.set("isProcessing",!0),this.set("isLoading",!0),this.get("content").forEach(function(n){var a=new FileReader;a.onloadend=function(a){i.$(new Image).load(function(){var a,r=i.$(['<canvas height="',this.height,'" width="',this.width,'"></canvas>'].join(""));s++,a=r.get(0).getContext("2d"),a.drawImage(this,0,0),o(n,"height",this.height),o(n,"width",this.width),o(n,"original",this.src),o(n,"context",a),s===t&&e.set("isLoading",!1)}).attr("src",a.target.result)},a.readAsDataURL(n)})}.observes("content"),actions:{toggleTEXTp:function(){this.toggleProperty("showTEXTp")},toggleViewMode:function(){this.toggleProperty("showFitView")},previous:function(){this.get("isPreviousDisabled")||this.set("index",this.get("index")-1)},next:function(){this.get("isNextDisabled")||this.set("index",this.get("index")+1)}}}),s["default"]=n}),define("textp/utils/asciify",["ember","exports"],function(e,t){"use strict";function s(e){return e=Math.max(0,Math.min(1,e)),Math.floor(1===e?255:256*e)}function n(e){return e/255}function i(e,t,s,n){var i={x:s%e,y:n%e};return a(t,s-i.x,n-i.y)}function a(e,t,s){var i=4*s*e.width+4*t,a=e.data;return{index:{r:i,g:i+1,b:i+2,a:i+3},"byte":{r:a[i],g:a[i+1],b:a[i+2],a:a[i+3]},"float":{r:n(a[i]),g:n(a[i+1]),b:n(a[i+2]),a:n(a[i+3])}}}function o(e){var t,n,o=e.original,r=e.ascii,h=o.height*o.width,l=global.ascii.size,c=global.ascii.charcount,u=global.ascii.fontmapSize,p=global.ascii.fontmap;for(n=0;n<o.height;n++){for(t=0;t<o.width;t++){var d=a(o,t,n),f={x:t%l,y:n%l},g=i(l,o,t,n),m=.2126*g["float"].r+.7152*g["float"].g+.0722*g["float"].b,b=1/(c-1),v=l*Math.floor(m/b),x=Math.floor(v/u),w={x:f.x+(v-u*x),y:f.y+l*x},y=a(p,w.x,w.y);r.data[d.index.r]=s(y["float"].r*g["float"].r),r.data[d.index.g]=s(y["float"].g*g["float"].g),r.data[d.index.b]=s(y["float"].b*g["float"].b),r.data[d.index.a]=y["byte"].a}global.send("progress",{processed:o.width,total:h})}global.send("complete",r)}function r(e,t){var r=+l.$(e.canvas).attr("height"),d=+l.$(e.canvas).attr("width"),f=e.getImageData(0,0,d,r),g=e.createImageData(d,r);return t=t||l.K,new Parallel({original:f,ascii:g},{onMessage:function(e){switch(e.name){case"debug":console.log(e.data);break;case"progress":t(e.data);break;default:l.assert("Unhandled event from web worker: "+e.name+", "+JSON.stringify(e.data))}},env:{size:c,charcount:u,fontmap:h,fontmapSize:p},envNamespace:"ascii"}).require(s,n,a,i).spawn(o).then(function(t){e.putImageData(t,0,0)})}var h,l=e["default"],c=8,u=256,p=c*Math.floor(Math.sqrt(u)),d=TEXTpENV.baseURL+"assets/images/fontmap-deafba4b8da697ecc287e4f1aa03e374.png";l.$('<img id="#fontmap-image"/>').load(function(e){var t=l.$('<canvas id="fontmap" height="128" width="128"></canvas>').get(0).getContext("2d");t.drawImage(l.$(e.target).get(0),0,0),h=t.getImageData(0,0,128,128),h={data:h.data,height:h.height,width:h.width}}).attr("src",d),t["default"]=r}),define("textp/helpers/number-format",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.makeBoundHelper(function(e){return numeral(e).format("0,0")})}),define("textp/router",["ember","exports"],function(e,t){"use strict";var s=e["default"],n=s.Router.extend({location:TEXTpENV.locationType});n.map(function(){this.route("about"),this.route("unsupported"),this.route("images")}),t["default"]=n}),define("textp/routes/about",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Route.extend({activate:function(){s.$(document).attr("title","TEXTp - About")}})}),define("textp/routes/application",["ember","textp/utils/mobile-detect","textp/utils/feature-detect","exports"],function(e,t,s,n){"use strict";var i,a=e["default"],o=t.isMobileOrTablet,r=s["default"];i=a.Route.extend({beforeModel:function(){this.transitionTo(o()||!r()?"unsupported":"index")}}),n["default"]=i}),define("textp/utils/mobile-detect",["exports"],function(e){"use strict";function t(){var e=navigator.userAgent||navigator.vendor||window.opera,t=/(android|bb\d+|meego).+mobile|avantgo|bada\/|android|ipad|playbook|silk|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4));return t}e.isMobileOrTablet=t,e["default"]={isMobileOrTablet:t}}),define("textp/utils/feature-detect",["exports"],function(e){"use strict";e["default"]=function(){try{new Parallel([1]).spawn(function(e){return e[0]})}catch(e){return!1}return"undefined"!=typeof File&&"undefined"!=typeof FileList&&"undefined"!=typeof FileReader}}),define("textp/routes/images",["ember","exports"],function(e,t){"use strict";var s,n=e["default"];s=n.Route.extend({activate:function(){n.$(document).attr("title","TEXTp - Images")}}),t["default"]=s}),define("textp/routes/index",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Route.extend({activate:function(){s.$(document).attr("title","TEXTp")}})}),define("textp/templates/about",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{},a.buffer.push('<div class="about-container">\n    <div class="about-content">\n        <h3>What is TEXTp?</h3>\n        <p>\n            On April 1st, 2010 Youtube announced a new feature: <a target="_new" href="http://youtube-global.blogspot.com/2010/03/textp-saves-youtube-bandwidth-money.html">TEXTp streaming</a>. In an effort to save money on bandwidth, users could choose to stream their videos in a text-only mode, or TEXTp. In reality, it was a shader rendered by the video player locally that generated a colored ascii-art image of each frame. I loved the effect and was curious as to how they did it, so I did what any sensible person would do: I made my own shader in Flash that mimicked the TEXTp effect. A few years later I needed an excuse to make something fun, so I ported my old Flash shader to JavaScript and turned it into a fun little Ember application as an excuse to learn a thing or two. Unfortunately, this means that the port isn\'t a video shader and only works on images.\n        </p>\n        <p>\n            Perhaps if I need another excuse to make something fun, I\'ll try turn the JavaScript filter into a WebGL shader so the filter can leverage the GPU and work on videos again...\n        </p>\n\n        <h3>Are the images saved on a server somewhere?</h3>\n        <p>\n            No. All processing on the image happens in the web browser. Neither the original files or the asciified files are sent to any server at any time, so unfortunately you can not asciify an image and then send your URL to a friend to easily share it. While this would be a really cool feature, I have no intention of starting an image hosting service.\n        </p>\n\n        <h3>Can I download the asciified images?</h3>\n        <p>\n            Yes. Right-click on the image and you should be able to "Save Image As".\n        </p>\n\n        <h3>"Save Image As" is disabled in my right-click menu</h3>\n        <p>\n            If the image is too large, you may not be able to save it via the right-click menu. You should still be able to copy the image and paste it into your favorite image maniupulation software (Photoshop, GIMP, MSPaint...) and save it there.\n        </p>\n\n        <h3>Who are you?</h3>\n        <p>\n            My name is <a target="_new" href="http://github.com/rzurad">Rich</a>.\n        </p>\n    </div>\n</div>\n')})}),define("textp/templates/application",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var o,r,h,l="",c=this.escapeExpression,u=n.helperMissing;return a.buffer.push('<div class="alert alert-info">\n    Drop some <strong>image files</strong> to begin asciification!\n</div>\n\n<div class="alert alert-danger">\n    Nope! Didn\'t find any <strong>images</strong> in that.\n</div>\n\n<div class="application-outlet" '),a.buffer.push(c(n["bind-attr"].call(t,{hash:{style:"view.backgroundImage"},hashTypes:{style:"STRING"},hashContexts:{style:t},contexts:[],types:[],data:a}))),a.buffer.push(">\n    "),a.buffer.push(c((r=n.partial||t&&t.partial,h={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:a},r?r.call(t,"github-ribbon",h):u.call(t,"partial","github-ribbon",h)))),a.buffer.push("\n    "),o=n._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push('\n</div>\n<div class="drop-skrim"></div>\n'),l})}),define("textp/templates/github-ribbon",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{},a.buffer.push('<a href="https://github.com/rzurad/TEXTp"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>\n')})}),define("textp/templates/image",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{},a.buffer.push('<img class="save-target" />\n<div class="scale-container">\n    <div class="ascii"></div>\n    <div class="original"></div>\n</div>\n')})}),define("textp/templates/images",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){function o(e,t){var s,i="";return t.buffer.push('\n    <div class="progress-bar-background">\n        <div class="progress-bar-content">\n            '),s=n["if"].call(e,"isLoading",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(4,h,t),fn:b.program(2,r,t),contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push('\n\n            <div class="progress">\n                <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" '),t.buffer.push(m(n["bind-attr"].call(e,{hash:{style:"progressFillStyle"},hashTypes:{style:"ID"},hashContexts:{style:e},contexts:[],types:[],data:t}))),t.buffer.push(">\n                </div>\n            </div>\n        </div>\n    </div>\n"),i}function r(e,t){t.buffer.push("\n                Loading images...\n            ")}function h(e,t){var s,i="";return t.buffer.push("\n                "),s=n["if"].call(e,"isDrawing",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(7,c,t),fn:b.program(5,l,t),contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("\n            "),i}function l(e,t){t.buffer.push("\n                    Drawing image...\n                ")}function c(e,t){var s,i,a="";return t.buffer.push('\n                    Processed <span class="highlight">'),t.buffer.push(m((s=n["number-format"]||e&&e["number-format"],i={hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t},s?s.call(e,"pixelsProcessed",i):g.call(e,"number-format","pixelsProcessed",i)))),t.buffer.push('</span> of <span class="highlight">'),t.buffer.push(m((s=n["number-format"]||e&&e["number-format"],i={hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t},s?s.call(e,"pixelCount",i):g.call(e,"number-format","pixelCount",i)))),t.buffer.push("</span> pixels.\n                "),a}function u(e,t){var s,i="";return t.buffer.push('\n    <div class="controls-container">\n        <div '),t.buffer.push(m(n.action.call(e,"toggleTEXTp",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push(" "),t.buffer.push(m(n["bind-attr"].call(e,{hash:{"class":":control :button showTEXTp:active"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},contexts:[],types:[],data:t}))),t.buffer.push(">\n            TEXTp\n        </div>\n\n        <div "),t.buffer.push(m(n.action.call(e,"toggleViewMode",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push(" "),t.buffer.push(m(n["bind-attr"].call(e,{hash:{"class":":control :button showFitView::active"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},contexts:[],types:[],data:t}))),t.buffer.push(">\n            Full-size\n        </div>\n\n        <div "),t.buffer.push(m(n.action.call(e,"toggleViewMode",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push(" "),t.buffer.push(m(n["bind-attr"].call(e,{hash:{"class":":control :button showFitView:active"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},contexts:[],types:[],data:t}))),t.buffer.push('>\n            Fit to screen \n        </div>\n\n        <span class="control index">\n            <strong>'),s=n._triageMustache.call(e,"current",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</strong> of <strong>"),s=n._triageMustache.call(e,"total",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</strong>\n        </span>\n\n        "),s=n["if"].call(e,"isPaginated",{hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(10,p,t),contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("\n    </div>\n"),i}function p(e,t){var s="";return t.buffer.push("\n            <div "),t.buffer.push(m(n.action.call(e,"next",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push(" "),t.buffer.push(m(n["bind-attr"].call(e,{hash:{"class":":control :button isNextDisabled:disabled"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},contexts:[],types:[],data:t}))),t.buffer.push('">\n                <span class="glyphicon glyphicon-chevron-right"></span>\n            </div>\n\n            <div '),t.buffer.push(m(n.action.call(e,"previous",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push(" "),t.buffer.push(m(n["bind-attr"].call(e,{hash:{"class":":control :button isPreviousDisabled:disabled"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},contexts:[],types:[],data:t}))),t.buffer.push('>\n                <span class="glyphicon glyphicon-chevron-left"></span>\n            </div>\n        '),s}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var d,f="",g=n.helperMissing,m=this.escapeExpression,b=this;return a.buffer.push('<div class="images-viewport">\n    '),a.buffer.push(m(n.view.call(t,"image-collection",{hash:{content:"content",index:"index"},hashTypes:{content:"ID",index:"ID"},hashContexts:{content:t,index:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push("\n</div>\n\n"),d=n["if"].call(t,"isProcessing",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(9,u,a),fn:b.program(1,o,a),contexts:[t],types:["ID"],data:a}),(d||0===d)&&a.buffer.push(d),a.buffer.push("\n"),f})}),define("textp/templates/index",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){function o(e,t){t.buffer.push("what's all this, then?")}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r,h,l,c="",u=this,p=n.helperMissing;return a.buffer.push('<div class="splash-content">\n    <h2>TEXTp Image Filter</h2>\n\n    <p>\n        Convert any image into <a target="_new" href="http://youtube-global.blogspot.com/2010/03/textp-saves-youtube-bandwidth-money.html">TEXTp</a> ascii art.<br>\n        Right-click to "Save Image As".\n    </p>\n\n    <div class="input-container">\n        <div class="btn btn-success btn-lg btn-block">Select or drag files from desktop</div>\n        <input type="file" multiple />\n    </div>\n\n    <div class="about-footer">\n        '),h=n["link-to"]||t&&t["link-to"],l={hash:{"class":"btn btn-link btn-block"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},inverse:u.noop,fn:u.program(1,o,a),contexts:[t],types:["STRING"],data:a},r=h?h.call(t,"about",l):p.call(t,"link-to","about",l),(r||0===r)&&a.buffer.push(r),a.buffer.push("\n    </div>\n</div>\n\n"),c})}),define("textp/templates/unsupported",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{},a.buffer.push('<div class="unsupported-container">\n    <div class="content">\n        <h3>Sorry. This browser/platform is</h3>\n        <h1><strong>unsupported</strong></h1>\n\n        <p>\n            It takes time to make sure web apps work in every browser imaginable. I\'d rather spend that time doing something else.\n        </p>\n\n        <p>Please use this application on a non-mobile device in either the latest <strong><a target="_new" href="https://www.google.com/chrome/browser/">Chrome</a></strong>, <strong><a target="_new" href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a></strong>, <strong><a target="_new" href="https://www.apple.com/safari/">Safari</a></strong>, or <strong><a target="_new" href="http://www.opera.com">Opera</a></strong>, or <strong><a target="_new" href="http://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages">Internet Explorer 11</a></strong>.\n        </p>\n    </div>\n</div>\n')})}),define("textp/views/application",["ember","exports"],function(e,t){"use strict";function s(e){return function(t){return t.stopPropagation(),t.preventDefault(),e&&e.apply(this,arguments)}}var n,i=e["default"],a=TEXTpENV.baseURL,o=[a+"assets/images/backgrounds/fallout-3-4a84491ead389691ac7a7b0751ea957a.png",a+"assets/images/backgrounds/mass-effect-3-270a1b03895e3c5ada6dd7e9a2385391.jpg",a+"assets/images/backgrounds/titanfall-c0fa763ec07f8fa5652fbcd17153e088.png"];n=i.View.extend({classNames:["application"],isHovering:!1,backgroundImage:function(){return["background-image: url(",o[~~(Math.random()*o.length)],");"].join("")}.property(),observeNoImagesFound:function(){this.$()&&this.$().toggleClass("bad-drop")}.observes("controller.noImagesFound"),observeIsProcessing:function(){this.$()&&this.$().toggleClass("processing")}.observes("controller.isProcessing"),observeIsHovering:function(){this.$().toggleClass("hovering")}.observes("isHovering"),dragOver:s(),dragEnter:s(function(){this.set("isHovering",!0),this.get("controller").send("dragEnter")}),dragLeave:s(function(e){i.$(e.target).is(".drop-skrim")&&this.set("isHovering",!1)}),drop:s(function(e){var t=e.dataTransfer.items||e.dataTransfer.files;this.set("isHovering",!1),t.length&&this.get("controller").send("drop",t)}),change:function(e){this.get("controller").send("select",e.target.files)}}),t["default"]=n}),define("textp/views/image-collection",["ember","textp/views/image","exports"],function(e,t,s){"use strict";var n,i=e["default"],a=t["default"];n=i.CollectionView.extend({classNames:["images-container"],attributeBindings:["style"],style:function(){return["left: ",-100*this.get("index"),"%"].join("")}.property("index"),itemViewClass:a}),s["default"]=n}),define("textp/views/image",["ember","exports"],function(e,t){"use strict";function s(e){this.get("isDragging")&&(e.stopPropagation(),e.preventDefault())}var n,i=e["default"];n=i.View.extend({classNames:["image-container"],classNameBindings:["isLocked"],position:[0,0],isDragging:!1,isLocked:!1,showFitView:function(){return this.get("parentView.controller.showFitView")}.property("parentView.controller.showFitView"),isDraggable:function(){return!this.get("showFitView")&&!this.get("isLocked")}.property("showFitView"),templateName:"image",dragEnter:s,dragOver:s,dragLeave:s,drop:s,onIsDraggingChange:function(){this.get("isDraggable")&&i.$(document)[this.get("isDragging")?"on":"off"]("mousemove",this.onDragImage)}.observes("isDragging"),mouseDown:function(e){this.set("isDragging",!0),this.get("isDraggable")&&this.set("lastMousePosition",[e.pageX,e.pageY]),e.stopPropagation(),e.preventDefault()},mouseUp:function(e){this.set("isDragging",!1),this.get("isDraggable")&&this.set("lastMousePosition",null),e.stopPropagation(),e.preventDefault()},onPositionChange:function(){var e=this.get("position"),t=this.$(".scale-container"),s=this.$().width()>=this.get("content.width"),n=this.$().height()>=this.get("content.height");s||t.css({left:e[0]}),n||t.css({top:e[1]})}.observes("position"),onDragImage:function(e){var t=this.get("lastMousePosition"),s=this.get("position"),n=[t[0]-e.pageX,t[1]-e.pageY],i=this.get("content.height"),a=this.get("content.width"),o=this.$().height(),r=this.$().width(),h=s[0]-n[0],l=s[1]-n[1];this.get("isLocked")||((o>=i||o-i>l||l>0)&&(n[1]=0),(r>=a||r-a>h||h>0)&&(n[0]=0),this.set("lastMousePosition",[e.pageX,e.pageY]),this.set("position",[s[0]-n[0],s[1]-n[1]]))},onResize:function(){var e=this.$(".scale-container"),t=this.$().height(),s=this.$().width(),n=this.get("position"),i=n[0],a=n[1],o=this.get("content.height"),r=this.get("content.width");this.get("showFitView")?e.css({marginTop:"",marginLeft:"",left:"",top:""}):(s>=r&&t>=o?this.set("isLocked",!0):this.set("isLocked",!1),s>=r?e.css({marginLeft:-(r/2),left:"50%"}):(s>r+i&&(i+=s-(r+i)),e.css({marginLeft:0,left:i})),t>=o?e.css({marginTop:-(o/2),top:"50%"}):(t>o+a&&(a+=t-(o+a)),e.css({marginTop:0,top:a})),this.set("position",[i,a]))},init:function(){this._super(),this.onDragImage=this.onDragImage.bind(this),this.onResize=this.onResize.bind(this),i.$(window).on("resize",this.onResize)},didInsertElement:function(){this.get("content.isProcessed")&&this.onFileProcessed()},destroy:function(){this._super(),i.$(window).off("resize",this.onResize)},renderViewMode:function(){this.$(".scale-container").css(this.get("showFitView")?{height:"",width:"",maxWidth:this.get("content.width")}:{maxWidth:"",width:this.get("content.width"),height:this.get("content.height")}),this.onResize()}.observes("showFitView"),onFileProcessed:function(){this.$(".save-target").attr("src",this.get("content.TEXTp")),this.$(".ascii").css({"background-image":"url("+this.get("content.TEXTp")+")"}),this.$(".original").css({"background-image":"url("+this.get("content.original")+")"}),this.set("position",[0,0]),this.renderViewMode()}.observes("content.isProcessed")}),t["default"]=n}),define("textp/views/images",["ember","exports"],function(e,t){"use strict";var s,n=e["default"];s=n.View.extend({classNameBindings:["controller.showTEXTp","viewMode","controller.isLoading","controller.isProcessing"],viewMode:function(){return this.get("controller.showFitView")?"fit":"full"}.property("controller.showFitView")}),t["default"]=s});