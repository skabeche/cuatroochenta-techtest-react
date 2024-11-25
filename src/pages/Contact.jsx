import { useState } from "react";
import { useTranslation } from "react-i18next";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Sidebar from "@/partials/Sidebar";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    telephone: '',
    dateOfBirth: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormFilled = () => {
    return Object.values(formData).every((field) => field.trim() !== '');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(formData);

    // Simulate a delay to mimic an email being sent.
    try {
      if (!isFormFilled()) {
        throw new Error(t('messages.contact.formFilled'));
      }
      setTimeout(() => {
        setIsLoading(false);
        setMessage(`${t('messages.contact.success')} ${formData.email}`);
      }, 1000);
    } catch (error) {
      setMessage(`${t('messages.contact.error')}: ${error.message}`);
    } finally {
      // setIsLoading(false);
    }

    // Example: emulate an API endpoint to send the form data to the API.
    // try {
    //   if (!isFormFilled()) {
    //     throw new Error(t('messages.contact.formFilled'));
    //   }

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
    //   setMessage(`${t('messages.contact.success')} ${formData.email}`);
    // } catch (error) {
    //   setMessage(`${t('messages.contact.error')}: ${error.message}`);
    //   setMessage(error.message);
    // } finally {
    //   setIsLoading(false);
    // }

  };

  return (
    <div className="contact">
      <Sidebar />
      <section className="container">
        <h2>{t("pages.contact.title")}</h2>
        <form onSubmit={handleSubmit} id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <Label htmlFor="name">{t("forms.label.name")}</Label>
              <Input name="name" onChange={handleChange} required />
            </div>
            <div className="">
              <Label htmlFor="email">{t("forms.label.email")}</Label>
              <Input type="email" name="email" onChange={handleChange} required />
            </div>
            <div className="">
              <Label htmlFor="city">{t("forms.label.city")}</Label>
              <Input name="city" onChange={handleChange} required />
            </div>
            <div className="">
              <Label htmlFor="telephone">{t("forms.label.telephone")}</Label>
              <Input name="telephone" onChange={handleChange} required />
            </div>
            <div className="">
              <Label htmlFor="dateOfBirth">{t("forms.label.dateOfBirth")}</Label>
              <Input type="date" name="dateOfBirth" onChange={handleChange} required />
            </div>
          </div>
          <Button isLoading={isLoading} disabled={!isFormFilled()} className="btn-primary">
            {isLoading ? t("forms.button.sending") : t("forms.button.send")}
          </Button>
          <div className="message">{message}</div>
        </form>
      </section>
    </div>
  );
}
