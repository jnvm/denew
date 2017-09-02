var G =typeof window!="undefined" && window
	|| typeof global!="undefined" && global
	|| typeof self  !="undefined" && self
Object.getOwnPropertyNames(G)
	.filter(x=>{
		try{return !!(new G[x])}
		catch(err){}
	})
	.forEach(thing=>
		G[thing]=Reflect.construct(Proxy,[
			G[thing]
			,{apply(target,myThis,args){
				return Reflect.construct(target,args)
			}}
		])
	)