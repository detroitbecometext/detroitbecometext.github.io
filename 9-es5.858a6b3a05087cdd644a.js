!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return o(this,n)}}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1a2E":function(o,a,c){"use strict";c.r(a),c.d(a,"ContactModule",function(){return L});var i=c("tyNb"),u=c("Ykyv"),s=c("2Vo4"),f=c("nYR2"),b=c("3Pt+"),l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(a,t);var o=r(a);function a(t){var n;return e(this,a),n=o.call(this,{name:new b.b(""),_replyto:new b.b("",b.l.email),message:new b.b("",b.l.required),_language:new b.b("en",b.l.required)}),t&&n.patchValue(t),n}return a}(b.d),p=c("fXoL"),m=c("dNgK"),d=c("tk/3"),g=c("XiUz"),h=c("Wp6s"),y=c("kmnG"),v=c("qFsG"),O=c("ofXK"),N=c("bTqV"),w=c("6NWb");function k(t,e){1&t&&(p.Ob(0,"mat-error"),p.vc(1,"This is not a valid e-mail address"),p.Nb())}var x,_,C,P=[{path:"",component:u.a,children:[{path:"",component:(x=function(){function n(t,r){e(this,n),this.snackbar=t,this.http=r,this.endpoint="https://formspree.io/f/xleoogop",this.languages=["ar","bg","ca","cs","da","de","es","et","fi","fr","hr","hu","id","is","it","ja","ko","lt","nl","no","pl","pt-BR","pt-PT","ru","sk","sl","sr","sv","th","tr","uk","zh-CN","zh-TW"]}var r,o,a;return r=n,(o=[{key:"ngOnInit",value:function(){this.sending$=new s.a(!1),this.contactForm=new l({_language:this.getLanguage()})}},{key:"getLanguage",value:function(){var t=this.languages.filter(function(t){return navigator.language.includes(t)});return t.length>0?t[0]:"en"}},{key:"sendMessage",value:function(){var t=this;this.sending$.next(!0),this.http.post(this.endpoint,this.contactForm.value).pipe(Object(f.a)(function(){return t.sending$.next(!1)})).subscribe(function(e){return t.snackbar.open("Message sent successfully. Thank you!","",{duration:4e3})},function(e){t.snackbar.open("An error occurred while sending the message. Please try again later.","",{panelClass:"snackbar-error",duration:4e3})})}}])&&t(r.prototype,o),a&&t(r,a),n}(),x.\u0275fac=function(t){return new(t||x)(p.Jb(m.a),p.Jb(d.a))},x.\u0275cmp=p.Db({type:x,selectors:[["ng-component"]],decls:31,vars:8,consts:[["fxLayout","column","fxLayoutAlign","start center",1,"container"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutGap","1em"],["fxLayout","row","fxLayoutGap","40px"],["appearance","standard","fxFlex","1 1 0"],["matInput","","placeholder","Your name","formControlName","name"],["matInput","","placeholder","Your email","formControlName","_replyto"],[4,"ngIf"],["appearance","standard"],["matInput","","formControlName","message","placeholder","Type your message here!"],["mat-raised-button","","color","primary","type","submit","fxFlexAlign","center",3,"disabled"],["icon","paper-plane"]],template:function(t,e){1&t&&(p.Ob(0,"main",0),p.Ob(1,"mat-card"),p.Ob(2,"mat-card-title"),p.Ob(3,"h1"),p.vc(4,"Contact"),p.Nb(),p.Nb(),p.Ob(5,"mat-card-content"),p.Ob(6,"form",1),p.Wb("ngSubmit",function(){return e.sendMessage()}),p.Ob(7,"div",2),p.Ob(8,"div",3),p.Ob(9,"mat-form-field",4),p.Ob(10,"mat-label"),p.vc(11,"Name"),p.Nb(),p.Kb(12,"input",5),p.Ob(13,"mat-hint"),p.vc(14,"(not required, but necessary if you want me to credit you for your submission)"),p.Nb(),p.Nb(),p.Ob(15,"mat-form-field",4),p.Ob(16,"mat-label"),p.vc(17,"Email"),p.Nb(),p.Kb(18,"input",6),p.Ob(19,"mat-hint"),p.vc(20,"(not required, but necessary if you need me to contact you back)"),p.Nb(),p.tc(21,k,2,0,"mat-error",7),p.Nb(),p.Nb(),p.Ob(22,"mat-form-field",8),p.Ob(23,"mat-label"),p.vc(24,"Your message"),p.Nb(),p.Kb(25,"textarea",9),p.Nb(),p.Ob(26,"button",10),p.ac(27,"async"),p.vc(28),p.ac(29,"async"),p.Kb(30,"fa-icon",11),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb()),2&t&&(p.zb(6),p.ec("formGroup",e.contactForm),p.zb(15),p.ec("ngIf",e.contactForm.get("_replyto").invalid),p.zb(5),p.ec("disabled",!e.contactForm.valid||p.bc(27,4,e.sending$)),p.zb(2),p.xc(" ",p.bc(29,6,e.sending$)?"Sending...":"Submit"," "))},directives:[g.d,g.c,h.a,h.g,h.c,b.m,b.i,b.e,g.e,y.c,g.b,y.g,v.a,b.a,b.h,b.c,y.f,O.k,N.b,g.a,w.a,y.b],pipes:[O.b],styles:[".container[_ngcontent-%COMP%]{height:100%}.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:2rem}"]}),x)}]}],j=((_=function t(){e(this,t)}).\u0275mod=p.Hb({type:_}),_.\u0275inj=p.Gb({factory:function(t){return new(t||_)},imports:[[i.f.forChild(P)],i.f]}),_),M=c("PCNd"),L=((C=function t(){e(this,t)}).\u0275mod=p.Hb({type:C}),C.\u0275inj=p.Gb({factory:function(t){return new(t||C)},imports:[[M.a,j,b.k,d.b]]}),C)}}])}();
//# sourceMappingURL=9-es5.858a6b3a05087cdd644a.js.map