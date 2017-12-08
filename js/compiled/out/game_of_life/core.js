// Compiled by ClojureScript 1.9.946 {}
goog.provide('game_of_life.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.math.combinatorics');
game_of_life.core.world = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)]);
game_of_life.core.neighbours = (function game_of_life$core$neighbours(p__51867){
var vec__51868 = p__51867;
var x = cljs.core.nth.call(null,vec__51868,(0),null);
var y = cljs.core.nth.call(null,vec__51868,(1),null);
var cell = vec__51868;
var product = clojure.math.combinatorics.cartesian_product.call(null,cljs.core.range.call(null,(x - (1)),((2) + x)),cljs.core.range.call(null,(y - (1)),((2) + y)));
return cljs.core.disj.call(null,cljs.core.set.call(null,product),cell);
});
game_of_life.core.count_neighbours = (function game_of_life$core$count_neighbours(cell,world){
return cljs.core.count.call(null,clojure.set.intersection.call(null,world,game_of_life.core.neighbours.call(null,cell)));
});
game_of_life.core.cell_alive_QMARK_ = (function game_of_life$core$cell_alive_QMARK_(cell,world){
var count_of_neighbours = game_of_life.core.count_neighbours.call(null,cell,world);
if(cljs.core._EQ_.call(null,count_of_neighbours,(2))){
return cljs.core.contains_QMARK_.call(null,world,cell);
} else {
if(cljs.core._EQ_.call(null,count_of_neighbours,(3))){
return true;
} else {
if((count_of_neighbours > (3))){
return false;
} else {
if((count_of_neighbours < (2))){
return false;
} else {
return null;
}
}
}
}
});
game_of_life.core.all_neighbours = (function game_of_life$core$all_neighbours(world){
return clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.mapcat.call(null,game_of_life.core.neighbours,world)),world);
});
game_of_life.core.next_generation = (function game_of_life$core$next_generation(world){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51871_SHARP_){
return game_of_life.core.cell_alive_QMARK_.call(null,p1__51871_SHARP_,world);
}),clojure.set.union.call(null,world,game_of_life.core.all_neighbours.call(null,world))));
});
game_of_life.core.translate_cell = (function game_of_life$core$translate_cell(p__51872,p__51873){
var vec__51874 = p__51872;
var x = cljs.core.nth.call(null,vec__51874,(0),null);
var y = cljs.core.nth.call(null,vec__51874,(1),null);
var vec__51877 = p__51873;
var x1 = cljs.core.nth.call(null,vec__51877,(0),null);
var y1 = cljs.core.nth.call(null,vec__51877,(1),null);
var x__31182__auto__ = (x + x1);
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = (y + y1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
});
game_of_life.core.translate_pattern = (function game_of_life$core$translate_pattern(pattern,translation){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__51880_SHARP_){
return game_of_life.core.translate_cell.call(null,p1__51880_SHARP_,translation);
}),pattern));
});

//# sourceMappingURL=core.js.map?rel=1512749429341
