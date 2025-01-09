import React from 'react'

const sideLinks = [
    { name: "User Management", icon: "/assets/user.png" },
    { name: "Club Management", icon: "/assets/people.png" },
    { name: "Analytics Dashboard", icon: "/assets/group.png" },
    { name: "Verified", icon: "/assets/verify.png" },
]
const Sidebar = () => {
    return (
        <aside className='min-h-screen bg-[#1C1C1C] w-1/4 text-white  
        flex flex-col gap-y-7 border-r border-white/30'>
            <img src="/assets/logo.png" alt="logo" className='w-20 mt-5 mx-auto' />
            {sideLinks.map((links, i) => (
                <div key={i} className={`${links.name === "Club Management" ? "bg-[#C0DC75] text-black" : ""} flex items-center gap-2  p-4`}>
                    <img src={links.icon} alt={links.name} className='w-5' />
                    <p>{links.name}</p>
                </div>
            ))}
        </aside>
    )
}

export default Sidebar
