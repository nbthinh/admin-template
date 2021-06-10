$(document).ready(function () {

    //success toast
    $('#successtoast').click(function () {

        toastr.options = {
            "closeButton": true,
            "debug": true,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "30",
            "hideDuration": "10",
            "timeOut": "50",
            "extendedTimeOut": "10",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr["success"]("Thanks for your support", "Hello BBBootstrap");
    });

});