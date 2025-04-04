"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projectsData";

export default function InvestmentPage() {
  // Function to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Function to determine the category icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "énergie renouvelable":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  return (
    <div className="px-4 md:px-0 md:container mx-auto py-8">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
        Parcs solaires et éoliens sélectionnés dans le portefeuille de GLS
        Energie AG
      </h1>

      <div className="max-w-4xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/investir/${project.id}`}
            className="block transition-transform hover:scale-[1.02] mb-8"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                {/* Project image */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <span className="text-gray-400">Image du projet</span>
                  )}
                </div>

                {/* Category icon */}
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                  {getCategoryIcon(project.category)}
                </div>
              </div>

              <div className="p-6">
                {/* Status indicator */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="inline-flex items-center bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                      <span className="mr-1">●</span>
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>

                {/* Project description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progression: {project.progress}%</span>
                    <span>{formatCurrency(project.amount)}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${project.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Key details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-gray-500 text-xs">Rendement annuel</p>
                    <p className="font-bold text-purple-600">
                      {project.yield}%
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-gray-500 text-xs">Durée</p>
                    <p className="font-bold text-gray-800">
                      {project.duration} ans
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <span className="inline-block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors">
                    Découvrir l&apos;obligation verte
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Opportunities and Risks Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Opportunités et risques sélectionnés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Opportunités</h3>
              <ul className="space-y-2">
                {projects[0].detailedDescription?.opportunitesRisques.opportunites.map(
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
              <h3 className="font-semibold text-gray-800 mb-3">Risques</h3>
              <ul className="space-y-2">
                {projects[0].detailedDescription?.opportunitesRisques.risques.map(
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

          <div className="text-center mt-8">
            <Link
              href={`/investir/1`}
              className="inline-block py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
            >
              Souscrire à l&apos;obligation verte maintenant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
