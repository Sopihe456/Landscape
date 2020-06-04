import {AbstractForm} from './AbstractForm.js';

class Ballon extends AbstractForm {

  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 0, pesanteur = false) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur);
  }

  draw(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.lineWidth = this.strokeWidth;

    var xDepart = Math.random()*window.innerWidth;
    var yDepart = Math.random()*window.innerHeight/1.25;
    ctx.moveTo(xDepart, yDepart);
    yDepart-=50;
    ctx.lineTo(xDepart,yDepart);
    ctx.arcTo(xDepart+100, yDepart-50, xDepart-18.335, yDepart-100, 50);
    ctx.moveTo(xDepart, yDepart);
    ctx.arcTo(xDepart-100, yDepart-50, xDepart+18.335, yDepart-100, 50);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  static buildForms() {
    function randomColor() {
      let backColor = ['#'];
      for (let i=1; i<7; i++) {
        const colorCodeRepl = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let code = Math.random()*15;
        code = Math.round(code);
        backColor.push(colorCodeRepl[code]);
      }
      backColor = backColor.join('');
      return backColor;
    }

    let fillColor = randomColor();
    const leBallon = new Ballon(0, 0,window.innerWidth, window.innerHeight, fillColor, '', 1, false);
    const forms = [leBallon];
    return forms;
  }

}

export {Ballon};