(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{7731:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/business/register",function(){return n(1233)}])},8334:function(e,r,n){"use strict";n.d(r,{h:function(){return x}});var a=n(1527),t=n(959),l=n(9e3),o=n(7425),i=n(3798),s=n(5230),c=n(594),d=n(5890),u=n(5301),p=n(4753),m=n(4078);function h(e){let{children:r,window:n}=e,a=(0,m.Z)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return t.cloneElement(r,{elevation:a?4:0})}let x=e=>{let[r,n]=t.useState(null),m=e=>{n(e.currentTarget)};return(0,a.jsx)(h,{...e,children:(0,a.jsx)(l.Z,{position:"fixed",color:"secondary",children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"block"}},children:"Enigma Business"}),(0,a.jsx)(o.Z,{sx:{flexGrow:1}}),(0,a.jsxs)(o.Z,{sx:{display:{xs:"flex"}},children:[(0,a.jsx)(d.Z,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:(0,a.jsx)(c.Z,{badgeContent:17,color:"error",children:(0,a.jsx)(p.Z,{})})}),(0,a.jsx)(d.Z,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:m,color:"inherit",children:(0,a.jsx)(u.Z,{})})]})]})})})}},1233:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return el}});var a=n(1527),t=n(8334),l=n(959),o=n(7425),i=n(5230),s=n(8603),c=n(574),d=n(1163),u=n(5924),p=n(1137),m=n(5280),h=n(9813),x=n(5669),b=n(5183),Z=n(7450),f=n(5633);function v(e){return(0,f.Z)("MuiFormControlLabel",e)}let g=(0,Z.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var j=n(4032);let y=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],C=e=>{let{classes:r,disabled:n,labelPlacement:a,error:t}=e,l={root:["root",n&&"disabled",`labelPlacement${(0,h.Z)(a)}`,t&&"error"],label:["label",n&&"disabled"]};return(0,p.Z)(l,v,r)},P=(0,x.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[{[`& .${g.label}`]:r.label},r.root,r[`labelPlacement${(0,h.Z)(n.labelPlacement)}`]]}})(({theme:e,ownerState:r})=>(0,d.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${g.disabled}`]:{cursor:"default"}},"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${g.label}`]:{[`&.${g.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),k=l.forwardRef(function(e,r){var n;let t=(0,b.Z)({props:e,name:"MuiFormControlLabel"}),{className:o,componentsProps:s={},control:p,disabled:h,disableTypography:x,label:Z,labelPlacement:f="end",slotProps:v={}}=t,g=(0,c.Z)(t,y),k=(0,m.Z)(),w=h;void 0===w&&void 0!==p.props.disabled&&(w=p.props.disabled),void 0===w&&k&&(w=k.disabled);let R={disabled:w};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===p.props[e]&&void 0!==t[e]&&(R[e]=t[e])});let B=(0,j.Z)({props:t,muiFormControl:k,states:["error"]}),F=(0,d.Z)({},t,{disabled:w,labelPlacement:f,error:B.error}),S=C(F),z=null!=(n=v.typography)?n:s.typography,I=Z;return null==I||I.type===i.Z||x||(I=(0,a.jsx)(i.Z,(0,d.Z)({component:"span"},z,{className:(0,u.Z)(S.label,null==z?void 0:z.className),children:I}))),(0,a.jsxs)(P,(0,d.Z)({className:(0,u.Z)(S.root,o),ownerState:F,ref:r},g,{children:[l.cloneElement(p,R),I]}))});var w=n(4647),R=n(2157),B=n(1404);function F(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,Z.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);let S=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],z=e=>{let{classes:r,checked:n,disabled:a,edge:t}=e,l={root:["root",n&&"checked",a&&"disabled",t&&`edge${(0,h.Z)(t)}`],input:["input"]};return(0,p.Z)(l,F,r)},I=(0,x.ZP)(B.Z)(({ownerState:e})=>(0,d.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),N=(0,x.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),E=l.forwardRef(function(e,r){let{autoFocus:n,checked:t,checkedIcon:l,className:o,defaultChecked:i,disabled:s,disableFocusRipple:p=!1,edge:h=!1,icon:x,id:b,inputProps:Z,inputRef:f,name:v,onBlur:g,onChange:j,onFocus:y,readOnly:C,required:P=!1,tabIndex:k,type:w,value:B}=e,F=(0,c.Z)(e,S),[E,$]=(0,R.Z)({controlled:t,default:Boolean(i),name:"SwitchBase",state:"checked"}),_=(0,m.Z)(),q=e=>{y&&y(e),_&&_.onFocus&&_.onFocus(e)},L=e=>{g&&g(e),_&&_.onBlur&&_.onBlur(e)},M=e=>{if(e.nativeEvent.defaultPrevented)return;let r=e.target.checked;$(r),j&&j(e,r)},T=s;_&&void 0===T&&(T=_.disabled);let D=(0,d.Z)({},e,{checked:E,disabled:T,disableFocusRipple:p,edge:h}),O=z(D);return(0,a.jsxs)(I,(0,d.Z)({component:"span",className:(0,u.Z)(O.root,o),centerRipple:!0,focusRipple:!p,disabled:T,tabIndex:null,role:void 0,onFocus:q,onBlur:L,ownerState:D,ref:r},F,{children:[(0,a.jsx)(N,(0,d.Z)({autoFocus:n,checked:t,defaultChecked:i,className:O.input,disabled:T,id:"checkbox"===w||"radio"===w?b:void 0,name:v,onChange:M,readOnly:C,ref:f,required:P,ownerState:D,tabIndex:k,type:w},"checkbox"===w&&void 0===B?{}:{value:B},Z)),E?l:x]}))});var $=n(6238),_=(0,$.Z)((0,a.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),q=(0,$.Z)((0,a.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),L=(0,$.Z)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function M(e){return(0,f.Z)("MuiCheckbox",e)}let T=(0,Z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),D=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],O=e=>{let{classes:r,indeterminate:n,color:a}=e,t={root:["root",n&&"indeterminate",`color${(0,h.Z)(a)}`]},l=(0,p.Z)(t,M,r);return(0,d.Z)({},r,l)},H=(0,x.ZP)(E,{shouldForwardProp:e=>(0,x.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[r.root,n.indeterminate&&r.indeterminate,"default"!==n.color&&r[`color${(0,h.Z)(n.color)}`]]}})(({theme:e,ownerState:r})=>(0,d.Z)({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===r.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,w.Fq)("default"===r.color?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${T.checked}, &.${T.indeterminate}`]:{color:(e.vars||e).palette[r.color].main},[`&.${T.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),A=(0,a.jsx)(q,{}),V=(0,a.jsx)(_,{}),W=(0,a.jsx)(L,{}),X=l.forwardRef(function(e,r){var n,t;let o=(0,b.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:i=A,color:s="primary",icon:p=V,indeterminate:m=!1,indeterminateIcon:h=W,inputProps:x,size:Z="medium",className:f}=o,v=(0,c.Z)(o,D),g=m?h:p,j=m?h:i,y=(0,d.Z)({},o,{color:s,indeterminate:m,size:Z}),C=O(y);return(0,a.jsx)(H,(0,d.Z)({type:"checkbox",inputProps:(0,d.Z)({"data-indeterminate":m},x),icon:l.cloneElement(g,{fontSize:null!=(n=g.props.fontSize)?n:Z}),checkedIcon:l.cloneElement(j,{fontSize:null!=(t=j.props.fontSize)?t:Z}),ownerState:y,ref:r,className:(0,u.Z)(C.root,f)},v,{classes:C}))});var G=n(4262);let J=(0,x.ZP)(o.Z)({display:"flex",paddingTop:"16px",flexDirection:"column",alignItems:"center"}),K=(0,x.ZP)(o.Z)({display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"16px"}),Q=(0,x.ZP)(o.Z)({display:"flex",flexDirection:"row",justifyContent:"center",width:"100%"}),U=(0,x.ZP)(o.Z)({display:"flex",justifyContent:"center",marginTop:"16px"}),Y=()=>{let[e,r]=(0,l.useState)({name:"",id:"",principal:"",email:"",phone:"",walletAddress:"",password:"",confirmPassword:"",terms:!1}),n=e=>{let{name:n,value:a,checked:t}=e.target;r(e=>({...e,[n]:"terms"===n?t:a}))},t=r=>{r.preventDefault(),console.log(e)};return(0,a.jsxs)(J,{component:"form",onSubmit:t,children:[(0,a.jsx)(i.Z,{variant:"h5",gutterBottom:!0,children:"Business Registration Form"}),(0,a.jsxs)(Q,{children:[(0,a.jsx)(K,{children:(0,a.jsx)(s.Z,{label:"Name",name:"name",value:e.name,onChange:n,required:!0})}),(0,a.jsx)(K,{children:(0,a.jsx)(s.Z,{label:"ID",name:"id",value:e.id,onChange:n,required:!0})})]}),(0,a.jsxs)(Q,{children:[(0,a.jsx)(K,{children:(0,a.jsx)(s.Z,{label:"Principal",name:"principal",value:e.principal,onChange:n,required:!0})}),(0,a.jsx)(K,{children:(0,a.jsx)(s.Z,{label:"Email",name:"email",type:"email",value:e.email,onChange:n,required:!0})})]}),(0,a.jsxs)(Q,{children:[(0,a.jsx)(K,{children:(0,a.jsx)(s.Z,{label:"Phone",name:"phone",type:"tel",value:e.phone,onChange:n,required:!0})}),(0,a.jsx)(K,{children:(0,a.jsx)(s.Z,{label:"Wallet Address",name:"walletAddress",value:e.walletAddress,onChange:n,required:!0})})]}),(0,a.jsxs)(Q,{children:[(0,a.jsx)(K,{children:(0,a.jsx)(s.Z,{label:"Password",name:"password",type:"password",value:e.password,onChange:n,required:!0})}),(0,a.jsx)(K,{children:(0,a.jsx)(s.Z,{label:"Confirm Password",name:"confirmPassword",type:"password",value:e.confirmPassword,onChange:n,required:!0})})]}),(0,a.jsx)(k,{control:(0,a.jsx)(X,{checked:e.terms,onChange:n,name:"terms",color:"primary"}),label:"I accept the terms and conditions"}),(0,a.jsx)(U,{children:(0,a.jsx)(G.Z,{variant:"contained",type:"submit",children:"Register"})})]})};var ee=n(7670),er=n(6302),en=n(2886);let ea=(0,er.Z)(),et=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(en.Z,{theme:ea,children:[(0,a.jsx)(ee.ZP,{}),(0,a.jsx)(t.h,{children:(0,a.jsx)(a.Fragment,{})}),(0,a.jsx)("main",{style:{paddingTop:ea.spacing(8),paddingBottom:ea.spacing(4)},children:(0,a.jsx)(Y,{})})]})});var el=et}},function(e){e.O(0,[862,603,774,888,179],function(){return e(e.s=7731)}),_N_E=e.O()}]);