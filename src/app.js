import Random from 'tiny-random';

class App {
  constructor() {
    this.ctx = document.getElementById('cnv').getContext('2d');
    this.sizeCanavs();
    console.log(this);
    //kick of looop
    window.requestAnimationFrame((t)=>{
      this.loop(t);
    });
  }
  sizeCanavs(){
    this.w = this.ctx.canvas.width = window.innerWidth;
    this.h = this.ctx.canvas.height = window.innerHeight;
  }
  loop(t){
    window.requestAnimationFrame((t)=>{
      this.loop(t);
    });
    for (var i = 0; i < 99; i++) {
      this.ctx.globalAlpha = rnd.real(0.01,0.5);
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0,rnd.int(0,this.h),this.w,1);
    }
    for (var i = 0; i < 3; i++) {
      this.ctx.globalAlpha = rnd.real(0.01,0.25);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(rnd.int(0,this.w),0,rnd.real(0.0001,10.9),this.h);
    }
  }
}

const rnd = new Random();
const app = new App();
window.onresize = (e)=>{app.sizeCanavs();}
