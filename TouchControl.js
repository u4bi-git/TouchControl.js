(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.TouchControl = global.TouchControl || {})));
}(this, (function (exports) { 'use strict';

class Desktop {
     
    constructor(element){
        
        this.element = element || window;
        this.isTouch = false;
        this.isMove = false;

        this.touch = {
            delta : {
                x : 0,
                y : 0
            },
            move  : { 
                x : 0,
                y : 0
            },
            pitch : 0.0,
            yaw   : 0.0,
            type  : '',
            direction : {
                north : false,
                south : false,
                east  : false,
                west  : false
            }
        };
        
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp   = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);

        this._gesture = {
            type : '',
            count : 0
        };

        this.init();
    }


    init(){
        // console.log('init');
        this.element.addEventListener('mousedown', this.mouseDown);
        
        window.addEventListener('mouseup', this.mouseUp);
        window.addEventListener('mousemove', this.mouseMove);
        
        this.isTouch = false;
    }

    mouseDown(e){
        // console.log(this);
        // console.log('mouse down');

        this.isTouch  = true;

        this.touch.move.x = e.clientX;
        this.touch.move.y = e.clientY;
    }

    mouseUp(e){
        // console.log('mouse up');

        this.isTouch = false;
        this.isMove  = false;

        this.touch.direction = {
            north : false,
            south : false,
            east  : false,
            west  : false
        };

        this._gesture = {
            type : '',
            count : 0
        };

    }

    mouseMove(e){
        if(!this.isTouch) return;
        this.isMove  = true;
        // console.log('mouse move');

        let screen = {
            width  : window.innerWidth,
            height : window.innerHeight
        };

        if(this.element !== window) screen = {
            width  : this.element.clientWidth,
            height : this.element.clientHeight
        };


        this.touch.delta = {
            x : e.clientX - this.touch.move.x,
            y : e.clientY - this.touch.move.y
        };
       
        this.touch.delta.y > 0 ? ( () => { this.touch.direction.south = true;  this.touch.direction.north = false; } )() : ( ()=> { this.touch.direction.north = true; this.touch.direction.south = false; } )();
        this.touch.delta.x > 0 ? ( () => { this.touch.direction.east  = true;  this.touch.direction.west  = false; } )() : ( ()=> { this.touch.direction.west  = true; this.touch.direction.east  = false; } )();
  
        // console.log('direction', this.touch.direction);
        // console.log('delta', this.touch.delta);

        let 
            typeArr = [],
            type = '';

        Object.keys(this.touch.direction).map( (item) => {
            
            if(this.touch.direction[item]) typeArr.push(item);

        });
        
        if(typeArr.length > 1) type = Math.abs(this.touch.delta.y) > Math.abs(this.touch.delta.x) ? typeArr[0] : typeArr[1];
        
        if(this._gesture.type === type){ 
            this._gesture.count++;
            if(this._gesture.count === 5) this.touch.type = type;
 
        }else this._gesture.count = 0;
        
        this._gesture.type = type;        
    
        this.touch.move = {
            x : e.clientX,
            y : e.clientY
        };

        // console.log('move ', this.touch.move);

        // console.log('screen ', screen)

        let 
            fov    = 45,
            aspect = screen.width / screen.height,
            radian = Math.PI/180,
            half   = Math.PI/2;

        this.touch.yaw   += this.touch.delta.x / screen.width * fov * aspect * radian;
        
        this.touch.pitch += this.touch.delta.y / screen.height * fov * radian;
        this.touch.pitch  = Math.max(-half, Math.min(half, this.touch.pitch));

        // console.log('y yaw', this.touch.yaw);
        // console.log('x pitch', this.touch.pitch);
    }
     
}

class Mobile {
    
    constructor(element){

        this.element = element || window;
        this.isTouch = false;
        this.isMove = false;        
        this.isPinch = false;
 
        this.touch = {
            delta : { 
                x : 0,
                y : 0
            },
            move  : { 
                x : 0,
                y : 0
            },
            pinch : {
                start : 0.0,
                end   : 0.0,
                zoom  : 0.0
            },
            pitch : 0.0,
            yaw   : 0.0,
            type  : '',
            direction : {
                north : false,
                south : false,
                east  : false,
                west  : false
            }                      
        };

        this.touchDown = this.touchDown.bind(this);
        this.touchUp   = this.touchUp.bind(this);
        this.touchMove = this.touchMove.bind(this);
 
        this._gesture = {
            type : '',
            count : 0
        };

        this.init();        
        
    }


    init(){
        // console.log('init');
        this.element.addEventListener('touchstart', this.touchDown);

        window.addEventListener('touchend', this.touchUp);
        window.addEventListener('touchmove', this.touchMove);

        this.isTouch = false;        

    }

    touchDown(e){
        // console.log(this);
        // console.log('touch start');

        this.isTouch = true;

        if(e.touches.length > 1){

            this.touch.pinch.x = e.touches[0].pageX - e.touches[1].pageX;
            this.touch.pinch.y = e.touches[0].pageY - e.touches[1].pageY;
 
            this.touch.pinch.start = Math.sqrt(this.touch.pinch.x * this.touch.pinch.x + this.touch.pinch.y * this.touch.pinch.y);
            // console.log('pinch start' ,this.touch.pinch.start);
            return;
        }
        

        this.touch.move.x = e.touches[0].pageX;
        this.touch.move.y = e.touches[0].pageY;
    }

    touchUp(e){ 
        // console.log('touch end');

        this.isTouch = false;
        this.isMove  = false;
        this.isPinch = false;
        this.touch.direction = {
            north : false,
            south : false,
            east  : false,
            west  : false
        };

        this._gesture = {
            type : '',
            count : 0
        };
                        
    }

    touchMove(e){
        if(!this.isTouch) return;   
        // console.log('touch move');

        if(e.touches.length > 1){
            
            this.touch.pinch.x = e.touches[0].pageX - e.touches[1].pageX;
            this.touch.pinch.y = e.touches[0].pageY - e.touches[1].pageY;
            // console.log('pinch ' ,this.touch.pinch);

            this.touch.pinch.end = Math.sqrt(this.touch.pinch.x * this.touch.pinch.x + this.touch.pinch.y * this.touch.pinch.y);
            // console.log('pinch end ' ,this.touch.pinch.end);


            this.touch.pinch.zoom = this.touch.pinch.start / this.touch.pinch.end;
            // console.log('pinch zoom', this.touch.pinch.zoom);

            this.touch.type = 'pinch';
            this.isPinch = true;
            return;
        }

        this.isMove  = true;

        let screen = {
            width  : window.innerWidth,
            height : window.innerHeight
        };

        if(this.element !== window) screen = {
            width  : this.element.clientWidth,
            height : this.element.clientHeight
        };

        this.touch.delta = {
            x : parseInt(e.touches[0].pageX - this.touch.move.x),
            y : parseInt(e.touches[0].pageY - this.touch.move.y)
        };
 
        this.touch.delta.y > 0 ? ( () => { this.touch.direction.south = true;  this.touch.direction.north = false; } )() : ( ()=> { this.touch.direction.north = true; this.touch.direction.south = false; } )();
        this.touch.delta.x > 0 ? ( () => { this.touch.direction.east  = true;  this.touch.direction.west  = false; } )() : ( ()=> { this.touch.direction.west  = true; this.touch.direction.east  = false; } )();

        // console.log('delta ', this.touch.delta);

        let 
            typeArr = [],
            type = '';

        Object.keys(this.touch.direction).map( (item) => {
            
            if(this.touch.direction[item]) typeArr.push(item);

        });
        
        if(typeArr.length > 1) type = Math.abs(this.touch.delta.y) > Math.abs(this.touch.delta.x) ? typeArr[0] : typeArr[1];

        if(this._gesture.type === type){ 
            this._gesture.count++;
            if(this._gesture.count === 5) this.touch.type = type;

        }else this._gesture.count = 0;
        
        this._gesture.type = type;
    
        this.touch.move = {
            x : e.touches[0].pageX,
            y : e.touches[0].pageY
        };

        // console.log('move ', this.touch.move);        

        // console.log('screen ', screen);

        let 
            fov    = 45,
            aspect = screen.width / screen.height,
            radian = Math.PI/180,
            half   = Math.PI/2;

        this.touch.yaw   += this.touch.delta.x / screen.width * fov * aspect * radian;
        
        this.touch.pitch += this.touch.delta.y / screen.height * fov * radian;
        this.touch.pitch  = Math.max(-half, Math.min(half, this.touch.pitch));

        // console.log('yaw', this.touch.yaw);
        // console.log('pitch', this.touch.pitch);
    }

}

const load = (element) => {

    let 
        dom = element || window;

    if(navigator.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null){ 
        return new Mobile(dom);
    }else{ 
        return new Desktop(dom);
    }

};

exports.Desktop = Desktop;
exports.Mobile = Mobile;
exports.load = load;

Object.defineProperty(exports, '__esModule', { value: true });

})));
