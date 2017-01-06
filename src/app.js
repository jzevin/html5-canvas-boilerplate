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
      this.ctx.clearRect(rnd.int(0,this.w),0,1,this.h);
      this.ctx.fillRect(0,rnd.int(0,this.h),this.w,1);
    }
  }
}

const rnd = new Random();
const app = new App();
window.onresize = (e)=>{app.sizeCanavs();}
