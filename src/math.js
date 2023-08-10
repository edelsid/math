export default class AtkMath {
  get attack() {
    if (this.dist === 1) {
      return this.rawAttack;
    } if (this.dist > 1 && this.dist <= 5) {
      return this.rawAttack * ((100 - ((this.dist - 1) * 10)) / 100);
    }
    throw new Error('Расстояние слишком велико');
  }

  set attack(value) {
    this.dist = value;
  }

  get stoned() {
    const stoned = this.attack - Math.log2(this.dist) * 5;
    return stoned;
  }

  set stoned(value) {
    this.dist = value;
  }
}
