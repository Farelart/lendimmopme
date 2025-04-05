import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectsData";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Info } from "lucide-react";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";
import InvestmentDialog from "@/components/InvestmentDialog";

// ... rest of the file remains unchanged

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
          <div className="lg:col-span-2">
            {/* Carousel d'images */}
            <div className="mb-8">
              <ProjectImageCarousel images={project.images} />
            </div>

            {/* Titre et description */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                {project.isActive ? (
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                ) : (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-700 mb-6 text-lg">
                {project.description}
              </p>

              {/* Points forts */}
              {project.highlights && (
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold mb-4">
                    Points forts du projet
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
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
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description détaillée - Améliorée */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold mb-6">À propos du projet</h2>
                <div className="prose prose-purple prose-lg max-w-none">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.detailedDescription || "",
                    }}
                    className="space-y-6"
                  />
                </div>
              </div>
            </div>

            {/* Documents section removed */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
              {/* Progression */}
              {project.isActive && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progression</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2 mb-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0 €</span>
                    <span>{project.amount.toLocaleString()} €</span>
                  </div>
                </div>
              )}

              {/* Détails du projet */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-sm text-gray-500">Montant du projet</div>
                  <div className="font-bold text-xl">
                    {project.amount.toLocaleString()} €
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Rendement annuel</div>
                  <div className="font-bold text-xl text-purple-600">
                    {project.yield}%
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Durée</div>
                  <div className="font-bold">{project.duration}</div>
                </div>
                {project.minInvestment && (
                  <div>
                    <div className="text-sm text-gray-500">
                      Investissement minimum
                    </div>
                    <div className="font-bold">
                      {project.minInvestment.toLocaleString()} €
                    </div>
                  </div>
                )}
              </div>

              {/* Bouton d'action */}
              {project.isActive ? (
                <InvestmentDialog
                  projectId={project.id}
                  projectTitle={project.title}
                  minInvestment={project.minInvestment || 1000}
                />
              ) : (
                <Button
                  className="w-full mb-4 py-6 text-base"
                  variant="outline"
                  disabled
                >
                  Projet déjà financé
                </Button>
              )}

              {/* Note d'information */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex">
                  <Info
                    size={20}
                    className="text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Information importante</p>
                    <p>
                      Avant d&apos;investir, assurez-vous de bien comprendre les
                      risques associés à ce type d&apos;investissement.
                      Consultez notre{" "}
                      <Link href="/risques" className="underline">
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
