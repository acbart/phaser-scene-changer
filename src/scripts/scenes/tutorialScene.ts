import ExampleObject from '../objects/exampleObject';
import { TransitionButton } from '../objects/transitionButton';
import LevelScene from './levelScene';

export default class TutorialScene extends Phaser.Scene {
    private exampleObject: ExampleObject;

    constructor() {
        super({ key: 'TutorialScene' });
    }

    init() {

    }

    create() {
        this.add.image(0, 0, "tutorial").setOrigin(0, 0);

        this.add.existing(new TransitionButton(this, this.scale.height / 2, "Begin Level 1", () => {
            this.scene.start("LevelScene", { levelNumber: 1 });
        }))
    }

    update() {
    }
}
