import ExampleObject from '../objects/exampleObject';

export default class MainMenu extends Phaser.Scene {
  private exampleObject: ExampleObject;

  constructor() {
    super({ key: 'MainMenu' });
  }

  create() {
    this.exampleObject = new ExampleObject(this, 0, 0);
  }

  init() {

  }

  update() {
  }
}
