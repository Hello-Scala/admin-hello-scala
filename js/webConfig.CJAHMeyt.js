import{b9 as e,d as l,r as a,y as t,S as o,o as u,au as d,b8 as s,W as r,g as i,c as n,e as p,Y as m,w as f,a1 as c,m as _,aQ as b,L as h,M as y,l as v,t as g,ay as w,E as V,$ as x,a0 as U}from"./index.V7TsgTEq.js";import{v as k}from"./el-loading.CUKFIxyY.js";import{E as j,a as C}from"./el-tab-pane.1S_Ftv_G.js";import{E as q}from"./el-switch.38lzCq6Z.js";import{E as A}from"./el-radio.CdnTzkGW.js";import{a as P,E}from"./el-form.DDV5Rp5a.js";import{E as L,a as F}from"./el-checkbox.CWpy68J6.js";import{E as N}from"./el-row.DBATjGvD.js";import{E as Q}from"./el-col.BebB5Fab.js";import"./el-form-item.l0sNRNKZ.js";import{E as G}from"./el-progress.DBtD5zN7.js";import{_ as I}from"./index.Xglyta7C.js";import{g as M}from"./index.BVcnLiiG.js";import{u as O}from"./file.Bvrqxh9Z.js";import{T,E as B}from"./style.css_vue_type_style_index_0_src_true_lang.DAxtMIVz.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./strings.Bv4Mk_5L.js";import"./castArray.BrIbwm_9.js";import"./_initCloneObject.BGweDbMt.js";import"./isEqual.D_Din47F.js";const Z={class:"app-container"},z=["src"],D=["src"],H={key:1,class:"el-icon-plus avatar-uploader-icon1"},W=["src"],Y={key:1,class:"el-icon-plus avatar-uploader-icon1"},J={style:{border:"1px solid #ccc"}},K=["src"],X=["src"],$={key:1,class:"el-icon-plus avatar-uploader-icon1"},R=S(l({name:"FriendLink",inheritAttrs:!1,__name:"webConfig",setup(l){const S=a(!1),R=t(),ee=a({}),le=a({placeholder:"请输入内容...",MENU_CONF:{uploadImage:{customUpload:function(e,l){ie.value=e;var a=new FormData;a.append("multipartFile",ie.value),O(a).then((e=>{l(e.data,"",e.data),S.value=!1}))}},uploadVideo:{customUpload:function(e,l){ie.value=e;var a=new FormData;a.append("multipartFile",ie.value),O(a).then((e=>{l(e.data,""),S.value=!1}))}},codeSelectLang:{codeLangs:[{text:"CSS",value:"css"},{text:"HTML",value:"html"},{text:"XML",value:"xml"},{text:"Java",value:"java"}]}}}),ae=a("default"),te=a([]),oe=a([]),ue=o({});a({});const de=a("https://helloscala.cpolar.top/helloscala/file/upload"),se=a([]),re=a([]),ie=a(),ne=a({qqNumber:[{pattern:/[1-9]([0-9]{5,11})/,message:"请输入正确的QQ号码"}],qqGroup:[{pattern:/-?[1-9]\d*/,message:"请输入正确的QQ群"}],gitee:[{pattern:/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,message:"请输入正确的Gitee地址"}],github:[{pattern:/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,message:"请输入正确的Github地址"}],email:[{pattern:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,message:"请输入正确的邮箱"}]});function pe(e){R.value=e}function me(e,l){}function fe(){e({url:"/system/webConfig/",method:"get"}).then((e=>{let l=e.data,a=l.showList.split(","),t=l.loginTypeList.split(",");te.value=t,oe.value=a,Object.assign(ue,l)}))}function ce(e){let l=ge(e);O(l).then((e=>{ue.weixinPay=e.data,S.value=!1}))}function _e(e){let l=ge(e);O(l).then((e=>{ue.aliPay=e.data,S.value=!1}))}function be(e){let l=ge(e);O(l).then((e=>{ue.logo=e.data,S.value=!1}))}function he(e){let l=ge(e);O(l).then((e=>{ue.touristAvatar=e.data,S.value=!1}))}function ye(e){let l=ge(e);O(l).then((e=>{ue.authorAvatar=e.data,S.value=!1}))}function ve(){S.value=!0}function ge(e){ie.value=e.file;var l=new FormData;return l.append("multipartFile",ie.value),l}function we(){let l="";te.value.forEach((e=>{""!==e&&(l=""==l?e:l+","+e)}));let a="";var t;oe.value.forEach((e=>{""!==e&&(a=""==a?e:a+","+e)})),ue.loginTypeList=l,ue.showList=a,(t=ue,e({url:"/system/webConfig/update",method:"put",data:t})).then((e=>{w.success("修改成功"),fe()})).catch((e=>{}))}return u((()=>{M(["sys_normal_disable","sys_login_method"]).then((e=>{let l=e.data;se.value=l.sys_normal_disable.list,re.value=l.sys_login_method.list})),fe()})),(e,l)=>{const a=I,t=d("Upload"),o=V,u=G,w=P,M=Q,O=N,ie=x,fe=L,ge=F,Ve=U,xe=E,Ue=j,ke=d("Plus"),je=A,Ce=d("BellFilled"),qe=q,Ae=C,Pe=s("hasPerm"),Ee=k;return r((n(),p("div",Z,[m(Ae,{type:"border-card",onTabClick:me},{default:f((()=>[m(Ue,null,{label:f((()=>[m(a,{"icon-class":"client"}),c(" 网站信息 ")])),default:f((()=>[m(xe,{style:{"margin-left":"20px"},"label-position":"left",model:i(ue),"label-width":"80px",ref:"from"},{default:f((()=>[m(O,{gutter:12},{default:f((()=>[m(M,{span:6},{default:f((()=>[m(w,{label:"网站头像"},{default:f((()=>[m(u,{class:"avatar-uploader1","show-file-list":!1,action:i(de),"before-upload":ve,"http-request":be},{default:f((()=>[i(ue).logo?(n(),p("img",{key:0,style:{width:"100px",height:"100px"},src:i(ue).logo,class:"avatar1"},null,8,z)):(n(),_(o,{key:1},{default:f((()=>[m(t)])),_:1}))])),_:1},8,["action"])])),_:1})])),_:1}),m(M,{span:6},{default:f((()=>[m(w,{label:"游客头像",prop:"touristAvatar"},{default:f((()=>[m(u,{class:"avatar-uploader1","show-file-list":!1,action:i(de),"before-upload":ve,"http-request":he},{default:f((()=>[i(ue).touristAvatar?(n(),p("img",{key:0,style:{width:"100px",height:"100px"},src:i(ue).touristAvatar,class:"avatar1"},null,8,D)):(n(),p("i",H))])),_:1},8,["action"])])),_:1})])),_:1})])),_:1}),m(O,{gutter:24},{default:f((()=>[m(M,{span:10},{default:f((()=>[m(w,{label:"网站名称",prop:"name"},{default:f((()=>[m(ie,{modelValue:i(ue).name,"onUpdate:modelValue":l[0]||(l[0]=e=>i(ue).name=e),style:{width:"400px"}},null,8,["modelValue"])])),_:1})])),_:1}),m(M,{span:10},{default:f((()=>[m(w,{label:"网站地址",prop:"webUrl"},{default:f((()=>[m(ie,{modelValue:i(ue).webUrl,"onUpdate:modelValue":l[1]||(l[1]=e=>i(ue).webUrl=e),style:{width:"400px"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(O,{gutter:24},{default:f((()=>[m(M,{span:10},{default:f((()=>[m(w,{label:"关键字",prop:"newPwd2"},{default:f((()=>[m(ie,{modelValue:i(ue).keyword,"onUpdate:modelValue":l[2]||(l[2]=e=>i(ue).keyword=e),style:{width:"400px"}},null,8,["modelValue"])])),_:1})])),_:1}),m(M,{span:10},{default:f((()=>[m(w,{label:"描述",prop:"newPwd1"},{default:f((()=>[m(ie,{modelValue:i(ue).summary,"onUpdate:modelValue":l[3]||(l[3]=e=>i(ue).summary=e),style:{width:"400px"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(O,{gutter:24},{default:f((()=>[m(M,{span:10},{default:f((()=>[m(w,{label:"备案号",prop:"newPwd2"},{default:f((()=>[m(ie,{modelValue:i(ue).recordNum,"onUpdate:modelValue":l[4]||(l[4]=e=>i(ue).recordNum=e),style:{width:"400px"}},null,8,["modelValue"])])),_:1})])),_:1}),m(M,{span:10},{default:f((()=>[m(w,{label:"登录方式"},{default:f((()=>[m(ge,{modelValue:i(te),"onUpdate:modelValue":l[5]||(l[5]=e=>b(te)?te.value=e:null)},{default:f((()=>[(n(!0),p(h,null,y(i(re),(e=>(n(),_(fe,{border:"",key:e.value,value:e.value,label:e.label,style:{"margin-left":"10px"}},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(w,null,{default:f((()=>[r((n(),_(Ve,{type:"primary",onClick:l[6]||(l[6]=e=>we())},{default:f((()=>[c("修 改")])),_:1})),[[Pe,["system:webConfig:update"]]])])),_:1})])),_:1},8,["model"])])),_:1}),m(Ue,null,{label:f((()=>[m(a,{"icon-class":"user"}),c(" 作者信息 ")])),default:f((()=>[m(xe,{style:{"margin-left":"20px"},"label-position":"left",model:i(ue),"label-width":"80px",ref:"from"},{default:f((()=>[m(w,{label:"作者头像"},{default:f((()=>[m(u,{class:"avatar-uploader1","show-file-list":!1,action:i(de),"before-upload":ve,"http-request":ye},{default:f((()=>[i(ue).authorAvatar?(n(),p("img",{key:0,style:{width:"100px",height:"100px"},src:i(ue).authorAvatar,class:"avatar1"},null,8,W)):(n(),p("i",Y))])),_:1},8,["action"])])),_:1}),m(O,{gutter:24},{default:f((()=>[m(M,{span:10},{default:f((()=>[m(w,{label:"作者",prop:"newPwd2"},{default:f((()=>[m(ie,{modelValue:i(ue).author,"onUpdate:modelValue":l[7]||(l[7]=e=>i(ue).author=e),style:{width:"400px"}},null,8,["modelValue"])])),_:1})])),_:1}),m(M,{span:10},{default:f((()=>[m(w,{label:"作者简介",prop:"newPwd2"},{default:f((()=>[m(ie,{modelValue:i(ue).authorInfo,"onUpdate:modelValue":l[8]||(l[8]=e=>i(ue).authorInfo=e),style:{width:"400px"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(O,{gutter:24},{default:f((()=>[m(w,{label:"关于我"},{default:f((()=>[v("div",J,[m(i(T),{style:{"border-bottom":"1px solid #ccc"},editor:i(R),defaultConfig:i(ee),mode:i(ae)},null,8,["editor","defaultConfig","mode"]),m(i(B),{style:{height:"500px","overflow-y":"hidden"},modelValue:i(ue).aboutMe,"onUpdate:modelValue":l[9]||(l[9]=e=>i(ue).aboutMe=e),defaultConfig:i(le),mode:i(ae),onOnCreated:pe},null,8,["modelValue","defaultConfig","mode"])])])),_:1})])),_:1}),m(w,null,{default:f((()=>[r((n(),_(Ve,{type:"primary",onClick:l[10]||(l[10]=e=>we())},{default:f((()=>[c("修 改")])),_:1})),[[Pe,["system:webConfig:update"]]])])),_:1})])),_:1},8,["model"])])),_:1}),m(Ue,null,{label:f((()=>[m(a,{"icon-class":"order"}),c(" 评论&打赏 ")])),default:f((()=>[m(xe,{style:{"margin-left":"20px"},"label-position":"left",model:i(ue),"label-width":"90px",ref:"from"},{default:f((()=>[m(O,{gutter:24},{default:f((()=>[m(M,{span:4},{default:f((()=>[m(w,{label:"支付宝"},{default:f((()=>[m(u,{class:"avatar-uploader1","show-file-list":!1,action:i(de),"before-upload":ve,"http-request":_e},{default:f((()=>[i(ue).aliPay?(n(),p("img",{key:0,style:{width:"100px",height:"100px"},src:i(ue).aliPay,class:"avatar1",alt:""},null,8,K)):(n(),_(o,{key:1,class:"avatar-uploader-icon"},{default:f((()=>[m(ke)])),_:1}))])),_:1},8,["action"])])),_:1})])),_:1}),m(M,{span:4},{default:f((()=>[m(w,{label:"微信"},{default:f((()=>[m(u,{class:"avatar-uploader1","show-file-list":!1,action:i(de),"before-upload":ve,"http-request":ce},{default:f((()=>[i(ue).weixinPay?(n(),p("img",{key:0,style:{width:"100px",height:"100px"},src:i(ue).weixinPay,class:"avatar1",alt:""},null,8,X)):(n(),p("i",$))])),_:1},8,["action"])])),_:1})])),_:1})])),_:1}),m(O,{gutter:24},{default:f((()=>[m(w,{label:"网站评论"},{default:f((()=>[(n(!0),p(h,null,y(i(se),(e=>(n(),_(je,{key:e.id,modelValue:i(ue).openComment,"onUpdate:modelValue":l[11]||(l[11]=e=>i(ue).openComment=e),label:parseInt(e.value),border:""},{default:f((()=>[c(g(e.label),1)])),_:2},1032,["modelValue","label"])))),128))])),_:1})])),_:1}),m(O,{gutter:24},{default:f((()=>[m(w,{label:"网站打赏"},{default:f((()=>[(n(!0),p(h,null,y(i(se),(e=>(n(),_(je,{key:e.id,modelValue:i(ue).openAdmiration,"onUpdate:modelValue":l[12]||(l[12]=e=>i(ue).openAdmiration=e),label:parseInt(e.value),border:""},{default:f((()=>[c(g(e.label),1)])),_:2},1032,["modelValue","label"])))),128))])),_:1})])),_:1}),m(w,null,{default:f((()=>[r((n(),_(Ve,{type:"primary",onClick:l[13]||(l[13]=e=>we())},{default:f((()=>[c("修 改")])),_:1})),[[Pe,["system:webConfig:update"]]])])),_:1})])),_:1},8,["model"])])),_:1}),m(Ue,null,{label:f((()=>[m(a,{"icon-class":"peoples"}),c(" 关注我们 ")])),default:f((()=>[m(xe,{style:{"margin-left":"20px"},"label-position":"left",model:i(ue),"label-width":"80px",rules:i(ne),ref:"form"},{default:f((()=>[m(ge,{modelValue:i(oe),"onUpdate:modelValue":l[20]||(l[20]=e=>b(oe)?oe.value=e:null)},{default:f((()=>[m(w,{label:"邮箱",prop:"email"},{default:f((()=>[m(ie,{modelValue:i(ue).email,"onUpdate:modelValue":l[14]||(l[14]=e=>i(ue).email=e),style:{width:"400px"}},null,8,["modelValue"]),m(fe,{value:"1",label:"在首页显示",style:{"margin-left":"10px"}})])),_:1}),m(w,{label:"QQ号",prop:"qqNumber"},{default:f((()=>[m(ie,{modelValue:i(ue).qqNumber,"onUpdate:modelValue":l[15]||(l[15]=e=>i(ue).qqNumber=e),style:{width:"400px"}},null,8,["modelValue"]),m(fe,{value:"2",label:"在首页显示",style:{"margin-left":"10px"}})])),_:1}),m(w,{label:"QQ群",prop:"qqNumber"},{default:f((()=>[m(ie,{modelValue:i(ue).qqGroup,"onUpdate:modelValue":l[16]||(l[16]=e=>i(ue).qqGroup=e),style:{width:"400px"}},null,8,["modelValue"]),m(fe,{value:"6",label:"在首页显示",style:{"margin-left":"10px"}})])),_:1}),m(w,{label:"github",prop:"github"},{default:f((()=>[m(ie,{modelValue:i(ue).github,"onUpdate:modelValue":l[17]||(l[17]=e=>i(ue).github=e),style:{width:"400px"}},null,8,["modelValue"]),m(fe,{value:"3",label:"在首页显示",style:{"margin-left":"10px"}})])),_:1}),m(w,{label:"Gitee",prop:"gitee"},{default:f((()=>[m(ie,{modelValue:i(ue).gitee,"onUpdate:modelValue":l[18]||(l[18]=e=>i(ue).gitee=e),style:{width:"400px"}},null,8,["modelValue"]),m(fe,{value:"4",label:"在首页显示",style:{"margin-left":"10px"}})])),_:1}),m(w,{label:"微信",prop:"wechat"},{default:f((()=>[m(ie,{modelValue:i(ue).wechat,"onUpdate:modelValue":l[19]||(l[19]=e=>i(ue).wechat=e),style:{width:"400px"}},null,8,["modelValue"]),m(fe,{value:"5",label:"在首页显示",style:{"margin-left":"10px"}})])),_:1})])),_:1},8,["modelValue"]),m(w,null,{default:f((()=>[r((n(),_(Ve,{type:"primary",onClick:l[21]||(l[21]=e=>we())},{default:f((()=>[c("修 改")])),_:1})),[[Pe,["system:webConfig:update"]]])])),_:1})])),_:1},8,["model","rules"])])),_:1}),m(Ue,null,{label:f((()=>[m(o,null,{default:f((()=>[m(Ce)])),_:1}),c(" 发布公告 ")])),default:f((()=>[m(xe,{style:{"margin-left":"20px"},"label-position":"left",model:i(ue),"label-width":"80px",ref:"from"},{default:f((()=>[m(O,{gutter:24},{default:f((()=>[m(M,{span:10},{default:f((()=>[m(w,{label:"是否显示",prop:"newPwd2"},{default:f((()=>[m(qe,{modelValue:i(ue).showBulletin,"onUpdate:modelValue":l[22]||(l[22]=e=>i(ue).showBulletin=e),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(O,{gutter:24},{default:f((()=>[m(w,{label:"公告内容"},{default:f((()=>[m(ie,{type:"textarea",rows:5,style:{width:"800px"},placeholder:"请输入公告内容",modelValue:i(ue).bulletin,"onUpdate:modelValue":l[23]||(l[23]=e=>i(ue).bulletin=e)},null,8,["modelValue"])])),_:1})])),_:1}),m(w,null,{default:f((()=>[r((n(),_(Ve,{type:"primary",onClick:l[24]||(l[24]=e=>we())},{default:f((()=>[c("修 改")])),_:1})),[[Pe,["system:webConfig:update"]]])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),[[Ee,i(S),void 0,{fullscreen:!0,lock:!0}]])}}}),[["__scopeId","data-v-fba99048"]]);export{R as default};
