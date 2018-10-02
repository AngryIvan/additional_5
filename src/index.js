module.exports = function check(str, bracketsConfig) {
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