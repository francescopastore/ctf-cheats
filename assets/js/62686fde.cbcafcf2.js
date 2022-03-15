"use strict";(self.webpackChunkb=self.webpackChunkb||[]).push([[720],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"gdb",title:"GDB"},c="GDB",u={unversionedId:"binary-exploitation/gdb",id:"binary-exploitation/gdb",title:"GDB",description:"Commands",source:"@site/docs/binary-exploitation/gdb.md",sourceDirName:"binary-exploitation",slug:"/binary-exploitation/gdb",permalink:"/ctf-cheats/docs/binary-exploitation/gdb",editUrl:"https://github.com/francescopastore/ctf-cheats/docs/binary-exploitation/gdb.md",tags:[],version:"current",frontMatter:{id:"gdb",title:"GDB"},sidebar:"tutorialSidebar",previous:{title:"Binary exploitation",permalink:"/ctf-cheats/docs/binary-exploitation/"}},s={},p=[{value:"Commands",id:"commands",level:2},{value:"Call a function",id:"call-a-function",level:3},{value:"Utilities",id:"utilities",level:2},{value:"dmesg",id:"dmesg",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gdb"},"GDB"),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"call-a-function"},"Call a function"),(0,a.kt)("p",null,"GDB allows you to call a function while debugging. It only requires a running process."),(0,a.kt)("p",null,"Add a breakpoint or cause an exception to enter debugging and then call the function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"print (void) print_safe_contents()\n")),(0,a.kt)("p",null,"Inside the parenthesis put the function type."),(0,a.kt)("p",null,"Any parameters can be passed inside the second pair of parentheses."),(0,a.kt)("h2",{id:"utilities"},"Utilities"),(0,a.kt)("h3",{id:"dmesg"},"dmesg"),(0,a.kt)("p",null,"Show all messages sent by the kernel starting from the boot."),(0,a.kt)("p",null,"It can be used to see more details about the last thrown exception. It usually show also the IP and the hex code of the istructions executed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dmesg -T | tail\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-T")," show time in human readable format."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tail")," show only last 5 lines."))}f.isMDXComponent=!0}}]);