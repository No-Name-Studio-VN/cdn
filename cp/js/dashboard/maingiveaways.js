$(function(){const d={display:{icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-arrow-up",down:"fa fa-arrow-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"ti ti-check",clear:"fa fa-trash",close:"fa fa-times"},buttons:{today:!0,clear:!0,close:!0}},localization:{hourCycle:"h23"}},e=document.getElementById("gaModal");e.addEventListener("show.bs.modal",a=>{var a=a.relatedTarget;a.classList.add("active","modalactive");const n=e.querySelector(".modal-body"),i=e.querySelector(".modal-footer");n.innerHTML=`<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">${t_i("dashboard.loading")}...</span></div></div>`,"#gaModal"===a.getAttribute("data-bs-target")&&(a=a.getAttribute("data-bs-id"),$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/update/`+a,method:"GET",contentType:"application/json",success:function(a){a.data&&JSON.parse(a.data).forEach((a,e)=>{var t=moment(moment(a.startAt).format("MM/DD/YYYY HH:mm:ss"),"MM/DD/YYYY HH:mm:ss"),s=moment(moment(a.endAt).format("MM/DD/YYYY HH:mm:ss"),"MM/DD/YYYY HH:mm:ss"),l=moment.utc(s.diff(moment(t,"HH:mm:ss"))).format("mm"),o=`https://discord.com/channels/${a.guildId}/${a.channelId}/`+a.messageId,o=`
            <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="info-tab" data-bs-toggle="tab" data-bs-target="#info-tab-pane" type="button" role="tab" aria-controls="info-tab-pane" aria-selected="true"><span>Detail</span></button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="banner-tab" data-bs-toggle="tab" data-bs-target="#banner-tab-pane" type="button" role="tab" aria-controls="banner-tab-pane" aria-selected="true"><span>Banner</span></button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="msg-tab" data-bs-toggle="tab" data-bs-target="#msg-tab-pane" type="button" role="tab" aria-controls="msg-tab-pane" aria-selected="false"><span>Message</span></button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="info-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">   
                  <div class="row mb-3">
                    <label for="gaID" class="col-lg-2 col-form-label">Giveaway ID</label>
                    <div class="col-sm-10">
                      <div class="input-group">
                        <input class="form-control" id="gaID" value="${a.messageId}" aria-label="Giveaway ID" readonly>
                        <span class="input-group-text">#</span>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="channelId" class="col-lg-2 col-form-label">Channel ID</label>
                    <div class="col-sm-10">
                      <div class="input-group">
                        <input class="form-control" id="channelId" value="${a.channelId}" aria-label="Channel ID" readonly>
                        <span class="input-group-text">#</span>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="gaurl" class="col-lg-2 col-form-label">Giveaway URL</label>
                    <div class="col-sm-10">
                      <a href="${o}" target="_blank">${o}</a>
                    </div>
                  </div>

                  <hr class="my-4">
                  <div class="row mb-3">
                    <label for="gaCreateInput" class="col-lg-2 col-form-label">Start Time</label>
                    <div class="col-sm-10">
                      <div class="input-group log-event" id="gaCreate" data-td-target-input="nearest" data-td-target-toggle="nearest">
                        <input id="gaCreateInput" type="text" class="form-control" data-td-target="#gaCreate"/>
                        <span class="input-group-text" data-td-target="#gaCreate" data-td-toggle="datetimepicker"><i class="fa fa-calendar"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="gaEndInput" class="col-lg-2 col-form-label">End Time</label>
                    <div class="col-sm-10">
                      <div class="input-group log-event" id="gaEnd" data-td-target-input="nearest" data-td-target-toggle="nearest">
                        <input id="gaEndInput" type="text" class="form-control" data-td-target="#gaEnd"/>
                        <span class="input-group-text" data-td-target="#gaEnd" data-td-toggle="datetimepicker"><i class="fa fa-calendar"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="gaEndInput" class="col-lg-2 col-form-label">Time Duration</label>
                    <div class="col-sm-10">
                      <input type="text" readonly class="form-control-plaintext" value="${s.diff(t,"days")} days, ${s.diff(t,"hours")} hours, ${l} minutes">
                    </div>
                  </div>
                  
                  <hr class="my-4">

                  <div class="row mb-3">
                    <label for="prizeinput" class="col-lg-2 form-label">Prize</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="prizeinput" name="prize" value="${a.prize}">
                    </div>
                  </div>
                  
                  <div class="row mb-3">
                    <label for="winnerCount" class="col-lg-2 form-label">Number of Winners</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="winnerCount" name="winnerCount" value="${a.winnerCount}">
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="winnerIds" class="col-lg-2 form-label">List of Winners</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="winnerIds" name="winnerIds" value="${a.winnerIds}">
                    </div>
                  </div>
              </div>

              <div class="tab-pane fade" id="banner-tab-pane" role="tabpanel" aria-labelledby="banner-tab" tabindex="0">
                  ${a.image?`<div class="row mb-3">
                    <img src="${a.image}" class="img-fluid" alt="Giveaway Banner">
                  </div>
                  <div class="row">
                    <div class="d-grid gap-2 col-3 mx-auto">
                      <a class="btn btn-primary" role="button" href="${a.image}" download=""><i class="fa fa-download"></i> Download</a>
                    </div>
                  </div>`:`<div class="row">
                    <p>There is no available image.</p>
                  </div>`}
              </div>
              <div class="tab-pane fade" id="msg-tab-pane" role="tabpanel" aria-labelledby="msg-tab" tabindex="0">
                <div class="row">
                  <h6>Text can be formatted using <a href="https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts"  target="_blank">Markdown syntax</a>.</h6>
                </div>
                <hr class="my-4">
                <div class="row mb-3">
                  <label for="giveawaystartmsg" class="col-lg-2 form-label">Giveaway Start Title</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="giveawaystartmsg" name="giveawaystartmsg" value="${a.messages.giveaway}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="giveawayendedmsg" class="col-lg-2 form-label">Giveaway</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="giveawayendedmsg" name="giveawayendedmsg" value="${a.messages.giveawayEnded}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="invtopar" class="col-lg-2 form-label">Invite To Participate</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="invtopar" name="invtopar" value="${a.messages.inviteToParticipate}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="drawingmsg" class="col-lg-2 form-label">Drawing</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="drawingmsg" name="drawingmsg" value="${a.messages.drawing}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="dropmsg" class="col-lg-2 form-label">Drop Message</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="dropmsg" name="dropmsg" value="${a.messages.dropMessage}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="winmsg" class="col-lg-2 form-label">Win Message</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="winmsg" name="winmsg" value="${a.messages.winMessage.data.description}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="winmsgcolor" class="col-lg-2 form-label">Win Message Color</label>
                  <div class="col-sm-10">
                    <input type="color" class="form-control form-control-color" id="winmsgcolor" name="winmsgcolor" value="#${a.messages.winMessage.data.color}" title="Choose embed color">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="embedfooter" class="col-lg-2 form-label">Embed Footer</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="embedfooter" name="embedfooter" value="${a.messages.embedFooter}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="nowinnermsg" class="col-lg-2 form-label">No Winner</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="nowinnermsg" name="nowinnermsg" value="${a.messages.noWinner}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="winnersmsg" class="col-lg-2 form-label">Winners</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="winnersmsg" name="winnersmsg" value="${a.messages.winners}">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="endedatmsg" class="col-lg-2 form-label">Ended At</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="endedatmsg" name="endedatmsg" value="${a.messages.endedAt}">
                  </div>
                </div>
              </div>
            </div>

            `;n.innerHTML=o,new tempusDominus.TempusDominus(document.getElementById("gaCreate"),d).dates.setValue(tempusDominus.DateTime.convert(moment(moment(a.startAt).format("MM/DD/YYYY HH:mm:ss"),"MM/DD/YYYY HH:mm:ss").toDate())),new tempusDominus.TempusDominus(document.getElementById("gaEnd"),d).dates.setValue(tempusDominus.DateTime.convert(moment(moment(a.endAt).format("MM/DD/YYYY HH:mm:ss"),"MM/DD/YYYY HH:mm:ss").toDate())),document.getElementById("editform").setAttribute("action",`/dashboard/${a.guildId}/giveaways/update/`+a.messageId),i.innerHTML=`
            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
            <a href="javascript:void(0)" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#GAdeleteModal" data-bs-id="${a.messageId}" >Delete</a>
            <button class="btn btn-warning" type="submit" name="gaupdate" >Update</button>
            `})},error:function(a){n.innerHTML=`<div class="alert alert-danger" role="alert">${a.responseJSON.error}</div>`,i.innerHTML=`
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
        `}}))}),e.addEventListener("hidden.bs.modal",a=>{document.getElementsByClassName("modalactive")[0].classList.remove("active","modalactive")});document.getElementById("GAdeleteModal").addEventListener("show.bs.modal",a=>{a=a.relatedTarget.getAttribute("data-bs-id");document.getElementById("deleteform").setAttribute("action",window.location.pathname+"/update/"+a)});var a=document.getElementById("gaAddModal");a.addEventListener("show.bs.modal",a=>{a.relatedTarget.classList.add("active","modalactive")}),a.addEventListener("hidden.bs.modal",a=>{document.getElementsByClassName("modalactive")[0].classList.remove("active","modalactive")})});