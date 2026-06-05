/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjectType } from './types';

export const PROJECTS_DATA: ProjectType[] = [
  {
    id: 'villa-lakshmi',
    name: 'Villa Lakshmi',
    category: 'residential',
    location: 'New Saram, Puducherry',
    locationDetails: 'No. 14, Kamaraj Salai Ext, near New Saram Water Tank, Puducherry, 605013',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    description: 'A premium 4-BHK luxury villa combining contemporary Indian aesthetics with sustainable architecture. Engineered with deep-pile earthquake resistant foundation, multi-tier thermal concrete blocks, customized automated mood lighting, and dual solar water-heater grids. Includes standard automated rainwater harvesting and modular premium teakwood entrance door systems.',
    costEstimate: 8525000,
    areaSqFt: 3800,
    durationMonths: 14,
    specifications: [
      'Teak wood entrance frames & shutters',
      'Kajaria double charged vitrified floor tiles',
      'JSW heavy roofing steel bars with high tensile rating',
      'Ultratech premium weatherproofing cement finish',
      'Finolex Flame Retardant Low Smoke internal wiring',
      'Jaguar premium sanitary fittings with gold finish trims'
    ],
    milestones: [
      { name: 'Initial Site Excavation & Foundation Laying Agreement', cost: 1705000, status: 'Completed' },
      { name: 'Superstructure Column & Roof Slab Construction Release', cost: 2557500, status: 'Completed' },
      { name: 'Masonry Brickworks & Plastering Phase Block', cost: 1705000, status: 'Pending' },
      { name: 'Electrical/Plumbing Concealing & Drywall Plaster Block', cost: 1278750, status: 'Pending' },
      { name: 'Premium Finishings, Paintwork, & Key Handover Final Release', cost: 1278750, status: 'Pending' }
    ]
  },
  {
    id: 'duplex-luxury',
    name: 'Duplex Luxury Home',
    category: 'residential',
    location: 'Auroville Road, Puducherry',
    locationDetails: 'Survey No. 42A, Auroville Main Rd, near Alankuppam Toll, Puducherry, 605111',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description: 'A spacious, architectural marvel designed for optimal natural lighting and cross-ventilation. This duplex features high-concept double-height ceilings, a state-of-the-art modular kitchen, panoramic structural balcony glass rails, and advanced greywater recycling systems suitable for the coastal climate.',
    costEstimate: 11200000,
    areaSqFt: 4500,
    durationMonths: 16,
    specifications: [
      'Italian Statuario Marble premium flooring',
      'Double-glazed insulated UPVC soundproof windows',
      'Nippon Paint weather-reflective premium paint coats',
      'Underground RCC sump storage with 12,000L capacity',
      'Premium false ceilings with customizable warm dim lighting',
      'TOTO automatic smart plumbing commodes'
    ],
    milestones: [
      { name: 'Initial Site Excavation & Foundation Laying Agreement', cost: 2240000, status: 'Completed' },
      { name: 'Superstructure Column & Roof Slab Construction Release', cost: 3360000, status: 'Pending' },
      { name: 'Masonry Brickworks & Plastering Phase Block', cost: 2240000, status: 'Pending' },
      { name: 'Electrical/Plumbing Concealing & Drywall Plaster Block', cost: 1680000, status: 'Pending' },
      { name: 'Premium Finishings, Paintwork, & Key Handover Final Release', cost: 1680000, status: 'Pending' }
    ]
  },
  {
    id: 'corp-office',
    name: 'Corporate Office Block',
    category: 'commercial',
    location: 'White Town, Puducherry',
    locationDetails: 'Plot 7, Goubert Avenue, adjacent French Consulate, White Town, Puducherry, 605001',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    description: 'A premium, modern corporate plaza engineered with commercial open floor plans. Equipped with multi-zone centralized VRF climate cooling grids, load-bearing glass curtain walls with bespoke solar control, automatic smart fire suppression, high-speed cargo elevators, and dual standby acoustic diesel back-up generator setups.',
    costEstimate: 24500000,
    areaSqFt: 12000,
    durationMonths: 24,
    specifications: [
      'Saint Gobain structural heat-reflective glass facade',
      'Heavy commercial grade carpet tiles by Interface',
      'Automatic dry-pipe sprinkler fire prevention setup',
      'Dedicated 100KVA electrical transformer paneling',
      'Advanced biometric multi-channel entry controllers',
      'Durable premium monolithic vitrified external building facade cladding'
    ],
    milestones: [
      { name: 'Substructure Piling, Vaulting & Excavation Clearance', cost: 4900000, status: 'Completed' },
      { name: 'Structural Column Skeleton & Deck Slabs Release', cost: 7350000, status: 'Completed' },
      { name: 'Facade Glazing and Exterior Envelope Panels Finish', cost: 4900000, status: 'Pending' },
      { name: 'Central HVAC, Thermal Ducts, & Fire Glands Commissioning', cost: 3675000, status: 'Pending' },
      { name: 'Interior Tenancy Handover, Fitout Audit, & Occupancy Clearance', cost: 3675000, status: 'Pending' }
    ]
  },
  {
    id: 'retail-complex',
    name: 'Retail Complex',
    category: 'commercial',
    location: 'Mission Street, Puducherry',
    locationDetails: 'No. 204, Mission Street Commercial Hub, Puducherry, 605001',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    description: 'A high-impact contemporary multi-tenant retail shopping complex. Incorporates open-concept atrium steel girder structures, shock-absorbent anti-skid premium flooring tiles, premium wide escalators, robust underground customer parking structures, and digital commercial neon-sign facade fixtures.',
    costEstimate: 18000000,
    areaSqFt: 8500,
    durationMonths: 18,
    specifications: [
      'Reinforced open-span concrete columns & long girders',
      'Automatic sensor glass slide vestibules on entrances',
      'High traffic anti-abrasive quartz flooring tiles',
      'Integrated structural ventilation fans for basements',
      'Centralized network server panel for tenants lines',
      'Toughened glass partition railings for balconies'
    ],
    milestones: [
      { name: 'Substructure Piling, Vaulting & Excavation Clearance', cost: 3600000, status: 'Completed' },
      { name: 'Structural Column Skeleton & Deck Slabs Release', cost: 5400000, status: 'Pending' },
      { name: 'Facade Glazing and Exterior Envelope Panels Finish', cost: 3600000, status: 'Pending' },
      { name: 'Central HVAC, Thermal Ducts, & Fire Glands Commissioning', cost: 2700000, status: 'Pending' },
      { name: 'Interior Tenancy Handover, Fitout Audit, & Occupancy Clearance', cost: 2700000, status: 'Pending' }
    ]
  },
  {
    id: 'modern-living',
    name: 'Modern Living Space',
    category: 'interior',
    location: 'Heritage Town, Puducherry',
    locationDetails: 'Suite 4C, Boulevard Garden Apartments, Heritage Town, Puducherry, 605002',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    description: 'Bespoke luxury interior transformation for an upscale heritage apartment. Combines traditional Puducherry teak architectural pillars with clean, minimalist veneer wood partitions, custom acoustic panels, energy-saving smart dimmers, and custom built-in premium wardrobe organizers.',
    costEstimate: 3400000,
    areaSqFt: 1800,
    durationMonths: 4,
    specifications: [
      'Genuinely sourced reclaimed prime Puducherry teak pillars',
      'Handmade local cement tile mosaics for accent backdrops',
      'Hafele soft-close sliding cabinet fittings',
      'Custom acoustic damping felt ceiling linings',
      'Integrated warm perimeter LED ribbon highlight channels',
      'Imported quartz kitchen countertop tops'
    ],
    milestones: [
      { name: 'Site Demolition, Stripping & Layout Planning Approval', cost: 680000, status: 'Completed' },
      { name: 'Plumbing, Core Wiring conduits & false ceiling frames', cost: 1020000, status: 'Completed' },
      { name: 'Custom Teak Cabinetry, Partitions & Wardrobes Erection', cost: 680000, status: 'Pending' },
      { name: 'Premium Mosaics, Quartz installs, & Paint Detailing', cost: 510000, status: 'Pending' },
      { name: 'Acoustic Tuning, Fixtures finalization & Handover', cost: 510000, status: 'Pending' }
    ]
  },
  {
    id: 'heritage-bungalow',
    name: 'Heritage Bungalow Restoration',
    category: 'renovation',
    location: 'Old Boulevard, Puducherry',
    locationDetails: 'No. 8, Francois Martin Street, French Quarter, Puducherry, 605001',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'An architectural salvage and modernization project of a classic late-19th century French-Colonial heritage villa. Focuses on structural reinforcement via polymer mud injections, restoration of heavy weather-beaten wooden rafters, handcrafted lime plastering, and upgrading to invisible modern plumbing grids.',
    costEstimate: 6200000,
    areaSqFt: 2900,
    durationMonths: 10,
    specifications: [
      'Traditional handmade hydraulic lime plaster mixes',
      'Structural steel beam jackets around main pillars',
      'Restored original Mangalore clay roof tiles',
      'Concealed underground modern drainage grids',
      'Historically accurate premium oil-slick paint textures',
      'Solid antique-brass rustic hardware switches'
    ],
    milestones: [
      { name: 'Structural Safety Assessment, Scaffolding & Bracing', cost: 1240000, status: 'Completed' },
      { name: 'Roof truss disassembly, Beam Reinforcement & Rafter repairs', cost: 1860000, status: 'Completed' },
      { name: 'Hydraulic lime plastering & Waterproofing sealant coats', cost: 1240000, status: 'Pending' },
      { name: 'Underground sanitary grid upgrade & concealed wiring', cost: 930000, status: 'Pending' },
      { name: 'Bespoke paint touch-ups, historic lock replicas & Handover', cost: 930000, status: 'Pending' }
    ]
  }
];
