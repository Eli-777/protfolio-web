(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},36:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),i=(t(24),t(25),t(26),t(27),t(28),t(29),t(30),t(31),t(32),t(33),t(1)),s=t.n(i);s.a.easing.jswing=s.a.easing.swing,s.a.extend(s.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,l){return s.a.easing[s.a.easing.def](e,a,t,n,l)},easeInQuad:function(e,a,t,n,l){return n*(a/=l)*a+t},easeOutQuad:function(e,a,t,n,l){return-n*(a/=l)*(a-2)+t},easeInOutQuad:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,l){return n*(a/=l)*a*a+t},easeOutCubic:function(e,a,t,n,l){return n*((a=a/l-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,l){return n*(a/=l)*a*a*a+t},easeOutQuart:function(e,a,t,n,l){return-n*((a=a/l-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,l){return n*(a/=l)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,l){return n*((a=a/l-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,l){return-n*Math.cos(a/l*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,l){return n*Math.sin(a/l*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,l){return-n/2*(Math.cos(Math.PI*a/l)-1)+t},easeInExpo:function(e,a,t,n,l){return 0==a?t:n*Math.pow(2,10*(a/l-1))+t},easeOutExpo:function(e,a,t,n,l){return a==l?t+n:n*(1-Math.pow(2,-10*a/l))+t},easeInOutExpo:function(e,a,t,n,l){return 0==a?t:a==l?t+n:(a/=l/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,l){return-n*(Math.sqrt(1-(a/=l)*a)-1)+t},easeOutCirc:function(e,a,t,n,l){return n*Math.sqrt(1-(a=a/l-1)*a)+t},easeInOutCirc:function(e,a,t,n,l){return(a/=l/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,l){var c=1.70158,r=0,i=n;if(0==a)return t;if(1==(a/=l))return t+n;if(r||(r=.3*l),i<Math.abs(n)){i=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/i);return-i*Math.pow(2,10*(a-=1))*Math.sin((a*l-c)*(2*Math.PI)/r)+t},easeOutElastic:function(e,a,t,n,l){var c=1.70158,r=0,i=n;if(0==a)return t;if(1==(a/=l))return t+n;if(r||(r=.3*l),i<Math.abs(n)){i=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/i);return i*Math.pow(2,-10*a)*Math.sin((a*l-c)*(2*Math.PI)/r)+n+t},easeInOutElastic:function(e,a,t,n,l){var c=1.70158,r=0,i=n;if(0==a)return t;if(2==(a/=l/2))return t+n;if(r||(r=l*(.3*1.5)),i<Math.abs(n)){i=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/i);return a<1?i*Math.pow(2,10*(a-=1))*Math.sin((a*l-c)*(2*Math.PI)/r)*-.5+t:i*Math.pow(2,-10*(a-=1))*Math.sin((a*l-c)*(2*Math.PI)/r)*.5+n+t},easeInBack:function(e,a,t,n,l,c){return void 0==c&&(c=1.70158),n*(a/=l)*a*((c+1)*a-c)+t},easeOutBack:function(e,a,t,n,l,c){return void 0==c&&(c=1.70158),n*((a=a/l-1)*a*((c+1)*a+c)+1)+t},easeInOutBack:function(e,a,t,n,l,c){return void 0==c&&(c=1.70158),(a/=l/2)<1?n/2*(a*a*((1+(c*=1.525))*a-c))+t:n/2*((a-=2)*a*((1+(c*=1.525))*a+c)+2)+t},easeInBounce:function(e,a,t,n,l){return n-s.a.easing.easeOutBounce(e,l-a,0,n,l)+t},easeOutBounce:function(e,a,t,n,l){return(a/=l)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,l){return a<l/2?.5*s.a.easing.easeInBounce(e,2*a,0,n,l)+t:.5*s.a.easing.easeOutBounce(e,2*a-l,0,n,l)+.5*n+t}});t(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(2),m=t(3),d=t(5),u=t(4),p=t.p+"static/media/icon-man-color.9f259502.png",f=t.p+"static/media/icon-man-noColor.0460aaa4.png",E=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={logo:p},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=s()("nav").outerHeight();s()(".navbar-toggler").on("click",(function(){s()("#mainNav").hasClass("navbar-reduce")||s()("#mainNav").addClass("navbar-reduce")})),s()("body").scrollspy({target:"#mainNav",offset:a}),s()(".js-scroll").on("click",(function(){s()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:f})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:p}))})),s()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=s()(this.hash);if((e=e.length?e:s()("[name="+this.hash.slice(1)+"]")).length)return s()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),s()(".js-scroll").on("click",(function(){s()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},l.a.createElement("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"50px"}})),l.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Portfolio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),t}(l.a.Component),v=(t(36),t(13)),h=t.n(v),b=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={start:new Array(100).fill(2),test:"test"},n}return Object(m.a)(t,[{key:"log",value:function(){console.log(this.state.start)}},{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"intro route bg-image background"},this.state.start.map((function(e,a){return l.a.createElement("div",{className:"stars".concat(a),key:e})})),l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Eli"),l.a.createElement("p",{className:"intro-subtitle"},l.a.createElement("span",{className:"text-slider-items"}),l.a.createElement("strong",{className:"text-slider"},l.a.createElement(h.a,{strings:["Front End Developer","\u524d\u7aef\u5de5\u7a0b\u5e2b","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),l.a.createElement("p",{className:"pt-3"},l.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button"},"View My Portfolio"))))))}}]),t}(l.a.Component),g=t(17),N=t.p+"static/media/Eli-resume.f8b08587.pdf",w=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={skills:[{id:"react",name:"React",icon:"devicon-react-original colored skill-icon pl-3"},{id:"Angular",name:"Angular",icon:"devicon-angularjs-plain colored skill-icon pl-3"},{id:"javascript",name:"Javascript",icon:"devicon-javascript-plain colored skill-icon pl-3"},{id:"css",name:"CSS",icon:"devicon-css3-plain colored skill-icon pl-3"},{id:"scss",name:"Scss",icon:"devicon-sass-original colored skill-icon pl-3"},{id:"bootstrap",name:"bootstrap",icon:"devicon-bootstrap-plain colored skill-icon pl-3"}],experiences:[{id:"firm01",firmName:"\u53f0\u7063\u6c38\u8208\u6771\u6f64\u670d\u98fe\u6709\u9650\u516c\u53f8",jobTitle:"\u6703\u8a08\u5c08\u54e1",jobDate:"2018~2019",jobDescription:"\u5b30\u5e7c\u7ae5\u904b\u52d5\u7528\u54c1\u5c08\u8ce3\u5e97\uff0c\u4ee3\u7406\u5404\u5927\u904b\u52d5\u54c1\u724c Nike\u3001levis \u7b49\u3002",jobWork:["\u67e5\u6838\u65b0\u5c0e\u5165\u7684\u6703\u8a08\u7cfb\u7d71\u554f\u984c\uff0c\u53ca\u5f8c\u7e8c\u8ffd\u8e64\u3002","\u5354\u52a9\u516c\u53f8\u8f49\u63db\u9280\u884c\uff0c\u964d\u4f4e\u5237\u5361\u624b\u7e8c\u8cbb\u7387\u4e26\u589e\u52a0\u5e97\u92ea\u6536\u6b3e\u65b9\u5f0f\u3002","\u88fd\u4f5c\u9280\u884c\u624b\u7e8c\u8cbb\u8a66\u7b97\u6838\u5c0d\u5831\u8868\u3002"]},{id:"firm02",firmName:"\u6b61\u6a02\u6d3e\u80a1\u4efd\u6709\u9650\u516c\u53f8",jobTitle:"\u6703\u8a08\u5c08\u54e1",jobDate:"2016~2018",jobDescription:"\u4e3b\u8981\u70ba\u4ee3\u7406\u7dda\u4e0a\u904a\u6232\u516c\u53f8\uff0c\u4e5f\u81ea\u88fd\u904a\u6232\u3002",jobWork:["\u89e3\u6c7a\u540c\u4e8b\u6703\u8a08\u7cfb\u7d71\u3001\u4eba\u4e8b\u7cfb\u7d71\u554f\u984c\u3002","\u70ba\u4e86\u8b93\u8001\u95c6\u65b9\u4fbf\u770b\u5831\u8868\uff0c\u4f7f\u7528 google sheets \u88fd\u4f5c\u7dda\u4e0a\u6536\u652f\u5831\u8868\u3002","\u8655\u7406\u5916\u570b\u540c\u4e8b\u53ca\u8001\u95c6\u7684\u5de5\u4f5c\u7c3d\u8b49\u3002"]},{id:"firm03",firmName:"\u9577\u8a8c\u806f\u5408\u6703\u8a08\u5e2b\u4e8b\u52d9\u6240",jobTitle:"\u52a9\u7406\u67e5\u5e33\u54e1",jobDate:"2014~2016",jobDescription:"\u63d0\u4f9b\u8a18\u67e5\u5e33\u3001\u7a05\u52d9\u7533\u5831\u3001\u5de5\u5546\u767b\u8a18\u7b49\u6703\u8a08\u670d\u52d9\u3002",jobWork:["\u8ca0\u8cac25\u5bb6\u516c\u53f8\u5e33\u52d9\u3002","\u89e3\u6c7a\u5ba2\u6236\u7a05\u52d9\u554f\u984c\u3002","\u8655\u7406\u5ba2\u6236\u81e8\u6642\u7684\u5de5\u5546\u767b\u8a18\u3002"]}]},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"About"),l.a.createElement("p",{className:"subtitle-a"},l.a.createElement("a",{href:N,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"pdfDownload"},l.a.createElement(g.a,{className:"FaRegHandPointRight"}),"PDF \u4e0b\u8f09"))),l.a.createElement("div",{className:"line-mf"})),l.a.createElement("div",{className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"title-box-3"},l.a.createElement("h5",{className:"title-left mb-4"},"Summary")),l.a.createElement("div",{className:"r"},l.a.createElement("div",{className:"summary-content col-10 mb-4"},"\u4e4b\u524d\u5f9e\u4e8b\u6703\u8a08\u5de5\u4f5c\u64c1\u6709\u8207\u5404\u90e8\u9580\u6e9d\u901a\u7d93\u9a57\uff0c\u4f46\u89ba\u5f97\u7121\u8da3\u53ca\u4e4f\u5473\uff0c\u767c\u73fe\u524d\u7aef\u6280\u8853\u80fd\u5448\u73fe\u81ea\u5df1\u7121\u6cd5\u52fe\u52d2\u51fa\u7684\u756b\u9762\u6548\u679c\uff0c\u56e0\u6b64\u5728\u7db2\u9801\u6280\u8853\u4e2d\u627e\u5230\u6210\u5c31\u611f\uff0c\u958b\u59cb\u5b78\u7fd2\u524d\u7aef\u8207\u5f8c\u7aef\u6280\u8853\uff0c\u4e5f\u5e6b\u81ea\u5df1\u89e3\u6c7a\u751f\u6d3b\u4e0a\u4e0d\u65b9\u4fbf\u7684\u5730\u65b9\uff0c\u671f\u5f85\u80fd\u63a5\u89f8\u66f4\u591a\u6280\u8853\u8207\u6253\u9020\u5404\u7a2e\u5be6\u7528\u7522\u54c1\u3002")))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"title-box-3"},l.a.createElement("h6",{className:"title-left mb-4"},"Skill"))),l.a.createElement("div",{className:"row"},this.state.skills.map((function(e){return l.a.createElement("div",{className:"col-md-4 col-sm-6 col-12 mb-4",key:e.id},l.a.createElement("i",{className:e.icon},l.a.createElement("p",{className:"skill-name pl-2"},e.name)))}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"title-box-3"},l.a.createElement("h6",{className:"title-left mb-4 mt-4"},"Education"))),l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"title-small col-12 pl-4"},"\u570b\u7acb\u5f70\u5316\u5e2b\u7bc4\u5927\u5b78"),l.a.createElement("p",{className:"job-date pl-4 pr-3"},"\u5546\u696d\u6559\u80b2\u7cfb"),l.a.createElement("p",{className:"job-date pl-4 pr-3"},"2009~2013\u5e74")))))))))}}]),t}(l.a.Component),k=t(16);var y=function(e){var a=e.pic1,t=e.pic2,c=e.pic3,r=e.pic4,i=e.pic5,s=e.project,o=Object(n.useState)(!1),m=Object(k.a)(o,2),d=m[0],u=m[1];return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:a,"data-lightbox":"gallery-vmarine"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:a,alt:"",className:"img-fluid"}))),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},s.title),l.a.createElement("div",{className:"w-link"},l.a.createElement("a",{href:s.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"ion-social-github w-outLink"})),l.a.createElement("p",{className:"ml-2 mr-2 w-outLink"},"/"),l.a.createElement("a",{href:s.demo,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",{className:"w-demoLink w-outLink"},"Demo"))),l.a.createElement("div",{className:"w-more"},s.skills.map((function(e){return l.a.createElement("span",{className:"w-tag",key:e},e)})))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like ".concat(d&&"click")},l.a.createElement("span",{className:"ion-ios-plus-outline",onClick:function(){u(!d)}})))),l.a.createElement("div",{className:"row w-detail-container ".concat(d&&"w-detail-animation")},l.a.createElement("div",{className:"w-detail col-12"},l.a.createElement("p",{className:"w-detail-title"},s.detailTitle),l.a.createElement("p",{className:"w-detail-content"},s.detailContent)))),l.a.createElement("a",{href:t,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:c,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:r,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:i,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning")))},j=t.p+"static/media/expiredAngular.43dff0d2.png",x=t.p+"static/media/expired-1.8d82064f.png",O=t.p+"static/media/expired-2.f6dda009.png",M=t.p+"static/media/expired-3.57094106.png",I=t.p+"static/media/expired-4.04060dcc.png",S=t.p+"static/media/highqWeb.fbbb7145.png",C=t.p+"static/media/highq-2.b197d31a.png",P=t.p+"static/media/highq-3.4338f1f7.png",q=t.p+"static/media/highq-4.8c921831.png",D=t.p+"static/media/highq-5.c8b74f7a.png",L=t.p+"static/media/twitter-vue.65d65724.png",T=t.p+"static/media/twitter-2.1c668f4e.png",Q=t.p+"static/media/twitter-3.2952d398.png",A=t.p+"static/media/twitter-4.1606cdb1.png",B=t.p+"static/media/twitter-6.8aca09cd.png",R=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=[{id:"expired-angular",title:"Expired App \u7d00\u9304\u7269\u54c1\u5230\u671f\u65e5\u671f",github:"https://github.com/Eli-777/ExpiredApp",demo:"https://expired-app-aspnet.herokuapp.com/",detailTitle:"\u7368\u7acb\u88fd\u4f5c\uff0c\u8a2d\u8a08RWD\u7db2\u7ad9\uff0c\u4ee5 mobile first \u65b9\u5f0f\u8a2d\u8a08\u3002",detailContent:"\u7d00\u9304\u7269\u54c1\u7684\u5230\u671f\u65e5\u671f\uff0c\u7ba1\u7406\u5404\u985e\u7269\u54c1\u904e\u671f\u60c5\u6cc1\u3002",skills:["Angular","Rxjs","material UI","Scss","ASP.NET 5"]},{id:"highq-react",title:"High Q web \u5716\u6587\u4f5c\u5bb6\u7684\u5ba3\u50b3\u5b98\u7db2",github:"https://github.com/Eli-777/HighQ-web",demo:"https://eli-777.github.io/HighQ-web/",detailTitle:"\u7368\u7acb\u88fd\u4f5c\uff0c\u8a2d\u8a08RWD\u7db2\u7ad9\uff0c\u4ee5 mobile first \u65b9\u5f0f\u8a2d\u8a08\u3002",detailContent:"\u53ef\u4f9b\u5716\u6587\u4f5c\u5bb6\u767c\u5e03\u4f86\u81ea\u5176\u4ed6\u793e\u7fa4\u5a92\u9ad4\u7684\u8a0a\u606f\u548c\u81ea\u5df1\u672c\u8eab\u76f8\u95dc\u8cc7\u8a0a\uff0c\u63d0\u4f9b\u7559\u8a00\u677f\u529f\u80fd\u641c\u96c6\u610f\u898b\uff0c\u6709\u5f8c\u53f0\u529f\u80fd\u80fd\u65b0\u589e\u3001\u7de8\u8f2f\u3001\u522a\u9664\u524d\u53f0\u76f8\u95dc\u8cc7\u8a0a\u3002",skills:["ReactJS","React-Redux","Redux-saga","Scss","Firebase"]},{id:"twitter-vue",title:"Alphitter \u793e\u7fa4\u7db2\u7ad9",github:"https://github.com/Eli-777/twitter-front-end-vue",demo:"https://eli-777.github.io/twitter-front-end-vue/",detailTitle:"\u8207\u5169\u4f4d\u5f8c\u7aef\u5354\u4f5c\uff0c\u8ca0\u8cac\u524d\u7aef\u6240\u6709\u756b\u9762\u4ee5\u53ca\u529f\u80fd\u3002",detailContent:"\u53ef\u4f9b\u4f7f\u7528\u8005\u8a3b\u518a\u5e33\u865f\uff0c\u767c\u5e03\u8cbc\u6587\u8b93\u6240\u6709\u4eba\u700f\u89bd\uff0c\u4e5f\u53ef\u4ee5\u67e5\u8a62\u5225\u4eba\u7684\u5e33\u865f\u8cc7\u8a0a\u3001\u767c\u904e\u7684\u8cbc\u6587\u7b49\uff0c\u9084\u6709\u516c\u958b\u804a\u5929\u5ba4\u8b93\u6240\u6709\u4e0a\u7dda\u7684\u4f7f\u7528\u8005\u5728\u4e0a\u9762\u5c0d\u8a71\u3002",skills:["Vue","Vuex","socket.io"]}];return l.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Portfolio"),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"row"},l.a.createElement(y,{pic1:j,pic2:x,pic3:O,pic4:M,pic5:I,project:e[0]}),l.a.createElement(y,{pic1:S,pic2:C,pic3:P,pic4:q,pic5:D,project:e[1]}),l.a.createElement(y,{pic1:L,pic2:T,pic3:Q,pic4:A,pic5:B,project:e[2]}))))}}]),t}(l.a.Component),W=t.p+"static/media/earth.a08c82a6.jpg",H=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+W+")"}},l.a.createElement("div",{className:"overlay-mf"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"contact-mf"},l.a.createElement("div",{id:"contact",className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"Send A Message")),l.a.createElement("div",null,l.a.createElement("form",{action:"https://formspree.io/f/xyyblpgl",method:"POST",className:"contactForm"},l.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),l.a.createElement("div",{id:"errormessage"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},l.a.createElement("h5",{className:"title-left"},"Get in Touch")),l.a.createElement("div",{className:"more-info"},l.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",l.a.createElement("br",null),"Simply fill the from and send me an email.")),l.a.createElement("div",{className:"socials"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:jo458405@hotmail.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-android-mail"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Eli-777",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-github"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/yukai-zhang-958b54125",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-linkedin"}))))))))))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"copyright-box"}))))))}}]),t}(l.a.Component),F=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){s()(".back-to-top").click((function(){return s()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return l.a.createElement("a",{href:"#",className:"back-to-top animated"},l.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),t}(l.a.Component),_=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){s()(window).on("load",(function(){s()("#preloader").length&&s()("#preloader").delay(100).fadeOut("slow",(function(){s()(this).remove()}))}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"preloader"})}}]),t}(l.a.Component);r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(b,null),l.a.createElement(w,null),l.a.createElement(R,null),l.a.createElement(H,null),l.a.createElement(F,null),l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.2f3e4feb.chunk.js.map