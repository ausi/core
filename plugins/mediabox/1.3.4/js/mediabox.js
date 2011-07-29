/* mediaboxAdvanced v1.3.4b, updated 2010.09.21, (c) 2007-2010 John Einselen <http://iaian7.com>, based on Slimbox v1.64, (c) 2007-2008 Christophe Beyls <http://www.digitalia.be>, customized for Contao Open Source CMS */
var Mediabox;(function(){var B,h,Q,I,P,o,G,l,n,k,K,z,u,A=new Image(),W=new Image(),s=false,x=false,T,b,j,c,V,F,N,U,X,e,E,R,H,y,C,p,i="none",f,d="mediaBox",D,m;window.addEvent("domready",function(){document.id(document.body).adopt($$([T=new Element("div",{id:"mbOverlay"}).addEvent("click",O),b=new Element("div",{id:"mbCenter"})]).setStyle("display","none"));j=new Element("div",{id:"mbImage"}).injectInside(b);
c=new Element("div",{id:"mbBottom"}).injectInside(b).adopt(closeLink=new Element("a",{id:"mbCloseLink",href:"#"}).addEvent("click",O),e=new Element("a",{id:"mbNextLink",href:"#"}).addEvent("click",g),U=new Element("a",{id:"mbPrevLink",href:"#"}).addEvent("click",L),F=new Element("div",{id:"mbTitle"}),X=new Element("div",{id:"mbNumber"}),N=new Element("div",{id:"mbCaption"}));z={overlay:new Fx.Tween(T,{property:"opacity",duration:360}).set(0),image:new Fx.Tween(j,{property:"opacity",duration:360,onComplete:J}),bottom:new Fx.Tween(c,{property:"opacity",duration:240}).set(0)}
});Mediabox={close:function(){O()},open:function(aa,Z,Y){B=$extend({text:["<big>&laquo;</big>","<big>&raquo;</big>","<big>&times;</big>"],loop:false,keyboard:true,alpha:true,stopKey:false,overlayOpacity:0.7,resizeOpening:true,resizeDuration:240,resizeTransition:false,initialWidth:320,initialHeight:180,defaultWidth:640,defaultHeight:360,showCaption:true,showCounter:true,counterText:"({x} of {y})",imgBackground:false,imgPadding:100,html5:"true",scriptaccess:"true",fullscreen:"true",fullscreenNum:"1",autoplay:"true",autoplayNum:"1",autoplayYes:"yes",volume:"100",medialoop:"true",bgcolor:"#000000",wmode:"opaque",useNB:true,playerpath:"plugins/mediabox/1.3.4/NonverBlaster.swf",controlColor:"0xFFFFFF",controlBackColor:"0x000000",showTimecode:"false",JWplayerpath:"plugins/mediabox/1.3.4/player.swf",backcolor:"000000",frontcolor:"999999",lightcolor:"000000",screencolor:"000000",controlbar:"over",controller:"true",flInfo:"true",revverID:"187866",revverFullscreen:"true",revverBack:"000000",revverFront:"ffffff",revverGrad:"000000",usViewers:"true",ytBorder:"0",ytColor1:"000000",ytColor2:"333333",ytQuality:"&ap=%2526fmt%3D18",ytRel:"0",ytInfo:"1",ytSearch:"0",vuPlayer:"basic",vmTitle:"1",vmByline:"1",vmPortrait:"1",vmColor:"ffffff"},Y||{});
U.set("html",B.text[0]);e.set("html",B.text[1]);closeLink.set("html",B.text[2]);m=b.getStyle("padding-left").toInt()+j.getStyle("margin-left").toInt()+j.getStyle("padding-left").toInt();if((Browser.Engine.gecko)&&(Browser.Engine.version<19)){s=true;B.overlayOpacity=1;T.className="mbOverlayFF"}if((Browser.Engine.trident)&&(Browser.Engine.version<5)){x=true;T.className="mbOverlayIE";T.setStyle("position","absolute");
M()}if(typeof aa=="string"){aa=[[aa,Z,Y]];Z=0}h=aa;B.loop=B.loop&&(h.length>1);r();t(true);o=window.getScrollTop()+(window.getHeight()/2);l=window.getScrollLeft()+(window.getWidth()/2);z.resize=new Fx.Morph(b,$extend({duration:B.resizeDuration,onComplete:S},B.resizeTransition?{transition:B.resizeTransition}:{}));b.setStyles({top:o,left:l,width:B.initialWidth,height:B.initialHeight,marginTop:-(B.initialHeight/2)-m,marginLeft:-(B.initialWidth/2)-m,display:""});
z.overlay.start(B.overlayOpacity);return a(Z)}};Element.implement({mediabox:function(Y,Z){$$(this).mediabox(Y,Z);return this}});Elements.implement({mediabox:function(Y,ab,aa){ab=ab||function(ac){y=ac.rel.split(/[\[\]]/);y=y[1];return[ac.href,ac.title,y]};aa=aa||function(){return true};var Z=this;Z.removeEvents("click").addEvent("click",function(){var ad=Z.filter(aa,this);var ae=[];var ac=[];ad.each(function(ag,af){if(ac.indexOf(ag.toString())<0){ae.include(ad[af]);
ac.include(ad[af].toString())}});return Mediabox.open(ae.map(ab),ac.indexOf(this.toString()),Y)});return Z}});function M(){T.setStyles({top:window.getScrollTop(),left:window.getScrollLeft()})}function r(){k=window.getWidth();K=window.getHeight();T.setStyles({width:k,height:K})}function t(Y){if(Browser.Engine.gecko){["object",window.ie?"select":"embed"].forEach(function(aa){Array.forEach(document.getElementsByTagName(aa),function(ab){if(Y){ab._mediabox=ab.style.visibility
}ab.style.visibility=Y?"hidden":ab._mediabox})})}T.style.display=Y?"":"none";var Z=Y?"addEvent":"removeEvent";if(x){window[Z]("scroll",M)}window[Z]("resize",r);if(B.keyboard){document[Z]("keydown",v)}}function v(Y){if(B.alpha){switch(Y.code){case 27:case 88:case 67:O();break;case 37:case 80:L();break;case 39:case 78:g()}}else{switch(Y.code){case 27:O();break;case 37:L();break;case 39:g()}}if(B.stopKey){return false
}}function L(){return a(I)}function g(){return a(P)}function a(Y){if(Y>=0){j.set("html","");Q=Y;I=((Q||!B.loop)?Q:h.length)-1;P=Q+1;if(P==h.length){P=B.loop?0:-1}w();b.className="mbLoading";if(!h[Y][2]){h[Y][2]=""}R=h[Y][2].split(" ");H=R.length;if(H>1){C=(R[H-2].match("%"))?(window.getWidth()*((R[H-2].replace("%",""))*0.01))+"px":R[H-2]+"px";p=(R[H-1].match("%"))?(window.getHeight()*((R[H-1].replace("%",""))*0.01))+"px":R[H-1]+"px"
}else{C="";p=""}E=h[Y][0];V=h[Q][1].split("::");if(E.match(/quietube\.com/i)){f=E.split("v.php/");E=f[1]}else{if(E.match(/\/\/yfrog/i)){i=(E.substring(E.length-1));if(i.match(/b|g|j|p|t/i)){i="image"}if(i=="s"){i="flash"}if(i.match(/f|z/i)){i="video"}E=E+":iphone"}}if(E.match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)||i=="image"){i="img";E=E.replace(/twitpic\.com/i,"twitpic.com/show/full");u=new Image();
u.onload=q;u.src=E}else{if(E.match(/\.flv|\.mp4/i)||i=="video"){var Z=new URI(E).toRelative();if(Z!=E){E="../../../"+Z}i="obj";C=C||B.defaultWidth;p=p||B.defaultHeight;if(B.useNB){u=new Swiff(""+B.playerpath+"?mediaURL="+E+"&allowSmoothing=true&autoPlay="+B.autoplay+"&buffer=6&showTimecode="+B.showTimecode+"&loop="+B.medialoop+"&controlColor="+B.controlColor+"&controlBackColor="+B.controlBackColor+"&defaultVolume="+B.volume+"&scaleIfFullScreen=true&showScalingButton=true&crop=false",{id:"MediaboxSWF",width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}})
}else{u=new Swiff(""+B.JWplayerpath+"?file="+E+"&backcolor="+B.backcolor+"&frontcolor="+B.frontcolor+"&lightcolor="+B.lightcolor+"&screencolor="+B.screencolor+"&autostart="+B.autoplay+"&controlbar="+B.controlbar,{id:"MediaboxSWF",width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}})}q()}else{if(E.match(/\.mp3|\.aac|tweetmic\.com|tmic\.fm/i)||i=="audio"){var Z=new URI(E).toRelative();
if(Z!=E){E="../../../"+Z}i="obj";C=C||B.defaultWidth;p=p||"20px";if(E.match(/tweetmic\.com|tmic\.fm/i)){E=E.split("/");E[4]=E[4]||E[3];E="http://media4.fjarnet.net/tweet/tweetmicapp-"+E[4]+".mp3"}if(B.useNB){u=new Swiff(""+B.playerpath+"?mediaURL="+E+"&allowSmoothing=true&autoPlay="+B.autoplay+"&buffer=6&showTimecode="+B.showTimecode+"&loop="+B.medialoop+"&controlColor="+B.controlColor+"&controlBackColor="+B.controlBackColor+"&defaultVolume="+B.volume+"&scaleIfFullScreen=true&showScalingButton=true&crop=false",{id:"MediaboxSWF",width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}})
}else{u=new Swiff(""+B.JWplayerpath+"?file="+E+"&backcolor="+B.backcolor+"&frontcolor="+B.frontcolor+"&lightcolor="+B.lightcolor+"&screencolor="+B.screencolor+"&autostart="+B.autoplay,{id:"MediaboxSWF",width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}})}q()}else{if(E.match(/\.swf/i)||i=="flash"){i="obj";C=C||B.defaultWidth;p=p||B.defaultHeight;
u=new Swiff(E,{id:"MediaboxSWF",width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/\.mov|\.m4v|\.m4a|\.aiff|\.avi|\.caf|\.dv|\.mid|\.m3u|\.mp3|\.mp2|\.mp4|\.qtz/i)||i=="qt"){i="qt";C=C||B.defaultWidth;p=(parseInt(p)+16)+"px"||B.defaultHeight;u=new Quickie(E,{id:"MediaboxQT",width:C,height:p,container:"mbImage",attributes:{controller:B.controller,autoplay:B.autoplay,volume:B.volume,loop:B.medialoop,bgcolor:B.bgcolor}});
q()}else{if(E.match(/blip\.tv/i)){i="obj";C=C||"640px";p=p||"390px";u=new Swiff(E,{src:E,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/break\.com/i)){i="obj";C=C||"464px";p=p||"376px";d=E.match(/\d{6}/g);u=new Swiff("http://embed.break.com/"+d,{width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/dailymotion\.com/i)){i="obj";C=C||"480px";p=p||"381px";u=new Swiff(E,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/facebook\.com/i)){i="obj";C=C||"320px";p=p||"240px";f=E.split("v=");f=f[1].split("&");d=f[0];u=new Swiff("http://www.facebook.com/v/"+d,{movie:"http://www.facebook.com/v/"+d,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/flickr\.com/i)){i="obj";C=C||"500px";p=p||"375px";f=E.split("/");d=f[5];u=new Swiff("http://www.flickr.com/apps/video/stewart.swf",{id:d,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:C,height:p,params:{flashvars:"photo_id="+d+"&amp;show_info_box="+B.flInfo,wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/gametrailers\.com/i)){i="obj";
C=C||"480px";p=p||"392px";d=E.match(/\d{5}/g);u=new Swiff("http://www.gametrailers.com/remote_wrap.php?mid="+d,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/google\.com\/videoplay/i)){i="obj";C=C||"400px";p=p||"326px";f=E.split("=");d=f[1];u=new Swiff("http://video.google.com/googleplayer.swf?docId="+d+"&autoplay="+B.autoplayNum,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/megavideo\.com/i)){i="obj";C=C||"640px";p=p||"360px";f=E.split("=");d=f[1];u=new Swiff("http://wwwstatic.megavideo.com/mv_player.swf?v="+d,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/metacafe\.com\/watch/i)){i="obj";C=C||"400px";p=p||"345px";f=E.split("/");d=f[4];u=new Swiff("http://www.metacafe.com/fplayer/"+d+"/.swf?playerVars=autoPlay="+B.autoplayYes,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/vids\.myspace\.com/i)){i="obj";C=C||"425px";p=p||"360px";u=new Swiff(E,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/revver\.com/i)){i="obj";C=C||"480px";p=p||"392px";f=E.split("/");d=f[4];u=new Swiff("http://flash.revver.com/player/1.0/player.swf?mediaId="+d+"&affiliateId="+B.revverID+"&allowFullScreen="+B.revverFullscreen+"&autoStart="+B.autoplay+"&backColor=#"+B.revverBack+"&frontColor=#"+B.revverFront+"&gradColor=#"+B.revverGrad+"&shareUrl=revver",{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/rutube\.ru/i)){i="obj";C=C||"470px";p=p||"353px";f=E.split("=");d=f[1];u=new Swiff("http://video.rutube.ru/"+d,{movie:"http://video.rutube.ru/"+d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/seesmic\.com/i)){i="obj";C=C||"435px";p=p||"355px";f=E.split("/");d=f[5];u=new Swiff("http://seesmic.com/Standalone.swf?video="+d,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/tudou\.com/i)){i="obj";C=C||"400px";p=p||"340px";f=E.split("/");d=f[5];u=new Swiff("http://www.tudou.com/v/"+d,{width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/twitcam\.com/i)){i="obj";C=C||"320px";p=p||"265px";f=E.split("/");d=f[3];u=new Swiff("http://static.livestream.com/chromelessPlayer/wrappers/TwitcamPlayer.swf?hash="+d,{width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/twiturm\.com/i)){i="obj";C=C||"402px";p=p||"48px";f=E.split("/");d=f[3];u=new Swiff("http://twiturm.com/flash/twiturm_mp3.swf?playerID=0&sf="+d,{width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/twitvid\.com/i)){i="obj";C=C||"600px";p=p||"338px";f=E.split("/");d=f[3];u=new Swiff("http://www.twitvid.com/player/"+d,{width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/ustream\.tv/i)){i="obj";C=C||"400px";p=p||"326px";u=new Swiff(E+"&amp;viewcount="+B.usViewers+"&amp;autoplay="+B.autoplay,{width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/youku\.com/i)){i="obj";C=C||"480px";p=p||"400px";f=E.split("id_");d=f[1];u=new Swiff("http://player.youku.com/player.php/sid/"+d+"=/v.swf",{width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/youtube\.com\/watch/i)){f=E.split("v=");if(B.html5){i="url";C=C||"640px";p=p||"385px";d="mediaId_"+new Date().getTime();u=new Element("iframe",{src:"http://www.youtube.com/embed/"+f[1],id:d,width:C,height:p,frameborder:0});q()}else{i="obj";d=f[1];if(d.match(/fmt=22/i)){D="&ap=%2526fmt%3D22";C=C||"640px";p=p||"385px"}else{if(d.match(/fmt=18/i)){D="&ap=%2526fmt%3D18";C=C||"560px";
p=p||"345px"}else{D=B.ytQuality;C=C||"480px";p=p||"295px"}}u=new Swiff("http://www.youtube.com/v/"+d+"&autoplay="+B.autoplayNum+"&fs="+B.fullscreenNum+D+"&border="+B.ytBorder+"&color1=0x"+B.ytColor1+"&color2=0x"+B.ytColor2+"&rel="+B.ytRel+"&showinfo="+B.ytInfo+"&showsearch="+B.ytSearch,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}}else{if(E.match(/youtube\.com\/view/i)){i="obj";f=E.split("p=");d=f[1];C=C||"480px";p=p||"385px";u=new Swiff("http://www.youtube.com/p/"+d+"&autoplay="+B.autoplayNum+"&fs="+B.fullscreenNum+D+"&border="+B.ytBorder+"&color1=0x"+B.ytColor1+"&color2=0x"+B.ytColor2+"&rel="+B.ytRel+"&showinfo="+B.ytInfo+"&showsearch="+B.ytSearch,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/veoh\.com/i)){i="obj";C=C||"410px";p=p||"341px";E=E.replace("%3D","/");f=E.split("watch/");d=f[1];u=new Swiff("http://www.veoh.com/static/swf/webplayer/WebPlayer.swf?version=AFrontend.5.5.2.1001&permalinkId="+d+"&player=videodetailsembedded&videoAutoPlay="+B.AutoplayNum+"&id=anonymous",{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}else{if(E.match(/viddler\.com/i)){i="obj";C=C||"437px";p=p||"370px";f=E.split("/");d=f[4];u=new Swiff(E,{id:"viddler_"+d,movie:E,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen,id:"viddler_"+d,movie:E}});q()}else{if(E.match(/viddyou\.com/i)){i="obj";C=C||"416px";p=p||"312px";
f=E.split("=");d=f[1];u=new Swiff("http://www.viddyou.com/get/v2_"+B.vuPlayer+"/"+d+".swf",{id:d,movie:"http://www.viddyou.com/get/v2_"+B.vuPlayer+"/"+d+".swf",width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/vimeo\.com/i)){C=C||"640px";p=p||"360px";f=E.split("/");d=f[3];if(B.html5){i="url";d="mediaId_"+new Date().getTime();
u=new Element("iframe",{src:"http://player.vimeo.com/video/"+f[3]+"?portrait="+B.vmPortrait,id:d,width:C,height:p,frameborder:0});q()}else{i="obj";u=new Swiff("http://www.vimeo.com/moogaloop.swf?clip_id="+d+"&amp;server=www.vimeo.com&amp;fullscreen="+B.fullscreenNum+"&amp;autoplay="+B.autoplayNum+"&amp;show_title="+B.vmTitle+"&amp;show_byline="+B.vmByline+"&amp;show_portrait="+B.vmPortrait+"&amp;color="+B.vmColor,{id:d,width:C,height:p,params:{wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});
q()}}else{if(E.match(/12seconds\.tv/i)){i="obj";C=C||"430px";p=p||"360px";f=E.split("/");d=f[5];u=new Swiff("http://embed.12seconds.tv/players/remotePlayer.swf",{id:d,width:C,height:p,params:{flashvars:"vid="+d+"",wmode:B.wmode,bgcolor:B.bgcolor,allowscriptaccess:B.scriptaccess,allowfullscreen:B.fullscreen}});q()}else{if(E.match(/\#mb_/i)){i="inline";C=C||B.defaultWidth;p=p||B.defaultHeight;URLsplit=E.split("#");
u=document.id(URLsplit[1]).get("html");q()}else{i="url";C=C||B.defaultWidth;p=p||B.defaultHeight;d="mediaId_"+new Date().getTime();u=new Element("iframe",{src:E,id:d,width:C,height:p,frameborder:0});q()}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}return false}function q(){if(i=="img"){C=u.width;p=u.height;if(B.imgBackground){j.setStyles({backgroundImage:"url("+E+")",display:""})}else{if(p>=K-B.imgPadding&&(p/K)>=(C/k)){p=K-B.imgPadding;
C=u.width=parseInt((p/u.height)*C);u.height=p}else{if(C>=k-B.imgPadding&&(p/K)<(C/k)){C=k-B.imgPadding;p=u.height=parseInt((C/u.width)*p);u.width=C}}if(Browser.Engine.trident){u=document.id(u)}u.addEvent("mousedown",function(Y){Y.stop()}).addEvent("contextmenu",function(Y){Y.stop()});j.setStyles({backgroundImage:"none",display:""});u.inject(j)}}else{if(i=="obj"){if(Browser.Plugins.Flash.version<8){j.setStyles({backgroundImage:"none",display:""});
j.set("html",'<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>');C=B.DefaultWidth;p=B.DefaultHeight}else{j.setStyles({backgroundImage:"none",display:""});u.inject(j)}}else{if(i=="qt"){j.setStyles({backgroundImage:"none",display:""});
u}else{if(i=="inline"){j.setStyles({backgroundImage:"none",display:""});j.set("html",u)}else{if(i=="url"){j.setStyles({backgroundImage:"none",display:""});u.inject(j)}else{j.setStyles({backgroundImage:"none",display:""});j.set("html",'<div id="mbError"><b>Error</b><br/>A file type error has occoured, please visit <a href="iaian7.com/webcode/mediaboxAdvanced" title="mediaboxAdvanced" target="_new">iaian7.com</a> or contact the website author for more information.</div>');
C=B.defaultWidth;p=B.defaultHeight}}}}}j.setStyles({width:C,height:p});N.setStyles({width:C});F.set("html",(B.showCaption)?V[0]:"");N.set("html",(B.showCaption&&(V.length>1))?V[1]:"");X.set("html",(B.showCounter&&(h.length>1))?B.counterText.replace(/{x}/,Q+1).replace(/{y}/,h.length):"");if((I>=0)&&(h[I][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i))){A.src=h[I][0].replace(/twitpic\.com/i,"twitpic.com/show/full")
}if((P>=0)&&(h[P][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i))){W.src=h[P][0].replace(/twitpic\.com/i,"twitpic.com/show/full")}C=j.offsetWidth;p=j.offsetHeight+c.offsetHeight;if(p>=o+o){G=-o}else{G=-(p/2)}if(C>=l+l){n=-l}else{n=-(C/2)}if(B.resizeOpening){z.resize.start({width:C,height:p,marginTop:G-m,marginLeft:n-m})}else{b.setStyles({width:C,height:p,marginTop:G-m,marginLeft:n-m});S()}}function S(){z.image.start(1)
}function J(){b.className="";if(I>=0){U.style.display=""}if(P>=0){e.style.display=""}z.bottom.start(1)}function w(){if(u){u.onload=$empty}z.resize.cancel();z.image.cancel().set(0);z.bottom.cancel().set(0);$$(U,e).setStyle("display","none")}function O(){if(Q>=0){u.onload=$empty;j.set("html","");for(var Y in z){z[Y].cancel()}b.setStyle("display","none");z.overlay.chain(t).start(0)}window.fireEvent("mb_close");
return false}})();