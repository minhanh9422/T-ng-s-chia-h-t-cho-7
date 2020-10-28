let i=0
let tong=0
while (i<=30){
    if (i%7==0){
        document.write("Các số chia hết cho 7 là: "+ i+"<br>")
        tong=tong+i
    }
    i++
}
document.write("Tổng là: "+  tong)