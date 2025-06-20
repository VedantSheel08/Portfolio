import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  // Create SVG project preview images based on the project type
  const projectImages: { [key: string]: string } = {
    "pulmonary-fibrosis": generateMedicalAIImage(),
    ecoscan: generateEcoscanImage(),
    "asl-translator": generateASLImage(),
    "waste-wise": generateWasteWiseImage(),
    "lost-found": generateLostFoundImage(),
    "solar-tracker": generateSolarTrackerImage(),
  };

  const svgContent = projectImages[slug] || generateDefaultImage();

  return new NextResponse(svgContent, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000",
    },
  });
}

function generateMedicalAIImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="medicalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#4ECDC4;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#1a1a1a"/>
      <circle cx="200" cy="150" r="80" fill="none" stroke="url(#medicalGrad)" stroke-width="3"/>
      <circle cx="200" cy="150" r="60" fill="none" stroke="#00FFFF" stroke-width="2" opacity="0.7"/>
      <circle cx="200" cy="150" r="40" fill="none" stroke="#FF6B6B" stroke-width="2" opacity="0.5"/>
      <text x="200" y="260" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="16" font-weight="bold">Pulmonary Fibrosis AI</text>
      <text x="200" y="280" text-anchor="middle" fill="#888" font-family="Arial" font-size="12">Medical Diagnosis</text>
    </svg>
  `;
}

function generateEcoscanImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ecoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8BC34A;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#1a1a1a"/>
      <rect x="150" y="100" width="100" height="60" rx="10" fill="url(#ecoGrad)"/>
      <circle cx="170" cy="120" r="8" fill="#00FFFF"/>
      <circle cx="230" cy="120" r="8" fill="#00FFFF"/>
      <rect x="160" y="140" width="80" height="4" fill="#333"/>
      <rect x="160" y="150" width="80" height="4" fill="#333"/>
      <circle cx="200" cy="200" r="30" fill="none" stroke="#00FFFF" stroke-width="2" stroke-dasharray="5,5"/>
      <text x="200" y="260" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="16" font-weight="bold">ECOSCAN Rover</text>
      <text x="200" y="280" text-anchor="middle" fill="#888" font-family="Arial" font-size="12">Wildlife Conservation</text>
    </svg>
  `;
}

function generateASLImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aslGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#9C27B0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#673AB7;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#1a1a1a"/>
      <path d="M150 120 Q200 80 250 120 Q200 160 150 120" fill="url(#aslGrad)"/>
      <circle cx="180" cy="110" r="5" fill="#00FFFF"/>
      <circle cx="220" cy="110" r="5" fill="#00FFFF"/>
      <path d="M170 140 Q200 150 230 140" stroke="#00FFFF" stroke-width="3" fill="none"/>
      <rect x="160" y="170" width="80" height="20" rx="10" fill="#333"/>
      <text x="200" y="185" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="12">Hello World</text>
      <text x="200" y="260" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="16" font-weight="bold">ASL Translator</text>
      <text x="200" y="280" text-anchor="middle" fill="#888" font-family="Arial" font-size="12">Accessibility Tech</text>
    </svg>
  `;
}

function generateWasteWiseImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wasteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2196F3;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#1a1a1a"/>
      <rect x="160" y="100" width="80" height="100" rx="10" fill="url(#wasteGrad)"/>
      <rect x="170" y="90" width="60" height="10" rx="5" fill="#666"/>
      <circle cx="190" cy="130" r="8" fill="#00FFFF"/>
      <rect x="185" y="150" width="10" height="20" fill="#00FFFF"/>
      <rect x="175" y="170" width="30" height="5" fill="#00FFFF"/>
      <text x="200" y="260" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="16" font-weight="bold">Waste-Wise AI</text>
      <text x="200" y="280" text-anchor="middle" fill="#888" font-family="Arial" font-size="12">Sustainability</text>
    </svg>
  `;
}

function generateLostFoundImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF9800;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F44336;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#1a1a1a"/>
      <circle cx="200" cy="150" r="50" fill="none" stroke="url(#lfGrad)" stroke-width="4"/>
      <circle cx="200" cy="150" r="30" fill="#00FFFF" opacity="0.3"/>
      <path d="M220 130 L240 110 M240 130 L220 110" stroke="#00FFFF" stroke-width="3"/>
      <rect x="170" y="170" width="60" height="8" rx="4" fill="#333"/>
      <rect x="180" y="185" width="40" height="4" rx="2" fill="#666"/>
      <text x="200" y="260" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="16" font-weight="bold">Lost & Found AI</text>
      <text x="200" y="280" text-anchor="middle" fill="#888" font-family="Arial" font-size="12">Semantic Search</text>
    </svg>
  `;
}

function generateSolarTrackerImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#1a1a1a"/>
      <circle cx="320" cy="80" r="25" fill="url(#solarGrad)"/>
      <rect x="150" y="130" width="100" height="60" rx="5" fill="#333"/>
      <rect x="155" y="135" width="90" height="50" rx="3" fill="url(#solarGrad)" opacity="0.8"/>
      <rect x="190" y="190" width="20" height="40" fill="#666"/>
      <rect x="185" y="230" width="30" height="8" fill="#666"/>
      <path d="M320 80 L200 150" stroke="#FFD700" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="200" y="260" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="16" font-weight="bold">Solar Tracker</text>
      <text x="200" y="280" text-anchor="middle" fill="#888" font-family="Arial" font-size="12">Clean Energy</text>
    </svg>
  `;
}

function generateDefaultImage(): string {
  return `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#1a1a1a"/>
      <rect x="150" y="100" width="100" height="100" rx="10" fill="#333"/>
      <text x="200" y="260" text-anchor="middle" fill="#00FFFF" font-family="Arial" font-size="16" font-weight="bold">Project Preview</text>
      <text x="200" y="280" text-anchor="middle" fill="#888" font-family="Arial" font-size="12">Coming Soon</text>
    </svg>
  `;
}
