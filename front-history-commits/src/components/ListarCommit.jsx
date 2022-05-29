import React from 'react'

const ListarCommit = ({children}) => {
const { commit } = children;
const { comment_count, message } = commit
  return (
    <div className='p-10 bg-cyan-900 m-10 text-white rounded-3xl'>
        <p>
            {message}
        </p>
        <p>
            {comment_count}
        </p>
    </div>
  )
}

export default ListarCommit