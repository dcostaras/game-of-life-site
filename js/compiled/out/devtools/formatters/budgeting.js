// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__52636__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__52636__auto__["add"]).call(o__52636__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__52636__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__52636__auto__["delete"]).call(o__52636__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__52636__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__52636__auto__["has"]).call(o__52636__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__55216 = data;
var target__52641__auto__ = G__55216;
if(cljs.core.truth_(target__52641__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55216)].join('')),"\n","target__52641__auto__"].join('')));
}

(target__52641__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__55216;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_55221 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_55221);
} else {
var seq__55217_55222 = cljs.core.seq.call(null,json_ml);
var chunk__55218_55223 = null;
var count__55219_55224 = (0);
var i__55220_55225 = (0);
while(true){
if((i__55220_55225 < count__55219_55224)){
var item_55226 = cljs.core._nth.call(null,chunk__55218_55223,i__55220_55225);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_55226,new_depth_budget_55221);

var G__55227 = seq__55217_55222;
var G__55228 = chunk__55218_55223;
var G__55229 = count__55219_55224;
var G__55230 = (i__55220_55225 + (1));
seq__55217_55222 = G__55227;
chunk__55218_55223 = G__55228;
count__55219_55224 = G__55229;
i__55220_55225 = G__55230;
continue;
} else {
var temp__5457__auto___55231 = cljs.core.seq.call(null,seq__55217_55222);
if(temp__5457__auto___55231){
var seq__55217_55232__$1 = temp__5457__auto___55231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55217_55232__$1)){
var c__31159__auto___55233 = cljs.core.chunk_first.call(null,seq__55217_55232__$1);
var G__55234 = cljs.core.chunk_rest.call(null,seq__55217_55232__$1);
var G__55235 = c__31159__auto___55233;
var G__55236 = cljs.core.count.call(null,c__31159__auto___55233);
var G__55237 = (0);
seq__55217_55222 = G__55234;
chunk__55218_55223 = G__55235;
count__55219_55224 = G__55236;
i__55220_55225 = G__55237;
continue;
} else {
var item_55238 = cljs.core.first.call(null,seq__55217_55232__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_55238,new_depth_budget_55221);

var G__55239 = cljs.core.next.call(null,seq__55217_55232__$1);
var G__55240 = null;
var G__55241 = (0);
var G__55242 = (0);
seq__55217_55222 = G__55239;
chunk__55218_55223 = G__55240;
count__55219_55224 = G__55241;
i__55220_55225 = G__55242;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5455__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5455__auto__)){
var initial_hierarchy_depth_budget = temp__5455__auto__;
var remaining_depth_budget = (function (){var or__30228__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1512749438076
