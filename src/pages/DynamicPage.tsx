import { useParams } from "react-router-dom";
import DynamicPageContent from "@/components/docs/DynamicPageContent";

export default function DynamicPage() {
  const { "*": slug } = useParams();

  if (!slug) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">Page not found.</p>
      </div>
    );
  }

  const parts = slug.split("/");
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(parts.length > 1
      ? [{ label: parts[0].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) }]
      : []),
    {
      label: parts[parts.length - 1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    },
  ];

  return <DynamicPageContent slug={slug} breadcrumbs={breadcrumbs} />;
}
