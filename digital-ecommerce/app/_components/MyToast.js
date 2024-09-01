import toast from "react-hot-toast"

function MyToast({message , status}) {
    if(status==='success'){
        return toast.success(message)
    }
    else {
    return toast.error(message)
}
}

export default MyToast
