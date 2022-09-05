import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export const LoadingIcon = () => {
    return (
        <TailSpin
            height="80"
            width="80"
            radius="9"
            color="#EF6C00"
            ariaLabel="loading"
        />
    )
}
