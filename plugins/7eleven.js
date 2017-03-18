
$(".has-error").hide();
$("#submitBtn").click(function (e) {
    e.preventDefault();

    $.ajax({
        method: 'post',
        url: '/create',
        data: $("#regForm").serialize(),
        dataType: 'json',
        success: function (data) {

            if (data.message) {
                $("#regForm").slideUp('slow');
                $("#form-style-2").hide().fadeIn().html('<p class="text-center" >You are successfully registered.</p>');
            } else {

                $("#formMessage").empty();

                $(".has-error").fadeOut().empty();
                $(".error").remove();
                $.each(data, function (a, b) {

                        $("#"+a).after("<p class='error'>"+b+"</p>");
                        $(".has-error").fadeIn();

                });
                $()
            }
        }
    })
});


