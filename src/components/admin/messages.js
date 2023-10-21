import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { URL } from '@/utils/constants';



const Messages = () => {


    const [messagesList, setMessagesList] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalValue,setModalValue] = useState({});



    async function fetchMessages() {
        const response = await fetch(`${URL}api/contact/getcontact`)
        if (response.ok) {
            const data = await response.json();
            const messageList = data.contacts;
            messageList?.reverse()
            setMessagesList([...messageList])

        } else {
            toast.error('SERVER ERROR: Contact Messages Fetching Failed!');
        }
    }


    const sendMail = (email) => {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    }



    useEffect(() => {
        fetchMessages()
    }, [])




    const showModal = () => {


        return (

            <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 " id="modal">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <label className="font-medium text-gray-800">Name</label>
                            <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3 cursor-not-allowed" disabled value={modalValue.name} />
                            <label className="font-medium text-gray-800">Email</label>
                            <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3 cursor-not-allowed" disabled value={modalValue.email} />
                            <label className="font-medium text-gray-800">Message</label>
                            <textarea className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3 h-[200px]" disabled value={modalValue.message}  />
                        </div>
                        <div className="bg-gray-200 px-4 py-3 text-right">
                            <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={ ()=> setModal(false) }><i className="fas fa-times"></i> Cancel</button>
                            <button type="button" className="py-2 px-4 bg_golden text-white rounded mr-2" onClick={()=>sendMail(`${modalValue.email}`)}><i className="fas fa-plus"></i>Send Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <h2 className="text-gray-500 text-lg font-bold text-2xl pb-8 text-center ">Contact Form Messages</h2>
                        <div className="my-1"></div>
                        <table className="min-w-full text-left text-sm font-light">
                            <thead
                                className="border-b bg-neutral-400 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Email</th>
                                    <th scope="col" className="px-6 py-4">Message</th>
                                    <th scope="col" className="px-6 py-4">Time</th>
                                    {/* <th scope="col" className="px-6 py-4 text-center">open</th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {messagesList.map((item, index) => {

                                    const date = new Date(item.createdAt);
                                    // Extract the date components (year, month, day)
                                    const year = date.getFullYear();
                                    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
                                    const day = String(date.getDate()).padStart(2, '0');
                                    const hours = String(date.getHours()).padStart(2, '0');
                                    const min = String(date.getMinutes()).padStart(2, '0');
                                    const formattedDate = `${year}-${month}-${day}`;



                                    return <tr key={item._id}
                                        className={`border-b ${index % 2 == 0 ? `bg-neutral-100 ` : `bg-white `}  dark:border-neutral-500 dark:bg-neutral-700`}>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{`${item.message}`.substring(0, 50) + ' ...'} <button onClick={()=> {setModalValue({...item}); setModal(true)}} className=" t_golden rounded mr-2">View more</button></td>
                                        <td className="whitespace-nowrap px-6 py-4">{`${formattedDate}  ${hours}:${min}`}</td>
                                        {/* <td className="whitespace-nowrap px-6 py-4 text-center"><button onClick={()=> {setModalValue({...item}); setModal(true)}} className="py-2 px-4 bg_golden text-white rounded mr-2">Open </button></td> */}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                            
                    {modal && showModal()}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages