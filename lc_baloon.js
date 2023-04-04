let text ="krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"



let b=0;
let a=0;
let l=0;
let o=0;
let n=0;


for(let i of text){
    if(i == 'b'){
        b++;
    }
    else if(i == 'a'){
        a++;
    }
    else if(i =='l'){
        l++; 
    }
    else if(i == 'o'){
        o++;
    }
    else if(i == 'n'){
        n++;
    }
}
 console.log(b,a,l,o,n)
count = 0;
let i = 0;
while(true){
    b = b-1;
    console.log(b)
    a = a-1;
    console.log(a)
    l = l-2;
    console.log(l)
    o = o-2;
    console.log(o)
    n = n-1;
    console.log(n)
    if(b>=0 && a>=0 && l>=0 && o>=0 && n>=0){
       console.log("loop entered")
        count++
        i++
    } 
    else{
        break;
    }
}

 console.log(count)