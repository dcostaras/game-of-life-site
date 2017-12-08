// Compiled by ClojureScript 1.9.946 {}
goog.provide('game_of_life.patterns');
goog.require('cljs.core');
game_of_life.patterns.block = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(-1)),cljs.core.list((1),(-1)),cljs.core.list((0),(0))]);
game_of_life.patterns.beehive = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(-2)),cljs.core.list((1),(0)),cljs.core.list((3),(-1)),cljs.core.list((0),(-1)),cljs.core.list((2),(-2)),cljs.core.list((2),(0))]);
game_of_life.patterns.loaf = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(-2)),cljs.core.list((1),(0)),cljs.core.list((3),(-1)),cljs.core.list((0),(-1)),cljs.core.list((3),(-2)),cljs.core.list((2),(0)),cljs.core.list((2),(-3))]);
game_of_life.patterns.boat = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(-2)),cljs.core.list((1),(0)),cljs.core.list((0),(-1)),cljs.core.list((2),(-1)),cljs.core.list((0),(0))]);
game_of_life.patterns.stable_forms = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31182__auto__ = game_of_life.patterns.block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(function (){var x__31182__auto__ = game_of_life.patterns.beehive;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(function (){var x__31182__auto__ = game_of_life.patterns.loaf;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(function (){var x__31182__auto__ = game_of_life.patterns.boat;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})())));
game_of_life.patterns.blinker = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((2),(0)),cljs.core.list((0),(0))]);
game_of_life.patterns.toad = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((3),(0)),cljs.core.list((0),(-1)),cljs.core.list((1),(-1)),cljs.core.list((2),(0)),cljs.core.list((2),(-1))]);
game_of_life.patterns.cycle_2_forms = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31182__auto__ = game_of_life.patterns.blinker;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(function (){var x__31182__auto__ = game_of_life.patterns.toad;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})())));
game_of_life.patterns.glider = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(-2)),cljs.core.list((1),(0)),cljs.core.list((2),(-2)),cljs.core.list((0),(-2)),cljs.core.list((2),(-1))]);
game_of_life.patterns.gliders = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31182__auto__ = game_of_life.patterns.glider;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})())));

//# sourceMappingURL=patterns.js.map?rel=1512749415718
