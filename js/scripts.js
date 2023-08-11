/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// function fun1(x) {return Math.sin(x);  }
// function fun2(x) {return Math.cos(3*x);}

  //Toyota 1992 Camry Drag Force Equation
    function fun1(x) {
        return  0.5*0.330*.703*1.202*Math.pow(x,2);
    }

    //Toyota 2014 Prius Drag Force Equation
    function fun2(x) {
        return  0.5*0.260*.576*1.202*Math.pow(x,2);
    }

function drawBoth() {
    var canvas = document.getElementById("canvas");
    if (null==canvas || !canvas.getContext) return;

    var axes={}, ctx=canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
    axes.x0 = canvas.width;  // x0 pixels from  x=0 to right
    //  axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
    axes.y0 = canvas.height; // y0 pixels from top to y=0

    axes.scale = 240;                 // 240 pixels from x=0 to x=1
    //  axes.doNegativeX = true;

       //Plot Title of Graph
    //    ctx.font="60px Arial";
    //    ctx.strokeText("Text", (ctx.width / 2) - 17, (ctx.height / 4) + 8);

    addLabels(ctx); 
    //showAxes(ctx,axes);
    funGraph(ctx,axes,fun1,"rgb(11,153,11)",1); 
    funGraph(ctx,axes,fun2,"rgb(66,44,255)",2);

}

function drawCamry() {
    var canvas = document.getElementById("canvas");
    if (null==canvas || !canvas.getContext) return;

    var axes={}, ctx=canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
    axes.x0 = canvas.width;  // x0 pixels from  x=0 to right
    //  axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
    axes.y0 = canvas.height; // y0 pixels from top to y=0

    axes.scale = 240;                 // 240 pixels from x=0 to x=1
    //  axes.doNegativeX = true;

       //Plot Title of Graph
    //    ctx.font="60px Arial";
    //    ctx.strokeText("Text", (ctx.width / 2) - 17, (ctx.height / 4) + 8);



    addLabels(ctx); 
    //showAxes(ctx,axes);
    funGraph(ctx,axes,fun1,"rgb(11,153,11)",1); 

}

function drawPrius() {
    var canvas = document.getElementById("canvas");
    if (null==canvas || !canvas.getContext) return;

    var axes={}, ctx=canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
    axes.x0 = canvas.width;  // x0 pixels from  x=0 to right
    //  axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
    axes.y0 = canvas.height; // y0 pixels from top to y=0

    axes.scale = 240;                 // 240 pixels from x=0 to x=1
    //  axes.doNegativeX = true;

       //Plot Title of Graph
    //    ctx.font="60px Arial";
    //    ctx.strokeText("Text", (ctx.width / 2) - 17, (ctx.height / 4) + 8);

    addLabels(ctx); 
    //showAxes(ctx,axes);    
    funGraph(ctx,axes,fun2,"rgb(66,44,255)",2);

}


function addLabels(ctx){

       //Plot Title of    
       ctx.font = "1rem Arial";
       /* y axis labels */
       ctx.fillText("Drag Force in Newtons", 2, 20);
       
       /* x axis labels */
       ctx.fillText("Speed: 0 to 240 Km/h", 640, 480-8);

}

function funGraph (ctx,axes,func,color,thick) {
//  var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
 var xx, yy, dx=5.33, x0=axes.x0, y0=axes.y0, scale=axes.scale;
//  var iMax = Math.round((ctx.canvas.width-x0)/dx);
var iMax = Math.round((ctx.canvas.width)/dx)
var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
var xmin=0;
var ymax=480;
 ctx.beginPath();
 ctx.lineWidth = thick;
 ctx.strokeStyle = color;

 for (var i=iMin;i<=iMax;i++) {
  xx = dx*i; yy = scale*func(xx/scale);
//   if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
//   else         ctx.lineTo(x0+xx,y0-yy);

  if (i==iMin) ctx.moveTo(xmin+xx,ymax-yy);
  else         ctx.lineTo(xmin+xx,ymax-yy);
 
 }
  ctx.stroke();


}


function showAxes(ctx,axes) {
//  var x0=axes.x0, w=ctx.canvas.width;
//  var y0=axes.y0, h=ctx.canvas.height;

 var x0=axes.x0, w=ctx.canvas.width;
 var y0=axes.y0, h=ctx.canvas.height;

//  var xmin = axes.doNegativeX ? 0 : x0;

var xmin = 0;
 ctx.beginPath();
 ctx.strokeStyle = "rgb(128,128,128)"; 
//  ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
//  ctx.moveTo(x,0);    ctx.lineTo(x0,h);  // Y axis

 ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
 ctx.moveTo(xmin,0);    ctx.lineTo(xmin,h);  // Y axis

//  ctx.moveTo(0,480); ctx.lineTo(1280,480);  // X axis
//  ctx.moveTo(0,0);    ctx.lineTo(0,480);  // Y axis
 ctx.stroke();
}



    
    // //Toyota 1992 Camry 
    // function fun1(x) {
    //     return  0.5*0.330*.703*1.202*Math.pow(x,2);
    // }

    // //Toyota 2014 Prius 
    // function fun2(x) {
    //     return  0.5*0.260*.576*1.202*Math.pow(x,2);
    // }

    // function draw() {
    // var canvas = document.getElementById("canvas");
    // if (null==canvas || !canvas.getContext) return;

    // var axes={}, ctx=canvas.getContext("2d");
    // axes.x0 = 0.5 + 0.5*canvas.width;  // x0 pixels from left to x=0
    // axes.y0 = 0.5 + 0.5*canvas.height; // y0 pixels from top to y=0
    // axes.scale = 240;                 // 40 pixels from x=0 to x=1
    // axes.doNegativeX = false;

    // showAxes(ctx,axes);
    // funGraph(ctx,axes,fun1,"rgb(11,153,11)",1);
    // funGraph(ctx,axes,fun2,"rgb(66,44,255)",2); 
    // }

    // function funGraph (ctx,axes,func,color,thick) {
    // var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
    // var iMax = Math.round((ctx.canvas.width-x0)/dx);
    // var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
    // ctx.beginPath();
    // ctx.lineWidth = thick;
    // ctx.strokeStyle = color;

    // for (var i=iMin;i<=iMax;i++) {
    // xx = dx*i; yy = scale*func(xx/scale);
    // if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
    // else         ctx.lineTo(x0+xx,y0-yy);
    // }
    // ctx.stroke();
    // }

    // function showAxes(ctx,axes) {
    // var x0=axes.x0, w=ctx.canvas.width;
    // var y0=axes.y0, h=ctx.canvas.height;
    // var xmin = axes.doNegativeX ? 0 : x0;
    // ctx.beginPath();
    // ctx.strokeStyle = "rgb(128,128,128)"; 
    // ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
    // ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
    // ctx.stroke();
    // }