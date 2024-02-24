export default class Color {
  static background = "gray";
  static box = {
    basic: "#d9ad9f",
    light1: "#efd5ce",
    light2: "#e8c2b7",
    dark: "#ce9b8c",
  };

  static screen = {
    light: "#e0e0e0",
    middle: "#e0e2e0",
    dark: "#cdd3cd",
    shadow: "#b9c9b9",
  };

  static button = {
    light: "#c2cec2",
    dark: "#a4ada4",
  };

  static shadow = "rgb(164, 173, 164, 0.6)";
  static bank = "#ce741a";
  static house = ["#a00808", "grey"];
}

export class LinearGradient {
  constructor(context, start, size, color) {
    this.context = context;
    this.start = start;
    this.size = size;
    this.color = color;
  }

  drawGradient() {
    const gradient = this.context.createLinearGradient(
      this.start[0],
      this.start[1],
      this.size[0],
      this.size[1]
    );
    gradient.addColorStop(0, this.color[0]);
    gradient.addColorStop(0.5, this.color[1]);
    gradient.addColorStop(1, this.color[2]);
    return gradient;
  }
}

export class RadialGradient {
  constructor(context, start, end, color) {
    this.context = context;
    this.start = start;
    this.end = end;
    this.color = color;
  }
  draw() {
    const gradient = this.context.createRadialGradient(
      this.start[0],
      this.start[1],
      this.start[2],
      this.end[0],
      this.end[1],
      this.end[2]
    );
    gradient.addColorStop(0, this.color[0]);
    gradient.addColorStop(1, this.color[1]);
    return gradient;
  }
}
