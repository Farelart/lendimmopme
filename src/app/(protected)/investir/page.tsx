"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projectsData";

export default function InvestmentPage() {
  const [projectsData, setProjectsData] = useState(projects);

  const toggleFavorite = (id: number) => {
    setProjectsData(
      projectsData.map((project) =>
        project.id === id
          ? { ...project, isFavorite: !project.isFavorite }
          : project
      )
    );
  };

  // Function to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Function to determine the color of the progress bar based on category
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "environnement":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        );
      case "agriculture régénératrice et bas carbone":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-amber-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
            />
          </svg>
        );
      case "immobilier":
      case "immobilier commercial":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        );
      case "technologie":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        );
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
      case "santé":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
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
        Nos projets en crowdfunding
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectsData.map((project) => (
          <Link
            key={project.id}
            href={`/investir/${project.id}`}
            className="block transition-transform hover:scale-[1.02]"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
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

              <div className="p-4">
                {/* Status indicator */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    {project.status.includes("Fin de collecte") ? (
                      <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        <span className="mr-1">●</span>
                        {project.status}
                      </span>
                    ) : (
                      <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                        <span className="mr-1">●</span>
                        {project.status}
                      </span>
                    )}
                  </div>
                  {/* Favorite button */}
                  <button
                    onClick={() => toggleFavorite(project.id)}
                    className="text-gray-400 hover:text-red-500"
                    aria-label={
                      project.isFavorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    {project.isFavorite ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Project title and description */}
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Investment details */}
                <div className="flex justify-between mb-4 text-sm">
                  <div>
                    <p className="text-gray-500">Montant recherché</p>
                    <p className="font-semibold text-gray-800">
                      {formatCurrency(project.amount)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Rendement annuel</p>
                    <p className="font-semibold text-purple-600">
                      {project.yield}%
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative pt-1 mb-2">
                  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${project.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-600 to-pink-300"
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>0%</span>
                    <span>{project.progress}%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
