// Compiled by ClojureScript 1.9.946 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.system');
goog.require('devcards.util.markdown');
goog.require('devcards.util.utils');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__30228__auto__ = (function (){var and__30216__auto__ = typeof Symbol !== 'undefined';
if(and__30216__auto__){
var and__30216__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__30216__auto____$1){
var and__30216__auto____$2 = goog.object.get(Symbol,"for");
if(cljs.core.truth_(and__30216__auto____$2)){
return goog.object.get(Symbol,"for").call(null,"react.element");
} else {
return and__30216__auto____$2;
}
} else {
return and__30216__auto____$1;
}
} else {
return and__30216__auto__;
}
})();
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__41068_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__41068_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var G__41070 = arguments.length;
switch (G__41070) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__30216__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__30216__auto__){
var map__41074 = c;
var map__41074__$1 = ((((!((map__41074 == null)))?((((map__41074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41074):map__41074);
var path = cljs.core.get.call(null,map__41074__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__41074__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__30216__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.createElement("div",({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,raw_html_str))].join(''), "dangerouslySetInnerHTML": ({"__html": raw_html_str})}));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return goog.object.get(goog.global,"hljs");
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__5457__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__5457__auto__)){
var node = temp__5457__auto__;
var temp__5457__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__5457__auto____$1)){
var hljs = temp__5457__auto____$1;
var temp__5457__auto____$2 = goog.object.get(hljs,"highlightBlock");
if(cljs.core.truth_(temp__5457__auto____$2)){
var highlight_block = temp__5457__auto____$2;
return highlight_block.call(null,node);
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
devcards.core.CodeHighlight = (function (){var ctor__40774__auto__ = (function (props__40771__auto__){
var this__40772__auto__ = this;
React.Component.call(this__40772__auto__,props__40771__auto__);

return this__40772__auto__;
});
goog.inherits(ctor__40774__auto__,React.Component);

var x41076_41077 = ctor__40774__auto__.prototype;
x41076_41077.componentDidMount = ((function (x41076_41077,ctor__40774__auto__){
return (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
});})(x41076_41077,ctor__40774__auto__))
;

x41076_41077.componentDidUpdate = ((function (x41076_41077,ctor__40774__auto__){
return (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
});})(x41076_41077,ctor__40774__auto__))
;

x41076_41077.render = ((function (x41076_41077,ctor__40774__auto__){
return (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__30228__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
});})(x41076_41077,ctor__40774__auto__))
;


return ctor__40774__auto__;
})();

