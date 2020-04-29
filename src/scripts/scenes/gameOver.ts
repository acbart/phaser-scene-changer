import ExampleObject from '../objects/exampleObject';

export default class GameOver extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'GameOver' });
    }

    create() {
        this.exampleObject = new ExampleObject(this, 0, 0);
    }

    init() {

    }

    update() {
    }
}
