(()=>{InjectCSS(`.card .blog {
  border: none;
  backdrop-filter: blur(0px)!important;
  -webkit-backdrop-filter: blur(0px)!important;
  background-blend-mode: normal!important;
  }`);const m=document.getElementById("listHolder");$.ajax({url:"/api/articles/list",method:"GET",contentType:"application/json",success:function(r){r.data.forEach((t,e)=>{var t=t.meta,i=JSON.parse(t.tags),i=t.tags?i[0]:"Article",s=t.avatar||"https://cdn.discordapp.com/embed/avatars/"+Math.floor(6*Math.random())+".png",a=t.author??"No Name Studio",l=t.banner||"/img/blogs/img"+(Math.floor(10*Math.random())+1)+".jpg",d=r.list[e],o=t.title;let n=t.description??null;60<n?.length&&(n=n.slice(0,60)+"...");var t=t.modifiedTimestamp,c=document.createElement("div");c.classList.add("col-md-6","mb-3"),e<2?(0==e?c.classList.add("col-lg-8"):c.classList.add("col-lg-4"),c.innerHTML=`
                 <div class="card blog position-relative overflow-hidden hover-img" style="background-image: url(${l});">
                   <div class="card-body d-flex flex-column position-relative">
                     <div class="d-flex flex-column justify-content-between h-100">
                       <div class="d-flex align-items-start justify-content-between">
                         <div class="position-relative">
                           <img src="${s}" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${a}" alt="${a}" class="rounded-circle img-fluid" width="40" height="40">
                         </div>
                         <span class="badge text-bg-primary rounded-3 fs-2 fw-semibold">${i}</span>
                       </div>
                       <div>
                         <a href="${d}" class="fs-7 my-4 fw-semibold text-white d-block lh-sm">${o} ${n?`<p class="fs-6 fw-normal text-white-50 mt-1">${n}</p>`:""}</a>
                         <div class="d-flex align-items-center gap-4">
                           <div class="d-flex align-items-center gap-2 text-white fs-3 fw-normal"><i class="ti ti-eye fs-5"></i>6006</div>
                           <div class="d-flex align-items-center gap-2 text-white fs-3 fw-normal"><i class="ti ti-message-dots fs-5"></i>3</div>
                           <div class="d-flex align-items-center gap-1 text-white fw-normal ms-auto">
                             <i class="ti ti-point"></i><small nns-bt_dateformatter>${t}</small>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>`):(c.classList.add("col-lg-4","d-flex","align-items-stretch"),c.innerHTML=`
                    <div class="card rounded-2 overflow-hidden hover-img">
                      <div class="position-relative">
                        <a href="${d}"><img src="${l}" class="card-img-top rounded-0" alt="Banner"></a>
                        <span class="badge text-bg-primary fs-2 rounded-4 lh-sm mt-3 me-3 py-1 px-2 fw-semibold position-absolute top-0 end-0">${i}</span>
                        <span class="badge text-bg-light fs-2 rounded-4 lh-sm mb-3 me-3 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">2 min read</span>
                        <img src="${s}" alt="${a}" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${a}">
                      </div>
                      <div class="card-body d-flex flex-column p-4">
                        <a class="d-block my-3 fs-5 fw-semibold" href="${d}">${o}</a>
                        <div class="d-flex align-items-center gap-4">
                          <div class="d-flex align-items-center gap-2"><i class="ti ti-eye fs-5"></i>9,125</div>
                          <div class="d-flex align-items-center gap-2"><i class="ti ti-message-dots fs-5"></i>3</div>
                          <div class="d-flex align-items-center fs-2 ms-auto">
                            <i class="ti ti-point"></i><span nns-bt_dateformatter>${t}</span>
                          </div>
                        </div>
                      </div>
                    </div>`),m.appendChild(c)})}})})();