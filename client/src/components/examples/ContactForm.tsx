import { ContactForm } from '../ContactForm'
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function ContactFormExample() {
  return (
    <TooltipProvider>
      <ContactForm />
      <Toaster />
    </TooltipProvider>
  )
}
