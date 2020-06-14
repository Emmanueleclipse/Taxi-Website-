$(document).ready(function () {
    $("#datepicker").datepicker({
        dateFormat: "dd/mm/yy",
        onSelect: function (date, picker) {
            funcCall(date);  //call you function here
        }
    });
})
function funcCall(date) {
    //alert('your function called with date= ' + date);
    console.log(date)
}
