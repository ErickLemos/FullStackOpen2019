const object = {
    variableOne: 'example',
    variableTwo: 2,
    variableThree: {
        one: 1,
        two: 2
    }
};

console.log(object);

object['newVariable'] = 'newVariable';
console.log('==============');
console.log(object);
