import { useParams } from "react-router-dom";
import DynamicPageContent from "@/components/docs/DynamicPageContent";

export default function DynamicPage() {
  const { category, page } = useParams();

  if (!category || !page) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">Page not found.</p>
      </div>
    );
  }

  const slug = `${category}/${page}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) },
    { label: page.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) },
  ];

  return <DynamicPageContent slug={slug} breadcrumbs={breadcrumbs} />;
}
