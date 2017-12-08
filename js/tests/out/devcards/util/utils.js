// Compiled by ClojureScript 1.9.946 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5455__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5455__auto__)){
var doc = temp__5455__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__31355__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_35336_35338 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_35337_35339 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_35336_35338,_STAR_print_fn_STAR_35337_35339,sb__31355__auto__){
return (function (x__31356__auto__){
return sb__31355__auto__.append(x__31356__auto__);
});})(_STAR_print_newline_STAR_35336_35338,_STAR_print_fn_STAR_35337_35339,sb__31355__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35337_35339;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35336_35338;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31355__auto__)].join('');
}catch (e35334){if((e35334 instanceof Error)){
var e1 = e35334;
try{return obj.toString();
}catch (e35335){if((e35335 instanceof Error)){
var e2 = e35335;
return ["<<Un-printable Type>>"].join('');
} else {
throw e35335;

}
}} else {
throw e35334;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_35340 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_35340;
}});

//# sourceMappingURL=utils.js.map?rel=1512749383743
