"use client";

import { useState } from 'react';

import ServicesGrid from './ServicesGrid';
import ServicesAccordion from './ServicesAccordion';
import { serviceCategories } from '@/data/serviceCategories';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function ServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="w-full py-16">
      {isMobile ? (
        <ServicesAccordion 
          categories={serviceCategories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      ) : (
        <ServicesGrid 
          categories={serviceCategories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      )}
    </div>
  );
}