export const sortByField = (list, field, dir) => {
    return list.sort((a,b) => {

        //specify compare function with variation based on direction param
        if(a[field] > b[field]) return (dir === 'asc')? 1 : -1;
        if(a[field] < b[field]) return (dir === 'asc')? -1 : 1;
        if(a[field] === b[field]) return 0;
        return 0;
    })
}