    const throttleFunction = (func, delay) => {
                let lastCall = 0;
            
                return (...args) => {
                    const now = Date.now();
                    if (now - lastCall >= delay) {
                        lastCall = now;
                        func(...args);
                    }
                };
            };
            
            document.querySelector("#center")
                .addEventListener("mousemove", throttleFunction((dets) => {
                    const div = document.createElement("div");
                    div.classList.add("imgdiv");
                    div.style.left = dets.clientX + "px";
                    div.style.top = dets.clientY + "px";
                const img = document.createElement("img");  
                   img.setAttribute("src"," https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
                    div.appendChild(img);
                   document.body.appendChild(div);
                   gsap.to(img, {
                    y:" 0",              
                    ease: "power1",
                    duration:.6       
                });
             
                gsap.to(img, {
                    y: "100%",               
                    ease: "power2",   
                    delay: 0.6,            
                           
                });
                    setTimeout(function(){
                    div.remove();
                    },1000)
                }, 300));
            