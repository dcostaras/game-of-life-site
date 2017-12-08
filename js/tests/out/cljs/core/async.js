// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36924 = arguments.length;
switch (G__36924) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36925 = (function (f,blockable,meta36926){
this.f = f;
this.blockable = blockable;
this.meta36926 = meta36926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36927,meta36926__$1){
var self__ = this;
var _36927__$1 = this;
return (new cljs.core.async.t_cljs$core$async36925(self__.f,self__.blockable,meta36926__$1));
});

cljs.core.async.t_cljs$core$async36925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36927){
var self__ = this;
var _36927__$1 = this;
return self__.meta36926;
});

cljs.core.async.t_cljs$core$async36925.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36925.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36926","meta36926",1044243253,null)], null);
});

cljs.core.async.t_cljs$core$async36925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36925";

cljs.core.async.t_cljs$core$async36925.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async36925");
});

cljs.core.async.__GT_t_cljs$core$async36925 = (function cljs$core$async$__GT_t_cljs$core$async36925(f__$1,blockable__$1,meta36926){
return (new cljs.core.async.t_cljs$core$async36925(f__$1,blockable__$1,meta36926));
});

}

return (new cljs.core.async.t_cljs$core$async36925(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36931 = arguments.length;
switch (G__36931) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36934 = arguments.length;
switch (G__36934) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36937 = arguments.length;
switch (G__36937) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36939 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36939);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36939,ret){
return (function (){
return fn1.call(null,val_36939);
});})(val_36939,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36941 = arguments.length;
switch (G__36941) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31273__auto___36943 = n;
var x_36944 = (0);
while(true){
if((x_36944 < n__31273__auto___36943)){
(a[x_36944] = (0));

var G__36945 = (x_36944 + (1));
x_36944 = G__36945;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36946 = (i + (1));
i = G__36946;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36947 = (function (flag,meta36948){
this.flag = flag;
this.meta36948 = meta36948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36949,meta36948__$1){
var self__ = this;
var _36949__$1 = this;
return (new cljs.core.async.t_cljs$core$async36947(self__.flag,meta36948__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36949){
var self__ = this;
var _36949__$1 = this;
return self__.meta36948;
});})(flag))
;

cljs.core.async.t_cljs$core$async36947.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36947.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36948","meta36948",-1768344883,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36947";

cljs.core.async.t_cljs$core$async36947.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async36947");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36947 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36947(flag__$1,meta36948){
return (new cljs.core.async.t_cljs$core$async36947(flag__$1,meta36948));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36947(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36950 = (function (flag,cb,meta36951){
this.flag = flag;
this.cb = cb;
this.meta36951 = meta36951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36952,meta36951__$1){
var self__ = this;
var _36952__$1 = this;
return (new cljs.core.async.t_cljs$core$async36950(self__.flag,self__.cb,meta36951__$1));
});

cljs.core.async.t_cljs$core$async36950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36952){
var self__ = this;
var _36952__$1 = this;
return self__.meta36951;
});

cljs.core.async.t_cljs$core$async36950.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36950.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36951","meta36951",-1959534224,null)], null);
});

cljs.core.async.t_cljs$core$async36950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36950";

cljs.core.async.t_cljs$core$async36950.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async36950");
});

cljs.core.async.__GT_t_cljs$core$async36950 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36950(flag__$1,cb__$1,meta36951){
return (new cljs.core.async.t_cljs$core$async36950(flag__$1,cb__$1,meta36951));
});

}

