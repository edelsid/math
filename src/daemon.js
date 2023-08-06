import AtkMath from './math';

export default class Daemon extends AtkMath {
  constructor(name, dist) {
    super();
    this.name = name;
    this.type = 'Daemon';
    this.rawAttack = 100;
    this.dist = dist;
  }
}
