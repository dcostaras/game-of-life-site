// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46759){
var map__46760 = p__46759;
var map__46760__$1 = ((((!((map__46760 == null)))?((((map__46760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46760):map__46760);
var m = map__46760__$1;
var n = cljs.core.get.call(null,map__46760__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46760__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__46762_46784 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46763_46785 = null;
var count__46764_46786 = (0);
var i__46765_46787 = (0);
while(true){
if((i__46765_46787 < count__46764_46786)){
var f_46788 = cljs.core._nth.call(null,chunk__46763_46785,i__46765_46787);
cljs.core.println.call(null,"  ",f_46788);

var G__46789 = seq__46762_46784;
var G__46790 = chunk__46763_46785;
var G__46791 = count__46764_46786;
var G__46792 = (i__46765_46787 + (1));
seq__46762_46784 = G__46789;
chunk__46763_46785 = G__46790;
count__46764_46786 = G__46791;
i__46765_46787 = G__46792;
continue;
} else {
var temp__5457__auto___46793 = cljs.core.seq.call(null,seq__46762_46784);
if(temp__5457__auto___46793){
var seq__46762_46794__$1 = temp__5457__auto___46793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46762_46794__$1)){
var c__31159__auto___46795 = cljs.core.chunk_first.call(null,seq__46762_46794__$1);
var G__46796 = cljs.core.chunk_rest.call(null,seq__46762_46794__$1);
var G__46797 = c__31159__auto___46795;
var G__46798 = cljs.core.count.call(null,c__31159__auto___46795);
var G__46799 = (0);
seq__46762_46784 = G__46796;
chunk__46763_46785 = G__46797;
count__46764_46786 = G__46798;
i__46765_46787 = G__46799;
continue;
} else {
var f_46800 = cljs.core.first.call(null,seq__46762_46794__$1);
cljs.core.println.call(null,"  ",f_46800);

var G__46801 = cljs.core.next.call(null,seq__46762_46794__$1);
var G__46802 = null;
var G__46803 = (0);
var G__46804 = (0);
seq__46762_46784 = G__46801;
chunk__46763_46785 = G__46802;
count__46764_46786 = G__46803;
i__46765_46787 = G__46804;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46805 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30228__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46805);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46805)))?cljs.core.second.call(null,arglists_46805):arglists_46805));
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
var seq__46766_46806 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46767_46807 = null;
var count__46768_46808 = (0);
var i__46769_46809 = (0);
while(true){
if((i__46769_46809 < count__46768_46808)){
var vec__46770_46810 = cljs.core._nth.call(null,chunk__46767_46807,i__46769_46809);
var name_46811 = cljs.core.nth.call(null,vec__46770_46810,(0),null);
var map__46773_46812 = cljs.core.nth.call(null,vec__46770_46810,(1),null);
var map__46773_46813__$1 = ((((!((map__46773_46812 == null)))?((((map__46773_46812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46773_46812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46773_46812):map__46773_46812);
var doc_46814 = cljs.core.get.call(null,map__46773_46813__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46815 = cljs.core.get.call(null,map__46773_46813__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46811);

cljs.core.println.call(null," ",arglists_46815);

if(cljs.core.truth_(doc_46814)){
cljs.core.println.call(null," ",doc_46814);
} else {
}

var G__46816 = seq__46766_46806;
var G__46817 = chunk__46767_46807;
var G__46818 = count__46768_46808;
var G__46819 = (i__46769_46809 + (1));
seq__46766_46806 = G__46816;
chunk__46767_46807 = G__46817;
count__46768_46808 = G__46818;
i__46769_46809 = G__46819;
continue;
} else {
var temp__5457__auto___46820 = cljs.core.seq.call(null,seq__46766_46806);
if(temp__5457__auto___46820){
var seq__46766_46821__$1 = temp__5457__auto___46820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46766_46821__$1)){
var c__31159__auto___46822 = cljs.core.chunk_first.call(null,seq__46766_46821__$1);
var G__46823 = cljs.core.chunk_rest.call(null,seq__46766_46821__$1);
var G__46824 = c__31159__auto___46822;
var G__46825 = cljs.core.count.call(null,c__31159__auto___46822);
var G__46826 = (0);
seq__46766_46806 = G__46823;
chunk__46767_46807 = G__46824;
count__46768_46808 = G__46825;
i__46769_46809 = G__46826;
continue;
} else {
var vec__46775_46827 = cljs.core.first.call(null,seq__46766_46821__$1);
var name_46828 = cljs.core.nth.call(null,vec__46775_46827,(0),null);
var map__46778_46829 = cljs.core.nth.call(null,vec__46775_46827,(1),null);
var map__46778_46830__$1 = ((((!((map__46778_46829 == null)))?((((map__46778_46829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46778_46829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46778_46829):map__46778_46829);
var doc_46831 = cljs.core.get.call(null,map__46778_46830__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46832 = cljs.core.get.call(null,map__46778_46830__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46828);

cljs.core.println.call(null," ",arglists_46832);

if(cljs.core.truth_(doc_46831)){
cljs.core.println.call(null," ",doc_46831);
} else {
}

var G__46833 = cljs.core.next.call(null,seq__46766_46821__$1);
var G__46834 = null;
var G__46835 = (0);
var G__46836 = (0);
seq__46766_46806 = G__46833;
chunk__46767_46807 = G__46834;
count__46768_46808 = G__46835;
i__46769_46809 = G__46836;
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

var seq__46780 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46781 = null;
var count__46782 = (0);
var i__46783 = (0);
while(true){
if((i__46783 < count__46782)){
var role = cljs.core._nth.call(null,chunk__46781,i__46783);
var temp__5457__auto___46837__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46837__$1)){
var spec_46838 = temp__5457__auto___46837__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46838));
} else {
}

var G__46839 = seq__46780;
var G__46840 = chunk__46781;
var G__46841 = count__46782;
var G__46842 = (i__46783 + (1));
seq__46780 = G__46839;
chunk__46781 = G__46840;
count__46782 = G__46841;
i__46783 = G__46842;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__46780);
if(temp__5457__auto____$1){
var seq__46780__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46780__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__46780__$1);
var G__46843 = cljs.core.chunk_rest.call(null,seq__46780__$1);
var G__46844 = c__31159__auto__;
var G__46845 = cljs.core.count.call(null,c__31159__auto__);
var G__46846 = (0);
seq__46780 = G__46843;
chunk__46781 = G__46844;
count__46782 = G__46845;
i__46783 = G__46846;
continue;
} else {
var role = cljs.core.first.call(null,seq__46780__$1);
var temp__5457__auto___46847__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46847__$2)){
var spec_46848 = temp__5457__auto___46847__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46848));
} else {
}

var G__46849 = cljs.core.next.call(null,seq__46780__$1);
var G__46850 = null;
var G__46851 = (0);
var G__46852 = (0);
seq__46780 = G__46849;
chunk__46781 = G__46850;
count__46782 = G__46851;
i__46783 = G__46852;
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

//# sourceMappingURL=repl.js.map?rel=1512749415220
