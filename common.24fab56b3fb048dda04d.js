"use strict";(self.webpackChunkdbh_transcript=self.webpackChunkdbh_transcript||[]).push([[592],{1403:(p,d,i)=>{i.d(d,{l:()=>h});var c=i(6491),m=i(4878),a=i(464),_=i(7532),v=i(4908),g=i(5140);let h=(()=>{class s extends m.c{constructor(e,t,n,r){super(r),this.route=e,this.router=t,this.dataService=n,this.currentItem=new c.X(null),this.currentItem$=this.currentItem.asObservable()}ngOnInit(){this.route.paramMap.subscribe(e=>{var t,n,r,l;const I=+e.get("id");let o=this.dataService.get(I);void 0!==o?(this.previousItemId=null!==(n=null===(t=this.dataService.get(o.id-1))||void 0===t?void 0:t.id)&&void 0!==n?n:null,this.nextItemId=null!==(l=null===(r=this.dataService.get(o.id+1))||void 0===r?void 0:r.id)&&void 0!==l?l:null,this.currentItem.next(o)):this.router.navigate(["not-found"])})}itemNavigationEvent(e){let t=null;if("ArrowRight"==e.key)t=this.currentItem.value.id+1;else{if("ArrowLeft"!=e.key)return;t=this.currentItem.value.id-1}e.stopImmediatePropagation();let n=void 0!==this.dataService.get(t);null!==t&&n&&this.router.navigate([this.baseUrl,t])}}return s.\u0275fac=function(e){return new(e||s)(a.Y36(_.gz),a.Y36(_.F0),a.Y36(v.B),a.Y36(g.Vn))},s.\u0275cmp=a.Xpm({type:s,selectors:[["ng-component"]],hostBindings:function(e,t){1&e&&a.NdJ("keyup",function(r){return t.itemNavigationEvent(r)},!1,a.Jf7)},features:[a.qOj],decls:0,vars:0,template:function(e,t){},encapsulation:2}),s})()}}]);
//# sourceMappingURL=common.24fab56b3fb048dda04d.js.map