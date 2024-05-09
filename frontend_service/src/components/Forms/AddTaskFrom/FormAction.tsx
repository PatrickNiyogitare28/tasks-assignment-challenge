interface Props {
    isLoading: boolean,
    onSubmit: (event:any) => void;
    onCancel: () => void
}
export default function FormAction({isLoading, onSubmit, onCancel}: Props){
    return (
        <div className="w-[30vw] flex">
            <div className="ml-auto flex gap-4">
                <button className="bg-gray-200 text-black p-2 rounded-sm border-2 w-[150px] border-gray-400" onClick={onCancel}>Cancle</button>
                <button className="bg-blue-600 text-white p-2 rounded-sm border-0 w-[150px]" onClick={(event:any) => onSubmit(event)}>{isLoading ? "Submitting..." : "Submit"}</button>
            </div>
        </div>
    )
}