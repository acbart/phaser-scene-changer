import ExampleObject from '../objects/exampleObject';

export default class GameOver extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'GameOver' });
    }

    create() {
        this.add.image(0, 0, "gameOver");
    }

    init() {

    }

    update() {
    }
}
