"// Main JavaScript File" 
"document.addEventListener('DOMContentLoaded', function() {" 
"    const button = document.getElementById('clickMe');" 
"    const message = document.getElementById('message');" 
"    " 
"    button.addEventListener('click', function() {" 
"        message.textContent = 'Git is awesome! Learning with @DatBonnyMan';" 
"        message.style.color = '#27ae60';" 
"    });" 
"});" 
function toggleDarkMode() {  
    document.body.classList.toggle('dark-mode');  
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));  
}  
