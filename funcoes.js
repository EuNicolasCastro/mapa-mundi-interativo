    async function getData(place){
        
        const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=6ea5b4b8836b45d8bb1dc173ed180a55&location=b${place}` 
        const res= await fetch(url)
        
        data = await res.json()
        time = data.datetime
        document.getElementById("time").style.opacity = 1
        document.getElementById("time").innerText = `This is ${place}`
    }

    document.querySelectorAll('.allPaths').forEach(e=>{
        e.addEventListener("mouseover", function(){
            window.onmousemove=function(j){
                x=j.clientX
                y=j.clientY
                document.getElementById("name").style.top = y-30+"px"
                document.getElementById("name").style.left = x+10+"px"
            }
            e.style.fill="pink"
            document.getElementById("name").style.opacity=1
            document.getElementById("namep").innerText=e.id
            
        })
        
        e.addEventListener("mouseleave",function(){
            e.style.fill="#aaaaaa"
            document.getElementById("name").style.opacity=0
        })

        e.addEventListener("click", function(){
            getData(e.id)
        })
    })