// OurStory.tsx - Our Story Page
// 10/22/2024 - Joshua Lim

import JoshuaPassing from "../assets/joshuaPassing.jpg";
import JoshuaLayup from "../assets/joshuaLayup.jpg";
import JoshuaShooting from "../assets/joshuaShooting.jpg";
import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/react";

const OurStory = () => {
    return (
        <div className='items-center m-10'>
            <div className='max-w-xs md:max-w-2xl mx-auto min-h-screen items-center justify-center flex flex-col'>
                {/* Photos */}
                <div className='grid grid-cols-3 gap-4'>
                    <Image src={JoshuaPassing} alt='Joshua Passing' isBlurred isZoomed className='w-20 sm:w-24 md:w-52 h-20 sm:h-24 md:h-52 rounded-2xl' />
                    <Image src={JoshuaLayup} alt='Joshua Layup' isBlurred isZoomed className='w-20 sm:w-24 md:w-52 h-20 sm:h-24 md:h-52 rounded-2xl' />
                    <Image src={JoshuaShooting} alt='Joshua Shooting' isBlurred isZoomed className='w-20 sm:w-24 md:w-52 h-20 sm:h-24 md:h-52 rounded-2xl' />
                </div>

                {/* Name & Title */}
                <h1 className='text-2xl font-bold mt-6'>Joshua Lim</h1>
                <h2 className='text-md font-medium mb-6'>Founder & Head Coach</h2>

                {/* About Me */}
                <p className='text-sm sm:text-md md:text-lg mb-6'>Hi, I am Joshua Lim, the Founder and current Head Coach for Team Wave! I am a college student at the University of Central Florida and originally from Ohio.<br /> <br />I started playing basketball when I was just two years old, and have had the amazing opportunity to be trained by some of the greats as well as play at some of the highest levels. I started Team Wave to give a coaching experience I wish I had during my time on the court.</p>

                {/* Credentials & FAQ */}
                <Accordion variant="shadow">
                    <AccordionItem key="1" title="What is my experience?">
                        <div className='text-sm md:text-lg text-left'>
                            <p>• HS Varsity Starter & Captain</p>
                            <p>• National AAU (Nike EYBL & Adidas Gauntlet)</p>
                            <p>• MSHTV (2x)</p>
                            <p>• Future150</p>
                            <p>• Indiana Crossroads</p>
                            <p>• 270 Hoops Feature (3x)</p>
                            <p>• Point Guard College (PGC)</p>
                            <p>• Johnny Dawkin's Elite Camp</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="2" title="Who's trained me?">
                        <div className='text-sm md:text-lg text-left'>
                            <p>• <b>Toni Roesch</b> (Ohio State Women's Player & Personal Trainer)</p>
                            <p>• <b>Drew Lavender</b> (McDonald's All-American)</p>
                            <p>• <b>Peter Patton</b> (Shooting Coach for Chicago Bulls)</p>
                            <p>• <b>Rudy Bentley Jr.</b> (PGC Director)</p>
                            <p>• <b>Drew Slone</b> (Pure Sweat Basketball/Just Hoops)</p>
                            <p>• <b>Ball Tech USA</b></p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="3" title="Where is Team Wave located?">
                        <div className='text-sm md:text-lg text-left'>
                            <p>Team Wave is a club basketball team based out of Central Florida (Palm Bay & Orlando Area).</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="4" title="What is WAVE?">
                        <div className='text-sm md:text-lg text-left'>
                            <p>Wave is an acronym standing for Work, Adaptability, Values, and Excellence. Those four words are the foundation to how the team performs both on and off the court. We strive to be the best versions of ourselves, and to be the best team we can be.</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="5" title="What is the goal?">
                        <div className='text-sm md:text-lg text-left'>
                            <p>My goal is to provide a coaching experience that is both fun and challenging. I want to help players reach their full potential, and to help them grow as both athletes and individuals. I want to create a team that is more than just a team, but a family.</p>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default OurStory;