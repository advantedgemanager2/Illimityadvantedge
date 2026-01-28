import DynamicPageContent from "@/components/docs/DynamicPageContent";

const Cement = () => {
  return (
    <DynamicPageContent
      slug="sectors/cement"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors/steel" },
        { label: "Cement" },
      ]}
      navigation={{
        prev: { title: "Steel Sector", href: "/sectors/steel", category: "Sectors" },
        next: { title: "Automotive Sector", href: "/sectors/automotive", category: "Sectors" }
      }}
    />
  );
};

export default Cement;
