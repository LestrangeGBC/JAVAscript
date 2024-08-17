const attempts = [120, 150, 160, 201, 203, 180, 202];
const qualificationDistance = 200;
function checkQualification(attempts, qualificationDistance) {
    const sortedAttempts = attempts.sort((a, b) => b - a);
    const bestThree = sortedAttempts.slice(0, 3);
    const averageBest = bestThree.reduce((sum, jump) => sum + jump, 0) / bestThree.length;
    const qualified = averageBest > qualificationDistance;
    return { averageBest, qualified };
}

const result = checkQualification(attempts, qualificationDistance);
console.log(`Среднее значение лучших трёх прыжков: ${result.averageBest}`);
console.log(`Прошёл квалификацию: ${result.qualified}`);
