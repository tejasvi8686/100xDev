
function countDown(n) {
    console.log("Count Down Started");
    for (let i = 0; i <= n; i++) {
        setTimer(n - i, n);
    }
}
function setTimer(s, e) {
    setTimeout(
        (s, e) => {
            if (s == e) console.log(`Times Up ${e - s} sec`);
            else console.log(`Tik tik : ${e - s} sec`);
        },
        s * 1000,
        s,
        e
    );
}
// countDown(5);