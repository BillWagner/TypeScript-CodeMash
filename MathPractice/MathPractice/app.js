/// <reference path="scripts/typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    var index = 0;
    var el = $('#content');
    var button = $("<input></input>").val("Create New Problem").attr("type", "button").bind("click", function () {
        var problem = (index++ % 2 === 1) ? new MathPractice.AdditionProblem(el) : new MathPractice.SubtractionProblem(el);
    });
    el.append(button);
});
//# sourceMappingURL=app.js.map
