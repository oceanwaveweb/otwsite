import { ServiceCategory } from "@/lib/services";

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'heating',
    title: 'Pipe Repairs & Leak Fixes',
    description: 'Dripping faucets, burst pipes, or mystery leaks? I quickly diagnose and fix any pipe or leak issues to keep your home safe and dry.',
    icon: 'heating',
    image: 'https://images.pexels.com/photos/5746242/pexels-photo-5746242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    services: [
      { title: 'Leak Detection & Repair', icon: 'furnace-installation' },
      { title: 'Burst Pipe Repairs', icon: 'furnace-repair' },
      { title: 'Fixture Replacements', icon: 'water-heaters-service' },
      { title: 'Water Line Repairs', icon: 'boilers' },
      { title: 'Frozen Pipe Thawing', icon: 'garage-heaters' },
      { title: 'Emergency Leak Services', icon: 'fireplaces' }
    ]
  },
  {
    id: 'cooling',
    title: 'Drain Cleaning & Unclogging',
    description: 'Slow drains or stubborn clogs? I’ll get your sinks, showers, and toilets draining properly again with professional cleaning and snaking.',
    icon: 'cooling',
    image: 'https://images.pexels.com/photos/4489761/pexels-photo-4489761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    services: [
      { title: 'Drain Snaking', icon: 'air-conditioners' },
      { title: 'Clog Removal', icon: 'heat-pumps' },
      { title: 'Sewer Line Cleaning', icon: 'ductless-systems' },
      { title: 'Preventative Drain Maintenance', icon: 'maintenance' }
    ]
  },
  {
    id: 'water-heaters',
    title: 'Water Heater Services',
    description: 'Need hot water? I install, repair, and maintain all types of water heaters to keep your showers warm and your dishes clean.',
    icon: 'water-heaters',
    image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    services: [
      { title: 'Water Heater Installation', icon: 'water-heaters-service' },
      { title: 'Tankless Water Heaters', icon: 'tankless' },
      { title: 'Water Heater Repairs', icon: 'furnace-repair' },
      { title: 'Annual Maintenance Checks', icon: 'maintenance' }
    ]
  },
  {
    id: 'air-quality',
    title: 'Bathroom & Kitchen Plumbing',
    description: 'Upgrading your bathroom or kitchen? I handle everything from new fixture installations to full plumbing setups.',
    icon: 'air-quality',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    services: [
      { title: 'Faucet & Sink Installation', icon: 'purifiers' },
      { title: 'Toilet Repairs & Replacement', icon: 'water-heaters-service' },
      { title: 'Garbage Disposal Services', icon: 'droplets' },
      { title: 'Shower & Tub Installation', icon: 'maintenance' }
    ]
  },
  {
    id: 'other-solutions',
    title: 'Other Plumbing Solutions',
    description: 'From sump pumps to outdoor plumbing, I’ve got all your plumbing needs covered with reliable and efficient solutions.',
    icon: 'other-solutions',
    image: 'https://images.pexels.com/photos/4993069/pexels-photo-4993069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    services: [
      { title: 'Sump Pump Installation & Repair', icon: 'cog' },
      { title: 'Outdoor Hose Bib Repair', icon: 'wrench' },
      { title: 'Water Filtration Systems', icon: 'bar-chart-4' },
      { title: 'Emergency Plumbing Services', icon: 'wrench' }
    ]
  }
];
