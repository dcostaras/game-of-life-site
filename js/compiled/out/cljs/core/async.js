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
var G__47412 = arguments.length;
switch (G__47412) {
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
if(typeof cljs.core.async.t_cljs$core$async47413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47413 = (function (f,blockable,meta47414){
this.f = f;
this.blockable = blockable;
this.meta47414 = meta47414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47415,meta47414__$1){
var self__ = this;
var _47415__$1 = this;
return (new cljs.core.async.t_cljs$core$async47413(self__.f,self__.blockable,meta47414__$1));
});

cljs.core.async.t_cljs$core$async47413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47415){
var self__ = this;
var _47415__$1 = this;
return self__.meta47414;
});

cljs.core.async.t_cljs$core$async47413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47414","meta47414",622749327,null)], null);
});

cljs.core.async.t_cljs$core$async47413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47413";

cljs.core.async.t_cljs$core$async47413.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async47413");
});

cljs.core.async.__GT_t_cljs$core$async47413 = (function cljs$core$async$__GT_t_cljs$core$async47413(f__$1,blockable__$1,meta47414){
return (new cljs.core.async.t_cljs$core$async47413(f__$1,blockable__$1,meta47414));
});

}

return (new cljs.core.async.t_cljs$core$async47413(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47419 = arguments.length;
switch (G__47419) {
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
var G__47422 = arguments.length;
switch (G__47422) {
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
var G__47425 = arguments.length;
switch (G__47425) {
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
var val_47427 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47427);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47427,ret){
return (function (){
return fn1.call(null,val_47427);
});})(val_47427,ret))
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
var G__47429 = arguments.length;
switch (G__47429) {
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
var n__31273__auto___47431 = n;
var x_47432 = (0);
while(true){
if((x_47432 < n__31273__auto___47431)){
(a[x_47432] = (0));

var G__47433 = (x_47432 + (1));
x_47432 = G__47433;
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

var G__47434 = (i + (1));
i = G__47434;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47435 = (function (flag,meta47436){
this.flag = flag;
this.meta47436 = meta47436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47437,meta47436__$1){
var self__ = this;
var _47437__$1 = this;
return (new cljs.core.async.t_cljs$core$async47435(self__.flag,meta47436__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47437){
var self__ = this;
var _47437__$1 = this;
return self__.meta47436;
});})(flag))
;

cljs.core.async.t_cljs$core$async47435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47435.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47436","meta47436",-439953526,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47435";

cljs.core.async.t_cljs$core$async47435.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async47435");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47435 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47435(flag__$1,meta47436){
return (new cljs.core.async.t_cljs$core$async47435(flag__$1,meta47436));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47435(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47438 = (function (flag,cb,meta47439){
this.flag = flag;
this.cb = cb;
this.meta47439 = meta47439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47440,meta47439__$1){
var self__ = this;
var _47440__$1 = this;
return (new cljs.core.async.t_cljs$core$async47438(self__.flag,self__.cb,meta47439__$1));
});

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47440){
var self__ = this;
var _47440__$1 = this;
return self__.meta47439;
});

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47439","meta47439",252598439,null)], null);
});

cljs.core.async.t_cljs$core$async47438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47438";

cljs.core.async.t_cljs$core$async47438.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async47438");
});

cljs.core.async.__GT_t_cljs$core$async47438 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47438(flag__$1,cb__$1,meta47439){
return (new cljs.core.async.t_cljs$core$async47438(flag__$1,cb__$1,meta47439));
});

}

