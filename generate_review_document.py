"""
King Systems Website Content Extractor for Print Review
This script extracts content from all HTML pages and creates a print-ready document
"""

import os
import re
from html.parser import HTMLParser
from pathlib import Path

class ContentExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.content = []
        self.current_tag = None
        self.capture = False
        
    def handle_starttag(self, tag, attrs):
        # Capture h1, h2, h3, h4, p tags
        if tag in ['h1', 'h2', 'h3', 'h4', 'p', 'li']:
            self.capture = True
            self.current_tag = tag
            
    def handle_data(self, data):
        if self.capture:
            cleaned = data.strip()
            if cleaned and len(cleaned) > 3:  # Skip very short strings
                self.content.append((self.current_tag, cleaned))
                
    def handle_endtag(self, tag):
        if tag == self.current_tag:
            self.capture = False

def extract_page_content(file_path):
    """Extract meaningful content from an HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
            
        # Get title from title tag
        title_match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
        title = title_match.group(1) if title_match else os.path.basename(file_path)
        
        # Get meta description
        desc_match = re.search(r'<meta name="description" content="(.*?)"', html_content, re.IGNORECASE)
        description = desc_match.group(1) if desc_match else ""
        
        # Extract content
        parser = ContentExtractor()
        parser.feed(html_content)
        
        return {
            'title': title,
            'description': description,
            'content': parser.content,
            'file_path': file_path
        }
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return None

def generate_print_html(pages_data):
    """Generate a print-ready HTML document"""
    
    html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>King Systems Website - Complete Review Document</title>
    <style>
        @media print {
            @page { size: letter; margin: 0.5in; }
            .page-break { page-break-after: always; }
            .no-print { display: none; }
        }
        body {
            font-family: 'Georgia', serif;
            line-height: 1.8;
            color: #333;
            max-width: 7.5in;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
        }
        .page {
            margin-bottom: 60px;
            padding: 30px;
            border: 2px solid #1e3a8a;
            background: #fff;
            position: relative;
        }
        .page-header {
            background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
            color: white;
            padding: 20px 25px;
            margin: -30px -30px 30px -30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .page-number {
            position: absolute;
            top: -15px;
            right: 20px;
            background: #d97706;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 14px;
        }
        .page-title {
            font-size: 28px;
            font-weight: bold;
            margin: 0 0 8px 0;
            line-height: 1.2;
        }
        .page-url {
            font-size: 13px;
            opacity: 0.95;
            margin: 0;
            font-family: 'Courier New', monospace;
        }
        .description {
            background: #fffbeb;
            padding: 15px;
            margin: 20px 0;
            border-left: 4px solid #d97706;
            font-style: italic;
            color: #78350f;
        }
        .content-item {
            margin: 15px 0;
            padding-left: 20px;
        }
        .content-h1 {
            font-size: 24px;
            font-weight: bold;
            color: #1e3a8a;
            margin: 25px 0 10px 0;
            padding-bottom: 8px;
            border-bottom: 3px solid #1e3a8a;
        }
        .content-h2 {
            font-size: 20px;
            font-weight: bold;
            color: #2563eb;
            margin: 20px 0 8px 0;
            padding-bottom: 5px;
            border-bottom: 2px solid #93c5fd;
        }
        .content-h3 {
            font-size: 18px;
            font-weight: bold;
            color: #3b82f6;
            margin: 15px 0 8px 0;
        }
        .content-h4 {
            font-size: 16px;
            font-weight: bold;
            color: #60a5fa;
            margin: 12px 0 6px 0;
        }
        .content-p {
            margin: 10px 0;
            line-height: 1.7;
        }
        .content-li {
            margin: 8px 0;
            padding-left: 10px;
            position: relative;
        }
        .content-li:before {
            content: "→";
            position: absolute;
            left: -15px;
            color: #1e3a8a;
            font-weight: bold;
        }
        .notes-area {
            margin-top: 40px;
            padding: 25px;
            border: 3px dashed #94a3b8;
            min-height: 120px;
            background: #fffef5;
            border-radius: 4px;
        }
        .notes-title {
            font-weight: bold;
            color: #64748b;
            margin-bottom: 15px;
            font-size: 18px;
        }
        .toc {
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            padding: 30px;
            margin-bottom: 50px;
            border-radius: 8px;
            border: 2px solid #cbd5e1;
        }
        .toc h1 {
            margin-top: 0;
            color: #1e3a8a;
            font-size: 32px;
        }
        .toc-section {
            margin: 25px 0;
        }
        .toc-section h3 {
            color: #475569;
            margin-bottom: 10px;
            font-size: 20px;
        }
        .toc ul {
            list-style: none;
            padding: 0;
        }
        .toc li {
            padding: 8px 15px;
            margin: 5px 0;
            background: white;
            border-left: 4px solid #1e3a8a;
            border-radius: 4px;
        }
        .toc a {
            color: #1e40af;
            text-decoration: none;
            font-weight: 500;
        }
        .toc a:hover {
            text-decoration: underline;
        }
        .print-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 30px;
            background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            transition: all 0.3s;
        }
        .print-btn:hover {
            background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.4);
        }
        .instructions {
            background: #dbeafe;
            border: 2px solid #3b82f6;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        .instructions h3 {
            margin-top: 0;
            color: #1e40af;
        }
    </style>
</head>
<body>

<button class="print-btn no-print" onclick="window.print()">🖨️ Print / Save as PDF</button>

<div class="toc no-print">
    <h1>📋 King Systems Website Complete Review</h1>
    
    <div class="instructions">
        <h3>📖 How to Create Your PDF:</h3>
        <ol>
            <li><strong>Click "Print / Save as PDF"</strong> button (top right), OR</li>
            <li><strong>Press:</strong> Ctrl+P (Windows/Linux) or Cmd+P (Mac)</li>
            <li><strong>Select:</strong> "Save as PDF" or "Microsoft Print to PDF"</li>
            <li><strong>Save:</strong> Name it "King-Systems-Website-Review.pdf"</li>
        </ol>
        <p><strong>📄 Total Pages:</strong> ''' + str(len(pages_data)) + '''</p>
        <p><strong>📝 Each page has space for your notes and redlines</strong></p>
    </div>
'''

    # Build TOC
    html += '<div class="toc-section"><h3>📑 Table of Contents</h3><ul>'
    for idx, page in enumerate(pages_data, 1):
        anchor = f"page-{idx}"
        title = page['title'].replace(' | King Systems', '').replace(' | King Systems Blog', '')
        html += f'<li><a href="#{anchor}">{idx}. {title}</a></li>'
    html += '</ul></div>'
    
    html += '</div><div class="page-break"></div>'
    
    # Build pages
    for idx, page in enumerate(pages_data, 1):
        anchor = f"page-{idx}"
        title = page['title']
        file_path = page['file_path']
        description = page['description']
        content = page['content']
        
        html += f'''
<div class="page" id="{anchor}">
    <div class="page-number">Page {idx}</div>
    <div class="page-header">
        <h1 class="page-title">{idx}. {title}</h1>
        <p class="page-url">File: {file_path}</p>
    </div>
'''
        
        if description:
            html += f'<div class="description">📝 {description}</div>'
        
        html += '<div class="content-section">'
        
        # Add content
        for tag, text in content[:50]:  # Limit to first 50 items per page
            css_class = f"content-{tag}"
            html += f'<div class="{css_class}">{text}</div>'
        
        if len(content) > 50:
            html += f'<p style="color: #999; font-style: italic;">... and {len(content) - 50} more items</p>'
        
        html += '</div>'
        
        # Notes area
        html += '''
    <div class="notes-area">
        <div class="notes-title">✏️ Your Notes / Redlines / Changes:</div>
        <p style="color: #999; font-style: italic; line-height: 2.5;">
            _____________________________________________________________<br>
            _____________________________________________________________<br>
            _____________________________________________________________<br>
        </p>
    </div>
</div>
<div class="page-break"></div>
'''
    
    html += '''
</body>
</html>'''
    
    return html

def main():
    """Main function to generate the review document"""
    
    # Define page categories and files
    pages_to_process = [
        # Main pages
        ('index.html', 'Main'),
        ('commercial.html', 'Main'),
        ('residential.html', 'Main'),
        ('about.html', 'Main'),
        ('contact.html', 'Main'),
        ('portfolio.html', 'Main'),
        ('portfolio-commercial.html', 'Main'),
        ('portfolio-residential.html', 'Main'),
        ('case-studies.html', 'Main'),
        ('blog.html', 'Main'),
        ('service-plans.html', 'Main'),
        ('residential-service-plans.html', 'Main'),
        ('commercial-service-plans.html', 'Main'),
        ('sitemap.html', 'Main'),
        
        # Commercial pages
        ('commercial/conference-rooms.html', 'Commercial'),
        ('commercial/training-rooms.html', 'Commercial'),
        ('commercial/hospitality.html', 'Commercial'),
        ('commercial/sound-masking.html', 'Commercial'),
        ('commercial/digital-signage.html', 'Commercial'),
        ('commercial/cabling-fiber.html', 'Commercial'),
        
        # Residential pages
        ('residential/home-theater.html', 'Residential'),
        ('residential/whole-home-audio.html', 'Residential'),
        ('residential/lighting-control.html', 'Residential'),
        
        # Industry pages
        ('industries/corporate.html', 'Industry'),
        ('industries/education.html', 'Industry'),
        ('industries/government.html', 'Industry'),
        ('industries/healthcare.html', 'Industry'),
        
        # Case studies
        ('case-studies/air-force-academy-falcon-stadium.html', 'Case Study'),
        ('case-studies/city-of-brighton-municipal-projects.html', 'Case Study'),
        ('case-studies/davita-corporate-headquarters.html', 'Case Study'),
        ('case-studies/unicom-capital-penthouse.html', 'Case Study'),
        ('case-studies/denver-art-museum.html', 'Case Study'),
        
        # Blog posts
        ('blog/smart-home-trends-2025.html', 'Blog'),
        ('blog/aspen-estate-project-showcase.html', 'Blog'),
        ('blog/commercial-av-best-practices.html', 'Blog'),
        
        # Resources
        ('resources/how-to-choose-commercial-av-integrator.html', 'Resource'),
        ('resources/commercial-av-costs.html', 'Resource'),
    ]
    
    pages_data = []
    
    print("Extracting content from pages...")
    for file_path, category in pages_to_process:
        if os.path.exists(file_path):
            print(f"  Processing: {file_path}")
            data = extract_page_content(file_path)
            if data:
                data['category'] = category
                pages_data.append(data)
        else:
            print(f"  ⚠️  File not found: {file_path}")
    
    print(f"\nGenerating HTML document with {len(pages_data)} pages...")
    html_content = generate_print_html(pages_data)
    
    output_file = 'KING-SYSTEMS-WEBSITE-REVIEW-PRINTABLE.html'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"\n✅ Success! Created: {output_file}")
    print(f"📄 Total pages: {len(pages_data)}")
    print("\n📖 Next steps:")
    print("1. Open the HTML file in your web browser")
    print("2. Press Ctrl+P (Windows) or Cmd+P (Mac)")
    print("3. Select 'Save as PDF'")
    print("4. Save as 'King-Systems-Website-Review.pdf'")
    print("\n✏️  You can then print and write notes on each page!")

if __name__ == "__main__":
    main()
