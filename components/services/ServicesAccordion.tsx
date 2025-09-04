"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import ServiceIcon from './ServiceIcon';
import { cn } from '@/lib/utils';
import { ServiceCategory } from '@/lib/services';

interface ServicesAccordionProps {
  categories: ServiceCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function ServicesAccordion({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: ServicesAccordionProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(categories[0]?.id || null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    onCategoryChange(categoryId);
  };
  

  return (
    <div className="space-y-3">
      {categories.map((category) => {
        const isExpanded = expandedCategory === category.id;

        return (
          <div 
            key={category.id} 
            className="border rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 text-left transition-colors",
                isExpanded 
                  ? "bg-[#8B0000] text-white" 
                  : "bg-[#F5F5DC] text-gray-900 hover:bg-[#E8E8D0]"
              )}
              aria-expanded={isExpanded}
            >
              <div className="flex items-center">
                <ServiceIcon 
                  name={category.icon} 
                  className={cn(
                    "w-6 h-6 mr-3",
                    isExpanded ? "text-white" : "text-[#8B0000]"
                  )} 
                />
                <span className="font-medium">{category.title}</span>
              </div>
              <div>
                {isExpanded ? (
                  <ChevronUp className={cn("w-5 h-5", isExpanded ? "text-white" : "text-gray-500")} />
                ) : (
                  <ChevronDown className={cn("w-5 h-5", isExpanded ? "text-white" : "text-gray-500")} />
                )}
              </div>
            </button>

            <div 
              className={cn(
                "transition-all duration-300 ease-in-out overflow-hidden",
                isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="p-4">
                <p className="text-gray-700 mb-4">{category.description}</p>
                <div className="grid grid-cols-1 gap-3">
                  {category.services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1 text-[#8B0000]">
                        <ServiceIcon name={service.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{service.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}