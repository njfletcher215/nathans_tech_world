import Navbar from '../components/Navbar';

import '../styles/home.css';

export default function Home() {
    return(
        <div className="page-content-container">
            <Navbar />
            <div className="home-page-content">
                <h1>Welcome!</h1>
                <p>Please visit any of my blogs (on your left!), and don't forget to sign the <a href="/log-book"><i>guest booook!</i></a></p>
                <div className="log-book-preview">
                    <div className="post">
                        <h4 className="post-username">username</h4>
                        <p className="post-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="post-timestamp">October 1st, 1998</p>
                    </div>
                    <div className="post">
                        <h4 className="post-username">username</h4>
                        <p className="post-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="post-timestamp">October 1st, 1998</p>
                    </div>
                    <div className="post">
                        <h4 className="post-username">username</h4>
                        <p className="post-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="post-timestamp">October 1st, 1998</p>
                    </div>
                </div>
            </div>
        </div>
    )
}