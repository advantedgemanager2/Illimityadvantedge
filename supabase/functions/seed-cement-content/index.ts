import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { getCorsHeaders } from "../_shared/cors.ts";
import { verifyAdmin } from "../_shared/auth.ts";

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting Cement sector content seed...');

    const { adminClient: supabase, error: authError } = await verifyAdmin(req, corsHeaders);
    if (authError) return authError;

    // Find the Cement page
    const { data: page, error: pageError } = await supabase
      .from('pages')
      .select('id')
      .eq('slug', 'sectors/cement')
      .single();

    if (pageError || !page) {
      console.error('Cement page not found:', pageError);
      throw new Error('Cement page not found. Please create it first.');
    }

    const pageId = page.id;
    console.log('Found existing Cement page:', pageId);

    // Delete existing sections and sources for this page
    const { error: deleteSectionsError } = await supabase
      .from('page_sections')
      .delete()
      .eq('page_id', pageId);

    if (deleteSectionsError) {
      console.error('Error deleting sections:', deleteSectionsError);
    }

    const { error: deleteSourcesError } = await supabase
      .from('page_sources')
      .delete()
      .eq('page_id', pageId);

    if (deleteSourcesError) {
      console.error('Error deleting sources:', deleteSourcesError);
    }

    console.log('Deleted existing sections and sources');

    // Define all sections
    const sections = [
      // Introduction
      {
        page_id: pageId,
        section_id: 'intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 1,
        content: { text: "Cement, a fundamental building material, plays a significant role in modern society. Its importance cannot be understated, especially considering its various applications in construction and infrastructure development. However, it is also a major source of CO2 emissions, contributing a substantial amount to global greenhouse gas emissions." }
      },
      {
        page_id: pageId,
        section_id: 'intro-challenge',
        section_type: 'paragraph',
        title: null,
        sort_order: 2,
        content: { text: "As global demand for cement continues to grow, spurred by emerging markets and increasing urbanisation, the challenge lies in maintaining production levels while also reducing CO2 emissions. This is a complex issue, requiring a balanced approach to ensure that the need for cement is met without compromising environmental sustainability." }
      },
      {
        page_id: pageId,
        section_id: 'intro-strategies',
        section_type: 'paragraph',
        title: null,
        sort_order: 3,
        content: { text: "Several key strategies have been identified to help cut emissions in cement production. These include improving energy efficiency during the production process, switching to lower-carbon fuels, and promoting material efficiency. The latter involves reducing the clinker-to-cement ratio and total demand, thereby minimising the amount of carbon-intensive clinker required." }
      },
      {
        page_id: pageId,
        section_id: 'intro-innovation',
        section_type: 'paragraph',
        title: null,
        sort_order: 4,
        content: { text: "Furthermore, the advancement of innovative near-zero emission production routes is also crucial. Such innovations are still in development and will require further research and investment, but they hold the promise of significantly reducing the carbon footprint of cement production." }
      },
      {
        page_id: pageId,
        section_id: 'intro-netzero',
        section_type: 'paragraph',
        title: null,
        sort_order: 5,
        content: { text: "In a scenario where net zero emissions are achieved by 2050, a goal that aligns with global efforts to mitigate climate change, cement production is expected to level off. Material efficiency strategies and carbon capture and storage (CCS) are likely to play a critical role in this process. The former can help optimise the use of cement throughout the construction value chain, while the latter can capture and store CO2 emissions, thus reducing their release into the atmosphere." }
      },

      // Cement Market
      {
        page_id: pageId,
        section_id: 'cement-market',
        section_type: 'heading',
        title: 'Cement Market',
        sort_order: 6,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'market-overview',
        section_type: 'paragraph',
        title: null,
        sort_order: 7,
        content: { text: "The global cement market has been experiencing significant growth, driven by various factors across different regions. As of 2023, the market reached a value of USD 383.02 billion, propelled by rising demand from the construction sector. It is anticipated to grow at a compound annual growth rate (CAGR) of 5.4% during the forecast period of 2024-2032, potentially reaching USD 614.88 billion by 2032. This growth is supported by increasing infrastructural projects and a focus on high-quality cement to ensure safety during natural calamities." }
      },
      {
        page_id: pageId,
        section_id: 'market-regional',
        section_type: 'paragraph',
        title: null,
        sort_order: 8,
        content: { text: "Regionally, the Asia-Pacific region accounted for a significant share, with a market size of USD 273.32 billion in 2022, mainly due to demand from developing nations like Southeast Asia, China, and India. The growth in this region is attributed to infrastructure and construction activities, with China playing a dominant role as both a producer and consumer. The demand for residential spaces in China is a key contributor to the market's expansion." }
      },
      {
        page_id: pageId,
        section_id: 'market-volume',
        section_type: 'paragraph',
        title: null,
        sort_order: 9,
        content: { text: "In terms of volume, the cement market is expected to reach 4.14 billion tons in 2024 and grow at a Compounded Annual Growth Rate of 7.23% to reach 5.88 billion tons by 2029. This growth is underpinned by an increase in residential constructions across the Asia-Pacific, growing infrastructural activities in the Middle East and Africa, and the abundance of raw materials like fly ash. However, the market faces challenges from government regulations on carbon emissions from cement manufacturing plants." }
      },
      {
        page_id: pageId,
        section_id: 'market-players',
        section_type: 'paragraph',
        title: null,
        sort_order: 10,
        content: { text: "Key players in the cement market are focusing on expanding their product offerings and increasing their presence globally, developing strong regional presences, distribution channels, and product offerings, with strategies including new product development, acquisitions, and initiatives for zero-carbon construction materials." }
      },

      // Industry Mainstream Technology
      {
        page_id: pageId,
        section_id: 'mainstream-tech',
        section_type: 'heading',
        title: 'Industry Mainstream Technology',
        sort_order: 11,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'mainstream-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 12,
        content: { text: "The mainstream technologies in cement production are grounded in a process that has remained fundamentally consistent over the past century. At the core of these technologies is the production of clinker, the active ingredient in cement, which involves the high-temperature calcination of limestone (calcium carbonate) in large rotary kilns." }
      },

      // Cement Types
      {
        page_id: pageId,
        section_id: 'cement-types',
        section_type: 'heading',
        title: 'Cement Types',
        sort_order: 13,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'cement-types-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 14,
        content: { text: "In the European Union (EU), the production of mainstream cement involves a series of complex processes aimed at creating a durable and versatile construction materials. More specific, there are several types of mainstream cement:" }
      },
      {
        page_id: pageId,
        section_id: 'cement-types-list',
        section_type: 'list',
        title: null,
        sort_order: 15,
        content: {
          ordered: true,
          items: [
            "Ordinary Portland Cement (OPC): Widely used in general construction, OPC is the most common type of cement. It is suitable for various applications such as residential buildings, bridges, and pavements.",
            "Blended Cement: This type includes a mixture of Portland cement with other materials, such as fly ash, silica fume, or slag. These additions enhance certain properties of the cement, like durability and workability, and can also reduce the environmental impact of its production.",
            "High Strength Portland Cement: Specially formulated to achieve higher strength at early ages, this cement is used in structures that require high strength capabilities.",
            "Sulfate Resisting Cement (SRC): Designed to withstand sulfate attacks, this cement is used in construction where the concrete is exposed to soil or water with high sulfate content.",
            "Low Heat Cement: Generates less heat during hydration, making it suitable for mass concrete works where preventing excessive heat and thermal cracking is critical.",
            "Rapid Hardening Cement: Achieves high strength in the early stages after casting, making it suitable for fast-paced construction projects or where early strength gain is required.",
            "White Cement: Characterised by its white color, this cement is used for aesthetic purposes in architectural projects, as well as in the production of pre-cast curtain walls and tiles.",
            "Hydraulic Cement: Sets and hardens by chemical reaction with water and remains strong under water. Portland Cement is a type of hydraulic cement.",
            "Pozzolanic Cement: Contains pozzolanic materials like volcanic ash, fly ash, or silica fume, which enhance the strength and durability of the cement.",
            "Masonry Cement: A special type of cement that includes additives to improve workability and adhesion, specifically designed for masonry work.",
            "Oil Well Cement: Used in the drilling of oil wells where it serves to seal the space between the steel casing and the wall of the well."
          ]
        }
      },

      // Cement Manufacturing Process
      {
        page_id: pageId,
        section_id: 'manufacturing-process',
        section_type: 'heading',
        title: 'Cement Manufacturing Process',
        sort_order: 16,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'manufacturing-steps',
        section_type: 'list',
        title: 'The production of cement involves several key stages:',
        sort_order: 17,
        content: {
          ordered: true,
          items: [
            "Mining of Raw Materials: The primary raw materials for cement production include limestone, clay, shale, and silica. These materials are extracted from quarries and mines.",
            "Crushing and Prehomogenisation: The raw materials are crushed and blended to achieve a uniform composition, ensuring consistent quality in the final product.",
            "Raw Meal Preparation: The crushed and homogenised raw materials are further processed into a raw meal, which is a fine powder.",
            "Clinker Production: The raw meal is heated to high temperatures in a kiln to produce clinker—a nodular substance. This involves a complex chemical process known as clinkerisation.",
            "Grinding of Clinker: The clinker is ground into a fine powder, resulting in cement.",
            "Packaging and Shipment: The final cement product is packaged and shipped to construction sites for use."
          ]
        }
      },

      // Ordinary Portland Cement
      {
        page_id: pageId,
        section_id: 'opc',
        section_type: 'heading',
        title: 'Ordinary Portland Cement',
        sort_order: 18,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'opc-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 19,
        content: { text: "Ordinary Portland Cement (OPC) is integral to the construction industry, serving as a foundational material for a wide range of projects. The production of OPC is highly energy-intensive, requiring temperatures up to 1450°C for clinker sintering in kilns. These kilns, which can be fueled by coal, oil, petroleum coke, or natural gas, contribute significantly to the CO2 emissions associated with cement production. The CO2 emissions result not only from the combustion of these fossil fuels but also from the chemical process of limestone decarbonisation, which releases CO2 as a byproduct." }
      },
      {
        page_id: pageId,
        section_id: 'opc-emissions',
        section_type: 'callout',
        title: 'Global Impact',
        sort_order: 20,
        content: { type: 'warning', text: "Given the global scale of OPC usage, which reached approximately 4.1 billion tons in 2022, its production is responsible for about 8% of total CO2 emissions, highlighting the urgency for decarbonisation strategies in this sector." }
      },
      {
        page_id: pageId,
        section_id: 'opc-research',
        section_type: 'paragraph',
        title: null,
        sort_order: 21,
        content: { text: "Research at Imperial College London has explored several strategies for decarbonising the cement industry, highlighting the potential of carbon capture and storage (CCS) technologies, the use of biomass and municipal waste as alternative fuels, and the substitution of clinker with waste materials like blast furnace slag and coal ash. These approaches aim to significantly reduce the carbon footprint of cement production." }
      },

      // Low Heat Cement
      {
        page_id: pageId,
        section_id: 'low-heat',
        section_type: 'heading',
        title: 'Low Heat Cement',
        sort_order: 22,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'low-heat-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 23,
        content: { text: "Low Heat Cement (LHC), as the name suggests, is a special type of cement that generates less heat of hydration during the setting process compared to Ordinary Portland Cement (OPC). Its unique properties make it suitable for large-scale concrete works, where the management of heat is critical to prevent thermal cracking." }
      },
      {
        page_id: pageId,
        section_id: 'low-heat-composition',
        section_type: 'accordion',
        title: 'Low Heat Cement Details',
        sort_order: 24,
        content: {
          items: [
            {
              title: "Composition and Properties",
              content: "LHC is manufactured by altering the chemical composition of OPC, specifically by reducing the content of tricalcium aluminate (C3A) and increasing the dicalcium silicate (C2S) content. This adjustment in composition is responsible for the lower heat generation during the hydration process. The American Society for Testing and Materials (ASTM) designates LHC as Type IV cement."
            },
            {
              title: "Uses of Low Heat Cement",
              content: "LHC is predominantly used in the construction of large mass concrete structures, such as dams, foundations, and thick concrete slabs. These structures are prone to thermal cracking due to the heat generated by cement hydration. The Hoover Dam, for example, utilized a form of low heat cement in its construction."
            },
            {
              title: "Advantages of Low Heat Cement",
              content: "The primary advantage of LHC is its reduced heat of hydration, which minimizes the risk of thermal cracking in large concrete structures. This characteristic improves the durability and longevity of the structure. Additionally, LHC exhibits a higher final strength compared to OPC and offers enhanced resistance to sulphate attack."
            },
            {
              title: "Environmental Considerations",
              content: "While LHC provides significant benefits in terms of structural integrity and durability, it also offers environmental advantages. The reduced heat of hydration means that less energy is expended in cooling operations during the construction of large concrete masses, leading to lower carbon emissions."
            }
          ]
        }
      },

      // Greening the Cement Sector
      {
        page_id: pageId,
        section_id: 'greening',
        section_type: 'heading',
        title: 'Greening the Cement Sector',
        sort_order: 25,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'greening-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 26,
        content: { text: "Several opportunities could be pursued to mitigate environmental footprint advancement of the building materials sector, including traditional cement production. They could emerge as a viable alternative to Ordinary Portland Cement (OPC), and they may be characterised by reduced carbon emissions, enhanced energy efficiency, and utilization of renewable or recycled materials." }
      },
      {
        page_id: pageId,
        section_id: 'sustainability-indicators',
        section_type: 'list',
        title: 'Potential Sustainability Indicators for the Sector',
        sort_order: 27,
        content: {
          ordered: true,
          items: [
            "Reduced CO2 Emissions: Lower CO2 emissions compared to traditional OPC through alternative materials and carbon capture technologies.",
            "Utilization of Industrial Byproducts: Incorporation of fly ash, slag, and silica fume to replace clinker and reduce emissions.",
            "Enhanced Durability and Performance: Improved resistance to sulfate attack, chloride penetration, and alkali-silica reaction.",
            "Energy Efficiency in Production: Improved kiln designs, waste heat recovery systems, and optimization of grinding processes."
          ]
        }
      },
      {
        page_id: pageId,
        section_id: 'new-production-processes',
        section_type: 'list',
        title: 'New Production Processes',
        sort_order: 28,
        content: {
          ordered: true,
          items: [
            "Alternative Raw Material Sources: Low-carbon alternatives to limestone using calcined clays and certain types of slag.",
            "Clinker Substitution: Use of SCMs such as fly ash, slag, and natural pozzolans to replace clinker.",
            "Energy-Efficient Manufacturing: Advanced kiln technologies and renewable energy integration.",
            "Carbon Capture and Utilization (CCU): Capture CO2 emissions for industrial use or underground storage.",
            "Innovative Formulations: Optimizing alternative materials and additives for enhanced performance."
          ]
        }
      },

      // Drivers of Change
      {
        page_id: pageId,
        section_id: 'drivers-change',
        section_type: 'heading',
        title: 'Drivers of Change',
        sort_order: 29,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'drivers-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 30,
        content: { text: "4 main drivers of change apply to hard to abate sectors, namely the economy, technology, society and the environment. How a cement producer or a financial institution exposed to the sector is capable of anticipating these drivers and of responding to each change effectively defines the success of an organization." }
      },
      {
        page_id: pageId,
        section_id: 'drivers-accordion',
        section_type: 'accordion',
        title: 'Key Drivers in the Cement Sector',
        sort_order: 31,
        content: {
          items: [
            {
              title: "Global Climate Goals and Target Settings",
              content: "Cement production accounts for about 8% of global CO2 emissions. Meeting reduction targets requires significant changes in production processes. The global industry is under pressure to transition to net-zero emissions by 2050 to align with global climate goals."
            },
            {
              title: "Carbon Border Adjustment Mechanism (CBAM)",
              content: "CBAM ensures imported cement products conform to the same carbon pricing standards as domestically produced cement. It prevents carbon leakage and levels the playing field by imposing carbon pricing on imports."
            },
            {
              title: "Clinker Substitution",
              content: "A crucial strategy involving alternative materials such as fly ash, calcined clays, ground granulated blast-furnace slag (GGBFS), and ground limestone. These can partially replace clinker to achieve cost-effective and sustainable benefits."
            },
            {
              title: "Regulatory Environment",
              content: "Government policies including carbon pricing mechanisms and incentives for net-zero production technologies drive the transition to low-carbon cement production."
            },
            {
              title: "Market Demand and Competition",
              content: "Demand for sustainable and low-carbon cement products, along with intensified competition, acts as a catalyst for change in the sector."
            },
            {
              title: "Fossil Fuel Reduction and Alternative Fuels",
              content: "The industry is reducing reliance on fossil fuels and increasing use of alternative fuels. Co-processing and waste-derived fuels can substantially decrease landfilling and carbon emissions."
            },
            {
              title: "Policy Framework and Innovation",
              content: "Key policy instruments include the EU Emissions Trading System (ETS) and the Carbon Border Adjustment Mechanism (CBAM). These mechanisms aim to align carbon prices with carbon content of imports."
            }
          ]
        }
      },

      // Accelerating Sustainability
      {
        page_id: pageId,
        section_id: 'accelerating-sustainability',
        section_type: 'heading',
        title: 'Accelerating Sustainability: The Global Drive for Net-Zero Emissions in Cement Procurement',
        sort_order: 32,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'sustainability-commitments',
        section_type: 'list',
        title: 'Key Commitment Areas for Cement Purchasers',
        sort_order: 33,
        content: {
          ordered: true,
          items: [
            "2030 Green Cement Procurement Targets: Set ambitious targets specifying the percentage of cement procured with emissions intensity at or below ConcreteZero benchmark standards.",
            "Average Emissions Intensity by 2030: Establish targets for the average emissions intensity associated with the entire portfolio of cement.",
            "Suppliers' Net Zero Commitments: Set 2030 targets for increasing proportion of cement suppliers with verified 2050 net zero commitments aligned with 1.5°C.",
            "100% Net Zero Emissions Cement by 2050: Commit to procuring 100% of cement with net zero emissions intensity by 2050."
          ]
        }
      },

      // Real Estate Funds and EU Taxonomy
      {
        page_id: pageId,
        section_id: 'real-estate-taxonomy',
        section_type: 'heading',
        title: 'Real Estate Funds and EU Taxonomy Requirements',
        sort_order: 34,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'taxonomy-lca',
        section_type: 'paragraph',
        title: null,
        sort_order: 35,
        content: { text: "Real estate investment funds operating in alignment with the EU Taxonomy standards are increasingly emphasizing the use of green cement, driven by life cycle assessment (LCA) requirements. The construction sector contributes to approximately 30% of global carbon emissions, with at least 8% stemming from the production of essential construction materials like cement and steel." }
      },
      {
        page_id: pageId,
        section_id: 'taxonomy-requirements',
        section_type: 'list',
        title: 'EU Taxonomy Standards for Buildings',
        sort_order: 36,
        content: {
          ordered: true,
          items: [
            "Primary Energy Demand Reduction: PED post-construction must be at least 10% lower compared to the threshold set for nearly zero-energy building (NZEB) requirements.",
            "Airtightness and Thermal Integrity Testing: For structures exceeding 5000 m², post-completion testing verifies airtightness and thermal integrity.",
            "Life-cycle Global Warming Potential (GWP) Disclosure: For structures exceeding 5000 m², the life-cycle GWP must be calculated and disclosed to investors."
          ]
        }
      },

      // Existing and Forthcoming Technologies
      {
        page_id: pageId,
        section_id: 'technologies',
        section_type: 'heading',
        title: 'Existing and Forthcoming Technologies',
        sort_order: 37,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'tech-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 38,
        content: { text: "Net-zero in the cement industry necessitates the adoption of breakthrough cement manufacturing technologies that will require high capital investments. To meet emission reduction goals, the industry must undergo a radical transformation. Solutions such as carbon capture and storage present opportunities but might not be entirely within the immediate scope of the cement industry." }
      },
      {
        page_id: pageId,
        section_id: 'forthcoming-tech',
        section_type: 'accordion',
        title: 'Forthcoming Technologies in Cement Production',
        sort_order: 39,
        content: {
          items: [
            {
              title: "Novel Raw Materials and Alternative Binders",
              content: "Ongoing research explores the use of alternative raw materials or supplementary cementitious materials (SCMs) that possess lower carbon footprints than traditional clinker."
            },
            {
              title: "Carbon Capture and Utilization",
              content: "Emerging technologies investigate the capture and utilization of CO2 emissions during cement manufacturing, repurposing captured CO2 for other industrial applications or permanent underground storage."
            },
            {
              title: "Energy-Efficient Kiln Technologies",
              content: "Advancements in kiln technology and energy-efficient production processes target improvements in clinker production and thermal efficiency."
            },
            {
              title: "Circular Economy Approaches",
              content: "The industry explores circular economy principles to repurpose waste materials or by-products from other industries as alternative resources for cement production."
            },
            {
              title: "Low-Carbon or Alternative Fuel Sources",
              content: "Research aims to replace traditional fossil fuels with biomass, waste-derived fuels, or hydrogen to power cement kilns."
            },
            {
              title: "Innovations in Concrete Formulations",
              content: "Studies explore new concrete formulations with lower carbon footprints, including geopolymers that offer substantial environmental benefits."
            }
          ]
        }
      },

      // Focus on Decarbonisation Technologies
      {
        page_id: pageId,
        section_id: 'decarbonisation-focus',
        section_type: 'heading',
        title: 'Focus on Decarbonisation Technologies and Best Practices',
        sort_order: 40,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'decarb-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 41,
        content: { text: "The production of ordinary Portland cement (OPC), which amounts to roughly 3.5 billion tons annually, is particularly carbon-intensive. Each ton of cement produced results in the emission of 561 to 622 kilograms of CO2, varying based on factors such as the raw materials used, the type of cement kiln, and the fuels burned." }
      },
      {
        page_id: pageId,
        section_id: 'decarb-strategies',
        section_type: 'list',
        title: 'Decarbonisation Strategy Components',
        sort_order: 42,
        content: {
          ordered: false,
          items: [
            "Energy and Operational Efficiency",
            "Waste Heat Recovery",
            "Alternative Raw Materials: Supplementary Cementitious Materials (SCMs)",
            "Alternative Fuels",
            "Carbon Capture, Utilisation, and Storage (CCUS)",
            "Low-Carbon Technologies and Binding Agents",
            "Innovations in Kiln Technology",
            "Renewable Energy",
            "Supply Chain Sustainability",
            "Material Recovery and Recycling",
            "Water Use Reduction and Management"
          ]
        }
      },

      // Energy and Operational Efficiency
      {
        page_id: pageId,
        section_id: 'energy-efficiency',
        section_type: 'heading',
        title: 'Energy and Operational Efficiency',
        sort_order: 43,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'energy-efficiency-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 44,
        content: { text: "Optimizing the energy use within cement production is a primary focus for the industry. This includes transitioning to more energy-efficient kiln types, such as precalciner kilns, and integrating waste heat recovery systems that repurpose heat from the clinker cooling and exhaust gases. Advanced automation and smart systems for kiln operation and monitoring can also contribute to more efficient energy use and reduced emissions." }
      },

      // Waste Heat Recovery
      {
        page_id: pageId,
        section_id: 'waste-heat',
        section_type: 'heading',
        title: 'Waste Heat Recovery',
        sort_order: 45,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'waste-heat-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 46,
        content: { text: "Cement manufacturing generates significant amounts of waste heat, particularly during the calcination process in the kiln. Waste heat recovery (WHR) systems capture this thermal energy for reuse within the plant, generating electricity or preheating raw materials. This contributes to overall energy efficiency and reduces the need for external energy sources." }
      },

      // Alternative Raw Materials: SCMs
      {
        page_id: pageId,
        section_id: 'scms',
        section_type: 'heading',
        title: 'Alternative Raw Materials: Supplementary Cementitious Materials (SCMs)',
        sort_order: 47,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'scms-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 48,
        content: { text: "SCMs, such as fly ash from coal-fired power plants, ground granulated blast-furnace slag (GGBFS), and silica fume, can partially replace cement clinker. The use of SCMs not only reduces the carbon intensity of cement production but also often enhances the durability and performance of the resulting concrete." }
      },

      // Alternative Fuels
      {
        page_id: pageId,
        section_id: 'alt-fuels',
        section_type: 'heading',
        title: 'Alternative Fuels',
        sort_order: 49,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'alt-fuels-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 50,
        content: { text: "The use of alternative fuels (AF), including biomass, waste-derived fuels, and industrial by-products, is a significant lever for reducing the carbon footprint of cement production. Alternative fuels can replace a portion of the traditional fossil fuels used in the kiln, thereby reducing direct CO2 emissions. Many cement plants have already integrated AFs into their fuel mix, with some achieving substitution rates exceeding 80%." }
      },

      // CCUS
      {
        page_id: pageId,
        section_id: 'ccus',
        section_type: 'heading',
        title: 'Carbon Capture, Utilisation, and Storage (CCUS)',
        sort_order: 51,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'ccus-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 52,
        content: { text: "CCUS represents a pivotal technology in the decarbonisation of the cement industry. CCS involves the capture of CO2 emissions from cement plants and their permanent storage in geological formations, effectively removing them from the atmosphere. CCU, on the other hand, involves the conversion of captured CO2 into valuable products, such as synthetic fuels, chemicals, or building materials." }
      },

      // CCS
      {
        page_id: pageId,
        section_id: 'ccs',
        section_type: 'heading',
        title: 'Carbon Capture and Storage (CCS)',
        sort_order: 53,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'ccs-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 54,
        content: { text: "The cement industry is exploring several CCS technologies, including post-combustion capture, oxyfuel combustion, and direct capture of CO2 from the kiln gases. Projects such as the CLEANKER project in Italy and the Norcem CCS project in Norway are pioneering efforts to integrate CCS into cement production at scale." }
      },
      {
        page_id: pageId,
        section_id: 'ccs-case-studies',
        section_type: 'accordion',
        title: 'CCS Case Studies',
        sort_order: 55,
        content: {
          items: [
            {
              title: "CLEANKER Project (Italy)",
              content: "The CLEANKER project, funded by the EU's Horizon 2020 program, demonstrates the use of Calcium Looping (CaL) technology for carbon capture at Buzzi Unicem's Vernasca cement plant. The project aims to capture up to 95% of the CO2 from kiln flue gases."
            },
            {
              title: "Norcem CCS Project (Norway)",
              content: "Heidelberg Materials' Brevik plant in Norway is at the forefront of integrating full-chain CCS. The project aims to capture approximately 400,000 tonnes of CO2 annually, which will be transported and stored in geological formations under the North Sea."
            }
          ]
        }
      },

      // CCU
      {
        page_id: pageId,
        section_id: 'ccu',
        section_type: 'heading',
        title: 'Carbon Capture and Utilisation (CCU)',
        sort_order: 56,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'ccu-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 57,
        content: { text: "CCU offers a pathway to add value to captured CO2 by transforming it into commercial products. In the cement industry, captured CO2 can be used to produce synthetic aggregates, carbonated building materials, or even fuels and chemicals through various chemical processes. Heidelberg Materials, formerly HeidelbergCement, is exploring CCU technologies at several of its sites, including the production of carbon-cured concrete products that sequester CO2." }
      },

      // Low-Carbon Technologies
      {
        page_id: pageId,
        section_id: 'low-carbon-tech',
        section_type: 'heading',
        title: 'Low-Carbon Technologies and Binding Agents',
        sort_order: 58,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'low-carbon-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 59,
        content: { text: "The exploration and implementation of low-carbon technologies and alternative binding agents represent a new approach to reducing the carbon footprint of the cement industry. This strategy involves developing new types of cement that require less energy to produce and emit lower amounts of CO2 during their life cycle compared to traditional Portland cement. Geopolymers offer not only a reduction in CO2 emissions but also superior material properties in certain applications." }
      },

      // Kiln Technology
      {
        page_id: pageId,
        section_id: 'kiln-tech',
        section_type: 'heading',
        title: 'Innovations in Kiln Technology',
        sort_order: 60,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'kiln-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 61,
        content: { text: "Innovations in kiln technology aim to address the heart of cement manufacturing—the production of clinker. Research into alternative chemical compositions for clinker that require lower calcination temperatures could drastically reduce the energy consumption and CO2 emissions. These processes involve the synthesis of clinker at temperatures up to 700 degrees Celsius lower than traditional methods." }
      },

      // Renewable Energy
      {
        page_id: pageId,
        section_id: 'renewable-energy',
        section_type: 'heading',
        title: 'Renewable Energy',
        sort_order: 62,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'renewable-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 63,
        content: { text: "The shift towards renewable energy sources for cement production operations is critical for reducing the industry's carbon footprint. This encompasses both the direct use of renewable energy, such as solar thermal systems for process heat, and the procurement of renewable electricity for powering manufacturing operations. Cement manufacturers can invest in onsite renewable energy generation or enter into power purchase agreements (PPAs) with renewable energy providers." }
      },

      // Supply Chain Sustainability
      {
        page_id: pageId,
        section_id: 'supply-chain',
        section_type: 'heading',
        title: 'Supply Chain Sustainability',
        sort_order: 64,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'supply-chain-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 65,
        content: { text: "Achieving sustainability in the cement industry extends beyond manufacturing processes to encompass the entire supply chain. Enhancing supply chain sustainability involves implementing practices that minimize environmental impact, such as optimizing logistics to reduce transportation emissions, sourcing raw materials responsibly, and ensuring suppliers adhere to environmental standards." }
      },

      // Material Recovery
      {
        page_id: pageId,
        section_id: 'material-recovery',
        section_type: 'heading',
        title: 'Material Recovery and Recycling',
        sort_order: 66,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'material-recovery-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 67,
        content: { text: "Adoption of circular economy principles within the cement industry represents a crucial step towards sustainability. This includes the development of technologies and systems for recycling concrete, recovering aggregates and cementitious materials from demolition waste, and reusing these materials in new concrete mixes or other applications." }
      },

      // Water Management
      {
        page_id: pageId,
        section_id: 'water-management',
        section_type: 'heading',
        title: 'Water Use Reduction and Management',
        sort_order: 68,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'water-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 69,
        content: { text: "Water plays a crucial role in cement production, not only in the processing of raw materials and cooling of equipment but also in the concrete mix itself. Adopting sustainable water management practices is essential for reducing the industry's water footprint and ensuring the responsible use of this vital resource. The implementation of water recycling and reuse systems within cement plants can significantly reduce freshwater consumption." }
      },

      // Major Industry Impacts
      {
        page_id: pageId,
        section_id: 'industry-impacts',
        section_type: 'heading',
        title: 'Major Industry Impacts on Environment and Climate Change',
        sort_order: 70,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'impacts-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 71,
        content: { text: "The cement industry has several major serious impacts on climate, environment and public health, which can lead to legal liabilities and reputational risks. Comprehension of such impacts is a prerequisite for managing such potential liabilities and risks effectively and to evaluate the boundaries and the manifestations of greenwashing risks." }
      },
      {
        page_id: pageId,
        section_id: 'impacts-list',
        section_type: 'list',
        title: 'Key Environmental Impacts',
        sort_order: 72,
        content: {
          ordered: false,
          items: [
            "Climate change contribution due to excessive GHG emissions",
            "Excessive Waste production and groundwater contaminations",
            "Excessive Water usage",
            "High Energy consumption",
            "Biodiversity impact",
            "Air pollution",
            "Public health concerns due to air pollutions and heavy metals",
            "Transportation emissions",
            "Concrete Waste"
          ]
        }
      },

      // Climate Change Contribution
      {
        page_id: pageId,
        section_id: 'ghg-emissions',
        section_type: 'heading',
        title: 'Climate Change Contribution due to Excessive GHG Emissions',
        sort_order: 73,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'ghg-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 74,
        content: { text: "The cement industry is known for its intensive use of materials and energy, contributing significantly to global carbon dioxide (CO2) emissions. The conventional cement manufacturing process accounts for approximately 7% of global and 4% of EU CO2 emissions. The average emissions per tonne of cement produced in EU cement plants are close to 0.6 tCO2, considering direct emissions (scope 1), indirect emissions such as CO2 embedded in electricity use (scope 2) and raw material sourcing (scope 3)." }
      },
      {
        page_id: pageId,
        section_id: 'eu-ets',
        section_type: 'callout',
        title: 'EU ETS Role',
        sort_order: 75,
        content: { type: 'info', text: "The European Union's Emissions Trading System (EU ETS) is instrumental in driving decarbonisation, employing a cap-and-trade approach tailored to the cement industry. The system sets an industry-specific cap on emission allowances that diminishes over time, compelling cement producers to innovate and invest in cleaner technologies." }
      },

      // Waste and Groundwater
      {
        page_id: pageId,
        section_id: 'waste-groundwater',
        section_type: 'heading',
        title: 'Excessive Waste Production and Groundwater Contamination',
        sort_order: 76,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'waste-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 77,
        content: { text: "In the entire life cycle assessment (LCA) process leading to cement production, various waste types are generated at different stages. This waste, particularly from raw materials like limestone and other additives, can concentrate or release naturally occurring heavy metals (Cd, Co, Cr, Pb and Ni), posing a risk of soil contamination. The soluble components of cement kiln dust are susceptible to leaching when in direct contact with soil, polluting groundwaters." }
      },

      // Water Use
      {
        page_id: pageId,
        section_id: 'water-use',
        section_type: 'heading',
        title: 'Excessive Water Use',
        sort_order: 78,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'water-use-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 79,
        content: { text: "Cement production demands a significant quantity of water for various purposes, including cooling, dust removal, and material processing. The production of one ton of cement generally requires approximately 0.35 ton of water. Businesses in the cement industry face various risks, including physical, regulatory, and reputational challenges related to water management." }
      },

      // Biodiversity
      {
        page_id: pageId,
        section_id: 'biodiversity',
        section_type: 'heading',
        title: 'Biodiversity Impact',
        sort_order: 80,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'biodiversity-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 81,
        content: { text: "Cement production heavily relies on the extraction of raw materials, predominantly limestone, which requires extensive quarrying and mining activities. These activities result in deforestation and land degradation, disrupting local ecosystems and reducing biodiversity. The cement industry has recognized the importance of biodiversity and has adopted measures to mitigate its impact on ecosystems." }
      },

      // Air Pollution
      {
        page_id: pageId,
        section_id: 'air-pollution',
        section_type: 'heading',
        title: 'Air Pollution',
        sort_order: 82,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'air-pollution-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 83,
        content: { text: "Cement production generates various pollutants that affect air quality. The combustion of fossil fuels and raw material processing releases pollutants such as sulfur dioxide (SO2), nitrogen oxides (NOx), particulate matter (PM), and volatile organic compounds (VOCs). These emissions have significant implications for public health and the environment." }
      },

      // Public Health
      {
        page_id: pageId,
        section_id: 'public-health',
        section_type: 'heading',
        title: 'Public Health Concerns',
        sort_order: 84,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'public-health-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 85,
        content: { text: "The release of hazardous pollutants, including heavy metals and particulate matter, from cement plants raises significant public health concerns. Chronic exposure to cement dust and emissions can lead to respiratory problems, skin ailments, and other health issues. Heavy metals, when ingested through contaminated water or crops, can have severe health consequences." }
      },

      // Transportation Emissions
      {
        page_id: pageId,
        section_id: 'transport-emissions',
        section_type: 'heading',
        title: 'Transportation Emissions',
        sort_order: 86,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'transport-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 87,
        content: { text: "The cement industry's carbon footprint extends beyond production emissions. The transportation of raw materials to cement plants and finished products to construction sites contributes significant emissions. This is often overlooked but is a substantial part of the industry's overall environmental impact." }
      },

      // Concrete Waste
      {
        page_id: pageId,
        section_id: 'concrete-waste',
        section_type: 'heading',
        title: 'Concrete Waste',
        sort_order: 88,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'concrete-waste-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 89,
        content: { text: "Concrete waste from construction and demolition (C&D) activities presents a significant environmental challenge. Historically, C&D waste has been predominantly directed to landfills. However, there is a growing global movement towards recycling concrete, with initiatives aimed at crushing and reusing this material, thereby reducing waste and the need for virgin materials." }
      },

      // EU Policies
      {
        page_id: pageId,
        section_id: 'eu-policies',
        section_type: 'heading',
        title: 'EU Policies',
        sort_order: 90,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'eu-policies-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 91,
        content: { text: "Several EU policies and regulations significantly impact the cement industry, driving the sector towards more sustainable practices and reduced emissions." }
      },

      // IED
      {
        page_id: pageId,
        section_id: 'ied',
        section_type: 'heading',
        title: 'Industrial Emissions Directive (IED)',
        sort_order: 92,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'ied-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 93,
        content: { text: "The IED is the main EU instrument regulating pollutant emissions from industrial installations, including cement plants. It mandates that operators use Best Available Techniques (BAT) and establishes emission limit values for pollutants. The directive requires cement plants to operate under strict environmental permits that set out conditions aligned with BAT conclusions." }
      },

      // CBAM Policy
      {
        page_id: pageId,
        section_id: 'cbam-policy',
        section_type: 'heading',
        title: 'Carbon Border Adjustment Mechanism (CBAM)',
        sort_order: 94,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'cbam-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 95,
        content: { text: "Since the entry into force of the Transitional Phase, importers of non-EU cement must report the greenhouse gas emissions (GHG) embedded in their imports. In the Permanent Phase, importers will need to surrender CBAM certificates priced according to the weekly average auction price of EU ETS allowances. The phasing-out of free allocation under the EU ETS will occur simultaneously with the phasing-in of CBAM from 2026 to 2034." }
      },

      // Circular Economy
      {
        page_id: pageId,
        section_id: 'circular-economy',
        section_type: 'heading',
        title: 'Circular Economy',
        sort_order: 96,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'circular-economy-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 97,
        content: { text: "The Circular Economy Action Plan (CEAP) addresses product design and the quality and safety of secondary materials, with implications for the cement production sector. The CEAP will focus on high-impact intermediary products such as cement, ensuring that the industry progresses towards more sustainable production methods." }
      },

      // EU Taxonomy
      {
        page_id: pageId,
        section_id: 'eu-taxonomy',
        section_type: 'heading',
        title: 'EU Taxonomy Regulation',
        sort_order: 98,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'taxonomy-intro',
        section_type: 'paragraph',
        title: null,
        sort_order: 99,
        content: { text: "To align with the EU Taxonomy Regulation, eligible activities in the cement production sector must make a 'substantial contribution' to the six environmental objectives and must not harm any of them (Do No Significant Harm). Activities must also be carried out in compliance with minimum social safeguards." }
      },
      {
        page_id: pageId,
        section_id: 'taxonomy-objectives',
        section_type: 'list',
        title: 'EU Taxonomy Environmental Objectives',
        sort_order: 100,
        content: {
          ordered: true,
          items: [
            "Climate change mitigation",
            "Adaptation to climate change and prevention of natural hazards",
            "Water resource management and protection of marine resources",
            "The transition to a circular economy and the management of technological risks",
            "The fight against air, water, and soil pollution",
            "The protection of biodiversity and natural, agricultural, and forestry areas"
          ]
        }
      },

      // Climate Mitigation Criteria
      {
        page_id: pageId,
        section_id: 'climate-mitigation',
        section_type: 'heading',
        title: 'Contributing to Climate Mitigation',
        sort_order: 101,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'mitigation-criteria',
        section_type: 'callout',
        title: 'Substantial Contribution Criteria',
        sort_order: 102,
        content: { type: 'info', text: "Manufacturing of cement satisfies the substantial contribution if GHG emissions do not exceed: Grey cement clinker = 0.722 tCO2e/t clinker; Cement from grey clinker or alternative hydraulic binder = 0.469 tCO2e/t cement." }
      },

      // Climate Adaptation
      {
        page_id: pageId,
        section_id: 'climate-adaptation',
        section_type: 'heading',
        title: 'Contributing to Climate Adaptation',
        sort_order: 103,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'adaptation-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 104,
        content: { text: "The economic activity within the cement production sector must implement adaptation solutions that substantially reduce the most important physical climate risks. A robust climate risk and vulnerability assessment must be performed proportionate to the scale of the activity and its expected lifespan." }
      },

      // Waste Shipment
      {
        page_id: pageId,
        section_id: 'waste-shipment',
        section_type: 'heading',
        title: 'Legislation on Shipment of Waste',
        sort_order: 105,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'waste-shipment-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 106,
        content: { text: "The Waste Shipment Regulation aims to stop exports of waste that have harmful environmental and health impacts in third countries. Under the new rules, waste exports to non-OECD countries will be restricted and only allowed if third countries are willing to receive certain wastes and are able to manage them sustainably." }
      },

      // CPR
      {
        page_id: pageId,
        section_id: 'cpr',
        section_type: 'heading',
        title: 'Construction Products Regulation (CPR)',
        sort_order: 107,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'cpr-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 108,
        content: { text: "Construction works are a major customer of the cement industry. Cement-based products used in construction works must comply with the provisions of Regulation (EU) no. 305/2011. The Commission is reviewing the CPR to develop environmental performance requirements for construction products with a unified method to establish the environmental footprint of all construction products." }
      },

      // Renovation Wave
      {
        page_id: pageId,
        section_id: 'renovation-wave',
        section_type: 'heading',
        title: 'Renovation Wave Initiative',
        sort_order: 109,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'renovation-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 110,
        content: { text: "The Renovation Wave for Europe is an ambitious programme to trigger renovation in the building sector through a mix of measures. The primary objective is to at least double the annual energy renovation rate (from 1% to 2%) of both residential and non-residential buildings. Buildings are responsible for about 40% of the EU's overall energy consumption and for 36% of its GHG emissions from energy." }
      },

      // Transition Plan Credibility
      {
        page_id: pageId,
        section_id: 'transition-plans',
        section_type: 'heading',
        title: 'Transition Plan Credibility',
        sort_order: 111,
        content: { level: 2 }
      },

      // Effectiveness
      {
        page_id: pageId,
        section_id: 'effectiveness',
        section_type: 'heading',
        title: 'Effectiveness of Transition Plans',
        sort_order: 112,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'effectiveness-list',
        section_type: 'list',
        title: 'Key Elements for Effective Transition Plans',
        sort_order: 113,
        content: {
          ordered: false,
          items: [
            "Clear and Ambitious Targets: Concrete targets for reduction of GHG emissions, including milestones for lowering clinker-to-cement ratio",
            "Comprehensive and Transparent Disclosure: Transparent reporting on emissions, energy consumption, and adoption of low-carbon technologies",
            "Technological Innovation and Research: Investment in cutting-edge technologies that reduce the carbon footprint",
            "Collaboration and Partnerships: Forge partnerships with government bodies, scientific community, and construction industry",
            "Financial Support and Incentives: Subsidies for R&D, carbon pricing, and investments in infrastructure",
            "Monitoring, Reporting, and Verification: Rigorous frameworks to track progress against set targets",
            "Continuous Improvement and Adaptation: Living documents subject to frequent review and updates"
          ]
        }
      },

      // Specificity
      {
        page_id: pageId,
        section_id: 'specificity',
        section_type: 'heading',
        title: 'Specificity of Transition Plans',
        sort_order: 114,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'specificity-list',
        section_type: 'list',
        title: 'Required Specificity Elements',
        sort_order: 115,
        content: {
          ordered: false,
          items: [
            "Disclosure of relevant information on all material cement production assets",
            "Commitment to exit unabated high emission cement production",
            "Consideration of different production routes and their decarbonisation potential",
            "Definition of decommissioning commitments for stranded assets",
            "Realistic assumptions and strategies for overcoming technology constraints",
            "External consistency checks to avoid transition washing",
            "Commitment to address environmental objectives beyond legal requirements",
            "Identification of CAPEX sources for direct investment in abatement options",
            "Assessment of human capital needs for upskilling and reskilling workers"
          ]
        }
      },

      // TPT Actions
      {
        page_id: pageId,
        section_id: 'tpt-actions',
        section_type: 'heading',
        title: 'Actions Evidencing Credibility of Transition Plans (Based on TPT)',
        sort_order: 116,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'tpt-accordion',
        section_type: 'accordion',
        title: 'TPT Action Categories',
        sort_order: 117,
        content: {
          items: [
            {
              title: "Increase Energy Efficiency and Material Efficiency",
              content: "Implement best available techniques for energy efficiency (e.g., waste heat recovery); Develop material recirculation strategies for better collection and recycling; Enhance durability and longevity of concrete through innovative design."
            },
            {
              title: "Scale Up Secondary Material Production",
              content: "Increase use of alternative raw materials such as fly ash, slag, and recycled concrete aggregates; Enhance quality and efficiency of cement production by optimizing use of SCMs to replace clinker."
            },
            {
              title: "Develop and Scale Near-Zero Emission Production Technologies",
              content: "Transition from traditional kiln technologies to more efficient dry-process kilns and/or to kiln electrification; Explore alternative fuels like biogas, biomass, and waste-derived fuels; Implement CCUS technologies; Invest in R&D for near-zero or low-carbon cement production methods."
            },
            {
              title: "Adopt Reliable Metrics",
              content: "Energy intensity by cement production route; Share of renewable/low carbon electricity; Consumption of raw materials and SCMs; Production capacity and output figures; Current and targeted capacity for CCUS-equipped plants; Corporate policy to phase out high-emission kiln technologies."
            }
          ]
        }
      },

      // GHG Metrics
      {
        page_id: pageId,
        section_id: 'ghg-metrics',
        section_type: 'heading',
        title: 'Which GHG Emissions Metrics are Relevant for the Sector?',
        sort_order: 118,
        content: { level: 3 }
      },
      {
        page_id: pageId,
        section_id: 'ghg-metrics-list',
        section_type: 'list',
        title: null,
        sort_order: 119,
        content: {
          ordered: false,
          items: [
            "Scope 1 and 2 emissions per unit of cement produced (tCO2e/tonne cement)",
            "Current and projected Scope 1, 2, and 3 GHG emissions by cement plant",
            "Emissions intensity by cement production process (Scope 1, 2, 3 emissions per unit of cement output)",
            "Projected reduction in Scope 1, 2, and 3 GHG emissions due to technology changes",
            "Target boundary: SBTi requires cement producers to include all emissions within their cement and concrete core boundary"
          ]
        }
      },
      {
        page_id: pageId,
        section_id: 'carbon-lock-in',
        section_type: 'callout',
        title: 'Carbon Lock-In Definition',
        sort_order: 120,
        content: { type: 'warning', text: "Carbon lock-in in the cement industry is defined as the action of enabling carbon-intensive production methods, such as traditional rotary kilns, to persist, causing lower carbon alternatives, like alternative clinker materials or innovative kiln technologies, to be 'locked out'." }
      },

      // Consolidated Q&A
      {
        page_id: pageId,
        section_id: 'consolidated-qa',
        section_type: 'heading',
        title: 'Consolidated Q&A',
        sort_order: 121,
        content: { level: 2 }
      },
      {
        page_id: pageId,
        section_id: 'qa-content',
        section_type: 'paragraph',
        title: null,
        sort_order: 122,
        content: { text: "This consolidated Q&A includes all general and sector specific questions for companies headquartered in the EU whose main activity is the production of cement. Questions under the heading Stage I shall be submitted to the relevant client at the initial onboarding stage, while questions under the heading Stage II can be submitted at a later stage." }
      }
    ];

    // Insert all sections
    const { error: insertSectionsError, data: insertedSections } = await supabase
      .from('page_sections')
      .insert(sections);

    if (insertSectionsError) {
      console.error('Error inserting sections:', insertSectionsError);
      throw insertSectionsError;
    }

    console.log(`Inserted ${sections.length} sections`);

    // Define all sources
    const sources = [
      { page_id: pageId, source_number: 1, title: "Global Cement Market Size, Share, Analysis, Forecast", author: "Expert Market Research", year: "2024", url: "https://www.expertmarketresearch.com/reports/cement-market" },
      { page_id: pageId, source_number: 2, title: "Cement Market Size, Share & COVID-19 Impact Analysis", author: "Fortune Business Insights", year: "2024", url: "https://www.fortunebusinessinsights.com/industry-reports/cement-market-101825" },
      { page_id: pageId, source_number: 3, title: "Researchers have created emissions-free cement", author: "World Economic Forum", year: "2019", url: "https://www.weforum.org/agenda/2019/09/cement-production-country-world-third-largest-emitter/" },
      { page_id: pageId, source_number: 4, title: "Best ways to cut carbon emissions from the cement industry explored", author: "Imperial College London", year: "2023", url: "https://www.imperial.ac.uk/news/221654/best-ways-carbon-emissions-from-cement/" },
      { page_id: pageId, source_number: 5, title: "Standard Specification for Portland Cement", author: "ASTM International", year: "2022", url: "https://www.astm.org/c0150_c0150m-22.html" },
      { page_id: pageId, source_number: 6, title: "Properties of Concrete", author: "Neville, A.M.", year: "2011", url: "https://www.academia.edu/download/52236036/properties-of-concrete-by-am-neville.pdf" },
      { page_id: pageId, source_number: 7, title: "The chemical composition and microstructure of hydration products in blended cements", author: "ScienceDirect", year: "2004", url: "https://www.sciencedirect.com/science/article/abs/pii/S0958946504000472" },
      { page_id: pageId, source_number: 8, title: "Green house gas emissions due to concrete manufacture", author: "Flower, D.J.M., & Sanjayan, J.G.", year: "2007", url: "https://link.springer.com/article/10.1065/lca2007.05.327" },
      { page_id: pageId, source_number: 9, title: "Concrete: Microstructure, Properties, and Materials", author: "Mehta, P.K., & Monteiro, P.J.M.", year: "2014", url: "https://www.accessengineeringlibrary.com/content/book/9780071797870" },
      { page_id: pageId, source_number: 10, title: "Low Heat Cement - Composition, Properties and Advantages", author: "The Constructor", year: "2023", url: "https://theconstructor.org/concrete/low-heat-cement/23418/" },
      { page_id: pageId, source_number: 11, title: "Cement industry accounts for about 8% of CO2 emissions", author: "CBS News", year: "2023", url: "https://www.cbsnews.com/news/cement-industry-co2-emissions-climate-change-brimstone/" },
      { page_id: pageId, source_number: 12, title: "IDDI Factsheet", author: "UNIDO", year: "2021", url: "http://www.unido.org/sites/default/files/files/2021-10/IDDI%20FACTSHEET_14%20OCT.pdf" },
      { page_id: pageId, source_number: 13, title: "Consumers can play a central role in decarbonising cement and steel", author: "Industrial Analytics Platform", year: "2022", url: "https://iap.unido.org/articles/consumers-can-play-central-role-decarbonising-cement-and-steel" },
      { page_id: pageId, source_number: 14, title: "Net-zero Cement Sector Transition Strategy", author: "Mission Possible Partnership", year: "2021", url: "https://www.energy-transitions.org/wp-content/uploads/2021/12/MPP-Steel_Transition-Strategy.pdf" },
      { page_id: pageId, source_number: 15, title: "Technology Brief: Carbon Neutral Energy Intensive Industries", author: "UNECE", year: "2022", url: "https://unece.org/sites/default/files/2022-11/Industry%20brief_EN_2.pdf" },
      { page_id: pageId, source_number: 16, title: "Energy Efficiency in Cement Production", author: "IEA", year: "2023", url: "https://www.iea.org/energy-system/industry/cement" },
      { page_id: pageId, source_number: 17, title: "CLEANKER Project", author: "EU Horizon 2020", year: "2023", url: "https://www.cleanker.eu/" },
      { page_id: pageId, source_number: 18, title: "Norcem CCS Project at Brevik", author: "Heidelberg Materials", year: "2023", url: "https://www.heidelbergmaterials.com/en/brevik-ccs" },
      { page_id: pageId, source_number: 19, title: "Heidelberg Materials - CCU", author: "BASF", year: "2023", url: "https://www.basf.com/global/en/media/news-releases/2023/05/p-23-218.html" },
      { page_id: pageId, source_number: 20, title: "Decarbonisation of cement industry in the EU", author: "JRC Publications Repository", year: "2023", url: "https://publications.jrc.ec.europa.eu/repository/handle/JRC131246" },
      { page_id: pageId, source_number: 21, title: "Heavy metals contamination from cement production", author: "Taylor & Francis Online", year: "2021", url: "https://www.tandfonline.com/doi/full/10.1080/26395940.2021.2024090" },
      { page_id: pageId, source_number: 22, title: "Environmental impacts of cement production", author: "NCBI", year: "2021", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8393406/" },
      { page_id: pageId, source_number: 23, title: "Concrete and grout environmental guidance", author: "NetRegs", year: "2023", url: "https://www.netregs.org.uk/environmental-topics/materials-fuels-and-equipment/materials-and-equipment-used-on-construction-sites/concrete-and-grout/" },
      { page_id: pageId, source_number: 24, title: "Consolidated text: Directive 2010/75/EU on industrial emissions", author: "EUR-Lex", year: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02010L0075-20240804" },
      { page_id: pageId, source_number: 25, title: "A new Circular Economy Action Plan - COM(2020) 98 final", author: "European Commission", year: "2020", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1583933814386&uri=COM:2020:98:FIN" },
      { page_id: pageId, source_number: 26, title: "EU Taxonomy Compass", author: "DG for Financial Stability", year: "2023", url: "https://ec.europa.eu/sustainable-finance-taxonomy/taxonomy-compass" },
      { page_id: pageId, source_number: 27, title: "Climate Delegated Act - Commission Delegated Regulation (EU) 2021/2139", author: "EUR-Lex", year: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02021R2139-20240101" },
      { page_id: pageId, source_number: 28, title: "Waste Shipment Regulation (No 1013/2006)", author: "EUR-Lex", year: "2006", url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32006R1013" },
      { page_id: pageId, source_number: 29, title: "Waste shipments: report 2023", author: "DG for Environment", year: "2023", url: "https://environment.ec.europa.eu/news/waste-shipment-regulation-report-2023-03-20_en" },
      { page_id: pageId, source_number: 30, title: "Construction Products Regulation, Policy Focus", author: "CEMBUREAU", year: "2023", url: "https://www.cembureau.eu/policy-focus/sustainable-construction/construction-products-regulation" },
      { page_id: pageId, source_number: 31, title: "A Renovation Wave for Europe - COM(2020) 662 final", author: "European Commission", year: "2020", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1603122220757&uri=CELEX:52020DC0662" },
      { page_id: pageId, source_number: 32, title: "Increasing homeowners' insulation activity in Germany", author: "Friege, J.", year: "2016", url: null },
      { page_id: pageId, source_number: 33, title: "Renovating Europe, in: Making the European Green Deal Work", author: "Schoenefeld, J., Stein, B., & Renz, I.", year: "2024", url: null },
      { page_id: pageId, source_number: 34, title: "IIGCC Cement Sector Expectations", author: "IIGCC", year: "2023", url: "https://www.iigcc.org/" },
      { page_id: pageId, source_number: 35, title: "ConcreteZero Initiative", author: "Climate Group", year: "2023", url: "https://www.theclimategroup.org/concretezero" },
      { page_id: pageId, source_number: 36, title: "SBTi Cement Sector Guidance", author: "Science Based Targets initiative", year: "2023", url: "https://sciencebasedtargets.org/sectors/cement" },
      { page_id: pageId, source_number: 37, title: "Holcim Sustainability Report", author: "Holcim", year: "2023", url: "https://www.holcim.com/sustainability" },
      { page_id: pageId, source_number: 38, title: "CEMBUREAU Carbon Neutrality Roadmap", author: "CEMBUREAU", year: "2022", url: "https://cembureau.eu/library/reports/" },
      { page_id: pageId, source_number: 39, title: "TPT Cement Sector Guidance", author: "Transition Plan Taskforce", year: "2023", url: "https://transitiontaskforce.net/" },
      { page_id: pageId, source_number: 40, title: "IEA Cement Technology Roadmap", author: "IEA", year: "2023", url: "https://www.iea.org/reports/cement" }
    ];

    // Insert all sources
    const { error: insertSourcesError } = await supabase
      .from('page_sources')
      .insert(sources);

    if (insertSourcesError) {
      console.error('Error inserting sources:', insertSourcesError);
      throw insertSourcesError;
    }

    console.log(`Inserted ${sources.length} sources`);

    // Update page metadata
    const { error: updatePageError } = await supabase
      .from('pages')
      .update({
        updated_at: new Date().toISOString(),
        last_updated: new Date().toISOString().split('T')[0]
      })
      .eq('id', pageId);

    if (updatePageError) {
      console.error('Error updating page:', updatePageError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Cement sector content seeded successfully',
        pageId,
        sectionsCount: sections.length,
        sourcesCount: sources.length
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error) {
    console.error('Error seeding Cement content:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});
