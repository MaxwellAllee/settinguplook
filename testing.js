let clicks=0
iconClick=()=>{
    clicks++
    if(clicks===4)
    {
        alert("login")
        clicks =0
    }
}