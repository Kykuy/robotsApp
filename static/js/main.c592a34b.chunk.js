(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),o=n.n(r),s=(n(13),n(2)),i=n(3),d=n(5),h=n(4),l=n(0),u=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",{type:"search",placeholder:"search robots!",className:"searchBar searchBar-bot",onChange:e.onInput})})},b=n(7),j=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1],o={background:"scroll",backgroundImage:"url(https://robohash.org/".concat(e.id,"?size=300x300)"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},s=Object(c.useState)(o),i=Object(b.a)(s,2),d=i[0],h=i[1];return Object(c.useEffect)((function(){h({background:"scroll",backgroundImage:"linear-gradient( 115deg, rgba(58, 58, 158, 0.8), rgba(136, 136, 206, 0.8) ), \n      url(https://robohash.org/".concat(e.id,"?size=300x300)"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundClip:"padding-box"})}),[e.id]),Object(l.jsxs)("article",{className:"pa2 ma2 br2 bg-light-green grow ba b--black-30 bw1 shadow-5 tc item",onMouseOver:function(){return r(!0)},onMouseLeave:function(){return r(!1)},style:a?d:{},children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.id,"?size=300x300"),alt:"avatar",className:"tc ".concat(a?"hidden":"")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("p",{className:"".concat(a?"":"hidden"),children:["Username: ",Object(l.jsx)("span",{className:"".concat(a?"bold":""),children:e.username})]}),Object(l.jsxs)("p",{className:"".concat(a?"":"hidden"),children:["From: ",Object(l.jsx)("span",{className:"".concat(a?"bold":""),children:e.address})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"".concat(a?"":"hidden"),children:"email: "}),Object(l.jsx)("span",{className:"".concat(a?"bold":""),children:e.email})]}),Object(l.jsxs)("p",{className:"".concat(a?"":"hidden"),children:["Works at: ",Object(l.jsx)("span",{className:"".concat(a?"bold":""),children:e.company})]})]})]})},m=function(e){var t=e.robots.map((function(e,t){return Object(l.jsx)(j,{id:e.id,name:e.name,username:e.username,address:e.address.city,email:e.email,company:e.company.name},e.id)}));return Object(l.jsx)(c.Fragment,{children:t})},p=function(e){return Object(l.jsx)("section",{className:"scrollbar",children:e.children})},O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(i.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Whoops! Something went wrong"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.a.Component),g=(n(15),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchInputChange=function(t){e.setState({searchInput:t.target.value})},e.state={searchInput:"",robots:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchInput,c=t.filter((function(e){return e.name.toLowerCase().startsWith(n.toLowerCase())||e.name.toLowerCase().includes(n.toLowerCase())}));return t.length<1?Object(l.jsx)("h1",{className:"tc f2",children:"LOADING"}):Object(l.jsxs)("div",{className:"wrapper tc",children:[Object(l.jsx)("h1",{className:"title",children:"Robofriends"}),Object(l.jsx)(u,{onInput:this.onSearchInputChange}),Object(l.jsx)(p,{children:Object(l.jsx)(O,{children:Object(l.jsx)(m,{robots:c})})})]})}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c592a34b.chunk.js.map