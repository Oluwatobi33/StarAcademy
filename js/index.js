let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
const Contact = () => {
    let take1 = document.getElementById("Contact").innerHTML;
    document.getElementById("space").innerHTML = take1
}
const Information = () => {
    let take = document.getElementById("Information").innerHTML;
    document.getElementById("space2").innerHTML = take
}

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}