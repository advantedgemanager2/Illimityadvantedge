import {
  Factory,
  Building2,
  Car,
  Ship,
  TrendingUp,
  TrendingDown,
  Minus,
  Shield,
  Leaf,
  Zap,
  Globe,
  Target,
  BarChart3,
  FileText,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Scale,
  Flame,
  Droplets,
  Wind,
  Sun,
  Recycle,
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
  Settings,
  Users,
  DollarSign,
  Percent,
  Activity,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Factory,
  Building2,
  Car,
  Ship,
  TrendingUp,
  TrendingDown,
  Minus,
  Shield,
  Leaf,
  Zap,
  Globe,
  Target,
  BarChart3,
  FileText,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Scale,
  Flame,
  Droplets,
  Wind,
  Sun,
  Recycle,
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
  Settings,
  Users,
  DollarSign,
  Percent,
  Activity,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export default function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export { iconMap };
