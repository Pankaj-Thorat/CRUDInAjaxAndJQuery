$(document).ready(function () {
    ShowEmployeeData();

});

function ShowEmployeeData() {
   
    var url = '/Ajax/EmployeeList';
    $.ajax({
        url: url,
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8;',
        success: function (result, statu, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.name + '</td>'; object += '<td>' + item.state + '</td>';
                object += '<td>' + item.city + '</td>';
                object += '<td>' + item.salary + '</td>';
                object += '<td><a href="#" class="btn btn3 ">Edit</a> || <a href="#" class="btn btn3">Delete</a></td>';
                object += '</tr>';
            });
            $('#table_data').html(object);
        },
        error: function () {
            alert("Data cannot fetch !!");
        }
    });
};

$('#btnAddEmployee').click(function () {
    $("#EmployeeModal").modal('show');
})



function AddEmployee() {
    var objData = {
        Name: $('#Name').val(),
        State: $('#State').val(),
        City: $('#City').val(),
        Salary: $('#Salary').val()
    };

    // Check that objData is correctly initialized and accessible

    $.ajax({
        url: '/Ajax/AddEmployee',
        type: 'POST',
        data: objData,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        success: function () {
            alert('Data is saved.');
            ShowEmployeeData();
            HideModalPopUp();
            ClearTextBox();
        },
        error: function () {
            alert("Data cannot be saved!");
        }
    });
}


function HideModalPopUp() {
    $('#EmployeeModal').modal('hide');
};

function ClearTextBox() {
    $('#Name').val(''),
    $('#State').val(''),
    $('#City').val(''),
    $('#Salary').val('')
};