let saveEl = document.getElementById("saveEl");
countEl=document.getElementById("countEl");
let count =0;

function increment(){
    count += 1;
    countEl.innerText = + count;
}

function save(){
    let countStr = count + ",  "
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;

}
