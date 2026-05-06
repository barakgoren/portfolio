from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, black
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

OUTPUT_PATH = "/home/user/portfolio/public/files/barak-goren-dev-2026.pdf"

pdfmetrics.registerFont(TTFont("LibSans", "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("LibSans-Bold", "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("LibSans-Italic", "/usr/share/fonts/truetype/liberation/LiberationSans-Italic.ttf"))
pdfmetrics.registerFont(TTFont("LibSans-BoldItalic", "/usr/share/fonts/truetype/liberation/LiberationSans-BoldItalic.ttf"))

BLUE = HexColor("#1F3864")
BLACK = black
FONT = "LibSans"
FONT_BOLD = "LibSans-Bold"
FONT_ITALIC = "LibSans-Italic"
FONT_BOLD_ITALIC = "LibSans-BoldItalic"
BASE_SIZE = 9.5

def style(font=FONT, size=BASE_SIZE, color=BLACK, align=TA_LEFT, leading=None, space_before=0, space_after=0):
    return ParagraphStyle(
        "s",
        fontName=font,
        fontSize=size,
        textColor=color,
        alignment=align,
        leading=leading or size * 1.25,
        spaceBefore=space_before,
        spaceAfter=space_after,
    )

def section_header(text):
    p = Paragraph(text, style(font=FONT_BOLD, size=11, color=BLUE, space_before=6, space_after=1))
    rule = HRFlowable(width="100%", thickness=0.75, color=BLUE, spaceAfter=3)
    return [p, rule]

def job_header(role_html, company_html, dates):
    left = Paragraph(f"{role_html} {company_html}", style(font=FONT, size=BASE_SIZE))
    right = Paragraph(dates, style(font=FONT_BOLD, size=BASE_SIZE, align=TA_RIGHT))
    t = Table([[left, right]], colWidths=["72%", "28%"])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return t

def bullet(text):
    return Paragraph(
        f"● {text}",
        ParagraphStyle(
            "b",
            fontName=FONT,
            fontSize=BASE_SIZE,
            leading=BASE_SIZE * 1.3,
            leftIndent=10,
            firstLineIndent=0,
            spaceBefore=1,
            spaceAfter=1,
            alignment=TA_JUSTIFY,
        ),
    )

doc = SimpleDocTemplate(
    OUTPUT_PATH,
    pagesize=letter,
    leftMargin=0.75 * inch,
    rightMargin=0.75 * inch,
    topMargin=0.6 * inch,
    bottomMargin=0.6 * inch,
)

LI = '<link href="https://www.linkedin.com/in/barak-goren" color="#1155CC">LinkedIn</link>'
GH = '<link href="https://github.com/barakgoren" color="#1155CC">GitHub</link>'
WB = '<link href="https://www.barak-dev.com" color="#1155CC">Portfolio</link>'

story = []

story.append(Paragraph("Barak Goren", style(font=FONT_BOLD, size=16, align=TA_CENTER, space_after=2)))
story.append(Paragraph(
    f"Mazkeret Batya | (054)-327-7055 | "
    f'<link href="mailto:barak.goren6@gmail.com" color="#1155CC">barak.goren6@gmail.com</link>'
    f" | {LI} | {GH} | {WB}",
    style(size=BASE_SIZE - 0.5, align=TA_CENTER, space_after=6),
))

story.append(Paragraph(
    "Full Stack Developer with strong front-end expertise, experienced in building scalable, "
    "production-grade systems and developer-focused infrastructure.",
    style(align=TA_JUSTIFY, space_after=4),
))

story += section_header("Experience")

story.append(job_header(
    f'<b>Full Stack Developer</b> at <b>Moveo Group.</b>',
    '<i>(Software company)</i>',
    "03/2026 - Present",
))
story.append(Spacer(1, 2))
for b in [
    "Built a Rust-based CLI tool to manage a complex development environment with a monorepo "
    "(multiple frontends + CMS) and microservices, enabling auto-detection of projects, service "
    "orchestration, and real-time log management.",
    "Developed extensive features within a non-standard banking development environment using "
    "microservices architecture.",
    "Collaborated in an agile team of over 7 developers, ensuring meticulous characterization "
    "of project requirements.",
]:
    story.append(bullet(b))

story.append(Spacer(1, 5))

story.append(job_header(
    f'<b>Full Stack Developer</b> at <b>Oversight Group.</b>',
    '<i>(Software company)</i>',
    "10/2024 - 03/2026",
))
story.append(Spacer(1, 2))
for b in [
    "Designed and implemented end-to-end features across web and mobile applications, working "
    "closely with both frontend and backend layers in production environments.",
    "Shipped multiple versions that introduced major functional and architectural changes to live "
    "mobile applications serving 2,000+ active users.",
    "Delivered complex features to large-scale production systems serving over 300,000 users and "
    "handling more than 1,000 leads per month.",
    "Performed large-scale data scraping and ingestion to migrate substantial datasets into new "
    "database systems, handling complex data transformations and integrity constraints.",
    "Analyzed complex system and business logic issues directly with customers and designed "
    "technical solutions to address their requirements.",
    "Implemented pixel-accurate user interfaces based on detailed Figma designs, ensuring strict "
    "adherence to client design requirements.",
]:
    story.append(bullet(b))

story += section_header("Technical Knowledge")

for b in [
    "Advanced frontend development with <b>React and Next.js (TypeScript)</b>, including complex "
    "state management at scale using <b>Redux</b> and <b>Zustand</b>, performance optimization, "
    "and maintainable component architecture.",
    "Hands-on experience building backend services with <b>Node.js</b> and <b>Express.js</b> "
    "using <b>TypeScript</b>, following best practices and scalable, high-level architecture "
    "principles.",
    "Hands-on work with <b>Prisma ORM</b> and <b>relational databases</b> (<b>PostgreSQL</b>, "
    "<b>MariaDB</b>), including schema design, migrations, and query optimization.",
    "Implemented <b>runtime validation and schema enforcement</b> using <b>Zod</b> across "
    "frontend and backend layers to ensure data consistency and prevent invalid states.",
    "Hands-on experience with <b>C#</b> and <b>ASP.NET Core</b> for building <b>RESTful APIs</b> "
    "using layered architectures.",
    "Multi-platform mobile development using <b>React Native</b> with TypeScript and <b>Expo</b>.",
    "End-to-end implementation of payments and subscription systems for mobile applications in "
    "production environments.",
    "Strong <b>Java</b> foundation from a Software Practical Engineering program, including OOP, "
    "Algorithms, Data Structures, and Design Patterns, with grades in the <b>95–100</b> range.",
    "Familiarity with additional languages like <b>Python</b> (full OOP course with final project), "
    "<b>PHP</b>, <b>C</b>, <b>JavaScript</b> (strong foundation) and <b>Dart</b>.",
]:
    story.append(bullet(b))

story += section_header("Education")

story.append(Paragraph(
    "<b>Software Practical Engineering - Ariel Technical College</b>",
    style(font=FONT_BOLD, size=BASE_SIZE, space_before=2),
))
story.append(bullet("Average of 94"))

doc.build(story)
print(f"PDF written to {OUTPUT_PATH}")
