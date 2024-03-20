$(function(){$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/automodrules`,method:"GET",contentType:"application/json",success:function(e){for(var a=0;a<e.data.length;a++){var s,t=e.data[a],c=(4===t.triggerType?s=`
          <div class="mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" name="${t.id}_toggle" id="${t.id}_toggle" ${t.enabled?"checked":""}>
              <label class="form-check-label" for="${t.id}_toggle">Block messages containing these words from being posted.</label>
            </div>
          </div>

          <hr class="my-4">
          
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="p1[${t.id}]" id="p1[${t.id}]" ${t.triggerMetadata.presets.includes(1)?"checked":""}>
            <label class="form-check-label" for="p1[${t.id}]"><strong>Severe Profanity</strong> - Extreme forms of swearing or cursing</label>
          </div>
          
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="p2[${t.id}]" id="p2[${t.id}]" ${t.triggerMetadata.presets.includes(2)?"checked":""}>
            <label class="form-check-label" for="p2[${t.id}]"><strong>Insults & Slurs</strong> - Personally insulting terms and terms that may be considered hate speech</label>
          </div>
          
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="p3[${t.id}]" id="p3[${t.id}]" ${t.triggerMetadata.presets.includes(3)?"checked":""}>
            <label class="form-check-label" for="p3[${t.id}]"><strong>Sexual Content</strong> - Terms that refer to sexually explicit behavior or activity</label>
          </div>
          
          <hr class="my-4">

          <h5 class="mb-3">Response</h5>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="sm[${t.id}]" id="sm[${t.id}]" checked>
            <label class="form-check-label" for="sm[${t.id}]">Send a custom message to members.</label>
          </div>
          
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="sa[${t.id}]" id="sa[${t.id}]">
            <label class="form-check-label" for="sa[${t.id}]">Sends an alert containing the flagged message to a chosen channel.</label>
          </div>
          
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" name="tm[${t.id}]" id="tm[${t.id}]">
            <label class="form-check-label" for="tm[${t.id}]">Temporarily disables a member's ability to send messages or join voice channels.</label>
          </div>

          <div class="col-12">
            <label for="customMessage[${t.id}]" class="form-label">Custom block message</label>
            <input type="text" name="customMessage[${t.id}]" class="form-control" placeholder="Custom block message" id="customMessage[${t.id}]" value="${t.actions[Object.keys(t.actions)[0]].metadata.customMessage}" required></input>
          </div>

          `:3===t.triggerType?s=`
          <div class="mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" name="${t.id}_toggle" id="${t.id}_toggle" ${t.enabled?"checked":""} >
              <label class="form-check-label" for="${t.id}_toggle">Block messages with spam-like content from being posted.</label>
            </div>
          </div>

          <h5 class="mb-3">Response</h5>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="sm[${t.id}]" id="sm[${t.id}]" checked>
            <label class="form-check-label" for="sm[${t.id}]">Send a custom message to members.</label>
          </div>
          
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="sa[${t.id}]" id="sa[${t.id}]">
            <label class="form-check-label" for="sa[${t.id}]">Sends an alert containing the flagged message to a chosen channel.</label>
          </div>
          
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" name="tm[${t.id}]" id="tm[${t.id}]">
            <label class="form-check-label" for="tm[${t.id}]">Temporarily disables a member's ability to send messages or join voice channels.</label>
          </div>

          <div class="col-12">
            <label for="customMessage[${t.id}]" class="form-label">Custom block message</label>
            <input type="text" name="customMessage[${t.id}]" class="form-control" placeholder="Custom block message" id="customMessage[${t.id}]" value="${t.actions[Object.keys(t.actions)[0]].metadata.customMessage}" required></input>
          </div>

          `:5===t.triggerType?s=`
          <div class="mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" name="${t.id}_toggle" id="${t.id}_toggle" ${t.enabled?"checked":""} >
              <label class="form-check-label" for="${t.id}_toggle">Block messages with an excessive # of role and user mentions</label>
            </div>
          </div>
          
          <div class="form-floating mb-3">
            <input type="number" name="${t.id}amount" class="form-control" placeholder="Leave a comment here" min=0 max=1000 value=${t.triggerMetadata.mentionTotalLimit}></input>
            <label for="${t.id}amount">Unique mentions (role + user) per message</label>
          </div>

          <h5 class="mb-3">Response</h5>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="sm[${t.id}]" id="sm[${t.id}]" checked>
            <label class="form-check-label" for="sm[${t.id}]">Send a custom message to members.</label>
          </div>
          
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="sa[${t.id}]" id="sa[${t.id}]">
            <label class="form-check-label" for="sa[${t.id}]">Sends an alert containing the flagged message to a chosen channel.</label>
          </div>
          
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" name="tm[${t.id}]" id="tm[${t.id}]">
            <label class="form-check-label" for="tm[${t.id}]">Temporarily disables a member's ability to send messages or join voice channels.</label>
          </div>

          <div class="col-12">
            <label for="customMessage[${t.id}]" class="form-label">Custom block message</label>
            <input type="text" name="customMessage[${t.id}]" class="form-control" placeholder="Block message" id="customMessage[${t.id}]" value="${t.actions[Object.keys(t.actions)[0]].metadata.customMessage}" required></input>
          </div>

          `:1===t.triggerType?s=`
          <div class="mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" name="${t.id}_toggle" id="${t.id}_toggle" ${t.enabled?"checked":""}>
              <label class="form-check-label" for="${t.id}_toggle">Block messages containing these words from being posted.</label>
            </div>
          </div>

          <hr class="my-4">
          
          <div class="col-12">
            <label for="blw[${t.id}]" class="form-label">Block words</label>
            <textarea type="text" name="blw[${t.id}]" class="form-control" placeholder="Block words" id="blw[${t.id}]" style="height: 370px;" required>${t.triggerMetadata.keywordFilter.join(", ")}</textarea>
          </div>
          
          <hr class="my-4">

          <h5 class="mb-3">Response</h5>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="sm[${t.id}]" id="sm[${t.id}]" checked>
            <label class="form-check-label" for="sm[${t.id}]">Send a custom message to members.</label>
          </div>
          
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="sa[${t.id}]" id="sa[${t.id}]">
            <label class="form-check-label" for="sa[${t.id}]">Sends an alert containing the flagged message to a chosen channel.</label>
          </div>
          
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" name="tm[${t.id}]" id="tm[${t.id}]">
            <label class="form-check-label" for="tm[${t.id}]">Temporarily disables a member's ability to send messages or join voice channels.</label>
          </div>

          <div class="col-12">
            <label for="customMessage[${t.id}]" class="form-label">Custom block message</label>
            <input type="text" name="customMessage[${t.id}]" class="form-control" placeholder="Custom block message" id="customMessage[${t.id}]" value="${t.actions[Object.keys(t.actions)[0]].metadata.customMessage}" required></input>
          </div>

          `:t.name.toUpperCase().trim().replace(/\s+/g,""),""),c=!0===t.enabled?`<button type="button" class="btn btn-warning" data-bs-toggle="modal" btn-type="disable" data-bs-target="#modal" data-bs-name="${t.name}" data-bs-id="${t.id}" >Disable</button>`:`<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal" btn-type="enable" data-bs-name="${t.name}" data-bs-id="${t.id}" >Enable</button>`,c=`
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${t.id}" aria-expanded="false" aria-controls="${t.id}" >
              <strong>${t.name} <span class="badge rounded-pill ${!0===t.enabled?"bg-primary":"bg-secondary"}">${!0===t.enabled?"Enabled":"Disabled"}</span></strong>
            </button>
          </h2>
          <div id="${t.id}" class="accordion-collapse collapse">
            <div class="accordion-body">

              ${s}

              <div class="d-flex mt-3 mb-3 gap-3">
                ${c}
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal" data-bs-name="${t.name}" btn-type="delete" data-bs-id="${t.id}" >Delete</button>
              </div>
            </div>
          </div>
        </div>
      `;$("#accordion").append(c)}},error:function(e){console.log(e.responseJSON.error)}});const s=document.getElementById("modal");s.addEventListener("show.bs.modal",e=>{const a=e.relatedTarget;s.querySelector(".modal-body").innerHTML=`Are you sure you want to ${a.getAttribute("btn-type")} the "${a.getAttribute("data-bs-name")}" AutoMod rule?`,s.querySelector(".modal-footer").innerHTML=`
      <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
      <button class="btn btn-danger" type="button" id="btn_${a.getAttribute("data-bs-id")}" >Confirm</button>
      `,$("#btn_"+a.getAttribute("data-bs-id")).click(async function(){$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/automodrules/${a.getAttribute("data-bs-id")}/edit`,method:"POST",contentType:"application/json",data:JSON.stringify({enabled:"enable"===a.getAttribute("btn-type")}),success:function(e){e.data&&window.location.reload()},error:function(e){window.NotificationHandler.show({type:"danger",content:e.responseJSON.error})}})})})});