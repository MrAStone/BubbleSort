let data = [];
for (i=1;i<1000;i++){
    data.push(Math.floor(Math.random()*100000)+1000);
}

swaps = true;
n = data.length;
while(swaps){
    swaps = false;
    for(i=1;i<data.length;i++){
        if (data[i-1]>data[i]){
            temp = data[i-1]
            data[i-1]=data[i]
            data[i] = temp
            swaps = true
        }
    }
}
for(i=0;i<10;i++){
    
}
numList = "";
for(i=0;i<10;i++){
    numList +=  data[i] + "\n"
}

document.body.innerHTML = "<p1> " + numList +"</p1>"
