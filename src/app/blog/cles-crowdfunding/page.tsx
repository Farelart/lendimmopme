import Image from "next/image";
import Footer from "@/components/Footer";

export default function pages() {
  return (
    <section className="">
      <Image
        className="w-full"
        src="https://a.storyblok.com/f/120264/1890x1063/5c776d444e/investir-dans-l-economie-reelle.png/m/1550x650"
        alt="Blog 1 Image"
        width={1550}
        height={650}
      />

      <article className="w-[90%] md:container mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-neutral-700 my-12">
          Crowdfunding : les clés pour commencer à investir dans l&apos;économie
          réelle
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
            <p className="text-gray-500">ven. 9 déc. 2022, 11:55</p>
          </div>
          <div className="md:w-[70%] flex flex-col gap-6">
            <p>
              Vous avez entendu parler du crowdfunding, le concept vous semble
              intéressant, mais vous ne savez pas exactement comment cela
              fonctionne ? Vous hésitez à franchir le pas de
              l&apos;investissement en crowdfunding ? Vous aimeriez investir,
              mais ne savez pas par où commencer ? LendImmoPME vous aide à y
              voir plus clair.
            </p>
            <h3 className="text-2xl font-extrabold">
              Qu&apos;est-ce que le crowdfunding ? (ou financement participatif)
            </h3>
            <h4 className="text-xl font-extrabold">
              Crowdfunding : définition
            </h4>
            <p>
              Le crowdfunding (ou financement participatif) signifie
              littéralement « financement par la foule ». C&apos;est un outil de
              financement alternatif, en dehors des circuits bancaires
              traditionnels, qui permet à un grand nombre de personnes de
              financer collectivement des projets d&apos;entreprises,
              d&apos;associations, de particuliers, etc. Le crowdfunding, au
              sens large du terme, concerne des projets de natures différentes :
              artistiques, solidaires, entrepreneuriaux, etc.
            </p>
            <p>On distingue ainsi 3 types de financement participatif :</p>
            <ul className="ml-12 list-disc flex flex-col gap-2">
              <li>
                <strong>Le don</strong>, avec ou sans contrepartie en nature
                (cadeau, exemplaire du produit financé, billet gratuit, etc.) ;
              </li>
              <li>
                <strong>Le prêt participatif</strong> qui donne lieu au
                versement d&apos;intérêts. On parle aussi de crowdlending ;
              </li>
              <li>
                <strong>L&apos;investissement</strong>, qui peut prendre
                plusieurs formes : participation au capital d&apos;une
                entreprise (startup, TPE/PME) appelé aussi equity crowdfunding,
                financement d&apos;opérations immobilières, etc.
              </li>
            </ul>
            <p>
              Aujourd&apos;hui, ces collectes de fonds sont organisées par des
              plateformes de crowdfunding comme LendImmoPME. Ces dernières
              mettent en relation directe les porteurs de projets et les
              investisseurs, sans intermédiaire. De plus, le financement
              participatif permet de financer «{" "}
              <strong>l&apos;économie réelle</strong> », en soutenant des
              projets concrets.
            </p>
            <h4 className="text-xl font-extrabold">
              La position de LendImmoPME
            </h4>
            <p>
              Dès sa création en 2008, LendImmoPME a souhaité démocratiser
              l&apos;investissement dans des projets qui étaient auparavant
              réservés aux professionnels. LendImmoPME a également voulu que ces
              opportunités soient accessibles à tous avec un ticket
              d&apos;entrée à 100 €.
            </p>
            <p>
              Nous sélectionnons des projets dans des secteurs porteurs pour
              donner du sens à votre épargne : l&apos;immobilier, la transition
              énergétique ou la santé notamment dont les entreprises financées
              participent à la création d&apos;emplois ou de logements et
              agissent sur la société de demain via des projets à impact pour
              l&apos;Homme et la Nature.
            </p>
            <p>
              Enfin, LendImmoPME propose des titres financiers variés : actions,
              obligations et parts de fonds d&apos;investissement alternatif.
              Cela permet aux investisseurs particuliers de{" "}
              <strong>diversifier</strong> leur portefeuille.
            </p>
            <h3 className="text-2xl font-extrabold">
              5 avantages du crowdfunding pour un investisseur
            </h3>
            <p>
              Si l&apos;investissement en financement participatif suscite
              toujours plus d&apos;intérêt, c&apos;est parce qu&apos;il montre
              plusieurs atouts.
            </p>
            <ol className="list-decimal ml-5 flex flex-col gap-4 [&>li]:marker:font-extrabold">
              <li>
                <h4 className="text-xl font-extrabold">
                  Participez au financement de l&apos;économie réelle
                </h4>
              </li>
              <p>
                En investissant dans des projets de crowdfunding, vous soutenez
                le développement de PME françaises. Vous leur donnez les moyens
                de grandir, de créer de l&apos;activité économique, de
                l&apos;emploi, des logements, et pour certaines, la possibilité
                de concrétiser les innovations qui amélioreront nos vies.
              </p>
              <li>
                <h4 className="text-xl font-extrabold">
                  Choisissez les projets en fonction de vos critères
                </h4>
              </li>
              <p>
                Avec le crowdfunding, vous savez concrètement à quoi sert votre
                épargne. Vous pouvez donc choisir où investir votre argent selon
                vos objectifs et horizons de placements, vos centres
                d&apos;intérêts, la localisation du projet, la durée et le
                rendement annoncé, etc. En bref, vous n&apos;investissez que
                dans des projets qui vous correspondent !
              </p>
              <li>
                <h4 className="text-xl font-extrabold">
                  Investissez simplement, même avec de petites sommes
                </h4>
              </li>
              <p>
                La plateforme de crowdfunding vous facilite la tâche : sélection
                et analyse des projets, collecte des fonds, prise en compte des
                aspects juridiques et fiscaux, versement des intérêts ou
                plus-value… il ne vous reste qu&apos;à choisir les projets. La
                souscription se fait en ligne, de façon dématérialisée et
                rapide, et vous pouvez suivre vos investissements depuis votre
                compte.
              </p>
              <p>
                De plus, avec un seuil minimum de 100 € (sur LendImmoPME),
                c&apos;est un placement idéal pour ceux qui veulent démarrer
                dans l&apos;investissement, même avec de petits montants.
              </p>
              <li>
                <h4 className="text-xl font-extrabold">
                  Diversifiez votre épargne
                </h4>
              </li>
              <p>
                Le crowdfunding est une solution efficace pour diversifier vos
                placements, en complément de l&apos;assurance-vie, de la bourse
                ou de l&apos;immobilier locatif par exemple. Vous pouvez ainsi
                consacrer une part de votre patrimoine (5, 10, 20 % selon votre
                situation) au financement participatif. Et grâce à la grande
                variété des projets, vous pouvez même diversifier fortement vos
                investissements alloués au crowdfunding.
              </p>
              <li>
                <h4 className="text-xl font-extrabold">
                  Bénéficiez de rendements potentiels attractifs
                </h4>
              </li>
              <p>
                Contrairement aux livrets d&apos;épargne, le crowdfunding offre
                des rendements potentiels supérieurs à l&apos;inflation : vous
                pouvez donc gagner réellement de l&apos;argent. Par exemple, les
                projets en obligations (énergies renouvelables et immobilier
                notamment) proposent des taux de rendement entre 4 et 10 %, et
                le financement de startups en capital peut générer un retour sur
                investissement très élevé.
              </p>
              <p>
                Bien entendu, ces rendements importants représentent la
                contrepartie des risques supportés par les investisseurs, dont
                voici la liste.
              </p>
            </ol>
            <h3 className="text-2xl font-extrabold">
              Quels sont les risques liés au crowdfunding?
            </h3>
            <p>
              Investir en crowdfunding présente de nombreux avantages, mais
              comporte aussi des risques :
            </p>
            <ul className="ml-12 list-disc flex flex-col gap-3">
              <li>
                La <strong>perte en capital</strong> (totale ou partielle), dans
                les cas où une entreprise dans laquelle vous avez investi fait
                faillite ou n&apos;est plus en capacité de rembourser
                l&apos;intégralité de son emprunt obligataire ou si un projet ne
                va pas à son terme par exemple ;
              </li>
              <li>
                Le <strong>défaut de liquidité</strong> , qui correspond à
                l&apos;impossibilité de sortir de votre investissement avant
                l&apos;échéance prévue ;
              </li>
              <li>
                La <strong>variabilité du rendement</strong> , qui peut se
                traduire par la baisse du rendement prévu, liée à des
                difficultés financières, opérationnelles, réglementaires…
                rencontrées par l&apos;entreprise qui porte le projet.
              </li>
            </ul>
            <p>
              Ainsi que des risques spécifiques à{" "}
              <strong>l&apos:investissement en capital :</strong>
            </p>
            <ul className="ml-12 list-disc flex flex-col gap-4">
              <li>
                <strong>L&apos;absence probable de dividendes.</strong> Le
                retour sur investissement est généralement réalisé sur la
                plus-value à la revente des actions;
              </li>
              <li>
                <strong>La dilution du capital</strong> en cas de nouvelle levée
                de fonds : le capital de l&apos;entreprise financée sera plus
                important et le pourcentage détenu par l&apos;investisseur
                initial diminuera ;
              </li>
              <li>
                <strong>L&apos;évolution de la valorisation</strong> : la valeur
                d&apos;une société non cotée en bourse est déterminée par une
                estimation technique au moment de l&apos;investissement.
                Cependant, sa valeur économique réelle peut être plus faible
                qu&apos;espérée.
              </li>
            </ul>
            <p>
              Ces risques existent et doivent être pris en compte dans la
              décision d&apos;investissement. Toutefois, il existe des solutions
              pour limiter les risques liés au crowdfunding.
            </p>
            <h3 className="text-3xl font-extrabold">
              Comment investir en crowdfunding ?
            </h3>
            <p>
              Il est assez simple de commencer à investir en financement
              participatif. Voici le parcours type d&apos;un investisseur sur
              LendImmoPME :
            </p>
            <p>
              <strong>Créer un compte gratuitement</strong> et valider votre
              profil investisseur pour accéder à toutes les fonctionnalités de
              la plateforme. Il suffit de compléter votre profil et de
              télécharger les documents d&apos;identité demandés par la
              réglementation. C&apos;est aussi l&apos;occasion d&apos;évaluer
              votre profil de risque, de faire un point sur vos objectifs et vos
              connaissances;
            </p>
            <p>
              <strong>Consulter les projets en cours de financement</strong> et
              sélectionner celui ou ceux qui vous intéressent. Pour valider
              votre choix, vous pouvez ensuite lire la documentation, poser vos
              questions aux dirigeants, discuter avec les autres membres, etc. ;
            </p>
            <p>
              <strong>Investir à partir de 100 €</strong> (signature
              électronique du bulletin de souscription et paiement par CB,
              virement ou chèque) ;
            </p>
            <p>
              <strong>Suivre le projet soutenu grâce aux reportings</strong>{" "}
              pendant la durée de l&apos;investissement ;
            </p>
            <p>
              <strong>
                Récupérer le capital investi et le bénéfice attendu
              </strong>{" "}
              (à une échéance connue pour les obligations et selon
              l&apos;évolution de l&apos;entreprise pour un investissement en
              actions).
            </p>
            <h3 className="text-2xl font-extrabold">
              Nos conseils avant tout investissement
            </h3>
            <p>
              Pour limiter les risques, assurez-vous que vous comprenez bien{" "}
              <strong>
                les avantages et les risques éventuels de l&apos;investissement
              </strong>
              , que votre
              <strong>décision est prise de manière indépendante</strong> , que
              le projet correspond à vos{" "}
              <strong>objectifs et horizons de placements</strong> et qu&apos;il
              est adapté à vos ressources financières et à votre profil
              investisseur.
            </p>
            <p>
              Pour réussir vos investissements en crowdfunding, nous vous
              recommandons de multiplier les projets plutôt que de tout miser
              sur un seul et de <strong>diversifier son portefeuille</strong> :
              projets de natures différentes, titres financiers variés, secteurs
              d&apos;activités multiples, etc.
            </p>
            <p>
              <strong>Ne précipitez pas votre prise de décision</strong> et
              n&apos;hésitez pas à contacter le service investisseurs
              LendImmoPME pour poser vos questions sur les projets, obtenir des
              précisions sur le type d&apos;investissement envisagé et les
              risques associés, discuter de votre profil investisseur, etc. Nos
              équipes sont disponibles pour faciliter votre expérience
              investisseur, profitez-en !
            </p>
          </div>
        </div>
      </article>
      <div className="bg-amber-300">
        <Footer />
      </div>
    </section>
  );
}
