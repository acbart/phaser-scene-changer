import ExampleObject from '../objects/exampleObject';

export default class LevelScene extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'LevelScene' });
    }

    create() {
        this.exampleObject = new ExampleObject(this, 0, 0);
    }

    init() {

    }

    update() {
    }
}
