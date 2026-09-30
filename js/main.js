const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const items=document.querySelectorAll(".card,.timeline-grid article,.spotlight-image,.story-image");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});
items.forEach((x,i)=>{x.style.transitionDelay=(i%4)*70+"ms";io.observe(x)});
