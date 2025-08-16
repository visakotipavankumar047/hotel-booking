import React, {useState} from 'react'
import {roomsDummyData} from "../../assets/assets.js";
import Title from "../../components/Title.jsx";

const ListRoom = () => {
    const [rooms, setRooms] = useState(roomsDummyData)
    return (
        <div>
            <Title align={'left'} font={'outfit'} title={'Room Listings'} subTitle={'View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users'} />
            <p className="text-gray-500 mt-8">All Rooms</p>
            <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-50 overflow-y-scroll mt-3">
                <table className="w-full">
                    <thead className={"bg-gray-50"}>
                    <tr>
                        <th className={"py-3 px-4 text-gray-400 font-medium"}>Name</th>
                        <th className={"py-3 px-4 text-gray-400 font-medium"}>Facility</th>
                        <th className={"py-3 px-4 text-gray-400 font-medium"}>Price / Night</th>
                        <th className={"py-3 px-4 text-gray-400 font-medium"}>Actions</th>
                    </tr>
                    </thead>
                    <tbody className={'text-sm'}>
                    {
                        rooms.map((item,index) => (
                            <tr key={index}>
                                <td className={"py-3 px-4 text-gray-700 border-t border-gray-300"}>
                                    {item.roomType}
                                </td>
                                <td className={"py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden"}>
                                    {item.amenities.join(', ')}
                                </td>
                                <td className={"py-3 px-4 text-gray-700 border-t border-gray-300"}>
                                    {item.pricePerNight}
                                </td>
                                <td className={"py-3 px-4 border-t border-gray-300 text-sm text-red-500 text-center"}>
                                    <label className={"relative inline-flex items-center cursor-pointer text-gray-900 gap-3"}>
                                        <input type={"checkbox"} className={"sr-only peer"} checked={item.isAvailable} />
                                        <div className={"w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"}></div>
                                        <span className={"dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"}></span>
                                    </label>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListRoom
