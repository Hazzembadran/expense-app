import Swal from "sweetalert2";

class Helper {

  static showMessage(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showConfirmButton: false,
      showCancelButton: false,
      timer: 1333
    })
  }
}

export default Helper