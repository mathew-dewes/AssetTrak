export default function ErrorMessage({message}:
    {message?: string}
){
    return   <p className="mt-2 text-sm text-red-600 dark:text-red-500">{message}</p>
}