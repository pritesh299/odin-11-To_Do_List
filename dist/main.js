(()=>{let e=document.getElementById("nav_btn"),t=document.getElementById("sidebar"),d=document.getElementById("dashboard_container"),n=document.getElementById("expand"),s=document.getElementById("Projects_expand_btn"),a=document.getElementById("project_list"),l=document.getElementById("add_project_btn"),c=document.getElementById("add_prjt_pop_up"),i=document.getElementById("add_task_btn"),m=document.getElementById("add_task_pop_up"),o=document.getElementById("dark_background"),y=0,p=0;e.addEventListener("click",(()=>{y%2==0?(t.classList.add("active"),d.classList.remove("active")):(t.classList.remove("active"),d.classList.add("active")),y++})),s.addEventListener("click",expandList=()=>{p%2==0?(a.classList.add("active"),n.innerText="expand_less"):(a.classList.remove("active"),n.innerText="expand_more"),p++}),l.addEventListener("click",(()=>{o.style.display="flex",c.style.display="flex"})),i.addEventListener("click",(()=>{o.style.display="flex",m.style.display="flex"})),o.addEventListener("click",(()=>{o.style.display="none",m.style.display="none",c.style.display="none"}))})();