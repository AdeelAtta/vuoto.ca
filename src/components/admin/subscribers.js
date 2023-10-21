import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { URL } from '@/utils/constants';

const Subscribers = () => {

    const [emails, setEmails] = useState([])


    const sendEmail = () => {
        const emailsList = emails.map(subscriber => subscriber.email)
        const recipients = emailsList.join(',');
        const mailtoLink = `mailto:${recipients}`;
        window.location.href = mailtoLink;
    }


    async function fetchEmails() {
        const response = await fetch(`${URL}api/newsletter/getnewsletter`)
        if (response.ok) {
            const data = await response.json();
            const emailsList = data.newsLetter;
            emailsList?.reverse()
            setEmails([...emailsList])

        } else {
            toast.error('SERVER ERROR: Subscribed Emails Fetching Failed!');
        }
    }


    useEffect(() => {

        fetchEmails();

    }, [])



    return (
        <div className="bg-red p-4 rounded-md mt-4 ml-auto mr-auto mt-10 max-w-[500px]">
            <h2 className="text-gray-500 text-lg font-bold text-2xl pb-8 text-center ">Newsletters Subscribers Email</h2>
            <div className="my-1"></div>
            <div className="text-right mt-4">
                {emails.length > 0 &&
                    <button className="bg-[#d3ad69] hover: text-white hover:shadow-lg font-semibold py-2 px-4 rounded" onClick={sendEmail}>
                        Send Mail to All
                    </button>
                }
            </div>
            <div className="bg-gradient-to-r from-[#d3ad69] to-[#d3ad69] h-px mb-6 mt-6"></div>
            <table className="w-full table-auto text-sm ">
                <thead>
                    <tr className="text-sm leading-normal">
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light t_golden">Email</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light t_golden text-right">Subscribed On</th>
                    </tr>
                </thead>
                <tbody>

                    {emails.length > 0 && emails.map(subscriber => {


                        const date = new Date(subscriber.createdAt);
                        // Extract the date components (year, month, day)
                        const year = date.getFullYear();
                        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
                        const day = String(date.getDate()).padStart(2, '0');
                        const formattedDate = `${year}-${month}-${day}`;

                        return (
                            <tr key={subscriber.createdAt} className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light">{subscriber.email}</td>
                                <td className="py-2 px-4 border-b border-grey-light text-right">{formattedDate}</td>
                            </tr>
                        )
                    }



                    )}


                </tbody>
            </table>


        </div>
    )
}

export default Subscribers