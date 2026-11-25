import React from 'react';
import { CategoryMetadata } from '../types/document';
import { ShieldCheck, AlertTriangle, Scale, GraduationCap, Activity, ArrowRight, Folder } from 'lucide-react';

interface CategoryCardProps {
  category: CategoryMetadata;
  count: number;
  onSelect: (categoryName: string) => void;
  isSelected?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  count,
  onSelect,
  isSelected = false
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-amber-600" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-cyan-600" />;
      default:
        return <Folder className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <div
      onClick={() => onSelect(category.name)}
      className={`rounded-xl border p-5 cursor-pointer transition-all flex flex-col justify-between ${
        isSelected
          ? 'bg-sky-50/60 border-sky-400 ring-2 ring-sky-200 shadow-md'
          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
            {getIcon(category.iconName)}
          </div>
          <div className="text-right">
            <span className="text-xl font-bold font-mono text-slate-900 tabular-nums">
              {count}
            </span>
            <span className="text-[11px] text-slate-500 block">
              {count === 1 ? 'documento' : 'documentos'}
            </span>
          </div>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
          {category.name}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed mb-5">
          {category.description}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelect(category.name);
        }}
        className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
          isSelected
            ? 'bg-sky-600 text-white hover:bg-sky-700'
            : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
        }`}
      >
        <span>Ver documentos</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
