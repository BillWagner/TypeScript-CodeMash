/// <reference path="Scripts/typings/jquery/jquery.d.ts" />

class AdditionProblem {

    constructor(element: JQuery) {
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
