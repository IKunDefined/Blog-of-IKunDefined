$("#category>.title>button").click(addBox);
$("#content>.title>button").click(addBox);

function addBox() {
    $("#add-box").show();
    var mask = document.createElement("div");
    mask.id = "mask";
    mask.style.height = document.documentElement.clientHeight + "px";
    mask.style.width = document.documentElement.clientWidth + "px";
    document.body.appendChild(mask);
    $("#add-box>a").click(function() {
        clean();
    });
    $(mask).click(function() {
        clean();
    })
    function clean() {
        mask.remove();
        $("#add-box").hide();
    }
}
