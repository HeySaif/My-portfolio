// Theme toggle and a simple contact form handler
(function(){
const switchEl = document.getElementById('themeSwitch');
const body = document.body;
// restore theme
const saved = localStorage.getItem('theme');
if(saved === 'light') body.classList.add('light-mode');
if(switchEl) switchEl.checked = saved === 'light';
if(switchEl){
switchEl.addEventListener('change', ()=>{
if(switchEl.checked){
body.classList.add('light-mode');
localStorage.setItem('theme','light');
} else {
body.classList.remove('light-mode');
localStorage.setItem('theme','dark');
}
});
}


window.handleContact = function handleContact(e){
e.preventDefault();
const status = document.getElementById('formStatus');
status.textContent = 'Thanks — message will be sent (demo).';
// For real email sending, integrate an API like Formspree / EmailJS or a simple server endpoint.
setTimeout(()=>{status.textContent='Message ready — (demo only)';},1200);
return false;
}
})();