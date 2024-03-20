$(function(){$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/features`,method:"GET",contentType:"application/json",success:function(e){const o=document.getElementById("programmedfeatures");e.data.forEach((e,a)=>{let t;"image"==e.mediaType?t=`nns-image nns-image-src="${e.media}"`:"video"==e.mediaType&&(t=`nns-video nns-video-src="${e.media}"`);var n=document.createElement("div");n.className="col-lg-6 col-12",n.innerHTML=`
          <div class="mb-3 form-check form-switch">
              <input class="form-check-input" type="checkbox" name="${e.name}" id="${e.name}">
              <label class="form-check-label" for="${e.name}">${e.description}</label>
              <button type="button" class="btn btn-sm btn-primary rounded-3 mx-2" id="${e.name}_btn" ${t}><i class="ti ti-eye"></i></button>
          </div>
          `,o.appendChild(n)})}});let t=0;function n(e,a,t,n,o,s){var c,i,l,d,r=s?" show":"",p=`
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button${s?"":" collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${e}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${e}">
          <strong> ${a} </strong> <!-- , Last edited: ${s=o,o=(s=new Date(1e3*s)).getFullYear(),c=("0"+(s.getMonth()+1)).slice(-2),i=("0"+s.getDate()).slice(-2),p=s.getHours(),l=p,d="AM",12<p?(l=p-12,d="PM"):12===p?(l=12,d="PM"):0==p&&(l=12),o+"-"+c+"-"+i+", "+l+":"+("0"+s.getMinutes()).slice(-2)+" "+d} by ${n} -->
        </button>
      </h2>
      <div id="panelsStayOpen-collapse${e}" class="accordion-collapse collapse${r}">
        <div class="accordion-body">
          <div class="form-floating mb-3">
            <input type="text" name="keyP[${e}]" class="form-control" placeholder="Keywords" id="keyP[${e}]" value="${a}" required></input>
            <label for="keyP[${e}]">Keywords</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" style="height: 75px" name="resP[${e}]" id="resP[${e}]" placeholder="Response" required>${t}</textarea>
            <label for="resP[${e}]">Response</label>
          </div>
          <div class="mb-3">
            <button type="button" class="btn btn-danger" id="del" name="del_${e}">Delete</button>
          </div>
        </div>
      </div>
    </div>
    `;$("#accordion").append(p)}$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/fetchres`,method:"GET",contentType:"application/json",success:function(e){e.customResponses&&(e=e.customResponses,$("#troll_vietnam").prop("checked",e.troll_vietnam),$("#tin_chuan_chua_anh").prop("checked",e.tin_chuan_chua_anh),$("#accordion").empty(),e.customResponses.forEach((e,a)=>{n(t+=1,e.keyword,e.response,e.authorId,e.timestamp,addNew=!1)}))}}),window.addEventListener("load",function(){$("#addres").on("click",function(){n(t+=1,"Untitled #"+t,"")}),$(document).on("click","#del",function(){$(this).closest(".accordion-item").remove()})})});