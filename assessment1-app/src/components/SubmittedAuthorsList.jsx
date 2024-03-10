import React from 'react'

const SubmittedAuthorsList = ({authors}) => {
  return (
    <div className='block'>
        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            {authors.map(author => (
                <li className="flex items-center space-x-3 rtl:space-x-reverse" key={author}>
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                <span>{author}</span>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SubmittedAuthorsList