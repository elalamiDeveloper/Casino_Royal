import { toast } from 'react-toastify';

// status => success or error or warn
const showToast = (status, message) => {
  toast[status](message, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export default showToast;
