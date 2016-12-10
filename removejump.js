var script=document.createElement("script");
script.type="text/javascript";
script.innerHTML="var myPlatForm=function(){return \"unix\";};if (Object.defineProperty){Object.defineProperty(navigator, \"platform\", {get: myPlatForm});} else if(Object.prototype.__defineGetter__) {navigator.__defineGetter__(\"platform\", myPlatForm);}";
var html=document.getElementsByTagName("html");
html[0].appendChild(script);
