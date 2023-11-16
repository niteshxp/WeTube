import React from 'react'
import CommentsList from './CommentList';

const commentsData = [
    {
        name: "Bhopinder Jogi",
        text: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        replies: [
            {
                name: "Bablu",
                email: "Jayne_Kuhic@sydney.com",
                text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                replies: [
                    {
                        name: "Baigan",
                        email: "Jayne_Kuhic@sydney.com",
                        text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                        replies: [
                            {
                                name: "Guddu Bhaiya",
                                email: "Jayne_Kuhic@sydney.com",
                                text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Narendra",
        email: "Jayne_Kuhic@sydney.com",
        text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
        name: "Gopi",
        email: "Jayne_Kuhic@sydney.com",
        text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
        name: "Mona",
        email: "Jayne_Kuhic@sydney.com",
        text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        replies: [
            {
                name: "Ruchi",
                email: "Jayne_Kuhic@sydney.com",
                text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                replies: [
                    {
                        name: "Nirali",
                        email: "Jayne_Kuhic@sydney.com",
                        text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                    },
                ],
            },
        ],
    },
];


const CommentContainer = () => {
    return (
        <div className='ml-4 mt-2 p-2 text-xl font-semibold w-2/3'>
            <h1 className='mb-4'>Comments : </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentContainer;