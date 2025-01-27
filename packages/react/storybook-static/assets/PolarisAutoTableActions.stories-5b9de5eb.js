import{t as S}from"./en-a85f1ff1.js";import{R as o}from"./index-7c191284.js";import{P as E,t as s}from"./apis-0ee9c31a.js";import{P as T,L as w}from"./PolarisAutoTable-3aca0665.js";import{S as N}from"./StorybookErrorBoundary-69cec270.js";import{A as v,a as x,b as k}from"./dateTimeUtils-a817f99d.js";import"./iframe-62c9fb2a.js";import"./Pagination-e176776e.js";import"./index-363833c6.js";import"./extends-98964cd2.js";const O={title:"Polaris/AutoTable/ActionParameters",component:T,decorators:[e=>o.createElement(E,{api:s},o.createElement(v,{i18n:S},o.createElement("div",{style:{width:"100%"}},o.createElement(x,{paddingBlockEnd:"400"},o.createElement(k,{gap:"200"},o.createElement(w,null,o.createElement(N,null,o.createElement(e,null))))))))]},r={args:{model:s.autoTableTest,actions:["delete","customAction",{label:"Alternate action label",action:"customAction"},{label:"Sum Nums callback",promoted:!1,action:e=>n(`Sum of record "num" values: ${c(e)}`)},{label:"Sum Nums promoted",promoted:!0,action:e=>n(`Sum of record "num" values: ${c(e)}`)}]}},t={args:{model:s.autoTableTest,excludeActions:["delete"]}},a={args:{model:s.shopifyProductVariant}},n=e=>{window.alert(e)},c=e=>e.reduce((f,P)=>f+(P.num??0),0);var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    actions: ["delete", "customAction", {
      label: "Alternate action label",
      action: "customAction"
    }, {
      label: "Sum Nums callback",
      promoted: false,
      action: records => windowAlert(\`Sum of record "num" values: \${sumRecordNumValues(records)}\`)
    }, {
      label: "Sum Nums promoted",
      promoted: true,
      action: records => windowAlert(\`Sum of record "num" values: \${sumRecordNumValues(records)}\`)
    }]
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    excludeActions: ["delete"]
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var A,b,g;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    model: api.shopifyProductVariant
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const j=["IncludedActionParameters","ExcludedActionParameters","NoTriggerableActions"];export{t as ExcludedActionParameters,r as IncludedActionParameters,a as NoTriggerableActions,j as __namedExportsOrder,O as default};
