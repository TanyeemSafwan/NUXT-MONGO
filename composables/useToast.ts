import  { useToast as toasty } from "vue-toastification";

export default function() {
    //save the whole library inside the toast variable and exported it
    const toast = toasty();
    return toast;
}