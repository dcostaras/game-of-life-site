// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e42605){if((e42605 instanceof Error)){
var e = e42605;
return "Error: Unable to stringify";
} else {
throw e42605;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42608 = arguments.length;
switch (G__42608) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42606_SHARP_){
if(typeof p1__42606_SHARP_ === 'string'){
return p1__42606_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42606_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31514__auto__ = [];
var len__31507__auto___42611 = arguments.length;
var i__31508__auto___42612 = (0);
while(true){
if((i__31508__auto___42612 < len__31507__auto___42611)){
args__31514__auto__.push((arguments[i__31508__auto___42612]));

var G__42613 = (i__31508__auto___42612 + (1));
i__31508__auto___42612 = G__42613;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42610){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42610));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31514__auto__ = [];
var len__31507__auto___42615 = arguments.length;
var i__31508__auto___42616 = (0);
while(true){
if((i__31508__auto___42616 < len__31507__auto___42615)){
args__31514__auto__.push((arguments[i__31508__auto___42616]));

var G__42617 = (i__31508__auto___42616 + (1));
i__31508__auto___42616 = G__42617;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42614){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42614));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42618){
var map__42619 = p__42618;
var map__42619__$1 = ((((!((map__42619 == null)))?((((map__42619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42619):map__42619);
var message = cljs.core.get.call(null,map__42619__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42619__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30228__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30216__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30216__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30216__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__36864__auto___42698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___42698,ch){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___42698,ch){
return (function (state_42670){
var state_val_42671 = (state_42670[(1)]);
if((state_val_42671 === (7))){
var inst_42666 = (state_42670[(2)]);
var state_42670__$1 = state_42670;
var statearr_42672_42699 = state_42670__$1;
(statearr_42672_42699[(2)] = inst_42666);

(statearr_42672_42699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (1))){
var state_42670__$1 = state_42670;
var statearr_42673_42700 = state_42670__$1;
(statearr_42673_42700[(2)] = null);

(statearr_42673_42700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (4))){
var inst_42623 = (state_42670[(7)]);
var inst_42623__$1 = (state_42670[(2)]);
var state_42670__$1 = (function (){var statearr_42674 = state_42670;
(statearr_42674[(7)] = inst_42623__$1);

return statearr_42674;
})();
if(cljs.core.truth_(inst_42623__$1)){
var statearr_42675_42701 = state_42670__$1;
(statearr_42675_42701[(1)] = (5));

} else {
var statearr_42676_42702 = state_42670__$1;
(statearr_42676_42702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (15))){
var inst_42630 = (state_42670[(8)]);
var inst_42645 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42630);
var inst_42646 = cljs.core.first.call(null,inst_42645);
var inst_42647 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42646);
var inst_42648 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42647)].join('');
var inst_42649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42648);
var state_42670__$1 = state_42670;
var statearr_42677_42703 = state_42670__$1;
(statearr_42677_42703[(2)] = inst_42649);

(statearr_42677_42703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (13))){
var inst_42654 = (state_42670[(2)]);
var state_42670__$1 = state_42670;
var statearr_42678_42704 = state_42670__$1;
(statearr_42678_42704[(2)] = inst_42654);

(statearr_42678_42704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (6))){
var state_42670__$1 = state_42670;
var statearr_42679_42705 = state_42670__$1;
(statearr_42679_42705[(2)] = null);

(statearr_42679_42705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (17))){
var inst_42652 = (state_42670[(2)]);
var state_42670__$1 = state_42670;
var statearr_42680_42706 = state_42670__$1;
(statearr_42680_42706[(2)] = inst_42652);

(statearr_42680_42706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (3))){
var inst_42668 = (state_42670[(2)]);
var state_42670__$1 = state_42670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42670__$1,inst_42668);
} else {
if((state_val_42671 === (12))){
var inst_42629 = (state_42670[(9)]);
var inst_42643 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42629,opts);
var state_42670__$1 = state_42670;
if(cljs.core.truth_(inst_42643)){
var statearr_42681_42707 = state_42670__$1;
(statearr_42681_42707[(1)] = (15));

} else {
var statearr_42682_42708 = state_42670__$1;
(statearr_42682_42708[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (2))){
var state_42670__$1 = state_42670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42670__$1,(4),ch);
} else {
if((state_val_42671 === (11))){
var inst_42630 = (state_42670[(8)]);
var inst_42635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42636 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42630);
var inst_42637 = cljs.core.async.timeout.call(null,(1000));
var inst_42638 = [inst_42636,inst_42637];
var inst_42639 = (new cljs.core.PersistentVector(null,2,(5),inst_42635,inst_42638,null));
var state_42670__$1 = state_42670;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42670__$1,(14),inst_42639);
} else {
if((state_val_42671 === (9))){
var inst_42630 = (state_42670[(8)]);
var inst_42656 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42657 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42630);
var inst_42658 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42657);
var inst_42659 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42658)].join('');
var inst_42660 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42659);
var state_42670__$1 = (function (){var statearr_42683 = state_42670;
(statearr_42683[(10)] = inst_42656);

return statearr_42683;
})();
var statearr_42684_42709 = state_42670__$1;
(statearr_42684_42709[(2)] = inst_42660);

(statearr_42684_42709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (5))){
var inst_42623 = (state_42670[(7)]);
var inst_42625 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42626 = (new cljs.core.PersistentArrayMap(null,2,inst_42625,null));
var inst_42627 = (new cljs.core.PersistentHashSet(null,inst_42626,null));
var inst_42628 = figwheel.client.focus_msgs.call(null,inst_42627,inst_42623);
var inst_42629 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42628);
var inst_42630 = cljs.core.first.call(null,inst_42628);
var inst_42631 = figwheel.client.autoload_QMARK_.call(null);
var state_42670__$1 = (function (){var statearr_42685 = state_42670;
(statearr_42685[(8)] = inst_42630);

(statearr_42685[(9)] = inst_42629);

return statearr_42685;
})();
if(cljs.core.truth_(inst_42631)){
var statearr_42686_42710 = state_42670__$1;
(statearr_42686_42710[(1)] = (8));

} else {
var statearr_42687_42711 = state_42670__$1;
(statearr_42687_42711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (14))){
var inst_42641 = (state_42670[(2)]);
var state_42670__$1 = state_42670;
var statearr_42688_42712 = state_42670__$1;
(statearr_42688_42712[(2)] = inst_42641);

(statearr_42688_42712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (16))){
var state_42670__$1 = state_42670;
var statearr_42689_42713 = state_42670__$1;
(statearr_42689_42713[(2)] = null);

(statearr_42689_42713[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (10))){
var inst_42662 = (state_42670[(2)]);
var state_42670__$1 = (function (){var statearr_42690 = state_42670;
(statearr_42690[(11)] = inst_42662);

return statearr_42690;
})();
var statearr_42691_42714 = state_42670__$1;
(statearr_42691_42714[(2)] = null);

(statearr_42691_42714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42671 === (8))){
var inst_42629 = (state_42670[(9)]);
var inst_42633 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42629,opts);
var state_42670__$1 = state_42670;
if(cljs.core.truth_(inst_42633)){
var statearr_42692_42715 = state_42670__$1;
(statearr_42692_42715[(1)] = (11));

} else {
var statearr_42693_42716 = state_42670__$1;
(statearr_42693_42716[(1)] = (12));

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
});})(c__36864__auto___42698,ch))
;
return ((function (switch__36774__auto__,c__36864__auto___42698,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____0 = (function (){
var statearr_42694 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42694[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__);

(statearr_42694[(1)] = (1));

return statearr_42694;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____1 = (function (state_42670){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_42670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e42695){if((e42695 instanceof Object)){
var ex__36778__auto__ = e42695;
var statearr_42696_42717 = state_42670;
(statearr_42696_42717[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42718 = state_42670;
state_42670 = G__42718;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__ = function(state_42670){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____1.call(this,state_42670);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___42698,ch))
})();
var state__36866__auto__ = (function (){var statearr_42697 = f__36865__auto__.call(null);
(statearr_42697[(6)] = c__36864__auto___42698);

return statearr_42697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___42698,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42719_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42719_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42721 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42721){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42720){if((e42720 instanceof Error)){
var e = e42720;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42721], null));
} else {
var e = e42720;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42721))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42722){
var map__42723 = p__42722;
var map__42723__$1 = ((((!((map__42723 == null)))?((((map__42723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42723):map__42723);
var opts = map__42723__$1;
var build_id = cljs.core.get.call(null,map__42723__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42723,map__42723__$1,opts,build_id){
return (function (p__42725){
var vec__42726 = p__42725;
var seq__42727 = cljs.core.seq.call(null,vec__42726);
var first__42728 = cljs.core.first.call(null,seq__42727);
var seq__42727__$1 = cljs.core.next.call(null,seq__42727);
var map__42729 = first__42728;
var map__42729__$1 = ((((!((map__42729 == null)))?((((map__42729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42729):map__42729);
var msg = map__42729__$1;
var msg_name = cljs.core.get.call(null,map__42729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42727__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42726,seq__42727,first__42728,seq__42727__$1,map__42729,map__42729__$1,msg,msg_name,_,map__42723,map__42723__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42726,seq__42727,first__42728,seq__42727__$1,map__42729,map__42729__$1,msg,msg_name,_,map__42723,map__42723__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42723,map__42723__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42731){
var vec__42732 = p__42731;
var seq__42733 = cljs.core.seq.call(null,vec__42732);
var first__42734 = cljs.core.first.call(null,seq__42733);
var seq__42733__$1 = cljs.core.next.call(null,seq__42733);
var map__42735 = first__42734;
var map__42735__$1 = ((((!((map__42735 == null)))?((((map__42735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42735):map__42735);
var msg = map__42735__$1;
var msg_name = cljs.core.get.call(null,map__42735__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42733__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42737){
var map__42738 = p__42737;
var map__42738__$1 = ((((!((map__42738 == null)))?((((map__42738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42738):map__42738);
var on_compile_warning = cljs.core.get.call(null,map__42738__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42738__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42738,map__42738__$1,on_compile_warning,on_compile_fail){
return (function (p__42740){
var vec__42741 = p__42740;
var seq__42742 = cljs.core.seq.call(null,vec__42741);
var first__42743 = cljs.core.first.call(null,seq__42742);
var seq__42742__$1 = cljs.core.next.call(null,seq__42742);
var map__42744 = first__42743;
var map__42744__$1 = ((((!((map__42744 == null)))?((((map__42744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42744):map__42744);
var msg = map__42744__$1;
var msg_name = cljs.core.get.call(null,map__42744__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42742__$1;
var pred__42746 = cljs.core._EQ_;
var expr__42747 = msg_name;
if(cljs.core.truth_(pred__42746.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42747))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42746.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42747))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42738,map__42738__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__,msg_hist,msg_names,msg){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__,msg_hist,msg_names,msg){
return (function (state_42836){
var state_val_42837 = (state_42836[(1)]);
if((state_val_42837 === (7))){
var inst_42756 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42756)){
var statearr_42838_42885 = state_42836__$1;
(statearr_42838_42885[(1)] = (8));

} else {
var statearr_42839_42886 = state_42836__$1;
(statearr_42839_42886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (20))){
var inst_42830 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42840_42887 = state_42836__$1;
(statearr_42840_42887[(2)] = inst_42830);

(statearr_42840_42887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (27))){
var inst_42826 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42841_42888 = state_42836__$1;
(statearr_42841_42888[(2)] = inst_42826);

(statearr_42841_42888[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (1))){
var inst_42749 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42749)){
var statearr_42842_42889 = state_42836__$1;
(statearr_42842_42889[(1)] = (2));

} else {
var statearr_42843_42890 = state_42836__$1;
(statearr_42843_42890[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (24))){
var inst_42828 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42844_42891 = state_42836__$1;
(statearr_42844_42891[(2)] = inst_42828);

(statearr_42844_42891[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (4))){
var inst_42834 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42836__$1,inst_42834);
} else {
if((state_val_42837 === (15))){
var inst_42832 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42845_42892 = state_42836__$1;
(statearr_42845_42892[(2)] = inst_42832);

(statearr_42845_42892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (21))){
var inst_42785 = (state_42836[(2)]);
var inst_42786 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42787 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42786);
var state_42836__$1 = (function (){var statearr_42846 = state_42836;
(statearr_42846[(7)] = inst_42785);

return statearr_42846;
})();
var statearr_42847_42893 = state_42836__$1;
(statearr_42847_42893[(2)] = inst_42787);

(statearr_42847_42893[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (31))){
var inst_42815 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42815)){
var statearr_42848_42894 = state_42836__$1;
(statearr_42848_42894[(1)] = (34));

} else {
var statearr_42849_42895 = state_42836__$1;
(statearr_42849_42895[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (32))){
var inst_42824 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42850_42896 = state_42836__$1;
(statearr_42850_42896[(2)] = inst_42824);

(statearr_42850_42896[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (33))){
var inst_42811 = (state_42836[(2)]);
var inst_42812 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42813 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42812);
var state_42836__$1 = (function (){var statearr_42851 = state_42836;
(statearr_42851[(8)] = inst_42811);

return statearr_42851;
})();
var statearr_42852_42897 = state_42836__$1;
(statearr_42852_42897[(2)] = inst_42813);

(statearr_42852_42897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (13))){
var inst_42770 = figwheel.client.heads_up.clear.call(null);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(16),inst_42770);
} else {
if((state_val_42837 === (22))){
var inst_42791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42792 = figwheel.client.heads_up.append_warning_message.call(null,inst_42791);
var state_42836__$1 = state_42836;
var statearr_42853_42898 = state_42836__$1;
(statearr_42853_42898[(2)] = inst_42792);

(statearr_42853_42898[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (36))){
var inst_42822 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42854_42899 = state_42836__$1;
(statearr_42854_42899[(2)] = inst_42822);

(statearr_42854_42899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (29))){
var inst_42802 = (state_42836[(2)]);
var inst_42803 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42804 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42803);
var state_42836__$1 = (function (){var statearr_42855 = state_42836;
(statearr_42855[(9)] = inst_42802);

return statearr_42855;
})();
var statearr_42856_42900 = state_42836__$1;
(statearr_42856_42900[(2)] = inst_42804);

(statearr_42856_42900[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (6))){
var inst_42751 = (state_42836[(10)]);
var state_42836__$1 = state_42836;
var statearr_42857_42901 = state_42836__$1;
(statearr_42857_42901[(2)] = inst_42751);

(statearr_42857_42901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (28))){
var inst_42798 = (state_42836[(2)]);
var inst_42799 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42800 = figwheel.client.heads_up.display_warning.call(null,inst_42799);
var state_42836__$1 = (function (){var statearr_42858 = state_42836;
(statearr_42858[(11)] = inst_42798);

return statearr_42858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(29),inst_42800);
} else {
if((state_val_42837 === (25))){
var inst_42796 = figwheel.client.heads_up.clear.call(null);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(28),inst_42796);
} else {
if((state_val_42837 === (34))){
var inst_42817 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(37),inst_42817);
} else {
if((state_val_42837 === (17))){
var inst_42776 = (state_42836[(2)]);
var inst_42777 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42778 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42777);
var state_42836__$1 = (function (){var statearr_42859 = state_42836;
(statearr_42859[(12)] = inst_42776);

return statearr_42859;
})();
var statearr_42860_42902 = state_42836__$1;
(statearr_42860_42902[(2)] = inst_42778);

(statearr_42860_42902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (3))){
var inst_42768 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42768)){
var statearr_42861_42903 = state_42836__$1;
(statearr_42861_42903[(1)] = (13));

} else {
var statearr_42862_42904 = state_42836__$1;
(statearr_42862_42904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (12))){
var inst_42764 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42863_42905 = state_42836__$1;
(statearr_42863_42905[(2)] = inst_42764);

(statearr_42863_42905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (2))){
var inst_42751 = (state_42836[(10)]);
var inst_42751__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42836__$1 = (function (){var statearr_42864 = state_42836;
(statearr_42864[(10)] = inst_42751__$1);

return statearr_42864;
})();
if(cljs.core.truth_(inst_42751__$1)){
var statearr_42865_42906 = state_42836__$1;
(statearr_42865_42906[(1)] = (5));

} else {
var statearr_42866_42907 = state_42836__$1;
(statearr_42866_42907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (23))){
var inst_42794 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42794)){
var statearr_42867_42908 = state_42836__$1;
(statearr_42867_42908[(1)] = (25));

} else {
var statearr_42868_42909 = state_42836__$1;
(statearr_42868_42909[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (35))){
var state_42836__$1 = state_42836;
var statearr_42869_42910 = state_42836__$1;
(statearr_42869_42910[(2)] = null);

(statearr_42869_42910[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (19))){
var inst_42789 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42789)){
var statearr_42870_42911 = state_42836__$1;
(statearr_42870_42911[(1)] = (22));

} else {
var statearr_42871_42912 = state_42836__$1;
(statearr_42871_42912[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (11))){
var inst_42760 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42872_42913 = state_42836__$1;
(statearr_42872_42913[(2)] = inst_42760);

(statearr_42872_42913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (9))){
var inst_42762 = figwheel.client.heads_up.clear.call(null);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(12),inst_42762);
} else {
if((state_val_42837 === (5))){
var inst_42753 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42836__$1 = state_42836;
var statearr_42873_42914 = state_42836__$1;
(statearr_42873_42914[(2)] = inst_42753);

(statearr_42873_42914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (14))){
var inst_42780 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42780)){
var statearr_42874_42915 = state_42836__$1;
(statearr_42874_42915[(1)] = (18));

} else {
var statearr_42875_42916 = state_42836__$1;
(statearr_42875_42916[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (26))){
var inst_42806 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42806)){
var statearr_42876_42917 = state_42836__$1;
(statearr_42876_42917[(1)] = (30));

} else {
var statearr_42877_42918 = state_42836__$1;
(statearr_42877_42918[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (16))){
var inst_42772 = (state_42836[(2)]);
var inst_42773 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42774 = figwheel.client.heads_up.display_exception.call(null,inst_42773);
var state_42836__$1 = (function (){var statearr_42878 = state_42836;
(statearr_42878[(13)] = inst_42772);

return statearr_42878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(17),inst_42774);
} else {
if((state_val_42837 === (30))){
var inst_42808 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42809 = figwheel.client.heads_up.display_warning.call(null,inst_42808);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(33),inst_42809);
} else {
if((state_val_42837 === (10))){
var inst_42766 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42879_42919 = state_42836__$1;
(statearr_42879_42919[(2)] = inst_42766);

(statearr_42879_42919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (18))){
var inst_42782 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42783 = figwheel.client.heads_up.display_exception.call(null,inst_42782);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(21),inst_42783);
} else {
if((state_val_42837 === (37))){
var inst_42819 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42880_42920 = state_42836__$1;
(statearr_42880_42920[(2)] = inst_42819);

(statearr_42880_42920[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (8))){
var inst_42758 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42836__$1,(11),inst_42758);
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
});})(c__36864__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__36774__auto__,c__36864__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____0 = (function (){
var statearr_42881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42881[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__);

(statearr_42881[(1)] = (1));

return statearr_42881;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____1 = (function (state_42836){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_42836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e42882){if((e42882 instanceof Object)){
var ex__36778__auto__ = e42882;
var statearr_42883_42921 = state_42836;
(statearr_42883_42921[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42922 = state_42836;
state_42836 = G__42922;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__ = function(state_42836){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____1.call(this,state_42836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,msg_hist,msg_names,msg))
})();
var state__36866__auto__ = (function (){var statearr_42884 = f__36865__auto__.call(null);
(statearr_42884[(6)] = c__36864__auto__);

return statearr_42884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__,msg_hist,msg_names,msg))
);

return c__36864__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36864__auto___42951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___42951,ch){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___42951,ch){
return (function (state_42937){
var state_val_42938 = (state_42937[(1)]);
if((state_val_42938 === (1))){
var state_42937__$1 = state_42937;
var statearr_42939_42952 = state_42937__$1;
(statearr_42939_42952[(2)] = null);

(statearr_42939_42952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42938 === (2))){
var state_42937__$1 = state_42937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42937__$1,(4),ch);
} else {
if((state_val_42938 === (3))){
var inst_42935 = (state_42937[(2)]);
var state_42937__$1 = state_42937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42937__$1,inst_42935);
} else {
if((state_val_42938 === (4))){
var inst_42925 = (state_42937[(7)]);
var inst_42925__$1 = (state_42937[(2)]);
var state_42937__$1 = (function (){var statearr_42940 = state_42937;
(statearr_42940[(7)] = inst_42925__$1);

return statearr_42940;
})();
if(cljs.core.truth_(inst_42925__$1)){
var statearr_42941_42953 = state_42937__$1;
(statearr_42941_42953[(1)] = (5));

} else {
var statearr_42942_42954 = state_42937__$1;
(statearr_42942_42954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42938 === (5))){
var inst_42925 = (state_42937[(7)]);
var inst_42927 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42925);
var state_42937__$1 = state_42937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42937__$1,(8),inst_42927);
} else {
if((state_val_42938 === (6))){
var state_42937__$1 = state_42937;
var statearr_42943_42955 = state_42937__$1;
(statearr_42943_42955[(2)] = null);

(statearr_42943_42955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42938 === (7))){
var inst_42933 = (state_42937[(2)]);
var state_42937__$1 = state_42937;
var statearr_42944_42956 = state_42937__$1;
(statearr_42944_42956[(2)] = inst_42933);

(statearr_42944_42956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42938 === (8))){
var inst_42929 = (state_42937[(2)]);
var state_42937__$1 = (function (){var statearr_42945 = state_42937;
(statearr_42945[(8)] = inst_42929);

return statearr_42945;
})();
var statearr_42946_42957 = state_42937__$1;
(statearr_42946_42957[(2)] = null);

(statearr_42946_42957[(1)] = (2));


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
});})(c__36864__auto___42951,ch))
;
return ((function (switch__36774__auto__,c__36864__auto___42951,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__36775__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36775__auto____0 = (function (){
var statearr_42947 = [null,null,null,null,null,null,null,null,null];
(statearr_42947[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36775__auto__);

(statearr_42947[(1)] = (1));

return statearr_42947;
});
var figwheel$client$heads_up_plugin_$_state_machine__36775__auto____1 = (function (state_42937){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_42937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e42948){if((e42948 instanceof Object)){
var ex__36778__auto__ = e42948;
var statearr_42949_42958 = state_42937;
(statearr_42949_42958[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42959 = state_42937;
state_42937 = G__42959;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36775__auto__ = function(state_42937){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36775__auto____1.call(this,state_42937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36775__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36775__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___42951,ch))
})();
var state__36866__auto__ = (function (){var statearr_42950 = f__36865__auto__.call(null);
(statearr_42950[(6)] = c__36864__auto___42951);

return statearr_42950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___42951,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__){
return (function (state_42965){
var state_val_42966 = (state_42965[(1)]);
if((state_val_42966 === (1))){
var inst_42960 = cljs.core.async.timeout.call(null,(3000));
var state_42965__$1 = state_42965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42965__$1,(2),inst_42960);
} else {
if((state_val_42966 === (2))){
var inst_42962 = (state_42965[(2)]);
var inst_42963 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42965__$1 = (function (){var statearr_42967 = state_42965;
(statearr_42967[(7)] = inst_42962);

return statearr_42967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42965__$1,inst_42963);
} else {
return null;
}
}
});})(c__36864__auto__))
;
return ((function (switch__36774__auto__,c__36864__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____0 = (function (){
var statearr_42968 = [null,null,null,null,null,null,null,null];
(statearr_42968[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__);

(statearr_42968[(1)] = (1));

return statearr_42968;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____1 = (function (state_42965){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_42965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e42969){if((e42969 instanceof Object)){
var ex__36778__auto__ = e42969;
var statearr_42970_42972 = state_42965;
(statearr_42970_42972[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42973 = state_42965;
state_42965 = G__42973;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__ = function(state_42965){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____1.call(this,state_42965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_42971 = f__36865__auto__.call(null);
(statearr_42971[(6)] = c__36864__auto__);

return statearr_42971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__))
);

return c__36864__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__,figwheel_version,temp__5457__auto__){
return (function (state_42980){
var state_val_42981 = (state_42980[(1)]);
if((state_val_42981 === (1))){
var inst_42974 = cljs.core.async.timeout.call(null,(2000));
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42980__$1,(2),inst_42974);
} else {
if((state_val_42981 === (2))){
var inst_42976 = (state_42980[(2)]);
var inst_42977 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42978 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42977);
var state_42980__$1 = (function (){var statearr_42982 = state_42980;
(statearr_42982[(7)] = inst_42976);

return statearr_42982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42980__$1,inst_42978);
} else {
return null;
}
}
});})(c__36864__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__36774__auto__,c__36864__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____0 = (function (){
var statearr_42983 = [null,null,null,null,null,null,null,null];
(statearr_42983[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__);

(statearr_42983[(1)] = (1));

return statearr_42983;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____1 = (function (state_42980){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_42980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e42984){if((e42984 instanceof Object)){
var ex__36778__auto__ = e42984;
var statearr_42985_42987 = state_42980;
(statearr_42985_42987[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42988 = state_42980;
state_42980 = G__42988;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__ = function(state_42980){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____1.call(this,state_42980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,figwheel_version,temp__5457__auto__))
})();
var state__36866__auto__ = (function (){var statearr_42986 = f__36865__auto__.call(null);
(statearr_42986[(6)] = c__36864__auto__);

return statearr_42986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__,figwheel_version,temp__5457__auto__))
);

return c__36864__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42989){
var map__42990 = p__42989;
var map__42990__$1 = ((((!((map__42990 == null)))?((((map__42990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42990):map__42990);
var file = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42992 = "";
var G__42992__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42992),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42992);
var G__42992__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42992__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42992__$1);
if(cljs.core.truth_((function (){var and__30216__auto__ = line;
if(cljs.core.truth_(and__30216__auto__)){
return column;
} else {
return and__30216__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42992__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42992__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42993){
var map__42994 = p__42993;
var map__42994__$1 = ((((!((map__42994 == null)))?((((map__42994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42994):map__42994);
var ed = map__42994__$1;
var formatted_exception = cljs.core.get.call(null,map__42994__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42994__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42994__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42996_43000 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42997_43001 = null;
var count__42998_43002 = (0);
var i__42999_43003 = (0);
while(true){
if((i__42999_43003 < count__42998_43002)){
var msg_43004 = cljs.core._nth.call(null,chunk__42997_43001,i__42999_43003);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43004);

var G__43005 = seq__42996_43000;
var G__43006 = chunk__42997_43001;
var G__43007 = count__42998_43002;
var G__43008 = (i__42999_43003 + (1));
seq__42996_43000 = G__43005;
chunk__42997_43001 = G__43006;
count__42998_43002 = G__43007;
i__42999_43003 = G__43008;
continue;
} else {
var temp__5457__auto___43009 = cljs.core.seq.call(null,seq__42996_43000);
if(temp__5457__auto___43009){
var seq__42996_43010__$1 = temp__5457__auto___43009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42996_43010__$1)){
var c__31159__auto___43011 = cljs.core.chunk_first.call(null,seq__42996_43010__$1);
var G__43012 = cljs.core.chunk_rest.call(null,seq__42996_43010__$1);
var G__43013 = c__31159__auto___43011;
var G__43014 = cljs.core.count.call(null,c__31159__auto___43011);
var G__43015 = (0);
seq__42996_43000 = G__43012;
chunk__42997_43001 = G__43013;
count__42998_43002 = G__43014;
i__42999_43003 = G__43015;
continue;
} else {
var msg_43016 = cljs.core.first.call(null,seq__42996_43010__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43016);

var G__43017 = cljs.core.next.call(null,seq__42996_43010__$1);
var G__43018 = null;
var G__43019 = (0);
var G__43020 = (0);
seq__42996_43000 = G__43017;
chunk__42997_43001 = G__43018;
count__42998_43002 = G__43019;
i__42999_43003 = G__43020;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43021){
var map__43022 = p__43021;
var map__43022__$1 = ((((!((map__43022 == null)))?((((map__43022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43022):map__43022);
var w = map__43022__$1;
var message = cljs.core.get.call(null,map__43022__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/tests/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/tests/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30216__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30216__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30216__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43024 = cljs.core.seq.call(null,plugins);
var chunk__43025 = null;
var count__43026 = (0);
var i__43027 = (0);
while(true){
if((i__43027 < count__43026)){
var vec__43028 = cljs.core._nth.call(null,chunk__43025,i__43027);
var k = cljs.core.nth.call(null,vec__43028,(0),null);
var plugin = cljs.core.nth.call(null,vec__43028,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43034 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43024,chunk__43025,count__43026,i__43027,pl_43034,vec__43028,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43034.call(null,msg_hist);
});})(seq__43024,chunk__43025,count__43026,i__43027,pl_43034,vec__43028,k,plugin))
);
} else {
}

var G__43035 = seq__43024;
var G__43036 = chunk__43025;
var G__43037 = count__43026;
var G__43038 = (i__43027 + (1));
seq__43024 = G__43035;
chunk__43025 = G__43036;
count__43026 = G__43037;
i__43027 = G__43038;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43024);
if(temp__5457__auto__){
var seq__43024__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43024__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__43024__$1);
var G__43039 = cljs.core.chunk_rest.call(null,seq__43024__$1);
var G__43040 = c__31159__auto__;
var G__43041 = cljs.core.count.call(null,c__31159__auto__);
var G__43042 = (0);
seq__43024 = G__43039;
chunk__43025 = G__43040;
count__43026 = G__43041;
i__43027 = G__43042;
continue;
} else {
var vec__43031 = cljs.core.first.call(null,seq__43024__$1);
var k = cljs.core.nth.call(null,vec__43031,(0),null);
var plugin = cljs.core.nth.call(null,vec__43031,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43043 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43024,chunk__43025,count__43026,i__43027,pl_43043,vec__43031,k,plugin,seq__43024__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43043.call(null,msg_hist);
});})(seq__43024,chunk__43025,count__43026,i__43027,pl_43043,vec__43031,k,plugin,seq__43024__$1,temp__5457__auto__))
);
} else {
}

var G__43044 = cljs.core.next.call(null,seq__43024__$1);
var G__43045 = null;
var G__43046 = (0);
var G__43047 = (0);
seq__43024 = G__43044;
chunk__43025 = G__43045;
count__43026 = G__43046;
i__43027 = G__43047;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__43049 = arguments.length;
switch (G__43049) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__43050_43055 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43051_43056 = null;
var count__43052_43057 = (0);
var i__43053_43058 = (0);
while(true){
if((i__43053_43058 < count__43052_43057)){
var msg_43059 = cljs.core._nth.call(null,chunk__43051_43056,i__43053_43058);
figwheel.client.socket.handle_incoming_message.call(null,msg_43059);

var G__43060 = seq__43050_43055;
var G__43061 = chunk__43051_43056;
var G__43062 = count__43052_43057;
var G__43063 = (i__43053_43058 + (1));
seq__43050_43055 = G__43060;
chunk__43051_43056 = G__43061;
count__43052_43057 = G__43062;
i__43053_43058 = G__43063;
continue;
} else {
var temp__5457__auto___43064 = cljs.core.seq.call(null,seq__43050_43055);
if(temp__5457__auto___43064){
var seq__43050_43065__$1 = temp__5457__auto___43064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43050_43065__$1)){
var c__31159__auto___43066 = cljs.core.chunk_first.call(null,seq__43050_43065__$1);
var G__43067 = cljs.core.chunk_rest.call(null,seq__43050_43065__$1);
var G__43068 = c__31159__auto___43066;
var G__43069 = cljs.core.count.call(null,c__31159__auto___43066);
var G__43070 = (0);
seq__43050_43055 = G__43067;
chunk__43051_43056 = G__43068;
count__43052_43057 = G__43069;
i__43053_43058 = G__43070;
continue;
} else {
var msg_43071 = cljs.core.first.call(null,seq__43050_43065__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43071);

var G__43072 = cljs.core.next.call(null,seq__43050_43065__$1);
var G__43073 = null;
var G__43074 = (0);
var G__43075 = (0);
seq__43050_43055 = G__43072;
chunk__43051_43056 = G__43073;
count__43052_43057 = G__43074;
i__43053_43058 = G__43075;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31514__auto__ = [];
var len__31507__auto___43080 = arguments.length;
var i__31508__auto___43081 = (0);
while(true){
if((i__31508__auto___43081 < len__31507__auto___43080)){
args__31514__auto__.push((arguments[i__31508__auto___43081]));

var G__43082 = (i__31508__auto___43081 + (1));
i__31508__auto___43081 = G__43082;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43077){
var map__43078 = p__43077;
var map__43078__$1 = ((((!((map__43078 == null)))?((((map__43078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43078):map__43078);
var opts = map__43078__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43076){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43076));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43083){if((e43083 instanceof Error)){
var e = e43083;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43083;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__43084){
var map__43085 = p__43084;
var map__43085__$1 = ((((!((map__43085 == null)))?((((map__43085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43085):map__43085);
var msg_name = cljs.core.get.call(null,map__43085__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512749396370
