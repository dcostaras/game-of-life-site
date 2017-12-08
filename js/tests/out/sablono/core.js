// Compiled by ClojureScript 1.9.946 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__40566__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__40563 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__40564 = cljs.core.seq.call(null,vec__40563);
var first__40565 = cljs.core.first.call(null,seq__40564);
var seq__40564__$1 = cljs.core.next.call(null,seq__40564);
var tag = first__40565;
var body = seq__40564__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__40566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40567__i = 0, G__40567__a = new Array(arguments.length -  0);
while (G__40567__i < G__40567__a.length) {G__40567__a[G__40567__i] = arguments[G__40567__i + 0]; ++G__40567__i;}
  args = new cljs.core.IndexedSeq(G__40567__a,0,null);
} 
return G__40566__delegate.call(this,args);};
G__40566.cljs$lang$maxFixedArity = 0;
G__40566.cljs$lang$applyTo = (function (arglist__40568){
var args = cljs.core.seq(arglist__40568);
return G__40566__delegate(args);
});
G__40566.cljs$core$IFn$_invoke$arity$variadic = G__40566__delegate;
return G__40566;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__31110__auto__ = (function sablono$core$update_arglists_$_iter__40569(s__40570){
return (new cljs.core.LazySeq(null,(function (){
var s__40570__$1 = s__40570;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__40570__$1);
if(temp__5457__auto__){
var s__40570__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40570__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__40570__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__40572 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__40571 = (0);
while(true){
if((i__40571 < size__31109__auto__)){
var args = cljs.core._nth.call(null,c__31108__auto__,i__40571);
cljs.core.chunk_append.call(null,b__40572,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__40573 = (i__40571 + (1));
i__40571 = G__40573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40572),sablono$core$update_arglists_$_iter__40569.call(null,cljs.core.chunk_rest.call(null,s__40570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40572),null);
}
} else {
var args = cljs.core.first.call(null,s__40570__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__40569.call(null,cljs.core.rest.call(null,s__40570__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31514__auto__ = [];
var len__31507__auto___40579 = arguments.length;
var i__31508__auto___40580 = (0);
while(true){
if((i__31508__auto___40580 < len__31507__auto___40579)){
args__31514__auto__.push((arguments[i__31508__auto___40580]));

var G__40581 = (i__31508__auto___40580 + (1));
i__31508__auto___40580 = G__40581;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__31110__auto__ = (function sablono$core$iter__40575(s__40576){
return (new cljs.core.LazySeq(null,(function (){
var s__40576__$1 = s__40576;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__40576__$1);
if(temp__5457__auto__){
var s__40576__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40576__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__40576__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__40578 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__40577 = (0);
while(true){
if((i__40577 < size__31109__auto__)){
var style = cljs.core._nth.call(null,c__31108__auto__,i__40577);
cljs.core.chunk_append.call(null,b__40578,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__40582 = (i__40577 + (1));
i__40577 = G__40582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40578),sablono$core$iter__40575.call(null,cljs.core.chunk_rest.call(null,s__40576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40578),null);
}
} else {
var style = cljs.core.first.call(null,s__40576__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__40575.call(null,cljs.core.rest.call(null,s__40576__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq40574){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40574));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to40583 = (function sablono$core$link_to40583(var_args){
var args__31514__auto__ = [];
var len__31507__auto___40586 = arguments.length;
var i__31508__auto___40587 = (0);
while(true){
if((i__31508__auto___40587 < len__31507__auto___40586)){
args__31514__auto__.push((arguments[i__31508__auto___40587]));

var G__40588 = (i__31508__auto___40587 + (1));
i__31508__auto___40587 = G__40588;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to40583.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

sablono.core.link_to40583.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to40583.cljs$lang$maxFixedArity = (1);

sablono.core.link_to40583.cljs$lang$applyTo = (function (seq40584){
var G__40585 = cljs.core.first.call(null,seq40584);
var seq40584__$1 = cljs.core.next.call(null,seq40584);
return sablono.core.link_to40583.cljs$core$IFn$_invoke$arity$variadic(G__40585,seq40584__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to40583);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to40589 = (function sablono$core$mail_to40589(var_args){
var args__31514__auto__ = [];
var len__31507__auto___40596 = arguments.length;
var i__31508__auto___40597 = (0);
while(true){
if((i__31508__auto___40597 < len__31507__auto___40596)){
args__31514__auto__.push((arguments[i__31508__auto___40597]));

var G__40598 = (i__31508__auto___40597 + (1));
i__31508__auto___40597 = G__40598;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to40589.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

sablono.core.mail_to40589.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__40592){
var vec__40593 = p__40592;
var content = cljs.core.nth.call(null,vec__40593,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__30228__auto__ = content;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to40589.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to40589.cljs$lang$applyTo = (function (seq40590){
var G__40591 = cljs.core.first.call(null,seq40590);
var seq40590__$1 = cljs.core.next.call(null,seq40590);
return sablono.core.mail_to40589.cljs$core$IFn$_invoke$arity$variadic(G__40591,seq40590__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to40589);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list40599 = (function sablono$core$unordered_list40599(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__31110__auto__ = (function sablono$core$unordered_list40599_$_iter__40600(s__40601){
return (new cljs.core.LazySeq(null,(function (){
var s__40601__$1 = s__40601;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__40601__$1);
if(temp__5457__auto__){
var s__40601__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40601__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__40601__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__40603 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__40602 = (0);
while(true){
if((i__40602 < size__31109__auto__)){
var x = cljs.core._nth.call(null,c__31108__auto__,i__40602);
cljs.core.chunk_append.call(null,b__40603,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__40604 = (i__40602 + (1));
i__40602 = G__40604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40603),sablono$core$unordered_list40599_$_iter__40600.call(null,cljs.core.chunk_rest.call(null,s__40601__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40603),null);
}
} else {
var x = cljs.core.first.call(null,s__40601__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list40599_$_iter__40600.call(null,cljs.core.rest.call(null,s__40601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list40599);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list40605 = (function sablono$core$ordered_list40605(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__31110__auto__ = (function sablono$core$ordered_list40605_$_iter__40606(s__40607){
return (new cljs.core.LazySeq(null,(function (){
var s__40607__$1 = s__40607;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__40607__$1);
if(temp__5457__auto__){
var s__40607__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40607__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__40607__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__40609 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__40608 = (0);
while(true){
if((i__40608 < size__31109__auto__)){
var x = cljs.core._nth.call(null,c__31108__auto__,i__40608);
cljs.core.chunk_append.call(null,b__40609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__40610 = (i__40608 + (1));
i__40608 = G__40610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40609),sablono$core$ordered_list40605_$_iter__40606.call(null,cljs.core.chunk_rest.call(null,s__40607__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40609),null);
}
} else {
var x = cljs.core.first.call(null,s__40607__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list40605_$_iter__40606.call(null,cljs.core.rest.call(null,s__40607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list40605);
/**
 * Create an image element.
 */
sablono.core.image40611 = (function sablono$core$image40611(var_args){
var G__40613 = arguments.length;
switch (G__40613) {
case 1:
return sablono.core.image40611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image40611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image40611.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image40611.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image40611.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image40611);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__40615_SHARP_,p2__40616_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40615_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40616_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__40617_SHARP_,p2__40618_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40617_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40618_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__40620 = arguments.length;
switch (G__40620) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30228__auto__ = value;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field40622 = (function sablono$core$color_field40622(var_args){
var G__40624 = arguments.length;
switch (G__40624) {
case 1:
return sablono.core.color_field40622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field40622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field40622.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__40553__auto__);
});

sablono.core.color_field40622.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.color_field40622.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field40622);

/**
 * Creates a date input field.
 */
sablono.core.date_field40625 = (function sablono$core$date_field40625(var_args){
var G__40627 = arguments.length;
switch (G__40627) {
case 1:
return sablono.core.date_field40625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field40625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field40625.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__40553__auto__);
});

sablono.core.date_field40625.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.date_field40625.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field40625);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field40628 = (function sablono$core$datetime_field40628(var_args){
var G__40630 = arguments.length;
switch (G__40630) {
case 1:
return sablono.core.datetime_field40628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field40628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field40628.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__40553__auto__);
});

sablono.core.datetime_field40628.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.datetime_field40628.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field40628);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field40631 = (function sablono$core$datetime_local_field40631(var_args){
var G__40633 = arguments.length;
switch (G__40633) {
case 1:
return sablono.core.datetime_local_field40631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field40631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field40631.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__40553__auto__);
});

sablono.core.datetime_local_field40631.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.datetime_local_field40631.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field40631);

/**
 * Creates a email input field.
 */
sablono.core.email_field40634 = (function sablono$core$email_field40634(var_args){
var G__40636 = arguments.length;
switch (G__40636) {
case 1:
return sablono.core.email_field40634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field40634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field40634.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__40553__auto__);
});

sablono.core.email_field40634.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.email_field40634.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field40634);

/**
 * Creates a file input field.
 */
sablono.core.file_field40637 = (function sablono$core$file_field40637(var_args){
var G__40639 = arguments.length;
switch (G__40639) {
case 1:
return sablono.core.file_field40637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field40637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field40637.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__40553__auto__);
});

sablono.core.file_field40637.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.file_field40637.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field40637);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field40640 = (function sablono$core$hidden_field40640(var_args){
var G__40642 = arguments.length;
switch (G__40642) {
case 1:
return sablono.core.hidden_field40640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field40640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field40640.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__40553__auto__);
});

sablono.core.hidden_field40640.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.hidden_field40640.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field40640);

/**
 * Creates a month input field.
 */
sablono.core.month_field40643 = (function sablono$core$month_field40643(var_args){
var G__40645 = arguments.length;
switch (G__40645) {
case 1:
return sablono.core.month_field40643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field40643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field40643.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__40553__auto__);
});

sablono.core.month_field40643.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.month_field40643.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field40643);

/**
 * Creates a number input field.
 */
sablono.core.number_field40646 = (function sablono$core$number_field40646(var_args){
var G__40648 = arguments.length;
switch (G__40648) {
case 1:
return sablono.core.number_field40646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field40646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field40646.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__40553__auto__);
});

sablono.core.number_field40646.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.number_field40646.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field40646);

/**
 * Creates a password input field.
 */
sablono.core.password_field40649 = (function sablono$core$password_field40649(var_args){
var G__40651 = arguments.length;
switch (G__40651) {
case 1:
return sablono.core.password_field40649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field40649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field40649.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__40553__auto__);
});

sablono.core.password_field40649.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.password_field40649.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field40649);

/**
 * Creates a range input field.
 */
sablono.core.range_field40652 = (function sablono$core$range_field40652(var_args){
var G__40654 = arguments.length;
switch (G__40654) {
case 1:
return sablono.core.range_field40652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field40652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field40652.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__40553__auto__);
});

sablono.core.range_field40652.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.range_field40652.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field40652);

/**
 * Creates a search input field.
 */
sablono.core.search_field40655 = (function sablono$core$search_field40655(var_args){
var G__40657 = arguments.length;
switch (G__40657) {
case 1:
return sablono.core.search_field40655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field40655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field40655.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__40553__auto__);
});

sablono.core.search_field40655.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.search_field40655.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field40655);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field40658 = (function sablono$core$tel_field40658(var_args){
var G__40660 = arguments.length;
switch (G__40660) {
case 1:
return sablono.core.tel_field40658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field40658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field40658.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__40553__auto__);
});

sablono.core.tel_field40658.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.tel_field40658.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field40658);

/**
 * Creates a text input field.
 */
sablono.core.text_field40661 = (function sablono$core$text_field40661(var_args){
var G__40663 = arguments.length;
switch (G__40663) {
case 1:
return sablono.core.text_field40661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field40661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field40661.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__40553__auto__);
});

sablono.core.text_field40661.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.text_field40661.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field40661);

/**
 * Creates a time input field.
 */
sablono.core.time_field40664 = (function sablono$core$time_field40664(var_args){
var G__40666 = arguments.length;
switch (G__40666) {
case 1:
return sablono.core.time_field40664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field40664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field40664.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__40553__auto__);
});

sablono.core.time_field40664.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.time_field40664.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field40664);

/**
 * Creates a url input field.
 */
sablono.core.url_field40667 = (function sablono$core$url_field40667(var_args){
var G__40669 = arguments.length;
switch (G__40669) {
case 1:
return sablono.core.url_field40667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field40667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field40667.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__40553__auto__);
});

sablono.core.url_field40667.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.url_field40667.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field40667);

/**
 * Creates a week input field.
 */
sablono.core.week_field40670 = (function sablono$core$week_field40670(var_args){
var G__40672 = arguments.length;
switch (G__40672) {
case 1:
return sablono.core.week_field40670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field40670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field40670.cljs$core$IFn$_invoke$arity$1 = (function (name__40553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__40553__auto__);
});

sablono.core.week_field40670.cljs$core$IFn$_invoke$arity$2 = (function (name__40553__auto__,value__40554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__40553__auto__,value__40554__auto__);
});

sablono.core.week_field40670.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field40670);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box40690 = (function sablono$core$check_box40690(var_args){
var G__40692 = arguments.length;
switch (G__40692) {
case 1:
return sablono.core.check_box40690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box40690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box40690.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box40690.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box40690.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box40690.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box40690.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box40690);
/**
 * Creates a radio button.
 */
sablono.core.radio_button40694 = (function sablono$core$radio_button40694(var_args){
var G__40696 = arguments.length;
switch (G__40696) {
case 1:
return sablono.core.radio_button40694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button40694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button40694.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button40694.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button40694.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button40694.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button40694.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button40694);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options40698 = (function sablono$core$select_options40698(coll){
var iter__31110__auto__ = (function sablono$core$select_options40698_$_iter__40699(s__40700){
return (new cljs.core.LazySeq(null,(function (){
var s__40700__$1 = s__40700;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__40700__$1);
if(temp__5457__auto__){
var s__40700__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40700__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__40700__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__40702 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__40701 = (0);
while(true){
if((i__40701 < size__31109__auto__)){
var x = cljs.core._nth.call(null,c__31108__auto__,i__40701);
cljs.core.chunk_append.call(null,b__40702,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__40703 = x;
var text = cljs.core.nth.call(null,vec__40703,(0),null);
var val = cljs.core.nth.call(null,vec__40703,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__40703,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options40698.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__40709 = (i__40701 + (1));
i__40701 = G__40709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40702),sablono$core$select_options40698_$_iter__40699.call(null,cljs.core.chunk_rest.call(null,s__40700__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40702),null);
}
} else {
var x = cljs.core.first.call(null,s__40700__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__40706 = x;
var text = cljs.core.nth.call(null,vec__40706,(0),null);
var val = cljs.core.nth.call(null,vec__40706,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__40706,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options40698.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options40698_$_iter__40699.call(null,cljs.core.rest.call(null,s__40700__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options40698);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down40710 = (function sablono$core$drop_down40710(var_args){
var G__40712 = arguments.length;
switch (G__40712) {
case 2:
return sablono.core.drop_down40710.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down40710.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down40710.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down40710.call(null,name,options,null);
});

sablono.core.drop_down40710.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down40710.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down40710);
/**
 * Creates a text area element.
 */
sablono.core.text_area40714 = (function sablono$core$text_area40714(var_args){
var G__40716 = arguments.length;
switch (G__40716) {
case 1:
return sablono.core.text_area40714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area40714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area40714.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area40714.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30228__auto__ = value;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area40714.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area40714);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label40718 = (function sablono$core$label40718(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label40718);
/**
 * Creates a submit button.
 */
sablono.core.submit_button40719 = (function sablono$core$submit_button40719(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button40719);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button40720 = (function sablono$core$reset_button40720(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button40720);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to40721 = (function sablono$core$form_to40721(var_args){
var args__31514__auto__ = [];
var len__31507__auto___40728 = arguments.length;
var i__31508__auto___40729 = (0);
while(true){
if((i__31508__auto___40729 < len__31507__auto___40728)){
args__31514__auto__.push((arguments[i__31508__auto___40729]));

var G__40730 = (i__31508__auto___40729 + (1));
i__31508__auto___40729 = G__40730;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to40721.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

sablono.core.form_to40721.cljs$core$IFn$_invoke$arity$variadic = (function (p__40724,body){
var vec__40725 = p__40724;
var method = cljs.core.nth.call(null,vec__40725,(0),null);
var action = cljs.core.nth.call(null,vec__40725,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to40721.cljs$lang$maxFixedArity = (1);

sablono.core.form_to40721.cljs$lang$applyTo = (function (seq40722){
var G__40723 = cljs.core.first.call(null,seq40722);
var seq40722__$1 = cljs.core.next.call(null,seq40722);
return sablono.core.form_to40721.cljs$core$IFn$_invoke$arity$variadic(G__40723,seq40722__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to40721);

//# sourceMappingURL=core.js.map?rel=1512749391295
