/* import { Metadata } from "next";
 */ import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projectsData";
import { AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

/* export const metadata: Metadata = {
  title: "Investir | LendImmoPME",
  description:
    "Découvrez nos opportunités d'investissement dans l'immobilier et les PME",
}; */

export default function InvestirPage() {
  // Filtrer les projets actifs et inactifs
  const activeProjects = projects.filter((project) => project.isActive);
  const completedProjects = projects.filter((project) => !project.isActive);

  return (
    <main className="min-h-screen">
      {/* Section d'avertissement */}
      <section className="bg-amber-50 border-l-4 border-amber-500 p-8 mb-12">
        <div className="container mx-auto">
          <div className="flex items-start gap-4">
            <AlertTriangle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h2 className="text-xl font-bold text-amber-800 mb-2">
                Avertissement sur les risques d'investissement
              </h2>
              <p className="text-amber-700 mb-4">
                Investir dans des projets immobiliers ou des PME comporte des
                risques, notamment une perte partielle ou totale du capital
                investi, un risque d'illiquidité et l'absence de garantie de
                rendement.
              </p>
              <p className="text-amber-700">
                Nous vous recommandons de diversifier vos investissements et de
                n'investir que des sommes dont vous n'avez pas besoin à court
                terme. Avant d'investir, prenez le temps d'étudier attentivement
                chaque projet et de consulter nos{" "}
                <Link href="/risques" className="underline font-medium">
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
        <h2 className="text-3xl font-bold mb-8 text-purple-600">
          Projets investissables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeProjects.map((project) => (
            <Link
              href={`/investir/${project.id}`}
              key={project.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-600 mb-2">
                    {project.status}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progression</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-gray-500">Rendement annuel</div>
                      <div className="font-bold text-lg">{project.yield}%</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-gray-500">Durée</div>
                      <div className="font-bold text-lg">
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

      {/* Section des projets déjà financés */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-purple-600">
          Projets déjà financés
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.slice(0, 5).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm text-green-600 mb-1">
                  {project.status}
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Montant</span>
                    <div className="font-medium">
                      {project.amount.toLocaleString()} €
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Rendement</span>
                    <div className="font-medium">{project.yield}%</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Durée</span>
                    <div className="font-medium">{project.duration}</div>
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
