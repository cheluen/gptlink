var e=Object.defineProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,t=(a,o,l)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[o]=l;import{c as r,d as n,e as p}from"./index.3226b1eb.js";import{d,a as s,H as c,n as i,h as m,i as u,c as b,f,w as h,u as g,b as k,g as y,E as P,v as _,x as v,m as x,aA as C}from"./vendor.e53bfd87.js";import{u as V}from"./useBasicTable.18beac30.js";import{u as w}from"./useDialog.380f1d15.js";import{a as R,_ as j}from"./index.5213a1a2.js";import{u as I}from"./useBasicForm.6685fd70.js";const S=[{label:"批次编号",prop:"id"},{label:"分组名称",prop:"name"},{label:"套餐名称",prop:"package",customRender:e=>e.package.name},{label:"问答机会",prop:"packageNum",customRender:e=>"-1"==e.package.num?"不限次数":e.package.num},{label:"套餐价格",prop:"packagePrice",customRender:e=>e.package.price},{label:"兑换码数量",prop:"num"},{label:"总价值",prop:"packagePrice",customRender:e=>e.package.price*e.num},{label:"创建时间",prop:"created_at"},{label:"操作",slot:"handle",width:"120px"}],F=[{field:"name",component:"Input",label:"分组名称：",componentProps:{placeholder:"请输入分组名称"}},{field:"created_at",component:"DatePicker",label:"创建时间：",componentProps:{type:"datetimerange",startPlaceholder:"开始日期",endPlaceholder:"结束日期",format:"YYYY-MM-DD"},defaultValue:[]}],O=[{field:"name",label:"分组名称",component:"Input",required:!0,componentProps:{placeholder:"请输入分组名称，50字以内",maxlength:50}},{field:"package_id",component:"ApiSelect",label:"选择套餐",required:!0,componentProps:{style:{width:"100%"},api:R().chatGPT.packageList,resultField:"data",labelField:"name",valueField:"id"}},{field:"num",label:"生成数量",component:"InputNumber",required:!0,componentProps:{placeholder:"请输入分组名称，50字以内",min:1,max:500},defaultValue:1},{field:"remark",label:"备注",component:"Input",required:!0,componentProps:{type:"textarea",placeholder:"请写清楚本批次兑换码用途，300字以内",maxlength:300}}];const q={class:"box"},D=(e=>(_("data-v-3dc6b118"),e=e(),v(),e))((()=>k("div",{class:"tip"},"输入正整数，请按需生成兑换码数量，上限500",-1))),B=y("¥"),H=y("取消"),T=y("提交");var Y=j(d({__name:"AddRedemptionCode",props:{modelValue:{type:[Boolean],default:!1}},emits:["update:modelValue","reload"],setup(e,{emit:a}){const o=e;s({active:0,type:1,delivery_service_codes:[]});const{register:l,resetFields:t,clearValidate:p,validate:d,setFieldsValue:y}=I({schemas:O}),{handlePopup:_}=w({emit:a,props:o,watchShow:async()=>{c((()=>{t(),setTimeout((()=>{p()}))}))}});i((()=>o));const v=async()=>{try{const e=await d();await R().code.addCdk(e),P.success("操作成功"),_(!1),a("reload")}catch(e){}};return(a,o)=>{const t=m("CbNumberInput"),p=m("el-button");return u(),b("div",null,[f(g(n),{"dialog-props":{title:"新增兑换码",modelValue:e.modelValue,showClose:!0,width:"800px"},scrollBarProps:{maxHeight:700},center:"",onCancel:o[1]||(o[1]=e=>g(_)(!1))},{foot:h((()=>[f(p,{onClick:o[0]||(o[0]=e=>g(_)(!1))},{default:h((()=>[H])),_:1}),f(p,{type:"primary",onClick:v},{default:h((()=>[T])),_:1})])),default:h((()=>[k("div",q,[f(g(r),{onRegister:g(l)},{"number-bottom":h((()=>[D])),money:h((({model:e,field:a})=>[f(t,{mode:"double",min:0,fixed:2,modelValue:e[a],"onUpdate:modelValue":o=>e[a]=o,placeholder:"0.00"},{prepend:h((()=>[B])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1},8,["onRegister"])])])),_:1},8,["dialog-props"])])}}}),[["__scopeId","data-v-3dc6b118"]]);const A={class:"cb-page"},E=y(" 新增兑换码 "),N=y(" 兑换码管理 "),U=d({__name:"index",setup(e){const r=x(),n=i((()=>((e,r)=>{for(var n in r||(r={}))o.call(r,n)&&t(e,n,r[n]);if(a)for(var n of a(r))l.call(r,n)&&t(e,n,r[n]);return e})({with_query:["package"]},y))),{registerTable:d,setProps:s,reload:c,handleSearchInfoChange:k,extraParams:y}=V({columns:S,formSchemas:F}),{openEdit:P,showDialog:_}=w({});return(e,a)=>{const o=m("el-button");return u(),b("div",A,[f(g(p),{onRegister:g(d),api:e.$api.code.getCdkGroup,extraParams:g(n),onHandleSearchInfoChange:g(k)},{"cb-table-header":h((()=>[f(o,{type:"primary",onClick:g(P)},{default:h((()=>[E])),_:1},8,["onClick"])])),handle:h((e=>[f(o,{size:"small",onClick:a=>g(r).push({path:`/operate/code/info/${e.id}`})},{default:h((()=>[N])),_:2},1032,["onClick"])])),_:1},8,["onRegister","api","extraParams","onHandleSearchInfoChange"]),f(Y,{modelValue:g(_),"onUpdate:modelValue":a[0]||(a[0]=e=>C(_)?_.value=e:null),onReload:g(c)},null,8,["modelValue","onReload"])])}}});export{U as default};
