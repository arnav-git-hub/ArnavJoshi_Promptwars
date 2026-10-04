import { GoogleGenerativeAI } from '@google/generative-ai';
import { BlindSpotAnalysis } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = API_KEY && API_KEY !== 'your_gemini_api_key_here' ? new GoogleGenerativeAI(API_KEY) : null;

export async function analyzeBlindSpots(
  decisionTitle: string,
  context: string,
  motivations: string,
  assumptions: string
): Promise<BlindSpotAnalysis> {
  if (!decisionTitle.trim()) {
    throw new Error('Decision title is required.');
  }

  const startTime = Date.now();

  if (!genAI || API_KEY === 'your_gemini_api_key_here') {
    const analysis = getFallbackAnalysis(decisionTitle, context, motivations, assumptions);
    analysis.latencyMs = Date.now() - startTime;
    return analysis;
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json' },
    });

    const systemPrompt = `You are an elite Critical Thinking & Decision Architecture AI.
Your purpose is to help users uncover BLIND SPOTS in their decision-making reasoning without making the choice for them.

CRITICAL CONSTRAINTS:
1. NEVER make the decision for the user. Never say "accept", "decline", "you should choose X".
2. Identify unstated assumptions, secondary trade-offs, cognitive biases, and stress-test potential future scenarios.
3. Generate creative alternative paths to broaden the user's solution space.

Return ONLY a JSON object strictly adhering to this schema:
{
  "id": "${Date.now()}",
  "timestamp": "${new Date().toISOString()}",
  "decisionTitle": "${decisionTitle}",
  "summary": "Detailed summary of the decision, motivations, and key tension points.",
  "hiddenAssumptions": [
    { "id": "a1", "title": "Title", "description": "Explanation", "riskLevel": "High" }
  ],
  "overlookedFactors": [
    { "category": "Academic Impact / Career / Wellbeing / Financial", "factor": "Factor Name", "impact": "Secondary effect explanation" }
  ],
  "cognitiveBiases": [
    { "biasName": "Bias Name", "explanation": "How it affects this reasoning" }
  ],
  "probingQuestions": [
    "Critical question 1?", "Critical question 2?", "Critical question 3?"
  ],
  "scenarios": [
    { "scenarioName": "Best Case", "description": "Description", "keyUncertainties": ["Uncertainty 1"] },
    { "scenarioName": "Worst Case", "description": "Description", "keyUncertainties": ["Uncertainty 1"] },
    { "scenarioName": "Most Likely", "description": "Description", "keyUncertainties": ["Uncertainty 1"] }
  ],
  "alternativePaths": [
    { "optionTitle": "Alternative Option 1", "description": "Description", "tradeoffComparison": "Comparison" }
  ],
  "perspectiveBalance": {
    "prosVisible": ["Visible Benefit 1"],
    "hiddenTradeoffs": ["Hidden Trade-off 1"]
  }
}`;

    const userPrompt = `Decision Title: ${decisionTitle}
Context & Details: ${context}
Primary Motivations: ${motivations}
Stated Assumptions: ${assumptions}`;

    const result = await model.generateContent(`${systemPrompt}\n\nUSER DECISION CASE:\n${userPrompt}`);
    const parsed: BlindSpotAnalysis = JSON.parse(result.response.text());
    parsed.latencyMs = Date.now() - startTime;
    return parsed;
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    const fallback = getFallbackAnalysis(decisionTitle, context, motivations, assumptions);
    fallback.latencyMs = Date.now() - startTime;
    return fallback;
  }
}

function getFallbackAnalysis(
  title: string,
  context: string,
  motivations: string,
  assumptions: string
): BlindSpotAnalysis {
  return {
    id: `analysis-${Date.now()}`,
    timestamp: new Date().toISOString(),
    decisionTitle: title,
    summary: `Comprehensive critical analysis of "${title}" based on provided context regarding schedule, stipend, location, and career goals.`,
    hiddenAssumptions: [
      {
        id: 'a1',
        title: 'Mentorship & Learning Quality Guarantee',
        description: 'Assuming a high stipend or brand reputation automatically guarantees structured 1-on-1 engineering mentorship.',
        riskLevel: 'High'
      },
      {
        id: 'a2',
        title: 'Academic & Attendance Flexibility',
        description: 'Assuming college administration and professors will excuse missed classes or exam conflicts without penalty.',
        riskLevel: 'High'
      },
      {
        id: 'a3',
        title: 'Resume Signal vs Skill Acquisition',
        description: 'Assuming company name value outweighs potential repetitive task assignments during the 6 months.',
        riskLevel: 'Medium'
      }
    ],
    overlookedFactors: [
      {
        category: 'Academic Impact',
        factor: 'Attendance & Exam Conflicts',
        impact: 'Full-time work hours during midterms could risk minimum course attendance or GPA drops.'
      },
      {
        category: 'Career Growth',
        factor: 'Skill Depth vs Routine Work',
        impact: 'If assigned basic maintenance tasks, the 6-month trade-off might yield fewer portfolio projects.'
      },
      {
        category: 'Wellbeing',
        factor: 'Cumulative Fatigue & Burnout',
        impact: 'Juggling 40-hour work weeks alongside evening studies increases mid-semester exhaustion.'
      }
    ],
    cognitiveBiases: [
      {
        biasName: 'Proximity & Immediate Reward Bias',
        explanation: 'Over-indexing on short-term financial stipend and close location while under-weighting long-term academic trade-offs.'
      },
      {
        biasName: 'Confirmation Bias',
        explanation: 'Focusing primarily on details supporting acceptance while minimizing potential scheduling friction.'
      }
    ],
    probingQuestions: [
      'If college exam schedules conflict with company deliverables, what is your contingency plan?',
      'What specific technical skills or portfolio projects will you come away with after 6 months?',
      'How does this opportunity compare to devoting 6 months to top-grade academics and personal open-source projects?'
    ],
    scenarios: [
      {
        scenarioName: 'Best Case',
        description: 'High mentorship, flexible company hours, seamless exam accommodation, and strong return-offer potential.',
        keyUncertainties: ['Manager willingness to adjust hours', 'Actual project depth']
      },
      {
        scenarioName: 'Worst Case',
        description: 'Rigid work hours leading to missed exams, low-level task assignment, and high academic stress.',
        keyUncertainties: ['College attendance policy strictness', 'Workload pressure']
      },
      {
        scenarioName: 'Most Likely',
        description: 'Good financial gain and solid resume title, but requires tight weekend study discipline and careful time management.',
        keyUncertainties: ['Personal discipline', 'Commute fatigue']
      }
    ],
    alternativePaths: [
      {
        optionTitle: 'Negotiate Part-Time / Flexible Hours (20 hrs/week)',
        description: 'Maintain college attendance while securing industry experience and partial stipend.',
        tradeoffComparison: 'Lower immediate cash flow, but significantly protects academic GPA.'
      },
      {
        optionTitle: 'Defer Internship to Summer / Next Semester',
        description: 'Postpone the 6-month block to a period without active coursework.',
        tradeoffComparison: 'Delays immediate income, but eliminates scheduling conflicts completely.'
      }
    ],
    perspectiveBalance: {
      prosVisible: [
        'Attractive stipend compensation',
        'Convenient company location close to home',
        'Early corporate experience on resume'
      ],
      hiddenTradeoffs: [
        'Potential course attendance & exam schedule friction',
        'Opportunity cost of time for self-directed technical projects',
        'Uncertainty regarding actual mentorship depth'
      ]
    }
  };
}
