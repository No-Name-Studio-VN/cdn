(()=>{let e=document.getElementById("addurlBtn");$.ajax({url:"/shortlink/data",method:"GET",contentType:"application/json",success:function(t){var t=t.data,a=(document.getElementById("urlBox").innerHTML=`
          <div class="d-flex flex-column flex-sm-row justify-content-between gap-3">
            <div class="d-block">
              <div class="position-relative">
                <input type="search" class="form-control py-2 ps-5" placeholder="Search all links" aria-label="Search" id="input-search" >
                <i class="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 ms-3"></i>
              </div>
            </div>
                                              
            <div>
              <button type="button" class="btn px-3 btn-primary d-flex align-items-center"><i class="ti ti-filter me-2"></i> <span>Filters</span><span class="vr opacity-20 mx-3"></span><span class="text-xs">2</span></button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table align-middle text-nowrap" nns-search-table nns-search-input="input-search">
              <thead class="header-item">
                <tr>
                  <th data-field="alias" data-sortable="true" scope="col">Shortened URL</th>
                  <th data-field="origUrl" data-sortable="true" scope="col">Original URL</th>
                  <th data-field="timestamp" data-sortable="true" scope="col">Created at</th>
                  <th data-field="clicks" data-sortable="true" scope="col">Clicked</th>
                  <th data-field="action" scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="tablecontent">
              </tbody>
            </table>
          </div>`,document.getElementById("tablecontent"));t.forEach(t=>{var e=document.createElement("tr");e.setAttribute("url-id",t.shortUrl),e.className="search-items",e.innerHTML=o(t),a.appendChild(e)}),e.removeAttribute("disabled"),e.innerHTML='<i class="ti ti-plus"></i>'},error:function(t){window.NotificationHandler.show(t)}});document.getElementById("urladd");document.getElementById("shortlinkform").addEventListener("submit",function(t){if(t.preventDefault(),!this.checkValidity())return t.stopPropagation();$.ajax({url:"/api/shortlink/usercreate",method:"POST",data:{origUrl:document.getElementById("origUrl").value,alias:document.getElementById("alias").value},success:function(t){window.NotificationHandler.show({content:"Successfully created a new URL",type:"success"});var e=document.createElement("tr");e.setAttribute("url-id",t.data.shortUrl),e.className="search-items",e.innerHTML=o(t.data),tablecontent.appendChild(e),$("#urlAddModal").modal("hide")},error:function(t){console.log(t),window.NotificationHandler.show({content:t.responseJSON.error,type:"danger"})}})});const a=document.getElementById("urlDeleteModal"),n=(a.addEventListener("show.bs.modal",t=>{var e=t.relatedTarget.getAttribute("data-id");a.querySelector(".modal-body").innerHTML="Are you sure you want to delete this url?",a.querySelector(".modal-footer").innerHTML=`
      <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
      <button class="btn btn-danger" type="button" id="del_btn_${e}" >Confirm</button>
      `,document.getElementById("del_btn_"+e).addEventListener("click",async function(){$.ajax({url:"/shortlink/manage/"+e,method:"POST",data:{method:"delete"},success:function(t){window.NotificationHandler.show({type:"success",content:"Successfully deleted the URL"}),$("#urlDeleteModal").modal("hide"),$(`tr[url-id="${e}"]`).remove()},error:function(t){window.NotificationHandler.show({type:"danger",content:t.responseJSON.error})}})})}),document.getElementById("urlEditModal")),o=(n.addEventListener("show.bs.modal",t=>{var a=t.relatedTarget.getAttribute("data-id");$.ajax({url:"/shortlink/manage/"+a,method:"GET",contentType:"application/json",success:function(t){n.querySelector("#edit_origUrl").value=t.data.origUrl,n.querySelector("#edit_alias").value=t.data.shortUrl,n.querySelector(".modal-footer").innerHTML=`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
                <button class="btn btn-primary" type="button" id="edit_btn_${a}" >Save</button>`,document.getElementById("edit_btn_"+a).addEventListener("click",async function(){$.ajax({url:"/shortlink/manage/"+a,method:"POST",data:{method:"update",origUrl:n.querySelector("#edit_origUrl").value,newalias:n.querySelector("#edit_alias").value},success:function(t){window.NotificationHandler.show({type:"success",content:"Successfully edited the URL"}),$("#urlEditModal").modal("hide");var e=document.createElement("tr");e.setAttribute("url-id",t.data.shortUrl),e.className="search-items",e.innerHTML=o(t.data),$(`tr[url-id="${a}"]`).replaceWith(e)},error:function(t){window.NotificationHandler.show({type:"danger",content:t.responseJSON.error})}})})},error:function(t){window.NotificationHandler.show({type:"danger",content:t.responseJSON.error})}})}),document.getElementById("urlShareModal").addEventListener("show.bs.modal",t=>{var t=t.relatedTarget.getAttribute("data-id"),e=window.innerWidth/3;QRCode.toCanvas(document.getElementById("qrcode"),"https://n2cc.me/"+t,{width:e},function(t){t&&console.error(t),console.log("success!")})}),t=>`
    <td class="text-wrap"><a href='https://n2cc.me/${t.shortUrl}'>${t.shortUrl}</a> <span><a class="copy-shorturl" data-bs-toggle="tooltip" data-bs-title="Copy" href="javascript:void(0)" nns-toclipboard nns-toclipboard-data='https://n2cc.me/${t.shortUrl}'><i class="ti ti-copy ms-1"></i></a></span></td>
    <td class="text-wrap"><a href='${t.origUrl}'>${t.origUrl}</a></td>
    <td>${bt_dateformatter(t.timestamp)}</td>
    <td>${t.clicks}</td>
    <td>
      <div class="action-btn">
        <button type="button" title="share" class="btn btn-icon btn-label-primary" data-id="${t.shortUrl}" data-action="share" data-bs-toggle="modal" data-bs-target="#urlShareModal" >
            <i class="ti ti-share"></i>
        </button>
        <button type="button" title="edit" class="btn btn-icon btn-label-primary" data-id="${t.shortUrl}" data-action="edit" data-bs-toggle="modal" data-bs-target="#urlEditModal" >
          <i class="ti ti-edit"></i>
        </button>
        <button type="button" title="delete" class="btn btn-icon btn-label-danger" data-id="${t.shortUrl}" data-action="delete" data-bs-toggle="modal" data-bs-target="#urlDeleteModal" >
          <i class="ti ti-circle-minus"></i>
        </button>
      </div>
    </td>`)})();