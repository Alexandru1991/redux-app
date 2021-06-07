 const increment = (id) => {
    return {
        type:"INCREMENT",
        payload:{id}
    };
};
const decrement = (id) => {
    return {
        type:"DECREMENT",
        payload:{id}
    };
};
export {increment , decrement};