import './index.css';
import {useEffect, useState} from "react";
import MailList from "./components/MailList";
import Message from "./components/Message";
import {FaPen, MdMarkEmailRead} from "react-icons/all";
import NewEmailModal from "./components/NewEmailModal";
import toast, {Toaster} from 'react-hot-toast';
import Title from "./components/trash/Title";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [activeMessage, setActiveMessage] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [showNewEmailModal, setShowNewEmailModal] = useState(false);


    useEffect(() => {
        async function fetchData() {
            fetchEmails();
        }

        fetchData();
    }, []);

    const fetchEmails = async () => {
        setLoading(true);
        const response = await fetch('http://localhost:3001/emails');
        const data = await response.json();
        setData(data);
        setFilteredList(data);
        setLoading(false);
    }

    const handlePost = async (email) => {
        try {
            await fetch('http://localhost:3001/send', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(email)
            });
            toast.success('Email Sent', {
                style: {
                    borderRadius: '10px',
                    background: '#1F2937',
                    color: '#fff',
                },
                duration: 5000,
            });
            await fetchEmails();
        } catch (error) {
            // You may not like it, but this is peak error handling
            console.log("Something went wrong " + error)
        }
    }

    const selectEmail = (message) => setActiveMessage(message);

    useEffect(() => {
        let emails = data.filter((item) => item.subject.toLowerCase().startsWith(searchInput.toLowerCase()));
        const sortedEmails = emails.sort((a, b) => new Date(b.date) - new Date(a.date));
        setFilteredList(sortedEmails);
        if (sortedEmails.length > 0) setActiveMessage(sortedEmails[0]);
    }, [searchInput, data]);


    return (
        <div className="relative">
            <div className="flex h-screen">
                <div className="pt-3 pl-6 pr-3 flex flex-col bg-gray-800 w-2/5 border-r border-gray-600">
                    <div className="flex items-center  mt-1">
                        <MdMarkEmailRead className="text-blue-600 h-12 w-12 mr-3"/>
                        <Title/>
                    </div>
                    <div className="flex w-full items-center my-6">
                        <input
                            className="mr-4 shadow-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-full px-4 py-2 w-full"
                            type="text"
                            placeholder="Search all emails"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <div
                            onClick={() => setShowNewEmailModal(true)}
                            className="shadow-lg hover:bg-gray-600 rounded-full p-2 ring-1 ring-gray-700 hover:bg-opacity-50 cursor-pointer">
                            <FaPen className="text-blue-600 p-0.5" size={24}/>
                        </div>
                    </div>

                    {!loading && <MailList mail={filteredList} activeId={activeMessage.id} selectEmail={selectEmail}/>}
                    {(!loading && filteredList.length < 1) &&
                    <p className="text-center text-lg text-white">No emails matched your search</p>}
                </div>
                <div className="bg-gray-900 w-3/5">
                    {activeMessage && <Message activeMessage={activeMessage}/>}
                </div>
            </div>
            {showNewEmailModal && <NewEmailModal handlePost={handlePost} close={() => setShowNewEmailModal(false)}/>}
            <Toaster/>
        </div>
    );
}

export default App;
