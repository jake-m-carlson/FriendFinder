var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        const friend = req.body;
        const bestFriend = findBestFriend(friendData, friend);
        friendData.push(friend);
        res.json(bestFriend);
    });

    app.post("/api/friends", function (req, res) {
        res.json(friendData);
    });


    // get the best match
    function findBestFriend(friendData, friend) {
        friendData.sort(function (f1, f2) {
            const friend1ScoreDifference = compareScore(f1.scores, friend.scores);
            const friend2ScoreDifference = compareScore(f2.scores, friend.scores);
            return friend1ScoreDifference - friend2ScoreDifference;
        });

        return friendData[0];
    }

    // compare the scores
    function compareScore(score1, score2) {
        let total = 0;
        score1.forEach((score, i) => {
            let diff = math.abs(score1[i] - score2[i]);
            total = total + diff;
        });
        return total;
    }

};