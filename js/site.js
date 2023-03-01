$(function() {

    $("#btnPrimary").click(function() {
        $("#txtTitle").attr('class', 'text-center py-3 text-primary');
    })

    $("#btnSecondary").click(function() {
        $("#txtTitle").attr('class', 'text-center py-3 text-secondary');
    })

    $("#btnSuccess").click(function() {
        $("#txtTitle").attr('class', 'text-center py-3 text-success');
    })

    $("#btnDanger").click(function() {
        $("#txtTitle").attr('class', 'text-center py-3 text-danger');
    })

    $("#btnWarning").click(function() {
        $("#txtTitle").attr('class', 'text-center py-3 text-warning');
    })

    $("#btnInfo").click(function() {
        $("#txtTitle").attr('class', 'text-center py-3 text-info');
    })

    $("#btnLight").click(function() {
        $("#txtTitle").attr('class', 'text-center py-3 text-light');
    })

    $("#btnDark").click(function() {
        $("#txtTitle").attr('class', 'text-center py-3 text-dark');
    })
    var fs = 6;
    Arttir();
    Eksilt();

    function Arttir() {
        $("#fsA").click(function() {
            if (fs > 1) {
                fs--;
            }

            $("#txtTitle").removeClass('fs-' + (fs + 1)).addClass('fs-' + fs);
        })
    }

    function Eksilt() {
        $("#fsE").click(function() {
            if (fs < 6) {
                fs++;
            }

            $("#txtTitle").removeClass('fs-' + (fs - 1)).addClass('fs-' + fs);
        })
    }

})