class rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    console.log(this);
    return area;
  }

  paint() {
    console.log("Paint with color ");
    console.log(this.color);
  }
}

const rect = new rectangle(2, 4, "Yellow");
const area = rect.area();
console.log(area);
