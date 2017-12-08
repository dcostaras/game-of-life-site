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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41742_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41742_SHARP_));
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
var seq__41743 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41744 = null;
var count__41745 = (0);
var i__41746 = (0);
while(true){
if((i__41746 < count__41745)){
var n = cljs.core._nth.call(null,chunk__41744,i__41746);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41747 = seq__41743;
var G__41748 = chunk__41744;
var G__41749 = count__41745;
var G__41750 = (i__41746 + (1));
seq__41743 = G__41747;
chunk__41744 = G__41748;
count__41745 = G__41749;
i__41746 = G__41750;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41743);
if(temp__5457__auto__){
var seq__41743__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41743__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__41743__$1);
var G__41751 = cljs.core.chunk_rest.call(null,seq__41743__$1);
var G__41752 = c__31159__auto__;
var G__41753 = cljs.core.count.call(null,c__31159__auto__);
var G__41754 = (0);
seq__41743 = G__41751;
chunk__41744 = G__41752;
count__41745 = G__41753;
i__41746 = G__41754;
continue;
} else {
var n = cljs.core.first.call(null,seq__41743__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41755 = cljs.core.next.call(null,seq__41743__$1);
var G__41756 = null;
var G__41757 = (0);
var G__41758 = (0);
seq__41743 = G__41755;
chunk__41744 = G__41756;
count__41745 = G__41757;
i__41746 = G__41758;
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
return cljs.core.some.call(null,(function (p__41759){
var vec__41760 = p__41759;
var _ = cljs.core.nth.call(null,vec__41760,(0),null);
var v = cljs.core.nth.call(null,vec__41760,(1),null);
var and__30216__auto__ = v;
if(cljs.core.truth_(and__30216__auto__)){
return v.call(null,dep);
} else {
return and__30216__auto__;
}
}),cljs.core.filter.call(null,(function (p__41763){
var vec__41764 = p__41763;
var k = cljs.core.nth.call(null,vec__41764,(0),null);
var v = cljs.core.nth.call(null,vec__41764,(1),null);
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

var seq__41776_41784 = cljs.core.seq.call(null,deps);
var chunk__41777_41785 = null;
var count__41778_41786 = (0);
var i__41779_41787 = (0);
while(true){
if((i__41779_41787 < count__41778_41786)){
var dep_41788 = cljs.core._nth.call(null,chunk__41777_41785,i__41779_41787);
if(cljs.core.truth_((function (){var and__30216__auto__ = dep_41788;
if(cljs.core.truth_(and__30216__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41788));
} else {
return and__30216__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41788,(depth + (1)),state);
} else {
}

var G__41789 = seq__41776_41784;
var G__41790 = chunk__41777_41785;
var G__41791 = count__41778_41786;
var G__41792 = (i__41779_41787 + (1));
seq__41776_41784 = G__41789;
chunk__41777_41785 = G__41790;
count__41778_41786 = G__41791;
i__41779_41787 = G__41792;
continue;
} else {
var temp__5457__auto___41793 = cljs.core.seq.call(null,seq__41776_41784);
if(temp__5457__auto___41793){
var seq__41776_41794__$1 = temp__5457__auto___41793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41776_41794__$1)){
var c__31159__auto___41795 = cljs.core.chunk_first.call(null,seq__41776_41794__$1);
var G__41796 = cljs.core.chunk_rest.call(null,seq__41776_41794__$1);
var G__41797 = c__31159__auto___41795;
var G__41798 = cljs.core.count.call(null,c__31159__auto___41795);
var G__41799 = (0);
seq__41776_41784 = G__41796;
chunk__41777_41785 = G__41797;
count__41778_41786 = G__41798;
i__41779_41787 = G__41799;
continue;
} else {
var dep_41800 = cljs.core.first.call(null,seq__41776_41794__$1);
if(cljs.core.truth_((function (){var and__30216__auto__ = dep_41800;
if(cljs.core.truth_(and__30216__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41800));
} else {
return and__30216__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41800,(depth + (1)),state);
} else {
}

var G__41801 = cljs.core.next.call(null,seq__41776_41794__$1);
var G__41802 = null;
var G__41803 = (0);
var G__41804 = (0);
seq__41776_41784 = G__41801;
chunk__41777_41785 = G__41802;
count__41778_41786 = G__41803;
i__41779_41787 = G__41804;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41780){
var vec__41781 = p__41780;
var seq__41782 = cljs.core.seq.call(null,vec__41781);
var first__41783 = cljs.core.first.call(null,seq__41782);
var seq__41782__$1 = cljs.core.next.call(null,seq__41782);
var x = first__41783;
var xs = seq__41782__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41781,seq__41782,first__41783,seq__41782__$1,x,xs,get_deps__$1){
return (function (p1__41767_SHARP_){
return clojure.set.difference.call(null,p1__41767_SHARP_,x);
});})(vec__41781,seq__41782,first__41783,seq__41782__$1,x,xs,get_deps__$1))
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
var seq__41805 = cljs.core.seq.call(null,provides);
var chunk__41806 = null;
var count__41807 = (0);
var i__41808 = (0);
while(true){
if((i__41808 < count__41807)){
var prov = cljs.core._nth.call(null,chunk__41806,i__41808);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41809_41817 = cljs.core.seq.call(null,requires);
var chunk__41810_41818 = null;
var count__41811_41819 = (0);
var i__41812_41820 = (0);
while(true){
if((i__41812_41820 < count__41811_41819)){
var req_41821 = cljs.core._nth.call(null,chunk__41810_41818,i__41812_41820);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41821,prov);

var G__41822 = seq__41809_41817;
var G__41823 = chunk__41810_41818;
var G__41824 = count__41811_41819;
var G__41825 = (i__41812_41820 + (1));
seq__41809_41817 = G__41822;
chunk__41810_41818 = G__41823;
count__41811_41819 = G__41824;
i__41812_41820 = G__41825;
continue;
} else {
var temp__5457__auto___41826 = cljs.core.seq.call(null,seq__41809_41817);
if(temp__5457__auto___41826){
var seq__41809_41827__$1 = temp__5457__auto___41826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41809_41827__$1)){
var c__31159__auto___41828 = cljs.core.chunk_first.call(null,seq__41809_41827__$1);
var G__41829 = cljs.core.chunk_rest.call(null,seq__41809_41827__$1);
var G__41830 = c__31159__auto___41828;
var G__41831 = cljs.core.count.call(null,c__31159__auto___41828);
var G__41832 = (0);
seq__41809_41817 = G__41829;
chunk__41810_41818 = G__41830;
count__41811_41819 = G__41831;
i__41812_41820 = G__41832;
continue;
} else {
var req_41833 = cljs.core.first.call(null,seq__41809_41827__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41833,prov);

var G__41834 = cljs.core.next.call(null,seq__41809_41827__$1);
var G__41835 = null;
var G__41836 = (0);
var G__41837 = (0);
seq__41809_41817 = G__41834;
chunk__41810_41818 = G__41835;
count__41811_41819 = G__41836;
i__41812_41820 = G__41837;
continue;
}
} else {
}
}
break;
}

var G__41838 = seq__41805;
var G__41839 = chunk__41806;
var G__41840 = count__41807;
var G__41841 = (i__41808 + (1));
seq__41805 = G__41838;
chunk__41806 = G__41839;
count__41807 = G__41840;
i__41808 = G__41841;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41805);
if(temp__5457__auto__){
var seq__41805__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41805__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__41805__$1);
var G__41842 = cljs.core.chunk_rest.call(null,seq__41805__$1);
var G__41843 = c__31159__auto__;
var G__41844 = cljs.core.count.call(null,c__31159__auto__);
var G__41845 = (0);
seq__41805 = G__41842;
chunk__41806 = G__41843;
count__41807 = G__41844;
i__41808 = G__41845;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41805__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41813_41846 = cljs.core.seq.call(null,requires);
var chunk__41814_41847 = null;
var count__41815_41848 = (0);
var i__41816_41849 = (0);
while(true){
if((i__41816_41849 < count__41815_41848)){
var req_41850 = cljs.core._nth.call(null,chunk__41814_41847,i__41816_41849);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41850,prov);

var G__41851 = seq__41813_41846;
var G__41852 = chunk__41814_41847;
var G__41853 = count__41815_41848;
var G__41854 = (i__41816_41849 + (1));
seq__41813_41846 = G__41851;
chunk__41814_41847 = G__41852;
count__41815_41848 = G__41853;
i__41816_41849 = G__41854;
continue;
} else {
var temp__5457__auto___41855__$1 = cljs.core.seq.call(null,seq__41813_41846);
if(temp__5457__auto___41855__$1){
var seq__41813_41856__$1 = temp__5457__auto___41855__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41813_41856__$1)){
var c__31159__auto___41857 = cljs.core.chunk_first.call(null,seq__41813_41856__$1);
var G__41858 = cljs.core.chunk_rest.call(null,seq__41813_41856__$1);
var G__41859 = c__31159__auto___41857;
var G__41860 = cljs.core.count.call(null,c__31159__auto___41857);
var G__41861 = (0);
seq__41813_41846 = G__41858;
chunk__41814_41847 = G__41859;
count__41815_41848 = G__41860;
i__41816_41849 = G__41861;
continue;
} else {
var req_41862 = cljs.core.first.call(null,seq__41813_41856__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41862,prov);

var G__41863 = cljs.core.next.call(null,seq__41813_41856__$1);
var G__41864 = null;
var G__41865 = (0);
var G__41866 = (0);
seq__41813_41846 = G__41863;
chunk__41814_41847 = G__41864;
count__41815_41848 = G__41865;
i__41816_41849 = G__41866;
continue;
}
} else {
}
}
break;
}

var G__41867 = cljs.core.next.call(null,seq__41805__$1);
var G__41868 = null;
var G__41869 = (0);
var G__41870 = (0);
seq__41805 = G__41867;
chunk__41806 = G__41868;
count__41807 = G__41869;
i__41808 = G__41870;
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
var seq__41871_41875 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41872_41876 = null;
var count__41873_41877 = (0);
var i__41874_41878 = (0);
while(true){
if((i__41874_41878 < count__41873_41877)){
var ns_41879 = cljs.core._nth.call(null,chunk__41872_41876,i__41874_41878);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41879);

var G__41880 = seq__41871_41875;
var G__41881 = chunk__41872_41876;
var G__41882 = count__41873_41877;
var G__41883 = (i__41874_41878 + (1));
seq__41871_41875 = G__41880;
chunk__41872_41876 = G__41881;
count__41873_41877 = G__41882;
i__41874_41878 = G__41883;
continue;
} else {
var temp__5457__auto___41884 = cljs.core.seq.call(null,seq__41871_41875);
if(temp__5457__auto___41884){
var seq__41871_41885__$1 = temp__5457__auto___41884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41871_41885__$1)){
var c__31159__auto___41886 = cljs.core.chunk_first.call(null,seq__41871_41885__$1);
var G__41887 = cljs.core.chunk_rest.call(null,seq__41871_41885__$1);
var G__41888 = c__31159__auto___41886;
var G__41889 = cljs.core.count.call(null,c__31159__auto___41886);
var G__41890 = (0);
seq__41871_41875 = G__41887;
chunk__41872_41876 = G__41888;
count__41873_41877 = G__41889;
i__41874_41878 = G__41890;
continue;
} else {
var ns_41891 = cljs.core.first.call(null,seq__41871_41885__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41891);

var G__41892 = cljs.core.next.call(null,seq__41871_41885__$1);
var G__41893 = null;
var G__41894 = (0);
var G__41895 = (0);
seq__41871_41875 = G__41892;
chunk__41872_41876 = G__41893;
count__41873_41877 = G__41894;
i__41874_41878 = G__41895;
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
var G__41896__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41897__i = 0, G__41897__a = new Array(arguments.length -  0);
while (G__41897__i < G__41897__a.length) {G__41897__a[G__41897__i] = arguments[G__41897__i + 0]; ++G__41897__i;}
  args = new cljs.core.IndexedSeq(G__41897__a,0,null);
} 
return G__41896__delegate.call(this,args);};
G__41896.cljs$lang$maxFixedArity = 0;
G__41896.cljs$lang$applyTo = (function (arglist__41898){
var args = cljs.core.seq(arglist__41898);
return G__41896__delegate(args);
});
G__41896.cljs$core$IFn$_invoke$arity$variadic = G__41896__delegate;
return G__41896;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__41899_SHARP_,p2__41900_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41899_SHARP_)].join('')),p2__41900_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__41901_SHARP_,p2__41902_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41901_SHARP_)].join(''),p2__41902_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41903 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41903.addCallback(((function (G__41903){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__41903))
);

G__41903.addErrback(((function (G__41903){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__41903))
);

return G__41903;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41904){if((e41904 instanceof Error)){
var e = e41904;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41904;

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
}catch (e41905){if((e41905 instanceof Error)){
var e = e41905;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41905;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41906 = cljs.core._EQ_;
var expr__41907 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41906.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41907))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__41906.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41907))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__41906.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41907))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__41906,expr__41907){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41906,expr__41907))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41909,callback){
var map__41910 = p__41909;
var map__41910__$1 = ((((!((map__41910 == null)))?((((map__41910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41910):map__41910);
var file_msg = map__41910__$1;
var request_url = cljs.core.get.call(null,map__41910__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30228__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__41910,map__41910__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41910,map__41910__$1,file_msg,request_url))
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
return (function (state_41950){
var state_val_41951 = (state_41950[(1)]);
if((state_val_41951 === (7))){
var inst_41946 = (state_41950[(2)]);
var state_41950__$1 = state_41950;
var statearr_41952_41979 = state_41950__$1;
(statearr_41952_41979[(2)] = inst_41946);

(statearr_41952_41979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (1))){
var state_41950__$1 = state_41950;
var statearr_41953_41980 = state_41950__$1;
(statearr_41953_41980[(2)] = null);

(statearr_41953_41980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (4))){
var inst_41914 = (state_41950[(7)]);
var inst_41914__$1 = (state_41950[(2)]);
var state_41950__$1 = (function (){var statearr_41954 = state_41950;
(statearr_41954[(7)] = inst_41914__$1);

return statearr_41954;
})();
if(cljs.core.truth_(inst_41914__$1)){
var statearr_41955_41981 = state_41950__$1;
(statearr_41955_41981[(1)] = (5));

} else {
var statearr_41956_41982 = state_41950__$1;
(statearr_41956_41982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (15))){
var inst_41931 = (state_41950[(8)]);
var inst_41928 = (state_41950[(9)]);
var inst_41933 = inst_41931.call(null,inst_41928);
var state_41950__$1 = state_41950;
var statearr_41957_41983 = state_41950__$1;
(statearr_41957_41983[(2)] = inst_41933);

(statearr_41957_41983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (13))){
var inst_41940 = (state_41950[(2)]);
var state_41950__$1 = state_41950;
var statearr_41958_41984 = state_41950__$1;
(statearr_41958_41984[(2)] = inst_41940);

(statearr_41958_41984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (6))){
var state_41950__$1 = state_41950;
var statearr_41959_41985 = state_41950__$1;
(statearr_41959_41985[(2)] = null);

(statearr_41959_41985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (17))){
var inst_41937 = (state_41950[(2)]);
var state_41950__$1 = state_41950;
var statearr_41960_41986 = state_41950__$1;
(statearr_41960_41986[(2)] = inst_41937);

(statearr_41960_41986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (3))){
var inst_41948 = (state_41950[(2)]);
var state_41950__$1 = state_41950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41950__$1,inst_41948);
} else {
if((state_val_41951 === (12))){
var state_41950__$1 = state_41950;
var statearr_41961_41987 = state_41950__$1;
(statearr_41961_41987[(2)] = null);

(statearr_41961_41987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (2))){
var state_41950__$1 = state_41950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41950__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41951 === (11))){
var inst_41919 = (state_41950[(10)]);
var inst_41926 = figwheel.client.file_reloading.blocking_load.call(null,inst_41919);
var state_41950__$1 = state_41950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41950__$1,(14),inst_41926);
} else {
if((state_val_41951 === (9))){
var inst_41919 = (state_41950[(10)]);
var state_41950__$1 = state_41950;
if(cljs.core.truth_(inst_41919)){
var statearr_41962_41988 = state_41950__$1;
(statearr_41962_41988[(1)] = (11));

} else {
var statearr_41963_41989 = state_41950__$1;
(statearr_41963_41989[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (5))){
var inst_41920 = (state_41950[(11)]);
var inst_41914 = (state_41950[(7)]);
var inst_41919 = cljs.core.nth.call(null,inst_41914,(0),null);
var inst_41920__$1 = cljs.core.nth.call(null,inst_41914,(1),null);
var state_41950__$1 = (function (){var statearr_41964 = state_41950;
(statearr_41964[(11)] = inst_41920__$1);

(statearr_41964[(10)] = inst_41919);

return statearr_41964;
})();
if(cljs.core.truth_(inst_41920__$1)){
var statearr_41965_41990 = state_41950__$1;
(statearr_41965_41990[(1)] = (8));

} else {
var statearr_41966_41991 = state_41950__$1;
(statearr_41966_41991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (14))){
var inst_41919 = (state_41950[(10)]);
var inst_41931 = (state_41950[(8)]);
var inst_41928 = (state_41950[(2)]);
var inst_41929 = console.log("Loading!",inst_41919);
var inst_41930 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41931__$1 = cljs.core.get.call(null,inst_41930,inst_41919);
var state_41950__$1 = (function (){var statearr_41967 = state_41950;
(statearr_41967[(12)] = inst_41929);

(statearr_41967[(8)] = inst_41931__$1);

(statearr_41967[(9)] = inst_41928);

return statearr_41967;
})();
if(cljs.core.truth_(inst_41931__$1)){
var statearr_41968_41992 = state_41950__$1;
(statearr_41968_41992[(1)] = (15));

} else {
var statearr_41969_41993 = state_41950__$1;
(statearr_41969_41993[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (16))){
var inst_41928 = (state_41950[(9)]);
var inst_41935 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41928);
var state_41950__$1 = state_41950;
var statearr_41970_41994 = state_41950__$1;
(statearr_41970_41994[(2)] = inst_41935);

(statearr_41970_41994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (10))){
var inst_41942 = (state_41950[(2)]);
var state_41950__$1 = (function (){var statearr_41971 = state_41950;
(statearr_41971[(13)] = inst_41942);

return statearr_41971;
})();
var statearr_41972_41995 = state_41950__$1;
(statearr_41972_41995[(2)] = null);

(statearr_41972_41995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (8))){
var inst_41920 = (state_41950[(11)]);
var inst_41922 = console.log("Evaling!",inst_41920);
var inst_41923 = eval(inst_41920);
var state_41950__$1 = (function (){var statearr_41973 = state_41950;
(statearr_41973[(14)] = inst_41922);

return statearr_41973;
})();
var statearr_41974_41996 = state_41950__$1;
(statearr_41974_41996[(2)] = inst_41923);

(statearr_41974_41996[(1)] = (10));


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
var statearr_41975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41975[(0)] = figwheel$client$file_reloading$state_machine__36775__auto__);

(statearr_41975[(1)] = (1));

return statearr_41975;
});
var figwheel$client$file_reloading$state_machine__36775__auto____1 = (function (state_41950){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_41950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e41976){if((e41976 instanceof Object)){
var ex__36778__auto__ = e41976;
var statearr_41977_41997 = state_41950;
(statearr_41977_41997[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41998 = state_41950;
state_41950 = G__41998;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36775__auto__ = function(state_41950){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36775__auto____1.call(this,state_41950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36775__auto____0;
figwheel$client$file_reloading$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36775__auto____1;
return figwheel$client$file_reloading$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_41978 = f__36865__auto__.call(null);
(statearr_41978[(6)] = c__36864__auto__);

return statearr_41978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__))
);

return c__36864__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__42000 = arguments.length;
switch (G__42000) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42002,callback){
var map__42003 = p__42002;
var map__42003__$1 = ((((!((map__42003 == null)))?((((map__42003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42003):map__42003);
var file_msg = map__42003__$1;
var namespace = cljs.core.get.call(null,map__42003__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42003,map__42003__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42003,map__42003__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__42005){
var map__42006 = p__42005;
var map__42006__$1 = ((((!((map__42006 == null)))?((((map__42006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42006):map__42006);
var file_msg = map__42006__$1;
var namespace = cljs.core.get.call(null,map__42006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42008){
var map__42009 = p__42008;
var map__42009__$1 = ((((!((map__42009 == null)))?((((map__42009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42009):map__42009);
var file_msg = map__42009__$1;
var namespace = cljs.core.get.call(null,map__42009__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42011,callback){
var map__42012 = p__42011;
var map__42012__$1 = ((((!((map__42012 == null)))?((((map__42012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42012):map__42012);
var file_msg = map__42012__$1;
var request_url = cljs.core.get.call(null,map__42012__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__36864__auto___42062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___42062,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___42062,out){
return (function (state_42047){
var state_val_42048 = (state_42047[(1)]);
if((state_val_42048 === (1))){
var inst_42021 = cljs.core.seq.call(null,files);
var inst_42022 = cljs.core.first.call(null,inst_42021);
var inst_42023 = cljs.core.next.call(null,inst_42021);
var inst_42024 = files;
var state_42047__$1 = (function (){var statearr_42049 = state_42047;
(statearr_42049[(7)] = inst_42023);

(statearr_42049[(8)] = inst_42022);

(statearr_42049[(9)] = inst_42024);

return statearr_42049;
})();
var statearr_42050_42063 = state_42047__$1;
(statearr_42050_42063[(2)] = null);

(statearr_42050_42063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42048 === (2))){
var inst_42030 = (state_42047[(10)]);
var inst_42024 = (state_42047[(9)]);
var inst_42029 = cljs.core.seq.call(null,inst_42024);
var inst_42030__$1 = cljs.core.first.call(null,inst_42029);
var inst_42031 = cljs.core.next.call(null,inst_42029);
var inst_42032 = (inst_42030__$1 == null);
var inst_42033 = cljs.core.not.call(null,inst_42032);
var state_42047__$1 = (function (){var statearr_42051 = state_42047;
(statearr_42051[(10)] = inst_42030__$1);

(statearr_42051[(11)] = inst_42031);

return statearr_42051;
})();
if(inst_42033){
var statearr_42052_42064 = state_42047__$1;
(statearr_42052_42064[(1)] = (4));

} else {
var statearr_42053_42065 = state_42047__$1;
(statearr_42053_42065[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42048 === (3))){
var inst_42045 = (state_42047[(2)]);
var state_42047__$1 = state_42047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42047__$1,inst_42045);
} else {
if((state_val_42048 === (4))){
var inst_42030 = (state_42047[(10)]);
var inst_42035 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42030);
var state_42047__$1 = state_42047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42047__$1,(7),inst_42035);
} else {
if((state_val_42048 === (5))){
var inst_42041 = cljs.core.async.close_BANG_.call(null,out);
var state_42047__$1 = state_42047;
var statearr_42054_42066 = state_42047__$1;
(statearr_42054_42066[(2)] = inst_42041);

(statearr_42054_42066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42048 === (6))){
var inst_42043 = (state_42047[(2)]);
var state_42047__$1 = state_42047;
var statearr_42055_42067 = state_42047__$1;
(statearr_42055_42067[(2)] = inst_42043);

(statearr_42055_42067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42048 === (7))){
var inst_42031 = (state_42047[(11)]);
var inst_42037 = (state_42047[(2)]);
var inst_42038 = cljs.core.async.put_BANG_.call(null,out,inst_42037);
var inst_42024 = inst_42031;
var state_42047__$1 = (function (){var statearr_42056 = state_42047;
(statearr_42056[(9)] = inst_42024);

(statearr_42056[(12)] = inst_42038);

return statearr_42056;
})();
var statearr_42057_42068 = state_42047__$1;
(statearr_42057_42068[(2)] = null);

(statearr_42057_42068[(1)] = (2));


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
});})(c__36864__auto___42062,out))
;
return ((function (switch__36774__auto__,c__36864__auto___42062,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____0 = (function (){
var statearr_42058 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42058[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__);

(statearr_42058[(1)] = (1));

return statearr_42058;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____1 = (function (state_42047){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_42047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e42059){if((e42059 instanceof Object)){
var ex__36778__auto__ = e42059;
var statearr_42060_42069 = state_42047;
(statearr_42060_42069[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42070 = state_42047;
state_42047 = G__42070;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__ = function(state_42047){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____1.call(this,state_42047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___42062,out))
})();
var state__36866__auto__ = (function (){var statearr_42061 = f__36865__auto__.call(null);
(statearr_42061[(6)] = c__36864__auto___42062);

return statearr_42061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___42062,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42071,opts){
var map__42072 = p__42071;
var map__42072__$1 = ((((!((map__42072 == null)))?((((map__42072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42072):map__42072);
var eval_body = cljs.core.get.call(null,map__42072__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e42074){var e = e42074;
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
return (function (p1__42075_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42075_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__42076){
var vec__42077 = p__42076;
var k = cljs.core.nth.call(null,vec__42077,(0),null);
var v = cljs.core.nth.call(null,vec__42077,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42080){
var vec__42081 = p__42080;
var k = cljs.core.nth.call(null,vec__42081,(0),null);
var v = cljs.core.nth.call(null,vec__42081,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42087,p__42088){
var map__42089 = p__42087;
var map__42089__$1 = ((((!((map__42089 == null)))?((((map__42089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42089):map__42089);
var opts = map__42089__$1;
var before_jsload = cljs.core.get.call(null,map__42089__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42089__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42089__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42090 = p__42088;
var map__42090__$1 = ((((!((map__42090 == null)))?((((map__42090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42090):map__42090);
var msg = map__42090__$1;
var files = cljs.core.get.call(null,map__42090__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42090__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42090__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42244){
var state_val_42245 = (state_42244[(1)]);
if((state_val_42245 === (7))){
var inst_42106 = (state_42244[(7)]);
var inst_42107 = (state_42244[(8)]);
var inst_42104 = (state_42244[(9)]);
var inst_42105 = (state_42244[(10)]);
var inst_42112 = cljs.core._nth.call(null,inst_42105,inst_42107);
var inst_42113 = figwheel.client.file_reloading.eval_body.call(null,inst_42112,opts);
var inst_42114 = (inst_42107 + (1));
var tmp42246 = inst_42106;
var tmp42247 = inst_42104;
var tmp42248 = inst_42105;
var inst_42104__$1 = tmp42247;
var inst_42105__$1 = tmp42248;
var inst_42106__$1 = tmp42246;
var inst_42107__$1 = inst_42114;
var state_42244__$1 = (function (){var statearr_42249 = state_42244;
(statearr_42249[(7)] = inst_42106__$1);

(statearr_42249[(8)] = inst_42107__$1);

(statearr_42249[(9)] = inst_42104__$1);

(statearr_42249[(11)] = inst_42113);

(statearr_42249[(10)] = inst_42105__$1);

return statearr_42249;
})();
var statearr_42250_42333 = state_42244__$1;
(statearr_42250_42333[(2)] = null);

(statearr_42250_42333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (20))){
var inst_42147 = (state_42244[(12)]);
var inst_42155 = figwheel.client.file_reloading.sort_files.call(null,inst_42147);
var state_42244__$1 = state_42244;
var statearr_42251_42334 = state_42244__$1;
(statearr_42251_42334[(2)] = inst_42155);

(statearr_42251_42334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (27))){
var state_42244__$1 = state_42244;
var statearr_42252_42335 = state_42244__$1;
(statearr_42252_42335[(2)] = null);

(statearr_42252_42335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (1))){
var inst_42096 = (state_42244[(13)]);
var inst_42093 = before_jsload.call(null,files);
var inst_42094 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42095 = (function (){return ((function (inst_42096,inst_42093,inst_42094,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42084_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42084_SHARP_);
});
;})(inst_42096,inst_42093,inst_42094,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42096__$1 = cljs.core.filter.call(null,inst_42095,files);
var inst_42097 = cljs.core.not_empty.call(null,inst_42096__$1);
var state_42244__$1 = (function (){var statearr_42253 = state_42244;
(statearr_42253[(14)] = inst_42094);

(statearr_42253[(15)] = inst_42093);

(statearr_42253[(13)] = inst_42096__$1);

return statearr_42253;
})();
if(cljs.core.truth_(inst_42097)){
var statearr_42254_42336 = state_42244__$1;
(statearr_42254_42336[(1)] = (2));

} else {
var statearr_42255_42337 = state_42244__$1;
(statearr_42255_42337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (24))){
var state_42244__$1 = state_42244;
var statearr_42256_42338 = state_42244__$1;
(statearr_42256_42338[(2)] = null);

(statearr_42256_42338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (39))){
var inst_42197 = (state_42244[(16)]);
var state_42244__$1 = state_42244;
var statearr_42257_42339 = state_42244__$1;
(statearr_42257_42339[(2)] = inst_42197);

(statearr_42257_42339[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (46))){
var inst_42239 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
var statearr_42258_42340 = state_42244__$1;
(statearr_42258_42340[(2)] = inst_42239);

(statearr_42258_42340[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (4))){
var inst_42141 = (state_42244[(2)]);
var inst_42142 = cljs.core.List.EMPTY;
var inst_42143 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42142);
var inst_42144 = (function (){return ((function (inst_42141,inst_42142,inst_42143,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42085_SHARP_){
var and__30216__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42085_SHARP_);
if(cljs.core.truth_(and__30216__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42085_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__42085_SHARP_)));
} else {
return and__30216__auto__;
}
});
;})(inst_42141,inst_42142,inst_42143,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42145 = cljs.core.filter.call(null,inst_42144,files);
var inst_42146 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42147 = cljs.core.concat.call(null,inst_42145,inst_42146);
var state_42244__$1 = (function (){var statearr_42259 = state_42244;
(statearr_42259[(12)] = inst_42147);

(statearr_42259[(17)] = inst_42143);

(statearr_42259[(18)] = inst_42141);

return statearr_42259;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42260_42341 = state_42244__$1;
(statearr_42260_42341[(1)] = (16));

} else {
var statearr_42261_42342 = state_42244__$1;
(statearr_42261_42342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (15))){
var inst_42131 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
var statearr_42262_42343 = state_42244__$1;
(statearr_42262_42343[(2)] = inst_42131);

(statearr_42262_42343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (21))){
var inst_42157 = (state_42244[(19)]);
var inst_42157__$1 = (state_42244[(2)]);
var inst_42158 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42157__$1);
var state_42244__$1 = (function (){var statearr_42263 = state_42244;
(statearr_42263[(19)] = inst_42157__$1);

return statearr_42263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42244__$1,(22),inst_42158);
} else {
if((state_val_42245 === (31))){
var inst_42242 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42244__$1,inst_42242);
} else {
if((state_val_42245 === (32))){
var inst_42197 = (state_42244[(16)]);
var inst_42202 = inst_42197.cljs$lang$protocol_mask$partition0$;
var inst_42203 = (inst_42202 & (64));
var inst_42204 = inst_42197.cljs$core$ISeq$;
var inst_42205 = (cljs.core.PROTOCOL_SENTINEL === inst_42204);
var inst_42206 = (inst_42203) || (inst_42205);
var state_42244__$1 = state_42244;
if(cljs.core.truth_(inst_42206)){
var statearr_42264_42344 = state_42244__$1;
(statearr_42264_42344[(1)] = (35));

} else {
var statearr_42265_42345 = state_42244__$1;
(statearr_42265_42345[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (40))){
var inst_42219 = (state_42244[(20)]);
var inst_42218 = (state_42244[(2)]);
var inst_42219__$1 = cljs.core.get.call(null,inst_42218,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42220 = cljs.core.get.call(null,inst_42218,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42221 = cljs.core.not_empty.call(null,inst_42219__$1);
var state_42244__$1 = (function (){var statearr_42266 = state_42244;
(statearr_42266[(21)] = inst_42220);

(statearr_42266[(20)] = inst_42219__$1);

return statearr_42266;
})();
if(cljs.core.truth_(inst_42221)){
var statearr_42267_42346 = state_42244__$1;
(statearr_42267_42346[(1)] = (41));

} else {
var statearr_42268_42347 = state_42244__$1;
(statearr_42268_42347[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (33))){
var state_42244__$1 = state_42244;
var statearr_42269_42348 = state_42244__$1;
(statearr_42269_42348[(2)] = false);

(statearr_42269_42348[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (13))){
var inst_42117 = (state_42244[(22)]);
var inst_42121 = cljs.core.chunk_first.call(null,inst_42117);
var inst_42122 = cljs.core.chunk_rest.call(null,inst_42117);
var inst_42123 = cljs.core.count.call(null,inst_42121);
var inst_42104 = inst_42122;
var inst_42105 = inst_42121;
var inst_42106 = inst_42123;
var inst_42107 = (0);
var state_42244__$1 = (function (){var statearr_42270 = state_42244;
(statearr_42270[(7)] = inst_42106);

(statearr_42270[(8)] = inst_42107);

(statearr_42270[(9)] = inst_42104);

(statearr_42270[(10)] = inst_42105);

return statearr_42270;
})();
var statearr_42271_42349 = state_42244__$1;
(statearr_42271_42349[(2)] = null);

(statearr_42271_42349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (22))){
var inst_42165 = (state_42244[(23)]);
var inst_42157 = (state_42244[(19)]);
var inst_42161 = (state_42244[(24)]);
var inst_42160 = (state_42244[(25)]);
var inst_42160__$1 = (state_42244[(2)]);
var inst_42161__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42160__$1);
var inst_42162 = (function (){var all_files = inst_42157;
var res_SINGLEQUOTE_ = inst_42160__$1;
var res = inst_42161__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42165,inst_42157,inst_42161,inst_42160,inst_42160__$1,inst_42161__$1,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42086_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42086_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42165,inst_42157,inst_42161,inst_42160,inst_42160__$1,inst_42161__$1,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42163 = cljs.core.filter.call(null,inst_42162,inst_42160__$1);
var inst_42164 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42165__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42164);
var inst_42166 = cljs.core.not_empty.call(null,inst_42165__$1);
var state_42244__$1 = (function (){var statearr_42272 = state_42244;
(statearr_42272[(23)] = inst_42165__$1);

(statearr_42272[(26)] = inst_42163);

(statearr_42272[(24)] = inst_42161__$1);

(statearr_42272[(25)] = inst_42160__$1);

return statearr_42272;
})();
if(cljs.core.truth_(inst_42166)){
var statearr_42273_42350 = state_42244__$1;
(statearr_42273_42350[(1)] = (23));

} else {
var statearr_42274_42351 = state_42244__$1;
(statearr_42274_42351[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (36))){
var state_42244__$1 = state_42244;
var statearr_42275_42352 = state_42244__$1;
(statearr_42275_42352[(2)] = false);

(statearr_42275_42352[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (41))){
var inst_42219 = (state_42244[(20)]);
var inst_42223 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42224 = cljs.core.map.call(null,inst_42223,inst_42219);
var inst_42225 = cljs.core.pr_str.call(null,inst_42224);
var inst_42226 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42225)].join('');
var inst_42227 = figwheel.client.utils.log.call(null,inst_42226);
var state_42244__$1 = state_42244;
var statearr_42276_42353 = state_42244__$1;
(statearr_42276_42353[(2)] = inst_42227);

(statearr_42276_42353[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (43))){
var inst_42220 = (state_42244[(21)]);
var inst_42230 = (state_42244[(2)]);
var inst_42231 = cljs.core.not_empty.call(null,inst_42220);
var state_42244__$1 = (function (){var statearr_42277 = state_42244;
(statearr_42277[(27)] = inst_42230);

return statearr_42277;
})();
if(cljs.core.truth_(inst_42231)){
var statearr_42278_42354 = state_42244__$1;
(statearr_42278_42354[(1)] = (44));

} else {
var statearr_42279_42355 = state_42244__$1;
(statearr_42279_42355[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (29))){
var inst_42165 = (state_42244[(23)]);
var inst_42157 = (state_42244[(19)]);
var inst_42163 = (state_42244[(26)]);
var inst_42161 = (state_42244[(24)]);
var inst_42160 = (state_42244[(25)]);
var inst_42197 = (state_42244[(16)]);
var inst_42193 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42196 = (function (){var all_files = inst_42157;
var res_SINGLEQUOTE_ = inst_42160;
var res = inst_42161;
var files_not_loaded = inst_42163;
var dependencies_that_loaded = inst_42165;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42165,inst_42157,inst_42163,inst_42161,inst_42160,inst_42197,inst_42193,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42195){
var map__42280 = p__42195;
var map__42280__$1 = ((((!((map__42280 == null)))?((((map__42280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42280):map__42280);
var namespace = cljs.core.get.call(null,map__42280__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42165,inst_42157,inst_42163,inst_42161,inst_42160,inst_42197,inst_42193,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42197__$1 = cljs.core.group_by.call(null,inst_42196,inst_42163);
var inst_42199 = (inst_42197__$1 == null);
var inst_42200 = cljs.core.not.call(null,inst_42199);
var state_42244__$1 = (function (){var statearr_42282 = state_42244;
(statearr_42282[(28)] = inst_42193);

(statearr_42282[(16)] = inst_42197__$1);

return statearr_42282;
})();
if(inst_42200){
var statearr_42283_42356 = state_42244__$1;
(statearr_42283_42356[(1)] = (32));

} else {
var statearr_42284_42357 = state_42244__$1;
(statearr_42284_42357[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (44))){
var inst_42220 = (state_42244[(21)]);
var inst_42233 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42220);
var inst_42234 = cljs.core.pr_str.call(null,inst_42233);
var inst_42235 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42234)].join('');
var inst_42236 = figwheel.client.utils.log.call(null,inst_42235);
var state_42244__$1 = state_42244;
var statearr_42285_42358 = state_42244__$1;
(statearr_42285_42358[(2)] = inst_42236);

(statearr_42285_42358[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (6))){
var inst_42138 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
var statearr_42286_42359 = state_42244__$1;
(statearr_42286_42359[(2)] = inst_42138);

(statearr_42286_42359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (28))){
var inst_42163 = (state_42244[(26)]);
var inst_42190 = (state_42244[(2)]);
var inst_42191 = cljs.core.not_empty.call(null,inst_42163);
var state_42244__$1 = (function (){var statearr_42287 = state_42244;
(statearr_42287[(29)] = inst_42190);

return statearr_42287;
})();
if(cljs.core.truth_(inst_42191)){
var statearr_42288_42360 = state_42244__$1;
(statearr_42288_42360[(1)] = (29));

} else {
var statearr_42289_42361 = state_42244__$1;
(statearr_42289_42361[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (25))){
var inst_42161 = (state_42244[(24)]);
var inst_42177 = (state_42244[(2)]);
var inst_42178 = cljs.core.not_empty.call(null,inst_42161);
var state_42244__$1 = (function (){var statearr_42290 = state_42244;
(statearr_42290[(30)] = inst_42177);

return statearr_42290;
})();
if(cljs.core.truth_(inst_42178)){
var statearr_42291_42362 = state_42244__$1;
(statearr_42291_42362[(1)] = (26));

} else {
var statearr_42292_42363 = state_42244__$1;
(statearr_42292_42363[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (34))){
var inst_42213 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
if(cljs.core.truth_(inst_42213)){
var statearr_42293_42364 = state_42244__$1;
(statearr_42293_42364[(1)] = (38));

} else {
var statearr_42294_42365 = state_42244__$1;
(statearr_42294_42365[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (17))){
var state_42244__$1 = state_42244;
var statearr_42295_42366 = state_42244__$1;
(statearr_42295_42366[(2)] = recompile_dependents);

(statearr_42295_42366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (3))){
var state_42244__$1 = state_42244;
var statearr_42296_42367 = state_42244__$1;
(statearr_42296_42367[(2)] = null);

(statearr_42296_42367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (12))){
var inst_42134 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
var statearr_42297_42368 = state_42244__$1;
(statearr_42297_42368[(2)] = inst_42134);

(statearr_42297_42368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (2))){
var inst_42096 = (state_42244[(13)]);
var inst_42103 = cljs.core.seq.call(null,inst_42096);
var inst_42104 = inst_42103;
var inst_42105 = null;
var inst_42106 = (0);
var inst_42107 = (0);
var state_42244__$1 = (function (){var statearr_42298 = state_42244;
(statearr_42298[(7)] = inst_42106);

(statearr_42298[(8)] = inst_42107);

(statearr_42298[(9)] = inst_42104);

(statearr_42298[(10)] = inst_42105);

return statearr_42298;
})();
var statearr_42299_42369 = state_42244__$1;
(statearr_42299_42369[(2)] = null);

(statearr_42299_42369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (23))){
var inst_42165 = (state_42244[(23)]);
var inst_42157 = (state_42244[(19)]);
var inst_42163 = (state_42244[(26)]);
var inst_42161 = (state_42244[(24)]);
var inst_42160 = (state_42244[(25)]);
var inst_42168 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42170 = (function (){var all_files = inst_42157;
var res_SINGLEQUOTE_ = inst_42160;
var res = inst_42161;
var files_not_loaded = inst_42163;
var dependencies_that_loaded = inst_42165;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42165,inst_42157,inst_42163,inst_42161,inst_42160,inst_42168,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42169){
var map__42300 = p__42169;
var map__42300__$1 = ((((!((map__42300 == null)))?((((map__42300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42300):map__42300);
var request_url = cljs.core.get.call(null,map__42300__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42165,inst_42157,inst_42163,inst_42161,inst_42160,inst_42168,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42171 = cljs.core.reverse.call(null,inst_42165);
var inst_42172 = cljs.core.map.call(null,inst_42170,inst_42171);
var inst_42173 = cljs.core.pr_str.call(null,inst_42172);
var inst_42174 = figwheel.client.utils.log.call(null,inst_42173);
var state_42244__$1 = (function (){var statearr_42302 = state_42244;
(statearr_42302[(31)] = inst_42168);

return statearr_42302;
})();
var statearr_42303_42370 = state_42244__$1;
(statearr_42303_42370[(2)] = inst_42174);

(statearr_42303_42370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (35))){
var state_42244__$1 = state_42244;
var statearr_42304_42371 = state_42244__$1;
(statearr_42304_42371[(2)] = true);

(statearr_42304_42371[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (19))){
var inst_42147 = (state_42244[(12)]);
var inst_42153 = figwheel.client.file_reloading.expand_files.call(null,inst_42147);
var state_42244__$1 = state_42244;
var statearr_42305_42372 = state_42244__$1;
(statearr_42305_42372[(2)] = inst_42153);

(statearr_42305_42372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (11))){
var state_42244__$1 = state_42244;
var statearr_42306_42373 = state_42244__$1;
(statearr_42306_42373[(2)] = null);

(statearr_42306_42373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (9))){
var inst_42136 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
var statearr_42307_42374 = state_42244__$1;
(statearr_42307_42374[(2)] = inst_42136);

(statearr_42307_42374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (5))){
var inst_42106 = (state_42244[(7)]);
var inst_42107 = (state_42244[(8)]);
var inst_42109 = (inst_42107 < inst_42106);
var inst_42110 = inst_42109;
var state_42244__$1 = state_42244;
if(cljs.core.truth_(inst_42110)){
var statearr_42308_42375 = state_42244__$1;
(statearr_42308_42375[(1)] = (7));

} else {
var statearr_42309_42376 = state_42244__$1;
(statearr_42309_42376[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (14))){
var inst_42117 = (state_42244[(22)]);
var inst_42126 = cljs.core.first.call(null,inst_42117);
var inst_42127 = figwheel.client.file_reloading.eval_body.call(null,inst_42126,opts);
var inst_42128 = cljs.core.next.call(null,inst_42117);
var inst_42104 = inst_42128;
var inst_42105 = null;
var inst_42106 = (0);
var inst_42107 = (0);
var state_42244__$1 = (function (){var statearr_42310 = state_42244;
(statearr_42310[(7)] = inst_42106);

(statearr_42310[(8)] = inst_42107);

(statearr_42310[(32)] = inst_42127);

(statearr_42310[(9)] = inst_42104);

(statearr_42310[(10)] = inst_42105);

return statearr_42310;
})();
var statearr_42311_42377 = state_42244__$1;
(statearr_42311_42377[(2)] = null);

(statearr_42311_42377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (45))){
var state_42244__$1 = state_42244;
var statearr_42312_42378 = state_42244__$1;
(statearr_42312_42378[(2)] = null);

(statearr_42312_42378[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (26))){
var inst_42165 = (state_42244[(23)]);
var inst_42157 = (state_42244[(19)]);
var inst_42163 = (state_42244[(26)]);
var inst_42161 = (state_42244[(24)]);
var inst_42160 = (state_42244[(25)]);
var inst_42180 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42182 = (function (){var all_files = inst_42157;
var res_SINGLEQUOTE_ = inst_42160;
var res = inst_42161;
var files_not_loaded = inst_42163;
var dependencies_that_loaded = inst_42165;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42165,inst_42157,inst_42163,inst_42161,inst_42160,inst_42180,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42181){
var map__42313 = p__42181;
var map__42313__$1 = ((((!((map__42313 == null)))?((((map__42313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42313):map__42313);
var namespace = cljs.core.get.call(null,map__42313__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42165,inst_42157,inst_42163,inst_42161,inst_42160,inst_42180,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42183 = cljs.core.map.call(null,inst_42182,inst_42161);
var inst_42184 = cljs.core.pr_str.call(null,inst_42183);
var inst_42185 = figwheel.client.utils.log.call(null,inst_42184);
var inst_42186 = (function (){var all_files = inst_42157;
var res_SINGLEQUOTE_ = inst_42160;
var res = inst_42161;
var files_not_loaded = inst_42163;
var dependencies_that_loaded = inst_42165;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42165,inst_42157,inst_42163,inst_42161,inst_42160,inst_42180,inst_42182,inst_42183,inst_42184,inst_42185,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42165,inst_42157,inst_42163,inst_42161,inst_42160,inst_42180,inst_42182,inst_42183,inst_42184,inst_42185,state_val_42245,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42187 = setTimeout(inst_42186,(10));
var state_42244__$1 = (function (){var statearr_42315 = state_42244;
(statearr_42315[(33)] = inst_42180);

(statearr_42315[(34)] = inst_42185);

return statearr_42315;
})();
var statearr_42316_42379 = state_42244__$1;
(statearr_42316_42379[(2)] = inst_42187);

(statearr_42316_42379[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (16))){
var state_42244__$1 = state_42244;
var statearr_42317_42380 = state_42244__$1;
(statearr_42317_42380[(2)] = reload_dependents);

(statearr_42317_42380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (38))){
var inst_42197 = (state_42244[(16)]);
var inst_42215 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42197);
var state_42244__$1 = state_42244;
var statearr_42318_42381 = state_42244__$1;
(statearr_42318_42381[(2)] = inst_42215);

(statearr_42318_42381[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (30))){
var state_42244__$1 = state_42244;
var statearr_42319_42382 = state_42244__$1;
(statearr_42319_42382[(2)] = null);

(statearr_42319_42382[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (10))){
var inst_42117 = (state_42244[(22)]);
var inst_42119 = cljs.core.chunked_seq_QMARK_.call(null,inst_42117);
var state_42244__$1 = state_42244;
if(inst_42119){
var statearr_42320_42383 = state_42244__$1;
(statearr_42320_42383[(1)] = (13));

} else {
var statearr_42321_42384 = state_42244__$1;
(statearr_42321_42384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (18))){
var inst_42151 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
if(cljs.core.truth_(inst_42151)){
var statearr_42322_42385 = state_42244__$1;
(statearr_42322_42385[(1)] = (19));

} else {
var statearr_42323_42386 = state_42244__$1;
(statearr_42323_42386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (42))){
var state_42244__$1 = state_42244;
var statearr_42324_42387 = state_42244__$1;
(statearr_42324_42387[(2)] = null);

(statearr_42324_42387[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (37))){
var inst_42210 = (state_42244[(2)]);
var state_42244__$1 = state_42244;
var statearr_42325_42388 = state_42244__$1;
(statearr_42325_42388[(2)] = inst_42210);

(statearr_42325_42388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42245 === (8))){
var inst_42104 = (state_42244[(9)]);
var inst_42117 = (state_42244[(22)]);
var inst_42117__$1 = cljs.core.seq.call(null,inst_42104);
var state_42244__$1 = (function (){var statearr_42326 = state_42244;
(statearr_42326[(22)] = inst_42117__$1);

return statearr_42326;
})();
if(inst_42117__$1){
var statearr_42327_42389 = state_42244__$1;
(statearr_42327_42389[(1)] = (10));

} else {
var statearr_42328_42390 = state_42244__$1;
(statearr_42328_42390[(1)] = (11));

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
});})(c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__36774__auto__,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____0 = (function (){
var statearr_42329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42329[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__);

(statearr_42329[(1)] = (1));

return statearr_42329;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____1 = (function (state_42244){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_42244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e42330){if((e42330 instanceof Object)){
var ex__36778__auto__ = e42330;
var statearr_42331_42391 = state_42244;
(statearr_42331_42391[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42392 = state_42244;
state_42244 = G__42392;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__ = function(state_42244){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____1.call(this,state_42244);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36866__auto__ = (function (){var statearr_42332 = f__36865__auto__.call(null);
(statearr_42332[(6)] = c__36864__auto__);

return statearr_42332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__,map__42089,map__42089__$1,opts,before_jsload,on_jsload,reload_dependents,map__42090,map__42090__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36864__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42395,link){
var map__42396 = p__42395;
var map__42396__$1 = ((((!((map__42396 == null)))?((((map__42396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42396):map__42396);
var file = cljs.core.get.call(null,map__42396__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__42396,map__42396__$1,file){
return (function (p1__42393_SHARP_,p2__42394_SHARP_){
if(cljs.core._EQ_.call(null,p1__42393_SHARP_,p2__42394_SHARP_)){
return p1__42393_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__42396,map__42396__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42399){
var map__42400 = p__42399;
var map__42400__$1 = ((((!((map__42400 == null)))?((((map__42400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42400):map__42400);
var match_length = cljs.core.get.call(null,map__42400__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42400__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42398_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42398_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42402_SHARP_,p2__42403_SHARP_){
return cljs.core.assoc.call(null,p1__42402_SHARP_,cljs.core.get.call(null,p2__42403_SHARP_,key),p2__42403_SHARP_);
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
var loaded_f_datas_42404 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42404);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42404);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42405,p__42406){
var map__42407 = p__42405;
var map__42407__$1 = ((((!((map__42407 == null)))?((((map__42407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42407):map__42407);
var on_cssload = cljs.core.get.call(null,map__42407__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42408 = p__42406;
var map__42408__$1 = ((((!((map__42408 == null)))?((((map__42408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42408):map__42408);
var files_msg = map__42408__$1;
var files = cljs.core.get.call(null,map__42408__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1512749394959
