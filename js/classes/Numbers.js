export class Numbers {
  static drawElemLang(context, x, y, angle, color) {
    context.save();
    context.beginPath();
    context.fillStyle = color;
    //     context.fillStyle = "black";
    context.translate(x, y);
    context.rotate(angle);
    context.moveTo(0, 0);
    context.lineTo(3, 3);
    context.lineTo(3, 12);
    context.lineTo(0, 15);
    context.closePath();
    context.fill();
    context.restore();
    context.save();
    context.beginPath();
  }

  static drawElemShort(context, x, y, angle, color) {
    context.save();
    context.beginPath();
    context.fillStyle = color;
    //     context.fillStyle = "black";
    context.translate(x, y);
    context.rotate(angle);
    context.moveTo(2, -1);
    context.lineTo(10, -1);
    context.lineTo(8, 1);
    context.lineTo(4, 1);
    context.closePath();
    context.fill();
    context.restore();
  }
}

export default class Num {
  static numPositions = [300, 316, 332, 348];

  static drawShadowNum(context, x, y, color) {
    Numbers.drawElemLang(context, x, y, 0, color);
    Numbers.drawElemLang(context, x, y + 15, 0, color);
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, color);
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, color);

    Numbers.drawElemShort(context, x, y, 0, color);
    Numbers.drawElemShort(context, x, y + 15, 0, color);
    Numbers.drawElemShort(context, x + 12, y + 15, Math.PI, color);
    Numbers.drawElemShort(context, x + 12, y + 30, Math.PI, color);
  }

  static draw0(context, x, y) {
    Numbers.drawElemLang(context, x, y, 0, "black");
    Numbers.drawElemLang(context, x, y + 15, 0, "black");
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");

    Numbers.drawElemShort(context, x, y, 0, "black");
    Numbers.drawElemShort(context, x + 12, y + 30, Math.PI, "black");
  }

  static draw1(context, x, y) {
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");
  }

  static draw2(context, x, y) {
    Numbers.drawElemShort(context, x, y, 0, "black");
    Numbers.drawElemShort(context, x, y + 15, 0, "black");
    Numbers.drawElemShort(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemShort(context, x + 12, y + 30, Math.PI, "black");
    Numbers.drawElemLang(context, x, y + 15, 0, "black");
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, "black");
  }

  static draw3(context, x, y) {
    Numbers.drawElemShort(context, x, y, 0, "black");
    Numbers.drawElemShort(context, x, y + 15, 0, "black");
    Numbers.drawElemShort(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemShort(context, x + 12, y + 30, Math.PI, "black");
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");
  }
  static draw4(context, x, y) {
    Numbers.drawElemLang(context, x, y, 0, "black");
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");

    Numbers.drawElemShort(context, x, y + 15, 0, "black");
    Numbers.drawElemShort(context, x + 12, y + 15, Math.PI, "black");
  }
  static draw5(context, x, y) {
    Numbers.drawElemLang(context, x, y, 0, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");

    Numbers.drawElemShort(context, x, y, 0, "black");
    Numbers.drawElemShort(context, x, y + 15, 0, "black");
    Numbers.drawElemShort(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemShort(context, x + 12, y + 30, Math.PI, "black");
  }
  static draw6(context, x, y) {
    Numbers.drawElemLang(context, x, y, 0, "black");
    Numbers.drawElemLang(context, x, y + 15, 0, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");

    Numbers.drawElemShort(context, x, y, 0, "black");
    Numbers.drawElemShort(context, x, y + 15, 0, "black");
    Numbers.drawElemShort(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemShort(context, x + 12, y + 30, Math.PI, "black");
  }
  static draw7(context, x, y) {
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");

    Numbers.drawElemShort(context, x, y, 0, "black");
  }
  static draw8(context, x, y) {
    Numbers.drawElemLang(context, x, y, 0, "black");
    Numbers.drawElemLang(context, x, y + 15, 0, "black");
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");

    Numbers.drawElemShort(context, x, y, 0, "black");
    Numbers.drawElemShort(context, x, y + 15, 0, "black");
    Numbers.drawElemShort(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemShort(context, x + 12, y + 30, Math.PI, "black");
  }
  static draw9(context, x, y) {
    Numbers.drawElemLang(context, x, y, 0, "black");
    Numbers.drawElemLang(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemLang(context, x + 12, y + 30, Math.PI, "black");

    Numbers.drawElemShort(context, x, y, 0, "black");
    Numbers.drawElemShort(context, x, y + 15, 0, "black");
    Numbers.drawElemShort(context, x + 12, y + 15, Math.PI, "black");
    Numbers.drawElemShort(context, x + 12, y + 30, Math.PI, "black");
  }

  static numbersVorCaunter = [
    Num.draw0,
    Num.draw1,
    Num.draw2,
    Num.draw3,
    Num.draw4,
    Num.draw5,
    Num.draw6,
    Num.draw7,
    Num.draw8,
    Num.draw9,
  ];
}
