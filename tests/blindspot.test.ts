import { describe, it, expect } from 'vitest';
import { analyzeBlindSpots } from '../src/services/gemini';

describe('The Blind Spot Solution Suite', () => {
  it('should validate problem alignment for The Blind Spot challenge', async () => {
    const result = await analyzeBlindSpots(
      'Accepting 6-Month Internship',
      'Stipend $1200, 20 mins from home, college 4 days a week',
      'Good stipend and close to home',
      'Assuming mentorship will be provided'
    );

    expect(result.decisionTitle).toBe('Accepting 6-Month Internship');
    expect(result.hiddenAssumptions.length).toBeGreaterThan(0);
    expect(result.overlookedFactors.length).toBeGreaterThan(0);
    expect(result.probingQuestions.length).toBeGreaterThan(0);
  });
});
