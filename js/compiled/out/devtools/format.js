// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30961__auto__ = (((value == null))?null:value);
var m__30962__auto__ = (devtools.format._header[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,value);
} else {
var m__30962__auto____$1 = (devtools.format._header["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30961__auto__ = (((value == null))?null:value);
var m__30962__auto__ = (devtools.format._has_body[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,value);
} else {
var m__30962__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30961__auto__ = (((value == null))?null:value);
var m__30962__auto__ = (devtools.format._body[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,value);
} else {
var m__30962__auto____$1 = (devtools.format._body["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o52672 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52672["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52673 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52673["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52674 = temp__5455__auto____$2;
return (o52674["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o52675 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52675["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52676 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52676["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52677 = temp__5455__auto____$2;
return (o52677["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o52678 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52678["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52679 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52679["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52680 = temp__5455__auto____$2;
return (o52680["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o52681 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52681["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52682 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52682["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52683 = temp__5455__auto____$2;
return (o52683["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o52684 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52684["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52685 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52685["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52686 = temp__5455__auto____$2;
return (o52686["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o52687 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52687["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52688 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52688["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52689 = temp__5455__auto____$2;
return (o52689["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o52690 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52690["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52691 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52691["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52692 = temp__5455__auto____$2;
return (o52692["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52694 = arguments.length;
var i__31508__auto___52695 = (0);
while(true){
if((i__31508__auto___52695 < len__31507__auto___52694)){
args__31514__auto__.push((arguments[i__31508__auto___52695]));

var G__52696 = (i__31508__auto___52695 + (1));
i__31508__auto___52695 = G__52696;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq52693){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52693));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52698 = arguments.length;
var i__31508__auto___52699 = (0);
while(true){
if((i__31508__auto___52699 < len__31507__auto___52698)){
args__31514__auto__.push((arguments[i__31508__auto___52699]));

var G__52700 = (i__31508__auto___52699 + (1));
i__31508__auto___52699 = G__52700;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq52697){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52697));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52702 = arguments.length;
var i__31508__auto___52703 = (0);
while(true){
if((i__31508__auto___52703 < len__31507__auto___52702)){
args__31514__auto__.push((arguments[i__31508__auto___52703]));

var G__52704 = (i__31508__auto___52703 + (1));
i__31508__auto___52703 = G__52704;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq52701){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52701));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52706 = arguments.length;
var i__31508__auto___52707 = (0);
while(true){
if((i__31508__auto___52707 < len__31507__auto___52706)){
args__31514__auto__.push((arguments[i__31508__auto___52707]));

var G__52708 = (i__31508__auto___52707 + (1));
i__31508__auto___52707 = G__52708;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq52705){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52705));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52710 = arguments.length;
var i__31508__auto___52711 = (0);
while(true){
if((i__31508__auto___52711 < len__31507__auto___52710)){
args__31514__auto__.push((arguments[i__31508__auto___52711]));

var G__52712 = (i__31508__auto___52711 + (1));
i__31508__auto___52711 = G__52712;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq52709){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52709));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52714 = arguments.length;
var i__31508__auto___52715 = (0);
while(true){
if((i__31508__auto___52715 < len__31507__auto___52714)){
args__31514__auto__.push((arguments[i__31508__auto___52715]));

var G__52716 = (i__31508__auto___52715 + (1));
i__31508__auto___52715 = G__52716;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq52713){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52713));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52718 = arguments.length;
var i__31508__auto___52719 = (0);
while(true){
if((i__31508__auto___52719 < len__31507__auto___52718)){
args__31514__auto__.push((arguments[i__31508__auto___52719]));

var G__52720 = (i__31508__auto___52719 + (1));
i__31508__auto___52719 = G__52720;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq52717){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52717));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52728 = arguments.length;
var i__31508__auto___52729 = (0);
while(true){
if((i__31508__auto___52729 < len__31507__auto___52728)){
args__31514__auto__.push((arguments[i__31508__auto___52729]));

var G__52730 = (i__31508__auto___52729 + (1));
i__31508__auto___52729 = G__52730;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__52724){
var vec__52725 = p__52724;
var state_override = cljs.core.nth.call(null,vec__52725,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__52725,state_override){
return (function (p1__52721_SHARP_){
return cljs.core.merge.call(null,p1__52721_SHARP_,state_override);
});})(vec__52725,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq52722){
var G__52723 = cljs.core.first.call(null,seq52722);
var seq52722__$1 = cljs.core.next.call(null,seq52722);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__52723,seq52722__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52732 = arguments.length;
var i__31508__auto___52733 = (0);
while(true){
if((i__31508__auto___52733 < len__31507__auto___52732)){
args__31514__auto__.push((arguments[i__31508__auto___52733]));

var G__52734 = (i__31508__auto___52733 + (1));
i__31508__auto___52733 = G__52734;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq52731){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52731));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52737 = arguments.length;
var i__31508__auto___52738 = (0);
while(true){
if((i__31508__auto___52738 < len__31507__auto___52737)){
args__31514__auto__.push((arguments[i__31508__auto___52738]));

var G__52739 = (i__31508__auto___52738 + (1));
i__31508__auto___52738 = G__52739;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq52735){
var G__52736 = cljs.core.first.call(null,seq52735);
var seq52735__$1 = cljs.core.next.call(null,seq52735);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__52736,seq52735__$1);
});


//# sourceMappingURL=format.js.map?rel=1512749431250
