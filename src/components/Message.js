const Message = ({activeMessage}) => {
    return (
        <div className="flex flex-col p-16 w-full">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex justify-center items-center h-20 w-20 bg-blue-600 rounded-full">
                        <p className="text-white text-5xl font-bold capitalize">{activeMessage.sender.slice(0,1)}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-xl">From: {activeMessage.sender}</p>
                        <p className="text-white text-xl">To: {activeMessage.recipient}</p>
                    </div>
                </div>
                <div className="text-white  text-opacity-75">{activeMessage.date.slice(0,10)}</div>
            </div>

            {/* Message */}
            <div>
                <p className="text-white text-3xl font-bold pt-12">{activeMessage.subject}</p>
                <p className="text-white pt-12">{activeMessage.message}</p>
            </div>
        </div>
    );
}
export default Message;