export interface HiddenAssumption {
  id: string;
  title: string;
  description: string;
  riskLevel: 'High' | 'Medium' | 'Low';
}

export interface OverlookedFactor {
  category: string;
  factor: string;
  impact: string;
}

export interface CognitiveBias {
  biasName: string;
  explanation: string;
}

export interface ScenarioSimulation {
  scenarioName: 'Best Case' | 'Worst Case' | 'Most Likely';
  description: string;
  keyUncertainties: string[];
}

export interface AlternativePath {
  optionTitle: string;
  description: string;
  tradeoffComparison: string;
}

export interface BlindSpotAnalysis {
  id: string;
  timestamp: string;
  decisionTitle: string;
  summary: string;
  hiddenAssumptions: HiddenAssumption[];
  overlookedFactors: OverlookedFactor[];
  cognitiveBiases: CognitiveBias[];
  probingQuestions: string[];
  scenarios: ScenarioSimulation[];
  alternativePaths: AlternativePath[];
  perspectiveBalance: {
    prosVisible: string[];
    hiddenTradeoffs: string[];
  };
  latencyMs?: number;
}

export interface DecisionPreset {
  id: string;
  title: string;
  context: string;
  motivations: string;
  assumptions: string;
}
