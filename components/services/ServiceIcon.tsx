import { 
    Thermometer, 
    Snowflake, 
    Droplets, 
    Wind, 
    Wrench, 
    Home, 
    Flame, 
    Cog, 
    BarChart4, 
    Fan, 
    Hammer, 
    BatteryCharging, 
    Atom
  } from 'lucide-react';
  import { cn } from '@/lib/utils';
  
  interface ServiceIconProps {
    name: string;
    className?: string;
  }
  
  export default function ServiceIcon({ name, className }: ServiceIconProps) {
    const iconClassName = cn("w-6 h-6", className);
  
    switch (name) {
      case 'heating':
        return <Thermometer className={iconClassName} />;
      case 'cooling':
        return <Snowflake className={iconClassName} />;
      case 'water-heaters':
        return <Droplets className={iconClassName} />;
      case 'air-quality':
        return <Wind className={iconClassName} />;
      case 'other-solutions':
        return <Wrench className={iconClassName} />;
      case 'furnace-installation':
        return <Home className={iconClassName} />;
      case 'furnace-repair':
        return <Cog className={iconClassName} />;
      case 'water-heaters-service':
        return <Droplets className={iconClassName} />;
      case 'boilers':
        return <Flame className={iconClassName} />;
      case 'garage-heaters':
        return <Thermometer className={iconClassName} />;
      case 'fireplaces':
        return <Flame className={iconClassName} />;
      case 'air-conditioners':
        return <Snowflake className={iconClassName} />;
      case 'heat-pumps':
        return <BarChart4 className={iconClassName} />;
      case 'ductless-systems':
        return <Fan className={iconClassName} />;
      case 'maintenance':
        return <Hammer className={iconClassName} />;
      case 'tankless':
        return <BatteryCharging className={iconClassName} />;
      case 'purifiers':
        return <Atom className={iconClassName} />;
      default:
        return <Wrench className={iconClassName} />;
    }
  }