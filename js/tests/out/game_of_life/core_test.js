// Compiled by ClojureScript 1.9.946 {}
goog.provide('game_of_life.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('game_of_life.core');
goog.require('game_of_life.patterns');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game_of_life.core_test","game_of_life.core_test",-1268538016),new cljs.core.Keyword(null,"neighbours-test","neighbours-test",-1961108914)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"neighbours-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Neighbours returns all 8 surrounding cells of argument");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.neighbours.call(null,cljs.core.list((0),(0)));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(-1)),cljs.core.list((-1),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(-1)),cljs.core.list((-1),(-1)),cljs.core.list((-1),(1))]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43643){var t__34987__auto__ = e43643;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

game_of_life.core_test.neighbours_test = (function game_of_life$core_test$neighbours_test(){
return cljs.test.test_var.call(null,game_of_life.core_test.neighbours_test.cljs$lang$var);
});
game_of_life.core_test.neighbours_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Neighbours returns all 8 surrounding cells of argument");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.neighbours.call(null,cljs.core.list((0),(0)));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(-1)),cljs.core.list((-1),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(-1)),cljs.core.list((-1),(-1)),cljs.core.list((-1),(1))]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43644){var t__34987__auto__ = e43644;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

game_of_life.core_test.neighbours_test.cljs$lang$var = new cljs.core.Var(function(){return game_of_life.core_test.neighbours_test;},new cljs.core.Symbol("game-of-life.core-test","neighbours-test","game-of-life.core-test/neighbours-test",-1579711508,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"game-of-life.core-test","game-of-life.core-test",-651130148,null),new cljs.core.Symbol(null,"neighbours-test","neighbours-test",-320577387,null),"test/game_of_life/core_test.cljs",25,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(game_of_life.core_test.neighbours_test)?game_of_life.core_test.neighbours_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game_of_life.core_test","game_of_life.core_test",-1268538016),new cljs.core.Keyword(null,"count-neighbours-test","count-neighbours-test",-942332868)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"count-neighbours-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Count neighbours counts all neighbours");

try{try{var values__34942__auto___43655 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(0));
var result__34943__auto___43656 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43655);
if(cljs.core.truth_(result__34943__auto___43656)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43655),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43655);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43645){var t__34987__auto___43657 = e43645;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43657,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43658 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(1));
var result__34943__auto___43659 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43658);
if(cljs.core.truth_(result__34943__auto___43659)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43658),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43658);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43646){var t__34987__auto___43660 = e43646;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43660,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43661 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(2));
var result__34943__auto___43662 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43661);
if(cljs.core.truth_(result__34943__auto___43662)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43661),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43661);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43647){var t__34987__auto___43663 = e43647;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43663,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43664 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((10),(10)),cljs.core.list((10),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(0));
var result__34943__auto___43665 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43664);
if(cljs.core.truth_(result__34943__auto___43665)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43664),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43664);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43648){var t__34987__auto___43666 = e43648;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43666,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(0));
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43649){var t__34987__auto__ = e43649;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

game_of_life.core_test.count_neighbours_test = (function game_of_life$core_test$count_neighbours_test(){
return cljs.test.test_var.call(null,game_of_life.core_test.count_neighbours_test.cljs$lang$var);
});
game_of_life.core_test.count_neighbours_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Count neighbours counts all neighbours");

try{try{var values__34942__auto___43667 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(0));
var result__34943__auto___43668 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43667);
if(cljs.core.truth_(result__34943__auto___43668)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43667),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43667);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43650){var t__34987__auto___43669 = e43650;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43669,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43670 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(1));
var result__34943__auto___43671 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43670);
if(cljs.core.truth_(result__34943__auto___43671)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43670),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43670);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43651){var t__34987__auto___43672 = e43651;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43672,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43673 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(2));
var result__34943__auto___43674 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43673);
if(cljs.core.truth_(result__34943__auto___43674)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43673),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43673);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43652){var t__34987__auto___43675 = e43652;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43675,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43676 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((10),(10)),cljs.core.list((10),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(0));
var result__34943__auto___43677 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43676);
if(cljs.core.truth_(result__34943__auto___43677)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43676),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43676);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43653){var t__34987__auto___43678 = e43653;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43678,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.count_neighbours.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),(0));
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43654){var t__34987__auto__ = e43654;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("gol","count-neighbours","gol/count-neighbours",772613618,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

game_of_life.core_test.count_neighbours_test.cljs$lang$var = new cljs.core.Var(function(){return game_of_life.core_test.count_neighbours_test;},new cljs.core.Symbol("game-of-life.core-test","count-neighbours-test","game-of-life.core-test/count-neighbours-test",1552469946,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"game-of-life.core-test","game-of-life.core-test",-651130148,null),new cljs.core.Symbol(null,"count-neighbours-test","count-neighbours-test",698198659,null),"test/game_of_life/core_test.cljs",31,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(game_of_life.core_test.count_neighbours_test)?game_of_life.core_test.count_neighbours_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game_of_life.core_test","game_of_life.core_test",-1268538016),new cljs.core.Keyword(null,"all-neighbours-test","all-neighbours-test",-540192784)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"all-neighbours-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"all-neighbours returns a set");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core.set_QMARK_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.set_QMARK_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43679){var t__34987__auto__ = e43679;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"All neighbours returns the unique neighbours of all cells in the world");

try{try{var values__34942__auto___43689 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.EMPTY;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43690 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43689);
if(cljs.core.truth_(result__34943__auto___43690)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43689),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43689);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43680){var t__34987__auto___43691 = e43680;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43691,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43692 = (function (){var x__31182__auto__ = game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.neighbours.call(null,cljs.core.list((0),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43693 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43692);
if(cljs.core.truth_(result__34943__auto___43693)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43692),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43692);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43681){var t__34987__auto___43694 = e43681;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43694,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43695 = (function (){var x__31182__auto__ = cljs.core._EQ_.call(null,game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(1)),cljs.core.list((0),(0))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(-1)),cljs.core.list((-1),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(-1)),cljs.core.list((-1),(-1)),cljs.core.list((-1),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43696 = cljs.core.apply.call(null,cljs.core.not,values__34942__auto___43695);
if(cljs.core.truth_(result__34943__auto___43696)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__34942__auto___43695),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__34942__auto___43695);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43682){var t__34987__auto___43697 = e43682;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43697,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(1)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(2)),cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((-1),(2)),cljs.core.list((0),(-1)),cljs.core.list((-1),(0)),cljs.core.list((1),(-1)),cljs.core.list((1),(2)),cljs.core.list((-1),(-1)),cljs.core.list((-1),(1))]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43683){var t__34987__auto__ = e43683;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

game_of_life.core_test.all_neighbours_test = (function game_of_life$core_test$all_neighbours_test(){
return cljs.test.test_var.call(null,game_of_life.core_test.all_neighbours_test.cljs$lang$var);
});
game_of_life.core_test.all_neighbours_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"all-neighbours returns a set");

try{try{var values__34942__auto___43698 = (function (){var x__31182__auto__ = game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43699 = cljs.core.apply.call(null,cljs.core.set_QMARK_,values__34942__auto___43698);
if(cljs.core.truth_(result__34943__auto___43699)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.set_QMARK_,values__34942__auto___43698),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),values__34942__auto___43698);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43684){var t__34987__auto___43700 = e43684;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43700,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"All neighbours returns the unique neighbours of all cells in the world");

try{try{var values__34942__auto___43701 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.EMPTY;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43702 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43701);
if(cljs.core.truth_(result__34943__auto___43702)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43701),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43701);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43685){var t__34987__auto___43703 = e43685;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43703,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43704 = (function (){var x__31182__auto__ = game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.neighbours.call(null,cljs.core.list((0),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43705 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43704);
if(cljs.core.truth_(result__34943__auto___43705)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43704),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43704);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43686){var t__34987__auto___43706 = e43686;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.list(new cljs.core.Symbol("gol","neighbours","gol/neighbours",-1064751416,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43706,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43707 = (function (){var x__31182__auto__ = cljs.core._EQ_.call(null,game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(1)),cljs.core.list((0),(0))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(-1)),cljs.core.list((-1),(0)),cljs.core.list((0),(1)),cljs.core.list((1),(-1)),cljs.core.list((-1),(-1)),cljs.core.list((-1),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43708 = cljs.core.apply.call(null,cljs.core.not,values__34942__auto___43707);
if(cljs.core.truth_(result__34943__auto___43708)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__34942__auto___43707),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__34942__auto___43707);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43687){var t__34987__auto___43709 = e43687;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43709,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.all_neighbours.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(1)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(2)),cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((-1),(2)),cljs.core.list((0),(-1)),cljs.core.list((-1),(0)),cljs.core.list((1),(-1)),cljs.core.list((1),(2)),cljs.core.list((-1),(-1)),cljs.core.list((-1),(1))]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43688){var t__34987__auto__ = e43688;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","all-neighbours","gol/all-neighbours",-1238501963,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))])),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(-1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))])),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

game_of_life.core_test.all_neighbours_test.cljs$lang$var = new cljs.core.Var(function(){return game_of_life.core_test.all_neighbours_test;},new cljs.core.Symbol("game-of-life.core-test","all-neighbours-test","game-of-life.core-test/all-neighbours-test",216462606,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"game-of-life.core-test","game-of-life.core-test",-651130148,null),new cljs.core.Symbol(null,"all-neighbours-test","all-neighbours-test",1100338743,null),"test/game_of_life/core_test.cljs",29,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(game_of_life.core_test.all_neighbours_test)?game_of_life.core_test.all_neighbours_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game_of_life.core_test","game_of_life.core_test",-1268538016),new cljs.core.Keyword(null,"cell-alive?-test","cell-alive?-test",-1102187451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cell-alive?-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cell-alive? on living cell correctly handles starvation case");

try{try{var values__34942__auto___43724 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),false);
var result__34943__auto___43725 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43724);
if(cljs.core.truth_(result__34943__auto___43725)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43724),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43724);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43710){var t__34987__auto___43726 = e43710;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43726,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43727 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),false);
var result__34943__auto___43728 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43727);
if(cljs.core.truth_(result__34943__auto___43728)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43727),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43727);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43711){var t__34987__auto___43729 = e43711;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43729,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((10),(1)),cljs.core.list((11),(0)),cljs.core.list((10),(0)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),false);
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43712){var t__34987__auto__ = e43712;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cell-alive? correctly handles over population case");

try{try{var values__34942__auto__ = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(1)),cljs.core.list((0),(0)),cljs.core.list((-1),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),false);
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43713){var t__34987__auto__ = e43713;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cell-alive? correctly handles cell resurection");

try{try{var values__34942__auto___43730 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),true);
var result__34943__auto___43731 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43730);
if(cljs.core.truth_(result__34943__auto___43731)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43730),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43730);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43714){var t__34987__auto___43732 = e43714;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43732,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(1)),cljs.core.list((10),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),true);
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43715){var t__34987__auto__ = e43715;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cell-alive? correctly handles static state");

try{try{var values__34942__auto__ = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((0),(1)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),true);
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43716){var t__34987__auto__ = e43716;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

game_of_life.core_test.cell_alive_QMARK__test = (function game_of_life$core_test$cell_alive_QMARK__test(){
return cljs.test.test_var.call(null,game_of_life.core_test.cell_alive_QMARK__test.cljs$lang$var);
});
game_of_life.core_test.cell_alive_QMARK__test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cell-alive? on living cell correctly handles starvation case");

try{try{var values__34942__auto___43733 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),false);
var result__34943__auto___43734 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43733);
if(cljs.core.truth_(result__34943__auto___43734)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43733),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43733);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43717){var t__34987__auto___43735 = e43717;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43735,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43736 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),false);
var result__34943__auto___43737 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43736);
if(cljs.core.truth_(result__34943__auto___43737)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43736),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43736);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43718){var t__34987__auto___43738 = e43718;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43738,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43739 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((10),(1)),cljs.core.list((11),(0)),cljs.core.list((10),(0)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),false);
var result__34943__auto___43740 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43739);
if(cljs.core.truth_(result__34943__auto___43740)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43739),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43739);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43719){var t__34987__auto___43741 = e43719;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43741,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cell-alive? correctly handles over population case");

try{try{var values__34942__auto___43742 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(1)),cljs.core.list((0),(0)),cljs.core.list((-1),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),false);
var result__34943__auto___43743 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43742);
if(cljs.core.truth_(result__34943__auto___43743)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43742),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43742);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43720){var t__34987__auto___43744 = e43720;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43744,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cell-alive? correctly handles cell resurection");

try{try{var values__34942__auto___43745 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),true);
var result__34943__auto___43746 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43745);
if(cljs.core.truth_(result__34943__auto___43746)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43745),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43745);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43721){var t__34987__auto___43747 = e43721;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43747,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43748 = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((1),(0)),cljs.core.list((0),(1)),cljs.core.list((10),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),true);
var result__34943__auto___43749 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43748);
if(cljs.core.truth_(result__34943__auto___43749)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43748),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43748);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43722){var t__34987__auto___43750 = e43722;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43750,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cell-alive? correctly handles static state");

try{try{var values__34942__auto__ = cljs.core._conj.call(null,(function (){var x__31182__auto__ = game_of_life.core.cell_alive_QMARK_.call(null,cljs.core.list((0),(0)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((0),(1)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),true);
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43723){var t__34987__auto__ = e43723;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,cljs.core.list(new cljs.core.Symbol("gol","cell-alive?","gol/cell-alive?",423998126,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

game_of_life.core_test.cell_alive_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return game_of_life.core_test.cell_alive_QMARK__test;},new cljs.core.Symbol("game-of-life.core-test","cell-alive?-test","game-of-life.core-test/cell-alive?-test",1930107317,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"game-of-life.core-test","game-of-life.core-test",-651130148,null),new cljs.core.Symbol(null,"cell-alive?-test","cell-alive?-test",538344076,null),"test/game_of_life/core_test.cljs",26,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(game_of_life.core_test.cell_alive_QMARK__test)?game_of_life.core_test.cell_alive_QMARK__test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game_of_life.core_test","game_of_life.core_test",-1268538016),new cljs.core.Keyword(null,"next-generation-test","next-generation-test",359937144)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"next-generation-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"next-generation returns a world (set)");

try{try{var values__34942__auto___43799 = (function (){var x__31182__auto__ = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43800 = cljs.core.apply.call(null,cljs.core.set_QMARK_,values__34942__auto___43799);
if(cljs.core.truth_(result__34943__auto___43800)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.set_QMARK_,values__34942__auto___43799),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),values__34942__auto___43799);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43751){var t__34987__auto___43801 = e43751;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43801,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core.set_QMARK_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.set_QMARK_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43752){var t__34987__auto__ = e43752;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"next-generation on a 1 and sparse cell world returns empty world");

try{try{var values__34942__auto___43802 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.EMPTY;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43803 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43802);
if(cljs.core.truth_(result__34943__auto___43803)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43802),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43802);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43753){var t__34987__auto___43804 = e43753;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43804,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.EMPTY;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((20),(10)),cljs.core.list((10),(10))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((20),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((20),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43754){var t__34987__auto__ = e43754;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((20),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"next-generation on a 2 neighbouring cell world returns empty world");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.EMPTY;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43755){var t__34987__auto__ = e43755;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"all stable forms are stable");

try{var seq__43756 = cljs.core.seq.call(null,game_of_life.patterns.stable_forms);
var chunk__43757 = null;
var count__43758 = (0);
var i__43759 = (0);
while(true){
if((i__43759 < count__43758)){
var i = cljs.core._nth.call(null,chunk__43757,i__43759);
try{var values__34942__auto___43805 = (function (){var x__31182__auto__ = i;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43806 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43805);
if(cljs.core.truth_(result__34943__auto___43806)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43805),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43805);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43760){var t__34987__auto___43807 = e43760;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43807,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43808 = seq__43756;
var G__43809 = chunk__43757;
var G__43810 = count__43758;
var G__43811 = (i__43759 + (1));
seq__43756 = G__43808;
chunk__43757 = G__43809;
count__43758 = G__43810;
i__43759 = G__43811;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43756);
if(temp__5457__auto__){
var seq__43756__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43756__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__43756__$1);
var G__43812 = cljs.core.chunk_rest.call(null,seq__43756__$1);
var G__43813 = c__31159__auto__;
var G__43814 = cljs.core.count.call(null,c__31159__auto__);
var G__43815 = (0);
seq__43756 = G__43812;
chunk__43757 = G__43813;
count__43758 = G__43814;
i__43759 = G__43815;
continue;
} else {
var i = cljs.core.first.call(null,seq__43756__$1);
try{var values__34942__auto___43816 = (function (){var x__31182__auto__ = i;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43817 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43816);
if(cljs.core.truth_(result__34943__auto___43817)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43816),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43816);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43761){var t__34987__auto___43818 = e43761;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43818,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43819 = cljs.core.next.call(null,seq__43756__$1);
var G__43820 = null;
var G__43821 = (0);
var G__43822 = (0);
seq__43756 = G__43819;
chunk__43757 = G__43820;
count__43758 = G__43821;
i__43759 = G__43822;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"all cycle 2 forms are stable over 2 cycles");

try{var seq__43762 = cljs.core.seq.call(null,game_of_life.patterns.cycle_2_forms);
var chunk__43763 = null;
var count__43764 = (0);
var i__43765 = (0);
while(true){
if((i__43765 < count__43764)){
var i = cljs.core._nth.call(null,chunk__43763,i__43765);
try{var values__34942__auto___43823 = (function (){var x__31182__auto__ = i;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,game_of_life.core.next_generation.call(null,i));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43824 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43823);
if(cljs.core.truth_(result__34943__auto___43824)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43823),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43823);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43766){var t__34987__auto___43825 = e43766;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43825,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43826 = seq__43762;
var G__43827 = chunk__43763;
var G__43828 = count__43764;
var G__43829 = (i__43765 + (1));
seq__43762 = G__43826;
chunk__43763 = G__43827;
count__43764 = G__43828;
i__43765 = G__43829;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43762);
if(temp__5457__auto__){
var seq__43762__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43762__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__43762__$1);
var G__43830 = cljs.core.chunk_rest.call(null,seq__43762__$1);
var G__43831 = c__31159__auto__;
var G__43832 = cljs.core.count.call(null,c__31159__auto__);
var G__43833 = (0);
seq__43762 = G__43830;
chunk__43763 = G__43831;
count__43764 = G__43832;
i__43765 = G__43833;
continue;
} else {
var i = cljs.core.first.call(null,seq__43762__$1);
try{var values__34942__auto___43834 = (function (){var x__31182__auto__ = i;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,game_of_life.core.next_generation.call(null,i));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43835 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43834);
if(cljs.core.truth_(result__34943__auto___43835)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43834),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43834);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43767){var t__34987__auto___43836 = e43767;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43836,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43837 = cljs.core.next.call(null,seq__43762__$1);
var G__43838 = null;
var G__43839 = (0);
var G__43840 = (0);
seq__43762 = G__43837;
chunk__43763 = G__43838;
count__43764 = G__43839;
i__43765 = G__43840;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cycle 2 forms are not stable over 1 cycle");

try{var seq__43768 = cljs.core.seq.call(null,game_of_life.patterns.cycle_2_forms);
var chunk__43769 = null;
var count__43770 = (0);
var i__43771 = (0);
while(true){
if((i__43771 < count__43770)){
var i = cljs.core._nth.call(null,chunk__43769,i__43771);
try{var values__34942__auto___43841 = (function (){var x__31182__auto__ = cljs.core._EQ_.call(null,i,game_of_life.core.next_generation.call(null,i));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43842 = cljs.core.apply.call(null,cljs.core.not,values__34942__auto___43841);
if(cljs.core.truth_(result__34943__auto___43842)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__34942__auto___43841),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__34942__auto___43841);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43772){var t__34987__auto___43843 = e43772;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43843,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43844 = seq__43768;
var G__43845 = chunk__43769;
var G__43846 = count__43770;
var G__43847 = (i__43771 + (1));
seq__43768 = G__43844;
chunk__43769 = G__43845;
count__43770 = G__43846;
i__43771 = G__43847;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43768);
if(temp__5457__auto__){
var seq__43768__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43768__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__43768__$1);
var G__43848 = cljs.core.chunk_rest.call(null,seq__43768__$1);
var G__43849 = c__31159__auto__;
var G__43850 = cljs.core.count.call(null,c__31159__auto__);
var G__43851 = (0);
seq__43768 = G__43848;
chunk__43769 = G__43849;
count__43770 = G__43850;
i__43771 = G__43851;
continue;
} else {
var i = cljs.core.first.call(null,seq__43768__$1);
try{var values__34942__auto___43852 = (function (){var x__31182__auto__ = cljs.core._EQ_.call(null,i,game_of_life.core.next_generation.call(null,i));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43853 = cljs.core.apply.call(null,cljs.core.not,values__34942__auto___43852);
if(cljs.core.truth_(result__34943__auto___43853)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__34942__auto___43852),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__34942__auto___43852);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43773){var t__34987__auto___43854 = e43773;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43854,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43855 = cljs.core.next.call(null,seq__43768__$1);
var G__43856 = null;
var G__43857 = (0);
var G__43858 = (0);
seq__43768 = G__43855;
chunk__43769 = G__43856;
count__43770 = G__43857;
i__43771 = G__43858;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"next-generation on a lone cell with no neighbours dies");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.next_generation.call(null,cljs.core.conj.call(null,game_of_life.patterns.block,cljs.core.list((10),(10))));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.patterns.block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43774){var t__34987__auto__ = e43774;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

game_of_life.core_test.next_generation_test = (function game_of_life$core_test$next_generation_test(){
return cljs.test.test_var.call(null,game_of_life.core_test.next_generation_test.cljs$lang$var);
});
game_of_life.core_test.next_generation_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"next-generation returns a world (set)");

try{try{var values__34942__auto___43859 = (function (){var x__31182__auto__ = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43860 = cljs.core.apply.call(null,cljs.core.set_QMARK_,values__34942__auto___43859);
if(cljs.core.truth_(result__34943__auto___43860)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.set_QMARK_,values__34942__auto___43859),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),values__34942__auto___43859);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43775){var t__34987__auto___43861 = e43775;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43861,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43862 = (function (){var x__31182__auto__ = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43863 = cljs.core.apply.call(null,cljs.core.set_QMARK_,values__34942__auto___43862);
if(cljs.core.truth_(result__34943__auto___43863)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.set_QMARK_,values__34942__auto___43862),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),values__34942__auto___43862);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43776){var t__34987__auto___43864 = e43776;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43864,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"next-generation on a 1 and sparse cell world returns empty world");

try{try{var values__34942__auto___43865 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.EMPTY;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43866 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43865);
if(cljs.core.truth_(result__34943__auto___43866)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43865),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43865);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43777){var t__34987__auto___43867 = e43777;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43867,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43868 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.EMPTY;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1)),cljs.core.list((20),(10)),cljs.core.list((10),(10))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43869 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43868);
if(cljs.core.truth_(result__34943__auto___43869)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((20),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43868),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((20),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43868);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43778){var t__34987__auto___43870 = e43778;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((20),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43870,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"next-generation on a 2 neighbouring cell world returns empty world");

try{try{var values__34942__auto___43871 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.EMPTY;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(0))]));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43872 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43871);
if(cljs.core.truth_(result__34943__auto___43872)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43871),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43871);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43779){var t__34987__auto___43873 = e43779;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43873,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"all stable forms are stable");

try{var seq__43780_43874 = cljs.core.seq.call(null,game_of_life.patterns.stable_forms);
var chunk__43781_43875 = null;
var count__43782_43876 = (0);
var i__43783_43877 = (0);
while(true){
if((i__43783_43877 < count__43782_43876)){
var i_43878 = cljs.core._nth.call(null,chunk__43781_43875,i__43783_43877);
try{var values__34942__auto___43879 = (function (){var x__31182__auto__ = i_43878;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,i_43878);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43880 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43879);
if(cljs.core.truth_(result__34943__auto___43880)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43879),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43879);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43784){var t__34987__auto___43881 = e43784;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43881,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43882 = seq__43780_43874;
var G__43883 = chunk__43781_43875;
var G__43884 = count__43782_43876;
var G__43885 = (i__43783_43877 + (1));
seq__43780_43874 = G__43882;
chunk__43781_43875 = G__43883;
count__43782_43876 = G__43884;
i__43783_43877 = G__43885;
continue;
} else {
var temp__5457__auto___43886 = cljs.core.seq.call(null,seq__43780_43874);
if(temp__5457__auto___43886){
var seq__43780_43887__$1 = temp__5457__auto___43886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43780_43887__$1)){
var c__31159__auto___43888 = cljs.core.chunk_first.call(null,seq__43780_43887__$1);
var G__43889 = cljs.core.chunk_rest.call(null,seq__43780_43887__$1);
var G__43890 = c__31159__auto___43888;
var G__43891 = cljs.core.count.call(null,c__31159__auto___43888);
var G__43892 = (0);
seq__43780_43874 = G__43889;
chunk__43781_43875 = G__43890;
count__43782_43876 = G__43891;
i__43783_43877 = G__43892;
continue;
} else {
var i_43893 = cljs.core.first.call(null,seq__43780_43887__$1);
try{var values__34942__auto___43894 = (function (){var x__31182__auto__ = i_43893;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,i_43893);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43895 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43894);
if(cljs.core.truth_(result__34943__auto___43895)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43894),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43894);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43785){var t__34987__auto___43896 = e43785;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43896,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43897 = cljs.core.next.call(null,seq__43780_43887__$1);
var G__43898 = null;
var G__43899 = (0);
var G__43900 = (0);
seq__43780_43874 = G__43897;
chunk__43781_43875 = G__43898;
count__43782_43876 = G__43899;
i__43783_43877 = G__43900;
continue;
}
} else {
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"all cycle 2 forms are stable over 2 cycles");

try{var seq__43786_43901 = cljs.core.seq.call(null,game_of_life.patterns.cycle_2_forms);
var chunk__43787_43902 = null;
var count__43788_43903 = (0);
var i__43789_43904 = (0);
while(true){
if((i__43789_43904 < count__43788_43903)){
var i_43905 = cljs.core._nth.call(null,chunk__43787_43902,i__43789_43904);
try{var values__34942__auto___43906 = (function (){var x__31182__auto__ = i_43905;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,game_of_life.core.next_generation.call(null,i_43905));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43907 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43906);
if(cljs.core.truth_(result__34943__auto___43907)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43906),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43906);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43790){var t__34987__auto___43908 = e43790;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43908,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43909 = seq__43786_43901;
var G__43910 = chunk__43787_43902;
var G__43911 = count__43788_43903;
var G__43912 = (i__43789_43904 + (1));
seq__43786_43901 = G__43909;
chunk__43787_43902 = G__43910;
count__43788_43903 = G__43911;
i__43789_43904 = G__43912;
continue;
} else {
var temp__5457__auto___43913 = cljs.core.seq.call(null,seq__43786_43901);
if(temp__5457__auto___43913){
var seq__43786_43914__$1 = temp__5457__auto___43913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43786_43914__$1)){
var c__31159__auto___43915 = cljs.core.chunk_first.call(null,seq__43786_43914__$1);
var G__43916 = cljs.core.chunk_rest.call(null,seq__43786_43914__$1);
var G__43917 = c__31159__auto___43915;
var G__43918 = cljs.core.count.call(null,c__31159__auto___43915);
var G__43919 = (0);
seq__43786_43901 = G__43916;
chunk__43787_43902 = G__43917;
count__43788_43903 = G__43918;
i__43789_43904 = G__43919;
continue;
} else {
var i_43920 = cljs.core.first.call(null,seq__43786_43914__$1);
try{var values__34942__auto___43921 = (function (){var x__31182__auto__ = i_43920;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.next_generation.call(null,game_of_life.core.next_generation.call(null,i_43920));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43922 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43921);
if(cljs.core.truth_(result__34943__auto___43922)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43921),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43921);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43791){var t__34987__auto___43923 = e43791;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43923,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43924 = cljs.core.next.call(null,seq__43786_43914__$1);
var G__43925 = null;
var G__43926 = (0);
var G__43927 = (0);
seq__43786_43901 = G__43924;
chunk__43787_43902 = G__43925;
count__43788_43903 = G__43926;
i__43789_43904 = G__43927;
continue;
}
} else {
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"cycle 2 forms are not stable over 1 cycle");

try{var seq__43792_43928 = cljs.core.seq.call(null,game_of_life.patterns.cycle_2_forms);
var chunk__43793_43929 = null;
var count__43794_43930 = (0);
var i__43795_43931 = (0);
while(true){
if((i__43795_43931 < count__43794_43930)){
var i_43932 = cljs.core._nth.call(null,chunk__43793_43929,i__43795_43931);
try{var values__34942__auto___43933 = (function (){var x__31182__auto__ = cljs.core._EQ_.call(null,i_43932,game_of_life.core.next_generation.call(null,i_43932));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43934 = cljs.core.apply.call(null,cljs.core.not,values__34942__auto___43933);
if(cljs.core.truth_(result__34943__auto___43934)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__34942__auto___43933),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__34942__auto___43933);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43796){var t__34987__auto___43935 = e43796;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43935,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43936 = seq__43792_43928;
var G__43937 = chunk__43793_43929;
var G__43938 = count__43794_43930;
var G__43939 = (i__43795_43931 + (1));
seq__43792_43928 = G__43936;
chunk__43793_43929 = G__43937;
count__43794_43930 = G__43938;
i__43795_43931 = G__43939;
continue;
} else {
var temp__5457__auto___43940 = cljs.core.seq.call(null,seq__43792_43928);
if(temp__5457__auto___43940){
var seq__43792_43941__$1 = temp__5457__auto___43940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43792_43941__$1)){
var c__31159__auto___43942 = cljs.core.chunk_first.call(null,seq__43792_43941__$1);
var G__43943 = cljs.core.chunk_rest.call(null,seq__43792_43941__$1);
var G__43944 = c__31159__auto___43942;
var G__43945 = cljs.core.count.call(null,c__31159__auto___43942);
var G__43946 = (0);
seq__43792_43928 = G__43943;
chunk__43793_43929 = G__43944;
count__43794_43930 = G__43945;
i__43795_43931 = G__43946;
continue;
} else {
var i_43947 = cljs.core.first.call(null,seq__43792_43941__$1);
try{var values__34942__auto___43948 = (function (){var x__31182__auto__ = cljs.core._EQ_.call(null,i_43947,game_of_life.core.next_generation.call(null,i_43947));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43949 = cljs.core.apply.call(null,cljs.core.not,values__34942__auto___43948);
if(cljs.core.truth_(result__34943__auto___43949)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__34942__auto___43948),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__34942__auto___43948);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43797){var t__34987__auto___43950 = e43797;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"i","i",253690212,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),new cljs.core.Symbol(null,"i","i",253690212,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43950,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__43951 = cljs.core.next.call(null,seq__43792_43941__$1);
var G__43952 = null;
var G__43953 = (0);
var G__43954 = (0);
seq__43792_43928 = G__43951;
chunk__43793_43929 = G__43952;
count__43794_43930 = G__43953;
i__43795_43931 = G__43954;
continue;
}
} else {
}
}
break;
}
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"next-generation on a lone cell with no neighbours dies");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.next_generation.call(null,cljs.core.conj.call(null,game_of_life.patterns.block,cljs.core.list((10),(10))));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.patterns.block;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43798){var t__34987__auto__ = e43798;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("gol","next-generation","gol/next-generation",157440674,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

game_of_life.core_test.next_generation_test.cljs$lang$var = new cljs.core.Var(function(){return game_of_life.core_test.next_generation_test;},new cljs.core.Symbol("game-of-life.core-test","next-generation-test","game-of-life.core-test/next-generation-test",-1605378074,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"game-of-life.core-test","game-of-life.core-test",-651130148,null),new cljs.core.Symbol(null,"next-generation-test","next-generation-test",2000468671,null),"test/game_of_life/core_test.cljs",30,1,91,91,cljs.core.List.EMPTY,null,(cljs.core.truth_(game_of_life.core_test.next_generation_test)?game_of_life.core_test.next_generation_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game_of_life.core_test","game_of_life.core_test",-1268538016),new cljs.core.Keyword(null,"translate-cell-test","translate-cell-test",1610188188)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"translate-cell-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-cell returns a cell");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(0)),cljs.core.list((1),(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core.seq_QMARK_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.seq_QMARK_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43955){var t__34987__auto__ = e43955;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-cell correctly translates a cell on x and y axes");

try{try{var values__34942__auto___43967 = (function (){var x__31182__auto__ = cljs.core.list((1),(0));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(0)),cljs.core.list((1),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43968 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43967);
if(cljs.core.truth_(result__34943__auto___43968)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43967),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43967);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43956){var t__34987__auto___43969 = e43956;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43969,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43970 = (function (){var x__31182__auto__ = cljs.core.list((0),(1));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(0)),cljs.core.list((0),(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43971 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43970);
if(cljs.core.truth_(result__34943__auto___43971)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43970),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43970);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43957){var t__34987__auto___43972 = e43957;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43972,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43973 = (function (){var x__31182__auto__ = cljs.core.list((1),(1));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(0)),cljs.core.list((1),(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43974 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43973);
if(cljs.core.truth_(result__34943__auto___43974)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43973),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43973);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43958){var t__34987__auto___43975 = e43958;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43975,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43976 = (function (){var x__31182__auto__ = cljs.core.list((10),(1));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(1)),cljs.core.list((10),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43977 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43976);
if(cljs.core.truth_(result__34943__auto___43977)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43976),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43976);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43959){var t__34987__auto___43978 = e43959;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43978,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = (function (){var x__31182__auto__ = cljs.core.list((1),(10));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((-1),(1)),cljs.core.list((2),(9)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(10))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(9))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(10))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(9))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43960){var t__34987__auto__ = e43960;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(10))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(9))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

game_of_life.core_test.translate_cell_test = (function game_of_life$core_test$translate_cell_test(){
return cljs.test.test_var.call(null,game_of_life.core_test.translate_cell_test.cljs$lang$var);
});
game_of_life.core_test.translate_cell_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-cell returns a cell");

try{try{var values__34942__auto___43979 = (function (){var x__31182__auto__ = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(0)),cljs.core.list((1),(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___43980 = cljs.core.apply.call(null,cljs.core.seq_QMARK_,values__34942__auto___43979);
if(cljs.core.truth_(result__34943__auto___43980)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.seq_QMARK_,values__34942__auto___43979),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__34942__auto___43979);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43961){var t__34987__auto___43981 = e43961;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43981,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-cell correctly translates a cell on x and y axes");

try{try{var values__34942__auto___43982 = (function (){var x__31182__auto__ = cljs.core.list((1),(0));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(0)),cljs.core.list((1),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43983 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43982);
if(cljs.core.truth_(result__34943__auto___43983)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43982),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43982);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43962){var t__34987__auto___43984 = e43962;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43984,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43985 = (function (){var x__31182__auto__ = cljs.core.list((0),(1));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(0)),cljs.core.list((0),(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43986 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43985);
if(cljs.core.truth_(result__34943__auto___43986)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43985),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43985);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43963){var t__34987__auto___43987 = e43963;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43987,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43988 = (function (){var x__31182__auto__ = cljs.core.list((1),(1));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(0)),cljs.core.list((1),(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43989 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43988);
if(cljs.core.truth_(result__34943__auto___43989)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43988),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43988);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43964){var t__34987__auto___43990 = e43964;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43990,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___43991 = (function (){var x__31182__auto__ = cljs.core.list((10),(1));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((0),(1)),cljs.core.list((10),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___43992 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___43991);
if(cljs.core.truth_(result__34943__auto___43992)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___43991),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___43991);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43965){var t__34987__auto___43993 = e43965;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(1))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___43993,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = (function (){var x__31182__auto__ = cljs.core.list((1),(10));
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_cell.call(null,cljs.core.list((-1),(1)),cljs.core.list((2),(9)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(10))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(9))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(10))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(9))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43966){var t__34987__auto__ = e43966;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(10))),cljs.core.list(new cljs.core.Symbol("gol","translate-cell","gol/translate-cell",233109057,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((-1),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(9))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

game_of_life.core_test.translate_cell_test.cljs$lang$var = new cljs.core.Var(function(){return game_of_life.core_test.translate_cell_test;},new cljs.core.Symbol("game-of-life.core-test","translate-cell-test","game-of-life.core-test/translate-cell-test",-1796135270,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"game-of-life.core-test","game-of-life.core-test",-651130148,null),new cljs.core.Symbol(null,"translate-cell-test","translate-cell-test",-1044247581,null),"test/game_of_life/core_test.cljs",29,1,117,117,cljs.core.List.EMPTY,null,(cljs.core.truth_(game_of_life.core_test.translate_cell_test)?game_of_life.core_test.translate_cell_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game_of_life.core_test","game_of_life.core_test",-1268538016),new cljs.core.Keyword(null,"translate-pattern-test","translate-pattern-test",1098167643)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"translate-pattern-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-pattern returns a pattern");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.core.translate_pattern.call(null,game_of_life.patterns.block,cljs.core.list((0),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core.set_QMARK_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.set_QMARK_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43994){var t__34987__auto__ = e43994;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-pattern does nothing when given the identity translation");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = game_of_life.patterns.block;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_pattern.call(null,game_of_life.patterns.block,cljs.core.list((0),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43995){var t__34987__auto__ = e43995;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-pattern correctly translates a single cell patter");

try{try{var values__34942__auto___44004 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]);
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_pattern.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]),cljs.core.list((1),(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___44005 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___44004);
if(cljs.core.truth_(result__34943__auto___44005)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___44004),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___44004);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43996){var t__34987__auto___44006 = e43996;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___44006,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto__ = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]);
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_pattern.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]),cljs.core.list((0),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43997){var t__34987__auto__ = e43997;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-pattern correctly translates a full pattern");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((10),(10)),cljs.core.list((11),(10)),cljs.core.list((10),(11))]);
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_pattern.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(1)),cljs.core.list((0),(0))]),cljs.core.list((10),(10)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e43998){var t__34987__auto__ = e43998;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

game_of_life.core_test.translate_pattern_test = (function game_of_life$core_test$translate_pattern_test(){
return cljs.test.test_var.call(null,game_of_life.core_test.translate_pattern_test.cljs$lang$var);
});
game_of_life.core_test.translate_pattern_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-pattern returns a pattern");

try{try{var values__34942__auto___44007 = (function (){var x__31182__auto__ = game_of_life.core.translate_pattern.call(null,game_of_life.patterns.block,cljs.core.list((0),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var result__34943__auto___44008 = cljs.core.apply.call(null,cljs.core.set_QMARK_,values__34942__auto___44007);
if(cljs.core.truth_(result__34943__auto___44008)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.set_QMARK_,values__34942__auto___44007),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),values__34942__auto___44007);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43999){var t__34987__auto___44009 = e43999;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___44009,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-pattern does nothing when given the identity translation");

try{try{var values__34942__auto___44010 = (function (){var x__31182__auto__ = game_of_life.patterns.block;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_pattern.call(null,game_of_life.patterns.block,cljs.core.list((0),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___44011 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___44010);
if(cljs.core.truth_(result__34943__auto___44011)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___44010),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___44010);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44000){var t__34987__auto___44012 = e44000;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),new cljs.core.Symbol("patterns","block","patterns/block",1608146410,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___44012,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-pattern correctly translates a single cell patter");

try{try{var values__34942__auto___44013 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]);
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_pattern.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((0),(0))]),cljs.core.list((1),(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___44014 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___44013);
if(cljs.core.truth_(result__34943__auto___44014)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___44013),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___44013);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44001){var t__34987__auto___44015 = e44001;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___44015,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__34942__auto___44016 = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]);
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_pattern.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(1))]),cljs.core.list((0),(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto___44017 = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto___44016);
if(cljs.core.truth_(result__34943__auto___44017)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto___44016),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto___44016);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e44002){var t__34987__auto___44018 = e44002;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(1)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto___44018,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"translate-pattern correctly translates a full pattern");

try{try{var values__34942__auto__ = (function (){var x__31182__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((10),(10)),cljs.core.list((11),(10)),cljs.core.list((10),(11))]);
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = game_of_life.core.translate_pattern.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list((1),(0)),cljs.core.list((0),(1)),cljs.core.list((0),(0))]),cljs.core.list((10),(10)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$1);
})(),x__31182__auto__);
})();
var result__34943__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__34942__auto__);
if(cljs.core.truth_(result__34943__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__34942__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31182__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__34942__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__34943__auto__;
}catch (e44003){var t__34987__auto__ = e44003;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((11),(10))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11)))]),cljs.core.list(new cljs.core.Symbol("gol","translate-pattern","gol/translate-pattern",-1742369586,null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(0))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((0),(0)))]),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(10))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__34987__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

game_of_life.core_test.translate_pattern_test.cljs$lang$var = new cljs.core.Var(function(){return game_of_life.core_test.translate_pattern_test;},new cljs.core.Symbol("game-of-life.core-test","translate-pattern-test","game-of-life.core-test/translate-pattern-test",372139659,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"game-of-life.core-test","game-of-life.core-test",-651130148,null),new cljs.core.Symbol(null,"translate-pattern-test","translate-pattern-test",-1556268126,null),"test/game_of_life/core_test.cljs",32,1,127,127,cljs.core.List.EMPTY,null,(cljs.core.truth_(game_of_life.core_test.translate_pattern_test)?game_of_life.core_test.translate_pattern_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map?rel=1512749400447
