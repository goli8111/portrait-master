(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{31:function(e,t,a){},56:function(e,t,a){e.exports=a(77)},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),c=(a(61),a(62),a(3));function s(e){return{type:"SET_SCENE",_change_scene:e}}function l(e){return{type:"SETSELECTIMGINDEX",_selectImgIndex:e}}var m=a(94),d=(a(31),a(4)),u=a(96),p=a(43),g=Object(m.a)((function(e){return{root:{width:"100%",height:"100%"},ContentsText:{textAlign:"left"},contents_site_link:{position:"absolute",height:"100%",width:"100%",frameBorder:0}}})),h={set_scene:s},f=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),h)((function(e){console.log("PortraitMasterContentsIntro component start");var t=g();return o.a.createElement("div",{className:t.root},o.a.createElement(p.a,{url:"/portrait-master/contents/index.html",className:t.contents_site_link,frameBorder:"0"}),";")})),v=(a(78),Object(m.a)((function(e){return{root:{width:"100%",height:"100%",overflow:"hidden"},left_title:{position:"absolute",left:"0"},right_title:{position:"absolute",top:"5px",right:"10px",height:"3%"},ImgList:{display:"flex",overflow:"auto"}}}))),b={set_scene:s,SetSelectImgIndex:l},w=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_canvasData:e.camera._canvasData}}),b)((function(e){var t=e.set_scene,a=e.SetSelectImgIndex,r=e._canvasData;console.log("PortraitMasterSimpleCaptureList component start");var i=v();Object(n.useEffect)((function(){c()}),[]);var c=function(){if(console.log("onUploadImageList"),void 0!=window.HybridApp)for(var e=window.HybridApp.GetDirectoryFileCount(),t=0;t<e;t++){var a=window.HybridApp.GetImageDataFromDirectory(t);s(t,a)}else for(t=0;t<r.length;t++)s(t,r[t])},s=function(e,n){var o=document.createElement("img");o.style.width="90%",o.style.height="auto",o.style.margin="5px",o.src=n,o.onclick=function(){console.log("img click index:"+e),a(e),t("FullScreenCaptureList")},document.getElementById("imagelist").appendChild(o)};return o.a.createElement("div",{className:i.root},o.a.createElement("div",{className:i.left_title},"\ub0b4 \uc0ac\uc9c4"),o.a.createElement("img",{className:i.right_title,onClick:function(){console.log("onClickGridCaptureList"),t("GridCaptureList")},src:"/portrait-master/img/image-modify-icon.png"}),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{id:"imagelist",className:"SimpleCaptureImageList"})))})),C=Object(m.a)((function(e){return{root:{width:"100%"},ContentsBody:{position:"absolute",width:"100%",left:"0px",top:"0px",bottom:"50px",display:"grid",gridTemplateRows:"50% 50%"},BottomBarBack:{position:"fixed",backgroundColor:"#FFFFFF88",width:"100%",height:"11%",top:"89%",left:"0%"},BottomBarButtonBase:{position:"fixed",height:"8%",top:"90%",background:"linear-gradient(90deg, #cc6699 30%, #6666ff 80%)",borderRadius:3,border:0,color:"white",boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .3)"},BottomBarButtonLeft:{width:"44%",left:"3%"},BottomBarButtonRight:{width:"44%",left:"53%"},BottomBarButton:{width:"94%",left:"3%"},divLine:{border:"1px solid",color:"#DDDDDD",width:"95%"}}})),_={set_scene:s},y=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_canvasData:e.camera._canvasData}}),_)((function(e){e._current_scene;var t=e.set_scene,a=e._canvasData;console.log("PortraitMaster component start");var n,r,i=C(),c=Object(d.a)(i.BottomBarButtonBase,i.BottomBarButtonRight),s=Object(d.a)(i.BottomBarButtonBase,i.BottomBarButtonLeft),l=Object(d.a)(i.BottomBarButtonBase,i.BottomBarButton),m=function(){t("CameraCapture"),console.log("onCameraCapture")};return 0==(void 0!=window.HybridApp?window.HybridApp.GetDirectoryFileCount():a.length)?r=o.a.createElement(u.a,{onClick:m,className:l,variant:"contained",color:"secondary"},"\uc0ac\uc9c4 \ucc0d\uae30"):(n=o.a.createElement("div",null,o.a.createElement(w,null)," ",o.a.createElement("hr",{className:i.divLine})),r=o.a.createElement("div",null,o.a.createElement(u.a,{onClick:m,className:s,variant:"contained",color:"secondary"}," \uc0ac\uc9c4 \ucc0d\uae30"),o.a.createElement(u.a,{onClick:function(){t("SubmitCaptureList"),console.log("onCameraCaptureSubmit")},className:c,variant:"contained",color:"secondary"},"\uc81c\ucd9c\ud558\uae30"))),o.a.createElement("div",{className:"MainSceneRoot"},n,o.a.createElement(f,null),o.a.createElement("div",{className:i.BottomBarBack},r))})),E=a(13),x=a.n(E),k=a(23),D=a(44),I=a(45),S=a(27),B=a(49),O=a(50);function A(e){return{type:"DELETECANVASDATA",_deleteCanvasDataIndex:e}}function T(e){void 0!=window&&void 0!=window.parent&&(0==e?window.parent.postMessage("onFitScreen","*"):window.parent.postMessage("onFullScreen","*"))}var j=!0,N={position:"fixed",left:"0px",top:"0",width:"100%",height:"11.6%"},F={position:"fixed",left:"0px",top:"88.4%",height:"11.6%",width:"100%"},L={position:"fixed",left:"0%",top:"0%",width:"100%",height:"100%",zIndex:"-3",backgroundColor:"black"},H={position:"fixed",left:"0%",width:"100%",height:"auto",top:"50%",transform:"translate(0%, -50%)",zIndex:"-2"},R={position:"fixed",left:"0%",width:"100%",height:"auto",top:"50%",transform:"translate(0%, -50%)",zIndex:"-1"},M={position:"fixed",height:"5.1%",left:"10%",top:"91.5%"},G={position:"fixed",height:"9.1%",left:"40%",top:"89.5%"},U={position:"fixed",height:"5.1%",left:"75%",top:"91.5%"},V={position:"fixed",height:"5.1%",left:"5%",top:"3.5%"},P={position:"fixed",height:"5.1%",left:"25%",top:"3.5%"},W={position:"fixed",height:"5.1%",left:"45%",top:"3.5%"},X={position:"fixed",height:"2.1%",left:"65%",top:"5%"},z={position:"fixed",height:"5.1%",left:"85%",top:"3.5%"},J=function(e){Object(O.a)(a,e);var t=Object(B.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e,a.defaultProps)).getCanvas=function(e){n.canvas=e},n.getCanvasOverlay=function(e){n.canvasOverlay=e},n.getVideo=function(e){n.video=e},n.updateCameraGrid=function(e){var t=n.video;if(void 0!=t){var a=n.canvasOverlay;if(void 0!=a){var o=a.getContext("2d");if(void 0!=o&&(t.videoWidth==a.width&&t.videoHeight==a.height||(a.width=t.videoWidth,a.height=t.videoHeight,o.width=t.videoWidth,o.height=t.videoHeight),o.clearRect(0,0,a.width,a.height),1==e)){o.save(),o.strokeStyle="rgb(255,0,0)",o.lineWidth=3,o.globalAlpha=.1;for(var r=0;r<=a.width;r+=a.width/3)o.moveTo(r,0),o.lineTo(r,a.height);for(var i=0;i<=a.height;i+=a.height/3)o.moveTo(0,i),o.lineTo(a.width,i);o.stroke(),o.restore()}}}},n.onNextCamera=function(){j=!j,console.log("user camera flag : "+j),n.playCamera(),1==j?n.onFlash():n.setFlashLight(1==n.state.cameraFlashType)},n.onTimerSelect=function(){var e=n.state.cameraCaptureTimerType;++e>3&&(e=0),n.setState((function(){return{cameraCaptureTimerType:e}})),console.log("timer:"+e)},n.onCaptureAnimation=function(){console.log("onCaptureAnimation call"),1!=n.state.flashEffect?(n.setState({flashEffect:!0}),setTimeout((function(){n.setState({flashEffect:!1})}),800)):console.log("onCaptureAnimation call fail!")},n.onCapture=function(){var e=n.canvas;if(void 0!=e){var t=0;switch(n.state.cameraCaptureTimerType){case 0:t=0;break;case 1:t=3e3;break;case 2:t=5e3;break;case 3:t=1e4}var a=(new Date).toISOString();void 0==window.HybridApp?setTimeout((function(){var t=e.toDataURL("image/jpeg",1);n.props.onAddCanvasData(t),n.onCaptureAnimation()}),t):setTimeout((function(){var t=e.toDataURL("image/jpeg",1);if(void 0!=window.HybridApp)window.HybridApp.SaveAlbumJpgImage(t,a+".jpg");else{var o=document.createElement("a");document.body.appendChild(o),o.style="display: none",o.href=t,o.download=a+".jpg",o.click(),window.URL.revokeObjectURL(t)}n.onCaptureAnimation(),console.log("onCapture")}),t)}},n.onBack=function(){console.log("onBack"),n.props.onSetScene("PortraitMaster")},n.onFlash=function(){var e=n.state.cameraFlashType;++e>1&&(e=0),1==j&&(e=0),n.setState((function(){return{cameraFlashType:e}})),n.setFlashLight(1==e),console.log("flash:"+e)},n.onToggleGrid=function(){var e=!n.state.gridView;n.setState((function(){return{gridView:e}})),console.log("grid view:"+e),n.updateCameraGrid(e)},n.onCaptureRatio=function(){var e=n.state.captureRatioType;++e>1&&(e=0),n.setState((function(){return{captureRatioType:e}})),console.log("capture Ratio Type:"+e)},n.onMovieFilter=function(){var e=n.state.cameraFilterType;++e>7&&(e=0),n.setState((function(){return{cameraFilterType:e}})),console.log("camera filter:"+e)},n.stopCamera=n.stopCamera.bind(Object(S.a)(n)),n.state={cameraCaptureTimerType:0,cameraFlashType:0,cameraFilterType:0,captureRatioType:0,gridView:!1,flashEffect:!1},n}return Object(I.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,this.setupCamera();case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("This browser does not support video capture, or this device does not have a camera");case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){T(!1),this.setFlashLight(!1),this.stopCamera()}},{key:"setupCamera",value:function(){var e=Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){e.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:navigator.mediaDevices.enumerateDevices().then((function(e){e.forEach((function(e){e.kind,console.log(e.kind+": "+e.label+", id = "+e.deviceId)}))})).catch((function(e){console.log(e.name+": "+e.message)})),this.playCamera(),this.updateCamera();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"playCamera",value:function(){var e=Object(k.a)(x.a.mark((function e(){var t,a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.stream&&window.stream.getTracks().forEach((function(e){e.stop()})),t=this.video,1080,1080,a="user",0==j&&(a="environment"),e.next=8,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:a,frameRate:60,width:{exact:1080},height:{exact:1080},aspectRatio:{exact:1}}});case 8:n=e.sent,window.stream=n,t.srcObject=n,t.play();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stopCamera",value:function(){console.log("stopCamera call");var e=this.video;void 0!=e&&(e.pause(),e.src="",void 0!=e.srcObject&&(e.srcObject.getTracks()[0].stop(),e.srcObject=void 0),console.log("video off"))}},{key:"setFlashLight",value:function(e){if(console.log("setFlashLight:"+e),void 0!=window.stream){var t=window.stream.getVideoTracks()[0];if(console.log(t),void 0!=t){var a=t.getCapabilities();console.log(a),void 0!=a&&(console.log(a.torch),a.torch&&t.applyConstraints({advanced:[{torch:e}]}).catch((function(e){return console.log(e)})))}}}},{key:"updateCamera",value:function(){var e=this.canvas;if(void 0!=e){var t=e.getContext("2d");if(void 0!=t){var a=this.video;void 0!=a&&(0==this.props.showVideo?a.style.display="none":a.style.display="block",this.updateCameraFrame(t))}}}},{key:"updateCameraFrame",value:function(e){var t=this,a=this.video,n=function(){var o=Object(k.a)(x.a.mark((function o(){var r;return x.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r=t.canvas,1!=t.props.showDebugVideo||void 0==r){o.next=26;break}a.videoWidth==r.width&&a.videoHeight==r.height||(r.width=a.videoWidth,r.height=a.videoHeight,e.width=a.videoWidth,e.height=a.videoHeight),e.clearRect(0,0,r.width,r.height),e.save(),o.t0=t.state.cameraFilterType,o.next=0===o.t0?8:1===o.t0?10:2===o.t0?12:3===o.t0?14:4===o.t0?16:5===o.t0?18:6===o.t0?20:7===o.t0?22:24;break;case 8:return e.filter="none",o.abrupt("break",24);case 10:return e.filter="grayscale(100%)",o.abrupt("break",24);case 12:return e.filter="brightness(100%)",o.abrupt("break",24);case 14:return e.filter="contrast(100%)",o.abrupt("break",24);case 16:return e.filter="sepia(100%)",o.abrupt("break",24);case 18:return e.filter="invert(100%)",o.abrupt("break",24);case 20:return e.filter="saturate(100%)",o.abrupt("break",24);case 22:return e.filter="blur(4px)",o.abrupt("break",24);case 24:e.drawImage(a,0,0),e.restore();case 26:if("start"!=t.props._closeCamera){o.next=30;break}return t.stopCamera(),t.props.onCloseCamera("complete"),o.abrupt("return");case 30:requestAnimationFrame(n);case 31:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();n()}},{key:"render",value:function(){var e,t,a,n,r;switch(this.state.cameraCaptureTimerType){case 0:e=o.a.createElement("img",{style:M,onClick:this.onTimerSelect.bind(this),src:"/portrait-master/img/TimerOff.png"});break;case 1:e=o.a.createElement("img",{style:M,onClick:this.onTimerSelect.bind(this),src:"/portrait-master/img/Timer3.png"});break;case 2:e=o.a.createElement("img",{style:M,onClick:this.onTimerSelect.bind(this),src:"/portrait-master/img/Timer5.png"});break;case 3:e=o.a.createElement("img",{style:M,onClick:this.onTimerSelect.bind(this),src:"/portrait-master/img/Timer10.png"})}switch(this.state.cameraFlashType){case 0:t=o.a.createElement("img",{style:P,onClick:this.onFlash.bind(this),src:"/portrait-master/img/FlashOff.png"});break;case 1:t=o.a.createElement("img",{style:P,onClick:this.onFlash.bind(this),src:"/portrait-master/img/FlashOn.png"})}return a=0==this.state.gridView?o.a.createElement("img",{style:W,onClick:this.onToggleGrid.bind(this),src:"/portrait-master/img/GridOff.png"}):o.a.createElement("img",{style:W,onClick:this.onToggleGrid.bind(this),src:"/portrait-master/img/GridOn.png"}),n=0==this.state.captureRatioType?o.a.createElement("img",{style:X,onClick:this.onCaptureRatio.bind(this),src:"/portrait-master/img/CaptureRatio4_3.png"}):o.a.createElement("img",{style:X,onClick:this.onCaptureRatio.bind(this),src:"/portrait-master/img/CaptureRatio16_9.png"}),r=0==this.state.cameraFilterType?o.a.createElement("img",{style:z,onClick:this.onMovieFilter.bind(this),src:"/portrait-master/img/FilterOff.png"}):o.a.createElement("img",{style:z,onClick:this.onMovieFilter.bind(this),src:"/portrait-master/img/FilterOn.png"}),o.a.createElement("div",{style:L},o.a.createElement("video",{id:"videoCamera",style:H,src:"",playsInline:!0,ref:this.getVideo}),o.a.createElement("canvas",{style:R,ref:this.getCanvas}),o.a.createElement("canvas",{id:"canvasOverlay",style:R,ref:this.getCanvasOverlay}),o.a.createElement("div",{style:N},o.a.createElement("img",{style:V,onClick:this.onBack.bind(this),src:"/portrait-master/img/CameraBack.png"}),t,a,n,r),o.a.createElement("div",{style:F},e,o.a.createElement("img",{style:G,onClick:this.onCapture.bind(this),src:"/portrait-master/img/shutter_normal.png"}),o.a.createElement("img",{style:U,onClick:this.onNextCamera.bind(this),src:"/portrait-master/img/FlipCamera.png"})),o.a.createElement("div",{className:"CameraCaptureEffect "+(this.state.flashEffect?"CameraCaptureAnimation":"")}))}}]),a}(n.Component);J.defaultProps={showVideo:!1,showDebugVideo:!0,loadingText:"Loading...please be patient..."};var q=J=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_closeCamera:e.camera._closeCamera}}),(function(e){return{onSetScene:function(t){return e(s(t))},onAddCanvasData:function(t){return e({type:"ADDCANVASDATA",_addCanvasData:t})}}}))(J),Y=Object(m.a)((function(e){return{root:{width:"100%"},ContentsBody:{position:"absolute",width:"100%",left:"0px",top:"0px",bottom:"50px"},ImgList:{display:"flex",overflowX:"auto"},BottomBar1:{position:"fixed",width:"40%",Height:"50px",left:"5%",bottom:"0px"},BottomBar2:{position:"fixed",width:"40%",left:"55%",Height:"50px",bottom:"0px"}}})),$={set_scene:s},K=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),$)((function(e){e._current_scene,e.set_scene;console.log("Index_scene component start");var t=Y();Object(n.useEffect)((function(){r()}));var a=function(e){console.log("onAddImageChange"),e.target.files[0]&&function(e){console.log("imgUpload:"),console.log(e);var t=new FileReader;t.onload=function(e){var a=e.target.result,n=new Image;n.onload=function(){i(t.result)},n.src=a},t.readAsDataURL(e)}(e.target.files[0])},r=function(){if(console.log("onUploadImageList"),void 0!=window.HybridApp)for(var e=window.HybridApp.GetDirectoryFileCount(),t=0;t<e;t++){var a=window.HybridApp.GetImageDataFromDirectory(t);i(a)}},i=function(e){var t=document.createElement("img");t.style.display="block",t.style.width="65%",t.style.height="auto",t.style.margin="5px",t.src=e,document.getElementById("imagelist").appendChild(t)};return o.a.createElement("div",{className:t.root},o.a.createElement("div",{id:"imagelist",className:t.ImgList}),o.a.createElement(u.a,{onClick:function(){console.log("onAddImageSelect");var e=document.createElement("input");e.type="file",e.accept="image/*",e.style.display="none",e.onchange=a,document.body.appendChild(e),e.click()},className:t.BottomBar1,variant:"contained",color:"secondary"},"\uc774\ubbf8\uc9c0 \uc120\ud0dd"),o.a.createElement(u.a,{onClick:function(){console.log("onUploadData")},className:t.BottomBar2,variant:"contained",color:"secondary"},"\uc81c\ucd9c\ud558\uae30"))})),Q=a(15),Z=(a(69),Object(m.a)((function(e){return{root:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:1,backgroundColor:"black",color:"white"},bar:{position:"absolute",height:"100%",width:"100%",margin:"2%"},title:{position:"absolute",zIndex:1,textAlign:"left",margin:"2%",color:"white"}}}))),ee={set_scene:s},te=Object(c.b)((function(e){return{}}),ee)((function(e){var t=e.title,a=e.set_scene,r=Z();Object(n.useEffect)((function(){}));return o.a.createElement("div",{className:r.root},o.a.createElement("div",{className:r.bar},o.a.createElement("span",{onClick:function(){console.log("onBack set_page"),a("PortraitMaster")}},o.a.createElement("img",{className:"appbar_title_img_arrow",src:"/portrait-master/img/CameraBack.png"})),o.a.createElement("span",{className:"appbar_quest_title_text"},t)))})),ae=Object(m.a)((function(e){return{root:{width:"100%",height:"100%"},bottomBar:{position:"fixed",height:"50px",bottom:"0px",width:"100%",backgroundColor:"#000000AA"},upload_button:{position:"absolute",top:"5px",left:"20px",height:"30px"},delete_button:{position:"absolute",top:"5px",right:"20px",height:"30px"},BottomBarButton:{position:"absolute",height:"94%",top:"3%",background:"linear-gradient(90deg, #cc6699 30%, #6666ff 80%)",borderRadius:3,border:0,color:"white",boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .3)",width:"94%",left:"3%"}}})),ne=function(e){e.set_scene;var t=e.itemCount,a=e.onClickUploadImage,n=e.onClickDeleteImage,r=e.onClickSubmit,i=(e.DeleteCanvasData,e.enableSubmit);console.log("PortraitMasterCaptureImageControlBar component start"),console.log("enableSubmit:"+i);var c=ae();return o.a.createElement("div",{className:c.root},function(){return 1==i?o.a.createElement("div",{className:c.bottomBar},o.a.createElement(u.a,{onClick:r,className:c.BottomBarButton,variant:"contained",color:"secondary"},"\uc81c\ucd9c\ud558\uae30"),";"):(0!=t?(e=o.a.createElement("img",{className:c.upload_button,onClick:a,src:"/portrait-master/img/image-select-upload-enable-icon.png"}),s=o.a.createElement("img",{className:c.delete_button,onClick:n,src:"/portrait-master/img/image-select-delete-enable-icon.png"})):(e=o.a.createElement("img",{className:c.upload_button,src:"/portrait-master/img/image-select-upload-disable-icon.png"}),s=o.a.createElement("img",{className:c.delete_button,src:"/portrait-master/img/image-select-delete-disable-icon.png"})),o.a.createElement("div",{className:c.bottomBar},e,s));var e,s}())},oe={set_scene:s,DeleteCanvasData:A},re=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),oe)(ne),ie=Object(m.a)((function(e){return{root:{width:"100%",height:"100%",background:"#000000"},app_root:{position:"fixed",left:"0%",top:"0%",width:"100%",height:"8%"},body:{position:"fixed",left:"0%",top:"8%",width:"100%",height:"92%",backgroundColor:"black"},select_text:{color:"white"},ImgList:{overflowY:"auto",background:"#000000"},bottomBar:{position:"fixed",height:"50px",bottom:"0px",width:"100%",backgroundColor:"#000000AA"},upload_button:{position:"absolute",top:"5px",left:"20px",height:"30px"},delete_button:{position:"absolute",top:"5px",right:"20px",height:"30px"}}})),ce=[],se={set_scene:s,DeleteCanvasData:A},le=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_canvasData:e.camera._canvasData}}),se)((function(e){var t=e._canvasData,a=e.set_scene,r=e.DeleteCanvasData;console.log("PortraitMasterGridCaptureImageList component start");var i=ie(),c=Object(n.useState)(0),s=Object(Q.a)(c,2),l=s[0],m=s[1];Object(n.useEffect)((function(){return T(!0),T(!1)})),Object(n.useEffect)((function(){d()}),[]);var d=function(){if(console.log("onUpdateImageList"),void 0!=window.HybridApp)for(var e=window.HybridApp.GetDirectoryFileCount(),a=0;a<e;a++){var n=window.HybridApp.GetImageDataFromDirectory(a);h(a,n)}else for(a=0;a<t.length;a++)h(a,t[a])},u=function(e){for(var t=0;t<ce.length;t++)if(ce[t]==e)return!0;return!1};function p(){console.log("onToggleImage:"+this.id);var e=function(e){console.log("selectImage:"+e);for(var t=!1,a=0;a<ce.length;a++)if(ce[a]==e){ce.splice(a,1),t=!0;break}return 0==t&&ce.push(e),m(ce.length),!t}(this.id),t=document.getElementById(this.id);void 0!=t&&(t.style.filter=1==e?"brightness(150%) grayscale(80%)":"");var a=document.getElementById(this.id+"Check");void 0!=a&&(a.style.display=1==e?"block":"none")}var g,h=function(e,t){var a=document.getElementById("imagelist");if(void 0!=a){var n=document.createElement("div");n.id="img"+e+"Root",n.style.position="relative",a.appendChild(n);var o=document.createElement("img");o.id="img"+e,o.style.position="relative",o.style.width="100%",o.style.height="auto",o.onclick=p,o.style.margin="5px",o.src=t,n.appendChild(o);var r=document.createElement("img");r.id="img"+e+"Check",r.style.position="absolute",r.style.display="none",r.style.width="40px",r.style.height="auto",r.style.right="10px",r.style.bottom="10px",r.src="/portrait-master/img/image-checked-icon.png",n.appendChild(r)}},f=function(e){var t=e.substring("img".length);try{return parseInt(t)}catch(a){}return-1};g=0!=l?o.a.createElement("div",{className:i.select_text},o.a.createElement("center",null,l,"\uac1c \uc120\ud0dd\ub428")):o.a.createElement("div",{className:i.select_text},o.a.createElement("center",null,"\uc120\ud0dd \ub418\uc9c0 \uc54a\uc74c"));return o.a.createElement("div",{className:i.root},o.a.createElement("div",{className:i.app_root},o.a.createElement(te,{title:"\ub0b4 \uc0ac\uc9c4 \ud3b8\uc9d1"})),o.a.createElement("div",{className:i.body},g,o.a.createElement("div",{id:"imagelist",className:i.ImgList})),o.a.createElement(re,{itemCount:l,onClickUploadImage:function(){console.log("onClickUploadImage call");for(var e=-1,t=0;t<ce.length;t++){if(1==u(ce[t])){e=f(ce[t]);break}}-1!=e&&void 0!=window.HybridApp&&window.HybridApp.DoShareImage(e,"level up hero \uc778\ubb3c\uc0ac\uc9c4 \ud018\uc2a4\ud2b8")},onClickDeleteImage:function(){console.log("onClickDeleteImage call");for(var e=[],t=0;t<ce.length;t++){var n=document.getElementById(ce[t]+"Root");if(void 0==n){console.log("select item delete error id:"+ce[t]);break}if(n.remove(),1==u(ce[t])){var o=f(ce[t]);e.push(o)}}ce=[],m(0),e.sort((function(e,t){return t-e}));for(t=0;t<e.length;t++)console.log("select item DeleteCanvasData call index:"+e[t]),void 0!=window.HybridApp?window.HybridApp.DeleteImageDataFromDirectory(e[t]):r(e[t]);var i=document.getElementById("imagelist");void 0!=i&&0==i.childElementCount&&a("PortraitMaster")}}))})),me=(a(70),a(46)),de=Object(m.a)((function(e){return{root:{position:"absolute",left:"0%",top:"0%",width:"100%",height:"100%",backgroundColor:"black"},app_root:{position:"fixed",left:"0%",top:"0%",width:"100%",height:"8%"},body:{position:"fixed",left:"0%",top:"8%",width:"100%",height:"92%"},multi_select_text:{color:"white"},ImgList:{overflowY:"auto",backgroundColor:"black"}}})),ue=[],pe={set_scene:s,SetSelectImgIndex:l,DeleteCanvasData:A},ge=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_canvasData:e.camera._canvasData,_selectImgIndex:e.scene._selectImgIndex}}),pe)((function(e){var t=e._canvasData,a=e.set_scene,r=e.SetSelectImgIndex,i=e._selectImgIndex,c=e.DeleteCanvasData,s=e.enableSubmit;console.log("PortraitMasterFullScreenCaptureList component start"),console.log("enableSubmit:"+s);var l=de(),m=Object(n.useState)(0),d=Object(Q.a)(m,2),u=d[0],p=d[1];Object(n.useEffect)((function(){return h(),T(!0),T(!1)}));var g,h=function(){if(ue=[],console.log("onUpdateImageList"),void 0!=window.HybridApp)for(var e=window.HybridApp.GetDirectoryFileCount(),a=0;a<e;a++){var n=window.HybridApp.GetImageDataFromDirectory(a);f(a,n)}else for(a=0;a<t.length;a++)f(a,t[a])},f=function(e,t){ue.push(t),p(ue.length),console.log("item count:"+ue.length)},v=function(e){console.log("onSelectImage call:"+e),r(e)};g=u>1?o.a.createElement("div",{className:l.multi_select_text},o.a.createElement("center",null,"\uc2ac\ub77c\uc774\ub4dc\ud558\uba74 \ub2e4\ub978 \uc0ac\uc9c4 \ud45c\uc2dc")):o.a.createElement("div",{className:l.multi_select_text});var b="\uc0ac\uc9c4 \ubcf4\uae30";return 1==s&&(b="\uc81c\ucd9c\ud558\uae30"),console.log("itemCount renderring update"),o.a.createElement("div",{className:l.root},o.a.createElement("div",{className:l.app_root},o.a.createElement(te,{title:b})),o.a.createElement("div",{className:l.body},g,(console.log("_items count:"+ue.length),o.a.createElement(me.Carousel,{infiniteLoop:!0,selectedItem:i,showArrows:!0,showStatus:!0,showThumbs:!1,onChange:v},ue.map((function(e){return o.a.createElement("img",{src:e})}))))),o.a.createElement(ne,{itemCount:1,onClickUploadImage:function(){console.log("onClickUploadImage call"),void 0!=window.HybridApp&&window.HybridApp.DoShareImage(i,"level up hero \uc778\ubb3c\uc0ac\uc9c4 \ud018\uc2a4\ud2b8")},onClickDeleteImage:function(){console.log("onClickDeleteImage call index:"+i),void 0!=window.HybridApp?window.HybridApp.DeleteImageDataFromDirectory(i):c(i),r(0),ue.length<=1&&a("PortraitMaster")},onClickSubmit:function(){var e;console.log("onClickSubmit call"),e=!0,void 0!=window&&void 0!=window.parent&&(0==e?window.parent.postMessage("onBack","*"):window.parent.postMessage("onSuccess","*"))},enableSubmit:s}))})),he=a(97),fe=a(98),ve=a(48),be=a.n(ve),we=a(47),Ce=a.n(we),_e=Object(m.a)({root:{width:"100%",bottom:0,position:"fixed",flexGrow:1}}),ye={set_scene:s},Ee=(Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),ye)((function(e){e._current_scene;var t=e.set_scene,a=_e(),n=o.a.useState(0),r=Object(Q.a)(n,2),i=r[0],c=r[1];return o.a.createElement(he.a,{value:i,onChange:function(e,a){t(a),c(a)},showLabels:!0,className:a.root},o.a.createElement(fe.a,{value:"PortraitMaster",label:"Home",icon:o.a.createElement(Ce.a,null)}),o.a.createElement(fe.a,{value:"CameraCapture",label:"\uc0ac\uc9c4\ucc0d\uae30",icon:o.a.createElement(be.a,null)}))})),Object(m.a)((function(e){return{root:{width:"100%",height:"100%"}}}))),xe={set_scene:s},ke=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),xe)((function(e){var t=e._current_scene;e.set_scene;console.log("Index_scene component start");var a=Ee();return o.a.createElement("div",{className:a.root},function(){switch(t){case"CameraCapture":return o.a.createElement(q,null);case"PortraitMaster":return o.a.createElement(y,null);case"CameraCaptureSelect":return o.a.createElement(K,null);case"GridCaptureList":return o.a.createElement(le,null);case"FullScreenCaptureList":return o.a.createElement(ge,{enableSubmit:!1});case"SubmitCaptureList":return o.a.createElement(ge,{enableSubmit:!0});default:return o.a.createElement(y,null)}}())}));var De=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(14),Se={_current_scene:"IndexScene",_selectImgIndex:0};var Be=a(30),Oe=a(34),Ae={_closeCamera:"",_canvasData:[]};var Te=Object(Ie.b)({scene:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer scene action call:"+t.type),t.type){case"SET_SCENE":return console.log("SET_SCENE:"+t._change_scene),Object.assign({},e,{_current_scene:t._change_scene});case"SETSELECTIMGINDEX":return console.log("SETSELECTIMGINDEX:"+t._selectImgIndex),Object.assign({},e,{_selectImgIndex:t._selectImgIndex});default:return e}},camera:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer scene action call:"+t.type),t.type){case"CLOSECAMERA":return console.log("CLOSECAMERA:"+t._closeCamera),Object.assign({},e,{_closeCamera:t._closeCamera});case"ADDCANVASDATA":return console.log("ADDCANVASDATA:"+t._addCanvasData),Object(Oe.a)({},e,{_canvasData:[].concat(Object(Be.a)(e._canvasData),[t._addCanvasData])});case"DELETECANVASDATA":return console.log("DELETECANVASDATA:"+t._deleteCanvasDataIndex),Object(Oe.a)({},e,{_canvasData:[].concat(Object(Be.a)(e._canvasData.slice(0,t._deleteCanvasDataIndex)),Object(Be.a)(e._canvasData.slice(t._deleteCanvasDataIndex+1)))});default:return e}}}),je=document.getElementById("root"),Ne=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Fe=Object(Ie.c)(Te,Ne);i.a.render(o.a.createElement(c.a,{store:Fe},o.a.createElement(De,null)),je),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.0b8e1ee2.chunk.js.map