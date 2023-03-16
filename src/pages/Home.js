import Navbar from '../components/Navbar';

export default function Home() {
    return(
        <div className="page-content-container">
            <Navbar />
            <div className="home-page-content">
                <h1>Welcome!</h1>
                <p>Please visit any of my blogs (on your left!), and don't forget to sign the <a href="/log-book"><i>guest booook!</i></a> </p>
            </div>
        </div>
    )
}