// Compiled by ClojureScript 1.9.946 {}
goog.provide('game_of_life.renderer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('clojure.set');
goog.require('game_of_life.core');
goog.require('game_of_life.patterns');
cljs.core.enable_console_print_BANG_.call(null);
game_of_life.renderer.on_js_reload = (function game_of_life$renderer$on_js_reload(){
return null;
});
game_of_life.renderer.cells = clojure.set.union.call(null,game_of_life.patterns.block,game_of_life.patterns.glider,game_of_life.core.translate_pattern.call(null,game_of_life.patterns.block,cljs.core.list((1),(1))),game_of_life.core.translate_pattern.call(null,game_of_life.patterns.beehive,cljs.core.list((0),(5))),game_of_life.core.translate_pattern.call(null,game_of_life.patterns.loaf,cljs.core.list((6),(5))));
game_of_life.renderer.setup = (function game_of_life$renderer$setup(){
quil.core.frame_rate.call(null,(20));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"generation","generation",-2132542044),game_of_life.renderer.cells,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),(500),new cljs.core.Keyword(null,"block-size","block-size",-1062272384),(20)], null);
});
game_of_life.renderer.max_point = (function game_of_life$renderer$max_point(generation){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,quil.core.abs,cljs.core.mapcat.call(null,cljs.core.flatten,generation)));
});
game_of_life.renderer.update_state = (function game_of_life$renderer$update_state(p__51902){
var map__51903 = p__51902;
var map__51903__$1 = ((((!((map__51903 == null)))?((((map__51903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51903):map__51903);
var generation = cljs.core.get.call(null,map__51903__$1,new cljs.core.Keyword(null,"generation","generation",-2132542044));
var canvas_size = cljs.core.get.call(null,map__51903__$1,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475));
var block_size = cljs.core.get.call(null,map__51903__$1,new cljs.core.Keyword(null,"block-size","block-size",-1062272384));
var current_max = game_of_life.renderer.max_point.call(null,generation);
var bounds = (current_max > quil.core.floor.call(null,((canvas_size / block_size) / (2))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"generation","generation",-2132542044),game_of_life.core.next_generation.call(null,generation),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),canvas_size,new cljs.core.Keyword(null,"block-size","block-size",-1062272384),((bounds)?(block_size / (2)):block_size)], null);
});
game_of_life.renderer.draw_state = (function game_of_life$renderer$draw_state(p__51905){
var map__51906 = p__51905;
var map__51906__$1 = ((((!((map__51906 == null)))?((((map__51906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51906):map__51906);
var generation = cljs.core.get.call(null,map__51906__$1,new cljs.core.Keyword(null,"generation","generation",-2132542044));
var canvas_size = cljs.core.get.call(null,map__51906__$1,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475));
var block_size = cljs.core.get.call(null,map__51906__$1,new cljs.core.Keyword(null,"block-size","block-size",-1062272384));
quil.core.background.call(null,(240));

quil.core.fill.call(null,(255),(0),(0));

var center_offset = ((canvas_size / (2)) - (block_size / (2)));
var seq__51908 = cljs.core.seq.call(null,generation);
var chunk__51909 = null;
var count__51910 = (0);
var i__51911 = (0);
while(true){
if((i__51911 < count__51910)){
var vec__51912 = cljs.core._nth.call(null,chunk__51909,i__51911);
var x = cljs.core.nth.call(null,vec__51912,(0),null);
var y = cljs.core.nth.call(null,vec__51912,(1),null);
quil.core.rect.call(null,(center_offset + (block_size * x)),(center_offset + (block_size * y)),block_size,block_size);

var G__51918 = seq__51908;
var G__51919 = chunk__51909;
var G__51920 = count__51910;
var G__51921 = (i__51911 + (1));
seq__51908 = G__51918;
chunk__51909 = G__51919;
count__51910 = G__51920;
i__51911 = G__51921;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__51908);
if(temp__5457__auto__){
var seq__51908__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51908__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__51908__$1);
var G__51922 = cljs.core.chunk_rest.call(null,seq__51908__$1);
var G__51923 = c__31159__auto__;
var G__51924 = cljs.core.count.call(null,c__31159__auto__);
var G__51925 = (0);
seq__51908 = G__51922;
chunk__51909 = G__51923;
count__51910 = G__51924;
i__51911 = G__51925;
continue;
} else {
var vec__51915 = cljs.core.first.call(null,seq__51908__$1);
var x = cljs.core.nth.call(null,vec__51915,(0),null);
var y = cljs.core.nth.call(null,vec__51915,(1),null);
quil.core.rect.call(null,(center_offset + (block_size * x)),(center_offset + (block_size * y)),block_size,block_size);

var G__51926 = cljs.core.next.call(null,seq__51908__$1);
var G__51927 = null;
var G__51928 = (0);
var G__51929 = (0);
seq__51908 = G__51926;
chunk__51909 = G__51927;
count__51910 = G__51928;
i__51911 = G__51929;
continue;
}
} else {
return null;
}
}
break;
}
});
game_of_life.renderer.game_of_life_quill = (function game_of_life$renderer$game_of_life_quill(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,game_of_life.renderer.update_state))?(function() { 
var G__51930__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.renderer.update_state,args);
};
var G__51930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51931__i = 0, G__51931__a = new Array(arguments.length -  0);
while (G__51931__i < G__51931__a.length) {G__51931__a[G__51931__i] = arguments[G__51931__i + 0]; ++G__51931__i;}
  args = new cljs.core.IndexedSeq(G__51931__a,0,null);
} 
return G__51930__delegate.call(this,args);};
G__51930.cljs$lang$maxFixedArity = 0;
G__51930.cljs$lang$applyTo = (function (arglist__51932){
var args = cljs.core.seq(arglist__51932);
return G__51930__delegate(args);
});
G__51930.cljs$core$IFn$_invoke$arity$variadic = G__51930__delegate;
return G__51930;
})()
:game_of_life.renderer.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,game_of_life.renderer.setup))?(function() { 
var G__51933__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.renderer.setup,args);
};
var G__51933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51934__i = 0, G__51934__a = new Array(arguments.length -  0);
while (G__51934__i < G__51934__a.length) {G__51934__a[G__51934__i] = arguments[G__51934__i + 0]; ++G__51934__i;}
  args = new cljs.core.IndexedSeq(G__51934__a,0,null);
} 
return G__51933__delegate.call(this,args);};
G__51933.cljs$lang$maxFixedArity = 0;
G__51933.cljs$lang$applyTo = (function (arglist__51935){
var args = cljs.core.seq(arglist__51935);
return G__51933__delegate(args);
});
G__51933.cljs$core$IFn$_invoke$arity$variadic = G__51933__delegate;
return G__51933;
})()
:game_of_life.renderer.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,game_of_life.renderer.draw_state))?(function() { 
var G__51936__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.renderer.draw_state,args);
};
var G__51936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51937__i = 0, G__51937__a = new Array(arguments.length -  0);
while (G__51937__i < G__51937__a.length) {G__51937__a[G__51937__i] = arguments[G__51937__i + 0]; ++G__51937__i;}
  args = new cljs.core.IndexedSeq(G__51937__a,0,null);
} 
return G__51936__delegate.call(this,args);};
G__51936.cljs$lang$maxFixedArity = 0;
G__51936.cljs$lang$applyTo = (function (arglist__51938){
var args = cljs.core.seq(arglist__51938);
return G__51936__delegate(args);
});
G__51936.cljs$core$IFn$_invoke$arity$variadic = G__51936__delegate;
return G__51936;
})()
:game_of_life.renderer.draw_state));
});
goog.exportSymbol('game_of_life.renderer.game_of_life_quill', game_of_life.renderer.game_of_life_quill);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__41507__41508__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__41507__41508__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),game_of_life.renderer.game_of_life_quill,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}

//# sourceMappingURL=renderer.js.map?rel=1512749429617
