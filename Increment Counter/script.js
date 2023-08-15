const updatecounter = ()=>{
    const counter = document.querySelector('.counter');
    const target = +counter.getAttribute('data-target');
    const incr= target/100;
    const start = document.querySelector('#number');
    const startingNum = +start.innerHTML;
    if(startingNum<target){
        start.innerHTML = Math.round(startingNum+incr);
        setTimeout(updatecounter,10);
    }
    else{
        start.innerHTML=startingNum;
    }

}
updatecounter();