var debounce = function(fn, t) {
  let timeOut
  return function(...args){
    const context=this
    clearTimeout(timeOut)
    timeOut=setTimeout(()=>{
      fn.apply(context,args)
    },t)
  }
}