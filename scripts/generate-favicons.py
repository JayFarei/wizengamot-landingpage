#!/usr/bin/env python3
"""
Generate favicon files from a source image.
Creates all standard favicon formats for web applications.

Usage:
    python generate-favicons.py [source_image_path]

If no path is provided, defaults to ~/Downloads/Image 76 from Figma.png
"""

import sys
from pathlib import Path
from PIL import Image

# Configuration
DEFAULT_SOURCE = Path.home() / "Downloads" / "Image 76 from Figma.png"
SOURCE_IMAGE = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SOURCE
PROJECT_ROOT = Path(__file__).parent.parent
APP_DIR = PROJECT_ROOT / "app"
PUBLIC_DIR = PROJECT_ROOT / "public"

# Favicon sizes to generate
FAVICON_SIZES = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
}

ICO_SIZES = [16, 32, 48]

APPLE_ICON_SIZE = 180
ANDROID_SIZES = {
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
}


def generate_favicons():
    """Generate all favicon variants from the source image."""
    if not SOURCE_IMAGE.exists():
        print(f"Error: Source image not found at {SOURCE_IMAGE}")
        return False

    print(f"Loading source image: {SOURCE_IMAGE}")
    img = Image.open(SOURCE_IMAGE)

    # Ensure RGBA mode for transparency support
    if img.mode != "RGBA":
        img = img.convert("RGBA")

    print(f"Source image size: {img.size}")

    # Create output directories if needed
    APP_DIR.mkdir(exist_ok=True)
    PUBLIC_DIR.mkdir(exist_ok=True)

    # Generate favicon.ico (multi-resolution) in app directory
    print("\nGenerating favicon.ico...")
    ico_images = []
    for size in ICO_SIZES:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        ico_images.append(resized)

    ico_path = APP_DIR / "favicon.ico"
    ico_images[0].save(
        ico_path,
        format="ICO",
        sizes=[(s, s) for s in ICO_SIZES],
        append_images=ico_images[1:]
    )
    print(f"  Created: {ico_path}")

    # Generate PNG favicons for public directory
    print("\nGenerating PNG favicons...")
    for filename, size in FAVICON_SIZES.items():
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        output_path = PUBLIC_DIR / filename
        resized.save(output_path, format="PNG")
        print(f"  Created: {output_path}")

    # Generate Apple touch icon
    print("\nGenerating Apple touch icon...")
    apple_icon = img.resize((APPLE_ICON_SIZE, APPLE_ICON_SIZE), Image.Resampling.LANCZOS)
    apple_path = APP_DIR / "apple-icon.png"
    apple_icon.save(apple_path, format="PNG")
    print(f"  Created: {apple_path}")

    # Also save to public for explicit reference
    apple_public_path = PUBLIC_DIR / "apple-touch-icon.png"
    apple_icon.save(apple_public_path, format="PNG")
    print(f"  Created: {apple_public_path}")

    # Generate Android chrome icons
    print("\nGenerating Android chrome icons...")
    for filename, size in ANDROID_SIZES.items():
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        output_path = PUBLIC_DIR / filename
        resized.save(output_path, format="PNG")
        print(f"  Created: {output_path}")

    # Generate a general icon.png for Next.js (32x32)
    print("\nGenerating icon.png for Next.js...")
    icon_png = img.resize((32, 32), Image.Resampling.LANCZOS)
    icon_path = APP_DIR / "icon.png"
    icon_png.save(icon_path, format="PNG")
    print(f"  Created: {icon_path}")

    print("\nAll favicons generated successfully!")
    return True


if __name__ == "__main__":
    generate_favicons()
