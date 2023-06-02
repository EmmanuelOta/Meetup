import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/all-meetups">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">My Favorites</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New MeetUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
