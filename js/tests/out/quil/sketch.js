// Compiled by ClojureScript 1.9.946 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__41517 = arguments.length;
switch (G__41517) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__41519 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__41520 = null;
var count__41521 = (0);
var i__41522 = (0);
while(true){
if((i__41522 < count__41521)){
var vec__41523 = cljs.core._nth.call(null,chunk__41520,i__41522);
var processing_name = cljs.core.nth.call(null,vec__41523,(0),null);
var quil_name = cljs.core.nth.call(null,vec__41523,(1),null);
var temp__5457__auto___41531 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___41531)){
var handler_41532 = temp__5457__auto___41531;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__41519,chunk__41520,count__41521,i__41522,handler_41532,temp__5457__auto___41531,vec__41523,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_41526 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_41532.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_41526;
}});})(seq__41519,chunk__41520,count__41521,i__41522,handler_41532,temp__5457__auto___41531,vec__41523,processing_name,quil_name))
);
} else {
}

var G__41533 = seq__41519;
var G__41534 = chunk__41520;
var G__41535 = count__41521;
var G__41536 = (i__41522 + (1));
seq__41519 = G__41533;
chunk__41520 = G__41534;
count__41521 = G__41535;
i__41522 = G__41536;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41519);
if(temp__5457__auto__){
var seq__41519__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41519__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__41519__$1);
var G__41537 = cljs.core.chunk_rest.call(null,seq__41519__$1);
var G__41538 = c__31159__auto__;
var G__41539 = cljs.core.count.call(null,c__31159__auto__);
var G__41540 = (0);
seq__41519 = G__41537;
chunk__41520 = G__41538;
count__41521 = G__41539;
i__41522 = G__41540;
continue;
} else {
var vec__41527 = cljs.core.first.call(null,seq__41519__$1);
var processing_name = cljs.core.nth.call(null,vec__41527,(0),null);
var quil_name = cljs.core.nth.call(null,vec__41527,(1),null);
var temp__5457__auto___41541__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___41541__$1)){
var handler_41542 = temp__5457__auto___41541__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__41519,chunk__41520,count__41521,i__41522,handler_41542,temp__5457__auto___41541__$1,vec__41527,processing_name,quil_name,seq__41519__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_41530 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_41542.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_41530;
}});})(seq__41519,chunk__41520,count__41521,i__41522,handler_41542,temp__5457__auto___41541__$1,vec__41527,processing_name,quil_name,seq__41519__$1,temp__5457__auto__))
);
} else {
}

var G__41543 = cljs.core.next.call(null,seq__41519__$1);
var G__41544 = null;
var G__41545 = (0);
var G__41546 = (0);
seq__41519 = G__41543;
chunk__41520 = G__41544;
count__41521 = G__41545;
i__41522 = G__41546;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__41547_SHARP_){
return p1__41547_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__30228__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__31514__auto__ = [];
var len__31507__auto___41549 = arguments.length;
var i__31508__auto___41550 = (0);
while(true){
if((i__31508__auto___41550 < len__31507__auto___41549)){
args__31514__auto__.push((arguments[i__31508__auto___41550]));

var G__41551 = (i__31508__auto___41550 + (1));
i__31508__auto___41550 = G__41551;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__30228__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq41548){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41548));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__41556 = quil.sketch.empty_body_QMARK_.call(null);
var seq__41552_41557 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__41553_41558 = null;
var count__41554_41559 = (0);
var i__41555_41560 = (0);
while(true){
if((i__41555_41560 < count__41554_41559)){
var sk_41561 = cljs.core._nth.call(null,chunk__41553_41558,i__41555_41560);
if(cljs.core.truth_(add_elem_QMARK__41556)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_41561));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_41561).call(null);

var G__41562 = seq__41552_41557;
var G__41563 = chunk__41553_41558;
var G__41564 = count__41554_41559;
var G__41565 = (i__41555_41560 + (1));
seq__41552_41557 = G__41562;
chunk__41553_41558 = G__41563;
count__41554_41559 = G__41564;
i__41555_41560 = G__41565;
continue;
} else {
var temp__5457__auto___41566 = cljs.core.seq.call(null,seq__41552_41557);
if(temp__5457__auto___41566){
var seq__41552_41567__$1 = temp__5457__auto___41566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41552_41567__$1)){
var c__31159__auto___41568 = cljs.core.chunk_first.call(null,seq__41552_41567__$1);
var G__41569 = cljs.core.chunk_rest.call(null,seq__41552_41567__$1);
var G__41570 = c__31159__auto___41568;
var G__41571 = cljs.core.count.call(null,c__31159__auto___41568);
var G__41572 = (0);
seq__41552_41557 = G__41569;
chunk__41553_41558 = G__41570;
count__41554_41559 = G__41571;
i__41555_41560 = G__41572;
continue;
} else {
var sk_41573 = cljs.core.first.call(null,seq__41552_41567__$1);
if(cljs.core.truth_(add_elem_QMARK__41556)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_41573));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_41573).call(null);

var G__41574 = cljs.core.next.call(null,seq__41552_41567__$1);
var G__41575 = null;
var G__41576 = (0);
var G__41577 = (0);
seq__41552_41557 = G__41574;
chunk__41553_41558 = G__41575;
count__41554_41559 = G__41576;
i__41555_41560 = G__41577;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1512749393781
