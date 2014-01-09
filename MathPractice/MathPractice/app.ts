/// <reference path="Scripts/typings/jquery/jquery.d.ts" />

class AdditionProblem {

    correctAnswer: number;
    txt: HTMLInputElement;
    msg: HTMLSpanElement;

    constructor(element: JQuery) {
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
        button.onclick = () => this.checkAnswer();
        paragraph.appendChild(button);
        paragraph.appendChild(this.msg);

        element.append(paragraph);
    }

    checkAnswer() {
        if (parseInt(this.txt.value) == this.correctAnswer)
            this.msg.innerHTML = "You are correct";
        else
            this.msg.innerHTML = "Please try again";
    }


}

$(document).ready(() => {
    var el = $('#content');
    var button = $("<input></input>")
        .val("Create New Problem")
        .attr("type", "button")
        .bind("click", function () {
            var problem = new AdditionProblem(el);
        });
    el.append(button);
});
