import React, { useContext, useEffect } from 'react';
import { Table, Button } from 'antd';
import API from '../Context/API/api_context'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Category() {

    let navigate = useNavigate();
    const Contextdata = useContext(API);
    const { get_Testimonials, Testimonials, Remove_Testimonials } = Contextdata;


    useEffect(() => {
        get_Testimonials();
    }, [navigate]);

    const columns = [
        {
            title: 'NAME',
            width: window.innerWidth >= 769 ? 70 : 20,
            dataIndex: 'name',
            key: 'name',
            // fixed: 'left',
            render: (text) => <Link>{text?.toUpperCase()}</Link>,
        },
        {
            title: 'Message',
            width: window.innerWidth >= 769 ? 70 : 50,
            dataIndex: 'massage',
            key: 'massage',
            render: (text) => <Link>{text?.toUpperCase()}</Link>,
        },
        {
            title: 'Rating',
            width: window.innerWidth >= 769 ? 70 : 10,
            dataIndex: 'star',
            key: 'star',
        },
        {
            title: 'STATUS',
            width: window.innerWidth >= 769 ? 50 : 20,
            dataIndex: 'status',
            key: 'status',
            fixed: 'center',
            align: 'center',
            render: (_, { status, _id }) => (
                <>
                    <div className="flex flex-col items-center justify-center md:flex-row">
                        <Button onClick={() => Remove(_id, "Status")} className={`w-24 ${status === true ? "bg-green-400" : "bg-red-400"}`} type="primary">{status === true ? "ACTIVE" : "INACTIVE"}</Button>
                    </div>
                </>
            ),
        },
        {
            title: 'Action',
            width: window.innerWidth >= 769 ? 110 : 20,
            key: '_id',
            dataIndex: '_id',
            fixed: 'center',
            align: 'center',
            render: (_, { _id }) => (
                <>
                    <div className="flex flex-col items-center justify-center md:flex-row">
                        <Button onClick={() => Remove(_id, "remove")} className='w-20' type="primary" danger>Remove</Button>
                    </div>
                </>
            ),
        },
    ];

    function Remove(id , action) {
        let person = prompt("Are you sure you want to remove this?", "Dr. Summet Saini");
        if (person === "Dr. Summet Saini") {
            Remove_Testimonials(id, action)
        } else {
            alert("Unauthorized access");
          }
    }

    return (
        <div className='mx-12 z-10'>
            <Table columns={columns} dataSource={Testimonials.Testimonial} scroll={{ x: 1300, }} />
        </div>
    )
}

export default Category