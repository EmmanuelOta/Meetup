import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetup() {
    const history = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-meetup-4db79-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            history("/");
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetup;
