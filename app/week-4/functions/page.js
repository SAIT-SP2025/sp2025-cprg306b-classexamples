

export default function FunctionsPage(){

    function helloWorld(username, dayOfWeek) {
        return "Hello World! Welcome back " + username + ". Today is " + dayOfWeek;
    }
    let helloWorld2 = function (username, dayOfWeek) {
        // return "Hello World! Welcome back " + username + ". Today is " + dayOfWeek + ".";
        return `Hello World! Welcome back ${username}. Today is ${dayOfWeek}.`;
    }
    const helloWorld3 = (username) => {
        return `Hello ${username}`;
    }
    const helloWorld4 = (username) => `Hello ${username}`;
    const helloMath = (a, b) => a + b;

    const louder = (textOutputFunc, thisName) => {
        // check to make sure that textOutputFunc is actually a function
        // check to make sure that the function is consistent
        // with higher order logic
        let thisText = textOutputFunc(thisName);
        return thisText.toUpperCase();
    }

    const multiplyBy = (num1) => {
        return (num2) => num1 * num2;
    }

    const double = multiplyBy(2);
    const triple = multiplyBy(3);

    return(
        <main>
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Tuesday")}</p>
            <p>{helloWorld2("Bob", "Wednesday")}</p>
            <p>{helloWorld3("John")}</p>
            <p>{helloWorld4("Jane")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloWorld3, "Robert")}</p>
            <p>{louder(helloWorld2, "Grace")}</p>
            <p>{double(10)}</p>
            <p>{triple(7)}</p>
        </main>
    );
}