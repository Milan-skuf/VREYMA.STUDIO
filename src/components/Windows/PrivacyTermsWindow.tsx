import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

interface PrivacyTermsProps {
  type: 'privacy' | 'terms';
}

export const PrivacyTermsWindow: React.FC<PrivacyTermsProps> = ({ type }) => {
  if (type === 'privacy') {
    return (
      <div className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
        <div className="flex items-center gap-2 text-black font-mono font-bold text-sm border-b border-zinc-200 pb-3">
          <ShieldCheck className="w-4 h-4 text-black" />
          <span>PRIVACY POLICY // DATENSCHUTZ</span>
        </div>
        
        <p>This Privacy Policy outlines how ILNUR.STUDIO collects, processes, and protects the data submitted during consultation and project estimation.</p>

        <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[01] DATA COLLECTION</h4>
        <p>We only collect information voluntarily provided in project brief forms (Name, Telegram handle, Email address, project specifications).</p>

        <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[02] DATA USAGE</h4>
        <p>Submitted information is strictly used to communicate regarding technical proposals, budget quotes, and milestones. No data is shared or sold to third parties.</p>

        <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[03] SECURITY STANDARDS</h4>
        <p>All communication channels utilize encrypted protocols. We take technical measures to prevent unauthorized access.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
      <div className="flex items-center gap-2 text-black font-mono font-bold text-sm border-b border-zinc-200 pb-3">
        <FileText className="w-4 h-4 text-black" />
        <span>TERMS OF SERVICE // AGREEMENT</span>
      </div>

      <p>Welcome to ILNUR.STUDIO. By requesting digital design and development services, you agree to the following terms.</p>

      <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[01] INTELLECTUAL PROPERTY</h4>
      <p>Upon 100% completion and final payment, full ownership rights for custom code, 3D assets, and UI design pass to the client.</p>

      <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[02] WARRANTY & SUPPORT</h4>
      <p>All deployed projects include a 30-day post-launch warranty period for technical maintenance and bug fixes.</p>

      <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[03] PAYMENT SCHEDULE</h4>
      <p>Standard payment terms: 50% initial deposit upon milestone acceptance and 50% upon final staging approval prior to production deployment.</p>
    </div>
  );
};

