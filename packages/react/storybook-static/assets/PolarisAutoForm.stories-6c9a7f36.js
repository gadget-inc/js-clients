import{t as Se}from"./en-a85f1ff1.js";import{R as e,r as Pe}from"./index-7c191284.js";import{P as We,t as a,F as be,u as Fe}from"./apis-0ee9c31a.js";import{P as xe,a as ye,b as t}from"./PolarisAutoForm-84285966.js";import{S as Ae}from"./StorybookErrorBoundary-69cec270.js";import{A as Be,B as Ie}from"./dateTimeUtils-a817f99d.js";import{P as ke,C as Re}from"./Page-13f81284.js";import"./iframe-62c9fb2a.js";import"./useResultBannerController-11e12512.js";import"./useAction-55edd440.js";import"./useEnumInputController-efe83819.js";import"./index-363833c6.js";import"./Pagination-e176776e.js";const qe={title:"Polaris/AutoForm",component:xe,decorators:[r=>e.createElement(We,{api:a},e.createElement(Be,{i18n:Se},e.createElement(be,{...Fe()},e.createElement(ke,null,e.createElement(Re,null,e.createElement(Ae,null,e.createElement(r,null)))))))],parameters:{layout:"centered"},tags:["autodocs"]},n={args:{action:a.widget.create}},o={args:{action:a.widget.createWithCustomParams}},s={args:{action:a.widget.update,findBy:"999"}},i={args:{action:a.widget.updateWithCustomParams,findBy:"999"}},c={args:{action:a.widget.upsert,findBy:"1"}},d={args:{action:a.widget.upsert}},u={args:{action:a.widget.create,exclude:["birthday","roles","name"]}},l={args:{action:a.widget.create,exclude:["name"],defaultValues:{widget:{name:"Name from default when there is no field input component"}}}},m={args:{action:a.widget.create,include:["name"]}},p={args:{action:a.widget.create,include:["inventoryCount"],defaultValues:{widget:{name:"Name from default when there is no field input component"}}}},ve=()=>{const[r,Ce]=Pe.useState(!1);return e.createElement(e.Fragment,null,e.createElement(Ie,{onClick:()=>Ce(!r)},r?"Hide":"Show"," other inputs"),r&&e.createElement(e.Fragment,null,e.createElement(t,{field:"isChecked"}),e.createElement(t,{field:"section"}),e.createElement(t,{field:"gizmos"}),e.createElement(t,{field:"customStringParam"})))},Ee=()=>e.createElement(e.Fragment,null,e.createElement(t,{field:"name"}),e.createElement(t,{field:"inventoryCount"}),e.createElement(ve,null)),g={args:{action:a.widget.updateWithCustomParams,findBy:"999",children:e.createElement(e.Fragment,null,e.createElement(Ee,null),e.createElement(ye,null))}},h={args:{action:a.widget.updateWithCustomParams,select:{name:!0,inventoryCount:!0,isChecked:!0,sectionId:!0,section:{id:!0,name:!0},gizmos:{edges:{node:{id:!0,name:!0}}}},findBy:"999",children:e.createElement(e.Fragment,null,e.createElement(Ee,null),e.createElement(ye,null))}},f={args:{action:a.game.city.update,findBy:"1"}},w={args:{action:a.flipAll}},y={name:"onSuccess callback",args:{action:a.widget.create,onSuccess:r=>{window.alert(`Record created: ${JSON.stringify(r,null,2)}`)}}},E={name:"onFailure callback",args:{action:a.widget.alwaysThrowError,onFailure:r=>{window.alert(`Error: ${r.message} (see console for details)`),console.error(r)}}},C={name:"HasManyThrough fields",args:{action:a.hasManyThrough.baseModel.create}};var S,P,W;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    action: api.widget.create
  }
}`,...(W=(P=n.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var b,F,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    action: api.widget.createWithCustomParams
  }
}`,...(x=(F=o.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var A,B,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    action: api.widget.update,
    findBy: "999"
  }
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var k,R,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999"
  }
}`,...(v=(R=i.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var M,T,N;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    action: api.widget.upsert,
    findBy: "1"
  }
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var U,V,D;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    action: api.widget.upsert
  }
}`,...(D=(V=d.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var $,z,H;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    action: api.widget.create,
    exclude: ["birthday", "roles", "name"]
  }
}`,...(H=(z=u.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var O,_,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    action: api.widget.create,
    exclude: ["name"],
    defaultValues: {
      widget: {
        name: "Name from default when there is no field input component"
      }
    }
  }
}`,...(G=(_=l.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,q,j;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    action: api.widget.create,
    // Inventory is required and  not included. This will be a server-side error since it can be set in the action file code
    include: ["name"]
  }
}`,...(j=(q=m.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var K,L,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    action: api.widget.create,
    include: ["inventoryCount"],
    defaultValues: {
      widget: {
        name: "Name from default when there is no field input component"
      }
    }
  }
}`,...(Q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999",
    children: <>
        <CustomComponentWithAutoInputs />
        <PolarisAutoSubmit />
      </>
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  // The explicit select for the conditionally rendered AutoInputs will prevent additional lookups in the useActionForm findBy
  args: {
    action: api.widget.updateWithCustomParams,
    select: {
      name: true,
      inventoryCount: true,
      isChecked: true,
      sectionId: true,
      section: {
        id: true,
        name: true
      },
      gizmos: {
        edges: {
          node: {
            id: true,
            name: true
          }
        }
      }
    },
    findBy: "999",
    children: <>
        <CustomComponentWithAutoInputs />
        <PolarisAutoSubmit />
      </>
  }
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,oe;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    action: api.game.city.update,
    findBy: "1"
  }
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,ce;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    action: api.flipAll
  }
}`,...(ce=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,le;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "onSuccess callback",
  args: {
    action: api.widget.create,
    onSuccess: record => {
      // eslint-disable-next-line no-undef
      window.alert(\`Record created: \${JSON.stringify(record, null, 2)}\`);
    }
  }
}`,...(le=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var me,pe,ge;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "onFailure callback",
  args: {
    action: api.widget.alwaysThrowError,
    onFailure: error => {
      // eslint-disable-next-line no-undef
      window.alert(\`Error: \${error.message} (see console for details)\`);
      // eslint-disable-next-line no-undef
      console.error(error);
    }
  }
}`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,fe,we;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "HasManyThrough fields",
  args: {
    action: api.hasManyThrough.baseModel.create
  }
}`,...(we=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};const je=["Primary","CreateWithCustomParams","UpdateRecord","UpdateRecordWithCustomParams","UpsertRecordWithFindBy","UpsertRecordWithoutFindBy","Excluded","ExcludedWithDefaultValues","Included","IncludedWithDefaultValues","Expanded","ExpandedWithExplicitSelect","Namespaced","GlobalAction","onSuccessCallback","onFailureCallback","hasManyThrough"];export{o as CreateWithCustomParams,u as Excluded,l as ExcludedWithDefaultValues,g as Expanded,h as ExpandedWithExplicitSelect,w as GlobalAction,m as Included,p as IncludedWithDefaultValues,f as Namespaced,n as Primary,s as UpdateRecord,i as UpdateRecordWithCustomParams,c as UpsertRecordWithFindBy,d as UpsertRecordWithoutFindBy,je as __namedExportsOrder,qe as default,C as hasManyThrough,E as onFailureCallback,y as onSuccessCallback};
