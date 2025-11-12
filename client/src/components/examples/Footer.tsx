import { Footer } from '../Footer'
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function FooterExample() {
  return (
    <TooltipProvider>
      <Footer />
      <Toaster />
    </TooltipProvider>
  )
}
