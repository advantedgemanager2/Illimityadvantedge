import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface AccordionSectionProps {
  items: {
    title: string;
    content: ReactNode;
  }[];
}

const AccordionSection = ({ items }: AccordionSectionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionSection;
