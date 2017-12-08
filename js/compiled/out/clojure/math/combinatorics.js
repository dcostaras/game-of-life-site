// Compiled by ClojureScript 1.9.946 {}
goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 * to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__31110__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__51123(s__51124){
return (new cljs.core.LazySeq(null,(function (){
var s__51124__$1 = s__51124;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51124__$1);
if(temp__5457__auto__){
var s__51124__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51124__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51124__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51126 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51125 = (0);
while(true){
if((i__51125 < size__31109__auto__)){
var j = cljs.core._nth.call(null,c__31108__auto__,i__51125);
cljs.core.chunk_append.call(null,b__51126,((j + cnt) + (- (n + (1)))));

var G__51127 = (i__51125 + (1));
i__51125 = G__51127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51126),clojure$math$combinatorics$index_combinations_$_iter__51123.call(null,cljs.core.chunk_rest.call(null,s__51124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51126),null);
}
} else {
var j = cljs.core.first.call(null,s__51124__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__51123.call(null,cljs.core.rest.call(null,s__51124__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})()));
var iter_comb = ((function (c){
return (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,j,(c__$1.call(null,j) - (1)));
if((c__$2.call(null,j) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.call(null,j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__51128 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__51129 = (j__$1 - (1));
c__$3 = G__51128;
j__$1 = G__51129;
continue;
}
break;
}
}
}
});})(c))
;
var step = ((function (c,iter_comb){
return (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons.call(null,cljs.core.rseq.call(null,cljs.core.subvec.call(null,c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){
var next_step = iter_comb.call(null,c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step.call(null,next_step.call(null,(0)),next_step.call(null,(1)));
} else {
return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;
return step.call(null,c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count.call(null,m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = m.call(null,index__$1);
if((quantity_to_distribute <= mi)){
return cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__51130 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__51131 = (index__$1 + (1));
var G__51132 = (already_distributed__$1 + mi);
distribution__$1 = G__51130;
index__$1 = G__51131;
already_distributed__$1 = G__51132;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__51133 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__51133,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__51133,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__51133,(2),null);
if((index < (cljs.core.count.call(null,m) - (1)))){
if(cljs.core._EQ_.call(null,this_bucket,(1))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
}
} else {
if(cljs.core._EQ_.call(null,this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop.call(null,distribution);
while(true){
var vec__51136 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__51136,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__51136,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__51136,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__51139 = distribution__$2;
distribution__$1 = G__51139;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons.call(null,distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5457__auto__ = clojure.math.combinatorics.next_distribution.call(null,m,t,distribution);
if(cljs.core.truth_(temp__5457__auto__)){
var next_step = temp__5457__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step.call(null,next_step);
} else {
return null;
}
}),null,null)));
});
return step.call(null,clojure.math.combinatorics.distribute.call(null,m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var domain = cljs.core.range.call(null,cljs.core.count.call(null,v));
var m = cljs.core.vec.call(null,(function (){var iter__31110__auto__ = ((function (f,v,domain){
return (function clojure$math$combinatorics$multi_comb_$_iter__51140(s__51141){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__51141__$1 = s__51141;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51141__$1);
if(temp__5457__auto__){
var s__51141__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51141__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51141__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51143 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51142 = (0);
while(true){
if((i__51142 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51142);
cljs.core.chunk_append.call(null,b__51143,f.call(null,v.call(null,i)));

var G__51168 = (i__51142 + (1));
i__51142 = G__51168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51143),clojure$math$combinatorics$multi_comb_$_iter__51140.call(null,cljs.core.chunk_rest.call(null,s__51141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51143),null);
}
} else {
var i = cljs.core.first.call(null,s__51141__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__51140.call(null,cljs.core.rest.call(null,s__51141__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain))
,null,null));
});})(f,v,domain))
;
return iter__31110__auto__.call(null,domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions.call(null,m,t);
var iter__31110__auto__ = ((function (f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__51144(s__51145){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__51145__$1 = s__51145;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51145__$1);
if(temp__5457__auto__){
var s__51145__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51145__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51145__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51147 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51146 = (0);
while(true){
if((i__51146 < size__31109__auto__)){
var q = cljs.core._nth.call(null,c__31108__auto__,i__51146);
cljs.core.chunk_append.call(null,b__51147,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (i__51146,q,c__31108__auto__,size__31109__auto__,b__51147,s__51145__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__51144_$_iter__51148(s__51149){
return (new cljs.core.LazySeq(null,((function (i__51146,q,c__31108__auto__,size__31109__auto__,b__51147,s__51145__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__51149__$1 = s__51149;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51149__$1);
if(temp__5457__auto____$1){
var s__51149__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51149__$2)){
var c__31108__auto____$1 = cljs.core.chunk_first.call(null,s__51149__$2);
var size__31109__auto____$1 = cljs.core.count.call(null,c__31108__auto____$1);
var b__51151 = cljs.core.chunk_buffer.call(null,size__31109__auto____$1);
if((function (){var i__51150 = (0);
while(true){
if((i__51150 < size__31109__auto____$1)){
var vec__51152 = cljs.core._nth.call(null,c__31108__auto____$1,i__51150);
var index = cljs.core.nth.call(null,vec__51152,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__51152,(1),null);
var _ = cljs.core.nth.call(null,vec__51152,(2),null);
cljs.core.chunk_append.call(null,b__51151,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__51169 = (i__51150 + (1));
i__51150 = G__51169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51151),clojure$math$combinatorics$multi_comb_$_iter__51144_$_iter__51148.call(null,cljs.core.chunk_rest.call(null,s__51149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51151),null);
}
} else {
var vec__51155 = cljs.core.first.call(null,s__51149__$2);
var index = cljs.core.nth.call(null,vec__51155,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__51155,(1),null);
var _ = cljs.core.nth.call(null,vec__51155,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__51144_$_iter__51148.call(null,cljs.core.rest.call(null,s__51149__$2)));
}
} else {
return null;
}
break;
}
});})(i__51146,q,c__31108__auto__,size__31109__auto__,b__51147,s__51145__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(i__51146,q,c__31108__auto__,size__31109__auto__,b__51147,s__51145__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__31110__auto__.call(null,q);
})()));

var G__51170 = (i__51146 + (1));
i__51146 = G__51170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51147),clojure$math$combinatorics$multi_comb_$_iter__51144.call(null,cljs.core.chunk_rest.call(null,s__51145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51147),null);
}
} else {
var q = cljs.core.first.call(null,s__51145__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (q,s__51145__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__51144_$_iter__51158(s__51159){
return (new cljs.core.LazySeq(null,((function (q,s__51145__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__51159__$1 = s__51159;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51159__$1);
if(temp__5457__auto____$1){
var s__51159__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51159__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51159__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51161 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51160 = (0);
while(true){
if((i__51160 < size__31109__auto__)){
var vec__51162 = cljs.core._nth.call(null,c__31108__auto__,i__51160);
var index = cljs.core.nth.call(null,vec__51162,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__51162,(1),null);
var _ = cljs.core.nth.call(null,vec__51162,(2),null);
cljs.core.chunk_append.call(null,b__51161,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__51171 = (i__51160 + (1));
i__51160 = G__51171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51161),clojure$math$combinatorics$multi_comb_$_iter__51144_$_iter__51158.call(null,cljs.core.chunk_rest.call(null,s__51159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51161),null);
}
} else {
var vec__51165 = cljs.core.first.call(null,s__51159__$2);
var index = cljs.core.nth.call(null,vec__51165,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__51165,(1),null);
var _ = cljs.core.nth.call(null,vec__51165,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__51144_$_iter__51158.call(null,cljs.core.rest.call(null,s__51159__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__51145__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__51145__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__31110__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__51144.call(null,cljs.core.rest.call(null,s__51145__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain,m,qs))
,null,null));
});})(f,v,domain,m,qs))
;
return iter__31110__auto__.call(null,qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));
if((t === (0))){
var x__31182__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
} else {
var cnt = cljs.core.count.call(null,items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.call(null,t,(1))){
var iter__31110__auto__ = ((function (cnt,v_items){
return (function clojure$math$combinatorics$combinations_$_iter__51173(s__51174){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__51174__$1 = s__51174;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51174__$1);
if(temp__5457__auto__){
var s__51174__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51174__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51174__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51176 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51175 = (0);
while(true){
if((i__51175 < size__31109__auto__)){
var item = cljs.core._nth.call(null,c__31108__auto__,i__51175);
cljs.core.chunk_append.call(null,b__51176,(function (){var x__31182__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})());

var G__51177 = (i__51175 + (1));
i__51175 = G__51177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51176),clojure$math$combinatorics$combinations_$_iter__51173.call(null,cljs.core.chunk_rest.call(null,s__51174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51176),null);
}
} else {
var item = cljs.core.first.call(null,s__51174__$2);
return cljs.core.cons.call(null,(function (){var x__31182__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),clojure$math$combinatorics$combinations_$_iter__51173.call(null,cljs.core.rest.call(null,s__51174__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,v_items))
,null,null));
});})(cnt,v_items))
;
return iter__31110__auto__.call(null,cljs.core.distinct.call(null,items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
if(cljs.core._EQ_.call(null,t,cnt)){
var x__31182__auto__ = cljs.core.seq.call(null,items);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
} else {
return cljs.core.map.call(null,((function (cnt,v_items){
return (function (p1__51172_SHARP_){
return cljs.core.map.call(null,v_items,p1__51172_SHARP_);
});})(cnt,v_items))
,clojure.math.combinatorics.index_combinations.call(null,t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb.call(null,items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),clojure.math.combinatorics.unchunk.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return cljs.core.mapcat.call(null,(function (n){
return clojure.math.combinatorics.combinations.call(null,items,n);
}),clojure.math.combinatorics.unchunk.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__31514__auto__ = [];
var len__31507__auto___51179 = arguments.length;
var i__31508__auto___51180 = (0);
while(true){
if((i__31508__auto___51180 < len__31507__auto___51179)){
args__31514__auto__.push((arguments[i__31508__auto___51180]));

var G__51181 = (i__31508__auto___51180 + (1));
i__31508__auto___51180 = G__51181;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function clojure$math$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__51182 = (i - (1));
var G__51183 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__51182;
v_seqs__$2 = G__51183;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return clojure$math$combinatorics$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq51178){
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51178));
});

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.call(null,clojure.math.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count.call(null,v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
if((v.call(null,i) < v.call(null,(i + (1))))){
return i;
} else {
var G__51184 = (i - (1));
i = G__51184;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = v.call(null,j);
var l = (function (){var i = (len - (1));
while(true){
if((vj < v.call(null,i))){
return i;
} else {
var G__51185 = (i - (1));
i = G__51185;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__51186 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__51187 = (k + (1));
var G__51188 = (l__$1 - (1));
v__$1 = G__51186;
k = G__51187;
l__$1 = G__51188;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.iter_perm.call(null,v));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));
if((cljs.core.count.call(null,vec_sorted) === (0))){
var x__31182__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__30216__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);
if(and__30216__auto__){
var or__30228__auto__ = cljs.core.empty_QMARK_.call(null,s);
if(or__30228__auto__){
return or__30228__auto__;
} else {
return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else {
return and__30216__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (f,v){
return (function clojure$math$combinatorics$multi_perm_$_iter__51189(s__51190){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__51190__$1 = s__51190;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51190__$1);
if(temp__5457__auto__){
var s__51190__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51190__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51190__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51192 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51191 = (0);
while(true){
if((i__51191 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51191);
cljs.core.chunk_append.call(null,b__51192,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__51193 = (i__51191 + (1));
i__51191 = G__51193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51192),clojure$math$combinatorics$multi_perm_$_iter__51189.call(null,cljs.core.chunk_rest.call(null,s__51190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51192),null);
}
} else {
var i = cljs.core.first.call(null,s__51190__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__51189.call(null,cljs.core.rest.call(null,s__51190__$2)));
}
} else {
return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.lex_permutations.call(null,indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 * (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
return clojure.math.combinatorics.lex_permutations.call(null,items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
return cljs.core.map.call(null,((function (v){
return (function (p1__51194_SHARP_){
return cljs.core.map.call(null,v,p1__51194_SHARP_);
});})(v))
,clojure.math.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else {
return clojure.math.combinatorics.multi_perm.call(null,items);

}
}
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__51195 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__51196 = (n__$1 - (1));
acc = G__51195;
n__$1 = G__51196;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot.call(null,n__$1,divisor);
var r = cljs.core.rem.call(null,n__$1,divisor);
var G__51197 = q;
var G__51198 = cljs.core.cons.call(null,r,digits);
var G__51199 = (divisor + (1));
n__$1 = G__51197;
digits = G__51198;
divisor = G__51199;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,acc,cljs.core.rest.call(null,l__$1));
} else {
var G__51200 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__51201 = cljs.core.rest.call(null,l__$1);
var G__51202 = (n__$1 - (1));
acc = G__51200;
l__$1 = G__51201;
n__$1 = G__51202;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)),"permutations.")),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count.call(null,l);
var fact_nums = clojure.math.combinatorics.factorial_numbers.call(null,n);
var indices = cljs.core.concat.call(null,cljs.core.repeat.call(null,(length - cljs.core.count.call(null,fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,l__$1,i);
var G__51203 = cljs.core.rest.call(null,indices);
var G__51204 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__51205 = cljs.core.conj.call(null,perm,item);
indices = G__51203;
l__$1 = G__51204;
perm = G__51205;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals.call(null,freqs);
return cljs.core.reduce.call(null,cljs.core._SLASH_,clojure.math.combinatorics.factorial.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,counts)),cljs.core.map.call(null,clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,l))){
return clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.frequencies.call(null,l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__31110__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__51206(s__51207){
return (new cljs.core.LazySeq(null,(function (){
var s__51207__$1 = s__51207;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51207__$1);
if(temp__5457__auto__){
var s__51207__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51207__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51207__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51209 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51208 = (0);
while(true){
if((i__51208 < size__31109__auto__)){
var vec__51210 = cljs.core._nth.call(null,c__31108__auto__,i__51208);
var k = cljs.core.nth.call(null,vec__51210,(0),null);
var v = cljs.core.nth.call(null,vec__51210,(1),null);
cljs.core.chunk_append.call(null,b__51209,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__51216 = (i__51208 + (1));
i__51208 = G__51216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51209),clojure$math$combinatorics$initial_perm_numbers_$_iter__51206.call(null,cljs.core.chunk_rest.call(null,s__51207__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51209),null);
}
} else {
var vec__51213 = cljs.core.first.call(null,s__51207__$2);
var k = cljs.core.nth.call(null,vec__51213,(0),null);
var v = cljs.core.nth.call(null,vec__51213,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__51206.call(null,cljs.core.rest.call(null,s__51207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if(((cljs.core.first.call(null,perm_numbers__$1) <= n)) && ((n < cljs.core.second.call(null,perm_numbers__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first.call(null,perm_numbers__$1))], null);
} else {
var G__51217 = cljs.core.rest.call(null,perm_numbers__$1);
var G__51218 = (index + (1));
perm_numbers__$1 = G__51217;
index = G__51218;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.call(null,(1),m.call(null,k))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,digits,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,freqs__$1)),(0)));
} else {
var vec__51219 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__51219,(0),null);
var remainder = cljs.core.nth.call(null,vec__51219,(1),null);
var G__51222 = remainder;
var G__51223 = cljs.core.conj.call(null,digits,index);
var G__51224 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__51222;
digits = G__51223;
freqs__$1 = G__51224;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations.call(null,l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_permutations.call(null,l),"permutations.")),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates.call(null,n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs),i);
var G__51225 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__51226 = cljs.core.rest.call(null,indices);
var G__51227 = cljs.core.conj.call(null,perm,item);
freqs = G__51225;
indices = G__51226;
perm = G__51227;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.vec.call(null,cljs.core.map.call(null,v,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$nth_permutation_$_iter__51228(s__51229){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__51229__$1 = s__51229;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51229__$1);
if(temp__5457__auto__){
var s__51229__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51229__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51229__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51231 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51230 = (0);
while(true){
if((i__51230 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51230);
cljs.core.chunk_append.call(null,b__51231,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__51232 = (i__51230 + (1));
i__51230 = G__51232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51231),clojure$math$combinatorics$nth_permutation_$_iter__51228.call(null,cljs.core.chunk_rest.call(null,s__51229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51231),null);
}
} else {
var i = cljs.core.first.call(null,s__51229__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__51228.call(null,cljs.core.rest.call(null,s__51229__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations.call(null,items);
} else {
if(cljs.core._EQ_.call(null,n,clojure.math.combinatorics.count_permutations.call(null,items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$drop_permutations_$_iter__51233(s__51234){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__51234__$1 = s__51234;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51234__$1);
if(temp__5457__auto__){
var s__51234__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51234__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51234__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51236 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51235 = (0);
while(true){
if((i__51235 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51235);
cljs.core.chunk_append.call(null,b__51236,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__51237 = (i__51235 + (1));
i__51235 = G__51237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51236),clojure$math$combinatorics$drop_permutations_$_iter__51233.call(null,cljs.core.chunk_rest.call(null,s__51234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51236),null);
}
} else {
var i = cljs.core.first.call(null,s__51234__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__51233.call(null,cljs.core.rest.call(null,s__51234__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,k,(1))){
return n;
} else {
if((k > cljs.core.quot.call(null,n,(2)))){
var G__51238 = n;
var G__51239 = (n - k);
n = G__51238;
k = G__51239;
continue;
} else {
return (cljs.core.apply.call(null,clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.call(null,((n - k) + (1)),(n + (1)))) / cljs.core.apply.call(null,clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.call(null,(1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals.call(null,freqs);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return cljs.core.count.call(null,freqs);
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.call(null,t,sum)){
return (1);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs)));
return clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1))),clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs))),t));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies.call(null,items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies51240 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies51240;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__51241 = n__$1;
var G__51242 = y;
var G__51243 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__51241;
y = G__51242;
z = G__51243;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__51244 = n__$1;
var G__51245 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__51246 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__51244;
y = G__51245;
z = G__51246;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_.call(null,items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.expt_int.call(null,(2),cljs.core.count.call(null,items));
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__31110__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__51247(s__51248){
return (new cljs.core.LazySeq(null,(function (){
var s__51248__$1 = s__51248;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51248__$1);
if(temp__5457__auto__){
var s__51248__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51248__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51248__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51250 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51249 = (0);
while(true){
if((i__51249 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51249);
cljs.core.chunk_append.call(null,b__51250,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__51251 = (i__51249 + (1));
i__51249 = G__51251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51250),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__51247.call(null,cljs.core.chunk_rest.call(null,s__51248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51250),null);
}
} else {
var i = cljs.core.first.call(null,s__51248__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__51247.call(null,cljs.core.rest.call(null,s__51248__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,cljs.core.range.call(null,(0),(cljs.core.count.call(null,items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies51252 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies51252;
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,items__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k.call(null,(cljs.core.count.call(null,items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__51253 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__51254 = cljs.core.rest.call(null,items__$1);
var G__51255 = (t__$1 - (1));
var G__51256 = n__$1;
comb = G__51253;
items__$1 = G__51254;
t__$1 = G__51255;
n__$1 = G__51256;
continue;
} else {
var G__51257 = comb;
var G__51258 = cljs.core.rest.call(null,items__$1);
var G__51259 = t__$1;
var G__51260 = (n__$1 - dc_dt);
comb = G__51257;
items__$1 = G__51258;
t__$1 = G__51259;
n__$1 = G__51260;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,freqs__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__51261(s__51262){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__51262__$1 = s__51262;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51262__$1);
if(temp__5457__auto__){
var s__51262__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51262__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51262__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51264 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51263 = (0);
while(true){
if((i__51263 < size__31109__auto__)){
var vec__51265 = cljs.core._nth.call(null,c__31108__auto__,i__51263);
var k = cljs.core.nth.call(null,vec__51265,(0),null);
var v = cljs.core.nth.call(null,vec__51265,(1),null);
cljs.core.chunk_append.call(null,b__51264,cljs.core.repeat.call(null,v,k));

var G__51271 = (i__51263 + (1));
i__51263 = G__51271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51264),clojure$math$combinatorics$nth_combination_freqs_$_iter__51261.call(null,cljs.core.chunk_rest.call(null,s__51262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51264),null);
}
} else {
var vec__51268 = cljs.core.first.call(null,s__51262__$2);
var k = cljs.core.nth.call(null,vec__51268,(0),null);
var v = cljs.core.nth.call(null,vec__51268,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__51261.call(null,cljs.core.rest.call(null,s__51262__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__31110__auto__.call(null,freqs__$1);
})())));
} else {
var first_key = cljs.core.first.call(null,cljs.core.keys.call(null,freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key.call(null,freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__51272 = cljs.core.conj.call(null,comb,first_key);
var G__51273 = remove_one_key;
var G__51274 = (t__$1 - (1));
var G__51275 = n__$1;
comb = G__51272;
freqs__$1 = G__51273;
t__$1 = G__51274;
n__$1 = G__51275;
continue;
} else {
var G__51276 = comb;
var G__51277 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__51278 = t__$1;
var G__51279 = (n__$1 - dc_dt);
comb = G__51276;
freqs__$1 = G__51277;
t__$1 = G__51278;
n__$1 = G__51279;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations.call(null,items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t),"combinations.")),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_combination_distinct.call(null,items,t,n);
} else {
var count_combinations_from_frequencies51280 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (v,f,count_combinations_from_frequencies51280){
return (function clojure$math$combinatorics$nth_combination_$_iter__51281(s__51282){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies51280){
return (function (){
var s__51282__$1 = s__51282;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51282__$1);
if(temp__5457__auto__){
var s__51282__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51282__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51282__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51284 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51283 = (0);
while(true){
if((i__51283 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51283);
cljs.core.chunk_append.call(null,b__51284,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__51285 = (i__51283 + (1));
i__51283 = G__51285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51284),clojure$math$combinatorics$nth_combination_$_iter__51281.call(null,cljs.core.chunk_rest.call(null,s__51282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51284),null);
}
} else {
var i = cljs.core.first.call(null,s__51282__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__51281.call(null,cljs.core.rest.call(null,s__51282__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies51280))
,null,null));
});})(v,f,count_combinations_from_frequencies51280))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies51280;
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets.call(null,items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_subsets.call(null,items),"subsets.")),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations.call(null,items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination.call(null,items,size,n__$1);
} else {
var G__51286 = (size + (1));
var G__51287 = (n__$1 - num_combinations);
size = G__51286;
n__$1 = G__51287;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq.call(null,l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,l__$1))){
return n;
} else {
var G__51288 = cljs.core.rest.call(null,l__$1);
var G__51289 = (n + (1));
l__$1 = G__51288;
n = G__51289;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count.call(null,l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__51290 = cljs.core.rest.call(null,l__$1);
var G__51291 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__51292 = (n - (1));
l__$1 = G__51290;
index = G__51291;
n = G__51292;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l__$1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__51298 = cljs.core.rest.call(null,l__$1);
var G__51299 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__31110__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__51294(s__51295){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__51295__$1 = s__51295;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51295__$1);
if(temp__5457__auto__){
var s__51295__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51295__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51295__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51297 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51296 = (0);
while(true){
if((i__51296 < size__31109__auto__)){
var k = cljs.core._nth.call(null,c__31108__auto__,i__51296);
cljs.core.chunk_append.call(null,b__51297,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__51301 = (i__51296 + (1));
i__51296 = G__51301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51297),clojure$math$combinatorics$permutation_index_duplicates_$_iter__51294.call(null,cljs.core.chunk_rest.call(null,s__51295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51297),null);
}
} else {
var k = cljs.core.first.call(null,s__51295__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__51294.call(null,cljs.core.rest.call(null,s__51295__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__31110__auto__.call(null,cljs.core.take_while.call(null,((function (l__$1,index,freqs,iter__31110__auto__){
return (function (p1__51293_SHARP_){
return (cljs.core.compare.call(null,p1__51293_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__31110__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__51300 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__51298;
index = G__51299;
freqs = G__51300;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.permutation_index_distinct.call(null,items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates.call(null,items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = vec.call(null,index);
return cljs.core.assoc.call(null,vec,index,f.call(null,item));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec.call(null,(function (){var iter__31110__auto__ = (function clojure$math$combinatorics$init_$_iter__51302(s__51303){
return (new cljs.core.LazySeq(null,(function (){
var s__51303__$1 = s__51303;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51303__$1);
if(temp__5457__auto__){
var s__51303__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51303__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51303__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51305 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51304 = (0);
while(true){
if((i__51304 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51304);
cljs.core.chunk_append.call(null,b__51305,(function (){var x__30580__auto__ = (0);
var y__30581__auto__ = (i - ((n - s) - (-1)));
return ((x__30580__auto__ > y__30581__auto__) ? x__30580__auto__ : y__30581__auto__);
})());

var G__51306 = (i__51304 + (1));
i__51304 = G__51306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51305),clojure$math$combinatorics$init_$_iter__51302.call(null,cljs.core.chunk_rest.call(null,s__51303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51305),null);
}
} else {
var i = cljs.core.first.call(null,s__51303__$2);
return cljs.core.cons.call(null,(function (){var x__30580__auto__ = (0);
var y__30581__auto__ = (i - ((n - s) - (-1)));
return ((x__30580__auto__ > y__30581__auto__) ? x__30580__auto__ : y__30581__auto__);
})(),clojure$math$combinatorics$init_$_iter__51302.call(null,cljs.core.rest.call(null,s__51303__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31110__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__51308 = arguments.length;
switch (G__51308) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(1))),r,s);
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__30216__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));
if(and__30216__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek.call(null,a) < (r - (1)));
} else {
return true;
}
} else {
return and__30216__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__30216__auto__ = (a.call(null,j) < b.call(null,j));
if(and__30216__auto__){
var and__30216__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);
if(and__30216__auto____$1){
if(cljs.core.truth_(s)){
return (((s - b.call(null,j)) - clojure.math.combinatorics.reify_bool.call(null,((a.call(null,j) + (1)) === b.call(null,j)))) <= (n - j));
} else {
return true;
}
} else {
return and__30216__auto____$1;
}
} else {
return and__30216__auto__;
}
})()){
return j;
} else {
var G__51313 = (j - (1));
j = G__51313;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update.call(null,a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j))))):null);
var vec__51309 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = (b__$1.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,(b__$1.call(null,j) === a__$2.call(null,j))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__30216__auto__ = s;
if(cljs.core.truth_(and__30216__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__30216__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__51314 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__51315 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__51316 = (i + (1));
var G__51317 = (function (){var x__30580__auto__ = current_max;
var y__30581__auto__ = (new_a_i + (1));
return ((x__30580__auto__ > y__30581__auto__) ? x__30580__auto__ : y__30581__auto__);
})();
a__$2 = G__51314;
b__$1 = G__51315;
i = G__51316;
current_max = G__51317;
continue;
} else {
var G__51318 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__51319 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__51320 = (i + (1));
var G__51321 = current_max;
a__$2 = G__51318;
b__$1 = G__51319;
i = G__51320;
current_max = G__51321;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__51309,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__51309,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__31514__auto__ = [];
var len__31507__auto___51331 = arguments.length;
var i__31508__auto___51332 = (0);
while(true){
if((i__31508__auto___51332 < len__31507__auto___51331)){
args__31514__auto__.push((arguments[i__31508__auto___51332]));

var G__51333 = (i__31508__auto___51332 + (1));
i__31508__auto___51332 = G__51333;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__51324){
var map__51325 = p__51324;
var map__51325__$1 = ((((!((map__51325 == null)))?((((map__51325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51325):map__51325);
var from = cljs.core.get.call(null,map__51325__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__51325__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,N,(0))){
if((((function (){var or__30228__auto__ = from;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__30228__auto__ = to;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__30216__auto__ = from;
if(cljs.core.truth_(and__30216__auto__)){
return (from <= (1));
} else {
return and__30216__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__30216__auto__ = to;
if(cljs.core.truth_(and__30216__auto__)){
return (to >= N);
} else {
return and__30216__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__30228__auto__ = from__$1;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__30228__auto__ = from__$1;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (1);
}
})() <= (function (){var or__30228__auto__ = to__$1;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return N;
}
})())) && (((function (){var or__30228__auto__ = to__$1;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.call(null,to__$1,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31182__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31182__auto__ = cljs.core.range.call(null,N);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})())));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);
var iter__31110__auto__ = ((function (growth_strings,from__$1,to__$1,map__51325,map__51325__$1,from,to){
return (function clojure$math$combinatorics$iter__51327(s__51328){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__51325,map__51325__$1,from,to){
return (function (){
var s__51328__$1 = s__51328;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51328__$1);
if(temp__5457__auto__){
var s__51328__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51328__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51328__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51330 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51329 = (0);
while(true){
if((i__51329 < size__31109__auto__)){
var growth_string = cljs.core._nth.call(null,c__31108__auto__,i__51329);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__51330,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__51334 = (i__51329 + (1));
i__51329 = G__51334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51330),clojure$math$combinatorics$iter__51327.call(null,cljs.core.chunk_rest.call(null,s__51328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51330),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__51328__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__51327.call(null,cljs.core.rest.call(null,s__51328__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__51325,map__51325__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__51325,map__51325__$1,from,to))
;
return iter__31110__auto__.call(null,growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq51322){
var G__51323 = cljs.core.first.call(null,seq51322);
var seq51322__$1 = cljs.core.next.call(null,seq51322);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__51323,seq51322__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__31514__auto__ = [];
var len__31507__auto___51349 = arguments.length;
var i__31508__auto___51350 = (0);
while(true){
if((i__31508__auto___51350 < len__31507__auto___51349)){
args__31514__auto__.push((arguments[i__31508__auto___51350]));

var G__51351 = (i__31508__auto___51350 + (1));
i__31508__auto___51350 = G__51351;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec.call(null,items);
var N = cljs.core.count.call(null,items__$1);
var lex = cljs.core.apply.call(null,clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__31110__auto__ = ((function (items__$1,N,lex){
return (function clojure$math$combinatorics$iter__51337(s__51338){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__51338__$1 = s__51338;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51338__$1);
if(temp__5457__auto__){
var s__51338__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51338__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51338__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51340 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51339 = (0);
while(true){
if((i__51339 < size__31109__auto__)){
var parts = cljs.core._nth.call(null,c__31108__auto__,i__51339);
cljs.core.chunk_append.call(null,b__51340,(function (){var iter__31110__auto__ = ((function (i__51339,parts,c__31108__auto__,size__31109__auto__,b__51340,s__51338__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__51337_$_iter__51341(s__51342){
return (new cljs.core.LazySeq(null,((function (i__51339,parts,c__31108__auto__,size__31109__auto__,b__51340,s__51338__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__51342__$1 = s__51342;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51342__$1);
if(temp__5457__auto____$1){
var s__51342__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51342__$2)){
var c__31108__auto____$1 = cljs.core.chunk_first.call(null,s__51342__$2);
var size__31109__auto____$1 = cljs.core.count.call(null,c__31108__auto____$1);
var b__51344 = cljs.core.chunk_buffer.call(null,size__31109__auto____$1);
if((function (){var i__51343 = (0);
while(true){
if((i__51343 < size__31109__auto____$1)){
var part = cljs.core._nth.call(null,c__31108__auto____$1,i__51343);
cljs.core.chunk_append.call(null,b__51344,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__51343,i__51339,part,c__31108__auto____$1,size__31109__auto____$1,b__51344,s__51342__$2,temp__5457__auto____$1,parts,c__31108__auto__,size__31109__auto__,b__51340,s__51338__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__51343,i__51339,part,c__31108__auto____$1,size__31109__auto____$1,b__51344,s__51342__$2,temp__5457__auto____$1,parts,c__31108__auto__,size__31109__auto__,b__51340,s__51338__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__51352 = (i__51343 + (1));
i__51343 = G__51352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51344),clojure$math$combinatorics$iter__51337_$_iter__51341.call(null,cljs.core.chunk_rest.call(null,s__51342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51344),null);
}
} else {
var part = cljs.core.first.call(null,s__51342__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__51339,part,s__51342__$2,temp__5457__auto____$1,parts,c__31108__auto__,size__31109__auto__,b__51340,s__51338__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__51339,part,s__51342__$2,temp__5457__auto____$1,parts,c__31108__auto__,size__31109__auto__,b__51340,s__51338__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__51337_$_iter__51341.call(null,cljs.core.rest.call(null,s__51342__$2)));
}
} else {
return null;
}
break;
}
});})(i__51339,parts,c__31108__auto__,size__31109__auto__,b__51340,s__51338__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(i__51339,parts,c__31108__auto__,size__31109__auto__,b__51340,s__51338__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__31110__auto__.call(null,parts);
})());

var G__51353 = (i__51339 + (1));
i__51339 = G__51353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51340),clojure$math$combinatorics$iter__51337.call(null,cljs.core.chunk_rest.call(null,s__51338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51340),null);
}
} else {
var parts = cljs.core.first.call(null,s__51338__$2);
return cljs.core.cons.call(null,(function (){var iter__31110__auto__ = ((function (parts,s__51338__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__51337_$_iter__51345(s__51346){
return (new cljs.core.LazySeq(null,((function (parts,s__51338__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__51346__$1 = s__51346;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51346__$1);
if(temp__5457__auto____$1){
var s__51346__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51346__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51346__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51348 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51347 = (0);
while(true){
if((i__51347 < size__31109__auto__)){
var part = cljs.core._nth.call(null,c__31108__auto__,i__51347);
cljs.core.chunk_append.call(null,b__51348,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__51347,part,c__31108__auto__,size__31109__auto__,b__51348,s__51346__$2,temp__5457__auto____$1,parts,s__51338__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__51347,part,c__31108__auto__,size__31109__auto__,b__51348,s__51346__$2,temp__5457__auto____$1,parts,s__51338__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__51354 = (i__51347 + (1));
i__51347 = G__51354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51348),clojure$math$combinatorics$iter__51337_$_iter__51345.call(null,cljs.core.chunk_rest.call(null,s__51346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51348),null);
}
} else {
var part = cljs.core.first.call(null,s__51346__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__51346__$2,temp__5457__auto____$1,parts,s__51338__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__51346__$2,temp__5457__auto____$1,parts,s__51338__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__51337_$_iter__51345.call(null,cljs.core.rest.call(null,s__51346__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__51338__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__51338__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__31110__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__51337.call(null,cljs.core.rest.call(null,s__51338__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;
return iter__31110__auto__.call(null,lex);
});

clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq51335){
var G__51336 = cljs.core.first.call(null,seq51335);
var seq51335__$1 = cljs.core.next.call(null,seq51335);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__51336,seq51335__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__51356 = arguments.length;
switch (G__51356) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));
var m = cljs.core.count.call(null,multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__51357 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__51376 = (j + (1));
var G__51377 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__51378 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__51379 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__51376;
c__$1 = G__51377;
u__$1 = G__51378;
v__$1 = G__51379;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__51357,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__51357,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__51357,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__51360 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));
if(cljs.core._EQ_.call(null,u__$2.call(null,k),(0))){
var G__51380 = (j + (1));
var G__51381 = k;
var G__51382 = true;
var G__51383 = u__$2;
var G__51384 = v__$1;
var G__51385 = c__$1;
j = G__51380;
k = G__51381;
x = G__51382;
u__$1 = G__51383;
v__$1 = G__51384;
c__$1 = G__51385;
continue;
} else {
if(!(x)){
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__30587__auto__ = v__$1.call(null,j);
var y__30588__auto__ = u__$2.call(null,k);
return ((x__30587__auto__ < y__30588__auto__) ? x__30587__auto__ : y__30588__auto__);
})());
var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__51386 = j__$1;
var G__51387 = k__$1;
var G__51388 = x__$1;
var G__51389 = u__$2;
var G__51390 = v__$2;
var G__51391 = c__$2;
j = G__51386;
k = G__51387;
x = G__51388;
u__$1 = G__51389;
v__$1 = G__51390;
c__$1 = G__51391;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__51392 = j__$1;
var G__51393 = k__$1;
var G__51394 = x;
var G__51395 = u__$2;
var G__51396 = v__$2;
var G__51397 = c__$2;
j = G__51392;
k = G__51393;
x = G__51394;
u__$1 = G__51395;
v__$1 = G__51396;
c__$1 = G__51397;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__51360,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__51360,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__51360,(2),null);
var j = cljs.core.nth.call(null,vec__51360,(3),null);
var k = cljs.core.nth.call(null,vec__51360,(4),null);
if(cljs.core.truth_((function (){var and__30216__auto__ = r;
if(cljs.core.truth_(and__30216__auto__)){
return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1))));
} else {
return and__30216__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if(cljs.core.truth_((function (){var and__30216__auto__ = s;
if(cljs.core.truth_(and__30216__auto__)){
return ((k <= b)) && (((l + (1)) < s));
} else {
return and__30216__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);
var G__51398 = n;
var G__51399 = m;
var G__51400 = f__$1;
var G__51401 = c__$1;
var G__51402 = u__$1;
var G__51403 = v__$1;
var G__51404 = a__$1;
var G__51405 = b__$1;
var G__51406 = l__$1;
var G__51407 = r;
var G__51408 = s;
n = G__51398;
m = G__51399;
f = G__51400;
c = G__51401;
u = G__51402;
v = G__51403;
a = G__51404;
b = G__51405;
l = G__51406;
r = G__51407;
s = G__51408;
continue;
} else {
var part = (function (){var iter__31110__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__51360,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__51363(s__51364){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__51360,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__51364__$1 = s__51364;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51364__$1);
if(temp__5457__auto__){
var s__51364__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51364__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51364__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51366 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51365 = (0);
while(true){
if((i__51365 < size__31109__auto__)){
var y = cljs.core._nth.call(null,c__31108__auto__,i__51365);
cljs.core.chunk_append.call(null,b__51366,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__31110__auto__ = ((function (i__51365,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__31108__auto__,size__31109__auto__,b__51366,s__51364__$2,temp__5457__auto__,vec__51360,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__51363_$_iter__51367(s__51368){
return (new cljs.core.LazySeq(null,((function (i__51365,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__31108__auto__,size__31109__auto__,b__51366,s__51364__$2,temp__5457__auto__,vec__51360,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__51368__$1 = s__51368;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51368__$1);
if(temp__5457__auto____$1){
var s__51368__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51368__$2)){
var c__31108__auto____$1 = cljs.core.chunk_first.call(null,s__51368__$2);
var size__31109__auto____$1 = cljs.core.count.call(null,c__31108__auto____$1);
var b__51370 = cljs.core.chunk_buffer.call(null,size__31109__auto____$1);
if((function (){var i__51369 = (0);
while(true){
if((i__51369 < size__31109__auto____$1)){
var z = cljs.core._nth.call(null,c__31108__auto____$1,i__51369);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__51370,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__51409 = (i__51369 + (1));
i__51369 = G__51409;
continue;
} else {
var G__51410 = (i__51369 + (1));
i__51369 = G__51410;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51370),clojure$math$combinatorics$iter__51363_$_iter__51367.call(null,cljs.core.chunk_rest.call(null,s__51368__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51370),null);
}
} else {
var z = cljs.core.first.call(null,s__51368__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__51363_$_iter__51367.call(null,cljs.core.rest.call(null,s__51368__$2)));
} else {
var G__51411 = cljs.core.rest.call(null,s__51368__$2);
s__51368__$1 = G__51411;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__51365,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__31108__auto__,size__31109__auto__,b__51366,s__51364__$2,temp__5457__auto__,vec__51360,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__51365,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__31108__auto__,size__31109__auto__,b__51366,s__51364__$2,temp__5457__auto__,vec__51360,u__$1,v__$1,c__$1,j,k))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__51412 = (i__51365 + (1));
i__51365 = G__51412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51366),clojure$math$combinatorics$iter__51363.call(null,cljs.core.chunk_rest.call(null,s__51364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51366),null);
}
} else {
var y = cljs.core.first.call(null,s__51364__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__31110__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__51364__$2,temp__5457__auto__,vec__51360,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__51363_$_iter__51371(s__51372){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__51364__$2,temp__5457__auto__,vec__51360,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__51372__$1 = s__51372;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51372__$1);
if(temp__5457__auto____$1){
var s__51372__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51372__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51372__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51374 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51373 = (0);
while(true){
if((i__51373 < size__31109__auto__)){
var z = cljs.core._nth.call(null,c__31108__auto__,i__51373);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__51374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__51413 = (i__51373 + (1));
i__51373 = G__51413;
continue;
} else {
var G__51414 = (i__51373 + (1));
i__51373 = G__51414;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51374),clojure$math$combinatorics$iter__51363_$_iter__51371.call(null,cljs.core.chunk_rest.call(null,s__51372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51374),null);
}
} else {
var z = cljs.core.first.call(null,s__51372__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__51363_$_iter__51371.call(null,cljs.core.rest.call(null,s__51372__$2)));
} else {
var G__51415 = cljs.core.rest.call(null,s__51372__$2);
s__51372__$1 = G__51415;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__51364__$2,temp__5457__auto__,vec__51360,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__51364__$2,temp__5457__auto__,vec__51360,u__$1,v__$1,c__$1,j,k))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__51363.call(null,cljs.core.rest.call(null,s__51364__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__51360,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__51360,u__$1,v__$1,c__$1,j,k))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__51360,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__51360,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11;

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.call(null,v.call(null,j),(0))){
return j;
} else {
var G__51420 = (j - (1));
j = G__51420;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__30216__auto__ = r;
if(cljs.core.truth_(and__30216__auto__)){
return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j)));
} else {
return and__30216__auto__;
}
})())){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1)))){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
var v__$1 = clojure.math.combinatorics.update.call(null,v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__31110__auto__ = ((function (v__$1,j){
return (function clojure$math$combinatorics$m5_$_iter__51416(s__51417){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__51417__$1 = s__51417;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51417__$1);
if(temp__5457__auto__){
var s__51417__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51417__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51417__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51419 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51418 = (0);
while(true){
if((i__51418 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51418);
cljs.core.chunk_append.call(null,b__51419,(u.call(null,i) - v__$1.call(null,i)));

var G__51421 = (i__51418 + (1));
i__51418 = G__51421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51419),clojure$math$combinatorics$m5_$_iter__51416.call(null,cljs.core.chunk_rest.call(null,s__51417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51419),null);
}
} else {
var i = cljs.core.first.call(null,s__51417__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__51416.call(null,cljs.core.rest.call(null,s__51417__$2)));
}
} else {
return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_.call(null,ks)){
return v__$2;
} else {
var k = cljs.core.first.call(null,ks);
var G__51422 = cljs.core.rest.call(null,ks);
var G__51423 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__51422;
v__$2 = G__51423;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__30580__auto__ = (0);
var y__30581__auto__ = (min_partitions_after_this - diff_uv);
return ((x__30580__auto__ > y__30581__auto__) ? x__30580__auto__ : y__30581__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = v__$3.call(null,k_1);
if((amount > vk)){
var G__51424 = (k_1 - (1));
var G__51425 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__51426 = (amount - vk);
k_1 = G__51424;
v__$3 = G__51425;
amount = G__51426;
continue;
} else {
return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.call(null,l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = f.call(null,l__$1);
return clojure.math.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__31514__auto__ = [];
var len__31507__auto___51464 = arguments.length;
var i__31508__auto___51465 = (0);
while(true){
if((i__31508__auto___51465 < len__31507__auto___51464)){
args__31514__auto__.push((arguments[i__31508__auto___51465]));

var G__51466 = (i__31508__auto___51465 + (1));
i__31508__auto___51465 = G__51466;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__51429){
var map__51430 = p__51429;
var map__51430__$1 = ((((!((map__51430 == null)))?((((map__51430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51430):map__51430);
var from = cljs.core.get.call(null,map__51430__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__51430__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
if((((function (){var or__30228__auto__ = from;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__30228__auto__ = to;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec.call(null,items);
var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));
var freqs = cljs.core.frequencies.call(null,items__$1);
var N = cljs.core.count.call(null,items__$1);
var M = cljs.core.count.call(null,ditems);
var from__$1 = (cljs.core.truth_((function (){var and__30216__auto__ = from;
if(cljs.core.truth_(and__30216__auto__)){
return (from <= (1));
} else {
return and__30216__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__30216__auto__ = to;
if(cljs.core.truth_(and__30216__auto__)){
return (to >= N);
} else {
return and__30216__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__30228__auto__ = from__$1;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__30228__auto__ = from__$1;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (1);
}
})() <= (function (){var or__30228__auto__ = to__$1;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return N;
}
})())) && (((function (){var or__30228__auto__ = to__$1;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31182__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31182__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31182__auto__ = cljs.core.first.call(null,items__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})())));
} else {
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__31110__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function clojure$math$combinatorics$iter__51432(s__51433){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function (){
var s__51433__$1 = s__51433;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51433__$1);
if(temp__5457__auto__){
var s__51433__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51433__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51433__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51435 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51434 = (0);
while(true){
if((i__51434 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__51434);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__51435,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__51467 = (i__51434 + (1));
i__51434 = G__51467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51435),clojure$math$combinatorics$iter__51432.call(null,cljs.core.chunk_rest.call(null,s__51433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51435),null);
}
} else {
var i = cljs.core.first.call(null,s__51433__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__51432.call(null,cljs.core.rest.call(null,s__51433__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__31110__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function clojure$math$combinatorics$iter__51436(s__51437){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function (){
var s__51437__$1 = s__51437;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51437__$1);
if(temp__5457__auto__){
var s__51437__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51437__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51437__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51439 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51438 = (0);
while(true){
if((i__51438 < size__31109__auto__)){
var part = cljs.core._nth.call(null,c__31108__auto__,i__51438);
cljs.core.chunk_append.call(null,b__51439,(function (){var iter__31110__auto__ = ((function (i__51438,part,c__31108__auto__,size__31109__auto__,b__51439,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function clojure$math$combinatorics$iter__51436_$_iter__51440(s__51441){
return (new cljs.core.LazySeq(null,((function (i__51438,part,c__31108__auto__,size__31109__auto__,b__51439,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function (){
var s__51441__$1 = s__51441;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51441__$1);
if(temp__5457__auto____$1){
var s__51441__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51441__$2)){
var c__31108__auto____$1 = cljs.core.chunk_first.call(null,s__51441__$2);
var size__31109__auto____$1 = cljs.core.count.call(null,c__31108__auto____$1);
var b__51443 = cljs.core.chunk_buffer.call(null,size__31109__auto____$1);
if((function (){var i__51442 = (0);
while(true){
if((i__51442 < size__31109__auto____$1)){
var multiset = cljs.core._nth.call(null,c__31108__auto____$1,i__51442);
cljs.core.chunk_append.call(null,b__51443,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__51442,i__51438,multiset,c__31108__auto____$1,size__31109__auto____$1,b__51443,s__51441__$2,temp__5457__auto____$1,part,c__31108__auto__,size__31109__auto__,b__51439,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function (p__51444){
var vec__51445 = p__51444;
var index = cljs.core.nth.call(null,vec__51445,(0),null);
var numtimes = cljs.core.nth.call(null,vec__51445,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__51442,i__51438,multiset,c__31108__auto____$1,size__31109__auto____$1,b__51443,s__51441__$2,temp__5457__auto____$1,part,c__31108__auto__,size__31109__auto__,b__51439,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
,multiset)));

var G__51468 = (i__51442 + (1));
i__51442 = G__51468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51443),clojure$math$combinatorics$iter__51436_$_iter__51440.call(null,cljs.core.chunk_rest.call(null,s__51441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51443),null);
}
} else {
var multiset = cljs.core.first.call(null,s__51441__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__51438,multiset,s__51441__$2,temp__5457__auto____$1,part,c__31108__auto__,size__31109__auto__,b__51439,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function (p__51448){
var vec__51449 = p__51448;
var index = cljs.core.nth.call(null,vec__51449,(0),null);
var numtimes = cljs.core.nth.call(null,vec__51449,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__51438,multiset,s__51441__$2,temp__5457__auto____$1,part,c__31108__auto__,size__31109__auto__,b__51439,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__51436_$_iter__51440.call(null,cljs.core.rest.call(null,s__51441__$2)));
}
} else {
return null;
}
break;
}
});})(i__51438,part,c__31108__auto__,size__31109__auto__,b__51439,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
,null,null));
});})(i__51438,part,c__31108__auto__,size__31109__auto__,b__51439,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
;
return iter__31110__auto__.call(null,part);
})());

var G__51469 = (i__51438 + (1));
i__51438 = G__51469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51439),clojure$math$combinatorics$iter__51436.call(null,cljs.core.chunk_rest.call(null,s__51437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51439),null);
}
} else {
var part = cljs.core.first.call(null,s__51437__$2);
return cljs.core.cons.call(null,(function (){var iter__31110__auto__ = ((function (part,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function clojure$math$combinatorics$iter__51436_$_iter__51452(s__51453){
return (new cljs.core.LazySeq(null,((function (part,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function (){
var s__51453__$1 = s__51453;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51453__$1);
if(temp__5457__auto____$1){
var s__51453__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51453__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__51453__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__51455 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__51454 = (0);
while(true){
if((i__51454 < size__31109__auto__)){
var multiset = cljs.core._nth.call(null,c__31108__auto__,i__51454);
cljs.core.chunk_append.call(null,b__51455,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__51454,multiset,c__31108__auto__,size__31109__auto__,b__51455,s__51453__$2,temp__5457__auto____$1,part,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function (p__51456){
var vec__51457 = p__51456;
var index = cljs.core.nth.call(null,vec__51457,(0),null);
var numtimes = cljs.core.nth.call(null,vec__51457,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__51454,multiset,c__31108__auto__,size__31109__auto__,b__51455,s__51453__$2,temp__5457__auto____$1,part,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
,multiset)));

var G__51470 = (i__51454 + (1));
i__51454 = G__51470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51455),clojure$math$combinatorics$iter__51436_$_iter__51452.call(null,cljs.core.chunk_rest.call(null,s__51453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51455),null);
}
} else {
var multiset = cljs.core.first.call(null,s__51453__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__51453__$2,temp__5457__auto____$1,part,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to){
return (function (p__51460){
var vec__51461 = p__51460;
var index = cljs.core.nth.call(null,vec__51461,(0),null);
var numtimes = cljs.core.nth.call(null,vec__51461,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__51453__$2,temp__5457__auto____$1,part,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__51436_$_iter__51452.call(null,cljs.core.rest.call(null,s__51453__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
,null,null));
});})(part,s__51437__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
;
return iter__31110__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__51436.call(null,cljs.core.rest.call(null,s__51437__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__51430,map__51430__$1,from,to))
;
return iter__31110__auto__.call(null,parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq51427){
var G__51428 = cljs.core.first.call(null,seq51427);
var seq51427__$1 = cljs.core.next.call(null,seq51427);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(G__51428,seq51427__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__31514__auto__ = [];
var len__31507__auto___51473 = arguments.length;
var i__31508__auto___51474 = (0);
while(true){
if((i__31508__auto___51474 < len__31507__auto___51473)){
args__31514__auto__.push((arguments[i__31508__auto___51474]));

var G__51475 = (i__31508__auto___51474 + (1));
i__31508__auto___51474 = G__51475;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_M,items,args);

}
}
});

clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq51471){
var G__51472 = cljs.core.first.call(null,seq51471);
var seq51471__$1 = cljs.core.next.call(null,seq51471);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(G__51472,seq51471__$1);
});


//# sourceMappingURL=combinatorics.js.map?rel=1512749426744
