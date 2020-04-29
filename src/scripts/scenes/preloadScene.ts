export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {

    this.load.image("main", "assets/img/ada.png");
    this.load.image("pause", "assets/img/potato.png");
    this.load.image("gameOver", "assets/img/soon.png");
    this.load.image("tutorial", "assets/img/whiteboard_corgi.png");
    this.load.image("level1", "assets/img/campus.png");
    this.load.image("level2", "assets/img/east_campus.png");
    this.load.image("level3", "assets/img/trabant.png");
  }

  create() {
    this.scene.start('MainMenu');
  }
}
