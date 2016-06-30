var AlertNS = AlertNS || {};

AlertNS.helpers = {
  showAlert: function(x) {
    console.log('x');
    switch(x) {
      case 0:
        swal("Отлично!", "Успешно добавлено в избранное", "success");
        break;
      case 1:
        swal("Отлично!", "Успешно удалено из избранного", "success");
        break;
      case 2:
        swal("Отлично!", "Обложка пансионата была успешно изменена!", "success");
        break;
      case 3:
        sweetAlert("Упс", "Email или пароль неверный", "error");
        break;
      case 4:
        sweetAlert("Упс", "Что-то вы ввели не то", "error");
        break;
      case 5:
        sweetAlert("Oops...", "Something went wrong!", "error");
        break;
      case 33:
        swal("Good job!", "You clicked the button!", "success");
        break;
        case 322: 
        swal({   
          title: "Are you sure?",   
          text: "Your will not be able to recover this imaginary file!",   
          type: "warning",   
          showCancelButton: true,   
          confirmButtonColor: "#DD6B55",   
          confirmButtonText: "Yes, delete it!",   
          cancelButtonText: "No, cancel plx!",   
          closeOnConfirm: false,   
          closeOnCancel: false 
        }, function(isConfirm){   if (isConfirm) {     swal("Deleted!", "Your imaginary file has been deleted.", "success");   } else {     swal("Cancelled", "Your imaginary file is safe :)", "error");   } });
        break;
    }
  }
 };
