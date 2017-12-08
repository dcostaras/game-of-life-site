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
var G__47281 = arguments.length;
switch (G__47281) {
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
var seq__47283 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__47284 = null;
var count__47285 = (0);
var i__47286 = (0);
while(true){
if((i__47286 < count__47285)){
var vec__47287 = cljs.core._nth.call(null,chunk__47284,i__47286);
var processing_name = cljs.core.nth.call(null,vec__47287,(0),null);
var quil_name = cljs.core.nth.call(null,vec__47287,(1),null);
var temp__5457__auto___47295 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___47295)){
var handler_47296 = temp__5457__auto___47295;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__47283,chunk__47284,count__47285,i__47286,handler_47296,temp__5457__auto___47295,vec__47287,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_47290 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_47296.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_47290;
}});})(seq__47283,chunk__47284,count__47285,i__47286,handler_47296,temp__5457__auto___47295,vec__47287,processing_name,quil_name))
);
} else {
}

var G__47297 = seq__47283;
var G__47298 = chunk__47284;
var G__47299 = count__47285;
var G__47300 = (i__47286 + (1));
seq__47283 = G__47297;
chunk__47284 = G__47298;
count__47285 = G__47299;
i__47286 = G__47300;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47283);
if(temp__5457__auto__){
var seq__47283__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47283__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__47283__$1);
var G__47301 = cljs.core.chunk_rest.call(null,seq__47283__$1);
var G__47302 = c__31159__auto__;
var G__47303 = cljs.core.count.call(null,c__31159__auto__);
var G__47304 = (0);
seq__47283 = G__47301;
chunk__47284 = G__47302;
count__47285 = G__47303;
i__47286 = G__47304;
continue;
} else {
var vec__47291 = cljs.core.first.call(null,seq__47283__$1);
var processing_name = cljs.core.nth.call(null,vec__47291,(0),null);
var quil_name = cljs.core.nth.call(null,vec__47291,(1),null);
var temp__5457__auto___47305__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___47305__$1)){
var handler_47306 = temp__5457__auto___47305__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__47283,chunk__47284,count__47285,i__47286,handler_47306,temp__5457__auto___47305__$1,vec__47291,processing_name,quil_name,seq__47283__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_47294 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_47306.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_47294;
}});})(seq__47283,chunk__47284,count__47285,i__47286,handler_47306,temp__5457__auto___47305__$1,vec__47291,processing_name,quil_name,seq__47283__$1,temp__5457__auto__))
);
} else {
}

var G__47307 = cljs.core.next.call(null,seq__47283__$1);
var G__47308 = null;
var G__47309 = (0);
var G__47310 = (0);
seq__47283 = G__47307;
chunk__47284 = G__47308;
count__47285 = G__47309;
i__47286 = G__47310;
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
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__47311_SHARP_){
return p1__47311_SHARP_.call(null,options);
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
var len__31507__auto___47313 = arguments.length;
var i__31508__auto___47314 = (0);
while(true){
if((i__31508__auto___47314 < len__31507__auto___47313)){
args__31514__auto__.push((arguments[i__31508__auto___47314]));

var G__47315 = (i__31508__auto___47314 + (1));
i__31508__auto___47314 = G__47315;
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

quil.sketch.sketch.cljs$lang$applyTo = (function (seq47312){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47312));
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
var add_elem_QMARK__47320 = quil.sketch.empty_body_QMARK_.call(null);
var seq__47316_47321 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__47317_47322 = null;
var count__47318_47323 = (0);
var i__47319_47324 = (0);
while(true){
if((i__47319_47324 < count__47318_47323)){
var sk_47325 = cljs.core._nth.call(null,chunk__47317_47322,i__47319_47324);
if(cljs.core.truth_(add_elem_QMARK__47320)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_47325));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_47325).call(null);

var G__47326 = seq__47316_47321;
var G__47327 = chunk__47317_47322;
var G__47328 = count__47318_47323;
var G__47329 = (i__47319_47324 + (1));
seq__47316_47321 = G__47326;
chunk__47317_47322 = G__47327;
count__47318_47323 = G__47328;
i__47319_47324 = G__47329;
continue;
} else {
var temp__5457__auto___47330 = cljs.core.seq.call(null,seq__47316_47321);
if(temp__5457__auto___47330){
var seq__47316_47331__$1 = temp__5457__auto___47330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47316_47331__$1)){
var c__31159__auto___47332 = cljs.core.chunk_first.call(null,seq__47316_47331__$1);
var G__47333 = cljs.core.chunk_rest.call(null,seq__47316_47331__$1);
var G__47334 = c__31159__auto___47332;
var G__47335 = cljs.core.count.call(null,c__31159__auto___47332);
var G__47336 = (0);
seq__47316_47321 = G__47333;
chunk__47317_47322 = G__47334;
count__47318_47323 = G__47335;
i__47319_47324 = G__47336;
continue;
} else {
var sk_47337 = cljs.core.first.call(null,seq__47316_47331__$1);
if(cljs.core.truth_(add_elem_QMARK__47320)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_47337));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_47337).call(null);

var G__47338 = cljs.core.next.call(null,seq__47316_47331__$1);
var G__47339 = null;
var G__47340 = (0);
var G__47341 = (0);
seq__47316_47321 = G__47338;
chunk__47317_47322 = G__47339;
count__47318_47323 = G__47340;
i__47319_47324 = G__47341;
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

//# sourceMappingURL=sketch.js.map?rel=1512749417716
