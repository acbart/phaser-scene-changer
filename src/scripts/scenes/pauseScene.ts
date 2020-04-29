import ExampleObject from '../objects/exampleObject';

export default class PauseScene extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'PauseScene' });
    }

    create() {
        this.exampleObject = new ExampleObject(this, 0, 0);
    }

    init() {

    }

    update() {
    }
}
