function changeText() {
    let a = document.getElementsByClassName("welcome")[0];

    if (a.innerHTML == "Hello Muhammad Nishmal!") {
        a.innerHTML = "Welcome To Website!!!";
    } else if (a.innerHTML == "Welcome To Website!!!") {
        a.innerHTML = "Good Morning!!";
    } else {
        a.innerHTML = "Thanks!!!";
    }
}
