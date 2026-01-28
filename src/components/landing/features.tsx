import { BarChart3, CreditCard, FileText, Users } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Reporting & Spend Analysis",
    description: "Utilize our business intelligence tools for in-depth spend analysis, strategic sourcing, TCO, and GPO systems.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Secure Payments (HUNTR Pay)",
    description: "Our flexible payment system partners with multiple banks to provide reliable and secure transaction processing.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Vendor Management",
    description: "Manage your vendors effectively to ensure a secure and reliable supply chain with clearly defined service levels.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Contract Management",
    description: "Centralize contract storage, track key milestones, and ensure compliance across all your agreements.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold">Powerful Features for Your Business</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to optimize procurement and manage your supply chain efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
