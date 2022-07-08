import{C as Jl,N as Dp,O as Fp,P as zp,Q as Zr,R as St,r as Nr,S as Vt,i as Wt,s as jt,J as $n,K as ei,L as ti,q as Ue,o as Oe,e as nd,c as id,a as rd,d as gt,b as sd,g as _t,T as Up,U as pi,n as Ac,p as Cc,G as od,V as Mt,v as Op,W as fa,I as ni,X as Zn,Y as ro,D as xa,Z as so,_ as yi,w as $e,k as Jt,x as et,m as Qt,y as tt,$ as xi,B as nt,a0 as We,l as Jr,z as kp,A as Bp,a1 as Np,a2 as Gp}from"../chunks/index-a89fdc6a.js";import{w as $t,d as Hp,r as Vp}from"../chunks/index-04d4a7df.js";function Cu(s){const e=s-1;return e*e*e+1}function Wp(s){return Math.sin(-13*(s+1)*Math.PI/2)*Math.pow(2,-10*s)+1}function Lu(s){return--s*s*s*s*s+1}function Ru(s){return Object.prototype.toString.call(s)==="[object Date]"}function Ql(s,e){if(s===e||s!==s)return()=>s;const t=typeof s;if(t!==typeof e||Array.isArray(s)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const i=e.map((n,r)=>Ql(s[r],n));return n=>i.map(r=>r(n))}if(t==="object"){if(!s||!e)throw new Error("Object cannot be null");if(Ru(s)&&Ru(e)){s=s.getTime(),e=e.getTime();const r=e-s;return o=>new Date(s+o*r)}const i=Object.keys(e),n={};return i.forEach(r=>{n[r]=Ql(s[r],e[r])}),r=>{const o={};return i.forEach(a=>{o[a]=n[a](r)}),o}}if(t==="number"){const i=e-s;return n=>s+n*i}throw new Error(`Cannot interpolate ${t} values`)}function Gs(s,e={}){const t=$t(s);let i,n=s;function r(o,a){if(s==null)return t.set(s=o),Promise.resolve();n=o;let l=i,c=!1,{delay:u=0,duration:h=400,easing:f=zp,interpolate:p=Ql}=Jl(Jl({},e),a);if(h===0)return l&&(l.abort(),l=null),t.set(s=n),Promise.resolve();const g=Dp()+u;let m;return i=Fp(d=>{if(d<g)return!0;c||(m=p(s,o),typeof h=="function"&&(h=h(s,o)),c=!0),l&&(l.abort(),l=null);const y=d-g;return y>h?(t.set(s=o),!1):(t.set(s=m(f(y/h))),!0)}),i.promise}return{set:r,update:(o,a)=>r(o(n,s),a),subscribe:t.subscribe}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="140";const jp=0,Pu=1,Xp=2,ad=1,ld=2,Os=3,Qr=0,yn=1,bi=2,cd=1,Ni=0,Yr=1,Iu=2,Du=3,Fu=4,qp=5,Br=100,Yp=101,Kp=102,zu=103,Uu=104,Zp=200,Jp=201,Qp=202,$p=203,ud=204,hd=205,em=206,tm=207,nm=208,im=209,rm=210,sm=0,om=1,am=2,$l=3,lm=4,cm=5,um=6,hm=7,Ra=0,fm=1,dm=2,Kn=0,pm=1,mm=2,gm=3,fd=4,vm=5,dd=300,$r=301,es=302,ec=303,tc=304,Pa=306,nc=1e3,On=1001,ic=1002,Dt=1003,Ou=1004,ku=1005,Ft=1006,_m=1007,oo=1008,Wi=1009,ym=1010,xm=1011,Ks=1012,bm=1013,da=1014,rr=1015,Zs=1016,wm=1017,Sm=1018,Kr=1020,Mm=1021,Tm=1022,Mn=1023,Em=1024,Am=1025,ar=1026,ts=1027,Cm=1028,Lm=1029,Rm=1030,Pm=1031,Im=1033,pa=33776,sl=33777,ol=33778,ma=33779,rc=35840,Bu=35841,sc=35842,Nu=35843,pd=36196,oc=37492,ac=37496,lc=37808,Gu=37809,Hu=37810,Vu=37811,Wu=37812,ju=37813,Xu=37814,qu=37815,Yu=37816,Ku=37817,Zu=37818,Ju=37819,Qu=37820,$u=37821,cc=36492,Dm=2200,Fm=2201,zm=2202,ba=2300,wa=2301,al=2302,Gr=2400,Hr=2401,Sa=2402,Rc=2500,md=2501,Um=0;const Jn=3e3,ft=3001,Om=3200,gd=3201,rs=0,km=1,mi="srgb",sr="srgb-linear",ll=7680,Bm=519,Js=35044,Ma=35048,eh="300 es",uc=1035;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}}const Nt=[];for(let s=0;s<256;s++)Nt[s]=(s<16?"0":"")+s.toString(16);let th=1234567;const Hs=Math.PI/180,Qs=180/Math.PI;function Bn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function zt(s,e,t){return Math.max(e,Math.min(t,s))}function Pc(s,e){return(s%e+e)%e}function Nm(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Gm(s,e,t){return s!==e?(t-s)/(e-s):0}function Vs(s,e,t){return(1-t)*s+t*e}function Hm(s,e,t,i){return Vs(s,e,1-Math.exp(-t*i))}function Vm(s,e=1){return e-Math.abs(Pc(s,e*2)-e)}function Wm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qm(s,e){return s+Math.random()*(e-s)}function Ym(s){return s*(.5-Math.random())}function Km(s){s!==void 0&&(th=s);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zm(s){return s*Hs}function Jm(s){return s*Qs}function hc(s){return(s&s-1)===0&&s!==0}function Qm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ta(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $m(s,e,t,i,n){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function eg(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tg(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ic=Object.freeze({__proto__:null,DEG2RAD:Hs,RAD2DEG:Qs,generateUUID:Bn,clamp:zt,euclideanModulo:Pc,mapLinear:Nm,inverseLerp:Gm,lerp:Vs,damp:Hm,pingpong:Vm,smoothstep:Wm,smootherstep:jm,randInt:Xm,randFloat:qm,randFloatSpread:Ym,seededRandom:Km,degToRad:Zm,radToDeg:Jm,isPowerOfTwo:hc,ceilPowerOfTwo:Qm,floorPowerOfTwo:Ta,setQuaternionFromProperEuler:$m,normalize:tg,denormalize:eg});class be{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}be.prototype.isVector2=!0;class Rt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,n,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],m=n[0],d=n[3],y=n[6],b=n[1],x=n[4],_=n[7],M=n[2],w=n[5],E=n[8];return r[0]=o*m+a*b+l*M,r[3]=o*d+a*x+l*w,r[6]=o*y+a*_+l*E,r[1]=c*m+u*b+h*M,r[4]=c*d+u*x+h*w,r[7]=c*y+u*_+h*E,r[2]=f*m+p*b+g*M,r[5]=f*d+p*x+g*w,r[8]=f*y+p*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+n*r*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(n*c-u*i)*m,e[2]=(a*i-n*o)*m,e[3]=f*m,e[4]=(u*t-n*l)*m,e[5]=(n*r-a*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),n=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],c=n[4],u=n[7];return n[0]=t*r+i*l,n[3]=t*o+i*c,n[6]=t*a+i*u,n[1]=-i*r+t*l,n[4]=-i*o+t*c,n[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Rt.prototype.isMatrix3=!0;function vd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function $s(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const cl={[mi]:{[sr]:lr},[sr]:{[mi]:ga}},Rn={legacyMode:!0,get workingColorSpace(){return sr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(cl[e]&&cl[e][t]!==void 0){const i=cl[e][t];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={r:0,g:0,b:0},Pn={h:0,s:0,l:0},To={h:0,s:0,l:0};function ul(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Eo(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Ae{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=sr){return this.r=e,this.g=t,this.b=i,Rn.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=sr){if(e=Pc(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ul(o,r,e+1/3),this.g=ul(o,r,e),this.b=ul(o,r,e-1/3)}return Rn.toWorkingColorSpace(this,n),this}setStyle(e,t=mi){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Rn.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Rn.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return i(r[4]),this.setHSL(l,c,u,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Rn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Rn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mi){const i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Rn.fromWorkingColorSpace(Eo(this,Lt),e),zt(Lt.r*255,0,255)<<16^zt(Lt.g*255,0,255)<<8^zt(Lt.b*255,0,255)<<0}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sr){Rn.fromWorkingColorSpace(Eo(this,Lt),t);const i=Lt.r,n=Lt.g,r=Lt.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=sr){return Rn.fromWorkingColorSpace(Eo(this,Lt),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=mi){return Rn.fromWorkingColorSpace(Eo(this,Lt),e),e!==mi?`color(${e} ${Lt.r} ${Lt.g} ${Lt.b})`:`rgb(${Lt.r*255|0},${Lt.g*255|0},${Lt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Pn),Pn.h+=e,Pn.s+=t,Pn.l+=i,this.setHSL(Pn.h,Pn.s,Pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(To);const i=Vs(Pn.h,To.h,t),n=Vs(Pn.s,To.s,t),r=Vs(Pn.l,To.l,t);return this.setHSL(i,n,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ae.NAMES=_d;Ae.prototype.isColor=!0;Ae.prototype.r=1;Ae.prototype.g=1;Ae.prototype.b=1;let xr;class fr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=$s("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=lr(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Dc{constructor(e=null){this.uuid=Bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(hl(n[o].image)):r.push(hl(n[o]))}else r=hl(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function hl(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?fr.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Dc.prototype.isSource=!0;let ng=0;class Tt extends hr{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=On,n=On,r=Ft,o=oo,a=Mn,l=Wi,c=1,u=Jn){super(),Object.defineProperty(this,"id",{value:ng++}),this.uuid=Bn(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=dd;Tt.prototype.isTexture=!0;class Ge{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],y=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(p+1)/2,M=(y+1)/2,w=(u+f)/4,E=(h+m)/4,v=(g+d)/4;return x>_&&x>M?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=w/i,r=E/i):_>M?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=w/n,r=v/n):M<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),i=E/r,n=v/r),this.set(i,n,r,t),this}let b=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(h-m)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ge.prototype.isVector4=!0;class dn extends hr{constructor(e,t,i={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ge(0,0,e,t),this.scissorTest=!1,this.viewport=new Ge(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new Tt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ft,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}dn.prototype.isWebGLRenderTarget=!0;class Ia extends Tt{constructor(e=null,t=1,i=1,n=1){super(null),this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ia.prototype.isDataArrayTexture=!0;class ig extends dn{constructor(e,t,i){super(e,t),this.depth=i,this.texture=new Ia(null,e,t,i),this.texture.isRenderTargetTexture=!0}}ig.prototype.isWebGLArrayRenderTarget=!0;class Fc extends Tt{constructor(e=null,t=1,i=1,n=1){super(null),this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Fc.prototype.isData3DTexture=!0;class rg extends dn{constructor(e,t,i){super(e,t),this.depth=i,this.texture=new Fc(null,e,t,i),this.texture.isRenderTargetTexture=!0}}rg.prototype.isWebGL3DRenderTarget=!0;class sg extends dn{constructor(e,t,i,n={}){super(e,t,n);const r=this.texture;this.texture=[];for(let o=0;o<i;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.texture.length;n<r;n++)this.texture[n].image.width=e,this.texture[n].image.height=t,this.texture[n].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}sg.prototype.isWebGLMultipleRenderTargets=!0;class dt{constructor(e=0,t=0,i=0,n=1){this._x=e,this._y=t,this._z=i,this._w=n}static slerp(e,t,i,n){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,n)}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const f=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const y=l*f+c*p+u*g+h*m,b=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){const M=Math.sqrt(x),w=Math.atan2(M,y*b);d=Math.sin(d*w)/M,a=Math.sin(a*w)/M}const _=a*b;if(l=l*d+f*_,c=c*d+p*_,u=u*d+g*_,h=h*d+m*_,d===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),h=a(r/2),f=l(i/2),p=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-n)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-n)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+n*c-r*l,this._y=n*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}dt.prototype.isQuaternion=!0;class O{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,u=l*i+a*t-r*n,h=l*n+r*i-o*t,f=-r*t-o*i-a*n;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}O.prototype.isVector3=!0;const fl=new O,nh=new dt;class an{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<i&&(i=h),f<n&&(n=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,n),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<i&&(i=h),f<n&&(n=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,n),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Ki.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ki)}else i.boundingBox===null&&i.computeBoundingBox(),dl.copy(i.boundingBox),dl.applyMatrix4(e.matrixWorld),this.union(dl);const n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Ao.subVectors(this.max,Ts),br.subVectors(e.a,Ts),wr.subVectors(e.b,Ts),Sr.subVectors(e.c,Ts),Ri.subVectors(wr,br),Pi.subVectors(Sr,wr),Zi.subVectors(br,Sr);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Zi.z,Zi.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Zi.z,0,-Zi.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Zi.y,Zi.x,0];return!pl(t,br,wr,Sr,Ao)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,br,wr,Sr,Ao))?!1:(Co.crossVectors(Ri,Pi),t=[Co.x,Co.y,Co.z],pl(t,br,wr,Sr,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ki.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}an.prototype.isBox3=!0;const ai=[new O,new O,new O,new O,new O,new O,new O,new O],Ki=new O,dl=new an,br=new O,wr=new O,Sr=new O,Ri=new O,Pi=new O,Zi=new O,Ts=new O,Ao=new O,Co=new O,Ji=new O;function pl(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Ji.fromArray(s,r);const a=n.x*Math.abs(Ji.x)+n.y*Math.abs(Ji.y)+n.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const og=new an,ih=new O,Lo=new O,ml=new O;class Mi{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):og.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ml.subVectors(e,this.center);const t=ml.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.add(ml.multiplyScalar(n/i)),this.radius+=n}return this}union(e){return this.center.equals(e.center)===!0?Lo.set(0,0,1).multiplyScalar(e.radius):Lo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ih.copy(e.center).add(Lo)),this.expandByPoint(ih.copy(e.center).sub(Lo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new O,gl=new O,Ro=new O,Ii=new O,vl=new O,Po=new O,_l=new O;class dr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.direction).multiplyScalar(t).add(this.origin),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){gl.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(gl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=Ii.dot(this.direction),l=-Ii.dot(Ro),c=Ii.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),n&&n.copy(Ro).multiplyScalar(f).add(gl),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),n=li.dot(li)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>n||((r>i||i!==i)&&(i=r),(o<n||n!==n)&&(n=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,n,r){vl.subVectors(t,e),Po.subVectors(i,e),_l.crossVectors(vl,Po);let o=this.direction.dot(_l),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Po.crossVectors(Ii,Po));if(l<0)return null;const c=a*this.direction.dot(vl.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(_l);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,n,r,o,a,l,c,u,h,f,p,g,m,d){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=r,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=u,y[10]=h,y[14]=f,y[3]=p,y[7]=g,y[11]=m,y[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Mr.setFromMatrixColumn(e,0).length(),r=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,lg)}lookAt(e,t,i){const n=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Di.crossVectors(i,vn),Di.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Di.crossVectors(i,vn)),Di.normalize(),Io.crossVectors(vn,Di),n[0]=Di.x,n[4]=Io.x,n[8]=vn.x,n[1]=Di.y,n[5]=Io.y,n[9]=vn.y,n[2]=Di.z,n[6]=Io.z,n[10]=vn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],m=i[6],d=i[10],y=i[14],b=i[3],x=i[7],_=i[11],M=i[15],w=n[0],E=n[4],v=n[8],S=n[12],T=n[1],A=n[5],L=n[9],F=n[13],I=n[2],W=n[6],U=n[10],H=n[14],J=n[3],D=n[7],X=n[11],V=n[15];return r[0]=o*w+a*T+l*I+c*J,r[4]=o*E+a*A+l*W+c*D,r[8]=o*v+a*L+l*U+c*X,r[12]=o*S+a*F+l*H+c*V,r[1]=u*w+h*T+f*I+p*J,r[5]=u*E+h*A+f*W+p*D,r[9]=u*v+h*L+f*U+p*X,r[13]=u*S+h*F+f*H+p*V,r[2]=g*w+m*T+d*I+y*J,r[6]=g*E+m*A+d*W+y*D,r[10]=g*v+m*L+d*U+y*X,r[14]=g*S+m*F+d*H+y*V,r[3]=b*w+x*T+_*I+M*J,r[7]=b*E+x*A+_*W+M*D,r[11]=b*v+x*L+_*U+M*X,r[15]=b*S+x*F+_*H+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],y=e[15];return g*(+r*l*h-n*c*h-r*a*f+i*c*f+n*a*p-i*l*p)+m*(+t*l*p-t*c*f+r*o*f-n*o*p+n*c*u-r*l*u)+d*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+y*(-n*a*u-t*l*h+t*a*f+n*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],y=e[15],b=h*d*c-m*f*c+m*l*p-a*d*p-h*l*y+a*f*y,x=g*f*c-u*d*c-g*l*p+o*d*p+u*l*y-o*f*y,_=u*m*c-g*h*c+g*a*p-o*m*p-u*a*y+o*h*y,M=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,w=t*b+i*x+n*_+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=b*E,e[1]=(m*f*r-h*d*r-m*n*p+i*d*p+h*n*y-i*f*y)*E,e[2]=(a*d*r-m*l*r+m*n*c-i*d*c-a*n*y+i*l*y)*E,e[3]=(h*l*r-a*f*r-h*n*c+i*f*c+a*n*p-i*l*p)*E,e[4]=x*E,e[5]=(u*d*r-g*f*r+g*n*p-t*d*p-u*n*y+t*f*y)*E,e[6]=(g*l*r-o*d*r-g*n*c+t*d*c+o*n*y-t*l*y)*E,e[7]=(o*f*r-u*l*r+u*n*c-t*f*c-o*n*p+t*l*p)*E,e[8]=_*E,e[9]=(g*h*r-u*m*r-g*i*p+t*m*p+u*i*y-t*h*y)*E,e[10]=(o*m*r-g*a*r+g*i*c-t*m*c-o*i*y+t*a*y)*E,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*E,e[12]=M*E,e[13]=(u*m*n-g*h*n+g*i*f-t*m*f-u*i*d+t*h*d)*E,e[14]=(g*a*n-o*m*n-g*i*l+t*m*l+o*i*d-t*a*d)*E,e[15]=(o*h*n-u*a*n+u*i*l-t*h*l-o*i*f+t*a*f)*E,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,m=o*u,d=o*h,y=a*h,b=l*c,x=l*u,_=l*h,M=i.x,w=i.y,E=i.z;return n[0]=(1-(m+y))*M,n[1]=(p+_)*M,n[2]=(g-x)*M,n[3]=0,n[4]=(p-_)*w,n[5]=(1-(f+y))*w,n[6]=(d+b)*w,n[7]=0,n[8]=(g+x)*E,n[9]=(d-b)*E,n[10]=(1-(f+m))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Mr.set(n[0],n[1],n[2]).length();const o=Mr.set(n[4],n[5],n[6]).length(),a=Mr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],In.copy(this);const c=1/r,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(i-n),u=(t+e)/(t-e),h=(i+n)/(i-n),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,r,o){const a=this.elements,l=1/(t-e),c=1/(i-n),u=1/(o-r),h=(t+e)*l,f=(i+n)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}Fe.prototype.isMatrix4=!0;const Mr=new O,In=new Fe,ag=new O(0,0,0),lg=new O(1,1,1),Di=new O,Io=new O,vn=new O,rh=new Fe,sh=new dt;class Xi{constructor(e=0,t=0,i=0,n=Xi.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.prototype.isEuler=!0;Xi.DefaultOrder="XYZ";Xi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class zc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cg=0;const oh=new O,Tr=new dt,ci=new Fe,Do=new O,Es=new O,ug=new O,hg=new dt,ah=new O(1,0,0),lh=new O(0,1,0),ch=new O(0,0,1),fg={type:"added"},uh={type:"removed"};class Ze extends hr{constructor(){super(),Object.defineProperty(this,"id",{value:cg++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DefaultUp.clone();const e=new O,t=new Xi,i=new dt,n=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Rt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=Ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(ch,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(ch,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Do.copy(e):Do.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Es,Do,this.up):ci.lookAt(Do,Es,this.up),this.quaternion.setFromRotationMatrix(ci),n&&(ci.extractRotation(n.matrixWorld),Tr.setFromRotationMatrix(ci),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Ze.DefaultUp=new O(0,1,0);Ze.DefaultMatrixAutoUpdate=!0;Ze.prototype.isObject3D=!0;const Dn=new O,ui=new O,yl=new O,hi=new O,Er=new O,Ar=new O,hh=new O,xl=new O,bl=new O,wl=new O;class wt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Dn.subVectors(e,t),n.cross(Dn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Dn.subVectors(n,t),ui.subVectors(i,t),yl.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(ui),l=Dn.dot(yl),c=ui.dot(ui),u=ui.dot(yl),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,hi),l.set(0,0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,t,i,n){return Dn.subVectors(i,t),ui.subVectors(e,t),Dn.cross(ui).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Dn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return wt.getUV(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;Er.subVectors(n,i),Ar.subVectors(r,i),xl.subVectors(e,i);const l=Er.dot(xl),c=Ar.dot(xl);if(l<=0&&c<=0)return t.copy(i);bl.subVectors(e,n);const u=Er.dot(bl),h=Ar.dot(bl);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Er,o);wl.subVectors(e,r);const p=Er.dot(wl),g=Ar.dot(wl);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ar,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return hh.subVectors(r,n),a=(h-u)/(h-u+(p-g)),t.copy(n).addScaledVector(hh,a);const y=1/(d+m+f);return o=m*y,a=f*y,t.copy(i).addScaledVector(Er,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let dg=0;class Et extends hr{constructor(){super(),Object.defineProperty(this,"id",{value:dg++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Yr,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ud,this.blendDst=hd,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ll,this.stencilZFail=ll,this.stencilZPass=ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===cd;continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==Qr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Et.prototype.isMaterial=!0;Et.fromType=function(){return null};class qi extends Et{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}qi.prototype.isMeshBasicMaterial=!0;const xt=new O,Fo=new be;class Pt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Js,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let n=0,r=e.length;n<r;n++){let o=e[n];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),o=new Ae),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let n=0,r=e.length;n<r;n++){let o=e[n];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),o=new be),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let n=0,r=e.length;n<r;n++){let o=e[n];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),o=new O),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let n=0,r=e.length;n<r;n++){let o=e[n];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),o=new Ge),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Js&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Pt.prototype.isBufferAttribute=!0;class yd extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xd extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pg extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}pg.prototype.isFloat16BufferAttribute=!0;class Ve extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mg=0;const Sn=new Fe,Sl=new Ze,Cr=new O,_n=new an,As=new an,It=new O;class Qe extends hr{constructor(){super(),Object.defineProperty(this,"id",{value:mg++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?xd:yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ve(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(_n.min,As.min),_n.expandByPoint(It),It.addVectors(_n.max,As.max),_n.expandByPoint(It)):(_n.expandByPoint(As.min),_n.expandByPoint(As.max))}_n.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Cr.fromBufferAttribute(e,c),It.add(Cr)),n=Math.max(n,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new O,u[T]=new O;const h=new O,f=new O,p=new O,g=new be,m=new be,d=new be,y=new O,b=new O;function x(T,A,L){h.fromArray(n,T*3),f.fromArray(n,A*3),p.fromArray(n,L*3),g.fromArray(o,T*2),m.fromArray(o,A*2),d.fromArray(o,L*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const F=1/(m.x*d.y-d.x*m.y);!isFinite(F)||(y.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(F),b.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(F),c[T].add(y),c[A].add(y),c[L].add(y),u[T].add(b),u[A].add(b),u[L].add(b))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let T=0,A=_.length;T<A;++T){const L=_[T],F=L.start,I=L.count;for(let W=F,U=F+I;W<U;W+=3)x(i[W+0],i[W+1],i[W+2])}const M=new O,w=new O,E=new O,v=new O;function S(T){E.fromArray(r,T*3),v.copy(E);const A=c[T];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),w.crossVectors(v,A);const F=w.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=F}for(let T=0,A=_.length;T<A;++T){const L=_[T],F=L.start,I=L.count;for(let W=F,U=F+I;W<U;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const n=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(n,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const n in i){if(e.attributes[n]===void 0)continue;const o=i[n].array,a=e.attributes[n],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let y=0;y<u;y++)f[g++]=c[p++]}return new Pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qe,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Qe.prototype.isBufferGeometry=!0;const fh=new Fe,Lr=new dr,Ml=new Mi,Fi=new O,zi=new O,Ui=new O,Tl=new O,El=new O,Al=new O,zo=new O,Uo=new O,Oo=new O,ko=new be,Bo=new be,No=new be,Cl=new O,Go=new O;class Ee extends Ze{constructor(e=new Qe,t=new qi){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(r),e.ray.intersectsSphere(Ml)===!1)||(fh.copy(r).invert(),Lr.copy(e.ray).applyMatrix4(fh),i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1))return;let o;if(i.isBufferGeometry){const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(n))for(let m=0,d=p.length;m<d;m++){const y=p[m],b=n[y.materialIndex],x=Math.max(y.start,g.start),_=Math.min(a.count,Math.min(y.start+y.count,g.start+g.count));for(let M=x,w=_;M<w;M+=3){const E=a.getX(M),v=a.getX(M+1),S=a.getX(M+2);o=Ho(this,b,e,Lr,l,c,u,h,f,E,v,S),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let y=m,b=d;y<b;y+=3){const x=a.getX(y),_=a.getX(y+1),M=a.getX(y+2);o=Ho(this,n,e,Lr,l,c,u,h,f,x,_,M),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(n))for(let m=0,d=p.length;m<d;m++){const y=p[m],b=n[y.materialIndex],x=Math.max(y.start,g.start),_=Math.min(l.count,Math.min(y.start+y.count,g.start+g.count));for(let M=x,w=_;M<w;M+=3){const E=M,v=M+1,S=M+2;o=Ho(this,b,e,Lr,l,c,u,h,f,E,v,S),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let y=m,b=d;y<b;y+=3){const x=y,_=y+1,M=y+2;o=Ho(this,n,e,Lr,l,c,u,h,f,x,_,M),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Ee.prototype.isMesh=!0;function gg(s,e,t,i,n,r,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side!==bi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:s}}function Ho(s,e,t,i,n,r,o,a,l,c,u,h){Fi.fromBufferAttribute(n,c),zi.fromBufferAttribute(n,u),Ui.fromBufferAttribute(n,h);const f=s.morphTargetInfluences;if(r&&f){zo.set(0,0,0),Uo.set(0,0,0),Oo.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],y=r[g];d!==0&&(Tl.fromBufferAttribute(y,c),El.fromBufferAttribute(y,u),Al.fromBufferAttribute(y,h),o?(zo.addScaledVector(Tl,d),Uo.addScaledVector(El,d),Oo.addScaledVector(Al,d)):(zo.addScaledVector(Tl.sub(Fi),d),Uo.addScaledVector(El.sub(zi),d),Oo.addScaledVector(Al.sub(Ui),d)))}Fi.add(zo),zi.add(Uo),Ui.add(Oo)}s.isSkinnedMesh&&(s.boneTransform(c,Fi),s.boneTransform(u,zi),s.boneTransform(h,Ui));const p=gg(s,e,t,i,Fi,zi,Ui,Cl);if(p){a&&(ko.fromBufferAttribute(a,c),Bo.fromBufferAttribute(a,u),No.fromBufferAttribute(a,h),p.uv=wt.getUV(Cl,Fi,zi,Ui,ko,Bo,No,new be)),l&&(ko.fromBufferAttribute(l,c),Bo.fromBufferAttribute(l,u),No.fromBufferAttribute(l,h),p.uv2=wt.getUV(Cl,Fi,zi,Ui,ko,Bo,No,new be));const g={a:c,b:u,c:h,normal:new O,materialIndex:0};wt.getNormal(Fi,zi,Ui,g.normal),p.face=g}return p}class bt extends Qe{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function g(m,d,y,b,x,_,M,w,E,v,S){const T=_/E,A=M/v,L=_/2,F=M/2,I=w/2,W=E+1,U=v+1;let H=0,J=0;const D=new O;for(let X=0;X<U;X++){const V=X*A-F;for(let Y=0;Y<W;Y++){const ee=Y*T-L;D[m]=ee*b,D[d]=V*x,D[y]=I,c.push(D.x,D.y,D.z),D[m]=0,D[d]=0,D[y]=w>0?1:-1,u.push(D.x,D.y,D.z),h.push(Y/E),h.push(1-X/v),H+=1}}for(let X=0;X<v;X++)for(let V=0;V<E;V++){const Y=f+V+W*X,ee=f+V+W*(X+1),re=f+(V+1)+W*(X+1),ne=f+(V+1)+W*X;l.push(Y,ee,ne),l.push(ee,re,ne),J+=6}a.addGroup(p,J,S),p+=J,f+=H}}static fromJSON(e){return new bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const i=ns(s[t]);for(const n in i)e[n]=i[n]}return e}const ao={clone:ns,merge:Yt};var vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Et{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=vg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}pn.prototype.isShaderMaterial=!0;class Uc extends Ze{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Uc.prototype.isCamera=!0;class en extends Uc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}en.prototype.isPerspectiveCamera=!0;const Rr=90,Pr=1;class Oc extends Ze{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const n=new en(Rr,Pr,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new O(1,0,0)),this.add(n);const r=new en(Rr,Pr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(-1,0,0)),this.add(r);const o=new en(Rr,Pr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);const a=new en(Rr,Pr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);const l=new en(Rr,Pr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,1)),this.add(l);const c=new en(Rr,Pr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Kn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Da extends Tt{constructor(e,t,i,n,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$r,super(e,t,i,n,r,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Da.prototype.isCubeTexture=!0;class bd extends dn{constructor(e,t={}){super(e,e,t);const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Da(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new bt(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Ni});r.uniforms.tEquirect.value=t;const o=new Ee(n,r),a=t.minFilter;return t.minFilter===oo&&(t.minFilter=Ft),new Oc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}}bd.prototype.isWebGLCubeRenderTarget=!0;const Ll=new O,yg=new O,xg=new Rt;class vi{constructor(e=new O(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Ll.subVectors(i,t).cross(yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ll),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xg.getNormalMatrix(e),n=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}vi.prototype.isPlane=!0;const Ir=new Mi,Vo=new O;class lo{constructor(e=new vi,t=new vi,i=new vi,n=new vi,r=new vi,o=new vi){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],p=i[9],g=i[10],m=i[11],d=i[12],y=i[13],b=i[14],x=i[15];return t[0].setComponents(a-n,h-l,m-f,x-d).normalize(),t[1].setComponents(a+n,h+l,m+f,x+d).normalize(),t[2].setComponents(a+r,h+c,m+p,x+y).normalize(),t[3].setComponents(a-r,h-c,m-p,x-y).normalize(),t[4].setComponents(a-o,h-u,m-g,x-b).normalize(),t[5].setComponents(a+o,h+u,m+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Vo.x=n.normal.x>0?e.max.x:e.min.x,Vo.y=n.normal.y>0?e.max.y:e.min.y,Vo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bg(s,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const h=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(s.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,n(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ur extends Qe{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let y=0;y<u;y++){const b=y*f-o;for(let x=0;x<c;x++){const _=x*h-r;g.push(_,-b,0),m.push(0,0,1),d.push(x/a),d.push(1-y/l)}}for(let y=0;y<l;y++)for(let b=0;b<a;b++){const x=b+c*y,_=b+c*(y+1),M=b+1+c*(y+1),w=b+1+c*y;p.push(x,_,w),p.push(_,M,w)}this.setIndex(p),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(d,2))}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg="vec3 transformed = vec3( position );",Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Pg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ng=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,s0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,p0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,m0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,P0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,F0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,J0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,$0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,av=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,cv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,hv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,fv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,pv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,mv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Av=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xe={alphamap_fragment:wg,alphamap_pars_fragment:Sg,alphatest_fragment:Mg,alphatest_pars_fragment:Tg,aomap_fragment:Eg,aomap_pars_fragment:Ag,begin_vertex:Cg,beginnormal_vertex:Lg,bsdfs:Rg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:zg,color_fragment:Ug,color_pars_fragment:Og,color_pars_vertex:kg,color_vertex:Bg,common:Ng,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Wg,emissivemap_fragment:jg,emissivemap_pars_fragment:Xg,encodings_fragment:qg,encodings_pars_fragment:Yg,envmap_fragment:Kg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:c0,envmap_vertex:$g,fog_vertex:e0,fog_pars_vertex:t0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:r0,lightmap_fragment:s0,lightmap_pars_fragment:o0,lights_lambert_vertex:a0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:h0,lights_phong_fragment:f0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:v0,lights_fragment_end:_0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:w0,map_fragment:S0,map_pars_fragment:M0,map_particle_fragment:T0,map_particle_pars_fragment:E0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphcolor_vertex:L0,morphnormal_vertex:R0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:D0,normal_fragment_maps:F0,normal_pars_fragment:z0,normal_pars_vertex:U0,normal_vertex:O0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:G0,output_fragment:H0,packing:V0,premultiplied_alpha_fragment:W0,project_vertex:j0,dithering_fragment:X0,dithering_pars_fragment:q0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:J0,shadowmap_vertex:Q0,shadowmask_pars_fragment:$0,skinbase_vertex:ev,skinning_pars_vertex:tv,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:rv,specularmap_pars_fragment:sv,tonemapping_fragment:ov,tonemapping_pars_fragment:av,transmission_fragment:lv,transmission_pars_fragment:cv,uv_pars_fragment:uv,uv_pars_vertex:hv,uv_vertex:fv,uv2_pars_fragment:dv,uv2_pars_vertex:pv,uv2_vertex:mv,worldpos_vertex:gv,background_vert:vv,background_frag:_v,cube_vert:yv,cube_frag:xv,depth_vert:bv,depth_frag:wv,distanceRGBA_vert:Sv,distanceRGBA_frag:Mv,equirect_vert:Tv,equirect_frag:Ev,linedashed_vert:Av,linedashed_frag:Cv,meshbasic_vert:Lv,meshbasic_frag:Rv,meshlambert_vert:Pv,meshlambert_frag:Iv,meshmatcap_vert:Dv,meshmatcap_frag:Fv,meshnormal_vert:zv,meshnormal_frag:Uv,meshphong_vert:Ov,meshphong_frag:kv,meshphysical_vert:Bv,meshphysical_frag:Nv,meshtoon_vert:Gv,meshtoon_frag:Hv,points_vert:Vv,points_frag:Wv,shadow_vert:jv,shadow_frag:Xv,sprite_vert:qv,sprite_frag:Yv},Te={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rt},uv2Transform:{value:new Rt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}}},fn={basic:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.fog,Te.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Yt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Yt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Yt([Te.points,Te.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Yt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Yt([Te.common,Te.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Yt([Te.sprite,Te.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},cube:{uniforms:Yt([Te.envmap,{opacity:{value:1}}]),vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Yt([Te.common,Te.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Yt([Te.lights,Te.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};fn.physical={uniforms:Yt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};function Kv(s,e,t,i,n,r){const o=new Ae(0);let a=n===!0?0:1,l,c,u=null,h=0,f=null;function p(m,d){let y=!1,b=d.isScene===!0?d.background:null;b&&b.isTexture&&(b=e.get(b));const x=s.xr,_=x.getSession&&x.getSession();_&&_.environmentBlendMode==="additive"&&(b=null),b===null?g(o,a):b&&b.isColor&&(g(b,1),y=!0),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Pa)?(c===void 0&&(c=new Ee(new bt(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ns(fn.cube.uniforms),vertexShader:fn.cube.vertexShader,fragmentShader:fn.cube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||h!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ee(new ur(2,2),new pn({name:"BackgroundMaterial",uniforms:ns(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function Zv(s,e,t,i){const n=s.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(I,W,U,H,J){let D=!1;if(o){const X=m(H,U,W);c!==X&&(c=X,p(c.object)),D=y(I,H,U,J),D&&b(I,H,U,J)}else{const X=W.wireframe===!0;(c.geometry!==H.id||c.program!==U.id||c.wireframe!==X)&&(c.geometry=H.id,c.program=U.id,c.wireframe=X,D=!0)}J!==null&&t.update(J,34963),(D||u)&&(u=!1,v(I,W,U,H),J!==null&&s.bindBuffer(34963,t.get(J).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(I){return i.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function m(I,W,U){const H=U.wireframe===!0;let J=a[I.id];J===void 0&&(J={},a[I.id]=J);let D=J[W.id];D===void 0&&(D={},J[W.id]=D);let X=D[H];return X===void 0&&(X=d(f()),D[H]=X),X}function d(I){const W=[],U=[],H=[];for(let J=0;J<n;J++)W[J]=0,U[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:U,attributeDivisors:H,object:I,attributes:{},index:null}}function y(I,W,U,H){const J=c.attributes,D=W.attributes;let X=0;const V=U.getAttributes();for(const Y in V)if(V[Y].location>=0){const re=J[Y];let ne=D[Y];if(ne===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),re===void 0||re.attribute!==ne||ne&&re.data!==ne.data)return!0;X++}return c.attributesNum!==X||c.index!==H}function b(I,W,U,H){const J={},D=W.attributes;let X=0;const V=U.getAttributes();for(const Y in V)if(V[Y].location>=0){let re=D[Y];re===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));const ne={};ne.attribute=re,re&&re.data&&(ne.data=re.data),J[Y]=ne,X++}c.attributes=J,c.attributesNum=X,c.index=H}function x(){const I=c.newAttributes;for(let W=0,U=I.length;W<U;W++)I[W]=0}function _(I){M(I,0)}function M(I,W){const U=c.newAttributes,H=c.enabledAttributes,J=c.attributeDivisors;U[I]=1,H[I]===0&&(s.enableVertexAttribArray(I),H[I]=1),J[I]!==W&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),J[I]=W)}function w(){const I=c.newAttributes,W=c.enabledAttributes;for(let U=0,H=W.length;U<H;U++)W[U]!==I[U]&&(s.disableVertexAttribArray(U),W[U]=0)}function E(I,W,U,H,J,D){i.isWebGL2===!0&&(U===5124||U===5125)?s.vertexAttribIPointer(I,W,U,J,D):s.vertexAttribPointer(I,W,U,H,J,D)}function v(I,W,U,H){if(i.isWebGL2===!1&&(I.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const J=H.attributes,D=U.getAttributes(),X=W.defaultAttributeValues;for(const V in D){const Y=D[V];if(Y.location>=0){let ee=J[V];if(ee===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const re=ee.normalized,ne=ee.itemSize,Z=t.get(ee);if(Z===void 0)continue;const ae=Z.buffer,j=Z.type,C=Z.bytesPerElement;if(ee.isInterleavedBufferAttribute){const R=ee.data,B=R.stride,G=ee.offset;if(R.isInstancedInterleavedBuffer){for(let q=0;q<Y.locationSize;q++)M(Y.location+q,R.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let q=0;q<Y.locationSize;q++)_(Y.location+q);s.bindBuffer(34962,ae);for(let q=0;q<Y.locationSize;q++)E(Y.location+q,ne/Y.locationSize,j,re,B*C,(G+ne/Y.locationSize*q)*C)}else{if(ee.isInstancedBufferAttribute){for(let R=0;R<Y.locationSize;R++)M(Y.location+R,ee.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let R=0;R<Y.locationSize;R++)_(Y.location+R);s.bindBuffer(34962,ae);for(let R=0;R<Y.locationSize;R++)E(Y.location+R,ne/Y.locationSize,j,re,ne*C,ne/Y.locationSize*R*C)}}else if(X!==void 0){const re=X[V];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(Y.location,re);break;case 3:s.vertexAttrib3fv(Y.location,re);break;case 4:s.vertexAttrib4fv(Y.location,re);break;default:s.vertexAttrib1fv(Y.location,re)}}}}w()}function S(){L();for(const I in a){const W=a[I];for(const U in W){const H=W[U];for(const J in H)g(H[J].object),delete H[J];delete W[U]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const U in W){const H=W[U];for(const J in H)g(H[J].object),delete H[J];delete W[U]}delete a[I.id]}function A(I){for(const W in a){const U=a[W];if(U[I.id]===void 0)continue;const H=U[I.id];for(const J in H)g(H[J].object),delete H[J];delete U[I.id]}}function L(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:_,disableUnusedAttributes:w}}function Jv(s,e,t,i){const n=i.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(n)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Qv(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),d=s.getParameter(36347),y=s.getParameter(36348),b=s.getParameter(36349),x=f>0,_=o||e.has("OES_texture_float"),M=x&&_,w=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:w}}function $v(s){const e=this;let t=null,i=0,n=!1,r=!1;const o=new vi,a=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||i!==0||n;return n=f,t=u(h,p,0),i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,y=s.get(h);if(!n||g===null||g.length===0||r&&!d)r?u(null):c();else{const b=r?0:i,x=b*4;let _=y.clippingState||null;l.value=_,_=u(g,f,x,p);for(let M=0;M!==x;++M)_[M]=t[M];y.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const y=p+m*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<y)&&(d=new Float32Array(y));for(let x=0,_=p;x!==m;++x,_+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function e_(s){let e=new WeakMap;function t(o,a){return a===ec?o.mapping=$r:a===tc&&(o.mapping=es),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ec||a===tc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bd(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class co extends Uc{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}co.prototype.isOrthographicCamera=!0;const Vr=4,dh=[.125,.215,.35,.446,.526,.582],nr=20,Rl=new co,ph=new Ae;let Pl=null;const er=(1+Math.sqrt(5))/2,Dr=1/er,mh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,er,Dr),new O(0,er,-Dr),new O(Dr,0,er),new O(-Dr,0,er),new O(er,Dr,0),new O(-er,Dr,0)];class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Pl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Zs,format:Mn,encoding:Jn,depthBuffer:!1},n=vh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(r)),this._blurMaterial=n_(r,e,t)}return n}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,i,n){const a=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ph),u.toneMapping=Kn,u.autoClear=!1;const p=new qi({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Ee(new bt,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(ph),m=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(a.up.set(0,l[y],0),a.lookAt(c[y],0,0)):b===1?(a.up.set(0,0,l[y]),a.lookAt(0,c[y],0)):(a.up.set(0,l[y],0),a.lookAt(0,0,c[y]));const x=this._cubeSize;Wo(n,b*x,y>2?x:0,x,x),u.setRenderTarget(n),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===$r||e.mapping===es;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Wo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Rl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=mh[(n-1)%mh.length];this._blur(e,n-1,n,r,o)}t.autoClear=i}_blur(e,t,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ee(this._lodPlanes[n],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*nr-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):nr;d>nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${nr}`);const y=[];let b=0;for(let E=0;E<nr;++E){const v=E/m,S=Math.exp(-v*v/2);y.push(S),E===0?b+=S:E<d&&(b+=2*S)}for(let E=0;E<y.length;E++)y[E]=y[E]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=y,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const _=this._sizeLods[n],M=3*_*(n>x-Vr?n-x+Vr:0),w=4*(this._cubeSize-_);Wo(t,M,w,3*_,2*_),l.setRenderTarget(t),l.render(h,Rl)}}function t_(s){const e=[],t=[],i=[];let n=s;const r=s-Vr+1+dh.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Vr?l=dh[o-s+Vr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,y=1,b=new Float32Array(m*g*p),x=new Float32Array(d*g*p),_=new Float32Array(y*g*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,v=w>2?0:-1,S=[E,v,0,E+2/3,v,0,E+2/3,v+1,0,E,v,0,E+2/3,v+1,0,E,v+1,0];b.set(S,m*g*w),x.set(f,d*g*w);const T=[w,w,w,w,w,w];_.set(T,y*g*w)}const M=new Qe;M.setAttribute("position",new Pt(b,m)),M.setAttribute("uv",new Pt(x,d)),M.setAttribute("faceIndex",new Pt(_,y)),e.push(M),n>Vr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vh(s,e,t){const i=new dn(s,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function n_(s,e,t){const i=new Float32Array(nr),n=new O(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function _h(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function yh(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i_(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ec||l===tc,u=l===$r||l===es;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new gh(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new gh(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function r_(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function s_(s,e,t,i){const n={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete n[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,y=m.length;d<y;d++)e.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const b=p.array;m=p.version;for(let x=0,_=b.length;x<_;x+=3){const M=b[x+0],w=b[x+1],E=b[x+2];f.push(M,w,w,E,E,M)}}else{const b=g.array;m=g.version;for(let x=0,_=b.length/3-1;x<_;x+=3){const M=x+0,w=x+1,E=x+2;f.push(M,w,w,E,E,M)}}const d=new(vd(f)?xd:yd)(f,1);d.version=m;const y=r.get(h);y&&e.remove(y),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function o_(s,e,t,i){const n=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){s.drawElements(r,p,a,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(n)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,f*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function a_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function l_(s,e){return s[0]-e[0]}function c_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Il(s,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),s.divideScalar(t)}function u_(s,e,t){const i={},n=new Float32Array(8),r=new WeakMap,o=new Ge,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==m){let W=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",W)};d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),_===!0&&(S=2),M===!0&&(S=3);let T=u.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*A*4*m),F=new Ia(L,T,A,m);F.type=rr,F.needsUpdate=!0;const I=S*4;for(let U=0;U<m;U++){const H=w[U],J=E[U],D=v[U],X=T*A*4*U;for(let V=0;V<H.count;V++){const Y=V*I;x===!0&&(o.fromBufferAttribute(H,V),H.normalized===!0&&Il(o,H),L[X+Y+0]=o.x,L[X+Y+1]=o.y,L[X+Y+2]=o.z,L[X+Y+3]=0),_===!0&&(o.fromBufferAttribute(J,V),J.normalized===!0&&Il(o,J),L[X+Y+4]=o.x,L[X+Y+5]=o.y,L[X+Y+6]=o.z,L[X+Y+7]=0),M===!0&&(o.fromBufferAttribute(D,V),D.normalized===!0&&Il(o,D),L[X+Y+8]=o.x,L[X+Y+9]=o.y,L[X+Y+10]=o.z,L[X+Y+11]=D.itemSize===4?o.w:1)}}d={count:m,texture:F,size:new be(T,A)},r.set(u,d),u.addEventListener("dispose",W)}let y=0;for(let x=0;x<p.length;x++)y+=p[x];const b=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",b),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let _=0;_<g;_++)m[_]=[_,0];i[u.id]=m}for(let _=0;_<g;_++){const M=m[_];M[0]=_,M[1]=p[_]}m.sort(c_);for(let _=0;_<8;_++)_<g&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(l_);const d=u.morphAttributes.position,y=u.morphAttributes.normal;let b=0;for(let _=0;_<8;_++){const M=a[_],w=M[0],E=M[1];w!==Number.MAX_SAFE_INTEGER&&E?(d&&u.getAttribute("morphTarget"+_)!==d[w]&&u.setAttribute("morphTarget"+_,d[w]),y&&u.getAttribute("morphNormal"+_)!==y[w]&&u.setAttribute("morphNormal"+_,y[w]),n[_]=E,b+=E):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),y&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),n[_]=0)}const x=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function h_(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Sd=new Tt,Md=new Ia,Td=new Fc,Ed=new Da,xh=[],bh=[],wh=new Float32Array(16),Sh=new Float32Array(9),Mh=new Float32Array(4);function ss(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=xh[n];if(r===void 0&&(r=new Float32Array(n),xh[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Fa(s,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function f_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function d_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function p_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function m_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function g_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Mh.set(i),s.uniformMatrix2fv(this.addr,!1,Mh),on(t,i)}}function v_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Sh.set(i),s.uniformMatrix3fv(this.addr,!1,Sh),on(t,i)}}function __(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;wh.set(i),s.uniformMatrix4fv(this.addr,!1,wh),on(t,i)}}function y_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function x_(s,e){const t=this.cache;sn(t,e)||(s.uniform2iv(this.addr,e),on(t,e))}function b_(s,e){const t=this.cache;sn(t,e)||(s.uniform3iv(this.addr,e),on(t,e))}function w_(s,e){const t=this.cache;sn(t,e)||(s.uniform4iv(this.addr,e),on(t,e))}function S_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function M_(s,e){const t=this.cache;sn(t,e)||(s.uniform2uiv(this.addr,e),on(t,e))}function T_(s,e){const t=this.cache;sn(t,e)||(s.uniform3uiv(this.addr,e),on(t,e))}function E_(s,e){const t=this.cache;sn(t,e)||(s.uniform4uiv(this.addr,e),on(t,e))}function A_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Sd,n)}function C_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Td,n)}function L_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ed,n)}function R_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Md,n)}function P_(s){switch(s){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return v_;case 35676:return __;case 5124:case 35670:return y_;case 35667:case 35671:return x_;case 35668:case 35672:return b_;case 35669:case 35673:return w_;case 5125:return S_;case 36294:return M_;case 36295:return T_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return R_}}function I_(s,e){s.uniform1fv(this.addr,e)}function D_(s,e){const t=ss(e,this.size,2);s.uniform2fv(this.addr,t)}function F_(s,e){const t=ss(e,this.size,3);s.uniform3fv(this.addr,t)}function z_(s,e){const t=ss(e,this.size,4);s.uniform4fv(this.addr,t)}function U_(s,e){const t=ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function O_(s,e){const t=ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function k_(s,e){const t=ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function B_(s,e){s.uniform1iv(this.addr,e)}function N_(s,e){s.uniform2iv(this.addr,e)}function G_(s,e){s.uniform3iv(this.addr,e)}function H_(s,e){s.uniform4iv(this.addr,e)}function V_(s,e){s.uniform1uiv(this.addr,e)}function W_(s,e){s.uniform2uiv(this.addr,e)}function j_(s,e){s.uniform3uiv(this.addr,e)}function X_(s,e){s.uniform4uiv(this.addr,e)}function q_(s,e,t){const i=e.length,n=Fa(t,i);s.uniform1iv(this.addr,n);for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Sd,n[r])}function Y_(s,e,t){const i=e.length,n=Fa(t,i);s.uniform1iv(this.addr,n);for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Td,n[r])}function K_(s,e,t){const i=e.length,n=Fa(t,i);s.uniform1iv(this.addr,n);for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Ed,n[r])}function Z_(s,e,t){const i=e.length,n=Fa(t,i);s.uniform1iv(this.addr,n);for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Md,n[r])}function J_(s){switch(s){case 5126:return I_;case 35664:return D_;case 35665:return F_;case 35666:return z_;case 35674:return U_;case 35675:return O_;case 35676:return k_;case 5124:case 35670:return B_;case 35667:case 35671:return N_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return W_;case 36295:return j_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}function Q_(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=P_(e.type)}function $_(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=J_(e.type)}function Ad(s){this.id=s,this.seq=[],this.map={}}Ad.prototype.setValue=function(s,e,t){const i=this.seq;for(let n=0,r=i.length;n!==r;++n){const o=i[n];o.setValue(s,e[o.id],t)}};const Dl=/(\w+)(\])?(\[|\.)?/g;function Th(s,e){s.seq.push(e),s.map[e.id]=e}function ey(s,e,t){const i=s.name,n=i.length;for(Dl.lastIndex=0;;){const r=Dl.exec(i),o=Dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Th(t,c===void 0?new Q_(a,s,e):new $_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Ad(a),Th(t,h)),t=h}}}function Gi(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let i=0;i<t;++i){const n=s.getActiveUniform(e,i),r=s.getUniformLocation(e,n.name);ey(n,r,this)}}Gi.prototype.setValue=function(s,e,t,i){const n=this.map[e];n!==void 0&&n.setValue(s,t,i)};Gi.prototype.setOptional=function(s,e,t){const i=e[t];i!==void 0&&this.setValue(s,t,i)};Gi.upload=function(s,e,t,i){for(let n=0,r=e.length;n!==r;++n){const o=e[n],a=t[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,i)}};Gi.seqWithValue=function(s,e){const t=[];for(let i=0,n=s.length;i!==n;++i){const r=s[i];r.id in e&&t.push(r)}return t};function Eh(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let ty=0;function ny(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++)i.push(o+1+": "+t[o]);return i.join(`
`)}function iy(s){switch(s){case Jn:return["Linear","( value )"];case ft:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ah(s,e,t){const i=s.getShaderParameter(e,35713),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[0]);return t.toUpperCase()+`

`+n+`

`+ny(s.getShaderSource(e),o)}else return n}function ry(s,e){const t=iy(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sy(s,e){let t;switch(e){case pm:t="Linear";break;case mm:t="Reinhard";break;case gm:t="OptimizedCineon";break;case fd:t="ACESFilmic";break;case vm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oy(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function ay(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ly(s,e){const t={},i=s.getProgramParameter(e,35721);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ks(s){return s!==""}function Ch(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(s){return s.replace(cy,uy)}function uy(s,e){const t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return fc(t)}const hy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(s){return s.replace(fy,Cd).replace(hy,dy)}function dy(s,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Cd(s,e,t,i)}function Cd(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ph(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function py(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Os&&(e="SHADOWMAP_TYPE_VSM"),e}function my(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $r:case es:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function vy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ra:e="ENVMAP_BLENDING_MULTIPLY";break;case fm:e="ENVMAP_BLENDING_MIX";break;case dm:e="ENVMAP_BLENDING_ADD";break}return e}function _y(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yy(s,e,t,i){const n=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=py(t),c=my(t),u=gy(t),h=vy(t),f=_y(t),p=t.isWebGL2?"":oy(t),g=ay(r),m=n.createProgram();let d,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(ks).join(`
`),d.length>0&&(d+=`
`),y=[p,g].filter(ks).join(`
`),y.length>0&&(y+=`
`)):(d=[Ph(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),y=[p,Ph(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.encodings_pars_fragment,ry("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=fc(o),o=Ch(o,t),o=Lh(o,t),a=fc(a),a=Ch(a,t),a=Lh(a,t),o=Rh(o),a=Rh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const x=b+d+o,_=b+y+a,M=Eh(n,35633,x),w=Eh(n,35632,_);if(n.attachShader(m,M),n.attachShader(m,w),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),s.debug.checkShaderErrors){const S=n.getProgramInfoLog(m).trim(),T=n.getShaderInfoLog(M).trim(),A=n.getShaderInfoLog(w).trim();let L=!0,F=!0;if(n.getProgramParameter(m,35714)===!1){L=!1;const I=Ah(n,M,"vertex"),W=Ah(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+I+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||A==="")&&(F=!1);F&&(this.diagnostics={runnable:L,programLog:S,vertexShader:{log:T,prefix:d},fragmentShader:{log:A,prefix:y}})}n.deleteShader(M),n.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new Gi(n,m)),E};let v;return this.getAttributes=function(){return v===void 0&&(v=ly(n,m)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=w,this}let xy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new wy(e);t.set(e,i)}return t.get(e)}}class wy{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}}function Sy(s,e,t,i,n,r,o){const a=new zc,l=new by,c=[],u=n.isWebGL2,h=n.logarithmicDepthBuffer,f=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,S,T,A,L){const F=A.fog,I=L.geometry,W=v.isMeshStandardMaterial?A.environment:null,U=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),H=!!U&&U.mapping===Pa?U.image.height:null,J=g[v.type];v.precision!==null&&(p=n.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const D=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=D!==void 0?D.length:0;let V=0;I.morphAttributes.position!==void 0&&(V=1),I.morphAttributes.normal!==void 0&&(V=2),I.morphAttributes.color!==void 0&&(V=3);let Y,ee,re,ne;if(J){const R=fn[J];Y=R.vertexShader,ee=R.fragmentShader}else Y=v.vertexShader,ee=v.fragmentShader,l.update(v),re=l.getVertexShaderID(v),ne=l.getFragmentShaderID(v);const Z=s.getRenderTarget(),ae=v.alphaTest>0,j=v.clearcoat>0;return{isWebGL2:u,shaderID:J,shaderName:v.type,vertexShader:Y,fragmentShader:ee,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:L.isInstancedMesh===!0,instancingColor:L.isInstancedMesh===!0&&L.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Z===null?s.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Jn,map:!!v.map,matcap:!!v.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:H,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===km,tangentSpaceNormalMap:v.normalMapType===rs,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ft,clearcoat:j,clearcoatMap:j&&!!v.clearcoatMap,clearcoatRoughnessMap:j&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:j&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Yr,alphaMap:!!v.alphaMap,alphaTest:ae,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:V,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:Kn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bi,flipSided:v.side===yn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)S.push(T),S.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(y(S,v),b(S,v),S.push(s.outputEncoding)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputEncoding),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.combine),v.push(S.vertexUvs),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.displacementMap&&a.enable(18),S.specularMap&&a.enable(19),S.roughnessMap&&a.enable(20),S.metalnessMap&&a.enable(21),S.gradientMap&&a.enable(22),S.alphaMap&&a.enable(23),S.alphaTest&&a.enable(24),S.vertexColors&&a.enable(25),S.vertexAlphas&&a.enable(26),S.vertexUvs&&a.enable(27),S.vertexTangents&&a.enable(28),S.uvsVertexOnly&&a.enable(29),S.fog&&a.enable(30),v.push(a.mask),a.disableAll(),S.useFog&&a.enable(0),S.flatShading&&a.enable(1),S.logarithmicDepthBuffer&&a.enable(2),S.skinning&&a.enable(3),S.morphTargets&&a.enable(4),S.morphNormals&&a.enable(5),S.morphColors&&a.enable(6),S.premultipliedAlpha&&a.enable(7),S.shadowMapEnabled&&a.enable(8),S.physicallyCorrectLights&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.specularIntensityMap&&a.enable(14),S.specularColorMap&&a.enable(15),S.transmission&&a.enable(16),S.transmissionMap&&a.enable(17),S.thicknessMap&&a.enable(18),S.sheen&&a.enable(19),S.sheenColorMap&&a.enable(20),S.sheenRoughnessMap&&a.enable(21),S.decodeVideoTexture&&a.enable(22),S.opaque&&a.enable(23),v.push(a.mask)}function x(v){const S=g[v.type];let T;if(S){const A=fn[S];T=ao.clone(A.uniforms)}else T=v.uniforms;return T}function _(v,S){let T;for(let A=0,L=c.length;A<L;A++){const F=c[A];if(F.cacheKey===S){T=F,++T.usedTimes;break}}return T===void 0&&(T=new yy(s,S,v,r),c.push(T)),T}function M(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:_,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:E}}function My(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Ty(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ih(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dh(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(h,f,p,g,m,d){let y=s[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},s[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=p,y.groupOrder=g,y.renderOrder=h.renderOrder,y.z=m,y.group=d),e++,y}function a(h,f,p,g,m,d){const y=o(h,f,p,g,m,d);p.transmission>0?i.push(y):p.transparent===!0?n.push(y):t.push(y)}function l(h,f,p,g,m,d){const y=o(h,f,p,g,m,d);p.transmission>0?i.unshift(y):p.transparent===!0?n.unshift(y):t.unshift(y)}function c(h,f){t.length>1&&t.sort(h||Ty),i.length>1&&i.sort(f||Ih),n.length>1&&n.sort(f||Ih)}function u(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:u,sort:c}}function Ey(){let s=new WeakMap;function e(i,n){let r;return s.has(i)===!1?(r=new Dh,s.set(i,[r])):n>=s.get(i).length?(r=new Dh,s.get(i).push(r)):r=s.get(i)[n],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ay(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ae};break;case"SpotLight":t={position:new O,direction:new O,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function Cy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ly=0;function Ry(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Py(s,e){const t=new Ay,i=Cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)n.probe.push(new O);const r=new O,o=new Fe,a=new Fe;function l(u,h){let f=0,p=0,g=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,d=0,y=0,b=0,x=0,_=0,M=0,w=0;u.sort(Ry);const E=h!==!0?Math.PI:1;for(let S=0,T=u.length;S<T;S++){const A=u[S],L=A.color,F=A.intensity,I=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)f+=L.r*F*E,p+=L.g*F*E,g+=L.b*F*E;else if(A.isLightProbe)for(let U=0;U<9;U++)n.probe[U].addScaledVector(A.sh.coefficients[U],F);else if(A.isDirectionalLight){const U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity*E),A.castShadow){const H=A.shadow,J=i.get(A);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=A.shadow.matrix,_++}n.directional[m]=U,m++}else if(A.isSpotLight){const U=t.get(A);if(U.position.setFromMatrixPosition(A.matrixWorld),U.color.copy(L).multiplyScalar(F*E),U.distance=I,U.coneCos=Math.cos(A.angle),U.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),U.decay=A.decay,A.castShadow){const H=A.shadow,J=i.get(A);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=W,n.spotShadowMatrix[y]=A.shadow.matrix,w++}n.spot[y]=U,y++}else if(A.isRectAreaLight){const U=t.get(A);U.color.copy(L).multiplyScalar(F),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),n.rectArea[b]=U,b++}else if(A.isPointLight){const U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity*E),U.distance=A.distance,U.decay=A.decay,A.castShadow){const H=A.shadow,J=i.get(A);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,n.pointShadow[d]=J,n.pointShadowMap[d]=W,n.pointShadowMatrix[d]=A.shadow.matrix,M++}n.point[d]=U,d++}else if(A.isHemisphereLight){const U=t.get(A);U.skyColor.copy(A.color).multiplyScalar(F*E),U.groundColor.copy(A.groundColor).multiplyScalar(F*E),n.hemi[x]=U,x++}}b>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=g;const v=n.hash;(v.directionalLength!==m||v.pointLength!==d||v.spotLength!==y||v.rectAreaLength!==b||v.hemiLength!==x||v.numDirectionalShadows!==_||v.numPointShadows!==M||v.numSpotShadows!==w)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=b,n.point.length=d,n.hemi.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotShadowMatrix.length=w,v.directionalLength=m,v.pointLength=d,v.spotLength=y,v.rectAreaLength=b,v.hemiLength=x,v.numDirectionalShadows=_,v.numPointShadows=M,v.numSpotShadows=w,n.version=Ly++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const y=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const _=u[b];if(_.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(y),f++}else if(_.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(y),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(y),g++}else if(_.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(y),a.identity(),o.copy(_.matrixWorld),o.premultiply(y),a.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(y),p++}else if(_.isHemisphereLight){const M=n.hemi[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(y),d++}}}return{setup:l,setupView:c,state:n}}function Fh(s,e){const t=new Py(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function o(h){i.push(h)}function a(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Iy(s,e){let t=new WeakMap;function i(r,o=0){let a;return t.has(r)===!1?(a=new Fh(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new Fh(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function n(){t=new WeakMap}return{get:i,dispose:n}}class za extends Et{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}za.prototype.isMeshDepthMaterial=!0;class Ua extends Et{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Ua.prototype.isMeshDistanceMaterial=!0;const Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ld(s,e,t){let i=new lo;const n=new be,r=new be,o=new Ge,a=new za({depthPacking:gd}),l=new Ua,c={},u=t.maxTextureSize,h={0:yn,1:Qr,2:bi},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Dy,fragmentShader:Fy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ee(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad,this.render=function(_,M,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;const E=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),T=s.state;T.setBlending(Ni),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let A=0,L=_.length;A<L;A++){const F=_[A],I=F.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;n.copy(I.mapSize);const W=I.getFrameExtents();if(n.multiply(W),r.copy(I.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/W.x),n.x=r.x*W.x,I.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/W.y),n.y=r.y*W.y,I.mapSize.y=r.y)),I.map===null&&!I.isPointLightShadow&&this.type===Os&&(I.map=new dn(n.x,n.y),I.map.texture.name=F.name+".shadowMap",I.mapPass=new dn(n.x,n.y),I.camera.updateProjectionMatrix()),I.map===null){const H={minFilter:Dt,magFilter:Dt,format:Mn};I.map=new dn(n.x,n.y,H),I.map.texture.name=F.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const U=I.getViewportCount();for(let H=0;H<U;H++){const J=I.getViewport(H);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),T.viewport(o),I.updateMatrices(F,H),i=I.getFrustum(),x(M,w,I.camera,F,this.type)}!I.isPointLightShadow&&this.type===Os&&y(I,w),I.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(E,v,S)};function y(_,M){const w=e.update(m);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,s.setRenderTarget(_.mapPass),s.clear(),s.renderBufferDirect(M,null,w,f,m,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,s.setRenderTarget(_.map),s.clear(),s.renderBufferDirect(M,null,w,p,m,null)}function b(_,M,w,E,v,S){let T=null;const A=w.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(A!==void 0?T=A:T=w.isPointLight===!0?l:a,s.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const L=T.uuid,F=M.uuid;let I=c[L];I===void 0&&(I={},c[L]=I);let W=I[F];W===void 0&&(W=T.clone(),I[F]=W),T=W}return T.visible=M.visible,T.wireframe=M.wireframe,S===Os?T.side=M.shadowSide!==null?M.shadowSide:M.side:T.side=M.shadowSide!==null?M.shadowSide:h[M.side],T.alphaMap=M.alphaMap,T.alphaTest=M.alphaTest,T.clipShadows=M.clipShadows,T.clippingPlanes=M.clippingPlanes,T.clipIntersection=M.clipIntersection,T.displacementMap=M.displacementMap,T.displacementScale=M.displacementScale,T.displacementBias=M.displacementBias,T.wireframeLinewidth=M.wireframeLinewidth,T.linewidth=M.linewidth,w.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(T.referencePosition.setFromMatrixPosition(w.matrixWorld),T.nearDistance=E,T.farDistance=v),T}function x(_,M,w,E,v){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&v===Os)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,_.matrixWorld);const A=e.update(_),L=_.material;if(Array.isArray(L)){const F=A.groups;for(let I=0,W=F.length;I<W;I++){const U=F[I],H=L[U.materialIndex];if(H&&H.visible){const J=b(_,H,E,w.near,w.far,v);s.renderBufferDirect(w,null,A,J,_,U)}}}else if(L.visible){const F=b(_,L,E,w.near,w.far,v);s.renderBufferDirect(w,null,A,F,_,null)}}const T=_.children;for(let A=0,L=T.length;A<L;A++)x(T[A],M,w,E,v)}}function zy(s,e,t){const i=t.isWebGL2;function n(){let K=!1;const me=new Ge;let fe=null;const Le=new Ge(0,0,0,0);return{setMask:function(Se){fe!==Se&&!K&&(s.colorMask(Se,Se,Se,Se),fe=Se)},setLocked:function(Se){K=Se},setClear:function(Se,De,xe,Re,je){je===!0&&(Se*=Re,De*=Re,xe*=Re),me.set(Se,De,xe,Re),Le.equals(me)===!1&&(s.clearColor(Se,De,xe,Re),Le.copy(me))},reset:function(){K=!1,fe=null,Le.set(-1,0,0,0)}}}function r(){let K=!1,me=null,fe=null,Le=null;return{setTest:function(Se){Se?ne(2929):Z(2929)},setMask:function(Se){me!==Se&&!K&&(s.depthMask(Se),me=Se)},setFunc:function(Se){if(fe!==Se){if(Se)switch(Se){case sm:s.depthFunc(512);break;case om:s.depthFunc(519);break;case am:s.depthFunc(513);break;case $l:s.depthFunc(515);break;case lm:s.depthFunc(514);break;case cm:s.depthFunc(518);break;case um:s.depthFunc(516);break;case hm:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);fe=Se}},setLocked:function(Se){K=Se},setClear:function(Se){Le!==Se&&(s.clearDepth(Se),Le=Se)},reset:function(){K=!1,me=null,fe=null,Le=null}}}function o(){let K=!1,me=null,fe=null,Le=null,Se=null,De=null,xe=null,Re=null,je=null;return{setTest:function(He){K||(He?ne(2960):Z(2960))},setMask:function(He){me!==He&&!K&&(s.stencilMask(He),me=He)},setFunc:function(He,ot,Xt){(fe!==He||Le!==ot||Se!==Xt)&&(s.stencilFunc(He,ot,Xt),fe=He,Le=ot,Se=Xt)},setOp:function(He,ot,Xt){(De!==He||xe!==ot||Re!==Xt)&&(s.stencilOp(He,ot,Xt),De=He,xe=ot,Re=Xt)},setLocked:function(He){K=He},setClear:function(He){je!==He&&(s.clearStencil(He),je=He)},reset:function(){K=!1,me=null,fe=null,Le=null,Se=null,De=null,xe=null,Re=null,je=null}}}const a=new n,l=new r,c=new o;let u={},h={},f=new WeakMap,p=[],g=null,m=!1,d=null,y=null,b=null,x=null,_=null,M=null,w=null,E=!1,v=null,S=null,T=null,A=null,L=null;const F=s.getParameter(35661);let I=!1,W=0;const U=s.getParameter(7938);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),I=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),I=W>=2);let H=null,J={};const D=s.getParameter(3088),X=s.getParameter(2978),V=new Ge().fromArray(D),Y=new Ge().fromArray(X);function ee(K,me,fe){const Le=new Uint8Array(4),Se=s.createTexture();s.bindTexture(K,Se),s.texParameteri(K,10241,9728),s.texParameteri(K,10240,9728);for(let De=0;De<fe;De++)s.texImage2D(me+De,0,6408,1,1,0,6408,5121,Le);return Se}const re={};re[3553]=ee(3553,3553,1),re[34067]=ee(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ne(2929),l.setFunc($l),Q(!1),se(Pu),ne(2884),G(Ni);function ne(K){u[K]!==!0&&(s.enable(K),u[K]=!0)}function Z(K){u[K]!==!1&&(s.disable(K),u[K]=!1)}function ae(K,me){return h[K]!==me?(s.bindFramebuffer(K,me),h[K]=me,i&&(K===36009&&(h[36160]=me),K===36160&&(h[36009]=me)),!0):!1}function j(K,me){let fe=p,Le=!1;if(K)if(fe=f.get(me),fe===void 0&&(fe=[],f.set(me,fe)),K.isWebGLMultipleRenderTargets){const Se=K.texture;if(fe.length!==Se.length||fe[0]!==36064){for(let De=0,xe=Se.length;De<xe;De++)fe[De]=36064+De;fe.length=Se.length,Le=!0}}else fe[0]!==36064&&(fe[0]=36064,Le=!0);else fe[0]!==1029&&(fe[0]=1029,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function C(K){return g!==K?(s.useProgram(K),g=K,!0):!1}const R={[Br]:32774,[Yp]:32778,[Kp]:32779};if(i)R[zu]=32775,R[Uu]=32776;else{const K=e.get("EXT_blend_minmax");K!==null&&(R[zu]=K.MIN_EXT,R[Uu]=K.MAX_EXT)}const B={[Zp]:0,[Jp]:1,[Qp]:768,[ud]:770,[rm]:776,[nm]:774,[em]:772,[$p]:769,[hd]:771,[im]:775,[tm]:773};function G(K,me,fe,Le,Se,De,xe,Re){if(K===Ni){m===!0&&(Z(3042),m=!1);return}if(m===!1&&(ne(3042),m=!0),K!==qp){if(K!==d||Re!==E){if((y!==Br||_!==Br)&&(s.blendEquation(32774),y=Br,_=Br),Re)switch(K){case Yr:s.blendFuncSeparate(1,771,1,771);break;case Iu:s.blendFunc(1,1);break;case Du:s.blendFuncSeparate(0,769,0,1);break;case Fu:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Yr:s.blendFuncSeparate(770,771,1,771);break;case Iu:s.blendFunc(770,1);break;case Du:s.blendFuncSeparate(0,769,0,1);break;case Fu:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}b=null,x=null,M=null,w=null,d=K,E=Re}return}Se=Se||me,De=De||fe,xe=xe||Le,(me!==y||Se!==_)&&(s.blendEquationSeparate(R[me],R[Se]),y=me,_=Se),(fe!==b||Le!==x||De!==M||xe!==w)&&(s.blendFuncSeparate(B[fe],B[Le],B[De],B[xe]),b=fe,x=Le,M=De,w=xe),d=K,E=null}function q(K,me){K.side===bi?Z(2884):ne(2884);let fe=K.side===yn;me&&(fe=!fe),Q(fe),K.blending===Yr&&K.transparent===!1?G(Ni):G(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.premultipliedAlpha),l.setFunc(K.depthFunc),l.setTest(K.depthTest),l.setMask(K.depthWrite),a.setMask(K.colorWrite);const Le=K.stencilWrite;c.setTest(Le),Le&&(c.setMask(K.stencilWriteMask),c.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),c.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ye(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ne(32926):Z(32926)}function Q(K){v!==K&&(K?s.frontFace(2304):s.frontFace(2305),v=K)}function se(K){K!==jp?(ne(2884),K!==S&&(K===Pu?s.cullFace(1029):K===Xp?s.cullFace(1028):s.cullFace(1032))):Z(2884),S=K}function le(K){K!==T&&(I&&s.lineWidth(K),T=K)}function ye(K,me,fe){K?(ne(32823),(A!==me||L!==fe)&&(s.polygonOffset(me,fe),A=me,L=fe)):Z(32823)}function oe(K){K?ne(3089):Z(3089)}function de(K){K===void 0&&(K=33984+F-1),H!==K&&(s.activeTexture(K),H=K)}function _e(K,me){H===null&&de();let fe=J[H];fe===void 0&&(fe={type:void 0,texture:void 0},J[H]=fe),(fe.type!==K||fe.texture!==me)&&(s.bindTexture(K,me||re[K]),fe.type=K,fe.texture=me)}function ue(){const K=J[H];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function P(){try{s.texSubImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function $(){try{s.texSubImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function k(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ve(){try{s.texStorage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function pe(){try{s.texImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function te(){try{s.texImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ce(K){V.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),V.copy(K))}function Pe(K){Y.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),Y.copy(K))}function Me(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},H=null,J={},h={},f=new WeakMap,p=[],g=null,m=!1,d=null,y=null,b=null,x=null,_=null,M=null,w=null,E=!1,v=null,S=null,T=null,A=null,L=null,V.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ne,disable:Z,bindFramebuffer:ae,drawBuffers:j,useProgram:C,setBlending:G,setMaterial:q,setFlipSided:Q,setCullFace:se,setLineWidth:le,setPolygonOffset:ye,setScissorTest:oe,activeTexture:de,bindTexture:_e,unbindTexture:ue,compressedTexImage2D:z,texImage2D:pe,texImage3D:te,texStorage2D:ve,texStorage3D:we,texSubImage2D:P,texSubImage3D:$,compressedTexSubImage2D:k,scissor:Ce,viewport:Pe,reset:Me}}function Uy(s,e,t,i,n,r,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,h=n.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,P){return y?new OffscreenCanvas(z,P):$s("canvas")}function x(z,P,$,k){let ve=1;if((z.width>k||z.height>k)&&(ve=k/Math.max(z.width,z.height)),ve<1||P===!0)if(typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&z instanceof ImageBitmap){const we=P?Ta:Math.floor,pe=we(ve*z.width),te=we(ve*z.height);m===void 0&&(m=b(pe,te));const Ce=$?b(pe,te):m;return Ce.width=pe,Ce.height=te,Ce.getContext("2d").drawImage(z,0,0,pe,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+pe+"x"+te+")."),Ce}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function _(z){return hc(z.width)&&hc(z.height)}function M(z){return a?!1:z.wrapS!==On||z.wrapT!==On||z.minFilter!==Dt&&z.minFilter!==Ft}function w(z,P){return z.generateMipmaps&&P&&z.minFilter!==Dt&&z.minFilter!==Ft}function E(z){s.generateMipmap(z)}function v(z,P,$,k,ve=!1){if(a===!1)return P;if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let we=P;return P===6403&&($===5126&&(we=33326),$===5131&&(we=33325),$===5121&&(we=33321)),P===33319&&($===5126&&(we=33328),$===5131&&(we=33327),$===5121&&(we=33323)),P===6408&&($===5126&&(we=34836),$===5131&&(we=34842),$===5121&&(we=k===ft&&ve===!1?35907:32856),$===32819&&(we=32854),$===32820&&(we=32855)),(we===33325||we===33326||we===33327||we===33328||we===34842||we===34836)&&e.get("EXT_color_buffer_float"),we}function S(z,P,$){return w(z,$)===!0||z.isFramebufferTexture&&z.minFilter!==Dt&&z.minFilter!==Ft?Math.log2(Math.max(P.width,P.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?P.mipmaps.length:1}function T(z){return z===Dt||z===Ou||z===ku?9728:9729}function A(z){const P=z.target;P.removeEventListener("dispose",A),F(P),P.isVideoTexture&&g.delete(P)}function L(z){const P=z.target;P.removeEventListener("dispose",L),W(P)}function F(z){const P=i.get(z);if(P.__webglInit===void 0)return;const $=z.source,k=d.get($);if(k){const ve=k[P.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&I(z),Object.keys(k).length===0&&d.delete($)}i.remove(z)}function I(z){const P=i.get(z);s.deleteTexture(P.__webglTexture);const $=z.source,k=d.get($);delete k[P.__cacheKey],o.memory.textures--}function W(z){const P=z.texture,$=i.get(z),k=i.get(P);if(k.__webglTexture!==void 0&&(s.deleteTexture(k.__webglTexture),o.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++)s.deleteFramebuffer($.__webglFramebuffer[ve]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[ve]);else s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer&&s.deleteRenderbuffer($.__webglColorRenderbuffer),$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer);if(z.isWebGLMultipleRenderTargets)for(let ve=0,we=P.length;ve<we;ve++){const pe=i.get(P[ve]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(P[ve])}i.remove(P),i.remove(z)}let U=0;function H(){U=0}function J(){const z=U;return z>=l&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l),U+=1,z}function D(z){const P=[];return P.push(z.wrapS),P.push(z.wrapT),P.push(z.magFilter),P.push(z.minFilter),P.push(z.anisotropy),P.push(z.internalFormat),P.push(z.format),P.push(z.type),P.push(z.generateMipmaps),P.push(z.premultiplyAlpha),P.push(z.flipY),P.push(z.unpackAlignment),P.push(z.encoding),P.join()}function X(z,P){const $=i.get(z);if(z.isVideoTexture&&_e(z),z.isRenderTargetTexture===!1&&z.version>0&&$.__version!==z.version){const k=z.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j($,z,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,$.__webglTexture)}function V(z,P){const $=i.get(z);if(z.version>0&&$.__version!==z.version){j($,z,P);return}t.activeTexture(33984+P),t.bindTexture(35866,$.__webglTexture)}function Y(z,P){const $=i.get(z);if(z.version>0&&$.__version!==z.version){j($,z,P);return}t.activeTexture(33984+P),t.bindTexture(32879,$.__webglTexture)}function ee(z,P){const $=i.get(z);if(z.version>0&&$.__version!==z.version){C($,z,P);return}t.activeTexture(33984+P),t.bindTexture(34067,$.__webglTexture)}const re={[nc]:10497,[On]:33071,[ic]:33648},ne={[Dt]:9728,[Ou]:9984,[ku]:9986,[Ft]:9729,[_m]:9985,[oo]:9987};function Z(z,P,$){if($?(s.texParameteri(z,10242,re[P.wrapS]),s.texParameteri(z,10243,re[P.wrapT]),(z===32879||z===35866)&&s.texParameteri(z,32882,re[P.wrapR]),s.texParameteri(z,10240,ne[P.magFilter]),s.texParameteri(z,10241,ne[P.minFilter])):(s.texParameteri(z,10242,33071),s.texParameteri(z,10243,33071),(z===32879||z===35866)&&s.texParameteri(z,32882,33071),(P.wrapS!==On||P.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(z,10240,T(P.magFilter)),s.texParameteri(z,10241,T(P.minFilter)),P.minFilter!==Dt&&P.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(P.type===rr&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===Zs&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||i.get(P).__currentAnisotropy)&&(s.texParameterf(z,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,n.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy)}}function ae(z,P){let $=!1;z.__webglInit===void 0&&(z.__webglInit=!0,P.addEventListener("dispose",A));const k=P.source;let ve=d.get(k);ve===void 0&&(ve={},d.set(k,ve));const we=D(P);if(we!==z.__cacheKey){ve[we]===void 0&&(ve[we]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ve[we].usedTimes++;const pe=ve[z.__cacheKey];pe!==void 0&&(ve[z.__cacheKey].usedTimes--,pe.usedTimes===0&&I(P)),z.__cacheKey=we,z.__webglTexture=ve[we].texture}return $}function j(z,P,$){let k=3553;P.isDataArrayTexture&&(k=35866),P.isData3DTexture&&(k=32879);const ve=ae(z,P),we=P.source;if(t.activeTexture(33984+$),t.bindTexture(k,z.__webglTexture),we.version!==we.__currentVersion||ve===!0){s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const pe=M(P)&&_(P.image)===!1;let te=x(P.image,pe,!1,u);te=ue(P,te);const Ce=_(te)||a,Pe=r.convert(P.format,P.encoding);let Me=r.convert(P.type),K=v(P.internalFormat,Pe,Me,P.encoding,P.isVideoTexture);Z(k,P,Ce);let me;const fe=P.mipmaps,Le=a&&P.isVideoTexture!==!0,Se=z.__version===void 0||ve===!0,De=S(P,te,Ce);if(P.isDepthTexture)K=6402,a?P.type===rr?K=36012:P.type===da?K=33190:P.type===Kr?K=35056:K=33189:P.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===ar&&K===6402&&P.type!==Ks&&P.type!==da&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Ks,Me=r.convert(P.type)),P.format===ts&&K===6402&&(K=34041,P.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Kr,Me=r.convert(P.type))),Se&&(Le?t.texStorage2D(3553,1,K,te.width,te.height):t.texImage2D(3553,0,K,te.width,te.height,0,Pe,Me,null));else if(P.isDataTexture)if(fe.length>0&&Ce){Le&&Se&&t.texStorage2D(3553,De,K,fe[0].width,fe[0].height);for(let xe=0,Re=fe.length;xe<Re;xe++)me=fe[xe],Le?t.texSubImage2D(3553,xe,0,0,me.width,me.height,Pe,Me,me.data):t.texImage2D(3553,xe,K,me.width,me.height,0,Pe,Me,me.data);P.generateMipmaps=!1}else Le?(Se&&t.texStorage2D(3553,De,K,te.width,te.height),t.texSubImage2D(3553,0,0,0,te.width,te.height,Pe,Me,te.data)):t.texImage2D(3553,0,K,te.width,te.height,0,Pe,Me,te.data);else if(P.isCompressedTexture){Le&&Se&&t.texStorage2D(3553,De,K,fe[0].width,fe[0].height);for(let xe=0,Re=fe.length;xe<Re;xe++)me=fe[xe],P.format!==Mn?Pe!==null?Le?t.compressedTexSubImage2D(3553,xe,0,0,me.width,me.height,Pe,me.data):t.compressedTexImage2D(3553,xe,K,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,xe,0,0,me.width,me.height,Pe,Me,me.data):t.texImage2D(3553,xe,K,me.width,me.height,0,Pe,Me,me.data)}else if(P.isDataArrayTexture)Le?(Se&&t.texStorage3D(35866,De,K,te.width,te.height,te.depth),t.texSubImage3D(35866,0,0,0,0,te.width,te.height,te.depth,Pe,Me,te.data)):t.texImage3D(35866,0,K,te.width,te.height,te.depth,0,Pe,Me,te.data);else if(P.isData3DTexture)Le?(Se&&t.texStorage3D(32879,De,K,te.width,te.height,te.depth),t.texSubImage3D(32879,0,0,0,0,te.width,te.height,te.depth,Pe,Me,te.data)):t.texImage3D(32879,0,K,te.width,te.height,te.depth,0,Pe,Me,te.data);else if(P.isFramebufferTexture){if(Se)if(Le)t.texStorage2D(3553,De,K,te.width,te.height);else{let xe=te.width,Re=te.height;for(let je=0;je<De;je++)t.texImage2D(3553,je,K,xe,Re,0,Pe,Me,null),xe>>=1,Re>>=1}}else if(fe.length>0&&Ce){Le&&Se&&t.texStorage2D(3553,De,K,fe[0].width,fe[0].height);for(let xe=0,Re=fe.length;xe<Re;xe++)me=fe[xe],Le?t.texSubImage2D(3553,xe,0,0,Pe,Me,me):t.texImage2D(3553,xe,K,Pe,Me,me);P.generateMipmaps=!1}else Le?(Se&&t.texStorage2D(3553,De,K,te.width,te.height),t.texSubImage2D(3553,0,0,0,Pe,Me,te)):t.texImage2D(3553,0,K,Pe,Me,te);w(P,Ce)&&E(k),we.__currentVersion=we.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function C(z,P,$){if(P.image.length!==6)return;const k=ae(z,P),ve=P.source;if(t.activeTexture(33984+$),t.bindTexture(34067,z.__webglTexture),ve.version!==ve.__currentVersion||k===!0){s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const we=P.isCompressedTexture||P.image[0].isCompressedTexture,pe=P.image[0]&&P.image[0].isDataTexture,te=[];for(let xe=0;xe<6;xe++)!we&&!pe?te[xe]=x(P.image[xe],!1,!0,c):te[xe]=pe?P.image[xe].image:P.image[xe],te[xe]=ue(P,te[xe]);const Ce=te[0],Pe=_(Ce)||a,Me=r.convert(P.format,P.encoding),K=r.convert(P.type),me=v(P.internalFormat,Me,K,P.encoding),fe=a&&P.isVideoTexture!==!0,Le=z.__version===void 0;let Se=S(P,Ce,Pe);Z(34067,P,Pe);let De;if(we){fe&&Le&&t.texStorage2D(34067,Se,me,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){De=te[xe].mipmaps;for(let Re=0;Re<De.length;Re++){const je=De[Re];P.format!==Mn?Me!==null?fe?t.compressedTexSubImage2D(34069+xe,Re,0,0,je.width,je.height,Me,je.data):t.compressedTexImage2D(34069+xe,Re,me,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?t.texSubImage2D(34069+xe,Re,0,0,je.width,je.height,Me,K,je.data):t.texImage2D(34069+xe,Re,me,je.width,je.height,0,Me,K,je.data)}}}else{De=P.mipmaps,fe&&Le&&(De.length>0&&Se++,t.texStorage2D(34067,Se,me,te[0].width,te[0].height));for(let xe=0;xe<6;xe++)if(pe){fe?t.texSubImage2D(34069+xe,0,0,0,te[xe].width,te[xe].height,Me,K,te[xe].data):t.texImage2D(34069+xe,0,me,te[xe].width,te[xe].height,0,Me,K,te[xe].data);for(let Re=0;Re<De.length;Re++){const He=De[Re].image[xe].image;fe?t.texSubImage2D(34069+xe,Re+1,0,0,He.width,He.height,Me,K,He.data):t.texImage2D(34069+xe,Re+1,me,He.width,He.height,0,Me,K,He.data)}}else{fe?t.texSubImage2D(34069+xe,0,0,0,Me,K,te[xe]):t.texImage2D(34069+xe,0,me,Me,K,te[xe]);for(let Re=0;Re<De.length;Re++){const je=De[Re];fe?t.texSubImage2D(34069+xe,Re+1,0,0,Me,K,je.image[xe]):t.texImage2D(34069+xe,Re+1,me,Me,K,je.image[xe])}}}w(P,Pe)&&E(34067),ve.__currentVersion=ve.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function R(z,P,$,k,ve){const we=r.convert($.format,$.encoding),pe=r.convert($.type),te=v($.internalFormat,we,pe,$.encoding);i.get(P).__hasExternalTextures||(ve===32879||ve===35866?t.texImage3D(ve,0,te,P.width,P.height,P.depth,0,we,pe,null):t.texImage2D(ve,0,te,P.width,P.height,0,we,pe,null)),t.bindFramebuffer(36160,z),de(P)?f.framebufferTexture2DMultisampleEXT(36160,k,ve,i.get($).__webglTexture,0,oe(P)):s.framebufferTexture2D(36160,k,ve,i.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function B(z,P,$){if(s.bindRenderbuffer(36161,z),P.depthBuffer&&!P.stencilBuffer){let k=33189;if($||de(P)){const ve=P.depthTexture;ve&&ve.isDepthTexture&&(ve.type===rr?k=36012:ve.type===da&&(k=33190));const we=oe(P);de(P)?f.renderbufferStorageMultisampleEXT(36161,we,k,P.width,P.height):s.renderbufferStorageMultisample(36161,we,k,P.width,P.height)}else s.renderbufferStorage(36161,k,P.width,P.height);s.framebufferRenderbuffer(36160,36096,36161,z)}else if(P.depthBuffer&&P.stencilBuffer){const k=oe(P);$&&de(P)===!1?s.renderbufferStorageMultisample(36161,k,35056,P.width,P.height):de(P)?f.renderbufferStorageMultisampleEXT(36161,k,35056,P.width,P.height):s.renderbufferStorage(36161,34041,P.width,P.height),s.framebufferRenderbuffer(36160,33306,36161,z)}else{const k=P.isWebGLMultipleRenderTargets===!0?P.texture[0]:P.texture,ve=r.convert(k.format,k.encoding),we=r.convert(k.type),pe=v(k.internalFormat,ve,we,k.encoding),te=oe(P);$&&de(P)===!1?s.renderbufferStorageMultisample(36161,te,pe,P.width,P.height):de(P)?f.renderbufferStorageMultisampleEXT(36161,te,pe,P.width,P.height):s.renderbufferStorage(36161,pe,P.width,P.height)}s.bindRenderbuffer(36161,null)}function G(z,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,z),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),X(P.depthTexture,0);const k=i.get(P.depthTexture).__webglTexture,ve=oe(P);if(P.depthTexture.format===ar)de(P)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,k,0,ve):s.framebufferTexture2D(36160,36096,3553,k,0);else if(P.depthTexture.format===ts)de(P)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,k,0,ve):s.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function q(z){const P=i.get(z),$=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!P.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");G(P.__webglFramebuffer,z)}else if($){P.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(36160,P.__webglFramebuffer[k]),P.__webglDepthbuffer[k]=s.createRenderbuffer(),B(P.__webglDepthbuffer[k],z,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=s.createRenderbuffer(),B(P.__webglDepthbuffer,z,!1);t.bindFramebuffer(36160,null)}function Q(z,P,$){const k=i.get(z);P!==void 0&&R(k.__webglFramebuffer,z,z.texture,36064,3553),$!==void 0&&q(z)}function se(z){const P=z.texture,$=i.get(z),k=i.get(P);z.addEventListener("dispose",L),z.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=P.version,o.memory.textures++);const ve=z.isWebGLCubeRenderTarget===!0,we=z.isWebGLMultipleRenderTargets===!0,pe=_(z)||a;if(ve){$.__webglFramebuffer=[];for(let te=0;te<6;te++)$.__webglFramebuffer[te]=s.createFramebuffer()}else if($.__webglFramebuffer=s.createFramebuffer(),we)if(n.drawBuffers){const te=z.texture;for(let Ce=0,Pe=te.length;Ce<Pe;Ce++){const Me=i.get(te[Ce]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&z.samples>0&&de(z)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,$.__webglColorRenderbuffer);const te=r.convert(P.format,P.encoding),Ce=r.convert(P.type),Pe=v(P.internalFormat,te,Ce,P.encoding),Me=oe(z);s.renderbufferStorageMultisample(36161,Me,Pe,z.width,z.height),t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,$.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),z.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),B($.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(36160,null)}if(ve){t.bindTexture(34067,k.__webglTexture),Z(34067,P,pe);for(let te=0;te<6;te++)R($.__webglFramebuffer[te],z,P,36064,34069+te);w(P,pe)&&E(34067),t.unbindTexture()}else if(we){const te=z.texture;for(let Ce=0,Pe=te.length;Ce<Pe;Ce++){const Me=te[Ce],K=i.get(Me);t.bindTexture(3553,K.__webglTexture),Z(3553,Me,pe),R($.__webglFramebuffer,z,Me,36064+Ce,3553),w(Me,pe)&&E(3553)}t.unbindTexture()}else{let te=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(a?te=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,k.__webglTexture),Z(te,P,pe),R($.__webglFramebuffer,z,P,36064,te),w(P,pe)&&E(te),t.unbindTexture()}z.depthBuffer&&q(z)}function le(z){const P=_(z)||a,$=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let k=0,ve=$.length;k<ve;k++){const we=$[k];if(w(we,P)){const pe=z.isWebGLCubeRenderTarget?34067:3553,te=i.get(we).__webglTexture;t.bindTexture(pe,te),E(pe),t.unbindTexture()}}}function ye(z){if(a&&z.samples>0&&de(z)===!1){const P=z.width,$=z.height;let k=16384;const ve=[36064],we=z.stencilBuffer?33306:36096;z.depthBuffer&&ve.push(we);const pe=i.get(z),te=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;te===!1&&(z.depthBuffer&&(k|=256),z.stencilBuffer&&(k|=1024)),t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer),te===!0&&(s.invalidateFramebuffer(36008,[we]),s.invalidateFramebuffer(36009,[we])),s.blitFramebuffer(0,0,P,$,0,0,P,$,k,9728),p&&s.invalidateFramebuffer(36008,ve),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}}function oe(z){return Math.min(h,z.samples)}function de(z){const P=i.get(z);return a&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function _e(z){const P=o.render.frame;g.get(z)!==P&&(g.set(z,P),z.update())}function ue(z,P){const $=z.encoding,k=z.format,ve=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===uc||$!==Jn&&($===ft?a===!1?e.has("EXT_sRGB")===!0&&k===Mn?(z.format=uc,z.minFilter=Ft,z.generateMipmaps=!1):P=fr.sRGBToLinear(P):(k!==Mn||ve!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),P}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=Q,this.setupRenderTarget=se,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=R,this.useMultisampledRTT=de}function Oy(s,e,t){const i=t.isWebGL2;function n(r,o=null){let a;if(r===Wi)return 5121;if(r===wm)return 32819;if(r===Sm)return 32820;if(r===ym)return 5120;if(r===xm)return 5122;if(r===Ks)return 5123;if(r===bm)return 5124;if(r===da)return 5125;if(r===rr)return 5126;if(r===Zs)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Mm)return 6406;if(r===Mn)return 6408;if(r===Em)return 6409;if(r===Am)return 6410;if(r===ar)return 6402;if(r===ts)return 34041;if(r===Cm)return 6403;if(r===Tm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===uc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Lm)return 36244;if(r===Rm)return 33319;if(r===Pm)return 33320;if(r===Im)return 36249;if(r===pa||r===sl||r===ol||r===ma)if(o===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ol)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rc||r===Bu||r===sc||r===Nu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===rc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===oc||r===ac)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===oc)return o===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ac)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lc||r===Gu||r===Hu||r===Vu||r===Wu||r===ju||r===Xu||r===qu||r===Yu||r===Ku||r===Zu||r===Ju||r===Qu||r===$u)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===lc)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ju)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ku)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ju)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qu)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$u)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===cc)return o===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Kr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class Rd extends en{constructor(e=[]){super(),this.cameras=e}}Rd.prototype.isArrayCamera=!0;class Wr extends Ze{constructor(){super(),this.type="Group"}}Wr.prototype.isGroup=!0;const ky={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(n=t.getPose(e.targetRaySpace,i),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ky))),c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const b=new Wr;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[m.jointName]=b,c.add(b)}const y=c.joints[m.jointName];d!==null&&(y.matrix.fromArray(d.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=d.radius),y.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class Pd extends Tt{constructor(e,t,i,n,r,o,a,l,c,u){if(u=u!==void 0?u:ar,u!==ar&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ar&&(i=Ks),i===void 0&&u===ts&&(i=Kr),super(null,n,r,o,a,l,u,i,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1}}Pd.prototype.isDepthTexture=!0;class By extends hr{constructor(e,t){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const y=[],b=new Map,x=new en;x.layers.enable(1),x.viewport=new Ge;const _=new en;_.layers.enable(2),_.viewport=new Ge;const M=[x,_],w=new Rd;w.layers.enable(1),w.layers.enable(2);let E=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let X=y[D];return X===void 0&&(X=new Fl,y[D]=X),X.getTargetRaySpace()},this.getControllerGrip=function(D){let X=y[D];return X===void 0&&(X=new Fl,y[D]=X),X.getGripSpace()},this.getHand=function(D){let X=y[D];return X===void 0&&(X=new Fl,y[D]=X),X.getHandSpace()};function S(D){const X=b.get(D.inputSource);X&&X.dispatchEvent({type:D.type,data:D.inputSource})}function T(){b.forEach(function(D,X){D.disconnect(X)}),b.clear(),E=null,v=null,e.setRenderTarget(m),f=null,h=null,u=null,n=null,d=null,J.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(D){if(n=D,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",S),n.addEventListener("selectstart",S),n.addEventListener("selectend",S),n.addEventListener("squeeze",S),n.addEventListener("squeezestart",S),n.addEventListener("squeezeend",S),n.addEventListener("end",T),n.addEventListener("inputsourceschange",A),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,X),n.updateRenderState({baseLayer:f}),d=new dn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Wi,encoding:e.outputEncoding})}else{let X=null,V=null,Y=null;g.depth&&(Y=g.stencil?35056:33190,X=g.stencil?ts:ar,V=g.stencil?Kr:Ks);const ee={colorFormat:e.outputEncoding===ft?35907:32856,depthFormat:Y,scaleFactor:r};u=new XRWebGLBinding(n,t),h=u.createProjectionLayer(ee),n.updateRenderState({layers:[h]}),d=new dn(h.textureWidth,h.textureHeight,{format:Mn,type:Wi,depthTexture:new Pd(h.textureWidth,h.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const re=e.properties.get(d);re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),o=await n.requestReferenceSpace(a),J.setContext(n),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function A(D){const X=n.inputSources;for(let V=0;V<X.length;V++){const Y=X[V].handedness==="right"?1:0;b.set(X[V],y[Y])}for(let V=0;V<D.removed.length;V++){const Y=D.removed[V],ee=b.get(Y);ee&&(ee.dispatchEvent({type:"disconnected",data:Y}),b.delete(Y))}for(let V=0;V<D.added.length;V++){const Y=D.added[V],ee=b.get(Y);ee&&ee.dispatchEvent({type:"connected",data:Y})}}const L=new O,F=new O;function I(D,X,V){L.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(V.matrixWorld);const Y=L.distanceTo(F),ee=X.projectionMatrix.elements,re=V.projectionMatrix.elements,ne=ee[14]/(ee[10]-1),Z=ee[14]/(ee[10]+1),ae=(ee[9]+1)/ee[5],j=(ee[9]-1)/ee[5],C=(ee[8]-1)/ee[0],R=(re[8]+1)/re[0],B=ne*C,G=ne*R,q=Y/(-C+R),Q=q*-C;X.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Q),D.translateZ(q),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const se=ne+q,le=Z+q,ye=B-Q,oe=G+(Y-Q),de=ae*Z/le*se,_e=j*Z/le*se;D.projectionMatrix.makePerspective(ye,oe,de,_e,se,le)}function W(D,X){X===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(X.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(n===null)return;w.near=_.near=x.near=D.near,w.far=_.far=x.far=D.far,(E!==w.near||v!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),E=w.near,v=w.far);const X=D.parent,V=w.cameras;W(w,X);for(let ee=0;ee<V.length;ee++)W(V[ee],X);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),D.position.copy(w.position),D.quaternion.copy(w.quaternion),D.scale.copy(w.scale),D.matrix.copy(w.matrix),D.matrixWorld.copy(w.matrixWorld);const Y=D.children;for(let ee=0,re=Y.length;ee<re;ee++)Y[ee].updateMatrixWorld(!0);V.length===2?I(w,x,_):w.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(D){h!==null&&(h.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)};let U=null;function H(D,X){if(c=X.getViewerPose(l||o),p=X,c!==null){const Y=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let ee=!1;Y.length!==w.cameras.length&&(w.cameras.length=0,ee=!0);for(let re=0;re<Y.length;re++){const ne=Y[re];let Z=null;if(f!==null)Z=f.getViewport(ne);else{const j=u.getViewSubImage(h,ne);Z=j.viewport,re===0&&(e.setRenderTargetTextures(d,j.colorTexture,h.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(d))}const ae=M[re];ae.matrix.fromArray(ne.transform.matrix),ae.projectionMatrix.fromArray(ne.projectionMatrix),ae.viewport.set(Z.x,Z.y,Z.width,Z.height),re===0&&w.matrix.copy(ae.matrix),ee===!0&&w.cameras.push(ae)}}const V=n.inputSources;for(let Y=0;Y<y.length;Y++){const ee=V[Y],re=b.get(ee);re!==void 0&&re.update(ee,X,l||o)}U&&U(D,X),p=null}const J=new wd;J.setAnimationLoop(H),this.setAnimationLoop=function(D){U=D},this.dispose=function(){}}}function Ny(s,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,b,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?n(m,d):d.isMeshToonMaterial?(n(m,d),u(m,d)):d.isMeshPhongMaterial?(n(m,d),c(m,d)):d.isMeshStandardMaterial?(n(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(n(m,d),p(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),g(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,y,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===yn&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===yn&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let b;d.map?b=d.map:d.specularMap?b=d.specularMap:d.displacementMap?b=d.displacementMap:d.normalMap?b=d.normalMap:d.bumpMap?b=d.bumpMap:d.roughnessMap?b=d.roughnessMap:d.metalnessMap?b=d.metalnessMap:d.alphaMap?b=d.alphaMap:d.emissiveMap?b=d.emissiveMap:d.clearcoatMap?b=d.clearcoatMap:d.clearcoatNormalMap?b=d.clearcoatNormalMap:d.clearcoatRoughnessMap?b=d.clearcoatRoughnessMap:d.specularIntensityMap?b=d.specularIntensityMap:d.specularColorMap?b=d.specularColorMap:d.transmissionMap?b=d.transmissionMap:d.thicknessMap?b=d.thicknessMap:d.sheenColorMap?b=d.sheenColorMap:d.sheenRoughnessMap&&(b=d.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let x;d.aoMap?x=d.aoMap:d.lightMap&&(x=d.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,y,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=b*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===yn&&m.clearcoatNormalScale.value.negate())),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Gy(){const s=$s("canvas");return s.style.display="block",s}function st(s={}){const e=s.canvas!==void 0?s.canvas:Gy(),t=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,n=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Jn,this.physicallyCorrectLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const m=this;let d=!1,y=0,b=0,x=null,_=-1,M=null;const w=new Ge,E=new Ge;let v=null,S=e.width,T=e.height,A=1,L=null,F=null;const I=new Ge(0,0,S,T),W=new Ge(0,0,S,T);let U=!1;const H=new lo;let J=!1,D=!1,X=null;const V=new Fe,Y=new be,ee=new O,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return x===null?A:1}let Z=t;function ae(N,ie){for(let he=0;he<N.length;he++){const ce=N[he],ge=e.getContext(ce,ie);if(ge!==null)return ge}return null}try{const N={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",me,!1),Z===null){const ie=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&ie.shift(),Z=ae(ie,N),Z===null)throw ae(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let j,C,R,B,G,q,Q,se,le,ye,oe,de,_e,ue,z,P,$,k,ve,we,pe,te,Ce;function Pe(){j=new r_(Z),C=new Qv(Z,j,s),j.init(C),te=new Oy(Z,j,C),R=new zy(Z,j,C),B=new a_,G=new My,q=new Uy(Z,j,R,G,C,te,B),Q=new e_(m),se=new i_(m),le=new bg(Z,C),Ce=new Zv(Z,j,le,C),ye=new s_(Z,le,B,Ce),oe=new h_(Z,ye,le,B),ve=new u_(Z,C,q),P=new $v(G),de=new Sy(m,Q,se,j,C,Ce,P),_e=new Ny(m,G),ue=new Ey,z=new Iy(j,C),k=new Kv(m,Q,R,oe,u,o),$=new Ld(m,oe,C),we=new Jv(Z,j,B,C),pe=new o_(Z,j,B,C),B.programs=de.programs,m.capabilities=C,m.extensions=j,m.properties=G,m.renderLists=ue,m.shadowMap=$,m.state=R,m.info=B}Pe();const Me=new By(m,Z);this.xr=Me,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const N=j.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=j.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(N){N!==void 0&&(A=N,this.setSize(S,T,!1))},this.getSize=function(N){return N.set(S,T)},this.setSize=function(N,ie,he){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=N,T=ie,e.width=Math.floor(N*A),e.height=Math.floor(ie*A),he!==!1&&(e.style.width=N+"px",e.style.height=ie+"px"),this.setViewport(0,0,N,ie)},this.getDrawingBufferSize=function(N){return N.set(S*A,T*A).floor()},this.setDrawingBufferSize=function(N,ie,he){S=N,T=ie,A=he,e.width=Math.floor(N*he),e.height=Math.floor(ie*he),this.setViewport(0,0,N,ie)},this.getCurrentViewport=function(N){return N.copy(w)},this.getViewport=function(N){return N.copy(I)},this.setViewport=function(N,ie,he,ce){N.isVector4?I.set(N.x,N.y,N.z,N.w):I.set(N,ie,he,ce),R.viewport(w.copy(I).multiplyScalar(A).floor())},this.getScissor=function(N){return N.copy(W)},this.setScissor=function(N,ie,he,ce){N.isVector4?W.set(N.x,N.y,N.z,N.w):W.set(N,ie,he,ce),R.scissor(E.copy(W).multiplyScalar(A).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(N){R.setScissorTest(U=N)},this.setOpaqueSort=function(N){L=N},this.setTransparentSort=function(N){F=N},this.getClearColor=function(N){return N.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(N=!0,ie=!0,he=!0){let ce=0;N&&(ce|=16384),ie&&(ce|=256),he&&(ce|=1024),Z.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",me,!1),ue.dispose(),z.dispose(),G.dispose(),Q.dispose(),se.dispose(),oe.dispose(),Ce.dispose(),de.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Re),Me.removeEventListener("sessionend",je),X&&(X.dispose(),X=null),He.stop()};function K(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const N=B.autoReset,ie=$.enabled,he=$.autoUpdate,ce=$.needsUpdate,ge=$.type;Pe(),B.autoReset=N,$.enabled=ie,$.autoUpdate=he,$.needsUpdate=ce,$.type=ge}function fe(N){const ie=N.target;ie.removeEventListener("dispose",fe),Le(ie)}function Le(N){Se(N),G.remove(N)}function Se(N){const ie=G.get(N).programs;ie!==void 0&&(ie.forEach(function(he){de.releaseProgram(he)}),N.isShaderMaterial&&de.releaseShaderCache(N))}this.renderBufferDirect=function(N,ie,he,ce,ge,ze){ie===null&&(ie=re);const ke=ge.isMesh&&ge.matrixWorld.determinant()<0,Ne=Ot(N,ie,he,ce,ge);R.setMaterial(ce,ke);let Be=he.index;const it=he.attributes.position;if(Be===null){if(it===void 0||it.count===0)return}else if(Be.count===0)return;let Ye=1;ce.wireframe===!0&&(Be=ye.getWireframeAttribute(he),Ye=2),Ce.setup(ge,ce,Ne,he,Be);let qe,ut=we;Be!==null&&(qe=le.get(Be),ut=pe,ut.setIndex(qe));const si=Be!==null?Be.count:it.count,oi=he.drawRange.start*Ye,An=he.drawRange.count*Ye,ln=ze!==null?ze.start*Ye:0,Je=ze!==null?ze.count*Ye:1/0,Ie=Math.max(oi,ln),ht=Math.min(si,oi+An,ln+Je)-1,wn=Math.max(0,ht-Ie+1);if(wn!==0){if(ge.isMesh)ce.wireframe===!0?(R.setLineWidth(ce.wireframeLinewidth*ne()),ut.setMode(1)):ut.setMode(4);else if(ge.isLine){let mn=ce.linewidth;mn===void 0&&(mn=1),R.setLineWidth(mn*ne()),ge.isLineSegments?ut.setMode(1):ge.isLineLoop?ut.setMode(2):ut.setMode(3)}else ge.isPoints?ut.setMode(0):ge.isSprite&&ut.setMode(4);if(ge.isInstancedMesh)ut.renderInstances(Ie,wn,ge.count);else if(he.isInstancedBufferGeometry){const mn=Math.min(he.instanceCount,he._maxInstanceCount);ut.renderInstances(Ie,wn,mn)}else ut.render(Ie,wn)}},this.compile=function(N,ie){f=z.get(N),f.init(),g.push(f),N.traverseVisible(function(he){he.isLight&&he.layers.test(ie.layers)&&(f.pushLight(he),he.castShadow&&f.pushShadow(he))}),f.setupLights(m.physicallyCorrectLights),N.traverse(function(he){const ce=he.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const ze=ce[ge];Ut(ze,N,he)}else Ut(ce,N,he)}),g.pop(),f=null};let De=null;function xe(N){De&&De(N)}function Re(){He.stop()}function je(){He.start()}const He=new wd;He.setAnimationLoop(xe),typeof self!="undefined"&&He.setContext(self),this.setAnimationLoop=function(N){De=N,Me.setAnimationLoop(N),N===null?He.stop():He.start()},Me.addEventListener("sessionstart",Re),Me.addEventListener("sessionend",je),this.render=function(N,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;N.autoUpdate===!0&&N.updateMatrixWorld(),ie.parent===null&&ie.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(ie),ie=Me.getCamera()),N.isScene===!0&&N.onBeforeRender(m,N,ie,x),f=z.get(N,g.length),f.init(),g.push(f),V.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),H.setFromProjectionMatrix(V),D=this.localClippingEnabled,J=P.init(this.clippingPlanes,D,ie),h=ue.get(N,p.length),h.init(),p.push(h),ot(N,ie,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(L,F),J===!0&&P.beginShadows();const he=f.state.shadowsArray;if($.render(he,N,ie),J===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(h,N),f.setupLights(m.physicallyCorrectLights),ie.isArrayCamera){const ce=ie.cameras;for(let ge=0,ze=ce.length;ge<ze;ge++){const ke=ce[ge];Xt(h,N,ke,ke.viewport)}}else Xt(h,N,ie);x!==null&&(q.updateMultisampleRenderTarget(x),q.updateRenderTargetMipmap(x)),N.isScene===!0&&N.onAfterRender(m,N,ie),Ce.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function ot(N,ie,he,ce){if(N.visible===!1)return;if(N.layers.test(ie.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ie);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||H.intersectsSprite(N)){ce&&ee.setFromMatrixPosition(N.matrixWorld).applyMatrix4(V);const ke=oe.update(N),Ne=N.material;Ne.visible&&h.push(N,ke,Ne,he,ee.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(N.isSkinnedMesh&&N.skeleton.frame!==B.render.frame&&(N.skeleton.update(),N.skeleton.frame=B.render.frame),!N.frustumCulled||H.intersectsObject(N))){ce&&ee.setFromMatrixPosition(N.matrixWorld).applyMatrix4(V);const ke=oe.update(N),Ne=N.material;if(Array.isArray(Ne)){const Be=ke.groups;for(let it=0,Ye=Be.length;it<Ye;it++){const qe=Be[it],ut=Ne[qe.materialIndex];ut&&ut.visible&&h.push(N,ke,ut,he,ee.z,qe)}}else Ne.visible&&h.push(N,ke,Ne,he,ee.z,null)}}const ze=N.children;for(let ke=0,Ne=ze.length;ke<Ne;ke++)ot(ze[ke],ie,he,ce)}function Xt(N,ie,he,ce){const ge=N.opaque,ze=N.transmissive,ke=N.transparent;f.setupLightsView(he),ze.length>0&&lt(ge,ie,he),ce&&R.viewport(w.copy(ce)),ge.length>0&&Ke(ge,ie,he),ze.length>0&&Ke(ze,ie,he),ke.length>0&&Ke(ke,ie,he),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function lt(N,ie,he){const ce=C.isWebGL2;X===null&&(X=new dn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?Zs:Wi,minFilter:oo,samples:ce&&r===!0?4:0})),m.getDrawingBufferSize(Y),ce?X.setSize(Y.x,Y.y):X.setSize(Ta(Y.x),Ta(Y.y));const ge=m.getRenderTarget();m.setRenderTarget(X),m.clear();const ze=m.toneMapping;m.toneMapping=Kn,Ke(N,ie,he),m.toneMapping=ze,q.updateMultisampleRenderTarget(X),q.updateRenderTargetMipmap(X),m.setRenderTarget(ge)}function Ke(N,ie,he){const ce=ie.isScene===!0?ie.overrideMaterial:null;for(let ge=0,ze=N.length;ge<ze;ge++){const ke=N[ge],Ne=ke.object,Be=ke.geometry,it=ce===null?ke.material:ce,Ye=ke.group;Ne.layers.test(he.layers)&&At(Ne,ie,he,Be,it,Ye)}}function At(N,ie,he,ce,ge,ze){N.onBeforeRender(m,ie,he,ce,ge,ze),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ge.onBeforeRender(m,ie,he,ce,N,ze),ge.transparent===!0&&ge.side===bi?(ge.side=yn,ge.needsUpdate=!0,m.renderBufferDirect(he,ie,ce,ge,N,ze),ge.side=Qr,ge.needsUpdate=!0,m.renderBufferDirect(he,ie,ce,ge,N,ze),ge.side=bi):m.renderBufferDirect(he,ie,ce,ge,N,ze),N.onAfterRender(m,ie,he,ce,ge,ze)}function Ut(N,ie,he){ie.isScene!==!0&&(ie=re);const ce=G.get(N),ge=f.state.lights,ze=f.state.shadowsArray,ke=ge.state.version,Ne=de.getParameters(N,ge.state,ze,ie,he),Be=de.getProgramCacheKey(Ne);let it=ce.programs;ce.environment=N.isMeshStandardMaterial?ie.environment:null,ce.fog=ie.fog,ce.envMap=(N.isMeshStandardMaterial?se:Q).get(N.envMap||ce.environment),it===void 0&&(N.addEventListener("dispose",fe),it=new Map,ce.programs=it);let Ye=it.get(Be);if(Ye!==void 0){if(ce.currentProgram===Ye&&ce.lightsStateVersion===ke)return at(N,Ne),Ye}else Ne.uniforms=de.getUniforms(N),N.onBuild(he,Ne,m),N.onBeforeCompile(Ne,m),Ye=de.acquireProgram(Ne,Be),it.set(Be,Ye),ce.uniforms=Ne.uniforms;const qe=ce.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(qe.clippingPlanes=P.uniform),at(N,Ne),ce.needsLights=Ct(N),ce.lightsStateVersion=ke,ce.needsLights&&(qe.ambientLightColor.value=ge.state.ambient,qe.lightProbe.value=ge.state.probe,qe.directionalLights.value=ge.state.directional,qe.directionalLightShadows.value=ge.state.directionalShadow,qe.spotLights.value=ge.state.spot,qe.spotLightShadows.value=ge.state.spotShadow,qe.rectAreaLights.value=ge.state.rectArea,qe.ltc_1.value=ge.state.rectAreaLTC1,qe.ltc_2.value=ge.state.rectAreaLTC2,qe.pointLights.value=ge.state.point,qe.pointLightShadows.value=ge.state.pointShadow,qe.hemisphereLights.value=ge.state.hemi,qe.directionalShadowMap.value=ge.state.directionalShadowMap,qe.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,qe.spotShadowMap.value=ge.state.spotShadowMap,qe.spotShadowMatrix.value=ge.state.spotShadowMatrix,qe.pointShadowMap.value=ge.state.pointShadowMap,qe.pointShadowMatrix.value=ge.state.pointShadowMatrix);const ut=Ye.getUniforms(),si=Gi.seqWithValue(ut.seq,qe);return ce.currentProgram=Ye,ce.uniformsList=si,Ye}function at(N,ie){const he=G.get(N);he.outputEncoding=ie.outputEncoding,he.instancing=ie.instancing,he.skinning=ie.skinning,he.morphTargets=ie.morphTargets,he.morphNormals=ie.morphNormals,he.morphColors=ie.morphColors,he.morphTargetsCount=ie.morphTargetsCount,he.numClippingPlanes=ie.numClippingPlanes,he.numIntersection=ie.numClipIntersection,he.vertexAlphas=ie.vertexAlphas,he.vertexTangents=ie.vertexTangents,he.toneMapping=ie.toneMapping}function Ot(N,ie,he,ce,ge){ie.isScene!==!0&&(ie=re),q.resetTextureUnits();const ze=ie.fog,ke=ce.isMeshStandardMaterial?ie.environment:null,Ne=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Jn,Be=(ce.isMeshStandardMaterial?se:Q).get(ce.envMap||ke),it=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Ye=!!ce.normalMap&&!!he.attributes.tangent,qe=!!he.morphAttributes.position,ut=!!he.morphAttributes.normal,si=!!he.morphAttributes.color,oi=ce.toneMapped?m.toneMapping:Kn,An=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ln=An!==void 0?An.length:0,Je=G.get(ce),Ie=f.state.lights;if(J===!0&&(D===!0||N!==M)){const tn=N===M&&ce.id===_;P.setState(ce,N,tn)}let ht=!1;ce.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ie.state.version||Je.outputEncoding!==Ne||ge.isInstancedMesh&&Je.instancing===!1||!ge.isInstancedMesh&&Je.instancing===!0||ge.isSkinnedMesh&&Je.skinning===!1||!ge.isSkinnedMesh&&Je.skinning===!0||Je.envMap!==Be||ce.fog===!0&&Je.fog!==ze||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==P.numPlanes||Je.numIntersection!==P.numIntersection)||Je.vertexAlphas!==it||Je.vertexTangents!==Ye||Je.morphTargets!==qe||Je.morphNormals!==ut||Je.morphColors!==si||Je.toneMapping!==oi||C.isWebGL2===!0&&Je.morphTargetsCount!==ln)&&(ht=!0):(ht=!0,Je.__version=ce.version);let wn=Je.currentProgram;ht===!0&&(wn=Ut(ce,ie,ge));let mn=!1,Ai=!1,Yi=!1;const yt=wn.getUniforms(),Gn=Je.uniforms;if(R.useProgram(wn.program)&&(mn=!0,Ai=!0,Yi=!0),ce.id!==_&&(_=ce.id,Ai=!0),mn||M!==N){if(yt.setValue(Z,"projectionMatrix",N.projectionMatrix),C.logarithmicDepthBuffer&&yt.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),M!==N&&(M=N,Ai=!0,Yi=!0),ce.isShaderMaterial||ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshStandardMaterial||ce.envMap){const tn=yt.map.cameraPosition;tn!==void 0&&tn.setValue(Z,ee.setFromMatrixPosition(N.matrixWorld))}(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&yt.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial||ce.isShadowMaterial||ge.isSkinnedMesh)&&yt.setValue(Z,"viewMatrix",N.matrixWorldInverse)}if(ge.isSkinnedMesh){yt.setOptional(Z,ge,"bindMatrix"),yt.setOptional(Z,ge,"bindMatrixInverse");const tn=ge.skeleton;tn&&(C.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),yt.setValue(Z,"boneTexture",tn.boneTexture,q),yt.setValue(Z,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mr=he.morphAttributes;return(mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0&&C.isWebGL2===!0)&&ve.update(ge,he,ce,wn),(Ai||Je.receiveShadow!==ge.receiveShadow)&&(Je.receiveShadow=ge.receiveShadow,yt.setValue(Z,"receiveShadow",ge.receiveShadow)),Ai&&(yt.setValue(Z,"toneMappingExposure",m.toneMappingExposure),Je.needsLights&&bn(Gn,Yi),ze&&ce.fog===!0&&_e.refreshFogUniforms(Gn,ze),_e.refreshMaterialUniforms(Gn,ce,A,T,X),Gi.upload(Z,Je.uniformsList,Gn,q)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Gi.upload(Z,Je.uniformsList,Gn,q),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&yt.setValue(Z,"center",ge.center),yt.setValue(Z,"modelViewMatrix",ge.modelViewMatrix),yt.setValue(Z,"normalMatrix",ge.normalMatrix),yt.setValue(Z,"modelMatrix",ge.matrixWorld),wn}function bn(N,ie){N.ambientLightColor.needsUpdate=ie,N.lightProbe.needsUpdate=ie,N.directionalLights.needsUpdate=ie,N.directionalLightShadows.needsUpdate=ie,N.pointLights.needsUpdate=ie,N.pointLightShadows.needsUpdate=ie,N.spotLights.needsUpdate=ie,N.spotLightShadows.needsUpdate=ie,N.rectAreaLights.needsUpdate=ie,N.hemisphereLights.needsUpdate=ie}function Ct(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(N,ie,he){G.get(N.texture).__webglTexture=ie,G.get(N.depthTexture).__webglTexture=he;const ce=G.get(N);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=he===void 0,ce.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,ie){const he=G.get(N);he.__webglFramebuffer=ie,he.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(N,ie=0,he=0){x=N,y=ie,b=he;let ce=!0;if(N){const Be=G.get(N);Be.__useDefaultFramebuffer!==void 0?(R.bindFramebuffer(36160,null),ce=!1):Be.__webglFramebuffer===void 0?q.setupRenderTarget(N):Be.__hasExternalTextures&&q.rebindTextures(N,G.get(N.texture).__webglTexture,G.get(N.depthTexture).__webglTexture)}let ge=null,ze=!1,ke=!1;if(N){const Be=N.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(ke=!0);const it=G.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(ge=it[ie],ze=!0):C.isWebGL2&&N.samples>0&&q.useMultisampledRTT(N)===!1?ge=G.get(N).__webglMultisampledFramebuffer:ge=it,w.copy(N.viewport),E.copy(N.scissor),v=N.scissorTest}else w.copy(I).multiplyScalar(A).floor(),E.copy(W).multiplyScalar(A).floor(),v=U;if(R.bindFramebuffer(36160,ge)&&C.drawBuffers&&ce&&R.drawBuffers(N,ge),R.viewport(w),R.scissor(E),R.setScissorTest(v),ze){const Be=G.get(N.texture);Z.framebufferTexture2D(36160,36064,34069+ie,Be.__webglTexture,he)}else if(ke){const Be=G.get(N.texture),it=ie||0;Z.framebufferTextureLayer(36160,36064,Be.__webglTexture,he||0,it)}_=-1},this.readRenderTargetPixels=function(N,ie,he,ce,ge,ze,ke){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=G.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ke!==void 0&&(Ne=Ne[ke]),Ne){R.bindFramebuffer(36160,Ne);try{const Be=N.texture,it=Be.format,Ye=Be.type;if(it!==Mn&&te.convert(it)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ye===Zs&&(j.has("EXT_color_buffer_half_float")||C.isWebGL2&&j.has("EXT_color_buffer_float"));if(Ye!==Wi&&te.convert(Ye)!==Z.getParameter(35738)&&!(Ye===rr&&(C.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=N.width-ce&&he>=0&&he<=N.height-ge&&Z.readPixels(ie,he,ce,ge,te.convert(it),te.convert(Ye),ze)}finally{const Be=x!==null?G.get(x).__webglFramebuffer:null;R.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(N,ie,he=0){if(ie.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const ce=Math.pow(2,-he),ge=Math.floor(ie.image.width*ce),ze=Math.floor(ie.image.height*ce);q.setTexture2D(ie,0),Z.copyTexSubImage2D(3553,he,0,0,N.x,N.y,ge,ze),R.unbindTexture()},this.copyTextureToTexture=function(N,ie,he,ce=0){const ge=ie.image.width,ze=ie.image.height,ke=te.convert(he.format),Ne=te.convert(he.type);q.setTexture2D(he,0),Z.pixelStorei(37440,he.flipY),Z.pixelStorei(37441,he.premultiplyAlpha),Z.pixelStorei(3317,he.unpackAlignment),ie.isDataTexture?Z.texSubImage2D(3553,ce,N.x,N.y,ge,ze,ke,Ne,ie.image.data):ie.isCompressedTexture?Z.compressedTexSubImage2D(3553,ce,N.x,N.y,ie.mipmaps[0].width,ie.mipmaps[0].height,ke,ie.mipmaps[0].data):Z.texSubImage2D(3553,ce,N.x,N.y,ke,Ne,ie.image),ce===0&&he.generateMipmaps&&Z.generateMipmap(3553),R.unbindTexture()},this.copyTextureToTexture3D=function(N,ie,he,ce,ge=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=N.max.x-N.min.x+1,ke=N.max.y-N.min.y+1,Ne=N.max.z-N.min.z+1,Be=te.convert(ce.format),it=te.convert(ce.type);let Ye;if(ce.isData3DTexture)q.setTexture3D(ce,0),Ye=32879;else if(ce.isDataArrayTexture)q.setTexture2DArray(ce,0),Ye=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,ce.flipY),Z.pixelStorei(37441,ce.premultiplyAlpha),Z.pixelStorei(3317,ce.unpackAlignment);const qe=Z.getParameter(3314),ut=Z.getParameter(32878),si=Z.getParameter(3316),oi=Z.getParameter(3315),An=Z.getParameter(32877),ln=he.isCompressedTexture?he.mipmaps[0]:he.image;Z.pixelStorei(3314,ln.width),Z.pixelStorei(32878,ln.height),Z.pixelStorei(3316,N.min.x),Z.pixelStorei(3315,N.min.y),Z.pixelStorei(32877,N.min.z),he.isDataTexture||he.isData3DTexture?Z.texSubImage3D(Ye,ge,ie.x,ie.y,ie.z,ze,ke,Ne,Be,it,ln.data):he.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Ye,ge,ie.x,ie.y,ie.z,ze,ke,Ne,Be,ln.data)):Z.texSubImage3D(Ye,ge,ie.x,ie.y,ie.z,ze,ke,Ne,Be,it,ln),Z.pixelStorei(3314,qe),Z.pixelStorei(32878,ut),Z.pixelStorei(3316,si),Z.pixelStorei(3315,oi),Z.pixelStorei(32877,An),ge===0&&ce.generateMipmaps&&Z.generateMipmap(Ye),R.unbindTexture()},this.initTexture=function(N){q.setTexture2D(N,0),R.unbindTexture()},this.resetState=function(){y=0,b=0,x=null,R.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}st.prototype.isWebGLRenderer=!0;class Hy extends st{}Hy.prototype.isWebGL1Renderer=!0;class Bc extends Ze{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Bc.prototype.isScene=!0;class uo{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Js,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}uo.prototype.isInterleavedBuffer=!0;const nn=new O;class kn{constructor(e,t,i,n=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}kn.prototype.isInterleavedBufferAttribute=!0;class Nc extends Et{constructor(e){super(),this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}Nc.prototype.isSpriteMaterial=!0;let Fr;const Cs=new O,zr=new O,Ur=new O,Or=new be,Ls=new be,Id=new Fe,jo=new O,Rs=new O,Xo=new O,zh=new be,zl=new be,Uh=new be;class Vy extends Ze{constructor(e){if(super(),this.type="Sprite",Fr===void 0){Fr=new Qe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uo(t,5);Fr.setIndex([0,1,2,0,2,3]),Fr.setAttribute("position",new kn(i,3,0,!1)),Fr.setAttribute("uv",new kn(i,2,3,!1))}this.geometry=Fr,this.material=e!==void 0?e:new Nc,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),Id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Ur.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const o=this.center;qo(jo.set(-.5,-.5,0),Ur,o,zr,n,r),qo(Rs.set(.5,-.5,0),Ur,o,zr,n,r),qo(Xo.set(.5,.5,0),Ur,o,zr,n,r),zh.set(0,0),zl.set(1,0),Uh.set(1,1);let a=e.ray.intersectTriangle(jo,Rs,Xo,!1,Cs);if(a===null&&(qo(Rs.set(-.5,.5,0),Ur,o,zr,n,r),zl.set(0,1),a=e.ray.intersectTriangle(jo,Xo,Rs,!1,Cs),a===null))return;const l=e.ray.origin.distanceTo(Cs);l<e.near||l>e.far||t.push({distance:l,point:Cs.clone(),uv:wt.getUV(Cs,jo,Rs,Xo,zh,zl,Uh,new be),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Vy.prototype.isSprite=!0;function qo(s,e,t,i,n,r){Or.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Ls.x=r*Or.x-n*Or.y,Ls.y=n*Or.x+r*Or.y):Ls.copy(Or),s.copy(e),s.x+=Ls.x,s.y+=Ls.y,s.applyMatrix4(Id)}const Oh=new O,kh=new Ge,Bh=new Ge,Wy=new O,Nh=new Fe;class Dd extends Ee{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ge,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,n=this.geometry;kh.fromBufferAttribute(n.attributes.skinIndex,e),Bh.fromBufferAttribute(n.attributes.skinWeight,e),Oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Bh.getComponent(r);if(o!==0){const a=kh.getComponent(r);Nh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Wy.copy(Oh).applyMatrix4(Nh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Dd.prototype.isSkinnedMesh=!0;class jy extends Ze{constructor(){super(),this.type="Bone"}}jy.prototype.isBone=!0;class Xy extends Tt{constructor(e=null,t=1,i=1,n,r,o,a,l,c=Dt,u=Dt,h,f){super(null,o,a,l,c,u,n,r,h,f),this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Xy.prototype.isDataTexture=!0;class Ea extends Pt{constructor(e,t,i,n=1){typeof i=="number"&&(n=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Ea.prototype.isInstancedBufferAttribute=!0;const Gh=new Fe,Hh=new Fe,Yo=[],Ps=new Ee;class qy extends Ee{constructor(e,t,i){super(e,t),this.instanceMatrix=new Ea(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0)for(let r=0;r<n;r++){this.getMatrixAt(r,Gh),Hh.multiplyMatrices(i,Gh),Ps.matrixWorld=Hh,Ps.raycast(e,Yo);for(let o=0,a=Yo.length;o<a;o++){const l=Yo[o];l.instanceId=r,l.object=this,t.push(l)}Yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ea(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}qy.prototype.isInstancedMesh=!0;class pr extends Et{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}pr.prototype.isLineBasicMaterial=!0;const Vh=new O,Wh=new O,jh=new Fe,Ul=new dr,Ko=new Mi;class Un extends Ze{constructor(e=new Qe,t=new pr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Vh.fromBufferAttribute(t,n-1),Wh.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Vh.distanceTo(Wh);e.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(n),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;jh.copy(n).invert(),Ul.copy(e.ray).applyMatrix4(jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,h=new O,f=new O,p=this.isLineSegments?2:1;if(i.isBufferGeometry){const g=i.index,d=i.attributes.position;if(g!==null){const y=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=y,_=b-1;x<_;x+=p){const M=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,w),Ul.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,o.start),b=Math.min(d.count,o.start+o.count);for(let x=y,_=b-1;x<_;x+=p){if(c.fromBufferAttribute(d,x),u.fromBufferAttribute(d,x+1),Ul.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Un.prototype.isLine=!0;const Xh=new O,qh=new O;class Gc extends Un{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Xh.fromBufferAttribute(t,n),qh.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Xh.distanceTo(qh);e.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Gc.prototype.isLineSegments=!0;class Yy extends Un{constructor(e,t){super(e,t),this.type="LineLoop"}}Yy.prototype.isLineLoop=!0;class Hc extends Et{constructor(e){super(),this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}Hc.prototype.isPointsMaterial=!0;const Yh=new Fe,dc=new dr,Zo=new Mi,Jo=new O;class Ky extends Ze{constructor(e=new Qe,t=new Hc){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(n),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;Yh.copy(n).invert(),dc.copy(e.ray).applyMatrix4(Yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(i.isBufferGeometry){const c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);Jo.fromBufferAttribute(h,d),Kh(Jo,d,l,n,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)Jo.fromBufferAttribute(h,g),Kh(Jo,g,l,n,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ky.prototype.isPoints=!0;function Kh(s,e,t,i,n,r,o){const a=dc.distanceSqToPoint(s);if(a<t){const l=new O;dc.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zy extends Tt{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.minFilter=o!==void 0?o:Ft,this.magFilter=r!==void 0?r:Ft,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Zy.prototype.isVideoTexture=!0;class Jy extends Tt{constructor(e,t,i){super({width:e,height:t}),this.format=i,this.magFilter=Dt,this.minFilter=Dt,this.generateMipmaps=!1,this.needsUpdate=!0}}Jy.prototype.isFramebufferTexture=!0;class pc extends Tt{constructor(e,t,i,n,r,o,a,l,c,u,h,f){super(null,o,a,l,c,u,n,r,h,f),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}pc.prototype.isCompressedTexture=!0;class Qy extends Tt{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.needsUpdate=!0}}Qy.prototype.isCanvasTexture=!0;class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const u=i[n],f=i[n+1]-u,p=(o-u)/f;return(n+p)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new be:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,n=[],r=[],o=[],a=new O,l=new Fe;for(let p=0;p<=e;p++){const g=p/e;n[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(n[p-1],n[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(zt(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Oa extends Tn{constructor(e=0,t=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new be,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Oa.prototype.isEllipseCurve=!0;class Fd extends Oa{constructor(e,t,i,n,r,o){super(e,t,i,i,n,r,o),this.type="ArcCurve"}}Fd.prototype.isArcCurve=!0;function Vc(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,n(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+i*a}}}const Qo=new O,Ol=new Vc,kl=new Vc,Bl=new Vc;class zd extends Tn{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new O){const i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=n[(a-1)%r]:(Qo.subVectors(n[0],n[1]).add(n[0]),c=Qo);const h=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?u=n[(a+2)%r]:(Qo.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),Ol.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,d),kl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,d),Bl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),kl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Bl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Ol.calc(l),kl.calc(l),Bl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new O().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}zd.prototype.isCatmullRomCurve3=!0;function Zh(s,e,t,i,n){const r=(i-e)*.5,o=(n-t)*.5,a=s*s,l=s*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*s+t}function $y(s,e){const t=1-s;return t*t*e}function ex(s,e){return 2*(1-s)*s*e}function tx(s,e){return s*s*e}function Ws(s,e,t,i){return $y(s,e)+ex(s,t)+tx(s,i)}function nx(s,e){const t=1-s;return t*t*t*e}function ix(s,e){const t=1-s;return 3*t*t*s*e}function rx(s,e){return 3*(1-s)*s*s*e}function sx(s,e){return s*s*s*e}function js(s,e,t,i,n){return nx(s,e)+ix(s,t)+rx(s,i)+sx(s,n)}class Wc extends Tn{constructor(e=new be,t=new be,i=new be,n=new be){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new be){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(js(e,n.x,r.x,o.x,a.x),js(e,n.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Wc.prototype.isCubicBezierCurve=!0;class Ud extends Tn{constructor(e=new O,t=new O,i=new O,n=new O){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new O){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(js(e,n.x,r.x,o.x,a.x),js(e,n.y,r.y,o.y,a.y),js(e,n.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ud.prototype.isCubicBezierCurve3=!0;class ka extends Tn{constructor(e=new be,t=new be){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new be;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ka.prototype.isLineCurve=!0;class ox extends Tn{constructor(e=new O,t=new O){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jc extends Tn{constructor(e=new be,t=new be,i=new be){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Ws(e,n.x,r.x,o.x),Ws(e,n.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}jc.prototype.isQuadraticBezierCurve=!0;class Od extends Tn{constructor(e=new O,t=new O,i=new O){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Ws(e,n.x,r.x,o.x),Ws(e,n.y,r.y,o.y),Ws(e,n.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Od.prototype.isQuadraticBezierCurve3=!0;class Xc extends Tn{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const i=t,n=this.points,r=(n.length-1)*e,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],u=n[o>n.length-2?n.length-1:o+1],h=n[o>n.length-3?n.length-1:o+2];return i.set(Zh(a,l.x,c.x,u.x,h.x),Zh(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new be().fromArray(n))}return this}}Xc.prototype.isSplineCurve=!0;var kd=Object.freeze({__proto__:null,ArcCurve:Fd,CatmullRomCurve3:zd,CubicBezierCurve:Wc,CubicBezierCurve3:Ud,EllipseCurve:Oa,LineCurve:ka,LineCurve3:ox,QuadraticBezierCurve:jc,QuadraticBezierCurve3:Od,SplineCurve:Xc});class ax extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ka(t,e))}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new kd[n.type]().fromJSON(n))}return this}}class mc extends ax{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ka(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new jc(this.currentPoint.clone(),new be(e,t),new be(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,o){const a=new Wc(this.currentPoint.clone(),new be(e,t),new be(i,n),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Xc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,r,o),this}absarc(e,t,i,n,r,o){return this.absellipse(e,t,i,i,n,r,o),this}ellipse(e,t,i,n,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,n,r,o,a,l),this}absellipse(e,t,i,n,r,o,a,l){const c=new Oa(e,t,i,n,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Kt extends Qe{constructor(e=1,t=1,i=1,n=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const m=[],d=i/2;let y=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(p,2));function b(){const _=new O,M=new O;let w=0;const E=(t-e)/i;for(let v=0;v<=r;v++){const S=[],T=v/r,A=T*(t-e)+e;for(let L=0;L<=n;L++){const F=L/n,I=F*l+a,W=Math.sin(I),U=Math.cos(I);M.x=A*W,M.y=-T*i+d,M.z=A*U,h.push(M.x,M.y,M.z),_.set(W,E,U).normalize(),f.push(_.x,_.y,_.z),p.push(F,1-T),S.push(g++)}m.push(S)}for(let v=0;v<n;v++)for(let S=0;S<r;S++){const T=m[S][v],A=m[S+1][v],L=m[S+1][v+1],F=m[S][v+1];u.push(T,A,F),u.push(A,L,F),w+=6}c.addGroup(y,w,0),y+=w}function x(_){const M=g,w=new be,E=new O;let v=0;const S=_===!0?e:t,T=_===!0?1:-1;for(let L=1;L<=n;L++)h.push(0,d*T,0),f.push(0,T,0),p.push(.5,.5),g++;const A=g;for(let L=0;L<=n;L++){const I=L/n*l+a,W=Math.cos(I),U=Math.sin(I);E.x=S*U,E.y=d*T,E.z=S*W,h.push(E.x,E.y,E.z),f.push(0,T,0),w.x=W*.5+.5,w.y=U*.5*T+.5,p.push(w.x,w.y),g++}for(let L=0;L<n;L++){const F=M+L,I=A+L;_===!0?u.push(I,I+1,F):u.push(I+1,I,F),v+=3}c.addGroup(y,v,_===!0?1:2),y+=v}}static fromJSON(e){return new Kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qc extends Qe{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],o=[];a(n),c(i),u(),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(r.slice(),3)),this.setAttribute("uv",new Ve(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const x=new O,_=new O,M=new O;for(let w=0;w<t.length;w+=3)p(t[w+0],x),p(t[w+1],_),p(t[w+2],M),l(x,_,M,b)}function l(b,x,_,M){const w=M+1,E=[];for(let v=0;v<=w;v++){E[v]=[];const S=b.clone().lerp(_,v/w),T=x.clone().lerp(_,v/w),A=w-v;for(let L=0;L<=A;L++)L===0&&v===w?E[v][L]=S:E[v][L]=S.clone().lerp(T,L/A)}for(let v=0;v<w;v++)for(let S=0;S<2*(w-v)-1;S++){const T=Math.floor(S/2);S%2===0?(f(E[v][T+1]),f(E[v+1][T]),f(E[v][T])):(f(E[v][T+1]),f(E[v+1][T+1]),f(E[v+1][T]))}}function c(b){const x=new O;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(b),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){const b=new O;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const _=d(b)/2/Math.PI+.5,M=y(b)/Math.PI+.5;o.push(_,1-M)}g(),h()}function h(){for(let b=0;b<o.length;b+=6){const x=o[b+0],_=o[b+2],M=o[b+4],w=Math.max(x,_,M),E=Math.min(x,_,M);w>.9&&E<.1&&(x<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),M<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,x){const _=b*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const b=new O,x=new O,_=new O,M=new O,w=new be,E=new be,v=new be;for(let S=0,T=0;S<r.length;S+=9,T+=6){b.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(o[T+0],o[T+1]),E.set(o[T+2],o[T+3]),v.set(o[T+4],o[T+5]),M.copy(b).add(x).add(_).divideScalar(3);const A=d(M);m(w,T+0,b,A),m(E,T+2,x,A),m(v,T+4,_,A)}}function m(b,x,_,M){M<0&&b.x===1&&(o[x]=b.x-1),_.x===0&&_.z===0&&(o[x]=M/2/Math.PI+.5)}function d(b){return Math.atan2(b.z,-b.x)}function y(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}static fromJSON(e){return new qc(e.vertices,e.indices,e.radius,e.details)}}new O;new O;new O;new wt;class ho extends mc{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new mc().fromJSON(n))}return this}}const lx={triangulate:function(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=Bd(s,0,n,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(i&&(r=dx(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<n;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?1/p:0}return eo(r,o,t,a,l,p),o}};function Bd(s,e,t,i,n){let r,o;if(n===Mx(s,e,t,i)>0)for(r=e;r<t;r+=i)o=Jh(r,s[r],s[r+1],o);else for(r=t-i;r>=e;r-=i)o=Jh(r,s[r],s[r+1],o);return o&&Ba(o,o.next)&&(no(o),o=o.next),o}function ji(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Ba(t,t.next)||vt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function eo(s,e,t,i,n,r,o){if(!s)return;!o&&r&&_x(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?ux(s,i,n,r):cx(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),no(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=hx(ji(s),e,t),eo(s,e,t,i,n,r,2)):o===2&&fx(s,e,t,i,n,r):eo(ji(s),e,t,i,n,r,1);break}}}function cx(s){const e=s.prev,t=s,i=s.next;if(vt(e,t,i)>=0)return!1;let n=s.next.next;for(;n!==s.prev;){if(jr(e.x,e.y,t.x,t.y,i.x,i.y,n.x,n.y)&&vt(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function ux(s,e,t,i){const n=s.prev,r=s,o=s.next;if(vt(n,r,o)>=0)return!1;const a=n.x<r.x?n.x<o.x?n.x:o.x:r.x<o.x?r.x:o.x,l=n.y<r.y?n.y<o.y?n.y:o.y:r.y<o.y?r.y:o.y,c=n.x>r.x?n.x>o.x?n.x:o.x:r.x>o.x?r.x:o.x,u=n.y>r.y?n.y>o.y?n.y:o.y:r.y>o.y?r.y:o.y,h=gc(a,l,e,t,i),f=gc(c,u,e,t,i);let p=s.prevZ,g=s.nextZ;for(;p&&p.z>=h&&g&&g.z<=f;){if(p!==s.prev&&p!==s.next&&jr(n.x,n.y,r.x,r.y,o.x,o.y,p.x,p.y)&&vt(p.prev,p,p.next)>=0||(p=p.prevZ,g!==s.prev&&g!==s.next&&jr(n.x,n.y,r.x,r.y,o.x,o.y,g.x,g.y)&&vt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=h;){if(p!==s.prev&&p!==s.next&&jr(n.x,n.y,r.x,r.y,o.x,o.y,p.x,p.y)&&vt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=f;){if(g!==s.prev&&g!==s.next&&jr(n.x,n.y,r.x,r.y,o.x,o.y,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function hx(s,e,t){let i=s;do{const n=i.prev,r=i.next.next;!Ba(n,r)&&Nd(n,i,i.next,r)&&to(n,r)&&to(r,n)&&(e.push(n.i/t),e.push(i.i/t),e.push(r.i/t),no(i),no(i.next),i=s=r),i=i.next}while(i!==s);return ji(i)}function fx(s,e,t,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bx(o,a)){let l=Gd(o,a);o=ji(o,o.next),l=ji(l,l.next),eo(o,e,t,i,n,r),eo(l,e,t,i,n,r);return}a=a.next}o=o.next}while(o!==s)}function dx(s,e,t,i){const n=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:s.length,c=Bd(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(xx(c));for(n.sort(px),r=0;r<n.length;r++)mx(n[r],t),t=ji(t,t.next);return t}function px(s,e){return s.x-e.x}function mx(s,e){if(e=gx(s,e),e){const t=Gd(e,s);ji(e,e.next),ji(t,t.next)}}function gx(s,e){let t=e;const i=s.x,n=s.y;let r=-1/0,o;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const f=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r){if(r=f,f===i){if(n===t.y)return t;if(n===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===r)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do i>=t.x&&t.x>=l&&i!==t.x&&jr(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)&&(h=Math.abs(n-t.y)/(i-t.x),to(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&vx(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function vx(s,e){return vt(s.prev,s,e.prev)<0&&vt(e.next,s,s.next)<0}function _x(s,e,t,i){let n=s;do n.z===null&&(n.z=gc(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,yx(n)}function yx(s){let e,t,i,n,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(o>1);return s}function gc(s,e,t,i,n){return s=32767*(s-t)*n,e=32767*(e-i)*n,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function xx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function jr(s,e,t,i,n,r,o,a){return(n-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(n-o)*(i-a)>=0}function bx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!wx(s,e)&&(to(s,e)&&to(e,s)&&Sx(s,e)&&(vt(s.prev,s,e.prev)||vt(s,e.prev,e))||Ba(s,e)&&vt(s.prev,s,s.next)>0&&vt(e.prev,e,e.next)>0)}function vt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ba(s,e){return s.x===e.x&&s.y===e.y}function Nd(s,e,t,i){const n=ea(vt(s,e,t)),r=ea(vt(s,e,i)),o=ea(vt(t,i,s)),a=ea(vt(t,i,e));return!!(n!==r&&o!==a||n===0&&$o(s,t,e)||r===0&&$o(s,i,e)||o===0&&$o(t,s,i)||a===0&&$o(t,e,i))}function $o(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ea(s){return s>0?1:s<0?-1:0}function wx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Nd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function to(s,e){return vt(s.prev,s,s.next)<0?vt(s,e,s.next)>=0&&vt(s,s.prev,e)>=0:vt(s,e,s.prev)<0||vt(s,s.next,e)<0}function Sx(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Gd(s,e){const t=new vc(s.i,s.x,s.y),i=new vc(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Jh(s,e,t,i){const n=new vc(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mx(s,e,t,i){let n=0;for(let r=e,o=t-i;r<t;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class Hi{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return Hi.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];Qh(e),$h(i,e);let o=e.length;t.forEach(Qh);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,$h(i,t[l]);const a=lx.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Qh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function $h(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class os extends Qe{constructor(e=new ho([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ve(n,3)),this.setAttribute("uv",new Ve(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Tx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let x,_=!1,M,w,E,v;y&&(x=y.getSpacedPoints(u),_=!0,f=!1,M=y.computeFrenetFrames(u,!1),w=new O,E=new O,v=new O),f||(d=0,p=0,g=0,m=0);const S=a.extractPoints(c);let T=S.shape;const A=S.holes;if(!Hi.isClockWise(T)){T=T.reverse();for(let G=0,q=A.length;G<q;G++){const Q=A[G];Hi.isClockWise(Q)&&(A[G]=Q.reverse())}}const F=Hi.triangulateShape(T,A),I=T;for(let G=0,q=A.length;G<q;G++){const Q=A[G];T=T.concat(Q)}function W(G,q,Q){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().multiplyScalar(Q).add(G)}const U=T.length,H=F.length;function J(G,q,Q){let se,le,ye;const oe=G.x-q.x,de=G.y-q.y,_e=Q.x-G.x,ue=Q.y-G.y,z=oe*oe+de*de,P=oe*ue-de*_e;if(Math.abs(P)>Number.EPSILON){const $=Math.sqrt(z),k=Math.sqrt(_e*_e+ue*ue),ve=q.x-de/$,we=q.y+oe/$,pe=Q.x-ue/k,te=Q.y+_e/k,Ce=((pe-ve)*ue-(te-we)*_e)/(oe*ue-de*_e);se=ve+oe*Ce-G.x,le=we+de*Ce-G.y;const Pe=se*se+le*le;if(Pe<=2)return new be(se,le);ye=Math.sqrt(Pe/2)}else{let $=!1;oe>Number.EPSILON?_e>Number.EPSILON&&($=!0):oe<-Number.EPSILON?_e<-Number.EPSILON&&($=!0):Math.sign(de)===Math.sign(ue)&&($=!0),$?(se=-de,le=oe,ye=Math.sqrt(z)):(se=oe,le=de,ye=Math.sqrt(z/2))}return new be(se/ye,le/ye)}const D=[];for(let G=0,q=I.length,Q=q-1,se=G+1;G<q;G++,Q++,se++)Q===q&&(Q=0),se===q&&(se=0),D[G]=J(I[G],I[Q],I[se]);const X=[];let V,Y=D.concat();for(let G=0,q=A.length;G<q;G++){const Q=A[G];V=[];for(let se=0,le=Q.length,ye=le-1,oe=se+1;se<le;se++,ye++,oe++)ye===le&&(ye=0),oe===le&&(oe=0),V[se]=J(Q[se],Q[ye],Q[oe]);X.push(V),Y=Y.concat(V)}for(let G=0;G<d;G++){const q=G/d,Q=p*Math.cos(q*Math.PI/2),se=g*Math.sin(q*Math.PI/2)+m;for(let le=0,ye=I.length;le<ye;le++){const oe=W(I[le],D[le],se);ae(oe.x,oe.y,-Q)}for(let le=0,ye=A.length;le<ye;le++){const oe=A[le];V=X[le];for(let de=0,_e=oe.length;de<_e;de++){const ue=W(oe[de],V[de],se);ae(ue.x,ue.y,-Q)}}}const ee=g+m;for(let G=0;G<U;G++){const q=f?W(T[G],Y[G],ee):T[G];_?(E.copy(M.normals[0]).multiplyScalar(q.x),w.copy(M.binormals[0]).multiplyScalar(q.y),v.copy(x[0]).add(E).add(w),ae(v.x,v.y,v.z)):ae(q.x,q.y,0)}for(let G=1;G<=u;G++)for(let q=0;q<U;q++){const Q=f?W(T[q],Y[q],ee):T[q];_?(E.copy(M.normals[G]).multiplyScalar(Q.x),w.copy(M.binormals[G]).multiplyScalar(Q.y),v.copy(x[G]).add(E).add(w),ae(v.x,v.y,v.z)):ae(Q.x,Q.y,h/u*G)}for(let G=d-1;G>=0;G--){const q=G/d,Q=p*Math.cos(q*Math.PI/2),se=g*Math.sin(q*Math.PI/2)+m;for(let le=0,ye=I.length;le<ye;le++){const oe=W(I[le],D[le],se);ae(oe.x,oe.y,h+Q)}for(let le=0,ye=A.length;le<ye;le++){const oe=A[le];V=X[le];for(let de=0,_e=oe.length;de<_e;de++){const ue=W(oe[de],V[de],se);_?ae(ue.x,ue.y+x[u-1].y,x[u-1].x+Q):ae(ue.x,ue.y,h+Q)}}}re(),ne();function re(){const G=n.length/3;if(f){let q=0,Q=U*q;for(let se=0;se<H;se++){const le=F[se];j(le[2]+Q,le[1]+Q,le[0]+Q)}q=u+d*2,Q=U*q;for(let se=0;se<H;se++){const le=F[se];j(le[0]+Q,le[1]+Q,le[2]+Q)}}else{for(let q=0;q<H;q++){const Q=F[q];j(Q[2],Q[1],Q[0])}for(let q=0;q<H;q++){const Q=F[q];j(Q[0]+U*u,Q[1]+U*u,Q[2]+U*u)}}i.addGroup(G,n.length/3-G,0)}function ne(){const G=n.length/3;let q=0;Z(I,q),q+=I.length;for(let Q=0,se=A.length;Q<se;Q++){const le=A[Q];Z(le,q),q+=le.length}i.addGroup(G,n.length/3-G,1)}function Z(G,q){let Q=G.length;for(;--Q>=0;){const se=Q;let le=Q-1;le<0&&(le=G.length-1);for(let ye=0,oe=u+d*2;ye<oe;ye++){const de=U*ye,_e=U*(ye+1),ue=q+se+de,z=q+le+de,P=q+le+_e,$=q+se+_e;C(ue,z,P,$)}}}function ae(G,q,Q){l.push(G),l.push(q),l.push(Q)}function j(G,q,Q){R(G),R(q),R(Q);const se=n.length/3,le=b.generateTopUV(i,n,se-3,se-2,se-1);B(le[0]),B(le[1]),B(le[2])}function C(G,q,Q,se){R(G),R(q),R(se),R(q),R(Q),R(se);const le=n.length/3,ye=b.generateSideWallUV(i,n,le-6,le-3,le-2,le-1);B(ye[0]),B(ye[1]),B(ye[3]),B(ye[1]),B(ye[2]),B(ye[3])}function R(G){n.push(l[G*3+0]),n.push(l[G*3+1]),n.push(l[G*3+2])}function B(G){r.push(G.x),r.push(G.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ex(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new kd[n.type]().fromJSON(n)),new os(i,e.options)}}const Tx={generateTopUV:function(s,e,t,i,n){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[n*3],u=e[n*3+1];return[new be(r,o),new be(a,l),new be(c,u)]},generateSideWallUV:function(s,e,t,i,n,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[n*3],p=e[n*3+1],g=e[n*3+2],m=e[r*3],d=e[r*3+1],y=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-h),new be(f,1-g),new be(m,1-y)]:[new be(a,1-l),new be(u,1-h),new be(p,1-g),new be(d,1-y)]}};function Ex(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xr extends qc{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xr(e.radius,e.detail)}}class Yc extends Qe{constructor(e=new ho([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ve(n,3)),this.setAttribute("normal",new Ve(r,3)),this.setAttribute("uv",new Ve(o,2));function c(u){const h=n.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;Hi.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,y=g.length;d<y;d++){const b=g[d];Hi.isClockWise(b)===!0&&(g[d]=b.reverse())}const m=Hi.triangulateShape(p,g);for(let d=0,y=g.length;d<y;d++){const b=g[d];p=p.concat(b)}for(let d=0,y=p.length;d<y;d++){const b=p[d];n.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let d=0,y=m.length;d<y;d++){const b=m[d],x=b[0]+h,_=b[1]+h,M=b[2]+h;i.push(x,_,M),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ax(t,e)}static fromJSON(e,t){const i=[];for(let n=0,r=e.shapes.length;n<r;n++){const o=t[e.shapes[n]];i.push(o)}return new Yc(i,e.curveSegments)}}function Ax(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}class Na extends Qe{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,f=new O,p=[],g=[],m=[],d=[];for(let y=0;y<=i;y++){const b=[],x=y/i;let _=0;y==0&&o==0?_=.5/t:y==i&&l==Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){const w=M/t;h.x=-e*Math.cos(n+w*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(n+w*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),d.push(w+_,1-x),b.push(c++)}u.push(b)}for(let y=0;y<i;y++)for(let b=0;b<t;b++){const x=u[y][b+1],_=u[y][b],M=u[y+1][b],w=u[y+1][b+1];(y!==0||o>0)&&p.push(x,_,w),(y!==i-1||l<Math.PI)&&p.push(_,M,w)}this.setIndex(p),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(d,2))}static fromJSON(e){return new Na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ir extends Qe{constructor(e=1,t=.4,i=8,n=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],c=[],u=new O,h=new O,f=new O;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const m=g/n*r,d=p/i*Math.PI*2;h.x=(e+t*Math.cos(d))*Math.cos(m),h.y=(e+t*Math.cos(d))*Math.sin(m),h.z=t*Math.sin(d),a.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const m=(n+1)*p+g-1,d=(n+1)*(p-1)+g-1,y=(n+1)*(p-1)+g,b=(n+1)*p+g;o.push(m,d,b),o.push(d,y,b)}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}static fromJSON(e){return new ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cx extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new O,r=new O;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,p=h.count;for(let g=f,m=f+p;g<m;g+=3)for(let d=0;d<3;d++){const y=a.getX(g+d),b=a.getX(g+(d+1)%3);n.fromBufferAttribute(o,y),r.fromBufferAttribute(o,b),ef(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;n.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),ef(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ve(t,3))}}}function ef(s,e,t){const i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)===!0||t.has(n)===!0?!1:(t.add(i),t.add(n),!0)}class Hd extends Et{constructor(e){super(),this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}Hd.prototype.isShadowMaterial=!0;class Vd extends pn{constructor(e){super(e),this.type="RawShaderMaterial"}}Vd.prototype.isRawShaderMaterial=!0;class Ga extends Et{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}Ga.prototype.isMeshStandardMaterial=!0;class Kc extends Ga{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Kc.prototype.isMeshPhysicalMaterial=!0;class Zc extends Et{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}Zc.prototype.isMeshPhongMaterial=!0;class Jc extends Et{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}Jc.prototype.isMeshToonMaterial=!0;class Wd extends Et{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Wd.prototype.isMeshNormalMaterial=!0;class Qc extends Et{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}Qc.prototype.isMeshLambertMaterial=!0;class jd extends Et{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ae(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}jd.prototype.isMeshMatcapMaterial=!0;class Xd extends pr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Xd.prototype.isLineDashedMaterial=!0;const Lx={ShadowMaterial:Hd,SpriteMaterial:Nc,RawShaderMaterial:Vd,ShaderMaterial:pn,PointsMaterial:Hc,MeshPhysicalMaterial:Kc,MeshStandardMaterial:Ga,MeshPhongMaterial:Zc,MeshToonMaterial:Jc,MeshNormalMaterial:Wd,MeshLambertMaterial:Qc,MeshDepthMaterial:za,MeshDistanceMaterial:Ua,MeshBasicMaterial:qi,MeshMatcapMaterial:jd,LineDashedMaterial:Xd,LineBasicMaterial:pr,Material:Et};Et.fromType=function(s){return new Lx[s]};const mt={arraySlice:function(s,e,t){return mt.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i},sortedArray:function(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n},flattenJSON:function(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)},subclip:function(s,e,t,i,n=30){const r=s.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],f=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*n;if(!(g<t||g>=i)){h.push(c.times[p]);for(let m=0;m<u;++m)f.push(c.values[p*u+m])}}h.length!==0&&(c.times=mt.convertArray(h,c.times.constructor),c.values=mt.convertArray(f,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,i=30){i<=0&&(i=30);const n=t.tracks.length,r=e/i;for(let o=0;o<n;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(y){return y.name===a.name&&y.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);const g=a.times.length-1;let m;if(r<=a.times[0]){const y=u,b=h-u;m=mt.arraySlice(a.values,y,b)}else if(r>=a.times[g]){const y=g*h+u,b=y+h-u;m=mt.arraySlice(a.values,y,b)}else{const y=a.createInterpolant(),b=u,x=h-u;y.evaluate(r),m=mt.arraySlice(y.resultBuffer,b,x)}l==="quaternion"&&new dt().fromArray(m).normalize().conjugate().toArray(m);const d=c.times.length;for(let y=0;y<d;++y){const b=y*p+f;if(l==="quaternion")dt.multiplyQuaternionsFlat(c.values,b,m,0,c.values,b);else{const x=p-f*2;for(let _=0;_<x;++_)c.values[b+_]-=m[_]}}}return s.blendMode=md,s}};class wi{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,r)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(n===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,r,e)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}wi.prototype.beforeStart_=wi.prototype.copySampleValue_;wi.prototype.afterEnd_=wi.prototype.copySampleValue_;class Rx extends wi{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gr,endingEnd:Gr}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hr:r=e,a=2*t-i;break;case Sa:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hr:o=e,l=2*i-t;break;case Sa:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),m=g*g,d=m*g,y=-f*d+2*f*m-f*g,b=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,x=(-1-p)*d+(1.5+p)*m+.5*g,_=p*d-p*m;for(let M=0;M!==a;++M)r[M]=y*o[u+M]+b*o[c+M]+x*o[l+M]+_*o[h+M];return r}}class qd extends wi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(n-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Px extends wi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mt.convertArray(t,this.TimeBufferType),this.values=mt.convertArray(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mt.convertArray(e.times,Array),values:mt.convertArray(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Px(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=mt.arraySlice(i,r,o),this.values=mt.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&mt.isTypedArray(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=mt.arraySlice(this.times),t=mt.arraySlice(this.values),i=this.getValueSize(),n=this.getInterpolation()===al,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(n)l=!0;else{const h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=mt.arraySlice(e,0,o),this.values=mt.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=mt.arraySlice(this.times,0),t=mt.arraySlice(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=wa;class as extends ii{}as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ba;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class Yd extends ii{}Yd.prototype.ValueTypeName="color";class Aa extends ii{}Aa.prototype.ValueTypeName="number";class Ix extends wi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let u=c+a;c!==u;c+=4)dt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class fo extends ii{InterpolantFactoryMethodLinear(e){return new Ix(this.times,this.values,this.getValueSize(),e)}}fo.prototype.ValueTypeName="quaternion";fo.prototype.DefaultInterpolation=wa;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends ii{}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ba;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Ca extends ii{}Ca.prototype.ValueTypeName="vector";class tf{constructor(e,t=-1,i,n=Rc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Fx(i[o]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(ii.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=mt.getKeyframeOrder(l);l=mt.sortedArray(l,1,u),c=mt.sortedArray(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Aa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=n[h];f||(n[h]=f=[]),f.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,g,m){if(p.length!==0){const d=[],y=[];mt.flattenJSON(p,d,y,g),d.length!==0&&m.push(new h(f,d,y))}},n=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const d=[],y=[];for(let b=0;b!==f[g].morphTargets.length;++b){const x=f[g];d.push(x.time),y.push(x.morphTarget===m?1:0)}n.push(new Aa(".morphTargetInfluence["+m+"]",d,y))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(Ca,p+".position",f,"pos",n),i(fo,p+".quaternion",f,"rot",n),i(Ca,p+".scale",f,"scl",n)}}return n.length===0?null:new this(r,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Aa;case"vector":case"vector2":case"vector3":case"vector4":return Ca;case"color":return Yd;case"quaternion":return fo;case"bool":case"boolean":return as;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Fx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dx(s.type);if(s.times===void 0){const t=[],i=[];mt.flattenJSON(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const is={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zx{constructor(e,t,i){const n=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&n.onStart!==void 0&&n.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,n.onProgress!==void 0&&n.onProgress(u,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Ux=new zx;class Ti{constructor(e){this.manager=e!==void 0?e:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const fi={};class va extends Ti{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=is.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:i,onError:n});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=fi[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(y){b();function b(){h.read().then(({done:x,value:_})=>{if(x)y.close();else{m+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let w=0,E=u.length;w<E;w++){const v=u[w];v.onProgress&&v.onProgress(M)}y.enqueue(_),b()}})}}});return new Response(d)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{is.add(e,c);const u=fi[e];delete fi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kd extends Ti{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=is.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=$s("img");function l(){u(),is.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),n&&n(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ox extends Ti{constructor(e){super(e)}load(e,t,i,n){const r=new Da,o=new Kd(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}}class _c extends Ti{constructor(e){super(e)}load(e,t,i,n){const r=new Tt,o=new Kd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Qn extends Ze{constructor(e,t=1){super(),this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Qn.prototype.isLight=!0;class kx extends Qn{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e){return Qn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}kx.prototype.isHemisphereLight=!0;const nf=new Fe,rf=new O,sf=new O;class $c{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zd extends $c{constructor(){super(new en(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=Qs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Zd.prototype.isSpotLightShadow=!0;class Bx extends Qn{constructor(e,t,i=0,n=Math.PI/3,r=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.target=new Ze,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.shadow=new Zd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Bx.prototype.isSpotLight=!0;const of=new Fe,Is=new O,Nl=new O;class Jd extends $c{constructor(){super(new en(90,1,.5,500)),this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),i.position.copy(Is),Nl.copy(i.position),Nl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nl),i.updateMatrixWorld(),n.makeTranslation(-Is.x,-Is.y,-Is.z),of.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of)}}Jd.prototype.isPointLightShadow=!0;class Nx extends Qn{constructor(e,t,i=0,n=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Jd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Nx.prototype.isPointLight=!0;class Qd extends $c{constructor(){super(new co(-5,5,5,-5,.5,500))}}Qd.prototype.isDirectionalLightShadow=!0;class Gx extends Qn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.target=new Ze,this.shadow=new Qd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Gx.prototype.isDirectionalLight=!0;class Hx extends Qn{constructor(e,t){super(e,t),this.type="AmbientLight"}}Hx.prototype.isAmbientLight=!0;class Vx extends Qn{constructor(e,t,i=10,n=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Vx.prototype.isRectAreaLight=!0;class $d{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new O)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*n),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*n)),t.addScaledVector(o[5],1.092548*(n*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(i*r)),t.addScaledVector(o[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*n),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*n),t.addScaledVector(o[5],2*.429043*n*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*i*r),t.addScaledVector(o[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}}$d.prototype.isSphericalHarmonics3=!0;class eu extends Qn{constructor(e=new $d,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}eu.prototype.isLightProbe=!0;class Wx{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tu extends Qe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}tu.prototype.isInstancedBufferGeometry=!0;class jx extends Ti{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=is.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){is.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){n&&n(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}jx.prototype.isImageBitmapLoader=!0;let ta;const Xx={getContext:function(){return ta===void 0&&(ta=new(window.AudioContext||window.webkitAudioContext)),ta},setContext:function(s){ta=s}};class qx extends Ti{constructor(e){super(e)}load(e,t,i,n){const r=this,o=new va(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);Xx.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){n?n(l):console.error(l),r.manager.itemError(e)}},i,n)}}class Yx extends eu{constructor(e,t,i=1){super(void 0,i);const n=new Ae().set(e),r=new Ae().set(t),o=new O(n.r,n.g,n.b),a=new O(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}Yx.prototype.isHemisphereLightProbe=!0;class Kx extends eu{constructor(e,t=1){super(void 0,t);const i=new Ae().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Kx.prototype.isAmbientLightProbe=!0;class ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=af(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=af();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function af(){return(typeof performance=="undefined"?Date:performance).now()}class Zx extends Ze{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Jx{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,o;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,o=n;r!==o;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,n){dt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const o=this._workIndex*r;dt.multiplyQuaternionsFlat(e,o,e,t,e,i),dt.slerpFlat(e,t,e,t,e,o,n)}_lerp(e,t,i,n,r){const o=1-n;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*n}}_lerpAdditive(e,t,i,n,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*n}}}const nu="\\[\\]\\.:\\/",Qx=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",$x="[^"+nu.replace("\\.","")+"]",e1=/((?:WC+[\/:])*)/.source.replace("WC",iu),t1=/(WCOD+)?/.source.replace("WCOD",$x),n1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),i1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),r1=new RegExp("^"+e1+t1+n1+i1+"$"),s1=["material","materials","bones"];class o1{constructor(e,t,i){const n=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,i):new rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){const t=r1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);s1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=o1;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class a1{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Gr,endingEnd:Gr};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,r=e._clip.duration,o=r/n,a=n/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case md:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Rc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const o=i===zm;if(e===0)return r===-1?n:o&&(r&1)===1?t-n:n;if(i===Dm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Hr,n.endingEnd=Hr):(e?n.endingStart=this.zeroSlopeAtStart?Hr:Gr:n.endingStart=Sa,t?n.endingEnd=this.zeroSlopeAtEnd?Hr:Gr:n.endingEnd=Sa)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=i,this}}class l1 extends hr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=n[h],p=f.name;let g=u[p];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new Jx(rt.create(i,p,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let o=n[t];o===void 0&&(o={},n[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new qd(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let o=typeof e=="string"?tf.findByName(n,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Rc),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new a1(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?tf.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}l1.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class La extends uo{constructor(e,t,i=1){super(e,t),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}La.prototype.isInstancedInterleavedBuffer=!0;class tp{constructor(e,t,i=0,n=1/0){this.ray=new dr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return yc(e,this,i,t),i.sort(lf),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)yc(e[n],this,i,t);return i.sort(lf),i}}function lf(s,e){return s.distance-e.distance}function yc(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){const n=s.children;for(let r=0,o=n.length;r<o;r++)yc(n[r],e,t,!0)}}const cf=new O,na=new O;class np{constructor(e=new O,t=new O){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cf.subVectors(e,this.start),na.subVectors(this.end,this.start);const i=na.dot(na);let r=na.dot(cf)/i;return t&&(r=zt(r,0,1)),r}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Oi=new O,ia=new Fe,Gl=new Fe;class c1 extends Gc{constructor(e){const t=ip(e),i=new Qe,n=[],r=[],o=new Ae(0,0,1),a=new Ae(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}i.setAttribute("position",new Ve(n,3)),i.setAttribute("color",new Ve(r,3));const l=new pr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");Gl.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(ia.multiplyMatrices(Gl,a.matrixWorld),Oi.setFromMatrixPosition(ia),n.setXYZ(o,Oi.x,Oi.y,Oi.z),ia.multiplyMatrices(Gl,a.parent.matrixWorld),Oi.setFromMatrixPosition(ia),n.setXYZ(o+1,Oi.x,Oi.y,Oi.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function ip(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,ip(s.children[t]));return e}class u1 extends Gc{constructor(e=10,t=10,i=4473924,n=8947848){i=new Ae(i),n=new Ae(n);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=f===r?i:n;m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3}const u=new Qe;u.setAttribute("position",new Ve(l,3)),u.setAttribute("color",new Ve(c,3));const h=new pr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const Hn=new Uint32Array(512),Vn=new Uint32Array(512);for(let s=0;s<256;++s){const e=s-127;e<-27?(Hn[s]=0,Hn[s|256]=32768,Vn[s]=24,Vn[s|256]=24):e<-14?(Hn[s]=1024>>-e-14,Hn[s|256]=1024>>-e-14|32768,Vn[s]=-e-1,Vn[s|256]=-e-1):e<=15?(Hn[s]=e+15<<10,Hn[s|256]=e+15<<10|32768,Vn[s]=13,Vn[s|256]=13):e<128?(Hn[s]=31744,Hn[s|256]=64512,Vn[s]=24,Vn[s|256]=24):(Hn[s]=31744,Hn[s|256]=64512,Vn[s]=13,Vn[s|256]=13)}const rp=new Uint32Array(2048),po=new Uint32Array(64),h1=new Uint32Array(64);for(let s=1;s<1024;++s){let e=s<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,rp[s]=e|t}for(let s=1024;s<2048;++s)rp[s]=939524096+(s-1024<<13);for(let s=1;s<31;++s)po[s]=s<<23;po[31]=1199570944;po[32]=2147483648;for(let s=33;s<63;++s)po[s]=2147483648+(s-32<<23);po[63]=3347054592;for(let s=1;s<64;++s)s!==32&&(h1[s]=1024);Tn.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Tn.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};mc.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};u1.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};c1.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Ti.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Wx.extractUrlBase(s)};Ti.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};an.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};an.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};an.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};an.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};an.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Xi.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Mi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};lo.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};np.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Rt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};Rt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};Rt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Rt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};Rt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Rt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Fe.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};Fe.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};Fe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new O().setFromMatrixColumn(this,3)};Fe.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};Fe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Fe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Fe.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Fe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Fe.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};Fe.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Fe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Fe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Fe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Fe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Fe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Fe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Fe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Fe.prototype.makeFrustum=function(s,e,t,i,n,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,i,t,n,r)};Fe.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};vi.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};dt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};dt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};dr.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};dr.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};dr.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};wt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};wt.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};wt.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};wt.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};wt.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};wt.barycoordFromPoint=function(s,e,t,i,n){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),wt.getBarycoord(s,e,t,i,n)};wt.normal=function(s,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),wt.getNormal(s,e,t,i)};ho.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};ho.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new os(this,s)};ho.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Yc(this,s)};be.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};be.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};be.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};O.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};O.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};O.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};O.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};O.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};O.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};O.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};O.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};O.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ge.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Ge.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ze.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Ze.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ze.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Ze.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ze.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ze.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ee.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ee.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Um},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Dd.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};en.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(Qn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(Pt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ma},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ma)}}});Pt.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Ma:Js),this};Pt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Pt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Qe.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Qe.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Pt(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};Qe.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};Qe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Qe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Qe.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Qe.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Qe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});uo.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Ma:Js),this};uo.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};os.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};os.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};os.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Bc.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Et.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ae}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===cd}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(pn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});st.prototype.clearTarget=function(s,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,i)};st.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};st.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};st.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};st.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};st.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};st.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};st.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};st.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};st.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};st.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};st.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};st.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};st.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};st.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};st.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};st.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};st.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};st.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};st.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};st.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};st.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};st.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};st.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};st.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(st.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?ft:Jn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(Ld.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(dn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});Zx.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new qx().load(s,function(i){e.setBuffer(i)}),this};Oc.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};Oc.prototype.clear=function(s,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,i)};fr.crossOrigin=void 0;fr.loadTexture=function(s,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const n=new _c;n.setCrossOrigin(this.crossOrigin);const r=n.load(s,t,void 0,i);return e&&(r.mapping=e),r};fr.loadTextureCube=function(s,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const n=new Ox;n.setCrossOrigin(this.crossOrigin);const r=n.load(s,t,void 0,i);return e&&(r.mapping=e),r};fr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};fr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);const uf={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Ha{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const f1=new co(-1,1,1,-1,0,1),ru=new Qe;ru.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3));ru.setAttribute("uv",new Ve([0,2,0,0,2,0],2));class d1{constructor(e){this._mesh=new Ee(ru,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hf extends Ha{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ao.clone(e.uniforms),this.material=new pn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new d1(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class ff extends Ha{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class p1 extends Ha{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class m1{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new be);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],uf===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),hf===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new hf(uf),this.clock=new ep}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ff!==void 0&&(o instanceof ff?i=!0:o instanceof p1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new co(-1,1,1,-1,0,1);const sp=new Qe;sp.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3));sp.setAttribute("uv",new Ve([0,2,0,0,2,0],2));class op extends Ha{constructor(e,t,i,n,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=n}}const g1=(s,e,t)=>{s.renderer=new st({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),s.composer=new m1(s.renderer),s.composer.addPass(new op(s.scene,Zr(s.camera)))},df=(s,e,t)=>{!s.renderer||(e?s.renderer.outputEncoding=Jn:s.renderer.outputEncoding=ft,t?s.renderer.toneMapping=Kn:s.renderer.toneMapping=fd)},pf=(s,e,t)=>{!s.renderer||!s.composer||(s.renderer.setSize(e.width,e.height),s.renderer.setPixelRatio(t),s.composer.setSize(e.width,e.height),s.composer.setPixelRatio(t))},mf=(s,e,t)=>{!s.renderer||(s.renderer.shadowMap.enabled=e,s.renderer.shadowMap.type=t)},Yn=s=>s.userData,v1=(s,e)=>{s.pointer.update(t=>s.renderer?t.set(e.offsetX/s.renderer.domElement.clientWidth*2-1,-(e.offsetY/s.renderer.domElement.clientHeight)*2+1):t)},ap=(s,e,t,i)=>(s.raycaster.setFromCamera(e,t),s.raycaster.intersectObjects(i,!1)),_1=(s,e)=>s.object.uuid!==e.object.uuid||s.instanceId!==e.instanceId,y1=(s,e,t)=>{let i;const n=s.camera.subscribe(l=>i=l);St(n);let r;const o=s.pointer.subscribe(l=>r=l);St(o);const a=l=>{var u,h;if(l.preventDefault(),s.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,v1(s,l),e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=ap(e,r,i,Array.from(e.raycastableObjects));c.length>0&&e.interactiveObjects.has(c[0].object)&&((h=(u=Yn(c[0].object)).eventDispatcher)==null||h.call(u,l.type,{...c[0],event:l}))};return{onClick:a,onContextMenu:a,onPointerUp:a,onPointerDown:a,onPointerMove:a}},x1=(s,e)=>{let t=Zr(s.pointerOverCanvas);const i=s.pointerOverCanvas.subscribe(c=>t=c);St(i);let n;const r=s.camera.subscribe(c=>n=c);St(r);let o;const a=s.pointer.subscribe(c=>o=c);return St(a),{raycast:()=>{var h,f,p,g,m,d,y,b;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?ap(e,o,n,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&_1(e.lastIntersection,u)&&((d=(m=Yn(e.lastIntersection.object)).eventDispatcher)==null||d.call(m,"pointerleave",e.lastIntersection),(b=(y=Yn(u.object)).eventDispatcher)==null||b.call(y,"pointerenter",u)):(g=(p=Yn(u.object)).eventDispatcher)==null||g.call(p,"pointerenter",u):e.lastIntersection&&((f=(h=Yn(e.lastIntersection.object)).eventDispatcher)==null||f.call(h,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Va=typeof window!="undefined",b1=s=>{if(!Va)return;let e;const t=()=>{s(),e=requestAnimationFrame(t)};t(),St(()=>{!e||cancelAnimationFrame(e)})},w1=(s,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let n=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++n}),n>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((n,r)=>r.order?!0:n,!1),i=s.clock.getDelta();t?Array.from(e.frameHandlers).sort((n,r)=>{var o,a;return((o=n.order)!=null?o:0)>((a=r.order)!=null?a:0)?1:-1}).forEach(n=>n.fn(s,i)):e.frameHandlers.forEach(n=>n.fn(s,i))},S1=s=>{!s.debugFrameloop||(s.frame+=1,console.log(`frame: ${s.frame}${Object.keys(s.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(s.invalidations).length>0&&console.table(s.invalidations),s.invalidations={})},M1=(s,e,t)=>{let i=Zr(s.camera);const n=s.camera.subscribe(o=>i=o);St(n);const{raycast:r}=x1(s,e);b1(()=>{const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(r(),t.pointerInvalidated=!1),o&&(!i||!s.composer||!s.renderer||(w1(s,t),s.composer.passes.length>1?s.composer.render():s.renderer.render(s.scene,i),S1(t),t.frameInvalidated=!1,t.advance=!1))})},T1=()=>{const s=new en(75,0,.1,1e3);return Yn(s).threlteDefaultCamera=!0,s.position.z=5,s.lookAt(0,0,0),s},E1=s=>{const e=s.size.subscribe(t=>{Yn(Zr(s.camera)).threlteDefaultCamera&&s.camera.update(i=>{const n=i;return n.aspect=t.width/t.height,n.updateProjectionMatrix(),s.invalidate("Default camera: aspect ratio changed"),n})});St(e)},A1=(s,e,t,i,n,r,o)=>{const a={audioListeners:new Map,addAudioListener:(m,d)=>{if(d=d!=null?d:"default",a.audioListeners.has(d)){console.warn(`An AudioListener with the id "${d}" has already been added, aborting.`);return}a.audioListeners.set(d,m)},removeAudioListener:m=>{if(m=m!=null?m:"default",!a.audioListeners.has(m)){console.warn(`No AudioListener with the id "${m}" found, aborting.`);return}a.audioListeners.delete(m)},getAudioListener:m=>{if(m=m!=null?m:"default",!a.audioListeners.has(m)){console.warn(`No AudioListener with the id "${m}" found, aborting.`);return}return a.audioListeners.get(m)}},l={debugFrameloop:r,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Hp([i,n],([m,d])=>m||d),pointer:$t(new be),pointerOverCanvas:$t(!1),clock:new ep,camera:$t(T1()),scene:new Bc,renderer:void 0,composer:void 0,invalidate:m=>{l.frameInvalidated=!0,l.debugFrameloop&&m&&(l.invalidations[m]=l.invalidations[m]?l.invalidations[m]+1:1)},advance:()=>{l.advance=!0}},u={flat:$t(e),linear:$t(s),dpr:$t(t),setCamera:m=>{c.camera.set(m),c.composer&&(c.composer.passes.forEach(d=>{d instanceof op&&(d.camera=m)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new tp,lastIntersection:null,addRaycastableObject:m=>{u.raycastableObjects.add(m)},removeRaycastableObject:m=>{u.raycastableObjects.delete(m)},addInteractiveObject:m=>{u.interactiveObjects.add(m)},removeInteractiveObject:m=>{u.interactiveObjects.delete(m)},addPass:m=>{!c.composer||(c.composer.addPass(m),c.invalidate("Canvas: adding pass"))},removePass:m=>{!c.composer||(c.composer.removePass(m),c.invalidate("Canvas: removing pass"))}};return Nr("threlte",c),Nr("threlte-root",u),Nr("threlte-render-context",l),Nr("threlte-audio-context",a),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a}},C1=()=>{const s=$t({width:0,height:0});let e={width:0,height:0};const t=s.subscribe(o=>e=o);St(t);let i;const n=()=>{const o=e;if(!i||!i.parentElement)return;const{clientWidth:a,clientHeight:l}=i.parentElement;(a!==o.width||l!==o.height)&&s.set({width:a,height:l})},r=o=>{i=o,n(),window.addEventListener("resize",n)};return Va?(St(()=>{window.removeEventListener("resize",n)}),{parentSizeAction:r,parentSize:s}):{parentSize:s,parentSizeAction:r}};function gf(s){let e;const t=s[30].default,i=ni(t,s,s[29],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r[0]&536870912)&&$n(i,t,n,n[29],e?ti(t,n[29],r,null):ei(n[29]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function L1(s){let e,t,i,n,r=s[1]&&gf(s);return{c(){e=nd("canvas"),r&&r.c(),this.h()},l(o){e=id(o,"CANVAS",{class:!0});var a=rd(e);r&&r.l(a),a.forEach(gt),this.h()},h(){sd(e,"class","svelte-15bl8wt")},m(o,a){_t(o,e,a),r&&r.m(e,null),s[31](e),t=!0,i||(n=[Up(s[2].call(null,e)),pi(e,"click",s[8]),pi(e,"contextmenu",s[9]),pi(e,"pointerup",s[12]),pi(e,"pointerdown",s[10]),pi(e,"pointermove",s[11]),pi(e,"pointerenter",s[32]),pi(e,"pointerleave",s[33])],i=!0)},p(o,a){o[1]?r?(r.p(o,a),a[0]&2&&Ue(r,1)):(r=gf(o),r.c(),Ue(r,1),r.m(e,null)):r&&(Ac(),Oe(r,1,1,()=>{r=null}),Cc())},i(o){t||(Ue(r),t=!0)},o(o){Oe(r),t=!1},d(o){o&&gt(e),r&&r.d(),s[31](null),i=!1,od(n)}}}const vf=new Set;function R1(s,e,t){let i,n,r,o,{$$slots:a={},$$scope:l}=e,{dpr:c=Va?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:h=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:g=!0}=e,{shadowMapType:m=ld}=e,{size:d=void 0}=e,{rendererParameters:y=void 0}=e,b,x=!1;const _=$t(d),{parentSize:M,parentSizeAction:w}=C1(),E=A1(h,u,c,_,M,p,f),{getCtx:v,getRootCtx:S,getRenderCtx:T,renderCtx:A}=E,{ctx:L,rootCtx:F,audioCtx:I}=E;E1(L),vf.add(L.invalidate),St(()=>{vf.delete(L.invalidate)});const{size:W,scene:U}=L;Mt(s,W,j=>t(26,n=j));const{flat:H,linear:J,dpr:D}=F;Mt(s,H,j=>t(27,r=j)),Mt(s,J,j=>t(28,o=j)),Mt(s,D,j=>t(25,i=j)),Nr("threlte-parent",$t(U)),Op(()=>{!b||(g1(L,b,y),df(L,o,r),pf(L,n,i),mf(L,g,m),t(1,x=!0))}),M1(L,F,A);const{onClick:X,onContextMenu:V,onPointerDown:Y,onPointerMove:ee,onPointerUp:re}=y1(L,F,A);function ne(j){Zn[j?"unshift":"push"](()=>{b=j,t(0,b)})}const Z=()=>v().pointerOverCanvas.set(!0),ae=()=>v().pointerOverCanvas.set(!1);return s.$$set=j=>{"dpr"in j&&t(13,c=j.dpr),"flat"in j&&t(14,u=j.flat),"linear"in j&&t(15,h=j.linear),"frameloop"in j&&t(16,f=j.frameloop),"debugFrameloop"in j&&t(17,p=j.debugFrameloop),"shadows"in j&&t(18,g=j.shadows),"shadowMapType"in j&&t(19,m=j.shadowMapType),"size"in j&&t(20,d=j.size),"rendererParameters"in j&&t(21,y=j.rendererParameters),"$$scope"in j&&t(29,l=j.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&1048576&&_.set(d),s.$$.dirty[0]&32768&&fa(J,o=h,o),s.$$.dirty[0]&16384&&fa(H,r=u,r),s.$$.dirty[0]&8192&&fa(D,i=c,i),s.$$.dirty[0]&402653184&&df(v(),o,r),s.$$.dirty[0]&100663296&&pf(v(),n,i),s.$$.dirty[0]&786432&&mf(v(),g,m)},[b,x,w,v,W,H,J,D,X,V,Y,ee,re,c,u,h,f,p,g,m,d,y,L,F,I,i,n,r,o,l,a,ne,Z,ae]}class P1 extends Vt{constructor(e){super(),Wt(this,e,R1,L1,jt,{dpr:13,flat:14,linear:15,frameloop:16,debugFrameloop:17,shadows:18,shadowMapType:19,size:20,rendererParameters:21,ctx:22,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[22]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const ri=()=>ro("threlte"),lp=()=>ro("threlte-root"),su=s=>{const e=$t(s);let t=s;const i=e.subscribe(r=>t=r);return St(i),{...e,set:r=>{r.uuid!==t.uuid&&e.set(r)}}};function I1(s){let e;const t=s[8].default,i=ni(t,s,s[7],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,[r]){i&&i.p&&(!e||r&128)&&$n(i,t,n,n[7],e?ti(t,n[7],r,null):ei(n[7]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}const D1=s=>{Nr("threlte-parent",s)},F1=()=>ro("threlte-parent");function z1(s,e,t){let i,n,{$$slots:r={},$$scope:o}=e;const a=F1();Mt(s,a,p=>t(6,n=p));let l=n,{object:c}=e;const u=$t(c);Mt(s,u,p=>t(5,i=p));let h=c;D1(u);const{invalidate:f}=ri();return n.add(i),f("HierarchicalObject: object added"),St(()=>{n.remove(i),f("HierarchicalObject: object removed")}),s.$$set=p=>{"object"in p&&t(2,c=p.object),"$$scope"in p&&t(7,o=p.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&fa(u,i=c,i),s.$$.dirty&112&&i!==h&&(h&&n.remove(h),n.add(i),f("HierarchicalObject: object changed"),t(4,h=i)),s.$$.dirty&104&&n!==l&&(l.remove(i),n.add(i),f("HierarchicalObject: parent changed"),t(3,l=n))},[a,u,c,l,h,i,n,o,r]}class U1 extends Vt{constructor(e){super(),Wt(this,e,z1,I1,jt,{object:2})}}function O1(s,e,t){let i,n,{object:r}=e;const o=su(r);Mt(s,o,c=>t(4,n=c));const a=ro("threlte-layers");Mt(s,a,c=>t(3,i=c));const{invalidate:l}=ri();return s.$$set=c=>{"object"in c&&t(2,r=c.object)},s.$$.update=()=>{if(s.$$.dirty&4&&o.set(r),s.$$.dirty&24){if(i==="all")n.layers.enableAll();else if(i==="none")n.layers.disableAll();else if(Array.isArray(i))for(let c=0;c<32;c+=1){const u=c;i.includes(u)?n.layers.enable(c):n.layers.disable(c)}else i!==void 0&&n.layers.set(i);l("LayerableObject")}},[o,a,r,i,n]}class k1 extends Vt{constructor(e){super(),Wt(this,e,O1,null,jt,{object:2})}}const ou=(s,e)=>{var a;if(!Va)return{start:()=>{},stop:()=>{},started:Vp(!1)};const t=ro("threlte-render-context"),i={fn:s,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},n=$t(!1),r=()=>{t.frameHandlers.delete(i),n.set(!1)},o=()=>{t.frameHandlers.add(i),n.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),St(()=>{r()}),{start:o,stop:r,started:{subscribe:n.subscribe}}},cp=()=>{const s=$t(!1);return(async()=>{await xa(),s.set(!0)})(),s};function B1(s,e,t){let i,n,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new O,h=so(),{invalidate:f}=ri(),p=cp();Mt(s,p,x=>t(8,n=x));const g=async()=>{n||await xa(),h("transform")},m=async()=>{f("TransformableObject: transformed"),await g()};Yn(r).onTransform=m;const{start:d,stop:y}=ou(async()=>{c&&!l&&c instanceof Ze&&(c.getWorldPosition(u),r.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),b=su(r);return Mt(s,b,x=>t(7,i=x)),s.$$set=x=>{"object"in x&&t(2,r=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,c=x.lookAt)},s.$$.update=()=>{var x,_,M,w,E,v,S,T,A,L,F,I,W;s.$$.dirty&4&&b.set(r),s.$$.dirty&232&&(o&&(i.position.set((x=o.x)!=null?x:0,(_=o.y)!=null?_:0,(M=o.z)!=null?M:0),m()),c&&!l&&(c instanceof Ze?d():(y(),i.lookAt((w=c.x)!=null?w:0,(E=c.y)!=null?E:0,(v=c.z)!=null?v:0),m())),c||y()),s.$$.dirty&144&&a&&(typeof a=="number"?i.scale.set(a,a,a):i.scale.set((S=a.x)!=null?S:1,(T=a.y)!=null?T:1,(A=a.z)!=null?A:1),m()),s.$$.dirty&160&&l&&(i.rotation.set((L=l.x)!=null?L:0,(F=l.y)!=null?F:0,(I=l.z)!=null?I:0,(W=l.order)!=null?W:"XYZ"),m())},[p,b,r,o,a,l,c,i]}class N1 extends Vt{constructor(e){super(),Wt(this,e,B1,null,jt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function G1(s,e,t){let i,n,r,{object:o}=e,{viewportAware:a=!1}=e;const l=so(),{camera:c,invalidate:u}=ri();Mt(s,c,w=>t(8,r=w));const h=new lo,f=new Fe,p=w=>w.type==="Mesh",g=new O,m=()=>r?(f.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),h.setFromProjectionMatrix(f),p(o)?h.intersectsObject(o):(o.getWorldPosition(g),h.containsPoint(g))):!0,d=cp();Mt(s,d,w=>t(7,n=w));let{inViewport:y=m()}=e;const b=async w=>{w?(n||await xa(),l("viewportenter",o)):(n||await xa(),l("viewportleave",o))},{start:x,stop:_,started:M}=ou(()=>{const w=m();y===void 0?(t(3,y=m()),b(y)):w!==y&&(b(w),t(3,y=w))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Mt(s,M,w=>t(6,i=w)),u("ViewportAwareObject"),s.$$set=w=>{"object"in w&&t(4,o=w.object),"viewportAware"in w&&t(5,a=w.viewportAware),"inViewport"in w&&t(3,y=w.inViewport)},s.$$.update=()=>{s.$$.dirty&96&&(a&&!i?x():!a&&i&&_())},[c,d,M,y,o,a,i]}class H1 extends Vt{constructor(e){super(),Wt(this,e,G1,null,jt,{object:4,viewportAware:5,inViewport:3})}}function V1(s){let e;const t=s[12].default,i=ni(t,s,s[16],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&65536)&&$n(i,t,n,n[16],e?ti(t,n[16],r,null):ei(n[16]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function W1(s){let e,t,i,n,r,o,a,l,c;e=new k1({props:{object:s[1]}}),i=new N1({props:{object:s[1],position:s[2],rotation:s[4],scale:s[3],lookAt:s[5]}}),r=new U1({props:{object:s[1],$$slots:{default:[V1]},$$scope:{ctx:s}}});function u(f){s[13](f)}let h={object:s[1],viewportAware:s[6]};return s[0]!==void 0&&(h.inViewport=s[0]),a=new H1({props:h}),Zn.push(()=>yi(a,"inViewport",u)),a.$on("viewportenter",s[14]),a.$on("viewportleave",s[15]),{c(){$e(e.$$.fragment),t=Jt(),$e(i.$$.fragment),n=Jt(),$e(r.$$.fragment),o=Jt(),$e(a.$$.fragment)},l(f){et(e.$$.fragment,f),t=Qt(f),et(i.$$.fragment,f),n=Qt(f),et(r.$$.fragment,f),o=Qt(f),et(a.$$.fragment,f)},m(f,p){tt(e,f,p),_t(f,t,p),tt(i,f,p),_t(f,n,p),tt(r,f,p),_t(f,o,p),tt(a,f,p),c=!0},p(f,[p]){const g={};p&2&&(g.object=f[1]),e.$set(g);const m={};p&2&&(m.object=f[1]),p&4&&(m.position=f[2]),p&16&&(m.rotation=f[4]),p&8&&(m.scale=f[3]),p&32&&(m.lookAt=f[5]),i.$set(m);const d={};p&2&&(d.object=f[1]),p&65536&&(d.$$scope={dirty:p,ctx:f}),r.$set(d);const y={};p&2&&(y.object=f[1]),p&64&&(y.viewportAware=f[6]),!l&&p&1&&(l=!0,y.inViewport=f[0],xi(()=>l=!1)),a.$set(y)},i(f){c||(Ue(e.$$.fragment,f),Ue(i.$$.fragment,f),Ue(r.$$.fragment,f),Ue(a.$$.fragment,f),c=!0)},o(f){Oe(e.$$.fragment,f),Oe(i.$$.fragment,f),Oe(r.$$.fragment,f),Oe(a.$$.fragment,f),c=!1},d(f){nt(e,f),f&&gt(t),nt(i,f),f&&gt(n),nt(r,f),f&&gt(o),nt(a,f)}}}function j1(s,e,t){let{$$slots:i={},$$scope:n}=e,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e;const{invalidate:y}=ri(),b=()=>r;function x(w){h=w,t(0,h)}function _(w){We.call(this,s,w)}function M(w){We.call(this,s,w)}return s.$$set=w=>{"object"in w&&t(1,r=w.object),"position"in w&&t(2,o=w.position),"scale"in w&&t(3,a=w.scale),"rotation"in w&&t(4,l=w.rotation),"lookAt"in w&&t(5,c=w.lookAt),"viewportAware"in w&&t(6,u=w.viewportAware),"inViewport"in w&&t(0,h=w.inViewport),"castShadow"in w&&t(7,f=w.castShadow),"receiveShadow"in w&&t(8,p=w.receiveShadow),"frustumCulled"in w&&t(9,g=w.frustumCulled),"renderOrder"in w&&t(10,m=w.renderOrder),"visible"in w&&t(11,d=w.visible),"$$scope"in w&&t(16,n=w.$$scope)},s.$$.update=()=>{s.$$.dirty&3968&&(d!==void 0&&(b().visible=d),f!==void 0&&(b().castShadow=f),p!==void 0&&(b().receiveShadow=p),g!==void 0&&(b().frustumCulled=g),m!==void 0&&(b().renderOrder=m),y("Object3DInstance: props changed"))},[h,r,o,a,l,c,u,f,p,g,m,d,i,x,_,M,n]}class au extends Vt{constructor(e){super(),Wt(this,e,j1,W1,jt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11})}}function X1(s){let e;const t=s[15].default,i=ni(t,s,s[19],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&524288)&&$n(i,t,n,n[19],e?ti(t,n[19],r,null):ei(n[19]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function q1(s){let e,t,i;function n(o){s[16](o)}let r={object:s[1],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],$$slots:{default:[X1]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new au({props:r}),Zn.push(()=>yi(e,"inViewport",n)),e.$on("viewportenter",s[17]),e.$on("viewportleave",s[18]),{c(){$e(e.$$.fragment)},l(o){et(e.$$.fragment,o)},m(o,a){tt(e,o,a),i=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&524288&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],xi(()=>t=!1)),e.$set(l)},i(o){i||(Ue(e.$$.fragment,o),i=!0)},o(o){Oe(e.$$.fragment,o),i=!1},d(o){nt(e,o)}}}function Y1(s,e,t){let i,{$$slots:n={},$$scope:r}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:f=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:d=void 0}=e,{visible:y=void 0}=e,{useCamera:b=!1}=e;const x=su(o);Mt(s,x,v=>t(14,i=v));const{setCamera:_}=lp();function M(v){f=v,t(0,f)}function w(v){We.call(this,s,v)}function E(v){We.call(this,s,v)}return s.$$set=v=>{"camera"in v&&t(1,o=v.camera),"position"in v&&t(2,a=v.position),"scale"in v&&t(3,l=v.scale),"rotation"in v&&t(4,c=v.rotation),"lookAt"in v&&t(5,u=v.lookAt),"viewportAware"in v&&t(6,h=v.viewportAware),"inViewport"in v&&t(0,f=v.inViewport),"castShadow"in v&&t(7,p=v.castShadow),"receiveShadow"in v&&t(8,g=v.receiveShadow),"frustumCulled"in v&&t(9,m=v.frustumCulled),"renderOrder"in v&&t(10,d=v.renderOrder),"visible"in v&&t(11,y=v.visible),"useCamera"in v&&t(13,b=v.useCamera),"$$scope"in v&&t(19,r=v.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&x.set(o),s.$$.dirty&24576&&b&&_(i)},[f,o,a,l,c,u,h,p,g,m,d,y,x,b,i,n,M,w,E,r]}class K1 extends Vt{constructor(e){super(),Wt(this,e,Y1,q1,jt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,useCamera:13})}}function Z1(s){let e;const t=s[18].default,i=ni(t,s,s[22],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&4194304)&&$n(i,t,n,n[22],e?ti(t,n[22],r,null):ei(n[22]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function J1(s){let e,t,i;function n(o){s[19](o)}let r={camera:s[0],position:s[2],scale:s[3],rotation:s[4],castShadow:s[6],receiveShadow:s[7],frustumCulled:s[8],renderOrder:s[9],visible:s[10],viewportAware:s[11],lookAt:s[5],useCamera:s[12],$$slots:{default:[Z1]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.inViewport=s[1]),e=new K1({props:r}),Zn.push(()=>yi(e,"inViewport",n)),e.$on("viewportenter",s[20]),e.$on("viewportleave",s[21]),{c(){$e(e.$$.fragment)},l(o){et(e.$$.fragment,o)},m(o,a){tt(e,o,a),i=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.viewportAware=o[11]),a&32&&(l.lookAt=o[5]),a&4096&&(l.useCamera=o[12]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],xi(()=>t=!1)),e.$set(l)},i(o){i||(Ue(e.$$.fragment,o),i=!0)},o(o){Oe(e.$$.fragment,o),i=!1},d(o){nt(e,o)}}}function Q1(s,e,t){let i,{$$slots:n={},$$scope:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:p=void 0}=e,{visible:g=void 0}=e,{viewportAware:m=!1}=e,{inViewport:d=!1}=e,{useCamera:y=!0}=e,{near:b=void 0}=e,{far:x=void 0}=e,{fov:_=void 0}=e;const{size:M,invalidate:w}=ri();Mt(s,M,A=>t(17,i=A));const E=new en(_,i.width/i.height,b,x);function v(A){d=A,t(1,d)}function S(A){We.call(this,s,A)}function T(A){We.call(this,s,A)}return s.$$set=A=>{"position"in A&&t(2,o=A.position),"scale"in A&&t(3,a=A.scale),"rotation"in A&&t(4,l=A.rotation),"lookAt"in A&&t(5,c=A.lookAt),"castShadow"in A&&t(6,u=A.castShadow),"receiveShadow"in A&&t(7,h=A.receiveShadow),"frustumCulled"in A&&t(8,f=A.frustumCulled),"renderOrder"in A&&t(9,p=A.renderOrder),"visible"in A&&t(10,g=A.visible),"viewportAware"in A&&t(11,m=A.viewportAware),"inViewport"in A&&t(1,d=A.inViewport),"useCamera"in A&&t(12,y=A.useCamera),"near"in A&&t(14,b=A.near),"far"in A&&t(15,x=A.far),"fov"in A&&t(16,_=A.fov),"$$scope"in A&&t(22,r=A.$$scope)},s.$$.update=()=>{s.$$.dirty&131073&&(t(0,E.aspect=i.width/i.height,E),E.updateProjectionMatrix(),w("PerspectiveCamera: aspect changed")),s.$$.dirty&114689&&(b!==void 0&&t(0,E.near=b,E),x!==void 0&&t(0,E.far=x,E),_!==void 0&&t(0,E.fov=_,E),E.updateProjectionMatrix(),w("PerspectiveCamera: props changed"))},[E,d,o,a,l,c,u,h,f,p,g,m,y,M,b,x,_,i,n,v,S,T,r]}class $1 extends Vt{constructor(e){super(),Wt(this,e,Q1,J1,jt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,viewportAware:11,inViewport:1,useCamera:12,near:14,far:15,fov:16,camera:0})}get camera(){return this.$$.ctx[0]}}const _f=[],eb=(s,e)=>{const t=_f.find(n=>n instanceof s);if(t)return t;const i=e();return _f.push(i),i};const Qi=new tp,hn=new O,ki=new O,pt=new dt,yf={X:new O(1,0,0),Y:new O(0,1,0),Z:new O(0,0,1)},Hl={type:"change"},xf={type:"mouseDown"},bf={type:"mouseUp",mode:null},wf={type:"objectChange"};class tb extends Ze{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const i=new up;this._gizmo=i,this.add(i);const n=new hp;this._plane=n,this.add(n);const r=this;function o(b,x){let _=x;Object.defineProperty(r,b,{get:function(){return _!==void 0?_:x},set:function(M){_!==M&&(_=M,n[b]=M,i[b]=M,r.dispatchEvent({type:b+"-changed",value:M}),r.dispatchEvent(Hl))}}),r[b]=x,n[b]=x,i[b]=x}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new O,l=new O,c=new dt,u=new dt,h=new O,f=new dt,p=new O,g=new O,m=new O,d=0,y=new O;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",h),o("cameraQuaternion",f),o("pointStart",p),o("pointEnd",g),o("rotationAxis",m),o("rotationAngle",d),o("eye",y),this._offset=new O,this._startNorm=new O,this._endNorm=new O,this._cameraScale=new O,this._parentPosition=new O,this._parentQuaternion=new dt,this._parentQuaternionInv=new dt,this._parentScale=new O,this._worldScaleStart=new O,this._worldQuaternionInv=new dt,this._worldScale=new O,this._positionStart=new O,this._quaternionStart=new dt,this._scaleStart=new O,this._getPointer=nb.bind(this),this._onPointerDown=rb.bind(this),this._onPointerHover=ib.bind(this),this._onPointerMove=sb.bind(this),this._onPointerUp=ob.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Qi.setFromCamera(e,this.camera);const t=Vl(this._gizmo.picker[this.mode],Qi);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Qi.setFromCamera(e,this.camera);const t=Vl(this._plane,Qi,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,xf.mode=this.mode,this.dispatchEvent(xf)}}pointerMove(e){const t=this.axis,i=this.mode,n=this.object;let r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),n===void 0||t===null||this.dragging===!1||e.button!==-1)return;Qi.setFromCamera(e,this.camera);const o=Vl(this._plane,Qi,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),n.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(n.position.applyQuaternion(pt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.position.applyQuaternion(this._quaternionStart)),r==="world"&&(n.parent&&n.position.add(hn.setFromMatrixPosition(n.parent.matrixWorld)),t.search("X")!==-1&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.parent&&n.position.sub(hn.setFromMatrixPosition(n.parent.matrixWorld))));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ki.set(a,a,a)}else hn.copy(this.pointStart),ki.copy(this.pointEnd),hn.applyQuaternion(this._worldQuaternionInv),ki.applyQuaternion(this._worldQuaternionInv),ki.divide(hn),t.search("X")===-1&&(ki.x=1),t.search("Y")===-1&&(ki.y=1),t.search("Z")===-1&&(ki.z=1);n.scale.copy(this._scaleStart).multiply(ki),this.scaleSnap&&(t.search("X")!==-1&&(n.scale.x=Math.round(n.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(n.scale.y=Math.round(n.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(n.scale.z=Math.round(n.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(hn.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(hn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(yf[t]),hn.copy(yf[t]),r==="local"&&hn.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(hn.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(n.quaternion.copy(this._quaternionStart),n.quaternion.multiply(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),n.quaternion.copy(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),n.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Hl),this.dispatchEvent(wf)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(bf.mode=this.mode,this.dispatchEvent(bf)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Hl),this.dispatchEvent(wf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Qi}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}update(){console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}}tb.prototype.isTransformControls=!0;function nb(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function ib(s){if(!!this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function rb(s){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function sb(s){!this.enabled||this.pointerMove(this._getPointer(s))}function ob(s){!this.enabled||(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Vl(s,e,t){const i=e.intersectObject(s,!0);for(let n=0;n<i.length;n++)if(i[n].object.visible||t)return i[n];return!1}const ra=new Xi,ct=new O(0,1,0),Sf=new O(0,0,0),Mf=new Fe,sa=new dt,_a=new dt,Wn=new O,Tf=new Fe,Bs=new O(1,0,0),tr=new O(0,1,0),Ns=new O(0,0,1),oa=new O,Ds=new O,Fs=new O;class up extends Ze{constructor(){super(),this.type="TransformControlsGizmo";const e=new qi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new pr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const n=t.clone();n.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const m=new Kt(0,.04,.1,12);m.translate(0,.05,0);const d=new bt(.08,.08,.08);d.translate(0,.04,0);const y=new Qe;y.setAttribute("position",new Ve([0,0,0,1,0,0],3));const b=new Kt(.0075,.0075,.5,3);b.translate(0,.25,0);function x(W,U){const H=new ir(W,.0075,3,64,U*Math.PI*2);return H.rotateY(Math.PI/2),H.rotateX(Math.PI/2),H}function _(){const W=new Qe;return W.setAttribute("position",new Ve([0,0,0,1,1,1],3)),W}const M={X:[[new Ee(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(m,r),[-.5,0,0],[0,0,Math.PI/2]],[new Ee(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ee(m,o),[0,.5,0]],[new Ee(m,o),[0,-.5,0],[Math.PI,0,0]],[new Ee(b,o)]],Z:[[new Ee(m,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(m,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ee(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ee(new Xr(.1,0),h.clone()),[0,0,0]]],XY:[[new Ee(new bt(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new Ee(new bt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new bt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new Ee(new Kt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new Kt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new Kt(.2,0,.6,4),i),[0,.3,0]],[new Ee(new Kt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new Kt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new Kt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new Xr(.2,0),i)]],XY:[[new Ee(new bt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new bt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new bt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},E={START:[[new Ee(new Xr(.01,2),n),null,null,null,"helper"]],END:[[new Ee(new Xr(.01,2),n),null,null,null,"helper"]],DELTA:[[new Un(_(),n),null,null,null,"helper"]],X:[[new Un(y,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Un(y,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Un(y,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},v={XYZE:[[new Ee(x(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new Ee(x(.5,.5),r)]],Y:[[new Ee(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ee(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ee(x(.75,1),f),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Un(y,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},T={XYZE:[[new Ee(new Na(.25,10,8),i)]],X:[[new Ee(new ir(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ee(new ir(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ee(new ir(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ee(new ir(.75,.1,2,24),i)]]},A={X:[[new Ee(d,r),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(b,r),[0,0,0],[0,0,-Math.PI/2]],[new Ee(d,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(d,o),[0,.5,0]],[new Ee(b,o)],[new Ee(d,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ee(d,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(b,a),[0,0,0],[Math.PI/2,0,0]],[new Ee(d,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ee(new bt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new Ee(new bt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new bt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new bt(.1,.1,.1),h.clone())]]},L={X:[[new Ee(new Kt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new Kt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new Kt(.2,0,.6,4),i),[0,.3,0]],[new Ee(new Kt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new Kt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new Kt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ee(new bt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new bt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new bt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new bt(.2,.2,.2),i),[0,0,0]]]},F={X:[[new Un(y,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Un(y,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Un(y,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(W){const U=new Ze;for(const H in W)for(let J=W[H].length;J--;){const D=W[H][J][0].clone(),X=W[H][J][1],V=W[H][J][2],Y=W[H][J][3],ee=W[H][J][4];D.name=H,D.tag=ee,X&&D.position.set(X[0],X[1],X[2]),V&&D.rotation.set(V[0],V[1],V[2]),Y&&D.scale.set(Y[0],Y[1],Y[2]),D.updateMatrix();const re=D.geometry.clone();re.applyMatrix4(D.matrix),D.geometry=re,D.renderOrder=1/0,D.position.set(0,0,0),D.rotation.set(0,0,0),D.scale.set(1,1,1),U.add(D)}return U}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(M)),this.add(this.gizmo.rotate=I(v)),this.add(this.gizmo.scale=I(A)),this.add(this.picker.translate=I(w)),this.add(this.picker.rotate=I(T)),this.add(this.picker.scale=I(L)),this.add(this.helper.translate=I(E)),this.add(this.helper.rotate=I(S)),this.add(this.helper.scale=I(F)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:_a;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let n=[];n=n.concat(this.picker[this.mode].children),n=n.concat(this.gizmo[this.mode].children),n=n.concat(this.helper[this.mode].children);for(let r=0;r<n.length;r++){const o=n[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.position.copy(this.worldPositionStart),o.visible=!!this.axis,this.axis==="X"&&(pt.setFromEuler(ra.set(0,0,0)),o.quaternion.copy(i).multiply(pt),Math.abs(ct.copy(Bs).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(pt.setFromEuler(ra.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(pt),Math.abs(ct.copy(tr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(pt.setFromEuler(ra.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(pt),Math.abs(ct.copy(Ns).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(pt.setFromEuler(ra.set(0,Math.PI/2,0)),ct.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Mf.lookAt(Sf,ct,tr)),o.quaternion.multiply(pt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),hn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),hn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(hn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ct.copy(Bs).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ct.copy(tr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ct.copy(Ns).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ct.copy(Ns).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ct.copy(Bs).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ct.copy(tr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(sa.copy(i),ct.copy(this.eye).applyQuaternion(pt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Mf.lookAt(this.eye,Sf,tr)),o.name==="X"&&(pt.setFromAxisAngle(Bs,Math.atan2(-ct.y,ct.z)),pt.multiplyQuaternions(sa,pt),o.quaternion.copy(pt)),o.name==="Y"&&(pt.setFromAxisAngle(tr,Math.atan2(ct.x,ct.z)),pt.multiplyQuaternions(sa,pt),o.quaternion.copy(pt)),o.name==="Z"&&(pt.setFromAxisAngle(Ns,Math.atan2(ct.y,ct.x)),pt.multiplyQuaternions(sa,pt),o.quaternion.copy(pt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}up.prototype.isTransformControlsGizmo=!0;class hp extends Ee{constructor(){super(new ur(1e5,1e5,2,2),new qi({visible:!1,wireframe:!0,side:bi,transparent:!0,opacity:.1,toneMapped:!1})),this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),oa.copy(Bs).applyQuaternion(t==="local"?this.worldQuaternion:_a),Ds.copy(tr).applyQuaternion(t==="local"?this.worldQuaternion:_a),Fs.copy(Ns).applyQuaternion(t==="local"?this.worldQuaternion:_a),ct.copy(Ds),this.mode){case"translate":case"scale":switch(this.axis){case"X":ct.copy(this.eye).cross(oa),Wn.copy(oa).cross(ct);break;case"Y":ct.copy(this.eye).cross(Ds),Wn.copy(Ds).cross(ct);break;case"Z":ct.copy(this.eye).cross(Fs),Wn.copy(Fs).cross(ct);break;case"XY":Wn.copy(Fs);break;case"YZ":Wn.copy(oa);break;case"XZ":ct.copy(Fs),Wn.copy(Ds);break;case"XYZ":case"E":Wn.set(0,0,0);break}break;case"rotate":default:Wn.set(0,0,0)}Wn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Tf.lookAt(hn.set(0,0,0),Wn,ct),this.quaternion.setFromRotationMatrix(Tf)),super.updateMatrixWorld(e)}}hp.prototype.isTransformControlsPlane=!0;function ab(s,e,t){let{object:i}=e,n=i,{interactive:r=!1}=e,{ignorePointer:o=!1}=e;const a=so(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:h}=lp(),{invalidate:f}=ri(),p=m=>{h(m),c(m),delete Yn(m).eventDispatcher},g=(m,d,y)=>{Yn(m).eventDispatcher=a,d?(h(m),c(m)):(u(m),y?l(m):c(m))};return St(()=>{p(i),f("InteractiveObject: object removed")}),s.$$set=m=>{"object"in m&&t(0,i=m.object),"interactive"in m&&t(1,r=m.interactive),"ignorePointer"in m&&t(2,o=m.ignorePointer)},s.$$.update=()=>{s.$$.dirty&15&&(i!==n?(p(n),g(i,o,r),f("InteractiveObject: object changed"),t(3,n=i)):i===n&&(g(i,o,r),f("InteractiveObject: props changed")))},[i,r,o,n]}class lb extends Vt{constructor(e){super(),Wt(this,e,ab,null,jt,{object:0,interactive:1,ignorePointer:2})}}function cb(s){let e;const t=s[14].default,i=ni(t,s,s[25],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&33554432)&&$n(i,t,n,n[25],e?ti(t,n[25],r,null):ei(n[25]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function ub(s){let e,t,i,n,r;function o(l){s[15](l)}let a={object:s[1],lookAt:s[5],position:s[2],scale:s[3],rotation:s[4],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],visible:s[11],viewportAware:s[6],$$slots:{default:[cb]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),e=new au({props:a}),Zn.push(()=>yi(e,"inViewport",o)),e.$on("viewportenter",s[16]),e.$on("viewportleave",s[17]),n=new lb({props:{object:s[1],interactive:s[12],ignorePointer:s[13]}}),n.$on("click",s[18]),n.$on("contextmenu",s[19]),n.$on("pointerup",s[20]),n.$on("pointerdown",s[21]),n.$on("pointerenter",s[22]),n.$on("pointerleave",s[23]),n.$on("pointermove",s[24]),{c(){$e(e.$$.fragment),i=Jt(),$e(n.$$.fragment)},l(l){et(e.$$.fragment,l),i=Qt(l),et(n.$$.fragment,l)},m(l,c){tt(e,l,c),_t(l,i,c),tt(n,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&64&&(u.viewportAware=l[6]),c&33554432&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],xi(()=>t=!1)),e.$set(u);const h={};c&2&&(h.object=l[1]),c&4096&&(h.interactive=l[12]),c&8192&&(h.ignorePointer=l[13]),n.$set(h)},i(l){r||(Ue(e.$$.fragment,l),Ue(n.$$.fragment,l),r=!0)},o(l){Oe(e.$$.fragment,l),Oe(n.$$.fragment,l),r=!1},d(l){nt(e,l),l&&gt(i),nt(n,l)}}}function hb(s,e,t){let{$$slots:i={},$$scope:n}=e,{mesh:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e,{interactive:y=!1}=e,{ignorePointer:b=!1}=e;function x(F){h=F,t(0,h)}function _(F){We.call(this,s,F)}function M(F){We.call(this,s,F)}function w(F){We.call(this,s,F)}function E(F){We.call(this,s,F)}function v(F){We.call(this,s,F)}function S(F){We.call(this,s,F)}function T(F){We.call(this,s,F)}function A(F){We.call(this,s,F)}function L(F){We.call(this,s,F)}return s.$$set=F=>{"mesh"in F&&t(1,r=F.mesh),"position"in F&&t(2,o=F.position),"scale"in F&&t(3,a=F.scale),"rotation"in F&&t(4,l=F.rotation),"lookAt"in F&&t(5,c=F.lookAt),"viewportAware"in F&&t(6,u=F.viewportAware),"inViewport"in F&&t(0,h=F.inViewport),"castShadow"in F&&t(7,f=F.castShadow),"receiveShadow"in F&&t(8,p=F.receiveShadow),"frustumCulled"in F&&t(9,g=F.frustumCulled),"renderOrder"in F&&t(10,m=F.renderOrder),"visible"in F&&t(11,d=F.visible),"interactive"in F&&t(12,y=F.interactive),"ignorePointer"in F&&t(13,b=F.ignorePointer),"$$scope"in F&&t(25,n=F.$$scope)},[h,r,o,a,l,c,u,f,p,g,m,d,y,b,i,x,_,M,w,E,v,S,T,A,L,n]}class fp extends Vt{constructor(e){super(),Wt(this,e,hb,ub,jt,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,interactive:12,ignorePointer:13})}}function fb(s){let e;const t=s[18].default,i=ni(t,s,s[29],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r[0]&536870912)&&$n(i,t,n,n[29],e?ti(t,n[29],r,null):ei(n[29]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function db(s){let e,t,i;function n(o){s[19](o)}let r={mesh:s[13],position:s[1],scale:s[2],rotation:s[3],lookAt:s[12],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],interactive:s[10],ignorePointer:s[11],viewportAware:s[4],$$slots:{default:[fb]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new fp({props:r}),Zn.push(()=>yi(e,"inViewport",n)),e.$on("click",s[20]),e.$on("contextmenu",s[21]),e.$on("pointerup",s[22]),e.$on("pointerdown",s[23]),e.$on("pointerenter",s[24]),e.$on("pointerleave",s[25]),e.$on("pointermove",s[26]),e.$on("viewportenter",s[27]),e.$on("viewportleave",s[28]),{c(){$e(e.$$.fragment)},l(o){et(e.$$.fragment,o)},m(o,a){tt(e,o,a),i=!0},p(o,a){const l={};a[0]&2&&(l.position=o[1]),a[0]&4&&(l.scale=o[2]),a[0]&8&&(l.rotation=o[3]),a[0]&4096&&(l.lookAt=o[12]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.frustumCulled=o[7]),a[0]&256&&(l.renderOrder=o[8]),a[0]&512&&(l.visible=o[9]),a[0]&1024&&(l.interactive=o[10]),a[0]&2048&&(l.ignorePointer=o[11]),a[0]&16&&(l.viewportAware=o[4]),a[0]&536870912&&(l.$$scope={dirty:a,ctx:o}),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],xi(()=>t=!1)),e.$set(l)},i(o){i||(Ue(e.$$.fragment,o),i=!0)},o(o){Oe(e.$$.fragment,o),i=!1},d(o){nt(e,o)}}}function pb(s,e,t){let{$$slots:i={},$$scope:n}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:p=void 0}=e,{visible:g=void 0}=e,{interactive:m=!1}=e,{ignorePointer:d=!1}=e,{lookAt:y=void 0}=e,{geometry:b}=e,{material:x}=e,_=x,M=b;const{invalidate:w}=ri(),E=new Ee(b,x),v=()=>E;function S(D){c=D,t(0,c)}function T(D){We.call(this,s,D)}function A(D){We.call(this,s,D)}function L(D){We.call(this,s,D)}function F(D){We.call(this,s,D)}function I(D){We.call(this,s,D)}function W(D){We.call(this,s,D)}function U(D){We.call(this,s,D)}function H(D){We.call(this,s,D)}function J(D){We.call(this,s,D)}return s.$$set=D=>{"position"in D&&t(1,r=D.position),"scale"in D&&t(2,o=D.scale),"rotation"in D&&t(3,a=D.rotation),"viewportAware"in D&&t(4,l=D.viewportAware),"inViewport"in D&&t(0,c=D.inViewport),"castShadow"in D&&t(5,u=D.castShadow),"receiveShadow"in D&&t(6,h=D.receiveShadow),"frustumCulled"in D&&t(7,f=D.frustumCulled),"renderOrder"in D&&t(8,p=D.renderOrder),"visible"in D&&t(9,g=D.visible),"interactive"in D&&t(10,m=D.interactive),"ignorePointer"in D&&t(11,d=D.ignorePointer),"lookAt"in D&&t(12,y=D.lookAt),"geometry"in D&&t(14,b=D.geometry),"material"in D&&t(15,x=D.material),"$$scope"in D&&t(29,n=D.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&98304&&(x!==_?(v().material=x,w("Mesh: material changed")):w("Mesh: material props changed"),t(16,_=x)),s.$$.dirty[0]&147456&&(b!==M?(v().geometry=b,w("Mesh: geometry changed")):w("Mesh: geometry props changed"),t(17,M=b))},[c,r,o,a,l,u,h,f,p,g,m,d,y,E,b,x,_,M,i,S,T,A,L,F,I,W,U,H,J,n]}class mb extends Vt{constructor(e){super(),Wt(this,e,pb,db,jt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,interactive:10,ignorePointer:11,lookAt:12,geometry:14,material:15,mesh:13},null,[-1,-1])}get mesh(){return this.$$.ctx[13]}}const dp=new Ze;dp.scale.set(0,0,0);dp.matrix;new Fe().fromArray(new Array(16).fill(0));new Ae(16777215);function gb(s){let e;const t=s[12].default,i=ni(t,s,s[16],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&65536)&&$n(i,t,n,n[16],e?ti(t,n[16],r,null):ei(n[16]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function vb(s){let e,t,i;function n(o){s[13](o)}let r={object:s[11],position:s[1],scale:s[2],rotation:s[3],lookAt:s[4],frustumCulled:s[8],renderOrder:s[9],visible:s[10],castShadow:s[6],receiveShadow:s[7],viewportAware:s[5],$$slots:{default:[gb]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new au({props:r}),Zn.push(()=>yi(e,"inViewport",n)),e.$on("viewportenter",s[14]),e.$on("viewportleave",s[15]),{c(){$e(e.$$.fragment)},l(o){et(e.$$.fragment,o)},m(o,a){tt(e,o,a),i=!0},p(o,[a]){const l={};a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&16&&(l.lookAt=o[4]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&32&&(l.viewportAware=o[5]),a&65536&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],xi(()=>t=!1)),e.$set(l)},i(o){i||(Ue(e.$$.fragment,o),i=!0)},o(o){Oe(e.$$.fragment,o),i=!1},d(o){nt(e,o)}}}function _b(s,e,t){let{$$slots:i={},$$scope:n}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:g=void 0}=e,{visible:m=void 0}=e;const d=new Wr;function y(_){u=_,t(0,u)}function b(_){We.call(this,s,_)}function x(_){We.call(this,s,_)}return s.$$set=_=>{"position"in _&&t(1,r=_.position),"scale"in _&&t(2,o=_.scale),"rotation"in _&&t(3,a=_.rotation),"lookAt"in _&&t(4,l=_.lookAt),"viewportAware"in _&&t(5,c=_.viewportAware),"inViewport"in _&&t(0,u=_.inViewport),"castShadow"in _&&t(6,h=_.castShadow),"receiveShadow"in _&&t(7,f=_.receiveShadow),"frustumCulled"in _&&t(8,p=_.frustumCulled),"renderOrder"in _&&t(9,g=_.renderOrder),"visible"in _&&t(10,m=_.visible),"$$scope"in _&&t(16,n=_.$$scope)},[u,r,o,a,l,c,h,f,p,g,m,d,i,y,b,x,n]}class lu extends Vt{constructor(e){super(),Wt(this,e,_b,vb,jt,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,group:11})}get group(){return this.$$.ctx[11]}}class io extends wi{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[r+o];return t}}io.prototype.beforeStart_=io.prototype.copySampleValue_;io.prototype.afterEnd_=io.prototype.copySampleValue_;io.prototype.interpolate_=function(s,e,t,i){const n=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=i-e,u=(t-e)/c,h=u*u,f=h*u,p=s*l,g=p-l,m=-2*f+3*h,d=f-h,y=1-m,b=d-h+u;for(let x=0;x!==o;x++){const _=r[g+x+o],M=r[g+x+a]*c,w=r[p+x+o],E=r[p+x]*c;n[x]=y*_+b*M+m*w+d*E}return n};const PS=new dt;class yb{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:n,msg:r,transfer:o}=this.queue.shift();this.workersResolve[e]=n,this.workers[e].postMessage(r,o)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const n=this._getIdleWorker();n!==-1?(this._initWorker(n),this.workerStatus|=1<<n,this.workersResolve[n]=i,this.workers[n].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const xb=2,bb=1,Wl=new WeakMap;let jl=0;class _i extends Ti{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new yb,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER!="undefined"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new va(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new va(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const n=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,n]).then(([r,o])=>{const a=_i.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(_i.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(_i.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(_i.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),c})}),jl>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),jl++}return this.transcoderPending}load(e,t,i,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new va(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials);const o=new pc;return r.load(e,a=>{if(Wl.has(a))return Wl.get(a).promise.then(t).catch(n);this._createTexture([a]).then(function(l){o.copy(l),o.needsUpdate=!0,t&&t(o)}).catch(n)},i,n),o}_createTextureFrom(e){const{mipmaps:t,width:i,height:n,format:r,type:o,error:a,dfdTransferFn:l,dfdFlags:c}=e;if(o==="error")return Promise.reject(a);const u=new pc(t,i,n,r,Wi);return u.minFilter=t.length===1?Ft:oo,u.magFilter=Ft,u.generateMipmaps=!1,u.needsUpdate=!0,u.encoding=l===xb?ft:Jn,u.premultiplyAlpha=!!(c&bb),u}_createTexture(e,t={}){const i=t,n=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffers:e,taskConfig:i},e)).then(r=>this._createTextureFrom(r.data));return Wl.set(e[0],{promise:n}),n}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),jl--,this}}_i.BasisFormat={ETC1S:0,UASTC_4x4:1};_i.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};_i.EngineFormat={RGBAFormat:Mn,RGBA_ASTC_4x4_Format:lc,RGBA_BPTC_Format:cc,RGBA_ETC2_EAC_Format:ac,RGBA_PVRTC_4BPPV1_Format:sc,RGBA_S3TC_DXT5_Format:ma,RGB_ETC1_Format:pd,RGB_ETC2_Format:oc,RGB_PVRTC_4BPPV1_Format:rc,RGB_S3TC_DXT1_Format:pa};_i.BasisWorker=function(){let s,e,t;const i=_EngineFormat,n=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(p){const g=p.data;switch(g.type){case"init":s=g.config,o(g.transcoderBinary);break;case"transcode":e.then(()=>{try{const{width:m,height:d,hasAlpha:y,mipmaps:b,format:x,dfdTransferFn:_,dfdFlags:M}=a(g.buffers[0]),w=[];for(let E=0;E<b.length;++E)w.push(b[E].data.buffer);self.postMessage({type:"transcode",id:g.id,width:m,height:d,hasAlpha:y,mipmaps:b,format:x,dfdTransferFn:_,dfdFlags:M},w)}catch(m){console.error(m),self.postMessage({type:"error",id:g.id,error:m.message})}});break}});function o(p){e=new Promise(g=>{t={wasmBinary:p,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function a(p){const g=new t.KTX2File(new Uint8Array(p));function m(){g.close(),g.delete()}if(!g.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const d=g.isUASTC()?r.UASTC_4x4:r.ETC1S,y=g.getWidth(),b=g.getHeight(),x=g.getLevels(),_=g.getHasAlpha(),M=g.getDFDTransferFunc(),w=g.getDFDFlags(),{transcoderFormat:E,engineFormat:v}=h(d,y,b,_);if(!y||!b||!x)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");const S=[];for(let T=0;T<x;T++){const A=g.getImageLevelInfo(T,0,0),L=A.origWidth,F=A.origHeight,I=new Uint8Array(g.getImageTranscodedSizeInBytes(T,0,0,E));if(!g.transcodeImage(I,T,0,0,E,0,-1,-1))throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");S.push({data:I,width:L,height:F})}return m(),{width:y,height:b,hasAlpha:_,mipmaps:S,format:v,dfdTransferFn:M,dfdFlags:w}}const l=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[n.ASTC_4x4,n.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.BC7_M5,n.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.BC1,n.BC3],engineFormat:[i.RGB_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.ETC1,n.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.ETC1],engineFormat:[i.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.PVRTC1_4_RGB,n.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(p,g){return p.priorityETC1S-g.priorityETC1S}),u=l.sort(function(p,g){return p.priorityUASTC-g.priorityUASTC});function h(p,g,m,d){let y,b;const x=p===r.ETC1S?c:u;for(let _=0;_<x.length;_++){const M=x[_];if(!!s[M.if]&&!!M.basisFormat.includes(p)&&!(d&&M.transcoderFormat.length<2)&&!(M.needsPowerOfTwo&&!(f(g)&&f(m))))return y=M.transcoderFormat[d?1:0],b=M.engineFormat[d?1:0],{transcoderFormat:y,engineFormat:b}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),y=n.RGBA32,b=i.RGBAFormat,{transcoderFormat:y,engineFormat:b}}function f(p){return p<=2?!0:(p&p-1)===0&&p!==0}};const Ef=new an,aa=new O;class cu extends tu{constructor(){super(),this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ve(e,3)),this.setAttribute("uv",new Ve(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new La(t,6,1);return this.setAttribute("instanceStart",new kn(i,3,0)),this.setAttribute("instanceEnd",new kn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new La(t,6,1);return this.setAttribute("instanceColorStart",new kn(i,3,0)),this.setAttribute("instanceColorEnd",new kn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Cx(e.geometry)),this}fromLineSegments(e){const t=e.geometry;if(t.isGeometry){console.error("THREE.LineSegmentsGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.");return}else t.isBufferGeometry&&this.setPositions(t.attributes.position.array);return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ef.setFromBufferAttribute(t),this.boundingBox.union(Ef))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)aa.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(aa)),aa.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(aa));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}cu.prototype.isLineSegmentsGeometry=!0;class pp extends cu{constructor(){super(),this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;if(t.isGeometry){console.error("THREE.LineGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.");return}else t.isBufferGeometry&&this.setPositions(t.attributes.position.array);return this}}pp.prototype.isLineGeometry=!0;Te.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};fn.line={uniforms:ao.merge([Te.common,Te.fog,Te.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class uu extends pn{constructor(e){super({type:"LineMaterial",uniforms:ao.clone(fn.line.uniforms),vertexShader:fn.line.vertexShader,fragmentShader:fn.line.fragmentShader,clipping:!0}),Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}uu.prototype.isLineMaterial=!0;const Af=new O,Cf=new O,kt=new Ge,Bt=new Ge,jn=new Ge,Xl=new O,ql=new Fe,Zt=new np,Lf=new O,la=new an,ca=new Mi,Xn=new Ge;let qn,xc,mp,cr;function Rf(s,e,t){return Xn.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Xn.multiplyScalar(1/Xn.w),Xn.x=cr/t.width,Xn.y=cr/t.height,Xn.applyMatrix4(s.projectionMatrixInverse),Xn.multiplyScalar(1/Xn.w),Math.abs(Math.max(Xn.x,Xn.y))}function wb(s,e){for(let t=0,i=xc.count;t<i;t++){Zt.start.fromBufferAttribute(xc,t),Zt.end.fromBufferAttribute(mp,t);const n=new O,r=new O;qn.distanceSqToSegment(Zt.start,Zt.end,r,n),r.distanceTo(n)<cr*.5&&e.push({point:r,pointOnLine:n,distance:qn.origin.distanceTo(r),object:s,face:null,faceIndex:t,uv:null,uv2:null})}}function Sb(s,e,t){const i=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=-e.near;qn.at(1,jn),jn.w=1,jn.applyMatrix4(e.matrixWorldInverse),jn.applyMatrix4(i),jn.multiplyScalar(1/jn.w),jn.x*=r.x/2,jn.y*=r.y/2,jn.z=0,Xl.copy(jn),ql.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,f=l.count;h<f;h++){if(kt.fromBufferAttribute(l,h),Bt.fromBufferAttribute(c,h),kt.w=1,Bt.w=1,kt.applyMatrix4(ql),Bt.applyMatrix4(ql),kt.z>u&&Bt.z>u)continue;if(kt.z>u){const b=kt.z-Bt.z,x=(kt.z-u)/b;kt.lerp(Bt,x)}else if(Bt.z>u){const b=Bt.z-kt.z,x=(Bt.z-u)/b;Bt.lerp(kt,x)}kt.applyMatrix4(i),Bt.applyMatrix4(i),kt.multiplyScalar(1/kt.w),Bt.multiplyScalar(1/Bt.w),kt.x*=r.x/2,kt.y*=r.y/2,Bt.x*=r.x/2,Bt.y*=r.y/2,Zt.start.copy(kt),Zt.start.z=0,Zt.end.copy(Bt),Zt.end.z=0;const g=Zt.closestPointToPointParameter(Xl,!0);Zt.at(g,Lf);const m=Ic.lerp(kt.z,Bt.z,g),d=m>=-1&&m<=1,y=Xl.distanceTo(Lf)<cr*.5;if(d&&y){Zt.start.fromBufferAttribute(l,h),Zt.end.fromBufferAttribute(c,h),Zt.start.applyMatrix4(o),Zt.end.applyMatrix4(o);const b=new O,x=new O;qn.distanceSqToSegment(Zt.start,Zt.end,x,b),t.push({point:x,pointOnLine:b,distance:qn.origin.distanceTo(x),object:s,face:null,faceIndex:h,uv:null,uv2:null})}}}class gp extends Ee{constructor(e=new cu,t=new uu({color:Math.random()*16777215})){super(e,t),this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Af.fromBufferAttribute(t,o),Cf.fromBufferAttribute(i,o),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Af.distanceTo(Cf);const r=new La(n,2,1);return e.setAttribute("instanceDistanceStart",new kn(r,1,0)),e.setAttribute("instanceDistanceEnd",new kn(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;qn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;cr=l.linewidth+r,xc=a.attributes.instanceStart,mp=a.attributes.instanceEnd,a.boundingSphere===null&&a.computeBoundingSphere(),ca.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=cr*.5;else{const h=Math.max(n.near,ca.distanceToPoint(qn.origin));c=Rf(n,h,l.resolution)}if(ca.radius+=c,qn.intersectsSphere(ca)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),la.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=cr*.5;else{const h=Math.max(n.near,la.distanceToPoint(qn.origin));u=Rf(n,h,l.resolution)}la.expandByScalar(u),qn.intersectsBox(la)!==!1&&(i?wb(this,t):Sb(this,n,t))}}gp.prototype.isLineSegments2=!0;class Mb extends gp{constructor(e=new pp,t=new uu({color:Math.random()*16777215})){super(e,t),this.type="Line2"}}Mb.prototype.isLine2=!0;function hu(){var s=0,e=[],t,i=0,n=0;function r(y,b){var x=hu();function _(){var M=s>0?y:b;if(m(M))try{var w=M(t);w===x&&g();var E=f(w);E?E.call(w,x.resolve,x.reject):x.resolve(w)}catch(v){x.reject(v)}else x[s>0?"resolve":"reject"](t)}return e.push(_),s&&c(),x}var o=p(function(y){n||l(1,y)}),a=p(function(y){n||l(-1,y)});function l(y,b){n++;var x=0;try{b===d&&g();var _=y>0&&f(b);_?_.call(b,p(function(M){x++,l(1,M)}),p(function(M){x++,l(-1,M)})):(s=y,t=b,c())}catch(M){!s&&!x&&l(-1,M)}}function c(){i||(setTimeout(u,0),i=1)}function u(){var y=e;i=0,e=[],y.forEach(h)}function h(y){y()}function f(y){var b=y&&(m(y)||typeof y=="object")&&y.then;return m(b)&&b}function p(y){var b=0;return function(){for(var x=[],_=arguments.length;_--;)x[_]=arguments[_];b++||y.apply(this,x)}}function g(){throw new TypeError("Chaining cycle detected")}var m=function(y){return typeof y=="function"},d={then:r,resolve:o,reject:a};return d}function vp(){var s,e,t=new Promise(function(i,n){s=i,e=n});return{then:t.then.bind(t),resolve:s,reject:e}}hu.all=vp.all=function(s){var e=0,t=[],i=Si();return s.length===0?i.resolve([]):s.forEach(function(n,r){var o=Si();o.resolve(n),o.then(function(a){e++,t[r]=a,e===s.length&&i.resolve(t)},i.reject)}),i};var Si=typeof Promise=="function"?vp:hu;function Tb(){var s=Object.create(null);function e(n,r){var o=n.id,a=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[o])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(p){if(p instanceof Error)throw p}),f=s[f.id].value),f}),c=i("<"+a+">.init",c),u&&(u=i("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var o,a=n.id,l=n.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[a].getTransferables&&s[a].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(p){console.error(p),r(p)}}}function i(n,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(n){var r=n.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Eb(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var n=Si.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var _p=function(){var s=!1;if(typeof window!="undefined"&&typeof window.document!="undefined")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return _p=function(){return s},s},Ab=0,Cb=0,Yl=!1,Xs=Object.create(null),qs=Object.create(null),bc=Object.create(null);function cs(s){if((!s||typeof s.init!="function")&&!Yl)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId;if(!_p())return Eb(s);n==null&&(n="#default");var r="workerModule"+ ++Ab,o=s.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Yl=!0,c=cs({workerId:n,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+ya(c)+`
)}`}),Yl=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=Pf(n,"registerModule",l.workerModuleData);var h=function(){a=null,qs[n].delete(h)};(qs[n]||(qs[n]=new Set)).add(h)}return a.then(function(f){var p=f.isCallable;if(p)return Pf(n,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:o,dependencies:e,init:ya(t),getTransferables:i&&ya(i)},l}function Lb(s){qs[s]&&qs[s].forEach(function(e){e()}),Xs[s]&&(Xs[s].terminate(),delete Xs[s])}function ya(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Rb(s){var e=Xs[s];if(!e){var t=ya(Tb);e=Xs[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,o=bc[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete bc[r],o(n)}}return e}function Pf(s,e,t){var i=Si(),n=++Cb;return bc[n]=function(r){r.success?i.resolve(r.result):i.reject(new Error("Error in worker "+e+" call: "+r.error))},Rb(s).postMessage({messageId:n,action:e,data:t}),i}var Pb=cs({name:"Thenable",dependencies:[Si],init:function(s){return s}});function yp(){var s=function(e){function t(D,X,V,Y,ee,re,ne,Z){var ae=1-ne;Z.x=ae*ae*D+2*ae*ne*V+ne*ne*ee,Z.y=ae*ae*X+2*ae*ne*Y+ne*ne*re}function i(D,X,V,Y,ee,re,ne,Z,ae,j){var C=1-ae;j.x=C*C*C*D+3*C*C*ae*V+3*C*ae*ae*ee+ae*ae*ae*ne,j.y=C*C*C*X+3*C*C*ae*Y+3*C*ae*ae*re+ae*ae*ae*Z}function n(D,X){for(var V=/([MLQCZ])([^MLQCZ]*)/g,Y,ee,re,ne,Z;Y=V.exec(D);){var ae=Y[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(j){return parseFloat(j)});switch(Y[1]){case"M":ne=ee=ae[0],Z=re=ae[1];break;case"L":(ae[0]!==ne||ae[1]!==Z)&&X("L",ne,Z,ne=ae[0],Z=ae[1]);break;case"Q":{X("Q",ne,Z,ne=ae[2],Z=ae[3],ae[0],ae[1]);break}case"C":{X("C",ne,Z,ne=ae[4],Z=ae[5],ae[0],ae[1],ae[2],ae[3]);break}case"Z":(ne!==ee||Z!==re)&&X("L",ne,Z,ee,re);break}}}function r(D,X,V){V===void 0&&(V=16);var Y={x:0,y:0};n(D,function(ee,re,ne,Z,ae,j,C,R,B){switch(ee){case"L":X(re,ne,Z,ae);break;case"Q":{for(var G=re,q=ne,Q=1;Q<V;Q++)t(re,ne,j,C,Z,ae,Q/(V-1),Y),X(G,q,Y.x,Y.y),G=Y.x,q=Y.y;break}case"C":{for(var se=re,le=ne,ye=1;ye<V;ye++)i(re,ne,j,C,R,B,Z,ae,ye/(V-1),Y),X(se,le,Y.x,Y.y),se=Y.x,le=Y.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(D,X){var V=D.getContext?D.getContext("webgl",c):D,Y=l.get(V);if(!Y){let C=function(se){var le=re[se];if(!le&&(le=re[se]=V.getExtension(se),!le))throw new Error(se+" not supported");return le},R=function(se,le){var ye=V.createShader(le);return V.shaderSource(ye,se),V.compileShader(ye),ye},B=function(se,le,ye,oe){if(!ne[se]){var de={},_e={},ue=V.createProgram();V.attachShader(ue,R(le,V.VERTEX_SHADER)),V.attachShader(ue,R(ye,V.FRAGMENT_SHADER)),V.linkProgram(ue),ne[se]={program:ue,transaction:function(P){V.useProgram(ue),P({setUniform:function(k,ve){for(var we=[],pe=arguments.length-2;pe-- >0;)we[pe]=arguments[pe+2];var te=_e[ve]||(_e[ve]=V.getUniformLocation(ue,ve));V["uniform"+k].apply(V,[te].concat(we))},setAttribute:function(k,ve,we,pe,te){var Ce=de[k];Ce||(Ce=de[k]={buf:V.createBuffer(),loc:V.getAttribLocation(ue,k),data:null}),V.bindBuffer(V.ARRAY_BUFFER,Ce.buf),V.vertexAttribPointer(Ce.loc,ve,V.FLOAT,!1,0,0),V.enableVertexAttribArray(Ce.loc),ee?V.vertexAttribDivisor(Ce.loc,pe):C("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ce.loc,pe),te!==Ce.data&&(V.bufferData(V.ARRAY_BUFFER,te,we),Ce.data=te)}})}}}ne[se].transaction(oe)},G=function(se,le){ae++;try{V.activeTexture(V.TEXTURE0+ae);var ye=Z[se];ye||(ye=Z[se]=V.createTexture(),V.bindTexture(V.TEXTURE_2D,ye),V.texParameteri(V.TEXTURE_2D,V.TEXTURE_MIN_FILTER,V.NEAREST),V.texParameteri(V.TEXTURE_2D,V.TEXTURE_MAG_FILTER,V.NEAREST)),V.bindTexture(V.TEXTURE_2D,ye),le(ye,ae)}finally{ae--}},q=function(se,le,ye){var oe=V.createFramebuffer();j.push(oe),V.bindFramebuffer(V.FRAMEBUFFER,oe),V.activeTexture(V.TEXTURE0+le),V.bindTexture(V.TEXTURE_2D,se),V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,se,0);try{ye(oe)}finally{V.deleteFramebuffer(oe),V.bindFramebuffer(V.FRAMEBUFFER,j[--j.length-1]||null)}},Q=function(){re={},ne={},Z={},ae=-1,j.length=0};var ee=typeof WebGL2RenderingContext!="undefined"&&V instanceof WebGL2RenderingContext,re={},ne={},Z={},ae=-1,j=[];V.canvas.addEventListener("webglcontextlost",function(se){Q(),se.preventDefault()},!1),l.set(V,Y={gl:V,isWebGL2:ee,getExtension:C,withProgram:B,withTexture:G,withTextureFramebuffer:q,handleContextLoss:Q})}X(Y)}function h(D,X,V,Y,ee,re,ne,Z){ne===void 0&&(ne=15),Z===void 0&&(Z=null),u(D,function(ae){var j=ae.gl,C=ae.withProgram,R=ae.withTexture;R("copy",function(B,G){j.texImage2D(j.TEXTURE_2D,0,j.RGBA,ee,re,0,j.RGBA,j.UNSIGNED_BYTE,X),C("copy",o,a,function(q){var Q=q.setUniform,se=q.setAttribute;se("aUV",2,j.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Q("1i","image",G),j.bindFramebuffer(j.FRAMEBUFFER,Z||null),j.disable(j.BLEND),j.colorMask(ne&8,ne&4,ne&2,ne&1),j.viewport(V,Y,ee,re),j.scissor(V,Y,ee,re),j.drawArrays(j.TRIANGLES,0,3)})})})}function f(D,X,V){var Y=D.width,ee=D.height;u(D,function(re){var ne=re.gl,Z=new Uint8Array(Y*ee*4);ne.readPixels(0,0,Y,ee,ne.RGBA,ne.UNSIGNED_BYTE,Z),D.width=X,D.height=V,h(ne,Z,0,0,Y,ee)})}var p=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(D,X,V,Y,ee,re){re===void 0&&(re=1);var ne=new Uint8Array(D*X),Z=Y[2]-Y[0],ae=Y[3]-Y[1],j=[];r(V,function(se,le,ye,oe){j.push({x1:se,y1:le,x2:ye,y2:oe,minX:Math.min(se,ye),minY:Math.min(le,oe),maxX:Math.max(se,ye),maxY:Math.max(le,oe)})}),j.sort(function(se,le){return se.maxX-le.maxX});for(var C=0;C<D;C++)for(var R=0;R<X;R++){var B=q(Y[0]+Z*(C+.5)/D,Y[1]+ae*(R+.5)/X),G=Math.pow(1-Math.abs(B)/ee,re)/2;B<0&&(G=1-G),G=Math.max(0,Math.min(255,Math.round(G*255))),ne[R*D+C]=G}return ne;function q(se,le){for(var ye=1/0,oe=1/0,de=j.length;de--;){var _e=j[de];if(_e.maxX+oe<=se)break;if(se+oe>_e.minX&&le-oe<_e.maxY&&le+oe>_e.minY){var ue=y(se,le,_e.x1,_e.y1,_e.x2,_e.y2);ue<ye&&(ye=ue,oe=Math.sqrt(ye))}}return Q(se,le)&&(oe=-oe),oe}function Q(se,le){for(var ye=0,oe=j.length;oe--;){var de=j[oe];if(de.maxX<=se)break;var _e=de.y1>le!=de.y2>le&&se<(de.x2-de.x1)*(le-de.y1)/(de.y2-de.y1)+de.x1;_e&&(ye+=de.y1<de.y2?1:-1)}return ye!==0}}function m(D,X,V,Y,ee,re,ne,Z,ae,j){re===void 0&&(re=1),Z===void 0&&(Z=0),ae===void 0&&(ae=0),j===void 0&&(j=0),d(D,X,V,Y,ee,re,ne,null,Z,ae,j)}function d(D,X,V,Y,ee,re,ne,Z,ae,j,C){re===void 0&&(re=1),ae===void 0&&(ae=0),j===void 0&&(j=0),C===void 0&&(C=0);for(var R=g(D,X,V,Y,ee,re),B=new Uint8Array(R.length*4),G=0;G<R.length;G++)B[G*4+C]=R[G];h(ne,B,ae,j,D,X,1<<3-C,Z)}function y(D,X,V,Y,ee,re){var ne=ee-V,Z=re-Y,ae=ne*ne+Z*Z,j=ae?Math.max(0,Math.min(1,((D-V)*ne+(X-Y)*Z)/ae)):0,C=D-(V+j*ne),R=X-(Y+j*Z);return C*C+R*R}var b=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:m,generateIntoFramebuffer:d}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",_="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",M="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),E=null,v=!1,S={},T=new WeakMap;function A(D){if(!v&&!W(D))throw new Error("WebGL generation not supported")}function L(D,X,V,Y,ee,re,ne){if(re===void 0&&(re=1),ne===void 0&&(ne=null),!ne&&(ne=E,!ne)){var Z=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document!="undefined"?document.createElement("canvas"):null;if(!Z)throw new Error("OffscreenCanvas or DOM canvas not supported");ne=E=Z.getContext("webgl",{depth:!1})}A(ne);var ae=new Uint8Array(D*X*4);u(ne,function(B){var G=B.gl,q=B.withTexture,Q=B.withTextureFramebuffer;q("readable",function(se,le){G.texImage2D(G.TEXTURE_2D,0,G.RGBA,D,X,0,G.RGBA,G.UNSIGNED_BYTE,null),Q(se,le,function(ye){I(D,X,V,Y,ee,re,G,ye,0,0,0),G.readPixels(0,0,D,X,G.RGBA,G.UNSIGNED_BYTE,ae)})})});for(var j=new Uint8Array(D*X),C=0,R=0;C<ae.length;C+=4)j[R++]=ae[C];return j}function F(D,X,V,Y,ee,re,ne,Z,ae,j){re===void 0&&(re=1),Z===void 0&&(Z=0),ae===void 0&&(ae=0),j===void 0&&(j=0),I(D,X,V,Y,ee,re,ne,null,Z,ae,j)}function I(D,X,V,Y,ee,re,ne,Z,ae,j,C){re===void 0&&(re=1),ae===void 0&&(ae=0),j===void 0&&(j=0),C===void 0&&(C=0),A(ne);var R=[];r(V,function(B,G,q,Q){R.push(B,G,q,Q)}),R=new Float32Array(R),u(ne,function(B){var G=B.gl,q=B.isWebGL2,Q=B.getExtension,se=B.withProgram,le=B.withTexture,ye=B.withTextureFramebuffer,oe=B.handleContextLoss;if(le("rawDistances",function(de,_e){(D!==de._lastWidth||X!==de._lastHeight)&&G.texImage2D(G.TEXTURE_2D,0,G.RGBA,de._lastWidth=D,de._lastHeight=X,0,G.RGBA,G.UNSIGNED_BYTE,null),se("main",x,_,function(ue){var z=ue.setAttribute,P=ue.setUniform,$=!q&&Q("ANGLE_instanced_arrays"),k=!q&&Q("EXT_blend_minmax");z("aUV",2,G.STATIC_DRAW,0,w),z("aLineSegment",4,G.DYNAMIC_DRAW,1,R),P.apply(void 0,["4f","uGlyphBounds"].concat(Y)),P("1f","uMaxDistance",ee),P("1f","uExponent",re),ye(de,_e,function(ve){G.enable(G.BLEND),G.colorMask(!0,!0,!0,!0),G.viewport(0,0,D,X),G.scissor(0,0,D,X),G.blendFunc(G.ONE,G.ONE),G.blendEquationSeparate(G.FUNC_ADD,q?G.MAX:k.MAX_EXT),G.clear(G.COLOR_BUFFER_BIT),q?G.drawArraysInstanced(G.TRIANGLES,0,3,R.length/4):$.drawArraysInstancedANGLE(G.TRIANGLES,0,3,R.length/4)})}),se("post",o,M,function(ue){ue.setAttribute("aUV",2,G.STATIC_DRAW,0,w),ue.setUniform("1i","tex",_e),G.bindFramebuffer(G.FRAMEBUFFER,Z),G.disable(G.BLEND),G.colorMask(C===0,C===1,C===2,C===3),G.viewport(ae,j,D,X),G.scissor(ae,j,D,X),G.drawArrays(G.TRIANGLES,0,3)})}),G.isContextLost())throw oe(),new Error("webgl context lost")})}function W(D){var X=!D||D===E?S:D.canvas||D,V=T.get(X);if(V===void 0){v=!0;var Y=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],re=L(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,D);V=re&&ee.length===re.length&&re.every(function(ne,Z){return ne===ee[Z]}),V||(Y="bad trial run results",console.info(ee,re))}catch(ne){V=!1,Y=ne.message}Y&&console.warn("WebGL SDF generation not supported:",Y),v=!1,T.set(X,V)}return V}var U=Object.freeze({__proto__:null,generate:L,generateIntoCanvas:F,generateIntoFramebuffer:I,isSupported:W});function H(D,X,V,Y,ee,re){ee===void 0&&(ee=Math.max(Y[2]-Y[0],Y[3]-Y[1])/2),re===void 0&&(re=1);try{return L.apply(U,arguments)}catch(ne){return console.info("WebGL SDF generation failed, falling back to JS",ne),g.apply(b,arguments)}}function J(D,X,V,Y,ee,re,ne,Z,ae,j){ee===void 0&&(ee=Math.max(Y[2]-Y[0],Y[3]-Y[1])/2),re===void 0&&(re=1),Z===void 0&&(Z=0),ae===void 0&&(ae=0),j===void 0&&(j=0);try{return F.apply(U,arguments)}catch(C){return console.info("WebGL SDF generation failed, falling back to JS",C),m.apply(b,arguments)}}return e.forEachPathCommand=n,e.generate=H,e.generateIntoCanvas=J,e.javascript=b,e.pathToLineSegments=r,e.webgl=U,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function Ib(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(oe,de){i[oe]=1<<de+1,n[i[oe]]=oe}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,o=i.L|i.R|i.AL,a=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var oe=function(_e){if(t.hasOwnProperty(_e)){var ue=0;t[_e].split(",").forEach(function(z){var P=z.split("+"),$=P[0],k=P[1];$=parseInt($,36),k=k?parseInt(k,36):0,u.set(ue+=$,i[_e]);for(var ve=0;ve<k;ve++)u.set(++ue,i[_e])})}};for(var de in t)oe(de)}}function f(oe){return h(),u.get(oe.codePointAt(0))||i.L}function p(oe){return n[f(oe)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function m(oe,de){var _e=36,ue=0,z=new Map,P=de&&new Map,$;return oe.split(",").forEach(function k(ve){if(ve.indexOf("+")!==-1)for(var we=+ve;we--;)k($);else{$=ve;var pe=ve.split(">"),te=pe[0],Ce=pe[1];te=String.fromCodePoint(ue+=parseInt(te,_e)),Ce=String.fromCodePoint(ue+=parseInt(Ce,_e)),z.set(te,Ce),de&&P.set(Ce,te)}}),{map:z,reverseMap:P}}var d,y,b;function x(){if(!d){var oe=m(g.pairs,!0),de=oe.map,_e=oe.reverseMap;d=de,y=_e,b=m(g.canonical,!1).map}}function _(oe){return x(),d.get(oe)||null}function M(oe){return x(),y.get(oe)||null}function w(oe){return x(),b.get(oe)||null}var E=i.L,v=i.R,S=i.EN,T=i.ES,A=i.ET,L=i.AN,F=i.CS,I=i.B,W=i.S,U=i.ON,H=i.BN,J=i.NSM,D=i.AL,X=i.LRO,V=i.RLO,Y=i.LRE,ee=i.RLE,re=i.PDF,ne=i.LRI,Z=i.RLI,ae=i.FSI,j=i.PDI;function C(oe,de){for(var _e=125,ue=new Uint32Array(oe.length),z=0;z<oe.length;z++)ue[z]=f(oe[z]);var P=new Map;function $(qt,Ln){var cn=ue[qt];ue[qt]=Ln,P.set(cn,P.get(cn)-1),cn&a&&P.set(a,P.get(a)-1),P.set(Ln,(P.get(Ln)||0)+1),Ln&a&&P.set(a,(P.get(a)||0)+1)}for(var k=new Uint8Array(oe.length),ve=new Map,we=[],pe=null,te=0;te<oe.length;te++)pe||we.push(pe={start:te,end:oe.length-1,level:de==="rtl"?1:de==="ltr"?0:Eu(te,!1)}),ue[te]&I&&(pe.end=te,pe=null);for(var Ce=ee|Y|V|X|r|j|re|I,Pe=function(qt){return qt+(qt&1?1:2)},Me=function(qt){return qt+(qt&1?2:1)},K=0;K<we.length;K++){pe=we[K];var me=[{_level:pe.level,_override:0,_isolate:0}],fe=void 0,Le=0,Se=0,De=0;P.clear();for(var xe=pe.start;xe<=pe.end;xe++){var Re=ue[xe];if(fe=me[me.length-1],P.set(Re,(P.get(Re)||0)+1),Re&a&&P.set(a,(P.get(a)||0)+1),Re&Ce)if(Re&(ee|Y)){k[xe]=fe._level;var je=(Re===ee?Me:Pe)(fe._level);je<=_e&&!Le&&!Se?me.push({_level:je,_override:0,_isolate:0}):Le||Se++}else if(Re&(V|X)){k[xe]=fe._level;var He=(Re===V?Me:Pe)(fe._level);He<=_e&&!Le&&!Se?me.push({_level:He,_override:Re&V?v:E,_isolate:0}):Le||Se++}else if(Re&r){Re&ae&&(Re=Eu(xe+1,!0)===1?Z:ne),k[xe]=fe._level,fe._override&&$(xe,fe._override);var ot=(Re===Z?Me:Pe)(fe._level);ot<=_e&&Le===0&&Se===0?(De++,me.push({_level:ot,_override:0,_isolate:1,_isolInitIndex:xe})):Le++}else if(Re&j){if(Le>0)Le--;else if(De>0){for(Se=0;!me[me.length-1]._isolate;)me.pop();var Xt=me[me.length-1]._isolInitIndex;Xt!=null&&(ve.set(Xt,xe),ve.set(xe,Xt)),me.pop(),De--}fe=me[me.length-1],k[xe]=fe._level,fe._override&&$(xe,fe._override)}else Re&re?(Le===0&&(Se>0?Se--:!fe._isolate&&me.length>1&&(me.pop(),fe=me[me.length-1])),k[xe]=fe._level):Re&I&&(k[xe]=pe.level);else k[xe]=fe._level,fe._override&&Re!==H&&$(xe,fe._override)}for(var lt=[],Ke=null,At=pe.start;At<=pe.end;At++){var Ut=ue[At];if(!(Ut&l)){var at=k[At],Ot=Ut&r,bn=Ut===j;Ke&&at===Ke._level?(Ke._end=At,Ke._endsWithIsolInit=Ot):lt.push(Ke={_start:At,_end:At,_level:at,_startsWithPDI:bn,_endsWithIsolInit:Ot})}}for(var Ct=[],N=0;N<lt.length;N++){var ie=lt[N];if(!ie._startsWithPDI||ie._startsWithPDI&&!ve.has(ie._start)){for(var he=[Ke=ie],ce=void 0;Ke&&Ke._endsWithIsolInit&&(ce=ve.get(Ke._end))!=null;)for(var ge=N+1;ge<lt.length;ge++)if(lt[ge]._start===ce){he.push(Ke=lt[ge]);break}for(var ze=[],ke=0;ke<he.length;ke++)for(var Ne=he[ke],Be=Ne._start;Be<=Ne._end;Be++)ze.push(Be);for(var it=k[ze[0]],Ye=pe.level,qe=ze[0]-1;qe>=0;qe--)if(!(ue[qe]&l)){Ye=k[qe];break}var ut=ze[ze.length-1],si=k[ut],oi=pe.level;if(!(ue[ut]&r)){for(var An=ut+1;An<=pe.end;An++)if(!(ue[An]&l)){oi=k[An];break}}Ct.push({_seqIndices:ze,_sosType:Math.max(Ye,it)%2?v:E,_eosType:Math.max(oi,si)%2?v:E})}}for(var ln=0;ln<Ct.length;ln++){var Je=Ct[ln],Ie=Je._seqIndices,ht=Je._sosType,wn=Je._eosType;if(P.get(J))for(var mn=0;mn<Ie.length;mn++){var Ai=Ie[mn];if(ue[Ai]&J){for(var Yi=ht,yt=mn-1;yt>=0;yt--)if(!(ue[Ie[yt]]&l)){Yi=ue[Ie[yt]];break}$(Ai,Yi&(r|j)?U:Yi)}}if(P.get(S))for(var Gn=0;Gn<Ie.length;Gn++){var mr=Ie[Gn];if(ue[mr]&S)for(var tn=Gn-1;tn>=-1;tn--){var du=tn===-1?ht:ue[Ie[tn]];if(du&o){du===D&&$(mr,L);break}}}if(P.get(D))for(var ja=0;ja<Ie.length;ja++){var pu=Ie[ja];ue[pu]&D&&$(pu,v)}if(P.get(T)||P.get(F))for(var ps=1;ps<Ie.length-1;ps++){var Xa=Ie[ps];if(ue[Xa]&(T|F)){for(var gr=0,qa=0,Ya=ps-1;Ya>=0&&(gr=ue[Ie[Ya]],!!(gr&l));Ya--);for(var Ka=ps+1;Ka<Ie.length&&(qa=ue[Ie[Ka]],!!(qa&l));Ka++);gr===qa&&(ue[Xa]===T?gr===S:gr&(S|L))&&$(Xa,gr)}}if(P.get(S))for(var ms=0;ms<Ie.length;ms++){var Rp=Ie[ms];if(ue[Rp]&S){for(var mo=ms-1;mo>=0&&ue[Ie[mo]]&(A|l);mo--)$(Ie[mo],S);for(var go=ms+1;go<Ie.length&&ue[Ie[go]]&(A|l);go++)$(Ie[go],S)}}if(P.get(A)||P.get(T)||P.get(F))for(var gs=0;gs<Ie.length;gs++){var mu=Ie[gs];if(ue[mu]&(A|T|F)){$(mu,U);for(var vo=gs-1;vo>=0&&ue[Ie[vo]]&l;vo--)$(Ie[vo],U);for(var _o=gs+1;_o<Ie.length&&ue[Ie[_o]]&l;_o++)$(Ie[_o],U)}}if(P.get(S))for(var Za=0,gu=ht;Za<Ie.length;Za++){var vu=Ie[Za],Ja=ue[vu];Ja&S?gu===E&&$(vu,E):Ja&o&&(gu=Ja)}if(P.get(a)){var vs=v|S|L,_u=vs|E,yo=[];{for(var vr=[],_r=0;_r<Ie.length;_r++)if(ue[Ie[_r]]&a){var _s=oe[Ie[_r]],yu=void 0;if(_(_s)!==null)if(vr.length<63)vr.push({char:_s,seqIndex:_r});else break;else if((yu=M(_s))!==null)for(var ys=vr.length-1;ys>=0;ys--){var Qa=vr[ys].char;if(Qa===yu||Qa===M(w(_s))||_(w(Qa))===_s){yo.push([vr[ys].seqIndex,_r]),vr.length=ys;break}}}yo.sort(function(qt,Ln){return qt[0]-Ln[0]})}for(var $a=0;$a<yo.length;$a++){for(var xu=yo[$a],xs=xu[0],xo=xu[1],bu=!1,Cn=0,el=xs+1;el<xo;el++){var tl=Ie[el];if(ue[tl]&_u){bu=!0;var wu=ue[tl]&vs?v:E;if(wu===yr(tl)){Cn=wu;break}}}if(bu&&!Cn){Cn=ht;for(var nl=xs-1;nl>=0;nl--){var bo=Ie[nl];if(ue[bo]&_u){var Su=ue[bo]&vs?v:E;Su!==yr(bo)?Cn=Su:Cn=yr(bo);break}}}if(Cn){if(ue[Ie[xs]]=ue[Ie[xo]]=Cn,Cn!==yr(Ie[xs])){for(var bs=xs+1;bs<Ie.length;bs++)if(!(ue[Ie[bs]]&l)){f(oe[Ie[bs]])&J&&(ue[Ie[bs]]=Cn);break}}if(Cn!==yr(Ie[xo])){for(var ws=xo+1;ws<Ie.length;ws++)if(!(ue[Ie[ws]]&l)){f(oe[Ie[ws]])&J&&(ue[Ie[ws]]=Cn);break}}}}for(var Ci=0;Ci<Ie.length;Ci++)if(ue[Ie[Ci]]&a){for(var Mu=Ci,il=Ci,rl=ht,Ss=Ci-1;Ss>=0;Ss--)if(ue[Ie[Ss]]&l)Mu=Ss;else{rl=ue[Ie[Ss]]&vs?v:E;break}for(var Tu=wn,Ms=Ci+1;Ms<Ie.length;Ms++)if(ue[Ie[Ms]]&(a|l))il=Ms;else{Tu=ue[Ie[Ms]]&vs?v:E;break}for(var wo=Mu;wo<=il;wo++)ue[Ie[wo]]=rl===Tu?rl:yr(Ie[wo]);Ci=il}}}for(var gn=pe.start;gn<=pe.end;gn++){var Pp=k[gn],So=ue[gn];if(Pp&1?So&(E|S|L)&&k[gn]++:So&v?k[gn]++:So&(L|S)&&(k[gn]+=2),So&l&&(k[gn]=gn===0?pe.level:k[gn-1]),gn===pe.end||f(oe[gn])&(W|I))for(var Mo=gn;Mo>=0&&f(oe[Mo])&c;Mo--)k[Mo]=pe.level}}return{levels:k,paragraphs:we};function Eu(qt,Ln){for(var cn=qt;cn<oe.length;cn++){var Li=ue[cn];if(Li&(v|D))return 1;if(Li&(I|E)||Ln&&Li===j)return 0;if(Li&r){var Au=Ip(cn);cn=Au===-1?oe.length:Au}}return 0}function Ip(qt){for(var Ln=1,cn=qt+1;cn<oe.length;cn++){var Li=ue[cn];if(Li&I)break;if(Li&j){if(--Ln===0)return cn}else Li&r&&Ln++}return-1}function yr(qt){return k[qt]&1?v:E}}var R="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",B;function G(){if(!B){var oe=m(R,!0),de=oe.map,_e=oe.reverseMap;_e.forEach(function(ue,z){de.set(z,ue)}),B=de}}function q(oe){return G(),B.get(oe)||null}function Q(oe,de,_e,ue){var z=oe.length;_e=Math.max(0,_e==null?0:+_e),ue=Math.min(z-1,ue==null?z-1:+ue);for(var P=new Map,$=_e;$<=ue;$++)if(de[$]&1){var k=q(oe[$]);k!==null&&P.set($,k)}return P}function se(oe,de,_e,ue){var z=oe.length;_e=Math.max(0,_e==null?0:+_e),ue=Math.min(z-1,ue==null?z-1:+ue);var P=[];return de.paragraphs.forEach(function($){var k=Math.max(_e,$.start),ve=Math.min(ue,$.end);if(k<ve){for(var we=de.levels.slice(k,ve+1),pe=ve;pe>=k&&f(oe[pe])&c;pe--)we[pe]=$.level;for(var te=$.level,Ce=1/0,Pe=0;Pe<we.length;Pe++){var Me=we[Pe];Me>te&&(te=Me),Me<Ce&&(Ce=Me|1)}for(var K=te;K>=Ce;K--)for(var me=0;me<we.length;me++)if(we[me]>=K){for(var fe=me;me+1<we.length&&we[me+1]>=K;)me++;me>fe&&P.push([fe+_e,me+_e])}}}),P}function le(oe,de,_e,ue){var z=ye(oe,de,_e,ue),P=[].concat(oe);return z.forEach(function($,k){P[k]=(de.levels[$]&1?q(oe[$]):null)||oe[$]}),P.join("")}function ye(oe,de,_e,ue){for(var z=se(oe,de,_e,ue),P=[],$=0;$<oe.length;$++)P[$]=$;return z.forEach(function(k){for(var ve=k[0],we=k[1],pe=P.slice(ve,we+1),te=pe.length;te--;)P[we-te]=pe[te]}),P}return e.closingToOpeningBracket=M,e.getBidiCharType=f,e.getBidiCharTypeName=p,e.getCanonicalBracket=w,e.getEmbeddingLevels=C,e.getMirroredCharacter=q,e.getMirroredCharactersMap=Q,e.getReorderSegments=se,e.getReorderedIndices=ye,e.getReorderedString=le,e.openingToClosingBracket=_,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const xp=/\bvoid\s+main\s*\(\s*\)\s*{/g;function wc(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Xe[n];return r?wc(r):i}return s.replace(e,t)}const Gt=[];for(let s=0;s<256;s++)Gt[s]=(s<16?"0":"")+s.toString(16);function Db(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toUpperCase()}const $i=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)i.hasOwnProperty(n)&&(s[n]=i[n])}return s},Fb=Date.now(),If=new WeakMap,Df=new Map;let zb=1e10;function Sc(s,e){const t=Bb(e);let i=If.get(s);if(i||If.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c){s.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=Df[u];if(!h){const f=Ub(c,e,t);h=Df[u]=f}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,$i(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Fb}}),this[n]&&this[n](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:zb++}),u.uuid=Db(),u.uniforms=$i({},c.uniforms,e.uniforms),u.defines=$i({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=$i({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&($i(this.extensions,c.extensions),$i(this.defines,c.defines),$i(this.uniforms,ao.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Sc(s.isDerivedMaterial?s.getDepthMaterial():new za({depthPacking:gd}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Sc(s.isDerivedMaterial?s.getDistanceMaterial():new Ua,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=o,new o}function Ub({vertexShader:s,fragmentShader:e},t,i){let{vertexDefs:n,vertexMainIntro:r,vertexMainOutro:o,vertexTransform:a,fragmentDefs:l,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:h,customRewriter:f,timeUniform:p}=t;if(n=n||"",r=r||"",o=o||"",l=l||"",c=c||"",u=u||"",(a||f)&&(s=wc(s)),(h||f)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=wc(e)),f){let g=f({vertexShader:s,fragmentShader:e});s=g.vertexShader,e=g.fragmentShader}if(h){let g=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(g.push(m),"")),u=`${h}
${g.join(`
`)}
${u}`}if(p){const g=`
uniform float ${p};
`;n=g+n,l=g+l}return a&&(s=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${s}
`,n=`${n}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${a}
}
`,r=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${r}
`,s=s.replace(/\b(position|normal|uv)\b/g,(g,m,d,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,d))?m:`troika_${m}_${i}`)),s=Ff(s,i,n,r,o),e=Ff(e,i,l,c,u),{vertexShader:s,fragmentShader:e}}function Ff(s,e,t,i,n){return(i||n||t)&&(s=s.replace(xp,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function Ob(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let kb=0;const zf=new Map;function Bb(s){const e=JSON.stringify(s,Ob);let t=zf.get(e);return t==null&&zf.set(e,t=++kb),t}function Nb(s,e,t){const{defaultFontURL:i}=t,n=Object.create(null),r=1/0,o=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,a=/[\s\-\u007C\u00AD\u2010\u2012-\u2014\u2027\u2056\u2E17\u2E40]/;function l(y,b){function x(){const _=M=>{console.error(`Failure loading font ${y}${y===i?"":"; trying fallback"}`,M),y!==i&&(y=i,x())};try{const M=new XMLHttpRequest;M.open("get",y,!0),M.responseType="arraybuffer",M.onload=function(){if(M.status>=400)_(new Error(M.statusText));else if(M.status>0)try{const w=s(M.response);b(w)}catch(w){_(w)}},M.onerror=_,M.send()}catch(M){_(M)}}x()}function c(y,b){y||(y=i);let x=n[y];x?x.pending?x.pending.push(b):b(x):(n[y]={pending:[b]},l(y,_=>{let M=n[y].pending;n[y]=_,M.forEach(w=>w(_))}))}function u({text:y="",font:b=i,sdfGlyphSize:x=64,fontSize:_=1,letterSpacing:M=0,lineHeight:w="normal",maxWidth:E=r,direction:v,textAlign:S="left",textIndent:T=0,whiteSpace:A="normal",overflowWrap:L="normal",anchorX:F=0,anchorY:I=0,includeCaretPositions:W=!1,chunkedBoundsSize:U=8192,colorRanges:H=null},J,D=!1){const X=g(),V={fontLoad:0,typesetting:0};y.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),y=y.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),_=+_,M=+M,E=+E,w=w||"normal",T=+T,c(b,Y=>{const ee=isFinite(E);let re=null,ne=null,Z=null,ae=null,j=null,C=null,R=null,B=0,G=0,q=A!=="nowrap";const{ascender:Q,descender:se,unitsPerEm:le}=Y;V.fontLoad=g()-X;const ye=g(),oe=_/le;w==="normal"&&(w=(Q-se)/le),w=w*_;const de=(w-(Q-se)*oe)/2,_e=-(Q*oe+de),ue=Math.min(w,(Q-se)*oe),z=(Q+se)/2*oe-ue/2;let P=T,$=new m;const k=[$];Y.forEachGlyph(y,_,M,(pe,te,Ce)=>{const Pe=y.charAt(Ce),Me=pe.advanceWidth*oe,K=$.count;let me;if("isEmpty"in pe||(pe.isWhitespace=!!Pe&&/\s/.test(Pe),pe.canBreakAfter=!!Pe&&a.test(Pe),pe.isEmpty=pe.xMin===pe.xMax||pe.yMin===pe.yMax||o.test(Pe)),!pe.isWhitespace&&!pe.isEmpty&&G++,q&&ee&&!pe.isWhitespace&&te+Me+P>E&&K){if($.glyphAt(K-1).glyphObj.canBreakAfter)me=new m,P=-te;else for(let Le=K;Le--;)if(Le===0&&L==="break-word"){me=new m,P=-te;break}else if($.glyphAt(Le).glyphObj.canBreakAfter){me=$.splitAt(Le+1);const Se=me.glyphAt(0).x;P-=Se;for(let De=me.count;De--;)me.glyphAt(De).x-=Se;break}me&&($.isSoftWrapped=!0,$=me,k.push($),B=E)}let fe=$.glyphAt($.count);fe.glyphObj=pe,fe.x=te+P,fe.width=Me,fe.charIndex=Ce,Pe===`
`&&($=new m,k.push($),P=-(te+Me+M*_)+T)}),k.forEach(pe=>{for(let te=pe.count;te--;){let{glyphObj:Ce,x:Pe,width:Me}=pe.glyphAt(te);if(!Ce.isWhitespace){pe.width=Pe+Me,pe.width>B&&(B=pe.width);return}}});let ve=0,we=0;if(F&&(typeof F=="number"?ve=-F:typeof F=="string"&&(ve=-B*(F==="left"?0:F==="center"?.5:F==="right"?1:f(F)))),I){if(typeof I=="number")we=-I;else if(typeof I=="string"){let pe=k.length*w;we=I==="top"?0:I==="top-baseline"?-_e:I==="middle"?pe/2:I==="bottom"?pe:I==="bottom-baseline"?pe-de+se*oe:f(I)*pe}}if(!D){const pe=e.getEmbeddingLevels(y,v);re=new Uint16Array(G),ne=new Float32Array(G*2),Z={},C=[r,r,-r,-r],R=[];let te=_e;W&&(j=new Float32Array(y.length*3)),H&&(ae=new Uint8Array(G*3));let Ce=0,Pe=-1,Me=-1,K,me;if(k.forEach((fe,Le)=>{let{count:Se,width:De}=fe;if(Se>0){let xe=0;for(let lt=Se;lt--&&fe.glyphAt(lt).glyphObj.isWhitespace;)xe++;let Re=0,je=0;if(S==="center")Re=(B-De)/2;else if(S==="right")Re=B-De;else if(S==="justify"&&fe.isSoftWrapped){let lt=0;for(let Ke=Se-xe;Ke--;)fe.glyphAt(Ke).glyphObj.isWhitespace&&lt++;je=(B-De)/lt}if(je||Re){let lt=0;for(let Ke=0;Ke<Se;Ke++){let At=fe.glyphAt(Ke);const Ut=At.glyphObj;At.x+=Re+lt,je!==0&&Ut.isWhitespace&&Ke<Se-xe&&(lt+=je,At.width+=je)}}const He=e.getReorderSegments(y,pe,fe.glyphAt(0).charIndex,fe.glyphAt(fe.count-1).charIndex);for(let lt=0;lt<He.length;lt++){const[Ke,At]=He[lt];let Ut=1/0,at=-1/0;for(let Ot=0;Ot<Se;Ot++)if(fe.glyphAt(Ot).charIndex>=Ke){let bn=Ot,Ct=Ot;for(;Ct<Se;Ct++){let N=fe.glyphAt(Ct);if(N.charIndex>At)break;Ct<Se-xe&&(Ut=Math.min(Ut,N.x),at=Math.max(at,N.x+N.width))}for(let N=bn;N<Ct;N++){const ie=fe.glyphAt(N);ie.x=at-(ie.x+ie.width-Ut)}break}}let ot;const Xt=lt=>ot=lt;for(let lt=0;lt<Se;lt++){let Ke=fe.glyphAt(lt);ot=Ke.glyphObj;const At=ot.index,Ut=pe.levels[Ke.charIndex]&1;if(Ut){const at=e.getMirroredCharacter(y[Ke.charIndex]);at&&Y.forEachGlyph(at,0,0,Xt)}if(W){const{charIndex:at}=Ke,Ot=Ke.x+ve,bn=Ke.x+Ke.width+ve;j[at*3]=Ut?bn:Ot,j[at*3+1]=Ut?Ot:bn,j[at*3+2]=te+z+we;const Ct=at-Pe;Ct>1&&p(j,Pe,Ct),Pe=at}if(H){const{charIndex:at}=Ke;for(;at>Me;)Me++,H.hasOwnProperty(Me)&&(me=H[Me])}if(!ot.isWhitespace&&!ot.isEmpty){const at=Ce++;Z[At]||(Z[At]={path:ot.path,pathBounds:[ot.xMin,ot.yMin,ot.xMax,ot.yMax]});const Ot=Ke.x+ve,bn=te+we;ne[at*2]=Ot,ne[at*2+1]=bn;const Ct=Ot+ot.xMin*oe,N=bn+ot.yMin*oe,ie=Ot+ot.xMax*oe,he=bn+ot.yMax*oe;Ct<C[0]&&(C[0]=Ct),N<C[1]&&(C[1]=N),ie>C[2]&&(C[2]=ie),he>C[3]&&(C[3]=he),at%U===0&&(K={start:at,end:at,rect:[r,r,-r,-r]},R.push(K)),K.end++;const ce=K.rect;if(Ct<ce[0]&&(ce[0]=Ct),N<ce[1]&&(ce[1]=N),ie>ce[2]&&(ce[2]=ie),he>ce[3]&&(ce[3]=he),re[at]=At,H){const ge=at*3;ae[ge]=me>>16&255,ae[ge+1]=me>>8&255,ae[ge+2]=me&255}}}}te-=w}),j){const fe=y.length-Pe;fe>1&&p(j,Pe,fe)}}V.typesetting=g()-ye,J({glyphIds:re,glyphPositions:ne,glyphData:Z,caretPositions:j,caretHeight:ue,glyphColors:ae,chunkedBounds:R,fontSize:_,unitsPerEm:le,ascender:Q*oe,descender:se*oe,lineHeight:w,topBaseline:_e,blockBounds:[ve,we-k.length*w,ve+B,we],visibleBounds:C,timings:V})})}function h(y,b){u(y,x=>{const[_,M,w,E]=x.blockBounds;b({width:w-_,height:E-M})},{metricsOnly:!0})}function f(y){let b=y.match(/^([\d.]+)%$/),x=b?parseFloat(b[1]):NaN;return isNaN(x)?0:x/100}function p(y,b,x){const _=y[b*3],M=y[b*3+1],w=y[b*3+2],E=(M-_)/x;for(let v=0;v<x;v++){const S=(b+v)*3;y[S]=_+E*v,y[S+1]=_+E*(v+1),y[S+2]=w}}function g(){return(self.performance||Date).now()}function m(){this.data=[]}const d=["glyphObj","x","width","charIndex"];return m.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(y){let b=m.flyweight;return b.data=this.data,b.index=y,b},splitAt(y){let b=new m;return b.data=this.data.splice(y*d.length),b}},m.flyweight=d.reduce((y,b,x,_)=>(Object.defineProperty(y,b,{get(){return this.data[this.index*d.length+x]},set(M){this.data[this.index*d.length+x]=M}}),y),{data:null,index:0}),{typeset:u,measure:h,loadFont:c}}const or=()=>(self.performance||Date).now(),Wa=yp();let Uf;function Gb(s,e,t,i,n,r,o,a,l,c,u=!0){return u?Hb(s,e,t,i,n,r,o,a,l,c).then(null,h=>(Uf||(console.warn("WebGL SDF generation failed, falling back to JS",h),Uf=!0),Of(s,e,t,i,n,r,o,a,l,c))):Of(s,e,t,i,n,r,o,a,l,c)}const Hb=function(){const s=[];let t=0;function i(){const n=or();for(;s.length&&or()-n<5;)s.shift()();t=s.length?setTimeout(i,0):0}return(...n)=>{const r=Si();return s.push(()=>{const o=or();try{Wa.webgl.generateIntoCanvas(...n),r.resolve({timing:or()-o})}catch(a){r.reject(a)}}),t||(t=setTimeout(i,0)),r}}(),Of=function(){const t={};let i=0;return function(n,r,o,a,l,c,u,h,f,p){const g="TroikaTextSDFGenerator_JS_"+i++%4;let m=t[g];return m||(m=t[g]={workerModule:cs({name:g,workerId:g,dependencies:[yp,or],init(d,y){const b=d().javascript.generate;return function(...x){const _=y();return{textureData:b(...x),timing:y()-_}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),m.requests++,clearTimeout(m.idleTimer),m.workerModule(n,r,o,a,l,c).then(({textureData:d,timing:y})=>{const b=or(),x=new Uint8Array(d.length*4);for(let _=0;_<d.length;_++)x[_*4+p]=d[_];return Wa.webglUtils.renderImageData(u,x,h,f,n,r,1<<3-p),y+=or()-b,--m.requests===0&&(m.idleTimer=setTimeout(()=>{Lb(g)},2e3)),{timing:y}})}}();function Vb(s){s._warm||(Wa.webgl.isSupported(s),s._warm=!0)}const Wb=Wa.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function jb(){return typeof window=="undefined"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,o=new Uint8Array(n);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(o,a);a+=4,c.push(e._readFont(o,h))}return c}return[e._readFont(o,0)]},_readFont:function(n,r){var o=e._bin,a=r;o.readFixed(n,r),r+=4;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:n,_offset:a},h={},f=0;f<l;f++){var p=o.readASCII(n,r,4);r+=4,o.readUint(n,r),r+=4;var g=o.readUint(n,r);r+=4;var m=o.readUint(n,r);r+=4,h[p]={offset:g,length:m}}for(f=0;f<c.length;f++){var d=c[f];h[d]&&(u[d.trim()]=e[d.trim()].parse(n,h[d].offset,h[d].length,u))}return u},_tabOffset:function(n,r,o){for(var a=e._bin,l=a.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var h=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var f=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(n,r+2*l));return a},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(n[r+l]);return a},readUnicode:function(n,r,o){for(var a="",l=0;l<o;l++){var c=n[r++]<<8|n[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window!="undefined"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,o){var a=e._bin._tdec;return a&&r==0&&o==n.length?a.decode(n):e._bin.readASCII(n,r,o)},readBytes:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(n[r+l]);return a},readASCIIArray:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(n[r+l]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,o,a,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var p=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+p),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,r,o){var a=e._bin,l=r,c=[],u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=a.readUshort(n,r);r+=2;var p=e._lctf.readLookupTable(n,l+f,o);c.push(p)}return c},e._lctf.readLookupTable=function(n,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(n,r),r+=2,c.flag=a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var p=a.readUshort(n,r);r+=2;var g=o(n,h,l+p,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,o=0;o<32;o++)(n>>>o&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var o=e._bin,a=[],l=o.readUshort(n,r);if(r+=2,l==1){var c=o.readUshort(n,r);r+=2;var u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(o.readUshort(n,r)),r+=2}if(l==2){var f=o.readUshort(n,r);for(r+=2,h=0;h<f;h++)a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2}return a},e._lctf.getInterval=function(n,r){for(var o=0;o<n.length;o+=3){var a=n[o],l=n[o+1];if(n[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(n,r){var o=e._bin,a={};a.fmt=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(n,r,l)),a.fmt==2&&(a.tab=o.readUshorts(n,r,3*l)),a},e._lctf.coverageIndex=function(n,r){var o=n.tab;if(n.fmt==1)return o.indexOf(r);if(n.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2;var p=e._lctf.readFeatureTable(n,a+f);p.tag=h.trim(),l.push(p)}return l},e._lctf.readFeatureTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(o.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,a+f)}return l},e._lctf.readScriptTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,l.default=e._lctf.readLangSysTable(n,a+c);var u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=o.readASCII(n,r,4);r+=4;var p=o.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,a+p)}return l},e._lctf.readLangSysTable=function(n,r){var o=e._bin,a={};o.readUshort(n,r),r+=2,a.reqFeature=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.features=o.readUshorts(n,r,l),a},e.CFF={},e.CFF.parse=function(n,r,o){var a=e._bin;(n=new Uint8Array(n.buffer,r,o))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var p=f[0],g=[];r=e.CFF.readIndex(n,r,g);var m=[];for(u=0;u<g.length-1;u++)m.push(a.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,p),p.CharStrings){r=p.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var d=[];for(u=0;u<g.length-1;u++)d.push(a.readBytes(n,r+g[u],g[u+1]-g[u]));p.CharStrings=d}if(p.ROS){r=p.FDArray;var y=[];for(r=e.CFF.readIndex(n,r,y),p.FDArray=[],u=0;u<y.length-1;u++){var b=e.CFF.readDict(n,r+y[u],r+y[u+1]);e.CFF._readFDict(n,b,m),p.FDArray.push(b)}r+=y[y.length-1],r=p.FDSelect,p.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var _=a.readUshort(n,r);for(r+=2,u=0;u<_+1;u++)p.FDSelect.push(a.readUshort(n,r),n[r+2]),r+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(n,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(n,p.charset,p.CharStrings.length)),e.CFF._readFDict(n,p,m),p},e.CFF._readFDict=function(n,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(n,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(n,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var h=0;h<l.length-1;h++)o.Subrs.push(a.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,o){e._bin;var a=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)a.push(n[r+u]);return a},e.CFF.readCharset=function(n,r,o){var a=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<o;u++){var h=a.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){h=a.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=a.readUshort(n,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,o){var a=e._bin,l=a.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,o){var a=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=a.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=a.readInt(n,r+1)/65535,u=5),o.val=f!=null?f:"o"+h,o.size=u},e.CFF.readCharString=function(n,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,p=null,g=null;u<=20&&(p=u,f=1),u==12&&(p=100*u+h,f=2),u!=19&&u!=20||(p=u,f=2),21<=u&&u<=27&&(p=u,f=1),u==28&&(g=l.readShort(n,r+1),f=3),29<=u&&u<=31&&(p=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,r+1)/65535,f=5),c.push(g!=null?g:"o"+p),r+=f}return c},e.CFF.readDict=function(n,r,o){for(var a=e._bin,l={},c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,p=null,g=null;if(u==28&&(g=a.readShort(n,r+1),f=3),u==29&&(g=a.readInt(n,r+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=a.readInt(n,r+1)/65535,f=5,"unknown number";if(u==30){var m=[];for(f=1;;){var d=n[r+f];f++;var y=d>>4,b=15&d;if(y!=15&&m.push(y),b!=15&&m.push(b),b==15)break}for(var x="",_=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],M=0;M<m.length;M++)x+=_[m[M]];g=parseFloat(x)}u<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),p!=null?(l[p]=c.length==1?c[0]:c,c=[]):c.push(g),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,o){n=new Uint8Array(n.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=a.readUshort(n,r);r+=2;var p=a.readUshort(n,r);r+=2;var g=a.readUint(n,r);r+=4;var m="p"+f+"e"+p,d=u.indexOf(g);if(d==-1){var y;d=l.tables.length,u.push(g);var b=a.readUshort(n,g);b==0?y=e.cmap.parse0(n,g):b==4?y=e.cmap.parse4(n,g):b==6?y=e.cmap.parse6(n,g):b==12?y=e.cmap.parse12(n,g):console.debug("unknown format: "+b,f,p,g),l.tables.push(y)}if(l[m]!=null)throw"multiple tables for one platform+encoding";l[m]=d}return l},e.cmap.parse0=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(n[r+c]);return a},e.cmap.parse4=function(n,r){var o=e._bin,a=r,l={};l.format=o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;var h=u/2;l.searchRange=o.readUshort(n,r),r+=2,l.entrySelector=o.readUshort(n,r),r+=2,l.rangeShift=o.readUshort(n,r),r+=2,l.endCount=o.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=o.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(o.readShort(n,r)),r+=2;for(l.idRangeOffset=o.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,a.firstCode=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(n,r)),r+=2;return a},e.cmap.parse12=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,r+=2,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4;var l=o.readUint(n,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=o.readUint(n,u+0),f=o.readUint(n,u+4),p=o.readUint(n,u+8);a.groups.push([h,f,p])}return a},e.glyf={},e.glyf.parse=function(n,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var o=e._bin,a=n._data,l=e._tabOffset(a,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var h=o.readUshort(a,l);if(l+=2,a.length-l<h)return null;c.instructions=o.readBytes(a,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var p=a[l];if(l++,c.flags.push(p),(8&p)!=0){var g=a[l];l++;for(var m=0;m<g;m++)c.flags.push(p),u++}}for(c.xs=[],u=0;u<f;u++){var d=(2&c.flags[u])!=0,y=(16&c.flags[u])!=0;d?(c.xs.push(y?a[l]:-a[l]),l++):y?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)d=(4&c.flags[u])!=0,y=(32&c.flags[u])!=0,d?(c.ys.push(y?a[l]:-a[l]),l++):y?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var b=0,x=0;for(u=0;u<f;u++)b+=c.xs[u],x+=c.ys[u],c.xs[u]=b,c.ys[u]=x}else{var _;c.parts=[];do{_=o.readUshort(a,l),l+=2;var M={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(M),M.glyphIndex=o.readUshort(a,l),l+=2,1&_){var w=o.readShort(a,l);l+=2;var E=o.readShort(a,l);l+=2}else w=o.readInt8(a,l),l++,E=o.readInt8(a,l),l++;2&_?(M.m.tx=w,M.m.ty=E):(M.p1=w,M.p2=E),8&_?(M.m.a=M.m.d=o.readF2dot14(a,l),l+=2):64&_?(M.m.a=o.readF2dot14(a,l),l+=2,M.m.d=o.readF2dot14(a,l),l+=2):128&_&&(M.m.a=o.readF2dot14(a,l),l+=2,M.m.b=o.readF2dot14(a,l),l+=2,M.m.c=o.readF2dot14(a,l),l+=2,M.m.d=o.readF2dot14(a,l),l+=2)}while(32&_);if(256&_){var v=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<v;u++)c.instr.push(a[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(n,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(n,o);o+=2;var p=e._lctf.numOfOnes(f);f!=0&&(u.pos=e.GPOS.readValueRecord(n,o,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,o),o+=2;var g=l.readUshort(n,o);o+=2,p=e._lctf.numOfOnes(f);var m=e._lctf.numOfOnes(g);if(u.fmt==1){u.pairsets=[];var d=l.readUshort(n,o);o+=2;for(var y=0;y<d;y++){var b=c+l.readUshort(n,o);o+=2;var x=l.readUshort(n,b);b+=2;for(var _=[],M=0;M<x;M++){var w=l.readUshort(n,b);b+=2,f!=0&&(L=e.GPOS.readValueRecord(n,b,f),b+=2*p),g!=0&&(F=e.GPOS.readValueRecord(n,b,g),b+=2*m),_.push({gid2:w,val1:L,val2:F})}u.pairsets.push(_)}}if(u.fmt==2){var E=l.readUshort(n,o);o+=2;var v=l.readUshort(n,o);o+=2;var S=l.readUshort(n,o);o+=2;var T=l.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+E),u.classDef2=e._lctf.readClassDef(n,c+v),u.matrix=[],y=0;y<S;y++){var A=[];for(M=0;M<T;M++){var L=null,F=null;f!=0&&(L=e.GPOS.readValueRecord(n,o,f),o+=2*p),g!=0&&(F=e.GPOS.readValueRecord(n,o,g),o+=2*m),A.push({val1:L,val2:F})}u.matrix.push(A)}}}else{if(r==9&&u.fmt==1){var I=l.readUshort(n,o);o+=2;var W=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=I;else if(a.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(n,a.ltype,c+W)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(n,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(n,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(n,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(n,r):0),r+=8&o?2:0,l},e.GSUB={},e.GSUB.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(n,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r!=1&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var f=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,f),o+=2*u.newg.length}}else if(r==4){u.vals=[],f=l.readUshort(n,o),o+=2;for(var p=0;p<f;p++){var g=l.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+g))}}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var d=l.readUshort(n,o);for(o+=2,p=0;p<d;p++){var y=l.readUshort(n,o);o+=2,u.scset.push(y==0?null:e.GSUB.readSubClassSet(n,c+y))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(p=0;p<3;p++){f=l.readUshort(n,o),o+=2;for(var b=[],x=0;x<f;x++)b.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*x)));o+=2*f,p==0&&(u.backCvg=b),p==1&&(u.inptCvg=b),p==2&&(u.ahedCvg=b)}f=l.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,f)}}else{if(r==7&&u.fmt==1){var _=l.readUshort(n,o);o+=2;var M=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=_;else if(a.ltype!=_)throw"invalid extension substitution";return e.GSUB.subt(n,a.ltype,c+M)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var o=e._bin.readUshort,a=r,l=[],c=o(n,r);r+=2;for(var u=0;u<c;u++){var h=o(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,a+h))}return l},e.GSUB.readSubClassRule=function(n,r){var o=e._bin.readUshort,a={},l=o(n,r),c=o(n,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(n,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),a},e.GSUB.readSubstLookupRecords=function(n,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(n,r),a(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,a+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,r);r+=2,c==1&&u--,a[l[c]]=o.readUshorts(n,r,u),r+=2*a[l[c]].length}return u=o.readUshort(n,r),r+=2,a.subst=o.readUshorts(n,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,a+h))}return l},e.GSUB.readLigature=function(n,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(n,r)),r+=2;return a},e.head={},e.head.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.fontRevision=a.readFixed(n,r),r+=4,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4,l.flags=a.readUshort(n,r),r+=2,l.unitsPerEm=a.readUshort(n,r),r+=2,l.created=a.readUint64(n,r),r+=8,l.modified=a.readUint64(n,r),r+=8,l.xMin=a.readShort(n,r),r+=2,l.yMin=a.readShort(n,r),r+=2,l.xMax=a.readShort(n,r),r+=2,l.yMax=a.readShort(n,r),r+=2,l.macStyle=a.readUshort(n,r),r+=2,l.lowestRecPPEM=a.readUshort(n,r),r+=2,l.fontDirectionHint=a.readShort(n,r),r+=2,l.indexToLocFormat=a.readShort(n,r),r+=2,l.glyphDataFormat=a.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.ascender=a.readShort(n,r),r+=2,l.descender=a.readShort(n,r),r+=2,l.lineGap=a.readShort(n,r),r+=2,l.advanceWidthMax=a.readUshort(n,r),r+=2,l.minLeftSideBearing=a.readShort(n,r),r+=2,l.minRightSideBearing=a.readShort(n,r),r+=2,l.xMaxExtent=a.readShort(n,r),r+=2,l.caretSlopeRise=a.readShort(n,r),r+=2,l.caretSlopeRun=a.readShort(n,r),r+=2,l.caretOffset=a.readShort(n,r),r+=2,r+=8,l.metricDataFormat=a.readShort(n,r),r+=2,l.numberOfHMetrics=a.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<a.maxp.numGlyphs;f++)f<a.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,o,a){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,o,a);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,o=l.readUshort(n,r),r+=2;var p=l.readUshort(n,r);r+=2;var g=p>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,o,a){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var p=f>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,o){var a=e._bin,l=-1,c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2;var f=a.readUshort(n,r);r+=2;var p=a.readShort(n,r);r+=2,h!=l&&(o.glyph1.push(h),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(f),g.vals.push(p),l=h}return r},e.loca={},e.loca.parse=function(n,r,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,o){var a=e._bin,l={},c=a.readUint(n,r);return r+=4,l.numGlyphs=a.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(n,r),r+=2,l.maxContours=a.readUshort(n,r),r+=2,l.maxCompositePoints=a.readUshort(n,r),r+=2,l.maxCompositeContours=a.readUshort(n,r),r+=2,l.maxZones=a.readUshort(n,r),r+=2,l.maxTwilightPoints=a.readUshort(n,r),r+=2,l.maxStorage=a.readUshort(n,r),r+=2,l.maxFunctionDefs=a.readUshort(n,r),r+=2,l.maxInstructionDefs=a.readUshort(n,r),r+=2,l.maxStackElements=a.readUshort(n,r),r+=2,l.maxSizeOfInstructions=a.readUshort(n,r),r+=2,l.maxComponentElements=a.readUshort(n,r),r+=2,l.maxComponentDepth=a.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,o){var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,p=0;p<c;p++){var g=a.readUshort(n,r);r+=2;var m=a.readUshort(n,r);r+=2;var d=a.readUshort(n,r);r+=2;var y=a.readUshort(n,r);r+=2;var b=a.readUshort(n,r);r+=2;var x=a.readUshort(n,r);r+=2;var _,M=h[y],w=f+12*c+x;if(g==0)_=a.readUnicode(n,w,b/2);else if(g==3&&m==0)_=a.readUnicode(n,w,b/2);else if(m==0)_=a.readASCII(n,w,b);else if(m==1)_=a.readUnicode(n,w,b/2);else if(m==3)_=a.readUnicode(n,w,b/2);else{if(g!=1)throw"unknown encoding "+m+", platformID: "+g;_=a.readASCII(n,w,b),console.debug("reading unknown MAC encoding "+m+" as ASCII")}var E="p"+g+","+d.toString(16);l[E]==null&&(l[E]={}),l[E][M!==void 0?M:y]=_,l[E]._lang=d}for(var v in l)if(l[v].postScriptName!=null&&l[v]._lang==1033)return l[v];for(var v in l)if(l[v].postScriptName!=null&&l[v]._lang==0)return l[v];for(var v in l)if(l[v].postScriptName!=null&&l[v]._lang==3084)return l[v];for(var v in l)if(l[v].postScriptName!=null)return l[v];for(var v in l){u=v;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,o){var a=e._bin.readUshort(n,r);r+=2;var l={};if(a==0)e["OS/2"].version0(n,r,l);else if(a==1)e["OS/2"].version1(n,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(n,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(n,r),r+=2,o.usWeightClass=a.readUshort(n,r),r+=2,o.usWidthClass=a.readUshort(n,r),r+=2,o.fsType=a.readUshort(n,r),r+=2,o.ySubscriptXSize=a.readShort(n,r),r+=2,o.ySubscriptYSize=a.readShort(n,r),r+=2,o.ySubscriptXOffset=a.readShort(n,r),r+=2,o.ySubscriptYOffset=a.readShort(n,r),r+=2,o.ySuperscriptXSize=a.readShort(n,r),r+=2,o.ySuperscriptYSize=a.readShort(n,r),r+=2,o.ySuperscriptXOffset=a.readShort(n,r),r+=2,o.ySuperscriptYOffset=a.readShort(n,r),r+=2,o.yStrikeoutSize=a.readShort(n,r),r+=2,o.yStrikeoutPosition=a.readShort(n,r),r+=2,o.sFamilyClass=a.readShort(n,r),r+=2,o.panose=a.readBytes(n,r,10),r+=10,o.ulUnicodeRange1=a.readUint(n,r),r+=4,o.ulUnicodeRange2=a.readUint(n,r),r+=4,o.ulUnicodeRange3=a.readUint(n,r),r+=4,o.ulUnicodeRange4=a.readUint(n,r),r+=4,o.achVendID=[a.readInt8(n,r),a.readInt8(n,r+1),a.readInt8(n,r+2),a.readInt8(n,r+3)],r+=4,o.fsSelection=a.readUshort(n,r),r+=2,o.usFirstCharIndex=a.readUshort(n,r),r+=2,o.usLastCharIndex=a.readUshort(n,r),r+=2,o.sTypoAscender=a.readShort(n,r),r+=2,o.sTypoDescender=a.readShort(n,r),r+=2,o.sTypoLineGap=a.readShort(n,r),r+=2,o.usWinAscent=a.readUshort(n,r),r+=2,o.usWinDescent=a.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,o){var a=e._bin;return r=e["OS/2"].version0(n,r,o),o.ulCodePageRange1=a.readUint(n,r),r+=4,o.ulCodePageRange2=a.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,o){var a=e._bin;return r=e["OS/2"].version1(n,r,o),o.sxHeight=a.readShort(n,r),r+=2,o.sCapHeight=a.readShort(n,r),r+=2,o.usDefault=a.readUshort(n,r),r+=2,o.usBreak=a.readUshort(n,r),r+=2,o.usMaxContext=a.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,o){var a=e._bin;return r=e["OS/2"].version2(n,r,o),o.usLowerOpticalPointSize=a.readUshort(n,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,o){var a=e._bin,l={};return l.version=a.readFixed(n,r),r+=4,l.italicAngle=a.readFixed(n,r),r+=4,l.underlinePosition=a.readShort(n,r),r+=2,l.underlineThickness=a.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var a=n.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),n.SVG.entries[r]=a),a)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,o)}else n.glyf&&e.U._drawGlyf(r,n,o);return o},e.U._drawGlyf=function(n,r,o){var a=r.glyf[n];a==null&&(a=r.glyf[n]=e.glyf._parseGlyf(r,n)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(n,r){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,h=c==l?a:c+1,f=1&n.flags[c],p=1&n.flags[u],g=1&n.flags[h],m=n.xs[c],d=n.ys[c];if(c==a)if(f){if(!p){e.U.P.moveTo(r,m,d);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else p?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+m)/2,(n.ys[u]+d)/2);f?p&&e.U.P.lineTo(r,m,d):g?e.U.P.qcurveTo(r,m,d,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,m,d,(m+n.xs[h])/2,(d+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,o){for(var a=0;a<n.parts.length;a++){var l={cmds:[],crds:[]},c=n.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],p=l.crds[h+1];o.crds.push(f*u.a+p*u.b+u.tx),o.crds.push(f*u.c+p*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)o.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var o=e._lctf.getInterval(r,n);return o==-1?0:r[o+2]},e.U.getPairAdjustment=function(n,r,o){var a=0,l=!1;if(n.GPOS)for(var c=n.GPOS,u=c.lookupList,h=c.featureList,f=[],p=0;p<h.length;p++){var g=h[p];if(g.tag=="kern"){l=!0;for(var m=0;m<g.tab.length;m++)if(!f[g.tab[m]]){f[g.tab[m]]=!0;for(var d=u[g.tab[m]],y=0;y<d.tabs.length;y++)if(d.tabs[y]!=null){var b,x=d.tabs[y];if((!x.coverage||(b=e._lctf.coverageIndex(x.coverage,r))!=-1)&&d.ltype!=1){if(d.ltype==2){var _;if(x.fmt==1){var M=x.pairsets[b];for(p=0;p<M.length;p++)M[p].gid2==o&&(_=M[p])}else if(x.fmt==2){var w=e.U._getGlyphClass(r,x.classDef1),E=e.U._getGlyphClass(o,x.classDef2);_=x.matrix[w][E]}_&&_.val1&&_.val1[2]&&(a+=_.val1[2]),_&&_.val2&&_.val2[0]&&(a+=_.val2[0])}}}}}}if(n.kern&&!l){var v=n.kern.glyph1.indexOf(r);if(v!=-1){var S=n.kern.rval[v].glyph2.indexOf(o);S!=-1&&(a+=n.kern.rval[v].vals[S])}}return a},e.U._applySubs=function(n,r,o,a){for(var l=n.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,h=o.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(o.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(o.ltype==4)for(var f=h.vals[u],p=0;p<f.length;p++){var g=f[p],m=g.chain.length;if(!(m>l)){for(var d=!0,y=0,b=0;b<m;b++){for(;n[r+y+(1+b)]==-1;)y++;g.chain[b]!=n[r+y+(1+b)]&&(d=!1)}if(d){for(n[r]=g.nglyph,b=0;b<m+y;b++)n[r+b+1]=-1;break}}}else if(o.ltype==5&&h.fmt==2)for(var x=e._lctf.getInterval(h.cDef,n[r]),_=h.cDef[x+2],M=h.scset[_],w=0;w<M.length;w++){var E=M[w],v=E.input;if(!(v.length>l)){for(d=!0,b=0;b<v.length;b++){var S=e._lctf.getInterval(h.cDef,n[r+1+b]);if(x==-1&&h.cDef[S+2]!=v[b]){d=!1;break}}if(d){var T=E.substLookupRecords;for(p=0;p<T.length;p+=2)T[p],T[p+1]}}}else if(o.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var A=h.lookupRec;for(w=0;w<A.length;w+=2){x=A[w];var L=a[A[w+1]];e.U._applySubs(n,r+x,L,a)}}}}},e.U._glsCovered=function(n,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],n[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,u),p=0;p<f.crds.length;p+=2)a.crds.push(f.crds[p]+l),a.crds.push(f.crds[p+1]);for(o&&a.cmds.push(o),p=0;p<f.cmds.length;p++)a.cmds.push(f.cmds[p]);o&&a.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(n,r,o){n.cmds.push("M"),n.crds.push(r,o)},e.U.P.lineTo=function(n,r,o){n.cmds.push("L"),n.crds.push(r,o)},e.U.P.curveTo=function(n,r,o,a,l,c,u){n.cmds.push("C"),n.crds.push(r,o,a,l,c,u)},e.U.P.qcurveTo=function(n,r,o,a,l){n.cmds.push("Q"),n.crds.push(r,o,a,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,o,a,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,p=r.open,g=0,m=r.x,d=r.y,y=0,b=0,x=0,_=0,M=0,w=0,E=0,v=0,S=0,T=0,A={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,A);var L=A.val;if(g+=A.size,L=="o1"||L=="o18")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(L=="o3"||L=="o23")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(L=="o4")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),p&&e.U.P.closePath(l),d+=c.pop(),e.U.P.moveTo(l,m,d),p=!0;else if(L=="o5")for(;c.length>0;)m+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,m,d);else if(L=="o6"||L=="o7")for(var F=c.length,I=L=="o6",W=0;W<F;W++){var U=c.shift();I?m+=U:d+=U,I=!I,e.U.P.lineTo(l,m,d)}else if(L=="o8"||L=="o24"){F=c.length;for(var H=0;H+6<=F;)y=m+c.shift(),b=d+c.shift(),x=y+c.shift(),_=b+c.shift(),m=x+c.shift(),d=_+c.shift(),e.U.P.curveTo(l,y,b,x,_,m,d),H+=6;L=="o24"&&(m+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,m,d))}else{if(L=="o11")break;if(L=="o1234"||L=="o1235"||L=="o1236"||L=="o1237")L=="o1234"&&(b=d,x=(y=m+c.shift())+c.shift(),T=_=b+c.shift(),w=_,v=d,m=(E=(M=(S=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,y,b,x,_,S,T),e.U.P.curveTo(l,M,w,E,v,m,d)),L=="o1235"&&(y=m+c.shift(),b=d+c.shift(),x=y+c.shift(),_=b+c.shift(),S=x+c.shift(),T=_+c.shift(),M=S+c.shift(),w=T+c.shift(),E=M+c.shift(),v=w+c.shift(),m=E+c.shift(),d=v+c.shift(),c.shift(),e.U.P.curveTo(l,y,b,x,_,S,T),e.U.P.curveTo(l,M,w,E,v,m,d)),L=="o1236"&&(y=m+c.shift(),b=d+c.shift(),x=y+c.shift(),T=_=b+c.shift(),w=_,E=(M=(S=x+c.shift())+c.shift())+c.shift(),v=w+c.shift(),m=E+c.shift(),e.U.P.curveTo(l,y,b,x,_,S,T),e.U.P.curveTo(l,M,w,E,v,m,d)),L=="o1237"&&(y=m+c.shift(),b=d+c.shift(),x=y+c.shift(),_=b+c.shift(),S=x+c.shift(),T=_+c.shift(),M=S+c.shift(),w=T+c.shift(),E=M+c.shift(),v=w+c.shift(),Math.abs(E-m)>Math.abs(v-d)?m=E+c.shift():d=v+c.shift(),e.U.P.curveTo(l,y,b,x,_,S,T),e.U.P.curveTo(l,M,w,E,v,m,d));else if(L=="o14"){if(c.length>0&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),c.length==4){var J=c.shift(),D=c.shift(),X=c.shift(),V=c.shift(),Y=e.CFF.glyphBySE(o,X),ee=e.CFF.glyphBySE(o,V);e.U._drawCFF(o.CharStrings[Y],r,o,a,l),r.x=J,r.y=D,e.U._drawCFF(o.CharStrings[ee],r,o,a,l)}p&&(e.U.P.closePath(l),p=!1)}else if(L=="o19"||L=="o20")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(L=="o21")c.length>2&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),d+=c.pop(),m+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,m,d),p=!0;else if(L=="o22")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),m+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,m,d),p=!0;else if(L=="o25"){for(;c.length>6;)m+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,m,d);y=m+c.shift(),b=d+c.shift(),x=y+c.shift(),_=b+c.shift(),m=x+c.shift(),d=_+c.shift(),e.U.P.curveTo(l,y,b,x,_,m,d)}else if(L=="o26")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,b=d+c.shift(),m=x=y+c.shift(),d=(_=b+c.shift())+c.shift(),e.U.P.curveTo(l,y,b,x,_,m,d);else if(L=="o27")for(c.length%2&&(d+=c.shift());c.length>0;)b=d,x=(y=m+c.shift())+c.shift(),_=b+c.shift(),m=x+c.shift(),d=_,e.U.P.curveTo(l,y,b,x,_,m,d);else if(L=="o10"||L=="o29"){var re=L=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var ne=c.pop(),Z=re.Subrs[ne+re.Bias];r.x=m,r.y=d,r.nStems=u,r.haveWidth=h,r.width=f,r.open=p,e.U._drawCFF(Z,r,o,a,l),m=r.x,d=r.y,u=r.nStems,h=r.haveWidth,f=r.width,p=r.open}}else if(L=="o30"||L=="o31"){var ae=c.length,j=(H=0,L=="o31");for(H+=ae-(F=-3&ae);H<F;)j?(b=d,x=(y=m+c.shift())+c.shift(),d=(_=b+c.shift())+c.shift(),F-H==5?(m=x+c.shift(),H++):m=x,j=!1):(y=m,b=d+c.shift(),x=y+c.shift(),_=b+c.shift(),m=x+c.shift(),F-H==5?(d=_+c.shift(),H++):d=_,j=!0),e.U.P.curveTo(l,y,b,x,_,m,d),H+=4}else{if((L+"").charAt(0)=="o")throw console.debug("Unknown operation: "+L,n),L;c.push(L)}}}r.x=m,r.y=d,r.nStems=u,r.haveWidth=h,r.width=f,r.open=p};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Xb(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(L,F){for(var I=new t(31),W=0;W<31;++W)I[W]=F+=1<<L[W-1];var U=new i(I[30]);for(W=1;W<30;++W)for(var H=I[W];H<I[W+1];++H)U[H]=H-I[W]<<5|W;return[I,U]},l=a(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=a(r,0)[0],f=new t(32768),p=0;p<32768;++p){var g=(43690&p)>>>1|(21845&p)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[p]=((65280&g)>>>8|(255&g)<<8)>>>1}var m=function(L,F,I){for(var W=L.length,U=0,H=new t(F);U<W;++U)++H[L[U]-1];var J,D=new t(F);for(U=0;U<F;++U)D[U]=D[U-1]+H[U-1]<<1;if(I){J=new t(1<<F);var X=15-F;for(U=0;U<W;++U)if(L[U])for(var V=U<<4|L[U],Y=F-L[U],ee=D[L[U]-1]++<<Y,re=ee|(1<<Y)-1;ee<=re;++ee)J[f[ee]>>>X]=V}else for(J=new t(W),U=0;U<W;++U)L[U]&&(J[U]=f[D[L[U]-1]++]>>>15-L[U]);return J},d=new e(288);for(p=0;p<144;++p)d[p]=8;for(p=144;p<256;++p)d[p]=9;for(p=256;p<280;++p)d[p]=7;for(p=280;p<288;++p)d[p]=8;var y=new e(32);for(p=0;p<32;++p)y[p]=5;var b=m(d,9,1),x=m(y,5,1),_=function(L){for(var F=L[0],I=1;I<L.length;++I)L[I]>F&&(F=L[I]);return F},M=function(L,F,I){var W=F/8|0;return(L[W]|L[W+1]<<8)>>(7&F)&I},w=function(L,F){var I=F/8|0;return(L[I]|L[I+1]<<8|L[I+2]<<16)>>(7&F)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],v=function(L,F,I){var W=new Error(F||E[L]);if(W.code=L,Error.captureStackTrace&&Error.captureStackTrace(W,v),!I)throw W;return W},S=function(L,F,I){var W=L.length;if(!W||I&&!I.l&&W<5)return F||new e(0);var U=!F||I,H=!I||I.i;I||(I={}),F||(F=new e(3*W));var J,D=function(fe){var Le=F.length;if(fe>Le){var Se=new e(Math.max(2*Le,fe));Se.set(F),F=Se}},X=I.f||0,V=I.p||0,Y=I.b||0,ee=I.l,re=I.d,ne=I.m,Z=I.n,ae=8*W;do{if(!ee){I.f=X=M(L,V,1);var j=M(L,V+1,3);if(V+=3,!j){var C=L[(_e=((J=V)/8|0)+(7&J&&1)+4)-4]|L[_e-3]<<8,R=_e+C;if(R>W){H&&v(0);break}U&&D(Y+C),F.set(L.subarray(_e,R),Y),I.b=Y+=C,I.p=V=8*R;continue}if(j==1)ee=b,re=x,ne=9,Z=5;else if(j==2){var B=M(L,V,31)+257,G=M(L,V+10,15)+4,q=B+M(L,V+5,31)+1;V+=14;for(var Q=new e(q),se=new e(19),le=0;le<G;++le)se[o[le]]=M(L,V+3*le,7);V+=3*G;var ye=_(se),oe=(1<<ye)-1,de=m(se,ye,1);for(le=0;le<q;){var _e,ue=de[M(L,V,oe)];if(V+=15&ue,(_e=ue>>>4)<16)Q[le++]=_e;else{var z=0,P=0;for(_e==16?(P=3+M(L,V,3),V+=2,z=Q[le-1]):_e==17?(P=3+M(L,V,7),V+=3):_e==18&&(P=11+M(L,V,127),V+=7);P--;)Q[le++]=z}}var $=Q.subarray(0,B),k=Q.subarray(B);ne=_($),Z=_(k),ee=m($,ne,1),re=m(k,Z,1)}else v(1);if(V>ae){H&&v(0);break}}U&&D(Y+131072);for(var ve=(1<<ne)-1,we=(1<<Z)-1,pe=V;;pe=V){var te=(z=ee[w(L,V)&ve])>>>4;if((V+=15&z)>ae){H&&v(0);break}if(z||v(2),te<256)F[Y++]=te;else{if(te==256){pe=V,ee=null;break}var Ce=te-254;if(te>264){var Pe=n[le=te-257];Ce=M(L,V,(1<<Pe)-1)+c[le],V+=Pe}var Me=re[w(L,V)&we],K=Me>>>4;if(Me||v(3),V+=15&Me,k=h[K],K>3&&(Pe=r[K],k+=w(L,V)&(1<<Pe)-1,V+=Pe),V>ae){H&&v(0);break}U&&D(Y+131072);for(var me=Y+Ce;Y<me;Y+=4)F[Y]=F[Y-k],F[Y+1]=F[Y+1-k],F[Y+2]=F[Y+2-k],F[Y+3]=F[Y+3-k];Y=me}}I.l=ee,I.p=pe,I.b=Y,ee&&(X=1,I.m=ne,I.d=re,I.n=Z)}while(!X);return Y==F.length?F:function(fe,Le,Se){(Le==null||Le<0)&&(Le=0),(Se==null||Se>fe.length)&&(Se=fe.length);var De=new(fe instanceof t?t:fe instanceof i?i:e)(Se-Le);return De.set(fe.subarray(Le,Se)),De}(F,0,Y)},T=new e(0),A=typeof TextDecoder!="undefined"&&new TextDecoder;try{A.decode(T,{stream:!0})}catch{}return s.convert_streams=function(L){var F=new DataView(L),I=0;function W(){var B=F.getUint16(I);return I+=2,B}function U(){var B=F.getUint32(I);return I+=4,B}function H(B){C.setUint16(R,B),R+=2}function J(B){C.setUint32(R,B),R+=4}for(var D={signature:U(),flavor:U(),length:U(),numTables:W(),reserved:W(),totalSfntSize:U(),majorVersion:W(),minorVersion:W(),metaOffset:U(),metaLength:U(),metaOrigLength:U(),privOffset:U(),privLength:U()},X=0;Math.pow(2,X)<=D.numTables;)X++;X--;for(var V=16*Math.pow(2,X),Y=16*D.numTables-V,ee=12,re=[],ne=0;ne<D.numTables;ne++)re.push({tag:U(),offset:U(),compLength:U(),origLength:U(),origChecksum:U()}),ee+=16;var Z,ae=new Uint8Array(12+16*re.length+re.reduce(function(B,G){return B+G.origLength+4},0)),j=ae.buffer,C=new DataView(j),R=0;return J(D.flavor),H(D.numTables),H(V),H(X),H(Y),re.forEach(function(B){J(B.tag),J(B.origChecksum),J(ee),J(B.origLength),B.outOffset=ee,(ee+=B.origLength)%4!=0&&(ee+=4-ee%4)}),re.forEach(function(B){var G,q=L.slice(B.offset,B.offset+B.compLength);if(B.compLength!=B.origLength){var Q=new Uint8Array(B.origLength);G=new Uint8Array(q,2),S(G,Q)}else Q=new Uint8Array(q);ae.set(Q,B.outOffset);var se=0;(ee=B.outOffset+B.origLength)%4!=0&&(se=4-ee%4),ae.set(new Uint8Array(se).buffer,B.outOffset+B.origLength),Z=ee+se}),j.slice(0,Z)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function qb(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,o=4,a=8,l=16,c=32;let u;function h(_){if(!u){const M={R:r,L:n,D:o,C:l,U:c,T:a};u=new Map;for(let w in i){let E=0;i[w].split(",").forEach(v=>{let[S,T]=v.split("+");S=parseInt(S,36),T=T?parseInt(T,36):0,u.set(E+=S,M[w]);for(let A=T;A--;)u.set(++E,M[w])})}}return u.get(_)||c}const f=1,p=2,g=3,m=4,d=[null,"isol","init","fina","medi"];function y(_){const M=new Uint8Array(_.length);let w=c,E=f,v=-1;for(let S=0;S<_.length;S++){const T=_.codePointAt(S);let A=h(T)|0,L=f;A&a||(w&(n|o|l)?A&(r|o|l)?(L=g,(E===f||E===g)&&M[v]++):A&(n|c)&&(E===p||E===m)&&M[v]--:w&(r|c)&&(E===p||E===m)&&M[v]--,E=M[S]=L,w=A,v=S,T>65535&&S++)}return M}function b(_,M){const w=[];for(let v=0;v<M.length;v++){const S=M.codePointAt(v);S>65535&&v++,w.push(s.U.codeToGlyph(_,S))}const E=_.GSUB;if(E){const{lookupList:v,featureList:S}=E;let T;const A=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,L=[];S.forEach(F=>{if(A.test(F.tag))for(let I=0;I<F.tab.length;I++){if(L[F.tab[I]])continue;L[F.tab[I]]=!0;const W=v[F.tab[I]],U=/^(isol|init|fina|medi)$/.test(F.tag);U&&!T&&(T=y(M));for(let H=0;H<w.length;H++)(!T||!U||d[T[H]]===F.tag)&&s.U._applySubs(w,H,W,v)}})}return w}function x(_){const M=Object.create(null),w={unitsPerEm:_.head.unitsPerEm,ascender:_.hhea.ascender,descender:_.hhea.descender,forEachGlyph(E,v,S,T){let A=0;const L=1/w.unitsPerEm*v,F=b(_,E);let I=0,W=-1;return F.forEach((U,H)=>{if(U!==-1){let J=M[U];if(!J){const{cmds:D,crds:X}=s.U.glyphToPath(_,U);let V="",Y=0;for(let ae=0,j=D.length;ae<j;ae++){const C=t[D[ae]];V+=D[ae];for(let R=1;R<=C;R++)V+=(R>1?",":"")+X[Y++]}let ee,re,ne,Z;if(X.length){ee=re=1/0,ne=Z=-1/0;for(let ae=0,j=X.length;ae<j;ae+=2){let C=X[ae],R=X[ae+1];C<ee&&(ee=C),R<re&&(re=R),C>ne&&(ne=C),R>Z&&(Z=R)}}else ee=ne=re=Z=0;J=M[U]={index:U,advanceWidth:_.hmtx.aWidth[U],xMin:ee,yMin:re,xMax:ne,yMax:Z,path:V,pathCommandCount:D.length}}W!==-1&&(A+=s.U.getPairAdjustment(_,W,U)*L),T.call(null,J,A,I),J.advanceWidth&&(A+=J.advanceWidth*L),S&&(A+=S*v),W=U}I+=E.codePointAt(I)>65535?2:1}),A}};return w}return function(M){const w=new Uint8Array(M,0,4),E=s._bin.readASCII(w,0,4);if(E==="wOFF")M=e(M);else if(E==="wOF2")throw new Error("woff2 fonts not supported");return x(s.parse(M)[0])}}const Yb=cs({name:"Typr Font Parser",dependencies:[jb,Xb,qb],init(s,e,t){const i=s(),n=e();return t(i,n)}}),qr={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Kb=new Ae;function kr(){return(self.performance||Date).now()}const kf=Object.create(null);function Zb(s,e){s=Qb({},s);const t=kr();if(s.font=$b(s.font||qr.defaultFontURL),s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||qr.sdfGlyphSize,s.colorRanges!=null){let h={};for(let f in s.colorRanges)if(s.colorRanges.hasOwnProperty(f)){let p=s.colorRanges[f];typeof p!="number"&&(p=Kb.set(p).getHex()),h[f]=p}s.colorRanges=h}Object.freeze(s);const{textureWidth:i,sdfExponent:n}=qr,{sdfGlyphSize:r}=s,o=i/r*4;let a=kf[r];if(!a){const h=document.createElement("canvas");h.width=i,h.height=r*256/o,a=kf[r]={glyphCount:0,sdfGlyphSize:r,sdfCanvas:h,sdfTexture:new Tt(h,void 0,void 0,void 0,Ft,Ft),contextLost:!1,glyphsByFont:new Map},a.sdfTexture.generateMipmaps=!1,Jb(a)}const{sdfTexture:l,sdfCanvas:c}=a;let u=a.glyphsByFont.get(s.font);u||a.glyphsByFont.set(s.font,u=new Map),tw(s).then(h=>{const{glyphIds:f,glyphPositions:p,fontSize:g,unitsPerEm:m,timings:d}=h,y=[],b=new Float32Array(f.length*4),x=g/m;let _=0,M=0;const w=kr();f.forEach((A,L)=>{let F=u.get(A);if(!F){const{path:H,pathBounds:J}=h.glyphData[A],D=Math.max(J[2]-J[0],J[3]-J[1])/r*(qr.sdfMargin*r+.5),X=a.glyphCount++,V=[J[0]-D,J[1]-D,J[2]+D,J[3]+D];u.set(A,F={path:H,atlasIndex:X,sdfViewBox:V}),y.push(F)}const{sdfViewBox:I}=F,W=p[M++],U=p[M++];b[_++]=W+I[0]*x,b[_++]=U+I[1]*x,b[_++]=W+I[2]*x,b[_++]=U+I[3]*x,f[L]=F.atlasIndex}),d.quads=(d.quads||0)+(kr()-w);const E=kr();d.sdf={};const v=c.height,S=Math.ceil(a.glyphCount/o),T=Math.pow(2,Math.ceil(Math.log2(S*r)));T>v&&(console.info(`Increasing SDF texture size ${v}->${T}`),Wb(c,i,T),l.dispose()),Si.all(y.map(A=>bp(A,a,s.gpuAccelerateSDF).then(({timing:L})=>{d.sdf[A.atlasIndex]=L}))).then(()=>{y.length&&!a.contextLost&&(wp(a),l.needsUpdate=!0),d.sdfTotal=kr()-E,d.total=kr()-t,e(Object.freeze({parameters:s,sdfTexture:l,sdfGlyphSize:r,sdfExponent:n,glyphBounds:b,glyphAtlasIndices:f,glyphColors:h.glyphColors,caretPositions:h.caretPositions,caretHeight:h.caretHeight,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings,get totalBounds(){return console.log("totalBounds deprecated, use blockBounds instead"),h.blockBounds},get totalBlockSize(){console.log("totalBlockSize deprecated, use blockBounds instead");const[A,L,F,I]=h.blockBounds;return[F-A,I-L]}}))})}),Si.all([]).then(()=>{a.contextLost||Vb(c)})}function bp({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=qr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/i)*i,f=Math.floor(u/(a/i))*i,p=e%4;return Gb(i,i,s,t,c,l,n,h,f,p,o)}function Jb(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(bp(r,s,!0))})}),Si.all(i).then(()=>{wp(s),s.sdfTexture.needsUpdate=!0})})}function Qb(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let ua;function $b(s){return ua||(ua=typeof document=="undefined"?{}:document.createElement("a")),ua.href=s,ua.href}function wp(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==i*n*4)&&(o=new Uint8Array(i*n*4),t.image={width:i,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,o)}}const ew=cs({name:"Typesetter",dependencies:[qr,Yb,Nb,Ib],init(s,e,t,i){const{defaultFontURL:n}=s;return t(e,i(),{defaultFontURL:n})}}),tw=cs({name:"Typesetter",dependencies:[ew,Pb],init(s,e){return function(t){const i=new e;return s.typeset(t,i.resolve),i}},getTransferables(s){const e=[s.glyphPositions.buffer,s.glyphIds.buffer];return s.caretPositions&&e.push(s.caretPositions.buffer),s.glyphColors&&e.push(s.glyphColors.buffer),e}}),nw=(()=>{const s={};function e(l){let c=s[l];if(!c){const u=new ur(1,1,l,l),h=u.clone(),f=u.attributes,p=h.attributes,g=new Qe,m=f.uv.count;for(let d=0;d<m;d++)p.position.array[d*3]*=-1,p.normal.array[d*3+2]*=-1;["position","normal","uv"].forEach(d=>{g.setAttribute(d,new Ve([...f[d].array,...p[d].array],f[d].itemSize))}),g.setIndex([...u.index.array,...h.index.array.map(d=>d+m)]),g.translate(.5,.5,0),c=s[l]=g}return c}const t="aTroikaGlyphBounds",i="aTroikaGlyphIndex",n="aTroikaGlyphColor";class r extends tu{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Mi,this.boundingBox=new an}computeBoundingSphere(){}computeBoundingBox(){}setSide(c){const u=this.getIndex().count;this.setDrawRange(c===yn?u/2:0,c===bi?u:u/2)}set detail(c){if(c!==this._detail){this._detail=c,(typeof c!="number"||c<1)&&(c=1);let u=e(c);["position","normal","uv"].forEach(h=>{this.attributes[h]=u.attributes[h].clone()}),this.setIndex(u.getIndex().clone())}}get detail(){return this._detail}set curveRadius(c){c!==this._curveRadius&&(this._curveRadius=c,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(c,u,h,f,p){o(this,t,c,4),o(this,i,u,1),o(this,n,p,3),this._blockBounds=h,this._chunkedBounds=f,a(this,u.length),this._updateBounds()}_updateBounds(){const c=this._blockBounds;if(c){const{curveRadius:u,boundingBox:h}=this;if(u){const{PI:f,floor:p,min:g,max:m,sin:d,cos:y}=Math,b=f/2,x=f*2,_=Math.abs(u),M=c[0]/_,w=c[2]/_,E=p((M+b)/x)!==p((w+b)/x)?-_:g(d(M)*_,d(w)*_),v=p((M-b)/x)!==p((w-b)/x)?_:m(d(M)*_,d(w)*_),S=p((M+f)/x)!==p((w+f)/x)?_*2:m(_-y(M)*_,_-y(w)*_);h.min.set(E,c[1],u<0?-S:0),h.max.set(v,c[3],u<0?0:S)}else h.min.set(c[0],c[1],0),h.max.set(c[2],c[3],0);h.getBoundingSphere(this.boundingSphere)}}applyClipRect(c){let u=this.getAttribute(i).count,h=this._chunkedBounds;if(h)for(let f=h.length;f--;){u=h[f].end;let p=h[f].rect;if(p[1]<c.w&&p[3]>c.y&&p[0]<c.z&&p[2]>c.x)break}a(this,u)}}r.prototype.setAttribute||(r.prototype.setAttribute=function(l,c){return this.attributes[l]=c,this});function o(l,c,u,h){const f=l.getAttribute(c);u?f&&f.array.length===u.length?(f.array.set(u),f.needsUpdate=!0):(l.setAttribute(c,new Ea(u,h)),delete l._maxInstanceCount,l.dispose()):f&&l.deleteAttribute(c)}function a(l,c){l[l.hasOwnProperty("instanceCount")?"instanceCount":"maxInstancedCount"]=c}return r})(),iw=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,rw=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,sw=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,ow=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function aw(s){const e=Sc(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new be},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new Ge(0,0,0,0)},uTroikaClipRect:{value:new Ge(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new be},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ae},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Rt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:iw,vertexTransform:rw,fragmentDefs:sw,fragmentColorTransform:ow,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(xp,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const lw=(()=>{const s=new qi({color:16777215,side:bi,transparent:!0}),e=8421504,t=new Fe,i=new O,n=new O,r=[],o=new O,a="+x+y";function l(y){return Array.isArray(y)?y[0]:y}let c=()=>{const y=new Ee(new ur(1,1),s);return c=()=>y,y},u=()=>{const y=new Ee(new ur(1,1,32,1),s);return u=()=>y,y};const h={type:"syncstart"},f={type:"synccomplete"},p=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],g=p.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class m extends Ee{constructor(){const b=new nw;super(b,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=e,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=a,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(b){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(b):(this._isSyncing=!0,this.dispatchEvent(h),Zb({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},x=>{this._isSyncing=!1,this._textRenderInfo=x,this.geometry.updateGlyphs(x.glyphBounds,x.glyphAtlasIndices,x.blockBounds,x.chunkedBounds,x.glyphColors);const _=this._queuedSyncs;_&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{_.forEach(M=>M&&M())})),this.dispatchEvent(f),b&&b()})))}onBeforeRender(b,x,_,M,w,E){this.sync(),w.isTroikaTextMaterial&&this._prepareForRender(w),w._hadOwnSide=w.hasOwnProperty("side"),this.geometry.setSide(w._actualSide=w.side),w.side=Qr}onAfterRender(b,x,_,M,w,E){w._hadOwnSide?w.side=w._actualSide:delete w.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let b=this._derivedMaterial;const x=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=s.clone());if((!b||b.baseMaterial!==x)&&(b=this._derivedMaterial=aw(x),x.addEventListener("dispose",function _(){x.removeEventListener("dispose",_),b.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let _=b._outlineMtl;return _||(_=b._outlineMtl=Object.create(b,{id:{value:b.id+.1}}),_.isTextOutlineMaterial=!0,_.depthWrite=!1,_.map=null,b.addEventListener("dispose",function M(){b.removeEventListener("dispose",M),_.dispose()})),[_,b]}else return b}set material(b){b&&b.isTroikaTextMaterial?(this._derivedMaterial=b,this._baseMaterial=b.baseMaterial):this._baseMaterial=b}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(b){this.geometry.detail=b}get curveRadius(){return this.geometry.curveRadius}set curveRadius(b){this.geometry.curveRadius=b}get customDepthMaterial(){return l(this.material).getDepthMaterial()}get customDistanceMaterial(){return l(this.material).getDistanceMaterial()}_prepareForRender(b){const x=b.isTextOutlineMaterial,_=b.uniforms,M=this.textRenderInfo;if(M){const{sdfTexture:v,blockBounds:S}=M;_.uTroikaSDFTexture.value=v,_.uTroikaSDFTextureSize.value.set(v.image.width,v.image.height),_.uTroikaSDFGlyphSize.value=M.sdfGlyphSize,_.uTroikaSDFExponent.value=M.sdfExponent,_.uTroikaTotalBounds.value.fromArray(S),_.uTroikaUseGlyphColors.value=!x&&!!M.glyphColors;let T=0,A=0,L=0,F,I,W,U=0,H=0;if(x){let{outlineWidth:D,outlineOffsetX:X,outlineOffsetY:V,outlineBlur:Y,outlineOpacity:ee}=this;T=this._parsePercent(D)||0,A=Math.max(0,this._parsePercent(Y)||0),F=ee,U=this._parsePercent(X)||0,H=this._parsePercent(V)||0}else L=Math.max(0,this._parsePercent(this.strokeWidth)||0),L&&(W=this.strokeColor,_.uTroikaStrokeColor.value.set(W==null?e:W),I=this.strokeOpacity,I==null&&(I=1)),F=this.fillOpacity;_.uTroikaDistanceOffset.value=T,_.uTroikaPositionOffset.value.set(U,H),_.uTroikaBlurRadius.value=A,_.uTroikaStrokeWidth.value=L,_.uTroikaStrokeOpacity.value=I,_.uTroikaFillOpacity.value=F==null?1:F,_.uTroikaCurveRadius.value=this.curveRadius||0;let J=this.clipRect;if(J&&Array.isArray(J)&&J.length===4)_.uTroikaClipRect.value.fromArray(J);else{const D=(this.fontSize||.1)*100;_.uTroikaClipRect.value.set(S[0]-D,S[1]-D,S[2]+D,S[3]+D)}this.geometry.applyClipRect(_.uTroikaClipRect.value)}_.uTroikaSDFDebug.value=!!this.debugSDF,b.polygonOffset=!!this.depthOffset,b.polygonOffsetFactor=b.polygonOffsetUnits=this.depthOffset||0;const w=x?this.outlineColor||0:this.color;if(w==null)delete b.color;else{const v=b.hasOwnProperty("color")?b.color:b.color=new Ae;(w!==v._input||typeof w=="object")&&v.set(v._input=w)}let E=this.orientation||a;if(E!==b._orientation){let v=_.uTroikaOrient.value;E=E.replace(/[^-+xyz]/g,"");let S=E!==a&&E.match(/^([-+])([xyz])([-+])([xyz])$/);if(S){let[,T,A,L,F]=S;i.set(0,0,0)[A]=T==="-"?1:-1,n.set(0,0,0)[F]=L==="-"?-1:1,t.lookAt(o,i.cross(n),n),v.setFromMatrix4(t)}else v.identity();b._orientation=E}}_parsePercent(b){if(typeof b=="string"){let x=b.match(/^(-?[\d.]+)%$/),_=x?parseFloat(x[1]):NaN;b=(isNaN(_)?0:_/100)*this.fontSize}return b}localPositionToTextCoords(b,x=new be){x.copy(b);const _=this.curveRadius;return _&&(x.x=Math.atan2(b.x,Math.abs(_)-Math.abs(b.z))*Math.abs(_)),x}worldPositionToTextCoords(b,x=new be){return i.copy(b),this.localPositionToTextCoords(this.worldToLocal(i),x)}raycast(b,x){const{textRenderInfo:_,curveRadius:M}=this;if(_){const w=_.blockBounds,E=M?u():c(),v=E.geometry,{position:S,uv:T}=v.attributes;for(let A=0;A<T.count;A++){let L=w[0]+T.getX(A)*(w[2]-w[0]);const F=w[1]+T.getY(A)*(w[3]-w[1]);let I=0;M&&(I=M-Math.cos(L/M)*M,L=Math.sin(L/M)*M),S.setXYZ(A,L,F,I)}v.boundingSphere=this.geometry.boundingSphere,v.boundingBox=this.geometry.boundingBox,E.matrixWorld=this.matrixWorld,E.material.side=this.material.side,r.length=0,E.raycast(b,r);for(let A=0;A<r.length;A++)r[A].object=this,x.push(r[A])}}copy(b){const x=this.geometry;return super.copy(b),this.geometry=x,g.forEach(_=>{this[_]=b[_]}),this}clone(){return new this.constructor().copy(this)}}p.forEach(y=>{const b="_private_"+y;Object.defineProperty(m.prototype,y,{get(){return this[b]},set(x){x!==this[b]&&(this[b]=x,this._needsSync=!0)}})});let d=!1;return Object.defineProperty(m.prototype,"anchor",{get(){return this._deprecated_anchor},set(y){this._deprecated_anchor=y,d||(console.warn("TextMesh: `anchor` has been deprecated; use `anchorX` and `anchorY` instead."),d=!0),Array.isArray(y)?(this.anchorX=`${(+y[0]||0)*100}%`,this.anchorY=`${(+y[1]||0)*100}%`):this.anchorX=this.anchorY=0}}),m})();function cw(s){let e;const t=s[43].default,i=ni(t,s,s[54],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r[1]&8388608)&&$n(i,t,n,n[54],e?ti(t,n[54],r,null):ei(n[54]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function uw(s){let e,t,i;function n(o){s[44](o)}let r={mesh:s[13],lookAt:s[12],position:s[1],scale:s[2],rotation:s[3],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],interactive:s[10],ignorePointer:s[11],viewportAware:s[4],$$slots:{default:[cw]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new fp({props:r}),Zn.push(()=>yi(e,"inViewport",n)),e.$on("click",s[45]),e.$on("contextmenu",s[46]),e.$on("pointerup",s[47]),e.$on("pointerdown",s[48]),e.$on("pointerenter",s[49]),e.$on("pointerleave",s[50]),e.$on("pointermove",s[51]),e.$on("viewportenter",s[52]),e.$on("viewportleave",s[53]),{c(){$e(e.$$.fragment)},l(o){et(e.$$.fragment,o)},m(o,a){tt(e,o,a),i=!0},p(o,a){const l={};a[0]&4096&&(l.lookAt=o[12]),a[0]&2&&(l.position=o[1]),a[0]&4&&(l.scale=o[2]),a[0]&8&&(l.rotation=o[3]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.frustumCulled=o[7]),a[0]&256&&(l.renderOrder=o[8]),a[0]&512&&(l.visible=o[9]),a[0]&1024&&(l.interactive=o[10]),a[0]&2048&&(l.ignorePointer=o[11]),a[0]&16&&(l.viewportAware=o[4]),a[1]&8388608&&(l.$$scope={dirty:a,ctx:o}),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],xi(()=>t=!1)),e.$set(l)},i(o){i||(Ue(e.$$.fragment,o),i=!0)},o(o){Oe(e.$$.fragment,o),i=!1},d(o){nt(e,o)}}}function hw(s,e,t){let{$$slots:i={},$$scope:n}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:p=void 0}=e,{visible:g=void 0}=e,{interactive:m=!1}=e,{ignorePointer:d=!1}=e,{lookAt:y=void 0}=e,{text:b=void 0}=e,{anchorX:x=void 0}=e,{anchorY:_=void 0}=e,{curveRadius:M=void 0}=e,{font:w=void 0}=e,{fontSize:E=void 0}=e,{letterSpacing:v=void 0}=e,{lineHeight:S=void 0}=e,{maxWidth:T=void 0}=e,{overflowWrap:A=void 0}=e,{textAlign:L=void 0}=e,{textIndent:F=void 0}=e,{whiteSpace:I=void 0}=e,{material:W=void 0}=e,{color:U=void 0}=e,{depthOffset:H=void 0}=e,{clipRect:J=void 0}=e,{glyphGeometryDetail:D=void 0}=e,{sdfGlyphSize:X=void 0}=e,{outlineWidth:V=void 0}=e,{outlineColor:Y=void 0}=e,{outlineOpacity:ee=void 0}=e,{outlineBlur:re=void 0}=e,{outlineOffsetX:ne=void 0}=e,{outlineOffsetY:Z=void 0}=e,{strokeWidth:ae=void 0}=e,{strokeColor:j=void 0}=e,{strokeOpacity:C=void 0}=e,{fillOpacity:R=void 0}=e;const B=new lw,G=()=>B,{invalidate:q}=ri(),Q=so();St(()=>{B.dispose()});function se(k){c=k,t(0,c)}function le(k){We.call(this,s,k)}function ye(k){We.call(this,s,k)}function oe(k){We.call(this,s,k)}function de(k){We.call(this,s,k)}function _e(k){We.call(this,s,k)}function ue(k){We.call(this,s,k)}function z(k){We.call(this,s,k)}function P(k){We.call(this,s,k)}function $(k){We.call(this,s,k)}return s.$$set=k=>{"position"in k&&t(1,r=k.position),"scale"in k&&t(2,o=k.scale),"rotation"in k&&t(3,a=k.rotation),"viewportAware"in k&&t(4,l=k.viewportAware),"inViewport"in k&&t(0,c=k.inViewport),"castShadow"in k&&t(5,u=k.castShadow),"receiveShadow"in k&&t(6,h=k.receiveShadow),"frustumCulled"in k&&t(7,f=k.frustumCulled),"renderOrder"in k&&t(8,p=k.renderOrder),"visible"in k&&t(9,g=k.visible),"interactive"in k&&t(10,m=k.interactive),"ignorePointer"in k&&t(11,d=k.ignorePointer),"lookAt"in k&&t(12,y=k.lookAt),"text"in k&&t(14,b=k.text),"anchorX"in k&&t(15,x=k.anchorX),"anchorY"in k&&t(16,_=k.anchorY),"curveRadius"in k&&t(17,M=k.curveRadius),"font"in k&&t(18,w=k.font),"fontSize"in k&&t(19,E=k.fontSize),"letterSpacing"in k&&t(20,v=k.letterSpacing),"lineHeight"in k&&t(21,S=k.lineHeight),"maxWidth"in k&&t(22,T=k.maxWidth),"overflowWrap"in k&&t(23,A=k.overflowWrap),"textAlign"in k&&t(24,L=k.textAlign),"textIndent"in k&&t(25,F=k.textIndent),"whiteSpace"in k&&t(26,I=k.whiteSpace),"material"in k&&t(27,W=k.material),"color"in k&&t(28,U=k.color),"depthOffset"in k&&t(29,H=k.depthOffset),"clipRect"in k&&t(30,J=k.clipRect),"glyphGeometryDetail"in k&&t(31,D=k.glyphGeometryDetail),"sdfGlyphSize"in k&&t(32,X=k.sdfGlyphSize),"outlineWidth"in k&&t(33,V=k.outlineWidth),"outlineColor"in k&&t(34,Y=k.outlineColor),"outlineOpacity"in k&&t(35,ee=k.outlineOpacity),"outlineBlur"in k&&t(36,re=k.outlineBlur),"outlineOffsetX"in k&&t(37,ne=k.outlineOffsetX),"outlineOffsetY"in k&&t(38,Z=k.outlineOffsetY),"strokeWidth"in k&&t(39,ae=k.strokeWidth),"strokeColor"in k&&t(40,j=k.strokeColor),"strokeOpacity"in k&&t(41,C=k.strokeOpacity),"fillOpacity"in k&&t(42,R=k.fillOpacity),"$$scope"in k&&t(54,n=k.$$scope)},s.$$.update=()=>{if(s.$$.dirty[0]&2147467264|s.$$.dirty[1]&4095){const k=G();b!==void 0&&(k.text=b),x!==void 0&&(k.anchorX=x),_!==void 0&&(k.anchorY=_),M!==void 0&&(k.curveRadius=M),w!==void 0&&(k.font=w),E!==void 0&&(k.fontSize=E),v!==void 0&&(k.letterSpacing=v),S!==void 0&&(k.lineHeight=S),T!==void 0&&(k.maxWidth=T),A!==void 0&&(k.overflowWrap=A),L!==void 0&&(k.textAlign=L),F!==void 0&&(k.textIndent=F),I!==void 0&&(k.whiteSpace=I),W&&(k.material=W),U!==void 0&&(k.color=U),H!==void 0&&(k.depthOffset=H),J!==void 0&&(k.clipRect=J),D!==void 0&&(k.glyphGeometryDetail=D),X!==void 0&&(k.sdfGlyphSize=X),V!==void 0&&(k.outlineWidth=V),Y!==void 0&&(k.outlineColor=Y),ee!==void 0&&(k.outlineOpacity=ee),re!==void 0&&(k.outlineBlur=re),ne!==void 0&&(k.outlineOffsetX=ne),Z!==void 0&&(k.outlineOffsetY=Z),ae!==void 0&&(k.strokeWidth=ae),j!==void 0&&(k.strokeColor=j),C!==void 0&&(k.strokeOpacity=C),R!==void 0&&(k.fillOpacity=R),k.sync(()=>{q("Text: sync finished"),Q("sync")})}},[c,r,o,a,l,u,h,f,p,g,m,d,y,B,b,x,_,M,w,E,v,S,T,A,L,F,I,W,U,H,J,D,X,V,Y,ee,re,ne,Z,ae,j,C,R,i,se,le,ye,oe,de,_e,ue,z,P,$,n]}class Sp extends Vt{constructor(e){super(),Wt(this,e,hw,uw,jt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,interactive:10,ignorePointer:11,lookAt:12,text:14,anchorX:15,anchorY:16,curveRadius:17,font:18,fontSize:19,letterSpacing:20,lineHeight:21,maxWidth:22,overflowWrap:23,textAlign:24,textIndent:25,whiteSpace:26,material:27,color:28,depthOffset:29,clipRect:30,glyphGeometryDetail:31,sdfGlyphSize:32,outlineWidth:33,outlineColor:34,outlineOpacity:35,outlineBlur:36,outlineOffsetX:37,outlineOffsetY:38,strokeWidth:39,strokeColor:40,strokeOpacity:41,fillOpacity:42,textObject:13},null,[-1,-1])}get textObject(){return this.$$.ctx[13]}}eb(_c,()=>new _c);const Ht=[];for(let s=0;s<256;s++)Ht[s]=(s<16?"0":"")+s.toString(16);function fw(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Bf(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function dw(s,e,t){return{id:fw(),position:e,answer_text:s,value:t}}const pw=[{value:5,name:"Stimme voll und ganz zu",position:new Ge(-4,3,1)},{value:4,name:"Stimme zu",position:new Ge(0,4,1)},{value:3,name:"Stimme eher zu",position:new Ge(4,3,1)},{value:2,name:"Stimme eher nicht zu",position:new Ge(4,-3,1)},{value:1,name:"Stimme nicht zu",position:new Ge(0,-4,1)},{value:0,name:"Stimme \xFCberhaupt nicht zu",position:new Ge(-4,-3,1)}],mw=pw.map(({name:s,position:e,value:t})=>dw(s,e,t)),gw=$t(mw),vw=(s="pointer",e="auto")=>{let t=!1;const i=$t(!1),n=()=>{i.set(!0)},r=()=>{i.set(!1)};if(typeof window=="undefined")return{hovering:i,onPointerEnter:n,onPointerLeave:r};let o=document.body;const a=ri();a&&a.renderer&&(o=a.renderer.domElement);let l=typeof s=="string"?s:Zr(s);if(typeof s!="string"){const h=s.subscribe(f=>{l=f,t&&(o.style.cursor=f)});St(h)}let c=typeof e=="string"?e:Zr(e);if(typeof e!="string"){const h=e.subscribe(f=>{c=f,t||(o.style.cursor=f)});St(h)}const u=i.subscribe(h=>{t=h,h?o.style.cursor=l:o.style.cursor=c});return St(u),St(()=>{o.style.cursor=c}),{hovering:i,onPointerEnter:n,onPointerLeave:r}};new O;new O;new O;function _w(s){let e;const t=s[18].default,i=ni(t,s,s[23],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&8388608)&&$n(i,t,n,n[23],e?ti(t,n[23],r,null):ei(n[23]),null)},i(n){e||(Ue(i,n),e=!0)},o(n){Oe(i,n),e=!1},d(n){i&&i.d(n)}}}function yw(s){let e,t,i,n;function r(l){s[19](l)}function o(l){s[20](l)}let a={position:s[11],scale:s[2],rotation:s[10],lookAt:s[3],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],viewportAware:s[4],$$slots:{default:[_w]},$$scope:{ctx:s}};return s[1]!==void 0&&(a.group=s[1]),s[0]!==void 0&&(a.inViewport=s[0]),e=new lu({props:a}),Zn.push(()=>yi(e,"group",r)),Zn.push(()=>yi(e,"inViewport",o)),e.$on("viewportenter",s[21]),e.$on("viewportleave",s[22]),{c(){$e(e.$$.fragment)},l(l){et(e.$$.fragment,l)},m(l,c){tt(e,l,c),n=!0},p(l,[c]){const u={};c&2048&&(u.position=l[11]),c&4&&(u.scale=l[2]),c&1024&&(u.rotation=l[10]),c&8&&(u.lookAt=l[3]),c&32&&(u.castShadow=l[5]),c&64&&(u.receiveShadow=l[6]),c&128&&(u.frustumCulled=l[7]),c&256&&(u.renderOrder=l[8]),c&512&&(u.visible=l[9]),c&16&&(u.viewportAware=l[4]),c&8388608&&(u.$$scope={dirty:c,ctx:l}),!t&&c&2&&(t=!0,u.group=l[1],xi(()=>t=!1)),!i&&c&1&&(i=!0,u.inViewport=l[0],xi(()=>i=!1)),e.$set(u)},i(l){n||(Ue(e.$$.fragment,l),n=!0)},o(l){Oe(e.$$.fragment,l),n=!1},d(l){nt(e,l)}}}function xw(s,e,t){var F,I,W,U;let{$$slots:i={},$$scope:n}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:g=void 0}=e,{visible:m=void 0}=e,{speed:d=1}=e,{rotationIntensity:y=1}=e,{floatIntensity:b=1}=e,{floatingRange:x=[-.1,.1]}=e,{group:_=void 0}=e,M=Math.random()*1e4;const w=Ic.mapLinear;let E={x:(F=a==null?void 0:a.x)!=null?F:0+Math.cos(M/4*d)/8*y,y:(I=a==null?void 0:a.y)!=null?I:0+Math.sin(M/4*d)/8*y,z:(W=a==null?void 0:a.z)!=null?W:0+Math.sin(M/4*d)/20*y},v={...r,y:(U=r==null?void 0:r.y)!=null?U:0+w(Math.sin(M/4*d)/10,-.1,.1,...x)*b};ou((H,J)=>{var D,X,V,Y;M+=J,t(10,E={x:(D=a==null?void 0:a.x)!=null?D:0+Math.cos(M/4*d)/8*y,y:(X=a==null?void 0:a.y)!=null?X:0+Math.sin(M/4*d)/8*y,z:(V=a==null?void 0:a.z)!=null?V:0+Math.sin(M/4*d)/20*y}),t(11,v={...r,y:(Y=r==null?void 0:r.y)!=null?Y:0+w(Math.sin(M/4*d)/10,-.1,.1,...x)*b})},{debugFrameloopMessage:"Float: framehandler"});function S(H){_=H,t(1,_)}function T(H){u=H,t(0,u)}function A(H){We.call(this,s,H)}function L(H){We.call(this,s,H)}return s.$$set=H=>{"position"in H&&t(12,r=H.position),"scale"in H&&t(2,o=H.scale),"rotation"in H&&t(13,a=H.rotation),"lookAt"in H&&t(3,l=H.lookAt),"viewportAware"in H&&t(4,c=H.viewportAware),"inViewport"in H&&t(0,u=H.inViewport),"castShadow"in H&&t(5,h=H.castShadow),"receiveShadow"in H&&t(6,f=H.receiveShadow),"frustumCulled"in H&&t(7,p=H.frustumCulled),"renderOrder"in H&&t(8,g=H.renderOrder),"visible"in H&&t(9,m=H.visible),"speed"in H&&t(14,d=H.speed),"rotationIntensity"in H&&t(15,y=H.rotationIntensity),"floatIntensity"in H&&t(16,b=H.floatIntensity),"floatingRange"in H&&t(17,x=H.floatingRange),"group"in H&&t(1,_=H.group),"$$scope"in H&&t(23,n=H.$$scope)},[u,_,o,l,c,h,f,p,g,m,E,v,r,a,d,y,b,x,i,S,T,A,L,n]}class bw extends Vt{constructor(e){super(),Wt(this,e,xw,yw,jt,{position:12,scale:2,rotation:13,lookAt:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,speed:14,rotationIntensity:15,floatIntensity:16,floatingRange:17,group:1})}}function ww(s){let e,t;return e=new Sp({props:{text:s[1],font:"/assets/ChakraPetch-Medium.ttf",position:{y:0,z:1},anchorX:"center",color:s[3],interactive:!0,scale:.5}}),e.$on("click",s[4]),e.$on("pointerenter{onPointerEnter}",s[6]),e.$on("pointerleave{onPointerLeave}",s[7]),{c(){$e(e.$$.fragment)},l(i){et(e.$$.fragment,i)},m(i,n){tt(e,i,n),t=!0},p(i,n){const r={};n&2&&(r.text=i[1]),e.$set(r)},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){nt(e,i)}}}function Sw(s){let e,t;return e=new lu({props:{position:{x:s[0].x,y:s[0].y,z:Math.min(s[0].z,-1)},scale:s[2],$$slots:{default:[ww]},$$scope:{ctx:s}}}),{c(){$e(e.$$.fragment)},l(i){et(e.$$.fragment,i)},m(i,n){tt(e,i,n),t=!0},p(i,n){const r={};n&1&&(r.position={x:i[0].x,y:i[0].y,z:Math.min(i[0].z,-1)}),n&4&&(r.scale=i[2]),n&514&&(r.$$scope={dirty:n,ctx:i}),e.$set(r)},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){nt(e,i)}}}function Mw(s){let e,t;return e=new bw({props:{speed:2,rotationIntensity:.1,floatIntensity:5,floatingRange:[-.05,.05],$$slots:{default:[Sw]},$$scope:{ctx:s}}}),{c(){$e(e.$$.fragment)},l(i){et(e.$$.fragment,i)},m(i,n){tt(e,i,n),t=!0},p(i,[n]){const r={};n&519&&(r.$$scope={dirty:n,ctx:i}),e.$set(r)},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){nt(e,i)}}}function Tw(s,e,t){let{position:i={x:0,y:0,z:0}}=e,{answer_text:n}=e,r=new Ae("white");const o=so();let{scale:a}=e,{value:l}=e;function c(f){o("answerSelected",{text:n,value:l})}function u(f){We.call(this,s,f)}function h(f){We.call(this,s,f)}return s.$$set=f=>{"position"in f&&t(0,i=f.position),"answer_text"in f&&t(1,n=f.answer_text),"scale"in f&&t(2,a=f.scale),"value"in f&&t(5,l=f.value)},[i,n,a,r,c,l,u,h]}class Ew extends Vt{constructor(e){super(),Wt(this,e,Tw,Mw,jt,{position:0,answer_text:1,scale:2,value:5})}}function Aw(s){let e,t;return e=new Sp({props:{text:s[0],font:"/assets/ChakraPetch-Medium.ttf",scale:s[1],position:s[2],anchorX:"center",interactive:!0,overflowWrap:"normal",maxWidth:3,textAlign:"center"}}),{c(){$e(e.$$.fragment)},l(i){et(e.$$.fragment,i)},m(i,n){tt(e,i,n),t=!0},p(i,n){const r={};n&1&&(r.text=i[0]),n&2&&(r.scale=i[1]),n&4&&(r.position=i[2]),e.$set(r)},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){nt(e,i)}}}function Cw(s){let e,t;return e=new lu({props:{position:{x:s[3]},$$slots:{default:[Aw]},$$scope:{ctx:s}}}),{c(){$e(e.$$.fragment)},l(i){et(e.$$.fragment,i)},m(i,n){tt(e,i,n),t=!0},p(i,[n]){const r={};n&8&&(r.position={x:i[3]}),n&263&&(r.$$scope={dirty:n,ctx:i}),e.$set(r)},i(i){t||(Ue(e.$$.fragment,i),t=!0)},o(i){Oe(e.$$.fragment,i),t=!1},d(i){nt(e,i)}}}function Lw(s,e,t){let i;vw();const n=Gs(0,{duration:400,easing:Cu});Mt(s,n,c=>t(3,i=c));const r=Gs(0,{duration:400,easing:Cu});let{text:o}=e,{scale:a}=e,{position:l}=e;return s.$$set=c=>{"text"in c&&t(0,o=c.text),"scale"in c&&t(1,a=c.scale),"position"in c&&t(2,l=c.position)},r.set(0).then(()=>n.set(0)),[o,a,l,i,n]}class zn extends Vt{constructor(e){super(),Wt(this,e,Lw,Cw,jt,{text:0,scale:1,position:2})}}function ha(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Mp=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],Rw=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Tp=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],Pw=Mp,Iw=Pw.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Mc=Tp;Mc=Mc.slice().filter(function(s){return!/^(gl\_|texture)/.test(s)});var Dw=Mc.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Fw=Ww,zw=Mp,Nf=Rw,Uw=Tp,Ow=Iw,kw=Dw,Fn=999,Gf=9999,Kl=0,Zl=1,Hf=2,Vf=3,Wf=4,zs=5,Bw=6,Nw=7,Gw=8,jf=9,Hw=10,Xf=11,Vw=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Ww(s){var e=0,t=0,i=Fn,n,r,o=[],a=[],l=1,c=0,u=0,h=!1,f=!1,p="",g;s=s||{};var m=Uw,d=zw;s.version==="300 es"&&(m=kw,d=Ow);for(var y={},b={},e=0;e<m.length;e++)y[m[e]]=!0;for(var e=0;e<d.length;e++)b[d[e]]=!0;return function(H){return a=[],H!==null?_(H):M()};function x(H){H.length&&a.push({type:Vw[i],data:H,position:u,line:l,column:c})}function _(H){e=0,H.toString&&(H=H.toString()),p+=H.replace(/\r\n/g,`
`),g=p.length;for(var J;n=p[e],e<g;){switch(J=e,i){case Kl:e=T();break;case Zl:e=S();break;case Hf:e=v();break;case Vf:e=A();break;case Wf:e=I();break;case Xf:e=F();break;case zs:e=W();break;case Gf:e=U();break;case jf:e=E();break;case Fn:e=w();break}if(J!==e)switch(p[J]){case`
`:c=0,++l;break;default:++c;break}}return t+=e,p=p.slice(e),a}function M(H){return o.length&&x(o.join("")),i=Hw,x("(eof)"),a}function w(){return o=o.length?[]:o,r==="/"&&n==="*"?(u=t+e-1,i=Kl,r=n,e+1):r==="/"&&n==="/"?(u=t+e-1,i=Zl,r=n,e+1):n==="#"?(i=Hf,u=t+e,e):/\s/.test(n)?(i=jf,u=t+e,e):(h=/\d/.test(n),f=/[^\w_]/.test(n),u=t+e,i=h?Wf:f?Vf:Gf,e)}function E(){return/[^\s]/g.test(n)?(x(o.join("")),i=Fn,e):(o.push(n),r=n,e+1)}function v(){return(n==="\r"||n===`
`)&&r!=="\\"?(x(o.join("")),i=Fn,e):(o.push(n),r=n,e+1)}function S(){return v()}function T(){return n==="/"&&r==="*"?(o.push(n),x(o.join("")),i=Fn,e+1):(o.push(n),r=n,e+1)}function A(){if(r==="."&&/\d/.test(n))return i=zs,e;if(r==="/"&&n==="*")return i=Kl,e;if(r==="/"&&n==="/")return i=Zl,e;if(n==="."&&o.length){for(;L(o););return i=zs,e}if(n===";"||n===")"||n==="("){if(o.length)for(;L(o););return x(n),i=Fn,e+1}var H=o.length===2&&n!=="=";if(/[\w_\d\s]/.test(n)||H){for(;L(o););return i=Fn,e}return o.push(n),r=n,e+1}function L(H){var J=0,D,X;do{if(D=Nf.indexOf(H.slice(0,H.length+J).join("")),X=Nf[D],D===-1){if(J--+H.length>0)continue;X=H.slice(0,1).join("")}return x(X),u+=X.length,o=o.slice(X.length),o.length}while(1)}function F(){return/[^a-fA-F0-9]/.test(n)?(x(o.join("")),i=Fn,e):(o.push(n),r=n,e+1)}function I(){return n==="."||/[eE]/.test(n)?(o.push(n),i=zs,r=n,e+1):n==="x"&&o.length===1&&o[0]==="0"?(i=Xf,o.push(n),r=n,e+1):/[^\d]/.test(n)?(x(o.join("")),i=Fn,e):(o.push(n),r=n,e+1)}function W(){return n==="f"&&(o.push(n),r=n,e+=1),/[eE]/.test(n)||(n==="-"||n==="+")&&/[eE]/.test(r)?(o.push(n),r=n,e+1):/[^\d]/.test(n)?(x(o.join("")),i=Fn,e):(o.push(n),r=n,e+1)}function U(){if(/[^\d\w_]/.test(n)){var H=o.join("");return b[H]?i=Gw:y[H]?i=Nw:i=Bw,x(o.join("")),i=Fn,e}return o.push(n),r=n,e+1}}var jw=Fw,Tc=Xw;function Xw(s,e){var t=jw(e),i=[];return i=i.concat(t(s)),i=i.concat(t(null)),i}var qw=Yw;function Yw(s){for(var e=!1,t=0,i=0;i<s.length;i++)switch(e=e||s[i].type==="keyword"&&s[i].data==="for",s[i].data){case"(":s[i].depth=e?t++:t;break;case"{":s[i].depth=e?t:t++,e=!1;break;case"}":s[i].depth=--t;break;default:s[i].depth=t}for(var i=0;i<s.length;i++){var n=s[i],r=i+1;if(!(n.type!=="ident"&&n.type!=="keyword")&&(o(),s[r].type==="ident"&&(o(),r++,s[r].data==="("))){for(;s[r]&&s[r].data!==";"&&s[r].data!=="{";)s[r++].depth++;s[r]&&s[r].data==="{"&&s[r].depth++}}return s;function o(){for(;s[r]&&(s[r].type==="whitespace"||s[r].data==="["||s[r].data==="]"||s[r].data==="integer");)r++}}var Kw=Zw;function Zw(s){var e=[0],t=e[0],i=0;if(!s||!s.length)return s;if(!("depth"in s[0]))throw new Error("glsl-token-scope: No scope depth defined on tokens! Use glsl-token-depth on these tokens first");for(var n=0;n<s.length;n++){var r=s[n],o=r.depth;o>i?e.push(++t):o<i&&e.splice(-1,1),r.scope=e[e.length-1],r.stack=e.slice(),i=r.depth}return s}var Jw=Qw;function Qw(s){for(var e=0;e<s.length;e++){var t=s[e];if(t.property=!1,t.type==="ident"){for(var i=e;s[--i]&&s[i].type==="whitespace";);!s[i]||s[i].type==="operator"&&s[i].data==="."&&(t.property=!0)}}return s}var $w={"<<=":!0,">>=":!0,"++":!0,"--":!0,"+=":!0,"-=":!0,"*=":!0,"/=":!0,"%=":!0,"&=":!0,"^=":!0,"|=":!0,"=":!0},eS={precision:!0,highp:!0,mediump:!0,lowp:!0,attribute:!0,const:!0,uniform:!0,varying:!0,break:!0,continue:!0,do:!0,for:!0,while:!0,if:!0,else:!0,in:!0,out:!0,inout:!0,true:!0,false:!0,return:!0},tS=$w,nS=eS,iS=rS;function rS(s){for(var e=0,t=0;t<s.length;t++){var i=s[t],n=i.type;i.assignment=!1,i.declaration=!1,!(n!=="ident"&&n!=="builtin")&&(e=t+1,a(),s[e].type==="operator"&&(!tS[s[e].data]||(i.assignment=!0)))}for(var t=0;t<s.length;t++){var r=s[t],n=r.type,o=r.data;if(r.declaration=!1,n==="keyword"){if(nS[o])continue}else if(n!=="ident")continue;if(e=t+1,l(),s[e].type==="ident"){if(s[e++].declaration=!0,l(),s[e].data==="("){for(e++,a();s[e]&&s[e].data!==")"&&!(s[e].type!=="keyword"&&s[e].type!=="ident");)e++,a(),s[e].type==="ident"&&(s[e++].declaration=!0,a(),l(),a(),s[e].data===","&&(e++,a()));t=e;continue}for(;s[e]&&s[e].data!==";";)s[e].data===","?(e++,a(),(s[e].declaration=s[e].type==="ident")&&e++):(a(),c(),a(),e++);t=e}}for(var t=0;t<s.length;t++){var i=s[t];if(i.type==="keyword"&&i.data==="struct"&&(e=t+1,a(),s[e].type==="ident"&&(e++,a(),s[e++].data==="{"))){for(a();s[e].type==="ident"||s[e].type==="keyword";){do e++,a(),s[e].structMember=!0,s[e].declaration=!1,e++,l();while(s[e].data===",");s[e].data===";"&&e++,a()}if(e++,a(),s[e].type==="ident")for(s[e].declaration=!0,a();s[++e].data===",";)a(),e++,a(),s[e].type==="ident"&&(s[e].declaration=!0),a()}}return s;function a(u){for(;s[e]&&s[e].type==="whitespace";)e++}function l(){for(;s[e]&&(s[e].type==="integer"||s[e].data==="["||s[e].data==="]"||s[e].type==="whitespace");)e++}function c(){if(!!s[e]&&s[e].data==="("){var u=0;do{if(s[e].data===";")break;s[e].data==="("&&u++,s[e].data===")"&&u--}while(u&&s[++e])}}}var qf=sS;function sS(s,e){qw(s),Kw(s),Jw(s),iS(s);for(var t=aS(s),i=e||oS(),n={},r=0;r<s.length;r++){var o=s[r],a=o.stack,l=o.data;if(o.descoped=!1,o.type==="ident"&&!o.property&&!o.structMember){for(var c=!1,u=a.length-1;u>=0;u--){var h=t[a[u]];if(!!h&&!!h[l]){if(c=!0,u)break;o.descoped=o.data,o.data=n[l]=n[l]||i(l,o)||o.data}}c||(o.descoped=o.data,o.data=n[l]=n[l]||i(l,o)||o.data)}}return s}function oS(){var s=0;return function(t){return t+"_"+(s++).toString(36)}}function aS(s){for(var e={},t=0;t<s.length;t++){var i=s[t];i.declaration&&(e[i.scope]=e[i.scope]||{},e[i.scope][i.data]=i)}return e}var Ys=lS;function lS(s){for(var e=[],t=0;t<s.length;t++)s[t].type!=="eof"&&e.push(s[t].data);return e.join("")}var Ec=cS;function cS(s){var e=null,t=null,i=0,n=0,r=0,o=0,a=0,l=[],c,u,h;for(c=0,u;c<s.length;c++)if(h=s[c],h.data==="{"){if(i&&i++||(u=p(c,Bi(")"),Bi()),u<0)||(o=u,u=p(u,Bi("("),Bi(")")),u<0)||(a=u,u=p(u,Us),u<0)||s[u].type!=="ident"||(t=s[u].data,u=p(u,Us),u<0))continue;i=1,n=c,e=s[u].data,r=u;var f=p(u,Us);switch(s[f]&&s[f].data){case"lowp":case"highp":case"mediump":r=f}}else if(i&&h.data==="}"){if(--i)continue;l.push({name:t,type:e,body:[n+1,c],args:[a,o+1],outer:[r,c+1]})}for(c=0;c<s.length;c++)if(h=s[c],h.data===";"){if(u=p(c,Bi(")"),Bi()),u<0||(o=u,u=p(u,Bi("("),Bi(")")),u<0)||(a=u,u=p(u,Us),u<0)||s[u].type!=="ident"||(t=s[u].data,u=p(u,Us),u<0)||s[u].type==="operator"||s[u].data==="return")continue;e=s[u].data,l.push({name:t,type:e,body:!1,args:[a,o+1],outer:[u,c+1]})}return l.sort(function(g,m){return g.outer[0]-m.outer[0]});function p(g,m,d){for(var y=g-1;y>=0;y--){if(m(s[y]))return y;if(d&&d(s[y]))return-1}return-1}}function Bi(s){return function(e){return e.type==="operator"&&(!s||e.data===s)}}function Us(s){return s.type!=="whitespace"}var Ep={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(i,n,r){function o(c,u){if(!n[c]){if(!i[c]){var h=typeof ha=="function"&&ha;if(!u&&h)return h(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}u=n[c]={exports:{}},i[c][0].call(u.exports,function(f){var p=i[c][1][f];return o(p||f)},u,u.exports,t,i,n,r)}return n[c].exports}for(var a=typeof ha=="function"&&ha,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,i,n){(function(r,o,a,l,c,u,h,f,p){var g=t("crypto");function m(w,E){E=b(w,E);var v;return(v=E.algorithm!=="passthrough"?g.createHash(E.algorithm):new M).write===void 0&&(v.write=v.update,v.end=v.update),_(E,v).dispatch(w),v.update||v.end(""),v.digest?v.digest(E.encoding==="buffer"?void 0:E.encoding):(w=v.read(),E.encoding!=="buffer"?w.toString(E.encoding):w)}(n=i.exports=m).sha1=function(w){return m(w)},n.keys=function(w){return m(w,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},n.MD5=function(w){return m(w,{algorithm:"md5",encoding:"hex"})},n.keysMD5=function(w){return m(w,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var d=g.getHashes?g.getHashes().slice():["sha1","md5"],y=(d.push("passthrough"),["buffer","hex","binary","base64"]);function b(w,E){var v={};if(v.algorithm=(E=E||{}).algorithm||"sha1",v.encoding=E.encoding||"hex",v.excludeValues=!!E.excludeValues,v.algorithm=v.algorithm.toLowerCase(),v.encoding=v.encoding.toLowerCase(),v.ignoreUnknown=E.ignoreUnknown===!0,v.respectType=E.respectType!==!1,v.respectFunctionNames=E.respectFunctionNames!==!1,v.respectFunctionProperties=E.respectFunctionProperties!==!1,v.unorderedArrays=E.unorderedArrays===!0,v.unorderedSets=E.unorderedSets!==!1,v.unorderedObjects=E.unorderedObjects!==!1,v.replacer=E.replacer||void 0,v.excludeKeys=E.excludeKeys||void 0,w===void 0)throw new Error("Object argument required.");for(var S=0;S<d.length;++S)d[S].toLowerCase()===v.algorithm.toLowerCase()&&(v.algorithm=d[S]);if(d.indexOf(v.algorithm)===-1)throw new Error('Algorithm "'+v.algorithm+'"  not supported. supported values: '+d.join(", "));if(y.indexOf(v.encoding)===-1&&v.algorithm!=="passthrough")throw new Error('Encoding "'+v.encoding+'"  not supported. supported values: '+y.join(", "));return v}function x(w){if(typeof w=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(w))!=null}function _(w,E,v){v=v||[];function S(T){return E.update?E.update(T,"utf8"):E.write(T,"utf8")}return{dispatch:function(T){return this["_"+((T=w.replacer?w.replacer(T):T)===null?"null":typeof T)](T)},_object:function(T){var A,L=Object.prototype.toString.call(T),F=/\[object (.*)\]/i.exec(L);if(F=(F=F?F[1]:"unknown:["+L+"]").toLowerCase(),0<=(L=v.indexOf(T)))return this.dispatch("[CIRCULAR:"+L+"]");if(v.push(T),a!==void 0&&a.isBuffer&&a.isBuffer(T))return S("buffer:"),S(T);if(F==="object"||F==="function"||F==="asyncfunction")return L=Object.keys(T),w.unorderedObjects&&(L=L.sort()),w.respectType===!1||x(T)||L.splice(0,0,"prototype","__proto__","constructor"),w.excludeKeys&&(L=L.filter(function(I){return!w.excludeKeys(I)})),S("object:"+L.length+":"),A=this,L.forEach(function(I){A.dispatch(I),S(":"),w.excludeValues||A.dispatch(T[I]),S(",")});if(!this["_"+F]){if(w.ignoreUnknown)return S("["+F+"]");throw new Error('Unknown object type "'+F+'"')}this["_"+F](T)},_array:function(T,I){I=I!==void 0?I:w.unorderedArrays!==!1;var L=this;if(S("array:"+T.length+":"),!I||T.length<=1)return T.forEach(function(W){return L.dispatch(W)});var F=[],I=T.map(function(W){var U=new M,H=v.slice();return _(w,U,H).dispatch(W),F=F.concat(H.slice(v.length)),U.read().toString()});return v=v.concat(F),I.sort(),this._array(I,!1)},_date:function(T){return S("date:"+T.toJSON())},_symbol:function(T){return S("symbol:"+T.toString())},_error:function(T){return S("error:"+T.toString())},_boolean:function(T){return S("bool:"+T.toString())},_string:function(T){S("string:"+T.length+":"),S(T.toString())},_function:function(T){S("fn:"),x(T)?this.dispatch("[native]"):this.dispatch(T.toString()),w.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(T.name)),w.respectFunctionProperties&&this._object(T)},_number:function(T){return S("number:"+T.toString())},_xml:function(T){return S("xml:"+T.toString())},_null:function(){return S("Null")},_undefined:function(){return S("Undefined")},_regexp:function(T){return S("regex:"+T.toString())},_uint8array:function(T){return S("uint8array:"),this.dispatch(Array.prototype.slice.call(T))},_uint8clampedarray:function(T){return S("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(T))},_int8array:function(T){return S("int8array:"),this.dispatch(Array.prototype.slice.call(T))},_uint16array:function(T){return S("uint16array:"),this.dispatch(Array.prototype.slice.call(T))},_int16array:function(T){return S("int16array:"),this.dispatch(Array.prototype.slice.call(T))},_uint32array:function(T){return S("uint32array:"),this.dispatch(Array.prototype.slice.call(T))},_int32array:function(T){return S("int32array:"),this.dispatch(Array.prototype.slice.call(T))},_float32array:function(T){return S("float32array:"),this.dispatch(Array.prototype.slice.call(T))},_float64array:function(T){return S("float64array:"),this.dispatch(Array.prototype.slice.call(T))},_arraybuffer:function(T){return S("arraybuffer:"),this.dispatch(new Uint8Array(T))},_url:function(T){return S("url:"+T.toString())},_map:function(T){return S("map:"),T=Array.from(T),this._array(T,w.unorderedSets!==!1)},_set:function(T){return S("set:"),T=Array.from(T),this._array(T,w.unorderedSets!==!1)},_file:function(T){return S("file:"),this.dispatch([T.name,T.size,T.type,T.lastModfied])},_blob:function(){if(w.ignoreUnknown)return S("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return S("domwindow")},_bigint:function(T){return S("bigint:"+T.toString())},_process:function(){return S("process")},_timer:function(){return S("timer")},_pipe:function(){return S("pipe")},_tcp:function(){return S("tcp")},_udp:function(){return S("udp")},_tty:function(){return S("tty")},_statwatcher:function(){return S("statwatcher")},_securecontext:function(){return S("securecontext")},_connection:function(){return S("connection")},_zlib:function(){return S("zlib")},_context:function(){return S("context")},_nodescript:function(){return S("nodescript")},_httpparser:function(){return S("httpparser")},_dataview:function(){return S("dataview")},_signal:function(){return S("signal")},_fsevent:function(){return S("fsevent")},_tlswrap:function(){return S("tlswrap")}}}function M(){return{buf:"",write:function(w){this.buf+=w},end:function(w){this.buf+=w},read:function(){return this.buf}}}n.writeToStream=function(w,E,v){return v===void 0&&(v=E,E={}),_(E=b(w,E),v).dispatch(w)}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,i,n){(function(r,o,a,l,c,u,h,f,p){(function(g){var m=typeof Uint8Array!="undefined"?Uint8Array:Array,d="+".charCodeAt(0),y="/".charCodeAt(0),b="0".charCodeAt(0),x="a".charCodeAt(0),_="A".charCodeAt(0),M="-".charCodeAt(0),w="_".charCodeAt(0);function E(v){return v=v.charCodeAt(0),v===d||v===M?62:v===y||v===w?63:v<b?-1:v<b+10?v-b+26+26:v<_+26?v-_:v<x+26?v-x+26:void 0}g.toByteArray=function(v){var S,T;if(0<v.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var A=v.length,A=v.charAt(A-2)==="="?2:v.charAt(A-1)==="="?1:0,L=new m(3*v.length/4-A),F=0<A?v.length-4:v.length,I=0;function W(U){L[I++]=U}for(S=0;S<F;S+=4,0)W((16711680&(T=E(v.charAt(S))<<18|E(v.charAt(S+1))<<12|E(v.charAt(S+2))<<6|E(v.charAt(S+3))))>>16),W((65280&T)>>8),W(255&T);return A==2?W(255&(T=E(v.charAt(S))<<2|E(v.charAt(S+1))>>4)):A==1&&(W((T=E(v.charAt(S))<<10|E(v.charAt(S+1))<<4|E(v.charAt(S+2))>>2)>>8&255),W(255&T)),L},g.fromByteArray=function(v){var S,T,A,L,F=v.length%3,I="";function W(U){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(U)}for(S=0,A=v.length-F;S<A;S+=3)T=(v[S]<<16)+(v[S+1]<<8)+v[S+2],I+=W((L=T)>>18&63)+W(L>>12&63)+W(L>>6&63)+W(63&L);switch(F){case 1:I=(I+=W((T=v[v.length-1])>>2))+W(T<<4&63)+"==";break;case 2:I=(I=(I+=W((T=(v[v.length-2]<<8)+v[v.length-1])>>10))+W(T>>4&63))+W(T<<2&63)+"="}return I}})(n===void 0?this.base64js={}:n)}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,i,n){(function(r,o,d,l,c,u,h,f,p){var g=t("base64-js"),m=t("ieee754");function d(C,R,B){if(!(this instanceof d))return new d(C,R,B);var G,q,Q,se,le=typeof C;if(R==="base64"&&le=="string")for(C=(se=C).trim?se.trim():se.replace(/^\s+|\s+$/g,"");C.length%4!=0;)C+="=";if(le=="number")G=J(C);else if(le=="string")G=d.byteLength(C,R);else{if(le!="object")throw new Error("First argument needs to be a number, array or string.");G=J(C.length)}if(d._useTypedArrays?q=d._augment(new Uint8Array(G)):((q=this).length=G,q._isBuffer=!0),d._useTypedArrays&&typeof C.byteLength=="number")q._set(C);else if(D(se=C)||d.isBuffer(se)||se&&typeof se=="object"&&typeof se.length=="number")for(Q=0;Q<G;Q++)d.isBuffer(C)?q[Q]=C.readUInt8(Q):q[Q]=C[Q];else if(le=="string")q.write(C,0,R);else if(le=="number"&&!d._useTypedArrays&&!B)for(Q=0;Q<G;Q++)q[Q]=0;return q}function y(C,R,B,G){return d._charsWritten=ee(function(q){for(var Q=[],se=0;se<q.length;se++)Q.push(255&q.charCodeAt(se));return Q}(R),C,B,G)}function b(C,R,B,G){return d._charsWritten=ee(function(q){for(var Q,se,le=[],ye=0;ye<q.length;ye++)se=q.charCodeAt(ye),Q=se>>8,se=se%256,le.push(se),le.push(Q);return le}(R),C,B,G)}function x(C,R,B){var G="";B=Math.min(C.length,B);for(var q=R;q<B;q++)G+=String.fromCharCode(C[q]);return G}function _(C,R,B,Q){Q||(j(typeof B=="boolean","missing or invalid endian"),j(R!=null,"missing offset"),j(R+1<C.length,"Trying to read beyond buffer length"));var q,Q=C.length;if(!(Q<=R))return B?(q=C[R],R+1<Q&&(q|=C[R+1]<<8)):(q=C[R]<<8,R+1<Q&&(q|=C[R+1])),q}function M(C,R,B,Q){Q||(j(typeof B=="boolean","missing or invalid endian"),j(R!=null,"missing offset"),j(R+3<C.length,"Trying to read beyond buffer length"));var q,Q=C.length;if(!(Q<=R))return B?(R+2<Q&&(q=C[R+2]<<16),R+1<Q&&(q|=C[R+1]<<8),q|=C[R],R+3<Q&&(q+=C[R+3]<<24>>>0)):(R+1<Q&&(q=C[R+1]<<16),R+2<Q&&(q|=C[R+2]<<8),R+3<Q&&(q|=C[R+3]),q+=C[R]<<24>>>0),q}function w(C,R,B,G){if(G||(j(typeof B=="boolean","missing or invalid endian"),j(R!=null,"missing offset"),j(R+1<C.length,"Trying to read beyond buffer length")),!(C.length<=R))return G=_(C,R,B,!0),32768&G?-1*(65535-G+1):G}function E(C,R,B,G){if(G||(j(typeof B=="boolean","missing or invalid endian"),j(R!=null,"missing offset"),j(R+3<C.length,"Trying to read beyond buffer length")),!(C.length<=R))return G=M(C,R,B,!0),2147483648&G?-1*(4294967295-G+1):G}function v(C,R,B,G){return G||(j(typeof B=="boolean","missing or invalid endian"),j(R+3<C.length,"Trying to read beyond buffer length")),m.read(C,R,B,23,4)}function S(C,R,B,G){return G||(j(typeof B=="boolean","missing or invalid endian"),j(R+7<C.length,"Trying to read beyond buffer length")),m.read(C,R,B,52,8)}function T(C,R,B,G,q){if(q||(j(R!=null,"missing value"),j(typeof G=="boolean","missing or invalid endian"),j(B!=null,"missing offset"),j(B+1<C.length,"trying to write beyond buffer length"),ne(R,65535)),q=C.length,!(q<=B))for(var Q=0,se=Math.min(q-B,2);Q<se;Q++)C[B+Q]=(R&255<<8*(G?Q:1-Q))>>>8*(G?Q:1-Q)}function A(C,R,B,G,q){if(q||(j(R!=null,"missing value"),j(typeof G=="boolean","missing or invalid endian"),j(B!=null,"missing offset"),j(B+3<C.length,"trying to write beyond buffer length"),ne(R,4294967295)),q=C.length,!(q<=B))for(var Q=0,se=Math.min(q-B,4);Q<se;Q++)C[B+Q]=R>>>8*(G?Q:3-Q)&255}function L(C,R,B,G,q){q||(j(R!=null,"missing value"),j(typeof G=="boolean","missing or invalid endian"),j(B!=null,"missing offset"),j(B+1<C.length,"Trying to write beyond buffer length"),Z(R,32767,-32768)),C.length<=B||T(C,0<=R?R:65535+R+1,B,G,q)}function F(C,R,B,G,q){q||(j(R!=null,"missing value"),j(typeof G=="boolean","missing or invalid endian"),j(B!=null,"missing offset"),j(B+3<C.length,"Trying to write beyond buffer length"),Z(R,2147483647,-2147483648)),C.length<=B||A(C,0<=R?R:4294967295+R+1,B,G,q)}function I(C,R,B,G,q){q||(j(R!=null,"missing value"),j(typeof G=="boolean","missing or invalid endian"),j(B!=null,"missing offset"),j(B+3<C.length,"Trying to write beyond buffer length"),ae(R,34028234663852886e22,-34028234663852886e22)),C.length<=B||m.write(C,R,B,G,23,4)}function W(C,R,B,G,q){q||(j(R!=null,"missing value"),j(typeof G=="boolean","missing or invalid endian"),j(B!=null,"missing offset"),j(B+7<C.length,"Trying to write beyond buffer length"),ae(R,17976931348623157e292,-17976931348623157e292)),C.length<=B||m.write(C,R,B,G,52,8)}n.Buffer=d,n.SlowBuffer=d,n.INSPECT_MAX_BYTES=50,d.poolSize=8192,d._useTypedArrays=function(){try{var C=new ArrayBuffer(0),R=new Uint8Array(C);return R.foo=function(){return 42},R.foo()===42&&typeof R.subarray=="function"}catch{return!1}}(),d.isEncoding=function(C){switch(String(C).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.isBuffer=function(C){return!(C==null||!C._isBuffer)},d.byteLength=function(C,R){var B;switch(C+="",R||"utf8"){case"hex":B=C.length/2;break;case"utf8":case"utf-8":B=V(C).length;break;case"ascii":case"binary":case"raw":B=C.length;break;case"base64":B=Y(C).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":B=2*C.length;break;default:throw new Error("Unknown encoding")}return B},d.concat=function(C,R){if(j(D(C),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),C.length===0)return new d(0);if(C.length===1)return C[0];if(typeof R!="number")for(q=R=0;q<C.length;q++)R+=C[q].length;for(var B=new d(R),G=0,q=0;q<C.length;q++){var Q=C[q];Q.copy(B,G),G+=Q.length}return B},d.prototype.write=function(C,R,B,G){isFinite(R)?isFinite(B)||(G=B,B=void 0):(ye=G,G=R,R=B,B=ye),R=Number(R)||0;var q,Q,se,le,ye=this.length-R;switch((!B||ye<(B=Number(B)))&&(B=ye),G=String(G||"utf8").toLowerCase()){case"hex":q=function(oe,de,_e,ue){_e=Number(_e)||0;var z=oe.length-_e;(!ue||z<(ue=Number(ue)))&&(ue=z),j((z=de.length)%2==0,"Invalid hex string"),z/2<ue&&(ue=z/2);for(var P=0;P<ue;P++){var $=parseInt(de.substr(2*P,2),16);j(!isNaN($),"Invalid hex string"),oe[_e+P]=$}return d._charsWritten=2*P,P}(this,C,R,B);break;case"utf8":case"utf-8":Q=this,se=R,le=B,q=d._charsWritten=ee(V(C),Q,se,le);break;case"ascii":case"binary":q=y(this,C,R,B);break;case"base64":Q=this,se=R,le=B,q=d._charsWritten=ee(Y(C),Q,se,le);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":q=b(this,C,R,B);break;default:throw new Error("Unknown encoding")}return q},d.prototype.toString=function(C,R,B){var G,q,Q,se,le=this;if(C=String(C||"utf8").toLowerCase(),R=Number(R)||0,(B=B!==void 0?Number(B):le.length)===R)return"";switch(C){case"hex":G=function(ye,oe,de){var _e=ye.length;(!oe||oe<0)&&(oe=0),(!de||de<0||_e<de)&&(de=_e);for(var ue="",z=oe;z<de;z++)ue+=X(ye[z]);return ue}(le,R,B);break;case"utf8":case"utf-8":G=function(ye,oe,de){var _e="",ue="";de=Math.min(ye.length,de);for(var z=oe;z<de;z++)ye[z]<=127?(_e+=re(ue)+String.fromCharCode(ye[z]),ue=""):ue+="%"+ye[z].toString(16);return _e+re(ue)}(le,R,B);break;case"ascii":case"binary":G=x(le,R,B);break;case"base64":q=le,se=B,G=(Q=R)===0&&se===q.length?g.fromByteArray(q):g.fromByteArray(q.slice(Q,se));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":G=function(ye,oe,de){for(var _e=ye.slice(oe,de),ue="",z=0;z<_e.length;z+=2)ue+=String.fromCharCode(_e[z]+256*_e[z+1]);return ue}(le,R,B);break;default:throw new Error("Unknown encoding")}return G},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},d.prototype.copy=function(C,R,B,G){if(R=R||0,(G=G||G===0?G:this.length)!==(B=B||0)&&C.length!==0&&this.length!==0){j(B<=G,"sourceEnd < sourceStart"),j(0<=R&&R<C.length,"targetStart out of bounds"),j(0<=B&&B<this.length,"sourceStart out of bounds"),j(0<=G&&G<=this.length,"sourceEnd out of bounds"),G>this.length&&(G=this.length);var q=(G=C.length-R<G-B?C.length-R+B:G)-B;if(q<100||!d._useTypedArrays)for(var Q=0;Q<q;Q++)C[Q+R]=this[Q+B];else C._set(this.subarray(B,B+q),R)}},d.prototype.slice=function(C,R){var B=this.length;if(C=H(C,B,0),R=H(R,B,B),d._useTypedArrays)return d._augment(this.subarray(C,R));for(var G=R-C,q=new d(G,void 0,!0),Q=0;Q<G;Q++)q[Q]=this[Q+C];return q},d.prototype.get=function(C){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(C)},d.prototype.set=function(C,R){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(C,R)},d.prototype.readUInt8=function(C,R){if(R||(j(C!=null,"missing offset"),j(C<this.length,"Trying to read beyond buffer length")),!(C>=this.length))return this[C]},d.prototype.readUInt16LE=function(C,R){return _(this,C,!0,R)},d.prototype.readUInt16BE=function(C,R){return _(this,C,!1,R)},d.prototype.readUInt32LE=function(C,R){return M(this,C,!0,R)},d.prototype.readUInt32BE=function(C,R){return M(this,C,!1,R)},d.prototype.readInt8=function(C,R){if(R||(j(C!=null,"missing offset"),j(C<this.length,"Trying to read beyond buffer length")),!(C>=this.length))return 128&this[C]?-1*(255-this[C]+1):this[C]},d.prototype.readInt16LE=function(C,R){return w(this,C,!0,R)},d.prototype.readInt16BE=function(C,R){return w(this,C,!1,R)},d.prototype.readInt32LE=function(C,R){return E(this,C,!0,R)},d.prototype.readInt32BE=function(C,R){return E(this,C,!1,R)},d.prototype.readFloatLE=function(C,R){return v(this,C,!0,R)},d.prototype.readFloatBE=function(C,R){return v(this,C,!1,R)},d.prototype.readDoubleLE=function(C,R){return S(this,C,!0,R)},d.prototype.readDoubleBE=function(C,R){return S(this,C,!1,R)},d.prototype.writeUInt8=function(C,R,B){B||(j(C!=null,"missing value"),j(R!=null,"missing offset"),j(R<this.length,"trying to write beyond buffer length"),ne(C,255)),R>=this.length||(this[R]=C)},d.prototype.writeUInt16LE=function(C,R,B){T(this,C,R,!0,B)},d.prototype.writeUInt16BE=function(C,R,B){T(this,C,R,!1,B)},d.prototype.writeUInt32LE=function(C,R,B){A(this,C,R,!0,B)},d.prototype.writeUInt32BE=function(C,R,B){A(this,C,R,!1,B)},d.prototype.writeInt8=function(C,R,B){B||(j(C!=null,"missing value"),j(R!=null,"missing offset"),j(R<this.length,"Trying to write beyond buffer length"),Z(C,127,-128)),R>=this.length||(0<=C?this.writeUInt8(C,R,B):this.writeUInt8(255+C+1,R,B))},d.prototype.writeInt16LE=function(C,R,B){L(this,C,R,!0,B)},d.prototype.writeInt16BE=function(C,R,B){L(this,C,R,!1,B)},d.prototype.writeInt32LE=function(C,R,B){F(this,C,R,!0,B)},d.prototype.writeInt32BE=function(C,R,B){F(this,C,R,!1,B)},d.prototype.writeFloatLE=function(C,R,B){I(this,C,R,!0,B)},d.prototype.writeFloatBE=function(C,R,B){I(this,C,R,!1,B)},d.prototype.writeDoubleLE=function(C,R,B){W(this,C,R,!0,B)},d.prototype.writeDoubleBE=function(C,R,B){W(this,C,R,!1,B)},d.prototype.fill=function(C,R,B){if(R=R||0,B=B||this.length,j(typeof(C=typeof(C=C||0)=="string"?C.charCodeAt(0):C)=="number"&&!isNaN(C),"value is not a number"),j(R<=B,"end < start"),B!==R&&this.length!==0){j(0<=R&&R<this.length,"start out of bounds"),j(0<=B&&B<=this.length,"end out of bounds");for(var G=R;G<B;G++)this[G]=C}},d.prototype.inspect=function(){for(var C=[],R=this.length,B=0;B<R;B++)if(C[B]=X(this[B]),B===n.INSPECT_MAX_BYTES){C[B+1]="...";break}return"<Buffer "+C.join(" ")+">"},d.prototype.toArrayBuffer=function(){if(typeof Uint8Array=="undefined")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(d._useTypedArrays)return new d(this).buffer;for(var C=new Uint8Array(this.length),R=0,B=C.length;R<B;R+=1)C[R]=this[R];return C.buffer};var U=d.prototype;function H(C,R,B){return typeof C!="number"?B:R<=(C=~~C)?R:0<=C||0<=(C+=R)?C:0}function J(C){return(C=~~Math.ceil(+C))<0?0:C}function D(C){return(Array.isArray||function(R){return Object.prototype.toString.call(R)==="[object Array]"})(C)}function X(C){return C<16?"0"+C.toString(16):C.toString(16)}function V(C){for(var R=[],B=0;B<C.length;B++){var G=C.charCodeAt(B);if(G<=127)R.push(C.charCodeAt(B));else for(var q=B,Q=(55296<=G&&G<=57343&&B++,encodeURIComponent(C.slice(q,B+1)).substr(1).split("%")),se=0;se<Q.length;se++)R.push(parseInt(Q[se],16))}return R}function Y(C){return g.toByteArray(C)}function ee(C,R,B,G){for(var q=0;q<G&&!(q+B>=R.length||q>=C.length);q++)R[q+B]=C[q];return q}function re(C){try{return decodeURIComponent(C)}catch{return String.fromCharCode(65533)}}function ne(C,R){j(typeof C=="number","cannot write a non-number as a number"),j(0<=C,"specified a negative value for writing an unsigned value"),j(C<=R,"value is larger than maximum value for type"),j(Math.floor(C)===C,"value has a fractional component")}function Z(C,R,B){j(typeof C=="number","cannot write a non-number as a number"),j(C<=R,"value larger than maximum allowed value"),j(B<=C,"value smaller than minimum allowed value"),j(Math.floor(C)===C,"value has a fractional component")}function ae(C,R,B){j(typeof C=="number","cannot write a non-number as a number"),j(C<=R,"value larger than maximum allowed value"),j(B<=C,"value smaller than minimum allowed value")}function j(C,R){if(!C)throw new Error(R||"Failed assertion")}d._augment=function(C){return C._isBuffer=!0,C._get=C.get,C._set=C.set,C.get=U.get,C.set=U.set,C.write=U.write,C.toString=U.toString,C.toLocaleString=U.toString,C.toJSON=U.toJSON,C.copy=U.copy,C.slice=U.slice,C.readUInt8=U.readUInt8,C.readUInt16LE=U.readUInt16LE,C.readUInt16BE=U.readUInt16BE,C.readUInt32LE=U.readUInt32LE,C.readUInt32BE=U.readUInt32BE,C.readInt8=U.readInt8,C.readInt16LE=U.readInt16LE,C.readInt16BE=U.readInt16BE,C.readInt32LE=U.readInt32LE,C.readInt32BE=U.readInt32BE,C.readFloatLE=U.readFloatLE,C.readFloatBE=U.readFloatBE,C.readDoubleLE=U.readDoubleLE,C.readDoubleBE=U.readDoubleBE,C.writeUInt8=U.writeUInt8,C.writeUInt16LE=U.writeUInt16LE,C.writeUInt16BE=U.writeUInt16BE,C.writeUInt32LE=U.writeUInt32LE,C.writeUInt32BE=U.writeUInt32BE,C.writeInt8=U.writeInt8,C.writeInt16LE=U.writeInt16LE,C.writeInt16BE=U.writeInt16BE,C.writeInt32LE=U.writeInt32LE,C.writeInt32BE=U.writeInt32BE,C.writeFloatLE=U.writeFloatLE,C.writeFloatBE=U.writeFloatBE,C.writeDoubleLE=U.writeDoubleLE,C.writeDoubleBE=U.writeDoubleBE,C.fill=U.fill,C.inspect=U.inspect,C.toArrayBuffer=U.toArrayBuffer,C}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,i,n){(function(r,o,g,l,c,u,h,f,p){var g=t("buffer").Buffer,m=4,d=new g(m);d.fill(0),i.exports={hash:function(y,b,x,_){for(var M=b(function(T,A){T.length%m!=0&&(L=T.length+(m-T.length%m),T=g.concat([T,d],L));for(var L,F=[],I=A?T.readInt32BE:T.readInt32LE,W=0;W<T.length;W+=m)F.push(I.call(T,W));return F}(y=g.isBuffer(y)?y:new g(y),_),8*y.length),b=_,w=new g(x),E=b?w.writeInt32BE:w.writeInt32LE,v=0;v<M.length;v++)E.call(w,M[v],4*v,!0);return w}}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,i,n){(function(r,o,g,l,c,u,h,f,p){var g=t("buffer").Buffer,m=t("./sha"),d=t("./sha256"),y=t("./rng"),b={sha1:m,sha256:d,md5:t("./md5")},x=64,_=new g(x);function M(T,A){var L=b[T=T||"sha1"],F=[];return L||w("algorithm:",T,"is not yet supported"),{update:function(I){return g.isBuffer(I)||(I=new g(I)),F.push(I),I.length,this},digest:function(I){var W=g.concat(F),W=A?function(U,H,J){g.isBuffer(H)||(H=new g(H)),g.isBuffer(J)||(J=new g(J)),H.length>x?H=U(H):H.length<x&&(H=g.concat([H,_],x));for(var D=new g(x),X=new g(x),V=0;V<x;V++)D[V]=54^H[V],X[V]=92^H[V];return J=U(g.concat([D,J])),U(g.concat([X,J]))}(L,A,W):L(W);return F=null,I?W.toString(I):W}}}function w(){var T=[].slice.call(arguments).join(" ");throw new Error([T,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}_.fill(0),n.createHash=function(T){return M(T)},n.createHmac=M,n.randomBytes=function(T,A){if(!A||!A.call)return new g(y(T));try{A.call(this,void 0,new g(y(T)))}catch(L){A(L)}};var E,v=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],S=function(T){n[T]=function(){w("sorry,",T,"is not implemented yet")}};for(E in v)S(v[E])}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,i,n){(function(r,o,a,l,c,u,h,f,p){var g=t("./helpers");function m(w,E){w[E>>5]|=128<<E%32,w[14+(E+64>>>9<<4)]=E;for(var v=1732584193,S=-271733879,T=-1732584194,A=271733878,L=0;L<w.length;L+=16){var F=v,I=S,W=T,U=A,v=y(v,S,T,A,w[L+0],7,-680876936),A=y(A,v,S,T,w[L+1],12,-389564586),T=y(T,A,v,S,w[L+2],17,606105819),S=y(S,T,A,v,w[L+3],22,-1044525330);v=y(v,S,T,A,w[L+4],7,-176418897),A=y(A,v,S,T,w[L+5],12,1200080426),T=y(T,A,v,S,w[L+6],17,-1473231341),S=y(S,T,A,v,w[L+7],22,-45705983),v=y(v,S,T,A,w[L+8],7,1770035416),A=y(A,v,S,T,w[L+9],12,-1958414417),T=y(T,A,v,S,w[L+10],17,-42063),S=y(S,T,A,v,w[L+11],22,-1990404162),v=y(v,S,T,A,w[L+12],7,1804603682),A=y(A,v,S,T,w[L+13],12,-40341101),T=y(T,A,v,S,w[L+14],17,-1502002290),v=b(v,S=y(S,T,A,v,w[L+15],22,1236535329),T,A,w[L+1],5,-165796510),A=b(A,v,S,T,w[L+6],9,-1069501632),T=b(T,A,v,S,w[L+11],14,643717713),S=b(S,T,A,v,w[L+0],20,-373897302),v=b(v,S,T,A,w[L+5],5,-701558691),A=b(A,v,S,T,w[L+10],9,38016083),T=b(T,A,v,S,w[L+15],14,-660478335),S=b(S,T,A,v,w[L+4],20,-405537848),v=b(v,S,T,A,w[L+9],5,568446438),A=b(A,v,S,T,w[L+14],9,-1019803690),T=b(T,A,v,S,w[L+3],14,-187363961),S=b(S,T,A,v,w[L+8],20,1163531501),v=b(v,S,T,A,w[L+13],5,-1444681467),A=b(A,v,S,T,w[L+2],9,-51403784),T=b(T,A,v,S,w[L+7],14,1735328473),v=x(v,S=b(S,T,A,v,w[L+12],20,-1926607734),T,A,w[L+5],4,-378558),A=x(A,v,S,T,w[L+8],11,-2022574463),T=x(T,A,v,S,w[L+11],16,1839030562),S=x(S,T,A,v,w[L+14],23,-35309556),v=x(v,S,T,A,w[L+1],4,-1530992060),A=x(A,v,S,T,w[L+4],11,1272893353),T=x(T,A,v,S,w[L+7],16,-155497632),S=x(S,T,A,v,w[L+10],23,-1094730640),v=x(v,S,T,A,w[L+13],4,681279174),A=x(A,v,S,T,w[L+0],11,-358537222),T=x(T,A,v,S,w[L+3],16,-722521979),S=x(S,T,A,v,w[L+6],23,76029189),v=x(v,S,T,A,w[L+9],4,-640364487),A=x(A,v,S,T,w[L+12],11,-421815835),T=x(T,A,v,S,w[L+15],16,530742520),v=_(v,S=x(S,T,A,v,w[L+2],23,-995338651),T,A,w[L+0],6,-198630844),A=_(A,v,S,T,w[L+7],10,1126891415),T=_(T,A,v,S,w[L+14],15,-1416354905),S=_(S,T,A,v,w[L+5],21,-57434055),v=_(v,S,T,A,w[L+12],6,1700485571),A=_(A,v,S,T,w[L+3],10,-1894986606),T=_(T,A,v,S,w[L+10],15,-1051523),S=_(S,T,A,v,w[L+1],21,-2054922799),v=_(v,S,T,A,w[L+8],6,1873313359),A=_(A,v,S,T,w[L+15],10,-30611744),T=_(T,A,v,S,w[L+6],15,-1560198380),S=_(S,T,A,v,w[L+13],21,1309151649),v=_(v,S,T,A,w[L+4],6,-145523070),A=_(A,v,S,T,w[L+11],10,-1120210379),T=_(T,A,v,S,w[L+2],15,718787259),S=_(S,T,A,v,w[L+9],21,-343485551),v=M(v,F),S=M(S,I),T=M(T,W),A=M(A,U)}return Array(v,S,T,A)}function d(w,E,v,S,T,A){return M((E=M(M(E,w),M(S,A)))<<T|E>>>32-T,v)}function y(w,E,v,S,T,A,L){return d(E&v|~E&S,w,E,T,A,L)}function b(w,E,v,S,T,A,L){return d(E&S|v&~S,w,E,T,A,L)}function x(w,E,v,S,T,A,L){return d(E^v^S,w,E,T,A,L)}function _(w,E,v,S,T,A,L){return d(v^(E|~S),w,E,T,A,L)}function M(w,E){var v=(65535&w)+(65535&E);return(w>>16)+(E>>16)+(v>>16)<<16|65535&v}i.exports=function(w){return g.hash(w,m,16)}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,i,n){(function(r,o,a,l,c,u,h,f,p){i.exports=function(g){for(var m,d=new Array(g),y=0;y<g;y++)(3&y)==0&&(m=4294967296*Math.random()),d[y]=m>>>((3&y)<<3)&255;return d}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,i,n){(function(r,o,a,l,c,u,h,f,p){var g=t("./helpers");function m(b,x){b[x>>5]|=128<<24-x%32,b[15+(x+64>>9<<4)]=x;for(var _,M,w,E=Array(80),v=1732584193,S=-271733879,T=-1732584194,A=271733878,L=-1009589776,F=0;F<b.length;F+=16){for(var I=v,W=S,U=T,H=A,J=L,D=0;D<80;D++){E[D]=D<16?b[F+D]:y(E[D-3]^E[D-8]^E[D-14]^E[D-16],1);var X=d(d(y(v,5),(X=S,M=T,w=A,(_=D)<20?X&M|~X&w:!(_<40)&&_<60?X&M|X&w|M&w:X^M^w)),d(d(L,E[D]),(_=D)<20?1518500249:_<40?1859775393:_<60?-1894007588:-899497514)),L=A,A=T,T=y(S,30),S=v,v=X}v=d(v,I),S=d(S,W),T=d(T,U),A=d(A,H),L=d(L,J)}return Array(v,S,T,A,L)}function d(b,x){var _=(65535&b)+(65535&x);return(b>>16)+(x>>16)+(_>>16)<<16|65535&_}function y(b,x){return b<<x|b>>>32-x}i.exports=function(b){return g.hash(b,m,20,!0)}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,i,n){(function(r,o,a,l,c,u,h,f,p){function g(x,_){var M=(65535&x)+(65535&_);return(x>>16)+(_>>16)+(M>>16)<<16|65535&M}function m(x,_){var M,w=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),E=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),v=new Array(64);x[_>>5]|=128<<24-_%32,x[15+(_+64>>9<<4)]=_;for(var S,T,A=0;A<x.length;A+=16){for(var L=E[0],F=E[1],I=E[2],W=E[3],U=E[4],H=E[5],J=E[6],D=E[7],X=0;X<64;X++)v[X]=X<16?x[X+A]:g(g(g((T=v[X-2],y(T,17)^y(T,19)^b(T,10)),v[X-7]),(T=v[X-15],y(T,7)^y(T,18)^b(T,3))),v[X-16]),M=g(g(g(g(D,y(T=U,6)^y(T,11)^y(T,25)),U&H^~U&J),w[X]),v[X]),S=g(y(S=L,2)^y(S,13)^y(S,22),L&F^L&I^F&I),D=J,J=H,H=U,U=g(W,M),W=I,I=F,F=L,L=g(M,S);E[0]=g(L,E[0]),E[1]=g(F,E[1]),E[2]=g(I,E[2]),E[3]=g(W,E[3]),E[4]=g(U,E[4]),E[5]=g(H,E[5]),E[6]=g(J,E[6]),E[7]=g(D,E[7])}return E}var d=t("./helpers"),y=function(x,_){return x>>>_|x<<32-_},b=function(x,_){return x>>>_};i.exports=function(x){return d.hash(x,m,32,!0)}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,i,n){(function(r,o,a,l,c,u,h,f,p){n.read=function(g,m,d,y,A){var x,_,M=8*A-y-1,w=(1<<M)-1,E=w>>1,v=-7,S=d?A-1:0,T=d?-1:1,A=g[m+S];for(S+=T,x=A&(1<<-v)-1,A>>=-v,v+=M;0<v;x=256*x+g[m+S],S+=T,v-=8);for(_=x&(1<<-v)-1,x>>=-v,v+=y;0<v;_=256*_+g[m+S],S+=T,v-=8);if(x===0)x=1-E;else{if(x===w)return _?NaN:1/0*(A?-1:1);_+=Math.pow(2,y),x-=E}return(A?-1:1)*_*Math.pow(2,x-y)},n.write=function(g,m,d,y,b,L){var _,M,w=8*L-b-1,E=(1<<w)-1,v=E>>1,S=b===23?Math.pow(2,-24)-Math.pow(2,-77):0,T=y?0:L-1,A=y?1:-1,L=m<0||m===0&&1/m<0?1:0;for(m=Math.abs(m),isNaN(m)||m===1/0?(M=isNaN(m)?1:0,_=E):(_=Math.floor(Math.log(m)/Math.LN2),m*(y=Math.pow(2,-_))<1&&(_--,y*=2),2<=(m+=1<=_+v?S/y:S*Math.pow(2,1-v))*y&&(_++,y/=2),E<=_+v?(M=0,_=E):1<=_+v?(M=(m*y-1)*Math.pow(2,b),_+=v):(M=m*Math.pow(2,v-1)*Math.pow(2,b),_=0));8<=b;g[d+T]=255&M,T+=A,M/=256,b-=8);for(_=_<<b|M,w+=b;0<w;g[d+T]=255&_,T+=A,_/=256,w-=8);g[d+T-A]|=128*L}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,i,n){(function(r,o,a,l,c,u,h,f,p){var g,m,d;function y(){}(r=i.exports={}).nextTick=(m=typeof window!="undefined"&&window.setImmediate,d=typeof window!="undefined"&&window.postMessage&&window.addEventListener,m?function(b){return window.setImmediate(b)}:d?(g=[],window.addEventListener("message",function(b){var x=b.source;x!==window&&x!==null||b.data!=="process-tick"||(b.stopPropagation(),0<g.length&&g.shift()())},!0),function(b){g.push(b),window.postMessage("process-tick","*")}):function(b){setTimeout(b,0)}),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=y,r.addListener=y,r.once=y,r.off=y,r.removeListener=y,r.removeAllListeners=y,r.emit=y,r.binding=function(b){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(b){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self!="undefined"?self:typeof window!="undefined"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Ep);var uS=Ep.exports,un={position:"csm_Position",positionRaw:"csm_PositionRaw",emissive:"csm_Emissive",normal:"csm_Normal",pointSize:"csm_PointSize",diffuseColor:"csm_DiffuseColor",fragColor:"csm_FragColor"};const hS={[`${un.normal}`]:{"#include <beginnormal_vertex>":`
    vec3 objectNormal = ${un.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `},[`${un.position}`]:{"#include <begin_vertex>":`
    vec3 transformed = ${un.position};
  `},[`${un.positionRaw}`]:{"#include <begin_vertex>":`
    vec4 csm_positionUnprojected = ${un.positionRaw};
    mat4x4 csm_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_unprojectMatrix = csm_unprojectMatrix * instanceMatrix;
    #endif
    csm_positionUnprojected = inverse(csm_unprojectMatrix) * csm_positionUnprojected;
    vec3 transformed = csm_positionUnprojected.xyz;
  `},[`${un.pointSize}`]:{"gl_PointSize = size;":`
    gl_PointSize = ${un.pointSize};
    `},[`${un.diffuseColor}`]:{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = ${un.diffuseColor};
  `},[`${un.fragColor}`]:{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = ${un.fragColor};
  `},[`${un.emissive}`]:{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = ${un.emissive};
    `}},fS=(s,e,t)=>s.split(e).join(t),dS=function(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},pS=(s,e)=>new RegExp(`\\b${dS(e)}\\b`).test(s);function mS(s){try{new s}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}class gS extends Et{constructor({baseMaterial:e,fragmentShader:t,vertexShader:i,uniforms:n,patchMap:r,cacheKey:o,...a}){let l;mS(e)?l=new e(a):(l=e,Object.assign(l,a)),super(),this.uniforms=n||{},this._customPatchMap=r||{},this._fs=t||"",this._vs=i||"",this._base=e;for(const c in l){let u=c;c.startsWith("_")&&(u=c.split("_")[1]),this[u]===void 0&&(this[u]=0),this[u]=l[u]}this.update({fragmentShader:t,vertexShader:i,uniforms:n,cacheKey:o})}update(e){const t=(e==null?void 0:e.uniforms)||{},i=(e==null?void 0:e.fragmentShader)||this._fs,n=(e==null?void 0:e.vertexShader)||this._vs,r=Object.values(t).reduce((o,{value:a})=>o+JSON.stringify(a),"");this.uuid=(e==null||e.cacheKey==null?void 0:e.cacheKey())||uS([i,n,r]),this.generateMaterial({fragmentShader:i,vertexShader:n,uniforms:t})}clone(){return new this.constructor({baseMaterial:this._base}).copy(this)}generateMaterial({fragmentShader:e,vertexShader:t,uniforms:i}){const n=this.parseShader(e),r=this.parseShader(t);this.uniforms=i||{},this.customProgramCacheKey=()=>this.uuid,this.onBeforeCompile=o=>{if(n){const a=this.patchShader(n,o.fragmentShader);o.fragmentShader=a}if(r){const a=this.patchShader(r,o.vertexShader);o.vertexShader=`#define IS_VERTEX;
`+a}o.uniforms={...o.uniforms,...this.uniforms},this.uniforms=o.uniforms},this.needsUpdate=!0}patchShader(e,t){let i=t;const n={...hS,...this._customPatchMap};return Object.keys(n).forEach(r=>{Object.keys(n[r]).forEach(o=>{pS(e.main,r)&&(i=fS(i,o,n[r][o]))})}),i=i.replace("void main() {",`
          ${e.header}
          void main() {
            #ifdef IS_VERTEX
              vec3 csm_Position = position;
              vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
              vec3 csm_Normal = normal;
              float csm_PointSize = 1.;
            #else 
              #ifdef STANDARD
                vec3 csm_Emissive = emissive;
              #endif
              
              vec4 csm_DiffuseColor = vec4(1., 0., 0., 1.);
              vec4 csm_FragColor = vec4(1., 0., 0., 1.);
            #endif

            ${e.main}
          `),i=e.defines+i,i}parseShader(e){if(!e)return;const t=e.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),i=Tc(t),n=Ec(i),r=n.map(l=>l.name).indexOf("main"),o=Ys(i.slice(0,r>=0?n[r].outer[0]:void 0)),a=r>=0?this.getShaderFromIndex(i,n[r].body):"";return{defines:"",header:o,main:a}}getShaderFromIndex(e,t){return Ys(e.slice(t[0],t[1]))}}function Yf(s){return typeof s=="string"?new Ae(s).convertLinearToSRGB():s}function vS(s){switch(s){case"alpha":return{min:0,max:1};case"scale":return{min:0};case"map":return{image:void 0};default:return{}}}function Ap(s){return s instanceof O||s instanceof be||s instanceof Ge||s instanceof Rt||s instanceof Fe}function Kf(s){return Ap(s)?s.toArray():s instanceof Ae?"#"+s.clone().convertLinearToSRGB().getHexString():s instanceof Tt?s.image.src:s}const _S={normal:"normal",add:"add",subtract:"subtract",multiply:"multiply",lighten:"lighten",darken:"darken",divide:"divide",overlay:"overlay",screen:"screen",softlight:"softlight",negation:"negation",reflect:"reflect"},Cp={perlin:"perlin",simplex:"simplex",cell:"cell",curl:"curl",white:"white"},fu={local:"local",world:"world",uv:"uv"},yS={phong:Zc,physical:Kc,toon:Jc,basic:qi,lambert:Qc,standard:Ga};class Ei{constructor(e,t,i){this.uuid=Ic.generateUUID().replace(/-/g,"_"),this.name="LayerMaterial",this.mode="normal",this.visible=!0;const r=Object.getOwnPropertyNames(e).filter(a=>a.startsWith("u_")).reduce((a,l)=>{var c;let u=(c=Object.getOwnPropertyDescriptor(e,l))==null?void 0:c.value;return(Ap(u)||u instanceof Ae)&&(u=u.clone()),{...a,[l.slice(1)]:u}},{});for(const a in r){const l=a.split("_")[1];(t==null?void 0:t[l])!==void 0&&(r[a]=t[l])}t&&Object.keys(t).map(a=>{t[a]!==void 0&&(this[a]=t[a])}),this.uniforms={},this.schema=[];const o={};Object.keys(r).map(a=>{const l=a.split("_")[1];this.uniforms[`u_${this.uuid}_${l}`]={value:Yf(r[a])},this.schema.push({value:r[a],label:l}),o[l]={set:c=>{this.uniforms[`u_${this.uuid}_${l}`].value=Yf(c)},get:()=>this.uniforms[`u_${this.uuid}_${l}`].value}}),t!=null&&t.name&&(this.name=t.name),t!=null&&t.mode&&(this.mode=t.mode),t!=null&&t.visible&&(this.visible=t.visible),Object.defineProperties(this,o),this.vertexShader="",this.fragmentShader="",this.vertexVariables="",this.fragmentVariables="",this.onParse=i,this.buildShaders(e),this.schema.push({value:this.mode,label:"mode",options:Object.values(_S)}),this.schema.push({value:this.visible,label:"visible"})}buildShaders(e){var t;const i=Object.getOwnPropertyNames(e).filter(u=>u==="fragmentShader"||u==="vertexShader").reduce((u,h)=>{var f;return{...u,[h]:(f=Object.getOwnPropertyDescriptor(e,h))==null?void 0:f.value}},{}),n={vert:Tc(i.vertexShader||""),frag:Tc(i.fragmentShader||"")},r={vert:qf(n.vert,this.renameTokens.bind(this)),frag:qf(n.frag,this.renameTokens.bind(this))},o={vert:Ec(r.vert),frag:Ec(r.frag)},a={vert:o.vert.map(u=>u.name).indexOf("main"),frag:o.frag.map(u=>u.name).indexOf("main")},l={vert:a.vert>=0?Ys(r.vert.slice(0,o.vert[a.vert].outer[0])):"",frag:a.frag>=0?Ys(r.frag.slice(0,o.frag[a.frag].outer[0])):""},c={vert:a.vert>=0?this.getShaderFromIndex(r.vert,o.vert[a.vert].body):"",frag:a.frag>=0?this.getShaderFromIndex(r.frag,o.frag[a.frag].body):""};this.vertexShader=this.processFinal(c.vert,!0),this.fragmentShader=this.processFinal(c.frag),this.vertexVariables=l.vert,this.fragmentVariables=l.frag,(t=this.onParse)==null||t.call(this,this),this.schema=this.schema.filter((u,h)=>{const f=u.label;return h===this.schema.findIndex(p=>p.label===f)})}renameTokens(e){if(e.startsWith("u_")){const t=e.slice(2);return`u_${this.uuid}_${t}`}else if(e.startsWith("v_")){const t=e.slice(2);return`v_${this.uuid}_${t}`}else if(e.startsWith("f_")){const t=e.slice(2);return`f_${this.uuid}_${t}`}else return e}processFinal(e,t){const i=e.replace(/\sf_/gm,` f_${this.uuid}_`).replace(/\(f_/gm,`(f_${this.uuid}_`),n=i.match(/^.*return.*$/gm);let r=i.replace(/^.*return.*$/gm,"");if(n!=null&&n[0]){const o=n[0].replace("return","").trim().replace(";",""),a=this.getBlendMode(o,"lamina_finalColor");r+=t?`lamina_finalPosition = ${o};`:`lamina_finalColor = ${a};`}return r}getShaderFromIndex(e,t){return Ys(e.slice(t[0],t[1]))}getBlendMode(e,t){switch(this.mode){default:case"normal":return`lamina_blend_alpha(${t}, ${e}, ${e}.a)`;case"add":return`lamina_blend_add(${t}, ${e}, ${e}.a)`;case"subtract":return`lamina_blend_subtract(${t}, ${e}, ${e}.a)`;case"multiply":return`lamina_blend_multiply(${t}, ${e}, ${e}.a)`;case"lighten":return`lamina_blend_lighten(${t}, ${e}, ${e}.a)`;case"darken":return`lamina_blend_darken(${t}, ${e}, ${e}.a)`;case"divide":return`lamina_blend_divide(${t}, ${e}, ${e}.a)`;case"overlay":return`lamina_blend_overlay(${t}, ${e}, ${e}.a)`;case"screen":return`lamina_blend_screen(${t}, ${e}, ${e}.a)`;case"softlight":return`lamina_blend_softlight(${t}, ${e}, ${e}.a)`;case"reflect":return`lamina_blend_reflect(${t}, ${e}, ${e}.a)`;case"negation":return`lamina_blend_negation(${t}, ${e}, ${e}.a)`}}getSchema(){return this.schema.map(({label:t,options:i,...n})=>({label:t,options:i,...vS(t),...n,value:Kf(this[t])}))}serialize(){const e=this.constructor.name.split("$")[0];let t=Object.keys(this);t=t.filter(r=>!["uuid","uniforms","schema","fragmentShader","vertexShader","fragmentVariables","vertexVariables","attribs","events","__r3f","onParse"].includes(r));const i={};t.forEach(r=>{i[r]=this[r]});const n={};for(const r in this.uniforms){const o=r.replace(`u_${this.uuid}_`,"");n[o]=Kf(this.uniforms[r].value)}return{constructor:e,properties:{...n,...i}}}}class xn extends Ei{constructor(e){super(xn,{name:"Depth",...e},t=>{t.schema.push({value:t.mapping,label:"mapping",options:["vector","world","camera"]});const i=xn.getMapping(t.uuid,t.mapping);t.fragmentShader=t.fragmentShader.replace("lamina_mapping_template",i)}),this.mapping="vector"}static getMapping(e,t){switch(t){default:case"vector":return`length(v_${e}_worldPosition - u_${e}_origin)`;case"world":return`length(v_${e}_position - vec3(0.))`;case"camera":return`length(v_${e}_worldPosition - cameraPosition)`}}}xn.u_near=2;xn.u_far=10;xn.u_origin=new O(0,0,0);xn.u_colorA="white";xn.u_colorB="black";xn.u_alpha=1;xn.vertexShader=`
  varying vec3 v_worldPosition;
  varying vec3 v_position;

  void main() {
    v_worldPosition = (vec4(position, 1.0) * modelMatrix).xyz;
    v_position = position;
  }
  `;xn.fragmentShader=`   
    uniform float u_alpha;
    uniform float u_near;
    uniform float u_far;
    uniform float u_isVector;
    uniform vec3 u_origin;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;

    varying vec3 v_worldPosition;
    varying vec3 v_position;

    void main() {
      float f_dist = lamina_mapping_template;
      float f_depth = (f_dist - u_near) / (u_far - u_near);
			vec3 f_depthColor =  mix(u_colorB, u_colorA, 1.0 - clamp(f_depth, 0., 1.));
  
  
      return vec4(f_depthColor, u_alpha);
    }
  `;class us extends Ei{constructor(e){super(us,{name:"Color",...e})}}us.u_color="red";us.u_alpha=1;us.fragmentShader=`   
    uniform vec3 u_color;
    uniform float u_alpha;

    void main() {
      return vec4(u_color, u_alpha);
    }
  `;class rn extends Ei{constructor(e){super(rn,{name:"noise",...e},t=>{t.schema.push({value:t.type,label:"type",options:Object.values(Cp)}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(fu)});const i=rn.getNoiseFunction(t.type),n=rn.getMapping(t.mapping);t.vertexShader=t.vertexShader.replace("lamina_mapping_template",n),t.fragmentShader=t.fragmentShader.replace("lamina_noise_template",i)}),this.type="perlin",this.mapping="local"}static getNoiseFunction(e){switch(e){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(e){switch(e){default:case"local":return"position";case"world":return"(modelMatrix * vec4(position,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}rn.u_colorA="#666666";rn.u_colorB="#666666";rn.u_colorC="#FFFFFF";rn.u_colorD="#FFFFFF";rn.u_alpha=1;rn.u_scale=1;rn.u_offset=new O(0,0,0);rn.vertexShader=`
    varying vec3 v_position;

    void main() {
        v_position = lamina_mapping_template;
    }
  `;rn.fragmentShader=`   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_colorC;
    uniform vec3 u_colorD;
    uniform vec3 u_offset;

    uniform float u_alpha;
    uniform float u_scale;

    varying vec3 v_position;


    void main() {
        float f_n = lamina_noise_template((v_position + u_offset) * u_scale);

        float f_step1 = 0.;
        float f_step2 = 0.2;
        float f_step3 = 0.6;
        float f_step4 = 1.;

        vec3 f_color = mix(u_colorA, u_colorB, smoothstep(f_step1, f_step2, f_n));
        f_color = mix(f_color, u_colorC, smoothstep(f_step2, f_step3, f_n));
        f_color = mix(f_color, u_colorD, smoothstep(f_step3, f_step4, f_n));

        return vec4(f_color, u_alpha);
    }
  `;class Nn extends Ei{constructor(e){super(Nn,{name:"Fresnel",...e})}}Nn.u_color="white";Nn.u_alpha=1;Nn.u_bias=0;Nn.u_intensity=1;Nn.u_power=2;Nn.u_factor=1;Nn.vertexShader=`
    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        v_worldPosition = vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]);
        v_worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
        
    }
  `;Nn.fragmentShader=`   
    uniform vec3 u_color;
    uniform float u_alpha;
    uniform float u_bias;
    uniform float u_intensity;
    uniform float u_power;
    uniform float u_factor;

    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        float f_a = (u_factor  + dot(v_worldPosition, v_worldNormal));
        float f_fresnel = u_bias + u_intensity * pow(abs(f_a), u_power);

        f_fresnel = clamp(f_fresnel, 0.0, 1.0);
        return vec4(f_fresnel * u_color, u_alpha);
    }
  `;class En extends Ei{constructor(e){super(En,{name:"Gradient",...e},t=>{t.schema.push({value:t.axes,label:"axes",options:["x","y","z"]}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(fu)});const i=En.getMapping(t.mapping);t.vertexShader=t.vertexShader.replace("lamina_mapping_template",i||"local"),t.fragmentShader=t.fragmentShader.replace("axes_template",t.axes||"x")}),this.axes="x",this.mapping="local"}static getMapping(e){switch(e){default:case"local":return"position";case"world":return"(modelMatrix * vec4(position,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}En.u_colorA="white";En.u_colorB="black";En.u_alpha=1;En.u_start=1;En.u_end=-1;En.u_contrast=1;En.vertexShader=`
		varying vec3 v_position;

		vod main() {
      v_position = lamina_mapping_template;
		}
  `;En.fragmentShader=`   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_axis;
    uniform float u_alpha;
    uniform float u_start;
    uniform float u_end;
    uniform float u_contrast;

		varying vec3 v_position;

    void main() {

      float f_step = smoothstep(u_start, u_end, v_position.axes_template * u_contrast);
      vec3 f_color = mix(u_colorA, u_colorB, f_step);

      return vec4(f_color, u_alpha);
    }
  `;class hs extends Ei{constructor(e){super(hs,{name:"Matcap",...e})}}hs.u_alpha=1;hs.u_map=void 0;hs.vertexShader=`
    varying vec3 v_position;
    varying vec3 v_normal;
    
    void main() {
      v_position = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );
      v_normal = normalize( normalMatrix * normal );
    }
    `;hs.fragmentShader=` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec3 v_position;
		varying vec3 v_normal;

		
    void main() {
			vec3 f_r = reflect( v_position, v_normal );
			float f_m = 2. * sqrt( pow( f_r.x, 2. ) + pow( f_r.y, 2. ) + pow( f_r.z + 1., 2. ) );
			vec2 f_vN = f_r.xy / f_m + .5;

			vec3 f_base = texture2D(u_map, f_vN).rgb;

      return vec4(f_base, u_alpha);
    }
  `;class fs extends Ei{constructor(e){super(fs,{name:"Texture",...e})}}fs.u_alpha=1;fs.u_map=void 0;fs.vertexShader=`
    varying vec2 v_uv;
    
    void main() {
        v_uv = uv;
    }
    `;fs.fragmentShader=` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec2 v_uv;

    void main() {
			vec4 f_color = texture2D(u_map, v_uv);
      return vec4(f_color.rgb, f_color.a * u_alpha);
    }
  `;class Vi extends Ei{constructor(e){super(Vi,{name:"Displace",...e},t=>{t.schema.push({value:t.type,label:"type",options:Object.values(Cp)}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(fu)});const i=Vi.getNoiseFunction(t.type),n=Vi.getMapping(t.mapping);t.vertexVariables=t.vertexVariables.replace("lamina_mapping_template",n),t.vertexVariables=t.vertexVariables.replace("lamina_noise_template",i)}),this.type="perlin",this.mapping="local"}static getNoiseFunction(e){switch(e){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(e){switch(e){default:case"local":return"p";case"world":return"(modelMatrix * vec4(p,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}Vi.u_strength=1;Vi.u_scale=1;Vi.u_offset=new O(0,0,0);Vi.vertexShader=`
       
      uniform float u_strength;
      uniform float u_scale;
      uniform vec3 u_offset;

      vec3 displace(vec3 p) {
				vec3 f_position = lamina_mapping_template;
        float f_n = lamina_noise_template((f_position + u_offset) * u_scale) * u_strength;
        vec3 f_newPosition = p + (f_n * normal);

				return f_newPosition;
      }

      
			vec3 orthogonal(vec3 v) {
  		  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
  		  : vec3(0.0, -v.z, v.y));
  		}
  		vec3 recalcNormals(vec3 newPos) {
  		  float offset = 0.001;
  		  vec3 tangent = orthogonal(normal);
  		  vec3 bitangent = normalize(cross(normal, tangent));
  		  vec3 neighbour1 = position + tangent * offset;
  		  vec3 neighbour2 = position + bitangent * offset;
  		  vec3 displacedNeighbour1 = displace(neighbour1);
  		  vec3 displacedNeighbour2 = displace(neighbour2);
  		  vec3 displacedTangent = displacedNeighbour1 - newPos;
  		  vec3 displacedBitangent = displacedNeighbour2 - newPos;
  		  return normalize(cross(displacedTangent, displacedBitangent));
  		}
  
  
      void main() {
       
				vec3 f_newPosition = displace(position);
        lamina_finalNormal = recalcNormals(f_newPosition);

        return f_newPosition;
      }
    `;class ds extends Ei{constructor(e){super(ds,{name:"Normal",...e})}}ds.u_alpha=1;ds.u_direction=new O(1,1,1);ds.vertexShader=`   
  varying vec3 v_normals; 

  void main() {
    v_normals = normal;
  }
`;ds.fragmentShader=`   
  	uniform float u_alpha;
  	uniform vec3 u_color;
  	uniform vec3 u_direction;

		varying vec3 v_normals;

    void main() {
			vec3 f_normalColor = vec3(1.);
      f_normalColor.x = v_normals.x * u_direction.x;
      f_normalColor.y = v_normals.y * u_direction.y;
      f_normalColor.z = v_normals.z * u_direction.z;

      return vec4(f_normalColor, u_alpha);
    }
  `;var xS=`
vec4 lamina_blend_add(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz + y.xyz, 1.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec3 lamina_blend_alpha(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 lamina_blend_alpha(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(lamina_blend_alpha(x.rgb, y.rgb, a), x.a);

}
vec4 lamina_blend_average(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz) * 0.5 * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_burn(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 lamina_blend_color_burn(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_burn(x.r, y.r),
		lamina_blend_color_burn(x.g, y.g),
		lamina_blend_color_burn(x.b, y.b),
		lamina_blend_color_burn(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_dodge(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 lamina_blend_color_dodge(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_dodge(x.r, y.r),
		lamina_blend_color_dodge(x.g, y.g),
		lamina_blend_color_dodge(x.b, y.b),
		lamina_blend_color_dodge(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_darken(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_difference(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(abs(x.xyz - y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_divide(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 lamina_blend_divide(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_divide(x.r, y.r),
		lamina_blend_divide(x.g, y.g),
		lamina_blend_divide(x.b, y.b),
		lamina_blend_divide(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_exclusion(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz - 2.0 * x.xyz * y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_lighten(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_multiply(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4( x.xyz * y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_negation(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - abs(1.0 - x.xyz - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_normal(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_overlay(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 lamina_blend_overlay(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_overlay(x.r, y.r),
		lamina_blend_overlay(x.g, y.g),
		lamina_blend_overlay(x.b, y.b),
		lamina_blend_overlay(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_reflect(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 lamina_blend_reflect(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_reflect(x.r, y.r),
		lamina_blend_reflect(x.g, y.g),
		lamina_blend_reflect(x.b, y.b),
		lamina_blend_reflect(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_screen(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - (1.0 - x.xyz) * (1.0 - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_softlight(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 lamina_blend_softlight(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_softlight(x.r, y.r),
		lamina_blend_softlight(x.g, y.g),
		lamina_blend_softlight(x.b, y.b),
		lamina_blend_softlight(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_subtract(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz + y.xyz - 1.0, 0.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}

`,Zf=`

// From: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
// Huge thanks to the creators of these algorithms

float lamina_noise_mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_perm(vec4 x){return lamina_noise_mod289(((x * 34.0) + 1.0) * x);}
vec4 lamina_noise_permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 lamina_noise_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }


float lamina_noise_white(vec2 p) {
  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) *
               (0.1 + abs(sin(p.y * 13.0 + p.x))));
}

float lamina_noise_white(vec3 p) {
  return lamina_noise_white(p.xy);
}


vec3 lamina_noise_fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float lamina_noise_perlin(vec3 P) {
  vec3 Pi0 = floor(P);        // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);        // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = lamina_noise_permute(lamina_noise_permute(ix) + iy);
  vec4 ixy0 = lamina_noise_permute(ixy + iz0);
  vec4 ixy1 = lamina_noise_permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = lamina_noise_taylorInvSqrt(
      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = lamina_noise_taylorInvSqrt(
      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = lamina_noise_fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),
                 fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return lamina_normalize(2.2 * n_xyz);
}

float lamina_noise_simplex(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = lamina_noise_permute(lamina_noise_permute(lamina_noise_permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y +
                             vec4(0.0, i1.y, i2.y, 1.0)) +
                    i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm =
      lamina_noise_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m =
      max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return lamina_normalize(42.0 *
         dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));
}

vec3 lamina_noise_simplex3(vec3 x) {
  float s = lamina_noise_simplex(vec3(x));
  float s1 = lamina_noise_simplex(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
  float s2 = lamina_noise_simplex(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
  vec3 c = vec3(s, s1, s2);
  return c;
}

vec3 lamina_noise_curl(vec3 p) {
  const float e = .1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  vec3 p_x0 = lamina_noise_simplex3(p - dx);
  vec3 p_x1 = lamina_noise_simplex3(p + dx);
  vec3 p_y0 = lamina_noise_simplex3(p - dy);
  vec3 p_y1 = lamina_noise_simplex3(p + dy);
  vec3 p_z0 = lamina_noise_simplex3(p - dz);
  vec3 p_z1 = lamina_noise_simplex3(p + dz);

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / (2.0 * e);
  return normalize(vec3(x, y, z) * divisor);
}

vec3 lamina_permute(vec3 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec3 lamina_dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {
  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);
}

// From: https://github.com/Erkaman/glsl-worley
float lamina_noise_worley(vec3 P) {
  float jitter = 1.;
  bool manhattanDistance = false; 

  float K = 0.142857142857; // 1/7
  float Ko = 0.428571428571; // 1/2-K/2
  float  K2 = 0.020408163265306; // 1/(7*7)
  float Kz = 0.166666666667; // 1/6
  float Kzo = 0.416666666667; // 1/2-1/6*2

	vec3 Pi = mod(floor(P), 289.0);
 	vec3 Pf = fract(P) - 0.5;

	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

	vec3 p = lamina_permute(Pi.x + vec3(-1.0, 0.0, 1.0));
	vec3 p1 = lamina_permute(p + Pi.y - 1.0);
	vec3 p2 = lamina_permute(p + Pi.y);
	vec3 p3 = lamina_permute(p + Pi.y + 1.0);

	vec3 p11 = lamina_permute(p1 + Pi.z - 1.0);
	vec3 p12 = lamina_permute(p1 + Pi.z);
	vec3 p13 = lamina_permute(p1 + Pi.z + 1.0);

	vec3 p21 = lamina_permute(p2 + Pi.z - 1.0);
	vec3 p22 = lamina_permute(p2 + Pi.z);
	vec3 p23 = lamina_permute(p2 + Pi.z + 1.0);

	vec3 p31 = lamina_permute(p3 + Pi.z - 1.0);
	vec3 p32 = lamina_permute(p3 + Pi.z);
	vec3 p33 = lamina_permute(p3 + Pi.z + 1.0);

	vec3 ox11 = fract(p11*K) - Ko;
	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;
	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

	vec3 ox12 = fract(p12*K) - Ko;
	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;
	vec3 oz12 = floor(p12*K2)*Kz - Kzo;

	vec3 ox13 = fract(p13*K) - Ko;
	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;
	vec3 oz13 = floor(p13*K2)*Kz - Kzo;

	vec3 ox21 = fract(p21*K) - Ko;
	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;
	vec3 oz21 = floor(p21*K2)*Kz - Kzo;

	vec3 ox22 = fract(p22*K) - Ko;
	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;
	vec3 oz22 = floor(p22*K2)*Kz - Kzo;

	vec3 ox23 = fract(p23*K) - Ko;
	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;
	vec3 oz23 = floor(p23*K2)*Kz - Kzo;

	vec3 ox31 = fract(p31*K) - Ko;
	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;
	vec3 oz31 = floor(p31*K2)*Kz - Kzo;

	vec3 ox32 = fract(p32*K) - Ko;
	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;
	vec3 oz32 = floor(p32*K2)*Kz - Kzo;

	vec3 ox33 = fract(p33*K) - Ko;
	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;
	vec3 oz33 = floor(p33*K2)*Kz - Kzo;

	vec3 dx11 = Pfx + jitter*ox11;
	vec3 dy11 = Pfy.x + jitter*oy11;
	vec3 dz11 = Pfz.x + jitter*oz11;

	vec3 dx12 = Pfx + jitter*ox12;
	vec3 dy12 = Pfy.x + jitter*oy12;
	vec3 dz12 = Pfz.y + jitter*oz12;

	vec3 dx13 = Pfx + jitter*ox13;
	vec3 dy13 = Pfy.x + jitter*oy13;
	vec3 dz13 = Pfz.z + jitter*oz13;

	vec3 dx21 = Pfx + jitter*ox21;
	vec3 dy21 = Pfy.y + jitter*oy21;
	vec3 dz21 = Pfz.x + jitter*oz21;

	vec3 dx22 = Pfx + jitter*ox22;
	vec3 dy22 = Pfy.y + jitter*oy22;
	vec3 dz22 = Pfz.y + jitter*oz22;

	vec3 dx23 = Pfx + jitter*ox23;
	vec3 dy23 = Pfy.y + jitter*oy23;
	vec3 dz23 = Pfz.z + jitter*oz23;

	vec3 dx31 = Pfx + jitter*ox31;
	vec3 dy31 = Pfy.z + jitter*oy31;
	vec3 dz31 = Pfz.x + jitter*oz31;

	vec3 dx32 = Pfx + jitter*ox32;
	vec3 dy32 = Pfy.z + jitter*oy32;
	vec3 dz32 = Pfz.y + jitter*oz32;

	vec3 dx33 = Pfx + jitter*ox33;
	vec3 dy33 = Pfy.z + jitter*oy33;
	vec3 dz33 = Pfz.z + jitter*oz33;

	vec3 d11 = lamina_dist(dx11, dy11, dz11, manhattanDistance);
	vec3 d12 = lamina_dist(dx12, dy12, dz12, manhattanDistance);
	vec3 d13 = lamina_dist(dx13, dy13, dz13, manhattanDistance);
	vec3 d21 = lamina_dist(dx21, dy21, dz21, manhattanDistance);
	vec3 d22 = lamina_dist(dx22, dy22, dz22, manhattanDistance);
	vec3 d23 = lamina_dist(dx23, dy23, dz23, manhattanDistance);
	vec3 d31 = lamina_dist(dx31, dy31, dz31, manhattanDistance);
	vec3 d32 = lamina_dist(dx32, dy32, dz32, manhattanDistance);
	vec3 d33 = lamina_dist(dx33, dy33, dz33, manhattanDistance);

	vec3 d1a = min(d11, d12);
	d12 = max(d11, d12);
	d11 = min(d1a, d13); // Smallest now not in d12 or d13
	d13 = max(d1a, d13);
	d12 = min(d12, d13); // 2nd smallest now not in d13
	vec3 d2a = min(d21, d22);
	d22 = max(d21, d22);
	d21 = min(d2a, d23); // Smallest now not in d22 or d23
	d23 = max(d2a, d23);
	d22 = min(d22, d23); // 2nd smallest now not in d23
	vec3 d3a = min(d31, d32);
	d32 = max(d31, d32);
	d31 = min(d3a, d33); // Smallest now not in d32 or d33
	d33 = max(d3a, d33);
	d32 = min(d32, d33); // 2nd smallest now not in d33
	vec3 da = min(d11, d21);
	d21 = max(d11, d21);
	d11 = min(da, d31); // Smallest now in d11
	d31 = max(da, d31); // 2nd smallest now not in d31
	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
	d12 = min(d12, d21); // 2nd smallest now not in d21
	d12 = min(d12, d22); // nor in d22
	d12 = min(d12, d31); // nor in d31
	d12 = min(d12, d32); // nor in d32
	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
	d11.y = min(d11.y,d12.z); // Only two more to go
	d11.y = min(d11.y,d11.z); // Done! (Phew!)

  vec2 F = sqrt(d11.xy);
	return F.x; // F1, F2

}

float lamina_noise_swirl(vec3 position) {
    float scale = 0.1;
    float freq = 4. * scale;
    float t = 1.;

    vec3 pos = (position * scale) + lamina_noise_curl(position * 7. * scale);

    float worley1 = 1. - lamina_noise_worley((pos * (freq * 2.)) +  (t * 2.));
    float worley2 = 1. - lamina_noise_worley((pos * (freq * 4.)) +  (t * 4.));
    float worley3 = 1. - lamina_noise_worley((pos * (freq * 8.)) +  (t * 8.));
    float worley4 = 1. - lamina_noise_worley((pos * (freq * 16.)) +  (t * 16.));
    
    float fbm1 = worley1 * .625 + worley2 * .25 + worley3 * .125;
    float fbm2 = worley2 * .625 + worley3 * .25 + worley4 * .125;
    float fbm3 = worley3 * .75 + worley4 * .25;

    vec3 curlWorleyFbm = vec3(fbm1, fbm2, fbm3);
    float curlWorley = curlWorleyFbm.r * .625 + curlWorleyFbm.g * .25 + 
        curlWorleyFbm.b * .125;

    return curlWorley;
}
  
  
`,Jf=`

float lamina_map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float lamina_normalize(float v) { return lamina_map(v, -1.0, 1.0, 0.0, 1.0); }
`;class Lp extends gS{constructor({color:e,alpha:t,lighting:i,layers:n,name:r,...o}={}){super({baseMaterial:yS[i||"basic"],...o}),this.name="LayerMaterial",this.layers=[],this.lighting="basic";const a=e||"white",l=t!=null?t:1;this.uniforms={u_lamina_color:{value:typeof a=="string"?new Ae(a).convertSRGBToLinear():a},u_lamina_alpha:{value:l}},this.layers=n||this.layers,this.lighting=i||this.lighting,this.name=r||this.name,this.refresh()}genShaders(){let e="",t="",i="",n="",r={};return this.layers.filter(o=>o.visible).forEach(o=>{e+=o.vertexVariables+`
`,t+=o.fragmentVariables+`
`,i+=o.vertexShader+`
`,n+=o.fragmentShader+`
`,r={...r,...o.uniforms}}),r={...r,...this.uniforms},{uniforms:r,vertexShader:`
        ${Jf}
        ${Zf}
        ${e}

        void main() {
          vec3 lamina_finalPosition = position;
          vec3 lamina_finalNormal = normal;

          ${i}

          csm_Position = lamina_finalPosition;
          csm_Normal = lamina_finalNormal;
        }
        `,fragmentShader:`
        ${Jf}
        ${Zf}
        ${xS}
        ${t}

        uniform vec3 u_lamina_color;
        uniform float u_lamina_alpha;

        void main() {
          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);

          ${n}

          csm_DiffuseColor = lamina_finalColor;
         
        }
        `}}refresh(){const{uniforms:e,fragmentShader:t,vertexShader:i}=this.genShaders();super.update({fragmentShader:t,vertexShader:i,uniforms:e})}serialize(){return{constructor:"LayerMaterial",properties:{color:this.color,alpha:this.alpha,name:this.name,lighting:this.lighting}}}set color(e){var t,i;(t=this.uniforms)!=null&&(i=t.u_lamina_color)!=null&&i.value&&(this.uniforms.u_lamina_color.value=typeof e=="string"?new Ae(e).convertSRGBToLinear():e)}get color(){var e,t;return(e=this.uniforms)==null||(t=e.u_lamina_color)==null?void 0:t.value}set alpha(e){this.uniforms.u_lamina_alpha.value=e}get alpha(){return this.uniforms.u_lamina_alpha.value}}const bS=new Ae("#E7B473").convertSRGBToLinear(),gi={proton:new Ae("#FF0605").convertSRGBToLinear(),neutron:new Ae("#9538FF").convertSRGBToLinear(),electron:new Ae("#0605FF").convertSRGBToLinear(),protium:new Ae("#0000FF").convertSRGBToLinear(),deuterium:new Ae("#0000C0").convertSRGBToLinear(),tritium:new Ae("#0000A0").convertSRGBToLinear(),uranium:new Ae("#002b4d").convertSRGBToLinear(),plutonium:new Ae("#006BFF").convertSRGBToLinear()};di("PROTIUM","PROTON"),di("PROTIUM","NEUTRON"),di("PROTIUM","ELECTRON"),di("DEUTERIUM","PROTON"),di("DEUTERIUM","NEUTRON"),di("DEUTERIUM","ELECTRON"),di("TRITIUM","PROTON"),di("TRITIUM","NEUTRON"),di("TRITIUM","ELECTRON");function di(s,e){return new Lp({lighting:"basic",layers:[new us({color:gi[e.toLowerCase()]}),new xn({colorA:gi[s.toLowerCase()],colorB:gi[e.toLowerCase()],alpha:.5,mode:"normal",near:0,far:2,origin:[1,1,1]}),new xn({colorA:gi.neutron,colorB:gi[e.toLowerCase()],alpha:.5,mode:"add",near:3,far:2,origin:[1,1,1]}),new Nn({mode:"add",color:bS,intensity:.3,power:2.5,bias:0}),new rn({mapping:"local",type:"white",scale:1,colorA:gi[e.toLowerCase()],colorB:gi[s.toLowerCase()],mode:"overlay"})]})}const wS=new Lp({side:yn,layers:[new En({colorA:gi.uranium,colorB:gi.proton,alpha:1,contrast:.5,start:1,end:-4,axes:"x",mapping:"local",visible:!0}),new rn({mapping:"local",type:"white",scale:1,colorA:"white",colorB:"black",mode:"subtract",alpha:.2})]});var Qf=[{name:"Wissenschaftler",categories:[{name:"Fachkompetenz",subcategories:[{name:"Fachwissen",characteristic:"Ich habe ein ausgepr\xE4gtes Fachwissen",description:"d. h. ich kann dieses weiteren Personen vermitteln und ihnen praktische Anwendungsbereiche aufzeigen, mich in Schrift und Sprache wissenschaftlich ausdr\xFCcken und bin daher in der Lage mich mit KollegInnen auszutauschen und Arbeiten zu verfassen.",multiplier:.9},{name:"Methodenkompetenz",characteristic:"Ich verf\xFCge \xFCber Methodenkompetenz",description:"d. h. ich kann Lehrveranstaltungen, z. B. mithilfe von Strukturmodellen gestalten, Forschung, z. B. mithilfe von statistischen Auswertungsverfahren, durchf\xFChren und mein Methodenwissen weiteren Personen vermitteln.",multiplier:.8},{name:"Didaktisches Wissen",characteristic:"Ich habe ein ausgepr\xE4gtes didaktisches Wissen",description:"d. h. ich kann mein Wissen weiteren Personen ad\xE4quat vermitteln. Ich wei\xDF unter welchen Voraussetzungen Lehren und Lernen stattfinden kann, plane Lehrveranstaltungen sowie Pr\xFCfungssituationen entsprechend und stelle lernf\xF6rderliche Strukturen bereit.",multiplier:.6},{name:"Lebenslanges Lernen",characteristic:"Ich bin bereit lebenslang zu lernen",description:"d. h. ich bin bereit mich kontinuierlich weiterbilden, z.B. hinsichtlich des Managements oder der Mitarbeiterf\xFChrung, mich \xFCber neue Forschungen, Methoden etc. zu informieren und diese daraufhin anzuwenden und in meiner Forschung zu ber\xFCcksichtigen.",multiplier:.5},{name:"Probleml\xF6sekompetenz",characteristic:"Ich verf\xFCge \xFCber Probleml\xF6sekompetenz",description:"d. h. ich kann und bin interessiert daran die vielf\xE4ltigen Aufgaben und Probleme, mit denen ich im Berufsleben konfrontiert werde, erkennen und professionell, d. h. konstruktiv und zielorientiert l\xF6sen.",multiplier:.4}]},{name:"Humankompetenz",subcategories:[{name:"Selbstbewusstsein",characteristic:"Ich bin selbstbewusst",description:"d. h. ich kann Lehrveranstaltungen souver\xE4n halten, ein Vorbild f\xFCr weitere Personen sein, diese in ihrem Verhalten leiten, sowohl meine Person als auch meine Ideen und mein Wissen selbstbewusst vermarkten. ",multiplier:.8},{name:"Begeisterung",characteristic:"Ich besitze Begeisterung f\xFCr den Beruf",description:"d. h. ich empfinde Begeisterung und Freude, wenn ich an eine bestimmte Thematik und Fragestellung denke und mir vorstelle neue Erkenntnisse und Wissen in diesem Bereich zu schaffen und diese/s mit weiteren Personen zu teilen und sie davon zu \xFCberzeugen.",multiplier:.7},{name:"Durchhalteverm\xF6gen",characteristic:"Ich besitze ein ausgepr\xE4gtes Durchhalteverm\xF6gen",description:"d. h. ich bin bereit auf meinen Wunschberuf zu warten, eine lange Phase der Unsicherheit zu Beginn meiner Karriere in Kauf zu nehmen, mehrere Wochen, Monate oder Jahre eine Forschungsfrage zu beantworten und meine Ergebnisse kontinuierlich zu \xFCberpr\xFCfen.",multiplier:.6},{name:"Selbstst\xE4ndigkeit",characteristic:"Ich bin selbstst\xE4ndig",description:"d. h. ich kann in den Bereichen der Forschung und Lehre autonom arbeiten, z.B. Recherchen betreiben, Untersuchungen durchf\xFChren oder Themenbereiche ausw\xE4hlen und vermitteln. Ich kann mich selbst organisieren, Priorit\xE4ten setzen und meine Zeit effektiv nutzen.",multiplier:.6},{name:"Zielorientierung",characteristic:"Ich bin zielorientiert",description:"d. h. ich kann Projekt- und Lebensziele bewusst ansteuern und umsetzen, auf das Ziel der Beantwortung der Forschungsfrage und der Erweiterung des Wissens hinarbeiten, dies auch in unsicheren Lebenslagen (z.B. in finanzieller Hinsicht) tun.",multiplier:.6}]},{name:"Sozialkompetenz",subcategories:[{name:"Gestaltung sozialer Beziehungen ",characteristic:"Ich bin in der Lage soziale Beziehungen zu untergeordneten, gleichgestellten und \xFCbergeordneten Personen gewinnbringend zu gestalten",description:"d.h. ich kann sichere Netzwerke aufbauen, Mitarbeiter f\xFChren, weitere Personen beraten, mit ihnen diskutieren und ggf. von meiner Meinung \xFCberzeugen, meine Stellung in der Hierarchie meines Berufes verfestigen, Anerkennung und Ideen von anderen Personen annehmen.",multiplier:.8},{name:"Gestaltung von Kommunikation",characteristic:"Ich bin in der Lage adressatengerecht mit untergeordneten, gleichgestellten und \xFCbergeordneten Personen zu kommunizieren",description:"d.h. ich kann um Hilfe bitten und Hilfe anbieten, Gespr\xE4che vorbereiten und f\xFChren, vorher spezifische Fragen formulieren, Grenzen kennen, sachgerecht und zielgerichtet formulieren und konstruktives Feedback geben.",multiplier:.6},{name:"Beratungskompetenz",characteristic:"Ich verf\xFCge \xFCber Beratungskompetenz",description:"d.h. ich kann untergeordnete und gleichgestellte Personen beraten, kenne verschiedene Beratungsformen und kann eigene Grenzen in Beratungsgespr\xE4chen einsch\xE4tzen.",multiplier:.4},{name:"Teamf\xE4higkeit",characteristic:"Ich bin teamf\xE4hig",description:"d.h. ich kann zielorientiert in einem Team arbeiten, Teammitarbeiter f\xFChren, mit ihnen interagieren, mich mit ihnen austauschen und ggf. an sie anpassen.",multiplier:.3},{name:"Feedback- und R\xFCckmeldekompetenz",characteristic:"Ich verf\xFCge \xFCber Feedback- und R\xFCckmeldekompetenz",description:"d.h. ich kann untergeordneten und gleichgestellten Personen konstruktives Feedback geben, Leistungen ad\xE4quat bewerten, Feedback zu einer Veranstaltung einholen und evaluieren.",multiplier:.2}]}]},{name:"Lehrkr\xE4fte",categories:[{name:"Fachkompetenz",subcategories:[{name:"Didaktisches Wissen",characteristic:"Ich habe ein ausgepr\xE4gtes didaktisches Wissen",description:"d.h. ich kann effektiven und interessanten Unterricht adressatengerecht und zielorientiert planen, fachliche Inhalte vermitteln und dabei aus einem gro\xDFen Methodenrepertoire sch\xF6pfen, analoge und digitale Medien situationsgerecht einsetzen.",multiplier:1},{name:"Fachunabh\xE4ngiges Wissen",characteristic:"Ich habe ein ausgepr\xE4gtes fachunabh\xE4ngiges Wissen",description:"d.h. ich kann diagnostische Urteile f\xE4llen, gesellschaftliche, kulturelle und technologische Entwicklungen sowie rechtliche Rahmenbedingungen in den Unterricht miteinflie\xDFen lassen, mich an der Organisationsarbeit in der Schule beteiligen.",multiplier:1},{name:"Fachwissen",characteristic:"Ich habe ein ausgepr\xE4gtes Fachwissen",description:"d.h. ich habe eine reichhaltige Wissensbasis und ein tiefes Verst\xE4ndnis, um Unterricht planen und gestalten sowie Inhalte fach- und sachgerecht und im Hinblick auf den Lernfortschritt erfolgreich vermitteln zu k\xF6nnen.",multiplier:1},{name:"P\xE4dagogisches Wissen",characteristic:"Ich habe ein ausgepr\xE4gtes p\xE4dagogisches Wissen",description:"d.h. ich kann Lernprozesse lernf\xF6rderlich, motivierend, kooperativ und pers\xF6nlichkeitsentfaltend im Hinblick auf die verschiedenen Voraussetzungen der Sch\xFClerInnen (Stichwort: Heterogenit\xE4t) gestalten, die Interaktion und Kommunikation in der Klasse gestalten sowie Schwierigkeiten und soziale Konflikte l\xF6sen.",multiplier:1},{name:"Beurteilungskompetenz",characteristic:"Ich verf\xFCge \xFCber Beurteilungskompetenz",description:"d.h. ich kann unterschiedliche, auch digitale Formen der Leistungsbeurteilungen einsetzen, Lernleistungen individuell anhand von Beurteilungsma\xDFst\xE4ben bewerten, meine Bewertung begr\xFCnden, Perspektiven aufzeigen, gemeinsam mit weiteren Personen Leistungen reflektieren.",multiplier:.75}]},{name:"Humankompetenz",subcategories:[{name:"Reflexionsf\xE4higkeit",characteristic:"Ich bin reflexionsf\xE4hig",description:"d.h. ich kann meinen Unterrichtsalltag, auch im Hinblick auf die Heterogenit\xE4t der Sch\xFClerInnen, reflektieren und mich so pers\xF6nlich weiterentwickeln, ich verstehe meinen Beruf als eine st\xE4ndige Lernaufgabe und entwickle meine Kompetenzen kontinuierlich weiter.",multiplier:1},{name:"Innovationskompetenz",characteristic:"Ich verf\xFCge \xFCber Innovationskompetenz",description:"d.h. ich kann neue Ergebnisse der Bildungs- und Schulforschung f\xFCr meine eigene T\xE4tigkeit nutzen, R\xFCckmeldungen geben, erhalten und evaluieren, um meine p\xE4dagogische Arbeit zu optimieren, die Qualit\xE4t von Schule und Unterricht st\xE4ndig weiterentwickeln.",multiplier:.75},{name:"Kritikf\xE4higkeit",characteristic:"Ich bin kritikf\xE4hig",description:"d.h. ich kann 'Misserfolge' und R\xFCckmeldungen anderer als Ansto\xDF zur Evaluation und pers\xF6nlichen Weiterentwicklung nutzen.",multiplier:.75},{name:"Selbstst\xE4ndigkeit",characteristic:"Ich bin selbstst\xE4ndig",description:"d.h. ich kann in meinem beruflichen Alltag autonom mit meinen Ressourcen umgehen, Unterricht (resp. Materialien, Methoden, Medien, Interaktionsformen) eigenst\xE4ndig gestalten und meine Kompetenzen erweitern.",multiplier:.75},{name:"Begeisterung",characteristic:"Ich besitze Begeisterung f\xFCr den Beruf",description:"d. h. ich empfinde Begeisterung und Freude, wenn ich mir vorstelle, mit den Sch\xFClerInnen zu interagieren, flexibel auf ihre Ideen zu reagieren und in schwierigen Situationen f\xFCr sie da zu sein, mich mit KollegInnen offen auszutauschen, die Inhalte meiner F\xE4cher zu gestalten und zu vermitteln.",multiplier:.5}]},{name:"Sozialkompetenz",subcategories:[{name:"Beratungskompetenz",characteristic:"Ich verf\xFCge \xFCber Beratungskompetenz",description:"d.h. ich kann Sch\xFClerInnen und Eltern sowohl zum pers\xF6nlichen Lernfortschritt, zur weiteren Schullaufbahn als auch zu pers\xF6nlichen Problemen beraten, kenne verschiedene Prinzipien, Ans\xE4tze und Formen von Beratungsgespr\xE4chen und wei\xDF, wann ich die Zust\xE4ndigkeit an weitere Akteure weitergeben sollte.",multiplier:1},{name:"Gestaltung sozialer Beziehungen",characteristic:"Ich bin in der Lage soziale Beziehungen zu Sch\xFClerInnen, KollegInnen, Eltern und au\xDFerschulischen Akteuren gewinnbringend zu gestalten",description:"d.h. ich kann jederzeit f\xFCr die Sch\xFClerInnen als Zuh\xF6rer, Ratgeber oder Helfer bei Problemen da sein, konstruktive R\xFCckmeldungen an KollegInnen geben, mich an der Schulgemeinschaft beteiligen, Kontakte zu au\xDFerschulischen Akteuren herstellen, mit diesen kooperieren und bei Beratungen hinzuziehen und mit Eltern vertrauensvoll zusammenarbeiten.",multiplier:.75},{name:"Gestaltung von Kommunikation",characteristic:"Ich bin in der Lage adressatengerecht mit untergeordneten, gleichgestellten und \xFCbergeordneten Personen kommunizieren",description:"d.h. ich kann mit den Sch\xFClerInnen innerhalb und au\xDFerhalb des Unterrichts situationsgerecht kommunizieren, verschiedene Formen der Kommunikation (nonverbal, verbal, schriftlich, visuell) lernf\xF6rderlich und zur Sicherung von Teilhabe anwenden.",multiplier:.75},{name:"Konflikt- und Probleml\xF6sekompetenz",characteristic:"Ich verf\xFCge \xFCber Konflikt- und Probleml\xF6sekompetenz",description:"d.h. ich kann Problemsituationen souver\xE4n l\xF6sen, mit den Eltern L\xF6sungen f\xFCr Erziehungsprobleme oder misslingende Lernprozesse finden, Methoden der konstruktiven Konfliktpr\xE4vention, -bearbeitung und -l\xF6sung sowie des Umgangs mit Gewalt und Diskriminierung anwenden.",multiplier:.75},{name:"Feedback- und R\xFCckmeldekompetenz",characteristic:"Ich verf\xFCge \xFCber Feedback- und R\xFCckmeldekompetenz",description:"d.h. ich kann KollegInnen R\xFCckmeldungen zu ihrer Arbeit geben, R\xFCckmeldungen erhalten und reflektieren, den Sch\xFClerInnen individuelle und prozessbegleitende R\xFCckmeldungen zu Lernfortschritten, Leistungen sowie ihren pers\xF6nlichen St\xE4rken und Schw\xE4chen geben.",multiplier:.5}]}]}];function $f(s,e,t){const i=s.slice();return i[17]=e[t],i}function SS(s){let e,t,i,n,r,o,a,l,c,u,h,f,p,g,m,d,y,b;return e=new zn({props:{text:AS,scale:{x:s[6],y:s[6]},position:{y:3,z:1}}}),i=new zn({props:{text:"Wissenschaftler",scale:{x:s[6],y:s[6]},position:{x:3,y:2,z:1}}}),r=new zn({props:{text:`Fachkompetenz: ${Number(100*s[2].Wissenschaftler.Fachkompetenz/s[13].Wissenschaftler.Fachkompetenz).toFixed(1)}%`,scale:{x:s[6],y:s[6]},position:{x:3,y:1,z:1}}}),a=new zn({props:{text:`Humankompetenz: ${Number(100*s[2].Wissenschaftler.Humankompetenz/s[13].Wissenschaftler.Humankompetenz).toFixed(1)}%`,scale:{x:s[6],y:s[6]},position:{x:3,y:0,z:1}}}),c=new zn({props:{text:`Sozialkompetenz: ${Number(100*s[2].Wissenschaftler.Sozialkompetenz/s[13].Wissenschaftler.Sozialkompetenz).toFixed(1)}%`,scale:{x:s[6],y:s[6]},position:{x:3,y:-1,z:1}}}),h=new zn({props:{text:"Lehrkr\xE4fte",scale:{x:s[6],y:s[6]},position:{x:-3,y:2,z:1}}}),p=new zn({props:{text:`Fachkompetenz: ${Number(100*s[2].Lehrkr\u00E4fte.Fachkompetenz/s[13].Lehrkr\u00E4fte.Fachkompetenz).toFixed(1)}%`,scale:{x:s[6],y:s[6]},position:{x:-3,y:1,z:1}}}),m=new zn({props:{text:`Humankompetenz: ${Number(100*s[2].Lehrkr\u00E4fte.Humankompetenz/s[13].Lehrkr\u00E4fte.Humankompetenz).toFixed(1)}%`,scale:{x:s[6],y:s[6]},position:{x:-3,y:0,z:1}}}),y=new zn({props:{text:`Sozialkompetenz: ${Number(100*s[2].Lehrkr\u00E4fte.Sozialkompetenz/s[13].Lehrkr\u00E4fte.Sozialkompetenz).toFixed(1)}%`,scale:{x:s[6],y:s[6]},position:{x:-3,y:-1,z:1}}}),{c(){$e(e.$$.fragment),t=Jt(),$e(i.$$.fragment),n=Jt(),$e(r.$$.fragment),o=Jt(),$e(a.$$.fragment),l=Jt(),$e(c.$$.fragment),u=Jt(),$e(h.$$.fragment),f=Jt(),$e(p.$$.fragment),g=Jt(),$e(m.$$.fragment),d=Jt(),$e(y.$$.fragment)},l(x){et(e.$$.fragment,x),t=Qt(x),et(i.$$.fragment,x),n=Qt(x),et(r.$$.fragment,x),o=Qt(x),et(a.$$.fragment,x),l=Qt(x),et(c.$$.fragment,x),u=Qt(x),et(h.$$.fragment,x),f=Qt(x),et(p.$$.fragment,x),g=Qt(x),et(m.$$.fragment,x),d=Qt(x),et(y.$$.fragment,x)},m(x,_){tt(e,x,_),_t(x,t,_),tt(i,x,_),_t(x,n,_),tt(r,x,_),_t(x,o,_),tt(a,x,_),_t(x,l,_),tt(c,x,_),_t(x,u,_),tt(h,x,_),_t(x,f,_),tt(p,x,_),_t(x,g,_),tt(m,x,_),_t(x,d,_),tt(y,x,_),b=!0},p(x,_){const M={};_&64&&(M.scale={x:x[6],y:x[6]}),e.$set(M);const w={};_&64&&(w.scale={x:x[6],y:x[6]}),i.$set(w);const E={};_&4&&(E.text=`Fachkompetenz: ${Number(100*x[2].Wissenschaftler.Fachkompetenz/x[13].Wissenschaftler.Fachkompetenz).toFixed(1)}%`),_&64&&(E.scale={x:x[6],y:x[6]}),r.$set(E);const v={};_&4&&(v.text=`Humankompetenz: ${Number(100*x[2].Wissenschaftler.Humankompetenz/x[13].Wissenschaftler.Humankompetenz).toFixed(1)}%`),_&64&&(v.scale={x:x[6],y:x[6]}),a.$set(v);const S={};_&4&&(S.text=`Sozialkompetenz: ${Number(100*x[2].Wissenschaftler.Sozialkompetenz/x[13].Wissenschaftler.Sozialkompetenz).toFixed(1)}%`),_&64&&(S.scale={x:x[6],y:x[6]}),c.$set(S);const T={};_&64&&(T.scale={x:x[6],y:x[6]}),h.$set(T);const A={};_&4&&(A.text=`Fachkompetenz: ${Number(100*x[2].Lehrkr\u00E4fte.Fachkompetenz/x[13].Lehrkr\u00E4fte.Fachkompetenz).toFixed(1)}%`),_&64&&(A.scale={x:x[6],y:x[6]}),p.$set(A);const L={};_&4&&(L.text=`Humankompetenz: ${Number(100*x[2].Lehrkr\u00E4fte.Humankompetenz/x[13].Lehrkr\u00E4fte.Humankompetenz).toFixed(1)}%`),_&64&&(L.scale={x:x[6],y:x[6]}),m.$set(L);const F={};_&4&&(F.text=`Sozialkompetenz: ${Number(100*x[2].Lehrkr\u00E4fte.Sozialkompetenz/x[13].Lehrkr\u00E4fte.Sozialkompetenz).toFixed(1)}%`),_&64&&(F.scale={x:x[6],y:x[6]}),y.$set(F)},i(x){b||(Ue(e.$$.fragment,x),Ue(i.$$.fragment,x),Ue(r.$$.fragment,x),Ue(a.$$.fragment,x),Ue(c.$$.fragment,x),Ue(h.$$.fragment,x),Ue(p.$$.fragment,x),Ue(m.$$.fragment,x),Ue(y.$$.fragment,x),b=!0)},o(x){Oe(e.$$.fragment,x),Oe(i.$$.fragment,x),Oe(r.$$.fragment,x),Oe(a.$$.fragment,x),Oe(c.$$.fragment,x),Oe(h.$$.fragment,x),Oe(p.$$.fragment,x),Oe(m.$$.fragment,x),Oe(y.$$.fragment,x),b=!1},d(x){nt(e,x),x&&gt(t),nt(i,x),x&&gt(n),nt(r,x),x&&gt(o),nt(a,x),x&&gt(l),nt(c,x),x&&gt(u),nt(h,x),x&&gt(f),nt(p,x),x&&gt(g),nt(m,x),x&&gt(d),nt(y,x)}}}function MS(s){let e,t,i,n,r=[],o=new Map,a,l;e=new zn({props:{text:s[0],scale:{x:s[6],y:s[6]},position:{x:0,y:1,z:1}}}),i=new zn({props:{text:s[1],scale:{x:s[6]*.5,y:s[6]*.5},position:{x:0,y:0,z:1}}});let c=s[7];const u=h=>h[17].id;for(let h=0;h<c.length;h+=1){let f=$f(s,c,h),p=u(f);o.set(p,r[h]=ed(p,f))}return{c(){$e(e.$$.fragment),t=Jt(),$e(i.$$.fragment),n=Jt();for(let h=0;h<r.length;h+=1)r[h].c();a=Jr()},l(h){et(e.$$.fragment,h),t=Qt(h),et(i.$$.fragment,h),n=Qt(h);for(let f=0;f<r.length;f+=1)r[f].l(h);a=Jr()},m(h,f){tt(e,h,f),_t(h,t,f),tt(i,h,f),_t(h,n,f);for(let p=0;p<r.length;p+=1)r[p].m(h,f);_t(h,a,f),l=!0},p(h,f){const p={};f&1&&(p.text=h[0]),f&64&&(p.scale={x:h[6],y:h[6]}),e.$set(p);const g={};f&2&&(g.text=h[1]),f&64&&(g.scale={x:h[6]*.5,y:h[6]*.5}),i.$set(g),f&4288&&(c=h[7],Ac(),r=Np(r,f,u,1,h,c,o,a.parentNode,Gp,ed,a,$f),Cc())},i(h){if(!l){Ue(e.$$.fragment,h),Ue(i.$$.fragment,h);for(let f=0;f<c.length;f+=1)Ue(r[f]);l=!0}},o(h){Oe(e.$$.fragment,h),Oe(i.$$.fragment,h);for(let f=0;f<r.length;f+=1)Oe(r[f]);l=!1},d(h){nt(e,h),h&&gt(t),nt(i,h),h&&gt(n);for(let f=0;f<r.length;f+=1)r[f].d(h);h&&gt(a)}}}function ed(s,e){let t,i,n;const r=[e[17],{scale:{x:e[6],y:e[6]}}];let o={};for(let a=0;a<r.length;a+=1)o=Jl(o,r[a]);return i=new Ew({props:o}),i.$on("answerSelected",e[12]),{key:s,first:null,c(){t=Jr(),$e(i.$$.fragment),this.h()},l(a){t=Jr(),et(i.$$.fragment,a),this.h()},h(){this.first=t},m(a,l){_t(a,t,l),tt(i,a,l),n=!0},p(a,l){e=a;const c=l&192?kp(r,[l&128&&Bp(e[17]),l&64&&{scale:{x:e[6],y:e[6]}}]):{};i.$set(c)},i(a){n||(Ue(i.$$.fragment,a),n=!0)},o(a){Oe(i.$$.fragment,a),n=!1},d(a){a&&gt(t),nt(i,a)}}}function TS(s){let e,t,i,n,r,o,a,l;e=new $1({props:{position:{x:s[4],y:s[5],z:20},fov:24,near:.5}}),i=new mb({props:{geometry:new Na,material:wS,scale:100}});const c=[MS,SS],u=[];function h(f,p){return f[3].done?1:0}return r=h(s),o=u[r]=c[r](s),{c(){$e(e.$$.fragment),t=Jt(),$e(i.$$.fragment),n=Jt(),o.c(),a=Jr()},l(f){et(e.$$.fragment,f),t=Qt(f),et(i.$$.fragment,f),n=Qt(f),o.l(f),a=Jr()},m(f,p){tt(e,f,p),_t(f,t,p),tt(i,f,p),_t(f,n,p),u[r].m(f,p),_t(f,a,p),l=!0},p(f,p){const g={};p&48&&(g.position={x:f[4],y:f[5],z:20}),e.$set(g);let m=r;r=h(f),r===m?u[r].p(f,p):(Ac(),Oe(u[m],1,1,()=>{u[m]=null}),Cc(),o=u[r],o?o.p(f,p):(o=u[r]=c[r](f),o.c()),Ue(o,1),o.m(a.parentNode,a))},i(f){l||(Ue(e.$$.fragment,f),Ue(i.$$.fragment,f),Ue(o),l=!0)},o(f){Oe(e.$$.fragment,f),Oe(i.$$.fragment,f),Oe(o),l=!1},d(f){nt(e,f),f&&gt(t),nt(i,f),f&&gt(n),u[r].d(f),f&&gt(a)}}}function ES(s){let e,t,i,n,r;return t=new P1({props:{$$slots:{default:[TS]},$$scope:{ctx:s}}}),{c(){e=nd("div"),$e(t.$$.fragment),this.h()},l(o){e=id(o,"DIV",{class:!0});var a=rd(e);et(t.$$.fragment,a),a.forEach(gt),this.h()},h(){sd(e,"class","canvas-wrapper svelte-yc4mz4")},m(o,a){_t(o,e,a),tt(t,e,null),i=!0,n||(r=[pi(e,"mousemove",s[10]),pi(e,"click",s[10])],n=!0)},p(o,[a]){const l={};a&1048831&&(l.$$scope={dirty:a,ctx:o}),t.$set(l)},i(o){i||(Ue(t.$$.fragment,o),i=!0)},o(o){Oe(t.$$.fragment,o),i=!1},d(o){o&&gt(e),nt(t),n=!1,od(r)}}}const AS="Hier ist dein Ergebnis:",td=4;function CS(s,e,t){let i,n,r,o;Mt(s,gw,_=>t(7,o=_));const a=Gs(0,{duration:500,easing:Lu});Mt(s,a,_=>t(4,i=_));const l=Gs(0,{duration:500,easing:Lu});Mt(s,l,_=>t(5,n=_));function c(_){a.set(Bf(_.clientX/window.innerWidth,0,1,-5,5)),l.set(Bf(_.clientY/window.innerHeight,0,1,5,-5))}let u="Willkommen zu meinem Spiel :)",h="Dr\xFCcke auf eine Antwort, um zu starten.",f=Gs(td,{easing:Wp,delay:200});Mt(s,f,_=>t(6,r=_));let p={Lehrkr\u00E4fte:{},Wissenschaftler:{}};function*g(){for(let _ of Qf)for(let M of _.categories)for(let w of M.subcategories)yield{itemName:w.characteristic,itemDescripion:w.description,subcategoryName:w.name,categoryName:M.name,jobName:_.name,multiplier:w.multiplier}}const m=g();let d={itemName:"a",itemDescripion:"a",subcategoryName:"a",categoryName:"a",jobName:"a",multiplier:0};function y(_){p.hasOwnProperty(d.jobName)||t(2,p[d.jobName]={},p),p[d.jobName].hasOwnProperty(d.categoryName)||t(2,p[d.jobName][d.categoryName]=0,p),t(2,p[d.jobName][d.categoryName]+=_.detail.value*d.multiplier,p),t(3,d=m.next()),d.done||(t(3,d=d.value),f.set(0).then(()=>t(0,u=d.itemName)).then(()=>t(1,h=d.itemDescripion)).then(()=>f.set(td)))}function b(){let M={Lehrkr\u00E4fte:{},Wissenschaftler:{}};for(let w of Qf)for(let E of w.categories)for(let v of E.subcategories)M.hasOwnProperty(w.name)||(M[w.name]={}),M[w.name].hasOwnProperty(E.name)||(M[w.name][E.name]=0),M[w.name][E.name]+=5*v.multiplier;return M}const x=b();return[u,h,p,d,i,n,r,o,a,l,c,f,y,x]}class IS extends Vt{constructor(e){super(),Wt(this,e,CS,ES,jt,{})}}export{IS as default};
