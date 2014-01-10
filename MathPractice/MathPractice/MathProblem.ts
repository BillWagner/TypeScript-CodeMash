

module MathPractice {
    export class MathProblem {

        left: number;
        right: number;

        correctAnswer: number;
        txt: HTMLInputElement;
        msg: HTMLSpanElement;

        buildHtml(element: JQuery, tmplate: string) {
            var renderedProblem = $.tmpl(tmplate, this);
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
}
