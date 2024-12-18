// Home.tsx - Home Page
// 10/22/2024 - Joshua Lim

import React from 'react';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { DatePicker } from "@nextui-org/react";
import { DateValue, parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { Divider } from "@nextui-org/divider";
import { Timeline } from 'react-twitter-widgets'
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
    const [isOpenInfo, onOpenChangeInfo] = React.useState(false);
    const [isOpenSuccess, onOpenChangeSuccess] = React.useState(false);
    const [isOpenFailure, onOpenChangeFailure] = React.useState(false);
    const [isOpenEmpty, onOpenChangeEmpty] = React.useState(false);
    const [parentName, setParentName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const relationships = [
        { label: "Parent", value: "Parent" },
        { label: "Guardian", value: "Guardian" }
    ];
    const [selectedRelationship, setSelectedRelationship] = React.useState<React.Key>('');
    const [playerName, setPlayerName] = React.useState('');
    const [selectedDOB, setSelectedDOB] = React.useState<DateValue>(parseDate("2000-01-01"));
    const [highSchool, setHighSchool] = React.useState('');
    const genders = [
        { label: "Male", value: "Male" },
    ];
    const [selectedGender, setSelectedGender] = React.useState<React.Key>('');
    const ages = [
        { label: "17u", value: "17u" },
    ];
    const [selectedGrade, setSelectedGrade] = React.useState<React.Key>('');
    const positions = [
        { label: "PG", value: "PG" },
        { label: "SG", value: "SG" },
        { label: "SF", value: "SF" },
        { label: "PF", value: "PF" },
        { label: "C", value: "C" }
    ];
    const [selectedPosition, setSelectedPosition] = React.useState<React.Key>('');
    const heights = [
        { label: "5'0", value: "5'0" },
        { label: "5'1", value: "5'1" },
        { label: "5'2", value: "5'2" },
        { label: "5'3", value: "5'3" },
        { label: "5'4", value: "5'4" },
        { label: "5'5", value: "5'5" },
        { label: "5'6", value: "5'6" },
        { label: "5'7", value: "5'7" },
        { label: "5'8", value: "5'8" },
        { label: "5'9", value: "5'9" },
        { label: "5'10", value: "5'10" },
        { label: "5'11", value: "5'11" },
        { label: "6'0", value: "6'0" },
        { label: "6'1", value: "6'1" },
        { label: "6'2", value: "6'2" },
        { label: "6'3", value: "6'3" },
        { label: "6'4", value: "6'4" },
        { label: "6'5", value: "6'5" },
        { label: "6'6", value: "6'6" },
        { label: "6'7", value: "6'7" },
        { label: "6'8", value: "6'8" },
        { label: "6'9", value: "6'9" },
        { label: "6'10", value: "6'10" },
        { label: "6'11", value: "6'11" },
        { label: "7'0", value: "7'0" },
    ];
    const [selectedHeight, setSelectedHeight] = React.useState<React.Key>('');
    const weights = [
        { label: "100 lbs", value: "100 lbs" },
        { label: "110 lbs", value: "110 lbs" },
        { label: "120 lbs", value: "120 lbs" },
        { label: "130 lbs", value: "130 lbs" },
        { label: "140 lbs", value: "140 lbs" },
        { label: "150 lbs", value: "150 lbs" },
        { label: "160 lbs", value: "160 lbs" },
        { label: "170 lbs", value: "170 lbs" },
        { label: "180 lbs", value: "180 lbs" },
        { label: "190 lbs", value: "190 lbs" },
        { label: "200 lbs", value: "200 lbs" },
        { label: "210 lbs", value: "210 lbs" },
        { label: "220 lbs", value: "220 lbs" },
        { label: "230 lbs", value: "230 lbs" },
        { label: "240 lbs", value: "240 lbs" },
        { label: "250+ lbs", value: "250+ lbs" }
    ];
    const [selectedWeight, setSelectedWeight] = React.useState<React.Key>('');
    const experiences = [
        { label: "1-3 years", value: "1-3 years" },
        { label: "4-6 years", value: "4-6 years" },
        { label: "7-9 years", value: "7-9 years" },
        { label: "10+ years", value: "10+ years" }
    ];
    const [selectedExperience, setSelectedExperience] = React.useState<React.Key>('');

    let formatter = useDateFormatter({ dateStyle: "long" });

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='text-center gap-6 grid m-10'>
                <h1 className='font-bold text-4xl'>2024-2025 Tryouts</h1>
                <h2 className='font-normal text-md'>Deadline is Nov. 3rd, 2024 - Register Now!</h2>
                <button className='bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg mb-6' onClick={
                    () => {
                        onOpenChangeInfo(true);
                    }
                }>
                    Tryout Information
                </button>
                <p className='text-lg'>Parent/Guardian Info</p>
                <Input placeholder='John Doe' isRequired label='Full Name' value={parentName} onChange={(e) => setParentName(e.target.value)} />
                <Input placeholder='example@email.com' isRequired label='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder='(123) 456-7890' label='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Autocomplete
                    label="Relationship to Player"
                    placeholder="Parent"
                    defaultItems={relationships}
                    isRequired
                    selectedKey={selectedRelationship}
                    onSelectionChange={setSelectedRelationship}
                >
                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                </Autocomplete>
                <p className='text-lg'>Player Info</p>
                <Input placeholder='John Doe' isRequired label='Full Name' value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
                <DatePicker
                    label="Date of Birth"
                    value={selectedDOB}
                    onChange={setSelectedDOB}
                    isRequired
                />
                <Input placeholder='High School' label='Current High School' value={highSchool} onChange={(e) => setHighSchool(e.target.value)} />
                <div className='grid-flow-col gap-4 grid grid-cols-2'>
                    <Autocomplete
                        label="Gender"
                        placeholder="Male"
                        defaultItems={genders}
                        isRequired
                        selectedKey={selectedGender}
                        onSelectionChange={setSelectedGender}
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                    <Autocomplete
                        label="Age Group"
                        placeholder="17u"
                        defaultItems={ages}
                        isRequired
                        selectedKey={selectedGrade}
                        onSelectionChange={setSelectedGrade}
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>
                <div className='grid-flow-col gap-4 grid grid-cols-2'>
                    <Autocomplete
                        label="Experience"
                        placeholder="1-3 years"
                        defaultItems={experiences}
                        isRequired
                        selectedKey={selectedExperience}
                        onSelectionChange={setSelectedExperience}
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                    <Autocomplete
                        label="Position"
                        placeholder="PG"
                        defaultItems={positions}
                        isRequired
                        selectedKey={selectedPosition}
                        onSelectionChange={setSelectedPosition}
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>
                <div className='grid-flow-col gap-4 grid grid-cols-2'>
                    <Autocomplete
                        label="Height"
                        placeholder="6'0"
                        defaultItems={heights}
                        isRequired
                        selectedKey={selectedHeight}
                        onSelectionChange={setSelectedHeight}
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                    <Autocomplete
                        label="Weight"
                        placeholder="180 lbs"
                        defaultItems={weights}
                        isRequired
                        selectedKey={selectedWeight}
                        onSelectionChange={setSelectedWeight}
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>
                <Button color='primary' onClick={
                    async () => {
                        // Check if registration is closed
                        if (new Date() > new Date(2024, 10, 3)) {
                            // Open modal
                            onOpenChangeFailure(true);
                        } else if (parentName === '' || email === '' || phone === '' || selectedRelationship === '' || playerName === '' || selectedGender === '' || selectedGrade === '' || selectedPosition === '' || selectedHeight === '' || selectedWeight === '' || selectedExperience === '') { // Check if any fields are empty
                            // Open modal
                            onOpenChangeEmpty(true);
                        } else { // Register for tryouts
                            try {
                                // Add registration to Firestore
                                await setDoc(doc(db, "tryouts", playerName.toLowerCase().replace(/\s/g, '-')), {
                                    parentName: parentName,
                                    email: email,
                                    phone: phone,
                                    relationship: selectedRelationship,
                                    playerName: playerName,
                                    playerGender: selectedGender,
                                    playerDOB: formatter.format(selectedDOB.toDate(getLocalTimeZone())),
                                    playerHighSchool: highSchool,
                                    playerGrade: selectedGrade,
                                    playerPosition: selectedPosition,
                                    playerHeight: selectedHeight,
                                    playerWeight: selectedWeight,
                                    playerExperience: selectedExperience,
                                    timestamp: new Date()
                                });

                                // Add a new document to trigger email notification
                                await setDoc(doc(db, "mail", playerName.toLowerCase().replace(/\s/g, '-')), {
                                    to: email,
                                    bcc: "joshualim@wavebasketball.net",
                                    template: {
                                        name: "tryout-registration",
                                        data: {
                                            parentName: parentName,
                                            email: email,
                                            phone: phone,
                                            relationship: selectedRelationship,
                                            playerName: playerName,
                                            playerGender: selectedGender,
                                            playerDOB: formatter.format(selectedDOB.toDate(getLocalTimeZone())),
                                            playerHighSchool: highSchool,
                                            playerGrade: selectedGrade,
                                            playerPosition: selectedPosition,
                                            playerHeight: selectedHeight,
                                            playerWeight: selectedWeight,
                                            playerExperience: selectedExperience,
                                            registrationCloseDate: "November 3rd, 2024",
                                            tryoutRegistrationLink: "https://www.wavebasketball.net",
                                            coachName: "Joshua Lim",
                                            coachPhone: "(937) 707-3022",
                                            coachEmail: "joshualim@wavebasketball.net",
                                            teamWebsite: "https://www.wavebasketball.net",
                                        },
                                    },
                                });

                                // Open modal
                                onOpenChangeSuccess(true);

                                // Clear form
                                setParentName('');
                                setEmail('');
                                setPhone('');
                                setSelectedRelationship('');
                                setPlayerName('');
                                setSelectedGender('');
                                setSelectedDOB(parseDate("01/01/2000"));
                                setHighSchool('');
                                setSelectedGrade('');
                                setSelectedPosition('');
                                setSelectedHeight('');
                                setSelectedWeight('');
                                setSelectedExperience('');
                            } catch (e) {
                                // Clear form
                                setParentName('');
                                setEmail('');
                                setPhone('');
                                setSelectedRelationship('');
                                setPlayerName('');
                                setSelectedGender('');
                                setSelectedDOB(parseDate("01/01/2000"));
                                setHighSchool('');
                                setSelectedGrade('');
                                setSelectedPosition('');
                                setSelectedHeight('');
                                setSelectedWeight('');
                                setSelectedExperience('');

                                // Open modal
                                onOpenChangeFailure(true);
                            }
                        }
                    }
                }>Register</Button>
                <div className='my-6'>
                    <Divider />
                </div>
                {/* Twtter Feed */}
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'wave_bball'
                    }}
                    options={{
                        height: '400',
                    }}
                />
            </div>
            <Modal isOpen={isOpenInfo} onClose={() => onOpenChangeInfo(false)}>
                <ModalContent>
                    <ModalHeader>Tryout Information</ModalHeader>
                    <ModalBody>
                        <p>Tryouts will be held on November 18th. Tryout fee is $20 per player, to be paid at the door. More information will be sent to the email you register with.</p>
                        <p>If you have any questions, please contact us at <a href='mailto:' className='underline'>joshualim@wavebasketball.net</a>, or visit the <a href='/contact' className='underline'>Contact Us</a> page.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => onOpenChangeInfo(false)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal isOpen={isOpenSuccess} onClose={() => onOpenChangeSuccess(false)}>
                <ModalContent>
                    <ModalHeader>Registration Complete</ModalHeader>
                    <ModalBody>
                        Thank you for registering for tryouts! We will be in touch with more information soon.
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => onOpenChangeSuccess(false)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal isOpen={isOpenFailure} onClose={() => onOpenChangeFailure(false)}>
                <ModalContent>
                    <ModalHeader>Registration Failed</ModalHeader>
                    <ModalBody>
                        There was an error registering for tryouts. Please try again later.
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => onOpenChangeFailure(false)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal isOpen={isOpenEmpty} onClose={() => onOpenChangeEmpty(false)}>
                <ModalContent>
                    <ModalHeader>Empty Fields</ModalHeader>
                    <ModalBody>
                        Please fill out all required fields before registering for tryouts.
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => onOpenChangeEmpty(false)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Home;