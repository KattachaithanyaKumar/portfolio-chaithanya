import React from 'react';
import {
  Sparkles,
  Layout,
  Gauge,
  Layers,
  Server,
  GitMerge,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Terminal,
  Code2,
  Cpu,
  Boxes,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  FileText,
  Clock,
  MapPin,
  CheckCircle2,
  Send,
  ArrowDown,
  ArrowUp,
  LucideProps,
} from 'lucide-react';

interface IconRendererProps extends LucideProps {
  name: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, ...props }) => {
  switch (name.toLowerCase()) {
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'layout':
      return <Layout {...props} />;
    case 'gauge':
      return <Gauge {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'server':
      return <Server {...props} />;
    case 'gitmerge':
      return <GitMerge {...props} />;
    case 'github':
      return <Github {...props} />;
    case 'linkedin':
      return <Linkedin {...props} />;
    case 'twitter':
    case 'x':
      return <Twitter {...props} />;
    case 'mail':
      return <Mail {...props} />;
    case 'terminal':
      return <Terminal {...props} />;
    case 'code2':
      return <Code2 {...props} />;
    case 'cpu':
      return <Cpu {...props} />;
    case 'boxes':
      return <Boxes {...props} />;
    case 'arrowupright':
      return <ArrowUpRight {...props} />;
    case 'chevronright':
      return <ChevronRight {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'xicon':
      return <X {...props} />;
    case 'filetext':
      return <FileText {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'mappin':
      return <MapPin {...props} />;
    case 'checkcircle2':
      return <CheckCircle2 {...props} />;
    case 'send':
      return <Send {...props} />;
    case 'arrowdown':
      return <ArrowDown {...props} />;
    case 'arrowup':
      return <ArrowUp {...props} />;
    default:
      return <ExternalLink {...props} />;
  }
};
