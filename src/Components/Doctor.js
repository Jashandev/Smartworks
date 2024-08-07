import React, { useContext, useEffect } from 'react';
import { Table, Button } from 'antd';
import API from '../Context/API/api_context'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Modal_Screen from './modal'

function Category() {

    let navigate = useNavigate();
    const Contextdata = useContext(API);
    const { get_Doctor, Doctor, Removedoctor } = Contextdata;


    useEffect(() => {
        get_Doctor();
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
            title: 'E-MAIL',
            width: window.innerWidth >= 769 ? 70 : 20,
            dataIndex: 'email',
            key: 'email',
            align: 'center',
            render: (text) => <Link>{text?.toUpperCase()}</Link>,
        },
        {
            title: 'STUDY',
            width: window.innerWidth >= 769 ? 70 : 20,
            dataIndex: 'study',
            key: 'study',
            align: 'center',
            render: (text) => <Link>{text?.toUpperCase()}</Link>,
        },
        {
            title: 'STATUS',
            width: window.innerWidth >= 769 ? 50 : 10,
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
            width: window.innerWidth >= 769 ? 110 : 30,
            key: '_id',
            dataIndex: '_id',
            fixed: 'center',
            align: 'center',
            render: (_, { _id }) => (
                <>
                    <div className="flex flex-row items-center justify-evenly ">
                        <Button onClick={() => Remove(_id, "remove")} className='w-20' type="primary" danger>Remove</Button>
                        <Modal_Screen id={_id} Addoctor={false}></Modal_Screen>
                    </div>
                </>
            ),
        },
    ];

    function Remove(id) {
        let person = prompt("Are you sure you want to remove this?", "Dr. Summet Saini");
        if (person === "Dr. Summet Saini") {
            Removedoctor(id, "success");
        } else {
            alert("Unauthorized access");
        }
    }


    return (
        <div className='mx-12 z-10'>
            <div className="my-8 px-4 flex items-center">
                <p>Expanding Our Medical Team: Join New Doctors!</p>
                <Modal_Screen Addoctor={true} ></Modal_Screen>
            </div>
            <Table columns={columns} dataSource={Doctor.Doctor} scroll={{ x: 1300, }} />
        </div>
    )
}

export default Category