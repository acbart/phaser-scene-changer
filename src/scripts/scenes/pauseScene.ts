import ExampleObject from '../objects/exampleObject';
import { TransitionButton } from '../objects/transitionButton';

export default class PauseScene extends Phaser.Scene {
    private exampleObject: ExampleObject;
    previousScene: string;

    constructor() {
        super({ key: 'PauseScene' });
    }

    init(data) {
        this.previousScene = data.previousScene;
    }

    create() {
        this.add.image(0, 0, "pause").setOrigin(0, 0);
    }

    update() {
        this.add.existing(new TransitionButton(this, this.scale.height * 3 / 4, "Resume", () => {
            this.scene.stop();
            this.scene.wake(this.previousScene);
        }));
    }
}
