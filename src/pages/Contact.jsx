import { useState } from "react";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LoaderIcon from "@/components/LoaderIcon";
import Sidebar from "@/components/Sidebar";

// import axios from "axios";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a delay to mimic an email being sent.
    try {
      setTimeout(() => {
        setIsLoading(false);
        setMessage(`Email sent successfully to ${formData.email}`);
      }, 2000);
    } catch (error) {
      setMessage('Failed sending the form, please try again.');
    }

    // Send the form data to the API.
    // try {
    //   const response = await fetch('https://apidomain.com//api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer MY_API_KEY',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`Error: ${response.statusText}`);
    //   }

    //   const data = await response.json();
    //   console.log('Email sent successfully:', data);
    //   setMessage(`Email sent successfully to ${formData.email}`);
    // } catch (error) {
    //   console.error('Failed to send email:', error.message);
    //   setMessage(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="page-contact">
      {/* <Sidebar /> */}
      <section className="container">
        <h2>Get in touch</h2>
        <form onSubmit={handleSubmit} id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <Label htmlFor="name">Name</Label>
              <Input name="name" handleChange={handleChange} required />
            </div>
            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" handleChange={handleChange} required />
            </div>
            <div className="">
              <Label htmlFor="city">City</Label>
              <Input name="city" handleChange={handleChange} required />
            </div>
            <div className="">
              <Label htmlFor="telephone">Telephone</Label>
              <Input name="telephone" handleChange={handleChange} />
            </div>
            <div className="">
              <Label htmlFor="dateOfBirth">Date of birth</Label>
              <Input type="date" name="dateOfBirth" handleChange={handleChange} />
            </div>
          </div>
          <Button disabled={isLoading} className="btn-primary">
            {isLoading ? <LoaderIcon>Sending...</LoaderIcon> : 'Submit'}
          </Button>
          <div className="message">{message}</div>
        </form>
      </section>
    </div>
  );
}
