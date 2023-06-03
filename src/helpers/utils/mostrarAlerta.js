import Swal from "sweetalert2"

export default function mostrarAlerta(title, text, icon) {
   Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: '#FFCEBA'
   })
}
