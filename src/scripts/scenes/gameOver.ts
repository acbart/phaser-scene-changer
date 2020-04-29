import ExampleObject from '../objects/exampleObject';

export default class GameOver extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'GameOver' });
    }

    init() {

    }

    create() {
        this.add.image(0, 0, "gameOver").setOrigin(0, 0);
        this.add.text(this.scale.width / 2, this.scale.height * 2 / 3, "No more game!");
    }

    update() {
    }
}
