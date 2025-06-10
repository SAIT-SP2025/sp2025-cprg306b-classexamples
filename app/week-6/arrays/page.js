

export default function ArrayMethodsPage(){

    let basicArray = [1,2,3,4,5];
    basicArray.push(6);
    basicArray.push(7);
    let lastNum = basicArray.pop();
    basicArray.splice(2,2);

    let numbers = [5,3,9,1,4];
    let doubled = numbers.map( (number) => number * 2 );
    let lessThanFive = numbers.filter( (number) => number < 5 );
    let concatNumbers = numbers.concat(doubled);
    let allNumbers = [...numbers,12,16,...doubled];
    // allNumbers.push(20);
    let sum = allNumbers.reduce( (accumulator, currentValue) => accumulator + currentValue , 6);

    const compareFunc = (a,b) => {
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    }

    // let sortedNumbers = allNumbers.sort( compareFunc );

    let sortedNumbers = [...allNumbers];
    sortedNumbers.sort(compareFunc);

    // sortedNumbers.sort( (a,b) => a - b );
    // sortedNumbers.sort();

    return(
        <main className="pl-5">
            <h1>Array Methods</h1>
            <p>{basicArray.join(" | ")}</p>
            <p>{lastNum}</p>
            <p>{numbers.join()}</p>
            <p>{doubled.join()}</p>
            <p>{lessThanFive.join()}</p>
            <p>{concatNumbers.join()}</p>
            <p>{allNumbers.join()}</p>
            <p>{sum}</p>
            <p>{sortedNumbers.join()}</p>
        </main>
    );
}