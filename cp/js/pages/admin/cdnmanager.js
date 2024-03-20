(()=>{$(document).ready(async function(){var i;i="https://api.github.com/repos/No-Name-Studio-VN/cdn/contents/",await new Promise((e,t)=>{$.ajax({url:i,method:"GET",success:function(t){let i="";for(let e=0;e<t.length;e++)"file"==t[e].type&&(i+=a(t[e]));Promise.all([]).then(()=>e(i))}})}).then(e=>{$("#fileBox").html(e),$("a[previewcontent]").click(function(e){e.preventDefault();var e=$(this).attr("url"),t=e.split(".").pop();["png","jpg","jpeg","gif","bmp","webp"].includes(t)?$("#previewModalBody").html(`<img src="${e}" class="img-fluid" alt="Preview">`):$("#previewModalBody").html(`<iframe src='https://drive.google.com/viewerng/viewer?embedded=true&url=${e}' style="width: 100%; height: 100%; min-height: 800px!important;" class="rounded-4" frameborder='0'></iframe>`),$("#previewModal").modal("show")})})});const a=e=>(e.download_url&&(e.download_url=e.download_url.replace("https://raw.githubusercontent.com/No-Name-Studio-VN/cdn","https://cdn.nnsvn.me").replace("/main/","/")),`
    <div class='card mb-2'>
      <div class='card-body'>
        <div class='d-flex justify-content-between align-items-center'>
          <div class='d-flex align-items-center'><i class='ti ti-eye me-2'></i>
            <a href="#" previewcontent url='${e.download_url}'>${e.name}</a>
          </div>
          <div class='d-flex align-items-center gap-3'>
            <button type="button" nns-toclipboard nns-toclipboard-data="${e.download_url}" class='btn btn-primary'><i class="ti ti-link"></i></button>
            <a href='${e.download_url}' target='_blank' class='btn btn-primary'><i class="ti ti-download"></i></a>
          </div>
        </div>
      </div>
    </div>`)})();