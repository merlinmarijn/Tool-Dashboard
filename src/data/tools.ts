import { Tool } from '../types/Tool';

export const tools: Tool[] = [
  {
    id: 'filament-calculator',
    title: 'Filament Calculator',
    description: 'Calculate 3D printing filament costs with precision',
    icon: 'Printer',
    route: '/tools/filament-calculator',
    categoryId: 'calculators'
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'Perform quick calculations with this sleek and intuitive calculator',
    icon: 'Calculator',
    route: '/tools/calculator',
    categoryId: 'calculators'
  },
  {
    id: 'notepad',
    title: 'Notepad',
    description: 'Take quick notes and organize your thoughts efficiently',
    icon: 'FileText',
    route: '/tools/notepad',
    categoryId: 'productivity'
  },
  {
    id: 'timer',
    title: 'Timer',
    description: 'Track time with precision using this minimalist timer',
    icon: 'Timer',
    route: '/tools/timer',
    categoryId: 'utilities'
  },
  {
    id: 'converter',
    title: 'Unit Converter',
    description: 'Convert between different units of measurement seamlessly',
    icon: 'ArrowLeftRight',
    route: '/tools/converter',
    categoryId: 'calculators'
  }
];