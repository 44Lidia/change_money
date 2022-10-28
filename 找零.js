function change(){
    n = Number(document.form1.input_money.value);
    num=[100,50,20,10,5,1];
    i=0;
    count=0
    output_str="找零："
    if(n>0){
       for(i;i<num.length;i++){
           count=Math.floor(n/num[i])
           if(count!=0)
           {
              output_str+=num[i]+"元"+count+"张， ";
           }
           n=n%num[i]
       }
    }
    window.alert(output_str); 
}