return (new cljs.core.async.t_cljs$core$async47438(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47441_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47441_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47442_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47442_SHARP_,port], null));
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
var G__47443 = (i + (1));
i = G__47443;
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
var len__31507__auto___47449 = arguments.length;
var i__31508__auto___47450 = (0);
while(true){
if((i__31508__auto___47450 < len__31507__auto___47449)){
args__31514__auto__.push((arguments[i__31508__auto___47450]));

var G__47451 = (i__31508__auto___47450 + (1));
i__31508__auto___47450 = G__47451;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((1) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31515__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47446){
var map__47447 = p__47446;
var map__47447__$1 = ((((!((map__47447 == null)))?((((map__47447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47447):map__47447);
var opts = map__47447__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47444){
var G__47445 = cljs.core.first.call(null,seq47444);
var seq47444__$1 = cljs.core.next.call(null,seq47444);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47445,seq47444__$1);
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
var G__47453 = arguments.length;
switch (G__47453) {
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
var c__36864__auto___47499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___47499){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___47499){
return (function (state_47477){
var state_val_47478 = (state_47477[(1)]);
if((state_val_47478 === (7))){
var inst_47473 = (state_47477[(2)]);
var state_47477__$1 = state_47477;
var statearr_47479_47500 = state_47477__$1;
(statearr_47479_47500[(2)] = inst_47473);

(statearr_47479_47500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (1))){
var state_47477__$1 = state_47477;
var statearr_47480_47501 = state_47477__$1;
(statearr_47480_47501[(2)] = null);

(statearr_47480_47501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (4))){
var inst_47456 = (state_47477[(7)]);
var inst_47456__$1 = (state_47477[(2)]);
var inst_47457 = (inst_47456__$1 == null);
var state_47477__$1 = (function (){var statearr_47481 = state_47477;
(statearr_47481[(7)] = inst_47456__$1);

return statearr_47481;
})();
if(cljs.core.truth_(inst_47457)){
var statearr_47482_47502 = state_47477__$1;
(statearr_47482_47502[(1)] = (5));

} else {
var statearr_47483_47503 = state_47477__$1;
(statearr_47483_47503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (13))){
var state_47477__$1 = state_47477;
var statearr_47484_47504 = state_47477__$1;
(statearr_47484_47504[(2)] = null);

(statearr_47484_47504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (6))){
var inst_47456 = (state_47477[(7)]);
var state_47477__$1 = state_47477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47477__$1,(11),to,inst_47456);
} else {
if((state_val_47478 === (3))){
var inst_47475 = (state_47477[(2)]);
var state_47477__$1 = state_47477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47477__$1,inst_47475);
} else {
if((state_val_47478 === (12))){
var state_47477__$1 = state_47477;
var statearr_47485_47505 = state_47477__$1;
(statearr_47485_47505[(2)] = null);

(statearr_47485_47505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (2))){
var state_47477__$1 = state_47477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47477__$1,(4),from);
} else {
if((state_val_47478 === (11))){
var inst_47466 = (state_47477[(2)]);
var state_47477__$1 = state_47477;
if(cljs.core.truth_(inst_47466)){
var statearr_47486_47506 = state_47477__$1;
(statearr_47486_47506[(1)] = (12));

} else {
var statearr_47487_47507 = state_47477__$1;
(statearr_47487_47507[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (9))){
var state_47477__$1 = state_47477;
var statearr_47488_47508 = state_47477__$1;
(statearr_47488_47508[(2)] = null);

(statearr_47488_47508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (5))){
var state_47477__$1 = state_47477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47489_47509 = state_47477__$1;
(statearr_47489_47509[(1)] = (8));

} else {
var statearr_47490_47510 = state_47477__$1;
(statearr_47490_47510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (14))){
var inst_47471 = (state_47477[(2)]);
var state_47477__$1 = state_47477;
var statearr_47491_47511 = state_47477__$1;
(statearr_47491_47511[(2)] = inst_47471);

(statearr_47491_47511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (10))){
var inst_47463 = (state_47477[(2)]);
var state_47477__$1 = state_47477;
var statearr_47492_47512 = state_47477__$1;
(statearr_47492_47512[(2)] = inst_47463);

(statearr_47492_47512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47478 === (8))){
var inst_47460 = cljs.core.async.close_BANG_.call(null,to);
var state_47477__$1 = state_47477;
var statearr_47493_47513 = state_47477__$1;
(statearr_47493_47513[(2)] = inst_47460);

(statearr_47493_47513[(1)] = (10));


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
});})(c__36864__auto___47499))
;
return ((function (switch__36774__auto__,c__36864__auto___47499){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_47494 = [null,null,null,null,null,null,null,null];
(statearr_47494[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_47494[(1)] = (1));

return statearr_47494;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_47477){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47495){if((e47495 instanceof Object)){
var ex__36778__auto__ = e47495;
var statearr_47496_47514 = state_47477;
(statearr_47496_47514[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47515 = state_47477;
state_47477 = G__47515;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_47477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_47477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___47499))
})();
var state__36866__auto__ = (function (){var statearr_47497 = f__36865__auto__.call(null);
(statearr_47497[(6)] = c__36864__auto___47499);

return statearr_47497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___47499))
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
return (function (p__47516){
var vec__47517 = p__47516;
var v = cljs.core.nth.call(null,vec__47517,(0),null);
var p = cljs.core.nth.call(null,vec__47517,(1),null);
var job = vec__47517;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36864__auto___47688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___47688,res,vec__47517,v,p,job,jobs,results){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___47688,res,vec__47517,v,p,job,jobs,results){
return (function (state_47524){
var state_val_47525 = (state_47524[(1)]);
if((state_val_47525 === (1))){
var state_47524__$1 = state_47524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47524__$1,(2),res,v);
} else {
if((state_val_47525 === (2))){
var inst_47521 = (state_47524[(2)]);
var inst_47522 = cljs.core.async.close_BANG_.call(null,res);
var state_47524__$1 = (function (){var statearr_47526 = state_47524;
(statearr_47526[(7)] = inst_47521);

return statearr_47526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47524__$1,inst_47522);
} else {
return null;
}
}
});})(c__36864__auto___47688,res,vec__47517,v,p,job,jobs,results))
;
return ((function (switch__36774__auto__,c__36864__auto___47688,res,vec__47517,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_47527 = [null,null,null,null,null,null,null,null];
(statearr_47527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_47527[(1)] = (1));

return statearr_47527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_47524){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47528){if((e47528 instanceof Object)){
var ex__36778__auto__ = e47528;
var statearr_47529_47689 = state_47524;
(statearr_47529_47689[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47690 = state_47524;
state_47524 = G__47690;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_47524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_47524);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___47688,res,vec__47517,v,p,job,jobs,results))
})();
var state__36866__auto__ = (function (){var statearr_47530 = f__36865__auto__.call(null);
(statearr_47530[(6)] = c__36864__auto___47688);

return statearr_47530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___47688,res,vec__47517,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47531){
var vec__47532 = p__47531;
var v = cljs.core.nth.call(null,vec__47532,(0),null);
var p = cljs.core.nth.call(null,vec__47532,(1),null);
var job = vec__47532;
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
var n__31273__auto___47691 = n;
var __47692 = (0);
while(true){
if((__47692 < n__31273__auto___47691)){
var G__47535_47693 = type;
var G__47535_47694__$1 = (((G__47535_47693 instanceof cljs.core.Keyword))?G__47535_47693.fqn:null);
switch (G__47535_47694__$1) {
case "compute":
var c__36864__auto___47696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47692,c__36864__auto___47696,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (__47692,c__36864__auto___47696,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async){
return (function (state_47548){
var state_val_47549 = (state_47548[(1)]);
if((state_val_47549 === (1))){
var state_47548__$1 = state_47548;
var statearr_47550_47697 = state_47548__$1;
(statearr_47550_47697[(2)] = null);

(statearr_47550_47697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (2))){
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47548__$1,(4),jobs);
} else {
if((state_val_47549 === (3))){
var inst_47546 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47548__$1,inst_47546);
} else {
if((state_val_47549 === (4))){
var inst_47538 = (state_47548[(2)]);
var inst_47539 = process.call(null,inst_47538);
var state_47548__$1 = state_47548;
if(cljs.core.truth_(inst_47539)){
var statearr_47551_47698 = state_47548__$1;
(statearr_47551_47698[(1)] = (5));

} else {
var statearr_47552_47699 = state_47548__$1;
(statearr_47552_47699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (5))){
var state_47548__$1 = state_47548;
var statearr_47553_47700 = state_47548__$1;
(statearr_47553_47700[(2)] = null);

(statearr_47553_47700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (6))){
var state_47548__$1 = state_47548;
var statearr_47554_47701 = state_47548__$1;
(statearr_47554_47701[(2)] = null);

(statearr_47554_47701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (7))){
var inst_47544 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
var statearr_47555_47702 = state_47548__$1;
(statearr_47555_47702[(2)] = inst_47544);

(statearr_47555_47702[(1)] = (3));


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
});})(__47692,c__36864__auto___47696,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async))
;
return ((function (__47692,switch__36774__auto__,c__36864__auto___47696,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_47556 = [null,null,null,null,null,null,null];
(statearr_47556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_47556[(1)] = (1));

return statearr_47556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_47548){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47557){if((e47557 instanceof Object)){
var ex__36778__auto__ = e47557;
var statearr_47558_47703 = state_47548;
(statearr_47558_47703[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47704 = state_47548;
state_47548 = G__47704;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_47548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_47548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(__47692,switch__36774__auto__,c__36864__auto___47696,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async))
})();
var state__36866__auto__ = (function (){var statearr_47559 = f__36865__auto__.call(null);
(statearr_47559[(6)] = c__36864__auto___47696);

return statearr_47559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(__47692,c__36864__auto___47696,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async))
);


break;
case "async":
var c__36864__auto___47705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47692,c__36864__auto___47705,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (__47692,c__36864__auto___47705,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async){
return (function (state_47572){
var state_val_47573 = (state_47572[(1)]);
if((state_val_47573 === (1))){
var state_47572__$1 = state_47572;
var statearr_47574_47706 = state_47572__$1;
(statearr_47574_47706[(2)] = null);

(statearr_47574_47706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47573 === (2))){
var state_47572__$1 = state_47572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47572__$1,(4),jobs);
} else {
if((state_val_47573 === (3))){
var inst_47570 = (state_47572[(2)]);
var state_47572__$1 = state_47572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47572__$1,inst_47570);
} else {
if((state_val_47573 === (4))){
var inst_47562 = (state_47572[(2)]);
var inst_47563 = async.call(null,inst_47562);
var state_47572__$1 = state_47572;
if(cljs.core.truth_(inst_47563)){
var statearr_47575_47707 = state_47572__$1;
(statearr_47575_47707[(1)] = (5));

} else {
var statearr_47576_47708 = state_47572__$1;
(statearr_47576_47708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47573 === (5))){
var state_47572__$1 = state_47572;
var statearr_47577_47709 = state_47572__$1;
(statearr_47577_47709[(2)] = null);

(statearr_47577_47709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47573 === (6))){
var state_47572__$1 = state_47572;
var statearr_47578_47710 = state_47572__$1;
(statearr_47578_47710[(2)] = null);

(statearr_47578_47710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47573 === (7))){
var inst_47568 = (state_47572[(2)]);
var state_47572__$1 = state_47572;
var statearr_47579_47711 = state_47572__$1;
(statearr_47579_47711[(2)] = inst_47568);

(statearr_47579_47711[(1)] = (3));


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
});})(__47692,c__36864__auto___47705,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async))
;
return ((function (__47692,switch__36774__auto__,c__36864__auto___47705,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_47580 = [null,null,null,null,null,null,null];
(statearr_47580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_47580[(1)] = (1));

return statearr_47580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_47572){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47581){if((e47581 instanceof Object)){
var ex__36778__auto__ = e47581;
var statearr_47582_47712 = state_47572;
(statearr_47582_47712[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47713 = state_47572;
state_47572 = G__47713;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_47572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_47572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(__47692,switch__36774__auto__,c__36864__auto___47705,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async))
})();
var state__36866__auto__ = (function (){var statearr_47583 = f__36865__auto__.call(null);
(statearr_47583[(6)] = c__36864__auto___47705);

return statearr_47583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(__47692,c__36864__auto___47705,G__47535_47693,G__47535_47694__$1,n__31273__auto___47691,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47535_47694__$1)].join('')));

}

var G__47714 = (__47692 + (1));
__47692 = G__47714;
continue;
} else {
}
break;
}

var c__36864__auto___47715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___47715,jobs,results,process,async){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___47715,jobs,results,process,async){
return (function (state_47605){
var state_val_47606 = (state_47605[(1)]);
if((state_val_47606 === (1))){
var state_47605__$1 = state_47605;
var statearr_47607_47716 = state_47605__$1;
(statearr_47607_47716[(2)] = null);

(statearr_47607_47716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47606 === (2))){
var state_47605__$1 = state_47605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47605__$1,(4),from);
} else {
if((state_val_47606 === (3))){
var inst_47603 = (state_47605[(2)]);
var state_47605__$1 = state_47605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47605__$1,inst_47603);
} else {
if((state_val_47606 === (4))){
var inst_47586 = (state_47605[(7)]);
var inst_47586__$1 = (state_47605[(2)]);
var inst_47587 = (inst_47586__$1 == null);
var state_47605__$1 = (function (){var statearr_47608 = state_47605;
(statearr_47608[(7)] = inst_47586__$1);

return statearr_47608;
})();
if(cljs.core.truth_(inst_47587)){
var statearr_47609_47717 = state_47605__$1;
(statearr_47609_47717[(1)] = (5));

} else {
var statearr_47610_47718 = state_47605__$1;
(statearr_47610_47718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47606 === (5))){
var inst_47589 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47605__$1 = state_47605;
var statearr_47611_47719 = state_47605__$1;
(statearr_47611_47719[(2)] = inst_47589);

(statearr_47611_47719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47606 === (6))){
var inst_47586 = (state_47605[(7)]);
var inst_47591 = (state_47605[(8)]);
var inst_47591__$1 = cljs.core.async.chan.call(null,(1));
var inst_47592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47593 = [inst_47586,inst_47591__$1];
var inst_47594 = (new cljs.core.PersistentVector(null,2,(5),inst_47592,inst_47593,null));
var state_47605__$1 = (function (){var statearr_47612 = state_47605;
(statearr_47612[(8)] = inst_47591__$1);

return statearr_47612;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47605__$1,(8),jobs,inst_47594);
} else {
if((state_val_47606 === (7))){
var inst_47601 = (state_47605[(2)]);
var state_47605__$1 = state_47605;
var statearr_47613_47720 = state_47605__$1;
(statearr_47613_47720[(2)] = inst_47601);

(statearr_47613_47720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47606 === (8))){
var inst_47591 = (state_47605[(8)]);
var inst_47596 = (state_47605[(2)]);
var state_47605__$1 = (function (){var statearr_47614 = state_47605;
(statearr_47614[(9)] = inst_47596);

return statearr_47614;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47605__$1,(9),results,inst_47591);
} else {
if((state_val_47606 === (9))){
var inst_47598 = (state_47605[(2)]);
var state_47605__$1 = (function (){var statearr_47615 = state_47605;
(statearr_47615[(10)] = inst_47598);

return statearr_47615;
})();
var statearr_47616_47721 = state_47605__$1;
(statearr_47616_47721[(2)] = null);

(statearr_47616_47721[(1)] = (2));


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
});})(c__36864__auto___47715,jobs,results,process,async))
;
return ((function (switch__36774__auto__,c__36864__auto___47715,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0 = (function (){
var statearr_47617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_47617[(1)] = (1));

return statearr_47617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_47605){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47618){if((e47618 instanceof Object)){
var ex__36778__auto__ = e47618;
var statearr_47619_47722 = state_47605;
(statearr_47619_47722[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47723 = state_47605;
state_47605 = G__47723;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_47605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_47605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___47715,jobs,results,process,async))
})();
var state__36866__auto__ = (function (){var statearr_47620 = f__36865__auto__.call(null);
(statearr_47620[(6)] = c__36864__auto___47715);

return statearr_47620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___47715,jobs,results,process,async))
);


var c__36864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto__,jobs,results,process,async){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto__,jobs,results,process,async){
return (function (state_47658){
var state_val_47659 = (state_47658[(1)]);
if((state_val_47659 === (7))){
var inst_47654 = (state_47658[(2)]);
var state_47658__$1 = state_47658;
var statearr_47660_47724 = state_47658__$1;
(statearr_47660_47724[(2)] = inst_47654);

(statearr_47660_47724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (20))){
var state_47658__$1 = state_47658;
var statearr_47661_47725 = state_47658__$1;
(statearr_47661_47725[(2)] = null);

(statearr_47661_47725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (1))){
var state_47658__$1 = state_47658;
var statearr_47662_47726 = state_47658__$1;
(statearr_47662_47726[(2)] = null);

(statearr_47662_47726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (4))){
var inst_47623 = (state_47658[(7)]);
var inst_47623__$1 = (state_47658[(2)]);
var inst_47624 = (inst_47623__$1 == null);
var state_47658__$1 = (function (){var statearr_47663 = state_47658;
(statearr_47663[(7)] = inst_47623__$1);

return statearr_47663;
})();
if(cljs.core.truth_(inst_47624)){
var statearr_47664_47727 = state_47658__$1;
(statearr_47664_47727[(1)] = (5));

} else {
var statearr_47665_47728 = state_47658__$1;
(statearr_47665_47728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (15))){
var inst_47636 = (state_47658[(8)]);
var state_47658__$1 = state_47658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47658__$1,(18),to,inst_47636);
} else {
if((state_val_47659 === (21))){
var inst_47649 = (state_47658[(2)]);
var state_47658__$1 = state_47658;
var statearr_47666_47729 = state_47658__$1;
(statearr_47666_47729[(2)] = inst_47649);

(statearr_47666_47729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (13))){
var inst_47651 = (state_47658[(2)]);
var state_47658__$1 = (function (){var statearr_47667 = state_47658;
(statearr_47667[(9)] = inst_47651);

return statearr_47667;
})();
var statearr_47668_47730 = state_47658__$1;
(statearr_47668_47730[(2)] = null);

(statearr_47668_47730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (6))){
var inst_47623 = (state_47658[(7)]);
var state_47658__$1 = state_47658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47658__$1,(11),inst_47623);
} else {
if((state_val_47659 === (17))){
var inst_47644 = (state_47658[(2)]);
var state_47658__$1 = state_47658;
if(cljs.core.truth_(inst_47644)){
var statearr_47669_47731 = state_47658__$1;
(statearr_47669_47731[(1)] = (19));

} else {
var statearr_47670_47732 = state_47658__$1;
(statearr_47670_47732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (3))){
var inst_47656 = (state_47658[(2)]);
var state_47658__$1 = state_47658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47658__$1,inst_47656);
} else {
if((state_val_47659 === (12))){
var inst_47633 = (state_47658[(10)]);
var state_47658__$1 = state_47658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47658__$1,(14),inst_47633);
} else {
if((state_val_47659 === (2))){
var state_47658__$1 = state_47658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47658__$1,(4),results);
} else {
if((state_val_47659 === (19))){
var state_47658__$1 = state_47658;
var statearr_47671_47733 = state_47658__$1;
(statearr_47671_47733[(2)] = null);

(statearr_47671_47733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (11))){
var inst_47633 = (state_47658[(2)]);
var state_47658__$1 = (function (){var statearr_47672 = state_47658;
(statearr_47672[(10)] = inst_47633);

return statearr_47672;
})();
var statearr_47673_47734 = state_47658__$1;
(statearr_47673_47734[(2)] = null);

(statearr_47673_47734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (9))){
var state_47658__$1 = state_47658;
var statearr_47674_47735 = state_47658__$1;
(statearr_47674_47735[(2)] = null);

(statearr_47674_47735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (5))){
var state_47658__$1 = state_47658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47675_47736 = state_47658__$1;
(statearr_47675_47736[(1)] = (8));

} else {
var statearr_47676_47737 = state_47658__$1;
(statearr_47676_47737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (14))){
var inst_47636 = (state_47658[(8)]);
var inst_47638 = (state_47658[(11)]);
var inst_47636__$1 = (state_47658[(2)]);
var inst_47637 = (inst_47636__$1 == null);
var inst_47638__$1 = cljs.core.not.call(null,inst_47637);
var state_47658__$1 = (function (){var statearr_47677 = state_47658;
(statearr_47677[(8)] = inst_47636__$1);

(statearr_47677[(11)] = inst_47638__$1);

return statearr_47677;
})();
if(inst_47638__$1){
var statearr_47678_47738 = state_47658__$1;
(statearr_47678_47738[(1)] = (15));

} else {
var statearr_47679_47739 = state_47658__$1;
(statearr_47679_47739[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (16))){
var inst_47638 = (state_47658[(11)]);
var state_47658__$1 = state_47658;
var statearr_47680_47740 = state_47658__$1;
(statearr_47680_47740[(2)] = inst_47638);

(statearr_47680_47740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (10))){
var inst_47630 = (state_47658[(2)]);
var state_47658__$1 = state_47658;
var statearr_47681_47741 = state_47658__$1;
(statearr_47681_47741[(2)] = inst_47630);

(statearr_47681_47741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (18))){
var inst_47641 = (state_47658[(2)]);
var state_47658__$1 = state_47658;
var statearr_47682_47742 = state_47658__$1;
(statearr_47682_47742[(2)] = inst_47641);

(statearr_47682_47742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47659 === (8))){
var inst_47627 = cljs.core.async.close_BANG_.call(null,to);
var state_47658__$1 = state_47658;
var statearr_47683_47743 = state_47658__$1;
(statearr_47683_47743[(2)] = inst_47627);

(statearr_47683_47743[(1)] = (10));


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
var statearr_47684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__);

(statearr_47684[(1)] = (1));

return statearr_47684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1 = (function (state_47658){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47685){if((e47685 instanceof Object)){
var ex__36778__auto__ = e47685;
var statearr_47686_47744 = state_47658;
(statearr_47686_47744[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47745 = state_47658;
state_47658 = G__47745;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__ = function(state_47658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1.call(this,state_47658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,jobs,results,process,async))
})();
var state__36866__auto__ = (function (){var statearr_47687 = f__36865__auto__.call(null);
(statearr_47687[(6)] = c__36864__auto__);

return statearr_47687;
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
var G__47747 = arguments.length;
switch (G__47747) {
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
var G__47750 = arguments.length;
switch (G__47750) {
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
var G__47753 = arguments.length;
switch (G__47753) {
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
var c__36864__auto___47802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___47802,tc,fc){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___47802,tc,fc){
return (function (state_47779){
var state_val_47780 = (state_47779[(1)]);
if((state_val_47780 === (7))){
var inst_47775 = (state_47779[(2)]);
var state_47779__$1 = state_47779;
var statearr_47781_47803 = state_47779__$1;
(statearr_47781_47803[(2)] = inst_47775);

(statearr_47781_47803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (1))){
var state_47779__$1 = state_47779;
var statearr_47782_47804 = state_47779__$1;
(statearr_47782_47804[(2)] = null);

(statearr_47782_47804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (4))){
var inst_47756 = (state_47779[(7)]);
var inst_47756__$1 = (state_47779[(2)]);
var inst_47757 = (inst_47756__$1 == null);
var state_47779__$1 = (function (){var statearr_47783 = state_47779;
(statearr_47783[(7)] = inst_47756__$1);

return statearr_47783;
})();
if(cljs.core.truth_(inst_47757)){
var statearr_47784_47805 = state_47779__$1;
(statearr_47784_47805[(1)] = (5));

} else {
var statearr_47785_47806 = state_47779__$1;
(statearr_47785_47806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (13))){
var state_47779__$1 = state_47779;
var statearr_47786_47807 = state_47779__$1;
(statearr_47786_47807[(2)] = null);

(statearr_47786_47807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (6))){
var inst_47756 = (state_47779[(7)]);
var inst_47762 = p.call(null,inst_47756);
var state_47779__$1 = state_47779;
if(cljs.core.truth_(inst_47762)){
var statearr_47787_47808 = state_47779__$1;
(statearr_47787_47808[(1)] = (9));

} else {
var statearr_47788_47809 = state_47779__$1;
(statearr_47788_47809[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (3))){
var inst_47777 = (state_47779[(2)]);
var state_47779__$1 = state_47779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47779__$1,inst_47777);
} else {
if((state_val_47780 === (12))){
var state_47779__$1 = state_47779;
var statearr_47789_47810 = state_47779__$1;
(statearr_47789_47810[(2)] = null);

(statearr_47789_47810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (2))){
var state_47779__$1 = state_47779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47779__$1,(4),ch);
} else {
if((state_val_47780 === (11))){
var inst_47756 = (state_47779[(7)]);
var inst_47766 = (state_47779[(2)]);
var state_47779__$1 = state_47779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47779__$1,(8),inst_47766,inst_47756);
} else {
if((state_val_47780 === (9))){
var state_47779__$1 = state_47779;
var statearr_47790_47811 = state_47779__$1;
(statearr_47790_47811[(2)] = tc);

(statearr_47790_47811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (5))){
var inst_47759 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47760 = cljs.core.async.close_BANG_.call(null,fc);
var state_47779__$1 = (function (){var statearr_47791 = state_47779;
(statearr_47791[(8)] = inst_47759);

return statearr_47791;
})();
var statearr_47792_47812 = state_47779__$1;
(statearr_47792_47812[(2)] = inst_47760);

(statearr_47792_47812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (14))){
var inst_47773 = (state_47779[(2)]);
var state_47779__$1 = state_47779;
var statearr_47793_47813 = state_47779__$1;
(statearr_47793_47813[(2)] = inst_47773);

(statearr_47793_47813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (10))){
var state_47779__$1 = state_47779;
var statearr_47794_47814 = state_47779__$1;
(statearr_47794_47814[(2)] = fc);

(statearr_47794_47814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47780 === (8))){
var inst_47768 = (state_47779[(2)]);
var state_47779__$1 = state_47779;
if(cljs.core.truth_(inst_47768)){
var statearr_47795_47815 = state_47779__$1;
(statearr_47795_47815[(1)] = (12));

} else {
var statearr_47796_47816 = state_47779__$1;
(statearr_47796_47816[(1)] = (13));

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
});})(c__36864__auto___47802,tc,fc))
;
return ((function (switch__36774__auto__,c__36864__auto___47802,tc,fc){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_47797 = [null,null,null,null,null,null,null,null,null];
(statearr_47797[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_47797[(1)] = (1));

return statearr_47797;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_47779){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47798){if((e47798 instanceof Object)){
var ex__36778__auto__ = e47798;
var statearr_47799_47817 = state_47779;
(statearr_47799_47817[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47818 = state_47779;
state_47779 = G__47818;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_47779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_47779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___47802,tc,fc))
})();
var state__36866__auto__ = (function (){var statearr_47800 = f__36865__auto__.call(null);
(statearr_47800[(6)] = c__36864__auto___47802);

return statearr_47800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___47802,tc,fc))
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
return (function (state_47839){
var state_val_47840 = (state_47839[(1)]);
if((state_val_47840 === (7))){
var inst_47835 = (state_47839[(2)]);
var state_47839__$1 = state_47839;
var statearr_47841_47859 = state_47839__$1;
(statearr_47841_47859[(2)] = inst_47835);

(statearr_47841_47859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47840 === (1))){
var inst_47819 = init;
var state_47839__$1 = (function (){var statearr_47842 = state_47839;
(statearr_47842[(7)] = inst_47819);

return statearr_47842;
})();
var statearr_47843_47860 = state_47839__$1;
(statearr_47843_47860[(2)] = null);

(statearr_47843_47860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47840 === (4))){
var inst_47822 = (state_47839[(8)]);
var inst_47822__$1 = (state_47839[(2)]);
var inst_47823 = (inst_47822__$1 == null);
var state_47839__$1 = (function (){var statearr_47844 = state_47839;
(statearr_47844[(8)] = inst_47822__$1);

return statearr_47844;
})();
if(cljs.core.truth_(inst_47823)){
var statearr_47845_47861 = state_47839__$1;
(statearr_47845_47861[(1)] = (5));

} else {
var statearr_47846_47862 = state_47839__$1;
(statearr_47846_47862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47840 === (6))){
var inst_47826 = (state_47839[(9)]);
var inst_47822 = (state_47839[(8)]);
var inst_47819 = (state_47839[(7)]);
var inst_47826__$1 = f.call(null,inst_47819,inst_47822);
var inst_47827 = cljs.core.reduced_QMARK_.call(null,inst_47826__$1);
var state_47839__$1 = (function (){var statearr_47847 = state_47839;
(statearr_47847[(9)] = inst_47826__$1);

return statearr_47847;
})();
if(inst_47827){
var statearr_47848_47863 = state_47839__$1;
(statearr_47848_47863[(1)] = (8));

} else {
var statearr_47849_47864 = state_47839__$1;
(statearr_47849_47864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47840 === (3))){
var inst_47837 = (state_47839[(2)]);
var state_47839__$1 = state_47839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47839__$1,inst_47837);
} else {
if((state_val_47840 === (2))){
var state_47839__$1 = state_47839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47839__$1,(4),ch);
} else {
if((state_val_47840 === (9))){
var inst_47826 = (state_47839[(9)]);
var inst_47819 = inst_47826;
var state_47839__$1 = (function (){var statearr_47850 = state_47839;
(statearr_47850[(7)] = inst_47819);

return statearr_47850;
})();
var statearr_47851_47865 = state_47839__$1;
(statearr_47851_47865[(2)] = null);

(statearr_47851_47865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47840 === (5))){
var inst_47819 = (state_47839[(7)]);
var state_47839__$1 = state_47839;
var statearr_47852_47866 = state_47839__$1;
(statearr_47852_47866[(2)] = inst_47819);

(statearr_47852_47866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47840 === (10))){
var inst_47833 = (state_47839[(2)]);
var state_47839__$1 = state_47839;
var statearr_47853_47867 = state_47839__$1;
(statearr_47853_47867[(2)] = inst_47833);

(statearr_47853_47867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47840 === (8))){
var inst_47826 = (state_47839[(9)]);
var inst_47829 = cljs.core.deref.call(null,inst_47826);
var state_47839__$1 = state_47839;
var statearr_47854_47868 = state_47839__$1;
(statearr_47854_47868[(2)] = inst_47829);

(statearr_47854_47868[(1)] = (10));


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
var statearr_47855 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47855[(0)] = cljs$core$async$reduce_$_state_machine__36775__auto__);

(statearr_47855[(1)] = (1));

return statearr_47855;
});
var cljs$core$async$reduce_$_state_machine__36775__auto____1 = (function (state_47839){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47856){if((e47856 instanceof Object)){
var ex__36778__auto__ = e47856;
var statearr_47857_47869 = state_47839;
(statearr_47857_47869[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47870 = state_47839;
state_47839 = G__47870;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36775__auto__ = function(state_47839){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36775__auto____1.call(this,state_47839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36775__auto____0;
cljs$core$async$reduce_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36775__auto____1;
return cljs$core$async$reduce_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_47858 = f__36865__auto__.call(null);
(statearr_47858[(6)] = c__36864__auto__);

return statearr_47858;
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
return (function (state_47876){
var state_val_47877 = (state_47876[(1)]);
if((state_val_47877 === (1))){
var inst_47871 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47876__$1 = state_47876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47876__$1,(2),inst_47871);
} else {
if((state_val_47877 === (2))){
var inst_47873 = (state_47876[(2)]);
var inst_47874 = f__$1.call(null,inst_47873);
var state_47876__$1 = state_47876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47876__$1,inst_47874);
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
var statearr_47878 = [null,null,null,null,null,null,null];
(statearr_47878[(0)] = cljs$core$async$transduce_$_state_machine__36775__auto__);

(statearr_47878[(1)] = (1));

return statearr_47878;
});
var cljs$core$async$transduce_$_state_machine__36775__auto____1 = (function (state_47876){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47879){if((e47879 instanceof Object)){
var ex__36778__auto__ = e47879;
var statearr_47880_47882 = state_47876;
(statearr_47880_47882[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47883 = state_47876;
state_47876 = G__47883;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36775__auto__ = function(state_47876){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36775__auto____1.call(this,state_47876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36775__auto____0;
cljs$core$async$transduce_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36775__auto____1;
return cljs$core$async$transduce_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__,f__$1))
})();
var state__36866__auto__ = (function (){var statearr_47881 = f__36865__auto__.call(null);
(statearr_47881[(6)] = c__36864__auto__);

return statearr_47881;
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
var G__47885 = arguments.length;
switch (G__47885) {
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
return (function (state_47910){
var state_val_47911 = (state_47910[(1)]);
if((state_val_47911 === (7))){
var inst_47892 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47912_47933 = state_47910__$1;
(statearr_47912_47933[(2)] = inst_47892);

(statearr_47912_47933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (1))){
var inst_47886 = cljs.core.seq.call(null,coll);
var inst_47887 = inst_47886;
var state_47910__$1 = (function (){var statearr_47913 = state_47910;
(statearr_47913[(7)] = inst_47887);

return statearr_47913;
})();
var statearr_47914_47934 = state_47910__$1;
(statearr_47914_47934[(2)] = null);

(statearr_47914_47934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (4))){
var inst_47887 = (state_47910[(7)]);
var inst_47890 = cljs.core.first.call(null,inst_47887);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47910__$1,(7),ch,inst_47890);
} else {
if((state_val_47911 === (13))){
var inst_47904 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47915_47935 = state_47910__$1;
(statearr_47915_47935[(2)] = inst_47904);

(statearr_47915_47935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (6))){
var inst_47895 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
if(cljs.core.truth_(inst_47895)){
var statearr_47916_47936 = state_47910__$1;
(statearr_47916_47936[(1)] = (8));

} else {
var statearr_47917_47937 = state_47910__$1;
(statearr_47917_47937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (3))){
var inst_47908 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47910__$1,inst_47908);
} else {
if((state_val_47911 === (12))){
var state_47910__$1 = state_47910;
var statearr_47918_47938 = state_47910__$1;
(statearr_47918_47938[(2)] = null);

(statearr_47918_47938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (2))){
var inst_47887 = (state_47910[(7)]);
var state_47910__$1 = state_47910;
if(cljs.core.truth_(inst_47887)){
var statearr_47919_47939 = state_47910__$1;
(statearr_47919_47939[(1)] = (4));

} else {
var statearr_47920_47940 = state_47910__$1;
(statearr_47920_47940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (11))){
var inst_47901 = cljs.core.async.close_BANG_.call(null,ch);
var state_47910__$1 = state_47910;
var statearr_47921_47941 = state_47910__$1;
(statearr_47921_47941[(2)] = inst_47901);

(statearr_47921_47941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (9))){
var state_47910__$1 = state_47910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47922_47942 = state_47910__$1;
(statearr_47922_47942[(1)] = (11));

} else {
var statearr_47923_47943 = state_47910__$1;
(statearr_47923_47943[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (5))){
var inst_47887 = (state_47910[(7)]);
var state_47910__$1 = state_47910;
var statearr_47924_47944 = state_47910__$1;
(statearr_47924_47944[(2)] = inst_47887);

(statearr_47924_47944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (10))){
var inst_47906 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47925_47945 = state_47910__$1;
(statearr_47925_47945[(2)] = inst_47906);

(statearr_47925_47945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (8))){
var inst_47887 = (state_47910[(7)]);
var inst_47897 = cljs.core.next.call(null,inst_47887);
var inst_47887__$1 = inst_47897;
var state_47910__$1 = (function (){var statearr_47926 = state_47910;
(statearr_47926[(7)] = inst_47887__$1);

return statearr_47926;
})();
var statearr_47927_47946 = state_47910__$1;
(statearr_47927_47946[(2)] = null);

(statearr_47927_47946[(1)] = (2));


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
var statearr_47928 = [null,null,null,null,null,null,null,null];
(statearr_47928[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_47928[(1)] = (1));

return statearr_47928;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_47910){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_47910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e47929){if((e47929 instanceof Object)){
var ex__36778__auto__ = e47929;
var statearr_47930_47947 = state_47910;
(statearr_47930_47947[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47948 = state_47910;
state_47910 = G__47948;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_47910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_47910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_47931 = f__36865__auto__.call(null);
(statearr_47931[(6)] = c__36864__auto__);

return statearr_47931;
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
if(typeof cljs.core.async.t_cljs$core$async47949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47949 = (function (ch,cs,meta47950){
this.ch = ch;
this.cs = cs;
this.meta47950 = meta47950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47951,meta47950__$1){
var self__ = this;
var _47951__$1 = this;
return (new cljs.core.async.t_cljs$core$async47949(self__.ch,self__.cs,meta47950__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47951){
var self__ = this;
var _47951__$1 = this;
return self__.meta47950;
});})(cs))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47949.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47950","meta47950",1329986809,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47949";

cljs.core.async.t_cljs$core$async47949.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async47949");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47949 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47949(ch__$1,cs__$1,meta47950){
return (new cljs.core.async.t_cljs$core$async47949(ch__$1,cs__$1,meta47950));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47949(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36864__auto___48171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___48171,cs,m,dchan,dctr,done){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___48171,cs,m,dchan,dctr,done){
return (function (state_48086){
var state_val_48087 = (state_48086[(1)]);
if((state_val_48087 === (7))){
var inst_48082 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48088_48172 = state_48086__$1;
(statearr_48088_48172[(2)] = inst_48082);

(statearr_48088_48172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (20))){
var inst_47985 = (state_48086[(7)]);
var inst_47997 = cljs.core.first.call(null,inst_47985);
var inst_47998 = cljs.core.nth.call(null,inst_47997,(0),null);
var inst_47999 = cljs.core.nth.call(null,inst_47997,(1),null);
var state_48086__$1 = (function (){var statearr_48089 = state_48086;
(statearr_48089[(8)] = inst_47998);

return statearr_48089;
})();
if(cljs.core.truth_(inst_47999)){
var statearr_48090_48173 = state_48086__$1;
(statearr_48090_48173[(1)] = (22));

} else {
var statearr_48091_48174 = state_48086__$1;
(statearr_48091_48174[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (27))){
var inst_48034 = (state_48086[(9)]);
var inst_48029 = (state_48086[(10)]);
var inst_48027 = (state_48086[(11)]);
var inst_47954 = (state_48086[(12)]);
var inst_48034__$1 = cljs.core._nth.call(null,inst_48027,inst_48029);
var inst_48035 = cljs.core.async.put_BANG_.call(null,inst_48034__$1,inst_47954,done);
var state_48086__$1 = (function (){var statearr_48092 = state_48086;
(statearr_48092[(9)] = inst_48034__$1);

return statearr_48092;
})();
if(cljs.core.truth_(inst_48035)){
var statearr_48093_48175 = state_48086__$1;
(statearr_48093_48175[(1)] = (30));

} else {
var statearr_48094_48176 = state_48086__$1;
(statearr_48094_48176[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (1))){
var state_48086__$1 = state_48086;
var statearr_48095_48177 = state_48086__$1;
(statearr_48095_48177[(2)] = null);

(statearr_48095_48177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (24))){
var inst_47985 = (state_48086[(7)]);
var inst_48004 = (state_48086[(2)]);
var inst_48005 = cljs.core.next.call(null,inst_47985);
var inst_47963 = inst_48005;
var inst_47964 = null;
var inst_47965 = (0);
var inst_47966 = (0);
var state_48086__$1 = (function (){var statearr_48096 = state_48086;
(statearr_48096[(13)] = inst_47964);

(statearr_48096[(14)] = inst_47965);

(statearr_48096[(15)] = inst_47963);

(statearr_48096[(16)] = inst_48004);

(statearr_48096[(17)] = inst_47966);

return statearr_48096;
})();
var statearr_48097_48178 = state_48086__$1;
(statearr_48097_48178[(2)] = null);

(statearr_48097_48178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (39))){
var state_48086__$1 = state_48086;
var statearr_48101_48179 = state_48086__$1;
(statearr_48101_48179[(2)] = null);

(statearr_48101_48179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (4))){
var inst_47954 = (state_48086[(12)]);
var inst_47954__$1 = (state_48086[(2)]);
var inst_47955 = (inst_47954__$1 == null);
var state_48086__$1 = (function (){var statearr_48102 = state_48086;
(statearr_48102[(12)] = inst_47954__$1);

return statearr_48102;
})();
if(cljs.core.truth_(inst_47955)){
var statearr_48103_48180 = state_48086__$1;
(statearr_48103_48180[(1)] = (5));

} else {
var statearr_48104_48181 = state_48086__$1;
(statearr_48104_48181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (15))){
var inst_47964 = (state_48086[(13)]);
var inst_47965 = (state_48086[(14)]);
var inst_47963 = (state_48086[(15)]);
var inst_47966 = (state_48086[(17)]);
var inst_47981 = (state_48086[(2)]);
var inst_47982 = (inst_47966 + (1));
var tmp48098 = inst_47964;
var tmp48099 = inst_47965;
var tmp48100 = inst_47963;
var inst_47963__$1 = tmp48100;
var inst_47964__$1 = tmp48098;
var inst_47965__$1 = tmp48099;
var inst_47966__$1 = inst_47982;
var state_48086__$1 = (function (){var statearr_48105 = state_48086;
(statearr_48105[(13)] = inst_47964__$1);

(statearr_48105[(18)] = inst_47981);

(statearr_48105[(14)] = inst_47965__$1);

(statearr_48105[(15)] = inst_47963__$1);

(statearr_48105[(17)] = inst_47966__$1);

return statearr_48105;
})();
var statearr_48106_48182 = state_48086__$1;
(statearr_48106_48182[(2)] = null);

(statearr_48106_48182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (21))){
var inst_48008 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48110_48183 = state_48086__$1;
(statearr_48110_48183[(2)] = inst_48008);

(statearr_48110_48183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (31))){
var inst_48034 = (state_48086[(9)]);
var inst_48038 = done.call(null,null);
var inst_48039 = cljs.core.async.untap_STAR_.call(null,m,inst_48034);
var state_48086__$1 = (function (){var statearr_48111 = state_48086;
(statearr_48111[(19)] = inst_48038);

return statearr_48111;
})();
var statearr_48112_48184 = state_48086__$1;
(statearr_48112_48184[(2)] = inst_48039);

(statearr_48112_48184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (32))){
var inst_48029 = (state_48086[(10)]);
var inst_48027 = (state_48086[(11)]);
var inst_48028 = (state_48086[(20)]);
var inst_48026 = (state_48086[(21)]);
var inst_48041 = (state_48086[(2)]);
var inst_48042 = (inst_48029 + (1));
var tmp48107 = inst_48027;
var tmp48108 = inst_48028;
var tmp48109 = inst_48026;
var inst_48026__$1 = tmp48109;
var inst_48027__$1 = tmp48107;
var inst_48028__$1 = tmp48108;
var inst_48029__$1 = inst_48042;
var state_48086__$1 = (function (){var statearr_48113 = state_48086;
(statearr_48113[(10)] = inst_48029__$1);

(statearr_48113[(11)] = inst_48027__$1);

(statearr_48113[(20)] = inst_48028__$1);

(statearr_48113[(22)] = inst_48041);

(statearr_48113[(21)] = inst_48026__$1);

return statearr_48113;
})();
var statearr_48114_48185 = state_48086__$1;
(statearr_48114_48185[(2)] = null);

(statearr_48114_48185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (40))){
var inst_48054 = (state_48086[(23)]);
var inst_48058 = done.call(null,null);
var inst_48059 = cljs.core.async.untap_STAR_.call(null,m,inst_48054);
var state_48086__$1 = (function (){var statearr_48115 = state_48086;
(statearr_48115[(24)] = inst_48058);

return statearr_48115;
})();
var statearr_48116_48186 = state_48086__$1;
(statearr_48116_48186[(2)] = inst_48059);

(statearr_48116_48186[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (33))){
var inst_48045 = (state_48086[(25)]);
var inst_48047 = cljs.core.chunked_seq_QMARK_.call(null,inst_48045);
var state_48086__$1 = state_48086;
if(inst_48047){
var statearr_48117_48187 = state_48086__$1;
(statearr_48117_48187[(1)] = (36));

} else {
var statearr_48118_48188 = state_48086__$1;
(statearr_48118_48188[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (13))){
var inst_47975 = (state_48086[(26)]);
var inst_47978 = cljs.core.async.close_BANG_.call(null,inst_47975);
var state_48086__$1 = state_48086;
var statearr_48119_48189 = state_48086__$1;
(statearr_48119_48189[(2)] = inst_47978);

(statearr_48119_48189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (22))){
var inst_47998 = (state_48086[(8)]);
var inst_48001 = cljs.core.async.close_BANG_.call(null,inst_47998);
var state_48086__$1 = state_48086;
var statearr_48120_48190 = state_48086__$1;
(statearr_48120_48190[(2)] = inst_48001);

(statearr_48120_48190[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (36))){
var inst_48045 = (state_48086[(25)]);
var inst_48049 = cljs.core.chunk_first.call(null,inst_48045);
var inst_48050 = cljs.core.chunk_rest.call(null,inst_48045);
var inst_48051 = cljs.core.count.call(null,inst_48049);
var inst_48026 = inst_48050;
var inst_48027 = inst_48049;
var inst_48028 = inst_48051;
var inst_48029 = (0);
var state_48086__$1 = (function (){var statearr_48121 = state_48086;
(statearr_48121[(10)] = inst_48029);

(statearr_48121[(11)] = inst_48027);

(statearr_48121[(20)] = inst_48028);

(statearr_48121[(21)] = inst_48026);

return statearr_48121;
})();
var statearr_48122_48191 = state_48086__$1;
(statearr_48122_48191[(2)] = null);

(statearr_48122_48191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (41))){
var inst_48045 = (state_48086[(25)]);
var inst_48061 = (state_48086[(2)]);
var inst_48062 = cljs.core.next.call(null,inst_48045);
var inst_48026 = inst_48062;
var inst_48027 = null;
var inst_48028 = (0);
var inst_48029 = (0);
var state_48086__$1 = (function (){var statearr_48123 = state_48086;
(statearr_48123[(10)] = inst_48029);

(statearr_48123[(11)] = inst_48027);

(statearr_48123[(20)] = inst_48028);

(statearr_48123[(27)] = inst_48061);

(statearr_48123[(21)] = inst_48026);

return statearr_48123;
})();
var statearr_48124_48192 = state_48086__$1;
(statearr_48124_48192[(2)] = null);

(statearr_48124_48192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (43))){
var state_48086__$1 = state_48086;
var statearr_48125_48193 = state_48086__$1;
(statearr_48125_48193[(2)] = null);

(statearr_48125_48193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (29))){
var inst_48070 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48126_48194 = state_48086__$1;
(statearr_48126_48194[(2)] = inst_48070);

(statearr_48126_48194[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (44))){
var inst_48079 = (state_48086[(2)]);
var state_48086__$1 = (function (){var statearr_48127 = state_48086;
(statearr_48127[(28)] = inst_48079);

return statearr_48127;
})();
var statearr_48128_48195 = state_48086__$1;
(statearr_48128_48195[(2)] = null);

(statearr_48128_48195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (6))){
var inst_48018 = (state_48086[(29)]);
var inst_48017 = cljs.core.deref.call(null,cs);
var inst_48018__$1 = cljs.core.keys.call(null,inst_48017);
var inst_48019 = cljs.core.count.call(null,inst_48018__$1);
var inst_48020 = cljs.core.reset_BANG_.call(null,dctr,inst_48019);
var inst_48025 = cljs.core.seq.call(null,inst_48018__$1);
var inst_48026 = inst_48025;
var inst_48027 = null;
var inst_48028 = (0);
var inst_48029 = (0);
var state_48086__$1 = (function (){var statearr_48129 = state_48086;
(statearr_48129[(10)] = inst_48029);

(statearr_48129[(29)] = inst_48018__$1);

(statearr_48129[(11)] = inst_48027);

(statearr_48129[(20)] = inst_48028);

(statearr_48129[(21)] = inst_48026);

(statearr_48129[(30)] = inst_48020);

return statearr_48129;
})();
var statearr_48130_48196 = state_48086__$1;
(statearr_48130_48196[(2)] = null);

(statearr_48130_48196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (28))){
var inst_48045 = (state_48086[(25)]);
var inst_48026 = (state_48086[(21)]);
var inst_48045__$1 = cljs.core.seq.call(null,inst_48026);
var state_48086__$1 = (function (){var statearr_48131 = state_48086;
(statearr_48131[(25)] = inst_48045__$1);

return statearr_48131;
})();
if(inst_48045__$1){
var statearr_48132_48197 = state_48086__$1;
(statearr_48132_48197[(1)] = (33));

} else {
var statearr_48133_48198 = state_48086__$1;
(statearr_48133_48198[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (25))){
var inst_48029 = (state_48086[(10)]);
var inst_48028 = (state_48086[(20)]);
var inst_48031 = (inst_48029 < inst_48028);
var inst_48032 = inst_48031;
var state_48086__$1 = state_48086;
if(cljs.core.truth_(inst_48032)){
var statearr_48134_48199 = state_48086__$1;
(statearr_48134_48199[(1)] = (27));

} else {
var statearr_48135_48200 = state_48086__$1;
(statearr_48135_48200[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (34))){
var state_48086__$1 = state_48086;
var statearr_48136_48201 = state_48086__$1;
(statearr_48136_48201[(2)] = null);

(statearr_48136_48201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (17))){
var state_48086__$1 = state_48086;
var statearr_48137_48202 = state_48086__$1;
(statearr_48137_48202[(2)] = null);

(statearr_48137_48202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (3))){
var inst_48084 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48086__$1,inst_48084);
} else {
if((state_val_48087 === (12))){
var inst_48013 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48138_48203 = state_48086__$1;
(statearr_48138_48203[(2)] = inst_48013);

(statearr_48138_48203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (2))){
var state_48086__$1 = state_48086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48086__$1,(4),ch);
} else {
if((state_val_48087 === (23))){
var state_48086__$1 = state_48086;
var statearr_48139_48204 = state_48086__$1;
(statearr_48139_48204[(2)] = null);

(statearr_48139_48204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (35))){
var inst_48068 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48140_48205 = state_48086__$1;
(statearr_48140_48205[(2)] = inst_48068);

(statearr_48140_48205[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (19))){
var inst_47985 = (state_48086[(7)]);
var inst_47989 = cljs.core.chunk_first.call(null,inst_47985);
var inst_47990 = cljs.core.chunk_rest.call(null,inst_47985);
var inst_47991 = cljs.core.count.call(null,inst_47989);
var inst_47963 = inst_47990;
var inst_47964 = inst_47989;
var inst_47965 = inst_47991;
var inst_47966 = (0);
var state_48086__$1 = (function (){var statearr_48141 = state_48086;
(statearr_48141[(13)] = inst_47964);

(statearr_48141[(14)] = inst_47965);

(statearr_48141[(15)] = inst_47963);

(statearr_48141[(17)] = inst_47966);

return statearr_48141;
})();
var statearr_48142_48206 = state_48086__$1;
(statearr_48142_48206[(2)] = null);

(statearr_48142_48206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (11))){
var inst_47985 = (state_48086[(7)]);
var inst_47963 = (state_48086[(15)]);
var inst_47985__$1 = cljs.core.seq.call(null,inst_47963);
var state_48086__$1 = (function (){var statearr_48143 = state_48086;
(statearr_48143[(7)] = inst_47985__$1);

return statearr_48143;
})();
if(inst_47985__$1){
var statearr_48144_48207 = state_48086__$1;
(statearr_48144_48207[(1)] = (16));

} else {
var statearr_48145_48208 = state_48086__$1;
(statearr_48145_48208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (9))){
var inst_48015 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48146_48209 = state_48086__$1;
(statearr_48146_48209[(2)] = inst_48015);

(statearr_48146_48209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (5))){
var inst_47961 = cljs.core.deref.call(null,cs);
var inst_47962 = cljs.core.seq.call(null,inst_47961);
var inst_47963 = inst_47962;
var inst_47964 = null;
var inst_47965 = (0);
var inst_47966 = (0);
var state_48086__$1 = (function (){var statearr_48147 = state_48086;
(statearr_48147[(13)] = inst_47964);

(statearr_48147[(14)] = inst_47965);

(statearr_48147[(15)] = inst_47963);

(statearr_48147[(17)] = inst_47966);

return statearr_48147;
})();
var statearr_48148_48210 = state_48086__$1;
(statearr_48148_48210[(2)] = null);

(statearr_48148_48210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (14))){
var state_48086__$1 = state_48086;
var statearr_48149_48211 = state_48086__$1;
(statearr_48149_48211[(2)] = null);

(statearr_48149_48211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (45))){
var inst_48076 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48150_48212 = state_48086__$1;
(statearr_48150_48212[(2)] = inst_48076);

(statearr_48150_48212[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (26))){
var inst_48018 = (state_48086[(29)]);
var inst_48072 = (state_48086[(2)]);
var inst_48073 = cljs.core.seq.call(null,inst_48018);
var state_48086__$1 = (function (){var statearr_48151 = state_48086;
(statearr_48151[(31)] = inst_48072);

return statearr_48151;
})();
if(inst_48073){
var statearr_48152_48213 = state_48086__$1;
(statearr_48152_48213[(1)] = (42));

} else {
var statearr_48153_48214 = state_48086__$1;
(statearr_48153_48214[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (16))){
var inst_47985 = (state_48086[(7)]);
var inst_47987 = cljs.core.chunked_seq_QMARK_.call(null,inst_47985);
var state_48086__$1 = state_48086;
if(inst_47987){
var statearr_48154_48215 = state_48086__$1;
(statearr_48154_48215[(1)] = (19));

} else {
var statearr_48155_48216 = state_48086__$1;
(statearr_48155_48216[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (38))){
var inst_48065 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48156_48217 = state_48086__$1;
(statearr_48156_48217[(2)] = inst_48065);

(statearr_48156_48217[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (30))){
var state_48086__$1 = state_48086;
var statearr_48157_48218 = state_48086__$1;
(statearr_48157_48218[(2)] = null);

(statearr_48157_48218[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (10))){
var inst_47964 = (state_48086[(13)]);
var inst_47966 = (state_48086[(17)]);
var inst_47974 = cljs.core._nth.call(null,inst_47964,inst_47966);
var inst_47975 = cljs.core.nth.call(null,inst_47974,(0),null);
var inst_47976 = cljs.core.nth.call(null,inst_47974,(1),null);
var state_48086__$1 = (function (){var statearr_48158 = state_48086;
(statearr_48158[(26)] = inst_47975);

return statearr_48158;
})();
if(cljs.core.truth_(inst_47976)){
var statearr_48159_48219 = state_48086__$1;
(statearr_48159_48219[(1)] = (13));

} else {
var statearr_48160_48220 = state_48086__$1;
(statearr_48160_48220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (18))){
var inst_48011 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48161_48221 = state_48086__$1;
(statearr_48161_48221[(2)] = inst_48011);

(statearr_48161_48221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (42))){
var state_48086__$1 = state_48086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48086__$1,(45),dchan);
} else {
if((state_val_48087 === (37))){
var inst_48054 = (state_48086[(23)]);
var inst_47954 = (state_48086[(12)]);
var inst_48045 = (state_48086[(25)]);
var inst_48054__$1 = cljs.core.first.call(null,inst_48045);
var inst_48055 = cljs.core.async.put_BANG_.call(null,inst_48054__$1,inst_47954,done);
var state_48086__$1 = (function (){var statearr_48162 = state_48086;
(statearr_48162[(23)] = inst_48054__$1);

return statearr_48162;
})();
if(cljs.core.truth_(inst_48055)){
var statearr_48163_48222 = state_48086__$1;
(statearr_48163_48222[(1)] = (39));

} else {
var statearr_48164_48223 = state_48086__$1;
(statearr_48164_48223[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (8))){
var inst_47965 = (state_48086[(14)]);
var inst_47966 = (state_48086[(17)]);
var inst_47968 = (inst_47966 < inst_47965);
var inst_47969 = inst_47968;
var state_48086__$1 = state_48086;
if(cljs.core.truth_(inst_47969)){
var statearr_48165_48224 = state_48086__$1;
(statearr_48165_48224[(1)] = (10));

} else {
var statearr_48166_48225 = state_48086__$1;
(statearr_48166_48225[(1)] = (11));

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
});})(c__36864__auto___48171,cs,m,dchan,dctr,done))
;
return ((function (switch__36774__auto__,c__36864__auto___48171,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36775__auto__ = null;
var cljs$core$async$mult_$_state_machine__36775__auto____0 = (function (){
var statearr_48167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48167[(0)] = cljs$core$async$mult_$_state_machine__36775__auto__);

(statearr_48167[(1)] = (1));

return statearr_48167;
});
var cljs$core$async$mult_$_state_machine__36775__auto____1 = (function (state_48086){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_48086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e48168){if((e48168 instanceof Object)){
var ex__36778__auto__ = e48168;
var statearr_48169_48226 = state_48086;
(statearr_48169_48226[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48227 = state_48086;
state_48086 = G__48227;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36775__auto__ = function(state_48086){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36775__auto____1.call(this,state_48086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36775__auto____0;
cljs$core$async$mult_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36775__auto____1;
return cljs$core$async$mult_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___48171,cs,m,dchan,dctr,done))
})();
var state__36866__auto__ = (function (){var statearr_48170 = f__36865__auto__.call(null);
(statearr_48170[(6)] = c__36864__auto___48171);

return statearr_48170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___48171,cs,m,dchan,dctr,done))
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
var G__48229 = arguments.length;
switch (G__48229) {
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
var len__31507__auto___48241 = arguments.length;
var i__31508__auto___48242 = (0);
while(true){
if((i__31508__auto___48242 < len__31507__auto___48241)){
args__31514__auto__.push((arguments[i__31508__auto___48242]));

var G__48243 = (i__31508__auto___48242 + (1));
i__31508__auto___48242 = G__48243;
continue;
} else {
}
break;
}

var argseq__31515__auto__ = ((((3) < args__31514__auto__.length))?(new cljs.core.IndexedSeq(args__31514__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31515__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48235){
var map__48236 = p__48235;
var map__48236__$1 = ((((!((map__48236 == null)))?((((map__48236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48236):map__48236);
var opts = map__48236__$1;
var statearr_48238_48244 = state;
(statearr_48238_48244[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__48236,map__48236__$1,opts){
return (function (val){
var statearr_48239_48245 = state;
(statearr_48239_48245[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48236,map__48236__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_48240_48246 = state;
(statearr_48240_48246[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48231){
var G__48232 = cljs.core.first.call(null,seq48231);
var seq48231__$1 = cljs.core.next.call(null,seq48231);
var G__48233 = cljs.core.first.call(null,seq48231__$1);
var seq48231__$2 = cljs.core.next.call(null,seq48231__$1);
var G__48234 = cljs.core.first.call(null,seq48231__$2);
var seq48231__$3 = cljs.core.next.call(null,seq48231__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48232,G__48233,G__48234,seq48231__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48247 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48248){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48248 = meta48248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48249,meta48248__$1){
var self__ = this;
var _48249__$1 = this;
return (new cljs.core.async.t_cljs$core$async48247(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48248__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48249){
var self__ = this;
var _48249__$1 = this;
return self__.meta48248;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48247.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async48247.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48248","meta48248",-1579486362,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48247";

cljs.core.async.t_cljs$core$async48247.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async48247");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48247 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48247(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48248){
return (new cljs.core.async.t_cljs$core$async48247(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48248));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48247(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36864__auto___48411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___48411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___48411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48351){
var state_val_48352 = (state_48351[(1)]);
if((state_val_48352 === (7))){
var inst_48266 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48353_48412 = state_48351__$1;
(statearr_48353_48412[(2)] = inst_48266);

(statearr_48353_48412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (20))){
var inst_48278 = (state_48351[(7)]);
var state_48351__$1 = state_48351;
var statearr_48354_48413 = state_48351__$1;
(statearr_48354_48413[(2)] = inst_48278);

(statearr_48354_48413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (27))){
var state_48351__$1 = state_48351;
var statearr_48355_48414 = state_48351__$1;
(statearr_48355_48414[(2)] = null);

(statearr_48355_48414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (1))){
var inst_48253 = (state_48351[(8)]);
var inst_48253__$1 = calc_state.call(null);
var inst_48255 = (inst_48253__$1 == null);
var inst_48256 = cljs.core.not.call(null,inst_48255);
var state_48351__$1 = (function (){var statearr_48356 = state_48351;
(statearr_48356[(8)] = inst_48253__$1);

return statearr_48356;
})();
if(inst_48256){
var statearr_48357_48415 = state_48351__$1;
(statearr_48357_48415[(1)] = (2));

} else {
var statearr_48358_48416 = state_48351__$1;
(statearr_48358_48416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (24))){
var inst_48325 = (state_48351[(9)]);
var inst_48302 = (state_48351[(10)]);
var inst_48311 = (state_48351[(11)]);
var inst_48325__$1 = inst_48302.call(null,inst_48311);
var state_48351__$1 = (function (){var statearr_48359 = state_48351;
(statearr_48359[(9)] = inst_48325__$1);

return statearr_48359;
})();
if(cljs.core.truth_(inst_48325__$1)){
var statearr_48360_48417 = state_48351__$1;
(statearr_48360_48417[(1)] = (29));

} else {
var statearr_48361_48418 = state_48351__$1;
(statearr_48361_48418[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (4))){
var inst_48269 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48269)){
var statearr_48362_48419 = state_48351__$1;
(statearr_48362_48419[(1)] = (8));

} else {
var statearr_48363_48420 = state_48351__$1;
(statearr_48363_48420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (15))){
var inst_48296 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48296)){
var statearr_48364_48421 = state_48351__$1;
(statearr_48364_48421[(1)] = (19));

} else {
var statearr_48365_48422 = state_48351__$1;
(statearr_48365_48422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (21))){
var inst_48301 = (state_48351[(12)]);
var inst_48301__$1 = (state_48351[(2)]);
var inst_48302 = cljs.core.get.call(null,inst_48301__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48303 = cljs.core.get.call(null,inst_48301__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48304 = cljs.core.get.call(null,inst_48301__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48351__$1 = (function (){var statearr_48366 = state_48351;
(statearr_48366[(13)] = inst_48303);

(statearr_48366[(12)] = inst_48301__$1);

(statearr_48366[(10)] = inst_48302);

return statearr_48366;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48351__$1,(22),inst_48304);
} else {
if((state_val_48352 === (31))){
var inst_48333 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48333)){
var statearr_48367_48423 = state_48351__$1;
(statearr_48367_48423[(1)] = (32));

} else {
var statearr_48368_48424 = state_48351__$1;
(statearr_48368_48424[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (32))){
var inst_48310 = (state_48351[(14)]);
var state_48351__$1 = state_48351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48351__$1,(35),out,inst_48310);
} else {
if((state_val_48352 === (33))){
var inst_48301 = (state_48351[(12)]);
var inst_48278 = inst_48301;
var state_48351__$1 = (function (){var statearr_48369 = state_48351;
(statearr_48369[(7)] = inst_48278);

return statearr_48369;
})();
var statearr_48370_48425 = state_48351__$1;
(statearr_48370_48425[(2)] = null);

(statearr_48370_48425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (13))){
var inst_48278 = (state_48351[(7)]);
var inst_48285 = inst_48278.cljs$lang$protocol_mask$partition0$;
var inst_48286 = (inst_48285 & (64));
var inst_48287 = inst_48278.cljs$core$ISeq$;
var inst_48288 = (cljs.core.PROTOCOL_SENTINEL === inst_48287);
var inst_48289 = (inst_48286) || (inst_48288);
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48289)){
var statearr_48371_48426 = state_48351__$1;
(statearr_48371_48426[(1)] = (16));

} else {
var statearr_48372_48427 = state_48351__$1;
(statearr_48372_48427[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (22))){
var inst_48311 = (state_48351[(11)]);
var inst_48310 = (state_48351[(14)]);
var inst_48309 = (state_48351[(2)]);
var inst_48310__$1 = cljs.core.nth.call(null,inst_48309,(0),null);
var inst_48311__$1 = cljs.core.nth.call(null,inst_48309,(1),null);
var inst_48312 = (inst_48310__$1 == null);
var inst_48313 = cljs.core._EQ_.call(null,inst_48311__$1,change);
var inst_48314 = (inst_48312) || (inst_48313);
var state_48351__$1 = (function (){var statearr_48373 = state_48351;
(statearr_48373[(11)] = inst_48311__$1);

(statearr_48373[(14)] = inst_48310__$1);

return statearr_48373;
})();
if(cljs.core.truth_(inst_48314)){
var statearr_48374_48428 = state_48351__$1;
(statearr_48374_48428[(1)] = (23));

} else {
var statearr_48375_48429 = state_48351__$1;
(statearr_48375_48429[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (36))){
var inst_48301 = (state_48351[(12)]);
var inst_48278 = inst_48301;
var state_48351__$1 = (function (){var statearr_48376 = state_48351;
(statearr_48376[(7)] = inst_48278);

return statearr_48376;
})();
var statearr_48377_48430 = state_48351__$1;
(statearr_48377_48430[(2)] = null);

(statearr_48377_48430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (29))){
var inst_48325 = (state_48351[(9)]);
var state_48351__$1 = state_48351;
var statearr_48378_48431 = state_48351__$1;
(statearr_48378_48431[(2)] = inst_48325);

(statearr_48378_48431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (6))){
var state_48351__$1 = state_48351;
var statearr_48379_48432 = state_48351__$1;
(statearr_48379_48432[(2)] = false);

(statearr_48379_48432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (28))){
var inst_48321 = (state_48351[(2)]);
var inst_48322 = calc_state.call(null);
var inst_48278 = inst_48322;
var state_48351__$1 = (function (){var statearr_48380 = state_48351;
(statearr_48380[(15)] = inst_48321);

(statearr_48380[(7)] = inst_48278);

return statearr_48380;
})();
var statearr_48381_48433 = state_48351__$1;
(statearr_48381_48433[(2)] = null);

(statearr_48381_48433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (25))){
var inst_48347 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48382_48434 = state_48351__$1;
(statearr_48382_48434[(2)] = inst_48347);

(statearr_48382_48434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (34))){
var inst_48345 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48383_48435 = state_48351__$1;
(statearr_48383_48435[(2)] = inst_48345);

(statearr_48383_48435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (17))){
var state_48351__$1 = state_48351;
var statearr_48384_48436 = state_48351__$1;
(statearr_48384_48436[(2)] = false);

(statearr_48384_48436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (3))){
var state_48351__$1 = state_48351;
var statearr_48385_48437 = state_48351__$1;
(statearr_48385_48437[(2)] = false);

(statearr_48385_48437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (12))){
var inst_48349 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48351__$1,inst_48349);
} else {
if((state_val_48352 === (2))){
var inst_48253 = (state_48351[(8)]);
var inst_48258 = inst_48253.cljs$lang$protocol_mask$partition0$;
var inst_48259 = (inst_48258 & (64));
var inst_48260 = inst_48253.cljs$core$ISeq$;
var inst_48261 = (cljs.core.PROTOCOL_SENTINEL === inst_48260);
var inst_48262 = (inst_48259) || (inst_48261);
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48262)){
var statearr_48386_48438 = state_48351__$1;
(statearr_48386_48438[(1)] = (5));

} else {
var statearr_48387_48439 = state_48351__$1;
(statearr_48387_48439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (23))){
var inst_48310 = (state_48351[(14)]);
var inst_48316 = (inst_48310 == null);
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48316)){
var statearr_48388_48440 = state_48351__$1;
(statearr_48388_48440[(1)] = (26));

} else {
var statearr_48389_48441 = state_48351__$1;
(statearr_48389_48441[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (35))){
var inst_48336 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48336)){
var statearr_48390_48442 = state_48351__$1;
(statearr_48390_48442[(1)] = (36));

} else {
var statearr_48391_48443 = state_48351__$1;
(statearr_48391_48443[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (19))){
var inst_48278 = (state_48351[(7)]);
var inst_48298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48278);
var state_48351__$1 = state_48351;
var statearr_48392_48444 = state_48351__$1;
(statearr_48392_48444[(2)] = inst_48298);

(statearr_48392_48444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (11))){
var inst_48278 = (state_48351[(7)]);
var inst_48282 = (inst_48278 == null);
var inst_48283 = cljs.core.not.call(null,inst_48282);
var state_48351__$1 = state_48351;
if(inst_48283){
var statearr_48393_48445 = state_48351__$1;
(statearr_48393_48445[(1)] = (13));

} else {
var statearr_48394_48446 = state_48351__$1;
(statearr_48394_48446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (9))){
var inst_48253 = (state_48351[(8)]);
var state_48351__$1 = state_48351;
var statearr_48395_48447 = state_48351__$1;
(statearr_48395_48447[(2)] = inst_48253);

(statearr_48395_48447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (5))){
var state_48351__$1 = state_48351;
var statearr_48396_48448 = state_48351__$1;
(statearr_48396_48448[(2)] = true);

(statearr_48396_48448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (14))){
var state_48351__$1 = state_48351;
var statearr_48397_48449 = state_48351__$1;
(statearr_48397_48449[(2)] = false);

(statearr_48397_48449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (26))){
var inst_48311 = (state_48351[(11)]);
var inst_48318 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48311);
var state_48351__$1 = state_48351;
var statearr_48398_48450 = state_48351__$1;
(statearr_48398_48450[(2)] = inst_48318);

(statearr_48398_48450[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (16))){
var state_48351__$1 = state_48351;
var statearr_48399_48451 = state_48351__$1;
(statearr_48399_48451[(2)] = true);

(statearr_48399_48451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (38))){
var inst_48341 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48400_48452 = state_48351__$1;
(statearr_48400_48452[(2)] = inst_48341);

(statearr_48400_48452[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (30))){
var inst_48303 = (state_48351[(13)]);
var inst_48302 = (state_48351[(10)]);
var inst_48311 = (state_48351[(11)]);
var inst_48328 = cljs.core.empty_QMARK_.call(null,inst_48302);
var inst_48329 = inst_48303.call(null,inst_48311);
var inst_48330 = cljs.core.not.call(null,inst_48329);
var inst_48331 = (inst_48328) && (inst_48330);
var state_48351__$1 = state_48351;
var statearr_48401_48453 = state_48351__$1;
(statearr_48401_48453[(2)] = inst_48331);

(statearr_48401_48453[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (10))){
var inst_48253 = (state_48351[(8)]);
var inst_48274 = (state_48351[(2)]);
var inst_48275 = cljs.core.get.call(null,inst_48274,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48276 = cljs.core.get.call(null,inst_48274,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48277 = cljs.core.get.call(null,inst_48274,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48278 = inst_48253;
var state_48351__$1 = (function (){var statearr_48402 = state_48351;
(statearr_48402[(16)] = inst_48275);

(statearr_48402[(17)] = inst_48277);

(statearr_48402[(18)] = inst_48276);

(statearr_48402[(7)] = inst_48278);

return statearr_48402;
})();
var statearr_48403_48454 = state_48351__$1;
(statearr_48403_48454[(2)] = null);

(statearr_48403_48454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (18))){
var inst_48293 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48404_48455 = state_48351__$1;
(statearr_48404_48455[(2)] = inst_48293);

(statearr_48404_48455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (37))){
var state_48351__$1 = state_48351;
var statearr_48405_48456 = state_48351__$1;
(statearr_48405_48456[(2)] = null);

(statearr_48405_48456[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (8))){
var inst_48253 = (state_48351[(8)]);
var inst_48271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48253);
var state_48351__$1 = state_48351;
var statearr_48406_48457 = state_48351__$1;
(statearr_48406_48457[(2)] = inst_48271);

(statearr_48406_48457[(1)] = (10));


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
});})(c__36864__auto___48411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36774__auto__,c__36864__auto___48411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36775__auto__ = null;
var cljs$core$async$mix_$_state_machine__36775__auto____0 = (function (){
var statearr_48407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48407[(0)] = cljs$core$async$mix_$_state_machine__36775__auto__);

(statearr_48407[(1)] = (1));

return statearr_48407;
});
var cljs$core$async$mix_$_state_machine__36775__auto____1 = (function (state_48351){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_48351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e48408){if((e48408 instanceof Object)){
var ex__36778__auto__ = e48408;
var statearr_48409_48458 = state_48351;
(statearr_48409_48458[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48459 = state_48351;
state_48351 = G__48459;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36775__auto__ = function(state_48351){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36775__auto____1.call(this,state_48351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36775__auto____0;
cljs$core$async$mix_$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36775__auto____1;
return cljs$core$async$mix_$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___48411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36866__auto__ = (function (){var statearr_48410 = f__36865__auto__.call(null);
(statearr_48410[(6)] = c__36864__auto___48411);

return statearr_48410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___48411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__48461 = arguments.length;
switch (G__48461) {
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
var G__48465 = arguments.length;
switch (G__48465) {
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
return (function (p1__48463_SHARP_){
if(cljs.core.truth_(p1__48463_SHARP_.call(null,topic))){
return p1__48463_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48463_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30228__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48466 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48467){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48467 = meta48467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48468,meta48467__$1){
var self__ = this;
var _48468__$1 = this;
return (new cljs.core.async.t_cljs$core$async48466(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48467__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48468){
var self__ = this;
var _48468__$1 = this;
return self__.meta48467;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48466.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48467","meta48467",1260594240,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48466";

cljs.core.async.t_cljs$core$async48466.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async48466");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48466 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48466(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48467){
return (new cljs.core.async.t_cljs$core$async48466(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48467));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48466(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36864__auto___48586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___48586,mults,ensure_mult,p){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___48586,mults,ensure_mult,p){
return (function (state_48540){
var state_val_48541 = (state_48540[(1)]);
if((state_val_48541 === (7))){
var inst_48536 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48542_48587 = state_48540__$1;
(statearr_48542_48587[(2)] = inst_48536);

(statearr_48542_48587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (20))){
var state_48540__$1 = state_48540;
var statearr_48543_48588 = state_48540__$1;
(statearr_48543_48588[(2)] = null);

(statearr_48543_48588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (1))){
var state_48540__$1 = state_48540;
var statearr_48544_48589 = state_48540__$1;
(statearr_48544_48589[(2)] = null);

(statearr_48544_48589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (24))){
var inst_48519 = (state_48540[(7)]);
var inst_48528 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48519);
var state_48540__$1 = state_48540;
var statearr_48545_48590 = state_48540__$1;
(statearr_48545_48590[(2)] = inst_48528);

(statearr_48545_48590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (4))){
var inst_48471 = (state_48540[(8)]);
var inst_48471__$1 = (state_48540[(2)]);
var inst_48472 = (inst_48471__$1 == null);
var state_48540__$1 = (function (){var statearr_48546 = state_48540;
(statearr_48546[(8)] = inst_48471__$1);

return statearr_48546;
})();
if(cljs.core.truth_(inst_48472)){
var statearr_48547_48591 = state_48540__$1;
(statearr_48547_48591[(1)] = (5));

} else {
var statearr_48548_48592 = state_48540__$1;
(statearr_48548_48592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (15))){
var inst_48513 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48549_48593 = state_48540__$1;
(statearr_48549_48593[(2)] = inst_48513);

(statearr_48549_48593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (21))){
var inst_48533 = (state_48540[(2)]);
var state_48540__$1 = (function (){var statearr_48550 = state_48540;
(statearr_48550[(9)] = inst_48533);

return statearr_48550;
})();
var statearr_48551_48594 = state_48540__$1;
(statearr_48551_48594[(2)] = null);

(statearr_48551_48594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (13))){
var inst_48495 = (state_48540[(10)]);
var inst_48497 = cljs.core.chunked_seq_QMARK_.call(null,inst_48495);
var state_48540__$1 = state_48540;
if(inst_48497){
var statearr_48552_48595 = state_48540__$1;
(statearr_48552_48595[(1)] = (16));

} else {
var statearr_48553_48596 = state_48540__$1;
(statearr_48553_48596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (22))){
var inst_48525 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
if(cljs.core.truth_(inst_48525)){
var statearr_48554_48597 = state_48540__$1;
(statearr_48554_48597[(1)] = (23));

} else {
var statearr_48555_48598 = state_48540__$1;
(statearr_48555_48598[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (6))){
var inst_48519 = (state_48540[(7)]);
var inst_48521 = (state_48540[(11)]);
var inst_48471 = (state_48540[(8)]);
var inst_48519__$1 = topic_fn.call(null,inst_48471);
var inst_48520 = cljs.core.deref.call(null,mults);
var inst_48521__$1 = cljs.core.get.call(null,inst_48520,inst_48519__$1);
var state_48540__$1 = (function (){var statearr_48556 = state_48540;
(statearr_48556[(7)] = inst_48519__$1);

(statearr_48556[(11)] = inst_48521__$1);

return statearr_48556;
})();
if(cljs.core.truth_(inst_48521__$1)){
var statearr_48557_48599 = state_48540__$1;
(statearr_48557_48599[(1)] = (19));

} else {
var statearr_48558_48600 = state_48540__$1;
(statearr_48558_48600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (25))){
var inst_48530 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48559_48601 = state_48540__$1;
(statearr_48559_48601[(2)] = inst_48530);

(statearr_48559_48601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (17))){
var inst_48495 = (state_48540[(10)]);
var inst_48504 = cljs.core.first.call(null,inst_48495);
var inst_48505 = cljs.core.async.muxch_STAR_.call(null,inst_48504);
var inst_48506 = cljs.core.async.close_BANG_.call(null,inst_48505);
var inst_48507 = cljs.core.next.call(null,inst_48495);
var inst_48481 = inst_48507;
var inst_48482 = null;
var inst_48483 = (0);
var inst_48484 = (0);
var state_48540__$1 = (function (){var statearr_48560 = state_48540;
(statearr_48560[(12)] = inst_48506);

(statearr_48560[(13)] = inst_48481);

(statearr_48560[(14)] = inst_48483);

(statearr_48560[(15)] = inst_48482);

(statearr_48560[(16)] = inst_48484);

return statearr_48560;
})();
var statearr_48561_48602 = state_48540__$1;
(statearr_48561_48602[(2)] = null);

(statearr_48561_48602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (3))){
var inst_48538 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48540__$1,inst_48538);
} else {
if((state_val_48541 === (12))){
var inst_48515 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48562_48603 = state_48540__$1;
(statearr_48562_48603[(2)] = inst_48515);

(statearr_48562_48603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (2))){
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48540__$1,(4),ch);
} else {
if((state_val_48541 === (23))){
var state_48540__$1 = state_48540;
var statearr_48563_48604 = state_48540__$1;
(statearr_48563_48604[(2)] = null);

(statearr_48563_48604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (19))){
var inst_48521 = (state_48540[(11)]);
var inst_48471 = (state_48540[(8)]);
var inst_48523 = cljs.core.async.muxch_STAR_.call(null,inst_48521);
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48540__$1,(22),inst_48523,inst_48471);
} else {
if((state_val_48541 === (11))){
var inst_48495 = (state_48540[(10)]);
var inst_48481 = (state_48540[(13)]);
var inst_48495__$1 = cljs.core.seq.call(null,inst_48481);
var state_48540__$1 = (function (){var statearr_48564 = state_48540;
(statearr_48564[(10)] = inst_48495__$1);

return statearr_48564;
})();
if(inst_48495__$1){
var statearr_48565_48605 = state_48540__$1;
(statearr_48565_48605[(1)] = (13));

} else {
var statearr_48566_48606 = state_48540__$1;
(statearr_48566_48606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (9))){
var inst_48517 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48567_48607 = state_48540__$1;
(statearr_48567_48607[(2)] = inst_48517);

(statearr_48567_48607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (5))){
var inst_48478 = cljs.core.deref.call(null,mults);
var inst_48479 = cljs.core.vals.call(null,inst_48478);
var inst_48480 = cljs.core.seq.call(null,inst_48479);
var inst_48481 = inst_48480;
var inst_48482 = null;
var inst_48483 = (0);
var inst_48484 = (0);
var state_48540__$1 = (function (){var statearr_48568 = state_48540;
(statearr_48568[(13)] = inst_48481);

(statearr_48568[(14)] = inst_48483);

(statearr_48568[(15)] = inst_48482);

(statearr_48568[(16)] = inst_48484);

return statearr_48568;
})();
var statearr_48569_48608 = state_48540__$1;
(statearr_48569_48608[(2)] = null);

(statearr_48569_48608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (14))){
var state_48540__$1 = state_48540;
var statearr_48573_48609 = state_48540__$1;
(statearr_48573_48609[(2)] = null);

(statearr_48573_48609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (16))){
var inst_48495 = (state_48540[(10)]);
var inst_48499 = cljs.core.chunk_first.call(null,inst_48495);
var inst_48500 = cljs.core.chunk_rest.call(null,inst_48495);
var inst_48501 = cljs.core.count.call(null,inst_48499);
var inst_48481 = inst_48500;
var inst_48482 = inst_48499;
var inst_48483 = inst_48501;
var inst_48484 = (0);
var state_48540__$1 = (function (){var statearr_48574 = state_48540;
(statearr_48574[(13)] = inst_48481);

(statearr_48574[(14)] = inst_48483);

(statearr_48574[(15)] = inst_48482);

(statearr_48574[(16)] = inst_48484);

return statearr_48574;
})();
var statearr_48575_48610 = state_48540__$1;
(statearr_48575_48610[(2)] = null);

(statearr_48575_48610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (10))){
var inst_48481 = (state_48540[(13)]);
var inst_48483 = (state_48540[(14)]);
var inst_48482 = (state_48540[(15)]);
var inst_48484 = (state_48540[(16)]);
var inst_48489 = cljs.core._nth.call(null,inst_48482,inst_48484);
var inst_48490 = cljs.core.async.muxch_STAR_.call(null,inst_48489);
var inst_48491 = cljs.core.async.close_BANG_.call(null,inst_48490);
var inst_48492 = (inst_48484 + (1));
var tmp48570 = inst_48481;
var tmp48571 = inst_48483;
var tmp48572 = inst_48482;
var inst_48481__$1 = tmp48570;
var inst_48482__$1 = tmp48572;
var inst_48483__$1 = tmp48571;
var inst_48484__$1 = inst_48492;
var state_48540__$1 = (function (){var statearr_48576 = state_48540;
(statearr_48576[(17)] = inst_48491);

(statearr_48576[(13)] = inst_48481__$1);

(statearr_48576[(14)] = inst_48483__$1);

(statearr_48576[(15)] = inst_48482__$1);

(statearr_48576[(16)] = inst_48484__$1);

return statearr_48576;
})();
var statearr_48577_48611 = state_48540__$1;
(statearr_48577_48611[(2)] = null);

(statearr_48577_48611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (18))){
var inst_48510 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48578_48612 = state_48540__$1;
(statearr_48578_48612[(2)] = inst_48510);

(statearr_48578_48612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (8))){
var inst_48483 = (state_48540[(14)]);
var inst_48484 = (state_48540[(16)]);
var inst_48486 = (inst_48484 < inst_48483);
var inst_48487 = inst_48486;
var state_48540__$1 = state_48540;
if(cljs.core.truth_(inst_48487)){
var statearr_48579_48613 = state_48540__$1;
(statearr_48579_48613[(1)] = (10));

} else {
var statearr_48580_48614 = state_48540__$1;
(statearr_48580_48614[(1)] = (11));

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
});})(c__36864__auto___48586,mults,ensure_mult,p))
;
return ((function (switch__36774__auto__,c__36864__auto___48586,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_48581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48581[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_48581[(1)] = (1));

return statearr_48581;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_48540){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_48540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e48582){if((e48582 instanceof Object)){
var ex__36778__auto__ = e48582;
var statearr_48583_48615 = state_48540;
(statearr_48583_48615[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48616 = state_48540;
state_48540 = G__48616;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_48540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_48540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___48586,mults,ensure_mult,p))
})();
var state__36866__auto__ = (function (){var statearr_48584 = f__36865__auto__.call(null);
(statearr_48584[(6)] = c__36864__auto___48586);

return statearr_48584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___48586,mults,ensure_mult,p))
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
var G__48618 = arguments.length;
switch (G__48618) {
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
var G__48621 = arguments.length;
switch (G__48621) {
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
var G__48624 = arguments.length;
switch (G__48624) {
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
var c__36864__auto___48691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___48691,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___48691,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48663){
var state_val_48664 = (state_48663[(1)]);
if((state_val_48664 === (7))){
var state_48663__$1 = state_48663;
var statearr_48665_48692 = state_48663__$1;
(statearr_48665_48692[(2)] = null);

(statearr_48665_48692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (1))){
var state_48663__$1 = state_48663;
var statearr_48666_48693 = state_48663__$1;
(statearr_48666_48693[(2)] = null);

(statearr_48666_48693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (4))){
var inst_48627 = (state_48663[(7)]);
var inst_48629 = (inst_48627 < cnt);
var state_48663__$1 = state_48663;
if(cljs.core.truth_(inst_48629)){
var statearr_48667_48694 = state_48663__$1;
(statearr_48667_48694[(1)] = (6));

} else {
var statearr_48668_48695 = state_48663__$1;
(statearr_48668_48695[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (15))){
var inst_48659 = (state_48663[(2)]);
var state_48663__$1 = state_48663;
var statearr_48669_48696 = state_48663__$1;
(statearr_48669_48696[(2)] = inst_48659);

(statearr_48669_48696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (13))){
var inst_48652 = cljs.core.async.close_BANG_.call(null,out);
var state_48663__$1 = state_48663;
var statearr_48670_48697 = state_48663__$1;
(statearr_48670_48697[(2)] = inst_48652);

(statearr_48670_48697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (6))){
var state_48663__$1 = state_48663;
var statearr_48671_48698 = state_48663__$1;
(statearr_48671_48698[(2)] = null);

(statearr_48671_48698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (3))){
var inst_48661 = (state_48663[(2)]);
var state_48663__$1 = state_48663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48663__$1,inst_48661);
} else {
if((state_val_48664 === (12))){
var inst_48649 = (state_48663[(8)]);
var inst_48649__$1 = (state_48663[(2)]);
var inst_48650 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48649__$1);
var state_48663__$1 = (function (){var statearr_48672 = state_48663;
(statearr_48672[(8)] = inst_48649__$1);

return statearr_48672;
})();
if(cljs.core.truth_(inst_48650)){
var statearr_48673_48699 = state_48663__$1;
(statearr_48673_48699[(1)] = (13));

} else {
var statearr_48674_48700 = state_48663__$1;
(statearr_48674_48700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (2))){
var inst_48626 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48627 = (0);
var state_48663__$1 = (function (){var statearr_48675 = state_48663;
(statearr_48675[(9)] = inst_48626);

(statearr_48675[(7)] = inst_48627);

return statearr_48675;
})();
var statearr_48676_48701 = state_48663__$1;
(statearr_48676_48701[(2)] = null);

(statearr_48676_48701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (11))){
var inst_48627 = (state_48663[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48663,(10),Object,null,(9));
var inst_48636 = chs__$1.call(null,inst_48627);
var inst_48637 = done.call(null,inst_48627);
var inst_48638 = cljs.core.async.take_BANG_.call(null,inst_48636,inst_48637);
var state_48663__$1 = state_48663;
var statearr_48677_48702 = state_48663__$1;
(statearr_48677_48702[(2)] = inst_48638);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48663__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (9))){
var inst_48627 = (state_48663[(7)]);
var inst_48640 = (state_48663[(2)]);
var inst_48641 = (inst_48627 + (1));
var inst_48627__$1 = inst_48641;
var state_48663__$1 = (function (){var statearr_48678 = state_48663;
(statearr_48678[(10)] = inst_48640);

(statearr_48678[(7)] = inst_48627__$1);

return statearr_48678;
})();
var statearr_48679_48703 = state_48663__$1;
(statearr_48679_48703[(2)] = null);

(statearr_48679_48703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (5))){
var inst_48647 = (state_48663[(2)]);
var state_48663__$1 = (function (){var statearr_48680 = state_48663;
(statearr_48680[(11)] = inst_48647);

return statearr_48680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48663__$1,(12),dchan);
} else {
if((state_val_48664 === (14))){
var inst_48649 = (state_48663[(8)]);
var inst_48654 = cljs.core.apply.call(null,f,inst_48649);
var state_48663__$1 = state_48663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48663__$1,(16),out,inst_48654);
} else {
if((state_val_48664 === (16))){
var inst_48656 = (state_48663[(2)]);
var state_48663__$1 = (function (){var statearr_48681 = state_48663;
(statearr_48681[(12)] = inst_48656);

return statearr_48681;
})();
var statearr_48682_48704 = state_48663__$1;
(statearr_48682_48704[(2)] = null);

(statearr_48682_48704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (10))){
var inst_48631 = (state_48663[(2)]);
var inst_48632 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48663__$1 = (function (){var statearr_48683 = state_48663;
(statearr_48683[(13)] = inst_48631);

return statearr_48683;
})();
var statearr_48684_48705 = state_48663__$1;
(statearr_48684_48705[(2)] = inst_48632);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48663__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48664 === (8))){
var inst_48645 = (state_48663[(2)]);
var state_48663__$1 = state_48663;
var statearr_48685_48706 = state_48663__$1;
(statearr_48685_48706[(2)] = inst_48645);

(statearr_48685_48706[(1)] = (5));


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
});})(c__36864__auto___48691,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36774__auto__,c__36864__auto___48691,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_48686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48686[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_48686[(1)] = (1));

return statearr_48686;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_48663){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_48663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e48687){if((e48687 instanceof Object)){
var ex__36778__auto__ = e48687;
var statearr_48688_48707 = state_48663;
(statearr_48688_48707[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48708 = state_48663;
state_48663 = G__48708;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_48663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_48663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___48691,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36866__auto__ = (function (){var statearr_48689 = f__36865__auto__.call(null);
(statearr_48689[(6)] = c__36864__auto___48691);

return statearr_48689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___48691,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48711 = arguments.length;
switch (G__48711) {
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
var c__36864__auto___48765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___48765,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___48765,out){
return (function (state_48743){
var state_val_48744 = (state_48743[(1)]);
if((state_val_48744 === (7))){
var inst_48722 = (state_48743[(7)]);
var inst_48723 = (state_48743[(8)]);
var inst_48722__$1 = (state_48743[(2)]);
var inst_48723__$1 = cljs.core.nth.call(null,inst_48722__$1,(0),null);
var inst_48724 = cljs.core.nth.call(null,inst_48722__$1,(1),null);
var inst_48725 = (inst_48723__$1 == null);
var state_48743__$1 = (function (){var statearr_48745 = state_48743;
(statearr_48745[(7)] = inst_48722__$1);

(statearr_48745[(8)] = inst_48723__$1);

(statearr_48745[(9)] = inst_48724);

return statearr_48745;
})();
if(cljs.core.truth_(inst_48725)){
var statearr_48746_48766 = state_48743__$1;
(statearr_48746_48766[(1)] = (8));

} else {
var statearr_48747_48767 = state_48743__$1;
(statearr_48747_48767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48744 === (1))){
var inst_48712 = cljs.core.vec.call(null,chs);
var inst_48713 = inst_48712;
var state_48743__$1 = (function (){var statearr_48748 = state_48743;
(statearr_48748[(10)] = inst_48713);

return statearr_48748;
})();
var statearr_48749_48768 = state_48743__$1;
(statearr_48749_48768[(2)] = null);

(statearr_48749_48768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48744 === (4))){
var inst_48713 = (state_48743[(10)]);
var state_48743__$1 = state_48743;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48743__$1,(7),inst_48713);
} else {
if((state_val_48744 === (6))){
var inst_48739 = (state_48743[(2)]);
var state_48743__$1 = state_48743;
var statearr_48750_48769 = state_48743__$1;
(statearr_48750_48769[(2)] = inst_48739);

(statearr_48750_48769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48744 === (3))){
var inst_48741 = (state_48743[(2)]);
var state_48743__$1 = state_48743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48743__$1,inst_48741);
} else {
if((state_val_48744 === (2))){
var inst_48713 = (state_48743[(10)]);
var inst_48715 = cljs.core.count.call(null,inst_48713);
var inst_48716 = (inst_48715 > (0));
var state_48743__$1 = state_48743;
if(cljs.core.truth_(inst_48716)){
var statearr_48752_48770 = state_48743__$1;
(statearr_48752_48770[(1)] = (4));

} else {
var statearr_48753_48771 = state_48743__$1;
(statearr_48753_48771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48744 === (11))){
var inst_48713 = (state_48743[(10)]);
var inst_48732 = (state_48743[(2)]);
var tmp48751 = inst_48713;
var inst_48713__$1 = tmp48751;
var state_48743__$1 = (function (){var statearr_48754 = state_48743;
(statearr_48754[(10)] = inst_48713__$1);

(statearr_48754[(11)] = inst_48732);

return statearr_48754;
})();
var statearr_48755_48772 = state_48743__$1;
(statearr_48755_48772[(2)] = null);

(statearr_48755_48772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48744 === (9))){
var inst_48723 = (state_48743[(8)]);
var state_48743__$1 = state_48743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48743__$1,(11),out,inst_48723);
} else {
if((state_val_48744 === (5))){
var inst_48737 = cljs.core.async.close_BANG_.call(null,out);
var state_48743__$1 = state_48743;
var statearr_48756_48773 = state_48743__$1;
(statearr_48756_48773[(2)] = inst_48737);

(statearr_48756_48773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48744 === (10))){
var inst_48735 = (state_48743[(2)]);
var state_48743__$1 = state_48743;
var statearr_48757_48774 = state_48743__$1;
(statearr_48757_48774[(2)] = inst_48735);

(statearr_48757_48774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48744 === (8))){
var inst_48722 = (state_48743[(7)]);
var inst_48723 = (state_48743[(8)]);
var inst_48713 = (state_48743[(10)]);
var inst_48724 = (state_48743[(9)]);
var inst_48727 = (function (){var cs = inst_48713;
var vec__48718 = inst_48722;
var v = inst_48723;
var c = inst_48724;
return ((function (cs,vec__48718,v,c,inst_48722,inst_48723,inst_48713,inst_48724,state_val_48744,c__36864__auto___48765,out){
return (function (p1__48709_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48709_SHARP_);
});
;})(cs,vec__48718,v,c,inst_48722,inst_48723,inst_48713,inst_48724,state_val_48744,c__36864__auto___48765,out))
})();
var inst_48728 = cljs.core.filterv.call(null,inst_48727,inst_48713);
var inst_48713__$1 = inst_48728;
var state_48743__$1 = (function (){var statearr_48758 = state_48743;
(statearr_48758[(10)] = inst_48713__$1);

return statearr_48758;
})();
var statearr_48759_48775 = state_48743__$1;
(statearr_48759_48775[(2)] = null);

(statearr_48759_48775[(1)] = (2));


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
});})(c__36864__auto___48765,out))
;
return ((function (switch__36774__auto__,c__36864__auto___48765,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_48760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48760[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_48760[(1)] = (1));

return statearr_48760;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_48743){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_48743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e48761){if((e48761 instanceof Object)){
var ex__36778__auto__ = e48761;
var statearr_48762_48776 = state_48743;
(statearr_48762_48776[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48777 = state_48743;
state_48743 = G__48777;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_48743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_48743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___48765,out))
})();
var state__36866__auto__ = (function (){var statearr_48763 = f__36865__auto__.call(null);
(statearr_48763[(6)] = c__36864__auto___48765);

return statearr_48763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___48765,out))
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
var G__48779 = arguments.length;
switch (G__48779) {
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
var c__36864__auto___48824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___48824,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___48824,out){
return (function (state_48803){
var state_val_48804 = (state_48803[(1)]);
if((state_val_48804 === (7))){
var inst_48785 = (state_48803[(7)]);
var inst_48785__$1 = (state_48803[(2)]);
var inst_48786 = (inst_48785__$1 == null);
var inst_48787 = cljs.core.not.call(null,inst_48786);
var state_48803__$1 = (function (){var statearr_48805 = state_48803;
(statearr_48805[(7)] = inst_48785__$1);

return statearr_48805;
})();
if(inst_48787){
var statearr_48806_48825 = state_48803__$1;
(statearr_48806_48825[(1)] = (8));

} else {
var statearr_48807_48826 = state_48803__$1;
(statearr_48807_48826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (1))){
var inst_48780 = (0);
var state_48803__$1 = (function (){var statearr_48808 = state_48803;
(statearr_48808[(8)] = inst_48780);

return statearr_48808;
})();
var statearr_48809_48827 = state_48803__$1;
(statearr_48809_48827[(2)] = null);

(statearr_48809_48827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (4))){
var state_48803__$1 = state_48803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48803__$1,(7),ch);
} else {
if((state_val_48804 === (6))){
var inst_48798 = (state_48803[(2)]);
var state_48803__$1 = state_48803;
var statearr_48810_48828 = state_48803__$1;
(statearr_48810_48828[(2)] = inst_48798);

(statearr_48810_48828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (3))){
var inst_48800 = (state_48803[(2)]);
var inst_48801 = cljs.core.async.close_BANG_.call(null,out);
var state_48803__$1 = (function (){var statearr_48811 = state_48803;
(statearr_48811[(9)] = inst_48800);

return statearr_48811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48803__$1,inst_48801);
} else {
if((state_val_48804 === (2))){
var inst_48780 = (state_48803[(8)]);
var inst_48782 = (inst_48780 < n);
var state_48803__$1 = state_48803;
if(cljs.core.truth_(inst_48782)){
var statearr_48812_48829 = state_48803__$1;
(statearr_48812_48829[(1)] = (4));

} else {
var statearr_48813_48830 = state_48803__$1;
(statearr_48813_48830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (11))){
var inst_48780 = (state_48803[(8)]);
var inst_48790 = (state_48803[(2)]);
var inst_48791 = (inst_48780 + (1));
var inst_48780__$1 = inst_48791;
var state_48803__$1 = (function (){var statearr_48814 = state_48803;
(statearr_48814[(10)] = inst_48790);

(statearr_48814[(8)] = inst_48780__$1);

return statearr_48814;
})();
var statearr_48815_48831 = state_48803__$1;
(statearr_48815_48831[(2)] = null);

(statearr_48815_48831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (9))){
var state_48803__$1 = state_48803;
var statearr_48816_48832 = state_48803__$1;
(statearr_48816_48832[(2)] = null);

(statearr_48816_48832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (5))){
var state_48803__$1 = state_48803;
var statearr_48817_48833 = state_48803__$1;
(statearr_48817_48833[(2)] = null);

(statearr_48817_48833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (10))){
var inst_48795 = (state_48803[(2)]);
var state_48803__$1 = state_48803;
var statearr_48818_48834 = state_48803__$1;
(statearr_48818_48834[(2)] = inst_48795);

(statearr_48818_48834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (8))){
var inst_48785 = (state_48803[(7)]);
var state_48803__$1 = state_48803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48803__$1,(11),out,inst_48785);
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
});})(c__36864__auto___48824,out))
;
return ((function (switch__36774__auto__,c__36864__auto___48824,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_48819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48819[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_48819[(1)] = (1));

return statearr_48819;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_48803){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_48803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e48820){if((e48820 instanceof Object)){
var ex__36778__auto__ = e48820;
var statearr_48821_48835 = state_48803;
(statearr_48821_48835[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48836 = state_48803;
state_48803 = G__48836;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_48803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_48803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___48824,out))
})();
var state__36866__auto__ = (function (){var statearr_48822 = f__36865__auto__.call(null);
(statearr_48822[(6)] = c__36864__auto___48824);

return statearr_48822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___48824,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48838 = (function (f,ch,meta48839){
this.f = f;
this.ch = ch;
this.meta48839 = meta48839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48840,meta48839__$1){
var self__ = this;
var _48840__$1 = this;
return (new cljs.core.async.t_cljs$core$async48838(self__.f,self__.ch,meta48839__$1));
});

cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48840){
var self__ = this;
var _48840__$1 = this;
return self__.meta48839;
});

cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48841 = (function (f,ch,meta48839,_,fn1,meta48842){
this.f = f;
this.ch = ch;
this.meta48839 = meta48839;
this._ = _;
this.fn1 = fn1;
this.meta48842 = meta48842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48843,meta48842__$1){
var self__ = this;
var _48843__$1 = this;
return (new cljs.core.async.t_cljs$core$async48841(self__.f,self__.ch,self__.meta48839,self__._,self__.fn1,meta48842__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48843){
var self__ = this;
var _48843__$1 = this;
return self__.meta48842;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48841.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48841.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48837_SHARP_){
return f1.call(null,(((p1__48837_SHARP_ == null))?null:self__.f.call(null,p1__48837_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48841.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48839","meta48839",-179374323,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48838","cljs.core.async/t_cljs$core$async48838",1503653841,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48842","meta48842",-819953424,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48841";

cljs.core.async.t_cljs$core$async48841.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async48841");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48841 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48841(f__$1,ch__$1,meta48839__$1,___$2,fn1__$1,meta48842){
return (new cljs.core.async.t_cljs$core$async48841(f__$1,ch__$1,meta48839__$1,___$2,fn1__$1,meta48842));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48841(self__.f,self__.ch,self__.meta48839,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48839","meta48839",-179374323,null)], null);
});

cljs.core.async.t_cljs$core$async48838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48838";

cljs.core.async.t_cljs$core$async48838.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async48838");
});

cljs.core.async.__GT_t_cljs$core$async48838 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48838(f__$1,ch__$1,meta48839){
return (new cljs.core.async.t_cljs$core$async48838(f__$1,ch__$1,meta48839));
});

}

return (new cljs.core.async.t_cljs$core$async48838(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48844 = (function (f,ch,meta48845){
this.f = f;
this.ch = ch;
this.meta48845 = meta48845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48846,meta48845__$1){
var self__ = this;
var _48846__$1 = this;
return (new cljs.core.async.t_cljs$core$async48844(self__.f,self__.ch,meta48845__$1));
});

cljs.core.async.t_cljs$core$async48844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48846){
var self__ = this;
var _48846__$1 = this;
return self__.meta48845;
});

cljs.core.async.t_cljs$core$async48844.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48844.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48844.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48845","meta48845",397497316,null)], null);
});

cljs.core.async.t_cljs$core$async48844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48844";

cljs.core.async.t_cljs$core$async48844.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async48844");
});

cljs.core.async.__GT_t_cljs$core$async48844 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48844(f__$1,ch__$1,meta48845){
return (new cljs.core.async.t_cljs$core$async48844(f__$1,ch__$1,meta48845));
});

}

return (new cljs.core.async.t_cljs$core$async48844(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48847 = (function (p,ch,meta48848){
this.p = p;
this.ch = ch;
this.meta48848 = meta48848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48849,meta48848__$1){
var self__ = this;
var _48849__$1 = this;
return (new cljs.core.async.t_cljs$core$async48847(self__.p,self__.ch,meta48848__$1));
});

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48849){
var self__ = this;
var _48849__$1 = this;
return self__.meta48848;
});

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48848","meta48848",183539898,null)], null);
});

cljs.core.async.t_cljs$core$async48847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48847";

cljs.core.async.t_cljs$core$async48847.cljs$lang$ctorPrWriter = (function (this__30899__auto__,writer__30900__auto__,opt__30901__auto__){
return cljs.core._write.call(null,writer__30900__auto__,"cljs.core.async/t_cljs$core$async48847");
});

cljs.core.async.__GT_t_cljs$core$async48847 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48847(p__$1,ch__$1,meta48848){
return (new cljs.core.async.t_cljs$core$async48847(p__$1,ch__$1,meta48848));
});

}

return (new cljs.core.async.t_cljs$core$async48847(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48851 = arguments.length;
switch (G__48851) {
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
var c__36864__auto___48891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___48891,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___48891,out){
return (function (state_48872){
var state_val_48873 = (state_48872[(1)]);
if((state_val_48873 === (7))){
var inst_48868 = (state_48872[(2)]);
var state_48872__$1 = state_48872;
var statearr_48874_48892 = state_48872__$1;
(statearr_48874_48892[(2)] = inst_48868);

(statearr_48874_48892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (1))){
var state_48872__$1 = state_48872;
var statearr_48875_48893 = state_48872__$1;
(statearr_48875_48893[(2)] = null);

(statearr_48875_48893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (4))){
var inst_48854 = (state_48872[(7)]);
var inst_48854__$1 = (state_48872[(2)]);
var inst_48855 = (inst_48854__$1 == null);
var state_48872__$1 = (function (){var statearr_48876 = state_48872;
(statearr_48876[(7)] = inst_48854__$1);

return statearr_48876;
})();
if(cljs.core.truth_(inst_48855)){
var statearr_48877_48894 = state_48872__$1;
(statearr_48877_48894[(1)] = (5));

} else {
var statearr_48878_48895 = state_48872__$1;
(statearr_48878_48895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (6))){
var inst_48854 = (state_48872[(7)]);
var inst_48859 = p.call(null,inst_48854);
var state_48872__$1 = state_48872;
if(cljs.core.truth_(inst_48859)){
var statearr_48879_48896 = state_48872__$1;
(statearr_48879_48896[(1)] = (8));

} else {
var statearr_48880_48897 = state_48872__$1;
(statearr_48880_48897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (3))){
var inst_48870 = (state_48872[(2)]);
var state_48872__$1 = state_48872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48872__$1,inst_48870);
} else {
if((state_val_48873 === (2))){
var state_48872__$1 = state_48872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48872__$1,(4),ch);
} else {
if((state_val_48873 === (11))){
var inst_48862 = (state_48872[(2)]);
var state_48872__$1 = state_48872;
var statearr_48881_48898 = state_48872__$1;
(statearr_48881_48898[(2)] = inst_48862);

(statearr_48881_48898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (9))){
var state_48872__$1 = state_48872;
var statearr_48882_48899 = state_48872__$1;
(statearr_48882_48899[(2)] = null);

(statearr_48882_48899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (5))){
var inst_48857 = cljs.core.async.close_BANG_.call(null,out);
var state_48872__$1 = state_48872;
var statearr_48883_48900 = state_48872__$1;
(statearr_48883_48900[(2)] = inst_48857);

(statearr_48883_48900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (10))){
var inst_48865 = (state_48872[(2)]);
var state_48872__$1 = (function (){var statearr_48884 = state_48872;
(statearr_48884[(8)] = inst_48865);

return statearr_48884;
})();
var statearr_48885_48901 = state_48872__$1;
(statearr_48885_48901[(2)] = null);

(statearr_48885_48901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (8))){
var inst_48854 = (state_48872[(7)]);
var state_48872__$1 = state_48872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48872__$1,(11),out,inst_48854);
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
});})(c__36864__auto___48891,out))
;
return ((function (switch__36774__auto__,c__36864__auto___48891,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_48886 = [null,null,null,null,null,null,null,null,null];
(statearr_48886[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_48886[(1)] = (1));

return statearr_48886;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_48872){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_48872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e48887){if((e48887 instanceof Object)){
var ex__36778__auto__ = e48887;
var statearr_48888_48902 = state_48872;
(statearr_48888_48902[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48903 = state_48872;
state_48872 = G__48903;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_48872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_48872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___48891,out))
})();
var state__36866__auto__ = (function (){var statearr_48889 = f__36865__auto__.call(null);
(statearr_48889[(6)] = c__36864__auto___48891);

return statearr_48889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___48891,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48905 = arguments.length;
switch (G__48905) {
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
return (function (state_48968){
var state_val_48969 = (state_48968[(1)]);
if((state_val_48969 === (7))){
var inst_48964 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48970_49008 = state_48968__$1;
(statearr_48970_49008[(2)] = inst_48964);

(statearr_48970_49008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (20))){
var inst_48934 = (state_48968[(7)]);
var inst_48945 = (state_48968[(2)]);
var inst_48946 = cljs.core.next.call(null,inst_48934);
var inst_48920 = inst_48946;
var inst_48921 = null;
var inst_48922 = (0);
var inst_48923 = (0);
var state_48968__$1 = (function (){var statearr_48971 = state_48968;
(statearr_48971[(8)] = inst_48921);

(statearr_48971[(9)] = inst_48945);

(statearr_48971[(10)] = inst_48922);

(statearr_48971[(11)] = inst_48923);

(statearr_48971[(12)] = inst_48920);

return statearr_48971;
})();
var statearr_48972_49009 = state_48968__$1;
(statearr_48972_49009[(2)] = null);

(statearr_48972_49009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (1))){
var state_48968__$1 = state_48968;
var statearr_48973_49010 = state_48968__$1;
(statearr_48973_49010[(2)] = null);

(statearr_48973_49010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (4))){
var inst_48909 = (state_48968[(13)]);
var inst_48909__$1 = (state_48968[(2)]);
var inst_48910 = (inst_48909__$1 == null);
var state_48968__$1 = (function (){var statearr_48974 = state_48968;
(statearr_48974[(13)] = inst_48909__$1);

return statearr_48974;
})();
if(cljs.core.truth_(inst_48910)){
var statearr_48975_49011 = state_48968__$1;
(statearr_48975_49011[(1)] = (5));

} else {
var statearr_48976_49012 = state_48968__$1;
(statearr_48976_49012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (15))){
var state_48968__$1 = state_48968;
var statearr_48980_49013 = state_48968__$1;
(statearr_48980_49013[(2)] = null);

(statearr_48980_49013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (21))){
var state_48968__$1 = state_48968;
var statearr_48981_49014 = state_48968__$1;
(statearr_48981_49014[(2)] = null);

(statearr_48981_49014[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (13))){
var inst_48921 = (state_48968[(8)]);
var inst_48922 = (state_48968[(10)]);
var inst_48923 = (state_48968[(11)]);
var inst_48920 = (state_48968[(12)]);
var inst_48930 = (state_48968[(2)]);
var inst_48931 = (inst_48923 + (1));
var tmp48977 = inst_48921;
var tmp48978 = inst_48922;
var tmp48979 = inst_48920;
var inst_48920__$1 = tmp48979;
var inst_48921__$1 = tmp48977;
var inst_48922__$1 = tmp48978;
var inst_48923__$1 = inst_48931;
var state_48968__$1 = (function (){var statearr_48982 = state_48968;
(statearr_48982[(8)] = inst_48921__$1);

(statearr_48982[(14)] = inst_48930);

(statearr_48982[(10)] = inst_48922__$1);

(statearr_48982[(11)] = inst_48923__$1);

(statearr_48982[(12)] = inst_48920__$1);

return statearr_48982;
})();
var statearr_48983_49015 = state_48968__$1;
(statearr_48983_49015[(2)] = null);

(statearr_48983_49015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (22))){
var state_48968__$1 = state_48968;
var statearr_48984_49016 = state_48968__$1;
(statearr_48984_49016[(2)] = null);

(statearr_48984_49016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (6))){
var inst_48909 = (state_48968[(13)]);
var inst_48918 = f.call(null,inst_48909);
var inst_48919 = cljs.core.seq.call(null,inst_48918);
var inst_48920 = inst_48919;
var inst_48921 = null;
var inst_48922 = (0);
var inst_48923 = (0);
var state_48968__$1 = (function (){var statearr_48985 = state_48968;
(statearr_48985[(8)] = inst_48921);

(statearr_48985[(10)] = inst_48922);

(statearr_48985[(11)] = inst_48923);

(statearr_48985[(12)] = inst_48920);

return statearr_48985;
})();
var statearr_48986_49017 = state_48968__$1;
(statearr_48986_49017[(2)] = null);

(statearr_48986_49017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (17))){
var inst_48934 = (state_48968[(7)]);
var inst_48938 = cljs.core.chunk_first.call(null,inst_48934);
var inst_48939 = cljs.core.chunk_rest.call(null,inst_48934);
var inst_48940 = cljs.core.count.call(null,inst_48938);
var inst_48920 = inst_48939;
var inst_48921 = inst_48938;
var inst_48922 = inst_48940;
var inst_48923 = (0);
var state_48968__$1 = (function (){var statearr_48987 = state_48968;
(statearr_48987[(8)] = inst_48921);

(statearr_48987[(10)] = inst_48922);

(statearr_48987[(11)] = inst_48923);

(statearr_48987[(12)] = inst_48920);

return statearr_48987;
})();
var statearr_48988_49018 = state_48968__$1;
(statearr_48988_49018[(2)] = null);

(statearr_48988_49018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (3))){
var inst_48966 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48968__$1,inst_48966);
} else {
if((state_val_48969 === (12))){
var inst_48954 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48989_49019 = state_48968__$1;
(statearr_48989_49019[(2)] = inst_48954);

(statearr_48989_49019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (2))){
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(4),in$);
} else {
if((state_val_48969 === (23))){
var inst_48962 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48990_49020 = state_48968__$1;
(statearr_48990_49020[(2)] = inst_48962);

(statearr_48990_49020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (19))){
var inst_48949 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48991_49021 = state_48968__$1;
(statearr_48991_49021[(2)] = inst_48949);

(statearr_48991_49021[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (11))){
var inst_48934 = (state_48968[(7)]);
var inst_48920 = (state_48968[(12)]);
var inst_48934__$1 = cljs.core.seq.call(null,inst_48920);
var state_48968__$1 = (function (){var statearr_48992 = state_48968;
(statearr_48992[(7)] = inst_48934__$1);

return statearr_48992;
})();
if(inst_48934__$1){
var statearr_48993_49022 = state_48968__$1;
(statearr_48993_49022[(1)] = (14));

} else {
var statearr_48994_49023 = state_48968__$1;
(statearr_48994_49023[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (9))){
var inst_48956 = (state_48968[(2)]);
var inst_48957 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48968__$1 = (function (){var statearr_48995 = state_48968;
(statearr_48995[(15)] = inst_48956);

return statearr_48995;
})();
if(cljs.core.truth_(inst_48957)){
var statearr_48996_49024 = state_48968__$1;
(statearr_48996_49024[(1)] = (21));

} else {
var statearr_48997_49025 = state_48968__$1;
(statearr_48997_49025[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (5))){
var inst_48912 = cljs.core.async.close_BANG_.call(null,out);
var state_48968__$1 = state_48968;
var statearr_48998_49026 = state_48968__$1;
(statearr_48998_49026[(2)] = inst_48912);

(statearr_48998_49026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (14))){
var inst_48934 = (state_48968[(7)]);
var inst_48936 = cljs.core.chunked_seq_QMARK_.call(null,inst_48934);
var state_48968__$1 = state_48968;
if(inst_48936){
var statearr_48999_49027 = state_48968__$1;
(statearr_48999_49027[(1)] = (17));

} else {
var statearr_49000_49028 = state_48968__$1;
(statearr_49000_49028[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (16))){
var inst_48952 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_49001_49029 = state_48968__$1;
(statearr_49001_49029[(2)] = inst_48952);

(statearr_49001_49029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (10))){
var inst_48921 = (state_48968[(8)]);
var inst_48923 = (state_48968[(11)]);
var inst_48928 = cljs.core._nth.call(null,inst_48921,inst_48923);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48968__$1,(13),out,inst_48928);
} else {
if((state_val_48969 === (18))){
var inst_48934 = (state_48968[(7)]);
var inst_48943 = cljs.core.first.call(null,inst_48934);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48968__$1,(20),out,inst_48943);
} else {
if((state_val_48969 === (8))){
var inst_48922 = (state_48968[(10)]);
var inst_48923 = (state_48968[(11)]);
var inst_48925 = (inst_48923 < inst_48922);
var inst_48926 = inst_48925;
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48926)){
var statearr_49002_49030 = state_48968__$1;
(statearr_49002_49030[(1)] = (10));

} else {
var statearr_49003_49031 = state_48968__$1;
(statearr_49003_49031[(1)] = (11));

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
var statearr_49004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49004[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__);

(statearr_49004[(1)] = (1));

return statearr_49004;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____1 = (function (state_48968){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_48968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e49005){if((e49005 instanceof Object)){
var ex__36778__auto__ = e49005;
var statearr_49006_49032 = state_48968;
(statearr_49006_49032[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49033 = state_48968;
state_48968 = G__49033;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__ = function(state_48968){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____1.call(this,state_48968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36775__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto__))
})();
var state__36866__auto__ = (function (){var statearr_49007 = f__36865__auto__.call(null);
(statearr_49007[(6)] = c__36864__auto__);

return statearr_49007;
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
var G__49035 = arguments.length;
switch (G__49035) {
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
var G__49038 = arguments.length;
switch (G__49038) {
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
var G__49041 = arguments.length;
switch (G__49041) {
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
var c__36864__auto___49088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___49088,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___49088,out){
return (function (state_49065){
var state_val_49066 = (state_49065[(1)]);
if((state_val_49066 === (7))){
var inst_49060 = (state_49065[(2)]);
var state_49065__$1 = state_49065;
var statearr_49067_49089 = state_49065__$1;
(statearr_49067_49089[(2)] = inst_49060);

(statearr_49067_49089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (1))){
var inst_49042 = null;
var state_49065__$1 = (function (){var statearr_49068 = state_49065;
(statearr_49068[(7)] = inst_49042);

return statearr_49068;
})();
var statearr_49069_49090 = state_49065__$1;
(statearr_49069_49090[(2)] = null);

(statearr_49069_49090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (4))){
var inst_49045 = (state_49065[(8)]);
var inst_49045__$1 = (state_49065[(2)]);
var inst_49046 = (inst_49045__$1 == null);
var inst_49047 = cljs.core.not.call(null,inst_49046);
var state_49065__$1 = (function (){var statearr_49070 = state_49065;
(statearr_49070[(8)] = inst_49045__$1);

return statearr_49070;
})();
if(inst_49047){
var statearr_49071_49091 = state_49065__$1;
(statearr_49071_49091[(1)] = (5));

} else {
var statearr_49072_49092 = state_49065__$1;
(statearr_49072_49092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (6))){
var state_49065__$1 = state_49065;
var statearr_49073_49093 = state_49065__$1;
(statearr_49073_49093[(2)] = null);

(statearr_49073_49093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (3))){
var inst_49062 = (state_49065[(2)]);
var inst_49063 = cljs.core.async.close_BANG_.call(null,out);
var state_49065__$1 = (function (){var statearr_49074 = state_49065;
(statearr_49074[(9)] = inst_49062);

return statearr_49074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49065__$1,inst_49063);
} else {
if((state_val_49066 === (2))){
var state_49065__$1 = state_49065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49065__$1,(4),ch);
} else {
if((state_val_49066 === (11))){
var inst_49045 = (state_49065[(8)]);
var inst_49054 = (state_49065[(2)]);
var inst_49042 = inst_49045;
var state_49065__$1 = (function (){var statearr_49075 = state_49065;
(statearr_49075[(10)] = inst_49054);

(statearr_49075[(7)] = inst_49042);

return statearr_49075;
})();
var statearr_49076_49094 = state_49065__$1;
(statearr_49076_49094[(2)] = null);

(statearr_49076_49094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (9))){
var inst_49045 = (state_49065[(8)]);
var state_49065__$1 = state_49065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49065__$1,(11),out,inst_49045);
} else {
if((state_val_49066 === (5))){
var inst_49042 = (state_49065[(7)]);
var inst_49045 = (state_49065[(8)]);
var inst_49049 = cljs.core._EQ_.call(null,inst_49045,inst_49042);
var state_49065__$1 = state_49065;
if(inst_49049){
var statearr_49078_49095 = state_49065__$1;
(statearr_49078_49095[(1)] = (8));

} else {
var statearr_49079_49096 = state_49065__$1;
(statearr_49079_49096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (10))){
var inst_49057 = (state_49065[(2)]);
var state_49065__$1 = state_49065;
var statearr_49080_49097 = state_49065__$1;
(statearr_49080_49097[(2)] = inst_49057);

(statearr_49080_49097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (8))){
var inst_49042 = (state_49065[(7)]);
var tmp49077 = inst_49042;
var inst_49042__$1 = tmp49077;
var state_49065__$1 = (function (){var statearr_49081 = state_49065;
(statearr_49081[(7)] = inst_49042__$1);

return statearr_49081;
})();
var statearr_49082_49098 = state_49065__$1;
(statearr_49082_49098[(2)] = null);

(statearr_49082_49098[(1)] = (2));


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
});})(c__36864__auto___49088,out))
;
return ((function (switch__36774__auto__,c__36864__auto___49088,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_49083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49083[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_49083[(1)] = (1));

return statearr_49083;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_49065){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_49065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e49084){if((e49084 instanceof Object)){
var ex__36778__auto__ = e49084;
var statearr_49085_49099 = state_49065;
(statearr_49085_49099[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49100 = state_49065;
state_49065 = G__49100;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_49065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_49065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___49088,out))
})();
var state__36866__auto__ = (function (){var statearr_49086 = f__36865__auto__.call(null);
(statearr_49086[(6)] = c__36864__auto___49088);

return statearr_49086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___49088,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49102 = arguments.length;
switch (G__49102) {
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
var c__36864__auto___49168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___49168,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___49168,out){
return (function (state_49140){
var state_val_49141 = (state_49140[(1)]);
if((state_val_49141 === (7))){
var inst_49136 = (state_49140[(2)]);
var state_49140__$1 = state_49140;
var statearr_49142_49169 = state_49140__$1;
(statearr_49142_49169[(2)] = inst_49136);

(statearr_49142_49169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (1))){
var inst_49103 = (new Array(n));
var inst_49104 = inst_49103;
var inst_49105 = (0);
var state_49140__$1 = (function (){var statearr_49143 = state_49140;
(statearr_49143[(7)] = inst_49105);

(statearr_49143[(8)] = inst_49104);

return statearr_49143;
})();
var statearr_49144_49170 = state_49140__$1;
(statearr_49144_49170[(2)] = null);

(statearr_49144_49170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (4))){
var inst_49108 = (state_49140[(9)]);
var inst_49108__$1 = (state_49140[(2)]);
var inst_49109 = (inst_49108__$1 == null);
var inst_49110 = cljs.core.not.call(null,inst_49109);
var state_49140__$1 = (function (){var statearr_49145 = state_49140;
(statearr_49145[(9)] = inst_49108__$1);

return statearr_49145;
})();
if(inst_49110){
var statearr_49146_49171 = state_49140__$1;
(statearr_49146_49171[(1)] = (5));

} else {
var statearr_49147_49172 = state_49140__$1;
(statearr_49147_49172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (15))){
var inst_49130 = (state_49140[(2)]);
var state_49140__$1 = state_49140;
var statearr_49148_49173 = state_49140__$1;
(statearr_49148_49173[(2)] = inst_49130);

(statearr_49148_49173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (13))){
var state_49140__$1 = state_49140;
var statearr_49149_49174 = state_49140__$1;
(statearr_49149_49174[(2)] = null);

(statearr_49149_49174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (6))){
var inst_49105 = (state_49140[(7)]);
var inst_49126 = (inst_49105 > (0));
var state_49140__$1 = state_49140;
if(cljs.core.truth_(inst_49126)){
var statearr_49150_49175 = state_49140__$1;
(statearr_49150_49175[(1)] = (12));

} else {
var statearr_49151_49176 = state_49140__$1;
(statearr_49151_49176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (3))){
var inst_49138 = (state_49140[(2)]);
var state_49140__$1 = state_49140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49140__$1,inst_49138);
} else {
if((state_val_49141 === (12))){
var inst_49104 = (state_49140[(8)]);
var inst_49128 = cljs.core.vec.call(null,inst_49104);
var state_49140__$1 = state_49140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49140__$1,(15),out,inst_49128);
} else {
if((state_val_49141 === (2))){
var state_49140__$1 = state_49140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49140__$1,(4),ch);
} else {
if((state_val_49141 === (11))){
var inst_49120 = (state_49140[(2)]);
var inst_49121 = (new Array(n));
var inst_49104 = inst_49121;
var inst_49105 = (0);
var state_49140__$1 = (function (){var statearr_49152 = state_49140;
(statearr_49152[(10)] = inst_49120);

(statearr_49152[(7)] = inst_49105);

(statearr_49152[(8)] = inst_49104);

return statearr_49152;
})();
var statearr_49153_49177 = state_49140__$1;
(statearr_49153_49177[(2)] = null);

(statearr_49153_49177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (9))){
var inst_49104 = (state_49140[(8)]);
var inst_49118 = cljs.core.vec.call(null,inst_49104);
var state_49140__$1 = state_49140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49140__$1,(11),out,inst_49118);
} else {
if((state_val_49141 === (5))){
var inst_49108 = (state_49140[(9)]);
var inst_49105 = (state_49140[(7)]);
var inst_49113 = (state_49140[(11)]);
var inst_49104 = (state_49140[(8)]);
var inst_49112 = (inst_49104[inst_49105] = inst_49108);
var inst_49113__$1 = (inst_49105 + (1));
var inst_49114 = (inst_49113__$1 < n);
var state_49140__$1 = (function (){var statearr_49154 = state_49140;
(statearr_49154[(12)] = inst_49112);

(statearr_49154[(11)] = inst_49113__$1);

return statearr_49154;
})();
if(cljs.core.truth_(inst_49114)){
var statearr_49155_49178 = state_49140__$1;
(statearr_49155_49178[(1)] = (8));

} else {
var statearr_49156_49179 = state_49140__$1;
(statearr_49156_49179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (14))){
var inst_49133 = (state_49140[(2)]);
var inst_49134 = cljs.core.async.close_BANG_.call(null,out);
var state_49140__$1 = (function (){var statearr_49158 = state_49140;
(statearr_49158[(13)] = inst_49133);

return statearr_49158;
})();
var statearr_49159_49180 = state_49140__$1;
(statearr_49159_49180[(2)] = inst_49134);

(statearr_49159_49180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (10))){
var inst_49124 = (state_49140[(2)]);
var state_49140__$1 = state_49140;
var statearr_49160_49181 = state_49140__$1;
(statearr_49160_49181[(2)] = inst_49124);

(statearr_49160_49181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49141 === (8))){
var inst_49113 = (state_49140[(11)]);
var inst_49104 = (state_49140[(8)]);
var tmp49157 = inst_49104;
var inst_49104__$1 = tmp49157;
var inst_49105 = inst_49113;
var state_49140__$1 = (function (){var statearr_49161 = state_49140;
(statearr_49161[(7)] = inst_49105);

(statearr_49161[(8)] = inst_49104__$1);

return statearr_49161;
})();
var statearr_49162_49182 = state_49140__$1;
(statearr_49162_49182[(2)] = null);

(statearr_49162_49182[(1)] = (2));


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
});})(c__36864__auto___49168,out))
;
return ((function (switch__36774__auto__,c__36864__auto___49168,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_49163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49163[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_49163[(1)] = (1));

return statearr_49163;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_49140){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_49140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e49164){if((e49164 instanceof Object)){
var ex__36778__auto__ = e49164;
var statearr_49165_49183 = state_49140;
(statearr_49165_49183[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49184 = state_49140;
state_49140 = G__49184;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_49140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_49140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___49168,out))
})();
var state__36866__auto__ = (function (){var statearr_49166 = f__36865__auto__.call(null);
(statearr_49166[(6)] = c__36864__auto___49168);

return statearr_49166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___49168,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49186 = arguments.length;
switch (G__49186) {
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
var c__36864__auto___49256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36864__auto___49256,out){
return (function (){
var f__36865__auto__ = (function (){var switch__36774__auto__ = ((function (c__36864__auto___49256,out){
return (function (state_49228){
var state_val_49229 = (state_49228[(1)]);
if((state_val_49229 === (7))){
var inst_49224 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
var statearr_49230_49257 = state_49228__$1;
(statearr_49230_49257[(2)] = inst_49224);

(statearr_49230_49257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (1))){
var inst_49187 = [];
var inst_49188 = inst_49187;
var inst_49189 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49228__$1 = (function (){var statearr_49231 = state_49228;
(statearr_49231[(7)] = inst_49188);

(statearr_49231[(8)] = inst_49189);

return statearr_49231;
})();
var statearr_49232_49258 = state_49228__$1;
(statearr_49232_49258[(2)] = null);

(statearr_49232_49258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (4))){
var inst_49192 = (state_49228[(9)]);
var inst_49192__$1 = (state_49228[(2)]);
var inst_49193 = (inst_49192__$1 == null);
var inst_49194 = cljs.core.not.call(null,inst_49193);
var state_49228__$1 = (function (){var statearr_49233 = state_49228;
(statearr_49233[(9)] = inst_49192__$1);

return statearr_49233;
})();
if(inst_49194){
var statearr_49234_49259 = state_49228__$1;
(statearr_49234_49259[(1)] = (5));

} else {
var statearr_49235_49260 = state_49228__$1;
(statearr_49235_49260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (15))){
var inst_49218 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
var statearr_49236_49261 = state_49228__$1;
(statearr_49236_49261[(2)] = inst_49218);

(statearr_49236_49261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (13))){
var state_49228__$1 = state_49228;
var statearr_49237_49262 = state_49228__$1;
(statearr_49237_49262[(2)] = null);

(statearr_49237_49262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (6))){
var inst_49188 = (state_49228[(7)]);
var inst_49213 = inst_49188.length;
var inst_49214 = (inst_49213 > (0));
var state_49228__$1 = state_49228;
if(cljs.core.truth_(inst_49214)){
var statearr_49238_49263 = state_49228__$1;
(statearr_49238_49263[(1)] = (12));

} else {
var statearr_49239_49264 = state_49228__$1;
(statearr_49239_49264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (3))){
var inst_49226 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49228__$1,inst_49226);
} else {
if((state_val_49229 === (12))){
var inst_49188 = (state_49228[(7)]);
var inst_49216 = cljs.core.vec.call(null,inst_49188);
var state_49228__$1 = state_49228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49228__$1,(15),out,inst_49216);
} else {
if((state_val_49229 === (2))){
var state_49228__$1 = state_49228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49228__$1,(4),ch);
} else {
if((state_val_49229 === (11))){
var inst_49196 = (state_49228[(10)]);
var inst_49192 = (state_49228[(9)]);
var inst_49206 = (state_49228[(2)]);
var inst_49207 = [];
var inst_49208 = inst_49207.push(inst_49192);
var inst_49188 = inst_49207;
var inst_49189 = inst_49196;
var state_49228__$1 = (function (){var statearr_49240 = state_49228;
(statearr_49240[(7)] = inst_49188);

(statearr_49240[(11)] = inst_49206);

(statearr_49240[(8)] = inst_49189);

(statearr_49240[(12)] = inst_49208);

return statearr_49240;
})();
var statearr_49241_49265 = state_49228__$1;
(statearr_49241_49265[(2)] = null);

(statearr_49241_49265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (9))){
var inst_49188 = (state_49228[(7)]);
var inst_49204 = cljs.core.vec.call(null,inst_49188);
var state_49228__$1 = state_49228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49228__$1,(11),out,inst_49204);
} else {
if((state_val_49229 === (5))){
var inst_49189 = (state_49228[(8)]);
var inst_49196 = (state_49228[(10)]);
var inst_49192 = (state_49228[(9)]);
var inst_49196__$1 = f.call(null,inst_49192);
var inst_49197 = cljs.core._EQ_.call(null,inst_49196__$1,inst_49189);
var inst_49198 = cljs.core.keyword_identical_QMARK_.call(null,inst_49189,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49199 = (inst_49197) || (inst_49198);
var state_49228__$1 = (function (){var statearr_49242 = state_49228;
(statearr_49242[(10)] = inst_49196__$1);

return statearr_49242;
})();
if(cljs.core.truth_(inst_49199)){
var statearr_49243_49266 = state_49228__$1;
(statearr_49243_49266[(1)] = (8));

} else {
var statearr_49244_49267 = state_49228__$1;
(statearr_49244_49267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (14))){
var inst_49221 = (state_49228[(2)]);
var inst_49222 = cljs.core.async.close_BANG_.call(null,out);
var state_49228__$1 = (function (){var statearr_49246 = state_49228;
(statearr_49246[(13)] = inst_49221);

return statearr_49246;
})();
var statearr_49247_49268 = state_49228__$1;
(statearr_49247_49268[(2)] = inst_49222);

(statearr_49247_49268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (10))){
var inst_49211 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
var statearr_49248_49269 = state_49228__$1;
(statearr_49248_49269[(2)] = inst_49211);

(statearr_49248_49269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (8))){
var inst_49188 = (state_49228[(7)]);
var inst_49196 = (state_49228[(10)]);
var inst_49192 = (state_49228[(9)]);
var inst_49201 = inst_49188.push(inst_49192);
var tmp49245 = inst_49188;
var inst_49188__$1 = tmp49245;
var inst_49189 = inst_49196;
var state_49228__$1 = (function (){var statearr_49249 = state_49228;
(statearr_49249[(14)] = inst_49201);

(statearr_49249[(7)] = inst_49188__$1);

(statearr_49249[(8)] = inst_49189);

return statearr_49249;
})();
var statearr_49250_49270 = state_49228__$1;
(statearr_49250_49270[(2)] = null);

(statearr_49250_49270[(1)] = (2));


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
});})(c__36864__auto___49256,out))
;
return ((function (switch__36774__auto__,c__36864__auto___49256,out){
return (function() {
var cljs$core$async$state_machine__36775__auto__ = null;
var cljs$core$async$state_machine__36775__auto____0 = (function (){
var statearr_49251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49251[(0)] = cljs$core$async$state_machine__36775__auto__);

(statearr_49251[(1)] = (1));

return statearr_49251;
});
var cljs$core$async$state_machine__36775__auto____1 = (function (state_49228){
while(true){
var ret_value__36776__auto__ = (function (){try{while(true){
var result__36777__auto__ = switch__36774__auto__.call(null,state_49228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36777__auto__;
}
break;
}
}catch (e49252){if((e49252 instanceof Object)){
var ex__36778__auto__ = e49252;
var statearr_49253_49271 = state_49228;
(statearr_49253_49271[(5)] = ex__36778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49272 = state_49228;
state_49228 = G__49272;
continue;
} else {
return ret_value__36776__auto__;
}
break;
}
});
cljs$core$async$state_machine__36775__auto__ = function(state_49228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36775__auto____1.call(this,state_49228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36775__auto____0;
cljs$core$async$state_machine__36775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36775__auto____1;
return cljs$core$async$state_machine__36775__auto__;
})()
;})(switch__36774__auto__,c__36864__auto___49256,out))
})();
var state__36866__auto__ = (function (){var statearr_49254 = f__36865__auto__.call(null);
(statearr_49254[(6)] = c__36864__auto___49256);

return statearr_49254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36866__auto__);
});})(c__36864__auto___49256,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512749420066
