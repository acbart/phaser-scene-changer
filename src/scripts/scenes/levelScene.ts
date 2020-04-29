import ExampleObject from '../objects/exampleObject';
import { TransitionButton } from '../objects/transitionButton';

export default class LevelScene extends Phaser.Scene {
    private exampleObject: ExampleObject;
    levelNumber: number;

    constructor() {
        super({ key: 'LevelScene' });
    }

    init(data) {
        this.levelNumber = data.levelNumber;
    }

    create() {
        this.add.image(0, 0, "level" + this.levelNumber).setOrigin(0, 0);

        this.add.existing(new TransitionButton(this, this.scale.height * 2 / 3, "Level " + this.levelNumber, () => {
            let next = this.levelNumber + 1;
            if (next > 3) {
                this.scene.start("GameOver");
            } else {
                this.scene.start("LevelScene", { levelNumber: next });
            }
        }))

        this.add.existing(new TransitionButton(this, this.scale.height * 3 / 4, "Pause", () => {
            this.scene.launch("PauseScene", { previousScene: this.scene.key });
            this.scene.switch("PauseScene");
        }));
    }

    update() {
    }
}
