import React from 'react';
import notification from '../img/notification.png';
import search from '../img/search.png';


const NotiSearchBar = () => {
    return (
        <>
            <div className="noti_search">
                <div className="noti_search_n">
                    <span className="icon2">
                        <img width="20px" src={notification} alt="notification" />
                    </span>
                </div>
                <div className="noti_search_s">
                    <span className="icon2">
                        <img width="20px" src={search} alt="search" />
                    </span>
                    <span className="search">
                        <input placeholder="Search for anything" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default NotiSearchBar;