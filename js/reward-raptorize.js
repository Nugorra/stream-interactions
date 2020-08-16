class RewardRaptorize {
    constructor() {
        var raptor = new Raptor();
        raptor.changeVolume(0.04);
        this.coolDown = new CoolDown(10, () => {
            raptor.trigger();
        });
    }

    activate() {
        this.coolDown.trigger();
    }
}