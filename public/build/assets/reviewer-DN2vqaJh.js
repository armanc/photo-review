import{G as V,u as Z,l as B,E as Q,c as _,a as tt,e as et,g as it,S as O,b as y,m as st,d as rt,f as nt,h as ot,i as T,j as X,k as at,n as lt,o as ht,p as Y,q as dt,r as ut,s as ct,t as ft,v as gt,w as yt,x as b,y as mt,P as w,z as pt,A as Ct,B as _t,C as Pt,D as wt,F as A,H as Ft,I as Gt,J as Mt,K as D,L as St,M as F,N as Ot,O as J,Q as c,R as Et,T as jt,U,V as E,W as u,X as vt,Y as At,Z as Rt,_ as p,$ as g,a0 as W,a1 as bt,a2 as K,a3 as xt,a4 as k,a5 as N,a6 as Lt,a7 as It,a8 as kt,a9 as Nt,aa as Tt,ab as Xt,ac as Yt}from"./displayImageWithScale-CG-S_KVf.js";const Dt=new Date,q=document.querySelector("form"),Jt=q.querySelector("[name=reviewing_duration_ms]");q.addEventListener("submit",()=>Jt.value=new Date-Dt);function Ut(n,t,e){const i=document.querySelector(n);i.querySelectorAll(".js-close").forEach(s=>s.addEventListener("click",r=>i.close())),document.querySelectorAll(t).forEach(s=>s.addEventListener("click",r=>i.showModal())),e&&i.showModal()}class G extends V{constructor(t){super(),this.geometries_=t,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(Z),this.changeEventsKeys_.length=0}listenGeometriesChange_(){const t=this.geometries_;for(let e=0,i=t.length;e<i;++e)this.changeEventsKeys_.push(B(t[e],Q.CHANGE,this.changed,this))}clone(){const t=new G(v(this.geometries_));return t.applyProperties(this),t}closestPointXY(t,e,i,s){if(s<_(this.getExtent(),t,e))return s;const r=this.geometries_;for(let o=0,a=r.length;o<a;++o)s=r[o].closestPointXY(t,e,i,s);return s}containsXY(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)if(i[s].containsXY(t,e))return!0;return!1}computeExtent(t){tt(t);const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)et(t,e[i].getExtent());return t}getGeometries(){return v(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let t=[];const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)e[i].getType()===this.getType()?t=t.concat(e[i].getGeometriesArrayRecursive()):t.push(e[i]);return t}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const e=[],i=this.geometries_;let s=!1;for(let r=0,o=i.length;r<o;++r){const a=i[r],l=a.getSimplifiedGeometry(t);e.push(l),l!==a&&(s=!0)}return s?new G(e):(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getType(){return"GeometryCollection"}intersectsExtent(t){const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)if(e[i].intersectsExtent(t))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].rotate(t,e);this.changed()}scale(t,e,i){i||(i=it(this.getExtent()));const s=this.geometries_;for(let r=0,o=s.length;r<o;++r)s[r].scale(t,e,i);this.changed()}setGeometries(t){this.setGeometriesArray(v(t))}setGeometriesArray(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()}applyTransform(t){const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)e[i].applyTransform(t);this.changed()}translate(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].translate(t,e);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function v(n){return n.map(t=>t.clone())}class m extends O{constructor(t,e){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,e!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendCoordinate(t){y(this.flatCoordinates,t),this.changed()}clone(){const t=new m(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<_(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(st(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),rt(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,i,s))}forEachSegment(t){return nt(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,e){return this.layout!="XYM"&&this.layout!="XYZM"?null:(e=e!==void 0?e:!1,ot(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e))}getCoordinates(){return T(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,e){return X(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,this.stride)}getLength(){return at(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const e=[];return e.length=lt(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new m(e,"XY")}getType(){return"LineString"}intersectsExtent(t){return ht(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Y(this.flatCoordinates,0,t,this.stride),this.changed()}}class M extends O{constructor(t,e,i){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(t[0]))this.setCoordinates(t,e);else if(e!==void 0&&i)this.setFlatCoordinates(e,t),this.ends_=i;else{const s=t,r=[],o=[];for(let l=0,h=s.length;l<h;++l){const d=s[l];y(r,d.getFlatCoordinates()),o.push(r.length)}const a=s.length===0?this.getLayout():s[0].getLayout();this.setFlatCoordinates(a,r),this.ends_=o}}appendLineString(t){y(this.flatCoordinates,t.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new M(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<_(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(dt(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),ut(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,i,s))}getCoordinateAtM(t,e,i){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(e=e!==void 0?e:!1,i=i!==void 0?i:!1,ct(this.flatCoordinates,0,this.ends_,this.stride,t,e,i))}getCoordinates(){return ft(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(t){return t<0||this.ends_.length<=t?null:new m(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLineStrings(){const t=this.flatCoordinates,e=this.ends_,i=this.layout,s=[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=e[o],h=new m(t.slice(r,l),i);s.push(h),r=l}return s}getFlatMidpoints(){const t=[],e=this.flatCoordinates;let i=0;const s=this.ends_,r=this.stride;for(let o=0,a=s.length;o<a;++o){const l=s[o],h=X(e,i,l,r,.5);y(t,h),i=l}return t}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=gt(this.flatCoordinates,0,this.ends_,this.stride,t,e,0,i),new M(e,"XY",i)}getType(){return"MultiLineString"}intersectsExtent(t){return yt(this.flatCoordinates,0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const i=b(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}}class j extends O{constructor(t,e){super(),e&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendPoint(t){y(this.flatCoordinates,t.getFlatCoordinates()),this.changed()}clone(){const t=new j(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){if(s<_(this.getExtent(),t,e))return s;const r=this.flatCoordinates,o=this.stride;for(let a=0,l=r.length;a<l;a+=o){const h=mt(t,e,r[a],r[a+1]);if(h<s){s=h;for(let d=0;d<o;++d)i[d]=r[a+d];i.length=o}}return s}getCoordinates(){return T(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){const e=this.flatCoordinates.length/this.stride;return t<0||e<=t?null:new w(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){const t=this.flatCoordinates,e=this.layout,i=this.stride,s=[];for(let r=0,o=t.length;r<o;r+=i){const a=new w(t.slice(r,r+i),e);s.push(a)}return s}getType(){return"MultiPoint"}intersectsExtent(t){const e=this.flatCoordinates,i=this.stride;for(let s=0,r=e.length;s<r;s+=i){const o=e[s],a=e[s+1];if(pt(t,o,a))return!0}return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Y(this.flatCoordinates,0,t,this.stride),this.changed()}}class S extends O{constructor(t,e,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(t[0])){const s=t,r=[],o=[];for(let a=0,l=s.length;a<l;++a){const h=s[a],d=r.length,f=h.getEnds();for(let C=0,H=f.length;C<H;++C)f[C]+=d;y(r,h.getFlatCoordinates()),o.push(f)}e=s.length===0?this.getLayout():s[0].getLayout(),t=r,i=o}e!==void 0&&i?(this.setFlatCoordinates(e,t),this.endss_=i):this.setCoordinates(t,e)}appendPolygon(t){let e;if(!this.flatCoordinates)this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();else{const i=this.flatCoordinates.length;y(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let s=0,r=e.length;s<r;++s)e[s]+=i}this.endss_.push(e),this.changed()}clone(){const t=this.endss_.length,e=new Array(t);for(let s=0;s<t;++s)e[s]=this.endss_[s].slice();const i=new S(this.flatCoordinates.slice(),this.layout,e);return i.applyProperties(this),i}closestPointXY(t,e,i,s){return s<_(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ct(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),_t(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,s))}containsXY(t,e){return Pt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return wt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return t!==void 0?(e=this.getOrientedFlatCoordinates().slice(),A(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,Ft(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=Gt(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=Mt(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new j(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;D(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=A(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=St(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,i),new S(e,"XY",i)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let e;if(t===0)e=0;else{const r=this.endss_[t-1];e=r[r.length-1]}const i=this.endss_[t].slice(),s=i[i.length-1];if(e!==0)for(let r=0,o=i.length;r<o;++r)i[r]-=e;return new F(this.flatCoordinates.slice(e,s),this.layout,i)}getPolygons(){const t=this.layout,e=this.flatCoordinates,i=this.endss_,s=[];let r=0;for(let o=0,a=i.length;o<a;++o){const l=i[o].slice(),h=l[l.length-1];if(r!==0)for(let f=0,C=l.length;f<C;++f)l[f]-=r;const d=new F(e.slice(r,h),t,l);s.push(d),r=h}return s}getType(){return"MultiPolygon"}intersectsExtent(t){return Ot(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const i=J(this.flatCoordinates,0,t,this.stride,this.endss_);if(i.length===0)this.flatCoordinates.length=0;else{const s=i[i.length-1];this.flatCoordinates.length=s.length===0?0:s[s.length-1]}this.changed()}}class Wt{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=E,this.supportedMediaTypes=null}getReadOptions(t,e){if(e){let i=e.dataProjection?c(e.dataProjection):this.readProjection(t);e.extent&&i&&i.getUnits()==="tile-pixels"&&(i=c(i),i.setWorldExtent(e.extent)),e={dataProjection:i,featureProjection:e.featureProjection}}return this.adaptOptions(e)}adaptOptions(t){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},t)}getType(){return u()}readFeature(t,e){return u()}readFeatures(t,e){return u()}readGeometry(t,e){return u()}readProjection(t){return u()}writeFeature(t,e){return u()}writeFeatures(t,e){return u()}writeGeometry(t,e){return u()}}function x(n,t,e){const i=e?c(e.featureProjection):null,s=e?c(e.dataProjection):null;let r=n;if(i&&s&&!Et(i,s)){t&&(r=n.clone());const o=t?i:s,a=t?s:i;o.getUnits()==="tile-pixels"?r.transform(o,a):r.applyTransform(jt(o,a))}if(t&&e&&e.decimals!==void 0){const o=Math.pow(10,e.decimals),a=function(l){for(let h=0,d=l.length;h<d;++h)l[h]=Math.round(l[h]*o)/o;return l};r===n&&(r=n.clone()),r.applyTransform(a)}return r}const Kt={Point:w,LineString:m,Polygon:F,MultiPoint:j,MultiLineString:M,MultiPolygon:S};function qt(n,t,e){return Array.isArray(t[0])?(D(n,0,t,e)||(n=n.slice(),A(n,0,t,e)),n):(vt(n,0,t,e)||(n=n.slice(),At(n,0,t,e)),n)}function $(n,t){var r;const e=n.geometry;if(!e)return[];if(Array.isArray(e))return e.map(o=>$({...n,geometry:o})).flat();const i=e.type==="MultiPolygon"?"Polygon":e.type;if(i==="GeometryCollection"||i==="Circle")throw new Error("Unsupported geometry type: "+i);const s=e.layout.length;return x(new U(i,i==="Polygon"?qt(e.flatCoordinates,e.ends,s):e.flatCoordinates,(r=e.ends)==null?void 0:r.flat(),s,n.properties||{},n.id).enableSimplifyTransformed(),!1,t)}function L(n,t){if(!n)return null;if(Array.isArray(n)){const i=n.map(s=>L(s,t));return new G(i)}const e=Kt[n.type];return x(new e(n.flatCoordinates,n.layout,n.ends),!1,t)}class $t extends Wt{constructor(){super()}getType(){return"json"}readFeature(t,e){return this.readFeatureFromObject(P(t),this.getReadOptions(t,e))}readFeatures(t,e){return this.readFeaturesFromObject(P(t),this.getReadOptions(t,e))}readFeatureFromObject(t,e){return u()}readFeaturesFromObject(t,e){return u()}readGeometry(t,e){return this.readGeometryFromObject(P(t),this.getReadOptions(t,e))}readGeometryFromObject(t,e){return u()}readProjection(t){return this.readProjectionFromObject(P(t))}readProjectionFromObject(t){return u()}writeFeature(t,e){return JSON.stringify(this.writeFeatureObject(t,e))}writeFeatureObject(t,e){return u()}writeFeatures(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))}writeFeaturesObject(t,e){return u()}writeGeometry(t,e){return JSON.stringify(this.writeGeometryObject(t,e))}writeGeometryObject(t,e){return u()}}function P(n){if(typeof n=="string"){const t=JSON.parse(n);return t||null}return n!==null?n:null}class zt extends $t{constructor(t){t=t||{},super(),this.dataProjection=c(t.dataProjection?t.dataProjection:"EPSG:4326"),t.featureProjection&&(this.defaultFeatureProjection=c(t.featureProjection)),t.featureClass&&(this.featureClass=t.featureClass),this.geometryName_=t.geometryName,this.extractGeometryName_=t.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(t,e){let i=null;t.type==="Feature"?i=t:i={type:"Feature",geometry:t,properties:null};const s=I(i.geometry);if(this.featureClass===U)return $({geometry:s,id:i.id,properties:i.properties},e);const r=new E;return this.geometryName_?r.setGeometryName(this.geometryName_):this.extractGeometryName_&&i.geometry_name&&r.setGeometryName(i.geometry_name),r.setGeometry(L(s,e)),"id"in i&&r.setId(i.id),i.properties&&r.setProperties(i.properties,!0),r}readFeaturesFromObject(t,e){const i=t;let s=null;if(i.type==="FeatureCollection"){const r=t;s=[];const o=r.features;for(let a=0,l=o.length;a<l;++a){const h=this.readFeatureFromObject(o[a],e);h&&s.push(h)}}else s=[this.readFeatureFromObject(t,e)];return s.flat()}readGeometryFromObject(t,e){return Ht(t,e)}readProjectionFromObject(t){const e=t.crs;let i;if(e)if(e.type=="name")i=c(e.properties.name);else if(e.type==="EPSG")i=c("EPSG:"+e.properties.code);else throw new Error("Unknown SRS type");else i=this.dataProjection;return i}writeFeatureObject(t,e){e=this.adaptOptions(e);const i={type:"Feature",geometry:null,properties:null},s=t.getId();if(s!==void 0&&(i.id=s),!t.hasProperties())return i;const r=t.getProperties(),o=t.getGeometry();return o&&(i.geometry=R(o,e),delete r[t.getGeometryName()]),Rt(r)||(i.properties=r),i}writeFeaturesObject(t,e){e=this.adaptOptions(e);const i=[];for(let s=0,r=t.length;s<r;++s)i.push(this.writeFeatureObject(t[s],e));return{type:"FeatureCollection",features:i}}writeGeometryObject(t,e){return R(t,this.adaptOptions(e))}}function I(n,t){if(!n)return null;let e;switch(n.type){case"Point":{e=Zt(n);break}case"LineString":{e=Bt(n);break}case"Polygon":{e=ie(n);break}case"MultiPoint":{e=te(n);break}case"MultiLineString":{e=Qt(n);break}case"MultiPolygon":{e=ee(n);break}case"GeometryCollection":{e=Vt(n);break}default:throw new Error("Unsupported GeoJSON type: "+n.type)}return e}function Ht(n,t){const e=I(n);return L(e,t)}function Vt(n,t){return n.geometries.map(function(i){return I(i)})}function Zt(n){const t=n.coordinates;return{type:"Point",flatCoordinates:t,layout:p(t.length)}}function Bt(n){var i;const t=n.coordinates,e=t.flat();return{type:"LineString",flatCoordinates:e,ends:[e.length],layout:p(((i=t[0])==null?void 0:i.length)||2)}}function Qt(n){var r,o;const t=n.coordinates,e=((o=(r=t[0])==null?void 0:r[0])==null?void 0:o.length)||2,i=[],s=b(i,0,t,e);return{type:"MultiLineString",flatCoordinates:i,ends:s,layout:p(e)}}function te(n){var e;const t=n.coordinates;return{type:"MultiPoint",flatCoordinates:t.flat(),layout:p(((e=t[0])==null?void 0:e.length)||2)}}function ee(n){var r,o;const t=n.coordinates,e=[],i=((o=(r=t[0])==null?void 0:r[0])==null?void 0:o[0].length)||2,s=J(e,0,t,i);return{type:"MultiPolygon",flatCoordinates:e,ends:s,layout:p(i)}}function ie(n){var r,o;const t=n.coordinates,e=[],i=(o=(r=t[0])==null?void 0:r[0])==null?void 0:o.length,s=b(e,0,t,i);return{type:"Polygon",flatCoordinates:e,ends:s,layout:p(i)}}function R(n,t){n=x(n,!0,t);const e=n.getType();let i;switch(e){case"Point":{i=le(n);break}case"LineString":{i=re(n);break}case"Polygon":{i=he(n,t);break}case"MultiPoint":{i=oe(n);break}case"MultiLineString":{i=ne(n);break}case"MultiPolygon":{i=ae(n,t);break}case"GeometryCollection":{i=se(n,t);break}case"Circle":{i={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+e)}return i}function se(n,t){return t=Object.assign({},t),delete t.featureProjection,{type:"GeometryCollection",geometries:n.getGeometriesArray().map(function(i){return R(i,t)})}}function re(n,t){return{type:"LineString",coordinates:n.getCoordinates()}}function ne(n,t){return{type:"MultiLineString",coordinates:n.getCoordinates()}}function oe(n,t){return{type:"MultiPoint",coordinates:n.getCoordinates()}}function ae(n,t){let e;return t&&(e=t.rightHanded),{type:"MultiPolygon",coordinates:n.getCoordinates(e)}}function le(n,t){return{type:"Point",coordinates:n.getCoordinates()}}function he(n,t){let e;return t&&(e=t.rightHanded),{type:"Polygon",coordinates:n.getCoordinates(e)}}function de(n,t,e,i){const s=[t.lon,t.lat],r=new E({geometry:new w(g(s))});return r.setStyle(new W({image:new bt({radius:5,fill:new K({color:"#b833ff"})})})),z(n,r,s,e,i)}function ue(n,t,e,i){const s={north:parseFloat(t.north),east:parseFloat(t.east),south:parseFloat(t.south),west:parseFloat(t.west)},r=new E({geometry:new F([[g([s.west,s.north]),g([s.east,s.north]),g([s.east,s.south]),g([s.west,s.south]),g([s.west,s.north])]])});r.setStyle(new W({stroke:new xt({color:"#b833ff",width:2}),fill:new K({color:"#b833ff22"})}));const o=[(s.east+s.west)/2,(s.north+s.south)/2];return z(n,r,o,e,i)}function z(n,t,e,i,s){const r=new k({source:new N({format:new zt,url:i})}),o=new Lt({target:n,layers:[new It({source:new kt({attributions:["Powered by Esri","Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"],url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})}),r,new k({source:new N({features:[t]})})],view:new Nt({center:g(e),zoom:14})});return o.on("click",function(a){const l=o.getEventPixel(a.originalEvent),h=[];o.forEachFeatureAtPixel(l,d=>{h.push({path:d.get("path"),url:d.get("url")})}),s(h)}),o.on("pointermove",function(a){if(a.dragging)return;o.getTargetElement().style.cursor="";const l=o.getEventPixel(a.originalEvent);o.forEachFeatureAtPixel(l,h=>{if(h.get("path")&&h.get("url"))return o.getTargetElement().style.cursor="pointer",!0})}),o}const ce={pin:de,box:ue};window.bootInfobox=Ut;window.makeMapWith=ce;window.displayImage=Tt;window.displayImageOnMap=Xt;window.displayImageWithScale=Yt;