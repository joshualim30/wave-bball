// Contact.tsx - Contact Page
// 10/22/2024 - Joshua Lim

import React from 'react';
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isOpenSuccess, onOpenChangeSuccess] = React.useState(false);
    const [isOpenFailure, onOpenChangeFailure] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <div className='max-w-xs lg:max-w-4xl h-screen flex items-center justify-center mx-auto'>
            <div className='w-full grid-flow-row space-y-6 justify-between'>
                <h1 className='font-bold text-4xl'>Contact Us</h1>
                <h2 className='font-normal text-md pb-6'>Have a question, concern, or just want to say hi? Fill out the form below and we'll get back to you as soon as possible!</h2>
                <Input placeholder="John Doe" isRequired type='name' label='Full Name' value={name} onChange={(e) => setName(e.target.value)} validate={
                    (value) => {
                        // Name Regex
                        const nameRegex = /^[a-zA-Z\s]*$/;
                        if (!nameRegex.test(value)) {
                            return 'Please enter a valid name.';
                        }
                    }
                }/>
                <Input placeholder="example@email.com" isRequired type='email' label='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} validate={
                    (value) => {
                        // Email Regex
                        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                        if (!emailRegex.test(value) && value.length > 0) {
                            return 'Please enter a valid email address.';
                        }
                    }
                } />
                <Input placeholder="(123) 456-7890" type='phone' label='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} validate={
                    (value) => {
                        // Phone Regex
                        const phoneRegex = /^\d{10}$/;
                        if (!phoneRegex.test(value) && value.length > 0) {
                            return 'Please enter a valid phone number.';
                        }
                    }
                } />
                <Textarea placeholder="Questions, concerns, and more go here..." isRequired label='Message' value={message} onChange={(e) => setMessage(e.target.value)} validate={
                    (value) => {
                        if (value.length < 10 && value.length > 0) {
                            return 'Please enter a message with at least 10 characters.';
                        }
                    }
                } />
                <Button color="primary" onClick={
                    async () => {
                        // Enable loading state
                        setIsLoading(true);
                        
                        // Add message to Firestore
                        try {
                            // Add a new document with a generated id
                            await addDoc(collection(db, "messages"), {
                                name: name,
                                email: email,
                                phone: phone,
                                message: message,
                                timestamp: new Date()
                            });

                            // Add a new document to trigger email notification
                            await addDoc(collection(db, "mail"), {
                                to: email,
                                bcc: "joshualim@wavebasketball.net",
                                template: {
                                    name: "contact",
                                    data: {
                                        name: name,
                                        email: email,
                                        phone: phone ?? "N/A",
                                        message: message,
                                    },
                                },
                            });

                            // Disable loading state
                            setIsLoading(false);

                            // Clear form
                            setName('');
                            setEmail('');
                            setPhone('');
                            setMessage('');

                            // Open modal
                            onOpenChangeSuccess(true);
                        } catch (e) {
                            console.error("Error adding document: ", e);
                            // Disable loading state
                            setIsLoading(false);

                            // Open modal
                            onOpenChangeFailure(true);
                        }
                    }
                } isLoading={isLoading}>Send Message</Button>
                <Modal isOpen={isOpenSuccess} onOpenChange={onOpenChangeSuccess}>
                    <ModalContent>
                        <ModalHeader>Message Sent</ModalHeader>
                        <ModalBody>
                            Your message has been sent successfully! We usually respond within 3-5 business days.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={
                                // Redirect to home page
                                () => window.location.href = "/"
                            }>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Modal isOpen={isOpenFailure} onOpenChange={onOpenChangeFailure}>
                    <ModalContent>
                        <ModalHeader>Error Sending Message</ModalHeader>
                        <ModalBody>
                            There was an error sending your message. Please try again later.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={
                                // Close modal
                                () => onOpenChangeFailure(false)
                            }>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
};

export default Contact;