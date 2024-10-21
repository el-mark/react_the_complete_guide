function handleTimeout() {
    console.log("Timed out");
}

const handleTimeout2 = () => {
    console.log("Timed out ... again!");
}

setTimeout(handleTimeout);

function greeter(greetFn) {
    greetFn();
}

greetFn(() => console.log("hi"));
