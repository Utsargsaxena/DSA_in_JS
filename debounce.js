
function debounce(fn,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args)
        },delay)
    }

}

const search = (query) => {
    console.log('currently' , query)
}
const searchwithdebounce = debounce(search,1000);

searchwithdebounce('i');
searchwithdebounce('i am');
searchwithdebounce('i am testing');
searchwithdebounce('i am testing debounce');
searchwithdebounce('i am testing debounce here.');
