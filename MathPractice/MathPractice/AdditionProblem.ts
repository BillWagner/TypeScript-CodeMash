/// <reference path="Scripts/typings/jquery/jquery.d.ts" />

interface JQueryStatic {
    tmpl(tmplate: string, data: any): JQuery;
}

module MathPractice {
    export class AdditionProblem extends MathProblem {

        left: number;
        right: number;

        constructor(element: JQuery) {
            super();
            this.left = Math.floor(Math.random() * 25);
            this.right = Math.floor(Math.random() * 25);
            var tmplate = "${left} + ${right} = ";


            this.correctAnswer = this.left + this.right;

            super.buildHtml(element, tmplate);
        }
    }
}
 