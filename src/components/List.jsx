import React from 'react';

const tableData = [
    { image: "/assets/img1.png", clubName: "Athlete Ready", date: "12 June, 2024", time: "06:20", distance: "Deloitte Rotterdam · 12Km", menu: "/assets/menu.png" },
    { image: "/assets/img2.png", clubName: "Athlete Ready", date: "12 June, 2024", time: "06:20", distance: "Deloitte Rotterdam · 12Km", menu: "/assets/menu.png" },
    { image: "/assets/img1.png", clubName: "Athlete Ready", date: "12 June, 2024", time: "06:20", distance: "Deloitte Rotterdam · 12Km", menu: "/assets/menu.png" },
    { image: "/assets/img2.png", clubName: "Athlete Ready", date: "12 June, 2024", time: "06:20", distance: "Deloitte Rotterdam · 12Km", menu: "/assets/menu.png" },
];

const List = () => {
    return (
        <div className="bg-[#111] p-9 my-5 rounded-lg">
            <table className="w-full table-auto">
                <thead>
                    <tr className="text-[#A5A5A5] border-b border-white/30 text-left">
                        <th className="w-[15%]"></th>
                        <th className="py-4">Club Name</th>
                        <th className="py-4">Date</th>
                        <th className="py-4">Time</th>
                        <th className="py-4">Distance</th>

                    </tr>
                </thead>
                <tbody className='text-left space-y-4 ' >
                    {tableData.map((data, index) => (
                        <tr key={index} className='text-white  bg-[#1C1C1C] border-b border-white/10'>
                            <td className=''><img src={data.image} alt="club1" className='w-[100px]  object-cover ml-2' /></td>
                            <td className='align-middle '>{data.clubName}</td>
                            <td className='align-middle '>{data.date}</td>
                            <td className='align-middle '>{data.time}</td>

                            <td className="py-4 flex items-center justify-between pr-9">
                                <span>{data.distance}</span>
                                <img src={data.menu} alt="menu" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
