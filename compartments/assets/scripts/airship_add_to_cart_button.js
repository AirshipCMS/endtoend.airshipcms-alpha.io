(function (console, $global) { "use strict";
function $extend(from, fields) {
  function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
  for (var name in fields) proto[name] = fields[name];
  if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
  return proto;
}
var AddToCart = function() { };
AddToCart.__name__ = true;
AddToCart.main = function() {
  AddToCart.cart_store = new store_CartStore();
  var browser_buttons = window.document.querySelectorAll("[data-aeroproduct-variation-id]");
  var _g1 = 0;
  var _g = browser_buttons.length;
  while(_g1 < _g) {
    var i = _g1++;
    var button = new view_Button(js_Boot.__cast(browser_buttons.item(i) , HTMLElement));
  }
  var browser_statuses = window.document.querySelectorAll(".airshop-status");
  var _g11 = 0;
  var _g2 = browser_statuses.length;
  while(_g11 < _g2) {
    var i1 = _g11++;
    var status_container = new view_GlobalStatus(js_Boot.__cast(browser_statuses.item(i1) , HTMLElement));
  }
};
var EReg = function(r,opt) {
  opt = opt.split("u").join("");
  this.r = new RegExp(r,opt);
};
EReg.__name__ = true;
EReg.prototype = {
  split: function(s) {
    var d = "#__delim__#";
    return s.replace(this.r,d).split(d);
  }
  ,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
  var x = s.charCodeAt(index);
  if(x != x) return undefined;
  return x;
};
HxOverrides.substr = function(s,pos,len) {
  if(pos != null && pos != 0 && len != null && len < 0) return "";
  if(len == null) len = s.length;
  if(pos < 0) {
    pos = s.length + pos;
    if(pos < 0) pos = 0;
  } else if(len < 0) len = s.length + len - pos;
  return s.substr(pos,len);
};
HxOverrides.iter = function(a) {
  return { cur : 0, arr : a, hasNext : function() {
    return this.cur < this.arr.length;
  }, next : function() {
    return this.arr[this.cur++];
  }};
};
var _$KeyValue_KeyValue_$Impl_$ = {};
_$KeyValue_KeyValue_$Impl_$.__name__ = true;
_$KeyValue_KeyValue_$Impl_$.set = function(this1,key,value) {
  this1[key] = value;
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.fold = function(it,f,first) {
  var $it0 = $iterator(it)();
  while( $it0.hasNext() ) {
    var x = $it0.next();
    first = f(x,first);
  }
  return first;
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
  try {
    return o[field];
  } catch( e ) {
    if (e instanceof js__$Boot_HaxeError) e = e.val;
    return null;
  }
};
Reflect.setField = function(o,field,value) {
  o[field] = value;
};
Reflect.fields = function(o) {
  var a = [];
  if(o != null) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for( var f in o ) {
    if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
    }
  }
  return a;
};
Reflect.isFunction = function(f) {
  return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
  if(f1 == f2) return true;
  if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
  return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
  return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
  var v = parseInt(x,10);
  if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
  if(isNaN(v)) return null;
  return v;
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
  return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.isSpace = function(s,pos) {
  var c = HxOverrides.cca(s,pos);
  return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
  var l = s.length;
  var r = 0;
  while(r < l && StringTools.isSpace(s,r)) r++;
  if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
var js__$Boot_HaxeError = function(val) {
  Error.call(this);
  this.val = val;
  this.message = String(val);
  if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
  __class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
  if((o instanceof Array) && o.__enum__ == null) return Array; else {
    var cl = o.__class__;
    if(cl != null) return cl;
    var name = js_Boot.__nativeClassName(o);
    if(name != null) return js_Boot.__resolveNativeClass(name);
    return null;
  }
};
js_Boot.__string_rec = function(o,s) {
  if(o == null) return "null";
  if(s.length >= 5) return "<...>";
  var t = typeof(o);
  if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
  switch(t) {
  case "object":
    if(o instanceof Array) {
      if(o.__enum__) {
        if(o.length == 2) return o[0];
        var str2 = o[0] + "(";
        s += "\t";
        var _g1 = 2;
        var _g = o.length;
        while(_g1 < _g) {
          var i1 = _g1++;
          if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
        }
        return str2 + ")";
      }
      var l = o.length;
      var i;
      var str1 = "[";
      s += "\t";
      var _g2 = 0;
      while(_g2 < l) {
        var i2 = _g2++;
        str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
      }
      str1 += "]";
      return str1;
    }
    var tostr;
    try {
      tostr = o.toString;
    } catch( e ) {
      if (e instanceof js__$Boot_HaxeError) e = e.val;
      return "???";
    }
    if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
      var s2 = o.toString();
      if(s2 != "[object Object]") return s2;
    }
    var k = null;
    var str = "{\n";
    s += "\t";
    var hasp = o.hasOwnProperty != null;
    for( var k in o ) {
    if(hasp && !o.hasOwnProperty(k)) {
      continue;
    }
    if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
      continue;
    }
    if(str.length != 2) str += ", \n";
    str += s + k + " : " + js_Boot.__string_rec(o[k],s);
    }
    s = s.substring(1);
    str += "\n" + s + "}";
    return str;
  case "function":
    return "<function>";
  case "string":
    return o;
  default:
    return String(o);
  }
};
js_Boot.__interfLoop = function(cc,cl) {
  if(cc == null) return false;
  if(cc == cl) return true;
  var intf = cc.__interfaces__;
  if(intf != null) {
    var _g1 = 0;
    var _g = intf.length;
    while(_g1 < _g) {
      var i = _g1++;
      var i1 = intf[i];
      if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
    }
  }
  return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
  if(cl == null) return false;
  switch(cl) {
  case Int:
    return (o|0) === o;
  case Float:
    return typeof(o) == "number";
  case Bool:
    return typeof(o) == "boolean";
  case String:
    return typeof(o) == "string";
  case Array:
    return (o instanceof Array) && o.__enum__ == null;
  case Dynamic:
    return true;
  default:
    if(o != null) {
      if(typeof(cl) == "function") {
        if(o instanceof cl) return true;
        if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
      } else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
        if(o instanceof cl) return true;
      }
    } else return false;
    if(cl == Class && o.__name__ != null) return true;
    if(cl == Enum && o.__ename__ != null) return true;
    return o.__enum__ == cl;
  }
};
js_Boot.__cast = function(o,t) {
  if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
  var name = js_Boot.__toStr.call(o).slice(8,-1);
  if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
  return name;
};
js_Boot.__isNativeObj = function(o) {
  return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
  return $global[name];
};
var msignal_Signal = function(valueClasses) {
  if(valueClasses == null) valueClasses = [];
  this.valueClasses = valueClasses;
  this.slots = msignal_SlotList.NIL;
  this.priorityBased = false;
};
msignal_Signal.__name__ = true;
msignal_Signal.prototype = {
  add: function(listener) {
    return this.registerListener(listener);
  }
  ,addOnce: function(listener) {
    return this.registerListener(listener,true);
  }
  ,addWithPriority: function(listener,priority) {
    if(priority == null) priority = 0;
    return this.registerListener(listener,false,priority);
  }
  ,addOnceWithPriority: function(listener,priority) {
    if(priority == null) priority = 0;
    return this.registerListener(listener,true,priority);
  }
  ,remove: function(listener) {
    var slot = this.slots.find(listener);
    if(slot == null) return null;
    this.slots = this.slots.filterNot(listener);
    return slot;
  }
  ,removeAll: function() {
    this.slots = msignal_SlotList.NIL;
  }
  ,registerListener: function(listener,once,priority) {
    if(priority == null) priority = 0;
    if(once == null) once = false;
    if(this.registrationPossible(listener,once)) {
      var newSlot = this.createSlot(listener,once,priority);
      if(!this.priorityBased && priority != 0) this.priorityBased = true;
      if(!this.priorityBased && priority == 0) this.slots = this.slots.prepend(newSlot); else this.slots = this.slots.insertWithPriority(newSlot);
      return newSlot;
    }
    return this.slots.find(listener);
  }
  ,registrationPossible: function(listener,once) {
    if(!this.slots.nonEmpty) return true;
    var existingSlot = this.slots.find(listener);
    if(existingSlot == null) return true;
    if(existingSlot.once != once) throw new js__$Boot_HaxeError("You cannot addOnce() then add() the same listener without removing the relationship first.");
    return false;
  }
  ,createSlot: function(listener,once,priority) {
    if(priority == null) priority = 0;
    if(once == null) once = false;
    return null;
  }
  ,get_numListeners: function() {
    return this.slots.get_length();
  }
  ,__class__: msignal_Signal
};
var msignal_Signal0 = function() {
  msignal_Signal.call(this);
};
msignal_Signal0.__name__ = true;
msignal_Signal0.__super__ = msignal_Signal;
msignal_Signal0.prototype = $extend(msignal_Signal.prototype,{
  dispatch: function() {
    var slotsToProcess = this.slots;
    while(slotsToProcess.nonEmpty) {
      slotsToProcess.head.execute();
      slotsToProcess = slotsToProcess.tail;
    }
  }
  ,createSlot: function(listener,once,priority) {
    if(priority == null) priority = 0;
    if(once == null) once = false;
    return new msignal_Slot0(this,listener,once,priority);
  }
  ,__class__: msignal_Signal0
});
var msignal_Signal1 = function(type) {
  msignal_Signal.call(this,[type]);
};
msignal_Signal1.__name__ = true;
msignal_Signal1.__super__ = msignal_Signal;
msignal_Signal1.prototype = $extend(msignal_Signal.prototype,{
  dispatch: function(value) {
    var slotsToProcess = this.slots;
    while(slotsToProcess.nonEmpty) {
      slotsToProcess.head.execute(value);
      slotsToProcess = slotsToProcess.tail;
    }
  }
  ,createSlot: function(listener,once,priority) {
    if(priority == null) priority = 0;
    if(once == null) once = false;
    return new msignal_Slot1(this,listener,once,priority);
  }
  ,__class__: msignal_Signal1
});
var msignal_Signal2 = function(type1,type2) {
  msignal_Signal.call(this,[type1,type2]);
};
msignal_Signal2.__name__ = true;
msignal_Signal2.__super__ = msignal_Signal;
msignal_Signal2.prototype = $extend(msignal_Signal.prototype,{
  dispatch: function(value1,value2) {
    var slotsToProcess = this.slots;
    while(slotsToProcess.nonEmpty) {
      slotsToProcess.head.execute(value1,value2);
      slotsToProcess = slotsToProcess.tail;
    }
  }
  ,createSlot: function(listener,once,priority) {
    if(priority == null) priority = 0;
    if(once == null) once = false;
    return new msignal_Slot2(this,listener,once,priority);
  }
  ,__class__: msignal_Signal2
});
var msignal_Slot = function(signal,listener,once,priority) {
  if(priority == null) priority = 0;
  if(once == null) once = false;
  this.signal = signal;
  this.set_listener(listener);
  this.once = once;
  this.priority = priority;
  this.enabled = true;
};
msignal_Slot.__name__ = true;
msignal_Slot.prototype = {
  remove: function() {
    this.signal.remove(this.listener);
  }
  ,set_listener: function(value) {
    if(value == null) throw new js__$Boot_HaxeError("listener cannot be null");
    return this.listener = value;
  }
  ,__class__: msignal_Slot
};
var msignal_Slot0 = function(signal,listener,once,priority) {
  if(priority == null) priority = 0;
  if(once == null) once = false;
  msignal_Slot.call(this,signal,listener,once,priority);
};
msignal_Slot0.__name__ = true;
msignal_Slot0.__super__ = msignal_Slot;
msignal_Slot0.prototype = $extend(msignal_Slot.prototype,{
  execute: function() {
    if(!this.enabled) return;
    if(this.once) this.remove();
    this.listener();
  }
  ,__class__: msignal_Slot0
});
var msignal_Slot1 = function(signal,listener,once,priority) {
  if(priority == null) priority = 0;
  if(once == null) once = false;
  msignal_Slot.call(this,signal,listener,once,priority);
};
msignal_Slot1.__name__ = true;
msignal_Slot1.__super__ = msignal_Slot;
msignal_Slot1.prototype = $extend(msignal_Slot.prototype,{
  execute: function(value1) {
    if(!this.enabled) return;
    if(this.once) this.remove();
    if(this.param != null) value1 = this.param;
    this.listener(value1);
  }
  ,__class__: msignal_Slot1
});
var msignal_Slot2 = function(signal,listener,once,priority) {
  if(priority == null) priority = 0;
  if(once == null) once = false;
  msignal_Slot.call(this,signal,listener,once,priority);
};
msignal_Slot2.__name__ = true;
msignal_Slot2.__super__ = msignal_Slot;
msignal_Slot2.prototype = $extend(msignal_Slot.prototype,{
  execute: function(value1,value2) {
    if(!this.enabled) return;
    if(this.once) this.remove();
    if(this.param1 != null) value1 = this.param1;
    if(this.param2 != null) value2 = this.param2;
    this.listener(value1,value2);
  }
  ,__class__: msignal_Slot2
});
var msignal_SlotList = function(head,tail) {
  this.nonEmpty = false;
  if(head == null && tail == null) {
    if(msignal_SlotList.NIL != null) throw new js__$Boot_HaxeError("Parameters head and tail are null. Use the NIL element instead.");
    this.nonEmpty = false;
  } else if(head == null) throw new js__$Boot_HaxeError("Parameter head cannot be null."); else {
    this.head = head;
    if(tail == null) this.tail = msignal_SlotList.NIL; else this.tail = tail;
    this.nonEmpty = true;
  }
};
msignal_SlotList.__name__ = true;
msignal_SlotList.prototype = {
  get_length: function() {
    if(!this.nonEmpty) return 0;
    if(this.tail == msignal_SlotList.NIL) return 1;
    var result = 0;
    var p = this;
    while(p.nonEmpty) {
      ++result;
      p = p.tail;
    }
    return result;
  }
  ,prepend: function(slot) {
    return new msignal_SlotList(slot,this);
  }
  ,insertWithPriority: function(slot) {
    if(!this.nonEmpty) return new msignal_SlotList(slot);
    var priority = slot.priority;
    if(priority >= this.head.priority) return this.prepend(slot);
    var wholeClone = new msignal_SlotList(this.head);
    var subClone = wholeClone;
    var current = this.tail;
    while(current.nonEmpty) {
      if(priority > current.head.priority) {
        subClone.tail = current.prepend(slot);
        return wholeClone;
      }
      subClone = subClone.tail = new msignal_SlotList(current.head);
      current = current.tail;
    }
    subClone.tail = new msignal_SlotList(slot);
    return wholeClone;
  }
  ,filterNot: function(listener) {
    if(!this.nonEmpty || listener == null) return this;
    if(Reflect.compareMethods(this.head.listener,listener)) return this.tail;
    var wholeClone = new msignal_SlotList(this.head);
    var subClone = wholeClone;
    var current = this.tail;
    while(current.nonEmpty) {
      if(Reflect.compareMethods(current.head.listener,listener)) {
        subClone.tail = current.tail;
        return wholeClone;
      }
      subClone = subClone.tail = new msignal_SlotList(current.head);
      current = current.tail;
    }
    return this;
  }
  ,find: function(listener) {
    if(!this.nonEmpty) return null;
    var p = this;
    while(p.nonEmpty) {
      if(Reflect.compareMethods(p.head.listener,listener)) return p.head;
      p = p.tail;
    }
    return null;
  }
  ,__class__: msignal_SlotList
};
var store_CartActions = function() { };
store_CartActions.__name__ = true;
var store_CartStore = function() {
  this.changed = new msignal_Signal0();
  this.changed.add($bind(this,this.sync_if_authorized));
  this.changed.add($bind(this,this.update_cart_counter));
  this.load_cart();
  this.airship_access_token = window.localStorage.getItem("ngStorage-airship_access_token");
  store_CartActions.increment_quantity.add($bind(this,this.increment_quantity));
  store_CartActions.add_item.add($bind(this,this.add_item));
};
store_CartStore.__name__ = true;
store_CartStore.prototype = {
  increment_quantity: function(id) {
    this.items = this.items.filter(function(item) {
      return item.id == id;
    }).map(function(item1) {
      item1.quantity++;
      return item1;
    });
    this.validate();
  }
  ,add_item: function(cart_item) {
    this.items.push(cart_item);
    this.validate();
    store_StatusActions.update_global.dispatch("" + cart_item.product_title + " - " + cart_item.product_variation_title + " has been added to cart.");
    store_StatusActions.update_local.dispatch(cart_item,"successfully added item to cart.");
  }
  ,validate: function() {
    this.save_items();
    this.changed.dispatch();
  }
  ,save_items: function() {
    var cart = JSON.parse(window.localStorage.getItem("ngStorage-cart"));
    if(cart == null) cart = { items : []};
    cart.items = this.items;
    window.localStorage.setItem("ngStorage-cart",JSON.stringify(cart));
  }
  ,load_cart: function() {
    var data = window.localStorage.getItem("ngStorage-cart");
    if(data != null) this.items = JSON.parse(data).items; else this.items = [];
  }
  ,sync_if_authorized: function() {
    var _g = this;
    if(this.airship_access_token != null) {
      var post = new XMLHttpRequest();
      post.open("PUT","/api/aero_cart",true);
      post.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
      post.setRequestHeader("Authorization","Bearer " + JSON.parse(this.airship_access_token));
      post.onreadystatechange = function() {
        if(post.readyState != 4) return;
        if(post.status != 200) post.onerror(new Error(post.statusText)); else {
          var response_text = JSON.parse(post.responseText);
          if(response_text.status == "error" && response_text.message == null) {
            store_StatusActions.update_global.dispatch(response_text.status);
            store_StatusActions.update_local.dispatch(_g.items[_g.items.length - 1],response_text.status);
          } else if(response_text.status == "error" && response_text.message != null) {
            store_StatusActions.update_global.dispatch(response_text.message);
            store_StatusActions.update_local.dispatch(_g.items[_g.items.length - 1],response_text.message);
          } else if(response_text.status == "success") {
          }
        }
      };
      post.onerror = function(e) {
        var friendly = "There was a problem communicating with the shop. Cart has not been updated.";
        store_StatusActions.update_global.dispatch(friendly);
        store_StatusActions.update_local.dispatch(_g.items[_g.items.length - 1],friendly);
        throw e;
      };
      post.send("cart=" + JSON.stringify({ items : this.items}));
    }
  }
  ,update_cart_counter: function() {
    window.document.dispatchEvent(new Event("airshop-cart-changed"));
  }
  ,__class__: store_CartStore
};
var store_StatusActions = function() { };
store_StatusActions.__name__ = true;
var view_Button = function(element) {
  this.element = element;
  this.validate();
  this.add_listeners();
};
view_Button.__name__ = true;
view_Button.camel_to_space = function(camel) {
  return StringTools.ltrim(new EReg("(?=[A-Z])","g").split(camel).map(function(s) {
    return s.toLowerCase();
  }).join(" "));
};
view_Button.prototype = {
  get_cart_item: function() {
    var _g = this;
    var item = { };
    item = Lambda.fold(Reflect.fields(this.element.dataset),function(data_attr,item1) {
      var item_option = Lambda.fold(view_Button.OPTIONAL_DATA_ATTR_PREFIXES,function(prefix,field) {
        if(field.name == null && StringTools.startsWith(data_attr,prefix.key)) field = { name : data_attr.split(prefix.key)[1], type : prefix.field};
        return field;
      },{ name : null, type : null});
      if(item_option.name != null) {
        var val = Reflect.field(_g.element.dataset,data_attr);
        if(item_option.type == view_Button.OPTIONAL_CART_ITEM_ADDONS) {
          if(item1.add_ons == null) item1.add_ons = { };
          var key = view_Button.camel_to_space(item_option.name);
          item1.add_ons[key] = val;
        } else throw new Error("Code: Whiskey Tango Foxtrot. \n data_attr: " + data_attr + "\n item_option.name:  " + item_option.name + "\n item_option.type: " + item_option.type);
      }
      return item1;
    },item);
    return Lambda.fold(view_Button.REQUIRED_DATA_ATTRS,function(attr,item2) {
      if(attr.field == view_Button.CART_ITEM_KEY_PRICE) {
        item2.price = { };
        _$KeyValue_KeyValue_$Impl_$.set(item2.price,Reflect.field(_g.element.dataset,view_Button.CART_ITEM_ATTR_CURRENCY),Std.parseInt(Reflect.field(_g.element.dataset,attr.key)));
      } else Reflect.setField(item2,attr.field,Reflect.field(_g.element.dataset,attr.key));
      return item2;
    },item);
  }
  ,validate: function() {
    var _g = 0;
    var _g1 = view_Button.REQUIRED_DATA_ATTRS;
    while(_g < _g1.length) {
      var attr = _g1[_g];
      ++_g;
      // if(!Object.prototype.hasOwnProperty.call(this.element.dataset,attr.key) || Reflect.field(this.element.dataset,attr.key) == "") throw new Error("[Airshop] Add to Cart button implementation ERROR:\n  data attribute \"" + attr.attr + "\" is required.\n\n  example : <button " + attr.attr + "=\"...\" ... />");
    }
  }
  ,add_listeners: function() {
    this.element.addEventListener("click",$bind(this,this.handle_click));
    var button_statuses = this.element.querySelectorAll(".status");
    var _g1 = 0;
    var _g = button_statuses.length;
    while(_g1 < _g) {
      var i = _g1++;
      var status_container = new view_LocalStatus(this.get_cart_item(),js_Boot.__cast(button_statuses.item(i) , HTMLElement));
    }
  }
  ,handle_click: function(event) {
    if(this.element.dataset.aeroproductVariationId !== "") {
      store_CartActions.add_item.dispatch(this.get_cart_item());
    }
  }
  ,__class__: view_Button
};
var view_GlobalStatus = function(element) {
  this.element = element;
  store_StatusActions.update_global.add($bind(this,this.update));
};
view_GlobalStatus.__name__ = true;
view_GlobalStatus.prototype = {
  update: function(message) {
    this.element.innerText = message;
  }
  ,__class__: view_GlobalStatus
};
var view_LocalStatus = function(cart_item,element) {
  this.cart_item = cart_item;
  this.element = element;
  store_StatusActions.update_local.add($bind(this,this.update));
};
view_LocalStatus.__name__ = true;
view_LocalStatus.prototype = {
  update: function(cart_item,message) {
    var check;
    if(this.cart_item.add_ons != null) {
      var i = JSON.parse(JSON.stringify(this.cart_item));
      i.add_ons = i.add_ons.h;
      check = i;
    } else check = this.cart_item;
    if(Std.string(cart_item) == Std.string(check)) this.element.innerText = message;
  }
  ,__class__: view_LocalStatus
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
  var a = [];
  var _g1 = 0;
  var _g = this.length;
  while(_g1 < _g) {
    var i = _g1++;
    a[i] = f(this[i]);
  }
  return a;
};
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
  var a1 = [];
  var _g11 = 0;
  var _g2 = this.length;
  while(_g11 < _g2) {
    var i1 = _g11++;
    var e = this[i1];
    if(f1(e)) a1.push(e);
  }
  return a1;
};
msignal_SlotList.NIL = new msignal_SlotList(null,null);
js_Boot.__toStr = {}.toString;
store_CartActions.add_item = new msignal_Signal1();
store_CartActions.increment_quantity = new msignal_Signal1();
store_StatusActions.update_global = new msignal_Signal1();
store_StatusActions.update_local = new msignal_Signal2();
view_Button.REQUIRED_DATA_ATTRS = [{ key : "aeroproductId", attr : "data-aeroproduct-id", field : "aerostat_id"},{ key : "aeroproductTitle", attr : "data-aeroproduct-title", field : "product_title"},{ key : "aeroproductVariationTitle", attr : "data-aeroproduct-variation-title", field : "product_variation_title"},{ key : "aeroproductVariationId", attr : "data-aeroproduct-variation-id", field : "id"},{ key : "aeroproductPrice", attr : "data-aeroproduct-price", field : "price"},{ key : "aeroproductCurrency", attr : "data-aeroproduct-currency", field : "currency"},{ key : "aeroproductQuantity", attr : "data-aeroproduct-quantity", field : "quantity"}];
view_Button.OPTIONAL_CART_ITEM_ADDONS = "add_ons";
view_Button.CART_ITEM_KEY_PRICE = "price";
view_Button.CART_ITEM_ATTR_CURRENCY = "aeroproductCurrency";
view_Button.OPTIONAL_DATA_ATTR_PREFIXES = [{ key : "aeroproductAddonId", field : view_Button.OPTIONAL_CART_ITEM_ADDONS}];
AddToCart.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=airshop_add_to_cart_button.js.map