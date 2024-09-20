export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'andrew' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
        ...actionInfo, 
        action: {...actionInfo.action, payload: featured},
    };
    next(updatedActionInfo);
}

export const number = (store) => (next) => (action) => {
    let arrayPokeWithNumber = [...action.action.payload] 
    for (let i = 0 ; i < arrayPokeWithNumber.length; i++) {
        arrayPokeWithNumber[i].name = `${[i + 1]} - ${arrayPokeWithNumber[i].name}` 
    }
    const newFeature = {
        ...action,
        action:{...action.action, payload: arrayPokeWithNumber}
    }
    next(newFeature)
}