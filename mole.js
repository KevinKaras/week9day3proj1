// Write your JS here.
window.addEventListener("DOMContentLoaded", event =>{


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      
    let moles = document.getElementsByClassName("wgs__mole-head--hidden");
    
    // console.log(moles);
    
    function popUpRandomMole(){
        let randomTarget = getRandomInt(0, 8);
        let moles = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");

        // while(moles[randomTarget])
        
        
        
        const head = moles[randomTarget];
        
        
        head.classList.remove('wgs__mole-head--hidden')
        
        head.addEventListener("click", event =>{

            head.classList.add("wgs__mole-head--whacked")
            hideMole(head)
        })
        setTimeout(()=>hideMole(head), 3000);

    }
    function hideMole(head){
        
        head.classList.add('wgs__mole-head--hidden')
        setTimeout(()=>popUpRandomMole(moles), 1000);
    }


    setTimeout(()=>popUpRandomMole(moles), 0)
})