$(function(){let s="",i="",l="";const e="/api/users/"+window.location.pathname.split("/")[2];$.ajax({url:e+"/avatar",method:"GET",contentType:"application/json",success:function(e){l=e}}),$.ajax({url:e+"/info",method:"GET",contentType:"application/json",success:function(t){$.ajax({url:e+"/banner",method:"GET",contentType:"application/json",success:function(e){s=e;e=t.data;e.connections&&e.connections.forEach((e,t)=>{"youtube"===e.type&&1===e.visibility&&(i+=`
                          <li class="position-relative">
                            <a class="text-white bg-danger d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle" target="_blank" href="https://www.youtube.com/channel/${e.id}">
                              <i class="ti ti-brand-youtube"></i>
                            </a>
                          </li>`)}),$("#userprofile").html($(`<div style="height:450px;">
                <img id="userbanner" src='${s}' alt="Banner" class="img-fluid" style="display: block;margin-left: auto;margin-right: auto; width:100%;height:100%;object-fit:cover;">
              </div>
                    <div class="row align-items-center">
                      <div class="col-lg-4 order-lg-1 order-2">
                        <div class="d-flex align-items-center justify-content-around m-4">
                          <div class="text-center">
                            <h4 class="mb-0 fw-semibold lh-1">938</h4>
                            <p class="mb-0 fs-4">Posts</p>
                          </div>
                          <div class="text-center">
                            <h4 class="mb-0 fw-semibold lh-1">${t.db.balance.cash}</h4>
                            <p class="mb-0 fs-4">Cash</p>
                          </div>
                          <div class="text-center">
                            <h4 class="mb-0 fw-semibold lh-1">${t.db.balance.gem}</h4>
                            <p class="mb-0 fs-4">Gem</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 mt-n3 order-lg-2 order-1">
                        <div class="mt-n5">
                          <div class="d-flex align-items-center justify-content-center mb-2">
                            <div class="linear-gradient d-flex align-items-center justify-content-center rounded-circle" style="width: 110px; height: 110px;" ;="">
                              <div class="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden" style="width: 100px; height: 100px;" ;="">
                                <img src="${l}" alt="Avatar" class="w-100 h-100">
                              </div>
                            </div>
                          </div>
                          <div class="text-center">
                            ${e.globalName?`<h5 class="fs-5 mb-0 fw-semibold">${e.globalName} <i class="text-info ti ti-discount-check-filled"></i></h5>`:""}
                            <p class="my-1">
                            <i class="ti ti-at fs-4"></i>
                            ${e.username}
                          </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 order-last">
                        <ul class="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-start my-3 gap-3" id="connectionlinks">
                          ${i}
                        </ul>
                      </div>
                    </div>
  `))},error:function(){s="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?w=1280&h=720"}})},error:function(e){console.log(e)}})});