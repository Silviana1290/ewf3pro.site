import React, { Component } from 'react';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, MessageCircle } from 'lucide-react';
interface ShareButtonsProps {
  url: string;
  title: string;
}
export function ShareButtons({
  url,
  title
}: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };
  return <div className="flex items-center space-x-2">
      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 mr-2">
        Share:
      </span>

      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" aria-label="Share on Facebook">
        <Facebook size={16} />
      </a>

      <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors" aria-label="Share on Twitter">
        <Twitter size={16} />
      </a>

      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors" aria-label="Share on LinkedIn">
        <Linkedin size={16} />
      </a>

      <a href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors" aria-label="Share on WhatsApp">
        <MessageCircle size={16} />
      </a>

      <button onClick={handleCopy} className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors" aria-label="Copy Link">
        <LinkIcon size={16} />
      </button>
    </div>;
}