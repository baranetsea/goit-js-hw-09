import{S as c}from"./assets/vendor-10cb7c31.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let s={email:"",message:""};const l=document.querySelector(".js-feedback-form"),p=()=>{const t=JSON.parse(localStorage.getItem("feedback-form-state"));if(t!==null){s=t;for(const a in t)l.elements[a].value=t[a]}};p();const m=t=>{const a=t.target.name,r=t.target.value.trim;s[a]=r,window.localStorage.setItem("feedback-form-state",JSON.stringify(s))},g=t=>{t.preventDefault(),s.email.length<=0||s.message.length<=0?alert("Fill please all fields"):console.log(s),t.target.reset(),window.localStorage.removeItem("feedback-form-state")};l.addEventListener("input",m);l.addEventListener("submit",g);const d=[{smallImage:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",largeImage:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",ImageDescription:"Hokkaido Flower"},{smallImage:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",largeImage:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",ImageDescription:"Container Haulage Freight"},{smallImage:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",largeImage:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",ImageDescription:"Aerial Beach View"},{smallImage:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",largeImage:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",ImageDescription:"Flower Blooms"},{smallImage:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",largeImage:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",ImageDescription:"Alpine Mountains"},{smallImage:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",largeImage:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",ImageDescription:"Mountain Lake Sailing"},{smallImage:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",largeImage:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",ImageDescription:"Alpine Spring Meadows"},{smallImage:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",largeImage:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",ImageDescription:"Nature Landscape"},{smallImage:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",largeImage:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",ImageDescription:"Lighthouse Coast Sea"}],h=document.querySelector(".gallery"),u=d.map(({smallImage:t,largeImage:a,ImageDescription:r})=>`   <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src='${t}'
            data-source="${a}"
            alt='${r}'
          />
        </a>
      </li>`).join("");h.insertAdjacentHTML("beforeend",u);new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8});
//# sourceMappingURL=commonHelpers.js.map
