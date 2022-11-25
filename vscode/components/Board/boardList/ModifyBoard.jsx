import { useAtom } from 'jotai'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import curBoardAtom from '../../atoms/curBoardAtom'

const ModifyBoard = () => {

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [curBoard, setCurBoard] = useAtom(curBoardAtom);

    const handleModify = () => {
        const data = {
            id,
            title,
            content,
        }
        console.log(data);
        console.log(curBoard);
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };

        fetch('http://localhost:8090/board', options)
            .then(response => response.json())
            // .then(data => console.log(data))
            .catch(error => console.error('실패', error));
        console.log("handleModify clicked button")
    }

    const handleDelete = () => {
        const data = {
            id: curBoard,
            title,
            content,
        }
        console.log(data);
        console.log(curBoard);
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        fetch(`http://localhost:8090/board?id=${curBoard}`, options)
            .then(response => {
                if (response.ok) { console.log("성공") } else { console.log("실패") }
            })
            .then(response => console.log(response))
            .catch(error => console.error('실패', error));
        console.log("handledelete clicked button")
    }

    useEffect(() => {
        fetch(`http://localhost:8090/board/${curBoard}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setId(data.id);
                setTitle(data.title);
                setContent(data.content);
            })
            .catch(error => console.error(error))
    }, [])


    return (
        <>
            <div className='container flex justify-center mx-auto'>
                <div className="flex flex-col">
                    <div className="w-full">
                        <div>
                            <div className="overflow-hidden">
                                <table className='mx-auto my-20 border-2 border-separate rounded-lg shadow-2xl border-spacing-6 border-neutral-300'>
                                    <thead>
                                        <tr className="px-6 py-2 text-xs text-gray-900"><th className='p-3 text-lg text-center text-neutral-800'>번호</th>
                                            <input type="text" readOnly value={id} onChange={(event) => setId(event.target.value)} className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2" /></tr>

                                        <tr className="px-40 text-xs text-gray-900"><th className='p-3 text-lg text-center text-neutral-800'>제목</th>
                                            <input type="text" value={title} placeholder="제목을 입력하세요" onChange={(event) => setTitle(event.target.value)} className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2" /></tr>

                                        <tr className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2"><th className='p-3 text-lg text-center text-neutral-800'>내용</th>
                                            <textarea type="text" value={content} placeholder="내용을 입력하세요" onChange={event => setContent(event.target.value)} className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2" /></tr>
                                    </thead>
                                </table>
                                <Link href='/BoardList'>
                                    <a>
                                        <button type='modify' onClick={handleModify} className='px-5 py-2 mx-3 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200 '>수정</button>
                                    </a>
                                </Link>
                                <Link href='/BoardList'>
                                    <a>
                                        <button type='delete' onClick={handleDelete} className='px-5 py-2 m-3 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200'>삭제</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModifyBoard