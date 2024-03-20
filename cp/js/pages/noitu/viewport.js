(()=>{const n=document.getElementById("score"),l=document.getElementById("pieces"),t=document.getElementById("warningBar"),e=document.getElementById("buttonEnd"),i=document.getElementById("buttonInfo"),s=document.getElementById("buttonStartIcon"),a=document.getElementById("buttonEndIcon");let c="",o=[],d=0,r=null,u=1e3,m=null;function p(e){e?(t.innerHTML=`
      <i class="las la-exclamation-triangle"></i>
      ${e}
      <i class="las la-exclamation-triangle"></i>
    `,t.classList.remove("hide")):t.classList.add("hide")}function h(){clearInterval(r),u=5e3,r=setInterval(function(){--u<=1e3&&clearInterval(r)},1)}function g(){var e=o.length+1,t="word"+e,e=(l.innerHTML+=`
    <div class="piece">
      <input class="shadow" placeholder="Nhấn đây!" autocomplete="off" id="${t}"/>
      <p class="counter" style="opacity: 50%">${e}</p>
    </div>
  `,document.getElementById(t));e.addEventListener("keydown",function(e){var t;"Enter"!==e.key&&"Enter"!==e.code||(e.preventDefault(),p(),e=m.value.toLowerCase().trim(),t=c+" "+e,words[c].includes(e)?o.includes(t)?p("Từ này đã được sử dụng"):(o.push(t),c=e,document.querySelector(".piece").setAttribute("style","animation: disappear 250ms"),document.querySelector(".piece input").setAttribute("style","animation: disappear 200ms"),document.querySelector(".piece .counter").outerHTML=null,setTimeout(function(){document.querySelector(".piece").outerHTML=null},250),m.setAttribute("value",e),m.disabled=!0,m.setAttribute("style","animation: none"),document.querySelector(".piece:last-child .counter").removeAttribute("style"),g(),d+=u,n.innerHTML=d,h()):p("Từ này không có trong từ điển"))}),e.focus(),(m=document.querySelector(".piece:last-child input")).focus()}function v(e){13===e.keyCode&&(e.preventDefault(),y())}function y(){var e=document.getElementById("playerName").value.trim();!e||50<e.length?alert("Invalid player name"):(o.length,o.join(", "),b())}function b(){n.innerHTML=null,l.innerHTML=`
    <iframe class="shadow" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTgPJqsipjuAGyCwu-OpUJdbnlvqgPFHiXxBKESWwp50RbO0KaLBaJBhYwtLzHIIsUp2ll4-yZh2WGI/pubhtml?gid=1462957762&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
  `,p(),e.classList.add("disabled"),i.classList.remove("disabled"),s.classList.remove("la-redo-alt"),a.classList.remove("la-skull-crossbones")}function L(){n.innerHTML=null,l.innerHTML=`
    <div id="info" class="board shadow">
      <h1>Nối Từ</h1>
      <p>
        Nối từ là trò chơi trí tuệ. Người chơi sẽ lần lượt đưa ra một từ có hai
        âm tiết bắt đầu bằng chữ cuối cùng trong từ lúc trước đưa ra. Người chơi
        không được phép sử dụng từ đã từng được dùng trong ván chơi, trò chơi
        kết thúc khi người chơi không nối được từ tiếp theo.
      </p>

      <ul>
        <li><i class="las la-play">            </i> Bắt đầu.</li>
        <li><i class="las la-redo-alt">        </i> Chơi lại.</li>
        <li><i class="las la-skull-crossbones"></i> Kết thúc.</li>
        <li><i class="las la-medal">           </i> Bảng điểm.</li>
        <li><i class="las la-info">            </i> Thông tin.</li>
      </ul>

      <p id="love">Copyright ©️2024 No Name Studio</p>
    </div>
  `,e.classList.remove("disabled"),i.classList.add("disabled"),s.classList.remove("la-redo-alt"),a.classList.remove("la-skull-crossbones")}L(),document.getElementById("buttonStart").addEventListener("click",function(){o=[],e.onclick=function(){{let t="";for(let e=0;e<o.length;e++)t+=(e+1).toString()+".&#9;"+o[e]+"\n";$.ajax({url:"/api/users/@me",method:"GET",contentType:"application/json",success:function(e){l.innerHTML=`
          <div class="board shadow">
            <pre>${t}</pre>
            <div id="endGameNav">
              <input id="playerName" placeholder="Nhập tên" autocomplete="off" id="nameinput" />
              <button id="submitButton">
                <i class="las la-angle-right"></i>
              </button>
            </div>
          </div>
        `,document.getElementById("playerName").addEventListener("keyup",v),document.getElementById("submitButton").addEventListener("click",y)},error:function(e){l.innerHTML=`
          <div class="board shadow">
            <a href="/login" class="btn">Đăng nhập để lưu điểm</a>
          </div>
        `}}),p(),e.onclick=function(){b()},i.classList.remove("disabled"),a.classList.remove("la-skull-crossbones")}},e.classList.remove("disabled"),i.classList.add("disabled"),s.classList.add("la-redo-alt"),a.classList.add("la-skull-crossbones"),d=0,n.innerHTML=0,c=words_start[Math.floor(100*Math.random())],l.innerHTML=`
    <div class="piece">
      <input class="shadow" disabled value="${c}" />
      <p class="counter">0</p>
    </div>
  `,p(),g(),h()}),document.getElementById("buttonInfo").addEventListener("click",L),document.getElementById("buttonEnd").addEventListener("click",b)})();