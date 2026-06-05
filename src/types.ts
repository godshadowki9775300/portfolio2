/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Category = 'all' | 'residential' | 'commercial' | 'interior' | 'renovation';

export interface ProjectType {
  id: string;
  name: string;
  category: Exclude<Category, 'all'>;
  location: string;
  locationDetails: string;
  image: string;
  description: string;
  costEstimate: number;
  areaSqFt: number;
  durationMonths: number;
  milestones: { name: string; cost: number; status: 'Pending' | 'Completed' }[];
  specifications: string[];
}

export interface PaymentReceipt {
  transactionId: string;
  projectId: string;
  projectName: string;
  amount: number;
  timestamp: string;
  paymentMethod: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
}
