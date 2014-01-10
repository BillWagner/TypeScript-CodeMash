var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MathPractice;
(function (MathPractice) {
    var SubtractionProblem = (function (_super) {
        __extends(SubtractionProblem, _super);
        function SubtractionProblem(element) {
            _super.call(this);

            this.left = Math.floor(Math.random() * 25);
            this.right = Math.floor(Math.random() * 25);
            var tmplate = "${left} - ${right} = ";

            this.correctAnswer = this.left - this.right;

            _super.prototype.buildHtml.call(this, element, tmplate);
        }
        return SubtractionProblem;
    })(MathPractice.MathProblem);
    MathPractice.SubtractionProblem = SubtractionProblem;
})(MathPractice || (MathPractice = {}));
//# sourceMappingURL=SubtractionProblem.js.map
