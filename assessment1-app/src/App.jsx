'use client';
import './App.css'
import { Label, TextInput, Button } from 'flowbite-react';
import TableDisplay from './components/TableDisplay';
import SubmittedAuthorsList from './components/SubmittedAuthorsList';
import { useState, useRef } from 'react';

// function handleSubmit(event) { 
//   event.preventDefault();
//   authorName = authorName.current.value;
//   setSubmittedAuthors([...submittedAuthors, authorName]);
//   console.log(submittedAuthors);
// }

function App() {
  const [submittedAuthors, setSubmittedAuthors] = useState([]);
  const [inputError, setInputError] = useState([]);
  const authorName = useRef([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputError('');
    if (authorName.current.value == '') {
      // document.getElementById('error').innerHTML = 'Please enter an author name';
      setInputError('Please enter an author name');
      return;
    } else if (submittedAuthors.includes(authorName.current.value)) {
      // document.getElementById('error').innerHTML = 'Author already submitted';
      setInputError('Author already submitted');
      return;
    }

    const regMatch = /^[a-zA-Z\s]*$/;
    if (!regMatch.test(authorName.current.value)) {
      // document.getElementById('error').innerHTML = 'Please enter a valid name';
      setInputError('Please enter a valid name');
      return;
    }

    setSubmittedAuthors([...submittedAuthors, authorName.current.value]);
    console.log(submittedAuthors);
    authorName.current.value = '';
  }

  return (
    <div > 
      <p className="max-w-lg text-5xl font-bold leading-relaxed text-gray-900 dark:text-white mx-auto mb-20">Nicklaus Chiok Assessment 1</p>
      
        <div className="mx-auto">
          <div className="mb-2 block max-w-lg mx-auto text-left pl-1">
            <Label htmlFor="email3" value="Author Name"/>
          </div>


            <div className='flex mb-2 max-w-lg mx-auto'>
              <div className='flex-initial w-4/5 mr-2'>
                <TextInput 
                  id="authorName"
                  type="input"
                  placeholder="Please enter an author's name"
                  required
                  ref={authorName}
                />
              </div>
              <Button onClick={handleSubmit}>Submit</Button>
            </div>

            <div className='flex max-w-lg mx-auto pl-1 mb-2'>
              <p id='error' className="text-sm text-red-600 dark:text-red-500"> {inputError} </p>
            </div>
            

            <div className='flex mb-9 mt-0 max-w-lg mx-auto'>
              <SubmittedAuthorsList authors={submittedAuthors}/>
            </div>
            
          <p className='font-semibold text-2xl mb-2 text-left pl-2  dark:text-white'>Users</p>

          <TableDisplay />

        </div>

    </div>
    
  )
}

export default App
