import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projectsData";
import { AlertTriangle, TrendingUp, Shield, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function InvestirPage() {
  const activeProjects = projects.filter((project) => project.isActive);
  const completedProjects = projects.filter((project) => !project.isActive);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investissez dans l&apos;Avenir de l&apos;Immobilier
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Découvrez des opportunités d&apos;investissement soigneusement
              sélectionnées avec des rendements attractifs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <TrendingUp className="w-10 h-10 text-purple-300 mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Rendements Attractifs</h3>
                <p className="text-purple-200 text-sm">
                  Des projets avec des rendements annuels optimisés
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Shield className="w-10 h-10 text-purple-300 mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Sécurité Maximale</h3>
                <p className="text-purple-200 text-sm">
                  Processus de due diligence rigoureux
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Clock className="w-10 h-10 text-purple-300 mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Durée Flexible</h3>
                <p className="text-purple-200 text-sm">
                  Investissements adaptés à vos objectifs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section d'avertissement */}
      <section className="bg-amber-50 border-l-4 border-amber-500 p-8 mx-4 md:mx-auto max-w-6xl rounded-r-lg my-12 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-start gap-4">
            <AlertTriangle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h2 className="text-xl font-bold text-amber-800 mb-2">
                Avertissement sur les risques d&apos;investissement
              </h2>
              <p className="text-amber-700 mb-4">
                Investir dans des projets immobiliers ou des PME comporte des
                risques, notamment une perte partielle ou totale du capital
                investi, un risque d&apos;illiquidité et l&apos;absence de
                garantie de rendement.
              </p>
              <p className="text-amber-700">
                Nous vous recommandons de diversifier vos investissements et de
                n&apos;investir que des sommes dont vous n&apos;avez pas besoin
                à court terme. Avant d&apos;investir, prenez le temps
                d&apos;étudier attentivement chaque projet et de consulter nos{" "}
                <Link
                  href="/risques"
                  className="underline font-medium hover:text-amber-800 transition-colors"
                >
                  informations détaillées sur les risques
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section des projets investissables */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-2 text-purple-600">
          Projets investissables
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Découvrez nos opportunités d&apos;investissement sélectionnées
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeProjects.map((project) => (
            <Link
              href={`/investir/${project.id}`}
              key={project.id}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="inline-block text-sm font-medium text-orange-600 px-3 py-1 bg-orange-50 rounded-full mb-3">
                    {project.status}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progression</span>
                      <span className="font-medium text-purple-600">
                        {project.progress}%
                      </span>
                    </div>
                    <Progress value={project.progress} className="h-2.5" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-gray-600 text-sm mb-1">
                        Rendement annuel
                      </div>
                      <div className="font-bold text-2xl text-purple-600">
                        {project.yield}%
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-gray-600 text-sm mb-1">Durée</div>
                      <div className="font-bold text-2xl text-purple-600">
                        {project.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section de témoignages */}
      <section className="bg-white py-16 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-purple-600 text-center">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 mb-12 text-lg text-center">
            Découvrez l&apos;expérience de nos investisseurs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Michel D.</h4>
                  <p className="text-gray-600 text-sm">
                    Investisseur depuis 2022
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Une plateforme très professionnelle avec des projets de qualité.
                Le processus d&apos;investissement est simple et transparent.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sophie L.</h4>
                  <p className="text-gray-600 text-sm">
                    Investisseur depuis 2021
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                J&apos;apprécie particulièrement la diversité des projets
                proposés et la qualité du suivi des investissements.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                  P
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Pierre M.</h4>
                  <p className="text-gray-600 text-sm">
                    Investisseur depuis 2023
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Les rendements sont au rendez-vous et l&apos;équipe est très
                réactive. Une excellente expérience d&apos;investissement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section des projets déjà financés */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-2 text-purple-600">
          Projets déjà financés
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Découvrez nos succès passés
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block text-sm font-medium text-green-600 px-3 py-1 bg-green-50 rounded-full mb-3">
                  {project.status}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 block mb-1">Montant</span>
                    <div className="font-medium text-gray-900">
                      {project.amount.toLocaleString()} €
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">Rendement</span>
                    <div className="font-medium text-gray-900">
                      {project.yield}%
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">Durée</span>
                    <div className="font-medium text-gray-900">
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
