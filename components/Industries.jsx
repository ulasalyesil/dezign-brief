'use client'
import { motion } from "framer-motion";

// components
import IndustryCard from "./IndustryCard";

// icons
import EcommerceIcon from "@/public/icons/EcommerceIcon";
import TechnologyIcon from "@/public/icons/TechnologyIcon";
import HealthIcon from "@/public/icons/HealthIcon";
import EducationIcon from "@/public/icons/EducationIcon";
import FashionIcon from "@/public/icons/FashionIcon";
import TravelIcon from "@/public/icons/TravelIcon";
import HumanResourcesIcon from "@/public/icons/HumanResourcesIcon";
import MediaIcon from "@/public/icons/MediaIcon";
import FinanceIcon from "@/public/icons/FinanceIcon";
import LifestyleIcon from "@/public/icons/LifestyleIcon";
import FoodIcon from "@/public/icons/FoodIcon";
import ArtIcon from "@/public/icons/ArtIcon";
import GamingIcon from "@/public/icons/GamingIcon";

export default function Industries() {
  const industries = [
    { label: "E-commerce", icon: <EcommerceIcon color="#111827" /> },
    { label: "Technology", icon: <TechnologyIcon color="#111827" /> },
    { label: "Health", icon: <HealthIcon color="#111827" /> },
    { label: "Education", icon: <EducationIcon color="#111827" /> },
    { label: "Lifestyle", icon: <LifestyleIcon color="#111827" /> },
    { label: "Fashion", icon: <FashionIcon color="#111827" /> },
    { label: "Travel", icon: <TravelIcon color="#111827" /> },
    { label: "Media", icon: <MediaIcon color="#111827" /> },
    { label: "Finance", icon: <FinanceIcon color="#111827" /> },
    {
      label: "Human Resources",
      icon: <HumanResourcesIcon color="#111827" />,
    },
    { label: "Food", icon: <FoodIcon color="#111827" /> },
    { label: "Art", icon: <ArtIcon color="#111827" /> },
    { label: "Gaming", icon: <GamingIcon color="#111827" /> },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, type: "spring", damping: 20, delay: 1.0 }}
      className="flex flex-col gap-12"
    >
      <div className="flex flex-col gap-8 items-center justify-center bg-gray-100 px-6 py-10 rounded-[3rem] border border-gray-200">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center max-w-[320px]">
          Project briefs for 13 different industries.
        </h3>
      </div>
      <div class="flex p-6 justify-between items-center content-center gap-y-3 self-stretch flex-col sm:flex-row flex-wrap max-w-[816px] bg-white border border-gray-200 rounded-[3rem] shadow-lg">
        {industries.map((industry, index) => (
          <IndustryCard
            key={index}
            label={industry.label}
            icon={industry.icon}
          />
        ))}
      </div>
    </motion.div>
  );
}
