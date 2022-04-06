"use strict";(self.webpackChunkb=self.webpackChunkb||[]).push([[749],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"emails",title:"Emails"},c="Emails",s={unversionedId:"emails",id:"emails",title:"Emails",description:"Public email informations",source:"@site/osint/emails.md",sourceDirName:".",slug:"/emails",permalink:"/ctf-cheats/osint/emails",tags:[],version:"current",frontMatter:{id:"emails",title:"Emails"},sidebar:"tutorialSidebar",previous:{title:"Data leaks",permalink:"/ctf-cheats/osint/data-leaks"},next:{title:"Images",permalink:"/ctf-cheats/osint/images"}},m={},u=[{value:"Public email informations",id:"public-email-informations",level:2},{value:"Email formats",id:"email-formats",level:2}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"emails"},"Emails"),(0,a.kt)("h2",{id:"public-email-informations"},"Public email informations"),(0,a.kt)("p",null,"In each search it finds also additional information like the gravatar avaialability.\n",(0,a.kt)("a",{parentName:"p",href:"https://trumail.io/"},"https://trumail.io/")),(0,a.kt)("p",null,"Checks only if the given email is valid.\n",(0,a.kt)("a",{parentName:"p",href:"https://verify-email.org/"},"https://verify-email.org/")),(0,a.kt)("p",null,"Additional public information about the inbox.\n",(0,a.kt)("a",{parentName:"p",href:"https://tools.emailhippo.com/"},"https://tools.emailhippo.com/")),(0,a.kt)("h2",{id:"email-formats"},"Email formats"),(0,a.kt)("p",null,"List of leaked email for each domain.\n",(0,a.kt)("a",{parentName:"p",href:"https://www.email-format.com"},"https://www.email-format.com")),(0,a.kt)("p",null,"Returns for the given domain a list of public emails and the links where they were found.\n",(0,a.kt)("a",{parentName:"p",href:"https://hunter.io"},"https://hunter.io")))}f.isMDXComponent=!0}}]);