return (new cljs.core.async.t_cljs$core$async36950(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36953_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36953_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36954_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36954_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30228__auto__ = wport;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36955 = (i + (1));
i = G__36955;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30228__auto__ = ret;
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30216__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30216__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30216__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31514__auto__ = [];
var len__31507__auto___36961 = arguments.length;
var i__31508__auto___36962 = (0);
while(true){
if((i__31508__auto___36962 < len__31507__auto___36961)){
args__31514__auto__.push((arguments[i__31508__auto___36962]));

var G__36963 = (i__31508__auto___36962 + (1));
i__31508__auto___36962 = G__36963;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36958){
var map__36959 = p__36958;
var map__36959__$1 = ((((!((map__36959 == null)))?((((map__36959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36959):map__36959);
var opts = map__36959__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36956){
var G__36957 = cljs.core.first.call(null,seq36956);
var seq36956__$1 = cljs.core.next.call(null,seq36956);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36957,seq36956__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36965 = arguments.length;
switch (G__36965) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36864__auto___37011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___37011){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___37011){
return (function (state_36989){
var state_val_36990 = (state_36989[(1)]);
if((state_val_36990 === (7))){
var inst_36985 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
var statearr_36991_37012 = state_36989__$1;
(statearr_36991_37012[(2)] = inst_36985);

(statearr_36991_37012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (1))){
var state_36989__$1 = state_36989;
var statearr_36992_37013 = state_36989__$1;
(statearr_36992_37013[(2)] = null);

(statearr_36992_37013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (4))){
var inst_36968 = (state_36989[(7)]);
var inst_36968__$1 = (state_36989[(2)]);
var inst_36969 = (inst_36968__$1 == null);
var state_36989__$1 = (function (){var statearr_36993 = state_36989;
(statearr_36993[(7)] = inst_36968__$1);

return statearr_36993;
})();
if(cljs.core.truth_(inst_36969)){
var statearr_36994_37014 = state_36989__$1;
(statearr_36994_37014[(1)] = (5));

} else {
var statearr_36995_37015 = state_36989__$1;
(statearr_36995_37015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (13))){
var state_36989__$1 = state_36989;
var statearr_36996_37016 = state_36989__$1;
(statearr_36996_37016[(2)] = null);

(statearr_36996_37016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (6))){
var inst_36968 = (state_36989[(7)]);
var state_36989__$1 = state_36989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36989__$1,(11),to,inst_36968);
} else {
if((state_val_36990 === (3))){
var inst_36987 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36989__$1,inst_36987);
} else {
if((state_val_36990 === (12))){
var state_36989__$1 = state_36989;
var statearr_36997_37017 = state_36989__$1;
(statearr_36997_37017[(2)] = null);

(statearr_36997_37017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (2))){
var state_36989__$1 = state_36989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36989__$1,(4),from);
} else {
if((state_val_36990 === (11))){
var inst_36978 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
if(cljs.core.truth_(inst_36978)){
var statearr_36998_37018 = state_36989__$1;
(statearr_36998_37018[(1)] = (12));

} else {
var statearr_36999_37019 = state_36989__$1;
(statearr_36999_37019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (9))){
var state_36989__$1 = state_36989;
var statearr_37000_37020 = state_36989__$1;
(statearr_37000_37020[(2)] = null);

(statearr_37000_37020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (5))){
var state_36989__$1 = state_36989;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37001_37021 = state_36989__$1;
(statearr_37001_37021[(1)] = (8));

} else {
var statearr_37002_37022 = state_36989__$1;
(statearr_37002_37022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (14))){
var inst_36983 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
var statearr_37003_37023 = state_36989__$1;
(statearr_37003_37023[(2)] = inst_36983);

(statearr_37003_37023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (10))){
var inst_36975 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
var statearr_37004_37024 = state_36989__$1;
(statearr_37004_37024[(2)] = inst_36975);

(statearr_37004_37024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (8))){
var inst_36972 = cljs.core.async.close_BANG_.call(null,to);
var state_36989__$1 = state_36989;
var statearr_37005_37025 = state_36989__$1;
(statearr_37005_37025[(2)] = inst_36972);

(statearr_37005_37025[(1)] = (10));


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
});})(c__36864__auto___37011))
;
return ((function (switch__36774__auto__,c__36864__auto___37011){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_37006 = [null,null,null,null,null,null,null,null];
(statearr_37006[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_37006[(1)] = (1));

return statearr_37006;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_36989){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_36989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37007){if((e37007 instanceof Object)){
var ex__36778__auto__ = e37007;
var statearr_37008_37026 = state_36989;
(statearr_37008_37026[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37027 = state_36989;
state_36989 = G__37027;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_36989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_36989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___37011))
})();
var state__36866__auto__ = (function (){var statearr_37009 = f__36865__auto__.call(null);
(statearr_37009[(6)] = c__36864__auto___37011);

return statearr_37009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___37011))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37028){
var vec__37029 = p__37028;
var v = cljs.core.nth.call(null,vec__37029,(0),null);
var p = cljs.core.nth.call(null,vec__37029,(1),null);
var job = vec__37029;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36864__auto___37200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___37200,res,vec__37029,v,p,job,jobs,results){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___37200,res,vec__37029,v,p,job,jobs,results){
return (function (state_37036){
var state_val_37037 = (state_37036[(1)]);
if((state_val_37037 === (1))){
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37036__$1,(2),res,v);
} else {
if((state_val_37037 === (2))){
var inst_37033 = (state_37036[(2)]);
var inst_37034 = cljs.core.async.close_BANG_.call(null,res);
var state_37036__$1 = (function (){var statearr_37038 = state_37036;
(statearr_37038[(7)] = inst_37033);

return statearr_37038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37036__$1,inst_37034);
} else {
return null;
}
}
});})(c__36864__auto___37200,res,vec__37029,v,p,job,jobs,results))
;
return ((function (switch__36774__auto__,c__36864__auto___37200,res,vec__37029,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_37039 = [null,null,null,null,null,null,null,null];
(statearr_37039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_37039[(1)] = (1));

return statearr_37039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_37036){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37040){if((e37040 instanceof Object)){
var ex__36778__auto__ = e37040;
var statearr_37041_37201 = state_37036;
(statearr_37041_37201[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37202 = state_37036;
state_37036 = G__37202;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_37036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_37036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___37200,res,vec__37029,v,p,job,jobs,results))
})();
var state__36866__auto__ = (function (){var statearr_37042 = f__36865__auto__.call(null);
(statearr_37042[(6)] = c__36864__auto___37200);

return statearr_37042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___37200,res,vec__37029,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37043){
var vec__37044 = p__37043;
var v = cljs.core.nth.call(null,vec__37044,(0),null);
var p = cljs.core.nth.call(null,vec__37044,(1),null);
var job = vec__37044;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31273__auto___37203 = n;
var __37204 = (0);
while(true){
if((__37204 < n__31273__auto___37203)){
var G__37047_37205 = type;
var G__37047_37206__$1 = (((G__37047_37205 instanceof cljs.core.Keyword))?G__37047_37205.fqn:null);
switch (G__37047_37206__$1) {
case "compute":
var c__36864__auto___37208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37204,c__36864__auto___37208,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (__37204,c__36864__auto___37208,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async){
return (function (state_37060){
var state_val_37061 = (state_37060[(1)]);
if((state_val_37061 === (1))){
var state_37060__$1 = state_37060;
var statearr_37062_37209 = state_37060__$1;
(statearr_37062_37209[(2)] = null);

(statearr_37062_37209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (2))){
var state_37060__$1 = state_37060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37060__$1,(4),jobs);
} else {
if((state_val_37061 === (3))){
var inst_37058 = (state_37060[(2)]);
var state_37060__$1 = state_37060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37060__$1,inst_37058);
} else {
if((state_val_37061 === (4))){
var inst_37050 = (state_37060[(2)]);
var inst_37051 = process.call(null,inst_37050);
var state_37060__$1 = state_37060;
if(cljs.core.truth_(inst_37051)){
var statearr_37063_37210 = state_37060__$1;
(statearr_37063_37210[(1)] = (5));

} else {
var statearr_37064_37211 = state_37060__$1;
(statearr_37064_37211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (5))){
var state_37060__$1 = state_37060;
var statearr_37065_37212 = state_37060__$1;
(statearr_37065_37212[(2)] = null);

(statearr_37065_37212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (6))){
var state_37060__$1 = state_37060;
var statearr_37066_37213 = state_37060__$1;
(statearr_37066_37213[(2)] = null);

(statearr_37066_37213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37061 === (7))){
var inst_37056 = (state_37060[(2)]);
var state_37060__$1 = state_37060;
var statearr_37067_37214 = state_37060__$1;
(statearr_37067_37214[(2)] = inst_37056);

(statearr_37067_37214[(1)] = (3));


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
});})(__37204,c__36864__auto___37208,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async))
;
return ((function (__37204,switch__36774__auto__,c__36864__auto___37208,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_37068 = [null,null,null,null,null,null,null];
(statearr_37068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_37068[(1)] = (1));

return statearr_37068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_37060){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37069){if((e37069 instanceof Object)){
var ex__36778__auto__ = e37069;
var statearr_37070_37215 = state_37060;
(statearr_37070_37215[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37216 = state_37060;
state_37060 = G__37216;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_37060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_37060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(__37204,switch__36774__auto__,c__36864__auto___37208,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async))
})();
var state__36866__auto__ = (function (){var statearr_37071 = f__36865__auto__.call(null);
(statearr_37071[(6)] = c__36864__auto___37208);

return statearr_37071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(__37204,c__36864__auto___37208,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async))
);


break;
case "async":
var c__36864__auto___37217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37204,c__36864__auto___37217,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (__37204,c__36864__auto___37217,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async){
return (function (state_37084){
var state_val_37085 = (state_37084[(1)]);
if((state_val_37085 === (1))){
var state_37084__$1 = state_37084;
var statearr_37086_37218 = state_37084__$1;
(statearr_37086_37218[(2)] = null);

(statearr_37086_37218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (2))){
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(4),jobs);
} else {
if((state_val_37085 === (3))){
var inst_37082 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37084__$1,inst_37082);
} else {
if((state_val_37085 === (4))){
var inst_37074 = (state_37084[(2)]);
var inst_37075 = async.call(null,inst_37074);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37075)){
var statearr_37087_37219 = state_37084__$1;
(statearr_37087_37219[(1)] = (5));

} else {
var statearr_37088_37220 = state_37084__$1;
(statearr_37088_37220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (5))){
var state_37084__$1 = state_37084;
var statearr_37089_37221 = state_37084__$1;
(statearr_37089_37221[(2)] = null);

(statearr_37089_37221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (6))){
var state_37084__$1 = state_37084;
var statearr_37090_37222 = state_37084__$1;
(statearr_37090_37222[(2)] = null);

(statearr_37090_37222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (7))){
var inst_37080 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37091_37223 = state_37084__$1;
(statearr_37091_37223[(2)] = inst_37080);

(statearr_37091_37223[(1)] = (3));


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
});})(__37204,c__36864__auto___37217,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async))
;
return ((function (__37204,switch__36774__auto__,c__36864__auto___37217,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_37092 = [null,null,null,null,null,null,null];
(statearr_37092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_37092[(1)] = (1));

return statearr_37092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_37084){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37093){if((e37093 instanceof Object)){
var ex__36778__auto__ = e37093;
var statearr_37094_37224 = state_37084;
(statearr_37094_37224[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37225 = state_37084;
state_37084 = G__37225;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_37084){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_37084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(__37204,switch__36774__auto__,c__36864__auto___37217,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async))
})();
var state__36866__auto__ = (function (){var statearr_37095 = f__36865__auto__.call(null);
(statearr_37095[(6)] = c__36864__auto___37217);

return statearr_37095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(__37204,c__36864__auto___37217,G__37047_37205,G__37047_37206__$1,n__31273__auto___37203,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37047_37206__$1)].join('')));

}

var G__37226 = (__37204 + (1));
__37204 = G__37226;
continue;
} else {
}
break;
}

var c__36864__auto___37227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___37227,jobs,results,process,async){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___37227,jobs,results,process,async){
return (function (state_37117){
var state_val_37118 = (state_37117[(1)]);
if((state_val_37118 === (1))){
var state_37117__$1 = state_37117;
var statearr_37119_37228 = state_37117__$1;
(statearr_37119_37228[(2)] = null);

(statearr_37119_37228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37118 === (2))){
var state_37117__$1 = state_37117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37117__$1,(4),from);
} else {
if((state_val_37118 === (3))){
var inst_37115 = (state_37117[(2)]);
var state_37117__$1 = state_37117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37117__$1,inst_37115);
} else {
if((state_val_37118 === (4))){
var inst_37098 = (state_37117[(7)]);
var inst_37098__$1 = (state_37117[(2)]);
var inst_37099 = (inst_37098__$1 == null);
var state_37117__$1 = (function (){var statearr_37120 = state_37117;
(statearr_37120[(7)] = inst_37098__$1);

return statearr_37120;
})();
if(cljs.core.truth_(inst_37099)){
var statearr_37121_37229 = state_37117__$1;
(statearr_37121_37229[(1)] = (5));

} else {
var statearr_37122_37230 = state_37117__$1;
(statearr_37122_37230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37118 === (5))){
var inst_37101 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37117__$1 = state_37117;
var statearr_37123_37231 = state_37117__$1;
(statearr_37123_37231[(2)] = inst_37101);

(statearr_37123_37231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37118 === (6))){
var inst_37098 = (state_37117[(7)]);
var inst_37103 = (state_37117[(8)]);
var inst_37103__$1 = cljs.core.async.chan.call(null,(1));
var inst_37104 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37105 = [inst_37098,inst_37103__$1];
var inst_37106 = (new cljs.core.PersistentVector(null,2,(5),inst_37104,inst_37105,null));
var state_37117__$1 = (function (){var statearr_37124 = state_37117;
(statearr_37124[(8)] = inst_37103__$1);

return statearr_37124;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37117__$1,(8),jobs,inst_37106);
} else {
if((state_val_37118 === (7))){
var inst_37113 = (state_37117[(2)]);
var state_37117__$1 = state_37117;
var statearr_37125_37232 = state_37117__$1;
(statearr_37125_37232[(2)] = inst_37113);

(statearr_37125_37232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37118 === (8))){
var inst_37103 = (state_37117[(8)]);
var inst_37108 = (state_37117[(2)]);
var state_37117__$1 = (function (){var statearr_37126 = state_37117;
(statearr_37126[(9)] = inst_37108);

return statearr_37126;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37117__$1,(9),results,inst_37103);
} else {
if((state_val_37118 === (9))){
var inst_37110 = (state_37117[(2)]);
var state_37117__$1 = (function (){var statearr_37127 = state_37117;
(statearr_37127[(10)] = inst_37110);

return statearr_37127;
})();
var statearr_37128_37233 = state_37117__$1;
(statearr_37128_37233[(2)] = null);

(statearr_37128_37233[(1)] = (2));


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
});})(c__36864__auto___37227,jobs,results,process,async))
;
return ((function (switch__36774__auto__,c__36864__auto___37227,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_37129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_37129[(1)] = (1));

return statearr_37129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_37117){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37130){if((e37130 instanceof Object)){
var ex__36778__auto__ = e37130;
var statearr_37131_37234 = state_37117;
(statearr_37131_37234[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37235 = state_37117;
state_37117 = G__37235;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_37117){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_37117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___37227,jobs,results,process,async))
})();
var state__36866__auto__ = (function (){var statearr_37132 = f__36865__auto__.call(null);
(statearr_37132[(6)] = c__36864__auto___37227);

return statearr_37132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___37227,jobs,results,process,async))
);


var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__,jobs,results,process,async){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__,jobs,results,process,async){
return (function (state_37170){
var state_val_37171 = (state_37170[(1)]);
if((state_val_37171 === (7))){
var inst_37166 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37172_37236 = state_37170__$1;
(statearr_37172_37236[(2)] = inst_37166);

(statearr_37172_37236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (20))){
var state_37170__$1 = state_37170;
var statearr_37173_37237 = state_37170__$1;
(statearr_37173_37237[(2)] = null);

(statearr_37173_37237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (1))){
var state_37170__$1 = state_37170;
var statearr_37174_37238 = state_37170__$1;
(statearr_37174_37238[(2)] = null);

(statearr_37174_37238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (4))){
var inst_37135 = (state_37170[(7)]);
var inst_37135__$1 = (state_37170[(2)]);
var inst_37136 = (inst_37135__$1 == null);
var state_37170__$1 = (function (){var statearr_37175 = state_37170;
(statearr_37175[(7)] = inst_37135__$1);

return statearr_37175;
})();
if(cljs.core.truth_(inst_37136)){
var statearr_37176_37239 = state_37170__$1;
(statearr_37176_37239[(1)] = (5));

} else {
var statearr_37177_37240 = state_37170__$1;
(statearr_37177_37240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (15))){
var inst_37148 = (state_37170[(8)]);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37170__$1,(18),to,inst_37148);
} else {
if((state_val_37171 === (21))){
var inst_37161 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37178_37241 = state_37170__$1;
(statearr_37178_37241[(2)] = inst_37161);

(statearr_37178_37241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (13))){
var inst_37163 = (state_37170[(2)]);
var state_37170__$1 = (function (){var statearr_37179 = state_37170;
(statearr_37179[(9)] = inst_37163);

return statearr_37179;
})();
var statearr_37180_37242 = state_37170__$1;
(statearr_37180_37242[(2)] = null);

(statearr_37180_37242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (6))){
var inst_37135 = (state_37170[(7)]);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(11),inst_37135);
} else {
if((state_val_37171 === (17))){
var inst_37156 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37156)){
var statearr_37181_37243 = state_37170__$1;
(statearr_37181_37243[(1)] = (19));

} else {
var statearr_37182_37244 = state_37170__$1;
(statearr_37182_37244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (3))){
var inst_37168 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37170__$1,inst_37168);
} else {
if((state_val_37171 === (12))){
var inst_37145 = (state_37170[(10)]);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(14),inst_37145);
} else {
if((state_val_37171 === (2))){
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(4),results);
} else {
if((state_val_37171 === (19))){
var state_37170__$1 = state_37170;
var statearr_37183_37245 = state_37170__$1;
(statearr_37183_37245[(2)] = null);

(statearr_37183_37245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (11))){
var inst_37145 = (state_37170[(2)]);
var state_37170__$1 = (function (){var statearr_37184 = state_37170;
(statearr_37184[(10)] = inst_37145);

return statearr_37184;
})();
var statearr_37185_37246 = state_37170__$1;
(statearr_37185_37246[(2)] = null);

(statearr_37185_37246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (9))){
var state_37170__$1 = state_37170;
var statearr_37186_37247 = state_37170__$1;
(statearr_37186_37247[(2)] = null);

(statearr_37186_37247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (5))){
var state_37170__$1 = state_37170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37187_37248 = state_37170__$1;
(statearr_37187_37248[(1)] = (8));

} else {
var statearr_37188_37249 = state_37170__$1;
(statearr_37188_37249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (14))){
var inst_37148 = (state_37170[(8)]);
var inst_37150 = (state_37170[(11)]);
var inst_37148__$1 = (state_37170[(2)]);
var inst_37149 = (inst_37148__$1 == null);
var inst_37150__$1 = cljs.core.not.call(null,inst_37149);
var state_37170__$1 = (function (){var statearr_37189 = state_37170;
(statearr_37189[(8)] = inst_37148__$1);

(statearr_37189[(11)] = inst_37150__$1);

return statearr_37189;
})();
if(inst_37150__$1){
var statearr_37190_37250 = state_37170__$1;
(statearr_37190_37250[(1)] = (15));

} else {
var statearr_37191_37251 = state_37170__$1;
(statearr_37191_37251[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (16))){
var inst_37150 = (state_37170[(11)]);
var state_37170__$1 = state_37170;
var statearr_37192_37252 = state_37170__$1;
(statearr_37192_37252[(2)] = inst_37150);

(statearr_37192_37252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (10))){
var inst_37142 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37193_37253 = state_37170__$1;
(statearr_37193_37253[(2)] = inst_37142);

(statearr_37193_37253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (18))){
var inst_37153 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37194_37254 = state_37170__$1;
(statearr_37194_37254[(2)] = inst_37153);

(statearr_37194_37254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (8))){
var inst_37139 = cljs.core.async.close_BANG_.call(null,to);
var state_37170__$1 = state_37170;
var statearr_37195_37255 = state_37170__$1;
(statearr_37195_37255[(2)] = inst_37139);

(statearr_37195_37255[(1)] = (10));


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
});})(c__36864__auto__,jobs,results,process,async))
;
return ((function (switch__36774__auto__,c__36864__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_37196 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_37196[(1)] = (1));

return statearr_37196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_37170){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37197){if((e37197 instanceof Object)){
var ex__36778__auto__ = e37197;
var statearr_37198_37256 = state_37170;
(statearr_37198_37256[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37257 = state_37170;
state_37170 = G__37257;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_37170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_37170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,jobs,results,process,async))
})();
var state__36866__auto__ = (function (){var statearr_37199 = f__36865__auto__.call(null);
(statearr_37199[(6)] = c__36864__auto__);

return statearr_37199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__,jobs,results,process,async))
);

return c__36864__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37259 = arguments.length;
switch (G__37259) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37262 = arguments.length;
switch (G__37262) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37265 = arguments.length;
switch (G__37265) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36864__auto___37314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___37314,tc,fc){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___37314,tc,fc){
return (function (state_37291){
var state_val_37292 = (state_37291[(1)]);
if((state_val_37292 === (7))){
var inst_37287 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
var statearr_37293_37315 = state_37291__$1;
(statearr_37293_37315[(2)] = inst_37287);

(statearr_37293_37315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (1))){
var state_37291__$1 = state_37291;
var statearr_37294_37316 = state_37291__$1;
(statearr_37294_37316[(2)] = null);

(statearr_37294_37316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (4))){
var inst_37268 = (state_37291[(7)]);
var inst_37268__$1 = (state_37291[(2)]);
var inst_37269 = (inst_37268__$1 == null);
var state_37291__$1 = (function (){var statearr_37295 = state_37291;
(statearr_37295[(7)] = inst_37268__$1);

return statearr_37295;
})();
if(cljs.core.truth_(inst_37269)){
var statearr_37296_37317 = state_37291__$1;
(statearr_37296_37317[(1)] = (5));

} else {
var statearr_37297_37318 = state_37291__$1;
(statearr_37297_37318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (13))){
var state_37291__$1 = state_37291;
var statearr_37298_37319 = state_37291__$1;
(statearr_37298_37319[(2)] = null);

(statearr_37298_37319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (6))){
var inst_37268 = (state_37291[(7)]);
var inst_37274 = p.call(null,inst_37268);
var state_37291__$1 = state_37291;
if(cljs.core.truth_(inst_37274)){
var statearr_37299_37320 = state_37291__$1;
(statearr_37299_37320[(1)] = (9));

} else {
var statearr_37300_37321 = state_37291__$1;
(statearr_37300_37321[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (3))){
var inst_37289 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37291__$1,inst_37289);
} else {
if((state_val_37292 === (12))){
var state_37291__$1 = state_37291;
var statearr_37301_37322 = state_37291__$1;
(statearr_37301_37322[(2)] = null);

(statearr_37301_37322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (2))){
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37291__$1,(4),ch);
} else {
if((state_val_37292 === (11))){
var inst_37268 = (state_37291[(7)]);
var inst_37278 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37291__$1,(8),inst_37278,inst_37268);
} else {
if((state_val_37292 === (9))){
var state_37291__$1 = state_37291;
var statearr_37302_37323 = state_37291__$1;
(statearr_37302_37323[(2)] = tc);

(statearr_37302_37323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (5))){
var inst_37271 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37272 = cljs.core.async.close_BANG_.call(null,fc);
var state_37291__$1 = (function (){var statearr_37303 = state_37291;
(statearr_37303[(8)] = inst_37271);

return statearr_37303;
})();
var statearr_37304_37324 = state_37291__$1;
(statearr_37304_37324[(2)] = inst_37272);

(statearr_37304_37324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (14))){
var inst_37285 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
var statearr_37305_37325 = state_37291__$1;
(statearr_37305_37325[(2)] = inst_37285);

(statearr_37305_37325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (10))){
var state_37291__$1 = state_37291;
var statearr_37306_37326 = state_37291__$1;
(statearr_37306_37326[(2)] = fc);

(statearr_37306_37326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (8))){
var inst_37280 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
if(cljs.core.truth_(inst_37280)){
var statearr_37307_37327 = state_37291__$1;
(statearr_37307_37327[(1)] = (12));

} else {
var statearr_37308_37328 = state_37291__$1;
(statearr_37308_37328[(1)] = (13));

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
});})(c__36864__auto___37314,tc,fc))
;
return ((function (switch__36774__auto__,c__36864__auto___37314,tc,fc){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_37309 = [null,null,null,null,null,null,null,null,null];
(statearr_37309[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_37309[(1)] = (1));

return statearr_37309;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_37291){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37310){if((e37310 instanceof Object)){
var ex__36778__auto__ = e37310;
var statearr_37311_37329 = state_37291;
(statearr_37311_37329[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37330 = state_37291;
state_37291 = G__37330;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_37291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_37291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___37314,tc,fc))
})();
var state__36866__auto__ = (function (){var statearr_37312 = f__36865__auto__.call(null);
(statearr_37312[(6)] = c__36864__auto___37314);

return statearr_37312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___37314,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__){
return (function (state_37351){
var state_val_37352 = (state_37351[(1)]);
if((state_val_37352 === (7))){
var inst_37347 = (state_37351[(2)]);
var state_37351__$1 = state_37351;
var statearr_37353_37371 = state_37351__$1;
(statearr_37353_37371[(2)] = inst_37347);

(statearr_37353_37371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37352 === (1))){
var inst_37331 = init;
var state_37351__$1 = (function (){var statearr_37354 = state_37351;
(statearr_37354[(7)] = inst_37331);

return statearr_37354;
})();
var statearr_37355_37372 = state_37351__$1;
(statearr_37355_37372[(2)] = null);

(statearr_37355_37372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37352 === (4))){
var inst_37334 = (state_37351[(8)]);
var inst_37334__$1 = (state_37351[(2)]);
var inst_37335 = (inst_37334__$1 == null);
var state_37351__$1 = (function (){var statearr_37356 = state_37351;
(statearr_37356[(8)] = inst_37334__$1);

return statearr_37356;
})();
if(cljs.core.truth_(inst_37335)){
var statearr_37357_37373 = state_37351__$1;
(statearr_37357_37373[(1)] = (5));

} else {
var statearr_37358_37374 = state_37351__$1;
(statearr_37358_37374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37352 === (6))){
var inst_37334 = (state_37351[(8)]);
var inst_37331 = (state_37351[(7)]);
var inst_37338 = (state_37351[(9)]);
var inst_37338__$1 = f.call(null,inst_37331,inst_37334);
var inst_37339 = cljs.core.reduced_QMARK_.call(null,inst_37338__$1);
var state_37351__$1 = (function (){var statearr_37359 = state_37351;
(statearr_37359[(9)] = inst_37338__$1);

return statearr_37359;
})();
if(inst_37339){
var statearr_37360_37375 = state_37351__$1;
(statearr_37360_37375[(1)] = (8));

} else {
var statearr_37361_37376 = state_37351__$1;
(statearr_37361_37376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37352 === (3))){
var inst_37349 = (state_37351[(2)]);
var state_37351__$1 = state_37351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37351__$1,inst_37349);
} else {
if((state_val_37352 === (2))){
var state_37351__$1 = state_37351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37351__$1,(4),ch);
} else {
if((state_val_37352 === (9))){
var inst_37338 = (state_37351[(9)]);
var inst_37331 = inst_37338;
var state_37351__$1 = (function (){var statearr_37362 = state_37351;
(statearr_37362[(7)] = inst_37331);

return statearr_37362;
})();
var statearr_37363_37377 = state_37351__$1;
(statearr_37363_37377[(2)] = null);

(statearr_37363_37377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37352 === (5))){
var inst_37331 = (state_37351[(7)]);
var state_37351__$1 = state_37351;
var statearr_37364_37378 = state_37351__$1;
(statearr_37364_37378[(2)] = inst_37331);

(statearr_37364_37378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37352 === (10))){
var inst_37345 = (state_37351[(2)]);
var state_37351__$1 = state_37351;
var statearr_37365_37379 = state_37351__$1;
(statearr_37365_37379[(2)] = inst_37345);

(statearr_37365_37379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37352 === (8))){
var inst_37338 = (state_37351[(9)]);
var inst_37341 = cljs.core.deref.call(null,inst_37338);
var state_37351__$1 = state_37351;
var statearr_37366_37380 = state_37351__$1;
(statearr_37366_37380[(2)] = inst_37341);

(statearr_37366_37380[(1)] = (10));


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
});})(c__36864__auto__))
;
return ((function (switch__36774__auto__,c__36864__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36775__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36775__auto____0 = (function (){
var statearr_37367 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37367[(0)] = cljs$core$async$reduce_$_state_machine__36775__auto__);

(statearr_37367[(1)] = (1));

return statearr_37367;
});
var cljs$core$async$reduce_$_state_machine__36775__auto____1 = (function (state_37351){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37368){if((e37368 instanceof Object)){
var ex__36778__auto__ = e37368;
var statearr_37369_37381 = state_37351;
(statearr_37369_37381[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37382 = state_37351;
state_37351 = G__37382;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36775__auto__ = function(state_37351){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36775__auto____1.call(this,state_37351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36775__auto____0;
cljs$core$async$reduce_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36775__auto____1;
return cljs$core$async$reduce_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_37370 = f__36865__auto__.call(null);
(statearr_37370[(6)] = c__36864__auto__);

return statearr_37370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__))
);

return c__36864__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__,f__$1){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__,f__$1){
return (function (state_37388){
var state_val_37389 = (state_37388[(1)]);
if((state_val_37389 === (1))){
var inst_37383 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37388__$1 = state_37388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37388__$1,(2),inst_37383);
} else {
if((state_val_37389 === (2))){
var inst_37385 = (state_37388[(2)]);
var inst_37386 = f__$1.call(null,inst_37385);
var state_37388__$1 = state_37388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37388__$1,inst_37386);
} else {
return null;
}
}
});})(c__36864__auto__,f__$1))
;
return ((function (switch__36774__auto__,c__36864__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__36775__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36775__auto____0 = (function (){
var statearr_37390 = [null,null,null,null,null,null,null];
(statearr_37390[(0)] = cljs$core$async$transduce_$_state_machine__36775__auto__);

(statearr_37390[(1)] = (1));

return statearr_37390;
});
var cljs$core$async$transduce_$_state_machine__36775__auto____1 = (function (state_37388){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37391){if((e37391 instanceof Object)){
var ex__36778__auto__ = e37391;
var statearr_37392_37394 = state_37388;
(statearr_37392_37394[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37395 = state_37388;
state_37388 = G__37395;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36775__auto__ = function(state_37388){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36775__auto____1.call(this,state_37388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36775__auto____0;
cljs$core$async$transduce_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36775__auto____1;
return cljs$core$async$transduce_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,f__$1))
})();
var state__36866__auto__ = (function (){var statearr_37393 = f__36865__auto__.call(null);
(statearr_37393[(6)] = c__36864__auto__);

return statearr_37393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__,f__$1))
);

return c__36864__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37397 = arguments.length;
switch (G__37397) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__){
return (function (state_37422){
var state_val_37423 = (state_37422[(1)]);
if((state_val_37423 === (7))){
var inst_37404 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37424_37445 = state_37422__$1;
(statearr_37424_37445[(2)] = inst_37404);

(statearr_37424_37445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (1))){
var inst_37398 = cljs.core.seq.call(null,coll);
var inst_37399 = inst_37398;
var state_37422__$1 = (function (){var statearr_37425 = state_37422;
(statearr_37425[(7)] = inst_37399);

return statearr_37425;
})();
var statearr_37426_37446 = state_37422__$1;
(statearr_37426_37446[(2)] = null);

(statearr_37426_37446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (4))){
var inst_37399 = (state_37422[(7)]);
var inst_37402 = cljs.core.first.call(null,inst_37399);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37422__$1,(7),ch,inst_37402);
} else {
if((state_val_37423 === (13))){
var inst_37416 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37427_37447 = state_37422__$1;
(statearr_37427_37447[(2)] = inst_37416);

(statearr_37427_37447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (6))){
var inst_37407 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37407)){
var statearr_37428_37448 = state_37422__$1;
(statearr_37428_37448[(1)] = (8));

} else {
var statearr_37429_37449 = state_37422__$1;
(statearr_37429_37449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (3))){
var inst_37420 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37422__$1,inst_37420);
} else {
if((state_val_37423 === (12))){
var state_37422__$1 = state_37422;
var statearr_37430_37450 = state_37422__$1;
(statearr_37430_37450[(2)] = null);

(statearr_37430_37450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (2))){
var inst_37399 = (state_37422[(7)]);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37399)){
var statearr_37431_37451 = state_37422__$1;
(statearr_37431_37451[(1)] = (4));

} else {
var statearr_37432_37452 = state_37422__$1;
(statearr_37432_37452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (11))){
var inst_37413 = cljs.core.async.close_BANG_.call(null,ch);
var state_37422__$1 = state_37422;
var statearr_37433_37453 = state_37422__$1;
(statearr_37433_37453[(2)] = inst_37413);

(statearr_37433_37453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (9))){
var state_37422__$1 = state_37422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37434_37454 = state_37422__$1;
(statearr_37434_37454[(1)] = (11));

} else {
var statearr_37435_37455 = state_37422__$1;
(statearr_37435_37455[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (5))){
var inst_37399 = (state_37422[(7)]);
var state_37422__$1 = state_37422;
var statearr_37436_37456 = state_37422__$1;
(statearr_37436_37456[(2)] = inst_37399);

(statearr_37436_37456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (10))){
var inst_37418 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37437_37457 = state_37422__$1;
(statearr_37437_37457[(2)] = inst_37418);

(statearr_37437_37457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (8))){
var inst_37399 = (state_37422[(7)]);
var inst_37409 = cljs.core.next.call(null,inst_37399);
var inst_37399__$1 = inst_37409;
var state_37422__$1 = (function (){var statearr_37438 = state_37422;
(statearr_37438[(7)] = inst_37399__$1);

return statearr_37438;
})();
var statearr_37439_37458 = state_37422__$1;
(statearr_37439_37458[(2)] = null);

(statearr_37439_37458[(1)] = (2));


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
});})(c__36864__auto__))
;
return ((function (switch__36774__auto__,c__36864__auto__){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_37440 = [null,null,null,null,null,null,null,null];
(statearr_37440[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_37440[(1)] = (1));

return statearr_37440;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_37422){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37441){if((e37441 instanceof Object)){
var ex__36778__auto__ = e37441;
var statearr_37442_37459 = state_37422;
(statearr_37442_37459[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37460 = state_37422;
state_37422 = G__37460;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_37422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_37422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_37443 = f__36865__auto__.call(null);
(statearr_37443[(6)] = c__36864__auto__);

return statearr_37443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__))
);

return c__36864__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30961__auto__ = (((_ == null))?null:_);
var m__30962__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,_);
} else {
var m__30962__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30961__auto__ = (((m == null))?null:m);
var m__30962__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30962__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30961__auto__ = (((m == null))?null:m);
var m__30962__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,m,ch);
} else {
var m__30962__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30961__auto__ = (((m == null))?null:m);
var m__30962__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,m);
} else {
var m__30962__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37461 = (function (ch,cs,meta37462){
this.ch = ch;
this.cs = cs;
this.meta37462 = meta37462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37463,meta37462__$1){
var self__ = this;
var _37463__$1 = this;
return (new cljs.core.async.t_cljs$core$async37461(self__.ch,self__.cs,meta37462__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37463){
var self__ = this;
var _37463__$1 = this;
return self__.meta37462;
});})(cs))
;

cljs.core.async.t_cljs$core$async37461.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37461.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37461.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37461.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37461.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37461.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37462","meta37462",1148211681,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37461";

cljs.core.async.t_cljs$core$async37461.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async37461");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37461 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37461(ch__$1,cs__$1,meta37462){
return (new cljs.core.async.t_cljs$core$async37461(ch__$1,cs__$1,meta37462));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37461(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__36864__auto___37683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___37683,cs,m,dchan,dctr,done){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___37683,cs,m,dchan,dctr,done){
return (function (state_37598){
var state_val_37599 = (state_37598[(1)]);
if((state_val_37599 === (7))){
var inst_37594 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37600_37684 = state_37598__$1;
(statearr_37600_37684[(2)] = inst_37594);

(statearr_37600_37684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (20))){
var inst_37497 = (state_37598[(7)]);
var inst_37509 = cljs.core.first.call(null,inst_37497);
var inst_37510 = cljs.core.nth.call(null,inst_37509,(0),null);
var inst_37511 = cljs.core.nth.call(null,inst_37509,(1),null);
var state_37598__$1 = (function (){var statearr_37601 = state_37598;
(statearr_37601[(8)] = inst_37510);

return statearr_37601;
})();
if(cljs.core.truth_(inst_37511)){
var statearr_37602_37685 = state_37598__$1;
(statearr_37602_37685[(1)] = (22));

} else {
var statearr_37603_37686 = state_37598__$1;
(statearr_37603_37686[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (27))){
var inst_37539 = (state_37598[(9)]);
var inst_37546 = (state_37598[(10)]);
var inst_37466 = (state_37598[(11)]);
var inst_37541 = (state_37598[(12)]);
var inst_37546__$1 = cljs.core._nth.call(null,inst_37539,inst_37541);
var inst_37547 = cljs.core.async.put_BANG_.call(null,inst_37546__$1,inst_37466,done);
var state_37598__$1 = (function (){var statearr_37604 = state_37598;
(statearr_37604[(10)] = inst_37546__$1);

return statearr_37604;
})();
if(cljs.core.truth_(inst_37547)){
var statearr_37605_37687 = state_37598__$1;
(statearr_37605_37687[(1)] = (30));

} else {
var statearr_37606_37688 = state_37598__$1;
(statearr_37606_37688[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (1))){
var state_37598__$1 = state_37598;
var statearr_37607_37689 = state_37598__$1;
(statearr_37607_37689[(2)] = null);

(statearr_37607_37689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (24))){
var inst_37497 = (state_37598[(7)]);
var inst_37516 = (state_37598[(2)]);
var inst_37517 = cljs.core.next.call(null,inst_37497);
var inst_37475 = inst_37517;
var inst_37476 = null;
var inst_37477 = (0);
var inst_37478 = (0);
var state_37598__$1 = (function (){var statearr_37608 = state_37598;
(statearr_37608[(13)] = inst_37476);

(statearr_37608[(14)] = inst_37478);

(statearr_37608[(15)] = inst_37516);

(statearr_37608[(16)] = inst_37477);

(statearr_37608[(17)] = inst_37475);

return statearr_37608;
})();
var statearr_37609_37690 = state_37598__$1;
(statearr_37609_37690[(2)] = null);

(statearr_37609_37690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (39))){
var state_37598__$1 = state_37598;
var statearr_37613_37691 = state_37598__$1;
(statearr_37613_37691[(2)] = null);

(statearr_37613_37691[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (4))){
var inst_37466 = (state_37598[(11)]);
var inst_37466__$1 = (state_37598[(2)]);
var inst_37467 = (inst_37466__$1 == null);
var state_37598__$1 = (function (){var statearr_37614 = state_37598;
(statearr_37614[(11)] = inst_37466__$1);

return statearr_37614;
})();
if(cljs.core.truth_(inst_37467)){
var statearr_37615_37692 = state_37598__$1;
(statearr_37615_37692[(1)] = (5));

} else {
var statearr_37616_37693 = state_37598__$1;
(statearr_37616_37693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (15))){
var inst_37476 = (state_37598[(13)]);
var inst_37478 = (state_37598[(14)]);
var inst_37477 = (state_37598[(16)]);
var inst_37475 = (state_37598[(17)]);
var inst_37493 = (state_37598[(2)]);
var inst_37494 = (inst_37478 + (1));
var tmp37610 = inst_37476;
var tmp37611 = inst_37477;
var tmp37612 = inst_37475;
var inst_37475__$1 = tmp37612;
var inst_37476__$1 = tmp37610;
var inst_37477__$1 = tmp37611;
var inst_37478__$1 = inst_37494;
var state_37598__$1 = (function (){var statearr_37617 = state_37598;
(statearr_37617[(13)] = inst_37476__$1);

(statearr_37617[(14)] = inst_37478__$1);

(statearr_37617[(16)] = inst_37477__$1);

(statearr_37617[(17)] = inst_37475__$1);

(statearr_37617[(18)] = inst_37493);

return statearr_37617;
})();
var statearr_37618_37694 = state_37598__$1;
(statearr_37618_37694[(2)] = null);

(statearr_37618_37694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (21))){
var inst_37520 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37622_37695 = state_37598__$1;
(statearr_37622_37695[(2)] = inst_37520);

(statearr_37622_37695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (31))){
var inst_37546 = (state_37598[(10)]);
var inst_37550 = done.call(null,null);
var inst_37551 = cljs.core.async.untap_STAR_.call(null,m,inst_37546);
var state_37598__$1 = (function (){var statearr_37623 = state_37598;
(statearr_37623[(19)] = inst_37550);

return statearr_37623;
})();
var statearr_37624_37696 = state_37598__$1;
(statearr_37624_37696[(2)] = inst_37551);

(statearr_37624_37696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (32))){
var inst_37539 = (state_37598[(9)]);
var inst_37540 = (state_37598[(20)]);
var inst_37541 = (state_37598[(12)]);
var inst_37538 = (state_37598[(21)]);
var inst_37553 = (state_37598[(2)]);
var inst_37554 = (inst_37541 + (1));
var tmp37619 = inst_37539;
var tmp37620 = inst_37540;
var tmp37621 = inst_37538;
var inst_37538__$1 = tmp37621;
var inst_37539__$1 = tmp37619;
var inst_37540__$1 = tmp37620;
var inst_37541__$1 = inst_37554;
var state_37598__$1 = (function (){var statearr_37625 = state_37598;
(statearr_37625[(9)] = inst_37539__$1);

(statearr_37625[(20)] = inst_37540__$1);

(statearr_37625[(22)] = inst_37553);

(statearr_37625[(12)] = inst_37541__$1);

(statearr_37625[(21)] = inst_37538__$1);

return statearr_37625;
})();
var statearr_37626_37697 = state_37598__$1;
(statearr_37626_37697[(2)] = null);

(statearr_37626_37697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (40))){
var inst_37566 = (state_37598[(23)]);
var inst_37570 = done.call(null,null);
var inst_37571 = cljs.core.async.untap_STAR_.call(null,m,inst_37566);
var state_37598__$1 = (function (){var statearr_37627 = state_37598;
(statearr_37627[(24)] = inst_37570);

return statearr_37627;
})();
var statearr_37628_37698 = state_37598__$1;
(statearr_37628_37698[(2)] = inst_37571);

(statearr_37628_37698[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (33))){
var inst_37557 = (state_37598[(25)]);
var inst_37559 = cljs.core.chunked_seq_QMARK_.call(null,inst_37557);
var state_37598__$1 = state_37598;
if(inst_37559){
var statearr_37629_37699 = state_37598__$1;
(statearr_37629_37699[(1)] = (36));

} else {
var statearr_37630_37700 = state_37598__$1;
(statearr_37630_37700[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (13))){
var inst_37487 = (state_37598[(26)]);
var inst_37490 = cljs.core.async.close_BANG_.call(null,inst_37487);
var state_37598__$1 = state_37598;
var statearr_37631_37701 = state_37598__$1;
(statearr_37631_37701[(2)] = inst_37490);

(statearr_37631_37701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (22))){
var inst_37510 = (state_37598[(8)]);
var inst_37513 = cljs.core.async.close_BANG_.call(null,inst_37510);
var state_37598__$1 = state_37598;
var statearr_37632_37702 = state_37598__$1;
(statearr_37632_37702[(2)] = inst_37513);

(statearr_37632_37702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (36))){
var inst_37557 = (state_37598[(25)]);
var inst_37561 = cljs.core.chunk_first.call(null,inst_37557);
var inst_37562 = cljs.core.chunk_rest.call(null,inst_37557);
var inst_37563 = cljs.core.count.call(null,inst_37561);
var inst_37538 = inst_37562;
var inst_37539 = inst_37561;
var inst_37540 = inst_37563;
var inst_37541 = (0);
var state_37598__$1 = (function (){var statearr_37633 = state_37598;
(statearr_37633[(9)] = inst_37539);

(statearr_37633[(20)] = inst_37540);

(statearr_37633[(12)] = inst_37541);

(statearr_37633[(21)] = inst_37538);

return statearr_37633;
})();
var statearr_37634_37703 = state_37598__$1;
(statearr_37634_37703[(2)] = null);

(statearr_37634_37703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (41))){
var inst_37557 = (state_37598[(25)]);
var inst_37573 = (state_37598[(2)]);
var inst_37574 = cljs.core.next.call(null,inst_37557);
var inst_37538 = inst_37574;
var inst_37539 = null;
var inst_37540 = (0);
var inst_37541 = (0);
var state_37598__$1 = (function (){var statearr_37635 = state_37598;
(statearr_37635[(9)] = inst_37539);

(statearr_37635[(20)] = inst_37540);

(statearr_37635[(27)] = inst_37573);

(statearr_37635[(12)] = inst_37541);

(statearr_37635[(21)] = inst_37538);

return statearr_37635;
})();
var statearr_37636_37704 = state_37598__$1;
(statearr_37636_37704[(2)] = null);

(statearr_37636_37704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (43))){
var state_37598__$1 = state_37598;
var statearr_37637_37705 = state_37598__$1;
(statearr_37637_37705[(2)] = null);

(statearr_37637_37705[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (29))){
var inst_37582 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37638_37706 = state_37598__$1;
(statearr_37638_37706[(2)] = inst_37582);

(statearr_37638_37706[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (44))){
var inst_37591 = (state_37598[(2)]);
var state_37598__$1 = (function (){var statearr_37639 = state_37598;
(statearr_37639[(28)] = inst_37591);

return statearr_37639;
})();
var statearr_37640_37707 = state_37598__$1;
(statearr_37640_37707[(2)] = null);

(statearr_37640_37707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (6))){
var inst_37530 = (state_37598[(29)]);
var inst_37529 = cljs.core.deref.call(null,cs);
var inst_37530__$1 = cljs.core.keys.call(null,inst_37529);
var inst_37531 = cljs.core.count.call(null,inst_37530__$1);
var inst_37532 = cljs.core.reset_BANG_.call(null,dctr,inst_37531);
var inst_37537 = cljs.core.seq.call(null,inst_37530__$1);
var inst_37538 = inst_37537;
var inst_37539 = null;
var inst_37540 = (0);
var inst_37541 = (0);
var state_37598__$1 = (function (){var statearr_37641 = state_37598;
(statearr_37641[(9)] = inst_37539);

(statearr_37641[(20)] = inst_37540);

(statearr_37641[(12)] = inst_37541);

(statearr_37641[(30)] = inst_37532);

(statearr_37641[(21)] = inst_37538);

(statearr_37641[(29)] = inst_37530__$1);

return statearr_37641;
})();
var statearr_37642_37708 = state_37598__$1;
(statearr_37642_37708[(2)] = null);

(statearr_37642_37708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (28))){
var inst_37557 = (state_37598[(25)]);
var inst_37538 = (state_37598[(21)]);
var inst_37557__$1 = cljs.core.seq.call(null,inst_37538);
var state_37598__$1 = (function (){var statearr_37643 = state_37598;
(statearr_37643[(25)] = inst_37557__$1);

return statearr_37643;
})();
if(inst_37557__$1){
var statearr_37644_37709 = state_37598__$1;
(statearr_37644_37709[(1)] = (33));

} else {
var statearr_37645_37710 = state_37598__$1;
(statearr_37645_37710[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (25))){
var inst_37540 = (state_37598[(20)]);
var inst_37541 = (state_37598[(12)]);
var inst_37543 = (inst_37541 < inst_37540);
var inst_37544 = inst_37543;
var state_37598__$1 = state_37598;
if(cljs.core.truth_(inst_37544)){
var statearr_37646_37711 = state_37598__$1;
(statearr_37646_37711[(1)] = (27));

} else {
var statearr_37647_37712 = state_37598__$1;
(statearr_37647_37712[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (34))){
var state_37598__$1 = state_37598;
var statearr_37648_37713 = state_37598__$1;
(statearr_37648_37713[(2)] = null);

(statearr_37648_37713[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (17))){
var state_37598__$1 = state_37598;
var statearr_37649_37714 = state_37598__$1;
(statearr_37649_37714[(2)] = null);

(statearr_37649_37714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (3))){
var inst_37596 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37598__$1,inst_37596);
} else {
if((state_val_37599 === (12))){
var inst_37525 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37650_37715 = state_37598__$1;
(statearr_37650_37715[(2)] = inst_37525);

(statearr_37650_37715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (2))){
var state_37598__$1 = state_37598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37598__$1,(4),ch);
} else {
if((state_val_37599 === (23))){
var state_37598__$1 = state_37598;
var statearr_37651_37716 = state_37598__$1;
(statearr_37651_37716[(2)] = null);

(statearr_37651_37716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (35))){
var inst_37580 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37652_37717 = state_37598__$1;
(statearr_37652_37717[(2)] = inst_37580);

(statearr_37652_37717[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (19))){
var inst_37497 = (state_37598[(7)]);
var inst_37501 = cljs.core.chunk_first.call(null,inst_37497);
var inst_37502 = cljs.core.chunk_rest.call(null,inst_37497);
var inst_37503 = cljs.core.count.call(null,inst_37501);
var inst_37475 = inst_37502;
var inst_37476 = inst_37501;
var inst_37477 = inst_37503;
var inst_37478 = (0);
var state_37598__$1 = (function (){var statearr_37653 = state_37598;
(statearr_37653[(13)] = inst_37476);

(statearr_37653[(14)] = inst_37478);

(statearr_37653[(16)] = inst_37477);

(statearr_37653[(17)] = inst_37475);

return statearr_37653;
})();
var statearr_37654_37718 = state_37598__$1;
(statearr_37654_37718[(2)] = null);

(statearr_37654_37718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (11))){
var inst_37497 = (state_37598[(7)]);
var inst_37475 = (state_37598[(17)]);
var inst_37497__$1 = cljs.core.seq.call(null,inst_37475);
var state_37598__$1 = (function (){var statearr_37655 = state_37598;
(statearr_37655[(7)] = inst_37497__$1);

return statearr_37655;
})();
if(inst_37497__$1){
var statearr_37656_37719 = state_37598__$1;
(statearr_37656_37719[(1)] = (16));

} else {
var statearr_37657_37720 = state_37598__$1;
(statearr_37657_37720[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (9))){
var inst_37527 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37658_37721 = state_37598__$1;
(statearr_37658_37721[(2)] = inst_37527);

(statearr_37658_37721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (5))){
var inst_37473 = cljs.core.deref.call(null,cs);
var inst_37474 = cljs.core.seq.call(null,inst_37473);
var inst_37475 = inst_37474;
var inst_37476 = null;
var inst_37477 = (0);
var inst_37478 = (0);
var state_37598__$1 = (function (){var statearr_37659 = state_37598;
(statearr_37659[(13)] = inst_37476);

(statearr_37659[(14)] = inst_37478);

(statearr_37659[(16)] = inst_37477);

(statearr_37659[(17)] = inst_37475);

return statearr_37659;
})();
var statearr_37660_37722 = state_37598__$1;
(statearr_37660_37722[(2)] = null);

(statearr_37660_37722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (14))){
var state_37598__$1 = state_37598;
var statearr_37661_37723 = state_37598__$1;
(statearr_37661_37723[(2)] = null);

(statearr_37661_37723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (45))){
var inst_37588 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37662_37724 = state_37598__$1;
(statearr_37662_37724[(2)] = inst_37588);

(statearr_37662_37724[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (26))){
var inst_37530 = (state_37598[(29)]);
var inst_37584 = (state_37598[(2)]);
var inst_37585 = cljs.core.seq.call(null,inst_37530);
var state_37598__$1 = (function (){var statearr_37663 = state_37598;
(statearr_37663[(31)] = inst_37584);

return statearr_37663;
})();
if(inst_37585){
var statearr_37664_37725 = state_37598__$1;
(statearr_37664_37725[(1)] = (42));

} else {
var statearr_37665_37726 = state_37598__$1;
(statearr_37665_37726[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (16))){
var inst_37497 = (state_37598[(7)]);
var inst_37499 = cljs.core.chunked_seq_QMARK_.call(null,inst_37497);
var state_37598__$1 = state_37598;
if(inst_37499){
var statearr_37666_37727 = state_37598__$1;
(statearr_37666_37727[(1)] = (19));

} else {
var statearr_37667_37728 = state_37598__$1;
(statearr_37667_37728[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (38))){
var inst_37577 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37668_37729 = state_37598__$1;
(statearr_37668_37729[(2)] = inst_37577);

(statearr_37668_37729[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (30))){
var state_37598__$1 = state_37598;
var statearr_37669_37730 = state_37598__$1;
(statearr_37669_37730[(2)] = null);

(statearr_37669_37730[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (10))){
var inst_37476 = (state_37598[(13)]);
var inst_37478 = (state_37598[(14)]);
var inst_37486 = cljs.core._nth.call(null,inst_37476,inst_37478);
var inst_37487 = cljs.core.nth.call(null,inst_37486,(0),null);
var inst_37488 = cljs.core.nth.call(null,inst_37486,(1),null);
var state_37598__$1 = (function (){var statearr_37670 = state_37598;
(statearr_37670[(26)] = inst_37487);

return statearr_37670;
})();
if(cljs.core.truth_(inst_37488)){
var statearr_37671_37731 = state_37598__$1;
(statearr_37671_37731[(1)] = (13));

} else {
var statearr_37672_37732 = state_37598__$1;
(statearr_37672_37732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (18))){
var inst_37523 = (state_37598[(2)]);
var state_37598__$1 = state_37598;
var statearr_37673_37733 = state_37598__$1;
(statearr_37673_37733[(2)] = inst_37523);

(statearr_37673_37733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (42))){
var state_37598__$1 = state_37598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37598__$1,(45),dchan);
} else {
if((state_val_37599 === (37))){
var inst_37557 = (state_37598[(25)]);
var inst_37566 = (state_37598[(23)]);
var inst_37466 = (state_37598[(11)]);
var inst_37566__$1 = cljs.core.first.call(null,inst_37557);
var inst_37567 = cljs.core.async.put_BANG_.call(null,inst_37566__$1,inst_37466,done);
var state_37598__$1 = (function (){var statearr_37674 = state_37598;
(statearr_37674[(23)] = inst_37566__$1);

return statearr_37674;
})();
if(cljs.core.truth_(inst_37567)){
var statearr_37675_37734 = state_37598__$1;
(statearr_37675_37734[(1)] = (39));

} else {
var statearr_37676_37735 = state_37598__$1;
(statearr_37676_37735[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37599 === (8))){
var inst_37478 = (state_37598[(14)]);
var inst_37477 = (state_37598[(16)]);
var inst_37480 = (inst_37478 < inst_37477);
var inst_37481 = inst_37480;
var state_37598__$1 = state_37598;
if(cljs.core.truth_(inst_37481)){
var statearr_37677_37736 = state_37598__$1;
(statearr_37677_37736[(1)] = (10));

} else {
var statearr_37678_37737 = state_37598__$1;
(statearr_37678_37737[(1)] = (11));

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
});})(c__36864__auto___37683,cs,m,dchan,dctr,done))
;
return ((function (switch__36774__auto__,c__36864__auto___37683,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36775__auto__ = null;
var cljs$core$async$mult_$_state_machine__36775__auto____0 = (function (){
var statearr_37679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37679[(0)] = cljs$core$async$mult_$_state_machine__36775__auto__);

(statearr_37679[(1)] = (1));

return statearr_37679;
});
var cljs$core$async$mult_$_state_machine__36775__auto____1 = (function (state_37598){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37680){if((e37680 instanceof Object)){
var ex__36778__auto__ = e37680;
var statearr_37681_37738 = state_37598;
(statearr_37681_37738[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37739 = state_37598;
state_37598 = G__37739;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36775__auto__ = function(state_37598){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36775__auto____1.call(this,state_37598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36775__auto____0;
cljs$core$async$mult_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36775__auto____1;
return cljs$core$async$mult_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___37683,cs,m,dchan,dctr,done))
})();
var state__36866__auto__ = (function (){var statearr_37682 = f__36865__auto__.call(null);
(statearr_37682[(6)] = c__36864__auto___37683);

return statearr_37682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___37683,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37741 = arguments.length;
switch (G__37741) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30961__auto__ = (((m == null))?null:m);
var m__30962__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,m,ch);
} else {
var m__30962__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30961__auto__ = (((m == null))?null:m);
var m__30962__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,m,ch);
} else {
var m__30962__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30961__auto__ = (((m == null))?null:m);
var m__30962__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,m);
} else {
var m__30962__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30961__auto__ = (((m == null))?null:m);
var m__30962__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,m,state_map);
} else {
var m__30962__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30961__auto__ = (((m == null))?null:m);
var m__30962__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,m,mode);
} else {
var m__30962__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31514__auto__ = [];
var len__31507__auto___37753 = arguments.length;
var i__31508__auto___37754 = (0);
while(true){
if((i__31508__auto___37754 < len__31507__auto___37753)){
args__31514__auto__.push((arguments[i__31508__auto___37754]));

var G__37755 = (i__31508__auto___37754 + (1));
i__31508__auto___37754 = G__37755;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((3) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31515__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37747){
var map__37748 = p__37747;
var map__37748__$1 = ((((!((map__37748 == null)))?((((map__37748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37748):map__37748);
var opts = map__37748__$1;
var statearr_37750_37756 = state;
(statearr_37750_37756[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__37748,map__37748__$1,opts){
return (function (val){
var statearr_37751_37757 = state;
(statearr_37751_37757[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37748,map__37748__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_37752_37758 = state;
(statearr_37752_37758[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37743){
var G__37744 = cljs.core.first.call(null,seq37743);
var seq37743__$1 = cljs.core.next.call(null,seq37743);
var G__37745 = cljs.core.first.call(null,seq37743__$1);
var seq37743__$2 = cljs.core.next.call(null,seq37743__$1);
var G__37746 = cljs.core.first.call(null,seq37743__$2);
var seq37743__$3 = cljs.core.next.call(null,seq37743__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37744,G__37745,G__37746,seq37743__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37759 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta37760){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta37760 = meta37760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37761,meta37760__$1){
var self__ = this;
var _37761__$1 = this;
return (new cljs.core.async.t_cljs$core$async37759(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta37760__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37761){
var self__ = this;
var _37761__$1 = this;
return self__.meta37760;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta37760","meta37760",-886436394,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37759";

cljs.core.async.t_cljs$core$async37759.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async37759");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37759 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37759(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37760){
return (new cljs.core.async.t_cljs$core$async37759(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37760));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37759(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36864__auto___37923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___37923,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___37923,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37863){
var state_val_37864 = (state_37863[(1)]);
if((state_val_37864 === (7))){
var inst_37778 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37865_37924 = state_37863__$1;
(statearr_37865_37924[(2)] = inst_37778);

(statearr_37865_37924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (20))){
var inst_37790 = (state_37863[(7)]);
var state_37863__$1 = state_37863;
var statearr_37866_37925 = state_37863__$1;
(statearr_37866_37925[(2)] = inst_37790);

(statearr_37866_37925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (27))){
var state_37863__$1 = state_37863;
var statearr_37867_37926 = state_37863__$1;
(statearr_37867_37926[(2)] = null);

(statearr_37867_37926[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (1))){
var inst_37765 = (state_37863[(8)]);
var inst_37765__$1 = calc_state.call(null);
var inst_37767 = (inst_37765__$1 == null);
var inst_37768 = cljs.core.not.call(null,inst_37767);
var state_37863__$1 = (function (){var statearr_37868 = state_37863;
(statearr_37868[(8)] = inst_37765__$1);

return statearr_37868;
})();
if(inst_37768){
var statearr_37869_37927 = state_37863__$1;
(statearr_37869_37927[(1)] = (2));

} else {
var statearr_37870_37928 = state_37863__$1;
(statearr_37870_37928[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (24))){
var inst_37823 = (state_37863[(9)]);
var inst_37837 = (state_37863[(10)]);
var inst_37814 = (state_37863[(11)]);
var inst_37837__$1 = inst_37814.call(null,inst_37823);
var state_37863__$1 = (function (){var statearr_37871 = state_37863;
(statearr_37871[(10)] = inst_37837__$1);

return statearr_37871;
})();
if(cljs.core.truth_(inst_37837__$1)){
var statearr_37872_37929 = state_37863__$1;
(statearr_37872_37929[(1)] = (29));

} else {
var statearr_37873_37930 = state_37863__$1;
(statearr_37873_37930[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (4))){
var inst_37781 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
if(cljs.core.truth_(inst_37781)){
var statearr_37874_37931 = state_37863__$1;
(statearr_37874_37931[(1)] = (8));

} else {
var statearr_37875_37932 = state_37863__$1;
(statearr_37875_37932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (15))){
var inst_37808 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
if(cljs.core.truth_(inst_37808)){
var statearr_37876_37933 = state_37863__$1;
(statearr_37876_37933[(1)] = (19));

} else {
var statearr_37877_37934 = state_37863__$1;
(statearr_37877_37934[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (21))){
var inst_37813 = (state_37863[(12)]);
var inst_37813__$1 = (state_37863[(2)]);
var inst_37814 = cljs.core.get.call(null,inst_37813__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37815 = cljs.core.get.call(null,inst_37813__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37816 = cljs.core.get.call(null,inst_37813__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37863__$1 = (function (){var statearr_37878 = state_37863;
(statearr_37878[(13)] = inst_37815);

(statearr_37878[(12)] = inst_37813__$1);

(statearr_37878[(11)] = inst_37814);

return statearr_37878;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37863__$1,(22),inst_37816);
} else {
if((state_val_37864 === (31))){
var inst_37845 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
if(cljs.core.truth_(inst_37845)){
var statearr_37879_37935 = state_37863__$1;
(statearr_37879_37935[(1)] = (32));

} else {
var statearr_37880_37936 = state_37863__$1;
(statearr_37880_37936[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (32))){
var inst_37822 = (state_37863[(14)]);
var state_37863__$1 = state_37863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37863__$1,(35),out,inst_37822);
} else {
if((state_val_37864 === (33))){
var inst_37813 = (state_37863[(12)]);
var inst_37790 = inst_37813;
var state_37863__$1 = (function (){var statearr_37881 = state_37863;
(statearr_37881[(7)] = inst_37790);

return statearr_37881;
})();
var statearr_37882_37937 = state_37863__$1;
(statearr_37882_37937[(2)] = null);

(statearr_37882_37937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (13))){
var inst_37790 = (state_37863[(7)]);
var inst_37797 = inst_37790.cljs$lang$protocol_mask$partition0$;
var inst_37798 = (inst_37797 & (64));
var inst_37799 = inst_37790.cljs$core$ISeq$;
var inst_37800 = (cljs.core.PROTOCOL_SENTINEL === inst_37799);
var inst_37801 = (inst_37798) || (inst_37800);
var state_37863__$1 = state_37863;
if(cljs.core.truth_(inst_37801)){
var statearr_37883_37938 = state_37863__$1;
(statearr_37883_37938[(1)] = (16));

} else {
var statearr_37884_37939 = state_37863__$1;
(statearr_37884_37939[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (22))){
var inst_37823 = (state_37863[(9)]);
var inst_37822 = (state_37863[(14)]);
var inst_37821 = (state_37863[(2)]);
var inst_37822__$1 = cljs.core.nth.call(null,inst_37821,(0),null);
var inst_37823__$1 = cljs.core.nth.call(null,inst_37821,(1),null);
var inst_37824 = (inst_37822__$1 == null);
var inst_37825 = cljs.core._EQ_.call(null,inst_37823__$1,change);
var inst_37826 = (inst_37824) || (inst_37825);
var state_37863__$1 = (function (){var statearr_37885 = state_37863;
(statearr_37885[(9)] = inst_37823__$1);

(statearr_37885[(14)] = inst_37822__$1);

return statearr_37885;
})();
if(cljs.core.truth_(inst_37826)){
var statearr_37886_37940 = state_37863__$1;
(statearr_37886_37940[(1)] = (23));

} else {
var statearr_37887_37941 = state_37863__$1;
(statearr_37887_37941[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (36))){
var inst_37813 = (state_37863[(12)]);
var inst_37790 = inst_37813;
var state_37863__$1 = (function (){var statearr_37888 = state_37863;
(statearr_37888[(7)] = inst_37790);

return statearr_37888;
})();
var statearr_37889_37942 = state_37863__$1;
(statearr_37889_37942[(2)] = null);

(statearr_37889_37942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (29))){
var inst_37837 = (state_37863[(10)]);
var state_37863__$1 = state_37863;
var statearr_37890_37943 = state_37863__$1;
(statearr_37890_37943[(2)] = inst_37837);

(statearr_37890_37943[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (6))){
var state_37863__$1 = state_37863;
var statearr_37891_37944 = state_37863__$1;
(statearr_37891_37944[(2)] = false);

(statearr_37891_37944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (28))){
var inst_37833 = (state_37863[(2)]);
var inst_37834 = calc_state.call(null);
var inst_37790 = inst_37834;
var state_37863__$1 = (function (){var statearr_37892 = state_37863;
(statearr_37892[(15)] = inst_37833);

(statearr_37892[(7)] = inst_37790);

return statearr_37892;
})();
var statearr_37893_37945 = state_37863__$1;
(statearr_37893_37945[(2)] = null);

(statearr_37893_37945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (25))){
var inst_37859 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37894_37946 = state_37863__$1;
(statearr_37894_37946[(2)] = inst_37859);

(statearr_37894_37946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (34))){
var inst_37857 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37895_37947 = state_37863__$1;
(statearr_37895_37947[(2)] = inst_37857);

(statearr_37895_37947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (17))){
var state_37863__$1 = state_37863;
var statearr_37896_37948 = state_37863__$1;
(statearr_37896_37948[(2)] = false);

(statearr_37896_37948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (3))){
var state_37863__$1 = state_37863;
var statearr_37897_37949 = state_37863__$1;
(statearr_37897_37949[(2)] = false);

(statearr_37897_37949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (12))){
var inst_37861 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37863__$1,inst_37861);
} else {
if((state_val_37864 === (2))){
var inst_37765 = (state_37863[(8)]);
var inst_37770 = inst_37765.cljs$lang$protocol_mask$partition0$;
var inst_37771 = (inst_37770 & (64));
var inst_37772 = inst_37765.cljs$core$ISeq$;
var inst_37773 = (cljs.core.PROTOCOL_SENTINEL === inst_37772);
var inst_37774 = (inst_37771) || (inst_37773);
var state_37863__$1 = state_37863;
if(cljs.core.truth_(inst_37774)){
var statearr_37898_37950 = state_37863__$1;
(statearr_37898_37950[(1)] = (5));

} else {
var statearr_37899_37951 = state_37863__$1;
(statearr_37899_37951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (23))){
var inst_37822 = (state_37863[(14)]);
var inst_37828 = (inst_37822 == null);
var state_37863__$1 = state_37863;
if(cljs.core.truth_(inst_37828)){
var statearr_37900_37952 = state_37863__$1;
(statearr_37900_37952[(1)] = (26));

} else {
var statearr_37901_37953 = state_37863__$1;
(statearr_37901_37953[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (35))){
var inst_37848 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
if(cljs.core.truth_(inst_37848)){
var statearr_37902_37954 = state_37863__$1;
(statearr_37902_37954[(1)] = (36));

} else {
var statearr_37903_37955 = state_37863__$1;
(statearr_37903_37955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (19))){
var inst_37790 = (state_37863[(7)]);
var inst_37810 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37790);
var state_37863__$1 = state_37863;
var statearr_37904_37956 = state_37863__$1;
(statearr_37904_37956[(2)] = inst_37810);

(statearr_37904_37956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (11))){
var inst_37790 = (state_37863[(7)]);
var inst_37794 = (inst_37790 == null);
var inst_37795 = cljs.core.not.call(null,inst_37794);
var state_37863__$1 = state_37863;
if(inst_37795){
var statearr_37905_37957 = state_37863__$1;
(statearr_37905_37957[(1)] = (13));

} else {
var statearr_37906_37958 = state_37863__$1;
(statearr_37906_37958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (9))){
var inst_37765 = (state_37863[(8)]);
var state_37863__$1 = state_37863;
var statearr_37907_37959 = state_37863__$1;
(statearr_37907_37959[(2)] = inst_37765);

(statearr_37907_37959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (5))){
var state_37863__$1 = state_37863;
var statearr_37908_37960 = state_37863__$1;
(statearr_37908_37960[(2)] = true);

(statearr_37908_37960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (14))){
var state_37863__$1 = state_37863;
var statearr_37909_37961 = state_37863__$1;
(statearr_37909_37961[(2)] = false);

(statearr_37909_37961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (26))){
var inst_37823 = (state_37863[(9)]);
var inst_37830 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37823);
var state_37863__$1 = state_37863;
var statearr_37910_37962 = state_37863__$1;
(statearr_37910_37962[(2)] = inst_37830);

(statearr_37910_37962[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (16))){
var state_37863__$1 = state_37863;
var statearr_37911_37963 = state_37863__$1;
(statearr_37911_37963[(2)] = true);

(statearr_37911_37963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (38))){
var inst_37853 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37912_37964 = state_37863__$1;
(statearr_37912_37964[(2)] = inst_37853);

(statearr_37912_37964[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (30))){
var inst_37815 = (state_37863[(13)]);
var inst_37823 = (state_37863[(9)]);
var inst_37814 = (state_37863[(11)]);
var inst_37840 = cljs.core.empty_QMARK_.call(null,inst_37814);
var inst_37841 = inst_37815.call(null,inst_37823);
var inst_37842 = cljs.core.not.call(null,inst_37841);
var inst_37843 = (inst_37840) && (inst_37842);
var state_37863__$1 = state_37863;
var statearr_37913_37965 = state_37863__$1;
(statearr_37913_37965[(2)] = inst_37843);

(statearr_37913_37965[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (10))){
var inst_37765 = (state_37863[(8)]);
var inst_37786 = (state_37863[(2)]);
var inst_37787 = cljs.core.get.call(null,inst_37786,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37788 = cljs.core.get.call(null,inst_37786,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37789 = cljs.core.get.call(null,inst_37786,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37790 = inst_37765;
var state_37863__$1 = (function (){var statearr_37914 = state_37863;
(statearr_37914[(7)] = inst_37790);

(statearr_37914[(16)] = inst_37788);

(statearr_37914[(17)] = inst_37787);

(statearr_37914[(18)] = inst_37789);

return statearr_37914;
})();
var statearr_37915_37966 = state_37863__$1;
(statearr_37915_37966[(2)] = null);

(statearr_37915_37966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (18))){
var inst_37805 = (state_37863[(2)]);
var state_37863__$1 = state_37863;
var statearr_37916_37967 = state_37863__$1;
(statearr_37916_37967[(2)] = inst_37805);

(statearr_37916_37967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (37))){
var state_37863__$1 = state_37863;
var statearr_37917_37968 = state_37863__$1;
(statearr_37917_37968[(2)] = null);

(statearr_37917_37968[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37864 === (8))){
var inst_37765 = (state_37863[(8)]);
var inst_37783 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37765);
var state_37863__$1 = state_37863;
var statearr_37918_37969 = state_37863__$1;
(statearr_37918_37969[(2)] = inst_37783);

(statearr_37918_37969[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__36864__auto___37923,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36774__auto__,c__36864__auto___37923,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36775__auto__ = null;
var cljs$core$async$mix_$_state_machine__36775__auto____0 = (function (){
var statearr_37919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37919[(0)] = cljs$core$async$mix_$_state_machine__36775__auto__);

(statearr_37919[(1)] = (1));

return statearr_37919;
});
var cljs$core$async$mix_$_state_machine__36775__auto____1 = (function (state_37863){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_37863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e37920){if((e37920 instanceof Object)){
var ex__36778__auto__ = e37920;
var statearr_37921_37970 = state_37863;
(statearr_37921_37970[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37971 = state_37863;
state_37863 = G__37971;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36775__auto__ = function(state_37863){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36775__auto____1.call(this,state_37863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36775__auto____0;
cljs$core$async$mix_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36775__auto____1;
return cljs$core$async$mix_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___37923,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36866__auto__ = (function (){var statearr_37922 = f__36865__auto__.call(null);
(statearr_37922[(6)] = c__36864__auto___37923);

return statearr_37922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___37923,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30961__auto__ = (((p == null))?null:p);
var m__30962__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30962__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30961__auto__ = (((p == null))?null:p);
var m__30962__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,p,v,ch);
} else {
var m__30962__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37973 = arguments.length;
switch (G__37973) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30961__auto__ = (((p == null))?null:p);
var m__30962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,p);
} else {
var m__30962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30961__auto__ = (((p == null))?null:p);
var m__30962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30961__auto__)]);
if(!((m__30962__auto__ == null))){
return m__30962__auto__.call(null,p,v);
} else {
var m__30962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30962__auto____$1 == null))){
return m__30962__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37977 = arguments.length;
switch (G__37977) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30228__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30228__auto__)){
return or__30228__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30228__auto__,mults){
return (function (p1__37975_SHARP_){
if(cljs.core.truth_(p1__37975_SHARP_.call(null,topic))){
return p1__37975_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37975_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30228__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37979 = meta37979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37980,meta37979__$1){
var self__ = this;
var _37980__$1 = this;
return (new cljs.core.async.t_cljs$core$async37978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37979__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37980){
var self__ = this;
var _37980__$1 = this;
return self__.meta37979;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37978.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37979","meta37979",1263374101,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37978";

cljs.core.async.t_cljs$core$async37978.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async37978");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37978 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37979){
return (new cljs.core.async.t_cljs$core$async37978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37979));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36864__auto___38098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___38098,mults,ensure_mult,p){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___38098,mults,ensure_mult,p){
return (function (state_38052){
var state_val_38053 = (state_38052[(1)]);
if((state_val_38053 === (7))){
var inst_38048 = (state_38052[(2)]);
var state_38052__$1 = state_38052;
var statearr_38054_38099 = state_38052__$1;
(statearr_38054_38099[(2)] = inst_38048);

(statearr_38054_38099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (20))){
var state_38052__$1 = state_38052;
var statearr_38055_38100 = state_38052__$1;
(statearr_38055_38100[(2)] = null);

(statearr_38055_38100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (1))){
var state_38052__$1 = state_38052;
var statearr_38056_38101 = state_38052__$1;
(statearr_38056_38101[(2)] = null);

(statearr_38056_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (24))){
var inst_38031 = (state_38052[(7)]);
var inst_38040 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38031);
var state_38052__$1 = state_38052;
var statearr_38057_38102 = state_38052__$1;
(statearr_38057_38102[(2)] = inst_38040);

(statearr_38057_38102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (4))){
var inst_37983 = (state_38052[(8)]);
var inst_37983__$1 = (state_38052[(2)]);
var inst_37984 = (inst_37983__$1 == null);
var state_38052__$1 = (function (){var statearr_38058 = state_38052;
(statearr_38058[(8)] = inst_37983__$1);

return statearr_38058;
})();
if(cljs.core.truth_(inst_37984)){
var statearr_38059_38103 = state_38052__$1;
(statearr_38059_38103[(1)] = (5));

} else {
var statearr_38060_38104 = state_38052__$1;
(statearr_38060_38104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (15))){
var inst_38025 = (state_38052[(2)]);
var state_38052__$1 = state_38052;
var statearr_38061_38105 = state_38052__$1;
(statearr_38061_38105[(2)] = inst_38025);

(statearr_38061_38105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (21))){
var inst_38045 = (state_38052[(2)]);
var state_38052__$1 = (function (){var statearr_38062 = state_38052;
(statearr_38062[(9)] = inst_38045);

return statearr_38062;
})();
var statearr_38063_38106 = state_38052__$1;
(statearr_38063_38106[(2)] = null);

(statearr_38063_38106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (13))){
var inst_38007 = (state_38052[(10)]);
var inst_38009 = cljs.core.chunked_seq_QMARK_.call(null,inst_38007);
var state_38052__$1 = state_38052;
if(inst_38009){
var statearr_38064_38107 = state_38052__$1;
(statearr_38064_38107[(1)] = (16));

} else {
var statearr_38065_38108 = state_38052__$1;
(statearr_38065_38108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (22))){
var inst_38037 = (state_38052[(2)]);
var state_38052__$1 = state_38052;
if(cljs.core.truth_(inst_38037)){
var statearr_38066_38109 = state_38052__$1;
(statearr_38066_38109[(1)] = (23));

} else {
var statearr_38067_38110 = state_38052__$1;
(statearr_38067_38110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (6))){
var inst_37983 = (state_38052[(8)]);
var inst_38033 = (state_38052[(11)]);
var inst_38031 = (state_38052[(7)]);
var inst_38031__$1 = topic_fn.call(null,inst_37983);
var inst_38032 = cljs.core.deref.call(null,mults);
var inst_38033__$1 = cljs.core.get.call(null,inst_38032,inst_38031__$1);
var state_38052__$1 = (function (){var statearr_38068 = state_38052;
(statearr_38068[(11)] = inst_38033__$1);

(statearr_38068[(7)] = inst_38031__$1);

return statearr_38068;
})();
if(cljs.core.truth_(inst_38033__$1)){
var statearr_38069_38111 = state_38052__$1;
(statearr_38069_38111[(1)] = (19));

} else {
var statearr_38070_38112 = state_38052__$1;
(statearr_38070_38112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (25))){
var inst_38042 = (state_38052[(2)]);
var state_38052__$1 = state_38052;
var statearr_38071_38113 = state_38052__$1;
(statearr_38071_38113[(2)] = inst_38042);

(statearr_38071_38113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (17))){
var inst_38007 = (state_38052[(10)]);
var inst_38016 = cljs.core.first.call(null,inst_38007);
var inst_38017 = cljs.core.async.muxch_STAR_.call(null,inst_38016);
var inst_38018 = cljs.core.async.close_BANG_.call(null,inst_38017);
var inst_38019 = cljs.core.next.call(null,inst_38007);
var inst_37993 = inst_38019;
var inst_37994 = null;
var inst_37995 = (0);
var inst_37996 = (0);
var state_38052__$1 = (function (){var statearr_38072 = state_38052;
(statearr_38072[(12)] = inst_37995);

(statearr_38072[(13)] = inst_38018);

(statearr_38072[(14)] = inst_37996);

(statearr_38072[(15)] = inst_37993);

(statearr_38072[(16)] = inst_37994);

return statearr_38072;
})();
var statearr_38073_38114 = state_38052__$1;
(statearr_38073_38114[(2)] = null);

(statearr_38073_38114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (3))){
var inst_38050 = (state_38052[(2)]);
var state_38052__$1 = state_38052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38052__$1,inst_38050);
} else {
if((state_val_38053 === (12))){
var inst_38027 = (state_38052[(2)]);
var state_38052__$1 = state_38052;
var statearr_38074_38115 = state_38052__$1;
(statearr_38074_38115[(2)] = inst_38027);

(statearr_38074_38115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (2))){
var state_38052__$1 = state_38052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38052__$1,(4),ch);
} else {
if((state_val_38053 === (23))){
var state_38052__$1 = state_38052;
var statearr_38075_38116 = state_38052__$1;
(statearr_38075_38116[(2)] = null);

(statearr_38075_38116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (19))){
var inst_37983 = (state_38052[(8)]);
var inst_38033 = (state_38052[(11)]);
var inst_38035 = cljs.core.async.muxch_STAR_.call(null,inst_38033);
var state_38052__$1 = state_38052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38052__$1,(22),inst_38035,inst_37983);
} else {
if((state_val_38053 === (11))){
var inst_37993 = (state_38052[(15)]);
var inst_38007 = (state_38052[(10)]);
var inst_38007__$1 = cljs.core.seq.call(null,inst_37993);
var state_38052__$1 = (function (){var statearr_38076 = state_38052;
(statearr_38076[(10)] = inst_38007__$1);

return statearr_38076;
})();
if(inst_38007__$1){
var statearr_38077_38117 = state_38052__$1;
(statearr_38077_38117[(1)] = (13));

} else {
var statearr_38078_38118 = state_38052__$1;
(statearr_38078_38118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (9))){
var inst_38029 = (state_38052[(2)]);
var state_38052__$1 = state_38052;
var statearr_38079_38119 = state_38052__$1;
(statearr_38079_38119[(2)] = inst_38029);

(statearr_38079_38119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (5))){
var inst_37990 = cljs.core.deref.call(null,mults);
var inst_37991 = cljs.core.vals.call(null,inst_37990);
var inst_37992 = cljs.core.seq.call(null,inst_37991);
var inst_37993 = inst_37992;
var inst_37994 = null;
var inst_37995 = (0);
var inst_37996 = (0);
var state_38052__$1 = (function (){var statearr_38080 = state_38052;
(statearr_38080[(12)] = inst_37995);

(statearr_38080[(14)] = inst_37996);

(statearr_38080[(15)] = inst_37993);

(statearr_38080[(16)] = inst_37994);

return statearr_38080;
})();
var statearr_38081_38120 = state_38052__$1;
(statearr_38081_38120[(2)] = null);

(statearr_38081_38120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (14))){
var state_38052__$1 = state_38052;
var statearr_38085_38121 = state_38052__$1;
(statearr_38085_38121[(2)] = null);

(statearr_38085_38121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (16))){
var inst_38007 = (state_38052[(10)]);
var inst_38011 = cljs.core.chunk_first.call(null,inst_38007);
var inst_38012 = cljs.core.chunk_rest.call(null,inst_38007);
var inst_38013 = cljs.core.count.call(null,inst_38011);
var inst_37993 = inst_38012;
var inst_37994 = inst_38011;
var inst_37995 = inst_38013;
var inst_37996 = (0);
var state_38052__$1 = (function (){var statearr_38086 = state_38052;
(statearr_38086[(12)] = inst_37995);

(statearr_38086[(14)] = inst_37996);

(statearr_38086[(15)] = inst_37993);

(statearr_38086[(16)] = inst_37994);

return statearr_38086;
})();
var statearr_38087_38122 = state_38052__$1;
(statearr_38087_38122[(2)] = null);

(statearr_38087_38122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (10))){
var inst_37995 = (state_38052[(12)]);
var inst_37996 = (state_38052[(14)]);
var inst_37993 = (state_38052[(15)]);
var inst_37994 = (state_38052[(16)]);
var inst_38001 = cljs.core._nth.call(null,inst_37994,inst_37996);
var inst_38002 = cljs.core.async.muxch_STAR_.call(null,inst_38001);
var inst_38003 = cljs.core.async.close_BANG_.call(null,inst_38002);
var inst_38004 = (inst_37996 + (1));
var tmp38082 = inst_37995;
var tmp38083 = inst_37993;
var tmp38084 = inst_37994;
var inst_37993__$1 = tmp38083;
var inst_37994__$1 = tmp38084;
var inst_37995__$1 = tmp38082;
var inst_37996__$1 = inst_38004;
var state_38052__$1 = (function (){var statearr_38088 = state_38052;
(statearr_38088[(12)] = inst_37995__$1);

(statearr_38088[(14)] = inst_37996__$1);

(statearr_38088[(17)] = inst_38003);

(statearr_38088[(15)] = inst_37993__$1);

(statearr_38088[(16)] = inst_37994__$1);

return statearr_38088;
})();
var statearr_38089_38123 = state_38052__$1;
(statearr_38089_38123[(2)] = null);

(statearr_38089_38123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (18))){
var inst_38022 = (state_38052[(2)]);
var state_38052__$1 = state_38052;
var statearr_38090_38124 = state_38052__$1;
(statearr_38090_38124[(2)] = inst_38022);

(statearr_38090_38124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38053 === (8))){
var inst_37995 = (state_38052[(12)]);
var inst_37996 = (state_38052[(14)]);
var inst_37998 = (inst_37996 < inst_37995);
var inst_37999 = inst_37998;
var state_38052__$1 = state_38052;
if(cljs.core.truth_(inst_37999)){
var statearr_38091_38125 = state_38052__$1;
(statearr_38091_38125[(1)] = (10));

} else {
var statearr_38092_38126 = state_38052__$1;
(statearr_38092_38126[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__36864__auto___38098,mults,ensure_mult,p))
;
return ((function (switch__36774__auto__,c__36864__auto___38098,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_38093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38093[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_38093[(1)] = (1));

return statearr_38093;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_38052){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38094){if((e38094 instanceof Object)){
var ex__36778__auto__ = e38094;
var statearr_38095_38127 = state_38052;
(statearr_38095_38127[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38128 = state_38052;
state_38052 = G__38128;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_38052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_38052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___38098,mults,ensure_mult,p))
})();
var state__36866__auto__ = (function (){var statearr_38096 = f__36865__auto__.call(null);
(statearr_38096[(6)] = c__36864__auto___38098);

return statearr_38096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___38098,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38130 = arguments.length;
switch (G__38130) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38133 = arguments.length;
switch (G__38133) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38136 = arguments.length;
switch (G__38136) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__36864__auto___38203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___38203,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___38203,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38175){
var state_val_38176 = (state_38175[(1)]);
if((state_val_38176 === (7))){
var state_38175__$1 = state_38175;
var statearr_38177_38204 = state_38175__$1;
(statearr_38177_38204[(2)] = null);

(statearr_38177_38204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (1))){
var state_38175__$1 = state_38175;
var statearr_38178_38205 = state_38175__$1;
(statearr_38178_38205[(2)] = null);

(statearr_38178_38205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (4))){
var inst_38139 = (state_38175[(7)]);
var inst_38141 = (inst_38139 < cnt);
var state_38175__$1 = state_38175;
if(cljs.core.truth_(inst_38141)){
var statearr_38179_38206 = state_38175__$1;
(statearr_38179_38206[(1)] = (6));

} else {
var statearr_38180_38207 = state_38175__$1;
(statearr_38180_38207[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (15))){
var inst_38171 = (state_38175[(2)]);
var state_38175__$1 = state_38175;
var statearr_38181_38208 = state_38175__$1;
(statearr_38181_38208[(2)] = inst_38171);

(statearr_38181_38208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (13))){
var inst_38164 = cljs.core.async.close_BANG_.call(null,out);
var state_38175__$1 = state_38175;
var statearr_38182_38209 = state_38175__$1;
(statearr_38182_38209[(2)] = inst_38164);

(statearr_38182_38209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (6))){
var state_38175__$1 = state_38175;
var statearr_38183_38210 = state_38175__$1;
(statearr_38183_38210[(2)] = null);

(statearr_38183_38210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (3))){
var inst_38173 = (state_38175[(2)]);
var state_38175__$1 = state_38175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38175__$1,inst_38173);
} else {
if((state_val_38176 === (12))){
var inst_38161 = (state_38175[(8)]);
var inst_38161__$1 = (state_38175[(2)]);
var inst_38162 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38161__$1);
var state_38175__$1 = (function (){var statearr_38184 = state_38175;
(statearr_38184[(8)] = inst_38161__$1);

return statearr_38184;
})();
if(cljs.core.truth_(inst_38162)){
var statearr_38185_38211 = state_38175__$1;
(statearr_38185_38211[(1)] = (13));

} else {
var statearr_38186_38212 = state_38175__$1;
(statearr_38186_38212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (2))){
var inst_38138 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38139 = (0);
var state_38175__$1 = (function (){var statearr_38187 = state_38175;
(statearr_38187[(7)] = inst_38139);

(statearr_38187[(9)] = inst_38138);

return statearr_38187;
})();
var statearr_38188_38213 = state_38175__$1;
(statearr_38188_38213[(2)] = null);

(statearr_38188_38213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (11))){
var inst_38139 = (state_38175[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38175,(10),Object,null,(9));
var inst_38148 = chs__$1.call(null,inst_38139);
var inst_38149 = done.call(null,inst_38139);
var inst_38150 = cljs.core.async.take_BANG_.call(null,inst_38148,inst_38149);
var state_38175__$1 = state_38175;
var statearr_38189_38214 = state_38175__$1;
(statearr_38189_38214[(2)] = inst_38150);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38175__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (9))){
var inst_38139 = (state_38175[(7)]);
var inst_38152 = (state_38175[(2)]);
var inst_38153 = (inst_38139 + (1));
var inst_38139__$1 = inst_38153;
var state_38175__$1 = (function (){var statearr_38190 = state_38175;
(statearr_38190[(10)] = inst_38152);

(statearr_38190[(7)] = inst_38139__$1);

return statearr_38190;
})();
var statearr_38191_38215 = state_38175__$1;
(statearr_38191_38215[(2)] = null);

(statearr_38191_38215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (5))){
var inst_38159 = (state_38175[(2)]);
var state_38175__$1 = (function (){var statearr_38192 = state_38175;
(statearr_38192[(11)] = inst_38159);

return statearr_38192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38175__$1,(12),dchan);
} else {
if((state_val_38176 === (14))){
var inst_38161 = (state_38175[(8)]);
var inst_38166 = cljs.core.apply.call(null,f,inst_38161);
var state_38175__$1 = state_38175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38175__$1,(16),out,inst_38166);
} else {
if((state_val_38176 === (16))){
var inst_38168 = (state_38175[(2)]);
var state_38175__$1 = (function (){var statearr_38193 = state_38175;
(statearr_38193[(12)] = inst_38168);

return statearr_38193;
})();
var statearr_38194_38216 = state_38175__$1;
(statearr_38194_38216[(2)] = null);

(statearr_38194_38216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (10))){
var inst_38143 = (state_38175[(2)]);
var inst_38144 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38175__$1 = (function (){var statearr_38195 = state_38175;
(statearr_38195[(13)] = inst_38143);

return statearr_38195;
})();
var statearr_38196_38217 = state_38175__$1;
(statearr_38196_38217[(2)] = inst_38144);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38175__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38176 === (8))){
var inst_38157 = (state_38175[(2)]);
var state_38175__$1 = state_38175;
var statearr_38197_38218 = state_38175__$1;
(statearr_38197_38218[(2)] = inst_38157);

(statearr_38197_38218[(1)] = (5));


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
});})(c__36864__auto___38203,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36774__auto__,c__36864__auto___38203,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_38198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38198[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_38198[(1)] = (1));

return statearr_38198;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_38175){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38199){if((e38199 instanceof Object)){
var ex__36778__auto__ = e38199;
var statearr_38200_38219 = state_38175;
(statearr_38200_38219[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38220 = state_38175;
state_38175 = G__38220;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_38175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_38175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___38203,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36866__auto__ = (function (){var statearr_38201 = f__36865__auto__.call(null);
(statearr_38201[(6)] = c__36864__auto___38203);

return statearr_38201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___38203,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38223 = arguments.length;
switch (G__38223) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36864__auto___38277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___38277,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___38277,out){
return (function (state_38255){
var state_val_38256 = (state_38255[(1)]);
if((state_val_38256 === (7))){
var inst_38235 = (state_38255[(7)]);
var inst_38234 = (state_38255[(8)]);
var inst_38234__$1 = (state_38255[(2)]);
var inst_38235__$1 = cljs.core.nth.call(null,inst_38234__$1,(0),null);
var inst_38236 = cljs.core.nth.call(null,inst_38234__$1,(1),null);
var inst_38237 = (inst_38235__$1 == null);
var state_38255__$1 = (function (){var statearr_38257 = state_38255;
(statearr_38257[(9)] = inst_38236);

(statearr_38257[(7)] = inst_38235__$1);

(statearr_38257[(8)] = inst_38234__$1);

return statearr_38257;
})();
if(cljs.core.truth_(inst_38237)){
var statearr_38258_38278 = state_38255__$1;
(statearr_38258_38278[(1)] = (8));

} else {
var statearr_38259_38279 = state_38255__$1;
(statearr_38259_38279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (1))){
var inst_38224 = cljs.core.vec.call(null,chs);
var inst_38225 = inst_38224;
var state_38255__$1 = (function (){var statearr_38260 = state_38255;
(statearr_38260[(10)] = inst_38225);

return statearr_38260;
})();
var statearr_38261_38280 = state_38255__$1;
(statearr_38261_38280[(2)] = null);

(statearr_38261_38280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (4))){
var inst_38225 = (state_38255[(10)]);
var state_38255__$1 = state_38255;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38255__$1,(7),inst_38225);
} else {
if((state_val_38256 === (6))){
var inst_38251 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38262_38281 = state_38255__$1;
(statearr_38262_38281[(2)] = inst_38251);

(statearr_38262_38281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (3))){
var inst_38253 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38255__$1,inst_38253);
} else {
if((state_val_38256 === (2))){
var inst_38225 = (state_38255[(10)]);
var inst_38227 = cljs.core.count.call(null,inst_38225);
var inst_38228 = (inst_38227 > (0));
var state_38255__$1 = state_38255;
if(cljs.core.truth_(inst_38228)){
var statearr_38264_38282 = state_38255__$1;
(statearr_38264_38282[(1)] = (4));

} else {
var statearr_38265_38283 = state_38255__$1;
(statearr_38265_38283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (11))){
var inst_38225 = (state_38255[(10)]);
var inst_38244 = (state_38255[(2)]);
var tmp38263 = inst_38225;
var inst_38225__$1 = tmp38263;
var state_38255__$1 = (function (){var statearr_38266 = state_38255;
(statearr_38266[(11)] = inst_38244);

(statearr_38266[(10)] = inst_38225__$1);

return statearr_38266;
})();
var statearr_38267_38284 = state_38255__$1;
(statearr_38267_38284[(2)] = null);

(statearr_38267_38284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (9))){
var inst_38235 = (state_38255[(7)]);
var state_38255__$1 = state_38255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38255__$1,(11),out,inst_38235);
} else {
if((state_val_38256 === (5))){
var inst_38249 = cljs.core.async.close_BANG_.call(null,out);
var state_38255__$1 = state_38255;
var statearr_38268_38285 = state_38255__$1;
(statearr_38268_38285[(2)] = inst_38249);

(statearr_38268_38285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (10))){
var inst_38247 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38269_38286 = state_38255__$1;
(statearr_38269_38286[(2)] = inst_38247);

(statearr_38269_38286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (8))){
var inst_38225 = (state_38255[(10)]);
var inst_38236 = (state_38255[(9)]);
var inst_38235 = (state_38255[(7)]);
var inst_38234 = (state_38255[(8)]);
var inst_38239 = (function (){var cs = inst_38225;
var vec__38230 = inst_38234;
var v = inst_38235;
var c = inst_38236;
return ((function (cs,vec__38230,v,c,inst_38225,inst_38236,inst_38235,inst_38234,state_val_38256,c__36864__auto___38277,out){
return (function (p1__38221_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38221_SHARP_);
});
;})(cs,vec__38230,v,c,inst_38225,inst_38236,inst_38235,inst_38234,state_val_38256,c__36864__auto___38277,out))
})();
var inst_38240 = cljs.core.filterv.call(null,inst_38239,inst_38225);
var inst_38225__$1 = inst_38240;
var state_38255__$1 = (function (){var statearr_38270 = state_38255;
(statearr_38270[(10)] = inst_38225__$1);

return statearr_38270;
})();
var statearr_38271_38287 = state_38255__$1;
(statearr_38271_38287[(2)] = null);

(statearr_38271_38287[(1)] = (2));


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
});})(c__36864__auto___38277,out))
;
return ((function (switch__36774__auto__,c__36864__auto___38277,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_38272 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38272[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_38272[(1)] = (1));

return statearr_38272;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_38255){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38273){if((e38273 instanceof Object)){
var ex__36778__auto__ = e38273;
var statearr_38274_38288 = state_38255;
(statearr_38274_38288[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38289 = state_38255;
state_38255 = G__38289;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_38255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_38255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___38277,out))
})();
var state__36866__auto__ = (function (){var statearr_38275 = f__36865__auto__.call(null);
(statearr_38275[(6)] = c__36864__auto___38277);

return statearr_38275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___38277,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38291 = arguments.length;
switch (G__38291) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36864__auto___38336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___38336,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___38336,out){
return (function (state_38315){
var state_val_38316 = (state_38315[(1)]);
if((state_val_38316 === (7))){
var inst_38297 = (state_38315[(7)]);
var inst_38297__$1 = (state_38315[(2)]);
var inst_38298 = (inst_38297__$1 == null);
var inst_38299 = cljs.core.not.call(null,inst_38298);
var state_38315__$1 = (function (){var statearr_38317 = state_38315;
(statearr_38317[(7)] = inst_38297__$1);

return statearr_38317;
})();
if(inst_38299){
var statearr_38318_38337 = state_38315__$1;
(statearr_38318_38337[(1)] = (8));

} else {
var statearr_38319_38338 = state_38315__$1;
(statearr_38319_38338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (1))){
var inst_38292 = (0);
var state_38315__$1 = (function (){var statearr_38320 = state_38315;
(statearr_38320[(8)] = inst_38292);

return statearr_38320;
})();
var statearr_38321_38339 = state_38315__$1;
(statearr_38321_38339[(2)] = null);

(statearr_38321_38339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (4))){
var state_38315__$1 = state_38315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38315__$1,(7),ch);
} else {
if((state_val_38316 === (6))){
var inst_38310 = (state_38315[(2)]);
var state_38315__$1 = state_38315;
var statearr_38322_38340 = state_38315__$1;
(statearr_38322_38340[(2)] = inst_38310);

(statearr_38322_38340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (3))){
var inst_38312 = (state_38315[(2)]);
var inst_38313 = cljs.core.async.close_BANG_.call(null,out);
var state_38315__$1 = (function (){var statearr_38323 = state_38315;
(statearr_38323[(9)] = inst_38312);

return statearr_38323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38315__$1,inst_38313);
} else {
if((state_val_38316 === (2))){
var inst_38292 = (state_38315[(8)]);
var inst_38294 = (inst_38292 < n);
var state_38315__$1 = state_38315;
if(cljs.core.truth_(inst_38294)){
var statearr_38324_38341 = state_38315__$1;
(statearr_38324_38341[(1)] = (4));

} else {
var statearr_38325_38342 = state_38315__$1;
(statearr_38325_38342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (11))){
var inst_38292 = (state_38315[(8)]);
var inst_38302 = (state_38315[(2)]);
var inst_38303 = (inst_38292 + (1));
var inst_38292__$1 = inst_38303;
var state_38315__$1 = (function (){var statearr_38326 = state_38315;
(statearr_38326[(10)] = inst_38302);

(statearr_38326[(8)] = inst_38292__$1);

return statearr_38326;
})();
var statearr_38327_38343 = state_38315__$1;
(statearr_38327_38343[(2)] = null);

(statearr_38327_38343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (9))){
var state_38315__$1 = state_38315;
var statearr_38328_38344 = state_38315__$1;
(statearr_38328_38344[(2)] = null);

(statearr_38328_38344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (5))){
var state_38315__$1 = state_38315;
var statearr_38329_38345 = state_38315__$1;
(statearr_38329_38345[(2)] = null);

(statearr_38329_38345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (10))){
var inst_38307 = (state_38315[(2)]);
var state_38315__$1 = state_38315;
var statearr_38330_38346 = state_38315__$1;
(statearr_38330_38346[(2)] = inst_38307);

(statearr_38330_38346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38316 === (8))){
var inst_38297 = (state_38315[(7)]);
var state_38315__$1 = state_38315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38315__$1,(11),out,inst_38297);
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
});})(c__36864__auto___38336,out))
;
return ((function (switch__36774__auto__,c__36864__auto___38336,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_38331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38331[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_38331[(1)] = (1));

return statearr_38331;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_38315){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38332){if((e38332 instanceof Object)){
var ex__36778__auto__ = e38332;
var statearr_38333_38347 = state_38315;
(statearr_38333_38347[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38348 = state_38315;
state_38315 = G__38348;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_38315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_38315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___38336,out))
})();
var state__36866__auto__ = (function (){var statearr_38334 = f__36865__auto__.call(null);
(statearr_38334[(6)] = c__36864__auto___38336);

return statearr_38334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___38336,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38350 = (function (f,ch,meta38351){
this.f = f;
this.ch = ch;
this.meta38351 = meta38351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38352,meta38351__$1){
var self__ = this;
var _38352__$1 = this;
return (new cljs.core.async.t_cljs$core$async38350(self__.f,self__.ch,meta38351__$1));
});

cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38352){
var self__ = this;
var _38352__$1 = this;
return self__.meta38351;
});

cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38353 = (function (f,ch,meta38351,_,fn1,meta38354){
this.f = f;
this.ch = ch;
this.meta38351 = meta38351;
this._ = _;
this.fn1 = fn1;
this.meta38354 = meta38354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38355,meta38354__$1){
var self__ = this;
var _38355__$1 = this;
return (new cljs.core.async.t_cljs$core$async38353(self__.f,self__.ch,self__.meta38351,self__._,self__.fn1,meta38354__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38355){
var self__ = this;
var _38355__$1 = this;
return self__.meta38354;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38349_SHARP_){
return f1.call(null,(((p1__38349_SHARP_ == null))?null:self__.f.call(null,p1__38349_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38353.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38351","meta38351",164554613,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38350","cljs.core.async/t_cljs$core$async38350",1478784606,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38354","meta38354",-580312172,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38353";

cljs.core.async.t_cljs$core$async38353.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async38353");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38353 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38353(f__$1,ch__$1,meta38351__$1,___$2,fn1__$1,meta38354){
return (new cljs.core.async.t_cljs$core$async38353(f__$1,ch__$1,meta38351__$1,___$2,fn1__$1,meta38354));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38353(self__.f,self__.ch,self__.meta38351,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30216__auto__ = ret;
if(cljs.core.truth_(and__30216__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30216__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38351","meta38351",164554613,null)], null);
});

cljs.core.async.t_cljs$core$async38350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38350";

cljs.core.async.t_cljs$core$async38350.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async38350");
});

cljs.core.async.__GT_t_cljs$core$async38350 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38350(f__$1,ch__$1,meta38351){
return (new cljs.core.async.t_cljs$core$async38350(f__$1,ch__$1,meta38351));
});

}

return (new cljs.core.async.t_cljs$core$async38350(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38356 = (function (f,ch,meta38357){
this.f = f;
this.ch = ch;
this.meta38357 = meta38357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38358,meta38357__$1){
var self__ = this;
var _38358__$1 = this;
return (new cljs.core.async.t_cljs$core$async38356(self__.f,self__.ch,meta38357__$1));
});

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38358){
var self__ = this;
var _38358__$1 = this;
return self__.meta38357;
});

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38357","meta38357",-1042405843,null)], null);
});

cljs.core.async.t_cljs$core$async38356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38356";

cljs.core.async.t_cljs$core$async38356.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async38356");
});

cljs.core.async.__GT_t_cljs$core$async38356 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38356(f__$1,ch__$1,meta38357){
return (new cljs.core.async.t_cljs$core$async38356(f__$1,ch__$1,meta38357));
});

}

return (new cljs.core.async.t_cljs$core$async38356(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38359 = (function (p,ch,meta38360){
this.p = p;
this.ch = ch;
this.meta38360 = meta38360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38361,meta38360__$1){
var self__ = this;
var _38361__$1 = this;
return (new cljs.core.async.t_cljs$core$async38359(self__.p,self__.ch,meta38360__$1));
});

cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38361){
var self__ = this;
var _38361__$1 = this;
return self__.meta38360;
});

cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38360","meta38360",-1380631046,null)], null);
});

cljs.core.async.t_cljs$core$async38359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38359";

cljs.core.async.t_cljs$core$async38359.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async38359");
});

cljs.core.async.__GT_t_cljs$core$async38359 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38359(p__$1,ch__$1,meta38360){
return (new cljs.core.async.t_cljs$core$async38359(p__$1,ch__$1,meta38360));
});

}

return (new cljs.core.async.t_cljs$core$async38359(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38363 = arguments.length;
switch (G__38363) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36864__auto___38403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___38403,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___38403,out){
return (function (state_38384){
var state_val_38385 = (state_38384[(1)]);
if((state_val_38385 === (7))){
var inst_38380 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
var statearr_38386_38404 = state_38384__$1;
(statearr_38386_38404[(2)] = inst_38380);

(statearr_38386_38404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (1))){
var state_38384__$1 = state_38384;
var statearr_38387_38405 = state_38384__$1;
(statearr_38387_38405[(2)] = null);

(statearr_38387_38405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (4))){
var inst_38366 = (state_38384[(7)]);
var inst_38366__$1 = (state_38384[(2)]);
var inst_38367 = (inst_38366__$1 == null);
var state_38384__$1 = (function (){var statearr_38388 = state_38384;
(statearr_38388[(7)] = inst_38366__$1);

return statearr_38388;
})();
if(cljs.core.truth_(inst_38367)){
var statearr_38389_38406 = state_38384__$1;
(statearr_38389_38406[(1)] = (5));

} else {
var statearr_38390_38407 = state_38384__$1;
(statearr_38390_38407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (6))){
var inst_38366 = (state_38384[(7)]);
var inst_38371 = p.call(null,inst_38366);
var state_38384__$1 = state_38384;
if(cljs.core.truth_(inst_38371)){
var statearr_38391_38408 = state_38384__$1;
(statearr_38391_38408[(1)] = (8));

} else {
var statearr_38392_38409 = state_38384__$1;
(statearr_38392_38409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (3))){
var inst_38382 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38384__$1,inst_38382);
} else {
if((state_val_38385 === (2))){
var state_38384__$1 = state_38384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38384__$1,(4),ch);
} else {
if((state_val_38385 === (11))){
var inst_38374 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
var statearr_38393_38410 = state_38384__$1;
(statearr_38393_38410[(2)] = inst_38374);

(statearr_38393_38410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (9))){
var state_38384__$1 = state_38384;
var statearr_38394_38411 = state_38384__$1;
(statearr_38394_38411[(2)] = null);

(statearr_38394_38411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (5))){
var inst_38369 = cljs.core.async.close_BANG_.call(null,out);
var state_38384__$1 = state_38384;
var statearr_38395_38412 = state_38384__$1;
(statearr_38395_38412[(2)] = inst_38369);

(statearr_38395_38412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (10))){
var inst_38377 = (state_38384[(2)]);
var state_38384__$1 = (function (){var statearr_38396 = state_38384;
(statearr_38396[(8)] = inst_38377);

return statearr_38396;
})();
var statearr_38397_38413 = state_38384__$1;
(statearr_38397_38413[(2)] = null);

(statearr_38397_38413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (8))){
var inst_38366 = (state_38384[(7)]);
var state_38384__$1 = state_38384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38384__$1,(11),out,inst_38366);
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
});})(c__36864__auto___38403,out))
;
return ((function (switch__36774__auto__,c__36864__auto___38403,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_38398 = [null,null,null,null,null,null,null,null,null];
(statearr_38398[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_38398[(1)] = (1));

return statearr_38398;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_38384){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38399){if((e38399 instanceof Object)){
var ex__36778__auto__ = e38399;
var statearr_38400_38414 = state_38384;
(statearr_38400_38414[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38415 = state_38384;
state_38384 = G__38415;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_38384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_38384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___38403,out))
})();
var state__36866__auto__ = (function (){var statearr_38401 = f__36865__auto__.call(null);
(statearr_38401[(6)] = c__36864__auto___38403);

return statearr_38401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___38403,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38417 = arguments.length;
switch (G__38417) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__){
return (function (state_38480){
var state_val_38481 = (state_38480[(1)]);
if((state_val_38481 === (7))){
var inst_38476 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38482_38520 = state_38480__$1;
(statearr_38482_38520[(2)] = inst_38476);

(statearr_38482_38520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (20))){
var inst_38446 = (state_38480[(7)]);
var inst_38457 = (state_38480[(2)]);
var inst_38458 = cljs.core.next.call(null,inst_38446);
var inst_38432 = inst_38458;
var inst_38433 = null;
var inst_38434 = (0);
var inst_38435 = (0);
var state_38480__$1 = (function (){var statearr_38483 = state_38480;
(statearr_38483[(8)] = inst_38433);

(statearr_38483[(9)] = inst_38432);

(statearr_38483[(10)] = inst_38435);

(statearr_38483[(11)] = inst_38457);

(statearr_38483[(12)] = inst_38434);

return statearr_38483;
})();
var statearr_38484_38521 = state_38480__$1;
(statearr_38484_38521[(2)] = null);

(statearr_38484_38521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (1))){
var state_38480__$1 = state_38480;
var statearr_38485_38522 = state_38480__$1;
(statearr_38485_38522[(2)] = null);

(statearr_38485_38522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (4))){
var inst_38421 = (state_38480[(13)]);
var inst_38421__$1 = (state_38480[(2)]);
var inst_38422 = (inst_38421__$1 == null);
var state_38480__$1 = (function (){var statearr_38486 = state_38480;
(statearr_38486[(13)] = inst_38421__$1);

return statearr_38486;
})();
if(cljs.core.truth_(inst_38422)){
var statearr_38487_38523 = state_38480__$1;
(statearr_38487_38523[(1)] = (5));

} else {
var statearr_38488_38524 = state_38480__$1;
(statearr_38488_38524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (15))){
var state_38480__$1 = state_38480;
var statearr_38492_38525 = state_38480__$1;
(statearr_38492_38525[(2)] = null);

(statearr_38492_38525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (21))){
var state_38480__$1 = state_38480;
var statearr_38493_38526 = state_38480__$1;
(statearr_38493_38526[(2)] = null);

(statearr_38493_38526[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (13))){
var inst_38433 = (state_38480[(8)]);
var inst_38432 = (state_38480[(9)]);
var inst_38435 = (state_38480[(10)]);
var inst_38434 = (state_38480[(12)]);
var inst_38442 = (state_38480[(2)]);
var inst_38443 = (inst_38435 + (1));
var tmp38489 = inst_38433;
var tmp38490 = inst_38432;
var tmp38491 = inst_38434;
var inst_38432__$1 = tmp38490;
var inst_38433__$1 = tmp38489;
var inst_38434__$1 = tmp38491;
var inst_38435__$1 = inst_38443;
var state_38480__$1 = (function (){var statearr_38494 = state_38480;
(statearr_38494[(8)] = inst_38433__$1);

(statearr_38494[(9)] = inst_38432__$1);

(statearr_38494[(10)] = inst_38435__$1);

(statearr_38494[(12)] = inst_38434__$1);

(statearr_38494[(14)] = inst_38442);

return statearr_38494;
})();
var statearr_38495_38527 = state_38480__$1;
(statearr_38495_38527[(2)] = null);

(statearr_38495_38527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (22))){
var state_38480__$1 = state_38480;
var statearr_38496_38528 = state_38480__$1;
(statearr_38496_38528[(2)] = null);

(statearr_38496_38528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (6))){
var inst_38421 = (state_38480[(13)]);
var inst_38430 = f.call(null,inst_38421);
var inst_38431 = cljs.core.seq.call(null,inst_38430);
var inst_38432 = inst_38431;
var inst_38433 = null;
var inst_38434 = (0);
var inst_38435 = (0);
var state_38480__$1 = (function (){var statearr_38497 = state_38480;
(statearr_38497[(8)] = inst_38433);

(statearr_38497[(9)] = inst_38432);

(statearr_38497[(10)] = inst_38435);

(statearr_38497[(12)] = inst_38434);

return statearr_38497;
})();
var statearr_38498_38529 = state_38480__$1;
(statearr_38498_38529[(2)] = null);

(statearr_38498_38529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (17))){
var inst_38446 = (state_38480[(7)]);
var inst_38450 = cljs.core.chunk_first.call(null,inst_38446);
var inst_38451 = cljs.core.chunk_rest.call(null,inst_38446);
var inst_38452 = cljs.core.count.call(null,inst_38450);
var inst_38432 = inst_38451;
var inst_38433 = inst_38450;
var inst_38434 = inst_38452;
var inst_38435 = (0);
var state_38480__$1 = (function (){var statearr_38499 = state_38480;
(statearr_38499[(8)] = inst_38433);

(statearr_38499[(9)] = inst_38432);

(statearr_38499[(10)] = inst_38435);

(statearr_38499[(12)] = inst_38434);

return statearr_38499;
})();
var statearr_38500_38530 = state_38480__$1;
(statearr_38500_38530[(2)] = null);

(statearr_38500_38530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (3))){
var inst_38478 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38480__$1,inst_38478);
} else {
if((state_val_38481 === (12))){
var inst_38466 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38501_38531 = state_38480__$1;
(statearr_38501_38531[(2)] = inst_38466);

(statearr_38501_38531[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (2))){
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38480__$1,(4),in$);
} else {
if((state_val_38481 === (23))){
var inst_38474 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38502_38532 = state_38480__$1;
(statearr_38502_38532[(2)] = inst_38474);

(statearr_38502_38532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (19))){
var inst_38461 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38503_38533 = state_38480__$1;
(statearr_38503_38533[(2)] = inst_38461);

(statearr_38503_38533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (11))){
var inst_38432 = (state_38480[(9)]);
var inst_38446 = (state_38480[(7)]);
var inst_38446__$1 = cljs.core.seq.call(null,inst_38432);
var state_38480__$1 = (function (){var statearr_38504 = state_38480;
(statearr_38504[(7)] = inst_38446__$1);

return statearr_38504;
})();
if(inst_38446__$1){
var statearr_38505_38534 = state_38480__$1;
(statearr_38505_38534[(1)] = (14));

} else {
var statearr_38506_38535 = state_38480__$1;
(statearr_38506_38535[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (9))){
var inst_38468 = (state_38480[(2)]);
var inst_38469 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38480__$1 = (function (){var statearr_38507 = state_38480;
(statearr_38507[(15)] = inst_38468);

return statearr_38507;
})();
if(cljs.core.truth_(inst_38469)){
var statearr_38508_38536 = state_38480__$1;
(statearr_38508_38536[(1)] = (21));

} else {
var statearr_38509_38537 = state_38480__$1;
(statearr_38509_38537[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (5))){
var inst_38424 = cljs.core.async.close_BANG_.call(null,out);
var state_38480__$1 = state_38480;
var statearr_38510_38538 = state_38480__$1;
(statearr_38510_38538[(2)] = inst_38424);

(statearr_38510_38538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (14))){
var inst_38446 = (state_38480[(7)]);
var inst_38448 = cljs.core.chunked_seq_QMARK_.call(null,inst_38446);
var state_38480__$1 = state_38480;
if(inst_38448){
var statearr_38511_38539 = state_38480__$1;
(statearr_38511_38539[(1)] = (17));

} else {
var statearr_38512_38540 = state_38480__$1;
(statearr_38512_38540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (16))){
var inst_38464 = (state_38480[(2)]);
var state_38480__$1 = state_38480;
var statearr_38513_38541 = state_38480__$1;
(statearr_38513_38541[(2)] = inst_38464);

(statearr_38513_38541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38481 === (10))){
var inst_38433 = (state_38480[(8)]);
var inst_38435 = (state_38480[(10)]);
var inst_38440 = cljs.core._nth.call(null,inst_38433,inst_38435);
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38480__$1,(13),out,inst_38440);
} else {
if((state_val_38481 === (18))){
var inst_38446 = (state_38480[(7)]);
var inst_38455 = cljs.core.first.call(null,inst_38446);
var state_38480__$1 = state_38480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38480__$1,(20),out,inst_38455);
} else {
if((state_val_38481 === (8))){
var inst_38435 = (state_38480[(10)]);
var inst_38434 = (state_38480[(12)]);
var inst_38437 = (inst_38435 < inst_38434);
var inst_38438 = inst_38437;
var state_38480__$1 = state_38480;
if(cljs.core.truth_(inst_38438)){
var statearr_38514_38542 = state_38480__$1;
(statearr_38514_38542[(1)] = (10));

} else {
var statearr_38515_38543 = state_38480__$1;
(statearr_38515_38543[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_38516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38516[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__);

(statearr_38516[(1)] = (1));

return statearr_38516;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____1 = (function (state_38480){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38517){if((e38517 instanceof Object)){
var ex__36778__auto__ = e38517;
var statearr_38518_38544 = state_38480;
(statearr_38518_38544[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38545 = state_38480;
state_38480 = G__38545;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__ = function(state_38480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____1.call(this,state_38480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_38519 = f__36865__auto__.call(null);
(statearr_38519[(6)] = c__36864__auto__);

return statearr_38519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto__))
);

return c__36864__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38547 = arguments.length;
switch (G__38547) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38550 = arguments.length;
switch (G__38550) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38553 = arguments.length;
switch (G__38553) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36864__auto___38600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___38600,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___38600,out){
return (function (state_38577){
var state_val_38578 = (state_38577[(1)]);
if((state_val_38578 === (7))){
var inst_38572 = (state_38577[(2)]);
var state_38577__$1 = state_38577;
var statearr_38579_38601 = state_38577__$1;
(statearr_38579_38601[(2)] = inst_38572);

(statearr_38579_38601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (1))){
var inst_38554 = null;
var state_38577__$1 = (function (){var statearr_38580 = state_38577;
(statearr_38580[(7)] = inst_38554);

return statearr_38580;
})();
var statearr_38581_38602 = state_38577__$1;
(statearr_38581_38602[(2)] = null);

(statearr_38581_38602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (4))){
var inst_38557 = (state_38577[(8)]);
var inst_38557__$1 = (state_38577[(2)]);
var inst_38558 = (inst_38557__$1 == null);
var inst_38559 = cljs.core.not.call(null,inst_38558);
var state_38577__$1 = (function (){var statearr_38582 = state_38577;
(statearr_38582[(8)] = inst_38557__$1);

return statearr_38582;
})();
if(inst_38559){
var statearr_38583_38603 = state_38577__$1;
(statearr_38583_38603[(1)] = (5));

} else {
var statearr_38584_38604 = state_38577__$1;
(statearr_38584_38604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (6))){
var state_38577__$1 = state_38577;
var statearr_38585_38605 = state_38577__$1;
(statearr_38585_38605[(2)] = null);

(statearr_38585_38605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (3))){
var inst_38574 = (state_38577[(2)]);
var inst_38575 = cljs.core.async.close_BANG_.call(null,out);
var state_38577__$1 = (function (){var statearr_38586 = state_38577;
(statearr_38586[(9)] = inst_38574);

return statearr_38586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38577__$1,inst_38575);
} else {
if((state_val_38578 === (2))){
var state_38577__$1 = state_38577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38577__$1,(4),ch);
} else {
if((state_val_38578 === (11))){
var inst_38557 = (state_38577[(8)]);
var inst_38566 = (state_38577[(2)]);
var inst_38554 = inst_38557;
var state_38577__$1 = (function (){var statearr_38587 = state_38577;
(statearr_38587[(10)] = inst_38566);

(statearr_38587[(7)] = inst_38554);

return statearr_38587;
})();
var statearr_38588_38606 = state_38577__$1;
(statearr_38588_38606[(2)] = null);

(statearr_38588_38606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (9))){
var inst_38557 = (state_38577[(8)]);
var state_38577__$1 = state_38577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38577__$1,(11),out,inst_38557);
} else {
if((state_val_38578 === (5))){
var inst_38557 = (state_38577[(8)]);
var inst_38554 = (state_38577[(7)]);
var inst_38561 = cljs.core._EQ_.call(null,inst_38557,inst_38554);
var state_38577__$1 = state_38577;
if(inst_38561){
var statearr_38590_38607 = state_38577__$1;
(statearr_38590_38607[(1)] = (8));

} else {
var statearr_38591_38608 = state_38577__$1;
(statearr_38591_38608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (10))){
var inst_38569 = (state_38577[(2)]);
var state_38577__$1 = state_38577;
var statearr_38592_38609 = state_38577__$1;
(statearr_38592_38609[(2)] = inst_38569);

(statearr_38592_38609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (8))){
var inst_38554 = (state_38577[(7)]);
var tmp38589 = inst_38554;
var inst_38554__$1 = tmp38589;
var state_38577__$1 = (function (){var statearr_38593 = state_38577;
(statearr_38593[(7)] = inst_38554__$1);

return statearr_38593;
})();
var statearr_38594_38610 = state_38577__$1;
(statearr_38594_38610[(2)] = null);

(statearr_38594_38610[(1)] = (2));


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
});})(c__36864__auto___38600,out))
;
return ((function (switch__36774__auto__,c__36864__auto___38600,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_38595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38595[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_38595[(1)] = (1));

return statearr_38595;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_38577){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38596){if((e38596 instanceof Object)){
var ex__36778__auto__ = e38596;
var statearr_38597_38611 = state_38577;
(statearr_38597_38611[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38612 = state_38577;
state_38577 = G__38612;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_38577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_38577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___38600,out))
})();
var state__36866__auto__ = (function (){var statearr_38598 = f__36865__auto__.call(null);
(statearr_38598[(6)] = c__36864__auto___38600);

return statearr_38598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___38600,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38614 = arguments.length;
switch (G__38614) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36864__auto___38680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___38680,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___38680,out){
return (function (state_38652){
var state_val_38653 = (state_38652[(1)]);
if((state_val_38653 === (7))){
var inst_38648 = (state_38652[(2)]);
var state_38652__$1 = state_38652;
var statearr_38654_38681 = state_38652__$1;
(statearr_38654_38681[(2)] = inst_38648);

(statearr_38654_38681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (1))){
var inst_38615 = (new Array(n));
var inst_38616 = inst_38615;
var inst_38617 = (0);
var state_38652__$1 = (function (){var statearr_38655 = state_38652;
(statearr_38655[(7)] = inst_38617);

(statearr_38655[(8)] = inst_38616);

return statearr_38655;
})();
var statearr_38656_38682 = state_38652__$1;
(statearr_38656_38682[(2)] = null);

(statearr_38656_38682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (4))){
var inst_38620 = (state_38652[(9)]);
var inst_38620__$1 = (state_38652[(2)]);
var inst_38621 = (inst_38620__$1 == null);
var inst_38622 = cljs.core.not.call(null,inst_38621);
var state_38652__$1 = (function (){var statearr_38657 = state_38652;
(statearr_38657[(9)] = inst_38620__$1);

return statearr_38657;
})();
if(inst_38622){
var statearr_38658_38683 = state_38652__$1;
(statearr_38658_38683[(1)] = (5));

} else {
var statearr_38659_38684 = state_38652__$1;
(statearr_38659_38684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (15))){
var inst_38642 = (state_38652[(2)]);
var state_38652__$1 = state_38652;
var statearr_38660_38685 = state_38652__$1;
(statearr_38660_38685[(2)] = inst_38642);

(statearr_38660_38685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (13))){
var state_38652__$1 = state_38652;
var statearr_38661_38686 = state_38652__$1;
(statearr_38661_38686[(2)] = null);

(statearr_38661_38686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (6))){
var inst_38617 = (state_38652[(7)]);
var inst_38638 = (inst_38617 > (0));
var state_38652__$1 = state_38652;
if(cljs.core.truth_(inst_38638)){
var statearr_38662_38687 = state_38652__$1;
(statearr_38662_38687[(1)] = (12));

} else {
var statearr_38663_38688 = state_38652__$1;
(statearr_38663_38688[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (3))){
var inst_38650 = (state_38652[(2)]);
var state_38652__$1 = state_38652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38652__$1,inst_38650);
} else {
if((state_val_38653 === (12))){
var inst_38616 = (state_38652[(8)]);
var inst_38640 = cljs.core.vec.call(null,inst_38616);
var state_38652__$1 = state_38652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38652__$1,(15),out,inst_38640);
} else {
if((state_val_38653 === (2))){
var state_38652__$1 = state_38652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38652__$1,(4),ch);
} else {
if((state_val_38653 === (11))){
var inst_38632 = (state_38652[(2)]);
var inst_38633 = (new Array(n));
var inst_38616 = inst_38633;
var inst_38617 = (0);
var state_38652__$1 = (function (){var statearr_38664 = state_38652;
(statearr_38664[(7)] = inst_38617);

(statearr_38664[(10)] = inst_38632);

(statearr_38664[(8)] = inst_38616);

return statearr_38664;
})();
var statearr_38665_38689 = state_38652__$1;
(statearr_38665_38689[(2)] = null);

(statearr_38665_38689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (9))){
var inst_38616 = (state_38652[(8)]);
var inst_38630 = cljs.core.vec.call(null,inst_38616);
var state_38652__$1 = state_38652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38652__$1,(11),out,inst_38630);
} else {
if((state_val_38653 === (5))){
var inst_38617 = (state_38652[(7)]);
var inst_38625 = (state_38652[(11)]);
var inst_38616 = (state_38652[(8)]);
var inst_38620 = (state_38652[(9)]);
var inst_38624 = (inst_38616[inst_38617] = inst_38620);
var inst_38625__$1 = (inst_38617 + (1));
var inst_38626 = (inst_38625__$1 < n);
var state_38652__$1 = (function (){var statearr_38666 = state_38652;
(statearr_38666[(11)] = inst_38625__$1);

(statearr_38666[(12)] = inst_38624);

return statearr_38666;
})();
if(cljs.core.truth_(inst_38626)){
var statearr_38667_38690 = state_38652__$1;
(statearr_38667_38690[(1)] = (8));

} else {
var statearr_38668_38691 = state_38652__$1;
(statearr_38668_38691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (14))){
var inst_38645 = (state_38652[(2)]);
var inst_38646 = cljs.core.async.close_BANG_.call(null,out);
var state_38652__$1 = (function (){var statearr_38670 = state_38652;
(statearr_38670[(13)] = inst_38645);

return statearr_38670;
})();
var statearr_38671_38692 = state_38652__$1;
(statearr_38671_38692[(2)] = inst_38646);

(statearr_38671_38692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (10))){
var inst_38636 = (state_38652[(2)]);
var state_38652__$1 = state_38652;
var statearr_38672_38693 = state_38652__$1;
(statearr_38672_38693[(2)] = inst_38636);

(statearr_38672_38693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38653 === (8))){
var inst_38625 = (state_38652[(11)]);
var inst_38616 = (state_38652[(8)]);
var tmp38669 = inst_38616;
var inst_38616__$1 = tmp38669;
var inst_38617 = inst_38625;
var state_38652__$1 = (function (){var statearr_38673 = state_38652;
(statearr_38673[(7)] = inst_38617);

(statearr_38673[(8)] = inst_38616__$1);

return statearr_38673;
})();
var statearr_38674_38694 = state_38652__$1;
(statearr_38674_38694[(2)] = null);

(statearr_38674_38694[(1)] = (2));


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
});})(c__36864__auto___38680,out))
;
return ((function (switch__36774__auto__,c__36864__auto___38680,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_38675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38675[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_38675[(1)] = (1));

return statearr_38675;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_38652){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38676){if((e38676 instanceof Object)){
var ex__36778__auto__ = e38676;
var statearr_38677_38695 = state_38652;
(statearr_38677_38695[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38696 = state_38652;
state_38652 = G__38696;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_38652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_38652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___38680,out))
})();
var state__36866__auto__ = (function (){var statearr_38678 = f__36865__auto__.call(null);
(statearr_38678[(6)] = c__36864__auto___38680);

return statearr_38678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___38680,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38698 = arguments.length;
switch (G__38698) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36864__auto___38768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___38768,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___38768,out){
return (function (state_38740){
var state_val_38741 = (state_38740[(1)]);
if((state_val_38741 === (7))){
var inst_38736 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
var statearr_38742_38769 = state_38740__$1;
(statearr_38742_38769[(2)] = inst_38736);

(statearr_38742_38769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (1))){
var inst_38699 = [];
var inst_38700 = inst_38699;
var inst_38701 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38740__$1 = (function (){var statearr_38743 = state_38740;
(statearr_38743[(7)] = inst_38700);

(statearr_38743[(8)] = inst_38701);

return statearr_38743;
})();
var statearr_38744_38770 = state_38740__$1;
(statearr_38744_38770[(2)] = null);

(statearr_38744_38770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (4))){
var inst_38704 = (state_38740[(9)]);
var inst_38704__$1 = (state_38740[(2)]);
var inst_38705 = (inst_38704__$1 == null);
var inst_38706 = cljs.core.not.call(null,inst_38705);
var state_38740__$1 = (function (){var statearr_38745 = state_38740;
(statearr_38745[(9)] = inst_38704__$1);

return statearr_38745;
})();
if(inst_38706){
var statearr_38746_38771 = state_38740__$1;
(statearr_38746_38771[(1)] = (5));

} else {
var statearr_38747_38772 = state_38740__$1;
(statearr_38747_38772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (15))){
var inst_38730 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
var statearr_38748_38773 = state_38740__$1;
(statearr_38748_38773[(2)] = inst_38730);

(statearr_38748_38773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (13))){
var state_38740__$1 = state_38740;
var statearr_38749_38774 = state_38740__$1;
(statearr_38749_38774[(2)] = null);

(statearr_38749_38774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (6))){
var inst_38700 = (state_38740[(7)]);
var inst_38725 = inst_38700.length;
var inst_38726 = (inst_38725 > (0));
var state_38740__$1 = state_38740;
if(cljs.core.truth_(inst_38726)){
var statearr_38750_38775 = state_38740__$1;
(statearr_38750_38775[(1)] = (12));

} else {
var statearr_38751_38776 = state_38740__$1;
(statearr_38751_38776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (3))){
var inst_38738 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38740__$1,inst_38738);
} else {
if((state_val_38741 === (12))){
var inst_38700 = (state_38740[(7)]);
var inst_38728 = cljs.core.vec.call(null,inst_38700);
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38740__$1,(15),out,inst_38728);
} else {
if((state_val_38741 === (2))){
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38740__$1,(4),ch);
} else {
if((state_val_38741 === (11))){
var inst_38704 = (state_38740[(9)]);
var inst_38708 = (state_38740[(10)]);
var inst_38718 = (state_38740[(2)]);
var inst_38719 = [];
var inst_38720 = inst_38719.push(inst_38704);
var inst_38700 = inst_38719;
var inst_38701 = inst_38708;
var state_38740__$1 = (function (){var statearr_38752 = state_38740;
(statearr_38752[(7)] = inst_38700);

(statearr_38752[(11)] = inst_38718);

(statearr_38752[(8)] = inst_38701);

(statearr_38752[(12)] = inst_38720);

return statearr_38752;
})();
var statearr_38753_38777 = state_38740__$1;
(statearr_38753_38777[(2)] = null);

(statearr_38753_38777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (9))){
var inst_38700 = (state_38740[(7)]);
var inst_38716 = cljs.core.vec.call(null,inst_38700);
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38740__$1,(11),out,inst_38716);
} else {
if((state_val_38741 === (5))){
var inst_38704 = (state_38740[(9)]);
var inst_38708 = (state_38740[(10)]);
var inst_38701 = (state_38740[(8)]);
var inst_38708__$1 = f.call(null,inst_38704);
var inst_38709 = cljs.core._EQ_.call(null,inst_38708__$1,inst_38701);
var inst_38710 = cljs.core.keyword_identical_QMARK_.call(null,inst_38701,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38711 = (inst_38709) || (inst_38710);
var state_38740__$1 = (function (){var statearr_38754 = state_38740;
(statearr_38754[(10)] = inst_38708__$1);

return statearr_38754;
})();
if(cljs.core.truth_(inst_38711)){
var statearr_38755_38778 = state_38740__$1;
(statearr_38755_38778[(1)] = (8));

} else {
var statearr_38756_38779 = state_38740__$1;
(statearr_38756_38779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (14))){
var inst_38733 = (state_38740[(2)]);
var inst_38734 = cljs.core.async.close_BANG_.call(null,out);
var state_38740__$1 = (function (){var statearr_38758 = state_38740;
(statearr_38758[(13)] = inst_38733);

return statearr_38758;
})();
var statearr_38759_38780 = state_38740__$1;
(statearr_38759_38780[(2)] = inst_38734);

(statearr_38759_38780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (10))){
var inst_38723 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
var statearr_38760_38781 = state_38740__$1;
(statearr_38760_38781[(2)] = inst_38723);

(statearr_38760_38781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (8))){
var inst_38700 = (state_38740[(7)]);
var inst_38704 = (state_38740[(9)]);
var inst_38708 = (state_38740[(10)]);
var inst_38713 = inst_38700.push(inst_38704);
var tmp38757 = inst_38700;
var inst_38700__$1 = tmp38757;
var inst_38701 = inst_38708;
var state_38740__$1 = (function (){var statearr_38761 = state_38740;
(statearr_38761[(7)] = inst_38700__$1);

(statearr_38761[(14)] = inst_38713);

(statearr_38761[(8)] = inst_38701);

return statearr_38761;
})();
var statearr_38762_38782 = state_38740__$1;
(statearr_38762_38782[(2)] = null);

(statearr_38762_38782[(1)] = (2));


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
});})(c__36864__auto___38768,out))
;
return ((function (switch__36774__auto__,c__36864__auto___38768,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_38763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38763[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_38763[(1)] = (1));

return statearr_38763;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_38740){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_38740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e38764){if((e38764 instanceof Object)){
var ex__36778__auto__ = e38764;
var statearr_38765_38783 = state_38740;
(statearr_38765_38783[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38784 = state_38740;
state_38740 = G__38784;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_38740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_38740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___38768,out))
})();
var state__36866__auto__ = (function (){var statearr_38766 = f__36865__auto__.call(null);
(statearr_38766[(6)] = c__36864__auto___38768);

return statearr_38766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___38768,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512749388806
