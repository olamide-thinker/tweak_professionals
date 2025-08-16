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
                                        <FormLabel className="text-2xl">Your Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-16 text-2xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="Enter your name"
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
                                        <FormLabel className="text-2xl">Business Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-16 text-2xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="Enter your business email"
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
                                        <FormLabel className="text-2xl">Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-16 text-2xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="Enter your phone number"
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
                                        <FormLabel className="text-2xl">Business Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-16 text-2xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="Enter your business name"
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
                                        <FormLabel className="text-2xl">Area of Interest</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-16 text-2xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="What service are you interested in?"
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
                                        <FormLabel className="text-2xl">Your Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="min-h-[8rem] text-2xl bg-gray-100 placeholder:text-gray-500 placeholder:text-xl"
                                                placeholder="Tell us more about your business needs..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <div className="relative w-fit mt-8 group">
                                {/* Background blocks */}
                                <div className="absolute top-1 -left-2 w-full h-full bg-primary/50 rounded-md -z-10"></div>
                                <div className="absolute -top-2 left-2 w-full h-full bg-accent-foreground rounded-md -z-20"></div>

                                {/* Button */}
                                <button type="submit" className="relative w-fit bg-black text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition flex items-center gap-2">
                                    REQUEST A PROPOSAL <span className="inline-block">→</span>
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
