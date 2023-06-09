import React, { useState, useEffect } from "react";
import Notifications from "react-notifications-menu"
import api from "../../services/api"

const Home = () => {
    const [users, setUser] = useState([]);

    const getUsers = async () => {
        api
            .get("/posts?userId=1")
            .then(response => setUser(response.data));
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <Notifications
                height='500px'
                width='300px'
                imagePosition="Left"
                data=
                {users.map(user => (
                    <div key={user.id}>,
                        {user.title},
                        {user.body},
                        {user.userId}
                    </div>
                ))              
                }/>
        </div>

    );
};

export default Home;