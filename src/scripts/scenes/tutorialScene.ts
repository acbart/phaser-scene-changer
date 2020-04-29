import ExampleObject from '../objects/exampleObject';

export default class TutorialScene extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'TutorialScene' });
    }

    create() {
        this.add.image(0, 0, "tutorial");
    }

    init() {

    }

    update() {
    }
}
