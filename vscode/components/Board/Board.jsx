import React from 'react'

const Board = () => {
  return (
    <>
    <section>
        <div className='float-right'>
            <form>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full pl-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="검색어 입력" required/>
                    <button type="submit" class="text absolute right-1.5 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">검색</button>
                </div>
            </form>
        </div>
        <div className='m-5 text-left text-white font-GmarketSansMedium'>자유게시판</div>
    </section>
    <div className='grid place-items-center text-xl text-white font-GmarketSansMedium'>
        <table class="table-auto" className='m-5 text-white font-GmarketSansMedium'>
            <thead>
                <tr>
                <th className='bg-tankblue'>좋아요</th>
                <th className='bg-tankblue'>제목</th>
                <th className='bg-tankblue'>글쓴이</th>
                <th className='bg-tankblue'>날짜</th>
                </tr>
                {/* <th>좋아요(heart)</th> */}
                {/* <th>제목(title)</th> */}
                {/* <th>글쓴이(author)</th> */}
                {/* <th>날짜(date)</th> */}
                {/* 카테고리(category) */}
                {/* 댓글갯수(comment_cnt) */}
            </thead>
            <tbody>
                <tr>
                <td>💗<text className='text-healgreen'>[0]</text></td>
                <td className='text-left'><text className='text-deeppink'>거래</text> 거래를 요청합니다!!!!!!!!&nbsp;&nbsp;<text className='text-violet'>[0]</text></td>
                <td><text className='text-bermuda'>jellycodes</text></td>
                <td>2022-11-23</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td>💗<text className='text-healgreen'>[0]</text></td>
                <td className='text-left'><text className='text-deeppink'>거래</text> 거래를 요청합니다!!!!!!!!&nbsp;&nbsp;<text className='text-violet'>[0]</text></td>
                <td><text className='text-bermuda'>jellycodes</text></td>
                <td>2022-11-23</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td>💗<text className='text-healgreen'>[0]</text></td>
                <td className='text-left'><text className='text-deeppink'>거래</text> 거래를 요청합니다!!!!!!!!&nbsp;&nbsp;<text className='text-violet'>[0]</text></td>
                <td><text className='text-bermuda'>jellycodes</text></td>
                <td>2022-11-23</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Board