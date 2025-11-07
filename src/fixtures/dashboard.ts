export type JobStatus = 'processing' | 'completed' | 'failed';

export interface MockJob {
  id: string;
  title: string;
  marketplace: 'Facebook Marketplace' | 'eBay' | 'Vinted';
  status: JobStatus;
  createdAt: string;
  photoUrl: string;
  outputs: {
    title: string;
    description: string;
    tags: string[];
  };
}

export const mockCreditBalance = 48;

export const mockJobs: MockJob[] = [
  {
    id: 'job-001',
    title: 'Vintage Denim Jacket',
    marketplace: 'eBay',
    status: 'completed',
    createdAt: '2025-02-03T10:30:00Z',
    photoUrl:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
    outputs: {
      title: 'Vintage Levi’s Denim Jacket – Medium Wash – Size M',
      description:
        'Classic 80s Levi’s denim jacket in a timeless medium wash. Comfortable relaxed fit with intact seams and authentic patina throughout. Perfect layering piece for all seasons.',
      tags: ['levis', 'vintage', 'denim', 'size m', 'unisex'],
    },
  },
  {
    id: 'job-002',
    title: 'Nike Air Max 97 Silver Bullet',
    marketplace: 'Facebook Marketplace',
    status: 'processing',
    createdAt: '2025-02-04T09:12:00Z',
    photoUrl:
      'https://images.unsplash.com/photo-1580984969073-a5c688c8ff98?w=800&auto=format&fit=crop&q=80',
    outputs: {
      title: 'Nike Air Max 97 “Silver Bullet” – Size UK 9',
      description:
        'Lightly worn Nike Air Max 97 in the iconic silver bullet colorway. Clean uppers, fresh soles, includes original insoles and laces. Ready to ship worldwide.',
      tags: ['nike', 'air max 97', 'silver bullet', 'trainers', 'size uk9'],
    },
  },
  {
    id: 'job-003',
    title: 'Arket Wool Blend Coat',
    marketplace: 'Vinted',
    status: 'failed',
    createdAt: '2025-02-04T08:45:00Z',
    photoUrl:
      'https://images.unsplash.com/photo-1542293787938-4d2226c12e77?w=800&auto=format&fit=crop&q=80',
    outputs: {
      title: 'Arket Tailored Wool Blend Coat – Charcoal – Size S',
      description:
        'Minimalist tailored coat from Arket in a warm wool blend. Charcoal grey, size small. Two-button closure and deep pockets. Minor wear on inner lining only.',
      tags: ['arket', 'coat', 'wool blend', 'charcoal', 'size s'],
    },
  },
];

export const mockFaq = [
  {
    id: 'faq-01',
    question: 'What happens after I upload a product photo?',
    answer:
      'We remove the background, straighten the image, and generate marketplace-ready metadata automatically.',
  },
  {
    id: 'faq-02',
    question: 'How are credits consumed?',
    answer:
      'Each AI-enhanced listing consumes one credit. Failed jobs automatically refund the credit.',
  },
];

