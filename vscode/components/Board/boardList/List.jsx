import { useAtom } from 'jotai';
import Link from 'next/link';
import React from 'react'
import curBoardAtom from '../../atoms/curBoardAtom';

const List = (props) => {
    const boards = props.boards;

    const [ _, SetCurBoard] = useAtom(curBoardAtom);

    return (
        <>
            {boards && boards.map(board => (

                <Link href="/ModifyBoard" >
                    <button onClick={() => {
                        SetCurBoard(board.id);
                    }} >

                        <div className='container flex justify-center'>
                            <div className="flex flex-col my-2 ">
                                <div className="w-full">
                                    <div className="border-2 border-gray-200">
                                        <div className="overflow-hidden">
                                            <table className='divide-y divide-green-400'>
                                                <thead className=' bg-gray-50'>
                                                    <tr key={board.id + board.title + board.content} className="hover:bg-neutral-200">
                                                        <th className="px-6 py-3 text-xl text-gray-500">{board.id}</th>
                                                        <td className="px-40 text-xl text-gray-500 py-30">{board.title}</td>
                                                        <td className="px-6 py-2 text-xl text-gray-500">{board.content}</td>
                                                    </tr>
                                                    {/* <tr key={board.id + board.title} className="hover:bg-neutral-200">
                                                    <th className="px-6 py-3 text-xl text-gray-500">{board.id}</th>
                                                    <td>💗<text className='text-healgreen'>[0]</text></td>
                                                    <td className='text-left'><text className='text-deeppink'>거래</text>{board.title}<text className='text-violet'>[0]</text></td>
                                                    <td><text className='text-bermuda'>jellycodes</text></td>
                                                    <td>2022-11-23</td>
                                                    </tr> */}
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <br/>
                </Link>

            ))}
        </>
    )
}

export default List