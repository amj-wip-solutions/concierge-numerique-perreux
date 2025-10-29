"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Je vous recontacterai très bientôt.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
      <div className="space-y-3">
        <Label htmlFor="name" className="text-xl font-semibold text-gray-800">
          Nom complet *
        </Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Votre nom"
          className="text-xl py-6 px-4 border-2 border-gray-300 focus:border-blue-500"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="email" className="text-xl font-semibold text-gray-800">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="votre.email@exemple.fr"
          className="text-xl py-6 px-4 border-2 border-gray-300 focus:border-blue-500"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="phone" className="text-xl font-semibold text-gray-800">
          Téléphone
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="06 XX XX XX XX"
          className="text-xl py-6 px-4 border-2 border-gray-300 focus:border-blue-500"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="message" className="text-xl font-semibold text-gray-800">
          Votre besoin *
        </Label>
        <Textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Décrivez brièvement votre problème ou votre question..."
          className="text-xl py-4 px-4 border-2 border-gray-300 focus:border-blue-500 min-h-[180px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full text-2xl py-8 bg-blue-600 hover:bg-blue-700 font-bold shadow-lg"
        size="lg"
      >
        ✉️ Envoyer ma demande
      </Button>
    </form>
  );
}

