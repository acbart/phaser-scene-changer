import ExampleObject from '../objects/exampleObject';
import { TransitionButton } from '../objects/transitionButton';

export default class MainMenu extends Phaser.Scene {
  private exampleObject: ExampleObject;

  constructor() {
    super({ key: 'MainMenu' });
  }

  init() {

  }

  create() {
    this.add.image(0, 0, "main").setOrigin(0, 0);

    this.add.existing(new TransitionButton(this, this.scale.height / 2, "Start Tutorial", () => {
      this.scene.start("TutorialScene");
    }))
  }

  update() {
  }
}
