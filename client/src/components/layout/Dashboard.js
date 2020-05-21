import React, {useState} from "react";



const Dashboard = () => {

    const [dashboard, setDashboard] = useState({});

    return (
        <>
            <div className = "jumbotron">
            <div className ="container">
            <h2>Blog </h2>
            <p>All your blog posts in one place</p>
            <button className = "btn btn-secondary">Get started</button>
            </div>            
            </div>
        </>
    );
};



export default Dashboard;
