'use client';

import { Table } from 'flowbite-react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function TableDisplay() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const loadingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            console.log(response.data);
            setAuthors(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
            setError('Error fetching data. Please try again later.');
          });
      }, []);

    if (loading) {
        return (
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Username</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Address</Table.HeadCell>
                    <Table.HeadCell>Company</Table.HeadCell>
                    <Table.HeadCell>Phone</Table.HeadCell>
                    <Table.HeadCell>Website</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {loadingArray.map((item, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {item}
                            </Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        )
    }

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          <Table.HeadCell>Company</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Website</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {authors.map(author => (
                <Table.Row key={author.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {author.id}
                    </Table.Cell>
                    <Table.Cell>{author.name}</Table.Cell>
                    <Table.Cell>{author.username}</Table.Cell>
                    <Table.Cell>{author.email}</Table.Cell>
                    <Table.Cell >
                        <p>{author.address.suite}</p>
                        <p>{author.address.street}</p>
                        <p>{author.address.city}</p> 
                        </Table.Cell>
                    <Table.Cell>{author.company.name}</Table.Cell>
                    <Table.Cell>{author.phone}</Table.Cell>
                    <Table.Cell>
                        <p className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">{author.website}</p>
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}
