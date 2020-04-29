import ExampleObject from '../objects/exampleObject';

export default class TutorialScene extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'TutorialScene' });
    }

    create() {
        this.exampleObject = new ExampleObject(this, 0, 0);
    }

    init() {

    }

    update() {
    }
}
