const container = document.querySelector(".container");
const boxes = container.children;
function getRandom(){
    let v1=Math.ceil(0+Math.random() *255);
    let v2=Math.ceil(0+Math.random() *255);
    let v3=Math.ceil(0+Math.random() *255);
    return `rgb(${v1},${v2},${v3})`
}
Array.from(boxes).forEach(box => {

    setInterval(()=>{
        
    
   
        box.style.backgroundColor = getRandom();
        box.style.color = getRandom();
    
},1000);
});



