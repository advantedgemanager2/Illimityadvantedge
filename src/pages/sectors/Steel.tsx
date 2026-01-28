import DynamicPageContent from "@/components/docs/DynamicPageContent";

const Steel = () => {
  return (
    <DynamicPageContent
      slug="sectors/steel"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors/steel" },
        { label: "Steel" },
      ]}
      navigation={{
        prev: { title: "Loan Policy", href: "/products/loan-policy", category: "Products" },
        next: { title: "Cement Sector", href: "/sectors/cement", category: "Sectors" }
      }}
    />
  );
};

export default Steel;
