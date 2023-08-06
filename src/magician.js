import AtkMath from './math';

export default class Magician extends AtkMath {
  constructor(name, dist) {
    super();
    this.name = name;
    this.rawAttack = 100;
    this.type = 'Magician';
    this.dist = dist;
  }
}
