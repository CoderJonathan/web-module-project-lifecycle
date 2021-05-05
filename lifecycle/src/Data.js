import React from 'react'
import './App.css'
import styled from 'styled-components';

        
export default function UserData(props) {

    const StyledDiv = styled.div`
    width:20%;
    border:5px solid black;
    margin:auto;
    padding:1%;
    text-align: center;
    img{
    width:50%;
    border: black solid 4px;
    }
    p {
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    }
    h2 {
    font-style: italic;
    font-size: 40px;
    text-decoration: underline;
    }
    `;
    
    const { gitHubData, followers } = props;

    return (
      <StyledDiv className='user'>

        <div className="data">
                <h1 className="title">Github User</h1>
                <img src={gitHubData.avatar_url} alt='' />
                <div className="name"><p>Name: </p>{gitHubData.name}</div>
                <div className="username"><p>Username: </p>{gitHubData.login}</div>
                <div className="location"><p>Location: </p>{gitHubData.location}</div>
                <div className="bio"><p>Bio: </p>{gitHubData.bio}</div>
                <div className="following"><p>Following: </p>{gitHubData.following}</div>
        </div>

        <div className="followers">
        {followers && followers.map(followerData => {
            console.log(followerData)
    return (
                <>
                <h2>Follower</h2>
                <img src={followerData.avatar_url} alt='' />
                <div className="username"><p>Username: </p>{followerData.login}</div>
                </>
            )})}
        </div>
      </StyledDiv>
    )
} 