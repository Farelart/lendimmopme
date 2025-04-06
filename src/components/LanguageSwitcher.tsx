"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-2 text-sm font-medium transition-colors"
      >
        <Globe size={16} />
        <span>{locale === "fr" ? "Français" : "Allemand"}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => switchLanguage("fr")}
              className={`w-full text-left px-4 py-2 text-sm ${locale === "fr" ? "bg-purple-50 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
              role="menuitem"
            >
              Français
            </button>
            <button
              onClick={() => switchLanguage("de")}
              className={`w-full text-left px-4 py-2 text-sm ${locale === "de" ? "bg-purple-50 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
              role="menuitem"
            >
              Allemand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
