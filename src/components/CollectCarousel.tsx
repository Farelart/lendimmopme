import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/ui/carousel";
import { House, PanelsTopLeft } from "lucide-react";
import Card from "@/components/Card";

export default function CollectCarousel() {
  return (
    <Tabs defaultValue="tab-1" className="container mx-auto px-4" id="projets">
      <TabsList className="h-auto rounded-none border-b border-border bg-transparent p-0">
        <TabsTrigger
          value="tab-1"
          className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-purple-600"
        >
          <House
            className="mb-1.5 opacity-60 text-purple-600"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="text-purple-600">Immobilier</span>
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-orange-600"
        >
          <PanelsTopLeft
            className="mb-1.5 text-orange-600 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="text-orange-600">PME</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <div className="relative w-full px-4 py-6">
          <Carousel>
            <CarouselContent className="-ml-4">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire pour une résidence à rénover"
                  imageUrl="/property-1.jpg"
                  investorReturn="8,00%"
                  borrowerPayment="8,50%"
                  loanToValue="69%"
                  executionDays="14 jours ouvrables"
                  amount="715 000 €"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire à accorder sur trois appartements nouvellement développés (sous licence irrévocable) avec des frais de sortie de 12 512,50 € à Anvers"
                  imageUrl="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  investorReturn="7,00%"
                  borrowerPayment="7,50%"
                  loanToValue="65%"
                  executionDays="2 jours ouvrables"
                  amount="425 000 €"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire accordé pour un nouveau bâtiment commercial à construire pour la location à Oosterhout"
                  imageUrl="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  investorReturn="7,50%"
                  borrowerPayment="8,00%"
                  loanToValue="72%"
                  executionDays="10 jours ouvrables"
                  amount="550 000 €"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselNavigation
              className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
              classNameButton="bg-purple-600 *:stroke-zinc-50 dark:bg-purple-400 dark:*:stroke-zinc-800"
              alwaysShow
            />
          </Carousel>
        </div>
      </TabsContent>
      <TabsContent value="tab-2">
        <div className="relative w-full px-4 py-6">
          <Carousel>
            <CarouselContent className="-ml-4">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3  pl-4">
                <Card
                  title="REVIBAT"
                  imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  investorReturn="6,00%"
                  borrowerPayment="7,50%"
                  loanToValue="69%"
                  executionDays="14 jours ouvrables"
                  amount="Pre-seed 300 000 €"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3  pl-4">
                <Card
                  title="CAPELETTE"
                  imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  investorReturn="10,00%"
                  borrowerPayment="9,50%"
                  loanToValue="5%"
                  executionDays="20 jours ouvrables"
                  amount="seed 850 000 €"
                />
              </CarouselItem>
              {/* <CarouselItem className="bmd:basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire pour une résidence à rénover"
                  imageUrl="/Y-Combinator-scaled.webp"
                  investorReturn="7,0%"
                  borrowerPayment="8,00%"
                  loanToValue="72%"
                  executionDays="10 jours ouvrables"
                  amount="550 000 €"
                />
              </CarouselItem> */}
            </CarouselContent>
            <CarouselNavigation
              className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
              classNameButton="bg-orange-600 *:stroke-zinc-50 dark:bg-orange-400 dark:*:stroke-zinc-800"
              alwaysShow
            />
          </Carousel>
        </div>
      </TabsContent>
    </Tabs>
  );
}
