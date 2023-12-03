// JS Objects lab 🤩

const employee = {
    name: "effie",
    adress: 254,
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    //create a copy to update destructively
    const newObj = {...obj};

    // assign a new value
    newObj[key] = value;

    return newObj;
}

const newO = updateEmployeeWithKeyAndValue(employee, "name2", "effiecancode");
console.log(newO);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    // using [] notation
    obj[key] = value;

    return obj;
}

const newOb = destructivelyUpdateEmployeeWithKeyAndValue(employee, "adress2", "255");
console.log(newOb);

function deleteFromEmployeeByKey(obj, key) {
    // create a copy
    const newObje = {...obj};

    // do delete
    delete newObje[key];

    // return a new updated obj
    return newObje;

}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
}
