(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{30:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.ea2ad102.png"},78:function(e,t,n){"use strict";n.r(t);var r,a,i,c,s,o,l,u,d,p,j,b,h,g,x,O,m,v,f,y,_,w,k,S,T,R,M,U,z,C,N,I,P=n(1),A=n.n(P),F=n(39),B=n.n(F),D=n(12),V=n(13),q=n(15),J=n(14),L=n(19),E=n(5),H=n(10),G=n.n(H),K=n(17),Q=n(4),W=n(3),X=n(16),Y=n(0),Z=W.c.div(r||(r=Object(Q.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]))),$=W.c.span(a||(a=Object(Q.a)(["\n    font-size: 14px;\n    font-weight: 600;\n"]))),ee=W.c.div(i||(i=Object(Q.a)(["\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]))),te=function(e){var t=e.title,n=e.children;return Object(Y.jsxs)(Z,{children:[Object(Y.jsx)($,{children:t}),Object(Y.jsx)(ee,{children:n})]})},ne=n(45),re=n(46),ae=W.c.div(c||(c=Object(Q.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    margin-top: 20px;\n"]))),ie=function(){return Object(Y.jsx)(ae,{children:Object(Y.jsx)(ne.a,{icon:re.a,spin:!0})})},ce=W.c.div(s||(s=Object(Q.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]))),se=W.c.span(o||(o=Object(Q.a)(["\n    color: ",";\n"])),(function(e){return e.color})),oe=function(e){var t=e.text,n=e.color;return Object(Y.jsx)(ce,{children:Object(Y.jsx)(se,{color:n,children:t})})},le=W.c.div(l||(l=Object(Q.a)(["\n    font-size: 12px;\n"]))),ue=W.c.div(u||(u=Object(Q.a)(["\n    height: 180px;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n    border-radius: 4px;\n    transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),de=W.c.span(d||(d=Object(Q.a)(["\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    opacity: 0;\n    transition: opacity 0.1s linear;\n"]))),pe=W.c.div(p||(p=Object(Q.a)(["\n    margin-bottom: 5px;\n    position: relative;\n    &:hover {\n        "," {\n            opacity: 0.3;\n        }\n        "," {\n            opacity: 1;\n        }\n    }\n"])),ue,de),je=W.c.span(j||(j=Object(Q.a)(["\n    display: block;\n    margin-bottom: 3px;\n"]))),be=W.c.span(b||(b=Object(Q.a)(["\n    font-size: 10px;\n    color: rgba(255, 255, 255, 0.5);\n"]))),he=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,s=e.isMovie,o=void 0!==s&&s;return Object(Y.jsx)(L.b,{to:o?"/movie/".concat(t):"/show/".concat(t),children:Object(Y.jsxs)(le,{children:[Object(Y.jsxs)(pe,{children:[Object(Y.jsx)(ue,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(30).default}),Object(Y.jsxs)(de,{children:[Object(Y.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"}),"",i,"/10"]})]}),Object(Y.jsx)(je,{children:a.length>18?"".concat(a.substring(0,15),"..."):a}),Object(Y.jsx)(be,{children:c})]})})},ge=W.c.div(h||(h=Object(Q.a)(["\n    padding: 20px;\n"]))),xe=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.b,{children:Object(Y.jsx)("title",{children:"Movies | Nomflix"})}),i?Object(Y.jsx)(ie,{}):Object(Y.jsxs)(ge,{children:[Object(Y.jsx)(X.b,{children:Object(Y.jsx)("title",{children:"Movies | Nomflix"})}),t&&t.length>0&&Object(Y.jsx)(te,{title:"Now Playing",children:t.map((function(e){return Object(Y.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"upcoming",children:n.map((function(e){return Object(Y.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(Y.jsx)(te,{title:"Now Playing",children:r.map((function(e){return Object(Y.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),a&&Object(Y.jsx)(oe,{color:"#e74c3c",text:a})]})]})},Oe=n(47),me=n.n(Oe).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"ea24823f1c54cf5b3b163947c5be97d5",language:"en-US"}}),ve=function(){return me.get("movie/now_playing")},fe=function(){return me.get("movie/upcoming")},ye=function(){return me.get("movie/popular")},_e=function(e){return me.get("movie/".concat(e),{params:{append_to_response:"videos"}})},we=function(e){return me.get("search/movie",{params:{query:encodeURIComponent(e)}})},ke=function(){return me.get("tv/top_rated")},Se=function(){return me.get("tv/popular")},Te=function(){return me.get("tv/airing_today")},Re=function(e){return me.get("tv/".concat(e),{params:{append_to_response:"videos"}})},Me=function(e){return me.get("search/tv",{params:{query:encodeURIComponent(e)}})},Ue=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve();case 3:return t=e.sent,n=t.data.results,e.next=7,fe();case 7:return r=e.sent,a=r.data.results,e.next=11,ye();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can`t find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(Y.jsx)(xe,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(A.a.Component),ze=W.c.div(g||(g=Object(Q.a)(["\n    padding: 20px;\n"]))),Ce=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.error,i=e.loading;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"TV Shows | Nomflix"})}),i?Object(Y.jsx)(ie,{}):Object(Y.jsxs)(ze,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Top Rated Shows",children:t.map((function(e){return Object(Y.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"Popular Shows",children:n.map((function(e){return Object(Y.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(Y.jsx)(te,{title:"Airing Today",children:r.map((function(e){return Object(Y.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(Y.jsx)(oe,{color:"#e74c3c",text:a})]})]})},Ne=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ke();case 3:return t=e.sent,n=t.data.results,e.next=7,Se();case 7:return r=e.sent,a=r.data.results,e.next=11,Te();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can`t find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.error,i=e.loading;return Object(Y.jsx)(Ce,{topRated:t,popular:n,airingToday:r,error:a,loading:i})}}]),n}(A.a.Component),Ie=W.c.div(x||(x=Object(Q.a)(["\n    padding: 20px;\n"]))),Pe=W.c.form(O||(O=Object(Q.a)(["\n    margin-bottom: 50px;\n    width: 100%;\n"]))),Ae=W.c.input(m||(m=Object(Q.a)(["\n    all: unset;\n    font-size: 28px;\n    width: 100%;\n"]))),Fe=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handleSubmit,s=e.updateTerm;return Object(Y.jsxs)(Ie,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Search | Nomflix"})}),Object(Y.jsx)(Pe,{onSubmit:c,children:Object(Y.jsx)(Ae,{placeholder:"Search Movies or TV Shows...",value:r,onChange:s})}),i?Object(Y.jsx)(ie,{}):Object(Y.jsxs)(Y.Fragment,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Movie Results",children:t.map((function(e){return Object(Y.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"TV Show Results",children:n.map((function(e){return Object(Y.jsx)(he,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(Y.jsx)(oe,{color:"#e74c3c",text:a}),t&&n&&0===t.length&&0===n.length&&Object(Y.jsx)(oe,{text:"Nothing found",color:"#95A5A6"})]})]})},Be=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(K.a)(G.a.mark((function t(){var n,r,a,i,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,we(n);case 5:return r=t.sent,a=r.data.results,t.next=9,Me(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can`t find results"});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(V.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading;return Object(Y.jsx)(Fe,{movieResults:t,tvResults:n,searchTerm:r,error:a,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(A.a.Component),De=W.c.header(v||(v=Object(Q.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Ve=W.c.ul(f||(f=Object(Q.a)(["\n  display: flex;\n"]))),qe=W.c.li(y||(y=Object(Q.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.3s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Je=Object(W.c)(L.b)(_||(_=Object(Q.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Le=Object(E.g)((function(e){var t=e.location.pathname;return Object(Y.jsx)(De,{children:Object(Y.jsxs)(Ve,{children:[Object(Y.jsx)(qe,{current:"/"===t,children:Object(Y.jsx)(Je,{to:"/",children:"Movies"})}),Object(Y.jsx)(qe,{current:"/tv"===t,children:Object(Y.jsx)(Je,{to:"/tv",children:"tv"})}),Object(Y.jsx)(qe,{current:"/search"===t,children:Object(Y.jsx)(Je,{to:"/search",children:"Search"})})]})})})),Ee=W.c.div(w||(w=Object(Q.a)(["\n    height: calc(100vh - 50px);\n    width: 100%;\n    position: relative;\n    padding: 50px;\n"]))),He=W.c.div(k||(k=Object(Q.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    filter: blur(3px);\n    opacity: 0.5;\n"])),(function(e){return e.bgImage})),Ge=W.c.div(S||(S=Object(Q.a)(["\n    position: relative;\n    display: flex;\n    width: 100%;\n    height: 100%;\n"]))),Ke=W.c.div(T||(T=Object(Q.a)(["\n    width: 30%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    border-radius: 5px;\n"])),(function(e){return e.bgImage})),Qe=W.c.div(R||(R=Object(Q.a)(["\n    width: 70%;\n    margin-left: 10px;\n"]))),We=W.c.p(M||(M=Object(Q.a)(["\n    font-size: 32px;\n    margin-bottom: 10px;\n"]))),Xe=W.c.div(U||(U=Object(Q.a)(["\n    margin: 20px 0;\n"]))),Ye=W.c.span(z||(z=Object(Q.a)([""]))),Ze=W.c.span(C||(C=Object(Q.a)(["\n    margin: 0 10px;\n"]))),$e=W.c.p(N||(N=Object(Q.a)(["\n    font-size: 12px;\n    opacity: 0.7;\n    line-height: 1.5;\n    width: 50%;\n"]))),et=function(e){var t=e.result,r=e.error;return e.loading?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Loading | Nomflix"})}),Object(Y.jsx)(ie,{})]}):r?Object(Y.jsx)(oe,{}):Object(Y.jsxs)(Ee,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," | Nomflix"]})}),Object(Y.jsx)(He,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(Y.jsxs)(Ge,{children:[Object(Y.jsx)(Ke,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(30).default}),Object(Y.jsxs)(Qe,{children:[Object(Y.jsx)(We,{children:t.original_title?t.original_title:t.original_name}),Object(Y.jsxs)(Xe,{children:[Object(Y.jsx)(Ye,{children:t.release_date?t.release_date.substring(0,4):""===t.release_date?"no data":t.first_air_date.substring(0,4)}),Object(Y.jsx)(Ze,{children:"\u25cf"}),Object(Y.jsxs)(Ye,{children:[0===t.runtime||t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(Y.jsx)(Ze,{children:"\u25cf"}),Object(Y.jsx)(Ye,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(Y.jsx)($e,{children:t.overview})]})]})]})},tt=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={result:null,error:null,loading:!0},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark((function e(){var t,n,r,a,i,c,s,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=t.location.pathname,this.isMovie=a.includes("/movie/"),i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!this.isMovie){e.next=14;break}return e.next=10,_e(i);case 10:s=e.sent,c=s.data,e.next=18;break;case 14:return e.next=16,Re(i);case 16:o=e.sent,c=o.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can`t find anything"});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return console.log(this.state),Object(Y.jsx)(et,{result:t,error:n,loading:r})}}]),n}(A.a.Component),nt=function(){return Object(Y.jsx)(L.a,{children:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Le,{}),Object(Y.jsxs)(E.d,{children:[Object(Y.jsx)(E.b,{path:"/",exact:!0,component:Ue}),Object(Y.jsx)(E.b,{path:"/tv",component:Ne}),Object(Y.jsx)(E.b,{path:"/search",component:Be}),Object(Y.jsx)(E.b,{path:"/movie/:id",component:tt}),Object(Y.jsx)(E.b,{path:"/show/:id",component:tt}),Object(Y.jsx)(E.a,{from:"*",to:"/"})]})]})})},rt=n(48),at=Object(W.a)(I||(I=Object(Q.a)(["\n    ",";\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color: rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 50px;\n    }\n"])),rt.a),it=function(e){Object(q.a)(n,e);var t=Object(J.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(nt,{}),Object(Y.jsx)(at,{})]})}}]),n}(P.Component);B.a.render(Object(Y.jsx)(A.a.StrictMode,{children:Object(Y.jsx)(it,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.30961c77.chunk.js.map