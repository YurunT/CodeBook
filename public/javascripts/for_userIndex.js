



$(document).ready(function() {
    var $table = $('#table'),
        $button = $('#del');
    $button.click(function () {


        var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
            return row.id;
        });

        console.log(ids);

        if(ids.length==0){
            console.log("0 items selected!")
            alert(
                "Please select items to remove."
            );
            return;
        }

        var cfrm=confirm("Are you sure to remove "+ids.length + "items selected?");
        if (cfrm==true){
            console.log(ids);

            $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            });
        }
    });
});

function selChange() {
    var options =$("#select_account option:selected");
    var op=options.val();
    if(op=="others"){
        $("#input_platform").removeAttr("disabled");
    }else{
        $("#input_platform").attr("disabled","disabled");
        $("#input_platform").val("");
    }
}