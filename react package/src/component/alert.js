
import Swal from 'sweetalert2';
import '../My styles/alert.css';

export const createAlert = async  (type, title,btnConfirm, text = '') => {
  // Same internal logic as before
 let response = false;
    switch (type) {

        case 'confirmation':
            Swal.fire({
  title: title,
  
  showCancelButton: true,
  confirmButtonText: btnConfirm,
  
 
}).then((result) => {

  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    response=true
   
  } 
});
            break;
      case 'info':
        Swal.fire({
          icon: 'info',
          title: title,
          text: text,
        });
        break;
      case 'success':
        Swal.fire({
          icon: 'success',
          title: title,
          text: text,
        });
        break;
      case 'warning':
        Swal.fire({
          icon: 'warning',
          title: title,
          text: text,
        });
        break;
      case 'error':
        Swal.fire({
          icon: 'error',
          title: title,
          text: text,
        });
        break;
      default:
        console.error('Invalid alert type');
    }
    return response
  };





