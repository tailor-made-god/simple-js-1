changeColor(){
    let red = Math.random * 256;
    let green = Math.random * 256;
    let blue = Math.random * 256;
    document.getElementsByTagName("body").style.backgroundColor = "rgb("+ red +", "+ green +", "+ blue +")";
}