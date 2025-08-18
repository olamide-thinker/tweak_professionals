"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Schema
const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").min(1, "Business email is required"),
    phone_number: z.string().optional(),
    business_name: z.string().min(1, "Business name is required"),
    interest: z.string().min(1, "Interest is required"),
    message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone_number: "",
            business_name: "",
            interest: "",
            message: "",
        },
    });

    const onSubmit = (data: ContactFormData) => {
        console.log("Form Submitted ✅:", data);
    };

    return (
        <div>
            <section>
                <Card className="p-6 w-[58rem] text-2xl shadow-md">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6 mt-4"
                        >
                            <h3 className={'font-extrabold'}>Please fill the fields with correct information </h3>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        {/*<FormLabel className="text-2xl lg:text-3xl">Your Name</FormLabel>*/}
                                        <FormControl>
                                            <Input
                                                className="h-20 text-2xl lg:text-3xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="your name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        {/*<FormLabel className="text-2xl lg:text-3xl">Business Email</FormLabel>*/}
                                        <FormControl>
                                            <Input
                                                className="h-20 text-2xl lg:text-3xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="your business email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone_number"
                                render={({ field }) => (
                                    <FormItem>
                                        {/*<FormLabel className="text-2xl lg:text-3xl">Phone Number</FormLabel>*/}
                                        <FormControl>
                                            <Input
                                                className="h-20 text-2xl lg:text-3xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="your phone number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="business_name"
                                render={({ field }) => (
                                    <FormItem>
                                        {/*<FormLabel className="text-2xl lg:text-3xl">Business Name</FormLabel>*/}
                                        <FormControl>
                                            <Input
                                                className="h-20 text-2xl lg:text-3xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="your business name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="interest"
                                render={({ field }) => (
                                    <FormItem>
                                        {/*<FormLabel className="text-2xl lg:text-3xl">Area of Interest</FormLabel>*/}
                                        <FormControl>
                                            <Input
                                                className="h-20 text-2xl lg:text-3xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="service interest"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        {/*<FormLabel className="text-2xl lg:text-3xl">Your Message</FormLabel>*/}
                                        <FormControl>
                                            <Textarea
                                                className="min-h-[8rem] text-2xl lg:text-3xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="your message"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <div className="relative w-fit mt-8 group">
                                {/* Background blocks */}
                                <div className="absolute top-1 -left-2 inset-0 w-full h-full bg-primary/50 rounded-md z-10"></div>
                                <div className="absolute -top-2 left-2 inset-0 w-full h-full bg-accent  rounded-md z-20"></div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="relative text-2xl z-30 lg:text-3xl w-fit bg-white text-primary font-extrabold px-6 py-3 rounded-md border border-primary hover:bg-primary hover:text-accent-foreground transition flex items-center gap-2"
                                >
                                    SUBMIT INQUIRY <span className="ml-8 inline-block">→</span>
                                </button>
                            </div>

                        </form>
                    </Form>
                </Card>
            </section>
        </div>
    );
};

export default ContactForm;