devcards.core.CodeHighlight.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"CodeHighlight","CodeHighlight",-2140212327,null));
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__31283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31287__auto__,method_table__31283__auto__,prefer_table__31284__auto__,method_cache__31285__auto__,cached_hierarchy__31286__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__41078){
var map__41079 = p__41078;
var map__41079__$1 = ((((!((map__41079 == null)))?((((map__41079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41079):map__41079);
var content = cljs.core.get.call(null,map__41079__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__41081){
var map__41082 = p__41081;
var map__41082__$1 = ((((!((map__41082 == null)))?((((map__41082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41082):map__41082);
var block = map__41082__$1;
var content = cljs.core.get.call(null,map__41082__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__31514__auto__ = [];
var len__31507__auto___41085 = arguments.length;
var i__31508__auto___41086 = (0);
while(true){
if((i__31508__auto___41086 < len__31507__auto___41085)){
args__31514__auto__.push((arguments[i__31508__auto___41086]));

var G__41087 = (i__31508__auto___41086 + (1));
i__31508__auto___41086 = G__41087;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return ["```clojure\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code.call(null,x)),"```\n"].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq41084){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41084));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__41088 = devcards.system.devcards_rendered_card_class;
var G__41088__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41088)," com-rigsomelight-devcards-devcard-padding"].join(''):G__41088);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41088__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__41088__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var G__41090 = arguments.length;
switch (G__41090) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__41091 = card;
var map__41091__$1 = ((((!((map__41091 == null)))?((((map__41091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41091):map__41091);
var path = cljs.core.get.call(null,map__41091__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__41091__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["com-rigsomelight-devcards-card-base-no-pad ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__41091,map__41091__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__41091,map__41091__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs41093 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs41093))?sablono.interpreter.attributes.call(null,attrs41093):null),((cljs.core.map_QMARK_.call(null,attrs41093))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41093)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__30961__auto__ = (((this$ == null))?null:this$);
var m__30962__auto__ = (devcards.core._devcard_options[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,this$,devcard_opts);
} else {
var m__30962__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__30961__auto__ = (((this$ == null))?null:this$);
var m__30962__auto__ = (devcards.core._devcard[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,this$,devcard_opts);
} else {
var m__30962__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__5457__auto__ = goog.object.get(this$.refs,ref);
if(cljs.core.truth_(temp__5457__auto__)){
var comp = temp__5457__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return goog.object.get(this$.props,cljs.core.name.call(null,k));
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return goog.object.get(this$.state,cljs.core.name.call(null,k));
} else {
return null;
}
});
devcards.core.DontUpdate = (function (){var ctor__40774__auto__ = (function (props__40771__auto__){
var this__40772__auto__ = this;
React.Component.call(this__40772__auto__,props__40771__auto__);

return this__40772__auto__;
});
goog.inherits(ctor__40774__auto__,React.Component);

var x41097_41099 = ctor__40774__auto__.prototype;
x41097_41099.shouldComponentUpdate = ((function (x41097_41099,ctor__40774__auto__){
return (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,goog.object.get(next_props,"change_count"),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
});})(x41097_41099,ctor__40774__auto__))
;

x41097_41099.render = ((function (x41097_41099,ctor__40774__auto__){
return (function (){
var this$ = this;
var attrs41098 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41098))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs41098)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs41098))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41098)], null)));
});})(x41097_41099,ctor__40774__auto__))
;


return ctor__40774__auto__;
})();

devcards.core.DontUpdate.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DontUpdate","DontUpdate",-547080925,null));
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__30228__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__5457__auto__)){
var docu = temp__5457__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__31182__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__31182__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto____$3);
})(),x__31182__auto____$2);
})(),x__31182__auto____$1);
})(),x__31182__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
devcards.core.DevcardBase = (function (){var ctor__40774__auto__ = (function (props__40769__auto__){
var this__40770__auto__ = this;
React.Component.call(this__40770__auto__,props__40769__auto__);

((function (this__40770__auto__){
return (function (props){
var this$ = this;
return this$.state = ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
});})(this__40770__auto__))
.call(this__40770__auto__,props__40769__auto__);

return this__40770__auto__;
});
goog.inherits(ctor__40774__auto__,React.Component);

var x41101_41102 = ctor__40774__auto__.prototype;
x41101_41102.componentDidUpdate = ((function (x41101_41102,ctor__40774__auto__){
return (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
});})(x41101_41102,ctor__40774__auto__))
;

x41101_41102.componentWillMount = ((function (x41101_41102,ctor__40774__auto__){
return (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
return this$.setState((function (){var or__30228__auto__ = (function (){var and__30216__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__30216__auto__)){
return this$.state;
} else {
return and__30216__auto__;
}
})();
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
} else {
return null;
}
});})(x41101_41102,ctor__40774__auto__))
;

x41101_41102.componentWillUnmount = ((function (x41101_41102,ctor__40774__auto__){
return (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__30216__auto__ = data_atom;
if(cljs.core.truth_(and__30216__auto__)){
return id;
} else {
return and__30216__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
});})(x41101_41102,ctor__40774__auto__))
;

x41101_41102.componentDidMount = ((function (x41101_41102,ctor__40774__auto__){
return (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__5457__auto__)){
var data_atom = temp__5457__auto__;
var temp__5457__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__5457__auto____$1)){
var id = temp__5457__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__5457__auto____$1,data_atom,temp__5457__auto__,this$,x41101_41102,ctor__40774__auto__){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__5457__auto____$1,data_atom,temp__5457__auto__,this$,x41101_41102,ctor__40774__auto__))
);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(x41101_41102,ctor__40774__auto__))
;

x41101_41102.render = ((function (x41101_41102,ctor__40774__auto__){
return (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
});})(x41101_41102,ctor__40774__auto__))
;


return ctor__40774__auto__;
})();

devcards.core.DevcardBase.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DevcardBase","DevcardBase",-1441442980,null));
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__5457__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__5457__auto__)){
var node_fn = temp__5457__auto__;
var temp__5457__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5457__auto____$1)){
var node = temp__5457__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
devcards.core.DomComponent = (function (){var ctor__40774__auto__ = (function (props__40769__auto__){
var this__40770__auto__ = this;
React.Component.call(this__40770__auto__,props__40769__auto__);

((function (this__40770__auto__){
return (function (props){
var this$ = this;
return this$.state = ({"unique_id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
});})(this__40770__auto__))
.call(this__40770__auto__,props__40769__auto__);

return this__40770__auto__;
});
goog.inherits(ctor__40774__auto__,React.Component);

var x41103_41104 = ctor__40774__auto__.prototype;
x41103_41104.componentDidUpdate = ((function (x41103_41104,ctor__40774__auto__){
return (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__30216__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__30216__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),goog.object.get(prevP,"node_fn"));
} else {
return and__30216__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
});})(x41103_41104,ctor__40774__auto__))
;

x41103_41104.componentWillUnmount = ((function (x41103_41104,ctor__40774__auto__){
return (function (){
var this$ = this;
var temp__5457__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5457__auto__)){
var node = temp__5457__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
});})(x41103_41104,ctor__40774__auto__))
;

x41103_41104.componentDidMount = ((function (x41103_41104,ctor__40774__auto__){
return (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
});})(x41103_41104,ctor__40774__auto__))
;

x41103_41104.render = ((function (x41103_41104,ctor__40774__auto__){
return (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
return React.createElement("div",({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
} else {
return React.createElement("div",null,"Card has not mounted DOM node.");
}
});})(x41103_41104,ctor__40774__auto__))
;


return ctor__40774__auto__;
})();

devcards.core.DomComponent.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DomComponent","DomComponent",-1557765022,null));
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__30228__auto__ = x === true;
if(or__30228__auto__){
return or__30228__auto__;
} else {
var or__30228__auto____$1 = x === false;
if(or__30228__auto____$1){
return or__30228__auto____$1;
} else {
var or__30228__auto____$2 = (x == null);
if(or__30228__auto____$2){
return or__30228__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__30228__auto__ = typeof x === 'string';
if(or__30228__auto__){
return or__30228__auto__;
} else {
var or__30228__auto____$1 = (x == null);
if(or__30228__auto____$1){
return or__30228__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__30228__auto__ = goog.object.get(main_obj,"_isReactElement");
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,goog.object.get(main_obj,"$$typeof"));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__41105_SHARP_){
return !(p1__41105_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__41107 = opts;
var map__41107__$1 = ((((!((map__41107 == null)))?((((map__41107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41107):map__41107);
var name = cljs.core.get.call(null,map__41107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__41107__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__41107__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__41107__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__30228__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__30228__auto__){
return or__30228__auto__;
} else {
var or__30228__auto____$1 = (options == null);
if(or__30228__auto____$1){
return or__30228__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__30228__auto__ = (initial_data == null);
if(or__30228__auto__){
return or__30228__auto__;
} else {
var or__30228__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__30228__auto____$1){
return or__30228__auto____$1;
} else {
var or__30228__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__30228__auto____$2){
return or__30228__auto____$2;
} else {
var or__30228__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$)))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__30228__auto____$3){
return or__30228__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__41107,map__41107__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__41106_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__41106_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__41107,map__41107__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs41114 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs41114))?sablono.interpreter.attributes.call(null,attrs41114):null),((cljs.core.map_QMARK_.call(null,attrs41114))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41114)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs41115 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),": "].join(''):null)),"Devcard received bad options"].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41115))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs41115)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs41115))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41115)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs41116 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41116))?sablono.interpreter.attributes.call(null,attrs41116):null),((cljs.core.map_QMARK_.call(null,attrs41116))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41116)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs41117 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41117))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs41117)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs41117))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41117)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__41118_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__41118_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30916__auto__,k__30917__auto__){
var self__ = this;
var this__30916__auto____$1 = this;
return this__30916__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30917__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30918__auto__,k41120,else__30919__auto__){
var self__ = this;
var this__30918__auto____$1 = this;
var G__41124 = k41120;
var G__41124__$1 = (((G__41124 instanceof cljs.core.Keyword))?G__41124.fqn:null);
switch (G__41124__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41120,else__30919__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30930__auto__,writer__30931__auto__,opts__30932__auto__){
var self__ = this;
var this__30930__auto____$1 = this;
var pr_pair__30933__auto__ = ((function (this__30930__auto____$1){
return (function (keyval__30934__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30931__auto__,cljs.core.pr_writer,""," ","",opts__30932__auto__,keyval__30934__auto__);
});})(this__30930__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30931__auto__,pr_pair__30933__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__30932__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41119){
var self__ = this;
var G__41119__$1 = this;
return (new cljs.core.RecordIter((0),G__41119__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30914__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30911__auto__){
var self__ = this;
var this__30911__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30920__auto__){
var self__ = this;
var this__30920__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30912__auto__){
var self__ = this;
var this__30912__auto____$1 = this;
var h__30684__auto__ = self__.__hash;
if(!((h__30684__auto__ == null))){
return h__30684__auto__;
} else {
var h__30684__auto____$1 = ((function (h__30684__auto__,this__30912__auto____$1){
return (function (coll__30913__auto__){
return (-838321128 ^ cljs.core.hash_unordered_coll.call(null,coll__30913__auto__));
});})(h__30684__auto__,this__30912__auto____$1))
.call(null,this__30912__auto____$1);
self__.__hash = h__30684__auto____$1;

return h__30684__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41121,other41122){
var self__ = this;
var this41121__$1 = this;
return (!((other41122 == null))) && ((this41121__$1.constructor === other41122.constructor)) && (cljs.core._EQ_.call(null,this41121__$1.obj,other41122.obj)) && (cljs.core._EQ_.call(null,this41121__$1.__extmap,other41122.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30925__auto__,k__30926__auto__){
var self__ = this;
var this__30925__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__30926__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30925__auto____$1),self__.__meta),k__30926__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30926__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30923__auto__,k__30924__auto__,G__41119){
var self__ = this;
var this__30923__auto____$1 = this;
var pred__41125 = cljs.core.keyword_identical_QMARK_;
var expr__41126 = k__30924__auto__;
if(cljs.core.truth_(pred__41125.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__41126))){
return (new devcards.core.IdentiyOptions(G__41119,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30924__auto__,G__41119),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30928__auto__){
var self__ = this;
var this__30928__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30915__auto__,G__41119){
var self__ = this;
var this__30915__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__41119,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30921__auto__,entry__30922__auto__){
var self__ = this;
var this__30921__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30922__auto__)){
return this__30921__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30922__auto__,(0)),cljs.core._nth.call(null,entry__30922__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30921__auto____$1,entry__30922__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__30954__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__30954__auto__,writer__30955__auto__){
return cljs.core._write.call(null,writer__30955__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__41123){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__41123),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41123,new cljs.core.Keyword(null,"obj","obj",981763962))),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__41129){
var map__41130 = p__41129;
var map__41130__$1 = ((((!((map__41130 == null)))?((((map__41130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41130):map__41130);
var devcard_opts = map__41130__$1;
var options = cljs.core.get.call(null,map__41130__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__41130,map__41130__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__41130,map__41130__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30916__auto__,k__30917__auto__){
var self__ = this;
var this__30916__auto____$1 = this;
return this__30916__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30917__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30918__auto__,k41133,else__30919__auto__){
var self__ = this;
var this__30918__auto____$1 = this;
var G__41137 = k41133;
var G__41137__$1 = (((G__41137 instanceof cljs.core.Keyword))?G__41137.fqn:null);
switch (G__41137__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41133,else__30919__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30930__auto__,writer__30931__auto__,opts__30932__auto__){
var self__ = this;
var this__30930__auto____$1 = this;
var pr_pair__30933__auto__ = ((function (this__30930__auto____$1){
return (function (keyval__30934__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30931__auto__,cljs.core.pr_writer,""," ","",opts__30932__auto__,keyval__30934__auto__);
});})(this__30930__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30931__auto__,pr_pair__30933__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__30932__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41132){
var self__ = this;
var G__41132__$1 = this;
return (new cljs.core.RecordIter((0),G__41132__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30914__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30911__auto__){
var self__ = this;
var this__30911__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30920__auto__){
var self__ = this;
var this__30920__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30912__auto__){
var self__ = this;
var this__30912__auto____$1 = this;
var h__30684__auto__ = self__.__hash;
if(!((h__30684__auto__ == null))){
return h__30684__auto__;
} else {
var h__30684__auto____$1 = ((function (h__30684__auto__,this__30912__auto____$1){
return (function (coll__30913__auto__){
return (-1574099704 ^ cljs.core.hash_unordered_coll.call(null,coll__30913__auto__));
});})(h__30684__auto__,this__30912__auto____$1))
.call(null,this__30912__auto____$1);
self__.__hash = h__30684__auto____$1;

return h__30684__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41134,other41135){
var self__ = this;
var this41134__$1 = this;
return (!((other41135 == null))) && ((this41134__$1.constructor === other41135.constructor)) && (cljs.core._EQ_.call(null,this41134__$1.obj,other41135.obj)) && (cljs.core._EQ_.call(null,this41134__$1.__extmap,other41135.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30925__auto__,k__30926__auto__){
var self__ = this;
var this__30925__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__30926__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30925__auto____$1),self__.__meta),k__30926__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30926__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30923__auto__,k__30924__auto__,G__41132){
var self__ = this;
var this__30923__auto____$1 = this;
var pred__41138 = cljs.core.keyword_identical_QMARK_;
var expr__41139 = k__30924__auto__;
if(cljs.core.truth_(pred__41138.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__41139))){
return (new devcards.core.AtomLikeOptions(G__41132,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30924__auto__,G__41132),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30928__auto__){
var self__ = this;
var this__30928__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30915__auto__,G__41132){
var self__ = this;
var this__30915__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__41132,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30921__auto__,entry__30922__auto__){
var self__ = this;
var this__30921__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30922__auto__)){
return this__30921__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30922__auto__,(0)),cljs.core._nth.call(null,entry__30922__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30921__auto____$1,entry__30922__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__30954__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__30954__auto__,writer__30955__auto__){
return cljs.core._write.call(null,writer__30955__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__41136){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__41136),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41136,new cljs.core.Keyword(null,"obj","obj",981763962))),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30916__auto__,k__30917__auto__){
var self__ = this;
var this__30916__auto____$1 = this;
return this__30916__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30917__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30918__auto__,k41144,else__30919__auto__){
var self__ = this;
var this__30918__auto____$1 = this;
var G__41148 = k41144;
var G__41148__$1 = (((G__41148 instanceof cljs.core.Keyword))?G__41148.fqn:null);
switch (G__41148__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41144,else__30919__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30930__auto__,writer__30931__auto__,opts__30932__auto__){
var self__ = this;
var this__30930__auto____$1 = this;
var pr_pair__30933__auto__ = ((function (this__30930__auto____$1){
return (function (keyval__30934__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30931__auto__,cljs.core.pr_writer,""," ","",opts__30932__auto__,keyval__30934__auto__);
});})(this__30930__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30931__auto__,pr_pair__30933__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__30932__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41143){
var self__ = this;
var G__41143__$1 = this;
return (new cljs.core.RecordIter((0),G__41143__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30914__auto__){
var self__ = this;
var this__30914__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30911__auto__){
var self__ = this;
var this__30911__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30920__auto__){
var self__ = this;
var this__30920__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30912__auto__){
var self__ = this;
var this__30912__auto____$1 = this;
var h__30684__auto__ = self__.__hash;
if(!((h__30684__auto__ == null))){
return h__30684__auto__;
} else {
var h__30684__auto____$1 = ((function (h__30684__auto__,this__30912__auto____$1){
return (function (coll__30913__auto__){
return (1012705544 ^ cljs.core.hash_unordered_coll.call(null,coll__30913__auto__));
});})(h__30684__auto__,this__30912__auto____$1))
.call(null,this__30912__auto____$1);
self__.__hash = h__30684__auto____$1;

return h__30684__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41145,other41146){
var self__ = this;
var this41145__$1 = this;
return (!((other41146 == null))) && ((this41145__$1.constructor === other41146.constructor)) && (cljs.core._EQ_.call(null,this41145__$1.obj,other41146.obj)) && (cljs.core._EQ_.call(null,this41145__$1.__extmap,other41146.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30925__auto__,k__30926__auto__){
var self__ = this;
var this__30925__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__30926__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30925__auto____$1),self__.__meta),k__30926__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30926__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30923__auto__,k__30924__auto__,G__41143){
var self__ = this;
var this__30923__auto____$1 = this;
var pred__41149 = cljs.core.keyword_identical_QMARK_;
var expr__41150 = k__30924__auto__;
if(cljs.core.truth_(pred__41149.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__41150))){
return (new devcards.core.EdnLikeOptions(G__41143,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30924__auto__,G__41143),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30928__auto__){
var self__ = this;
var this__30928__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30915__auto__,G__41143){
var self__ = this;
var this__30915__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__41143,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30921__auto__,entry__30922__auto__){
var self__ = this;
var this__30921__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30922__auto__)){
return this__30921__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30922__auto__,(0)),cljs.core._nth.call(null,entry__30922__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30921__auto____$1,entry__30922__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__30954__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__30954__auto__,writer__30955__auto__){
return cljs.core._write.call(null,writer__30955__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__41147){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__41147),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41147,new cljs.core.Keyword(null,"obj","obj",981763962))),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__30216__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__30216__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__30216__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__41158 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__41158 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__41158.devcards$core$IDevcard$))){
return true;
} else {
if((!G__41158.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__41158);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__41158);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
goog.object.set(devcards.core.IDevcardOptions,"string",true);

goog.object.set(devcards.core._devcard_options,"string",(function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__41159 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__41159__$1 = ((((!((map__41159 == null)))?((((map__41159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41159):map__41159);
var history = cljs.core.get.call(null,map__41159__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__41159__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__41161 = cljs.core.deref.call(null,history_atom);
var map__41161__$1 = ((((!((map__41161 == null)))?((((map__41161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41161):map__41161);
var history = cljs.core.get.call(null,map__41161__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__41161__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__41163 = cljs.core.deref.call(null,history_atom);
var map__41163__$1 = ((((!((map__41163 == null)))?((((map__41163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41163):map__41163);
var history = cljs.core.get.call(null,map__41163__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__41163__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__41165 = cljs.core.deref.call(null,history_atom);
var map__41165__$1 = ((((!((map__41165 == null)))?((((map__41165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41165):map__41165);
var history = cljs.core.get.call(null,map__41165__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var ctor__40774__auto__ = (function (props__40769__auto__){
var this__40770__auto__ = this;
React.Component.call(this__40770__auto__,props__40769__auto__);

((function (this__40770__auto__){
return (function (props){
var this$ = this;
return this$.state = ({"unique_id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
});})(this__40770__auto__))
.call(this__40770__auto__,props__40769__auto__);

return this__40770__auto__;
});
goog.inherits(ctor__40774__auto__,React.Component);

var x41167_41183 = ctor__40774__auto__.prototype;
x41167_41183.componentWillMount = ((function (x41167_41183,ctor__40774__auto__){
return (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__31182__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})());
});})(x41167_41183,ctor__40774__auto__))
;

x41167_41183.componentDidMount = ((function (x41167_41183,ctor__40774__auto__){
return (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__30216__auto__ = data_atom;
if(cljs.core.truth_(and__30216__auto__)){
return id;
} else {
return and__30216__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$,x41167_41183,ctor__40774__auto__){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$,x41167_41183,ctor__40774__auto__){
return (function (p__41168){
var map__41169 = p__41168;
var map__41169__$1 = ((((!((map__41169 == null)))?((((map__41169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41169):map__41169);
var ha = map__41169__$1;
var pointer = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$,x41167_41183,ctor__40774__auto__))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$,x41167_41183,ctor__40774__auto__))
);
} else {
return null;
}
});})(x41167_41183,ctor__40774__auto__))
;

x41167_41183.render = ((function (x41167_41183,ctor__40774__auto__){
return (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__30228__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__30228__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$,x41167_41183,ctor__40774__auto__){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$,x41167_41183,ctor__40774__auto__))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$,x41167_41183,ctor__40774__auto__){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$,x41167_41183,ctor__40774__auto__))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$,x41167_41183,ctor__40774__auto__){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$,x41167_41183,ctor__40774__auto__))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$,x41167_41183,ctor__40774__auto__){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$,x41167_41183,ctor__40774__auto__))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
});})(x41167_41183,ctor__40774__auto__))
;


return ctor__40774__auto__;
})();

devcards.core.HistoryComponent.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"HistoryComponent","HistoryComponent",-932269385,null));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_41184 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_41184;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__31283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31287__auto__,method_table__31283__auto__,prefer_table__31284__auto__,method_cache__31285__auto__,cached_hierarchy__31286__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs41185 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41185))?sablono.interpreter.attributes.call(null,attrs41185):null),((cljs.core.map_QMARK_.call(null,attrs41185))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41185)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__41186,body){
var map__41187 = p__41186;
var map__41187__$1 = ((((!((map__41187 == null)))?((((map__41187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41187):map__41187);
var message = cljs.core.get.call(null,map__41187__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs41189 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs41189))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs41189)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs41189))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41189)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__41190){
var map__41191 = p__41190;
var map__41191__$1 = ((((!((map__41191 == null)))?((((map__41191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41191):map__41191);
var m = map__41191__$1;
var expected = cljs.core.get.call(null,map__41191__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__41191__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__41191__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs41193 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41193))?sablono.interpreter.attributes.call(null,attrs41193):null),((cljs.core.map_QMARK_.call(null,attrs41193))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41193),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs41200 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs41200))?sablono.interpreter.attributes.call(null,attrs41200):null),((cljs.core.map_QMARK_.call(null,attrs41200))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41200)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs41201 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41201))?sablono.interpreter.attributes.call(null,attrs41201):null),((cljs.core.map_QMARK_.call(null,attrs41201))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41201)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__41202){
var map__41203 = p__41202;
var map__41203__$1 = ((((!((map__41203 == null)))?((((map__41203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41203):map__41203);
var testing_contexts = cljs.core.get.call(null,map__41203__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs41205 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__41203,map__41203__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__41203,map__41203__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__31182__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41205))?sablono.interpreter.attributes.call(null,attrs41205):null),((cljs.core.map_QMARK_.call(null,attrs41205))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41205)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),["com-rigsomelight-devcards-test-line com-rigsomelight-devcards-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs41206 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__41207,p__41208){
var map__41209 = p__41207;
var map__41209__$1 = ((((!((map__41209 == null)))?((((map__41209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41209):map__41209);
var last_context = cljs.core.get.call(null,map__41209__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__41209__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__41210 = p__41208;
var i = cljs.core.nth.call(null,vec__41210,(0),null);
var t = cljs.core.nth.call(null,vec__41210,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__31182__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31182__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41206))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs41206)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs41206))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41206)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__41215){
var map__41216 = p__41215;
var map__41216__$1 = ((((!((map__41216 == null)))?((((map__41216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41216):map__41216);
var type = cljs.core.get.call(null,map__41216__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__41214 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__41214__$1 = ((((!((map__41214 == null)))?((((map__41214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41214):map__41214);
var fail = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1){
return (function (p__41219){
var map__41220 = p__41219;
var map__41220__$1 = ((((!((map__41220 == null)))?((((map__41220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41220):map__41220);
var type = cljs.core.get.call(null,map__41220__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1){
return (function (p__41222){
var map__41223 = p__41222;
var map__41223__$1 = ((((!((map__41223 == null)))?((((map__41223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41223):map__41223);
var type = cljs.core.get.call(null,map__41223__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__41214,map__41214__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__30228__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__){
return (function (state_41315){
var state_val_41316 = (state_41315[(1)]);
if((state_val_41316 === (7))){
var state_41315__$1 = state_41315;
var statearr_41317_41363 = state_41315__$1;
(statearr_41317_41363[(2)] = false);

(statearr_41317_41363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (20))){
var inst_41253 = (state_41315[(7)]);
var inst_41273 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41253);
var state_41315__$1 = state_41315;
var statearr_41318_41364 = state_41315__$1;
(statearr_41318_41364[(2)] = inst_41273);

(statearr_41318_41364[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (27))){
var inst_41278 = (state_41315[(8)]);
var inst_41290 = (state_41315[(9)]);
var inst_41294 = inst_41278.call(null,inst_41290);
var state_41315__$1 = state_41315;
var statearr_41319_41365 = state_41315__$1;
(statearr_41319_41365[(2)] = inst_41294);

(statearr_41319_41365[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (1))){
var state_41315__$1 = state_41315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41315__$1,(2),devcards.core.test_channel);
} else {
if((state_val_41316 === (24))){
var state_41315__$1 = state_41315;
var statearr_41320_41366 = state_41315__$1;
(statearr_41320_41366[(2)] = null);

(statearr_41320_41366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (4))){
var state_41315__$1 = state_41315;
var statearr_41321_41367 = state_41315__$1;
(statearr_41321_41367[(2)] = false);

(statearr_41321_41367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (15))){
var state_41315__$1 = state_41315;
var statearr_41322_41368 = state_41315__$1;
(statearr_41322_41368[(2)] = false);

(statearr_41322_41368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (21))){
var inst_41253 = (state_41315[(7)]);
var state_41315__$1 = state_41315;
var statearr_41323_41369 = state_41315__$1;
(statearr_41323_41369[(2)] = inst_41253);

(statearr_41323_41369[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (13))){
var inst_41313 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41315__$1,inst_41313);
} else {
if((state_val_41316 === (22))){
var inst_41277 = (state_41315[(10)]);
var inst_41276 = (state_41315[(2)]);
var inst_41277__$1 = cljs.core.get.call(null,inst_41276,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_41278 = cljs.core.get.call(null,inst_41276,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_41315__$1 = (function (){var statearr_41324 = state_41315;
(statearr_41324[(8)] = inst_41278);

(statearr_41324[(10)] = inst_41277__$1);

return statearr_41324;
})();
if(cljs.core.truth_(inst_41277__$1)){
var statearr_41325_41370 = state_41315__$1;
(statearr_41325_41370[(1)] = (23));

} else {
var statearr_41326_41371 = state_41315__$1;
(statearr_41326_41371[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (29))){
var inst_41304 = (state_41315[(2)]);
var inst_41305 = cljs.test.clear_env_BANG_.call(null);
var state_41315__$1 = (function (){var statearr_41327 = state_41315;
(statearr_41327[(11)] = inst_41305);

(statearr_41327[(12)] = inst_41304);

return statearr_41327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41315__$1,(30),devcards.core.test_channel);
} else {
if((state_val_41316 === (6))){
var state_41315__$1 = state_41315;
var statearr_41328_41372 = state_41315__$1;
(statearr_41328_41372[(2)] = true);

(statearr_41328_41372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (28))){
var inst_41278 = (state_41315[(8)]);
var inst_41296 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_41297 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_41298 = cljs.core.PersistentHashMap.fromArrays(inst_41296,inst_41297);
var inst_41299 = devcards.core.collect_test.call(null,inst_41298);
var inst_41300 = cljs.test.get_current_env.call(null);
var inst_41301 = cljs.core.assoc.call(null,inst_41300,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_41302 = inst_41278.call(null,inst_41301);
var state_41315__$1 = (function (){var statearr_41329 = state_41315;
(statearr_41329[(13)] = inst_41299);

return statearr_41329;
})();
var statearr_41330_41373 = state_41315__$1;
(statearr_41330_41373[(2)] = inst_41302);

(statearr_41330_41373[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (25))){
var inst_41311 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41331_41374 = state_41315__$1;
(statearr_41331_41374[(2)] = inst_41311);

(statearr_41331_41374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (17))){
var state_41315__$1 = state_41315;
var statearr_41332_41375 = state_41315__$1;
(statearr_41332_41375[(2)] = true);

(statearr_41332_41375[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (3))){
var inst_41229 = (state_41315[(14)]);
var inst_41234 = inst_41229.cljs$lang$protocol_mask$partition0$;
var inst_41235 = (inst_41234 & (64));
var inst_41236 = inst_41229.cljs$core$ISeq$;
var inst_41237 = (cljs.core.PROTOCOL_SENTINEL === inst_41236);
var inst_41238 = (inst_41235) || (inst_41237);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41238)){
var statearr_41333_41376 = state_41315__$1;
(statearr_41333_41376[(1)] = (6));

} else {
var statearr_41334_41377 = state_41315__$1;
(statearr_41334_41377[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (12))){
var inst_41253 = (state_41315[(7)]);
var inst_41257 = (inst_41253 == null);
var inst_41258 = cljs.core.not.call(null,inst_41257);
var state_41315__$1 = state_41315;
if(inst_41258){
var statearr_41335_41378 = state_41315__$1;
(statearr_41335_41378[(1)] = (14));

} else {
var statearr_41336_41379 = state_41315__$1;
(statearr_41336_41379[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (2))){
var inst_41229 = (state_41315[(14)]);
var inst_41229__$1 = (state_41315[(2)]);
var inst_41231 = (inst_41229__$1 == null);
var inst_41232 = cljs.core.not.call(null,inst_41231);
var state_41315__$1 = (function (){var statearr_41337 = state_41315;
(statearr_41337[(14)] = inst_41229__$1);

return statearr_41337;
})();
if(inst_41232){
var statearr_41338_41380 = state_41315__$1;
(statearr_41338_41380[(1)] = (3));

} else {
var statearr_41339_41381 = state_41315__$1;
(statearr_41339_41381[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (23))){
var inst_41283 = (state_41315[(15)]);
var inst_41277 = (state_41315[(10)]);
var inst_41283__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_41284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41285 = devcards.core.run_card_tests.call(null,inst_41277);
var inst_41286 = [inst_41285,inst_41283__$1];
var inst_41287 = (new cljs.core.PersistentVector(null,2,(5),inst_41284,inst_41286,null));
var state_41315__$1 = (function (){var statearr_41340 = state_41315;
(statearr_41340[(15)] = inst_41283__$1);

return statearr_41340;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41315__$1,(26),inst_41287);
} else {
if((state_val_41316 === (19))){
var inst_41268 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41341_41382 = state_41315__$1;
(statearr_41341_41382[(2)] = inst_41268);

(statearr_41341_41382[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (11))){
var inst_41229 = (state_41315[(14)]);
var inst_41250 = (state_41315[(2)]);
var inst_41251 = cljs.core.get.call(null,inst_41250,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_41252 = cljs.core.get.call(null,inst_41250,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_41253 = inst_41229;
var state_41315__$1 = (function (){var statearr_41342 = state_41315;
(statearr_41342[(16)] = inst_41252);

(statearr_41342[(17)] = inst_41251);

(statearr_41342[(7)] = inst_41253);

return statearr_41342;
})();
var statearr_41343_41383 = state_41315__$1;
(statearr_41343_41383[(2)] = null);

(statearr_41343_41383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (9))){
var inst_41229 = (state_41315[(14)]);
var inst_41247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41229);
var state_41315__$1 = state_41315;
var statearr_41344_41384 = state_41315__$1;
(statearr_41344_41384[(2)] = inst_41247);

(statearr_41344_41384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (5))){
var inst_41245 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41245)){
var statearr_41345_41385 = state_41315__$1;
(statearr_41345_41385[(1)] = (9));

} else {
var statearr_41346_41386 = state_41315__$1;
(statearr_41346_41386[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (14))){
var inst_41253 = (state_41315[(7)]);
var inst_41260 = inst_41253.cljs$lang$protocol_mask$partition0$;
var inst_41261 = (inst_41260 & (64));
var inst_41262 = inst_41253.cljs$core$ISeq$;
var inst_41263 = (cljs.core.PROTOCOL_SENTINEL === inst_41262);
var inst_41264 = (inst_41261) || (inst_41263);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41264)){
var statearr_41347_41387 = state_41315__$1;
(statearr_41347_41387[(1)] = (17));

} else {
var statearr_41348_41388 = state_41315__$1;
(statearr_41348_41388[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (26))){
var inst_41283 = (state_41315[(15)]);
var inst_41289 = (state_41315[(2)]);
var inst_41290 = cljs.core.nth.call(null,inst_41289,(0),null);
var inst_41291 = cljs.core.nth.call(null,inst_41289,(1),null);
var inst_41292 = cljs.core.not_EQ_.call(null,inst_41291,inst_41283);
var state_41315__$1 = (function (){var statearr_41349 = state_41315;
(statearr_41349[(9)] = inst_41290);

return statearr_41349;
})();
if(inst_41292){
var statearr_41350_41389 = state_41315__$1;
(statearr_41350_41389[(1)] = (27));

} else {
var statearr_41351_41390 = state_41315__$1;
(statearr_41351_41390[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (16))){
var inst_41271 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41271)){
var statearr_41352_41391 = state_41315__$1;
(statearr_41352_41391[(1)] = (20));

} else {
var statearr_41353_41392 = state_41315__$1;
(statearr_41353_41392[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (30))){
var inst_41307 = (state_41315[(2)]);
var inst_41253 = inst_41307;
var state_41315__$1 = (function (){var statearr_41354 = state_41315;
(statearr_41354[(7)] = inst_41253);

return statearr_41354;
})();
var statearr_41355_41393 = state_41315__$1;
(statearr_41355_41393[(2)] = null);

(statearr_41355_41393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (10))){
var inst_41229 = (state_41315[(14)]);
var state_41315__$1 = state_41315;
var statearr_41356_41394 = state_41315__$1;
(statearr_41356_41394[(2)] = inst_41229);

(statearr_41356_41394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (18))){
var state_41315__$1 = state_41315;
var statearr_41357_41395 = state_41315__$1;
(statearr_41357_41395[(2)] = false);

(statearr_41357_41395[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (8))){
var inst_41242 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41358_41396 = state_41315__$1;
(statearr_41358_41396[(2)] = inst_41242);

(statearr_41358_41396[(1)] = (5));


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
});})(c__36864__auto__))
;
return ((function (switch__36774__auto__,c__36864__auto__){
return (function() {
var devcards$core$state_machine__36775__auto__ = null;
var devcards$core$state_machine__36775__auto____0 = (function (){
var statearr_41359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41359[(0)] = devcards$core$state_machine__36775__auto__);

(statearr_41359[(1)] = (1));

return statearr_41359;
});
var devcards$core$state_machine__36775__auto____1 = (function (state_41315){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_41315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e41360){if((e41360 instanceof Object)){
var ex__36778__auto__ = e41360;
var statearr_41361_41397 = state_41315;
(statearr_41361_41397[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41398 = state_41315;
state_41315 = G__41398;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
devcards$core$state_machine__36775__auto__ = function(state_41315){
switch(arguments.length){
case 0:
return devcards$core$state_machine__36775__auto____0.call(this);
case 1:
return devcards$core$state_machine__36775__auto____1.call(this,state_41315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$core$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__36775__auto____0;
devcards$core$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__36775__auto____1;
return devcards$core$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_41362 = f__36865__auto__.call(null);
(statearr_41362[(6)] = c__36864__auto__);

return statearr_41362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__))
);

return c__36864__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
devcards.core.TestDevcard = (function (){var ctor__40774__auto__ = (function (props__40771__auto__){
var this__40772__auto__ = this;
React.Component.call(this__40772__auto__,props__40771__auto__);

return this__40772__auto__;
});
goog.inherits(ctor__40774__auto__,React.Component);

var x41399_41400 = ctor__40774__auto__.prototype;
x41399_41400.componentWillMount = ((function (x41399_41400,ctor__40774__auto__){
return (function (){
var this$ = this;
var temp__5457__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__5457__auto__)){
var test_thunks = temp__5457__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
});})(x41399_41400,ctor__40774__auto__))
;

x41399_41400.componentWillReceiveProps = ((function (x41399_41400,ctor__40774__auto__){
return (function (next_props){
var this$ = this;
var temp__5457__auto__ = goog.object.get(next_props,cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805)));
if(cljs.core.truth_(temp__5457__auto__)){
var test_thunks = temp__5457__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
});})(x41399_41400,ctor__40774__auto__))
;

x41399_41400.render = ((function (x41399_41400,ctor__40774__auto__){
return (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
});})(x41399_41400,ctor__40774__auto__))
;


return ctor__40774__auto__;
})();

devcards.core.TestDevcard.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"TestDevcard","TestDevcard",-506859910,null));
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__31514__auto__ = [];
var len__31507__auto___41405 = arguments.length;
var i__31508__auto___41406 = (0);
while(true){
if((i__31508__auto___41406 < len__31507__auto___41405)){
args__31514__auto__.push((arguments[i__31508__auto___41406]));

var G__41407 = (i__31508__auto___41406 + (1));
i__31508__auto___41406 = G__41407;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((0) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__31515__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core41402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core41402 = (function (test_thunks,meta41403){
this.test_thunks = test_thunks;
this.meta41403 = meta41403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
devcards.core.t_devcards$core41402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41404,meta41403__$1){
var self__ = this;
var _41404__$1 = this;
return (new devcards.core.t_devcards$core41402(self__.test_thunks,meta41403__$1));
});

devcards.core.t_devcards$core41402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41404){
var self__ = this;
var _41404__$1 = this;
return self__.meta41403;
});

devcards.core.t_devcards$core41402.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.t_devcards$core41402.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core41402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta41403","meta41403",-1625438931,null)], null);
});

devcards.core.t_devcards$core41402.cljs$lang$type = true;

devcards.core.t_devcards$core41402.cljs$lang$ctorStr = "devcards.core/t_devcards$core41402";

devcards.core.t_devcards$core41402.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"devcards.core/t_devcards$core41402");
});

devcards.core.__GT_t_devcards$core41402 = (function devcards$core$__GT_t_devcards$core41402(test_thunks__$1,meta41403){
return (new devcards.core.t_devcards$core41402(test_thunks__$1,meta41403));
});

}

return (new devcards.core.t_devcards$core41402(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq41401){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41401));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,(function (p1__41408_SHARP_,p2__41409_SHARP_){
return goog.object.get(p1__41408_SHARP_,p2__41409_SHARP_);
}),goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__5457__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__5457__auto__)){
var cards = temp__5457__auto__;
var temp__5457__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__5457__auto____$1)){
var card = temp__5457__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__5457__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__5457__auto__)){
var base_card_options = temp__5457__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__5457__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__5457__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__5457__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__5457__auto__)){
var card = temp__5457__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return ["<div id=\"com-rigsomelight-devcards-main\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(React.renderToString((function (){var attrs41410 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41410))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs41410)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs41410))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41410)], null)));
})())),"</div>"].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__5457__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__5457__auto__)){
var card = temp__5457__auto__;
return React.render((function (){var attrs41411 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41411))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs41411)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs41411))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41411)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__){
return (function (state_41421){
var state_val_41422 = (state_41421[(1)]);
if((state_val_41422 === (1))){
var inst_41412 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_41421__$1 = state_41421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41421__$1,(2),inst_41412);
} else {
if((state_val_41422 === (2))){
var inst_41414 = (state_41421[(2)]);
var inst_41415 = cljs.core.async.timeout.call(null,(100));
var state_41421__$1 = (function (){var statearr_41423 = state_41421;
(statearr_41423[(7)] = inst_41414);

return statearr_41423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41421__$1,(3),inst_41415);
} else {
if((state_val_41422 === (3))){
var inst_41417 = (state_41421[(2)]);
var inst_41418 = (function (){return ((function (inst_41417,state_val_41422,c__36864__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_41417,state_val_41422,c__36864__auto__))
})();
var inst_41419 = setTimeout(inst_41418,(0));
var state_41421__$1 = (function (){var statearr_41424 = state_41421;
(statearr_41424[(8)] = inst_41417);

return statearr_41424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41421__$1,inst_41419);
} else {
return null;
}
}
}
});})(c__36864__auto__))
;
return ((function (switch__36774__auto__,c__36864__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__36775__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__36775__auto____0 = (function (){
var statearr_41425 = [null,null,null,null,null,null,null,null,null];
(statearr_41425[(0)] = devcards$core$mount_namespace_$_state_machine__36775__auto__);

(statearr_41425[(1)] = (1));

return statearr_41425;
});
var devcards$core$mount_namespace_$_state_machine__36775__auto____1 = (function (state_41421){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_41421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e41426){if((e41426 instanceof Object)){
var ex__36778__auto__ = e41426;
var statearr_41427_41429 = state_41421;
(statearr_41427_41429[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41430 = state_41421;
state_41421 = G__41430;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__36775__auto__ = function(state_41421){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__36775__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__36775__auto____1.call(this,state_41421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$core$mount_namespace_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__36775__auto____0;
devcards$core$mount_namespace_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__36775__auto____1;
return devcards$core$mount_namespace_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_41428 = f__36865__auto__.call(null);
(statearr_41428[(6)] = c__36864__auto__);

return statearr_41428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__))
);

return c__36864__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1512749393334
