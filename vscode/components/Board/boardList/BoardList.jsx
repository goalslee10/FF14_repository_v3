import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Link from 'next/link';
import List from './List';


const BoardList = () => {

  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8090/board')
      .then((response) => {
        setBoards(response.data)
      }).catch(error => {
        console.error(error)
      })

      console.log(boards);
  }, []);

  return (
    <>
      <div className='grid place-items-center text-xl text-white font-GmarketSansMedium'>
        <table class="table-auto" className='m-5 text-white font-GmarketSansMedium'>
          <List boards = {boards}/>
            <thead>
                <tr className='bg-tankblue'>
                {/* <th>좋아요</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th> */}
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                </tr>
                {/* <th>좋아요(heart)</th> */}
                {/* <th>제목(title)</th> */}
                {/* <th>글쓴이(author)</th> */}
                {/* <th>날짜(date)</th> */}
                {/* 카테고리(category) */}
                {/* 댓글갯수(comment_cnt) */}
            </thead>
        </table>
      </div>
      <Link href="./WriteBoard" className="float-right px-5 py-2 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200">글쓰기</Link>
      </>
  )
}
export default BoardList