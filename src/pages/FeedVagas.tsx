import { useState } from 'react';
import FeedHeader from '../components/FeedHeader';

const FeedVagas = () => {
    const [activePage, setActivePage] = useState('feedvagas');
    return (
        <div>
            <div>
                <FeedHeader
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </div>
        </div>
    );
};

export default FeedVagas;
