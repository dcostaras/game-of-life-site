// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30228__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30228__auto__){
return or__30228__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30228__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
var or__30228__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30228__auto____$1)){
return or__30228__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50452_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50452_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__50453 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50454 = null;
var count__50455 = (0);
var i__50456 = (0);
while(true){
if((i__50456 < count__50455)){
var n = cljs.core._nth.call(null,chunk__50454,i__50456);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50457 = seq__50453;
var G__50458 = chunk__50454;
var G__50459 = count__50455;
var G__50460 = (i__50456 + (1));
seq__50453 = G__50457;
chunk__50454 = G__50458;
count__50455 = G__50459;
i__50456 = G__50460;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50453);
if(temp__5457__auto__){
var seq__50453__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50453__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__50453__$1);
var G__50461 = cljs.core.chunk_rest.call(null,seq__50453__$1);
var G__50462 = c__31159__auto__;
var G__50463 = cljs.core.count.call(null,c__31159__auto__);
var G__50464 = (0);
seq__50453 = G__50461;
chunk__50454 = G__50462;
count__50455 = G__50463;
i__50456 = G__50464;
continue;
} else {
var n = cljs.core.first.call(null,seq__50453__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50465 = cljs.core.next.call(null,seq__50453__$1);
var G__50466 = null;
var G__50467 = (0);
var G__50468 = (0);
seq__50453 = G__50465;
chunk__50454 = G__50466;
count__50455 = G__50467;
i__50456 = G__50468;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__50469){
var vec__50470 = p__50469;
var _ = cljs.core.nth.call(null,vec__50470,(0),null);
var v = cljs.core.nth.call(null,vec__50470,(1),null);
var and__30216__auto__ = v;
if(cljs.core.truth_(and__30216__auto__)){
return v.call(null,dep);
} else {
return and__30216__auto__;
}
}),cljs.core.filter.call(null,(function (p__50473){
var vec__50474 = p__50473;
var k = cljs.core.nth.call(null,vec__50474,(0),null);
var v = cljs.core.nth.call(null,vec__50474,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__50486_50494 = cljs.core.seq.call(null,deps);
var chunk__50487_50495 = null;
var count__50488_50496 = (0);
var i__50489_50497 = (0);
while(true){
if((i__50489_50497 < count__50488_50496)){
var dep_50498 = cljs.core._nth.call(null,chunk__50487_50495,i__50489_50497);
if(cljs.core.truth_((function (){var and__30216__auto__ = dep_50498;
if(cljs.core.truth_(and__30216__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50498));
} else {
return and__30216__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50498,(depth + (1)),state);
} else {
}

var G__50499 = seq__50486_50494;
var G__50500 = chunk__50487_50495;
var G__50501 = count__50488_50496;
var G__50502 = (i__50489_50497 + (1));
seq__50486_50494 = G__50499;
chunk__50487_50495 = G__50500;
count__50488_50496 = G__50501;
i__50489_50497 = G__50502;
continue;
} else {
var temp__5457__auto___50503 = cljs.core.seq.call(null,seq__50486_50494);
if(temp__5457__auto___50503){
var seq__50486_50504__$1 = temp__5457__auto___50503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50486_50504__$1)){
var c__31159__auto___50505 = cljs.core.chunk_first.call(null,seq__50486_50504__$1);
var G__50506 = cljs.core.chunk_rest.call(null,seq__50486_50504__$1);
var G__50507 = c__31159__auto___50505;
var G__50508 = cljs.core.count.call(null,c__31159__auto___50505);
var G__50509 = (0);
seq__50486_50494 = G__50506;
chunk__50487_50495 = G__50507;
count__50488_50496 = G__50508;
i__50489_50497 = G__50509;
continue;
} else {
var dep_50510 = cljs.core.first.call(null,seq__50486_50504__$1);
if(cljs.core.truth_((function (){var and__30216__auto__ = dep_50510;
if(cljs.core.truth_(and__30216__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50510));
} else {
return and__30216__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50510,(depth + (1)),state);
} else {
}

var G__50511 = cljs.core.next.call(null,seq__50486_50504__$1);
var G__50512 = null;
var G__50513 = (0);
var G__50514 = (0);
seq__50486_50494 = G__50511;
chunk__50487_50495 = G__50512;
count__50488_50496 = G__50513;
i__50489_50497 = G__50514;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50490){
var vec__50491 = p__50490;
var seq__50492 = cljs.core.seq.call(null,vec__50491);
var first__50493 = cljs.core.first.call(null,seq__50492);
var seq__50492__$1 = cljs.core.next.call(null,seq__50492);
var x = first__50493;
var xs = seq__50492__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50491,seq__50492,first__50493,seq__50492__$1,x,xs,get_deps__$1){
return (function (p1__50477_SHARP_){
return clojure.set.difference.call(null,p1__50477_SHARP_,x);
});})(vec__50491,seq__50492,first__50493,seq__50492__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__50515 = cljs.core.seq.call(null,provides);
var chunk__50516 = null;
var count__50517 = (0);
var i__50518 = (0);
while(true){
if((i__50518 < count__50517)){
var prov = cljs.core._nth.call(null,chunk__50516,i__50518);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50519_50527 = cljs.core.seq.call(null,requires);
var chunk__50520_50528 = null;
var count__50521_50529 = (0);
var i__50522_50530 = (0);
while(true){
if((i__50522_50530 < count__50521_50529)){
var req_50531 = cljs.core._nth.call(null,chunk__50520_50528,i__50522_50530);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50531,prov);

var G__50532 = seq__50519_50527;
var G__50533 = chunk__50520_50528;
var G__50534 = count__50521_50529;
var G__50535 = (i__50522_50530 + (1));
seq__50519_50527 = G__50532;
chunk__50520_50528 = G__50533;
count__50521_50529 = G__50534;
i__50522_50530 = G__50535;
continue;
} else {
var temp__5457__auto___50536 = cljs.core.seq.call(null,seq__50519_50527);
if(temp__5457__auto___50536){
var seq__50519_50537__$1 = temp__5457__auto___50536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50519_50537__$1)){
var c__31159__auto___50538 = cljs.core.chunk_first.call(null,seq__50519_50537__$1);
var G__50539 = cljs.core.chunk_rest.call(null,seq__50519_50537__$1);
var G__50540 = c__31159__auto___50538;
var G__50541 = cljs.core.count.call(null,c__31159__auto___50538);
var G__50542 = (0);
seq__50519_50527 = G__50539;
chunk__50520_50528 = G__50540;
count__50521_50529 = G__50541;
i__50522_50530 = G__50542;
continue;
} else {
var req_50543 = cljs.core.first.call(null,seq__50519_50537__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50543,prov);

var G__50544 = cljs.core.next.call(null,seq__50519_50537__$1);
var G__50545 = null;
var G__50546 = (0);
var G__50547 = (0);
seq__50519_50527 = G__50544;
chunk__50520_50528 = G__50545;
count__50521_50529 = G__50546;
i__50522_50530 = G__50547;
continue;
}
} else {
}
}
break;
}

var G__50548 = seq__50515;
var G__50549 = chunk__50516;
var G__50550 = count__50517;
var G__50551 = (i__50518 + (1));
seq__50515 = G__50548;
chunk__50516 = G__50549;
count__50517 = G__50550;
i__50518 = G__50551;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50515);
if(temp__5457__auto__){
var seq__50515__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50515__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__50515__$1);
var G__50552 = cljs.core.chunk_rest.call(null,seq__50515__$1);
var G__50553 = c__31159__auto__;
var G__50554 = cljs.core.count.call(null,c__31159__auto__);
var G__50555 = (0);
seq__50515 = G__50552;
chunk__50516 = G__50553;
count__50517 = G__50554;
i__50518 = G__50555;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50515__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50523_50556 = cljs.core.seq.call(null,requires);
var chunk__50524_50557 = null;
var count__50525_50558 = (0);
var i__50526_50559 = (0);
while(true){
if((i__50526_50559 < count__50525_50558)){
var req_50560 = cljs.core._nth.call(null,chunk__50524_50557,i__50526_50559);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50560,prov);

var G__50561 = seq__50523_50556;
var G__50562 = chunk__50524_50557;
var G__50563 = count__50525_50558;
var G__50564 = (i__50526_50559 + (1));
seq__50523_50556 = G__50561;
chunk__50524_50557 = G__50562;
count__50525_50558 = G__50563;
i__50526_50559 = G__50564;
continue;
} else {
var temp__5457__auto___50565__$1 = cljs.core.seq.call(null,seq__50523_50556);
if(temp__5457__auto___50565__$1){
var seq__50523_50566__$1 = temp__5457__auto___50565__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50523_50566__$1)){
var c__31159__auto___50567 = cljs.core.chunk_first.call(null,seq__50523_50566__$1);
var G__50568 = cljs.core.chunk_rest.call(null,seq__50523_50566__$1);
var G__50569 = c__31159__auto___50567;
var G__50570 = cljs.core.count.call(null,c__31159__auto___50567);
var G__50571 = (0);
seq__50523_50556 = G__50568;
chunk__50524_50557 = G__50569;
count__50525_50558 = G__50570;
i__50526_50559 = G__50571;
continue;
} else {
var req_50572 = cljs.core.first.call(null,seq__50523_50566__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50572,prov);

var G__50573 = cljs.core.next.call(null,seq__50523_50566__$1);
var G__50574 = null;
var G__50575 = (0);
var G__50576 = (0);
seq__50523_50556 = G__50573;
chunk__50524_50557 = G__50574;
count__50525_50558 = G__50575;
i__50526_50559 = G__50576;
continue;
}
} else {
}
}
break;
}

var G__50577 = cljs.core.next.call(null,seq__50515__$1);
var G__50578 = null;
var G__50579 = (0);
var G__50580 = (0);
seq__50515 = G__50577;
chunk__50516 = G__50578;
count__50517 = G__50579;
i__50518 = G__50580;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__50581_50585 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50582_50586 = null;
var count__50583_50587 = (0);
var i__50584_50588 = (0);
while(true){
if((i__50584_50588 < count__50583_50587)){
var ns_50589 = cljs.core._nth.call(null,chunk__50582_50586,i__50584_50588);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50589);

var G__50590 = seq__50581_50585;
var G__50591 = chunk__50582_50586;
var G__50592 = count__50583_50587;
var G__50593 = (i__50584_50588 + (1));
seq__50581_50585 = G__50590;
chunk__50582_50586 = G__50591;
count__50583_50587 = G__50592;
i__50584_50588 = G__50593;
continue;
} else {
var temp__5457__auto___50594 = cljs.core.seq.call(null,seq__50581_50585);
if(temp__5457__auto___50594){
var seq__50581_50595__$1 = temp__5457__auto___50594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50581_50595__$1)){
var c__31159__auto___50596 = cljs.core.chunk_first.call(null,seq__50581_50595__$1);
var G__50597 = cljs.core.chunk_rest.call(null,seq__50581_50595__$1);
var G__50598 = c__31159__auto___50596;
var G__50599 = cljs.core.count.call(null,c__31159__auto___50596);
var G__50600 = (0);
seq__50581_50585 = G__50597;
chunk__50582_50586 = G__50598;
count__50583_50587 = G__50599;
i__50584_50588 = G__50600;
continue;
} else {
var ns_50601 = cljs.core.first.call(null,seq__50581_50595__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50601);

var G__50602 = cljs.core.next.call(null,seq__50581_50595__$1);
var G__50603 = null;
var G__50604 = (0);
var G__50605 = (0);
seq__50581_50585 = G__50602;
chunk__50582_50586 = G__50603;
count__50583_50587 = G__50604;
i__50584_50588 = G__50605;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30228__auto__ = goog.require__;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__50606__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50607__i = 0, G__50607__a = new Array(arguments.length -  0);
while (G__50607__i < G__50607__a.length) {G__50607__a[G__50607__i] = arguments[G__50607__i + 0]; ++G__50607__i;}
  args = new cljs.core.IndexedSeq(G__50607__a,0,null);
} 
return G__50606__delegate.call(this,args);};
G__50606.cljs$lang$maxFixedArity = 0;
G__50606.cljs$lang$applyTo = (function (arglist__50608){
var args = cljs.core.seq(arglist__50608);
return G__50606__delegate(args);
});
G__50606.cljs$core$IFn$_invoke$arity$variadic = G__50606__delegate;
return G__50606;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__50609_SHARP_,p2__50610_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50609_SHARP_)].join('')),p2__50610_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__50611_SHARP_,p2__50612_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50611_SHARP_)].join(''),p2__50612_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__50613 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__50613.addCallback(((function (G__50613){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__50613))
);

G__50613.addErrback(((function (G__50613){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__50613))
);

return G__50613;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e50614){if((e50614 instanceof Error)){
var e = e50614;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50614;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50615){if((e50615 instanceof Error)){
var e = e50615;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50615;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50616 = cljs.core._EQ_;
var expr__50617 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50616.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50617))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__50616.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50617))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__50616.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__50617))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__50616,expr__50617){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50616,expr__50617))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50619,callback){
var map__50620 = p__50619;
var map__50620__$1 = ((((!((map__50620 == null)))?((((map__50620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50620):map__50620);
var file_msg = map__50620__$1;
var request_url = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30228__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__50620,map__50620__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50620,map__50620__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__){
return (function (state_50660){
var state_val_50661 = (state_50660[(1)]);
if((state_val_50661 === (7))){
var inst_50656 = (state_50660[(2)]);
var state_50660__$1 = state_50660;
var statearr_50662_50689 = state_50660__$1;
(statearr_50662_50689[(2)] = inst_50656);

(statearr_50662_50689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (1))){
var state_50660__$1 = state_50660;
var statearr_50663_50690 = state_50660__$1;
(statearr_50663_50690[(2)] = null);

(statearr_50663_50690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (4))){
var inst_50624 = (state_50660[(7)]);
var inst_50624__$1 = (state_50660[(2)]);
var state_50660__$1 = (function (){var statearr_50664 = state_50660;
(statearr_50664[(7)] = inst_50624__$1);

return statearr_50664;
})();
if(cljs.core.truth_(inst_50624__$1)){
var statearr_50665_50691 = state_50660__$1;
(statearr_50665_50691[(1)] = (5));

} else {
var statearr_50666_50692 = state_50660__$1;
(statearr_50666_50692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (15))){
var inst_50641 = (state_50660[(8)]);
var inst_50638 = (state_50660[(9)]);
var inst_50643 = inst_50641.call(null,inst_50638);
var state_50660__$1 = state_50660;
var statearr_50667_50693 = state_50660__$1;
(statearr_50667_50693[(2)] = inst_50643);

(statearr_50667_50693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (13))){
var inst_50650 = (state_50660[(2)]);
var state_50660__$1 = state_50660;
var statearr_50668_50694 = state_50660__$1;
(statearr_50668_50694[(2)] = inst_50650);

(statearr_50668_50694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (6))){
var state_50660__$1 = state_50660;
var statearr_50669_50695 = state_50660__$1;
(statearr_50669_50695[(2)] = null);

(statearr_50669_50695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (17))){
var inst_50647 = (state_50660[(2)]);
var state_50660__$1 = state_50660;
var statearr_50670_50696 = state_50660__$1;
(statearr_50670_50696[(2)] = inst_50647);

(statearr_50670_50696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (3))){
var inst_50658 = (state_50660[(2)]);
var state_50660__$1 = state_50660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50660__$1,inst_50658);
} else {
if((state_val_50661 === (12))){
var state_50660__$1 = state_50660;
var statearr_50671_50697 = state_50660__$1;
(statearr_50671_50697[(2)] = null);

(statearr_50671_50697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (2))){
var state_50660__$1 = state_50660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50660__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50661 === (11))){
var inst_50629 = (state_50660[(10)]);
var inst_50636 = figwheel.client.file_reloading.blocking_load.call(null,inst_50629);
var state_50660__$1 = state_50660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50660__$1,(14),inst_50636);
} else {
if((state_val_50661 === (9))){
var inst_50629 = (state_50660[(10)]);
var state_50660__$1 = state_50660;
if(cljs.core.truth_(inst_50629)){
var statearr_50672_50698 = state_50660__$1;
(statearr_50672_50698[(1)] = (11));

} else {
var statearr_50673_50699 = state_50660__$1;
(statearr_50673_50699[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (5))){
var inst_50630 = (state_50660[(11)]);
var inst_50624 = (state_50660[(7)]);
var inst_50629 = cljs.core.nth.call(null,inst_50624,(0),null);
var inst_50630__$1 = cljs.core.nth.call(null,inst_50624,(1),null);
var state_50660__$1 = (function (){var statearr_50674 = state_50660;
(statearr_50674[(11)] = inst_50630__$1);

(statearr_50674[(10)] = inst_50629);

return statearr_50674;
})();
if(cljs.core.truth_(inst_50630__$1)){
var statearr_50675_50700 = state_50660__$1;
(statearr_50675_50700[(1)] = (8));

} else {
var statearr_50676_50701 = state_50660__$1;
(statearr_50676_50701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (14))){
var inst_50629 = (state_50660[(10)]);
var inst_50641 = (state_50660[(8)]);
var inst_50638 = (state_50660[(2)]);
var inst_50639 = console.log("Loading!",inst_50629);
var inst_50640 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50641__$1 = cljs.core.get.call(null,inst_50640,inst_50629);
var state_50660__$1 = (function (){var statearr_50677 = state_50660;
(statearr_50677[(8)] = inst_50641__$1);

(statearr_50677[(12)] = inst_50639);

(statearr_50677[(9)] = inst_50638);

return statearr_50677;
})();
if(cljs.core.truth_(inst_50641__$1)){
var statearr_50678_50702 = state_50660__$1;
(statearr_50678_50702[(1)] = (15));

} else {
var statearr_50679_50703 = state_50660__$1;
(statearr_50679_50703[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (16))){
var inst_50638 = (state_50660[(9)]);
var inst_50645 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50638);
var state_50660__$1 = state_50660;
var statearr_50680_50704 = state_50660__$1;
(statearr_50680_50704[(2)] = inst_50645);

(statearr_50680_50704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (10))){
var inst_50652 = (state_50660[(2)]);
var state_50660__$1 = (function (){var statearr_50681 = state_50660;
(statearr_50681[(13)] = inst_50652);

return statearr_50681;
})();
var statearr_50682_50705 = state_50660__$1;
(statearr_50682_50705[(2)] = null);

(statearr_50682_50705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50661 === (8))){
var inst_50630 = (state_50660[(11)]);
var inst_50632 = console.log("Evaling!",inst_50630);
var inst_50633 = eval(inst_50630);
var state_50660__$1 = (function (){var statearr_50683 = state_50660;
(statearr_50683[(14)] = inst_50632);

return statearr_50683;
})();
var statearr_50684_50706 = state_50660__$1;
(statearr_50684_50706[(2)] = inst_50633);

(statearr_50684_50706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36864__auto__))
;
return ((function (switch__36774__auto__,c__36864__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__36775__auto__ = null;
var figwheel$client$file_reloading$state_machine__36775__auto____0 = (function (){
var statearr_50685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50685[(0)] = figwheel$client$file_reloading$state_machine__36775__auto__);

(statearr_50685[(1)] = (1));

return statearr_50685;
});
var figwheel$client$file_reloading$state_machine__36775__auto____1 = (function (state_50660){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_50660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e50686){if((e50686 instanceof Object)){
var ex__36778__auto__ = e50686;
var statearr_50687_50707 = state_50660;
(statearr_50687_50707[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50708 = state_50660;
state_50660 = G__50708;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36775__auto__ = function(state_50660){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36775__auto____1.call(this,state_50660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36775__auto____0;
figwheel$client$file_reloading$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36775__auto____1;
return figwheel$client$file_reloading$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_50688 = f__36865__auto__.call(null);
(statearr_50688[(6)] = c__36864__auto__);

return statearr_50688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__))
);

return c__36864__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__50710 = arguments.length;
switch (G__50710) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50712,callback){
var map__50713 = p__50712;
var map__50713__$1 = ((((!((map__50713 == null)))?((((map__50713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50713):map__50713);
var file_msg = map__50713__$1;
var namespace = cljs.core.get.call(null,map__50713__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50713,map__50713__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50713,map__50713__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__50715){
var map__50716 = p__50715;
var map__50716__$1 = ((((!((map__50716 == null)))?((((map__50716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50716):map__50716);
var file_msg = map__50716__$1;
var namespace = cljs.core.get.call(null,map__50716__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50718){
var map__50719 = p__50718;
var map__50719__$1 = ((((!((map__50719 == null)))?((((map__50719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50719):map__50719);
var file_msg = map__50719__$1;
var namespace = cljs.core.get.call(null,map__50719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30216__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30216__auto__){
var or__30228__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
var or__30228__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30228__auto____$1)){
return or__30228__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30216__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50721,callback){
var map__50722 = p__50721;
var map__50722__$1 = ((((!((map__50722 == null)))?((((map__50722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50722):map__50722);
var file_msg = map__50722__$1;
var request_url = cljs.core.get.call(null,map__50722__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50722__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36864__auto___50772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___50772,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___50772,out){
return (function (state_50757){
var state_val_50758 = (state_50757[(1)]);
if((state_val_50758 === (1))){
var inst_50731 = cljs.core.seq.call(null,files);
var inst_50732 = cljs.core.first.call(null,inst_50731);
var inst_50733 = cljs.core.next.call(null,inst_50731);
var inst_50734 = files;
var state_50757__$1 = (function (){var statearr_50759 = state_50757;
(statearr_50759[(7)] = inst_50734);

(statearr_50759[(8)] = inst_50732);

(statearr_50759[(9)] = inst_50733);

return statearr_50759;
})();
var statearr_50760_50773 = state_50757__$1;
(statearr_50760_50773[(2)] = null);

(statearr_50760_50773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (2))){
var inst_50740 = (state_50757[(10)]);
var inst_50734 = (state_50757[(7)]);
var inst_50739 = cljs.core.seq.call(null,inst_50734);
var inst_50740__$1 = cljs.core.first.call(null,inst_50739);
var inst_50741 = cljs.core.next.call(null,inst_50739);
var inst_50742 = (inst_50740__$1 == null);
var inst_50743 = cljs.core.not.call(null,inst_50742);
var state_50757__$1 = (function (){var statearr_50761 = state_50757;
(statearr_50761[(10)] = inst_50740__$1);

(statearr_50761[(11)] = inst_50741);

return statearr_50761;
})();
if(inst_50743){
var statearr_50762_50774 = state_50757__$1;
(statearr_50762_50774[(1)] = (4));

} else {
var statearr_50763_50775 = state_50757__$1;
(statearr_50763_50775[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (3))){
var inst_50755 = (state_50757[(2)]);
var state_50757__$1 = state_50757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50757__$1,inst_50755);
} else {
if((state_val_50758 === (4))){
var inst_50740 = (state_50757[(10)]);
var inst_50745 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50740);
var state_50757__$1 = state_50757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50757__$1,(7),inst_50745);
} else {
if((state_val_50758 === (5))){
var inst_50751 = cljs.core.async.close_BANG_.call(null,out);
var state_50757__$1 = state_50757;
var statearr_50764_50776 = state_50757__$1;
(statearr_50764_50776[(2)] = inst_50751);

(statearr_50764_50776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (6))){
var inst_50753 = (state_50757[(2)]);
var state_50757__$1 = state_50757;
var statearr_50765_50777 = state_50757__$1;
(statearr_50765_50777[(2)] = inst_50753);

(statearr_50765_50777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50758 === (7))){
var inst_50741 = (state_50757[(11)]);
var inst_50747 = (state_50757[(2)]);
var inst_50748 = cljs.core.async.put_BANG_.call(null,out,inst_50747);
var inst_50734 = inst_50741;
var state_50757__$1 = (function (){var statearr_50766 = state_50757;
(statearr_50766[(12)] = inst_50748);

(statearr_50766[(7)] = inst_50734);

return statearr_50766;
})();
var statearr_50767_50778 = state_50757__$1;
(statearr_50767_50778[(2)] = null);

(statearr_50767_50778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__36864__auto___50772,out))
;
return ((function (switch__36774__auto__,c__36864__auto___50772,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____0 = (function (){
var statearr_50768 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50768[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__);

(statearr_50768[(1)] = (1));

return statearr_50768;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____1 = (function (state_50757){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_50757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e50769){if((e50769 instanceof Object)){
var ex__36778__auto__ = e50769;
var statearr_50770_50779 = state_50757;
(statearr_50770_50779[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50780 = state_50757;
state_50757 = G__50780;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__ = function(state_50757){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____1.call(this,state_50757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___50772,out))
})();
var state__36866__auto__ = (function (){var statearr_50771 = f__36865__auto__.call(null);
(statearr_50771[(6)] = c__36864__auto___50772);

return statearr_50771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___50772,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50781,opts){
var map__50782 = p__50781;
var map__50782__$1 = ((((!((map__50782 == null)))?((((map__50782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50782):map__50782);
var eval_body = cljs.core.get.call(null,map__50782__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30216__auto__ = eval_body;
if(cljs.core.truth_(and__30216__auto__)){
return typeof eval_body === 'string';
} else {
return and__30216__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e50784){var e = e50784;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__50785_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50785_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__50786){
var vec__50787 = p__50786;
var k = cljs.core.nth.call(null,vec__50787,(0),null);
var v = cljs.core.nth.call(null,vec__50787,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50790){
var vec__50791 = p__50790;
var k = cljs.core.nth.call(null,vec__50791,(0),null);
var v = cljs.core.nth.call(null,vec__50791,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50797,p__50798){
var map__50799 = p__50797;
var map__50799__$1 = ((((!((map__50799 == null)))?((((map__50799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50799):map__50799);
var opts = map__50799__$1;
var before_jsload = cljs.core.get.call(null,map__50799__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50799__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50799__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50800 = p__50798;
var map__50800__$1 = ((((!((map__50800 == null)))?((((map__50800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50800):map__50800);
var msg = map__50800__$1;
var files = cljs.core.get.call(null,map__50800__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50800__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50800__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50954){
var state_val_50955 = (state_50954[(1)]);
if((state_val_50955 === (7))){
var inst_50815 = (state_50954[(7)]);
var inst_50816 = (state_50954[(8)]);
var inst_50814 = (state_50954[(9)]);
var inst_50817 = (state_50954[(10)]);
var inst_50822 = cljs.core._nth.call(null,inst_50815,inst_50817);
var inst_50823 = figwheel.client.file_reloading.eval_body.call(null,inst_50822,opts);
var inst_50824 = (inst_50817 + (1));
var tmp50956 = inst_50815;
var tmp50957 = inst_50816;
var tmp50958 = inst_50814;
var inst_50814__$1 = tmp50958;
var inst_50815__$1 = tmp50956;
var inst_50816__$1 = tmp50957;
var inst_50817__$1 = inst_50824;
var state_50954__$1 = (function (){var statearr_50959 = state_50954;
(statearr_50959[(7)] = inst_50815__$1);

(statearr_50959[(8)] = inst_50816__$1);

(statearr_50959[(9)] = inst_50814__$1);

(statearr_50959[(10)] = inst_50817__$1);

(statearr_50959[(11)] = inst_50823);

return statearr_50959;
})();
var statearr_50960_51043 = state_50954__$1;
(statearr_50960_51043[(2)] = null);

(statearr_50960_51043[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (20))){
var inst_50857 = (state_50954[(12)]);
var inst_50865 = figwheel.client.file_reloading.sort_files.call(null,inst_50857);
var state_50954__$1 = state_50954;
var statearr_50961_51044 = state_50954__$1;
(statearr_50961_51044[(2)] = inst_50865);

(statearr_50961_51044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (27))){
var state_50954__$1 = state_50954;
var statearr_50962_51045 = state_50954__$1;
(statearr_50962_51045[(2)] = null);

(statearr_50962_51045[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (1))){
var inst_50806 = (state_50954[(13)]);
var inst_50803 = before_jsload.call(null,files);
var inst_50804 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50805 = (function (){return ((function (inst_50806,inst_50803,inst_50804,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50794_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50794_SHARP_);
});
;})(inst_50806,inst_50803,inst_50804,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50806__$1 = cljs.core.filter.call(null,inst_50805,files);
var inst_50807 = cljs.core.not_empty.call(null,inst_50806__$1);
var state_50954__$1 = (function (){var statearr_50963 = state_50954;
(statearr_50963[(13)] = inst_50806__$1);

(statearr_50963[(14)] = inst_50804);

(statearr_50963[(15)] = inst_50803);

return statearr_50963;
})();
if(cljs.core.truth_(inst_50807)){
var statearr_50964_51046 = state_50954__$1;
(statearr_50964_51046[(1)] = (2));

} else {
var statearr_50965_51047 = state_50954__$1;
(statearr_50965_51047[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (24))){
var state_50954__$1 = state_50954;
var statearr_50966_51048 = state_50954__$1;
(statearr_50966_51048[(2)] = null);

(statearr_50966_51048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (39))){
var inst_50907 = (state_50954[(16)]);
var state_50954__$1 = state_50954;
var statearr_50967_51049 = state_50954__$1;
(statearr_50967_51049[(2)] = inst_50907);

(statearr_50967_51049[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (46))){
var inst_50949 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_50968_51050 = state_50954__$1;
(statearr_50968_51050[(2)] = inst_50949);

(statearr_50968_51050[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (4))){
var inst_50851 = (state_50954[(2)]);
var inst_50852 = cljs.core.List.EMPTY;
var inst_50853 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50852);
var inst_50854 = (function (){return ((function (inst_50851,inst_50852,inst_50853,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50795_SHARP_){
var and__30216__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50795_SHARP_);
if(cljs.core.truth_(and__30216__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50795_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__50795_SHARP_)));
} else {
return and__30216__auto__;
}
});
;})(inst_50851,inst_50852,inst_50853,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50855 = cljs.core.filter.call(null,inst_50854,files);
var inst_50856 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50857 = cljs.core.concat.call(null,inst_50855,inst_50856);
var state_50954__$1 = (function (){var statearr_50969 = state_50954;
(statearr_50969[(12)] = inst_50857);

(statearr_50969[(17)] = inst_50851);

(statearr_50969[(18)] = inst_50853);

return statearr_50969;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50970_51051 = state_50954__$1;
(statearr_50970_51051[(1)] = (16));

} else {
var statearr_50971_51052 = state_50954__$1;
(statearr_50971_51052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (15))){
var inst_50841 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_50972_51053 = state_50954__$1;
(statearr_50972_51053[(2)] = inst_50841);

(statearr_50972_51053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (21))){
var inst_50867 = (state_50954[(19)]);
var inst_50867__$1 = (state_50954[(2)]);
var inst_50868 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50867__$1);
var state_50954__$1 = (function (){var statearr_50973 = state_50954;
(statearr_50973[(19)] = inst_50867__$1);

return statearr_50973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50954__$1,(22),inst_50868);
} else {
if((state_val_50955 === (31))){
var inst_50952 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50954__$1,inst_50952);
} else {
if((state_val_50955 === (32))){
var inst_50907 = (state_50954[(16)]);
var inst_50912 = inst_50907.cljs$lang$protocol_mask$partition0$;
var inst_50913 = (inst_50912 & (64));
var inst_50914 = inst_50907.cljs$core$ISeq$;
var inst_50915 = (cljs.core.PROTOCOL_SENTINEL === inst_50914);
var inst_50916 = (inst_50913) || (inst_50915);
var state_50954__$1 = state_50954;
if(cljs.core.truth_(inst_50916)){
var statearr_50974_51054 = state_50954__$1;
(statearr_50974_51054[(1)] = (35));

} else {
var statearr_50975_51055 = state_50954__$1;
(statearr_50975_51055[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (40))){
var inst_50929 = (state_50954[(20)]);
var inst_50928 = (state_50954[(2)]);
var inst_50929__$1 = cljs.core.get.call(null,inst_50928,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50930 = cljs.core.get.call(null,inst_50928,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50931 = cljs.core.not_empty.call(null,inst_50929__$1);
var state_50954__$1 = (function (){var statearr_50976 = state_50954;
(statearr_50976[(21)] = inst_50930);

(statearr_50976[(20)] = inst_50929__$1);

return statearr_50976;
})();
if(cljs.core.truth_(inst_50931)){
var statearr_50977_51056 = state_50954__$1;
(statearr_50977_51056[(1)] = (41));

} else {
var statearr_50978_51057 = state_50954__$1;
(statearr_50978_51057[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (33))){
var state_50954__$1 = state_50954;
var statearr_50979_51058 = state_50954__$1;
(statearr_50979_51058[(2)] = false);

(statearr_50979_51058[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (13))){
var inst_50827 = (state_50954[(22)]);
var inst_50831 = cljs.core.chunk_first.call(null,inst_50827);
var inst_50832 = cljs.core.chunk_rest.call(null,inst_50827);
var inst_50833 = cljs.core.count.call(null,inst_50831);
var inst_50814 = inst_50832;
var inst_50815 = inst_50831;
var inst_50816 = inst_50833;
var inst_50817 = (0);
var state_50954__$1 = (function (){var statearr_50980 = state_50954;
(statearr_50980[(7)] = inst_50815);

(statearr_50980[(8)] = inst_50816);

(statearr_50980[(9)] = inst_50814);

(statearr_50980[(10)] = inst_50817);

return statearr_50980;
})();
var statearr_50981_51059 = state_50954__$1;
(statearr_50981_51059[(2)] = null);

(statearr_50981_51059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (22))){
var inst_50870 = (state_50954[(23)]);
var inst_50875 = (state_50954[(24)]);
var inst_50871 = (state_50954[(25)]);
var inst_50867 = (state_50954[(19)]);
var inst_50870__$1 = (state_50954[(2)]);
var inst_50871__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50870__$1);
var inst_50872 = (function (){var all_files = inst_50867;
var res_SINGLEQUOTE_ = inst_50870__$1;
var res = inst_50871__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50870,inst_50875,inst_50871,inst_50867,inst_50870__$1,inst_50871__$1,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50796_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50796_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50870,inst_50875,inst_50871,inst_50867,inst_50870__$1,inst_50871__$1,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50873 = cljs.core.filter.call(null,inst_50872,inst_50870__$1);
var inst_50874 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50875__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50874);
var inst_50876 = cljs.core.not_empty.call(null,inst_50875__$1);
var state_50954__$1 = (function (){var statearr_50982 = state_50954;
(statearr_50982[(23)] = inst_50870__$1);

(statearr_50982[(24)] = inst_50875__$1);

(statearr_50982[(26)] = inst_50873);

(statearr_50982[(25)] = inst_50871__$1);

return statearr_50982;
})();
if(cljs.core.truth_(inst_50876)){
var statearr_50983_51060 = state_50954__$1;
(statearr_50983_51060[(1)] = (23));

} else {
var statearr_50984_51061 = state_50954__$1;
(statearr_50984_51061[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (36))){
var state_50954__$1 = state_50954;
var statearr_50985_51062 = state_50954__$1;
(statearr_50985_51062[(2)] = false);

(statearr_50985_51062[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (41))){
var inst_50929 = (state_50954[(20)]);
var inst_50933 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50934 = cljs.core.map.call(null,inst_50933,inst_50929);
var inst_50935 = cljs.core.pr_str.call(null,inst_50934);
var inst_50936 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50935)].join('');
var inst_50937 = figwheel.client.utils.log.call(null,inst_50936);
var state_50954__$1 = state_50954;
var statearr_50986_51063 = state_50954__$1;
(statearr_50986_51063[(2)] = inst_50937);

(statearr_50986_51063[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (43))){
var inst_50930 = (state_50954[(21)]);
var inst_50940 = (state_50954[(2)]);
var inst_50941 = cljs.core.not_empty.call(null,inst_50930);
var state_50954__$1 = (function (){var statearr_50987 = state_50954;
(statearr_50987[(27)] = inst_50940);

return statearr_50987;
})();
if(cljs.core.truth_(inst_50941)){
var statearr_50988_51064 = state_50954__$1;
(statearr_50988_51064[(1)] = (44));

} else {
var statearr_50989_51065 = state_50954__$1;
(statearr_50989_51065[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (29))){
var inst_50870 = (state_50954[(23)]);
var inst_50875 = (state_50954[(24)]);
var inst_50907 = (state_50954[(16)]);
var inst_50873 = (state_50954[(26)]);
var inst_50871 = (state_50954[(25)]);
var inst_50867 = (state_50954[(19)]);
var inst_50903 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50906 = (function (){var all_files = inst_50867;
var res_SINGLEQUOTE_ = inst_50870;
var res = inst_50871;
var files_not_loaded = inst_50873;
var dependencies_that_loaded = inst_50875;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50870,inst_50875,inst_50907,inst_50873,inst_50871,inst_50867,inst_50903,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50905){
var map__50990 = p__50905;
var map__50990__$1 = ((((!((map__50990 == null)))?((((map__50990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50990):map__50990);
var namespace = cljs.core.get.call(null,map__50990__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50870,inst_50875,inst_50907,inst_50873,inst_50871,inst_50867,inst_50903,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50907__$1 = cljs.core.group_by.call(null,inst_50906,inst_50873);
var inst_50909 = (inst_50907__$1 == null);
var inst_50910 = cljs.core.not.call(null,inst_50909);
var state_50954__$1 = (function (){var statearr_50992 = state_50954;
(statearr_50992[(28)] = inst_50903);

(statearr_50992[(16)] = inst_50907__$1);

return statearr_50992;
})();
if(inst_50910){
var statearr_50993_51066 = state_50954__$1;
(statearr_50993_51066[(1)] = (32));

} else {
var statearr_50994_51067 = state_50954__$1;
(statearr_50994_51067[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (44))){
var inst_50930 = (state_50954[(21)]);
var inst_50943 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50930);
var inst_50944 = cljs.core.pr_str.call(null,inst_50943);
var inst_50945 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50944)].join('');
var inst_50946 = figwheel.client.utils.log.call(null,inst_50945);
var state_50954__$1 = state_50954;
var statearr_50995_51068 = state_50954__$1;
(statearr_50995_51068[(2)] = inst_50946);

(statearr_50995_51068[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (6))){
var inst_50848 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_50996_51069 = state_50954__$1;
(statearr_50996_51069[(2)] = inst_50848);

(statearr_50996_51069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (28))){
var inst_50873 = (state_50954[(26)]);
var inst_50900 = (state_50954[(2)]);
var inst_50901 = cljs.core.not_empty.call(null,inst_50873);
var state_50954__$1 = (function (){var statearr_50997 = state_50954;
(statearr_50997[(29)] = inst_50900);

return statearr_50997;
})();
if(cljs.core.truth_(inst_50901)){
var statearr_50998_51070 = state_50954__$1;
(statearr_50998_51070[(1)] = (29));

} else {
var statearr_50999_51071 = state_50954__$1;
(statearr_50999_51071[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (25))){
var inst_50871 = (state_50954[(25)]);
var inst_50887 = (state_50954[(2)]);
var inst_50888 = cljs.core.not_empty.call(null,inst_50871);
var state_50954__$1 = (function (){var statearr_51000 = state_50954;
(statearr_51000[(30)] = inst_50887);

return statearr_51000;
})();
if(cljs.core.truth_(inst_50888)){
var statearr_51001_51072 = state_50954__$1;
(statearr_51001_51072[(1)] = (26));

} else {
var statearr_51002_51073 = state_50954__$1;
(statearr_51002_51073[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (34))){
var inst_50923 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
if(cljs.core.truth_(inst_50923)){
var statearr_51003_51074 = state_50954__$1;
(statearr_51003_51074[(1)] = (38));

} else {
var statearr_51004_51075 = state_50954__$1;
(statearr_51004_51075[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (17))){
var state_50954__$1 = state_50954;
var statearr_51005_51076 = state_50954__$1;
(statearr_51005_51076[(2)] = recompile_dependents);

(statearr_51005_51076[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (3))){
var state_50954__$1 = state_50954;
var statearr_51006_51077 = state_50954__$1;
(statearr_51006_51077[(2)] = null);

(statearr_51006_51077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (12))){
var inst_50844 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_51007_51078 = state_50954__$1;
(statearr_51007_51078[(2)] = inst_50844);

(statearr_51007_51078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (2))){
var inst_50806 = (state_50954[(13)]);
var inst_50813 = cljs.core.seq.call(null,inst_50806);
var inst_50814 = inst_50813;
var inst_50815 = null;
var inst_50816 = (0);
var inst_50817 = (0);
var state_50954__$1 = (function (){var statearr_51008 = state_50954;
(statearr_51008[(7)] = inst_50815);

(statearr_51008[(8)] = inst_50816);

(statearr_51008[(9)] = inst_50814);

(statearr_51008[(10)] = inst_50817);

return statearr_51008;
})();
var statearr_51009_51079 = state_50954__$1;
(statearr_51009_51079[(2)] = null);

(statearr_51009_51079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (23))){
var inst_50870 = (state_50954[(23)]);
var inst_50875 = (state_50954[(24)]);
var inst_50873 = (state_50954[(26)]);
var inst_50871 = (state_50954[(25)]);
var inst_50867 = (state_50954[(19)]);
var inst_50878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50880 = (function (){var all_files = inst_50867;
var res_SINGLEQUOTE_ = inst_50870;
var res = inst_50871;
var files_not_loaded = inst_50873;
var dependencies_that_loaded = inst_50875;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50870,inst_50875,inst_50873,inst_50871,inst_50867,inst_50878,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50879){
var map__51010 = p__50879;
var map__51010__$1 = ((((!((map__51010 == null)))?((((map__51010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51010):map__51010);
var request_url = cljs.core.get.call(null,map__51010__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50870,inst_50875,inst_50873,inst_50871,inst_50867,inst_50878,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50881 = cljs.core.reverse.call(null,inst_50875);
var inst_50882 = cljs.core.map.call(null,inst_50880,inst_50881);
var inst_50883 = cljs.core.pr_str.call(null,inst_50882);
var inst_50884 = figwheel.client.utils.log.call(null,inst_50883);
var state_50954__$1 = (function (){var statearr_51012 = state_50954;
(statearr_51012[(31)] = inst_50878);

return statearr_51012;
})();
var statearr_51013_51080 = state_50954__$1;
(statearr_51013_51080[(2)] = inst_50884);

(statearr_51013_51080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (35))){
var state_50954__$1 = state_50954;
var statearr_51014_51081 = state_50954__$1;
(statearr_51014_51081[(2)] = true);

(statearr_51014_51081[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (19))){
var inst_50857 = (state_50954[(12)]);
var inst_50863 = figwheel.client.file_reloading.expand_files.call(null,inst_50857);
var state_50954__$1 = state_50954;
var statearr_51015_51082 = state_50954__$1;
(statearr_51015_51082[(2)] = inst_50863);

(statearr_51015_51082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (11))){
var state_50954__$1 = state_50954;
var statearr_51016_51083 = state_50954__$1;
(statearr_51016_51083[(2)] = null);

(statearr_51016_51083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (9))){
var inst_50846 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_51017_51084 = state_50954__$1;
(statearr_51017_51084[(2)] = inst_50846);

(statearr_51017_51084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (5))){
var inst_50816 = (state_50954[(8)]);
var inst_50817 = (state_50954[(10)]);
var inst_50819 = (inst_50817 < inst_50816);
var inst_50820 = inst_50819;
var state_50954__$1 = state_50954;
if(cljs.core.truth_(inst_50820)){
var statearr_51018_51085 = state_50954__$1;
(statearr_51018_51085[(1)] = (7));

} else {
var statearr_51019_51086 = state_50954__$1;
(statearr_51019_51086[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (14))){
var inst_50827 = (state_50954[(22)]);
var inst_50836 = cljs.core.first.call(null,inst_50827);
var inst_50837 = figwheel.client.file_reloading.eval_body.call(null,inst_50836,opts);
var inst_50838 = cljs.core.next.call(null,inst_50827);
var inst_50814 = inst_50838;
var inst_50815 = null;
var inst_50816 = (0);
var inst_50817 = (0);
var state_50954__$1 = (function (){var statearr_51020 = state_50954;
(statearr_51020[(7)] = inst_50815);

(statearr_51020[(8)] = inst_50816);

(statearr_51020[(9)] = inst_50814);

(statearr_51020[(32)] = inst_50837);

(statearr_51020[(10)] = inst_50817);

return statearr_51020;
})();
var statearr_51021_51087 = state_50954__$1;
(statearr_51021_51087[(2)] = null);

(statearr_51021_51087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (45))){
var state_50954__$1 = state_50954;
var statearr_51022_51088 = state_50954__$1;
(statearr_51022_51088[(2)] = null);

(statearr_51022_51088[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (26))){
var inst_50870 = (state_50954[(23)]);
var inst_50875 = (state_50954[(24)]);
var inst_50873 = (state_50954[(26)]);
var inst_50871 = (state_50954[(25)]);
var inst_50867 = (state_50954[(19)]);
var inst_50890 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50892 = (function (){var all_files = inst_50867;
var res_SINGLEQUOTE_ = inst_50870;
var res = inst_50871;
var files_not_loaded = inst_50873;
var dependencies_that_loaded = inst_50875;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50870,inst_50875,inst_50873,inst_50871,inst_50867,inst_50890,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50891){
var map__51023 = p__50891;
var map__51023__$1 = ((((!((map__51023 == null)))?((((map__51023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51023):map__51023);
var namespace = cljs.core.get.call(null,map__51023__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__51023__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50870,inst_50875,inst_50873,inst_50871,inst_50867,inst_50890,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50893 = cljs.core.map.call(null,inst_50892,inst_50871);
var inst_50894 = cljs.core.pr_str.call(null,inst_50893);
var inst_50895 = figwheel.client.utils.log.call(null,inst_50894);
var inst_50896 = (function (){var all_files = inst_50867;
var res_SINGLEQUOTE_ = inst_50870;
var res = inst_50871;
var files_not_loaded = inst_50873;
var dependencies_that_loaded = inst_50875;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50870,inst_50875,inst_50873,inst_50871,inst_50867,inst_50890,inst_50892,inst_50893,inst_50894,inst_50895,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50870,inst_50875,inst_50873,inst_50871,inst_50867,inst_50890,inst_50892,inst_50893,inst_50894,inst_50895,state_val_50955,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50897 = setTimeout(inst_50896,(10));
var state_50954__$1 = (function (){var statearr_51025 = state_50954;
(statearr_51025[(33)] = inst_50890);

(statearr_51025[(34)] = inst_50895);

return statearr_51025;
})();
var statearr_51026_51089 = state_50954__$1;
(statearr_51026_51089[(2)] = inst_50897);

(statearr_51026_51089[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (16))){
var state_50954__$1 = state_50954;
var statearr_51027_51090 = state_50954__$1;
(statearr_51027_51090[(2)] = reload_dependents);

(statearr_51027_51090[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (38))){
var inst_50907 = (state_50954[(16)]);
var inst_50925 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50907);
var state_50954__$1 = state_50954;
var statearr_51028_51091 = state_50954__$1;
(statearr_51028_51091[(2)] = inst_50925);

(statearr_51028_51091[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (30))){
var state_50954__$1 = state_50954;
var statearr_51029_51092 = state_50954__$1;
(statearr_51029_51092[(2)] = null);

(statearr_51029_51092[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (10))){
var inst_50827 = (state_50954[(22)]);
var inst_50829 = cljs.core.chunked_seq_QMARK_.call(null,inst_50827);
var state_50954__$1 = state_50954;
if(inst_50829){
var statearr_51030_51093 = state_50954__$1;
(statearr_51030_51093[(1)] = (13));

} else {
var statearr_51031_51094 = state_50954__$1;
(statearr_51031_51094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (18))){
var inst_50861 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
if(cljs.core.truth_(inst_50861)){
var statearr_51032_51095 = state_50954__$1;
(statearr_51032_51095[(1)] = (19));

} else {
var statearr_51033_51096 = state_50954__$1;
(statearr_51033_51096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (42))){
var state_50954__$1 = state_50954;
var statearr_51034_51097 = state_50954__$1;
(statearr_51034_51097[(2)] = null);

(statearr_51034_51097[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (37))){
var inst_50920 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_51035_51098 = state_50954__$1;
(statearr_51035_51098[(2)] = inst_50920);

(statearr_51035_51098[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (8))){
var inst_50827 = (state_50954[(22)]);
var inst_50814 = (state_50954[(9)]);
var inst_50827__$1 = cljs.core.seq.call(null,inst_50814);
var state_50954__$1 = (function (){var statearr_51036 = state_50954;
(statearr_51036[(22)] = inst_50827__$1);

return statearr_51036;
})();
if(inst_50827__$1){
var statearr_51037_51099 = state_50954__$1;
(statearr_51037_51099[(1)] = (10));

} else {
var statearr_51038_51100 = state_50954__$1;
(statearr_51038_51100[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__36774__auto__,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____0 = (function (){
var statearr_51039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51039[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__);

(statearr_51039[(1)] = (1));

return statearr_51039;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____1 = (function (state_50954){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_50954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e51040){if((e51040 instanceof Object)){
var ex__36778__auto__ = e51040;
var statearr_51041_51101 = state_50954;
(statearr_51041_51101[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51102 = state_50954;
state_50954 = G__51102;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__ = function(state_50954){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____1.call(this,state_50954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36866__auto__ = (function (){var statearr_51042 = f__36865__auto__.call(null);
(statearr_51042[(6)] = c__36864__auto__);

return statearr_51042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__,map__50799,map__50799__$1,opts,before_jsload,on_jsload,reload_dependents,map__50800,map__50800__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36864__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__51105,link){
var map__51106 = p__51105;
var map__51106__$1 = ((((!((map__51106 == null)))?((((map__51106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51106):map__51106);
var file = cljs.core.get.call(null,map__51106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__51106,map__51106__$1,file){
return (function (p1__51103_SHARP_,p2__51104_SHARP_){
if(cljs.core._EQ_.call(null,p1__51103_SHARP_,p2__51104_SHARP_)){
return p1__51103_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__51106,map__51106__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__51109){
var map__51110 = p__51109;
var map__51110__$1 = ((((!((map__51110 == null)))?((((map__51110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51110):map__51110);
var match_length = cljs.core.get.call(null,map__51110__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__51110__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__51108_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__51108_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__51112_SHARP_,p2__51113_SHARP_){
return cljs.core.assoc.call(null,p1__51112_SHARP_,cljs.core.get.call(null,p2__51113_SHARP_,key),p2__51113_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_51114 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_51114);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_51114);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__51115,p__51116){
var map__51117 = p__51115;
var map__51117__$1 = ((((!((map__51117 == null)))?((((map__51117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51117):map__51117);
var on_cssload = cljs.core.get.call(null,map__51117__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__51118 = p__51116;
var map__51118__$1 = ((((!((map__51118 == null)))?((((map__51118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51118):map__51118);
var files_msg = map__51118__$1;
var files = cljs.core.get.call(null,map__51118__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1512749425242
