export const getValue = (key, filterArr, item) => {
    const getKey = (part, obj) =>
        Object.entries(obj).find(([k, v]) => k.startsWith(part))?.[0];
    const getValue = (part, obj) =>
        Object.entries(obj).find(([k, v]) => k.startsWith(part))?.[1];
    let objKey = getKey(key, filterArr);
    let objValue = getValue(key, filterArr);
    let tempFilterArr = { ...filterArr };
    if (objValue.indexOf(item) > -1) {
        const newArr = [...objValue];
        newArr.splice(newArr.indexOf(item), 1);
        tempFilterArr[objKey] = newArr;
    } else {
        const newArr = [...objValue, item];
        tempFilterArr[objKey] = newArr;
    }
    return [tempFilterArr];
};
export const checkFlagFun = (key, filterArr) => {
    const getValue = (part, obj) =>
        Object.entries(obj).find(([k, v]) => k.startsWith(part))?.[1];
    let objValue = getValue(key, filterArr);
    return objValue;
};

export const getUniqueListBy = (arr) => {
    let keys = ["tokenId"];
    const filtered = arr.filter(
        (
            (s) => (o) =>
                ((k) => !s.has(k) && s.add(k))(keys.map((k) => o[k]).join("|"))
        )(new Set())
    );
    console.log("result", filtered);
    return filtered;
};
