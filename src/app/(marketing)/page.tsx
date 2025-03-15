import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box, House, PanelsTopLeft } from "lucide-react";
import Card from "@/components/Card";

export default function Page() {
  return (
    <>
      <Header />
      <main className="my-8 container mx-auto flex flex-col gap-4 px-4">
        <h2 className="font-bold text-3xl">Les collectes en cours</h2>
        <Tabs defaultValue="tab-1">
          <TabsList className="h-auto rounded-none border-b border-border bg-transparent p-0">
            <TabsTrigger
              value="tab-1"
              className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            >
              <House
                className="mb-1.5 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              Immobilier
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            >
              <PanelsTopLeft
                className="mb-1.5 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              PME
            </TabsTrigger>
            <TabsTrigger
              value="tab-3"
              className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            >
              <Box
                className="mb-1.5 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              Packages
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab-1">
            <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
              <Card
                title="Prêt hypothécaire à accorder sur trois appartements nouvellement développés (sous licence irrévocable) avec des frais de sortie de 12 512,50 € à Anvers"
                location="Anvers"
                imageUrl="/property-1.jpg"
                investorReturn="8,00%"
                borrowerPayment="8,50%"
                loanToValue="69%"
                executionDays="14 jours ouvrables"
                amount="715 000 €"
              />
              <Card
                title="Prêt hypothécaire accordé à un établissement de restauration à Hardinxveld-Giessendam"
                location="Hardinxveld-Giessendam"
                imageUrl="/property-2.jpg"
                investorReturn="7,00%"
                borrowerPayment="7,50%"
                loanToValue="65%"
                executionDays="2 jours ouvrables"
                amount="425 000 €"
              />
              <Card
                title="Prêt hypothécaire pour une résidence à rénover"
                location="Bruxelles"
                imageUrl="/property-3.jpg"
                investorReturn="7,50%"
                borrowerPayment="8,00%"
                loanToValue="72%"
                executionDays="10 jours ouvrables"
                amount="550 000 €"
              />
            </div>
          </TabsContent>
          <TabsContent value="tab-2">
            <p className="p-4 text-center text-xs text-muted-foreground">
              Content for Tab 2
            </p>
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="p-4 text-center text-xs text-muted-foreground">
              Content for Tab 3
            </p>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
