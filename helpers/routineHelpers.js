const exerciseTypes = {
    BenchPress: 1,
    ShoulderPress: 2,
    ArnoldPress: 3,
    InclineBenchPress: 4,
    TricepPushDown: 5,
    TricepExtensions: 6,
    LatPullDown: 7,
    BentOverRow: 8,
    ReverseFlys: 9,
    UpRightRow: 10,
    DumbBellCurl: 11,
    HammerCurl: 12,
    ZBarCurl: 13,
    RearSquat: 14,
    DeadLift: 15,
    LegPress: 16,
    FrontSquat: 17,
    HackSquat: 18,
};

const routineBuilder = (id, routine=[]) => {
    return {
        userid: id,
        maxWeight: routine.maxWeight,
        exerciseId: exerciseTypes[routine.exerciseId]
    }
};


const calculateStrengthWeights = weight => {
    const intervals = [.50, .7, .72, .75, .77, .8, .82, .85, .9];
    let repArr = [];

    intervals.forEach(x => {
        const newWeight = x * weight;

        repArr.push(Math.round(newWeight));
    })

    return repArr;
}

const calculateSizeWeights = weight => {
    const intervals = [.50, .7, .72, .74, .76, .78, .8, .82, .84];
    let repArr = [];

    intervals.forEach(x => {
        const newWeight = x * weight;

        repArr.push(Math.round(newWeight));
    })

    return repArr;
}




module.exports = {
  calculateStrengthWeights,
  calculateSizeWeights,
};




































