(this["webpackJsonpapi-ip-test"]=this["webpackJsonpapi-ip-test"]||[]).push([[0],{335:function(e,t,a){e.exports=a(695)},340:function(e,t,a){},363:function(e,t){},364:function(e,t){},538:function(e,t){},540:function(e,t){},566:function(e,t){},587:function(e,t){},588:function(e,t){},595:function(e,t){},597:function(e,t){},602:function(e,t){},604:function(e,t){},629:function(e,t){},630:function(e,t){},695:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(43),u=a.n(c),l=(a(340),a(710)),s=a(711),i=a(697),o=function(e){return r.a.createElement(i.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},p=a(3),m=a.n(p),b=a(6),d=a(4),f=a(706),E=a(709),v=a(708),h=a(714);function O(){return(O=Object(b.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,a);case 3:if(n=e.sent,e.prev=4,200!==n.status){e.next=12;break}return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",{detail:JSON.stringify(r),status:1});case 12:return e.next=14,n.text();case 14:return c=e.sent,e.abrupt("return",{detail:c,status:1});case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(4),e.abrupt("return",{detail:"convert to text error",status:2});case 21:e.next=26;break;case 23:return e.prev=23,e.t1=e.catch(0),e.abrupt("return",{detail:e.t1.toString(),status:2});case 26:case"end":return e.stop()}}),e,null,[[0,23],[4,18]])})))).apply(this,arguments)}var j=function(e,t){return O.apply(this,arguments)},x=Object({NODE_ENV:"production",PUBLIC_URL:"/CWS-API-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CBX_PROXY_KEY:"d579bf4a2883cecf610785c49623ff"}).REACT_APP_PREFIX||"";function w(e){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(x,"https://blockchain.info/multiaddr?active=").concat(t,"&cors=true"),e.next=3,j(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{authKey:"d579bf4a2883cecf610785c49623ff"}},n="https://route.cbx.io/api/proxy/btc/addr/".concat(t),e.next=4,j(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return P.apply(this,arguments)}function P(){return(P=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="addr=".concat(t),n={headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:a},"https://api.omniexplorer.info/v2/address/addr/",e.next=5,j("https://api.omniexplorer.info/v2/address/addr/",n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("using cors proxy ".concat(x));var A=a(712);function C(e){var t=e.status,a=e.detail;return 0===t?r.a.createElement(s.a,{textAlign:"center",level:3,color:"#FFCA58"}," ",a," "):1===t?r.a.createElement(s.a,{textAlign:"center",level:3,color:"#00C781"}," ",a," "):r.a.createElement(s.a,{textAlign:"center",level:3,color:"#FF4040"}," ",a," ")}function I(e){var t=e.status,a=e.detail;return 0===t?r.a.createElement(A.a,{color:"#FFCA58"}," ",a," "):1===t?r.a.createElement(A.a,{color:"#00C781"}," ",a," "):r.a.createElement(A.a,{color:"#FF4040"}," ",a," ")}var T=function(){var e=Object(n.useState)("32GW31BBrRyEUoga6etp4dCmxNDACyBqKa"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1],y=Object(n.useState)({status:0,detail:""}),g=Object(d.a)(y,2),P=g[0],A=g[1],T=Object(n.useState)({status:0,detail:""}),B=Object(d.a)(T,2),z=B[0],M=B[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c,u,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([w(a),S(a),k(a)]);case 6:return n=e.sent,r=Object(d.a)(n,3),c=r[0],u=r[1],l=r[2],t||(x(c),A(u),M(l),1===c.status&&1===u.status&&1===l.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 13:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Bitcoin API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"Blockchain Info API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:j.detail}))),r.a.createElement(E.a,{label:r.a.createElement(I,{status:P.status,detail:"CoolBitX Electrum API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:P.detail}))),r.a.createElement(E.a,{label:r.a.createElement(I,{status:z.status,detail:"Omni API USDT Balance"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:z.detail})))))))};function B(e){return z.apply(this,arguments)}function z(){return(z=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://ltc.coin.space/api/addrs/".concat(t),e.next=3,j(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return U.apply(this,arguments)}function U(){return(U=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{authKey:"d579bf4a2883cecf610785c49623ff"}},n="https://route.cbx.io/api/proxy/litcoin/addr/".concat(t),e.next=4,j(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(){var e=Object(n.useState)("MKRHkR17wKzCHSjZxCbbeeEJ1gTcNpfzXj"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1],w=Object(n.useState)({status:0,detail:""}),y=Object(d.a)(w,2),S=y[0],g=y[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([B(a),M(a)]);case 6:return n=e.sent,r=Object(d.a)(n,2),c=r[0],u=r[1],t||(x(c),g(u),1===c.status&&1===u.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 12:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Litecoin API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"Coin.Space API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{value:j.detail,disabled:!0}))),r.a.createElement(E.a,{label:r.a.createElement(I,{status:S.status,detail:"CoolBitX Electrum API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{value:S.detail,disabled:!0})))))))};function N(e){return F.apply(this,arguments)}function F(){return(F=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.etherscan.io/api?module=account&action=balance&address=".concat(t,"&tag=latest&apikey=SZZWK7FDQ6QFAE9UX3M2W52BNM85K7DRZR"),e.next=3,j(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"POST",a={id:1,jsonrpc:"2.0",method:"eth_getBalance",params:[t,"latest"]},n={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)},"https://mainnet.infura.io/v3/dd7e77cc740a4a32ab3c94d9a08b90ae",e.next=7,j("https://mainnet.infura.io/v3/dd7e77cc740a4a32ab3c94d9a08b90ae",n);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=Object(n.useState)("0x9e68b67660c223b3e0634d851f5df821e0e17d84"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1],w=Object(n.useState)({status:0,detail:""}),y=Object(d.a)(w,2),S=y[0],g=y[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([R(a),N(a)]);case 6:return n=e.sent,r=Object(d.a)(n,2),c=r[0],u=r[1],t||(x(c),g(u),1===c.status&&1===u.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 12:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Ethereum API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"Infura API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{value:j.detail,disabled:!0}))),r.a.createElement(E.a,{label:r.a.createElement(I,{status:S.status,detail:"Etherscan API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{value:S.detail,disabled:!0})))))))};function W(e){return X.apply(this,arguments)}function X(){return(X=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{authKey:"d579bf4a2883cecf610785c49623ff"}},n="https://route.cbx.io/api/bch/addrs/".concat(t),e.next=4,j(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=function(){var e=Object(n.useState)("bitcoincash:qrd9khmeg4nqag3h5gzu8vjt537pm7le85lcauzezc"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([W(a)]);case 6:return n=e.sent,r=Object(d.a)(n,1),c=r[0],t||(x(c),1===c.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 11:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(i.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"BitcoinCash API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"CoolBitX Electrum API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{value:j.detail,disabled:!0}))))))))};function L(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(b.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a='\n    query {\n      account(address: "'.concat(t,'") {\n        xrpBalance,\n      }\n    }\n  '),n={headers:{authKey:"d579bf4a2883cecf610785c49623ff"}},r="https://route.cbx.io/api/v2/rippleELBGetApi?query=".concat(encodeURIComponent(a)),e.next=5,j(r,n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=function(){var e=Object(n.useState)("r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([L(a)]);case 6:return n=e.sent,r=Object(d.a)(n,1),c=r[0],t||(x(c),1===c.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 11:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Ripple API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"CBX GraphQL Node"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:j.detail})))))))},J=a(124),V=a.n(J),G=V.a.IconAmount,Q=new V.a.HttpProvider("https://wallet.icon.foundation/api/v3"),Y=new V.a(Q);function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.getBalance(t).execute();case 3:return a=e.sent,n=G.of(a,G.Unit.LOOP).convertUnit(G.Unit.ICX).toString(),e.abrupt("return",{detail:n,status:1});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{detail:e.t0.toString(),status:2});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var te=function(){var e=Object(n.useState)("hxc102e44c2fe6bc235d9584d9d5a1b2e3c40d3985"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([$(a)]);case 6:return n=e.sent,r=Object(d.a)(n,1),c=r[0],t||(x(c),1===c.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 11:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Icon API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"Official API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{value:j.detail,disabled:!0})))))))};function ae(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},n="https://dex.binance.org/api/v1/account/".concat(t),e.next=4,j(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=function(){var e=Object(n.useState)("bnb1jpttcqa6703lv2zcpnq89gs24pw90udvjympg0"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([ae(a)]);case 6:return n=e.sent,r=Object(d.a)(n,1),c=r[0],t||(x(c),1===c.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 11:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Binance API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"BinanceDex API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{value:j.detail,disabled:!0})))))))};function ce(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://explorer.zensystem.io/api/addr/".concat(t,"/balance"),e.next=3,j(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=function(){var e=Object(n.useState)("zsxWnyDbU8pk2Vp98Uvkx5Nh33RFzqnCpWN"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([ce(a)]);case 6:return n=e.sent,r=Object(d.a)(n,1),c=r[0],t||(x(c),1===c.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 11:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Horizen API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"Zen System"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{value:j.detail,disabled:!0})))))))},se=a(125);function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(b.a)(m.a.mark((function e(t){var a,n,r,c,u=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]&&u[1],e.prev=1,n=a?new se.Server("https://horizon-testnet.stellar.org"):new se.Server("https://horizon.stellar.org"),e.next=5,n.accounts().accountId(t).call();case 5:return r=e.sent,c=r.balances.find((function(e){return"native"===e.asset_type})),e.abrupt("return",{detail:(null===c||void 0===c?void 0:c.balance)||"0",status:1});case 10:if(e.prev=10,e.t0=e.catch(1),!(e.t0 instanceof se.NotFoundError)){e.next=16;break}return e.abrupt("return",{detail:"0",status:1});case 16:return e.abrupt("return",{detail:e.t0.toString(),status:2});case 17:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}var pe=function(){var e=Object(n.useState)("GBLKRATZODTSJNU7XTB5HY5VAAN63CPRT77UYZT2VLCNXE7F3YHSW22M"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1],w=Object(n.useState)({status:0,detail:""}),y=Object(d.a)(w,2),S=y[0],g=y[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([ie(a),ie(a,!0)]);case 6:return n=e.sent,r=Object(d.a)(n,2),c=r[0],u=r[1],t||(x(c),g(u),1===c.status&&1===u.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 12:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Stellar API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"Mainnet API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:j.detail}))),r.a.createElement(E.a,{label:r.a.createElement(I,{status:S.status,detail:"Testnet API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:S.detail})))))))},me=a(564),be=me.Server,de=me.NotFoundError;function fe(e){return Ee.apply(this,arguments)}function Ee(){return(Ee=Object(b.a)(m.a.mark((function e(t){var a,n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]&&r[1],n=new be(a?"https://kau-testnet.kinesisgroup.io":"https://kau-mainnet.kinesisgroup.io"),e.abrupt("return",Oe(n,t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e){return he.apply(this,arguments)}function he(){return(he=Object(b.a)(m.a.mark((function e(t){var a,n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]&&r[1],n=new be(a?"https://kag-testnet.kinesisgroup.io":"https://kag-mainnet.kinesisgroup.io"),e.abrupt("return",Oe(n,t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(e,t){return je.apply(this,arguments)}function je(){return(je=Object(b.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.accounts().accountId(a).call();case 3:return n=e.sent,r=n.balances.find((function(e){return"native"===e.asset_type})),e.abrupt("return",{detail:(null===r||void 0===r?void 0:r.balance)||"0",status:1});case 8:if(e.prev=8,e.t0=e.catch(0),!(e.t0 instanceof de)){e.next=14;break}return e.abrupt("return",{detail:"0",status:1});case 14:return e.abrupt("return",{detail:e.t0.toString(),status:2});case 15:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var xe=function(){var e=Object(n.useState)("GAOO4W4NHRSUVFPCVUA2BZTAMCJ6O7MBMXMDMUL6XEQ7Q6DBT6UTFD7V"),t=Object(d.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),l=Object(d.a)(u,2),s=l[0],o=l[1],p=Object(n.useState)({status:0,detail:""}),O=Object(d.a)(p,2),j=O[0],x=O[1],w=Object(n.useState)({status:0,detail:""}),y=Object(d.a)(w,2),S=y[0],g=y[1],k=Object(n.useState)({status:0,detail:""}),P=Object(d.a)(k,2),A=P[0],T=P[1],B=Object(n.useState)({status:0,detail:""}),z=Object(d.a)(B,2),M=z[0],U=z[1];return Object(n.useMemo)(Object(b.a)(m.a.mark((function e(){var t,n,r,c,u,l,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(0),t=!1,a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Promise.all([fe(a),fe(a,!0),ve(a),ve(a,!0)]);case 6:return n=e.sent,r=Object(d.a)(n,4),c=r[0],u=r[1],l=r[2],s=r[3],t||(x(c),g(u),T(l),U(s),1===c.status&&1===u.status&&1===l.status&&1===s.status?o(1):o(2)),e.abrupt("return",(function(){t=!0}));case 14:case"end":return e.stop()}}),e)}))),[a]),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(C,{status:s,detail:"Kinesis API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(v.a,{size:"small",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(E.a,{label:r.a.createElement(I,{status:j.status,detail:"KAU Mainnet API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:j.detail}))),r.a.createElement(E.a,{label:r.a.createElement(I,{status:S.status,detail:"KAU Testnet API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:S.detail}))),r.a.createElement(E.a,{label:r.a.createElement(I,{status:A.status,detail:"KAG Mainnet API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:A.detail}))),r.a.createElement(E.a,{label:r.a.createElement(I,{status:M.status,detail:"KAG Testnet API"})},r.a.createElement(i.a,{pad:"small"},r.a.createElement(h.a,{disabled:!0,value:M.detail})))))))},we={global:{colors:{brand:"#000099"},font:{family:"Source+Code+Pro",size:"18px",height:"20px"}}};var ye=function(){return r.a.createElement(l.a,{theme:we,full:!0},r.a.createElement(o,null,r.a.createElement(s.a,{level:"3"},"CoolWalletS API Test")),r.a.createElement(i.a,{margin:"small"},r.a.createElement(T,null),r.a.createElement(K,null),r.a.createElement(D,null),r.a.createElement(H,null),r.a.createElement(q,null),r.a.createElement(te,null),r.a.createElement(re,null),r.a.createElement(le,null),r.a.createElement(pe,null),r.a.createElement(xe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[335,1,2]]]);
//# sourceMappingURL=main.b43795d2.chunk.js.map