import DynamicPageContent from "@/components/docs/DynamicPageContent";

const Automotive = () => {
  return (
    <DynamicPageContent
      slug="sectors/automotive"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors/steel" },
        { label: "Automotive" },
      ]}
      navigation={{
        prev: { title: "Cement Sector", href: "/sectors/cement", category: "Sectors" },
        next: { title: "Shipping Sector", href: "/sectors/shipping", category: "Sectors" }
      }}
    />
  );
};

export default Automotive;
