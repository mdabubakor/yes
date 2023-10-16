"use client"
import Image from "next/image";
import React from "react";
import ABU from "../Assets/Abubakar.png";
import Container from "./Container";


const Banner = () => {
    return (
        <div className="bg-zinc-900 h-full text-white ">
            <Container className="flex items-center h-screen ">
                <div className="w-1/2 flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold ">Abu-Bakar</h2>
                    <p className="text-lg font-medium">MERN Developer</p>
                    <p className="text-base tracking-wide">
                        As a dedicated and proficient full-stack
                        developer, I am seeking a challenging
                        role in a dynamic organization where I
                        can leverage my extensive experience
                        in web technologies, contributing to
                        innovative projects, and continually
                        enhancing my skills to foster personal
                        and professional growth while adding
                        value to the company&lsquo; objectives and
                        vision. 
                    </p>
                       <a target="_blank" href="/ABUBAKAR.pdf">
                       <button className="   bg-zinc-800 font-semibold text-xl w-24 h-9  rounded-lg text-zinc-300 mt-4 hover:bg-zinc-400 hover:text-zinc-800 duration-200  "> Hire me </button>
                       </a>
                        
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <Image src={ABU} alt="image" className=" object-contain" />
                </div>
            </Container>
        </div>
    );
};

export default Banner;
