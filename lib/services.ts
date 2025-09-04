export interface Service {
    title: string;
    icon: string;
    description?: string;
  }
  
  export interface ServiceCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    services: Service[];
  }