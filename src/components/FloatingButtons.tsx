export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp */}
      <a
        href="https://wa.me/51926572115?text=Hola%20Stargirl!%20Vi%20su%20catálogo%20y%20quiero%20hacer%20un%20pedido"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-200 shadow-lg text-white group"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
          <path d="M20.52 3.48C18.25 1.25 15.3 0 12.14 0 5.6 0 .32 5.29.32 11.86c0 2.09.55 4.13 1.6 5.92L0 24l6.35-1.67c1.73.94 3.68 1.43 5.79 1.43 6.56 0 11.85-5.29 11.85-11.85 0-3.17-1.24-6.12-3.47-8.34zM12.14 21.54c-1.81 0-3.56-.48-5.08-1.4l-.36-.22-3.77.98.99-3.71-.24-.38c-1.02-1.62-1.56-3.48-1.56-5.41 0-5.44 4.43-9.87 9.87-9.87 2.63 0 5.1 1.03 6.97 2.9 1.87 1.87 2.9 4.34 2.9 6.97 0 5.44-4.43 9.87-9.87 9.87zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.09-.47-.14-.66.14-.19.28-.74.95-.9 1.15-.16.2-.32.22-.62.07-1.74-.86-2.88-1.56-4.03-3.55-.3-.5.3-.46.86-1.54.1-.19.05-.35-.02-.49-.08-.14-.66-1.59-.9-2.18-.24-.56-.48-.49-.66-.5-.17-.01-.37-.01-.56-.01-.19 0-.51.07-.78.35-.27.28-1.02 1-1.02 2.44s.24 2.83.27 3.03c.03.2 2.06 3.26 5.04 4.48.7.3 1.25.48 1.67.6.7.23 1.34.2 1.84.12.56-.08 1.75-.71 2-1.4.25-.69.25-1.28.18-1.4-.08-.12-.27-.19-.56-.33z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/stargirlshop.era?igsh=am0xcHB5cjFpdjY0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-brand-pink-hot to-brand-pink-deep hover:scale-110 transition-all duration-200 shadow-lg text-white"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
        </svg>
      </a>

      {/* TikTok */}
      <a
        href="https://vm.tiktok.com/ZS9FqhtNW3h6W-wwFKG/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black hover:bg-gray-800 hover:scale-110 transition-all duration-200 shadow-lg text-white border border-white"
        aria-label="TikTok"
        title="TikTok"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.05-.09z"/>
        </svg>
      </a>
    </div>
  );
}
