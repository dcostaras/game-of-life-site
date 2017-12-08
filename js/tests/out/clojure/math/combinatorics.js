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
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__31110__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__43089(s__43090){
return (new cljs.core.LazySeq(null,(function (){
var s__43090__$1 = s__43090;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43090__$1);
if(temp__5457__auto__){
var s__43090__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43090__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43090__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43092 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43091 = (0);
while(true){
if((i__43091 < size__31109__auto__)){
var j = cljs.core._nth.call(null,c__31108__auto__,i__43091);
cljs.core.chunk_append.call(null,b__43092,((j + cnt) + (- (n + (1)))));

var G__43093 = (i__43091 + (1));
i__43091 = G__43093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43092),clojure$math$combinatorics$index_combinations_$_iter__43089.call(null,cljs.core.chunk_rest.call(null,s__43090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43092),null);
}
} else {
var j = cljs.core.first.call(null,s__43090__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__43089.call(null,cljs.core.rest.call(null,s__43090__$2)));
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
var G__43094 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__43095 = (j__$1 - (1));
c__$3 = G__43094;
j__$1 = G__43095;
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
var G__43096 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__43097 = (index__$1 + (1));
var G__43098 = (already_distributed__$1 + mi);
distribution__$1 = G__43096;
index__$1 = G__43097;
already_distributed__$1 = G__43098;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__43099 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__43099,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43099,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__43099,(2),null);
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
var vec__43102 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__43102,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__43102,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__43102,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__43105 = distribution__$2;
distribution__$1 = G__43105;
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
return (function clojure$math$combinatorics$multi_comb_$_iter__43106(s__43107){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__43107__$1 = s__43107;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43107__$1);
if(temp__5457__auto__){
var s__43107__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43107__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43107__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43109 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43108 = (0);
while(true){
if((i__43108 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43108);
cljs.core.chunk_append.call(null,b__43109,f.call(null,v.call(null,i)));

var G__43134 = (i__43108 + (1));
i__43108 = G__43134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43109),clojure$math$combinatorics$multi_comb_$_iter__43106.call(null,cljs.core.chunk_rest.call(null,s__43107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43109),null);
}
} else {
var i = cljs.core.first.call(null,s__43107__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__43106.call(null,cljs.core.rest.call(null,s__43107__$2)));
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
return (function clojure$math$combinatorics$multi_comb_$_iter__43110(s__43111){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__43111__$1 = s__43111;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43111__$1);
if(temp__5457__auto__){
var s__43111__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43111__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43111__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43113 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43112 = (0);
while(true){
if((i__43112 < size__31109__auto__)){
var q = cljs.core._nth.call(null,c__31108__auto__,i__43112);
cljs.core.chunk_append.call(null,b__43113,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (i__43112,q,c__31108__auto__,size__31109__auto__,b__43113,s__43111__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__43110_$_iter__43114(s__43115){
return (new cljs.core.LazySeq(null,((function (i__43112,q,c__31108__auto__,size__31109__auto__,b__43113,s__43111__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__43115__$1 = s__43115;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43115__$1);
if(temp__5457__auto____$1){
var s__43115__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43115__$2)){
var c__31108__auto____$1 = cljs.core.chunk_first.call(null,s__43115__$2);
var size__31109__auto____$1 = cljs.core.count.call(null,c__31108__auto____$1);
var b__43117 = cljs.core.chunk_buffer.call(null,size__31109__auto____$1);
if((function (){var i__43116 = (0);
while(true){
if((i__43116 < size__31109__auto____$1)){
var vec__43118 = cljs.core._nth.call(null,c__31108__auto____$1,i__43116);
var index = cljs.core.nth.call(null,vec__43118,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43118,(1),null);
var _ = cljs.core.nth.call(null,vec__43118,(2),null);
cljs.core.chunk_append.call(null,b__43117,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__43135 = (i__43116 + (1));
i__43116 = G__43135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43117),clojure$math$combinatorics$multi_comb_$_iter__43110_$_iter__43114.call(null,cljs.core.chunk_rest.call(null,s__43115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43117),null);
}
} else {
var vec__43121 = cljs.core.first.call(null,s__43115__$2);
var index = cljs.core.nth.call(null,vec__43121,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43121,(1),null);
var _ = cljs.core.nth.call(null,vec__43121,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__43110_$_iter__43114.call(null,cljs.core.rest.call(null,s__43115__$2)));
}
} else {
return null;
}
break;
}
});})(i__43112,q,c__31108__auto__,size__31109__auto__,b__43113,s__43111__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(i__43112,q,c__31108__auto__,size__31109__auto__,b__43113,s__43111__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__31110__auto__.call(null,q);
})()));

var G__43136 = (i__43112 + (1));
i__43112 = G__43136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43113),clojure$math$combinatorics$multi_comb_$_iter__43110.call(null,cljs.core.chunk_rest.call(null,s__43111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43113),null);
}
} else {
var q = cljs.core.first.call(null,s__43111__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (q,s__43111__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__43110_$_iter__43124(s__43125){
return (new cljs.core.LazySeq(null,((function (q,s__43111__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__43125__$1 = s__43125;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43125__$1);
if(temp__5457__auto____$1){
var s__43125__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43125__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43125__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43127 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43126 = (0);
while(true){
if((i__43126 < size__31109__auto__)){
var vec__43128 = cljs.core._nth.call(null,c__31108__auto__,i__43126);
var index = cljs.core.nth.call(null,vec__43128,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43128,(1),null);
var _ = cljs.core.nth.call(null,vec__43128,(2),null);
cljs.core.chunk_append.call(null,b__43127,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__43137 = (i__43126 + (1));
i__43126 = G__43137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43127),clojure$math$combinatorics$multi_comb_$_iter__43110_$_iter__43124.call(null,cljs.core.chunk_rest.call(null,s__43125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43127),null);
}
} else {
var vec__43131 = cljs.core.first.call(null,s__43125__$2);
var index = cljs.core.nth.call(null,vec__43131,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43131,(1),null);
var _ = cljs.core.nth.call(null,vec__43131,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__43110_$_iter__43124.call(null,cljs.core.rest.call(null,s__43125__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__43111__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__43111__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__31110__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__43110.call(null,cljs.core.rest.call(null,s__43111__$2)));
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
return (function clojure$math$combinatorics$combinations_$_iter__43139(s__43140){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__43140__$1 = s__43140;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43140__$1);
if(temp__5457__auto__){
var s__43140__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43140__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43140__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43142 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43141 = (0);
while(true){
if((i__43141 < size__31109__auto__)){
var item = cljs.core._nth.call(null,c__31108__auto__,i__43141);
cljs.core.chunk_append.call(null,b__43142,(function (){var x__31182__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})());

var G__43143 = (i__43141 + (1));
i__43141 = G__43143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43142),clojure$math$combinatorics$combinations_$_iter__43139.call(null,cljs.core.chunk_rest.call(null,s__43140__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43142),null);
}
} else {
var item = cljs.core.first.call(null,s__43140__$2);
return cljs.core.cons.call(null,(function (){var x__31182__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),clojure$math$combinatorics$combinations_$_iter__43139.call(null,cljs.core.rest.call(null,s__43140__$2)));
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
return (function (p1__43138_SHARP_){
return cljs.core.map.call(null,v_items,p1__43138_SHARP_);
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
var len__31507__auto___43145 = arguments.length;
var i__31508__auto___43146 = (0);
while(true){
if((i__31508__auto___43146 < len__31507__auto___43145)){
args__31514__auto__.push((arguments[i__31508__auto___43146]));

var G__43147 = (i__31508__auto___43146 + (1));
i__31508__auto___43146 = G__43147;
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
var G__43148 = (i - (1));
var G__43149 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__43148;
v_seqs__$2 = G__43149;
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

clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq43144){
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43144));
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
var G__43150 = (i - (1));
i = G__43150;
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
var G__43151 = (i - (1));
i = G__43151;
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
var G__43152 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__43153 = (k + (1));
var G__43154 = (l__$1 - (1));
v__$1 = G__43152;
k = G__43153;
l__$1 = G__43154;
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
return (function clojure$math$combinatorics$multi_perm_$_iter__43155(s__43156){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__43156__$1 = s__43156;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43156__$1);
if(temp__5457__auto__){
var s__43156__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43156__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43156__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43158 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43157 = (0);
while(true){
if((i__43157 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43157);
cljs.core.chunk_append.call(null,b__43158,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43159 = (i__43157 + (1));
i__43157 = G__43159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43158),clojure$math$combinatorics$multi_perm_$_iter__43155.call(null,cljs.core.chunk_rest.call(null,s__43156__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43158),null);
}
} else {
var i = cljs.core.first.call(null,s__43156__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__43155.call(null,cljs.core.rest.call(null,s__43156__$2)));
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
return (function (p1__43160_SHARP_){
return cljs.core.map.call(null,v,p1__43160_SHARP_);
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
var G__43161 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__43162 = (n__$1 - (1));
acc = G__43161;
n__$1 = G__43162;
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
var G__43163 = q;
var G__43164 = cljs.core.cons.call(null,r,digits);
var G__43165 = (divisor + (1));
n__$1 = G__43163;
digits = G__43164;
divisor = G__43165;
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
var G__43166 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__43167 = cljs.core.rest.call(null,l__$1);
var G__43168 = (n__$1 - (1));
acc = G__43166;
l__$1 = G__43167;
n__$1 = G__43168;
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
var G__43169 = cljs.core.rest.call(null,indices);
var G__43170 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__43171 = cljs.core.conj.call(null,perm,item);
indices = G__43169;
l__$1 = G__43170;
perm = G__43171;
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
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__31110__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__43172(s__43173){
return (new cljs.core.LazySeq(null,(function (){
var s__43173__$1 = s__43173;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43173__$1);
if(temp__5457__auto__){
var s__43173__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43173__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43173__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43175 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43174 = (0);
while(true){
if((i__43174 < size__31109__auto__)){
var vec__43176 = cljs.core._nth.call(null,c__31108__auto__,i__43174);
var k = cljs.core.nth.call(null,vec__43176,(0),null);
var v = cljs.core.nth.call(null,vec__43176,(1),null);
cljs.core.chunk_append.call(null,b__43175,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__43182 = (i__43174 + (1));
i__43174 = G__43182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43175),clojure$math$combinatorics$initial_perm_numbers_$_iter__43172.call(null,cljs.core.chunk_rest.call(null,s__43173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43175),null);
}
} else {
var vec__43179 = cljs.core.first.call(null,s__43173__$2);
var k = cljs.core.nth.call(null,vec__43179,(0),null);
var v = cljs.core.nth.call(null,vec__43179,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__43172.call(null,cljs.core.rest.call(null,s__43173__$2)));
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
var G__43183 = cljs.core.rest.call(null,perm_numbers__$1);
var G__43184 = (index + (1));
perm_numbers__$1 = G__43183;
index = G__43184;
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
var vec__43185 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__43185,(0),null);
var remainder = cljs.core.nth.call(null,vec__43185,(1),null);
var G__43188 = remainder;
var G__43189 = cljs.core.conj.call(null,digits,index);
var G__43190 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__43188;
digits = G__43189;
freqs__$1 = G__43190;
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
var G__43191 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__43192 = cljs.core.rest.call(null,indices);
var G__43193 = cljs.core.conj.call(null,perm,item);
freqs = G__43191;
indices = G__43192;
perm = G__43193;
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
return (function clojure$math$combinatorics$nth_permutation_$_iter__43194(s__43195){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__43195__$1 = s__43195;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43195__$1);
if(temp__5457__auto__){
var s__43195__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43195__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43195__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43197 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43196 = (0);
while(true){
if((i__43196 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43196);
cljs.core.chunk_append.call(null,b__43197,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43198 = (i__43196 + (1));
i__43196 = G__43198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43197),clojure$math$combinatorics$nth_permutation_$_iter__43194.call(null,cljs.core.chunk_rest.call(null,s__43195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43197),null);
}
} else {
var i = cljs.core.first.call(null,s__43195__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__43194.call(null,cljs.core.rest.call(null,s__43195__$2)));
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
return (function clojure$math$combinatorics$drop_permutations_$_iter__43199(s__43200){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__43200__$1 = s__43200;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43200__$1);
if(temp__5457__auto__){
var s__43200__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43200__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43200__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43202 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43201 = (0);
while(true){
if((i__43201 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43201);
cljs.core.chunk_append.call(null,b__43202,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43203 = (i__43201 + (1));
i__43201 = G__43203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43202),clojure$math$combinatorics$drop_permutations_$_iter__43199.call(null,cljs.core.chunk_rest.call(null,s__43200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43202),null);
}
} else {
var i = cljs.core.first.call(null,s__43200__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__43199.call(null,cljs.core.rest.call(null,s__43200__$2)));
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
var G__43204 = n;
var G__43205 = (n - k);
n = G__43204;
k = G__43205;
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
var count_combinations_from_frequencies43206 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies43206;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__43207 = n__$1;
var G__43208 = y;
var G__43209 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__43207;
y = G__43208;
z = G__43209;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__43210 = n__$1;
var G__43211 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__43212 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__43210;
y = G__43211;
z = G__43212;
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
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__31110__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43213(s__43214){
return (new cljs.core.LazySeq(null,(function (){
var s__43214__$1 = s__43214;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43214__$1);
if(temp__5457__auto__){
var s__43214__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43214__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43214__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43216 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43215 = (0);
while(true){
if((i__43215 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43215);
cljs.core.chunk_append.call(null,b__43216,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__43217 = (i__43215 + (1));
i__43215 = G__43217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43216),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43213.call(null,cljs.core.chunk_rest.call(null,s__43214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43216),null);
}
} else {
var i = cljs.core.first.call(null,s__43214__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43213.call(null,cljs.core.rest.call(null,s__43214__$2)));
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
var count_combinations_from_frequencies43218 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies43218;
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
var G__43219 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__43220 = cljs.core.rest.call(null,items__$1);
var G__43221 = (t__$1 - (1));
var G__43222 = n__$1;
comb = G__43219;
items__$1 = G__43220;
t__$1 = G__43221;
n__$1 = G__43222;
continue;
} else {
var G__43223 = comb;
var G__43224 = cljs.core.rest.call(null,items__$1);
var G__43225 = t__$1;
var G__43226 = (n__$1 - dc_dt);
comb = G__43223;
items__$1 = G__43224;
t__$1 = G__43225;
n__$1 = G__43226;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__43227(s__43228){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__43228__$1 = s__43228;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43228__$1);
if(temp__5457__auto__){
var s__43228__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43228__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43228__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43230 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43229 = (0);
while(true){
if((i__43229 < size__31109__auto__)){
var vec__43231 = cljs.core._nth.call(null,c__31108__auto__,i__43229);
var k = cljs.core.nth.call(null,vec__43231,(0),null);
var v = cljs.core.nth.call(null,vec__43231,(1),null);
cljs.core.chunk_append.call(null,b__43230,cljs.core.repeat.call(null,v,k));

var G__43237 = (i__43229 + (1));
i__43229 = G__43237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43230),clojure$math$combinatorics$nth_combination_freqs_$_iter__43227.call(null,cljs.core.chunk_rest.call(null,s__43228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43230),null);
}
} else {
var vec__43234 = cljs.core.first.call(null,s__43228__$2);
var k = cljs.core.nth.call(null,vec__43234,(0),null);
var v = cljs.core.nth.call(null,vec__43234,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__43227.call(null,cljs.core.rest.call(null,s__43228__$2)));
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
var G__43238 = cljs.core.conj.call(null,comb,first_key);
var G__43239 = remove_one_key;
var G__43240 = (t__$1 - (1));
var G__43241 = n__$1;
comb = G__43238;
freqs__$1 = G__43239;
t__$1 = G__43240;
n__$1 = G__43241;
continue;
} else {
var G__43242 = comb;
var G__43243 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__43244 = t__$1;
var G__43245 = (n__$1 - dc_dt);
comb = G__43242;
freqs__$1 = G__43243;
t__$1 = G__43244;
n__$1 = G__43245;
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
var count_combinations_from_frequencies43246 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__31110__auto__ = ((function (v,f,count_combinations_from_frequencies43246){
return (function clojure$math$combinatorics$nth_combination_$_iter__43247(s__43248){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies43246){
return (function (){
var s__43248__$1 = s__43248;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43248__$1);
if(temp__5457__auto__){
var s__43248__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43248__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43248__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43250 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43249 = (0);
while(true){
if((i__43249 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43249);
cljs.core.chunk_append.call(null,b__43250,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43251 = (i__43249 + (1));
i__43249 = G__43251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43250),clojure$math$combinatorics$nth_combination_$_iter__43247.call(null,cljs.core.chunk_rest.call(null,s__43248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43250),null);
}
} else {
var i = cljs.core.first.call(null,s__43248__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__43247.call(null,cljs.core.rest.call(null,s__43248__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies43246))
,null,null));
});})(v,f,count_combinations_from_frequencies43246))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies43246;
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
var G__43252 = (size + (1));
var G__43253 = (n__$1 - num_combinations);
size = G__43252;
n__$1 = G__43253;
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
var G__43254 = cljs.core.rest.call(null,l__$1);
var G__43255 = (n + (1));
l__$1 = G__43254;
n = G__43255;
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
var G__43256 = cljs.core.rest.call(null,l__$1);
var G__43257 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__43258 = (n - (1));
l__$1 = G__43256;
index = G__43257;
n = G__43258;
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
var G__43264 = cljs.core.rest.call(null,l__$1);
var G__43265 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__31110__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__43260(s__43261){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__43261__$1 = s__43261;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43261__$1);
if(temp__5457__auto__){
var s__43261__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43261__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43261__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43263 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43262 = (0);
while(true){
if((i__43262 < size__31109__auto__)){
var k = cljs.core._nth.call(null,c__31108__auto__,i__43262);
cljs.core.chunk_append.call(null,b__43263,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__43267 = (i__43262 + (1));
i__43262 = G__43267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43263),clojure$math$combinatorics$permutation_index_duplicates_$_iter__43260.call(null,cljs.core.chunk_rest.call(null,s__43261__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43263),null);
}
} else {
var k = cljs.core.first.call(null,s__43261__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__43260.call(null,cljs.core.rest.call(null,s__43261__$2)));
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
return (function (p1__43259_SHARP_){
return (cljs.core.compare.call(null,p1__43259_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__31110__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__43266 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__43264;
index = G__43265;
freqs = G__43266;
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
return cljs.core.vec.call(null,(function (){var iter__31110__auto__ = (function clojure$math$combinatorics$init_$_iter__43268(s__43269){
return (new cljs.core.LazySeq(null,(function (){
var s__43269__$1 = s__43269;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43269__$1);
if(temp__5457__auto__){
var s__43269__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43269__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43269__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43271 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43270 = (0);
while(true){
if((i__43270 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43270);
cljs.core.chunk_append.call(null,b__43271,(function (){var x__30580__auto__ = (0);
var y__30581__auto__ = (i - ((n - s) - (-1)));
return ((x__30580__auto__ > y__30581__auto__) ? x__30580__auto__ : y__30581__auto__);
})());

var G__43272 = (i__43270 + (1));
i__43270 = G__43272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43271),clojure$math$combinatorics$init_$_iter__43268.call(null,cljs.core.chunk_rest.call(null,s__43269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43271),null);
}
} else {
var i = cljs.core.first.call(null,s__43269__$2);
return cljs.core.cons.call(null,(function (){var x__30580__auto__ = (0);
var y__30581__auto__ = (i - ((n - s) - (-1)));
return ((x__30580__auto__ > y__30581__auto__) ? x__30580__auto__ : y__30581__auto__);
})(),clojure$math$combinatorics$init_$_iter__43268.call(null,cljs.core.rest.call(null,s__43269__$2)));
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
var G__43274 = arguments.length;
switch (G__43274) {
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
var G__43279 = (j - (1));
j = G__43279;
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
var vec__43275 = (function (){var a__$2 = a__$1;
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
var G__43280 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__43281 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__43282 = (i + (1));
var G__43283 = (function (){var x__30580__auto__ = current_max;
var y__30581__auto__ = (new_a_i + (1));
return ((x__30580__auto__ > y__30581__auto__) ? x__30580__auto__ : y__30581__auto__);
})();
a__$2 = G__43280;
b__$1 = G__43281;
i = G__43282;
current_max = G__43283;
continue;
} else {
var G__43284 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__43285 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__43286 = (i + (1));
var G__43287 = current_max;
a__$2 = G__43284;
b__$1 = G__43285;
i = G__43286;
current_max = G__43287;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__43275,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__43275,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__31514__auto__ = [];
var len__31507__auto___43297 = arguments.length;
var i__31508__auto___43298 = (0);
while(true){
if((i__31508__auto___43298 < len__31507__auto___43297)){
args__31514__auto__.push((arguments[i__31508__auto___43298]));

var G__43299 = (i__31508__auto___43298 + (1));
i__31508__auto___43298 = G__43299;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__43290){
var map__43291 = p__43290;
var map__43291__$1 = ((((!((map__43291 == null)))?((((map__43291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43291):map__43291);
var from = cljs.core.get.call(null,map__43291__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__43291__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__31110__auto__ = ((function (growth_strings,from__$1,to__$1,map__43291,map__43291__$1,from,to){
return (function clojure$math$combinatorics$iter__43293(s__43294){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__43291,map__43291__$1,from,to){
return (function (){
var s__43294__$1 = s__43294;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43294__$1);
if(temp__5457__auto__){
var s__43294__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43294__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43294__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43296 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43295 = (0);
while(true){
if((i__43295 < size__31109__auto__)){
var growth_string = cljs.core._nth.call(null,c__31108__auto__,i__43295);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__43296,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__43300 = (i__43295 + (1));
i__43295 = G__43300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43296),clojure$math$combinatorics$iter__43293.call(null,cljs.core.chunk_rest.call(null,s__43294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43296),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__43294__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__43293.call(null,cljs.core.rest.call(null,s__43294__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__43291,map__43291__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__43291,map__43291__$1,from,to))
;
return iter__31110__auto__.call(null,growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq43288){
var G__43289 = cljs.core.first.call(null,seq43288);
var seq43288__$1 = cljs.core.next.call(null,seq43288);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__43289,seq43288__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__31514__auto__ = [];
var len__31507__auto___43315 = arguments.length;
var i__31508__auto___43316 = (0);
while(true){
if((i__31508__auto___43316 < len__31507__auto___43315)){
args__31514__auto__.push((arguments[i__31508__auto___43316]));

var G__43317 = (i__31508__auto___43316 + (1));
i__31508__auto___43316 = G__43317;
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
return (function clojure$math$combinatorics$iter__43303(s__43304){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__43304__$1 = s__43304;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43304__$1);
if(temp__5457__auto__){
var s__43304__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43304__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43304__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43306 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43305 = (0);
while(true){
if((i__43305 < size__31109__auto__)){
var parts = cljs.core._nth.call(null,c__31108__auto__,i__43305);
cljs.core.chunk_append.call(null,b__43306,(function (){var iter__31110__auto__ = ((function (i__43305,parts,c__31108__auto__,size__31109__auto__,b__43306,s__43304__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__43303_$_iter__43307(s__43308){
return (new cljs.core.LazySeq(null,((function (i__43305,parts,c__31108__auto__,size__31109__auto__,b__43306,s__43304__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__43308__$1 = s__43308;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43308__$1);
if(temp__5457__auto____$1){
var s__43308__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43308__$2)){
var c__31108__auto____$1 = cljs.core.chunk_first.call(null,s__43308__$2);
var size__31109__auto____$1 = cljs.core.count.call(null,c__31108__auto____$1);
var b__43310 = cljs.core.chunk_buffer.call(null,size__31109__auto____$1);
if((function (){var i__43309 = (0);
while(true){
if((i__43309 < size__31109__auto____$1)){
var part = cljs.core._nth.call(null,c__31108__auto____$1,i__43309);
cljs.core.chunk_append.call(null,b__43310,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__43309,i__43305,part,c__31108__auto____$1,size__31109__auto____$1,b__43310,s__43308__$2,temp__5457__auto____$1,parts,c__31108__auto__,size__31109__auto__,b__43306,s__43304__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__43309,i__43305,part,c__31108__auto____$1,size__31109__auto____$1,b__43310,s__43308__$2,temp__5457__auto____$1,parts,c__31108__auto__,size__31109__auto__,b__43306,s__43304__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__43318 = (i__43309 + (1));
i__43309 = G__43318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43310),clojure$math$combinatorics$iter__43303_$_iter__43307.call(null,cljs.core.chunk_rest.call(null,s__43308__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43310),null);
}
} else {
var part = cljs.core.first.call(null,s__43308__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__43305,part,s__43308__$2,temp__5457__auto____$1,parts,c__31108__auto__,size__31109__auto__,b__43306,s__43304__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__43305,part,s__43308__$2,temp__5457__auto____$1,parts,c__31108__auto__,size__31109__auto__,b__43306,s__43304__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__43303_$_iter__43307.call(null,cljs.core.rest.call(null,s__43308__$2)));
}
} else {
return null;
}
break;
}
});})(i__43305,parts,c__31108__auto__,size__31109__auto__,b__43306,s__43304__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(i__43305,parts,c__31108__auto__,size__31109__auto__,b__43306,s__43304__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__31110__auto__.call(null,parts);
})());

var G__43319 = (i__43305 + (1));
i__43305 = G__43319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43306),clojure$math$combinatorics$iter__43303.call(null,cljs.core.chunk_rest.call(null,s__43304__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43306),null);
}
} else {
var parts = cljs.core.first.call(null,s__43304__$2);
return cljs.core.cons.call(null,(function (){var iter__31110__auto__ = ((function (parts,s__43304__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__43303_$_iter__43311(s__43312){
return (new cljs.core.LazySeq(null,((function (parts,s__43304__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__43312__$1 = s__43312;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43312__$1);
if(temp__5457__auto____$1){
var s__43312__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43312__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43312__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43314 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43313 = (0);
while(true){
if((i__43313 < size__31109__auto__)){
var part = cljs.core._nth.call(null,c__31108__auto__,i__43313);
cljs.core.chunk_append.call(null,b__43314,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__43313,part,c__31108__auto__,size__31109__auto__,b__43314,s__43312__$2,temp__5457__auto____$1,parts,s__43304__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__43313,part,c__31108__auto__,size__31109__auto__,b__43314,s__43312__$2,temp__5457__auto____$1,parts,s__43304__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__43320 = (i__43313 + (1));
i__43313 = G__43320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43314),clojure$math$combinatorics$iter__43303_$_iter__43311.call(null,cljs.core.chunk_rest.call(null,s__43312__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43314),null);
}
} else {
var part = cljs.core.first.call(null,s__43312__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__43312__$2,temp__5457__auto____$1,parts,s__43304__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__43312__$2,temp__5457__auto____$1,parts,s__43304__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__43303_$_iter__43311.call(null,cljs.core.rest.call(null,s__43312__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__43304__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__43304__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__31110__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__43303.call(null,cljs.core.rest.call(null,s__43304__$2)));
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

clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq43301){
var G__43302 = cljs.core.first.call(null,seq43301);
var seq43301__$1 = cljs.core.next.call(null,seq43301);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__43302,seq43301__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__43322 = arguments.length;
switch (G__43322) {
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
var vec__43323 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__43342 = (j + (1));
var G__43343 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__43344 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__43345 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__43342;
c__$1 = G__43343;
u__$1 = G__43344;
v__$1 = G__43345;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__43323,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__43323,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__43323,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__43326 = (function (){var j = a;
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
var G__43346 = (j + (1));
var G__43347 = k;
var G__43348 = true;
var G__43349 = u__$2;
var G__43350 = v__$1;
var G__43351 = c__$1;
j = G__43346;
k = G__43347;
x = G__43348;
u__$1 = G__43349;
v__$1 = G__43350;
c__$1 = G__43351;
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
var G__43352 = j__$1;
var G__43353 = k__$1;
var G__43354 = x__$1;
var G__43355 = u__$2;
var G__43356 = v__$2;
var G__43357 = c__$2;
j = G__43352;
k = G__43353;
x = G__43354;
u__$1 = G__43355;
v__$1 = G__43356;
c__$1 = G__43357;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__43358 = j__$1;
var G__43359 = k__$1;
var G__43360 = x;
var G__43361 = u__$2;
var G__43362 = v__$2;
var G__43363 = c__$2;
j = G__43358;
k = G__43359;
x = G__43360;
u__$1 = G__43361;
v__$1 = G__43362;
c__$1 = G__43363;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__43326,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__43326,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__43326,(2),null);
var j = cljs.core.nth.call(null,vec__43326,(3),null);
var k = cljs.core.nth.call(null,vec__43326,(4),null);
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
var G__43364 = n;
var G__43365 = m;
var G__43366 = f__$1;
var G__43367 = c__$1;
var G__43368 = u__$1;
var G__43369 = v__$1;
var G__43370 = a__$1;
var G__43371 = b__$1;
var G__43372 = l__$1;
var G__43373 = r;
var G__43374 = s;
n = G__43364;
m = G__43365;
f = G__43366;
c = G__43367;
u = G__43368;
v = G__43369;
a = G__43370;
b = G__43371;
l = G__43372;
r = G__43373;
s = G__43374;
continue;
} else {
var part = (function (){var iter__31110__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__43326,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__43329(s__43330){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__43326,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__43330__$1 = s__43330;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43330__$1);
if(temp__5457__auto__){
var s__43330__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43330__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43330__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43332 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43331 = (0);
while(true){
if((i__43331 < size__31109__auto__)){
var y = cljs.core._nth.call(null,c__31108__auto__,i__43331);
cljs.core.chunk_append.call(null,b__43332,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__31110__auto__ = ((function (i__43331,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__31108__auto__,size__31109__auto__,b__43332,s__43330__$2,temp__5457__auto__,vec__43326,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__43329_$_iter__43333(s__43334){
return (new cljs.core.LazySeq(null,((function (i__43331,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__31108__auto__,size__31109__auto__,b__43332,s__43330__$2,temp__5457__auto__,vec__43326,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__43334__$1 = s__43334;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43334__$1);
if(temp__5457__auto____$1){
var s__43334__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43334__$2)){
var c__31108__auto____$1 = cljs.core.chunk_first.call(null,s__43334__$2);
var size__31109__auto____$1 = cljs.core.count.call(null,c__31108__auto____$1);
var b__43336 = cljs.core.chunk_buffer.call(null,size__31109__auto____$1);
if((function (){var i__43335 = (0);
while(true){
if((i__43335 < size__31109__auto____$1)){
var z = cljs.core._nth.call(null,c__31108__auto____$1,i__43335);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__43336,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__43375 = (i__43335 + (1));
i__43335 = G__43375;
continue;
} else {
var G__43376 = (i__43335 + (1));
i__43335 = G__43376;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43336),clojure$math$combinatorics$iter__43329_$_iter__43333.call(null,cljs.core.chunk_rest.call(null,s__43334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43336),null);
}
} else {
var z = cljs.core.first.call(null,s__43334__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__43329_$_iter__43333.call(null,cljs.core.rest.call(null,s__43334__$2)));
} else {
var G__43377 = cljs.core.rest.call(null,s__43334__$2);
s__43334__$1 = G__43377;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__43331,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__31108__auto__,size__31109__auto__,b__43332,s__43330__$2,temp__5457__auto__,vec__43326,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__43331,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__31108__auto__,size__31109__auto__,b__43332,s__43330__$2,temp__5457__auto__,vec__43326,u__$1,v__$1,c__$1,j,k))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__43378 = (i__43331 + (1));
i__43331 = G__43378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43332),clojure$math$combinatorics$iter__43329.call(null,cljs.core.chunk_rest.call(null,s__43330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43332),null);
}
} else {
var y = cljs.core.first.call(null,s__43330__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__31110__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43330__$2,temp__5457__auto__,vec__43326,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__43329_$_iter__43337(s__43338){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43330__$2,temp__5457__auto__,vec__43326,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__43338__$1 = s__43338;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43338__$1);
if(temp__5457__auto____$1){
var s__43338__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43338__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43338__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43340 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43339 = (0);
while(true){
if((i__43339 < size__31109__auto__)){
var z = cljs.core._nth.call(null,c__31108__auto__,i__43339);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__43340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__43379 = (i__43339 + (1));
i__43339 = G__43379;
continue;
} else {
var G__43380 = (i__43339 + (1));
i__43339 = G__43380;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43340),clojure$math$combinatorics$iter__43329_$_iter__43337.call(null,cljs.core.chunk_rest.call(null,s__43338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43340),null);
}
} else {
var z = cljs.core.first.call(null,s__43338__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__43329_$_iter__43337.call(null,cljs.core.rest.call(null,s__43338__$2)));
} else {
var G__43381 = cljs.core.rest.call(null,s__43338__$2);
s__43338__$1 = G__43381;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43330__$2,temp__5457__auto__,vec__43326,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43330__$2,temp__5457__auto__,vec__43326,u__$1,v__$1,c__$1,j,k))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__43329.call(null,cljs.core.rest.call(null,s__43330__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__43326,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__43326,u__$1,v__$1,c__$1,j,k))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__43326,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__43326,u__$1,v__$1,c__$1,j,k))
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
var G__43386 = (j - (1));
j = G__43386;
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
return (function clojure$math$combinatorics$m5_$_iter__43382(s__43383){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__43383__$1 = s__43383;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43383__$1);
if(temp__5457__auto__){
var s__43383__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43383__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43383__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43385 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43384 = (0);
while(true){
if((i__43384 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43384);
cljs.core.chunk_append.call(null,b__43385,(u.call(null,i) - v__$1.call(null,i)));

var G__43387 = (i__43384 + (1));
i__43384 = G__43387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43385),clojure$math$combinatorics$m5_$_iter__43382.call(null,cljs.core.chunk_rest.call(null,s__43383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43385),null);
}
} else {
var i = cljs.core.first.call(null,s__43383__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__43382.call(null,cljs.core.rest.call(null,s__43383__$2)));
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
var G__43388 = cljs.core.rest.call(null,ks);
var G__43389 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__43388;
v__$2 = G__43389;
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
var G__43390 = (k_1 - (1));
var G__43391 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__43392 = (amount - vk);
k_1 = G__43390;
v__$3 = G__43391;
amount = G__43392;
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
var len__31507__auto___43430 = arguments.length;
var i__31508__auto___43431 = (0);
while(true){
if((i__31508__auto___43431 < len__31507__auto___43430)){
args__31514__auto__.push((arguments[i__31508__auto___43431]));

var G__43432 = (i__31508__auto___43431 + (1));
i__31508__auto___43431 = G__43432;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__43395){
var map__43396 = p__43395;
var map__43396__$1 = ((((!((map__43396 == null)))?((((map__43396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43396):map__43396);
var from = cljs.core.get.call(null,map__43396__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__43396__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__31110__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function clojure$math$combinatorics$iter__43398(s__43399){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function (){
var s__43399__$1 = s__43399;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43399__$1);
if(temp__5457__auto__){
var s__43399__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43399__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43399__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43401 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43400 = (0);
while(true){
if((i__43400 < size__31109__auto__)){
var i = cljs.core._nth.call(null,c__31108__auto__,i__43400);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__43401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__43433 = (i__43400 + (1));
i__43400 = G__43433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43401),clojure$math$combinatorics$iter__43398.call(null,cljs.core.chunk_rest.call(null,s__43399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43401),null);
}
} else {
var i = cljs.core.first.call(null,s__43399__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__43398.call(null,cljs.core.rest.call(null,s__43399__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
;
return iter__31110__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__31110__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function clojure$math$combinatorics$iter__43402(s__43403){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function (){
var s__43403__$1 = s__43403;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43403__$1);
if(temp__5457__auto__){
var s__43403__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43403__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43403__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43405 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43404 = (0);
while(true){
if((i__43404 < size__31109__auto__)){
var part = cljs.core._nth.call(null,c__31108__auto__,i__43404);
cljs.core.chunk_append.call(null,b__43405,(function (){var iter__31110__auto__ = ((function (i__43404,part,c__31108__auto__,size__31109__auto__,b__43405,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function clojure$math$combinatorics$iter__43402_$_iter__43406(s__43407){
return (new cljs.core.LazySeq(null,((function (i__43404,part,c__31108__auto__,size__31109__auto__,b__43405,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function (){
var s__43407__$1 = s__43407;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43407__$1);
if(temp__5457__auto____$1){
var s__43407__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43407__$2)){
var c__31108__auto____$1 = cljs.core.chunk_first.call(null,s__43407__$2);
var size__31109__auto____$1 = cljs.core.count.call(null,c__31108__auto____$1);
var b__43409 = cljs.core.chunk_buffer.call(null,size__31109__auto____$1);
if((function (){var i__43408 = (0);
while(true){
if((i__43408 < size__31109__auto____$1)){
var multiset = cljs.core._nth.call(null,c__31108__auto____$1,i__43408);
cljs.core.chunk_append.call(null,b__43409,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__43408,i__43404,multiset,c__31108__auto____$1,size__31109__auto____$1,b__43409,s__43407__$2,temp__5457__auto____$1,part,c__31108__auto__,size__31109__auto__,b__43405,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function (p__43410){
var vec__43411 = p__43410;
var index = cljs.core.nth.call(null,vec__43411,(0),null);
var numtimes = cljs.core.nth.call(null,vec__43411,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__43408,i__43404,multiset,c__31108__auto____$1,size__31109__auto____$1,b__43409,s__43407__$2,temp__5457__auto____$1,part,c__31108__auto__,size__31109__auto__,b__43405,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
,multiset)));

var G__43434 = (i__43408 + (1));
i__43408 = G__43434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43409),clojure$math$combinatorics$iter__43402_$_iter__43406.call(null,cljs.core.chunk_rest.call(null,s__43407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43409),null);
}
} else {
var multiset = cljs.core.first.call(null,s__43407__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__43404,multiset,s__43407__$2,temp__5457__auto____$1,part,c__31108__auto__,size__31109__auto__,b__43405,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function (p__43414){
var vec__43415 = p__43414;
var index = cljs.core.nth.call(null,vec__43415,(0),null);
var numtimes = cljs.core.nth.call(null,vec__43415,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__43404,multiset,s__43407__$2,temp__5457__auto____$1,part,c__31108__auto__,size__31109__auto__,b__43405,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__43402_$_iter__43406.call(null,cljs.core.rest.call(null,s__43407__$2)));
}
} else {
return null;
}
break;
}
});})(i__43404,part,c__31108__auto__,size__31109__auto__,b__43405,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
,null,null));
});})(i__43404,part,c__31108__auto__,size__31109__auto__,b__43405,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
;
return iter__31110__auto__.call(null,part);
})());

var G__43435 = (i__43404 + (1));
i__43404 = G__43435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43405),clojure$math$combinatorics$iter__43402.call(null,cljs.core.chunk_rest.call(null,s__43403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43405),null);
}
} else {
var part = cljs.core.first.call(null,s__43403__$2);
return cljs.core.cons.call(null,(function (){var iter__31110__auto__ = ((function (part,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function clojure$math$combinatorics$iter__43402_$_iter__43418(s__43419){
return (new cljs.core.LazySeq(null,((function (part,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function (){
var s__43419__$1 = s__43419;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43419__$1);
if(temp__5457__auto____$1){
var s__43419__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43419__$2)){
var c__31108__auto__ = cljs.core.chunk_first.call(null,s__43419__$2);
var size__31109__auto__ = cljs.core.count.call(null,c__31108__auto__);
var b__43421 = cljs.core.chunk_buffer.call(null,size__31109__auto__);
if((function (){var i__43420 = (0);
while(true){
if((i__43420 < size__31109__auto__)){
var multiset = cljs.core._nth.call(null,c__31108__auto__,i__43420);
cljs.core.chunk_append.call(null,b__43421,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__43420,multiset,c__31108__auto__,size__31109__auto__,b__43421,s__43419__$2,temp__5457__auto____$1,part,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function (p__43422){
var vec__43423 = p__43422;
var index = cljs.core.nth.call(null,vec__43423,(0),null);
var numtimes = cljs.core.nth.call(null,vec__43423,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__43420,multiset,c__31108__auto__,size__31109__auto__,b__43421,s__43419__$2,temp__5457__auto____$1,part,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
,multiset)));

var G__43436 = (i__43420 + (1));
i__43420 = G__43436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43421),clojure$math$combinatorics$iter__43402_$_iter__43418.call(null,cljs.core.chunk_rest.call(null,s__43419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43421),null);
}
} else {
var multiset = cljs.core.first.call(null,s__43419__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__43419__$2,temp__5457__auto____$1,part,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to){
return (function (p__43426){
var vec__43427 = p__43426;
var index = cljs.core.nth.call(null,vec__43427,(0),null);
var numtimes = cljs.core.nth.call(null,vec__43427,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__43419__$2,temp__5457__auto____$1,part,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__43402_$_iter__43418.call(null,cljs.core.rest.call(null,s__43419__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
,null,null));
});})(part,s__43403__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
;
return iter__31110__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__43402.call(null,cljs.core.rest.call(null,s__43403__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43396,map__43396__$1,from,to))
;
return iter__31110__auto__.call(null,parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq43393){
var G__43394 = cljs.core.first.call(null,seq43393);
var seq43393__$1 = cljs.core.next.call(null,seq43393);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(G__43394,seq43393__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__31514__auto__ = [];
var len__31507__auto___43439 = arguments.length;
var i__31508__auto___43440 = (0);
while(true){
if((i__31508__auto___43440 < len__31507__auto___43439)){
args__31514__auto__.push((arguments[i__31508__auto___43440]));

var G__43441 = (i__31508__auto___43440 + (1));
i__31508__auto___43440 = G__43441;
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

clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq43437){
var G__43438 = cljs.core.first.call(null,seq43437);
var seq43437__$1 = cljs.core.next.call(null,seq43437);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(G__43438,seq43437__$1);
});


//# sourceMappingURL=combinatorics.js.map?rel=1512749397695
