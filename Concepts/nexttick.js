function run() {
    process.nextTick(run);
}

run();

setTimeout(() => {
    console.log("timer");
}, 0);

//Nothing prints