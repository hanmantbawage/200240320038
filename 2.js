let c=1;
function logtable(){
    let m=document.querySelector("#mail").value;
    console.log(m);
    let n=document .querySelector("#name").value;
    let p=document.querySelector("#pass").value;
    

    if(m==="" || p==="" || n===""){
    alert("Something is missing... plzz check all the fields");
    document.querySelector("#mail").value="";
    document.querySelector("#name").value="";
    document.querySelector("#pass").value="";
}
    else{
        
        let cd=document.querySelector("#rlog").cloneNode(true);
        cd.textContent=c+")E-mail:   "+m+" ;NAME:"+n+" ;KEY :"+p;
        cd.style.color="red";
        
        let clonebox=document.querySelector("#log");
        clonebox.insertBefore(cd,clonebox.firstChild);

        document.querySelector("#mail").value="";
        document.querySelector("#name").value="";
        document.querySelector("#pass").value="";
        c++;

    }

}
