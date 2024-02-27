$(function () {
  "use strict";
  var userbanner = "";
  var connectionlinks = "";
  var avatar = "";
  $.ajax({
    url: `/profile/${window.location.pathname.split("/")[2]}/avatar`,
    method: "GET",
    contentType: "application/json",
    success: function (res) {
      avatar = res;
    }
  })

  $.ajax({
    url: `/profile/${window.location.pathname.split("/")[2]}/info`,
    method: "GET",
    contentType: "application/json",
    success: function (res) {
      $.ajax({
        url: `/profile/${window.location.pathname.split("/")[2]}/banner`,
        method: "GET",
        contentType: "application/json",
        success: function (a) {
          userbanner = a;

          console.log(res);
          const user = res.data;
          if (user.connections) {

            user.connections.forEach((r, i) => {
              if (r.type === "youtube" && r.visibility === 1) {
                connectionlinks += `
                          <li class="position-relative">
                            <a class="text-white bg-danger d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle" target="_blank" href="https://www.youtube.com/channel/${r.id}">
                              <i class="bi bi-youtube"></i>
                            </a>
                          </li>`;
              }
            })
          }

          $("#userprofile").html(
            $(`<div style="height:450px;">
                <img id="userbanner" src='${userbanner}' alt="Banner" class="img-fluid" style="display: block;margin-left: auto;margin-right: auto; width:100%;height:100%;object-fit:cover;">
              </div>
                    <div class="row align-items-center">
                      <div class="col-lg-4 order-lg-1 order-2">
                        <div class="d-flex align-items-center justify-content-around m-4">
                          <div class="text-center">
                            <h4 class="mb-0 fw-semibold lh-1">938</h4>
                            <p class="mb-0 fs-4">Posts</p>
                          </div>
                          <div class="text-center">
                            <h4 class="mb-0 fw-semibold lh-1">${res.db.balance.cash}</h4>
                            <p class="mb-0 fs-4">Cash</p>
                          </div>
                          <div class="text-center">
                            <h4 class="mb-0 fw-semibold lh-1">${res.db.balance.gem}</h4>
                            <p class="mb-0 fs-4">Gem</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 mt-n3 order-lg-2 order-1">
                        <div class="mt-n5">
                          <div class="d-flex align-items-center justify-content-center mb-2">
                            <div class="linear-gradient d-flex align-items-center justify-content-center rounded-circle" style="width: 110px; height: 110px;" ;="">
                              <div class="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden" style="width: 100px; height: 100px;" ;="">
                                <img src="${avatar}" alt="Avatar" class="w-100 h-100">
                              </div>
                            </div>
                          </div>
                          <div class="text-center">
                            ${user.globalName ? `<h5 class="fs-5 mb-0 fw-semibold">${user.globalName} <span class="text-info"><i class="bi bi-patch-check"></i></span></h5>` : ""}
                            <p class="mb-0 fs-4">@${user.username}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 order-last">
                        <ul class="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-start my-3 gap-3" id="connectionlinks">
                          ${connectionlinks}
                        </ul>
                      </div>
                    </div>
  `))
        },
        error: function () {
          userbanner = "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?w=1280&h=720";
        }
      })
    },
    error: function (res) {
      console.log(res)
    }
  })
});