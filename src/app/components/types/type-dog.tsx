import React from 'react';

export interface Dog {
  Id: number;
  breed: string;
  description: string;
  temperament: string;
  popularity: number;
  minHeight: number;
  maxHeight: number;
  minWeight: number;
  maxWeight: number;
  minExpectancy: number;
  maxExpectancy: number;
  category: string;
  groomingFrequencyValue: number;
  groomingFrequencyCategory: string;
  sheddingValue: number;
  sheddingCategory: string;
  energyLevelValue: number;
  energyLevelCategory: string;
  trainabilityValue: number;
  trainabilityCategory: string;
  demeanorValue: number;
  demeanorCategory: string;
}
