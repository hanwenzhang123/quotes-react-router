(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},,function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},,,,,function(e,t,n){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},,function(e,t,n){e.exports={item:"QuoteItem_item__2dOvb"}},,function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},function(e,t,n){e.exports={main:"Layout_main__auk_r"}},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(22),r=n.n(c),s=n(4),a=(n(37),n(2)),o=n(1),i=n.n(o),u=n(23),j=n.n(u),d=n(0),l=function(e){return Object(d.jsxs)("li",{className:j.a.item,children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{children:Object(d.jsx)("p",{children:e.text})}),Object(d.jsx)("figcaption",{children:e.author})]}),Object(d.jsx)(s.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},m=n(21),b=n.n(m),h=function(e){var t,n,c=Object(a.h)(),r=Object(a.i)(),s="asc"===new URLSearchParams(r.search).get("sort"),i=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("div",{className:b.a.sorting,children:Object(d.jsxs)("button",{onClick:function(){c.push({pathname:r.pathname,search:"?sort=".concat(s?"desc":"asc")})},children:["Sort ",s?"Descending":"Ascending"]})}),Object(d.jsx)("ul",{className:b.a.list,children:i.map((function(e){return Object(d.jsx)(l,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=n(25),f=n.n(x),O=function(){return Object(d.jsx)("div",{className:f.a.spinner})},p=n(26),v=n.n(p),_=function(){return Object(d.jsxs)("div",{className:v.a.noquotes,children:[Object(d.jsx)("p",{children:"No quotes found!"}),Object(d.jsx)(s.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},N=n(12),g=n(5),q=n.n(g),w=n(9),C=n(11);function y(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(y,{status:t?"pending":null,data:null,error:null}),c=Object(C.a)(n,2),r=c[0],s=c[1],a=Object(o.useCallback)(function(){var t=Object(w.a)(q.a.mark((function t(n){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,s({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(N.a)({sendRequest:a},r)},S="https://quotes-78eec-default-rtdb.firebaseio.com/";function E(){return F.apply(this,arguments)}function F(){return(F=Object(w.a)(q.a.mark((function e(){var t,n,c,r,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(r in c=[],n)s=Object(N.a)({id:r},n[r]),c.push(s);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(w.a)(q.a.mark((function e(t){var n,c,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return r=Object(N.a)({id:t},c),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return A.apply(this,arguments)}function A(){return(A=Object(w.a)(q.a.mark((function e(t){var n,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return L.apply(this,arguments)}function L(){return(L=Object(w.a)(q.a.mark((function e(t){var n,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return M.apply(this,arguments)}function M(){return(M=Object(w.a)(q.a.mark((function e(t){var n,c,r,s,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(s in r=[],c)a=Object(N.a)({id:s},c[s]),r.push(a);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){var e=k(E,!0),t=e.sendRequest,n=e.status,c=e.data;e.error;return Object(o.useEffect)((function(){t()}),[t]),"pending"===n?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(O,{})}):"completed"!==n||c&&0!==c.length?Object(d.jsx)(h,{quotes:c}):Object(d.jsx)(_,{})}var J=n(27),U=n.n(J),K=function(e){return Object(d.jsx)("div",{className:U.a.card,children:e.children})},V=n(13),B=n.n(V),H=function(e){var t=Object(o.useState)(!1),n=Object(C.a)(t,2),c=n[0],r=n[1],s=Object(o.useRef)(),i=Object(o.useRef)();function u(){r(!0)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.a,{when:c,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(d.jsx)(K,{children:Object(d.jsxs)("form",{className:B.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(d.jsx)("div",{className:B.a.loading,children:Object(d.jsx)(O,{})}),Object(d.jsxs)("div",{className:B.a.control,children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"author",ref:s,onFocus:u})]}),Object(d.jsxs)("div",{className:B.a.control,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Text"}),Object(d.jsx)("textarea",{id:"text",rows:"5",ref:i,onFocus:u})]}),Object(d.jsx)("div",{className:B.a.actions,children:Object(d.jsx)("button",{onClick:function(){r(!1)},className:"btn",children:"Add Quote"})})]})})]})};function W(){var e=k(I),t=e.sendRequest,n=e.status,c=Object(a.h)();return Object(o.useEffect)((function(){"completed"===n&&c.push("/quotes")}),[n,c]),Object(d.jsx)(H,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}var X=n(28),Y=n.n(X),z=n(16),G=n.n(z),Z=function(e){var t=Object(a.j)(),n=Object(o.useRef)(),c=k(D),r=c.sendRequest,s=c.status,i=c.error,u=function(e){if(e.preventDefault(),""!==n.current.value){var c={text:n.current.value},s=t.quoteId;r({commentData:c,quoteId:s})}},j=e.onAddedComment;return Object(o.useEffect)((function(){"completed"!==s||i||j()}),[s,i,j]),"pending"===s?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(O,{})}):i?Object(d.jsx)("p",{className:"centered",children:i}):Object(d.jsxs)("form",{className:G.a.form,onSubmit:u,children:[Object(d.jsxs)("div",{className:G.a.control,onSubmit:u,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:n})]}),Object(d.jsx)("div",{className:G.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},$=n(29),ee=n.n($),te=function(e){return Object(d.jsx)("li",{className:ee.a.item,children:Object(d.jsx)("p",{children:e.text})})},ne=n(30),ce=n.n(ne),re=function(e){return Object(d.jsx)("ul",{className:ce.a.comments,children:e.comments.map((function(e){return Object(d.jsx)(te,{text:e.text},e.id)}))})},se=function(){var e=Object(a.j)(),t=k(T,!0),n=t.sendRequest,c=t.status,r=t.data,s=t.error,i=Object(o.useState)(!1),u=Object(C.a)(i,2),j=u[0],l=u[1];Object(o.useEffect)((function(){n(e.quoteId)}),[n,e.quoteId]);var m=Object(o.useCallback)((function(){l(!1),n(e.quoteId)}),[e.quoteId,n]);return"pending"===c?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(O,{})}):s?Object(d.jsx)("div",{className:"centered",children:s}):Object(d.jsxs)("section",{className:Y.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!j&&Object(d.jsx)("button",{className:"btn",onClick:function(){l(!0)},children:"Add a Comment"}),j&&Object(d.jsx)(Z,{onAddedComment:m}),r.length<1&&Object(d.jsx)("p",{className:"centered",children:"There are no comments yet."}),Object(d.jsx)(re,{comments:r})]})},ae=n(31),oe=n.n(ae),ie=function(e){return Object(d.jsxs)("figure",{className:oe.a.quote,children:[Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("figcaption",{children:e.author})]})};function ue(){var e=Object(a.j)(),t=k(R,!0),n=t.sendRequest,c=t.status,r=t.data,u=t.error;Object(o.useEffect)((function(){n(e.quoteId)}),[e.quoteId,n]);var j=Object(a.k)();return"pending"===c?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(O,{})}):r?u?Object(d.jsx)("p",{className:"centered",children:u}):Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(ie,{text:r.text,author:r.author}),Object(d.jsx)(a.c,{path:j.path,exact:!0,children:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(s.b,{className:"btn--flat",to:"".concat(j.url,"/comments"),children:"View Comments"})})}),Object(d.jsx)(a.c,{path:"".concat(j.path,"/comments"),children:Object(d.jsx)(se,{})})]}):Object(d.jsx)("p",{className:"centered",children:"No quote found!"})}function je(){return Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)("p",{children:"Page not found!"})})}var de=n(32),le=n.n(de),me=n(14),be=n.n(me);function he(){return Object(d.jsxs)("header",{className:be.a.header,children:[Object(d.jsx)("div",{className:be.a.logo,children:"Great Quotes"}),Object(d.jsx)("nav",{className:be.a.nav,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{to:"/quotes",activeClassName:be.a.active,children:"All Quotes"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{to:"/new-quote",activeClassName:be.a.active,children:"Make New Quote"})})]})})]})}function xe(e){return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(he,{}),Object(d.jsx)("main",{className:le.a.main,children:e.children})]})}var fe=function(){return Object(d.jsx)(xe,{children:Object(d.jsxs)(a.e,{children:[Object(d.jsx)(a.c,{path:"/",exact:!0,children:Object(d.jsx)(a.b,{to:"/quotes"})}),Object(d.jsx)(a.c,{path:"/quotes",exact:!0,children:Object(d.jsx)(P,{})}),Object(d.jsx)(a.c,{path:"/quotes/:quoteId",children:Object(d.jsx)(ue,{})}),Object(d.jsx)(a.c,{path:"/new-quote",children:Object(d.jsx)(W,{})}),Object(d.jsx)(a.c,{path:"*",children:Object(d.jsx)(je,{})})]})})};r.a.render(Object(d.jsx)(s.a,{children:Object(d.jsx)(fe,{})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.3f1e5d2f.chunk.js.map