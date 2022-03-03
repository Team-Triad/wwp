import React from 'react'
const UserHome = ({handleLogout}) => { 
    return(
        <section className='UserHome'> 
        <nav>
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        </section>
    )
}
export default UserHome;