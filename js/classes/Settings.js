export default class Board {
  static canvas = {
    width: 601,
    height: 401,
  };

  roundRect(context, startX, startY, width, height, color, fill, lineWidth) {
    context.strokeStyle = color;
    if (fill) context.fillStyle = color;
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(startX + width, startY);
    context.lineTo(startX + width, startY + height);
    context.lineTo(startX, startY + height);
    context.closePath();

    context.stroke();
    if (fill) context.fill();
  }
}
