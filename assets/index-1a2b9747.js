(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const h=`.content{display:flex;padding:10px 20px}header{padding:5px 10px;height:30px;box-shadow:#11111a1a 0 1px}.disclaimer{position:fixed;bottom:0;width:100%;padding:10px;background-color:#000;color:#fff;text-indent:2em;display:flex;justify-content:center}
`,l=document.createElement("template");l.innerHTML=`
<style>${h}</style>
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
`;const g=`.card{width:200px;border-radius:5px;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 2px 6px 2px;padding:15px 20px;margin:10px;display:flex;flex-direction:column;justify-content:center;align-items:center}a{display:flex;padding:10px 20px;margin:10px 0;color:#fff;text-decoration:none;justify-content:center;background-color:#1b9af7;border-radius:20px;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 2px 6px 2px}a:hover{background-color:#4cb0f9}
`,d=document.createElement("template");d.innerHTML=`
<style>${g}</style>
<div class="card">
    <h2 class="name"></h2>
    <p class="version"></p>
    <a class="uri"></a>
    <a class="homepage"></a>
</div>
`;let o=null;const u=async r=>{o=await new Promise((e,a)=>{fetch(r).then(n=>n.json()).then(n=>e(n))})},c={queue:[],on:function(r,e){this.queue.push({name:r,callback:e})},emit:function(r,e){this.queue.forEach(a=>{a.name===r&&a.callback(e)})}};class p extends HTMLElement{constructor(e){super(),e&&this.initialize(e)}initialize(e){const a=this.attachShadow({mode:"closed"}),n=d.content.cloneNode(!0),t={name:n.querySelector(".name"),version:n.querySelector(".version"),uri:n.querySelector(".uri"),homepage:n.querySelector(".homepage")};this.setText(t,e),a.appendChild(n),c.on("changlang",()=>{this.setText(t,e)})}setText(e,a){const{name:n,version:t,uri:s,homepage:i}=this.getParams(a);e.name.innerText=n,e.version.innerText=`${o.version.message}:${t}`,e.uri.setAttribute("href",s),e.uri.innerText=o.download.message,e.homepage.setAttribute("href",i),e.homepage.innerText=o.homepage.message}getParams(e){return e||{name:this.getAttribute("name"),version:this.getAttribute("version"),uri:this.getAttribute("uri"),homepage:this.getAttribute("homepage")}}}customElements.define("user-card",p);(function(){return document.createElement("user-card")})();class m extends HTMLElement{constructor(e){super();const a=this.attachShadow({mode:"closed"}),n=l.content.cloneNode(!0),t={disclaimer:n.querySelector(".disclaimer"),language:n.querySelector(".language")};this.initializeCard(n,e),this.addEventListener(n),this.setText(t),c.on("changlang",s=>{this.setText(t,s)}),a.appendChild(n)}initializeCard(e,a){a.forEach(n=>{const t=new p(n);e.querySelector("div").appendChild(t)})}setText(e){e.disclaimer.innerText=o.disclaimer.message,e.language.innerText=`${o.language.message}:`}addEventListener(e){e.querySelector("select").addEventListener("change",n=>{this.changeLanguage(n.target.value)})}async changeLanguage(e){await u(localesConfig[e]),c.emit("changlang")}}customElements.define("user-home",m);(async function(){const r="zh";await u(locales[r]),document.querySelector("#app").appendChild(new m(blender))})();
