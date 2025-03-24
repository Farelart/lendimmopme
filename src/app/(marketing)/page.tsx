import Header from "@/components/Header";
import CollectCarousel from "@/components/CollectCarousel";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="my-8 flex flex-col">
        <h2 className="container mx-auto px-4 font-bold text-2xl">
          Les collectes effectuées
        </h2>
        <CollectCarousel />

        <div className="mt-20 p-12 bg-amber-800">
          <div className="container mx-auto text-white text-center">
            <h2 className="font-bold text-3xl">
              Ils en parlent mieux que nous
            </h2>
            <p className="my-6">
              Parce que nous sommes convaincus que nos investisseurs sont les
              mieux placés pour partager leur expérience.
            </p>
          </div>
          <section className="container mx-auto flex flex-col md:flex-row gap-4 ">
            <div className="bg-white p-6 text-sm rounded-lg flex flex-col gap-8 justify-between flex-1 md:w-1/3">
              <p>
                Les descriptifs des projets sont détaillés, les analyses sont
                claires et donnent une bonne idée pour choisir et trier les
                investissements.
              </p>
              <div className="flex gap-2 items-center">
                <span className="bg-amber-950 text-white p-3 rounded-full">
                  CP
                </span>
                <p>Charles P.</p>
              </div>
            </div>
            <div className="bg-white p-6 text-sm rounded-lg flex flex-col gap-8 justify-between flex-1 md:w-1/3">
              <p>
                Cela fait des années que j&apos;investis sur WiSEED, le service
                client est très accessible et agréable.
              </p>
              <div className="flex gap-2 items-center">
                <span className="bg-amber-950 text-white p-3 rounded-full">
                  BN
                </span>
                <p>Benoit N.</p>
              </div>
            </div>
            <div className="bg-white p-6 text-sm rounded-lg flex flex-col gap-8 justify-between flex-1 md:w-1/3">
              <p>
                Bonne diversité des placements proposés. Parcours de
                souscription bien construit. Interface satisfaisante.
              </p>
              <div className="flex gap-2 items-center">
                <span className="bg-amber-950 text-white p-3 rounded-full">
                  SF
                </span>
                <p>Sylvain F.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-amber-700 px-12">
          <section className="container mx-auto flex flex-col gap-4 md:flex-row items-center justify-around text-white py-4">
            <span className="text-2xl font-bold">Nos références</span>
            <Image
              className="text-white "
              src="https://a.storyblok.com/f/120264/750x200/f22d07205d/le-figaro-logo-black-8bae6f0921cfc4f8110798e6c2a4257772c5d68396c45d975a7bf3650161457e.png/m/0x32"
              alt="Le Figaro"
              width={100}
              height={20}
            />
            <Image
              className="text-white "
              src="https://a.storyblok.com/f/120264/1301x281/1bd35eb9cc/logo-les_echos.png/m/0x32"
              alt="Le Figaro"
              width={100}
              height={20}
            />
            <Image
              className="text-white"
              src="https://a.storyblok.com/f/120264/150x150/425c582534/bfm-business-c82e56f200226e90aaf47b618c262bda.svg/m/0x32"
              alt="Le Figaro"
              width={30}
              height={30}
            />
            <Image
              className="text-white "
              src="https://a.storyblok.com/f/120264/800x202/d9620d0884/logo_challenges.png/m/0x32"
              alt="Le Figaro"
              width={100}
              height={20}
            />
          </section>
        </div>

        <section className="my-20 p-12 md:p-0 container mx-auto flex flex-col md:flex-row gap-4">
          <article className="md:basis-1/3 bg-white p-6 rounded-md flex flex-col gap-6">
            <Image
              className="rounded-md overflow-hidden w-full max-h-80"
              src="https://a.storyblok.com/f/120264/1890x1063/5c776d444e/investir-dans-l-economie-reelle.png/m/280x250"
              alt="Blog 1 Image"
              width={280}
              height={250}
            />
            <h3 className="font-bold text-xl">
              Crowdfunding : Les clés pour commencer à investir dans
              l&apos;économie réelle
            </h3>
            <p className="text-sm">
              Vous avez entendu parler du crowdfunding, le concept vous semble
              intéressant, mais vous ne savez pas exactement...
            </p>
            <div className="flex items-center gap-1 underline underline-offset-4">
              <Link href="/blog/cles-crowdfunding" className="text-sm">
                Lire l&apos;article
              </Link>
              <BiRightArrowAlt />
            </div>
          </article>

          <article className="md:basis-1/3 bg-white p-6 rounded-md flex flex-col gap-6">
            <Image
              className="rounded-md overflow-hidden w-full max-h-80"
              src="https://a.storyblok.com/f/120264/1250x500/3db29d6045/selection-des-projets-chez-wiseed.png/m/280x250"
              alt="Blog 2 Image"
              width={280}
              height={250}
            />
            <h3 className="font-bold text-xl">
              Sélection des projets chez WiSEED : un processus rigoureux pour
              une qualité élevée
            </h3>
            <p className="text-sm">
              Chaque année, WiSEED ne sélectionne qu&apos;une infime partie des
              centaines de demandes de financement en crowdfunding...
            </p>
            <div className="flex items-center gap-1 underline underline-offset-4">
              <Link href="/blog/selection" className="text-sm">
                Lire l&apos;article
              </Link>
              <BiRightArrowAlt />
            </div>
          </article>

          <article className="md:basis-1/3 bg-white p-6 rounded-md flex flex-col gap-6">
            <Image
              className="rounded-md overflow-hidden w-full max-h-80"
              src="https://a.storyblok.com/f/120264/1250x500/58254500c2/crowdfunding-definition.png/m/280x250"
              alt="Blog 3 Image"
              width={280}
              height={250}
            />
            <h3 className="font-bold text-xl">
              Qu&apos;est-ce que le crowdfunding ? Définition et fonctionnement
            </h3>
            <p className="text-sm">
              Vous avez entendu ce mot à la télé, lu un article dans la presse
              ou vu une info sur les réseaux sociaux… et vous vous...
            </p>
            <div className="flex items-center gap-1 underline underline-offset-4">
              <Link href="/blog/crowdfunding" className="text-sm">
                Lire l&apos;article
              </Link>
              <BiRightArrowAlt />
            </div>
          </article>
        </section>

        <div className="bg-amber-800">
          <section className="my-10 p-12 md:p-0 container mx-auto flex flex-col gap-8">
            <h2 className="font-bold text-3xl text-white text-center">
              Questions fréquentes
            </h2>
            <p className="text-white text-center">
              Trouvez des informations claires et précises pour vous aider à
              mieux comprendre l&apos;investissement digital.
            </p>
            <div className="w-full mx-auto flex flex-col gap-4">
              <Accordion
                type="single"
                collapsible
                className="space-y-4 bg-neutral-400 bg-opacity-50 rounded-lg "
              >
                <AccordionItem
                  value="item-1"
                  className="border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white font-bold hover:no-underline ">
                    Quelles pièces sont nécessaires pour investir ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-white">
                    Selon la réglementation en vigueur, une pièce
                    d&apos;identité en cours de validité et un justificatif de
                    domicile daté de moins de 3 mois vous seront demandés.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="space-y-4 bg-neutral-400 bg-opacity-50 rounded-lg "
              >
                <AccordionItem
                  value="item-1"
                  className="border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white font-bold hover:no-underline ">
                    Comment sont sélectionnés les projets ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-white">
                    Pour sélectionner un projet de crowdfunding, la plateforme
                    réalise des analyses complètes et rigoureuses portant sur de
                    nombreux critères :
                    <ul className="mt-5 ml-5 list-disc">
                      <li>
                        <strong>Audit financier :</strong> rentabilité
                        historique et à venir, analyse du modèle économique,
                        prévisionnels de trésorerie
                      </li>
                      <li>
                        <strong>Analyse du marché :</strong> traction et
                        potentiel, localisation des biens
                      </li>
                      <li>
                        <strong>Audit administratif et technique :</strong>{" "}
                        brevets, caractère innovant, permis obtenus, etc.
                      </li>
                      <li>
                        <strong>Analyse équipe :</strong> expérience et
                        complémentarité des dirigeants, honorabilité, etc.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="space-y-4 bg-neutral-400 bg-opacity-50 rounded-lg "
              >
                <AccordionItem
                  value="item-1"
                  className="border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white font-bold hover:no-underline ">
                    Quels agréments possède WiSEED ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-white">
                    WiSEED cumule deux agréments à la fois complémentaires et
                    différenciants :
                    <div className="mt-4">
                      <strong>
                        Prestataire de Services de Financement Participatif
                        (PSF) :
                      </strong>
                      cet agrément, délivré par l&apos;Autorité des Marchés
                      Financiers (AMF), autorise WiSEED à exercer des activités
                      de financement participatif et à mettre en relation des
                      porteurs de projets (promoteurs, marchands de bien,
                      start-ups, PME, etc.) qui ont des besoins de financement,
                      avec des investisseurs qui cherchent des placements à
                      court, moyen ou long terme.
                      <strong>
                        Prestataire de Services d&apos;Investissement (PSI) :{" "}
                      </strong>
                      cet agrément, délivré par l&apos;Autorité de Contrôle
                      Prudentiel et de Résolution (ACPR), permet à WiSEED de
                      fournir des services d&apos;investissement tels que la
                      réception et la transmission d&apos;ordres pour le compte
                      de tiers ou le placement non garanti.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="space-y-4 bg-neutral-400 bg-opacity-50 rounded-lg "
              >
                <AccordionItem
                  value="item-1"
                  className="border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white font-bold hover:no-underline ">
                    Comment accéder aux opportunités de financement ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-white">
                    Pour accéder aux opportunités d&apos;investissement, vous
                    devez dans un premier temps créer votre compte WiSEED et
                    compléter votre profil investisseur. Lorsque votre profil
                    investisseur aura été traité et sous réserve que les
                    documents soient conformes, il sera validé. Vous pourrez
                    alors consulter les projets en financement et investir.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="space-y-4 bg-neutral-400 bg-opacity-50 rounded-lg "
              >
                <AccordionItem
                  value="item-1"
                  className="border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white font-bold hover:no-underline ">
                    Quels sont les risques liés à l&apos;investissment ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-white">
                    <p>
                      Les investissements proposés présentent un risque de perte
                      partielle ou totale du capital ainsi qu&apos;un risque
                      d&apos;illiquidité. Il est recommandé de diversifier vos
                      investissements, de n&apos;investir que dans ce que vous
                      comprenez et de n&apos;investir que les sommes dont vous
                      n&apos;avez pas besoin et que vous pouvez vous permettre
                      de perdre. Les projets ou fonds proposés sont soumis à des
                      risques variés.
                    </p>
                    <p className="mt-5">
                      Leur réussite / performance ou leur échec / sous
                      performance sont fonction d&apos;une multitude de
                      facteurs, certains intrinsèques, d&apos;autres
                      extrinsèques.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <h3 className="text-xl font-bold text-white text-center">
              Nous n&apos;avons pas répondu à votre question?
            </h3>
            <Link
              className="p-4 border-2 rounded-md w-fit mx-auto text-white"
              href="/"
            >
              Contactez-nous
            </Link>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
