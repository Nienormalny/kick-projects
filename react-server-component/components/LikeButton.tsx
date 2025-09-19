'use client';

import { useEffect, useState } from "react";

interface LikeButtonProps {
    // handleClick: () => void;
    buttonText: string;
}

const LikeButton = ({buttonText}: LikeButtonProps) => {
    const [count, setCount] = useState<number>(0);
    
    useEffect(() => {
        console.log('Like counter', count);
    }, [count]);

    return (
        <button
            onClick={() => setCount(count + 1)}
            className="mt-auto ml-auto mt-4 bg-gray-500 min-w-[120px] p-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 ease-in-out cursor-pointer text-gray-100"
        >
           {count > 0 && `👍 +${count} `}{buttonText}
        </button>
    )
}

export default LikeButton;