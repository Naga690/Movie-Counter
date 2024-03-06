import React from 'react';
import { movieData } from "./Data";
import './moviefolder.css';

const Moviefolder = () => {
    console.log(movieData);
    return (
        <>
            <div className="header">MOVIE COUNTER</div>
            <div className="container">
                <div className="box">
                    {movieData.map((element) => {
                        let { title, Date, videos, desc } = element;
                        return (
                            <div className="card">
                                <video src={videos} controls></video>
                                <div className="just">
                                <div className="title">{title}</div>
                                <div className="desc">{desc}</div>
                                <div className="date"><b>Release Date: </b>{Date}</div>
                                <br />
                                <button className='btn'>Book here</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Moviefolder;
