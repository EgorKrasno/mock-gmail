const Mail = props =>
    <div
        onClick={() => {
            props.selectEmail(props.mail);
        }}
        className={`${props.selected && 'bg-blue-600'} px-6 w-full bg-gray-900 rounded-2xl cursor-pointer hover:bg-blue-800`}>
        <div className="flex flex-col pt-5">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div
                        className={`${props.selected ? 'bg-blue-100' : 'bg-blue-600'} bg-blue-600 flex justify-center items-center h-10 w-10 rounded-full`}>
                        <p className="text-white text-2xl font-bold capitalize">{props.mail.sender.slice(0, 1)}</p>
                    </div>
                    <div className="flex flex-col pl-4">
                        <h1 className="text-white text-sm font-bold">From: {props.mail.sender}</h1>
                        <h1 className="text-white text-sm font-bold">To: {props.mail.recipient}</h1>
                    </div>
                </div>
                <p className="text-white text-sm text-opacity-75">{props.mail.date.slice(0, 10)}</p>

            </div>
            <p className="text-white text-xl font-bold pt-3">{props.mail.subject}</p>
            <p className="text-white text-sm font-bold pt-3 text-opacity-75 pb-5 truncate">{props.mail.message}</p>
        </div>
    </div>

export default Mail;