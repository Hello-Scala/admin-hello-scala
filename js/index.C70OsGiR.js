import{b9 as e}from"./index.fnbw5y5k.js";function t(t){return e({url:"/system/role/list",method:"get",params:t})}function r(t){return e({url:"/system/role/getRoleMenuIds",method:"get",params:{roleId:t}})}function s(t,r){return e({url:"/system/role/updateRoleMenus",method:"put",data:{roleId:t,menuIds:r}})}function o(t){return e({url:"/system/role/add",method:"post",data:t})}function u(t){return e({url:"/system/role/update",method:"put",data:t})}function a(t){return e({url:"/system/role/delete",method:"delete",data:t})}export{o as a,r as b,s as c,a as d,t as g,u};
