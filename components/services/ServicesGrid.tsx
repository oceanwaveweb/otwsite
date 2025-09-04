"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

import ServiceIcon from './ServiceIcon';
import { cn } from '@/lib/utils';
import { ServiceCategory } from '@/lib/services';

interface ServicesGridProps {
  categories: ServiceCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function ServicesGrid({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: ServicesGridProps) {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeCategoryData = categories.find(category => category.id === activeCategory);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [activeCategory]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "relative flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 group",
              activeCategory === category.id 
                ? "bg-[#8B0000] text-white shadow-lg" 
                : "bg-[#F5F5DC] text-[#333333] hover:bg-[#E8E8D0]"
            )}
          >
            <div className="mb-4 text-3xl">
              <ServiceIcon 
                name={category.icon} 
                className={cn(
                  "w-12 h-12 transition-transform duration-300 group-hover:scale-110",
                  activeCategory === category.id ? "text-white" : "text-[#8B0000]"
                )} 
              />
            </div>
            <h3 className="text-lg font-semibold text-center">{category.title}</h3>
            
            {activeCategory === category.id && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <ChevronDown className="w-6 h-6 text-[#8B0000] bg-white rounded-full p-1" />
              </div>
            )}
          </button>
        ))}
      </div>

      <div 
        className="overflow-hidden transition-all duration-500 ease-in-out" 
        style={{ height: activeCategory ? `${contentHeight}px` : '0px' }}
      >
        <div ref={contentRef} className="bg-white rounded-lg p-8 shadow-lg">
          {activeCategoryData && (
            <div className="grid max-h-[500px] grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#8B0000]">{activeCategoryData.title}</h2>
                <p className="text-gray-700 mb-6">{activeCategoryData.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {activeCategoryData.services.map((service, index) => (
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
              </div>
              <div className="hidden lg:block">
                <img 
                  src={activeCategoryData.image} 
                  alt={activeCategoryData.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}