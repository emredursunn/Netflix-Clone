import { Bounce, toast, TypeOptions } from "react-toastify";

export const showToast = (msg:string, type?:TypeOptions) => toast(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
    type:type || "info"
});