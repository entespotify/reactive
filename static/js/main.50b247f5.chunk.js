(this.webpackJsonpentespotify=this.webpackJsonpentespotify||[]).push([[0],{22:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(16),a=n.n(s),i=(n(22),n(5)),l=n(9),o=n(8),u=n(1);var j=function(e){var t,n,r=Object(c.useState)(!1),s=Object(i.a)(r,2),a=s[0],j=s[1],b=Object(c.useState)(0),m=Object(i.a)(b,2),d=m[0],p=m[1],O=Object(c.useState)(0),x=Object(i.a)(O,2),g=x[0],f=x[1],h=Object(c.useState)(!1),v=Object(i.a)(h,2),N=v[0],y=v[1],S=Object(c.useRef)(),k=Object(c.useRef)(),I=Object(c.useRef)();Object(c.useEffect)((function(){var e=Math.floor(S.current.duration);p(e),k.current.max=e}),[null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t.loadedmetadata,null===S||void 0===S||null===(n=S.current)||void 0===n?void 0:n.readyState]);var C=function(e){var t=Math.floor(e/60),n=t<10?"0".concat(t):"".concat(t),c=Math.floor(e%60),r=c<10?"0".concat(c):"".concat(c);return"".concat(n,":").concat(r)},w=function e(){k.current.value=S.current.currentTime,A(),I.current=requestAnimationFrame(e)},A=function(){k.current.style.setProperty("--seek-before-width","".concat(k.current.value/d*100,"%")),f(k.current.value)},M=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})):e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t}))};return Object(u.jsxs)("div",{className:"cmp-player "+(N?"cmp-player-full":"cmp-player-mini"),children:[N?Object(u.jsx)("button",{className:"cmp-angle-btn",onClick:function(){return y(!1)},children:Object(u.jsx)(l.a,{icon:o.a})}):null,Object(u.jsx)("audio",{ref:S,src:e.songs[e.currentSongIndex].track,preload:"metadata"}),Object(u.jsxs)("div",{className:"cmp-player--details",onClick:function(){return y(!0)},children:[N?Object(u.jsx)("div",{className:"details-img",children:Object(u.jsx)("img",{src:e.songs[e.currentSongIndex].albumart,alt:"Album Art"})}):null,Object(u.jsx)("p",{className:"details-title",children:e.songs[e.currentSongIndex].title}),Object(u.jsx)("p",{className:"details-artist",children:e.songs[e.currentSongIndex].artist})]}),Object(u.jsxs)("div",{className:"cmp-player--progress-bar "+(N?"cmp-progress-bar-show":"cmp-progress-bar-hide"),children:[Object(u.jsx)("div",{className:"cmp-progress-bar-container",children:Object(u.jsx)("input",{type:"range",className:"cmp-progress-bar-bar progress-bar",defaultValue:"0",ref:k,onChange:function(){S.current.currentTime=k.current.value,A()}})}),Object(u.jsxs)("div",{className:"cmp-progress-bar-timer",children:[Object(u.jsx)("div",{className:"cmp-progress-bar-current-time cmp-progress-bar-text",children:C(g)}),Object(u.jsx)("div",{className:"cmp-progress-bar-duration cmp-progress-bar-text",children:d&&!isNaN(d)&&C(d)})]})]}),Object(u.jsxs)("div",{className:"cmp-player--controls",children:[N?Object(u.jsx)("button",{className:"skip-btn",onClick:function(){return M(!1)},children:Object(u.jsx)(l.a,{icon:o.b})}):null,Object(u.jsx)("button",{onClick:function(){var e=a;j(!e),e?(S.current.pause(),cancelAnimationFrame(I.current)):(S.current.play(),I.current=requestAnimationFrame(w))},className:"play-btn",children:a?Object(u.jsx)(l.a,{icon:o.d}):Object(u.jsx)(l.a,{icon:o.e})}),N?Object(u.jsx)("button",{className:"skip-btn",onClick:function(){return M()},children:Object(u.jsx)(l.a,{icon:o.c})}):null]})]})};var b=function(e){var t=Object(c.useState)(0),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(u.jsxs)("div",{className:"cmp-song-list",children:[Object(u.jsxs)("ul",{className:"cmp-song-list-ul",children:[" ",e.songs.map((function(t){return Object(u.jsxs)("li",{className:"cmp-song-list-item",onClick:function(){return function(t){var n=e.songs.findIndex((function(e){return e.title===t}));s(n)}(t.title)},children:[Object(u.jsx)("img",{className:"cmp-song-list-img",src:t.albumart,alt:"Mini album-art"}),Object(u.jsxs)("div",{className:"cmp-song-list-text",children:[Object(u.jsx)("span",{className:"cmp-song-list-title",children:t.title}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"cmp-song-list-album",children:t.album})]})]},t.title)}))]}),Object(u.jsx)(j,{currentSongIndex:r,setCurrentSongIndex:s,songs:e.songs})]})},m=n(17),d=n.n(m);var p=function(){return Object(u.jsx)("div",{className:"cmp-loading",children:Object(u.jsx)(d.a,{size:150})})};var O=function(){return Object(u.jsx)("div",{className:"cmp-navbar",children:Object(u.jsx)("a",{className:"cmp-navbar-title",href:"https://entespotify.github.io/reactive",children:"entespotify"})})};var x=function(){var e=Object(c.useState)([{title:"",artist:"",album:"",albumart:"",track:""}]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),a=Object(i.a)(s,2),l=a[0],o=a[1];return Object(c.useEffect)((function(){fetch("https://hacksawrazor.pythonanywhere.com/tracks/").then((function(e){return e.json()})).then((function(e){r(e),o(!1)}),(function(e){r("Error")}))}),[]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(O,{}),l?Object(u.jsx)(p,{}):Object(u.jsx)(b,{songs:n})]})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.50b247f5.chunk.js.map