$(document).ready(
    autoWidth()
)

function autoWidth(){
    $("#share-box").width($("#post-detail").width()+"px")
    $("#share-box").height(($("#profile-container").height()-5)+"px")
}

$(window).on('resize',autoWidth);