var MathPractice;
(function (MathPractice) {
    var MathProblem = (function () {
        function MathProblem() {
        }
        MathProblem.prototype.buildHtml = function (element, tmplate) {
            var _this = this;
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
            button.onclick = function () {
                return _this.checkAnswer();
            };
            paragraph.appendChild(button);
            paragraph.appendChild(this.msg);

            element.append(paragraph);
        };

        MathProblem.prototype.checkAnswer = function () {
            if (parseInt(this.txt.value) == this.correctAnswer)
                this.msg.innerHTML = "You are correct";
            else
                this.msg.innerHTML = "Please try again";
        };
        return MathProblem;
    })();
    MathPractice.MathProblem = MathProblem;
})(MathPractice || (MathPractice = {}));
//# sourceMappingURL=MathProblem.js.map
