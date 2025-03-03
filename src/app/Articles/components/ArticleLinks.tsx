import { ReactNode } from 'react';

interface ArticleLinkProps {
  href: string;
  children: ReactNode;
}

export const ArticleLink = ({ href, children }: ArticleLinkProps) => {
    return (
      <a 
        className="hover:text-red-500 hover:font-medium transition-all duration-200" 
        href={href}
      >
        {children}
      </a>
    );
  };