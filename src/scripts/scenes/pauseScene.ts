import ExampleObject from '../objects/exampleObject';

export default class PauseScene extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'PauseScene' });
    }

    create() {
        this.add.image(0, 0, "pause");
    }

    init() {

    }

    update() {
    }
}
