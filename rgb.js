export class RGB {
  // TODO: support string initialization
  constructor(red = undefined, green = undefined, blue = undefined) {
    this.red = this.#checkColorValue(red);
    this.green = this.#checkColorValue(green);
    this.blue = this.#checkColorValue(blue);
  }

  /**
  * @param {number} color
  */
  #checkColorValue(color) {
    if (color === undefined) return;
    if (color > 255 || color < 0) {
      throw new RangeError(`Invalid color: ${color}, expect value between 0 and 255`);
    }
    return color;
  }
  /**
   * @param {RGB} color 
   */
  nearestColor() {
    let distance = 250000.0;  // 500^2, greatest distance possible
    let nearestColor = new RGB();
    for (const c of RGB.WebColors) {
      const test_red = Math.pow(c.red - this.red, 2)
      const test_green = Math.pow(c.green - this.green, 2)
      const test_blue = Math.pow(c.blue - this.blue, 2)
      const temp = test_red + test_green + test_blue;
      if (temp === 0.0) {
        nearestColor = new RGB(c.red, c.green, c.blue);
        break;
      } else if (temp < distance) {
        distance = temp;
        nearestColor = new RGB(c.red, c.green, c.blue);
      }
    }
    return nearestColor;
  }

  toString() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  }

  static WebColors = [
    new RGB(255, 0, 0),     // Red
    new RGB(0, 255, 0),     // Lime
    new RGB(0, 0, 255),     // Blue
    new RGB(255, 255, 0),   // Yellow
    new RGB(0, 255, 255),   // Cyan
    new RGB(255, 0, 255),   // Magenta
    new RGB(192, 192, 192), // Silver
    new RGB(128, 128, 128), // Gray
    new RGB(128, 0, 0),     // Maroon
    new RGB(128, 128, 0),   // Olive
    new RGB(0, 128, 0),     // Green
    new RGB(128, 0, 128),   // Purple
    new RGB(0, 128, 128),   // Teal
    new RGB(0, 0, 128),     // Navy
    new RGB(255, 165, 0),   // Orange
    new RGB(255, 192, 203), // Pink
    new RGB(245, 245, 220), // Beige
    new RGB(255, 255, 255), // White
    new RGB(0, 0, 0),       // Black
    new RGB(210, 105, 30),  // Chocolate
  ]
}
