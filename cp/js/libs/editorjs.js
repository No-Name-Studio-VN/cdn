const cPreview=function(e){return e.show=function(e,n){e=(e=JSON.stringify(e,null,4)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),console.log(e)},e}({});