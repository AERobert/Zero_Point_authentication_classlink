if(location.href.includes('vbschools')){chrome.storage.local.get(['username','password'],(res)=>{document.getElementById('username').value=res.username;document.getElementById('password').value=res.password;});setInterval(()=>{document.getElementById('signin').click();},1000);}
else if(location.href.includes('twoformauth')){chrome.storage.local.get(['image'],(res)=>{setInterval(()=>{if(document.body.contains(document.querySelector('[alt*="'+res.image+'"]'))){document.querySelector('[alt*="'+res.image+'"]').click();}else{document.querySelector('[src*="question.png"]').click();};},10);});};