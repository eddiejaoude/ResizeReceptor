define("resize.receptor.core",["resize.receptor.store"],function(e){function t(t,r){t.forEach(function(t){var r=t.target.getAttribute("rrid");if(r&&e.registeredElem(r)){var o=e.getDims(r);if(o.height!==t.target.offsetHeight||o.width!==t.target.offsetWidth){var s={};s.elem=t.target,e.updateDims(r,{height:t.target.offsetHeight,width:t.target.offsetWidth}),-1!==r.indexOf("_")&&(r=r.slice(0,r.indexOf("_"))),i.hasOwnProperty(r)&&i[r](s)}}})}function r(){return Math.random().toString(36).replace("0.","")}var i={},o={};return o.initialize=function(e){if(e)e.observeElem||(e.observeElem=document.body);else{var e={};e.observeElem=document.body}new MutationObserver(t).observe(e.observeElem,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]})},o.listenTo=function(t,o){if(this.callback=o,t.constructor===Array){var s=r();t.forEach(function(t){if(!(t instanceof Element))throw"Expected array of DOM elements.";var i=r();t.setAttribute("rrid",s+"_"+i),e.storeDims(s+"_"+i,{height:t.offsetHeight,width:t.offsetWidth})}),i[s]=o}else{if(!(t instanceof Element))throw"First parameter passed is neither an array or a DOM Element.Got "+typeof t;var a=r();t.setAttribute("rrid",a),e.storeDims(a,{height:t.offsetHeight,width:t.offsetWidth}),i[a]=o}},o});