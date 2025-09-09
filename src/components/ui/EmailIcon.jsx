// This file exports the EmailIcon component using the original Gmail envelope SVG icon.
export default function EmailIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#fff"/>
      <path d="M8 14v20c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2H10c-1.1 0-2 .9-2 2z" fill="#EA4335"/>
      <path d="M40 14l-16 12L8 14" fill="#fff"/>
      <path d="M8 14l16 12 16-12" stroke="#EA4335" strokeWidth="2"/>
    </svg>
  );
}
