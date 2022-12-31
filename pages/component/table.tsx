import React from 'react'

export default function table() {
    return (
        <div>
            <div className="flex flex-row ">
                <button
                    className='w-36 h-12  bg-slate-300 text-slate-900 focus:text-white focus:bg-gradient-to-br focus:from-indigo-900 focus:to-indigo-700 rounded-tl-lg '>
                    Riwayat
                </button>
                <button
                    className='w-36 h-12  bg-slate-300 text-slate-900 focus:text-white focus:bg-gradient-to-br focus:from-indigo-900 focus:to-indigo-700 rounded-tr-lg'>
                    Alergi
                </button>
            </div>

            <div className="overflow-x-auto relative shadow-md">
                <table className="w-auto text-sm text-left text-gray-500">
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Color
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17
                            </th>
                            <td className="py-4 px-6">
                                Sliver
                            </td>
                            <td className="py-4 px-6">
                                Laptop
                            </td>
                            <td className="py-4 px-6">
                                $2999
                            </td>
                            <td className="py-4 px-6 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="py-4 px-6">
                                White
                            </td>
                            <td className="py-4 px-6">
                                Laptop PC
                            </td>
                            <td className="py-4 px-6">
                                $1999
                            </td>
                            <td className="py-4 px-6 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="py-4 px-6">
                                Black
                            </td>
                            <td className="py-4 px-6">
                                Accessories
                            </td>
                            <td className="py-4 px-6">
                                $99
                            </td>
                            <td className="py-4 px-6 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
