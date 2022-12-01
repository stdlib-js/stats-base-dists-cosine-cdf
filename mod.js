// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,a=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(a.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&u&&u.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function p(r){return r===y||r===v}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var b=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var A="function"==typeof Symbol?Symbol.toStringTag:"";var N=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return b.call(r);t=r[A],u=A,n=null!=(o=r)&&w.call(o,u);try{r[A]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[A]=t:delete r[A],e}:function(r){return b.call(r)},_="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null;var m,h="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var U=m,g="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null;var I,O="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S=I,E="function"==typeof Uint8Array;var F="function"==typeof Uint8Array?Uint8Array:null;var H,T="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),t=n,r=(E&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var G=H,P="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var V,W="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(P&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,M={uint16:V,uint8:G};(k=new M.uint16(1))[0]=4660;var x=52===new M.uint8(k.buffer)[0],Y=!0===x?1:0,C=new S(1),q=new U(C.buffer);function z(r){return C[0]=r,q[Y]}function B(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var D=-.16666666666666632;function J(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(D+o*t):r-(o*(.5*n-e*t)-n-e*D)}var K,Q,R=!0===x?0:1,X=new S(1),Z=new U(X.buffer);!0===x?(K=1,Q=0):(K=0,Q=1);var $={HIGH:K,LOW:Q},rr=new S(1),nr=new U(rr.buffer),tr=$.HIGH,er=$.LOW;function or(r,n){return nr[tr]=r,nr[er]=n,rr[0]}var ur,ar,ir=Math.floor;!0===x?(ur=1,ar=0):(ur=0,ar=1);var fr={HIGH:ur,LOW:ar},cr=new S(1),lr=new U(cr.buffer),yr=fr.HIGH,vr=fr.LOW;function pr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[vr],n}function sr(r){return pr(r,[0,0],1,0)}c(sr,"assign",pr);var br=[0,0];function wr(r,n){var t,e;return sr.assign(r,br,1,0),t=br[0],t&=2147483647,e=z(n),or(t|=e&=2147483648,br[1])}function Ar(r){return Math.abs(r)}function Nr(r,n,t,e){return l(r)||p(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ar(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var _r=[0,0],dr=[0,0];function mr(r,n){var t,e;return 0===n||0===r||l(r)||p(r)?r:(Nr(r,_r,1,0),n+=_r[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-1023|0}(r=_r[0]),n<-1074?wr(0,r):n>1023?r<0?v:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr.assign(r,dr,1,0),t=dr[0],t&=2148532223,e*or(t|=n+1023<<20,dr[1])))}function hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=5.960464477539063e-8,Ir=hr(20),Or=hr(20),Sr=hr(20),Er=hr(20);function Fr(r,n,t,e,o,u,a,i,f){var c,l,y,v,p,s,b,w,A;for(v=u,A=e[t],w=t,p=0;w>0;p++)l=jr*A|0,Er[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=mr(A,o),A-=8*ir(.125*A),A-=b=0|A,y=0,o>0?(b+=p=Er[t-1]>>24-o,Er[t-1]-=p<<24-o,y=Er[t-1]>>23-o):0===o?y=Er[t-1]>>23:A>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)w=Er[p],0===c?0!==w&&(c=1,Er[p]=16777216-w):Er[p]=16777215-w;if(o>0)switch(o){case 1:Er[t-1]&=8388607;break;case 2:Er[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=mr(1,o)))}if(0===A){for(w=0,p=t-1;p>=u;p--)w|=Er[p];if(0===w){for(s=1;0===Er[u-s];s++);for(p=t+1;p<=t+s;p++){for(f[i+p]=Ur[a+p],l=0,w=0;w<=i;w++)l+=r[w]*f[i+(p-w)];e[p]=l}return Fr(r,n,t+=s,e,o,u,a,i,f)}}if(0===A)for(t-=1,o-=24;0===Er[t];)t-=1,o-=24;else(A=mr(A,-o))>=16777216?(l=jr*A|0,Er[t]=A-16777216*l|0,o+=24,Er[t+=1]=l):Er[t]=0|A;for(l=mr(1,o),p=t;p>=0;p--)e[p]=l*Er[p],l*=jr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=gr[s]*e[p+s];Sr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Sr[p];for(n[0]=0===y?l:-l,l=Sr[0]-l,p=1;p<=t;p++)l+=Sr[p];return n[1]=0===y?l:-l,7&b}function Hr(r,n,t,e){var o,u,a,i,f,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(a=e-1),l=a+4,f=0;f<=l;f++)Ir[f]=c<0?0:Ur[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Ir[a+(f-c)];Or[f]=o}return 4,Fr(r,n,4,Or,i,4,u,a,Ir)}var Tr=Math.round;function Gr(r,n,t){var e,o,u,a,i;return u=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),a=6077100506506192e-26*e,i=n>>20|0,t[0]=u-a,i-(z(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),t[0]=u-a,i-(z(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),t[0]=u-a)),t[1]=u-t[0]-a,e}var Pr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=4*Lr,kr=[0,0,0],Mr=[0,0];function xr(r,n){var t,e,o,u,a,i,f;if((o=2147483647&z(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Gr(r,o,n):o<=1073928572?r>0?(f=r-Pr,n[0]=f-Lr,n[1]=f-n[0]-Lr,1):(f=r+Pr,n[0]=f+Lr,n[1]=f-n[0]+Lr,-1):r>0?(f=r-2*Pr,n[0]=f-Vr,n[1]=f-n[0]-Vr,2):(f=r+2*Pr,n[0]=f+Vr,n[1]=f-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Gr(r,o,n):r>0?(f=r-3*Pr,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Pr,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Gr(r,o,n):r>0?(f=r-4*Pr,n[0]=f-Wr,n[1]=f-n[0]-Wr,4):(f=r+4*Pr,n[0]=f+Wr,n[1]=f-n[0]+Wr,-4);if(o<1094263291)return Gr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return X[0]=r,Z[R]}(r),f=or(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)kr[a]=0|f,f=16777216*(f-kr[a]);for(kr[2]=f,u=3;0===kr[u-1];)u-=1;return i=Hr(kr,Mr,e,u),r<0?(n[0]=-Mr[0],n[1]=-Mr[1],-i):(n[0]=Mr[0],n[1]=Mr[1],i)}var Yr=[0,0];function Cr(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1044381696?1:B(r,0);if(n>=2146435072)return NaN;switch(3&xr(r,Yr)){case 0:return B(Yr[0],Yr[1]);case 1:return-J(Yr[0],Yr[1]);case 2:return-B(Yr[0],Yr[1]);default:return J(Yr[0],Yr[1])}}var qr=[0,0];function zr(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1045430272?r:J(r,0);if(n>=2146435072)return NaN;switch(3&xr(r,qr)){case 0:return J(qr[0],qr[1]);case 1:return B(qr[0],qr[1]);case 2:return-J(qr[0],qr[1]);default:return-B(qr[0],qr[1])}}var Br=3.141592653589793;function Dr(r){var n,t;return l(r)||p(r)?NaN:0===(n=Ar(t=r%2))||1===n?wr(0,t):n<.25?zr(Br*t):n<.75?wr(Cr(Br*(n=.5-n)),t):n<1.25?(t=wr(1,t)-t,zr(Br*t)):n<1.75?-wr(Cr(Br*(n-=1.5)),t):(t-=wr(2,t),zr(Br*t))}function Jr(r,n,t){var e;return l(r)||l(n)||l(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+Dr(e)/Br)/2}function Kr(r){return function(){return r}}function Qr(r){return l(r)?Kr(NaN):function(n){if(l(n))return NaN;return n<r?0:1}}function Rr(r,n){return l(r)||l(n)||n<0?Kr(NaN):0===n?Qr(r):function(t){var e;if(l(t))return NaN;if(t<r-n)return 0;if(t>r+n)return 1;return(1+(e=(t-r)/n)+Dr(e)/Br)/2}}c((function(r,n){return l(r)||l(n)?NaN:r<n?0:1}),"factory",Qr),c(Jr,"factory",Rr);export{Jr as default,Rr as factory};
//# sourceMappingURL=mod.js.map
