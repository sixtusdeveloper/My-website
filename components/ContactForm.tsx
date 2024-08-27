"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { ContactFormValidation } from "@/lib/validation";

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
}



const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof ContactFormValidation>>({
        resolver: zodResolver(ContactFormValidation),
        defaultValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
        },
    })

    function onSubmit(values: z.infer<typeof ContactFormValidation>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                {/* Name input field */}
                <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Fullname"
                    placeholder="John Doe"
                />
                {/* Email input field */}
                <CustomFormField 
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="sixtusushrey@gmail.com"
                />
                {/* Phone input field */} 
                <CustomFormField 
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="(213) 373-4253"
                    className="phone-input h-11 px-3 border-none rounded-md"
                />

               <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="message"
                    label="Message"
                    placeholder="Type your message here..."
                    className="shad-textArea"
                />
                
                {/* <Button className="w-full cursor-pointer bg-blue-600 text-white hover:bg-blue-800" type="submit">Submit</Button> */}
                <SubmitButton isLoading={isLoading}>
                    Submit message
                </SubmitButton>
            </form>
        </Form>
    )
}

export default ContactForm;