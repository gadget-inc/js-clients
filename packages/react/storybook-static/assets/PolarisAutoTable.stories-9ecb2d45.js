import{t as aa}from"./en-a85f1ff1.js";import{R as r,r as ra}from"./index-7c191284.js";import{P as sa,t as e}from"./apis-0ee9c31a.js";import{P as na,L as oa}from"./PolarisAutoTable-3aca0665.js";import{u as ea}from"./useAction-55edd440.js";import{S as ta}from"./StorybookErrorBoundary-69cec270.js";import{A as la,a as da,b as ca,C as ma,B as ia,S as ua}from"./dateTimeUtils-a817f99d.js";import"./iframe-62c9fb2a.js";import"./Pagination-e176776e.js";import"./index-363833c6.js";import"./extends-98964cd2.js";const pa=r.createElement("p",null,"This is a custom empty state. Bazinga."),Fa={title:"Polaris/AutoTable",component:na,decorators:[a=>r.createElement(sa,{api:e},r.createElement(la,{i18n:aa},r.createElement("div",{style:{width:"100%"}},r.createElement(da,{paddingBlockEnd:"400"},r.createElement(ca,{gap:"200"},r.createElement(oa,null,r.createElement(ta,null,r.createElement(a,null))))))))],parameters:{layout:"padded"},tags:["autodocs"]},n={args:{model:e.autoTableTest}},o={args:{model:e.game.city}},t={args:{model:e.autoTableTest,columns:["str","num"]}},l={args:{model:e.autoTableTest,columns:["somethingSuperWrong"]}},d={name:"onClick callback",args:{model:e.autoTableTest,onClick:(a,s)=>{O(`You clicked on a row with ID: ${a.id}`),O(`row: ${JSON.stringify(a,null,2)}`),O(`rawRecord:
 ${JSON.stringify(s,null,2)}
`)}}},c={args:{model:e.autoTableTest,columns:["str","rt"]}},m={args:{model:e.autoTableTest,columns:["str",{field:"file",sortable:!1}]}},i={name:"Select related field using string value - has one relationship",args:{model:e.autoTableTest,columns:["str","num","hasOne"]}},u={name:"Select related fields - has one relationship",args:{model:e.autoTableTest,columns:["str","num","hasOne.name"]}},p={name:"Select related field using string value - has many relationship",args:{model:e.autoTableTest,columns:["str","num","hasMany"]}},g={name:"Select related fields - has many relationship",args:{model:e.autoTableTest,columns:["str","num","hasMany.edges.node.name"]}},h={name:"Select related field using string value - belongs to relationship",args:{model:e._autoTableTestRelatedModel,columns:["name","belongsToParent"]}},b={name:"Select related fields - belongs to relationship",args:{model:e._autoTableTestRelatedModel,columns:["name","belongsToParent.str"]}},T={name:"Live data",args:{model:e.widget,live:!0}},D=({record:a})=>{const[s,P]=ea(e.autoTableTest.update);return r.createElement(ma,{checked:a.bool,onChange:x=>{P({id:a.id,bool:x})}})},S={args:{model:e.autoTableTest,columns:["bool",{header:"Pass the whole function",render:D},{header:"JSX style",render:a=>r.createElement(D,{...a})}],onClick:()=>{}}},f={args:{model:e.autoTableTest,columns:["str","file","hasOne","hasOne.name",{header:"Has one number",field:"hasOne.someNumber"},"hasMany","hasMany.edges.node.name",{header:"Has many number",field:"hasMany.edges.node.someNumber"},"rt",{style:{backgroundColor:"#abcdef",width:"320px",maxWidth:"320px"},header:"Custom cell with custom style",render:({record:a})=>r.createElement("div",null,"Custom cell, num field: ",a.num," (",a.id,")")}]}},y={args:{model:e.autoTableTest,select:{hasMany:{edges:{node:{name:!0}}},id:!0},columns:[{header:"Custom cell",render:({record:a})=>r.createElement("div",null,"Custom cell, has many field: ",JSON.stringify(a.hasMany.edges.map(s=>s.node.name))," (",a.id,")")}]}},C={args:{model:e.shopifyShop}},ga=a=>{const[{error:s,fetching:P},x]=ea(e.autoTableTest.delete);return ra.useEffect(()=>{s&&O(`Error deleting record: ${s.message}`)},[s]),r.createElement(ia,{icon:ua,onClick:()=>{x({id:a.record.id})},loading:P})},w={args:{model:e.autoTableTest,columns:["str",{header:"Delete",render:({record:a})=>r.createElement(ga,{record:a})},{header:"Delete",render:({record:a})=>r.createElement("p",null,"ID:",a.id," | Different renderer, same header")}]}},M={args:{model:e.autoTableTest,excludeColumns:["str","enum","num"]}},k={args:{model:e.autoTableTest,selectable:!1,lastColumnSticky:!0,hasZebraStriping:!0,resourceName:{singular:"fizzing whizzbee",plural:"fizzing whizzbees"}}},E={args:{model:e.autoTableTest,condensed:!0}},F={args:{filter:{AND:[{bool:{equals:!1}},{bool:{equals:!0}}]},model:e.autoTableTest,emptyState:pa}},R={args:{model:e.autoTableTest,searchable:!1,paginate:!1}},v={args:{model:e.hasManyThrough.baseModel,columns:["baseModelHmtField",{header:"Sibling ID",field:"baseModelHmtField.edges.node.id",sortable:!1}]}},O=a=>{window.alert(a)};var H,A,z;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest
  }
}`,...(z=(A=n.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var B,N,I;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    model: api.game.city
  }
}`,...(I=(N=o.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var _,J,W;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    columns: ["str", "num"]
  }
}`,...(W=(J=t.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var $,L,q;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    columns: ["somethingSuperWrong"]
  }
}`,...(q=(L=l.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var U,X,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "onClick callback",
  args: {
    model: api.autoTableTest,
    onClick: (row, rawRecord) => {
      windowAlert(\`You clicked on a row with ID: \${row.id}\`);
      windowAlert(\`row: \${JSON.stringify(row, null, 2)}\`);
      windowAlert(\`rawRecord:\\n \${JSON.stringify(rawRecord, null, 2)}
\`);
    }
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,j,G;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    columns: ["str", "rt"]
  }
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var K,Q,V;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    columns: ["str", {
      field: "file",
      sortable: false
    }]
  }
}`,...(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var ee,ae,re;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Select related field using string value - has one relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasOne"]
  }
}`,...(re=(ae=i.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,oe;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Select related fields - has one relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasOne.name"]
  }
}`,...(oe=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,le,de;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Select related field using string value - has many relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasMany"]
  }
}`,...(de=(le=p.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,ie;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Select related fields - has many relationship",
  args: {
    model: api.autoTableTest,
    columns: ["str", "num", "hasMany.edges.node.name"]
  }
}`,...(ie=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ie.source}}};var ue,pe,ge;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Select related field using string value - belongs to relationship",
  args: {
    model: api._autoTableTestRelatedModel,
    columns: ["name", "belongsToParent"]
  }
}`,...(ge=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,be,Te;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "Select related fields - belongs to relationship",
  args: {
    model: api._autoTableTestRelatedModel,
    columns: ["name", "belongsToParent.str"]
  }
}`,...(Te=(be=b.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Se,fe,ye;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "Live data",
  args: {
    model: api.widget,
    live: true
  }
}`,...(ye=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Ce,we,Me;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    columns: ["bool", {
      header: "Pass the whole function",
      render: CustomCheckboxCell
    }, {
      header: "JSX style",
      render: props => <CustomCheckboxCell {...props} />
    }],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {}
  }
}`,...(Me=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Me.source}}};var ke,Ee,Fe;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    columns: ["str", "file", "hasOne", "hasOne.name", {
      header: "Has one number",
      field: "hasOne.someNumber"
    }, "hasMany", "hasMany.edges.node.name", {
      header: "Has many number",
      field: "hasMany.edges.node.someNumber"
    }, "rt", {
      style: {
        backgroundColor: "#abcdef",
        width: "320px",
        maxWidth: "320px"
      },
      header: "Custom cell with custom style",
      render: ({
        record
      }) => {
        return <div>
              Custom cell, num field: {record.num} ({record.id})
            </div>;
      }
    }]
  }
}`,...(Fe=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var Re,ve,Oe;y.parameters={...y.parameters,docs:{...(Re=y.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    select: {
      hasMany: {
        edges: {
          node: {
            name: true
          }
        }
      },
      id: true
    },
    columns: [{
      header: "Custom cell",
      render: ({
        record
      }) => {
        return <div>
              Custom cell, has many field: {JSON.stringify(record.hasMany.edges.map(edge => edge.node.name))} ({record.id})
            </div>;
      }
    }]
  }
}`,...(Oe=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:Oe.source}}};var Pe,xe,De;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    model: api.shopifyShop
  }
}`,...(De=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var He,Ae,ze;w.parameters={...w.parameters,docs:{...(He=w.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    columns: ["str", {
      header: "Delete",
      render: ({
        record
      }) => <CustomDeleteButtonCellRenderer record={record} />
    }, {
      header: "Delete",
      render: ({
        record
      }) => <p>ID:{record.id} | Different renderer, same header</p>
    }]
  }
}`,...(ze=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source}}};var Be,Ne,Ie;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    excludeColumns: ["str", "enum", "num"]
  }
}`,...(Ie=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.source}}};var _e,Je,We;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    selectable: false,
    lastColumnSticky: true,
    hasZebraStriping: true,
    resourceName: {
      singular: "fizzing whizzbee",
      plural: "fizzing whizzbees"
    }
  }
}`,...(We=(Je=k.parameters)==null?void 0:Je.docs)==null?void 0:We.source}}};var $e,Le,qe;E.parameters={...E.parameters,docs:{...($e=E.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    condensed: true
  }
}`,...(qe=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var Ue,Xe,Ye;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    // A filter that will never be true so that the empty state is always shown
    filter: {
      AND: [{
        bool: {
          equals: false
        }
      }, {
        bool: {
          equals: true
        }
      }]
    },
    model: api.autoTableTest,
    emptyState: CustomEmptyStateMarkup
  }
}`,...(Ye=(Xe=F.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,je,Ge;R.parameters={...R.parameters,docs:{...(Ze=R.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    model: api.autoTableTest,
    searchable: false,
    paginate: false
  }
}`,...(Ge=(je=R.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var Ke,Qe,Ve;v.parameters={...v.parameters,docs:{...(Ke=v.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    model: api.hasManyThrough.baseModel,
    columns: ["baseModelHmtField", {
      header: "Sibling ID",
      field: "baseModelHmtField.edges.node.id",
      sortable: false
    }]
  }
}`,...(Ve=(Qe=v.parameters)==null?void 0:Qe.docs)==null?void 0:Ve.source}}};const Ra=["Primary","Namespaced","SelectFields","OnErrorState","onClickCallback","SelectRichTextField","SelectFileField","SelectRelatedFieldStringHasOne","SelectRelatedFieldsHasOne","SelectRelatedFieldStringHasMany","SelectRelatedFieldsHasMany","SelectRelatedFieldStringBelongsTo","SelectRelatedFieldsBelongsTo","LiveData","CustomCellWithUseAction","CustomCell","SelectProperty","ShopifyShopModel","CustomCellWithDeleteButton","ExcludeColumns","BuiltInPolarisTableProps","Condensed","CustomEmptyState","HideSearchAndPagination","HasManyThroughFields"];export{k as BuiltInPolarisTableProps,E as Condensed,f as CustomCell,w as CustomCellWithDeleteButton,S as CustomCellWithUseAction,F as CustomEmptyState,M as ExcludeColumns,v as HasManyThroughFields,R as HideSearchAndPagination,T as LiveData,o as Namespaced,l as OnErrorState,n as Primary,t as SelectFields,m as SelectFileField,y as SelectProperty,h as SelectRelatedFieldStringBelongsTo,p as SelectRelatedFieldStringHasMany,i as SelectRelatedFieldStringHasOne,b as SelectRelatedFieldsBelongsTo,g as SelectRelatedFieldsHasMany,u as SelectRelatedFieldsHasOne,c as SelectRichTextField,C as ShopifyShopModel,Ra as __namedExportsOrder,Fa as default,d as onClickCallback};
