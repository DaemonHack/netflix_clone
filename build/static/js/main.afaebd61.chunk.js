(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(18),o=n.n(a),r=(n(28),n(29),n(4)),s=n.n(r),l=n(6),u=n(5),d=n(19),h=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(48),n(20)),b=n(23),v=n.n(b),j=n(0);var p=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),i=n[0],a=n[1],o=Object(c.useState)(""),r=Object(u.a)(o,2),d=r[0],b=r[1];return Object(c.useEffect)((function(){function t(){return(t=Object(l.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get(e.fetchUrl);case 2:return n=t.sent,a(n.data.results),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.fetchUrl]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("div",{className:"row_posters",children:i.map((function(t,n){return Object(j.jsx)("img",{onClick:function(){return function(e){d?b(""):v()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);b(t.get("v"))})).catch((function(e){console.log(e)}))}(t)},className:"row_poster ".concat(e.isLargeRow&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.isLargeRow?t.poster_path:t.backdrop_path," "),alt:t.name},t.id)}))}),d&&Object(j.jsx)(f.a,{videoId:d,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},m="8c2a39b74b4bcf8550e5fc980b375214",g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActioinMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(71);var O=function(){var e,t,n=Object(c.useState)([]),i=Object(u.a)(n,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(g.fetchNetflixOriginals);case 2:return t=e.sent,n=Math.floor(Math.random()*t.data.results.length-1),o(t.data.results[n]),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner_content",children:[Object(j.jsx)("h1",{className:"banner_title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(j.jsxs)("div",{className:"banner_buttons",children:[Object(j.jsx)("button",{className:"banner_button",children:"Play"}),Object(j.jsx)("button",{className:"banner_button",children:"My list"})]}),Object(j.jsx)("h1",{className:"banner_description",children:(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(j.jsx)("div",{className:"banner--fadeBottom"})]})},x=(n(72),function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsxs)("div",{className:"nav ".concat(n&&"nav-black"),children:[Object(j.jsx)("img",{className:"nav-logo",src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",alt:"Netflix Logo"}),Object(j.jsx)("img",{className:"nav-avater",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"Netflix logo"})]})});var w=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{}),Object(j.jsx)(O,{}),Object(j.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(p,{title:"Treding Now",fetchUrl:g.fetchTrending}),Object(j.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActioinMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Documentries",fetchUrl:g.fetchDocumentries})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),_()}},[[73,1,2]]]);
//# sourceMappingURL=main.afaebd61.chunk.js.map