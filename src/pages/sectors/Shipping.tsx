import DynamicPageContent from "@/components/docs/DynamicPageContent";

const Shipping = () => {
  return (
    <DynamicPageContent
      slug="sectors/shipping"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors/steel" },
        { label: "Shipping" },
      ]}
      navigation={{
        prev: { title: "Automotive Sector", href: "/sectors/automotive", category: "Sectors" }
      }}
    />
  );
};

export default Shipping;
