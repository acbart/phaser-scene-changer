import ExampleObject from '../objects/exampleObject';

export default class MainMenu extends Phaser.Scene {
  private exampleObject: ExampleObject;

  constructor() {
    super({ key: 'MainMenu' });
  }

  create() {
    this.add.image(0, 0, "main");
  }

  init() {

  }

  update() {
  }
}
