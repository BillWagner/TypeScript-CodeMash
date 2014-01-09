var AdditionProblem = (function () {
    function AdditionProblem(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    AdditionProblem.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.span.innerHTML = new Date().toUTCString();
        }, 500);
    };

    AdditionProblem.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return AdditionProblem;
})();

window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new AdditionProblem(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map
