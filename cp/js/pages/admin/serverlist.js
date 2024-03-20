$(function(){const a=document.getElementById("serverinfo_Modal");a.addEventListener("show.bs.modal",e=>{var e=e.relatedTarget;e.classList.add("active","modalactive");const l=a.querySelector(".modal-body"),r=a.querySelector(".modal-footer");l.innerHTML=`<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">${t_i("dashboard.loading")}...</span></div></div>`,"#serverinfo_Modal"===e.getAttribute("data-bs-target")&&(e=e.getAttribute("data-bs-id"),$.ajax({url:"/admin/serverlist/"+e,method:"GET",contentType:"application/json",success:function(e){var a,e=JSON.parse(e.data),n={name:e.name,members:e.memberCount,channels:e.channels.length,bans:e.bans.length,roles:e.roles.length,emojis:e.emojis.length,stickers:e.stickers.length,isAvailable:e.available,shard:e.shardId,banner:e.banner,description:e.description||"None",verificationLevel:e.verificationLevel,vanity:{URL:e.vanityURLCode||"None",URLUses:e.vanityURLUses||"None"},nsfwLevel:e.nsfwLevel,premiumSubscriptionCount:e.premiumSubscriptionCount,isLarge:e.large,afk:{timeout:e.afkTimeout,channel:e.afkChannelId},premiumTier:e.premiumTier,explicitContentFilter:e.explicitContentFilter,botJoined:e.joinedTimestamp,maximumMembers:e.maximumMembers,maxVideoChannelUsers:e.maxVideoChannelUsers,rulesChannelId:e.rulesChannelId,publicUpdatesChannelId:e.publicUpdatesChannelId,preferredLocale:e.preferredLocale,owner:e.ownerId,verified:!0===e.verified},s=[n.description,n.verificationLevel+"",n.rulesChannelId?`<#${n.rulesChannelId}>`:"None",n.members+"",n.channels+"",n.roles+"",n.emojis+"",n.stickers+"",n.bans+"",n.vanity.URL+"",n.vanity.URLUses+"",n.nsfwLevel+"",n.premiumSubscriptionCount+"",n.premiumTier+"",n.isLarge?"Yes":"No",n.maximumMembers+"",n.afk.timeout+"",n.afk.channel?`<#${n.afk.channel}>`:"None",n.maxVideoChannelUsers+"",n.preferredLocale,`<@${n.owner}>`,`<t:${n.botJoined}:f>`],t=`
                    <div class="row">
                    <label for="sv_name" class="col-lg-2 form-label">Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="sv_name" value="${e.name}" readonly>
                    </div>
                  </div>
                          
                    <div class="row">
                      <label for="sv_id" class="col-lg-2 col-form-label">ID</label>
                      <div class="col-sm-10">
                          <div class="input-group">
                          <input class="form-control" id="sv_id" value="${e.id}" aria-label="ID" readonly>
                          <span class="input-group-text">#</span>
                          </div>
                      </div>
                  </div>
                  `,i=__locales.checkGuild.embed.fields;for(a in s)t+=`
                        <div class="row">
                            <label for="${i[a].name}" class="col-lg-2 form-label">${i[a].name}</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="${i[a].name}" value="${s[a]}" readonly>
                            </div>
                        </div>`;n.banner&&(t+=`
                        <div class="row">
                            <img src="${n.banner.url}">
                        </div>`),l.innerHTML=t,document.getElementById("editform").setAttribute("action","/admin/serverlist/"+e.id),r.innerHTML=`
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
          <a href="javascript:void(0)" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#GAdeleteModal" data-bs-id="${e.id}" >Delete</a>
          `},error:function(e){l.innerHTML=`<div class="alert alert-danger" role="alert">${e.responseJSON.error}</div>`,r.innerHTML=`
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${t_i("dashboard.cancel")}</button>
          `}}))}),a.addEventListener("hidden.bs.modal",e=>{document.getElementsByClassName("modalactive")[0].classList.remove("active","modalactive")})});