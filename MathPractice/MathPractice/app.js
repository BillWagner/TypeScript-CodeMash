/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
var AdditionProblem = (function () {
    function AdditionProblem(element) {
    }
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
