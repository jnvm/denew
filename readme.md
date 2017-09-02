# denew

Are you bothered by the `new` keyword?

Is its presence in code [irksome](https://www.youtube.com/watch?v=SXX6QMyB_vE&t=3s)?

Does reading it set off an internal monologue about how presumptuous this glorified factory function is, insisting its hallowed summoning be heralded with a claim of needing something heretofore unseen?

I thought so.

This module wraps the call to all native `new`-ables (like `Array`, `Map`, `Set`, etc in the browser, node, or a web worker) to internally do it for you so you never have to use the keyword again, and can invoke them like any other factory function.

#### so instead of

```javascript
var s = new Set()
```

#### it can just be

```javascript
var s = Set()
```


Except for classes, because you make those, and there's currently not way to globally proxy all class creation.  Though if you don't like `new` you probably don't use classes.  Also someone already made a [thing](https://www.npmjs.com/package/old) for that.

### Does this break invocations that already use `new`?
None that I've found so far:

```javascript
require('denew')
var x=Set()
var y=new Set() //no error
var z=new Set   //no error
x.add(7)
y.add(6) //no error
z.add(5) //no error

var d=Date()
var e=new Date() //no error
var f=new Date   //no error
d.getTime //[Function: getTime]
e.getTime //[Function: getTime]
f.getTime //[Function: getTime]

//etc
```
Though...I guess if you're someone who says:
```javascript
var x=new Date //without the (), which is valid but weird
```
you **cannot** now just say:
```javascript
var x=Date
```
you still have to execute it:
```javascript
var x=Date()
```