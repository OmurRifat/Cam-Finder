import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user/all-sellers');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (email) => {
        axios.delete(`http://localhost:5000/user/all-sellers/${email}`)
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
                            <th>Seller Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers?.map((seller, i) => <tr
                                key={ i }
                            >
                                <th>{ i + 1 }</th>
                                <td>{ seller.name }</td>
                                <td>{ seller.email }</td>
                                <td>
                                    <button className='btn btn-primary btn-outline' onClick={ () => handleDelete(seller.email) }>X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;