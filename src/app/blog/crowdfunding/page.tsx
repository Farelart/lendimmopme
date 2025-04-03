import Image from "next/image";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";
import Link from "next/link";

export default function pages() {
  return (
    <section className="">
      <BlogHeader />
      <Image
        className="w-full"
        src="https://a.storyblok.com/f/120264/1250x500/58254500c2/crowdfunding-definition.png/m/1550x650"
        alt="Blog 3 Image"
        width={1550}
        height={650}
      />

      <article className="w-[90%] md:container mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-neutral-700 my-12">
          Qu&apos;est-ce que le crowdfunding ? Définition et fonctionnement
        </h2>
        <div className="mt-5 flex flex-col md:flex-row gap-12">
          <div className="text-center md:text-left flex flex-col gap-2 items-center">
            <Image
              src="https://a.storyblok.com/f/120264/200x200/d7b3234d5d/frederic-raynal.webp/m/250x250"
              alt="RAYNAL Frédéric"
              width={100}
              height={100}
              className="object-cover"
              loading="lazy"
            />
            <div className="flex flex-col items-center">
              <strong>Frédéric RAYNAL</strong>
              <p>Expert en crowdfunding</p>
            </div>
            <p className="text-purple-600">ven. 9 déc. 2022, 12:17</p>
          </div>
          <div className="md:w-[70%] flex flex-col gap-6">
            <p>
              Vous avez entendu ce mot à la télé, lu un article dans la presse
              ou vu une info sur les réseaux sociaux… et vous vous demandez ce
              qu&apos;est le crowdfunding ? Comment ça marche et si c&apos;est
              fait pour vous ? Alors vous êtes au bon endroit, WiSEED est
              l&apos;un des pionniers du « financement participatif » en France
              ! Voici donc la définition du crowdfunding et son fonctionnement,
              ainsi que les avantages et limites de ce type de placement.
            </p>
            <h3 className="text-2xl font-extrabold">
              Crowdfunding : qu&apos;est-ce que c&apos;est ?
            </h3>
            <p>
              Le terme Crowdfunding ou financement participatif signifie «
              financement par la foule ». Il s&apos;agit d&apos;une opération
              pour récolter des fonds auprès du grand public, ces milliers de
              personnes non-professionnelles de l&apos;investis sement qui
              participent au financement de projets dans des secteurs
              d&apos;activité divers : artistique, culturel, entrepreneurial…
              pour développer des idées, des produits, des logements, etc. Cette
              participation financière peut prendre la forme d&apos;un don,
              d&apos;un prêt ou d&apos;un investissement.
            </p>
            <p>
              La grande force de crowdfunding, c&apos;est de mettre en relation
              via des plateformes web réglementées, des porteurs de projets dont
              la réalisation nécessite une somme d&apos;argent, avec des
              personnes (physiques ou morales) qui veulent soutenir une cause ou
              placer leur épargne autrement, hors des supports financiers
              traditionnels, de façon directe, sécurisée et traçable.
            </p>
            <h3 className="text-2xl font-extrabold">
              Don avec ou sans contrepartie, crowdlending, crowdequity : comment
              ça fonctionne ?
            </h3>
            <p>
              Dans la famille du crowdfunding au sens large, on dénombre 3
              grandes typologies de financements : le don, le prêt et
              l&apos;investissement.
            </p>
            <Image
              className="w-full"
              src="https://a.storyblok.com/f/120264/1500x837/2ca6840136/type-investissement.png/m/1500x837"
              alt="crowdfunding vs crowdlending vs crowdequity"
              width={1550}
              height={650}
            />
            <h4 className="text-xl font-extrabold">
              Le don avec ou sans contrepartie
            </h4>
            <p>
              Que vous soyez un particulier, une association, un
              auto-entrepreneur ou une entreprise… tout le monde peut essayer de
              collecter des fonds auprès de micro-mécènes pour financer son
              projet.
            </p>

            <ul className="ml-12 list-disc flex flex-col gap-2">
              <li>
                <strong>
                  D&apos;une part, on trouve le crowdfunding en « don pur »
                </strong>{" "}
                pour le financement de projets de charités, humanitaires,
                sociaux, etc. Les contributeurs donnent un peu, beaucoup,
                passionnément, pour soutenir pécuniairement ces types de
                projets, sans rien attendre en retour ;
              </li>
              <li>
                <strong>
                  D&apos;autre part, le crowdfunding en « don avec récompense »
                </strong>
                pour financer les projets créatifs, culturels, entrepreneuriaux,
                etc., en échange d&apos;une gratification symbolique ou
                d&apos;une contrepartie en nature principalement : une entrée
                pour avoir aidé à la création d&apos;un spectacle, un panier de
                légumes pour avoir permis l&apos;installation d&apos;un
                maraîcher, etc. Les marques utilisent aussi ce système pour
                réaliser la prévente de produits inédits ou tester de nouveaux
                marchés.
              </li>
            </ul>
            <p>
              D&apos;après le baromètre du crowdfunding 2022 en France, le
              crowdfunding en don dans sa globalité a concerné 116 155 projets
              financés, soit un montant de 106,7 millions d&apos;euros.
            </p>
            <h4 className="text-xl font-extrabold">
              Le crowdlending : un prêt participatif avec ou sans intérêts
            </h4>
            <p>
              Sur les plateformes de <strong>crowdlending</strong>, il est
              possible de prêter de l&apos;argent à d&apos;autres particuliers
              pour des projets personnels (études, mariage, travaux…) ou à des
              entreprises établies pour développer leur activité, lancer une
              campagne marketing, acheter une machine, etc.
            </p>
            <p>
              Certains de ces prêts participatifs ne sont pas rémunérés, mais{" "}
              <strong>
                la plupart des porteurs de projet proposent aux prêteurs des
                intérêts financiers entre 2 % et 10 %
              </strong>{" "}
              bruts annuels selon la nature de l&apos;opération et le niveau de
              risque, sur une durée comprise entre 12 et 60 mois.
            </p>
            <p>
              En France, le prêt rémunéré (+ minibons) représentait un peu plus
              de 309 millions d&apos;euros collectés en 2022 pour 1 800
              opérations financées.
            </p>
            <p>
              En matière d&apos;investissement en crowdfunding, plusieurs
              solutions de placements se sont développées dans le financement de
              sociétés non cotées en bourse, et ce, dans de nombreux domaines
              d&apos;activité.
            </p>

            <p className=" font-extrabold">
              La locomotive du secteur : le crowdfunding immobilier
            </p>
            <p>
              En 2022, c&apos;est encore le{" "}
              <strong>crowdfunding immobilier</strong> qui représente le plus
              gros volume de collecte : 1,8 milliard d&aposs;euros pour 1 775
              projets. Ce mécanisme concerne majoritairement des opérateurs
              immobiliers (société de promotion immobilière, marchands de biens,
              etc.) qui financent une partie de leurs projets en émettant des
              <strong>
                obligations à taux fixe dont la rémunération se situe entre 8 %
                et 11 %
              </strong>{" "}
              brut par an, sur des périodes de 18 à 36 mois.
            </p>

            <h4 className="text-xl font-extrabold">
              Le segment historique : le crowdequity pour investir dans les
              startups
            </h4>
            <p>
              Le <strong>crowdequity</strong> est une autre façon de placer son
              épargne : il s&apos;agit d&apos;investir au capital d&apos;une
              startup qui montre un{" "}
              <strong>fort potentiel de croissance</strong>. En tant
              qu&apos;actionnaire, vous pouvez espérer réaliser une plus-value
              lors de la revente des titres. La durée de placement sur ce type
              d&apos;investissement en capital doit être envisagée à long terme,
              8 ans au minimum. En 2022, 150 millions d&apos;euros ont été
              investis en Private equity en France pour 375 projets financés.
            </p>

            <h4 className="text-xl font-extrabold">
              Les autres exemples d&apos;opérations proposées sur les
              plateformes
            </h4>
            <p>
              Grâce au financement participatif, d&apos;autres options existent
              aujourd&apos;hui pour placer son argent autrement : investir dans
              des parts de sociétés coopératives, dans des projets liés aux
              énergies renouvelables, dans des Sociétés civiles de placement
              immobilier (SCPI), et même financer l&apos;achat et
              l&apos;exploitation de parcelles de forêts !
            </p>
            <h3 className="text-2xl font-extrabold">
              Le crowdfunding d&apos;hier à aujourd&apos;hui : quelle histoire !
            </h3>
            <p>
              L&apos;origine du financement participatif est bien plus ancienne
              qu&apos;on ne le pense. Mozart lui-même aurait échangé quelques
              pièces contre des partitions signées de sa main pour financer ses
              concerts. Toutefois, on attribue généralement la première grande
              campagne de crowdfunding au célèbre sculpteur Auguste Bartholdi,
              destinée à payer les derniers travaux sur la Statue de la Liberté
              au 18e siècle.
            </p>

            <p>
              Dans l&apos;Histoire récente, le crowdfunding revient sur le
              devant de la scène en 2007 avec le financement de l&apos;album
              Toi+Moi du chanteur Grégoire. En 2008, deux entrepreneurs un peu
              fous, Nicolas Sérès et Thierry Merquiol, fondent WiSEED pour
              <strong>
                mettre en relation des startups innovantes en recherche de fonds
                avec des investisseurs particuliers
              </strong>{" "}
              qui veulent investir au capital de ses pépites :
              l&apos;equity-crowdfunding est né.
            </p>

            <h4 className="text-xl font-extrabold">
              Le boom des années 2010 et les premières réglementations
            </h4>

            <p>
              En 2008, pour récolter les fonds nécessaires au succès de sa
              candidature présidentielle, Barack Obama lance une campagne de
              crowdfunding qui touche un très large public et atteint plus de
              600 millions de dollars :{" "}
              <strong>
                une belle démonstration de la puissance du crowdfunding.
              </strong>{" "}
              Après cette réussite, les États-Unis prennent la tête de ce
              nouveau mode de financement.
            </p>

            <p>
              Grâce au développement du web, de multiples plateformes
              apparaissent, les projets sont plus variés et le profil des
              investisseurs évolue : fini les opérations réservées aux
              investisseurs fortunés, aux acteurs institutionnels ou aux
              Business-angels, place aux contributeurs plus modestes, qui, grâce
              à la force du nombre, réussissent tout aussi bien à financer des
              projets.
            </p>

            <p>
              Aujourd&apos;hui, le marché est plus mature, les titres financiers
              proposés sont toujours plus diversifiés et leurs modes de
              fonctionnement mieux maîtrisés. Le secteur du crowdfunding pèse
              2,35 milliards d&apos;euros en 2022, soit{" "}
              <strong>14 fois plus qu&apos;en 2015</strong> (167 millions
              d&apos;euros), preuve de l&apos;engouement autour de ce placement
              alternatif.
            </p>

            <p>
              Le crowdfunding fait aussi l&apos;objet d&apos;une{" "}
              <strong>réglementation exigeante</strong>, qui a beaucoup évolué
              entre 2014 avec la première modification du Code monétaire et
              financier (ordonnance n°2014-559), et 2023 avec la mise en œuvre
              du nouveau statut unique européen de Prestataire de services de
              financement participatif (PSFP). Cette forte régulation des
              autorités concernant la souscription de titres financiers permet
              de limiter les dérives et de protéger les investisseurs.
            </p>

            <h3 className="text-2xl font-extrabold">
              Comment investir sur une plateforme de crowdfunding en France ?
            </h3>

            <Image
              className="w-full"
              src="https://a.storyblok.com/f/120264/1500x837/76bcf6937c/etape-pour-investir-en-crowdfunding.png/m/1500x837"
              alt="étapes pour investir en crowdfunding"
              width={1550}
              height={650}
            />
            <p>
              Avant tout investissement (crowdfunding, assurance-vie, SCPI,
              bourse…), il est primordial de{" "}
              <strong>déterminer votre profil investisseur.</strong> Il
              s&apos;agit de fixer vos objectifs et horizons de placement en
              fonction de votre âge, de votre situation personnelle et
              patrimoniale, de votre capacité financière, de votre sensibilité
              au risque, etc.
            </p>

            <p>
              Ensuite, il faudra sélectionner une plateforme de financement
              participatif qui vous correspond, selon des critères comme
              l&apos;agrément auprès de l&apos;Autorité de contrôle prudentiel
              et de résolution (ACPR) ou de l&apos;Autorité des marchés
              financiers (AMF), ou les deux comme WiSEED !{" "}
              <strong>
                l&apos;historique et l&apos;expérience de la plateforme,
              </strong>{" "}
              ses indicateurs de performances, la typologie et le volume de
              projets, etc.
            </p>

            <p>
              Une fois la plateforme choisie, le processus est sensiblement
              toujours le même :
            </p>
            <ul className="ml-12 list-disc flex flex-col gap-2">
              <li>
                Créer un profil et télécharger les documents d&apos;identité
                obligatoires. Après contrôle et validation, vous accédez à
                toutes les fonctionnalités de la plateforme ;
              </li>
              <li>
                Consulter et étudier les projets en cours de financement, grâce
                aux éléments de présentation et d&apos;aide à la décision mis à
                votre disposition. Chez WiSEED, vous pouvez aussi poser vos
                questions en ligne et échanger avec les autres investisseurs ;
              </li>
              <li>
                Investir dans un projet, par la signature électronique d&apos;un
                bulletin de souscription et le paiement de votre participation.
                WiSEED est l&apos;une des rares plateformes qui propose
                d&apos;investir à partir de 100 €, une somme très abordable pour
                ce type d&apos;actif financier ;
              </li>
              <li>
                Suivre le projet pendant la durée de l&apos;investissement,
                grâce à des reportings réguliers ;
              </li>
              <li>
                Percevoir les gains (intérêts ou plus-value principalement), de
                manière échelonnée ou « in fine », au terme de l&apos;opération.
                Attention, l&apos;investissement comporte des risques et le
                capital n&apos;est pas garanti, nous y viendrons plus bas ;
              </li>
              <li>
                Déclarer ses revenus issus du <strong>crowdfunding</strong> : en
                principe, votre déclaration de revenus est pré-remplie, mais
                voici notre guide pour comprendre la fiscalité du crowdfunding.
              </li>
            </ul>
            <p>
              Pour finir, il ne vous reste plus qu&apos;à réinvestir vos gains
              pour continuer à faire progresser votre portefeuille
              d&apos;investissement, en profitant de l&apos;effet des intérêts
              composés (les intérêts perçus génèrent à leur tour des intérêts
              s&apos;ils sont réinvestis).
            </p>

            <h3 className="text-2xl font-extrabold">
              Quels sont les risques et avantages du crowdfunding ?
            </h3>

            <p>
              Une fois n&apos;est pas coutume, commençons par évoquer les
              risques liés au financement participatif. Il est important de les
              connaître et de les comprendre avant de donner, prêter ou investir
              son argent via une plateforme de crowdfunding.
            </p>

            <p>
              Si vous effectuez un don avec contrepartie, le seul risque est de
              ne pas recevoir votre récompense comme prévu. En revanche, les
              risques sont plus élevés s&apos;il s&apos;agit d&apos;un placement
              financier.
            </p>

            <h4 className="text-xl font-extrabold">
              Les principaux risques liés au prêt participatif, à
              l&apos;investissement en capital ou en dette (obligation
              notamment) :
            </h4>
            <ul className="ml-12 list-disc flex flex-col gap-2">
              <li>
                Perte totale ou partielle du capital investi : les fonds ne sont
                pas garantis ;
              </li>
              <li>
                Défaut de liquidité, soit une impossibilité de vendre vos titres
                quand vous le désirez ;
              </li>
              <li>Baisse potentielle du rendement annoncé ;</li>
              <li>
                Modification de la durée maximale de placement prévue,
                raccourcie ou prolongée ;
              </li>
              <li>
                Et plus spécifiquement à l&apos;investissement en actions non
                cotées : absence probable de dividendes (l&apos;objectif est
                plutôt la réalisation d&apos;une plus-value à la revente),
                dilution du capital en cas de nouvelle levée de fonds, baisse de
                la valorisation de la société financée ;
              </li>
              <li>
                Enfin, il faut ajouter tous les risques extérieurs (aléas
                climatiques, macroéconomiques ou législatifs) et ceux attachés à
                des difficultés opérationnelles, financière, juridique ou dus à
                une mauvaise gestion des dirigeants.
              </li>
            </ul>
            <h4 className="text-xl font-extrabold">
              En contrepartie de la prise de risque, le crowdfunding offre de
              nombreux avantages :
            </h4>
            <ul className="ml-12 list-disc flex flex-col gap-2">
              <li>
                Vous pouvez soutenir des porteurs de projet talentueux en
                effectuant un don pur ou avec récompense ;
              </li>
              <li>
                Vous accédez à{" "}
                <strong>des projets intéressants et rémunérateurs</strong>,
                autrefois réservés aux investisseurs institutionnels, et vous
                pouvez ainsi <strong>diversifier votre épargne</strong>;
              </li>
              <li>
                Vous investissez de façon simple et rapide, à partir d&apos;un
                montant minimum faible : quelques euros en don ou prêt, et 100 €
                en actions ou en obligations (sur WiSEED) ;
              </li>
              <li>
                Vous bénéficiez de l&apos;expertise de la plateforme (analyse
                des projets, préparation juridique, opérationnelle et fiscale
                des collectes, suivi et versement des intérêts ou plus-value,
                etc.) ;
              </li>
              <li>
                Vous profitez de rendements potentiels attractifs, supérieurs à
                l&apos;inflation, notamment avec le crowdfunding immobilier ou
                le financement de startup qui peut produire des plus-values
                élevé.
              </li>
            </ul>
            <p>
              Et surtout,{" "}
              <strong>
                vous participez directement au financement de l&apos;économie
                réelle,
              </strong>{" "}
              ces startups, sociétés immobilières, PME françaises qui créent de
              la valeur, de l&apos;emploi et préparent les solutions de demain !
            </p>
          </div>
        </div>
      </article>

      {/* Recommandations d'articles */}
      <div className="w-[90%] md:container mx-auto my-16">
        <h3 className="text-2xl font-extrabold text-purple-700 mb-8">
          Articles recommandés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <Link href="/blog/selection" className="block">
              <Image
                src="https://a.storyblok.com/f/120264/1250x500/3db29d6045/selection-des-projets-chez-wiseed.png/m/1550x650"
                alt="Comment sont sélectionnés les projets"
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Comment sont sélectionnés les projets en crowdfunding chez
                  LendImmoPME ?
                </h4>
                <p className="text-gray-600 mb-4">
                  Découvrez notre processus rigoureux de sélection des projets
                  pour garantir qualité et sécurité à nos investisseurs.
                </p>
                <div className="flex items-center text-purple-600">
                  <span>Lire l'article</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <Link href="/blog/cles-crowdfunding" className="block">
              <Image
                src="https://a.storyblok.com/f/120264/1890x1063/5c776d444e/investir-dans-l-economie-reelle.png/m/1550x650"
                alt="Crowdfunding : les clés pour commencer à investir"
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Crowdfunding : les clés pour commencer à investir dans
                  l'économie réelle
                </h4>
                <p className="text-gray-600 mb-4">
                  Découvrez les avantages et les risques du crowdfunding et
                  comment commencer à investir dans l'économie réelle.
                </p>
                <div className="flex items-center text-purple-600">
                  <span>Lire l'article</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-amber-300 mt-10">
        <Footer />
      </div>
    </section>
  );
}
