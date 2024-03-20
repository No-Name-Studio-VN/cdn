(()=>{InjectCSS(`
    .object-fit-cover {
        -o-object-fit: cover !important;
        object-fit: cover !important;
    }`),$.ajax({url:"/api/bot",method:"GET",contentType:"application/json"}).done(function({data:e}){t(e,"banner","botbanner"),t(e,"avatar","botavatar"),$("#botglobal_name").text(e.global_name),$("#botusername").text(e.username),$("#botid").text("ID: "+e.id),e.bio?$("#botbio").text(e.bio).attr("nns-markdown",""):$("#botbio").remove(),e="#infocard",1==!0?($(e+"_loading").remove(),$(e).show()):($(e).before(`<div id="${e.replace("#","")}_loading" class="text-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>`),$(e).attr("style","display: none !important;"))}).fail(function(e){window.NotificationHandler.show({type:"error",content:e.responseJSON.error})});var e=(e,t,a)=>{var o=$(e);o.fileinput({showPreview:!0,showUpload:!0,browseOnZoneClick:!0,layoutTemplates:{footer:`
    <div class="file-thumbnail-footer" style ="height:94px">
      <input class="kv-input kv-new form-control input-sm form-control-sm text-center {TAG_CSS_NEW} file-name" value="{caption}" placeholder="Enter file name...">
      <div class="small" style="margin:15px 0 2px 0">{size}</div> {progress}
      {indicator}
      {actions}
    </div>`},maxFileSize:16777216,elErrorContainer:e+"-errors",allowedFileExtensions:["jpeg","jpg","png","gif"],uploadUrl:t,uploadExtraData:()=>({name:$(".kv-input:visible.file-name").val()})}),o.on("fileuploaded",(e,{response:t})=>{$(a).attr("src",t.data)})};function t(e,t,a){e[t]?(e=`https://cdn.discordapp.com/${t}s/${e.id}/${e[t]}.webp?size=1024`,$("#"+a).attr("src",e)):$("#"+a).remove()}e("#upbanner","/api/bot/banner","#botbanner"),e("#upavatar","/api/bot/avatar","#botavatar")})();