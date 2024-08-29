"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase.config';
import { collection, addDoc } from "firebase/firestore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUser } from '@clerk/nextjs'; // Import useUser from Clerk
import { Form } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";
import SubmitButton from "./SubmitButton";
import { ContactFormValidation } from "@/lib/validation";
import Modal from "./ui/modal"; // Import the Modal component

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    CHECKBOX = 'checkbox',
}

async function addDataToFireStore(userId: string | null, name: string, email: string, message: string) {
    try {
        const now = new Date();
        const localTimeString = now.toLocaleString(); // This converts to local time

        const docRef = await addDoc(collection(db, "contacts"), {
            userId: userId || "", // Provide a default value for userId
            name: name,
            email: email,
            message: message,
            timestamp: localTimeString, // Save the local time string
        });

        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        return null;
    }
}

const ContactForm = () => {
    const router = useRouter();
    const { user } = useUser(); // Get the currently authenticated user from Clerk
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
    const [modalMessage, setModalMessage] = useState(""); // State for the modal message
    const form = useForm<z.infer<typeof ContactFormValidation>>({
        resolver: zodResolver(ContactFormValidation),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof ContactFormValidation>) => {
        setIsLoading(true);
        try {
            const { name, email, message } = data;
            const userId = user ? user.id : null; // Get the user ID from Clerk

            const docId = await addDataToFireStore(userId, name, email, message);
            if (docId) {
                setIsModalOpen(true); // Open the modal
                setModalMessage("Thank you! Your message was received successfully."); // Set the message
                form.reset(); // Reset the form fields
            } else {
                console.error("Failed to add document.");
            }
        } catch (error) {
            console.error("Error adding document: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Fullname"
                    placeholder="John Doe"
                />
                <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="you@example.com"
                />
                <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="message"
                    label="Message"
                    placeholder="Type your message here..."
                />
                <SubmitButton isLoading={isLoading}>
                    Submit message
                </SubmitButton>
            </form>
            <Modal 
                isOpen={isModalOpen}
                onClose={closeModal}
                message={modalMessage}
            />
        </Form>
    );
};

export default ContactForm;











// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/firebase.config';
// import { collection, addDoc } from "firebase/firestore";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useUser } from '@clerk/nextjs'; // Import useUser from Clerk
// import { Form } from "@/components/ui/form";
// import CustomFormField from "./CustomFormField";
// import SubmitButton from "./SubmitButton";
// import { ContactFormValidation } from "@/lib/validation";
// import Modal from "./ui/modal"; // Import the Modal component

// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     CHECKBOX = 'checkbox',
// }

// async function addDataToFireStore(userId: string | null, name: string, email: string, message: string) {
//     try {
//         const now = new Date();
//         const localTimeString = now.toLocaleString(); // This converts to local time

//         const docRef = await addDoc(collection(db, "contacts"), {
//             userId: userId || "", // Provide a default value for userId
//             name: name,
//             email: email,
//             message: message,
//             timestamp: localTimeString, // Save the local time string
//         });

//         console.log("Document written with ID: ", docRef.id);
//         return docRef.id;
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         return null;
//     }
// }

// const ContactForm = () => {
//     const router = useRouter();
//     const { user } = useUser(); // Get the currently authenticated user from Clerk
//     const [isLoading, setIsLoading] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
//     const [modalMessage, setModalMessage] = useState(""); // State for the modal message
//     const form = useForm<z.infer<typeof ContactFormValidation>>({
//         resolver: zodResolver(ContactFormValidation),
//         defaultValues: {
//             name: "",
//             email: "",
//             message: "",
//         },
//     });

//     const onSubmit = async (data: z.infer<typeof ContactFormValidation>) => {
//         setIsLoading(true);
//         try {
//             const { name, email, message } = data;
//             const userId = user ? user.id : null; // Get the user ID from Clerk

//             const docId = await addDataToFireStore(userId, name, email, message);
//             if (docId) {
//                 setIsModalOpen(true); // Open the modal
//                 setModalMessage("Thank you! Your message was received successfully."); // Set the message
//                 form.reset(); // Reset the form fields
//             } else {
//                 console.error("Failed to add document.");
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const closeModal = () => {
//         setIsModalOpen(false); // Close the modal
//     };

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="name"
//                     label="Fullname"
//                     placeholder="John Doe"
//                 />
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="email"
//                     label="Email"
//                     placeholder="you@example.com"
//                 />
//                 <CustomFormField
//                     fieldType={FormFieldType.TEXTAREA}
//                     control={form.control}
//                     name="message"
//                     label="Message"
//                     placeholder="Type your message here..."
//                 />
//                 <SubmitButton isLoading={isLoading}>
//                     Submit message
//                 </SubmitButton>
//             </form>
//             <Modal 
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 message={modalMessage}
//             />
//         </Form>
//     );
// };

// export default ContactForm;
















// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/firebase.config';
// import { collection, addDoc } from "firebase/firestore";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useUser } from '@clerk/nextjs'; // Import useUser from Clerk
// import { Form } from "@/components/ui/form";
// import CustomFormField from "./CustomFormField";
// import SubmitButton from "./SubmitButton";
// import { ContactFormValidation } from "@/lib/validation";
// import Modal from "./ui/modal"; // Import the Modal component

// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     CHECKBOX = 'checkbox',
// }

// async function addDataToFireStore(userId: string | null, name: string, email: string, message: string) {
//     try {
//         const now = new Date();
//         const localTimeString = now.toLocaleString(); // This converts to local time

//         const docRef = await addDoc(collection(db, "contacts"), {
//             userId: userId || "", // Provide a default value for userId
//             name: name,
//             email: email,
//             message: message,
//             timestamp: localTimeString, // Save the local time string
//         });

//         console.log("Document written with ID: ", docRef.id);
//         return docRef.id;
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         return null;
//     }
// }

// const ContactForm = () => {
//     const router = useRouter();
//     const { user } = useUser(); // Get the currently authenticated user from Clerk
//     const [isLoading, setIsLoading] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
//     const [modalMessage, setModalMessage] = useState(""); // State for the modal message
//     const form = useForm<z.infer<typeof ContactFormValidation>>({
//         resolver: zodResolver(ContactFormValidation),
//         defaultValues: {
//             name: "",
//             email: "",
//             message: "",
//         },
//     });

//     const onSubmit = async (data: z.infer<typeof ContactFormValidation>) => {
//         setIsLoading(true);
//         try {
//             const { name, email, message } = data;
//             const userId = user ? user.id : null; // Get the user ID from Clerk

//             const docId = await addDataToFireStore(userId, name, email, message);
//             if (docId) {
//                 setIsModalOpen(true); // Open the modal
//                 setModalMessage("Thank you! Your message was received successfully."); // Set the message
//                 form.reset(); // Reset the form fields
//             } else {
//                 console.error("Failed to add document.");
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const closeModal = () => {
//         setIsModalOpen(false); // Close the modal
//     };

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="name"
//                     label="Fullname"
//                     placeholder="John Doe"
//                 />
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="email"
//                     label="Email"
//                     placeholder="you@example.com"
//                 />
//                 <CustomFormField
//                     fieldType={FormFieldType.TEXTAREA}
//                     control={form.control}
//                     name="message"
//                     label="Message"
//                     placeholder="Type your message here..."
//                 />
//                 <SubmitButton isLoading={isLoading}>
//                     Submit message
//                 </SubmitButton>
//             </form>
//             <Modal 
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 message={modalMessage}
//             />
//         </Form>
//     );
// };

// export default ContactForm;


















// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/firebase.config';
// import { collection, addDoc } from "firebase/firestore";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useUser } from '@clerk/nextjs'; // Import useUser from Clerk
// import { Form } from "@/components/ui/form";
// import CustomFormField from "./CustomFormField";
// import SubmitButton from "./SubmitButton";
// import { ContactFormValidation } from "@/lib/validation";

// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     CHECKBOX = 'checkbox',
// }

// async function addDataToFireStore(userId: string | null, name: string, email: string, message: string) {
//     try {
//         // Get the current date and time
//         const now = new Date();

//         // Convert to a local time string
//         const localTimeString = now.toLocaleString(); // This converts to local time

//         const docRef = await addDoc(collection(db, "contacts"), {
//             userId: userId || "", // Provide a default value for userId
//             name: name,
//             email: email,
//             message: message,
//             timestamp: localTimeString, // Save the local time string
//         });

//         console.log("Document written with ID: ", docRef.id);
//         return docRef.id;
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         return null;
//     }
// }


// const ContactForm = () => {
//     const router = useRouter();
//     const { user } = useUser(); // Get the currently authenticated user from Clerk
//     const [isLoading, setIsLoading] = useState(false);
//     const form = useForm<z.infer<typeof ContactFormValidation>>({
//         resolver: zodResolver(ContactFormValidation),
//         defaultValues: {
//             name: "",
//             email: "",
//             message: "",
//         },
//     });

//     async function onSubmit(data: z.infer<typeof ContactFormValidation>) {
//         setIsLoading(true);
//         try {
//             const { name, email, message } = data;
//             const userId = user ? user.id : null; // Get the user ID from Clerk

//             const docId = await addDataToFireStore(userId, name, email, message);
//             if (docId) {
//                 router.push(`/success/${docId}`);
//             } else {
//                 console.error("Failed to add document.");
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="name"
//                     label="Fullname"
//                     placeholder="John Doe"
//                 />
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="email"
//                     label="Email"
//                     placeholder="you@example.com"
//                 />
//                 <CustomFormField
//                     fieldType={FormFieldType.TEXTAREA}
//                     control={form.control}
//                     name="message"
//                     label="Message"
//                     placeholder="Type your message here..."
//                 />
//                 <SubmitButton isLoading={isLoading}>
//                     Submit message
//                 </SubmitButton>
//             </form>
//         </Form>
//     );
// };

// export default ContactForm;














// "use client";

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/firebase.config';
// import { collection, addDoc } from "firebase/firestore";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Form } from "@/components/ui/form";
// import CustomFormField from "./CustomFormField";
// import SubmitButton from "./SubmitButton";
// import { ContactFormValidation } from "@/lib/validation";

// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     CHECKBOX = 'checkbox',
// }

// async function addDataToFireStore(userId: string, name: string, email: string, message: string) {
//     try {
//         const docRef = await addDoc(collection(db, "contacts"), {
//             userId,
//             name,
//             email,
//             message,
//             timestamp: new Date().toISOString(),
//         });

//         return docRef.id;
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         return null;
//     }
// }

// const ContactForm = () => {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const form = useForm<z.infer<typeof ContactFormValidation>>({
//         resolver: zodResolver(ContactFormValidation),
//         defaultValues: {
//             name: "",
//             email: "",
//             message: "",
//         },
//     });

//     async function onSubmit(data: z.infer<typeof ContactFormValidation>) {
//         setIsLoading(true);
//         try {
//             const { name, email, message } = data;
//             const userId = "USER_ID_HERE"; // Replace with actual user ID from Clerk

//             const docId = await addDataToFireStore(userId, name, email, message);
//             if (docId) {
//                 router.push(`/success/${docId}`);
//             } else {
//                 console.error("Failed to add document.");
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     // Only render the form if we are in the client environment
//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="name"
//                     label="Fullname"
//                     placeholder="John Doe"
//                 />
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="email"
//                     label="Email"
//                     placeholder="you@example.com"
//                 />
//                 <CustomFormField
//                     fieldType={FormFieldType.TEXTAREA}
//                     control={form.control}
//                     name="message"
//                     label="Message"
//                     placeholder="Type your message here..."
//                 />
//                 <SubmitButton isLoading={isLoading}>
//                     Submit message
//                 </SubmitButton>
//             </form>
//         </Form>
//     );
// };

// export default ContactForm;










// "use client";

// import { db } from '@/firebase.config';
// import { collection, addDoc } from "firebase/firestore";
// import React, { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
// import CustomFormField from "./CustomFormField";
// import SubmitButton from "./SubmitButton";
// import { ContactFormValidation } from "@/lib/validation";
// import { useRouter } from "next/navigation";

// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     CHECKBOX = "checkbox"
// }

// async function addDataToFireStore(userId: string, name: string, email: string, message: string) {
//     try {
//         const docRef = await addDoc(collection(db, "contacts"), {
//             userId,
//             name,
//             email,
//             message,
//             timestamp: new Date().toISOString(), // Track when the message was delivered
//         });

//         console.log("Document written with ID: ", docRef.id);
//         return docRef.id;  // Return the document ID
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         return null;  // Return null if there's an error
//     }
// }

// const ContactForm = () => {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const form = useForm<z.infer<typeof ContactFormValidation>>({
//         resolver: zodResolver(ContactFormValidation),
//         defaultValues: {
//             name: "",
//             email: "",
//             message: "",
//         },
//     });

//     async function onSubmit(data: z.infer<typeof ContactFormValidation>) {
//         setIsLoading(true);
//         try {
//             const { name, email, message } = data;
//             const userId = "USER_ID_HERE";  // Replace this with the actual user ID from Clerk

//             const docId = await addDataToFireStore(userId, name, email, message);
//             if (docId) {
//                 router.push(`/success/${docId}`);  // Redirect to the success page with the document ID
//             } else {
//                 console.error("Failed to add document.");
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//                 {/* Name input field */}
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="name"
//                     label="Fullname"
//                     placeholder="John Doe"
//                 />
//                 {/* Email input field */}
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="email"
//                     label="Email"
//                     placeholder="sixtusushrey@gmail.com"
//                 />

//                 {/* Message textarea field */}
//                 <CustomFormField
//                     fieldType={FormFieldType.TEXTAREA}
//                     control={form.control}
//                     name="message"
//                     label="Message"
//                     placeholder="Type your message here..."
//                 />
                
//                 <SubmitButton isLoading={isLoading}>
//                     Submit message
//                 </SubmitButton>
//             </form>
//         </Form>
//     );
// };

// export default ContactForm;















// 'use client';

// import { db } from '@/firebase.config';
// import { collection, addDoc } from "firebase/firestore";
// import React, { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
// import CustomFormField from "./CustomFormField";
// import SubmitButton from "./SubmitButton";
// import { ContactFormValidation } from "@/lib/validation";
// import { useRouter } from "next/navigation";

// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     CHECKBOX = "checkbox",
// }

// async function addDataToFireStore(name: string, email: string, message: string) {
//     try {
//         if (!name || !email || !message) {
//             console.error("Invalid input data:", { name, email, message });
//             return false;
//         }

//         const docRef = await addDoc(collection(db, "contacts"), {
//             name: name,
//             email: email,
//             message: message,
//         });

//         console.log("Document written with ID: ", docRef.id);
//         return docRef.id;
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         return false;
//     }
// }

// const ContactForm = () => {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const form = useForm<z.infer<typeof ContactFormValidation>>({
//         resolver: zodResolver(ContactFormValidation),
//         defaultValues: {
//             name: "",
//             email: "",
//             message: "",
//         },
//     });

//     async function onSubmit(data: z.infer<typeof ContactFormValidation>) {
//         setIsLoading(true);
//         try {
//             const docId = await addDataToFireStore(data.name, data.email, data.message);
//             if (docId) {
//                 router.push(`/success/${docId}`);
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         }
//         setIsLoading(false);
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//                 {/* Name input field */}
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="name"
//                     label="Fullname"
//                     placeholder="John Doe"
//                 />
//                 {/* Email input field */}
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="email"
//                     label="Email"
//                     placeholder="sixtusushrey@gmail.com"
//                 />

//                <CustomFormField
//                     fieldType={FormFieldType.TEXTAREA}
//                     control={form.control}
//                     name="message"
//                     label="Message"
//                     placeholder="Type your message here..."
//                 />
                
//                 <SubmitButton isLoading={isLoading}>
//                     Submit message
//                 </SubmitButton>
//             </form>
//         </Form>
//     );
// };

// export default ContactForm;










// "use client";

// import { db } from '@/firebase.config';
// import { collection, addDoc } from "firebase/firestore";
// import React, { useEffect, useState } from "react";


// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
// import CustomFormField from "./CustomFormField";
// import SubmitButton from "./SubmitButton";
// import { ContactFormValidation } from "@/lib/validation";
// import { useRouter } from "next/navigation";

// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     CHECKBOX = "checkbox",
// }

// async function addDataToFireStore( userId: string, name: string, email: string, message: string ){
//     try {
       
//         const docRef = await addDoc(collection(db, "contacts"), {
//             userId: userId,
//             name: name,
//             email: email,
//             message: message,
//             timestamp: new Date().toISOString(), // Optional: Add a timestamp
//         });

//         console.log("Document written with ID: ", docRef.id);
//         return true;
//     }
    
//     catch (error) {
//      console.error("Error adding document ", error)   
//      return false;
//     }
// }



// const ContactForm = () => {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const form = useForm<z.infer<typeof ContactFormValidation>>({
//         resolver: zodResolver(ContactFormValidation),
//         defaultValues: {
//         name: "",
//         email: "",
//         message: "",
//         },
//     })

//     const [name, setName ] = useState("");
//     const [email, setEmail ] = useState("");
//     const [message, setMessage ] = useState("");

//     async function onSubmit(data: z.infer<typeof ContactFormValidation>) {
//         setIsLoading(true);
//         try {
//             // Extract data from the form
//             const { name, email, message } = data;
            
//             // Add data to Firestore and get the document ID
//             const docId = await addDataToFireStore(name, email, message);
//             if (docId) {
//                 // Redirect to the success page with the document ID
//                 router.push(`/success/${docId}`);
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         }
//         setIsLoading(false);
//     }
    
//     async function onSubmit({ name, email, message }: z.infer<typeof ContactFormValidation>) {
//         setIsLoading(true);
//         try {
//             const userId = "USER_ID_HERE"; // Replace this with the actual user ID from Clerk
//             const docId = await addDataToFireStore(userId, name, email, message);
//             if (docId) {
//                 setName("");
//                 setEmail("");
//                 setMessage("");
//                 router.push(`/success/${docId}`); // Redirect with document ID
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         }
//         setIsLoading(false);
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//                 {/* Name input field */}
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="name"
//                     label="Fullname"
//                     placeholder="John Doe"
//                 />
//                 {/* Email input field */}
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="email"
//                     label="Email"
//                     placeholder="sixtusushrey@gmail.com"
//                 />

//                <CustomFormField
//                     fieldType={FormFieldType.TEXTAREA}
//                     control={form.control}
//                     name="message"
//                     label="Message"
//                     placeholder="Type your message here..."
//                     // className="shad-textArea"
//                 />
                
//                 {/* <Button className="w-full cursor-pointer bg-blue-600 text-white hover:bg-blue-800" type="submit">Submit</Button> */}
//                 <SubmitButton isLoading={isLoading}>
//                     Submit message
//                 </SubmitButton>
//             </form>
//         </Form>
//     )
// }

// export default ContactForm;












// "use client";

// import { db } from '@/firebase.config';
// import { collection, addDoc } from "firebase/firestore";
// import React, { useEffect, useState } from "react";


// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
// import CustomFormField from "./CustomFormField";
// import SubmitButton from "./SubmitButton";
// import { ContactFormValidation } from "@/lib/validation";
// import { useRouter } from "next/navigation";

// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     CHECKBOX = "checkbox",
// }

// async function addDataToFireStore( name: string, email: string, message: string ){
//     try {
       
//         const docRef = await addDoc(collection(db, "contacts"), {
//             name: name,
//             email: email,
//             message: message,
//         });

//         console.log("Document written with ID: ", docRef.id);
//         return true;
//     }
    
//     catch (error) {
//      console.error("Error adding document ", error)   
//      return false;
//     }
// }

// const ContactForm = () => {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const form = useForm<z.infer<typeof ContactFormValidation>>({
//         resolver: zodResolver(ContactFormValidation),
//         defaultValues: {
//         name: "",
//         email: "",
//         message: "",
//         },
//     })

//     const [name, setName ] = useState("");
//     const [email, setEmail ] = useState("");
//     const [message, setMessage ] = useState("");

//     async function onSubmit({ name, email, message }: z.infer<typeof ContactFormValidation>) {
//         setIsLoading(true);
//         try {
//             const isDataAdded = await addDataToFireStore(name, email, message);
//             if(isDataAdded){
//                 setName("");
//                 setEmail("");
//                 setMessage("");
//                 router.push('/success');
//             }
//         } catch (error) {
//             console.error("Error adding document: ", error);
//           }
//         setIsLoading(false);
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//                 {/* Name input field */}
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="name"
//                     label="Fullname"
//                     placeholder="John Doe"
//                 />
//                 {/* Email input field */}
//                 <CustomFormField 
//                     fieldType={FormFieldType.INPUT}
//                     control={form.control}
//                     name="email"
//                     label="Email"
//                     placeholder="sixtusushrey@gmail.com"
//                 />

//                <CustomFormField
//                     fieldType={FormFieldType.TEXTAREA}
//                     control={form.control}
//                     name="message"
//                     label="Message"
//                     placeholder="Type your message here..."
//                     // className="shad-textArea"
//                 />
                
//                 {/* <Button className="w-full cursor-pointer bg-blue-600 text-white hover:bg-blue-800" type="submit">Submit</Button> */}
//                 <SubmitButton isLoading={isLoading}>
//                     Submit message
//                 </SubmitButton>
//             </form>
//         </Form>
//     )
// }

// export default ContactForm;