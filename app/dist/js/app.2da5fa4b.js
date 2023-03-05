(function(){"use strict";var r={37:function(r,e,o){var t=o(9242),a=o(2578),s=o(3396),l=o(7139),g="data:image/png;base64,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";const d=(0,s._)("div",{class:"flex justify-center align-middle p-4 pt-14"},[(0,s._)("a",{href:"https://www.innocv.com/",target:"_blank"},[(0,s._)("img",{alt:"INNOCV logo",src:g})])],-1);function n(r,e,o,t,a,g){const n=(0,s.up)("screen-panel"),i=(0,s.up)("keyboard-panel"),c=(0,s.up)("footer-bar");return(0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)(r.store.dark?"bg-black/90 shadow-gray-700 border-gray-200 text-gray-200":"bg-gray-100 shadow-gray-300 border-gray-900 text-gray-800")},[d,(0,s.Wm)(n),(0,s.Wm)(i,{class:"pb-24"}),(0,s.Wm)(c)],2)}const i=(0,a.Q_)("main",{state:()=>({number:"0",decimals:"",operator:"",operations:"",result:0,history:[],dark:!0,sound:!0,color:"blue-500",heart:"💙"}),actions:{addOperator(r){const e=["+","-"];"-"===r&&e.includes(this.operator)?this.operator="- "+this.operator:this.operator=r},addOperation(r){this.operations?this.operations+=" "+r:this.operations=r},switchDark(){this.dark=!this.dark},switchSound(){this.sound=!this.sound},changeColor(r){this.color=r},changeHeart(r){this.heart=r}}});var c=i;const b={class:"m-auto py-8"},h={class:"text-4xl mt-8 font-bold py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600"},u={class:"text-md"};function w(r,e,o,t,a,g){return(0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("div",{class:(0,l.C_)(["text-center text-semibold text-xl py-2",[t.store.dark?"bg-gray-800 shadow-white/20":"bg-gray-200 shadow-black/20",`text-${t.store.color}`]])},(0,l.zw)(t.store.operations),3),(0,s._)("div",h,[(0,s._)("span",u,(0,l.zw)(t.store.operator),1),(0,s.Uk)(" "+(0,l.zw)(t.nf.format(Number(t.store.number)).replaceAll(","," "))+(0,l.zw)(t.store.decimals),1)])])}var y={setup(){const r=c(),e=Intl.NumberFormat();return{store:r,nf:e}}},k=o(89);const v=(0,k.Z)(y,[["render",w]]);var p=v;const m={class:"m-auto w-80"},f={class:"grid grid-cols-5 gap-1 text-s font-semibold text-center rounded-xl"};function x(r,e,o,t,a,g){return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",f,[(0,s._)("button",{onClick:e[0]||(e[0]=r=>[t.clickNum(1),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm rounded-tl-xl"])}," 1 ",2),(0,s._)("button",{onClick:e[1]||(e[1]=r=>[t.clickNum(2),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," 2 ",2),(0,s._)("button",{onClick:e[2]||(e[2]=r=>[t.clickNum(3),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm rounded-tr-xl"])}," 3 ",2),(0,s._)("button",{onClick:e[3]||(e[3]=r=>[t.clickDEL(),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm rounded-tl-xl text-sm"])}," DEL ",2),(0,s._)("button",{onClick:e[4]||(e[4]=r=>[t.clickAC(),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm rounded-tr-xl text-sm"])}," AC ",2),(0,s._)("button",{onClick:e[5]||(e[5]=r=>[t.clickNum(4),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," 4 ",2),(0,s._)("button",{onClick:e[6]||(e[6]=r=>[t.clickNum(5),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," 5 ",2),(0,s._)("button",{onClick:e[7]||(e[7]=r=>[t.clickNum(6),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," 6 ",2),(0,s._)("button",{onClick:e[8]||(e[8]=r=>[t.clickOperator("+"),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," + ",2),(0,s._)("button",{onClick:e[9]||(e[9]=r=>[t.clickOperator("-"),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," - ",2),(0,s._)("button",{onClick:e[10]||(e[10]=r=>[t.clickNum(7),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," 7 ",2),(0,s._)("button",{onClick:e[11]||(e[11]=r=>[t.clickNum(8),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," 8 ",2),(0,s._)("button",{onClick:e[12]||(e[12]=r=>[t.clickNum(9),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," 9 ",2),(0,s._)("button",{onClick:e[13]||(e[13]=r=>[t.clickOperator("x"),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm text-sm"])}," x ",2),(0,s._)("button",{onClick:e[14]||(e[14]=r=>[t.clickOperator("÷"),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," ÷ ",2),(0,s._)("button",{onClick:e[15]||(e[15]=r=>[t.clickDecimals(),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl"])}," · ",2),(0,s._)("button",{onClick:e[16]||(e[16]=r=>[t.clickNum(0),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm"])}," 0 ",2),(0,s._)("button",{onClick:e[17]||(e[17]=r=>[t.calculate(),t.playSound2()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm rounded-br-xl"])}," = ",2),(0,s._)("button",{onClick:e[18]||(e[18]=r=>[t.clickOperator("×ⁿ"),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm rounded-bl-xl"])}," ×ⁿ ",2),(0,s._)("button",{onClick:e[19]||(e[19]=r=>[t.clickOperator("√"),t.playSound()]),class:(0,l.C_)([[t.store.dark?"bg-gray/900 hover:bg-gray-600 border-gray-500":"bg-gray-50 hover:bg-gray-200 border-gray-100",`shadow-${t.store.color}`],"py-4 px-2 align-middle relative border shadow-sm rounded-br-xl text-sm"])}," √ ",2)])])}var C={setup(){const r=c(),e=Intl.NumberFormat(),o=1e12,t=8,a=new Audio,s=new Audio;function l(){r.sound&&a.play()}function g(){r.sound&&s.play()}function d(a){return r.decimals?r.decimals.length>t?alert(`Sorry, maximum decimals allowed is ${t}.`):void(r.decimals+=a):"0"===r.number[0]?void(r.number=String(a)):Number(r.number)+a<=o?void(r.number+=a):alert(`Number must be between -${e.format(o)} and ${e.format(o)}, including both.`)}function n(e){if("0"===r.number)r.addOperator(e);else{let o="+";r.operator&&(o=r.operator),r.addOperation(`${o} ${r.number}${r.decimals}`),r.addOperator(e),b()}}function i(){r.decimals?r.decimals="":r.decimals="."}function b(){r.number="0",r.decimals=""}function h(){"0"!==r.number?r.decimals?r.decimals=r.decimals.slice(0,-1):r.number.length>1?r.number=r.number.slice(0,-1):b():r.operator=""}function u(){r.sound&&b(),r.operator="",r.operations=""}function w(){n(r.operator),r.addOperator("=");const e={"+":(r,e)=>r+e,"-":(r,e)=>r-e,x:(r,e)=>r*e,"÷":(r,e)=>r/e,"ⁿ":(r,e)=>Math.pow(r,e),"√":(r,e)=>r+Math.sqrt(e)},o=r.operations.split(" ");let a=Number(o[1]),s=0;for(const r of o)console.log(r),/\d/.test(r)?s=Number(r):a=e[r](a,s),console.log();r.number=String(Math.round((a+Number.EPSILON)*Math.pow(10,t))/Math.pow(10,t))}return{store:r,playSound:l,playSound2:g,clickNum:d,clickOperator:n,clickDecimals:i,clickDEL:h,clickAC:u,calculate:w}}};const A=(0,k.Z)(C,[["render",x]]);var W=A;const M={class:"flex flex-wrap justify-center items-center rounded-xl mt-8 min-w-full"},S={class:"text-md tracking-widest font-semibold justify-center mr-4"},Q={class:"text-md tracking-widest font-semibold justify-center ml-4"},j=(0,s._)("span",{class:"text-xs"}," UTC",-1),D={class:"py-8"},N=(0,s._)("br",null,null,-1),I=(0,s._)("a",{href:"https://github.com/quantium-rock/innocv-calculator/tree/main/client",target:"_blank",class:"underline"},"Free rights of use.",-1);function U(r,e,o,t,a,g){const d=(0,s.up)("settings-buttons"),n=(0,s.up)("social-buttons");return(0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)(["py-4 pt-16 mt-16 text-center text-xs text-gray-400",t.store.dark?"bg-black/90 shadow-gray-700 border-gray-200 text-gray-200":"bg-white/90 shadow-gray-300 border-gray-900 text-gray-800"])},[(0,s.Wm)(d),(0,s.Wm)(n),(0,s._)("div",M,[(0,s._)("div",S,(0,l.zw)(t.date),1),(0,s._)("div",Q,[(0,s.Uk)((0,l.zw)(t.time),1),j])]),(0,s._)("div",D,[(0,s.Uk)(" Made with "+(0,l.zw)(t.store.heart)+" for INNOCV SOLUTIONS ",1),N,(0,s.Uk)("2023 © "),I])],2)}var z=o(4870);function F(r){return String(r).length<2?"0"+String(r):String(r).length<1?"00":String(r)}function B(){const r=new Date,e=F(r.getUTCFullYear()),o=F(r.getUTCMonth()+1),t=F(r.getUTCDate());return`${e}-${o}-${t}`}function J(){const r=new Date,e=F(r.getUTCHours()),o=F(r.getMinutes()),t=F(r.getSeconds());return`${e}:${o}:${t}`}const L={class:"flex justify-center p-4"},O={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E=(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),X=[E],V={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y=(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),H=[Y],Z=["src"],R=["src"],q=(0,s._)("div",{class:"h-4 w-4 bg-white/90 rounded-full"},null,-1),P=[q],T=(0,s._)("div",{class:"h-4 w-4 bg-white/60 rounded-full"},null,-1),K=[T],G=(0,s._)("div",{class:"h-4 w-4 bg-white/20 rounded-full"},null,-1),_=[G],$={key:3,class:"flex"},rr=(0,s._)("div",{class:"h-4 w-4 bg-black/90 rounded-full"},null,-1),er=[rr],or=(0,s._)("div",{class:"h-4 w-4 bg-black/60 rounded-full"},null,-1),tr=[or],ar=(0,s._)("div",{class:"h-4 w-4 bg-black/20 rounded-full"},null,-1),sr=[ar],lr=(0,s._)("div",{class:"h-4 w-4 bg-red-500 rounded-full"},null,-1),gr=[lr],dr=(0,s._)("div",{class:"h-4 w-4 bg-orange-500 rounded-full"},null,-1),nr=[dr],ir=(0,s._)("div",{class:"h-4 w-4 bg-yellow-500 rounded-full"},null,-1),cr=[ir],br=(0,s._)("div",{class:"h-4 w-4 bg-green-500 rounded-full"},null,-1),hr=[br],ur=(0,s._)("div",{class:"h-4 w-4 bg-lime-500 rounded-full"},null,-1),wr=[ur],yr=(0,s._)("div",{class:"h-4 w-4 bg-emerald-300 rounded-full"},null,-1),kr=[yr],vr=(0,s._)("div",{class:"h-4 w-4 bg-blue-600 rounded-full"},null,-1),pr=[vr],mr=(0,s._)("div",{class:"h-4 w-4 bg-sky-500 rounded-full"},null,-1),fr=[mr],xr=(0,s._)("div",{class:"h-4 w-4 bg-cyan-400 rounded-full"},null,-1),Cr=[xr],Ar=(0,s._)("div",{class:"h-4 w-4 bg-purple-500 rounded-full"},null,-1),Wr=[Ar],Mr=(0,s._)("div",{class:"h-4 w-4 bg-fuchsia-500 rounded-full"},null,-1),Sr=[Mr],Qr=(0,s._)("div",{class:"h-4 w-4 bg-pink-500 rounded-full"},null,-1),jr=[Qr],Dr=(0,s.uE)('<div class="bg-black/90 shadow-black/90"></div><div class="bg-black/60 shadow-black/60"></div><div class="bg-black/20 shadow-black/20"></div><div class="bg-white/90 shadow-white/90"></div><div class="bg-white/60 shadow-white/60"></div><div class="bg-white/20 shadow-white/20"></div><div class="bg-red-500 shadow-red-500"></div><div class="bg-orange-500 shadow-orange-500"></div><div class="bg-yellow-500 shadow-yellow-500"></div><div class="bg-green-500 shadow-green-500"></div><div class="bg-emerald-500 shadow-emerald-500"></div><div class="bg-lime-500 shadow-lime-500"></div><div class="bg-blue-500 shadow-blue-500"></div><div class="bg-sky-500 shadow-sky-500"></div><div class="bg-cyan-500 shadow-cyan-500"></div><div class="bg-purple-500 shadow-purple-500"></div><div class="bg-fuchsia-500 shadow-fuchsia-500"></div><div class="bg-pink-500 shadow-pink-500"></div>',18);function Nr(r,e,o,t,a,g){return(0,s.wg)(),(0,s.iD)("div",null,[a.colorModal?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"z-50 absolute top-0 -bottom-50 h-full left-0 right-0 w-full",onClick:e[0]||(e[0]=r=>a.colorModal=!1)})):(0,s.kq)("",!0),(0,s._)("div",L,[(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[1]||(e[1]=r=>[t.store.switchDark(),t.store.color.includes("white")&&!t.store.dark?t.store.changeColor(t.store.color.replace("white","black")):"",t.store.color.includes("black")&&t.store.dark?t.store.changeColor(t.store.color.replace("black","white")):""])},[t.store.dark?((0,s.wg)(),(0,s.iD)("svg",O,X)):((0,s.wg)(),(0,s.iD)("svg",V,H))],2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[2]||(e[2]=r=>t.store.switchSound())},[t.store.sound?((0,s.wg)(),(0,s.iD)("img",{key:0,alt:"Sound",src:t.store.dark?"sound_white":"sound_black",class:"h-4 w-4"},null,8,Z)):((0,s.wg)(),(0,s.iD)("img",{key:1,alt:"Sound",src:t.store.dark?"mute_white":"mute_black",class:"h-4 w-4"},null,8,R))],2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[21]||(e[21]=r=>a.colorModal=!a.colorModal)},[(0,s._)("div",{class:(0,l.C_)(["h-4 w-4 rounded-full",`bg-${t.store.color}`])},null,2),a.colorModal?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,l.C_)(["z-50 absolute mt-72 py-4 flex flex-wrap justify-center w-36 p-2 rounded-xl shadow-xl",t.store.dark?"bg-black/90 shadow-gray-700":"bg-white"])},[t.store.dark?((0,s.wg)(),(0,s.iD)("button",{key:0,class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[3]||(e[3]=r=>[t.store.changeColor("white/90"),t.store.changeHeart("🤍")])},P,2)):(0,s.kq)("",!0),t.store.dark?((0,s.wg)(),(0,s.iD)("button",{key:1,class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[4]||(e[4]=r=>[t.store.changeColor("white/60"),t.store.changeHeart("🤍")])},K,2)):(0,s.kq)("",!0),t.store.dark?((0,s.wg)(),(0,s.iD)("button",{key:2,class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[5]||(e[5]=r=>[t.store.changeColor("white/20"),t.store.changeHeart("🤍")])},_,2)):(0,s.kq)("",!0),t.store.dark?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",$,[(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[6]||(e[6]=r=>[t.store.changeColor("black/90"),t.store.changeHeart("🖤")])},er,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[7]||(e[7]=r=>[t.store.changeColor("black/60"),t.store.changeHeart("🖤")])},tr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[8]||(e[8]=r=>[t.store.changeColor("black/20"),t.store.changeHeart("🖤")])},sr,2)])),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[9]||(e[9]=r=>[t.store.changeColor("red-500"),t.store.changeHeart("❤️")])},gr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[10]||(e[10]=r=>[t.store.changeColor("orange-500"),t.store.changeHeart("🧡")])},nr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[11]||(e[11]=r=>[t.store.changeColor("yellow-500"),t.store.changeHeart("💛")])},cr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[12]||(e[12]=r=>[t.store.changeColor("green-500"),t.store.changeHeart("💚")])},hr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[13]||(e[13]=r=>[t.store.changeColor("lime-500"),t.store.changeHeart("💚")])},wr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[14]||(e[14]=r=>[t.store.changeColor("emerald-500"),t.store.changeHeart("💚")])},kr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[15]||(e[15]=r=>[t.store.changeColor("blue-500"),t.store.changeHeart("💙")])},pr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[16]||(e[16]=r=>[t.store.changeColor("sky-500"),t.store.changeHeart("💙")])},fr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[17]||(e[17]=r=>[t.store.changeColor("cyan-500"),t.store.changeHeart("💙")])},Cr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[18]||(e[18]=r=>[t.store.changeColor("purple-500"),t.store.changeHeart("💜")])},Wr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[19]||(e[19]=r=>[t.store.changeColor("fuchsia-500"),t.store.changeHeart("💜")])},Sr,2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-1 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[20]||(e[20]=r=>[t.store.changeColor("pink-500"),t.store.changeHeart("💗")])},jr,2)],2)):(0,s.kq)("",!0)],2),(0,s._)("button",{class:(0,l.C_)(["rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl",t.store.dark?"bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white":"bg-white hover:bg-gray-200 border-black/20 text-gray-600"]),onClick:e[22]||(e[22]=r=>[t.store.switchDark(),t.store.color.includes("white")&&!t.store.dark?t.store.changeColor(t.store.color.replace("white","black")):"",t.store.color.includes("black")&&t.store.dark?t.store.changeColor(t.store.color.replace("black","white")):""])},null,2)]),Dr])}var Ir={setup(){const r=c();return{store:r}},data(){return{colorModal:!1,color:{white:"white",black:"black",red:"red",green:"green",blue:"blue",purple:"purple",pink:"pink",violet:"violet",sound_white:"../assets/img/sound-white.png",mute_black:"../assets/img/mute.png",mute_white:"../assets/img/mute-white.png"}}}};const Ur=(0,k.Z)(Ir,[["render",Nr]]);var zr=Ur,Fr={components:{SettingsButtons:zr},setup(){const r=c(),e=(0,z.iH)(""),o=(0,z.iH)("");return setInterval((()=>{e.value=J(),o.value=B()}),1e3),{store:r,time:e,date:o}}};const Br=(0,k.Z)(Fr,[["render",U]]);var Jr=Br,Lr=(0,s.aZ)({name:"App",components:{ScreenPanel:p,KeyboardPanel:W,FooterBar:Jr},setup(){const r=c();return{store:r}}});const Or=(0,k.Z)(Lr,[["render",n]]);var Er=Or;const Xr=(0,a.WB)(),Vr=(0,t.ri)(Er);Vr.use(Xr),Vr.mount("#app")}},e={};function o(t){var a=e[t];if(void 0!==a)return a.exports;var s=e[t]={exports:{}};return r[t](s,s.exports,o),s.exports}o.m=r,function(){var r=[];o.O=function(e,t,a,s){if(!t){var l=1/0;for(i=0;i<r.length;i++){t=r[i][0],a=r[i][1],s=r[i][2];for(var g=!0,d=0;d<t.length;d++)(!1&s||l>=s)&&Object.keys(o.O).every((function(r){return o.O[r](t[d])}))?t.splice(d--,1):(g=!1,s<l&&(l=s));if(g){r.splice(i--,1);var n=a();void 0!==n&&(e=n)}}return e}s=s||0;for(var i=r.length;i>0&&r[i-1][2]>s;i--)r[i]=r[i-1];r[i]=[t,a,s]}}(),function(){o.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return o.d(e,{a:e}),e}}(),function(){o.d=function(r,e){for(var t in e)o.o(e,t)&&!o.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};o.O.j=function(e){return 0===r[e]};var e=function(e,t){var a,s,l=t[0],g=t[1],d=t[2],n=0;if(l.some((function(e){return 0!==r[e]}))){for(a in g)o.o(g,a)&&(o.m[a]=g[a]);if(d)var i=d(o)}for(e&&e(t);n<l.length;n++)s=l[n],o.o(r,s)&&r[s]&&r[s][0](),r[s]=0;return o.O(i)},t=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(37)}));t=o.O(t)})();
//# sourceMappingURL=app.2da5fa4b.js.map