import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 p-12 md:py-10 container mx-auto text-sm">
      <section className="flex flex-col md:flex-row gap-6 justify-between">
        <div>
          <h4 className="font-bold">Les projets</h4>
          <div className="mt-4">
            <Link href="/#projets">Les projets en crowdfunding</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Investisseurs</h4>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="/blog/selection">Comment investir?</Link>
            <Link href="/blog/cles-crowdfunding">Pourquoi investir?</Link>
            <Link href="/#avertissement">Avertissement sur les risques</Link>
            <Link href="/">Besoin d&apos;aide?</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Levez des fonds</h4>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="/">Déposer un dossier immobilier</Link>
            <Link href="/">Déposer un dossier PME</Link>
          </div>
        </div>
      </section>
      <hr className="my-5" />
      <h2 className="font-bold">AVERTISSEMENT</h2>
      <p className="my-5" id="avertissement">
        Les investissements proposés présentent un risque de perte partielle ou
        totale du capital ainsi qu&apos;un risque d&apos;illiquidité.
      </p>
      <div className="flex flex-col gap-4">
        <Link href="/conditions">Conditions d&apos;utilisation</Link>
        <Link href="/">Politique de confidentialité</Link>
      </div>
    </footer>
  );
}
