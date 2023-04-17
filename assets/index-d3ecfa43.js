(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const g={zh:"./_locales/zh_CN/messages.json",en:"./_locales/en_US/messages.json"},h=[{name:"Lazy Baker",version:"1.2.0",uri:"./public/blenderAddons/BystedtsBlenderBaker_1_2_0_(2.93).zip",homepage:"https://blendermarket.com/products/lazy-baker"},{name:"Auto Eye",version:"0.3.2",uri:"./public/blenderAddons/auto_eye_v03_2_addon.zip",homepage:"https://blendermarket.com/products/auto-eye"}],f={locales:g,blender:h};window.config=f;const x=`.content{display:flex;padding:10px 20px}header{padding:5px 10px;height:30px;box-shadow:#11111a1a 0 1px}.disclaimer{position:fixed;bottom:0;width:100%;padding:10px;background-color:#000;color:#fff;text-indent:2em;display:flex;justify-content:center}
`,l=document.createElement("template");l.innerHTML=`
<style>${x}</style>
<header>
    <span class="language"></span>
    <select title="lang">
        <option value="zh">中文</option>
        <option value="en">English</option>
    </select>
</header>
<div class="content">
</div>
<footer>
    <span class="disclaimer"></span>
</footer>
`;const y=`.card{width:200px;border-radius:5px;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 2px 6px 2px;padding:15px 20px;margin:10px;display:flex;flex-direction:column;justify-content:center;align-items:center}a{display:flex;padding:10px 20px;margin:10px 0;color:#fff;text-decoration:none;justify-content:center;background-color:#1b9af7;border-radius:20px;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 2px 6px 2px}a:hover{background-color:#4cb0f9}
`,d=document.createElement("template");d.innerHTML=`
<style>${y}</style>
<div class="card">
    <h2 class="name"></h2>
    <p class="version"></p>
    <a class="uri"></a>
    <a class="homepage"></a>
</div>
`;let r=null;const u=async o=>{r=await new Promise((e,s)=>{fetch(o).then(t=>t.json()).then(t=>e(t))})},c={queue:[],on:function(o,e){this.queue.push({name:o,callback:e})},emit:function(o,e){this.queue.forEach(s=>{s.name===o&&s.callback(e)})}};class p extends HTMLElement{constructor(e){super(),e&&this.initialize(e)}initialize(e){const s=this.attachShadow({mode:"closed"}),t=d.content.cloneNode(!0),n={name:t.querySelector(".name"),version:t.querySelector(".version"),uri:t.querySelector(".uri"),homepage:t.querySelector(".homepage")};this.setText(n,e),s.appendChild(t),c.on("changlang",()=>{this.setText(n,e)})}setText(e,s){const{name:t,version:n,uri:a,homepage:i}=this.getParams(s);e.name.innerText=t,e.version.innerText=`${r.version.message}:${n}`,e.uri.setAttribute("href",a),e.uri.innerText=r.download.message,e.homepage.setAttribute("href",i),e.homepage.innerText=r.homepage.message}getParams(e){return e||{name:this.getAttribute("name"),version:this.getAttribute("version"),uri:this.getAttribute("uri"),homepage:this.getAttribute("homepage")}}}customElements.define("user-card",p);(function(){return document.createElement("user-card")})();class m extends HTMLElement{constructor(e){super();const s=this.attachShadow({mode:"closed"}),t=l.content.cloneNode(!0),n={disclaimer:t.querySelector(".disclaimer"),language:t.querySelector(".language")};this.initializeCard(t,e),this.addEventListener(t),this.setText(n),c.on("changlang",a=>{this.setText(n,a)}),s.appendChild(t)}initializeCard(e,s){s.forEach(t=>{const n=new p(t);e.querySelector("div").appendChild(n)})}setText(e){e.disclaimer.innerText=r.disclaimer.message,e.language.innerText=`${r.language.message}:`}addEventListener(e){e.querySelector("select").addEventListener("change",t=>{this.changeLanguage(t.target.value)})}async changeLanguage(e){await u(localesConfig[e]),c.emit("changlang")}}customElements.define("user-home",m);(async function(){const{locales:o,blender:e}=window.config;await u(o["zh"]),document.querySelector("#app").appendChild(new m(e))})();
