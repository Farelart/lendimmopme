"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/lib/projectsData";
import sendInvestmentEmail from "@/actions/investirEmail";

type Project = {
  id: number;
  title: string;
  image: string;
  category: string;
  status: string;
  description: string;
  progress: number;
  amount: number;
  yield: number;
  duration?: number;
  minInvestment?: number;
  isFavorite: boolean;
  detailedDescription?: {
    overview: string;
    investmentSecurity: string;
    impactEnvironnemental: string;
    opportunitesRisques: {
      opportunites: string[];
      risques: string[];
    };
    stats: {
      projectsCount: number;
      installedCapacity: number;
      co2Reduction: number;
    };
    investmentProcess: string[];
  };
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Form state
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [investAmount, setInvestAmount] = useState("");

  useEffect(() => {
    if (params.id) {
      const projectId = parseInt(params.id as string);
      const foundProject = projects.find((p) => p.id === projectId);

      if (foundProject) {
        setProject(foundProject);
      } else {
        // Project not found, redirect to projects list
        router.push("/investir");
      }
      setLoading(false);
    }
  }, [params.id, router]);

  // Function to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create form data
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("investAmount", investAmount);

      if (project) {
        formData.append("projectTitle", project.title);
        formData.append("projectId", project.id.toString());
      }

      // Send email
      const result = await sendInvestmentEmail(formData);

      if (result.success) {
        // Show success message
        setFormSubmitted(true);

        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setInvestAmount("");

        // Close modal after 3 seconds
        setTimeout(() => {
          setShowModal(false);
          // Reset form submitted state after modal is closed
          setTimeout(() => {
            setFormSubmitted(false);
          }, 300);
        }, 3000);
      } else {
        console.error("Failed to send email:", result.error);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="px-4 md:px-0 md:container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Projet non trouvé
        </h1>
        <p className="mb-6">Le projet que vous recherchez n&apos;existe pas.</p>
        <Link
          href="/investir"
          className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700"
        >
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-0 md:container mx-auto py-8">
      <Link
        href="/investir"
        className="inline-flex items-center text-purple-600 mb-6 hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Retour aux projets
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Project header with image */}
        <div className="relative h-64 md:h-96">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Image du projet</span>
            </div>
          )}

          {/* Status indicator */}
          <div className="absolute top-4 left-4">
            {project.status.includes("Fin de collecte") ? (
              <span className="inline-flex flex-col justify-center md:flex-row bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                <span className="flex items-center">
                  <span className="mr-1">●</span>
                  <span>Fin de collecte</span>
                </span>
                <span>{project.status.replace("Fin de collecte ", "")}</span>
              </span>
            ) : (
              <span className="inline-flex flex-col bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                <span className="flex items-center">
                  <span className="mr-1">●</span>
                  <span>Collecte en cours</span>
                </span>
              </span>
            )}
          </div>

          {/* Category badge */}
          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-800 shadow-md">
            {project.category}
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {project.title}
          </h1>

          {/* Project description */}
          <p className="text-gray-600 mb-8">{project.description}</p>

          {/* Key Investment Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-purple-600 font-bold text-2xl mb-2">
                {project.yield}%
              </div>
              <div className="text-gray-600 text-sm">Rendement par an</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-purple-600 font-bold text-2xl mb-2">
                {project.duration} ans
              </div>
              <div className="text-gray-600 text-sm">
                Durée d&apos;investissement
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-purple-600 font-bold text-2xl mb-2">
                {formatCurrency(project.minInvestment || 1000)}
              </div>
              <div className="text-gray-600 text-sm">
                Investissement minimum
              </div>
            </div>
          </div>

          {/* Investment details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Détails de l&apos;investissement
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Montant recherché</p>
                  <p className="font-bold text-gray-800 text-xl">
                    {formatCurrency(project.amount)}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Rendement annuel</p>
                  <p className="font-bold text-purple-600 text-xl">
                    {project.yield}%
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Progression de la collecte
                  </p>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-3 mb-1 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${project.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>0%</span>
                      <span className="font-medium">{project.progress}%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Investir dans ce projet
              </h3>
              <p className="text-gray-600 mb-6">
                Rejoignez les investisseurs qui soutiennent ce projet et
                bénéficiez d&apos;un rendement attractif de {project.yield}% par
                an pendant {project.duration} ans.
              </p>

              <button
                className="w-full px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                onClick={() => setShowModal(true)}
              >
                Investir maintenant
              </button>
            </div>
          </div>

          {/* Tabs for detailed information */}
          <div className="border-t pt-8">
            <div className="flex border-b mb-6 overflow-x-auto">
              <button
                className={`px-4 py-2 font-medium ${activeTab === "overview" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("overview")}
              >
                Présentation
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === "security" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("security")}
              >
                Sécurité d&apos;investissement
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === "impact" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("impact")}
              >
                Impact environnemental
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === "opportunities" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("opportunities")}
              >
                Opportunités et risques
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === "process" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("process")}
              >
                Processus d&apos;investissement
              </button>
            </div>

            {/* Tab content */}
            <div className="mb-8">
              {activeTab === "overview" && project.detailedDescription && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    À propos de GLS Energie AG
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.detailedDescription.overview}
                  </p>

                  {/* Stats */}
                  <div className="bg-green-50 p-6 rounded-lg mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Informations sur GLS Energie AG
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-gray-800">
                          {project.detailedDescription.stats.projectsCount}
                        </div>
                        <div className="text-sm text-gray-600">
                          Projets en cours et réalisés
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-800">
                          {project.detailedDescription.stats.installedCapacity}
                        </div>
                        <div className="text-sm text-gray-600">
                          Capacité installée en MW
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-800">
                          {project.detailedDescription.stats.co2Reduction}
                        </div>
                        <div className="text-sm text-gray-600">
                          Milliers de tonnes de CO2 évitées
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && project.detailedDescription && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Sécurité de l&apos;investissement
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.detailedDescription.investmentSecurity}
                  </p>
                </div>
              )}

              {activeTab === "impact" && project.detailedDescription && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Impact environnemental
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.detailedDescription.impactEnvironnemental}
                  </p>
                </div>
              )}

              {activeTab === "opportunities" && project.detailedDescription && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Opportunités et risques sélectionnés
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Opportunités
                      </h4>
                      <ul className="space-y-2">
                        {project.detailedDescription.opportunitesRisques.opportunites.map(
                          (item, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Risques
                      </h4>
                      <ul className="space-y-2">
                        {project.detailedDescription.opportunitesRisques.risques.map(
                          (item, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-500 mr-2 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "process" && project.detailedDescription && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Comment fonctionne votre investissement
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {project.detailedDescription.investmentProcess.map(
                      (step, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-6 rounded-lg text-center"
                        >
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 font-bold text-xl mb-4">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-purple-50 p-6 rounded-lg text-center mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Prêt à investir dans l&apos;avenir de l&apos;énergie verte ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez les investisseurs qui soutiennent la transition
              énergétique tout en bénéficiant d&apos;un rendement attractif.
            </p>
            <button
              className="px-8 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
              onClick={() => setShowModal(true)}
            >
              Souscrire à l&apos;obligation verte
            </button>
          </div>
        </div>
      </div>

      {/* Investment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Merci pour votre intérêt !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous contacterons sous 48h pour finaliser votre
                    investissement.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      Investir dans {project.title}
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full p-3 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full p-3 border rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border rounded-md"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 border rounded-md"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="investAmount"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Montant à investir (€){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="investAmount"
                        value={investAmount}
                        onChange={(e) => setInvestAmount(e.target.value)}
                        className="w-full p-3 border rounded-md"
                        min="1000"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Montant minimum :{" "}
                        {formatCurrency(project.minInvestment || 1000)}
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Confirmer mon intérêt
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
