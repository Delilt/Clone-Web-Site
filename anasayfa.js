function clk1func(){
    document.getElementById('scalecard1').style.zIndex=6;
    document.getElementById('scalecard1').style.opacity=1;   
    document.getElementById('scalecard2').style.zIndex=6;
    document.getElementById('scalecard2').style.opacity=1;   
    document.getElementById('scalecard3').style.zIndex=-1;
    document.getElementById('scalecard3').style.opacity=0;
    document.getElementById('scalecard4').style.zIndex=-1; 
    document.getElementById('scalecard4').style.opacity=0; 
}
function clk2func(){
    document.getElementById('scalecard1').style.zIndex=-1;
    document.getElementById('scalecard1').style.opacity=0;
    document.getElementById('scalecard2').style.zIndex=-1;
    document.getElementById('scalecard2').style.opacity=0; 
    document.getElementById('scalecard3').style.zIndex=5;
    document.getElementById('scalecard3').style.opacity=1; 
    document.getElementById('scalecard4').style.zIndex=5;    
    document.getElementById('scalecard4').style.opacity=1;   
}
