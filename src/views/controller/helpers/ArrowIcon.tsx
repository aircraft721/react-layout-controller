import * as React from 'react';

interface IArrowIcon {
    rotate: number;
    width: number;
    height: number;
}

const ArrowIcon = (props: IArrowIcon) => {
    return (
        <svg
            viewBox="0 0 20 20"
            preserveAspectRatio="none"
            width={props.width}
            height={props.height}
            fill="transparent"
            stroke="#fff"
            strokeWidth="1.5px"
            transform={`rotate(${props.rotate})`}
        >
            <path d="M1,6 L10,15 L19,6" />
        </svg>
    );
};

export { ArrowIcon };