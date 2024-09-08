// P1 ----->
const height = [167, 190, 120, 165, 137];

function lowNumber (number) {
    let min = number[0];
    for (const i of number) {
        if (i > min) {
            min = i;
        }
    }
    return min;
};

const min = lowNumber(height);
// console.log(min)

const friends = ["rahim", "robin", "rafi", "ron", "rashed"];

function bestFriend (members) {
    let minLen = members[0].length;
    let minMem = members[0];
    for (const member of members) {
        if (member.length < minLen) {
            minMem = member;
        };
    };
    return minMem;
};

const friend1 = bestFriend(friends);
// console.log(friend1)


