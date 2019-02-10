import * as React from 'react';

const RemoveIcon = () => {
    return (
        <span>
            <svg
                viewBox="0 0 20 20"
                preserveAspectRatio="none"
                width={20}
                fill="transparent"
                stroke="#fff"
                strokeWidth="1.5px"
            >
                <path d="M1,1 L19,19" />
                <path d="M19,1 L1,19" />
            </svg>
        </span>
    );
};

export { RemoveIcon };