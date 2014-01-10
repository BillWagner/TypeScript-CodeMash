module MathPractice {
    export class SubtractionProblem extends MathProblem {
        constructor(element: JQuery) {
            super();

            this.left = Math.floor(Math.random() * 25);
            this.right = Math.floor(Math.random() * 25);
            var tmplate = "${left} - ${right} = ";


            this.correctAnswer = this.left - this.right;

            super.buildHtml(element, tmplate);

        }
    }
} 