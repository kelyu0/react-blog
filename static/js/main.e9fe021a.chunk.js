(this["webpackJsonpreact-issue-blog"]=this["webpackJsonpreact-issue-blog"]||[]).push([[0],{253:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n(24),a=n.n(r),i=n(6),o=n(7),l=n(9),u=n(8),h=(n(32),n(13)),j=n(2),b={githubUserName:"kelyu0",githubRepo:"articles",thirdPartySite:[{href:"mailto:kelyu0109@gmail.com",title:"kelyu0109@gmail.com"},{href:"https://github.com/kelyu0",title:"GitHub"},{href:"https://www.linkedin.com/in/ke-lyu-638bb8141/",title:"Linkedin"}],porject:{vueIssueBlog:{code:"https://github.com/kelyu0/vue-issue-blog",demo:"https://kelyu0.github.io/vue-issue-blog"},reactIssueBlog:{code:"https://github.com/kelyu0/react-issue-blog",demo:"https://kelyu0.github.io/react-issue-blog"}}},d=(n(33),n(34),n(35),n(36),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"article",children:[Object(c.jsx)("h3",{children:"Contact me from "}),Object(c.jsx)("ul",{children:b.thirdPartySite.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.href,children:e.title})},t)}))}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"Blog Theme"}),Object(c.jsx)("h4",{children:"code"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:b.porject.vueIssueBlog.code,children:" vue-issue-blog"}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:b.porject.reactIssueBlog.code,children:" react-issue-blog"})]}),Object(c.jsx)("h4",{children:"demo"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:b.porject.vueIssueBlog.demo,children:" Version Vue "}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:b.porject.reactIssueBlog.demo,children:" Version React "})]})]})}}]),n}(s.Component)),p=n(25),m=n.n(p),O=(n(247),n(19)),f=n.n(O),v=n(12),x=n.n(v),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("aside",{className:"catalog-container",children:this.props.tables.map((function(e,t){var n=e.level,s=e.title;return Object(c.jsx)("div",{children:Object(c.jsx)("a",{className:"article-catalog-h"+n,href:"#"+s,children:s})},t)}))})}}]),n}(s.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={content:""},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/").pop();f.a.setOptions({highlight:function(e){return m.a.highlightAuto(e).value}}),x.a.start();var n="https://api.github.com/repos/".concat(b.githubUserName,"/").concat(b.githubRepo,"/issues/").concat(t);fetch(n).then((function(e){return e.json()})).then((function(t){var n=e.renderContent(t);e.setState({content:n})})),x.a.done()}},{key:"handleAnchor",value:function(e){var t=f()(e.body),n=e.body.match(/#{1,6}\s(.+)/g).map((function(e){return{level:e.split("#").length-1,title:e.replace(/#{1,6}/,"").trim()}}));return t.match(/<(h\d).*?>.*?<\/h\d>/g).forEach((function(e,c){var s="<div id='".concat(n[c].title,"'>").concat(e," </div>");t=t.replace(e,s)})),{htmlContent:t,tables:n}}},{key:"renderContent",value:function(e){var t=this.handleAnchor(e),n=t.htmlContent,s=t.tables;return Object(c.jsxs)("div",{className:"content-layout",children:[Object(c.jsx)(g,{tables:s}),Object(c.jsxs)("div",{className:"main-container",children:[Object(c.jsx)("a",{href:"#top",id:"gotop-btn",children:"Up"}),Object(c.jsxs)("div",{className:"article",children:[Object(c.jsxs)("article",{className:"article ",children:[Object(c.jsx)("h1",{className:"article-title",children:e.title}),Object(c.jsx)("p",{className:"article-time",children:e.created_at.substr(0,10)}),Object(c.jsx)("div",{className:"article-desc article-content",dangerouslySetInnerHTML:{__html:n}})]}),Object(c.jsx)("div",{className:"article",children:Object(c.jsx)("button",{className:"article-comment",onClick:function(){return window.location.href=e.html_url},children:"Comment"})})]})]})]})}},{key:"render",value:function(){return Object(c.jsx)("div",{children:this.state.content})}}]),n}(s.Component),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.post,t=e.labels.map((function(e){return Object(c.jsx)("span",{className:"list-label",children:e},e)})),n="/post/"+e.id;return Object(c.jsxs)("li",{className:"list-post",children:[Object(c.jsx)("div",{children:Object(c.jsx)(h.b,{to:{pathname:n},children:e.title})}),Object(c.jsx)("span",{className:"date-long",children:e.date}),t]})}}]),n}(s.Component),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={posts:[]},c}return Object(o.a)(n,[{key:"resolveId",value:function(e){return parseInt(e.pathname.split("/").pop())}},{key:"fetchData",value:function(){var e=this,t="https://api.github.com/repos/".concat(b.githubUserName,"/").concat(b.githubRepo,"/issues");fetch(t).then((function(e){return e.json()})).then((function(t){var n=t.filter((function(e){return"open"===e.state})).map((function(e){return{id:e.number,title:e.title,labels:e.labels.map((function(e){return e.name})),url:e.html_url,date:e.created_at.substring(0,10)}}));e.setState({posts:n})}))}},{key:"componentDidMount",value:function(){this.id=this.resolveId(this.props.location),x.a.start(),this.fetchData(),x.a.done()}},{key:"render",value:function(){var e=this.state.posts.map((function(e){return Object(c.jsx)(k,{post:e},e.id)}));return Object(c.jsx)("div",{className:"list",children:Object(c.jsx)("ul",{children:e})})}}]),n}(s.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)(h.a,{basename:"/react-issue-blog",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)(h.b,{to:"/",children:"Posts"}),Object(c.jsx)("span",{children:" | "}),Object(c.jsx)(h.b,{to:"/about",children:"About"}),Object(c.jsx)("span",{children:" | "}),Object(c.jsx)("a",{href:b.porject.vueIssueBlog.demo,children:"Version Vue"})]}),Object(c.jsx)(j.a,{path:"/post/:id",component:y}),Object(c.jsx)(j.a,{exact:!0,path:"/",component:N}),Object(c.jsx)(j.a,{path:"/about",component:d})]})})}}]),n}(s.Component);a.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){}},[[253,1,2]]]);
//# sourceMappingURL=main.e9fe021a.chunk.js.map