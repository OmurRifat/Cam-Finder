import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['Buyers'],
        queryFn: async () => {
            const res = await fetch('https://cam-finder-server.vercel.app/user/all-buyers');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (email) => {
        axios.delete(`https://cam-finder-server.vercel.app/user/all-buyers/${email}`)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Sucessfully Deleted.")
                    refetch();
                }

            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers?.map((Buyer, i) => <tr
                                key={ i }
                            >
                                <th>{ i + 1 }</th>
                                <td>{ Buyer.name }</td>
                                <td>{ Buyer.email }</td>
                                <td>
                                    <button className='btn btn-primary btn-outline' onClick={ () => handleDelete(Buyer.email) }>X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;