import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectsData";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Info } from "lucide-react";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";
import InvestmentDialog from "@/components/InvestmentDialog";
import RoiCalculator from "@/components/RoiCalculator";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  // Destructure id from params first
  const { id: paramId } = await params;
  const id = parseInt(paramId);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-20">
      {/* Header avec navigation retour */}
      <div className="bg-gray-50 py-4 mb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/investir"
            className="inline-flex items-center text-purple-600 hover:text-purple-800"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour aux projets
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Carousel d'images avec ombre et bordure arrondie */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ProjectImageCarousel images={project.images} />
            </div>

            {/* Titre et description avec espacement amélioré */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm transition-colors hover:bg-purple-200">
                  {project.category}
                </span>
                {project.isActive ? (
                  <span className="bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm transition-colors hover:bg-orange-200">
                    {project.status}
                  </span>
                ) : (
                  <span className="bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm transition-colors hover:bg-green-200">
                    {project.status}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                {project.title}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Points forts avec design amélioré */}
              {project.highlights && (
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    Points forts du projet
                  </h3>
                  <ul className="space-y-4">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start transform transition-transform hover:translate-x-2"
                      >
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-1.5 mr-4 mt-1 shadow-sm">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description détaillée avec style amélioré */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  À propos du projet
                </h2>
                <div className="prose prose-purple prose-lg max-w-none">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.detailedDescription || "",
                    }}
                    className="space-y-8"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar avec design amélioré */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sticky top-8 shadow-lg transition-shadow hover:shadow-xl">
              {/* Progression avec style amélioré */}
              {project.isActive && (
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-600">
                      Progression
                    </span>
                    <span className="font-bold text-purple-600">
                      {project.progress}%
                    </span>
                  </div>
                  <Progress value={project.progress} className="h-3 mb-2" />
                  <div className="flex justify-between text-sm text-gray-500 font-medium">
                    <span>0 €</span>
                    <span>{project.amount.toLocaleString()} €</span>
                  </div>
                </div>
              )}

              {/* Détails du projet avec style amélioré */}
              <div className="space-y-6 mb-8">
                <div className="p-4 bg-gray-50 rounded-xl transition-colors hover:bg-gray-100">
                  <div className="text-sm text-gray-500 mb-1">
                    Montant du projet
                  </div>
                  <div className="font-bold text-2xl text-gray-900">
                    {project.amount.toLocaleString()} €
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl transition-colors hover:bg-purple-100">
                  <div className="text-sm text-purple-600 mb-1">
                    Rendement annuel
                  </div>
                  <div className="font-bold text-2xl text-purple-700">
                    {project.yield}%
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl transition-colors hover:bg-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Durée</div>
                  <div className="font-bold text-xl text-gray-900">
                    {project.duration}
                  </div>
                </div>
                {project.minInvestment && (
                  <div className="p-4 bg-gray-50 rounded-xl transition-colors hover:bg-gray-100">
                    <div className="text-sm text-gray-500 mb-1">
                      Investissement minimum
                    </div>
                    <div className="font-bold text-xl text-gray-900">
                      {project.minInvestment.toLocaleString()} €
                    </div>
                  </div>
                )}
              </div>

              {/* Bouton d'action avec style amélioré */}
              {project.isActive ? (
                <InvestmentDialog
                  projectId={project.id}
                  projectTitle={project.title}
                  minInvestment={project.minInvestment || 1000}
                />
              ) : (
                <Button
                  className="w-full mb-6 py-6 text-base font-semibold opacity-75"
                  variant="outline"
                  disabled
                >
                  Projet déjà financé
                </Button>
              )}

              {/* Remplacer le calculateur de ROI existant par le nouveau composant */}
              <RoiCalculator 
                minInvestment={project.minInvestment || 1000} 
                yield={project.yield} 
              />

              {/* Note d'information avec style amélioré */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex">
                  <Info
                    size={24}
                    className="text-blue-600 mr-4 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-2">Information importante</p>
                    <p className="leading-relaxed">
                      Avant d&apos;investir, assurez-vous de bien comprendre les
                      risques associés à ce type d&apos;investissement.
                      Consultez notre{" "}
                      <Link
                        href="/risques"
                        className="underline hover:text-blue-700 transition-colors"
                      >
                        page sur les risques
                      </Link>{" "}
                      pour plus d&apos;informations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
