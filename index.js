$(function () {
    $('#gMonth2').change(function () {
        var month = $(this).val();
        $('#gMonth1').val(month);
    });
});