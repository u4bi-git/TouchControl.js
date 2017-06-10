!function(t,h){"object"==typeof exports&&"undefined"!=typeof module?h(exports):"function"==typeof define&&define.amd?define(["exports"],h):h(t.TouchControl=t.TouchControl||{})}(this,function(t){"use strict";class h{constructor(t){this.element=t||window,this.isTouch=!1,this.touch={delta:{},move:{},pitch:0,yaw:0},this.mouseDown=this.mouseDown.bind(this),this.mouseUp=this.mouseUp.bind(this),this.mouseMove=this.mouseMove.bind(this),this.init()}init(){this.element.addEventListener("mousedown",this.mouseDown),window.addEventListener("mouseup",this.mouseUp),window.addEventListener("mousemove",this.mouseMove),this.isTouch=!1}mouseDown(t){console.log(this),this.isTouch=!0,this.touch.move.x=t.screenX,this.touch.move.y=t.screenY}mouseUp(t){this.isTouch=!1}mouseMove(t){if(!this.isTouch)return;let h={width:window.innerWidth,height:window.innerHeight};this.element!==window&&(h={width:this.element.clientWidth,height:this.element.clientHeight}),this.touch.delta={x:t.screenX-this.touch.move.x,y:t.screenY-this.touch.move.y},console.log("delta",this.touch.delta),this.touch.move={x:t.screenX,y:t.screenY};let i=h.width/h.height,o=Math.PI/180,e=Math.PI/2;this.touch.yaw+=this.touch.delta.x/h.width*45*i*o,this.touch.pitch+=this.touch.delta.y/h.height*45*o,this.touch.pitch=Math.max(-e,Math.min(e,this.touch.pitch)),console.log("y yaw",this.touch.yaw),console.log("x pitch",this.touch.pitch)}}class i{constructor(t){this.element=t||window,this.isTouch=!1,this.isPinch=!1,this.touch={delta:{},move:{},pinch:{}},this.touchDown=this.touchDown.bind(this),this.touchUp=this.touchUp.bind(this),this.touchMove=this.touchMove.bind(this),this.init()}init(){console.log("init"),this.element.addEventListener("touchstart",this.touchDown),window.addEventListener("touchend",this.touchUp),window.addEventListener("touchmove",this.touchMove),this.isTouch=!1}touchDown(t){if(console.log("touch start"),this.isTouch=!0,t.touches.length>1)return this.touch.pinch.x=t.touches[0].pageX-t.touches[1].pageX,this.touch.pinch.y=t.touches[0].pageY-t.touches[1].pageY,void(this.touch.pinch.start=Math.sqrt(this.touch.pinch.x*this.touch.pinch.x+this.touch.pinch.y*this.touch.pinch.y))}touchUp(t){console.log("touch end"),this.isTouch=!1,this.isPinch=!0}touchMove(t){if(this.isTouch)return console.log("touch move"),t.touches.length>1?(this.touch.pinch.x=t.touches[0].pageX-t.touches[1].pageX,this.touch.pinch.y=t.touches[0].pageY-t.touches[1].pageY,this.touch.pinch.end=Math.sqrt(this.touch.pinch.x*this.touch.pinch.x+this.touch.pinch.y*this.touch.pinch.y),this.touch.pinch.zoom=this.touch.pinch.start/this.touch.pinch.end,console.log("pinch zoom",this.touch.pinch.zoom),void(this.isPinch=!0)):void 0}}t.Desktop=h,t.Mobile=i,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS10b3VjaC1pbnRlcmFjdGlvbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2NvcmUvRGVza3RvcC5qcyIsIi4uL3NyYy9jb3JlL01vYmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVza3RvcCB7XG4gICAgIFxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudCB8fCB3aW5kb3c7XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudG91Y2ggPSB7XG4gICAgICAgICAgICBkZWx0YSA6IHt9LFxuICAgICAgICAgICAgbW92ZSAgOiB7fSxcbiAgICAgICAgICAgIHBpdGNoIDogMCxcbiAgICAgICAgICAgIHlhdyAgIDogMFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNlVXAgICA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNlTW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG5cbiAgICBpbml0KCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbml0Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bik7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3VzZURvd24oZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbW91c2UgZG93bicpO1xuXG4gICAgICAgIHRoaXMuaXNUb3VjaCAgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudG91Y2gubW92ZS54ID0gZS5zY3JlZW5YO1xuICAgICAgICB0aGlzLnRvdWNoLm1vdmUueSA9IGUuc2NyZWVuWTtcbiAgICB9XG5cbiAgICBtb3VzZVVwKGUpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbW91c2UgdXAnKTtcblxuICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcblxuICAgIH1cblxuICAgIG1vdXNlTW92ZShlKXtcbiAgICAgICAgaWYoIXRoaXMuaXNUb3VjaCkgcmV0dXJuO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbW91c2UgbW92ZScpO1xuXG4gICAgICAgIGxldCBzY3JlZW4gPSB7XG4gICAgICAgICAgICB3aWR0aCAgOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKHRoaXMuZWxlbWVudCAhPT0gd2luZG93KSBzY3JlZW4gPSB7XG4gICAgICAgICAgICB3aWR0aCAgOiB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgOiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLnRvdWNoLmRlbHRhID0ge1xuICAgICAgICAgICAgeCA6IGUuc2NyZWVuWCAtIHRoaXMudG91Y2gubW92ZS54LFxuICAgICAgICAgICAgeSA6IGUuc2NyZWVuWSAtIHRoaXMudG91Y2gubW92ZS55XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2RlbHRhJywgdGhpcy50b3VjaC5kZWx0YSk7XG5cbiAgICAgICAgdGhpcy50b3VjaC5tb3ZlID0ge1xuICAgICAgICAgICAgeCA6IGUuc2NyZWVuWCxcbiAgICAgICAgICAgIHkgOiBlLnNjcmVlbllcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbW92ZSAnLCB0aGlzLnRvdWNoLm1vdmUpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzY3JlZW4gJywgc2NyZWVuKVxuXG4gICAgICAgIGxldCBcbiAgICAgICAgICAgIGZvdiAgICA9IDQ1LFxuICAgICAgICAgICAgYXNwZWN0ID0gc2NyZWVuLndpZHRoIC8gc2NyZWVuLmhlaWdodCxcbiAgICAgICAgICAgIHJhZGlhbiA9IE1hdGguUEkvMTgwLFxuICAgICAgICAgICAgaGFsZiAgID0gTWF0aC5QSS8yO1xuXG4gICAgICAgIHRoaXMudG91Y2gueWF3ICAgKz0gdGhpcy50b3VjaC5kZWx0YS54IC8gc2NyZWVuLndpZHRoICogZm92ICogYXNwZWN0ICogcmFkaWFuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50b3VjaC5waXRjaCArPSB0aGlzLnRvdWNoLmRlbHRhLnkgLyBzY3JlZW4uaGVpZ2h0ICogZm92ICogcmFkaWFuO1xuICAgICAgICB0aGlzLnRvdWNoLnBpdGNoICA9IE1hdGgubWF4KC1oYWxmLCBNYXRoLm1pbihoYWxmLCB0aGlzLnRvdWNoLnBpdGNoKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3kgeWF3JywgdGhpcy50b3VjaC55YXcpO1xuICAgICAgICBjb25zb2xlLmxvZygneCBwaXRjaCcsIHRoaXMudG91Y2gucGl0Y2gpO1xuICAgIH1cblxufVxuIiwiZXhwb3J0IGNsYXNzIE1vYmlsZSB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCl7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudCB8fCB3aW5kb3c7XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGluY2ggPSBmYWxzZTtcbiBcbiAgICAgICAgdGhpcy50b3VjaCA9IHtcbiAgICAgICAgICAgIGRlbHRhIDoge30sXG4gICAgICAgICAgICBtb3ZlICA6IHt9LFxuICAgICAgICAgICAgcGluY2ggOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudG91Y2hEb3duID0gdGhpcy50b3VjaERvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b3VjaFVwICAgPSB0aGlzLnRvdWNoVXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b3VjaE1vdmUgPSB0aGlzLnRvdWNoTW92ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpOyAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgaW5pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCcpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hEb3duKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoVXApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy50b3VjaE1vdmUpO1xuXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlOyAgICAgICAgXG5cbiAgICB9XG5cbiAgICB0b3VjaERvd24oZSl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZygndG91Y2ggc3RhcnQnKTtcblxuICAgICAgICB0aGlzLmlzVG91Y2ggPSB0cnVlO1xuXG4gICAgICAgIGlmKGUudG91Y2hlcy5sZW5ndGggPiAxKXtcblxuICAgICAgICAgICAgdGhpcy50b3VjaC5waW5jaC54ID0gZS50b3VjaGVzWzBdLnBhZ2VYIC0gZS50b3VjaGVzWzFdLnBhZ2VYO1xuICAgICAgICAgICAgdGhpcy50b3VjaC5waW5jaC55ID0gZS50b3VjaGVzWzBdLnBhZ2VZIC0gZS50b3VjaGVzWzFdLnBhZ2VZO1xuIFxuICAgICAgICAgICAgdGhpcy50b3VjaC5waW5jaC5zdGFydCA9IE1hdGguc3FydCh0aGlzLnRvdWNoLnBpbmNoLnggKiB0aGlzLnRvdWNoLnBpbmNoLnggKyB0aGlzLnRvdWNoLnBpbmNoLnkgKiB0aGlzLnRvdWNoLnBpbmNoLnkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3BpbmNoIHN0YXJ0JyAsdGhpcy50b3VjaC5waW5jaC5zdGFydCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICB0b3VjaFVwKGUpeyBcbiAgICAgICAgY29uc29sZS5sb2coJ3RvdWNoIGVuZCcpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQaW5jaCA9IHRydWU7XG4gICAgfVxuXG4gICAgdG91Y2hNb3ZlKGUpe1xuICAgICAgICBpZighdGhpcy5pc1RvdWNoKSByZXR1cm47ICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b3VjaCBtb3ZlJyk7XG5cbiAgICAgICAgaWYoZS50b3VjaGVzLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRvdWNoLnBpbmNoLnggPSBlLnRvdWNoZXNbMF0ucGFnZVggLSBlLnRvdWNoZXNbMV0ucGFnZVg7XG4gICAgICAgICAgICB0aGlzLnRvdWNoLnBpbmNoLnkgPSBlLnRvdWNoZXNbMF0ucGFnZVkgLSBlLnRvdWNoZXNbMV0ucGFnZVk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncGluY2ggJyAsdGhpcy50b3VjaC5waW5jaCk7XG5cbiAgICAgICAgICAgIHRoaXMudG91Y2gucGluY2guZW5kID0gTWF0aC5zcXJ0KHRoaXMudG91Y2gucGluY2gueCAqIHRoaXMudG91Y2gucGluY2gueCArIHRoaXMudG91Y2gucGluY2gueSAqIHRoaXMudG91Y2gucGluY2gueSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncGluY2ggZW5kICcgLHRoaXMudG91Y2gucGluY2guZW5kKTtcblxuXG4gICAgICAgICAgICB0aGlzLnRvdWNoLnBpbmNoLnpvb20gPSB0aGlzLnRvdWNoLnBpbmNoLnN0YXJ0IC8gdGhpcy50b3VjaC5waW5jaC5lbmQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGluY2ggem9vbScsIHRoaXMudG91Y2gucGluY2guem9vbSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaXNQaW5jaCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG4gICJdLCJuYW1lcyI6WyJEZXNrdG9wIiwiW29iamVjdCBPYmplY3RdIiwiZWxlbWVudCIsInRoaXMiLCJ3aW5kb3ciLCJpc1RvdWNoIiwidG91Y2giLCJkZWx0YSIsIm1vdmUiLCJwaXRjaCIsInlhdyIsIm1vdXNlRG93biIsImJpbmQiLCJtb3VzZVVwIiwibW91c2VNb3ZlIiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29uc29sZSIsImxvZyIsIngiLCJzY3JlZW5YIiwieSIsInNjcmVlblkiLCJzY3JlZW4iLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiYXNwZWN0IiwicmFkaWFuIiwiTWF0aCIsIlBJIiwiaGFsZiIsIm1heCIsIm1pbiIsIk1vYmlsZSIsImlzUGluY2giLCJwaW5jaCIsInRvdWNoRG93biIsInRvdWNoVXAiLCJ0b3VjaE1vdmUiLCJ0b3VjaGVzIiwibGVuZ3RoIiwicGFnZVgiLCJwYWdlWSIsInN0YXJ0Iiwic3FydCIsImVuZCIsInpvb20iXSwibWFwcGluZ3MiOiJxTkFBYUEsRUFFVEMsWUFBWUMsR0FFUkMsS0FBS0QsUUFBVUEsR0FBV0UsT0FDMUJELEtBQUtFLFNBQVUsRUFFZkYsS0FBS0csT0FDREMsU0FDQUMsUUFDQUMsTUFBUSxFQUNSQyxJQUFRLEdBR1pQLEtBQUtRLFVBQVlS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
