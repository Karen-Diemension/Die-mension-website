# Image Reference Map

This document shows all image references used throughout the Die-Mension website.

## Real Images (Uploaded to /public/images/)

### Company & Team
- **Karen Thompson Photo**: `/images/Profile-Pic-0003-Karen-Thompson.jpg`
  - Used in: Home page (Our Team section)

- **Rick Thompson Photo**: `/images/Rick-Thompson-picture.jpg`
  - Used in: Home page (Our Team section)

### Certifications
- **WBENC Logo**: `/images/footer-wbenc-logo.jpg`
  - Used in: Home page (Our Certifications section)

- **ISO 9001:2015 Logo**: `/images/footer-iso-logo.jpg`
  - Used in: Home page (Our Certifications section)

- **SCB ISO 9001 Mark**: `/images/SCB-ISO-9001-Mark.jpg`
  - Used in: Home page (Our Certifications section)

### Equipment Photos
- **Okuma Machine**: `/images/Okuma-pic.jpg`
  - Used in: Manufacturing page (equipment showcase section)
  - Caption: "Okuma Genos M560-V Machining Center"

- **CMM Inspection**: `/images/CMM-Pic.jpg`
  - Used in: Manufacturing page (equipment showcase section)
  - Caption: "Brown & Sharpe CMM Inspection"

### Home Page Hero
- **HQ Building/Header**: `/images/Gemini_Generated_Image_index-header.png`
  - Used in: Home page hero section

## Stock Images (Pexels - Linked)

### Manufacturing Page
- **Hero Image**: `https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1920`
  - Description: CNC machining equipment in operation
  - Used in: Manufacturing page hero section

### Equipment List Page
- **Hero Image**: `https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1920`
  - Description: Industrial machine shop interior
  - Used in: Equipment List page hero section

### Contact Us Page
- **Hero Image**: `https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920`
  - Description: Precision tooling and machined parts
  - Used in: Contact Us page hero section

## Document Assets (Need to be uploaded to /public/documents/)

### PDFs
- **Line Card PDF**: `/documents/Line Card Tri.pdf`
  - Used in: Home page (Line Card section)
  - Status: Needs to be uploaded

- **ISO Certificate**: `/documents/ISO 9001 2015.pdf`
  - Used in: Manufacturing page (footer section)
  - Status: Needs to be uploaded

- **Employment Application**: `/documents/ApplicationforEmploymentpg1,2,3,4.pdf`
  - Used in: Careers page (download link)
  - Status: Needs to be uploaded

## Image Specifications Used

### Hero Images
- Dimensions: 1920px width (responsive)
- Format: JPG for Pexels stock, PNG for uploaded
- Object-fit: cover (maintains aspect ratio)

### Team Photos
- Display: 192px x 192px (w-48 h-48)
- Shape: Circular (rounded-full)
- Border: 8px solid gold (#FCCF8A)
- Object-fit: cover

### Certification Logos
- Height: 96px (h-24)
- Object-fit: contain (preserves logo proportions)

## Logo

### Gemini Generated Logo
- **File**: `/images/Gemini_Generated_Image_logo.pdf`
- **Status**: PDF format cannot be used directly in web navigation
- **Current Solution**: Text-based logo used in navigation ("DIE-MENSION")
- **To Use the Gemini Logo**: Convert PDF to PNG or SVG format, then update Navigation.tsx

## Notes

1. All hero images use a dark overlay (bg-dm-dark with opacity 50-60%) for text readability
2. Stock images from Pexels are production-ready and don't require attribution
3. All local images should maintain their original filenames as shown above
4. Machine photos (Okuma and CMM) are now featured on the Manufacturing page
5. The Gemini logo PDF needs to be converted to PNG/SVG format to be used in the navigation
