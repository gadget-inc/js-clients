import{R as e,r as be}from"./index-7c191284.js";import{P as We,t as a,F as Ae,u as Fe}from"./apis-0ee9c31a.js";import{S as xe}from"./StorybookErrorBoundary-69cec270.js";import{e as n,m as Be,a as ke,b as Pe}from"./index-a346ea03.js";import"./iframe-62c9fb2a.js";import"./useAction-55edd440.js";import"./useResultBannerController-11e12512.js";import"./index-f0f16ed8.js";import"./jsx-runtime-69eee039.js";import"./index-363833c6.js";const Ie=Be(n).AutoForm,t=ke(n),ye=Pe(n),Oe={title:"Shadcn/AutoForm",component:Ie,decorators:[r=>e.createElement("div",{style:{width:"600px",backgroundColor:"white"}},e.createElement(We,{api:a},e.createElement(Ae,{...Fe()},e.createElement(xe,null,e.createElement(n.Card,{className:"p-6 w-full bg-white shadow-lg rounded-lg"},e.createElement(r,null))))))],parameters:{layout:"centered"},tags:["autodocs"]},o={args:{action:a.widget.create}},s={args:{action:a.widget.createWithCustomParams}},c={args:{action:a.widget.update,findBy:"999"}},i={args:{action:a.widget.updateWithCustomParams,findBy:"999"}},d={args:{action:a.widget.upsert,findBy:"1"}},u={args:{action:a.widget.upsert}},l={args:{action:a.widget.create,exclude:["birthday","roles","name"]}},m={args:{action:a.widget.create,exclude:["name"],defaultValues:{widget:{name:"Name from default when there is no field input component"}}}},p={args:{action:a.widget.create,include:["name"]}},g={args:{action:a.widget.create,include:["inventoryCount"],defaultValues:{widget:{name:"Name from default when there is no field input component"}}}},Re=()=>{const[r,Ce]=be.useState(!1);return e.createElement(e.Fragment,null,e.createElement(n.Button,{onClick:()=>Ce(!r)},r?"Hide":"Show"," other inputs"),r&&e.createElement(e.Fragment,null,e.createElement(t,{field:"isChecked"}),e.createElement(t,{field:"section"}),e.createElement(t,{field:"gizmos"}),e.createElement(t,{field:"customStringParam"})))},Ee=()=>e.createElement(e.Fragment,null,e.createElement(t,{field:"name"}),e.createElement(t,{field:"inventoryCount"}),e.createElement(Re,null)),h={args:{action:a.widget.updateWithCustomParams,findBy:"999",children:e.createElement(e.Fragment,null,e.createElement(Ee,null),e.createElement(ye,null))}},f={args:{action:a.widget.updateWithCustomParams,select:{name:!0,inventoryCount:!0,isChecked:!0,sectionId:!0,section:{id:!0,name:!0},gizmos:{edges:{node:{id:!0,name:!0}}}},findBy:"999",children:e.createElement(e.Fragment,null,e.createElement(Ee,null),e.createElement(ye,null))}},w={args:{action:a.game.city.update,findBy:"1"}},S={args:{action:a.flipAll}},y={name:"onSuccess callback",args:{action:a.widget.create,onSuccess:r=>{window.alert(`Record created: ${JSON.stringify(r,null,2)}`)}}},E={name:"onFailure callback",args:{action:a.widget.alwaysThrowError,onFailure:r=>{window.alert(`Error: ${r.message} (see console for details)`),console.error(r)}}},C={name:"HasManyThrough fields",args:{action:a.hasManyThrough.baseModel.create}};var b,W,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    action: api.widget.create
  }
}`,...(A=(W=o.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var F,x,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    action: api.widget.createWithCustomParams
  }
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var k,P,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    action: api.widget.update,
    findBy: "999"
  }
}`,...(I=(P=c.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var R,v,M;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999"
  }
}`,...(M=(v=i.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var T,N,U;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    action: api.widget.upsert,
    findBy: "1"
  }
}`,...(U=(N=d.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var V,D,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    action: api.widget.upsert
  }
}`,...($=(D=u.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var z,H,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    action: api.widget.create,
    exclude: ["birthday", "roles", "name"]
  }
}`,...(O=(H=l.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var _,G,J;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    action: api.widget.create,
    exclude: ["name"],
    defaultValues: {
      widget: {
        name: "Name from default when there is no field input component"
      }
    }
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var q,j,K;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    action: api.widget.create,
    // Inventory is required and  not included. This will be a server-side error since it can be set in the action file code
    include: ["name"]
  }
}`,...(K=(j=p.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var L,Q,X;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    action: api.widget.create,
    include: ["inventoryCount"],
    defaultValues: {
      widget: {
        name: "Name from default when there is no field input component"
      }
    }
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    action: api.widget.updateWithCustomParams,
    findBy: "999",
    children: <>
        <CustomComponentWithAutoInputs />
        <ShadcnAutoSubmit />
      </>
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
        <ShadcnAutoSubmit />
      </>
  }
}`,...(te=(re=f.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,oe,se;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    action: api.game.city.update,
    findBy: "1"
  }
}`,...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ce,ie,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    action: api.flipAll
  }
}`,...(de=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,le,me;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "onSuccess callback",
  args: {
    action: api.widget.create,
    onSuccess: record => {
      // eslint-disable-next-line no-undef
      window.alert(\`Record created: \${JSON.stringify(record, null, 2)}\`);
    }
  }
}`,...(me=(le=y.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,ge,he;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,we,Se;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "HasManyThrough fields",
  args: {
    action: api.hasManyThrough.baseModel.create
  }
}`,...(Se=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};const _e=["Primary","CreateWithCustomParams","UpdateRecord","UpdateRecordWithCustomParams","UpsertRecordWithFindBy","UpsertRecordWithoutFindBy","Excluded","ExcludedWithDefaultValues","Included","IncludedWithDefaultValues","Expanded","ExpandedWithExplicitSelect","Namespaced","GlobalAction","onSuccessCallback","onFailureCallback","hasManyThrough"];export{s as CreateWithCustomParams,l as Excluded,m as ExcludedWithDefaultValues,h as Expanded,f as ExpandedWithExplicitSelect,S as GlobalAction,p as Included,g as IncludedWithDefaultValues,w as Namespaced,o as Primary,c as UpdateRecord,i as UpdateRecordWithCustomParams,d as UpsertRecordWithFindBy,u as UpsertRecordWithoutFindBy,_e as __namedExportsOrder,Oe as default,C as hasManyThrough,E as onFailureCallback,y as onSuccessCallback};
