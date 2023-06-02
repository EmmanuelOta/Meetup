import MeetupList from "../components/layout/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://react-meetup-4db79-default-rtdb.firebaseio.com/meetups.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return (
        <div>
            <section>
                <h1>All MeetUps</h1>
                <MeetupList meetups={loadedMeetups} />
            </section>
        </div>
    );
}

export default AllMeetupsPage;
