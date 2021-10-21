import {FiSend, MdClose} from "react-icons/all";
import {useState} from "react";

const NewEmailModal = ({close, handlePost}) => {

    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        handlePost({
            sender,
            recipient,
            subject,
            message,
        });

        setSender('');
        setRecipient('');
        setSubject('');
        setMessage('');
        close();
    }

    return (
        <div className="flex flex-col absolute bg-gray-800 bottom-0 right-6 h-550 w-650 rounded-t-2xl">
            <div className="flex justify-between items-center bg-gray-700 rounded-t-2xl pr-4">
                <p className="text-gray-100 px-8 py-2 font-bold tracking-wide">New Email</p>
                <div onClick={close} className="cursor-pointer ">
                    <MdClose className="text-gray-400 hover:text-blue-600 h-6 w-6"/>
                </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-full mt-6 px-6 h-full">
                <div className="flex w-full">
                    <input
                        className="bg-gray-700 mr-6 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-full px-4 py-2 w-full"
                        type="text"
                        placeholder="To"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                    />
                    <input
                        className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-full px-4 py-2 w-full"
                        type="text"
                        placeholder="From"
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                    />
                </div>
                <input
                    className="bg-gray-700 mt-6 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-full px-4 py-2 w-full"
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    className="bg-gray-700 h-full mt-6 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-2xl px-4 py-2 w-full"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type='submit'
                    className='flex justify-center items-center bg-blue-600 w-full my-4 rounded-full text-gray-100 py-2 font-bold'>
                    Send
                    <FiSend className="ml-1"/>
                </button>

            </form>
        </div>
    );
}
export default NewEmailModal;