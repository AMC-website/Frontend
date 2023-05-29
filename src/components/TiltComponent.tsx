import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import VanillaTilt from 'vanilla-tilt';

export default function Tilt(props) {
    const { options, children, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        if (tilt.current) {
            VanillaTilt.init(tilt.current, options);
        }
    }, [options]);

    return (
        <div ref={tilt} {...rest}>
            {children}
        </div>
    );
}
