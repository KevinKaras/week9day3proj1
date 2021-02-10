// Write your JS here.
window.addEventListener("DOMContentLoaded", event =>{
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      //we need to put this function in something or call it in something
    let moles = document.getElementsByClassName("wgs__mole-head--hidden");
    //let randomTarget = getRandomInt(0, 8);
    //console.log(randomTarget)
    console.log(moles);
    
    function popUpRandomMole(moles){
        let randomTarget = getRandomInt(0, 8);
        // let poppingMole = moles.item(randomTarget);
        // console.log(poppingMole)
        // let head = poppingMole.getElementsByClassName('wgs__mole-head--hidden')
        // //call class.remove & class.add to remove
        // //console.log(head)
        // head = head.item(0);
        // console.log(head)
        const head = moles[randomTarget];
        head.classList.remove('wgs__mole-head--hidden')
        // head.classList.add('wgs__mole-head')
        setTimeout(()=>hideMole(head),1000);

    }
    function hideMole(head){
        // head.classList.remove('wgs__mole-head')
        head.classList.add('wgs__mole-head--hidden')
        setTimeout(()=>popUpRandomMole(moles), 1000);
    }


    setTimeout(()=>popUpRandomMole(moles), 0)
})