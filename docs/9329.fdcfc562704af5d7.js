"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9329],{9329:(y,c,i)=>{i.r(c),i.d(c,{HomePageModule:()=>P});var u=i(4755),a=i(9972),h=i(5030),g=i(838);class m{constructor(l,e){this.lottozahl=l,this.zufallszahl=e}}var n=i(9523);function f(t,l){if(1&t&&(n.TgZ(0,"ion-col"),n._uU(1),n.qZA()),2&t){const e=l.$implicit,r=n.oxw().$implicit,o=n.oxw();n.Udp("background",o.hintergrundFarbeArray[7*r+e+1]),n.xp6(1),n.Oqu(7*r+e+1)}}function p(t,l){if(1&t&&(n.TgZ(0,"ion-row"),n.YNc(1,f,2,3,"ion-col",4),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.nullBisSechsArray)}}const d=[{path:"",component:(()=>{class t{constructor(){this.nullBisSechsArray=[...new Array(7)].map((e,r)=>r),this.hintergrundFarbeArray=[],this.hintergrundFarbeArray.push("dummy");for(let e=1;e<=49;e++)this.hintergrundFarbeArray.push("white")}alleZahlenWeiss(){for(let e=1;e<=49;e++)this.hintergrundFarbeArray[e]="white"}onLottozahlenErzeugen(){this.alleZahlenWeiss();const e=this.lottoZahlenErzeugen();for(let r=0;r<e.length;r++)this.hintergrundFarbeArray[e[r]]="orange"}lottoZahlenErzeugen(){let e=[];for(let o=1;o<=49;o++){const s=new m(o,Math.random());e.push(s)}e.sort((o,s)=>o.zufallszahl===s.zufallszahl?0:o.zufallszahl<s.zufallszahl?-1:1);const r=[];for(let o=0;o<6;o++)r.push(e[o].lottozahl);return r}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:10,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["expand","block","color","success",3,"click"],[4,"ngFor","ngForOf"],[3,"background",4,"ngFor","ngForOf"]],template:function(e,r){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n._uU(3,'Lottozahlen-Generator f\xfcr "6 aus 49"'),n.qZA()()(),n.TgZ(4,"ion-content",1)(5,"ion-button",2),n.NdJ("click",function(){return r.onLottozahlenErzeugen()}),n._uU(6,"Lottozahlen ausw\xfcrfeln"),n.qZA(),n._uU(7," \xa0 "),n.TgZ(8,"ion-grid"),n.YNc(9,p,2,1,"ion-row",3),n.qZA()()),2&e&&(n.Q6J("translucent",!0),n.xp6(4),n.Q6J("fullscreen",!0),n.xp6(5),n.Q6J("ngForOf",r.nullBisSechsArray))},dependencies:[u.sg,a.YG,a.wI,a.W2,a.jY,a.Gu,a.Nd,a.wd,a.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(d),g.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.ez,h.u5,a.Pc,z]}),t})()}}]);