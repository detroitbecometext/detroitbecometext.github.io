(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{yq0Q:function(t,e,n){"use strict";n.r(e),n.d(e,"ChaptersModule",function(){return q});var r=n("tyNb"),i=n("Ykyv"),o=n("2Vo4"),c=n("D0XW"),a=n("7o/Q"),s=n("WMd4");class h{constructor(t,e){this.delay=t,this.scheduler=e}call(t,e){return e.subscribe(new p(t,this.delay,this.scheduler))}}class p extends a.a{constructor(t,e,n){super(t),this.delay=e,this.scheduler=n,this.queue=[],this.active=!1,this.errored=!1}static dispatch(t){const e=t.source,n=e.queue,r=t.scheduler,i=t.destination;for(;n.length>0&&n[0].time-r.now()<=0;)n.shift().notification.observe(i);if(n.length>0){const e=Math.max(0,n[0].time-r.now());this.schedule(t,e)}else this.unsubscribe(),e.active=!1}_schedule(t){this.active=!0,this.destination.add(t.schedule(p.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}scheduleNotification(t){if(!0===this.errored)return;const e=this.scheduler,n=new d(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}_next(t){this.scheduleNotification(s.a.createNext(t))}_error(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}_complete(){this.scheduleNotification(s.a.createComplete()),this.unsubscribe()}}class d{constructor(t,e){this.time=t,this.notification=e}}var l=n("fXoL");let u=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(l.P))},t.\u0275dir=l.Eb({type:t,selectors:[["","appChapterContent",""]]}),t})();var b=n("dJ3e"),g=n("ofXK"),m=n("XiUz"),f=n("Wp6s"),v=n("sKXY"),C=n("6NWb");const O=function(t){return["/chapters",t]};function w(t,e){if(1&t&&(l.Ob(0,"a",5),l.Kb(1,"fa-icon",6),l.vc(2," Previous chapter"),l.Nb()),2&t){const t=l.Zb(2);l.ec("routerLink",l.hc(1,O,t.chapterNav.previousChapterId))}}function P(t,e){if(1&t&&(l.Ob(0,"a",7),l.vc(1,"Next chapter "),l.Kb(2,"fa-icon",8),l.Nb()),2&t){const t=l.Zb(2);l.ec("routerLink",l.hc(1,O,t.chapterNav.nextChapterId))}}function M(t,e){if(1&t&&(l.Ob(0,"a",5),l.Kb(1,"fa-icon",6),l.vc(2),l.Nb()),2&t){const t=l.Zb(2);l.ec("routerLink",l.hc(2,O,t.chapterNav.previousCharacterChapterId)),l.zb(2),l.xc(" Previous ",t.chapter.character," chapter")}}function x(t,e){if(1&t&&(l.Ob(0,"a",7),l.vc(1),l.Kb(2,"fa-icon",8),l.Nb()),2&t){const t=l.Zb(2);l.ec("routerLink",l.hc(2,O,t.chapterNav.nextCharacterChapterId)),l.zb(1),l.xc("Next ",t.chapter.character," chapter ")}}function N(t,e){if(1&t&&(l.Ob(0,"div",1),l.Ob(1,"div"),l.tc(2,w,3,3,"a",2),l.Nb(),l.Ob(3,"div",3),l.tc(4,P,3,3,"a",4),l.Nb(),l.Ob(5,"div"),l.tc(6,M,3,4,"a",2),l.Nb(),l.Ob(7,"div",3),l.tc(8,x,3,4,"a",4),l.Nb(),l.Nb()),2&t){const t=l.Zb();l.zb(2),l.ec("ngIf",null!=t.chapterNav.previousChapterId),l.zb(2),l.ec("ngIf",null!=t.chapterNav.nextChapterId),l.zb(2),l.ec("ngIf",null!=t.chapterNav.previousCharacterChapterId),l.zb(2),l.ec("ngIf",null!=t.chapterNav.nextCharacterChapterId)}}let _=(()=>{class t{constructor(t){this.dataService=t}set setChapter(t){t&&(this.chapter=t,this.chapterNav=new v.b(this.dataService.getPreviousChapterId(t.id),this.dataService.getNextChapterId(t.id),this.dataService.getPreviousChapterId(t.id,t.character),this.dataService.getNextChapterId(t.id,t.character)))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(b.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-chapter-nav"]],inputs:{setChapter:["chapter","setChapter"]},decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],["class","prev",3,"routerLink",4,"ngIf"],[1,"next"],["class","next",3,"routerLink",4,"ngIf"],[1,"prev",3,"routerLink"],["icon","angle-left"],[1,"next",3,"routerLink"],["icon","angle-right"]],template:function(t,e){1&t&&l.tc(0,N,9,4,"div",0),2&t&&l.ec("ngIf",e.chapterNav)},directives:[g.k,r.e,C.a],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;justify-content:space-between;row-gap:1rem}.container[_ngcontent-%COMP%]   div.next[_ngcontent-%COMP%]{text-align:right}.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1f2444;transition:color .8s;-o-transition:color .8s;-ms-transition:color .8s;-moz-transition:color .8s;-webkit-transition:color .8s;text-decoration:none}.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#545c91}"],changeDetection:0}),t})();var I=n("f0Cb"),y=n("Xa2L");function L(t,e){if(1&t&&(l.Mb(0),l.Ob(1,"header",7),l.Ob(2,"h1"),l.vc(3),l.Nb(),l.Nb(),l.Lb()),2&t){const t=l.Zb();l.zb(3),l.yc("Chapter ",t.chapter.number," - ",t.chapter.title,"")}}function z(t,e){if(1&t&&(l.Mb(0),l.Kb(1,"app-chapter-nav",8),l.Kb(2,"mat-divider"),l.Lb()),2&t){const t=l.Zb();l.zb(1),l.ec("chapter",t.chapter)}}function k(t,e){}function K(t,e){if(1&t&&(l.Mb(0),l.Kb(1,"mat-divider"),l.Kb(2,"app-chapter-nav",8),l.Lb()),2&t){const t=l.Zb();l.zb(2),l.ec("chapter",t.chapter)}}function J(t,e){1&t&&(l.Ob(0,"div",9),l.Kb(1,"mat-spinner"),l.Nb())}let $=(()=>{class t{constructor(t,e,n,r,i){this.dataService=t,this.route=e,this.router=n,this.componentFactoryResolver=r,this.viewPortScroller=i,this.previousChapterId$=new o.a(null),this.nextChapterId$=new o.a(null),this.previousCharacterChapterId$=new o.a(null),this.nextCharacterChapterId$=new o.a(null)}ngOnInit(){this.isLoading$=new o.a(!0)}ngAfterViewInit(){this.route.paramMap.pipe(function(t,e=c.a){var n;const r=(n=t)instanceof Date&&!isNaN(+n)?+t-e.now():Math.abs(t);return t=>t.lift(new h(r,e))}(0)).subscribe(t=>{this.isLoading$.next(!0);const e=+t.get("id");this.LoadChapter(e)})}LoadChapter(t){if(this.chapter=this.dataService.getChapter(t),void 0===this.chapter)return void this.router.navigate(["not-found"]);const e=this.componentFactoryResolver.resolveComponentFactory(this.chapter.component),n=this.contentHost.viewContainerRef;n.clear(),n.createComponent(e),this.isLoading$.next(!1),this.viewPortScroller.scrollToPosition([0,0])}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(b.a),l.Jb(r.a),l.Jb(r.c),l.Jb(l.j),l.Jb(g.q))},t.\u0275cmp=l.Db({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&l.zc(u,!0),2&t){let t;l.ic(t=l.Xb())&&(e.contentHost=t.first)}},decls:13,vars:10,consts:[["fxLayout","column","fxLayoutAlign","start",1,"container"],[4,"ngIf"],["fxFlexAlign","center"],[4,"ngIf","ngIfElse"],[1,"chapter-content"],["appChapterContent",""],["loading",""],["fxFlexAlign","stretch"],[3,"chapter"],["fxLayout","row","fxLayoutAlign","center center",1,"spinner"]],template:function(t,e){if(1&t&&(l.Ob(0,"main",0),l.tc(1,L,4,2,"ng-container",1),l.ac(2,"async"),l.Ob(3,"mat-card",2),l.Ob(4,"mat-card-content"),l.tc(5,z,3,1,"ng-container",3),l.ac(6,"async"),l.Ob(7,"div",4),l.tc(8,k,0,0,"ng-template",5),l.Nb(),l.tc(9,K,3,1,"ng-container",1),l.ac(10,"async"),l.tc(11,J,2,0,"ng-template",null,6,l.uc),l.Nb(),l.Nb(),l.Nb()),2&t){const t=l.jc(12);l.zb(1),l.ec("ngIf",!l.bc(2,4,e.isLoading$)),l.zb(4),l.ec("ngIf",!l.bc(6,6,e.isLoading$))("ngIfElse",t),l.zb(4),l.ec("ngIf",!l.bc(10,8,e.isLoading$))}},directives:[m.d,m.c,g.k,f.a,m.a,f.c,u,_,I.a,y.b],pipes:[g.b],styles:[".container[_ngcontent-%COMP%], .spinner[_ngcontent-%COMP%]{height:100%}header[_ngcontent-%COMP%]{background-color:hsla(0,0%,87.8%,.5);text-align:center}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:2rem;font-size:4rem;line-height:100%}mat-card[_ngcontent-%COMP%]{padding:3rem}@media (min-width:0){mat-card[_ngcontent-%COMP%]{width:70%}}mat-card[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:1rem;position:inherit!important}[_nghost-%COMP%]     .chapter-content h1{margin-bottom:2rem;margin-top:2rem}@media (min-width:0){[_nghost-%COMP%]     .chapter-content h1{font-size:2rem}}@media (min-width:768px){[_nghost-%COMP%]     .chapter-content h1{font-size:3rem}}[_nghost-%COMP%]     .chapter-content h2{margin-top:1rem;margin-bottom:1rem;color:#2c2c2c}@media (min-width:0){[_nghost-%COMP%]     .chapter-content h2{font-size:1.5rem}}@media (min-width:768px){[_nghost-%COMP%]     .chapter-content h2{font-size:2rem}}[_nghost-%COMP%]     .chapter-content h3{margin-bottom:1rem;margin-top:1rem;color:#404040}@media (min-width:0){[_nghost-%COMP%]     .chapter-content h3{font-size:1.2rem;font-weight:700}}@media (min-width:768px){[_nghost-%COMP%]     .chapter-content h3{font-size:1.8rem}}[_nghost-%COMP%]     .chapter-content mat-divider{margin-top:1rem;margin-bottom:1rem;position:inherit!important}[_nghost-%COMP%]     .chapter-content section{padding-top:1rem}[_nghost-%COMP%]     .chapter-content .relation img{margin-right:.2rem;margin-left:.2rem}[_nghost-%COMP%]     .chapter-content .relation.small img{max-height:10px}[_nghost-%COMP%]     .chapter-content .relation.large img{max-height:20px;position:relative;top:4px}[_nghost-%COMP%]     .chapter-content .relation.up{color:#0c71b0}[_nghost-%COMP%]     .chapter-content .relation.down{color:#8f1600}[_nghost-%COMP%]     .chapter-content a{margin-top:1rem;color:#197dc5;transition:color .8s;-o-transition:color .8s;-ms-transition:color .8s;-moz-transition:color .8s;-webkit-transition:color .8s;cursor:pointer}[_nghost-%COMP%]     .chapter-content a:hover{color:#8bcbfa}"]}),t})();const S=[{path:"",redirectTo:"0",component:i.a,children:[{path:"",component:$}]},{path:":id",component:i.a,children:[{path:"",component:$}]}];let Z=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(S)],r.f]}),t})();var X=n("PCNd");let q=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[X.a,Z]]}),t})()}}]);
//# sourceMappingURL=7-es2015.970f6960775b746fc735.js.map