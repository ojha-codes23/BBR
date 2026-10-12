import React from 'react'

const QuizCompleted = () => {
  return (
   <>
         <main class="gl-content-body">
         {/* <!-- page-1 --> */}
  <div class="bg-white w-full max-w-[850px] rounded-[24px] border border-gray-100 shadow-xl shadow-gray-100/40 p-6 md:p-12 relative">
        
        {/* <!-- Center Achievement Medal representation matching quiz3.png --> */}
        <div class="flex justify-center mb-6">
            <div class="w-[64px] h-[64px] flex items-center justify-center filter drop-shadow-sm">
                {/* Inline Vector SVG for perfect crispness of the Gold Medal, Ribbons and Rank '1' */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="w-full h-full">
                    {/* Ribbon left (Blue) */}
                    <path d="M22 6 L32 30 L26 32 L16 8 Z" fill="#4B68E2"/>
                    {/* Ribbon right (Red) */}
                    <path d="M42 6 L32 30 L38 32 L48 8 Z" fill="#E24B4B"/>
                    {/* Ribbon center highlight */}
                    <path d="M28 6 L32 30 L36 6 Z" fill="#F4F5F7"/>
                    {/* Medal Base Circle (Gold radial gradient representation) */}
                    <circle cx="32" cy="38" r="18" fill="url(#goldGradient)" stroke="#D4AF37" stroke-width="1.5"/>
                    <circle cx="32" cy="38" r="14" fill="none" stroke="#FFD700" stroke-width="1" stroke-dasharray="3 2"/>
                    {/* Rank Number text '1' representing Gold */}
                    <text x="32" y="44" font-family="'Montserrat', sans-serif" font-weight="800" font-size="16" fill="#8B6508" text-anchor="middle">1</text>
                    
                    {/* Gradient definitions */}
                    <defs>
                        <radialGradient id="goldGradient" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stop-color="#FFE875" />
                            <stop offset="50%" stop-color="#FFD700" />
                            <stop offset="100%" stop-color="#B8860B" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>

        {/* <!-- Main Feedback Headline --> */}
        <h1 class="text-center text-[#101828] text-2xl md:text-[32px] font-bold tracking-tight mb-8">
            Quiz Complete!
        </h1>

        {/* <!-- Score Capsule Summary Row Container --> */}
        <div class="bg-[#F8F9FA] border border-gray-200/60 rounded-[14px] px-6 py-4 flex flex-row justify-between items-center mb-8">
            <div class="text-[#344054] text-sm md:text-base font-semibold">
                Gold Score: <span class="text-[#101828]">90%</span>
            </div>
            <div class="text-[#667085] text-sm md:text-base font-medium">
                Attempts : <span class="text-[#101828] font-semibold">4</span>
            </div>
        </div>

        {/* <!-- Questions Answered Inner Box Container --> */}
        <div class="bg-[#FAFAFA] border border-gray-200/50 rounded-[20px] p-6 md:p-8 mb-8">
            <h2 class="text-[#344054] text-sm md:text-base font-semibold mb-6">
                Questions you answered
            </h2>

            <div class="space-y-6">
                
                {/* <!-- Question Item 1: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 2: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 3: Incorrect (According to quiz3.png layout) --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#FEF3F2] border border-[#FECDCA] rounded-lg px-4 py-3 flex items-center justify-between text-[#B42318]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-solid fa-xmark text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 4: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 5: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 6: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

            </div>
        </div>

        {/* <!-- Form Button Controls Footer Panel Layout --> */}
        <div class="flex flex-row justify-end items-center gap-4 mt-6">
            {/* <!-- Back to course link button (Standard <a> tag) --> */}
            <a href="#" class="text-[#101828] text-sm md:text-base font-semibold hover:underline px-4 py-2 transition duration-200">
                Back to course
            </a>
            
            {/* <!-- Download Certificate (using brand emerald color as standard <a> tag) --> */}
            <a href="#" class="bg-[#12B76A] hover:bg-[#0E9F5D] text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-150 transform active:scale-95 shadow-md shadow-emerald-200/50">
                Download Certificate <i class="fa-solid fa-download text-xs md:text-sm"></i>
            </a>
        </div>

    </div>
          {/* <!-- page-1 --> */}

           {/* <!-- page-2 --> */}
  {/* <!-- Main Quiz Feedback Outer Card Block --> */}
    <div class="bg-white w-full max-w-[850px] rounded-[24px] border border-gray-100 shadow-xl shadow-gray-100/40 p-6 md:p-12 relative">
        
        {/* <!-- Center Achievement Medal representation matching quiz2.png --> */}
        <div class="flex justify-center mb-6">
            <div class="w-[64px] h-[64px] flex items-center justify-center filter drop-shadow-sm">
                {/* <!-- Inline Vector SVG for perfect crispness of the medal, ribbons and rank '3' --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="w-full h-full">
                    {/* <!-- Ribbon left (Blue) --> */}
                    <path d="M22 6 L32 30 L26 32 L16 8 Z" fill="#4B68E2"/>
                    {/* <!-- Ribbon right (Red) --> */}
                    <path d="M42 6 L32 30 L38 32 L48 8 Z" fill="#E24B4B"/>
                    {/* <!-- Ribbon center highlight --> */}
                    <path d="M28 6 L32 30 L36 6 Z" fill="#F4F5F7"/>
                    {/* <!-- Medal Base Circle (Bronze radial gradient representation) --> */}
                    <circle cx="32" cy="38" r="18" fill="url(#bronzeGradient)" stroke="#A0522D" stroke-width="1.5"/>
                    <circle cx="32" cy="38" r="14" fill="none" stroke="#D2691E" stroke-width="1" stroke-dasharray="3 2"/>
                    {/* <!-- Rank Number text '3' representing bronze --> */}
                    <text x="32" y="44" font-family="'Montserrat', sans-serif" font-weight="800" font-size="16" fill="#5C2D16" text-anchor="middle">3</text>

                    {/* <!-- Gradient definitions --> */}
                    <defs>
                        <radialGradient id="bronzeGradient" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stop-color="#E69C65" />
                            <stop offset="50%" stop-color="#CD7F32" />
                            <stop offset="100%" stop-color="#8B4513" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>

        {/* <!-- Main Feedback Headline --> */}
        <h1 class="text-center text-[#101828] text-2xl md:text-[32px] font-bold tracking-tight mb-8">
            Quiz Complete!
        </h1>

        {/* <!-- Score Capsule Summary Row Container --> */}
        <div class="bg-[#F8F9FA] border border-gray-200/60 rounded-[14px] px-6 py-4 flex flex-row justify-between items-center mb-8">
            <div class="text-[#344054] text-sm md:text-base font-semibold">
                Bronze Score: <span class="text-[#101828]">72%</span>
            </div>
            <div class="text-[#667085] text-sm md:text-base font-medium">
                Attempts : <span class="text-[#101828] font-semibold">2</span>
            </div>
        </div>

        {/* <!-- Questions Answered Inner Box Container --> */}
        <div class="bg-[#FAFAFA] border border-gray-200/50 rounded-[20px] p-6 md:p-8 mb-8">
            <h2 class="text-[#344054] text-sm md:text-base font-semibold mb-6">
                Questions you answered
            </h2>

            <div class="space-y-6">
                
                {/* <!-- Question Item 1: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 2: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 3: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 4: Correct --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 5: Incorrect --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#FEF3F2] border border-[#FECDCA] rounded-lg px-4 py-3 flex items-center justify-between text-[#B42318]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-solid fa-xmark text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 6: Incorrect --> */}
                <div class="space-y-2">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#FEF3F2] border border-[#FECDCA] rounded-lg px-4 py-3 flex items-center justify-between text-[#B42318]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-solid fa-xmark text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

            </div>
        </div>

        {/* <!-- Form Button Controls Footer Panel Layout --> */}
        <div class="flex flex-col sm:flex-row justify-end items-center gap-4 mt-6">
            {/* <!-- Back to course link button --> */}
            <a href="#" class="text-[#101828] text-sm md:text-base font-semibold hover:underline px-4 py-2 transition duration-200">
                Back to course
            </a>

            {/* <!-- Download Certificate (using custom brand emerald color) --> */}
            <a href="#" class="w-full sm:w-auto bg-[#12B76A] hover:bg-[#0E9F5D] text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-150 transform active:scale-95 shadow-md shadow-emerald-200/50">
                Download Certificate <i class="fa-solid fa-download text-xs md:text-sm"></i>
            </a>

            {/* <!-- Review Recommended (using GrantLink branding blue color) --> */}
            <a href="#" class="w-full sm:w-auto bg-[#0076B2] hover:bg-[#005E8F] text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-150 transform active:scale-95 shadow-md shadow-sky-200/50">
                Review Recommended <i class="fa-solid fa-arrow-right text-xs md:text-sm"></i>
            </a>
        </div>

    </div>
            {/* <!-- page-2 --> */}

             {/* <!-- page-3 --> */}

    {/* <!-- Main Quiz Feedback Outer Card Block --> */}
    <div class="bg-white w-full max-w-[850px] rounded-[24px] border border-gray-100 shadow-xl shadow-gray-100/40 p-6 md:p-12 relative">
        
        {/* <!-- Center Warning Red Cross Circle Badge Representation --> */}
        <div class="flex justify-center mb-6">
            <div class="w-[56px] h-[56px] rounded-full bg-[#FFF0F0] border border-[#FECDCA] flex items-center justify-center text-[#D92D20] text-xl shadow-sm">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>

        {/* <!-- Main Feedback Headline --> */}
        <h1 class="text-center text-[#101828] text-2xl md:text-[32px] font-bold tracking-tight mb-8">
            Quiz Complete!
        </h1>

        {/* <!-- Score Capsule Summary Row Container --> */}
        <div class="bg-[#F8F9FA] border border-gray-200/60 rounded-[14px] px-6 py-4 flex flex-row justify-between items-center mb-8">
            <div class="text-[#344054] text-sm md:text-base font-semibold">
                Your Score: <span class="text-[#101828]">25%</span>
            </div>
            <div class="text-[#667085] text-sm md:text-base font-medium">
                Attempts : <span class="text-[#101828] font-semibold">4</span>
            </div>
        </div>

        {/* <!-- Questions Answered Inner Box Container --> */}
        <div class="bg-[#FAFAFA] border border-gray-200/50 rounded-[20px] p-6 md:p-8 mb-8">
            <h2 class="text-[#344054] text-sm md:text-base font-semibold mb-6">
                Questions you answered
            </h2>

            <div class="space-y-6">
                
                {/* <!-- Question Item 1: Correct --> */}
                <div class="space-y-3">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 2: Incorrect --> */}
                <div class="space-y-3">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#FEF3F2] border border-[#FECDCA] rounded-lg px-4 py-3 flex items-center justify-between text-[#B42318]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-solid fa-xmark text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 3: Incorrect --> */}
                <div class="space-y-3">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#FEF3F2] border border-[#FECDCA] rounded-lg px-4 py-3 flex items-center justify-between text-[#B42318]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-solid fa-xmark text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 4: Correct --> */}
                <div class="space-y-3">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#ECFDF3] border border-[#A3E0C1] rounded-lg px-4 py-3 flex items-center justify-between text-[#027A48]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-regular fa-circle-check text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 5: Incorrect --> */}
                <div class="space-y-3">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#FEF3F2] border border-[#FECDCA] rounded-lg px-4 py-3 flex items-center justify-between text-[#B42318]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-solid fa-xmark text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

                {/* <!-- Question Item 6: Incorrect --> */}
                <div class="space-y-3">
                    <p class="text-[#101828] text-[13px] md:text-sm font-medium leading-relaxed">
                        Question 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <div class="bg-[#FEF3F2] border border-[#FECDCA] rounded-lg px-4 py-3 flex items-center justify-between text-[#B42318]">
                        <span class="text-[12px] md:text-sm font-medium">
                            <span class="font-semibold me-1">Your Answer:</span> Lorem ipsum dolor sit amet
                        </span>
                        <i class="fa-solid fa-xmark text-sm md:text-base flex-shrink-0 ms-2"></i>
                    </div>
                </div>

            </div>
        </div>

        {/* <!-- Form Button Controls Footer Panel Layout --> */}
        <div class="flex flex-col sm:flex-row justify-end items-center gap-4 mt-6">
            <a href="#" class="text-[#101828] text-sm md:text-base font-semibold hover:underline px-4 py-2 transition duration-200">
                Back to course
            </a>
            <a href="#" class="w-full sm:w-auto bg-[#D91A1A] hover:bg-[#B41414] text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition duration-150 transform active:scale-95 shadow-md shadow-red-200/50">
                Start Review <i class="fa-solid fa-arrow-right text-xs md:text-sm"></i>
            </a>
        </div>

    </div>
              {/* <!-- page-3 --> */}
        </main>
   
   </>
  )
}

export default QuizCompleted
