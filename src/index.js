module.exports = function check(str, bracketsConfig) {
    //let counter = [0];
    //let counterAll = 0;
    const stack = [0];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {

            if (str[i] == bracketsConfig[j][0] && bracketsConfig[j][0] == bracketsConfig[j][1]) {
                if (stack.includes(str[i])) {
                    if (stack.pop() == bracketsConfig[j][0]) {
                        break;
                    } else {
                        return false;
                    }
                } else {
                    stack.push(str[i]);
                    break;
                }
            } else {
                if (str[i] == bracketsConfig[j][0]) {
                    stack.push(str[i]);
                    break;
                }
                if (stack.length != 0 && str[i] == bracketsConfig[j][1]) {
                    if (stack.pop() == bracketsConfig[j][0]) {
                        break;
                    } else return false;
                }
            }
        }
    }
    return stack.length == 1 && stack[0] == 0;
}



//let a = 0; //КОСТЫЛЬ ПОФИКСИТЬ!!!
// for (let i = 0, lenStr = str.length; i < lenStr; i++) {
//     for (let j = 0, lenConfig = bracketsConfig.length; j < lenConfig; j++) {
//         if (str[i] == bracketsConfig[j][0]) {
//             stack.push(bracketsConfig[j][0]);
//         } else {
//             if (str[i] == bracketsConfig[j][1]) {
//                 if (stack.pop() == bracketsConfig[j][1]) {
//                     continue;
//                 } else {
//                     return false;
//                 }
//             }
//         }
//         // if (str[i] == bracketsConfig[j][0]) {
//         //     //counter[j] = 1;
//         // } else if (str[i] == bracketsConfig[j][1]) {
//         //     //counter[j] = -1;
//         // }
//         // if (counterAll < 0) a = 1; //КОСТЫЛЬ ПОФИКСИТЬ!!!
//         // counterAll += counter[j];
//     }
//     // }
//     // if (counterAll == 0 && a != 1) {
//     //     return true;
//     // } else {
//     //     return false;