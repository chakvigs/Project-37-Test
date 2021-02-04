class Contestant {
    constructor() {
        this.index = null;
        this.name = null;
        this.answer = 0;
    }

    getCount() {
        var countRef = database.ref('contestantCount');
        countRef.on("value", (data) => {
            contestantCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            contestantCount: count
        })
    }

    update() {
        var index = "contestants/contestant" + this.index;
        database.ref('index').set({
            name: this.name,
            answer: this.answer
        })
    }

    static getPlayerInfo() {
        var contestantInfo = database.ref('contestants');
        contestantInfo.on("value", (data) => ({
            allContestants: data.val()
        }))
    }
}