import Image from "next/image";
import Footer from "@/components/Footer";

export default function pages() {
  return (
    <section className="">
      <Image
        className="w-full"
        src="https://a.storyblok.com/f/120264/1250x500/3db29d6045/selection-des-projets-chez-wiseed.png/m/1550x650"
        alt="Blog 2 Image"
        width={1550}
        height={650}
      />

      <article className="w-[90%] md:container mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-neutral-700 my-12">
          Comment sont sélectionnés les projets en crowdfunding chez LendImmoPME
          ?
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
            <p className="text-gray-500">ven. 9 déc. 2022, 12:17</p>
          </div>
          <div className="md:w-[70%] flex flex-col gap-6">
            <p>
              Chaque année, LendImmoPME ne sélectionne qu&apos;une infime partie
              des centaines de demandes de financement en crowdfunding
              qu&apos;elle reçoit. Peu de dossiers réussissent toutes les étapes
              du processus de sélection et sont finalement proposés aux
              investisseurs. C&apos;est un choix assumé pour offrir des projets
              de qualité. Comment se déroule la sélection des projets ? Comment
              allier sécurité et rentabilité ? On vous explique !
            </p>
            <h3 className="text-2xl font-extrabold">
              Les étapes du processus de sélection des projets de crowdfunding
              chez LendImmoPME
            </h3>
            <p>
              Comme beaucoup de placements financiers, le crowdfunding comporte
              des risques, en échange d&apos;un rendement potentiel élevé. Par
              conséquent, l&apos;enjeu de LendImmoPME est de sélectionner, non
              seulement{" "}
              <strong>
                des projets attractifs, mais qui offrent aussi un maximum de
                sécurité.
              </strong>
            </p>
            <p>
              C&apos;est pourquoi, avant l&apos;ouverture au financement sur la
              plateforme, tous les projets suivent obligatoirement un{" "}
              <strong>processus de sélection</strong> rigoureux qui doit
              permettre de retenir uniquement les plus fiables.
            </p>
            <h4 className="text-xl font-extrabold">
              Phase 1 : Qualification des projets et étude de faisabilité
            </h4>
            <p>
              Quel que soit le secteur (immobilier, startup, transition
              énergétique, etc.), chaque société qui recherche des fonds
              transmet une présentation complète : informations légales,
              activité, besoin de financement, détail du projet, etc. Ces
              premières informations permettent de vérifier que le projet entre
              dans les <strong>critères de sélection</strong> et corresponde aux
              valeurs de LendImmoPME.
            </p>
            <h4 className="text-xl font-extrabold">
              Phase 2 : Audit approfondi de la société et du projet suivi du
              comité d&apos;engagement
            </h4>
            <p>
              Là, on rentre « dans le dur » : LendImmoPME demande à chaque
              entreprise de remplir un dossier complet et de fournir de nombreux
              documents administratifs, juridiques, comptables et financiers,
              commerciaux… propres à la société qui porte le projet et au projet
              en lui-même. Ils sont ensuite étudiés par nos analystes en
              interne, spécialisés chacun dans un domaine, et parfois par des
              experts externes à LendImmoPME, reconnus pour leurs compétences.
            </p>
            <p>
              En fonction de la typologie de projet, LendImmoPME applique des
              <strong>processus de sélection différenciés :</strong>
            </p>
            <ul className="ml-12 list-disc flex flex-col gap-2">
              <li>
                Pour les dossiers de <strong>startup ou de PME</strong>,
                l&apos;audit porte sur la cohérence du business plan, la qualité
                de l&apos;équipe dirigeante, les perspectives de développement,
                les éléments juridiques et comptables, etc. Sélectionner une
                jeune entreprise n&apos;est pas une science exacte, outre
                l&apos;analyse qualitative et quantitative, LendImmoPME
                privilégie donc l&apos;expertise croisée, en faisant appel à des
                acteurs institutionnels et privés de l&apos;innovation
                technologique et à des réseaux d&apos;investisseurs
                professionnels ;
              </li>
              <li>
                Dans le cadre des projets liés à la transition énergétique, nos
                équipes d&apos;analystes étudient, en plus de la société, la
                pertinence du projet (implantation géographique, aspects
                techniques, vente de l&apos;énergie produite, assurances et
                autorisations réglementaires, etc.) ;
              </li>
              <li>
                Le processus de sélection des dossiers immobiliers en
                obligations concerne également la ou les sociétés porteuses du
                projet et le projet en lui-même :
                <ul className="ml-12 mt-4 list-disc flex flex-col gap-2">
                  <li>
                    <strong>Audit financier</strong> pour contrôler le chiffre
                    d&apos;affaires, la trésorerie, les immobilisations et
                    créances, l&apos;historique commercial passé ou en cours,
                    les niveaux de marges, etc;
                  </li>
                  <li>
                    <strong>Audit administratif</strong> pour vérifier que le
                    permis de construire soit purgé de tout recours, les
                    assurances, le rôle de chaque société impliquée (commercial,
                    promotionnel, financier…), l&apos;expérience des dirigeants
                    ou encore l&apos;historique du promoteur sur le type
                    d&apos;opération visée ;
                  </li>
                  <li>
                    <strong>Audit technique</strong> pour étudier
                    l&apos;expérience et l&apos;historique de l&apos;architecte
                    ou du maître d&apos;œuvre, les spécificités du projet pour
                    valider sa faisabilité (implantation, typologie des lots par
                    rapport à la demande et la concurrence de la zone, cohérence
                    du budget prévisionnel, etc.).
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Enfin, les projets jugés positivement, ou avec des aspects à
              améliorer, sont soumis à un{" "}
              <strong>comité d&apos;engagement.</strong> Lui-même composé des
              dirigeants de LendImmoPME, des analystes sectoriels, ainsi que
              d&apos;experts externes à LendImmoPME qui valident les dossiers.
            </p>
            <h4 className="text-xl font-extrabold">
              Phase 3 : Montage juridique et sûretés de l&apos;opération de
              crowdfunding
            </h4>
            <p>
              Une fois toutes ces étapes validées, LendImmoPME et le porteur de
              projet définissent les modalités de la collecte, le planning,{" "}
              <strong>les garanties possibles</strong> (notamment en immobilier
              ou projets d&apos;énergie renouvelable avec la mise en place de
              caution ou garantie à première demande), signent les contrats qui
              mentionnent, le cas échéant, les taux de rendements et la durée
              d&apos;investissement, en fonction du risque sous-jacent de chaque
              opération.
            </p>
            <p>
              La sélection des projets est un parcours long et fastidieux. Il
              s&apos;agit là d&apos;un impératif pour ne{" "}
              <strong>retenir que les meilleurs projets.</strong>{" "}
              L&apos;objectif étant de limiter le risque des particuliers qui
              placent leur argent. LendImmoPME joue, également, sa réputation à
              chaque opération.
            </p>

            <h3 className="text-2xl font-extrabold">
              LendImmoPME : un acteur de référence dans le crowdfunding
            </h3>
            <p>
              Au-delà de la qualité intrinsèque des projets proposés, le choix
              d&apos;une plateforme de financement participatif sérieuse et
              efficace est essentiel. Cela, pour investir dans les meilleures
              conditions. En effet, en tant qu&apos;intermédiaire, c&apos;est la
              plateforme qui sélectionne les projets et organise les collectes
              de fonds. Elle s&apos;assure également du suivi des opérations,
              effectue les contrôles réglementaires, etc. C&apos;est donc un
              maillon essentiel pour vos investissements.
            </p>
            <h4 className="text-xl font-extrabold">
              Une plateforme de crowdfunding mature grâce à son historique
            </h4>
            <p>
              LendImmoPME est née en 2008 (première plateforme en equity
              crowdfunding au monde !). Elle s&apos;impose aujourd&apos;hui, en
              France, comme le spécialiste de l&apos;investissement dans
              l&apos;économie réelle pour les particuliers. C&apos;est aussi la
              première plateforme française à avoir obtenu l&apos;agrément de
              Prestataire de Services d&apos;Investissement (PSI), régulé
              conjointement par les autorités de contrôle AMF et ACPR.
            </p>
            <p>En 2022, 14 ans plus tard :</p>
            <ul className="list-disc ml-12 flex flex-col gap-4 ">
              <li>
                la communauté LendImmoPME de 190 000 membres a investi près de
                400 millions d&apos;euros ;
              </li>
              <p>Plus de 850 projets variés financés ;</p>
              <li>
                <strong>
                  230 millions d&apos;euros ont déjà été remboursés aux
                  investisseurs,
                </strong>{" "}
                grâce à plus de 420 sorties positives.
              </li>
            </ul>
            <h3 className="text-2xl font-extrabold">
              Sélectionnez les projets qui vous correspondent
            </h3>
            <p>
              Après avoir découvert notre processus de sélection des projets et
              les atouts de LendImmoPME, c&apos;est maintenant à vous de
              choisir. Qu&apos;est-ce qui correspond à votre profil
              d&apos;investisseur et à vos aspirations ? LendImmoPME vous
              accompagne tout au long de votre parcours. Des outils d&apos;aide
              à la décision, des guides d&apos;informations et surtout une
              équipe de professionnels à votre écoute.
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
