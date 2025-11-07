export type JobStatus = 'queued' | 'processing' | 'completed';

export interface JobFixture {
  id: string;
  title: string;
  marketplace: 'eBay' | 'Facebook Marketplace' | 'Vinted' | 'Etsy';
  status: JobStatus;
  createdAt: string;
  thumbnailColor: string;
  outputs?: {
    generatedTitle: string;
    description: string;
    tags: string[];
  };
}

export const jobFixtures: JobFixture[] = [
  {
    id: 'job-001',
    title: 'Vintage Levi’s denim jacket',
    marketplace: 'eBay',
    status: 'completed',
    createdAt: '2025-11-06T13:45:00.000Z',
    thumbnailColor: '#3A6EF5',
    outputs: {
      generatedTitle: 'Vintage Levi’s Trucker Denim Jacket – Size M',
      description:
        'Classic Levi’s trucker jacket in good vintage condition. Light wear throughout and soft, broken-in denim. Measurements: chest 21", length 24".',
      tags: ['Levis', 'Vintage', 'Denim', 'Jacket', '90s'],
    },
  },
  {
    id: 'job-002',
    title: 'Nike Air Max 270 React',
    marketplace: 'Vinted',
    status: 'processing',
    createdAt: '2025-11-07T09:10:00.000Z',
    thumbnailColor: '#38C3A0',
  },
  {
    id: 'job-003',
    title: 'Mid-century oak side table',
    marketplace: 'Facebook Marketplace',
    status: 'queued',
    createdAt: '2025-11-07T09:30:00.000Z',
    thumbnailColor: '#FFB74D',
  },
  {
    id: 'job-004',
    title: 'Handmade ceramic planter set',
    marketplace: 'Etsy',
    status: 'completed',
    createdAt: '2025-11-05T18:20:00.000Z',
    thumbnailColor: '#B781F3',
    outputs: {
      generatedTitle: 'Handmade Ceramic Planter Duo – Sage & Sand',
      description:
        'Two handcrafted ceramic planters with matte glaze. Includes drainage holes and matching saucers. Perfect for succulents or herbs.',
      tags: ['Handmade', 'Planter', 'Ceramic', 'Pair'],
    },
  },
];

