import React from 'react';
import LottieAnimation from './LottieAnimation';

const EmptyState: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="md:max-w-3xl lg:max-w-3xl mx-auto">
                <LottieAnimation />
            </div>
        </div>
    );
};

export default EmptyState;
