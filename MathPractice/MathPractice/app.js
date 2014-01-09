/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
var AdditionProblem = (function () {
    function AdditionProblem(element) {
        var _this = this;
        var left = Math.floor(Math.random() * 25);
        var right = Math.floor(Math.random() * 25);
        var tmplate = "${left} + ${right} = ";

        var renderedProblem = $.tmpl(tmplate, this);

        this.correctAnswer = left + right;

        var paragraph = document.createElement('p');
        renderedProblem.appendTo(paragraph);

        // not using JQuery here because the rendered problem
        // is not in the DOM yet.
        this.txt = document.createElement('input');
        this.txt.type = 'text';
        paragraph.appendChild(this.txt);

        var button = document.createElement('input');
        this.msg = document.createElement('span');
        button.type = 'button';
        button.value = "Check Answer";
        button.onclick = function () {
            return _this.checkAnswer();
        };
        paragraph.appendChild(button);
        paragraph.appendChild(this.msg);

        element.append(paragraph);
    }
    AdditionProblem.prototype.checkAnswer = function () {
        if (parseInt(this.txt.value) == this.correctAnswer)
            this.msg.innerHTML = "You are correct";
        else
            this.msg.innerHTML = "Please try again";
    };
    return AdditionProblem;
})();

$(document).ready(function () {
    var el = $('#content');
    var button = $("<input></input>").val("Create New Problem").attr("type", "button").bind("click", function () {
        var problem = new AdditionProblem(el);
    });
    el.append(button);
});
//# sourceMappingURL=app.js.map
