import {BrowserRouter as Router, Routes, Route, Outlet, Link, useParams, useLocation} from "react-router-dom";
import profile from "./assets/profile.jpg"
import challengesData from "./data.js"
import {useEffect, useState} from "react";
import danielProfile from "./assets/danielProfile.png"
import sortIconUp from "./assets/sortIconNumberUp.svg"
import sortIconDown from "./assets/sortIconNumberDown.svg"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {challengesData.map(challenge => (
                        <Route
                            key={challenge.id}
                            path={challenge.target}
                            element={<challenge.element />}
                        />
                    ))}

                    <Route index element={<Home />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </Router>
    );
}

function Layout() {
    const [challenges, setChallenges] = useState(challengesData)
    const location = useLocation()
    const currentUrl = location.pathname

    useEffect(() => {
        const updatedChallenges = challenges.map((item )=> ({
            ...item,
            isActive: item.target === currentUrl
        }))

        setChallenges(updatedChallenges)
    }, [currentUrl]);

    const [isSorted, setIsSorted] = useState(false);
    const [search, setSearch] = useState("");

    const sortedChallenges = isSorted ? challenges.slice().reverse() : challenges;

    const handleSearch = (event) => {
        const searchInput = event.target.value
        setSearch(searchInput)
        const searchChallenges = challengesData
            .filter(challenge => challenge.label.toLowerCase().includes(searchInput.toLowerCase()))
            .map((item )=> ({...item, isActive: item.target === currentUrl}))
        setChallenges([...searchChallenges])
    }


    return (
        <div className="app-container">
            <nav>
                <Link to="/" className="scrimba-logo flex-center">
                    <svg width="108" height="72" viewBox="0 0 108 72" fill="white" xmlnsXlink="http://www.w3.org/2000/svg"
                         className="es es-ag ">
                        <rect x="48" width="60" height="20" rx="10" className="es es-ai "></rect>
                        <rect x="25" y="52" width="60" height="20" rx="10" className="es es-aj "></rect>
                        <rect x="49" y="26" width="36" height="20" rx="10" className="es es-ak "></rect>
                        <rect y="52" width="20" height="20" rx="10" className="es es-al "></rect>
                    </svg>
                </Link>
                <div className="search-input">
                    <div className="icon-container flex-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="#fff" height="35px" width="35px" version="1.1" id="Capa_1"
                             viewBox="0 0 488.4 488.4" xmlSpace="preserve">
                            <g>
                                <g>
                                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7    S381.9,104.65,381.9,203.25z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <input type="text" placeholder="Search"
                           onChange={handleSearch}
                           value={search}
                    />
                </div>
                <div className="sort-container">
                    <div className="hr">
                        <div className="title">Challenges</div>
                    </div>
                    <div className="sort-icon" onClick={()=>setIsSorted(!isSorted)}>
                        <img src={isSorted ? sortIconDown : sortIconUp} alt="sorted icon"/>
                    </div>
                </div>
                <div className="challenges-nav-container scroll">
                    {
                        sortedChallenges.length > 0 ?
                        sortedChallenges.map(
                            (dataObj, index) =>
                                <ChallengeItem
                                    challengeObj={dataObj}
                                    key={index}/> )
                            : <p className="no-challenges">No challenges Found!</p>
                    }
                </div>
                <div className="profile-item">
                    <div className="profile">
                        <img src={profile} alt="Med Amine Ck profile"/>
                    </div>
                    <div className="content">
                        <p>Med Amine Ck</p>
                        <Link
                            to="https://medamineck.com/"
                            target="_blank"
                        >medamineck.com</Link>
                    </div>
                </div>
            </nav>
            <div className="challenge-container">
                <Outlet />
            </div>
        </div>
    );
}

const ChallengeItem = ({challengeObj}) => {
    const {isActive, target, label, id} = challengeObj

    return(
        <Link className={`challenge-item ${isActive && 'active'}`} to={target}>
            <div className={`index-container flex-center`}>{id}</div>
            <p>{label}</p>
        </Link>
    )
}

function Home() {
    return (
        <div className="homePage">
            <h1>React Challenges</h1>
            <main>
                <div className="danielProfile">
                    <img src={danielProfile} alt="daniel profile image"/>
                </div>
                <div className="content">
                    <div className="title">with <span>Daniel Rose</span></div>
                    <div className="description">Course level: Intermediate</div>
                </div>
                <div className="level-icon">
                    <div className="container">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </main>
            <p>Transform your coding skills and unlock your success through
                real-world problem-solving across 40 immersive challenges.</p>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}