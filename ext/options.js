function saveOptions(){chrome.storage.local.set({'username': document.getElementById('username').value, password: document.getElementById('password').value, image:document.getElementById('images').value});};
function restoreOptions(){chrome.storage.local.get(['username','password','image'],(res)=>{document.getElementById('username').value=res.username,document.getElementById('password').value=res.password;document.getElementById('images').value=res.image;});};
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener("click",saveOptions);