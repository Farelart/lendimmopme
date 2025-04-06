import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function RisquesPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop"
              alt="Risques d'investissement"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-purple-900/50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Risques liés à l&apos;investissement dans des projets durables
              </h1>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium text-purple-800">
              Investir de l&apos;argent et/ou investir sans risque ? Cela
              n&apos;existe pas. Investir peut rapporter plus que
              l&apos;épargne, par exemple. Surtout si vous investissez pour une
              longue période. Mais c&apos;est en partie la récompense du fait
              que votre investissement peut non seulement valoir plus, mais
              aussi moins à court terme.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg my-8 border-l-4 border-purple-600">
              <p className="font-medium">
                Si vous investissez ou allez investir, il est important que vous
                compreniez les risques de l&apos;investissement et que vous
                sachiez comment les maîtriser. Pour évaluer les risques, nous
                sommes heureux de vous aider sur votre chemin.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-purple-800 mt-10">
              Votre capital investissable
            </h2>
            <p>
              Approfondissez toujours d&apos;abord les risques
              d&apos;investissement, en particulier via le financement
              participatif. Il est expressément recommandé de ne pas investir
              plus de 10% de vos actifs librement investissables par le biais du
              financement participatif. Il est également recommandé de répartir
              les fonds sur divers projets et sites Web de financement
              participatif.
            </p>
            <p>
              En outre, il est bon d&apos;être conscient que si un ou plusieurs
              risques se matérialisent, l&apos;institution émettrice peut avoir
              du mal à remplir ses obligations de prêt ou de désobligation à
              temps et dans son intégralité. Cela vous permet de perdre une
              partie ou la totalité de votre investissement en tant que
              détenteur d&apos;obligations.
            </p>

            <h2 className="text-2xl font-bold text-purple-800 mt-10">
              Risques généraux d&apos;investissement
            </h2>
            <p>Pour évaluer votre risque, vous pouvez regarder :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Risques liés à l&apos;émetteur et à son entreprise</li>
              <li>Risques liés au prêt obligataire</li>
              <li>
                Autres risques, tels que le marché, les conditions politiques et
                économiques
              </li>
            </ul>
            <p>
              En tant qu&apos;investisseur, lisez attentivement ces risques
              courants de l&apos;investissement.
            </p>

            <h2 className="text-2xl font-bold text-purple-800 mt-10">
              Offre de risques spécifiques
            </h2>
            <p>
              En plus des risques généraux d&apos;investissement, il est
              également important d&apos;identifier les risques en ce qui
              concerne la conception d&apos;une proposition/offre par le
              fournisseur. Chaque offre est différente, alors lisez
              attentivement les informations et la documentation pour bien
              comprendre le profil de risque de l&apos;offre.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  Qualité marchande limitée
                </h3>
                <p>
                  Les obligations sur LendImmoPME ne sont pas négociables sur un
                  marché réglementé, une bourse ou une plateforme similaire. Par
                  conséquent, les obligations sont négociables de manière
                  limitée. Il y a un risque qu&apos;il n&apos;y ait pas
                  d&apos;acheteur d&apos;obligations si un détenteur
                  d&apos;obligations veut vendre des obligations intermédiaires.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  Durée et calendrier de remboursement
                </h3>
                <p>
                  Les obligations à échéance plus longue et à remboursement une
                  fois à la fin de l&apos;échéance ont un profil de risque plus
                  élevé que les obligations à échéance plus courte et/ou à
                  remboursement intermédiaire.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-800 mt-10">
              Garder les risques gérables
            </h2>
            <p>
              L&apos;investissement, y compris dans des projets durables, est
              toujours associé à des risques auxquels vous devez faire attention
              en tant qu&apos;investisseur. N&apos;oubliez pas les règles du jeu
              suivantes pour garder les risques gérables :
            </p>
            <div className="bg-purple-100 p-6 rounded-lg my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    1
                  </span>
                  <p className="font-medium">
                    N&apos;investissez pas tant que vous ne comprenez pas ce qui
                    est offert
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    2
                  </span>
                  <p className="font-medium">
                    Étalez vos investissements pour réduire les risques
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    3
                  </span>
                  <p className="font-medium">
                    N&apos;investissez jamais d&apos;argent que vous ne pouvez
                    pas vous permettre de perdre
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-12 bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Vous souhaitez en savoir plus ?
              </h3>
              <p>
                Consultez notre guide complet sur le crowdfunding ou contactez
                notre équipe d&apos;experts pour obtenir des conseils
                personnalisés.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  href="/blog/cles-crowdfunding"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
                >
                  Guide du crowdfunding
                </Link>
                <a
                  href="mailto:support@lendimmopme.com"
                  className="inline-block bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
