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
}catch (e52133){if((e52133 instanceof Error)){
var e = e52133;
return "Error: Unable to stringify";
} else {
throw e52133;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__52136 = arguments.length;
switch (G__52136) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__52134_SHARP_){
if(typeof p1__52134_SHARP_ === 'string'){
return p1__52134_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__52134_SHARP_);
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
var len__31507__auto___52139 = arguments.length;
var i__31508__auto___52140 = (0);
while(true){
if((i__31508__auto___52140 < len__31507__auto___52139)){
args__31514__auto__.push((arguments[i__31508__auto___52140]));

var G__52141 = (i__31508__auto___52140 + (1));
i__31508__auto___52140 = G__52141;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq52138){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52138));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31514__auto__ = [];
var len__31507__auto___52143 = arguments.length;
var i__31508__auto___52144 = (0);
while(true){
if((i__31508__auto___52144 < len__31507__auto___52143)){
args__31514__auto__.push((arguments[i__31508__auto___52144]));

var G__52145 = (i__31508__auto___52144 + (1));
i__31508__auto___52144 = G__52145;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq52142){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52142));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__52146){
var map__52147 = p__52146;
var map__52147__$1 = ((((!((map__52147 == null)))?((((map__52147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52147):map__52147);
var message = cljs.core.get.call(null,map__52147__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__52147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__36864__auto___52226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___52226,ch){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___52226,ch){
return (function (state_52198){
var state_val_52199 = (state_52198[(1)]);
if((state_val_52199 === (7))){
var inst_52194 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
var statearr_52200_52227 = state_52198__$1;
(statearr_52200_52227[(2)] = inst_52194);

(statearr_52200_52227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (1))){
var state_52198__$1 = state_52198;
var statearr_52201_52228 = state_52198__$1;
(statearr_52201_52228[(2)] = null);

(statearr_52201_52228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (4))){
var inst_52151 = (state_52198[(7)]);
var inst_52151__$1 = (state_52198[(2)]);
var state_52198__$1 = (function (){var statearr_52202 = state_52198;
(statearr_52202[(7)] = inst_52151__$1);

return statearr_52202;
})();
if(cljs.core.truth_(inst_52151__$1)){
var statearr_52203_52229 = state_52198__$1;
(statearr_52203_52229[(1)] = (5));

} else {
var statearr_52204_52230 = state_52198__$1;
(statearr_52204_52230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (15))){
var inst_52158 = (state_52198[(8)]);
var inst_52173 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52158);
var inst_52174 = cljs.core.first.call(null,inst_52173);
var inst_52175 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_52174);
var inst_52176 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52175)].join('');
var inst_52177 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_52176);
var state_52198__$1 = state_52198;
var statearr_52205_52231 = state_52198__$1;
(statearr_52205_52231[(2)] = inst_52177);

(statearr_52205_52231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (13))){
var inst_52182 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
var statearr_52206_52232 = state_52198__$1;
(statearr_52206_52232[(2)] = inst_52182);

(statearr_52206_52232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (6))){
var state_52198__$1 = state_52198;
var statearr_52207_52233 = state_52198__$1;
(statearr_52207_52233[(2)] = null);

(statearr_52207_52233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (17))){
var inst_52180 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
var statearr_52208_52234 = state_52198__$1;
(statearr_52208_52234[(2)] = inst_52180);

(statearr_52208_52234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (3))){
var inst_52196 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52198__$1,inst_52196);
} else {
if((state_val_52199 === (12))){
var inst_52157 = (state_52198[(9)]);
var inst_52171 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_52157,opts);
var state_52198__$1 = state_52198;
if(cljs.core.truth_(inst_52171)){
var statearr_52209_52235 = state_52198__$1;
(statearr_52209_52235[(1)] = (15));

} else {
var statearr_52210_52236 = state_52198__$1;
(statearr_52210_52236[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (2))){
var state_52198__$1 = state_52198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52198__$1,(4),ch);
} else {
if((state_val_52199 === (11))){
var inst_52158 = (state_52198[(8)]);
var inst_52163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52164 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_52158);
var inst_52165 = cljs.core.async.timeout.call(null,(1000));
var inst_52166 = [inst_52164,inst_52165];
var inst_52167 = (new cljs.core.PersistentVector(null,2,(5),inst_52163,inst_52166,null));
var state_52198__$1 = state_52198;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52198__$1,(14),inst_52167);
} else {
if((state_val_52199 === (9))){
var inst_52158 = (state_52198[(8)]);
var inst_52184 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_52185 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52158);
var inst_52186 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52185);
var inst_52187 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52186)].join('');
var inst_52188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_52187);
var state_52198__$1 = (function (){var statearr_52211 = state_52198;
(statearr_52211[(10)] = inst_52184);

return statearr_52211;
})();
var statearr_52212_52237 = state_52198__$1;
(statearr_52212_52237[(2)] = inst_52188);

(statearr_52212_52237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (5))){
var inst_52151 = (state_52198[(7)]);
var inst_52153 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_52154 = (new cljs.core.PersistentArrayMap(null,2,inst_52153,null));
var inst_52155 = (new cljs.core.PersistentHashSet(null,inst_52154,null));
var inst_52156 = figwheel.client.focus_msgs.call(null,inst_52155,inst_52151);
var inst_52157 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_52156);
var inst_52158 = cljs.core.first.call(null,inst_52156);
var inst_52159 = figwheel.client.autoload_QMARK_.call(null);
var state_52198__$1 = (function (){var statearr_52213 = state_52198;
(statearr_52213[(9)] = inst_52157);

(statearr_52213[(8)] = inst_52158);

return statearr_52213;
})();
if(cljs.core.truth_(inst_52159)){
var statearr_52214_52238 = state_52198__$1;
(statearr_52214_52238[(1)] = (8));

} else {
var statearr_52215_52239 = state_52198__$1;
(statearr_52215_52239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (14))){
var inst_52169 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
var statearr_52216_52240 = state_52198__$1;
(statearr_52216_52240[(2)] = inst_52169);

(statearr_52216_52240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (16))){
var state_52198__$1 = state_52198;
var statearr_52217_52241 = state_52198__$1;
(statearr_52217_52241[(2)] = null);

(statearr_52217_52241[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (10))){
var inst_52190 = (state_52198[(2)]);
var state_52198__$1 = (function (){var statearr_52218 = state_52198;
(statearr_52218[(11)] = inst_52190);

return statearr_52218;
})();
var statearr_52219_52242 = state_52198__$1;
(statearr_52219_52242[(2)] = null);

(statearr_52219_52242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (8))){
var inst_52157 = (state_52198[(9)]);
var inst_52161 = figwheel.client.reload_file_state_QMARK_.call(null,inst_52157,opts);
var state_52198__$1 = state_52198;
if(cljs.core.truth_(inst_52161)){
var statearr_52220_52243 = state_52198__$1;
(statearr_52220_52243[(1)] = (11));

} else {
var statearr_52221_52244 = state_52198__$1;
(statearr_52221_52244[(1)] = (12));

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
});})(c__36864__auto___52226,ch))
;
return ((function (switch__36774__auto__,c__36864__auto___52226,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____0 = (function (){
var statearr_52222 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52222[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__);

(statearr_52222[(1)] = (1));

return statearr_52222;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____1 = (function (state_52198){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_52198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e52223){if((e52223 instanceof Object)){
var ex__36778__auto__ = e52223;
var statearr_52224_52245 = state_52198;
(statearr_52224_52245[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52246 = state_52198;
state_52198 = G__52246;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__ = function(state_52198){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____1.call(this,state_52198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36775__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___52226,ch))
})();
var state__36866__auto__ = (function (){var statearr_52225 = f__36865__auto__.call(null);
(statearr_52225[(6)] = c__36864__auto___52226);

return statearr_52225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___52226,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__52247_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__52247_SHARP_));
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
var base_path_52249 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_52249){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e52248){if((e52248 instanceof Error)){
var e = e52248;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_52249], null));
} else {
var e = e52248;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_52249))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__52250){
var map__52251 = p__52250;
var map__52251__$1 = ((((!((map__52251 == null)))?((((map__52251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52251):map__52251);
var opts = map__52251__$1;
var build_id = cljs.core.get.call(null,map__52251__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__52251,map__52251__$1,opts,build_id){
return (function (p__52253){
var vec__52254 = p__52253;
var seq__52255 = cljs.core.seq.call(null,vec__52254);
var first__52256 = cljs.core.first.call(null,seq__52255);
var seq__52255__$1 = cljs.core.next.call(null,seq__52255);
var map__52257 = first__52256;
var map__52257__$1 = ((((!((map__52257 == null)))?((((map__52257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52257):map__52257);
var msg = map__52257__$1;
var msg_name = cljs.core.get.call(null,map__52257__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52255__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__52254,seq__52255,first__52256,seq__52255__$1,map__52257,map__52257__$1,msg,msg_name,_,map__52251,map__52251__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__52254,seq__52255,first__52256,seq__52255__$1,map__52257,map__52257__$1,msg,msg_name,_,map__52251,map__52251__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__52251,map__52251__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__52259){
var vec__52260 = p__52259;
var seq__52261 = cljs.core.seq.call(null,vec__52260);
var first__52262 = cljs.core.first.call(null,seq__52261);
var seq__52261__$1 = cljs.core.next.call(null,seq__52261);
var map__52263 = first__52262;
var map__52263__$1 = ((((!((map__52263 == null)))?((((map__52263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52263):map__52263);
var msg = map__52263__$1;
var msg_name = cljs.core.get.call(null,map__52263__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52261__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__52265){
var map__52266 = p__52265;
var map__52266__$1 = ((((!((map__52266 == null)))?((((map__52266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52266):map__52266);
var on_compile_warning = cljs.core.get.call(null,map__52266__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__52266__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__52266,map__52266__$1,on_compile_warning,on_compile_fail){
return (function (p__52268){
var vec__52269 = p__52268;
var seq__52270 = cljs.core.seq.call(null,vec__52269);
var first__52271 = cljs.core.first.call(null,seq__52270);
var seq__52270__$1 = cljs.core.next.call(null,seq__52270);
var map__52272 = first__52271;
var map__52272__$1 = ((((!((map__52272 == null)))?((((map__52272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52272):map__52272);
var msg = map__52272__$1;
var msg_name = cljs.core.get.call(null,map__52272__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52270__$1;
var pred__52274 = cljs.core._EQ_;
var expr__52275 = msg_name;
if(cljs.core.truth_(pred__52274.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__52275))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__52274.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__52275))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__52266,map__52266__$1,on_compile_warning,on_compile_fail))
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
return (function (state_52364){
var state_val_52365 = (state_52364[(1)]);
if((state_val_52365 === (7))){
var inst_52284 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
if(cljs.core.truth_(inst_52284)){
var statearr_52366_52413 = state_52364__$1;
(statearr_52366_52413[(1)] = (8));

} else {
var statearr_52367_52414 = state_52364__$1;
(statearr_52367_52414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (20))){
var inst_52358 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52368_52415 = state_52364__$1;
(statearr_52368_52415[(2)] = inst_52358);

(statearr_52368_52415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (27))){
var inst_52354 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52369_52416 = state_52364__$1;
(statearr_52369_52416[(2)] = inst_52354);

(statearr_52369_52416[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (1))){
var inst_52277 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_52364__$1 = state_52364;
if(cljs.core.truth_(inst_52277)){
var statearr_52370_52417 = state_52364__$1;
(statearr_52370_52417[(1)] = (2));

} else {
var statearr_52371_52418 = state_52364__$1;
(statearr_52371_52418[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (24))){
var inst_52356 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52372_52419 = state_52364__$1;
(statearr_52372_52419[(2)] = inst_52356);

(statearr_52372_52419[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (4))){
var inst_52362 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52364__$1,inst_52362);
} else {
if((state_val_52365 === (15))){
var inst_52360 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52373_52420 = state_52364__$1;
(statearr_52373_52420[(2)] = inst_52360);

(statearr_52373_52420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (21))){
var inst_52313 = (state_52364[(2)]);
var inst_52314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52315 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52314);
var state_52364__$1 = (function (){var statearr_52374 = state_52364;
(statearr_52374[(7)] = inst_52313);

return statearr_52374;
})();
var statearr_52375_52421 = state_52364__$1;
(statearr_52375_52421[(2)] = inst_52315);

(statearr_52375_52421[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (31))){
var inst_52343 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_52364__$1 = state_52364;
if(cljs.core.truth_(inst_52343)){
var statearr_52376_52422 = state_52364__$1;
(statearr_52376_52422[(1)] = (34));

} else {
var statearr_52377_52423 = state_52364__$1;
(statearr_52377_52423[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (32))){
var inst_52352 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52378_52424 = state_52364__$1;
(statearr_52378_52424[(2)] = inst_52352);

(statearr_52378_52424[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (33))){
var inst_52339 = (state_52364[(2)]);
var inst_52340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52341 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52340);
var state_52364__$1 = (function (){var statearr_52379 = state_52364;
(statearr_52379[(8)] = inst_52339);

return statearr_52379;
})();
var statearr_52380_52425 = state_52364__$1;
(statearr_52380_52425[(2)] = inst_52341);

(statearr_52380_52425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (13))){
var inst_52298 = figwheel.client.heads_up.clear.call(null);
var state_52364__$1 = state_52364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(16),inst_52298);
} else {
if((state_val_52365 === (22))){
var inst_52319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52320 = figwheel.client.heads_up.append_warning_message.call(null,inst_52319);
var state_52364__$1 = state_52364;
var statearr_52381_52426 = state_52364__$1;
(statearr_52381_52426[(2)] = inst_52320);

(statearr_52381_52426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (36))){
var inst_52350 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52382_52427 = state_52364__$1;
(statearr_52382_52427[(2)] = inst_52350);

(statearr_52382_52427[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (29))){
var inst_52330 = (state_52364[(2)]);
var inst_52331 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52332 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52331);
var state_52364__$1 = (function (){var statearr_52383 = state_52364;
(statearr_52383[(9)] = inst_52330);

return statearr_52383;
})();
var statearr_52384_52428 = state_52364__$1;
(statearr_52384_52428[(2)] = inst_52332);

(statearr_52384_52428[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (6))){
var inst_52279 = (state_52364[(10)]);
var state_52364__$1 = state_52364;
var statearr_52385_52429 = state_52364__$1;
(statearr_52385_52429[(2)] = inst_52279);

(statearr_52385_52429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (28))){
var inst_52326 = (state_52364[(2)]);
var inst_52327 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52328 = figwheel.client.heads_up.display_warning.call(null,inst_52327);
var state_52364__$1 = (function (){var statearr_52386 = state_52364;
(statearr_52386[(11)] = inst_52326);

return statearr_52386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(29),inst_52328);
} else {
if((state_val_52365 === (25))){
var inst_52324 = figwheel.client.heads_up.clear.call(null);
var state_52364__$1 = state_52364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(28),inst_52324);
} else {
if((state_val_52365 === (34))){
var inst_52345 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52364__$1 = state_52364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(37),inst_52345);
} else {
if((state_val_52365 === (17))){
var inst_52304 = (state_52364[(2)]);
var inst_52305 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52306 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52305);
var state_52364__$1 = (function (){var statearr_52387 = state_52364;
(statearr_52387[(12)] = inst_52304);

return statearr_52387;
})();
var statearr_52388_52430 = state_52364__$1;
(statearr_52388_52430[(2)] = inst_52306);

(statearr_52388_52430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (3))){
var inst_52296 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_52364__$1 = state_52364;
if(cljs.core.truth_(inst_52296)){
var statearr_52389_52431 = state_52364__$1;
(statearr_52389_52431[(1)] = (13));

} else {
var statearr_52390_52432 = state_52364__$1;
(statearr_52390_52432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (12))){
var inst_52292 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52391_52433 = state_52364__$1;
(statearr_52391_52433[(2)] = inst_52292);

(statearr_52391_52433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (2))){
var inst_52279 = (state_52364[(10)]);
var inst_52279__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_52364__$1 = (function (){var statearr_52392 = state_52364;
(statearr_52392[(10)] = inst_52279__$1);

return statearr_52392;
})();
if(cljs.core.truth_(inst_52279__$1)){
var statearr_52393_52434 = state_52364__$1;
(statearr_52393_52434[(1)] = (5));

} else {
var statearr_52394_52435 = state_52364__$1;
(statearr_52394_52435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (23))){
var inst_52322 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_52364__$1 = state_52364;
if(cljs.core.truth_(inst_52322)){
var statearr_52395_52436 = state_52364__$1;
(statearr_52395_52436[(1)] = (25));

} else {
var statearr_52396_52437 = state_52364__$1;
(statearr_52396_52437[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (35))){
var state_52364__$1 = state_52364;
var statearr_52397_52438 = state_52364__$1;
(statearr_52397_52438[(2)] = null);

(statearr_52397_52438[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (19))){
var inst_52317 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_52364__$1 = state_52364;
if(cljs.core.truth_(inst_52317)){
var statearr_52398_52439 = state_52364__$1;
(statearr_52398_52439[(1)] = (22));

} else {
var statearr_52399_52440 = state_52364__$1;
(statearr_52399_52440[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (11))){
var inst_52288 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52400_52441 = state_52364__$1;
(statearr_52400_52441[(2)] = inst_52288);

(statearr_52400_52441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (9))){
var inst_52290 = figwheel.client.heads_up.clear.call(null);
var state_52364__$1 = state_52364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(12),inst_52290);
} else {
if((state_val_52365 === (5))){
var inst_52281 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_52364__$1 = state_52364;
var statearr_52401_52442 = state_52364__$1;
(statearr_52401_52442[(2)] = inst_52281);

(statearr_52401_52442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (14))){
var inst_52308 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_52364__$1 = state_52364;
if(cljs.core.truth_(inst_52308)){
var statearr_52402_52443 = state_52364__$1;
(statearr_52402_52443[(1)] = (18));

} else {
var statearr_52403_52444 = state_52364__$1;
(statearr_52403_52444[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (26))){
var inst_52334 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_52364__$1 = state_52364;
if(cljs.core.truth_(inst_52334)){
var statearr_52404_52445 = state_52364__$1;
(statearr_52404_52445[(1)] = (30));

} else {
var statearr_52405_52446 = state_52364__$1;
(statearr_52405_52446[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (16))){
var inst_52300 = (state_52364[(2)]);
var inst_52301 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52302 = figwheel.client.heads_up.display_exception.call(null,inst_52301);
var state_52364__$1 = (function (){var statearr_52406 = state_52364;
(statearr_52406[(13)] = inst_52300);

return statearr_52406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(17),inst_52302);
} else {
if((state_val_52365 === (30))){
var inst_52336 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52337 = figwheel.client.heads_up.display_warning.call(null,inst_52336);
var state_52364__$1 = state_52364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(33),inst_52337);
} else {
if((state_val_52365 === (10))){
var inst_52294 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52407_52447 = state_52364__$1;
(statearr_52407_52447[(2)] = inst_52294);

(statearr_52407_52447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (18))){
var inst_52310 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52311 = figwheel.client.heads_up.display_exception.call(null,inst_52310);
var state_52364__$1 = state_52364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(21),inst_52311);
} else {
if((state_val_52365 === (37))){
var inst_52347 = (state_52364[(2)]);
var state_52364__$1 = state_52364;
var statearr_52408_52448 = state_52364__$1;
(statearr_52408_52448[(2)] = inst_52347);

(statearr_52408_52448[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52365 === (8))){
var inst_52286 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52364__$1 = state_52364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52364__$1,(11),inst_52286);
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
var statearr_52409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52409[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__);

(statearr_52409[(1)] = (1));

return statearr_52409;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____1 = (function (state_52364){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_52364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e52410){if((e52410 instanceof Object)){
var ex__36778__auto__ = e52410;
var statearr_52411_52449 = state_52364;
(statearr_52411_52449[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52450 = state_52364;
state_52364 = G__52450;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__ = function(state_52364){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____1.call(this,state_52364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,msg_hist,msg_names,msg))
})();
var state__36866__auto__ = (function (){var statearr_52412 = f__36865__auto__.call(null);
(statearr_52412[(6)] = c__36864__auto__);

return statearr_52412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__,msg_hist,msg_names,msg))
);

return c__36864__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36864__auto___52479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___52479,ch){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___52479,ch){
return (function (state_52465){
var state_val_52466 = (state_52465[(1)]);
if((state_val_52466 === (1))){
var state_52465__$1 = state_52465;
var statearr_52467_52480 = state_52465__$1;
(statearr_52467_52480[(2)] = null);

(statearr_52467_52480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52466 === (2))){
var state_52465__$1 = state_52465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52465__$1,(4),ch);
} else {
if((state_val_52466 === (3))){
var inst_52463 = (state_52465[(2)]);
var state_52465__$1 = state_52465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52465__$1,inst_52463);
} else {
if((state_val_52466 === (4))){
var inst_52453 = (state_52465[(7)]);
var inst_52453__$1 = (state_52465[(2)]);
var state_52465__$1 = (function (){var statearr_52468 = state_52465;
(statearr_52468[(7)] = inst_52453__$1);

return statearr_52468;
})();
if(cljs.core.truth_(inst_52453__$1)){
var statearr_52469_52481 = state_52465__$1;
(statearr_52469_52481[(1)] = (5));

} else {
var statearr_52470_52482 = state_52465__$1;
(statearr_52470_52482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52466 === (5))){
var inst_52453 = (state_52465[(7)]);
var inst_52455 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52453);
var state_52465__$1 = state_52465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52465__$1,(8),inst_52455);
} else {
if((state_val_52466 === (6))){
var state_52465__$1 = state_52465;
var statearr_52471_52483 = state_52465__$1;
(statearr_52471_52483[(2)] = null);

(statearr_52471_52483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52466 === (7))){
var inst_52461 = (state_52465[(2)]);
var state_52465__$1 = state_52465;
var statearr_52472_52484 = state_52465__$1;
(statearr_52472_52484[(2)] = inst_52461);

(statearr_52472_52484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52466 === (8))){
var inst_52457 = (state_52465[(2)]);
var state_52465__$1 = (function (){var statearr_52473 = state_52465;
(statearr_52473[(8)] = inst_52457);

return statearr_52473;
})();
var statearr_52474_52485 = state_52465__$1;
(statearr_52474_52485[(2)] = null);

(statearr_52474_52485[(1)] = (2));


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
});})(c__36864__auto___52479,ch))
;
return ((function (switch__36774__auto__,c__36864__auto___52479,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__36775__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36775__auto____0 = (function (){
var statearr_52475 = [null,null,null,null,null,null,null,null,null];
(statearr_52475[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36775__auto__);

(statearr_52475[(1)] = (1));

return statearr_52475;
});
var figwheel$client$heads_up_plugin_$_state_machine__36775__auto____1 = (function (state_52465){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_52465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e52476){if((e52476 instanceof Object)){
var ex__36778__auto__ = e52476;
var statearr_52477_52486 = state_52465;
(statearr_52477_52486[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52487 = state_52465;
state_52465 = G__52487;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36775__auto__ = function(state_52465){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36775__auto____1.call(this,state_52465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36775__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36775__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___52479,ch))
})();
var state__36866__auto__ = (function (){var statearr_52478 = f__36865__auto__.call(null);
(statearr_52478[(6)] = c__36864__auto___52479);

return statearr_52478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___52479,ch))
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
return (function (state_52493){
var state_val_52494 = (state_52493[(1)]);
if((state_val_52494 === (1))){
var inst_52488 = cljs.core.async.timeout.call(null,(3000));
var state_52493__$1 = state_52493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52493__$1,(2),inst_52488);
} else {
if((state_val_52494 === (2))){
var inst_52490 = (state_52493[(2)]);
var inst_52491 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52493__$1 = (function (){var statearr_52495 = state_52493;
(statearr_52495[(7)] = inst_52490);

return statearr_52495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52493__$1,inst_52491);
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
var statearr_52496 = [null,null,null,null,null,null,null,null];
(statearr_52496[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__);

(statearr_52496[(1)] = (1));

return statearr_52496;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____1 = (function (state_52493){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_52493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e52497){if((e52497 instanceof Object)){
var ex__36778__auto__ = e52497;
var statearr_52498_52500 = state_52493;
(statearr_52498_52500[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52501 = state_52493;
state_52493 = G__52501;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__ = function(state_52493){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____1.call(this,state_52493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36775__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_52499 = f__36865__auto__.call(null);
(statearr_52499[(6)] = c__36864__auto__);

return statearr_52499;
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
return (function (state_52508){
var state_val_52509 = (state_52508[(1)]);
if((state_val_52509 === (1))){
var inst_52502 = cljs.core.async.timeout.call(null,(2000));
var state_52508__$1 = state_52508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52508__$1,(2),inst_52502);
} else {
if((state_val_52509 === (2))){
var inst_52504 = (state_52508[(2)]);
var inst_52505 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_52506 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52505);
var state_52508__$1 = (function (){var statearr_52510 = state_52508;
(statearr_52510[(7)] = inst_52504);

return statearr_52510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52508__$1,inst_52506);
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
var statearr_52511 = [null,null,null,null,null,null,null,null];
(statearr_52511[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__);

(statearr_52511[(1)] = (1));

return statearr_52511;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____1 = (function (state_52508){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_52508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e52512){if((e52512 instanceof Object)){
var ex__36778__auto__ = e52512;
var statearr_52513_52515 = state_52508;
(statearr_52513_52515[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52516 = state_52508;
state_52508 = G__52516;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__ = function(state_52508){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____1.call(this,state_52508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,figwheel_version,temp__5457__auto__))
})();
var state__36866__auto__ = (function (){var statearr_52514 = f__36865__auto__.call(null);
(statearr_52514[(6)] = c__36864__auto__);

return statearr_52514;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52517){
var map__52518 = p__52517;
var map__52518__$1 = ((((!((map__52518 == null)))?((((map__52518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52518):map__52518);
var file = cljs.core.get.call(null,map__52518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52518__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52518__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52520 = "";
var G__52520__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52520),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__52520);
var G__52520__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52520__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__52520__$1);
if(cljs.core.truth_((function (){var and__30216__auto__ = line;
if(cljs.core.truth_(and__30216__auto__)){
return column;
} else {
return and__30216__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52520__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__52520__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52521){
var map__52522 = p__52521;
var map__52522__$1 = ((((!((map__52522 == null)))?((((map__52522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52522):map__52522);
var ed = map__52522__$1;
var formatted_exception = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52524_52528 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52525_52529 = null;
var count__52526_52530 = (0);
var i__52527_52531 = (0);
while(true){
if((i__52527_52531 < count__52526_52530)){
var msg_52532 = cljs.core._nth.call(null,chunk__52525_52529,i__52527_52531);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52532);

var G__52533 = seq__52524_52528;
var G__52534 = chunk__52525_52529;
var G__52535 = count__52526_52530;
var G__52536 = (i__52527_52531 + (1));
seq__52524_52528 = G__52533;
chunk__52525_52529 = G__52534;
count__52526_52530 = G__52535;
i__52527_52531 = G__52536;
continue;
} else {
var temp__5457__auto___52537 = cljs.core.seq.call(null,seq__52524_52528);
if(temp__5457__auto___52537){
var seq__52524_52538__$1 = temp__5457__auto___52537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52524_52538__$1)){
var c__31159__auto___52539 = cljs.core.chunk_first.call(null,seq__52524_52538__$1);
var G__52540 = cljs.core.chunk_rest.call(null,seq__52524_52538__$1);
var G__52541 = c__31159__auto___52539;
var G__52542 = cljs.core.count.call(null,c__31159__auto___52539);
var G__52543 = (0);
seq__52524_52528 = G__52540;
chunk__52525_52529 = G__52541;
count__52526_52530 = G__52542;
i__52527_52531 = G__52543;
continue;
} else {
var msg_52544 = cljs.core.first.call(null,seq__52524_52538__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52544);

var G__52545 = cljs.core.next.call(null,seq__52524_52538__$1);
var G__52546 = null;
var G__52547 = (0);
var G__52548 = (0);
seq__52524_52528 = G__52545;
chunk__52525_52529 = G__52546;
count__52526_52530 = G__52547;
i__52527_52531 = G__52548;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52549){
var map__52550 = p__52549;
var map__52550__$1 = ((((!((map__52550 == null)))?((((map__52550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52550):map__52550);
var w = map__52550__$1;
var message = cljs.core.get.call(null,map__52550__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__52552 = cljs.core.seq.call(null,plugins);
var chunk__52553 = null;
var count__52554 = (0);
var i__52555 = (0);
while(true){
if((i__52555 < count__52554)){
var vec__52556 = cljs.core._nth.call(null,chunk__52553,i__52555);
var k = cljs.core.nth.call(null,vec__52556,(0),null);
var plugin = cljs.core.nth.call(null,vec__52556,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52562 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52552,chunk__52553,count__52554,i__52555,pl_52562,vec__52556,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52562.call(null,msg_hist);
});})(seq__52552,chunk__52553,count__52554,i__52555,pl_52562,vec__52556,k,plugin))
);
} else {
}

var G__52563 = seq__52552;
var G__52564 = chunk__52553;
var G__52565 = count__52554;
var G__52566 = (i__52555 + (1));
seq__52552 = G__52563;
chunk__52553 = G__52564;
count__52554 = G__52565;
i__52555 = G__52566;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52552);
if(temp__5457__auto__){
var seq__52552__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52552__$1)){
var c__31159__auto__ = cljs.core.chunk_first.call(null,seq__52552__$1);
var G__52567 = cljs.core.chunk_rest.call(null,seq__52552__$1);
var G__52568 = c__31159__auto__;
var G__52569 = cljs.core.count.call(null,c__31159__auto__);
var G__52570 = (0);
seq__52552 = G__52567;
chunk__52553 = G__52568;
count__52554 = G__52569;
i__52555 = G__52570;
continue;
} else {
var vec__52559 = cljs.core.first.call(null,seq__52552__$1);
var k = cljs.core.nth.call(null,vec__52559,(0),null);
var plugin = cljs.core.nth.call(null,vec__52559,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52571 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52552,chunk__52553,count__52554,i__52555,pl_52571,vec__52559,k,plugin,seq__52552__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_52571.call(null,msg_hist);
});})(seq__52552,chunk__52553,count__52554,i__52555,pl_52571,vec__52559,k,plugin,seq__52552__$1,temp__5457__auto__))
);
} else {
}

var G__52572 = cljs.core.next.call(null,seq__52552__$1);
var G__52573 = null;
var G__52574 = (0);
var G__52575 = (0);
seq__52552 = G__52572;
chunk__52553 = G__52573;
count__52554 = G__52574;
i__52555 = G__52575;
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
var G__52577 = arguments.length;
switch (G__52577) {
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

var seq__52578_52583 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__52579_52584 = null;
var count__52580_52585 = (0);
var i__52581_52586 = (0);
while(true){
if((i__52581_52586 < count__52580_52585)){
var msg_52587 = cljs.core._nth.call(null,chunk__52579_52584,i__52581_52586);
figwheel.client.socket.handle_incoming_message.call(null,msg_52587);

var G__52588 = seq__52578_52583;
var G__52589 = chunk__52579_52584;
var G__52590 = count__52580_52585;
var G__52591 = (i__52581_52586 + (1));
seq__52578_52583 = G__52588;
chunk__52579_52584 = G__52589;
count__52580_52585 = G__52590;
i__52581_52586 = G__52591;
continue;
} else {
var temp__5457__auto___52592 = cljs.core.seq.call(null,seq__52578_52583);
if(temp__5457__auto___52592){
var seq__52578_52593__$1 = temp__5457__auto___52592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52578_52593__$1)){
var c__31159__auto___52594 = cljs.core.chunk_first.call(null,seq__52578_52593__$1);
var G__52595 = cljs.core.chunk_rest.call(null,seq__52578_52593__$1);
var G__52596 = c__31159__auto___52594;
var G__52597 = cljs.core.count.call(null,c__31159__auto___52594);
var G__52598 = (0);
seq__52578_52583 = G__52595;
chunk__52579_52584 = G__52596;
count__52580_52585 = G__52597;
i__52581_52586 = G__52598;
continue;
} else {
var msg_52599 = cljs.core.first.call(null,seq__52578_52593__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_52599);

var G__52600 = cljs.core.next.call(null,seq__52578_52593__$1);
var G__52601 = null;
var G__52602 = (0);
var G__52603 = (0);
seq__52578_52583 = G__52600;
chunk__52579_52584 = G__52601;
count__52580_52585 = G__52602;
i__52581_52586 = G__52603;
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
var len__31507__auto___52608 = arguments.length;
var i__31508__auto___52609 = (0);
while(true){
if((i__31508__auto___52609 < len__31507__auto___52608)){
args__31514__auto__.push((arguments[i__31508__auto___52609]));

var G__52610 = (i__31508__auto___52609 + (1));
i__31508__auto___52609 = G__52610;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__52605){
var map__52606 = p__52605;
var map__52606__$1 = ((((!((map__52606 == null)))?((((map__52606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52606):map__52606);
var opts = map__52606__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq52604){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52604));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e52611){if((e52611 instanceof Error)){
var e = e52611;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e52611;

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
return (function (p__52612){
var map__52613 = p__52612;
var map__52613__$1 = ((((!((map__52613 == null)))?((((map__52613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52613):map__52613);
var msg_name = cljs.core.get.call(null,map__52613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512749430704
