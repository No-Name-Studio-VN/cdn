(()=>{[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)}),[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e){return new bootstrap.Popover(e)}),$(".minus,.add").on("click",function(){var e=$(this).closest("div").find(".qty"),t=parseInt(e.val()),a=$(this).hasClass("add");isNaN(t)||e.val(a?++t:0<t?--t:t)}),$('a[data-action="collapse"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="collapse"] i').toggleClass("ti-minus ti-plus"),$(this).closest(".card").children(".card-body").collapse("toggle")}),$('a[data-action="expand"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="expand"] i').toggleClass("ti-arrows-maximize ti-arrows-maximize"),$(this).closest(".card").toggleClass("card-fullscreen")}),$('a[data-action="close"]').on("click",function(){$(this).closest(".card").removeClass().slideUp("fast")}),$(".full-width").click(()=>{$(".container-fluid").addClass("mw-100"),$(".full-width i").addClass("text-primary"),$(".boxed-width i").removeClass("text-primary")}),$(".boxed-width").click(()=>{$(".container-fluid").removeClass("mw-100"),$(".full-width i").removeClass("text-primary"),$(".boxed-width i").addClass("text-primary")}),$(".cardborder").click(()=>{$("body").addClass("cardwithborder"),$(".cardshadow i").addClass("text-dark-emphasis"),$(".cardborder i").addClass("text-primary")}),$(".cardshadow").click(()=>{$("body").removeClass("cardwithborder"),$(".cardborder i").removeClass("text-primary"),$(".cardshadow i").removeClass("text-dark-emphasis")}),$(".change-colors li a").click(()=>{$(".change-colors li a").removeClass("active-theme"),$(this).addClass("active-theme")}),$(window).scroll(()=>{60<=$(window).scrollTop()?$(".app-header").addClass("fixed-header"):$(".app-header").removeClass("fixed-header")}),$(()=>{$(".billing-address").click(()=>{$(".billing-address-content").hide()}),$(".billing-address").click(()=>{$(".payment-method-list").show()})});{let a=window.location+"",i=a.replace(window.location.protocol+"//"+window.location.host+"/","");var e=$("ul#sidebarnav"),t;(t=e.find("a").filter((e,t)=>t.pathname===window.location.pathname||t.href===a||t.href===i)).parentsUntil(".sidebar-nav").each(()=>{$(this).is("li")&&0!==$(this).children("a").length?($(this).children("a").addClass("active"),0===$(this).parent("ul#sidebarnav").length?$(this).addClass("active"):$(this).addClass("selected")):$(this).is("ul")||0!==$(this).children("a").length?$(this).is("ul")&&$(this).addClass("in"):$(this).addClass("selected")}),t.addClass("active"),e.find("a").on("click",function(e){$(this).hasClass("active")?($(this).removeClass("active"),$(this).parents("ul:first").removeClass("active"),$(this).next("ul").removeClass("in")):($(this).parents("ul:first").find("ul").removeClass("in"),$(this).parents("ul:first").find("a").removeClass("active"),$(this).next("ul").addClass("in"),$(this).addClass("active"))}),e.find(">li >a.has-arrow").on("click",function(e){e.preventDefault()})}var a=document.getElementsByTagName("html"),i=document.getElementsByName("bodytheme"),t=localStorage.getItem("theme");"auto"==t?document.getElementById("auto-theme").checked=!0:document.getElementById(t+"-theme").checked=!0;for(var o=0;o<i.length;o++)i[o].addEventListener("change",function(){var e=this.id.split("-theme").join("");"auto"==e?(localStorage.setItem("theme",e),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?a[0].setAttribute("data-bs-theme","dark"):a[0].setAttribute("data-bs-theme","light")):(a[0].setAttribute("data-bs-theme",e),localStorage.setItem("theme",e))})})(),window.addEventListener("load",function(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{"auto"==localStorage.getItem("theme")&&(e=e.matches?"dark":"light",html[0].setAttribute("data-bs-theme",e))}),Waves.init(),Waves.attach(".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",["waves-light"]),Waves.attach("[class*='btn-outline-']"),Waves.attach("[class*='btn-label-']"),Waves.attach("btn[class*='nav-link']"),Waves.attach(".pagination .page-item .page-link");for(var e=[],t=["#","javascript:void(0)","javascript:;",window.location.href+"#",window.location.origin+"/"],a=document.querySelectorAll("a"),i=0,o=a.length;i<o;i++)!(n=a[i].href)||n===window.location.href||t.includes(n)||(l=a[i].textContent.replace(/\s+/g," ").trim(),e.find(e=>e.name===l))||e.find(e=>e.url===n)||e.push({name:l,url:n});for(i=0;i<e.length;i++){(n=e[i].url).startsWith(window.location.origin)&&(n=n.split(window.location.host)[1]);var n,l=e[i].name;$("#searchbarcontent").append($(`<li class="p-1 mb-1 bg-hover-light-black rounded-4">
    <a href="${n}" class="py-2 px-3 d-flex align-items-center dropdown-item" >
      <div class="rounded-1 text-bg-light p-6 me-3">
        <img src="https://cdn.nnsvn.me/cp/svg/dashboard.svg" alt="" width="24" height="24">
      </div>
      <div class="d-inline-block v-middle" >
        <h6 class="mb-1 fw-semibold" >${l}</h6>
        <span class="d-block text-break" >${n}</span>
      </div>
    </a>
  </li>`))}function s(){var e=$("#siteSearchModal");const t=$("#search-header");var a=new bootstrap.Modal(e[0],{keyboard:!1});"block"===e.css("display")?a.hide():(a.show(),setTimeout(()=>{t.focus()},500))}$("#search-header2, #search-header3").on("click",s),window.addEventListener("keydown",function(e){e.ctrlKey&&"k"==e.key&&(e.preventDefault(),s())}),$("#use_profile_information").on("click",function(){$.ajax({url:"/api/users/@me",method:"GET",contentType:"application/json",success:function(e){$("#useremail").val(e.localdata.email),$("#username").val(e.localdata.username),$("#userid").val(e.localdata.id),window.NotificationHandler.show({content:"Profile information loaded!",type:"success"})},error:function(e){window.NotificationHandler.show({content:"Please log in to use this!",type:"error"})}})})}),window.addEventListener("DOMContentLoaded",function(e){var t=new window.SpecialEventsHandler.Tet;InjectCSS(`.LunarNewYearSpecial 
  {
      font-weight: bold;
      background: linear-gradient(to right, var(--bs-orange) 0%, var(--btn-label-danger-color) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
  }`),t.AddToggleCheckBox(),"true"==localStorage.getItem("LunarNewYearTheme")&&(t.EnableLunarNewYearTheme(),document.getElementById("LunarNewYearTime").checked=!0),"/"!=window.location.pathname&&(t=document.getElementsByClassName("signinBtn"),Array.from(t).forEach(function(e){var t=window.location.href.split(window.location.origin)[1];e.setAttribute("href","/login?="+encodeURIComponent(t))})),(t=document.getElementById("logoutBtn"))&&t.addEventListener("click",function(){var e=new XMLHttpRequest;e.open("POST","/logout",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("name=deophaixem&pass=ditmemay"),setTimeout(()=>{localStorage.removeItem("notificationData"),window.location.href="/"},1e3)});{let e=document.getElementById("return-to-top");window.onscroll=function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?e.classList.add("return-to-top-visible"):e.classList.remove("return-to-top-visible")},e.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})}window.NotificationHandler.checkIfEmpty();t=window.NotificationHandler.get();if(t)for(var a=t.sort((e,t)=>new Date(t.timestamp)-new Date(e.timestamp)).slice(0,31),i=a.length-1;0<=i;i--){var o=a[i];window.NotificationHandler.add(o)}t=document.getElementsByClassName("clearAllNotifications"),Array.from(t).forEach(e=>{e.addEventListener("click",function(){var e=document.querySelectorAll(".headerNotification");0!=e.length&&(e.forEach(function(e){e.remove()}),localStorage.removeItem("notificationData"),window.NotificationHandler.checkIfEmpty())})})});