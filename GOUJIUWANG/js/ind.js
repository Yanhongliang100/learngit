function Banner(){
	var br=this;
	var t=0;
	this.banner=document.getElementsByClassName("banner0")[0].children;
	this.aa=br.banner[1].children;
	this._img=br.banner[0].children;
//	var a=300;
	var a=650;
	for(var i=0;i<br.aa.length;i++){		
		br.aa[i].style.right=a+"px";
		a+=27;
	}
	this._time=0;
	this._opacity=1;
	this._t=7;
	this._y=7;
	this._z=1;	
	this.play=function(){		
		window.clearTimeout(br._time);
		br._opacity-=0.03;				
		if(br._opacity>=0){
			br._img[br._t].style.opacity=br._opacity;
			br._time=window.setTimeout(br.play,1);				
		}
		if(br._opacity<=0){
			br._img[br._t].style.opacity=1;
			br._opacity=1;
			br._img[br._t].style.zIndex=br._z;
			br._t--;
			if(br._t<0){
				for(var i=0;i<8;i++){
					br._img[i].style.zIndex=2;
				}
			}
			if(br._t<0){
				br._t=7;
			}
			if(br._y<0){
				br._y=7;
			}			
			br._img[br._y--].style.opacity=1;		
			br._time=window.setInterval(br.play,3000);
			
			
		}
		this.dong=function(){
			for(var i=0;i<br.aa.length;i++){
				br.i=i;
				if(br._t==i){
					br.aa[br._t].style.background="#d1112c";
				}else{
					br.aa[i].style.background="#363535";
				}				
			}				
		}
		br.dong();
		br.banner[0].onmouseover=function(){
			clearTimeout(br._time);
		}
		br.banner[0].onmouseout=function(){
			br._time=window.setInterval(br.play,3000);
		}
	}
	for(var n=0;n<br.aa.length;n++){

		t=br.aa;
		t[n].index=n;
		br.aa[n].onmouseover=function(){
			if(this.index>br._t){
				for(var t=7;t>=0;t--){
					br._img[t].style.zIndex=2;
				}				
			}
			br._t=this.index;
			for(var p=7;p>br._t;p--){
				br._img[p].style.zIndex=1;
			}
			clearTimeout(br._time);
			for(var e=0;e<br.aa.length;e++){
				br.e=e;
				if(br.e==this.index){
					this.style.background="#d1112c";
				}else{
					br.aa[br.e].style.background="#363535";
					br.aa[7].style.background="#363535";
				}			
			}
		}
		br.aa[n].onmouseout=function(){
			br._time=window.setInterval(br.play,3000);
		}
	}
	
}

window.onload=function(){
	new Banner().play();
}
