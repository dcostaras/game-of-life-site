// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33642){
var map__33643 = p__33642;
var map__33643__$1 = ((((!((map__33643 == null)))?((((map__33643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33643):map__33643);
var m = map__33643__$1;
var n = cljs.core.get.call(null,map__33643__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33643__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33645_33667 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33646_33668 = null;
var count__33647_33669 = (0);
var i__33648_33670 = (0);
while(true){
if((i__33648_33670 < count__33647_33669)){
var f_33671 = cljs.core._nth.call(null,chunk__33646_33668,i__33648_33670);
cljs.core.println.call(null,"  ",f_33671);

var G__33672 = seq__33645_33667;
var G__33673 = chunk__33646_33668;
var G__33674 = count__33647_33669;
var G__33675 = (i__33648_33670 + (1));
seq__33645_33667 = G__33672;
chunk__33646_33668 = G__33673;
count__33647_33669 = G__33674;
i__33648_33670 = G__33675;
continue;
} else {
var temp__5457__auto___33676 = cljs.core.seq.call(null,seq__33645_33667);
if(temp__5457__auto___33676){
var seq__33645_33677__$1 = temp__5457__auto___33676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33645_33677__$1)){
var c__31159__auto___33678 = cljs.core.chunk_first.call(null,seq__33645_33677__$1);
var G__33679 = cljs.core.chunk_rest.call(null,seq__33645_33677__$1);
var G__33680 = c__31159__auto___33678;
var G__33681 = cljs.core.count.call(null,c__31159__auto___33678);
var G__33682 = (0);
seq__33645_33667 = G__33679;
chunk__33646_33668 = G__33680;
count__33647_33669 = G__33681;
i__33648_33670 = G__33682;
continue;
} else {
var f_33683 = cljs.core.first.call(null,seq__33645_33677__$1);
cljs.core.println.call(null,"  ",f_33683);

var G__33684 = cljs.core.next.call(null,seq__33645_33677__$1);
var G__33685 = null;
var G__33686 = (0);
var G__33687 = (0);
seq__33645_33667 = G__33684;
chunk__33646_33668 = G__33685;
count__33647_33669 = G__33686;
i__33648_33670 = G__33687;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33688 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30228__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33688);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33688)))?cljs.core.second.call(null,arglists_33688):arglists_33688));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33649_33689 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33650_33690 = null;
var count__33651_33691 = (0);
var i__33652_33692 = (0);
while(true){
if((i__33652_33692 < count__33651_33691)){
var vec__33653_33693 = cljs.core._nth.call(null,chunk__33650_33690,i__33652_33692);
var name_33694 = cljs.core.nth.call(null,vec__33653_33693,(0),null);
var map__33656_33695 = cljs.core.nth.call(null,vec__33653_33693,(1),null);
var map__33656_33696__$1 = ((((!((map__33656_33695 == null)))?((((map__33656_33695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33656_33695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33656_33695):map__33656_33695);
var doc_33697 = cljs.core.get.call(null,map__33656_33696__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33698 = cljs.core.get.call(null,map__33656_33696__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33694);

cljs.core.println.call(null," ",arglists_33698);

if(cljs.core.truth_(doc_33697)){
cljs.core.println.call(null," ",doc_33697);
} else {
}

var G__33699 = seq__33649_33689;
var G__33700 = chunk__33650_33690;
var G__33701 = count__33651_33691;
var G__33702 = (i__33652_33692 + (1));
seq__33649_33689 = G__33699;
chunk__33650_33690 = G__33700;
count__33651_33691 = G__33701;
i__33652_33692 = G__33702;
continue;
} else {
var temp__5457__auto___33703 = cljs.core.seq.call(null,seq__33649_33689);
if(temp__5457__auto___33703){
var seq__33649_33704__$1 = temp__5457__auto___33703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33649_33704__$1)){
var c__31159__auto___33705 = cljs.core.chunk_first.call(null,seq__33649_33704__$1);
var G__33706 = cljs.core.chunk_rest.call(null,seq__33649_33704__$1);
var G__33707 = c__31159__auto___33705;
var G__33708 = cljs.core.count.call(null,c__31159__auto___33705);
var G__33709 = (0);
seq__33649_33689 = G__33706;
chunk__33650_33690 = G__33707;
count__33651_33691 = G__33708;
i__33652_33692 = G__33709;
continue;
} else {
var vec__33658_33710 = cljs.core.first.call(null,seq__33649_33704__$1);
var name_33711 = cljs.core.nth.call(null,vec__33658_33710,(0),null);
var map__33661_33712 = cljs.core.nth.call(null,vec__33658_33710,(1),null);
var map__33661_33713__$1 = ((((!((map__33661_33712 == null)))?((((map__33661_33712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33661_33712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33661_33712):map__33661_33712);
var doc_33714 = cljs.core.get.call(null,map__33661_33713__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33715 = cljs.core.get.call(null,map__33661_33713__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33711);

cljs.core.println.call(null," ",arglists_33715);

if(cljs.core.truth_(doc_33714)){
cljs.core.println.call(null," ",doc_33714);
} else {
}

var G__33716 = cljs.core.next.call(null,seq__33649_33704__$1);
var G__33717 = null;
var G__33718 = (0);
var G__33719 = (0);
seq__33649_33689 = G__33716;
chunk__33650_33690 = G__33717;
count__33651_33691 = G__33718;
i__33652_33692 = G__33719;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__33663 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33664 = null;
var count__33665 = (0);
var i__33666 = (0);
while(true){
if((i__33666 < count__33665)){
var role = cljs.core._nth.call(null,chunk__33664,i__33666);
var temp__5457__auto___33720__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33720__$1)){
var spec_33721 = temp__5457__auto___33720__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33721));
} else {
}

var G__33722 = seq__33663;
var G__33723 = chunk__33664;
var G__33724 = count__33665;
var G__33725 = (i__33666 + (1));
seq__33663 = G__33722;
chunk__33664 = G__33723;
count__33665 = G__33724;
i__33666 = G__33725;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33663);
if(temp__5457__auto____$1){
var seq__33663__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33663__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__33663__$1);
var G__33726 = cljs.core.chunk_rest.call(null,seq__33663__$1);
var G__33727 = c__31159__auto__;
var G__33728 = cljs.core.count.call(null,c__31159__auto__);
var G__33729 = (0);
seq__33663 = G__33726;
chunk__33664 = G__33727;
count__33665 = G__33728;
i__33666 = G__33729;
continue;
} else {
var role = cljs.core.first.call(null,seq__33663__$1);
var temp__5457__auto___33730__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33730__$2)){
var spec_33731 = temp__5457__auto___33730__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33731));
} else {
}

var G__33732 = cljs.core.next.call(null,seq__33663__$1);
var G__33733 = null;
var G__33734 = (0);
var G__33735 = (0);
seq__33663 = G__33732;
chunk__33664 = G__33733;
count__33665 = G__33734;
i__33666 = G__33735;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1512749375940
