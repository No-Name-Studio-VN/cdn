$(document).ready(function(){$("#searchbox").on("submit",function(t){t.preventDefault(),$("#warnslist").empty(),$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/users/`+$("#searchId").val(),method:"GET",contentType:"application/json",success:function(t){console.log(t.data),t.data.forEach((t,e)=>{var a=new Date(1e3*t.timestamp).toUTCString();$("#malert").remove(),$("#warnslist").append(`
              <a id="${t.warnId}" data-bs-toggle="modal" data-bs-target="#rmWarnM" data-bs-whatever="${t.reason}" data-bs-id="${t.warnId}"  class="list-group-item list-group-item-action">
                <div class="d-flex justify-content-between">
                  <h5 class="mb-1">${t.reason}</h5>
                  <small>${a}</small>
                </div>
                <small class="mb-1">Moderator: ${t.moderator} <span class="badge text-bg-secondary">${t.warnId}</span></small>
              </a>
            `)})},error:function(t){$("#malert").remove(),$("#mainc").append(`
        <div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert" id="malert">
          <div>
            <i class="ti ti-alert-triangle-filled"></i>
            <strong>${t.responseJSON.error}</strong>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`)}})});const n=document.getElementById("rmWarnM");n.addEventListener("show.bs.modal",t=>{var t=t.relatedTarget,e=t.getAttribute("data-bs-whatever");const a=t.getAttribute("data-bs-id");n.querySelector(".modal-body").innerHTML=`Are you sure you want to remove the <strong>${e}</strong> warn?`;t=n.querySelector(".modal-footer"),t.innerHTML=`
      <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
      `,e=document.createElement("button");e.setAttribute("type","button"),e.setAttribute("class","btn btn-danger"),e.setAttribute("id","btn_"+a),e.innerHTML="Confirm",t.appendChild(e),e.addEventListener("click",t=>{$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/users/`+$("#searchId").val(),method:"POST",data:JSON.stringify({warnId:a,method:"remove"}),contentType:"application/json",success:function(t){$("#"+a).remove(),$("#rmWarnM").modal("hide"),window.NotificationHandler.show({type:"success",content:t.data})},error:function(t){window.NotificationHandler.show({type:"danger",content:t.responseJSON.error})}})})})});