$(function() {
  $.ajax({
    url: `/auth/sessions`,
    method: "GET",
    contentType: "application/json",
    success: function(res) {
      var sessions = res.user_sessions;
      var container = $('#sessions_box');
      container.empty();
      if(sessions.length === 0) {
        container.append(`<p class="text-center">No sessions found</p>`);
      }
      else {
        var uap = new UAParser();
        container.append(`<h5 class="fs-5 fw-semibold mb-0">Devices</h5><p class="mb-3">There might be multiple activity sessions from the same device.</p><button class="btn btn-primary mb-4">Sign out from all devices</button>`)
        for(var i = 0; i < sessions.length; i++) {
          var session = sessions[i];
          uap.setUA(session.agent);
          var result = uap.getResult();
          console.log(result);
          var html = `
          <div class="d-flex align-items-center justify-content-between py-3 border-bottom">
            <div class="d-flex align-items-center gap-3">
              <i class="${getDeviceIcon(result.device.type)} text-dark d-block fs-7" width="26" height="26"></i>
              <div>
                <h5 class="fs-4 fw-semibold mb-0">${result.os.name} ${result.os.version} - ${result.browser.name}</h5>
                <p class="mb-0">IP: ${session.ip}</p>
                <p class="mb-0">Location: ${session.location || "N/A"}</p>
                <p class="mb-0">${session.time}</p>
              </div>
            </div>
            <a class="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle" href="javascript:void(0)">
              <i class="ti ti-dots-vertical"></i>
            </a>
          </div>
          `;
          container.append(html);
        }
      }
    }
  });

  function getDeviceIcon(type) {
    if(type === "desktop") return `bi bi-display`;
    else if(type === "mobile") return `bi bi-phone`;
    else if(type === "tablet") return `bi bi-tablet`;
    else return `bi bi-display`;
  }
});