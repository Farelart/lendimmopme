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
      </TabsList>
      <TabsContent value="tab-1">
        <div className="relative w-full px-4 py-6">
          <Carousel>
            <CarouselContent className="-ml-4">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire à accorder sur trois appartements nouvellement développés (sous licence irrévocable) avec des frais de sortie de 12 512,50 € à Anvers"
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
                  title="Prêt hypothécaire accordé à un établissement de restauration à Hardinxveld-Giessendam"
                  imageUrl="/property-2.jpg"
                  investorReturn="7,00%"
                  borrowerPayment="7,50%"
                  loanToValue="65%"
                  executionDays="2 jours ouvrables"
                  amount="425 000 €"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire pour une résidence à rénover"
                  imageUrl="/property-3.jpg"
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
              classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
              alwaysShow
            />
          </Carousel>
        </div>
      </TabsContent>
      <TabsContent value="tab-2">
        <div className="relative w-full px-4 py-6">
          <Carousel>
            <CarouselContent className="-ml-4">
              <CarouselItem className="basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire à accorder sur trois appartements nouvellement développés (sous licence irrévocable) avec des frais de sortie de 12 512,50 € à Anvers"
                  imageUrl="/property-1.jpg"
                  investorReturn="8,00%"
                  borrowerPayment="8,50%"
                  loanToValue="69%"
                  executionDays="14 jours ouvrables"
                  amount="715 000 €"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire accordé à un établissement de restauration à Hardinxveld-Giessendam"
                  imageUrl="/property-2.jpg"
                  investorReturn="7,00%"
                  borrowerPayment="7,50%"
                  loanToValue="65%"
                  executionDays="2 jours ouvrables"
                  amount="425 000 €"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/3 pl-4">
                <Card
                  title="Prêt hypothécaire pour une résidence à rénover"
                  imageUrl="/property-3.jpg"
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
              classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
              alwaysShow
            />
          </Carousel>
        </div>
      </TabsContent>
    </Tabs>
  );
}
