var canva=document.querySelector("canvas");
      width=canva.width=window.innerWidth;
      height=canva.height=window.innerHeight;

var c=canva.getContext("2d");


function distance(x1,y1,x2,y2){
    let xDistance=x2-x1
    let yDistance=y2-y1

    return Math.sqrt(Math.pow(xDistance,2)+Math.pow(yDistance,2))
}

let mouse={
    mx:undefined,
    my:undefined
}

window.addEventListener("mousemove",function(e){
    mouse.mx=e.clientX,
    mouse.my=e.clientY
    console.log(mouse)
})

function Ball(x,y,radius,color){
    this.x=x
    this.y=y
    this.radius=radius
    this.color=color

    this.update=function(){
        this.draw()
    }

    this.draw=function(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle=this.color
        c.fill()
    }

}

var circle1=new Ball(width/2,height/2,100,"black")

var circle2=new Ball(undefined,undefined,40,"lightBlue")


var kan=function(){
    requestAnimationFrame(kan)
    c.clearRect(0,0,width,height)
    circle1.update()
    circle2.x=mouse.mx
    circle2.y=mouse.my
    circle2.update()
    if(distance(circle1.x,circle1.y,circle2.x,circle2.y)<circle2.radius+circle1.radius){
        circle2.color=circle1.color
    }
    else(
        circle2.color = 'lightBlue'
    )
    console.log(distance(circle1.x,circle1.y,circle2.x,circle2.y))
}
kan()
