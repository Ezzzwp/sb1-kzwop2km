export interface FlatType {
  id: string;
  area: number;
  rooms: number;
  pricePerSqm: number;
  flatPhotos: string[];
  floorPlan: string;
  specifications: {
    bedrooms: number;
    bathrooms: number;
    balconies: number;
    parking: boolean;
    storage: boolean;
    heating: string;
    view: string;
    floor: string;
  };
}

export interface Property {
  id: string;
  title: string;
  district: string;
  completionDate: string;
  constructionStatus: string;
  progress: number;
  image: string; // Exterior building photo
  developer: string;
  expectedROI: number;
  description: string;
  amenities: string[];
  flatTypes: FlatType[];
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Sky Gardens Saburtalo',
    district: 'Saburtalo',
    completionDate: 'Q4 2024',
    constructionStatus: 'Finishing',
    progress: 85,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    developer: 'Premium Development',
    expectedROI: 28,
    description: 'Modern 10-story residential building in the heart of Saburtalo with stunning city views. Features premium finishes, smart home technology, and access to world-class amenities including rooftop gardens, fitness center, and 24/7 concierge service.',
    amenities: ['Rooftop Garden', 'Fitness Center', '24/7 Concierge', 'Underground Parking', 'Smart Home System', 'High-Speed Internet'],
    flatTypes: [
      {
        id: '1-50',
        area: 50,
        rooms: 1,
        pricePerSqm: 1200,
        flatPhotos: [
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 1,
          bathrooms: 1,
          balconies: 1,
          parking: true,
          storage: true,
          heating: 'Central Heating',
          view: 'City View',
          floor: '3rd-8th Floor'
        }
      },
      {
        id: '1-70',
        area: 70,
        rooms: 2,
        pricePerSqm: 1200,
        flatPhotos: [
          'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293742/pexels-photo-8293742.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 2,
          bathrooms: 1,
          balconies: 1,
          parking: true,
          storage: true,
          heating: 'Central Heating',
          view: 'City View',
          floor: '3rd-8th Floor'
        }
      },
      {
        id: '1-90',
        area: 90,
        rooms: 3,
        pricePerSqm: 1200,
        flatPhotos: [
          'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293765/pexels-photo-8293765.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 3,
          bathrooms: 2,
          balconies: 2,
          parking: true,
          storage: true,
          heating: 'Central Heating',
          view: 'City View',
          floor: '3rd-8th Floor'
        }
      },
      {
        id: '1-120',
        area: 120,
        rooms: 4,
        pricePerSqm: 1300,
        flatPhotos: [
          'https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2062429/pexels-photo-2062429.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2062430/pexels-photo-2062430.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293770/pexels-photo-8293770.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 4,
          bathrooms: 3,
          balconies: 2,
          parking: true,
          storage: true,
          heating: 'Central Heating',
          view: 'Premium City View',
          floor: '9th-10th Floor'
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Vake Heights Residence',
    district: 'Vake',
    completionDate: 'Q2 2025',
    constructionStatus: 'Structure',
    progress: 60,
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
    developer: 'Elite Constructions',
    expectedROI: 32,
    description: 'Luxury 12-story residence in prestigious Vake district. Featuring panoramic mountain views, premium European appliances, and exclusive access to private spa and wellness facilities.',
    amenities: ['Private Spa', 'Wine Cellar', 'Concierge Service', 'Valet Parking', 'Private Elevator', 'Mountain Views'],
    flatTypes: [
      {
        id: '2-60',
        area: 60,
        rooms: 2,
        pricePerSqm: 1800,
        flatPhotos: [
          'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293742/pexels-photo-8293742.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 2,
          bathrooms: 2,
          balconies: 1,
          parking: true,
          storage: true,
          heating: 'Underfloor Heating',
          view: 'Mountain View',
          floor: '3rd-8th Floor'
        }
      },
      {
        id: '2-85',
        area: 85,
        rooms: 3,
        pricePerSqm: 1800,
        flatPhotos: [
          'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293765/pexels-photo-8293765.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 3,
          bathrooms: 2,
          balconies: 2,
          parking: true,
          storage: true,
          heating: 'Underfloor Heating',
          view: 'Mountain View',
          floor: '3rd-8th Floor'
        }
      },
      {
        id: '2-110',
        area: 110,
        rooms: 3,
        pricePerSqm: 1900,
        flatPhotos: [
          'https://images.pexels.com/photos/2062429/pexels-photo-2062429.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2062430/pexels-photo-2062430.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571478/pexels-photo-1571478.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293770/pexels-photo-8293770.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 3,
          bathrooms: 3,
          balconies: 2,
          parking: true,
          storage: true,
          heating: 'Underfloor Heating',
          view: 'Premium Mountain View',
          floor: '9th-12th Floor'
        }
      },
      {
        id: '2-140',
        area: 140,
        rooms: 4,
        pricePerSqm: 2000,
        flatPhotos: [
          'https://images.pexels.com/photos/1571479/pexels-photo-1571479.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2062434/pexels-photo-2062434.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2062435/pexels-photo-2062435.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293774/pexels-photo-8293774.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 4,
          bathrooms: 4,
          balconies: 3,
          parking: true,
          storage: true,
          heating: 'Smart Climate Control',
          view: 'Panoramic Mountain View',
          floor: 'Penthouse'
        }
      }
    ]
  },
  {
    id: '3',
    title: 'Metro Plaza Complex',
    district: 'Didube',
    completionDate: 'Q1 2025',
    constructionStatus: 'Structure',
    progress: 45,
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
    developer: 'Metro Developments',
    expectedROI: 25,
    description: 'Contemporary 9-story building with excellent metro connectivity. Perfect for young professionals with modern amenities and energy-efficient design.',
    amenities: ['Metro Access', 'Co-working Space', 'Gym', 'Rooftop Terrace', 'Bike Storage', 'Electric Car Charging'],
    flatTypes: [
      {
        id: '3-45',
        area: 45,
        rooms: 1,
        pricePerSqm: 950,
        flatPhotos: [
          'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293761/pexels-photo-8293761.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 1,
          bathrooms: 1,
          balconies: 1,
          parking: false,
          storage: true,
          heating: 'Central Heating',
          view: 'Urban View',
          floor: '2nd-7th Floor'
        }
      },
      {
        id: '3-65',
        area: 65,
        rooms: 2,
        pricePerSqm: 950,
        flatPhotos: [
          'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571480/pexels-photo-1571480.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571481/pexels-photo-1571481.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293776/pexels-photo-8293776.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 2,
          bathrooms: 1,
          balconies: 1,
          parking: false,
          storage: true,
          heating: 'Central Heating',
          view: 'Urban View',
          floor: '2nd-7th Floor'
        }
      },
      {
        id: '3-80',
        area: 80,
        rooms: 3,
        pricePerSqm: 950,
        flatPhotos: [
          'https://images.pexels.com/photos/2062436/pexels-photo-2062436.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2062437/pexels-photo-2062437.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571482/pexels-photo-1571482.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        floorPlan: 'https://images.pexels.com/photos/8293777/pexels-photo-8293777.jpeg?auto=compress&cs=tinysrgb&w=800',
        specifications: {
          bedrooms: 3,
          bathrooms: 2,
          balconies: 1,
          parking: true,
          storage: true,
          heating: 'Central Heating',
          view: 'Premium Urban View',
          floor: '8th-9th Floor'
        }
      }
    ]
  }
];