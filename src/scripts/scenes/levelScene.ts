import ExampleObject from '../objects/exampleObject';

export default class LevelScene extends Phaser.Scene {
    private exampleObject: ExampleObject;
    levelNumber: number;

    constructor(levelNumber: number) {
        super({ key: 'LevelScene' + levelNumber });
        this.levelNumber = levelNumber;
    }

    create() {
        this.add.image(0, 0, "level" + this.levelNumber);
    }

    init() {

    }

    update() {
    }
}
