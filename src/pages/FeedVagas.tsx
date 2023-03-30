import { useState } from 'react';
import FeedHeader from '../components/FeedHeader';
import FeedProfile from '../components/FeedProfile';
import ActiveProfile from '../components/FeedProfile/ActiveProfile';

const FeedVagas = () => {
    const [activePage, setActivePage] = useState('feedvagas');
    return (
        <div className="mt-6 h-screen">
            <div className="flex justify-around">
                <div>
                    <FeedProfile />
                    <ActiveProfile />
                </div>
                <FeedHeader
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </div>
        </div>
    );
};

export default FeedVagas;
