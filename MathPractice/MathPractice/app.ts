$(document).ready(() => {
    var el = $('#content');
    var button = $("<input></input>")
        .val("Create New Problem")
        .attr("type", "button")
        .bind("click", function () {
            var problem = new MathPractice.AdditionProblem(el);
        });
    el.append(button);
});
