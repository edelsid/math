import Magician from '../magician';
import Daemon from '../daemon';

const dataList = [
  ['Morren', 2, 90],
  ['Morren', 3, 80],
  ['Morren', 4, 70],
];

const handler = test.each(dataList);

handler('testing distanced dmg number', (name, dist, expected) => {
  const char = new Magician(name, dist);
  expect(char.attack).toBe(expected);
});

const dataList1 = [
  ['Fafnir', 2, 85],
  ['Fafnir', 3, 72.07518749639422],
  ['Fafnir', 4, 60],
];

const handler1 = test.each(dataList1);

handler1('testing dizzy dmg number', (name, dist, expected) => {
  const char = new Daemon(name, dist);
  expect(char.stoned).toBe(expected);
});

test('normal dmg test', () => {
  const char = new Magician('Morren', 1);
  expect(char.attack).toBe(100);
});

test('error test', () => {
  const char = new Magician('Morren', 7);
  expect(() => char.attack).toThrow('Расстояние слишком велико');
});

test('setter change 1', () => {
  const char = new Magician('Morren', 1);
  char.attack = 2;
  expect(char.attack).toBe(90);
});

test('setter change 2', () => {
  const char = new Daemon('Fafnir', 1);
  char.stoned = 3;
  expect(char.stoned).toBe(72.07518749639422);
});
