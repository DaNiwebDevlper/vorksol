import React from 'react';

const tableData = [
    { image: "/assets/img1.png", clubName: "Athlele Ready", date: "12/12/2021", time: "12:00", distance: "2.5 km", menu: "/assets/menu.png" },
    { image: "/assets/img2.png", clubName: "Club Name", date: "12/12/2021", time: "12:00", distance: "2.5 km", menu: "/assets/menu.png" },
    { image: "/assets/img2.png", clubName: "Club Name", date: "12/12/2021", time: "12:00", distance: "2.5 km", menu: "/assets/menu.png" },
    { image: "/assets/img2.png", clubName: "Club Name", date: "12/12/2021", time: "12:00", distance: "2.5 km", menu: "/assets/menu.png" },
];

const List = () => {
    return (
        <div className='flex flex-col gap-y-5 mt-5'>
            <table className='w-full'>
                <thead>
                    <tr className='text-[#A5A5A5] border-b border-white/30'>
                        <th></th>
                        <th>Club Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Distance</th>
                    </tr>
                </thead>
                <tbody className='text-center space-y-4' >
                    {tableData.map((data, index) => (
                        <tr key={index} className='text-white bg-[#1C1C1C] border border-white/10'>
                            <td className=''><img src={data.image} alt="club1" className='w-[100px]  object-cover' /></td>
                            <td className='align-middle '>{data.clubName}</td>
                            <td className='align-middle '>{data.date}</td>
                            <td className='align-middle '>{data.time}</td>
                            <td className='align-middle '>{data.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;