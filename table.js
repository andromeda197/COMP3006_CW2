$(document).ready(function(){
    $().on("click", "tr[data-href]", function(){
        window.location.href = this.dataset.href;
    });
});

module.exports.ready=this.ready();