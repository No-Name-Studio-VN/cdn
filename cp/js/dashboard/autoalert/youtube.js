(()=>{$("#ytembedtoggle").on("change",function(){$("#emsection").toggleClass("d-none")});const t=document.getElementById("ytModal");t.addEventListener("show.bs.modal",e=>{e=e.relatedTarget;e.classList.add("active","modalactive");const l=t.querySelector(".modal-body");var a=t.querySelector(".modal-footer");l.innerHTML='<p class="placeholder-glow"><span class="placeholder col-12"></span><span class="placeholder col-6"></span><span class="placeholder w-75"></span><span class="placeholder w-40"></span></p>',"#ytModal"===e.getAttribute("data-bs-target")&&(e=e.getAttribute("data-bs-id"),$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/youtube/update/`+e,method:"GET",contentType:"application/json",success:function(e){e.error?l.innerHTML=`<div class="alert alert-danger" role="alert">${e.error}</div>`:e.data&&JSON.parse(e.data).forEach((e,a)=>{var t=`
              <ul class="nav nav-pills mb-3" id="eTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="editinfo-tab" data-bs-toggle="tab" data-bs-target="#editinfo-tab-pane" type="button" role="tab" aria-controls="editinfo-tab-pane" aria-selected="true">
                    <span>Detail</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="editmsg-tab" data-bs-toggle="tab" data-bs-target="#editmsg-tab-pane" type="button" role="tab" aria-controls="editmsg-tab-pane" aria-selected="false">
                    <span>Message</span>
                  </button>
                </li>
              </ul>

              <div class="tab-content" id="eTabContent">
                <div class="tab-pane fade show active" id="editinfo-tab-pane" role="tabpanel" aria-labelledby="editinfo-tab" tabindex="0">

                  <div class="row mb-3">
                    <label for="channelId" class="col-lg-2 col-form-label">Channel</label>
                    <div class="col-sm-10">

                      <div class="input-group has-validation">
                        <select class="form-select" id="channelselect" name="channelselect" required>
                          <% guild.channels.cache.filter((ch) => ch.type === 0 || ch.type === 5).forEach((ch) => { %>
                          <option value='<%= ch.id %>' ${"<%= ch.id %>"===e.Youtube.channelId?"selected":""}># <%= ch.name %></option>
                          <% }); %>
                        </select>
                        <div class="invalid-feedback">
                          A valid channel is required.
                        </div>
                        <label class="input-group-text" for="channelselect">Channel</label>
                      </div>

                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row mb-3">
                    <label for="ytid" class="col-lg-2 col-form-label">Channel ID</label>
                    <div class="col-sm-10" id="cidholder">
                      <input type="text" class="form-control" placeholder="Channel ID" name="ytid" id="ytid" value="${e.Youtube.youtubeId}">
                    </div>
                  </div>

                </div>

                <div class="tab-pane fade" id="editmsg-tab-pane" role="tabpanel" aria-labelledby="editmsg-tab" tabindex="0">

                  <div class="row">
                    <h6>Text can be formatted using <a href="/variables" target="_blank">our syntax</a>.</h6>
                  </div>
                  <hr class="my-4">

                  <div class="row mb-3">
                    <div class="col-lg-2">
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" name="ytmsgtoggle" id="ytmsgtoggle" ${!0===e.Youtube.message.msg.toggle?"checked":""}>
                        <label class="form-check-label" for="ytmsgtoggle">Plain Message</label>
                      </div>
                    </div>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="ytmsg" name="ytmsg" value="${e.Youtube.message.msg.content}">
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row mb-3">
                    <div class="col-lg-2">
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" name="ytembedtoggle" id="edittoggle" ${!0===e.Youtube.message.embed.toggle?"checked":""}>
                        <label class="form-check-label" for="editsection">Embed</label>
                      </div>
                    </div>
                  </div>

                  <div class="container ${!0===e.Youtube.message.embed.toggle?"":"d-none"}" id="editsection">

                    <div class="row mb-3">
                      <div class="col-lg-6">
                        <label for="titleem" class="form-label">Title</label>
                        <input type="text" class="form-control" id="titleem" name="titleem" value='${e.Youtube.message.embed.title}'>
                      </div>
                      <div class="col-lg-6">
                        <label for="titleurlem" class="form-label">Title URL</label>
                        <input type="text" class="form-control" id="titleurlem" name="titleurlem" value='${e.Youtube.message.embed.titleurl}'>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col">

                        <label for="desem" class="form-label">Description</label>
                        <textarea type="text" class="form-control" id="desem" name="desem" rows="5" maxlength="1000">${e.Youtube.message.embed.description}</textarea>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-lg-6">
                        <label for="authorname" class="form-label">Author</label>
                        <input type="text" class="form-control" id="authorname" name="authorname" value='${e.Youtube.message.embed.authorname}'>
                      </div>
                      <div class="col-lg-6">
                        <label for="authoricon" class="form-label">Author Icon</label>
                        <input type="text" class="form-control" id="authoricon" name="authoricon" value='${e.Youtube.message.embed.authoricon}'>
                      </div>
                    </div>


                    <div class="row mb-3">
                      <div class="col-lg-6">
                        <label for="thumbem" class="form-label">Thumbnail</label>
                        <input type="text" class="form-control" id="thumbem" name="thumbem" value='${e.Youtube.message.embed.thumbnail}'>
                      </div>
                      <div class="col-lg-6">
                        <label for="imageem" class="form-label">Image</label>
                        <input type="text" class="form-control" id="imageem" name="imageem" value='${e.Youtube.message.embed.image}'>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-lg-6">
                        <label for="ftem" class="form-label">Footer</label>
                        <input type="text" class="form-control" id="ftem" name="ftem" value='${e.Youtube.message.embed.footer}'>
                      </div>
                      <div class="col-lg-6">
                        <label for="footericon" class="form-label">Footer Icon</label>
                        <input type="text" class="form-control" id="footericon" name="footericon" value='${e.Youtube.message.embed.footericon}'>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-lg-2 form-label" for="tsem">Set Timestamp</label>
                      <div class="col-sm-10">
                        <input class="form-check form-check-input" type="checkbox" id="tsem" name="tsem" ${!0===e.Youtube.message.embed.timestamp?"checked":""}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `;l.innerHTML=t,document.getElementById("form").setAttribute("action",`/dashboard/${e.guildId}/autoalert/youtube/update/`+e.Youtube.youtubeId),$("#edittoggle").on("change",function(){$("#editsection").toggleClass("d-none")})})},error:function(e){l.innerHTML=`<div class="alert alert-danger" role="alert">${e}</div>`}}),a.innerHTML=`
      <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
      <button class="btn btn-danger" type="submit" name="ytdelete" >Delete</button>
      <button class="btn btn-warning" type="submit" name="ytupdate" >Update</button>
      `)}),t.addEventListener("hidden.bs.modal",e=>{document.getElementsByClassName("modalactive")[0].classList.remove("active","modalactive")})})();