window.LoadHandler.js("https://cdn.jsdelivr.net/npm/ua-parser-js/src/ua-parser.min.js").then(()=>{$.ajax({url:"/auth/sessions",method:"GET",contentType:"application/json",success:function(e){var s=e.user_sessions,t=$("#sessions_box");if(t.empty(),0===s.length)t.append('<p class="text-center">No sessions found</p>');else{var i=new UAParser;t.append('<h5 class="fs-5 fw-semibold mb-0">Devices</h5><p class="mb-3">There might be multiple activity sessions from the same device.</p><button class="btn btn-primary mb-4">Sign out from all devices</button>');for(var a=0;a<s.length;a++){var n=s[a],o=(i.setUA(n.agent),i.getResult()),c=`
            <div class="d-flex align-items-center justify-content-between py-3 border-bottom">
              <div class="d-flex align-items-center gap-3">
                <i class="${c=o.device.type,"desktop"===c?"ti ti-device-laptop":"mobile"===c?"ti ti-device-mobile":"tablet"===c?"ti ti-device-ipad":"ti ti-device-tv"} text-dark d-block fs-7" width="26" height="26"></i>
                <div>
                  <h5 class="fs-4 fw-semibold mb-0">${o.os.name} ${o.os.version} - ${o.browser.name}</h5>
                  <p class="mb-0">IP: ${n.ip}</p>
                  <p class="mb-0">Location: ${n.location||"N/A"}</p>
                  <p class="mb-0">${n.time}</p>
                </div>
              </div>
              <a class="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle" href="javascript:void(0)">
                <i class="ti ti-dots-vertical"></i>
              </a>
            </div>
            `;t.append(c)}}}})});