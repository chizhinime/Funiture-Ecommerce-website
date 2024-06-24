import React from 'react'

const Paginations = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
	let pages = [];

	for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
		pages.push(i);
	}

  return (
	<div className='btn-pagination text-center d-flex flex-wrap gap-2 mt-3 justify-content-center'>
		{
			currentPage > 1 &&
		<button className='btn btn-md p-1 px-2' onClick={()=> setCurrentPage(currentPage - 1)}>
			Prev
		</button>

		}
		{pages.map((page, index) => {
				return (
						<button className={'btn btn-md p-1 px-2 '+ (page === currentPage ? "active-btn" : "" )} key={index} onClick={()=> setCurrentPage(page)}>
								{page}
						</button>		
					)
			})
		}
		{
			(pages.length > 1 && currentPage !== pages.length) && 
			<button className='btn btn-md p-1 px-2' onClick={()=> setCurrentPage(currentPage + 1)}>
						Next
			</button>
		}
	</div>
  )
}

export default Paginations