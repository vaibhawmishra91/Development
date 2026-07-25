const form=document.querySelector("form")

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        // predefault is use b/s as we submit data data is submited and invisible
        // to see the data we use this
        const Boy=document.getElementById("boy")
        const Girl=document.getElementById("girl")
        
        const l1=Boy.value.length
        const l2=Girl.value.length
        const result=Math.pow(l1+l2,3)%101

        document.querySelector('h2').textContent=`Result :${result}%`;
    
    })
