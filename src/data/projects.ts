export interface ArchitectureNode {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string;
  details: string[];
}

export interface CaseStudySection {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

export interface ProjectData {
  title: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  architecture: ArchitectureNode[];
  caseStudy: CaseStudySection[];
  sampleSnippets: {
    language: "python" | "c" | "cpp";
    title: string;
    code: string;
    description: string;
  }[];
}

export const codeHealthProject: ProjectData = {
  title: "CodeHealth-AI",
  tagline: "Multi-Language Code Quality & Bug Prediction Dashboard",
  description:
    "An intelligent source-code inspection dashboard built using Python, Flask, and Machine Learning. Analyzes Python and C/C++ source code to detect weak code patterns, calculate quality metrics, predict potential bug risks using ML models, provide refactoring suggestions, maintain analysis history in SQL, and export downloadable PDF audit reports.",
  image: "/images/codehealth-ai.png",
  technologies: ["Python", "Flask", "HTML", "CSS", "SQL", "Machine Learning"],
  features: [
    "Python and C/C++ source-code analysis",
    "Weak code pattern detection",
    "Code quality metrics calculation",
    "Machine-learning bug-risk prediction",
    "Comprehensive quality scoring (0-100)",
    "Actionable improvement suggestions",
    "Analysis history logging with SQL storage",
    "Downloadable PDF audit reports",
  ],
  architecture: [
    {
      id: "input",
      step: 1,
      title: "Code Input",
      subtitle: "Source Ingestion",
      description: "User submits Python, C, or C++ source code via file upload or interactive editor.",
      tech: "Flask / HTML5",
      details: [
        "Handles multi-file or direct code input",
        "Validates file extensions and syntax encoding",
        "Normalizes indentation and line breaks",
      ],
    },
    {
      id: "lexical",
      step: 2,
      title: "Language Analysis",
      subtitle: "Lexical & AST Parsing",
      description: "Determines target language semantics and tokenizes the source into structured abstract syntax trees.",
      tech: "Python AST / Tokenizer",
      details: [
        "Constructs AST representations for Python",
        "Tokenizes C/C++ constructs and header declarations",
        "Extracts function hierarchies and scope blocks",
      ],
    },
    {
      id: "static",
      step: 3,
      title: "Static Analysis",
      subtitle: "Pattern Matching",
      description: "Scans token streams and node graphs for antipatterns, unbounded buffers, and unsafe idioms.",
      tech: "Static Rule Engine",
      details: [
        "Detects bare exceptions, unclosed descriptors, and raw pointers",
        "Flags memory misuse, dead code branches, and unbounded loops",
        "Validates naming conventions and modularity rules",
      ],
    },
    {
      id: "features",
      step: 4,
      title: "Feature Extraction",
      subtitle: "Metrics Calculation",
      description: "Computes structural software engineering metrics required for machine learning evaluation.",
      tech: "Metrics Pipeline",
      details: [
        "Calculates Cyclomatic Complexity (McCabe)",
        "Measures Lines of Code (LOC), Comment Density, and Halstead effort",
        "Transforms metric vectors for ML inference",
      ],
    },
    {
      id: "ml",
      step: 5,
      title: "ML Bug Prediction",
      subtitle: "Risk Classification",
      description: "Evaluates extracted code features using trained machine learning models to classify defect probability.",
      tech: "Scikit-Learn / ML Classifier",
      details: [
        "Feeds normalized feature vector into trained classification model",
        "Classifies module risk as Low, Moderate, or High",
        "Produces confidence probability distribution",
      ],
    },
    {
      id: "score",
      step: 6,
      title: "Quality Score",
      subtitle: "Composite Evaluation",
      description: "Computes a unified 0–100 Code Quality index blending complexity, static violations, and ML predictions.",
      tech: "Scoring Formula",
      details: [
        "Aggregates static findings with weighted penalty coefficients",
        "Factors in cyclomatic threshold adherence",
        "Yields calibrated letter grades (A, B, C, D, F) and score index",
      ],
    },
    {
      id: "suggestions",
      step: 7,
      title: "Suggestions",
      subtitle: "Refactoring Advice",
      description: "Generates prioritized, contextual suggestions explaining root causes and remediation techniques.",
      tech: "Advisory Engine",
      details: [
        "Pairs detected weaknesses with concrete code modifications",
        "Ranks recommendations by security and stability severity",
        "Provides syntax-safe refactoring guidance",
      ],
    },
    {
      id: "pdf",
      step: 8,
      title: "PDF Report",
      subtitle: "Audit Generation",
      description: "Compiles all metrics, risk predictions, detected issues, and suggestions into downloadable PDF reports.",
      tech: "ReportLab / PDF Export",
      details: [
        "Creates formatted, client-ready code audit documents",
        "Logs analysis runs into SQL database for historical tracking",
        "Enables archival tracking of code health over time",
      ],
    },
  ],
  caseStudy: [
    {
      id: "problem",
      title: "Problem",
      summary: "Manual code reviews in multi-language environments often miss latent bug risks, antipatterns, and complexity hotspots before deployment.",
      details: [
        "Software codebases in Python and C/C++ have distinct vulnerability and antipattern profiles (such as raw memory management in C vs. unhandled exception flows in Python).",
        "Static linters alone often generate voluminous noisy alerts without estimating the statistical probability of runtime defects.",
        "Engineering teams lack quick, automated dashboards that synthesize code metrics, ML risk predictions, and exportable PDF audit logs.",
      ],
    },
    {
      id: "approach",
      title: "Approach",
      summary: "A unified pipeline combining lexical parsing, deterministic static analysis, complexity metrics, and ML classification behind an accessible Flask dashboard.",
      details: [
        "Designed a modular architecture that accepts Python, C, and C++ source files.",
        "Extracted structural metrics (cyclomatic complexity, LOC, nesting depth) alongside static rule scans.",
        "Integrated machine learning classification to predict defect propensity based on historical code metric features.",
        "Synthesized all findings into a 0-100 Health Score with actionable remediation steps and SQL-backed history logging.",
      ],
    },
    {
      id: "technologies",
      title: "Technologies",
      summary: "Carefully selected Python ecosystem tools and full-stack web technologies.",
      details: [
        "Python: Core language for static parsing, mathematical metric computations, and ML inference.",
        "Flask: Lightweight WSGI web framework delivering fast REST endpoints and responsive web views.",
        "HTML & CSS: Custom responsive interface for code submission, visual score meters, and issue breakdowns.",
        "SQL: Relational database layer storing submission history, metric logs, and user analysis records.",
        "Machine Learning: Classification models trained on software engineering metric datasets to categorize bug risk.",
      ],
    },
    {
      id: "analysis",
      title: "Analysis & Metrics",
      summary: "Multi-layered parsing pipeline examining syntax trees, token frequencies, and complexity indicators.",
      details: [
        "Inspects Python AST nodes for broad except blocks, mutable default arguments, and resource leaks.",
        "Parses C/C++ code patterns for raw pointer operations, uninitialized buffers, and unsafe standard library functions (such as strcpy).",
        "Calculates McCabe cyclomatic complexity to pinpoint overly dense execution branches.",
      ],
    },
    {
      id: "ml-model",
      title: "Machine Learning",
      summary: "Defect risk classification using metric feature vectors.",
      details: [
        "Feeds extracted numerical parameters (LOC, cyclomatic complexity, token diversity, branch count) into a trained classifier.",
        "Assigns a probabilistic risk level: Low Risk (healthy), Moderate Risk (maintainability concern), or High Risk (prone to bugs).",
        "Allows developers to prioritize refactoring on modules with elevated defect likelihood.",
      ],
    },
    {
      id: "scoring",
      title: "Quality Scoring",
      summary: "A weighted, deterministic 0–100 Code Health index.",
      details: [
        "Starts from a base score of 100 points.",
        "Applies calibrated deductions based on issue severity: Critical (-15), High (-10), Medium (-5), Low (-2).",
        "Scales against complexity multipliers to reward clean, modular structure.",
      ],
    },
    {
      id: "suggestions-history",
      title: "Suggestions & History",
      summary: "Concrete refactoring advice and persistent audit logging.",
      details: [
        "Maps every detected violation to clear, step-by-step remediation suggestions.",
        "Stores analysis timestamps, file names, scores, and risk classifications in a SQL database.",
        "Enables users to track quality improvements across successive code iterations.",
      ],
    },
    {
      id: "pdf-reports",
      title: "PDF Reports",
      summary: "Automated generation of publication-ready audit summaries.",
      details: [
        "Generates clean, structured PDF summaries of code metrics, detected issues, and suggestions.",
        "Includes visual score badges, metric tables, and risk breakdown charts.",
        "Allows developers to share audit findings with team leads and stakeholders.",
      ],
    },
  ],
  sampleSnippets: [
    {
      language: "python",
      title: "Python File Handler Antipattern",
      description: "Demonstrates resource leak and bare exception handling.",
      code: `def process_data(filepath, items=[]):\n    # Issue 1: Mutable default argument\n    # Issue 2: File opened without context manager\n    f = open(filepath, "r")\n    data = f.read()\n    \n    try:\n        for item in items:\n            print("Processing: " + item)\n    except:\n        # Issue 3: Bare except clause\n        pass\n        \n    return len(data)`,
    },
    {
      language: "c",
      title: "C Unsafe Buffer & Pointer",
      description: "Demonstrates unsafe buffer copy and uninitialized pointer.",
      code: `#include <stdio.h>\n#include <string.h>\n\nvoid copy_input(char *user_input) {\n    char buffer[16];\n    // Issue 1: Unsafe strcpy without boundary check\n    strcpy(buffer, user_input);\n    \n    int *ptr; // Issue 2: Uninitialized pointer\n    printf("Copied: %s\\n", buffer);\n}`,
    },
    {
      language: "cpp",
      title: "C++ Memory Leak & Raw Pointer",
      description: "Demonstrates missing delete and raw memory allocation.",
      code: `#include <iostream>\n\nclass DataManager {\npublic:\n    void load_dataset(int size) {\n        // Issue 1: Raw allocation without smart pointers\n        int* raw_array = new int[size];\n        \n        for (int i = 0; i < size; ++i) {\n            raw_array[i] = i * 2;\n        }\n        // Issue 2: Memory is not freed (missing delete[])\n    }\n};`,
    },
  ],
};
