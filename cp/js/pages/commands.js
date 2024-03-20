$.ajax({url:"/commands/list",method:"GET",contentType:"application/json",success:function(t){var t=t.data,n=(document.getElementById("cmdBox").innerHTML=`
          <div class="d-flex flex-column flex-sm-row justify-content-between gap-3">
            <div class="d-block">
              <div class="position-relative">
                <input type="search" class="form-control py-2 ps-5" placeholder="Search all commands" aria-label="Search" id="input-search" >
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
                  <th data-field="folder" data-sortable="true" scope="col">Folder</th>
                  <th data-field="name" data-sortable="true" scope="col">Name</th>
                  <th data-field="type" data-sortable="true" scope="col">Type</th>
                  <th data-field="cooldown" data-sortable="true" scope="col">Cooldown</th>
                  <th data-field="action" scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="cmdstablecontent">
              </tbody>
            </table>
          </div>`,document.getElementById("cmdstablecontent"));t.forEach(e=>{e.files.forEach(t=>{var a=document.createElement("tr");a.className="search-items",a.innerHTML=function(t,a){var e=a.cooldown;e&&null!=e||(e=0);let n=a.type;n=1==n?"Slash Command":2==n?"Context Menu":3==n?"User Action":"Message Command";return`
    <td>
      <span class="badge rounded-pill btn-label-primary">${t.folder}</span>
    </td>
    <td>
      <div class="d-flex align-items-center">
        <div>
          <div class="command-meta-info">
            <h6 class="command-name mb-0" data-name="${a.name}">${a.name}</h6>
            <span class="command-des fs-3" data-description="${a.description}">${a.description}</span>
          </div>
        </div>
      </div>
    </td>
    <td>
      <span data-type="${a.type}">${n}</span>
    </td>
    <td>
      <span data-cooldown="${e}">${e}</span>
    </td>
    <td>
      <div class="action-btn">
        <button type="button" class="btn btn-icon btn-label-primary" data-name="${a.name}" data-dir="${t.folder}" data-action="info" >
          <i class="ti ti-info-circle" ></i>
        </button>
        <button type="button" class="btn btn-icon btn-label-primary" data-name="${a.name}" data-dir="${t.folder}" data-action="reload" >
          <i class="ti ti-reload" ></i>
        </button>
        <button type="button" class="btn btn-icon btn-label-danger" data-name="${a.name}" data-dir="${t.folder}" data-action="delete" >
          <i class="ti ti-circle-minus" ></i>
        </button>
      </div>
    </td>`}(e,t),n.appendChild(a)})})},error:function(t){window.NotificationHandler.show(t)}}),"/commands"==window.location.pathname&&window.addEventListener("load",function(){$(".btn[data-action]").on("click",function(t){var a=$(this).attr("data-action");if("delete"==a||"reload"==a)return t.preventDefault(),window.NotificationHandler.show({content:"You are not permitted to take action on these commands!",type:"danger",title:"No permission"})})});