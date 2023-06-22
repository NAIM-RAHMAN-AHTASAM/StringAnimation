let header = "I Love javaScript";
let headerStart= 0;
let headerclass= document.querySelector(".heading")
// console.log(header.charAt(headerStart));

function headingjs(){
  headerclass.innerHTML += header.charAt(headerStart)
  if(headerStart==header.length){
    headerStart= -1;
    headerclass.innerHTML ="";

    // clearInterval(stop)
  }

}


let stop = setInterval(()=>{
  headingjs()
  headerStart++
},100)