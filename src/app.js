/**
 * TECCON Builders - Pure Vanilla JavaScript Operations
 */

const PROJECTS_DATA = [
  {
    id: 'villa-lakshmi',
    name: 'Villa Lakshmi',
    category: 'residential',
    location: 'New Saram, Puducherry',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    description: 'A premium 4-BHK luxury standalone villa combining contemporary Dravidian aesthetics with high glass curtain layouts. Built with deep-pile earthquake-resistant foundation grids, customized warm LED ambient mood lighting, and dual solar water grids with zero-loss pipelines. Fully compliant with modern Puducherry structural standards.',
    costEstimate: 8525000,
    areaSqFt: 3800,
    durationMonths: 14,
    specifications: [
      'Genuinely sourced premium teak wood main portal frame',
      'Kajaria double-charged anti-skid floor tile slabs',
      'JSW high-tensile heavy concrete steel armature grids',
      'Ultratech premium weatherproofing concrete shield coating',
      'Finolex Fire-Retardant Low Smoke internal wiring grids'
    ],
    milestones: [
      { name: 'Initial Site Excavation & Base Foundation Agreement', cost: 1705000, status: 'Completed' },
      { name: 'Superstructure Column Frame & Mid-Slab Release', cost: 2557500, status: 'Completed' },
      { name: 'Masonry Brickworks & Thermal Wall Partition Block', cost: 1705000, status: 'Pending' },
      { name: 'Electrical concealed lines & Plastering Phase Release', cost: 1278750, status: 'Pending' },
      { name: 'Premium Finishes, Decorative paints & Final Walkthrough', cost: 1278750, status: 'Pending' }
    ]
  },
  {
    id: 'duplex-concept',
    name: 'Modern Duplex Villa',
    category: 'residential',
    location: 'Auroville Road, Puducherry',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description: 'An architectural marvel designed for cross-ventilation and optimal daylight elements in the coastal climate. This duplex home features high-concept glass balconies, modern modular kitchen units, structured structural pillars, and advanced rainwater harvesting cisterns.',
    costEstimate: 11200000,
    areaSqFt: 4500,
    durationMonths: 16,
    specifications: [
      'Italian Statuario marble luxury floor boards',
      'Triple-glazed UPVC insulated soundproof balcony glass sliding panes',
      'Underground reinforced RCC storage cistern with 12,500L storage capacity',
      'Warm custom perimeter ceiling lighting grids',
      'Nippon Paint weatherproof exterior shield coatings'
    ],
    milestones: [
      { name: 'Initial Site Excavation & Base Foundation Agreement', cost: 2240000, status: 'Completed' },
      { name: 'Superstructure Column Frame & Mid-Slab Release', cost: 3360000, status: 'Pending' },
      { name: 'Masonry Brickworks & Thermal Wall Partition Block', cost: 2240000, status: 'Pending' },
      { name: 'Electrical concealed lines & Plastering Phase Release', cost: 1680000, status: 'Pending' },
      { name: 'Premium Finishes, Decorative paints & Final Walkthrough', cost: 1680000, status: 'Pending' }
    ]
  },
  {
    id: 'corp-plaza',
    name: 'Corporate Office Block',
    category: 'commercial',
    location: 'White Town, Puducherry',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    description: 'A structural masterpiece matching business parameters with premium aesthetic designs. Highlights open floor plans, Saint-Gobain structural heat-reflective double-glazing, automatic dry-pipe smart firefighting, dedicated 100KVA electrical cabinets and high-speed cargo elevators.',
    costEstimate: 24500000,
    areaSqFt: 12000,
    durationMonths: 24,
    specifications: [
      'Saint-Gobain commercial heat-absorbing glass facade panels',
      'Heavy-duty Interface corporate carpet tiles with dampening properties',
      'Dedicated 100KVA industrial high-phase transformer installation',
      'Automatic dry-pipe smoke pressure sensor sprinkler panels',
      'Multizone centralized heavy VRF air climate ducts'
    ],
    milestones: [
      { name: 'Substructure Piling, Safety Excavation & Earthworks', cost: 4900000, status: 'Completed' },
      { name: 'Main Steel Column Skeleton & Ground Concrete Deck Slabs', cost: 7350000, status: 'Completed' },
      { name: 'Window Curtain Walls, Envelope Glazing & Masonry Outer shell', cost: 4900000, status: 'Pending' },
      { name: 'Central HVAC, Thermal Ducts, & Fire Sprinkler Mains Installation', cost: 3675000, status: 'Pending' },
      { name: 'Internal Tenancy Handover, Fitout Audit, & Occupancy Clearance', cost: 3675000, status: 'Pending' }
    ]
  },
  {
    id: 'retail-complex',
    name: 'Retail Complex',
    category: 'commercial',
    location: 'Mission Street, Puducherry',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    description: 'A multi-tenant retail shopping complex tailored for shopping convenience. Incorporates open-concept steel girders, high-traffic vitrified quartz floors, escalators with soft-start sensors, and robust dual underground parking systems.',
    costEstimate: 18000000,
    areaSqFt: 8500,
    durationMonths: 18,
    specifications: [
      'Reinforced concrete columns with high-girders spans',
      'Automatic sensor slide glass vestibules on front entrances',
      'Quartz high-abrasion resistant floor tile slates',
      'Vented structural subterranean garage exhaust fans',
      'Central tenant control network cabinet'
    ],
    milestones: [
      { name: 'Substructure Piling, Safety Excavation & Earthworks', cost: 3600000, status: 'Completed' },
      { name: 'Main Steel Column Skeleton & Ground Concrete Deck Slabs', cost: 5400000, status: 'Pending' },
      { name: 'Window Curtain Walls, Envelope Glazing & Masonry Outer shell', cost: 3600000, status: 'Pending' },
      { name: 'Central HVAC, Thermal Ducts, & Fire Sprinkler Mains Installation', cost: 2700000, status: 'Pending' },
      { name: 'Internal Tenancy Handover, Fitout Audit, & Occupancy Clearance', cost: 2700000, status: 'Pending' }
    ]
  },
  {
    id: 'modern-living',
    name: 'Modern Living Space',
    category: 'interior',
    location: 'Heritage Town, Puducherry',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    description: 'A luxury interior overhaul of an upscale heritage apartment block. Coordinates classic Puducherry teak accents, custom soundproof veneer panels, automated warm LED dimmers, and bespoke built-in sliding drawer systems.',
    costEstimate: 3400000,
    areaSqFt: 1800,
    durationMonths: 4,
    specifications: [
      'Genuinely sourced premium reclaimed teak partition panels',
      'Handcrafted ceramic mosaic tile backsplashes',
      'Hafele soft-close push drawer slider units',
      'Warm indirect LED profile light slots mapped to home automation',
      'Double-thick quartz countertops with deep undermount sinks'
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
    id: 'heritage-restoration',
    name: 'Heritage Restoration Unit',
    category: 'renovation',
    location: 'Old Boulevard, Puducherry',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'An architectural conservation project restoring a French-Colonial heritage villa. Incorporates polymer wall soil grout injection, structural ceiling oak truss bracing, traditional lime-plaster finish formulation, and modern hidden conduits.',
    costEstimate: 6200000,
    areaSqFt: 2900,
    durationMonths: 10,
    specifications: [
      'Hydraulic lime plastering matching historic formulations',
      'Structural steel support collars installed inside historic columns',
      'Authentic glazed Mangalore clay roof tile tiles',
      'Invisible copper lines plumbing grids',
      'Cast-brass heavy locks matching classic period specs'
    ],
    milestones: [
      { name: 'Historic Safety Assessment, Scaffolding & Pillar bracing', cost: 1240000, status: 'Completed' },
      { name: 'Main Truss restoration, roof tile cleaning & wood sealant coats', cost: 1860000, status: 'Completed' },
      { name: 'Lime-plaster application and structural polymer grout injections', cost: 1240000, status: 'Pending' },
      { name: 'Secret electrical conduits routing & copper plumbing integration', cost: 930000, status: 'Pending' },
      { name: 'Bespoke period finishing coats, hardware fits, & clean walkthrough', cost: 930000, status: 'Pending' }
    ]
  }
];

// Document boot sequence
document.addEventListener('DOMContentLoaded', () => {
  // Elements Selection
  const navbar = document.getElementById('navbar');
  const projectGrid = document.getElementById('projects-root');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const backTop = document.getElementById('backTop');

  // Redirection Config Panel Options
  const rtypeSecure = document.getElementById('rtype-secure');
  const rtypeCustom = document.getElementById('rtype-custom');
  const customUrlContainer = document.getElementById('custom-url-container');
  const customUrlInput = document.getElementById('redirect-custom-url');

  // Testimonials Carousel Tracks
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const testimonialsList = document.querySelectorAll('.testimonial-card');
  let testimonialIndex = 0;

  // Modals Elements
  const specModal = document.getElementById('specModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const redirectionGate = document.getElementById('redirection-gate');
  const countdownText = document.getElementById('countdown-text');

  // Contact Form
  const contactFormEl = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  // Active choices holding state
  let activeSelectedProject = PROJECTS_DATA[0];
  let selectedMilestoneIndex = 2;
  let activeFilter = 'all';

  // Config parameters
  let targetRedirectType = 'secure'; // 'secure' or 'custom'
  let targetCustomUrl = 'https://www.onlinesbi.sbi';

  // Format Helper 
  const formatCUR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Sticky header trigger
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    if (backTop) {
      backTop.classList.toggle('visible', window.scrollY > 400);
    }
  });

  // Smooth back up to top trigger
  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hamburger Click Events
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
    });
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  }
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('open');
    });
  });

  // Redirection Selection listeners
  if (rtypeSecure && rtypeCustom) {
    rtypeSecure.addEventListener('change', () => {
      targetRedirectType = 'secure';
      if (customUrlContainer) customUrlContainer.style.display = 'none';
    });
    rtypeCustom.addEventListener('change', () => {
      targetRedirectType = 'custom';
      if (customUrlContainer) customUrlContainer.style.display = 'block';
    });
  }
  if (customUrlInput) {
    customUrlInput.addEventListener('input', (e) => {
      targetCustomUrl = e.target.value.trim() || 'https://www.onlinesbi.sbi';
    });
  }

  // Render Projects Grid Function
  const renderProjects = () => {
    if (!projectGrid) return;
    projectGrid.innerHTML = '';

    const list = PROJECTS_DATA.filter(p => activeFilter === 'all' || p.category === activeFilter);

    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-img-fake" style="background-image: url('${p.image}')"></div>
        <div class="project-overlay">
          <span class="project-cat">${p.category} &middot; ${p.areaSqFt} SqFt</span>
          <h3 class="project-name">${p.name}</h3>
          <div class="project-view">Specs & Redirections &rarr;</div>
        </div>
      `;

      card.addEventListener('click', () => {
        openProjectSpecs(p);
      });

      projectGrid.appendChild(card);
    });
  };

  // Filter Buttons Binding
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProjects();
    });
  });

  // Open Specs Detail Modal
  const openProjectSpecs = (p) => {
    activeSelectedProject = p;
    if (!specModal) return;

    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-location').textContent = p.location;
    document.getElementById('modal-desc').textContent = p.description;
    document.getElementById('modal-estimate').textContent = formatCUR(p.costEstimate);
    document.getElementById('modal-area').textContent = p.areaSqFt + ' SqFt';
    document.getElementById('modal-months').textContent = p.durationMonths + ' Months';

    // Render Specs list bullet strings
    const specsRoot = document.getElementById('modal-specs-list');
    specsRoot.innerHTML = '';
    p.specifications.forEach(s => {
      const li = document.createElement('li');
      li.style.cssText = 'color: #C4C7D0; font-size: 0.85rem; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 300;';
      li.innerHTML = `<span style="color: #C9A84C;">✔</span> <span>${s}</span>`;
      specsRoot.appendChild(li);
    });

    // Render Milestones billing timelines
    const milestoneRoot = document.getElementById('modal-milestones');
    milestoneRoot.innerHTML = '';
    p.milestones.forEach((m, idx) => {
      const isCompleted = m.status === 'Completed';

      const div = document.createElement('div');
      div.style.cssText = `
        border: 1px solid ${isCompleted ? 'rgba(37, 211, 102, 0.2)' : 'rgba(201, 168, 76, 0.2)'};
        background: ${isCompleted ? 'rgba(37, 211, 102, 0.05)' : 'rgba(201, 168, 76, 0.03)'};
        padding: 16px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        transition: border 0.3s;
      `;

      div.innerHTML = `
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 500; color: #FAFAF8;">${m.name}</span>
            <span style="font-size: 0.65rem; padding: 2px 8px; background: ${isCompleted ? '#25D366' : '#C9A84C'}; color: #0A0F1E; text-transform: uppercase; font-weight: bold;">
              ${m.status}
            </span>
          </div>
          <span style="font-size: 0.85rem; color: #8A8E99; font-weight: 300; display: block; margin-top: 4px;">Milestone Budget Release Estimate: <strong>${formatCUR(m.cost)}</strong></span>
        </div>
        <div>
          ${isCompleted 
            ? `<span style="color: #25D366; font-size: 0.75rem; font-weight: bold; text-transform: uppercase;">Paid & Verified</span>`
            : `<button class="pay-trigger-btn" style="background: #C9A84C; color: #0A0F1E; padding: 8px 16px; font-size: 0.75rem; text-transform: uppercase; font-weight: bold; border: none; cursor: pointer; transition: all 0.3s;" data-idx="${idx}">Pay Via Gate &rarr;</button>`
          }
        </div>
      `;

      // bind payment click action
      const btn = div.querySelector('.pay-trigger-btn');
      if (btn) {
        btn.addEventListener('click', (e) => {
          const mIdx = parseInt(e.target.dataset.idx);
          initializeGateRedirection(p, mIdx);
        });
      }

      milestoneRoot.appendChild(div);
    });

    specModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  // Close Info Modal callback
  if (modalCloseBtn && specModal) {
    modalCloseBtn.addEventListener('click', () => {
      specModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  // Initialize secure redirection
  const initializeGateRedirection = (proj, milestoneIdx) => {
    selectedMilestoneIndex = milestoneIdx;
    
    // Hide details modal if showing
    if (specModal) specModal.style.display = 'none';

    // Show gateway overlay
    if (!redirectionGate) return;
    redirectionGate.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Configure details info displayed inside loader gate
    const milestoneObj = proj.milestones[milestoneIdx];
    document.getElementById('gate-milestone-info').textContent = milestoneObj.name;
    document.getElementById('gate-milestone-cost').textContent = formatCUR(milestoneObj.cost);
    document.getElementById('gate-redirect-hint').textContent = targetRedirectType === 'custom' ? targetCustomUrl : 'Puducherry Secure Milestone Gateway API';

    let secs = 3;
    if (countdownText) countdownText.textContent = secs;

    const timer = setInterval(() => {
      secs--;
      if (countdownText) countdownText.textContent = secs;
      
      if (secs <= 0) {
        clearInterval(timer);
        redirectionGate.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Perform redirect action
        if (targetRedirectType === 'custom') {
          window.open(targetCustomUrl, '_blank', 'noopener,noreferrer');
        } else {
          // Perform local completion simulation and record receipt inside project object
          proj.milestones[milestoneIdx].status = 'Completed';
          alert(`Sandbox Handshake Initialized!\nProject: ${proj.name}\nMilestone Amount: ${formatCUR(milestoneObj.cost)} was marked as Successfully PAID & cleared inside client records.`);
          
          // Re-render project sheets to show completion checks
          renderProjects();
        }
      }
    }, 1000);
  };

  // Testimonials Navigation triggers
  const updateTestimonials = () => {
    testimonialsList.forEach((t, i) => {
      t.style.display = (i === testimonialIndex) ? 'block' : 'none';
    });
  };

  if (prevBtn && nextBtn && testimonialsList.length > 0) {
    updateTestimonials();
    prevBtn.addEventListener('click', () => {
      testimonialIndex = (testimonialIndex === 0) ? testimonialsList.length - 1 : testimonialIndex - 1;
      updateTestimonials();
    });
    nextBtn.addEventListener('click', () => {
      testimonialIndex = (testimonialIndex + 1) % testimonialsList.length;
      updateTestimonials();
    });
  }

  // Map blueprint click redirection to real-world Puducherry maps coordinates
  const bpMapBtn = document.getElementById('blueprint-map-btn');
  if (bpMapBtn) {
    bpMapBtn.addEventListener('click', () => {
      window.open('https://maps.google.com/?q=7+Middle+Street+New+Saram+Puducherry', '_blank', 'noopener,noreferrer');
    });
  }

  // Smooth contact submit simulation callback
  if (contactFormEl) {
    contactFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactFormEl.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'Submitting Request...';

      setTimeout(() => {
        if (btn) btn.textContent = 'Send Consultation Request';
        if (formSuccess) {
          formSuccess.style.cssText = 'display: block; background: rgba(37, 211, 102, 0.1); border: 1px solid #25D366; color: #25D366; padding: 16px; font-size: 0.85rem; margin-top: 16px;';
          formSuccess.textContent = '✓ Consultation requested successfully! Our civil engineer will reach you on phone within 2 hours.';
        }
        contactFormEl.reset();

        setTimeout(() => {
          if (formSuccess) formSuccess.style.display = 'none';
        }, 6000);
      }, 1200);
    });
  }

  // Preloader dismissal with robust status handling
  const dismissLoader = () => {
    const loader = document.getElementById('loader');
    if (loader && !loader.classList.contains('done')) {
      loader.classList.add('done');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 800);
    }
  };

  if (document.readyState === 'complete') {
    dismissLoader();
  } else {
    window.addEventListener('load', dismissLoader);
  }
  // Safety timeout fallback
  setTimeout(dismissLoader, 2500);

  // Scroll active reveal IntersectionObserver setup
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support Observer
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // Count-up counter animations with requestAnimationFrame
  const startCounterAnimation = (entry, observer) => {
    const el = entry.target;
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const targetVal = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = parseInt(el.getAttribute('data-duration') || '1500', 10);
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = progress * targetVal;
      
      el.textContent = currentVal.toFixed(decimals) + suffix;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = targetVal.toFixed(decimals) + suffix;
      }
    };
    
    window.requestAnimationFrame(step);
    if (observer) observer.unobserve(el);
  };

  const counterElements = document.querySelectorAll('.count-up');
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounterAnimation(entry, observer);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10px 0px'
    });
    counterElements.forEach(el => counterObserver.observe(el));
  } else {
    // Fallback if no observer
    counterElements.forEach(el => {
      const targetVal = parseFloat(el.getAttribute('data-target'));
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      el.textContent = targetVal.toFixed(decimals) + suffix;
    });
  }

  // Initialize default display
  renderProjects();
});
