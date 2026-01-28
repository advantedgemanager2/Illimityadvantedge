import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    console.log('Starting Steel sector content seed...')

    // First, check if Steel page exists
    const { data: existingPage, error: pageError } = await supabase
      .from('pages')
      .select('id')
      .eq('slug', 'sectors/steel')
      .single()

    let pageId: string

    if (existingPage) {
      pageId = existingPage.id
      console.log('Found existing Steel page:', pageId)
      
      // Delete existing sections and sources
      await supabase.from('page_sections').delete().eq('page_id', pageId)
      await supabase.from('page_sources').delete().eq('page_id', pageId)
      console.log('Deleted existing sections and sources')
    } else {
      // Create the page
      const { data: newPage, error: createError } = await supabase
        .from('pages')
        .insert({
          slug: 'sectors/steel',
          title: 'Steel Sector',
          description: 'Comprehensive guide to steel sector transition finance, including technology pathways, KPIs, regulations, and decarbonization strategies.',
          tags: ['steel', 'heavy industry', 'decarbonization', 'transition finance']
        })
        .select('id')
        .single()

      if (createError) throw createError
      pageId = newPage.id
      console.log('Created new Steel page:', pageId)
    }

    // Define all sections
    const sections = [
      // INTRODUCTION
      {
        section_id: 'introduction',
        section_type: 'heading',
        title: 'Introduction',
        content: { level: 2 },
        sort_order: 1
      },
      {
        section_id: 'intro-paragraph-1',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The worldwide need for steel has been steadily increasing and is projected to keep rising. The steel industry is anticipated to be one of the few industries remaining reliant on coal in 2050, as it plays a crucial role as a reducing agent.'
        },
        sort_order: 2
      },
      {
        section_id: 'intro-paragraph-2',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Electricity-based production and the use of various technologies such as carbon capture and hydrogen-based production are expected to be decisive in achieving a Near Zero in the meantime.'
        },
        sort_order: 3
      },
      {
        section_id: 'intro-paragraph-3',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Nevertheless, there is a general consensus over the urgency to discontinue production from unmitigated Blast Furnace-Basic Oxygen Furnace (BF-BOF) facilities at the earliest opportunity.'
        },
        sort_order: 4
      },
      {
        section_id: 'intro-callout',
        section_type: 'callout',
        title: 'Key Decarbonization Pathways',
        content: {
          type: 'info',
          text: 'According to Bashmakov et al. (2022), there are three primary methods for the steel sector to decrease Scope 1 and 2 CO2 emissions and attain net zero by 2050.'
        },
        sort_order: 5
      },
      {
        section_id: 'intro-methods-list',
        section_type: 'list',
        title: null,
        content: {
          variant: 'numbered',
          items: [
            'Decrease in steel demand by increasing the efficiency of materials, promoting circular material flows, and reducing the overall demand in ultimate use, particularly in the construction and manufacturing industries.',
            'Increase the manufacture of steel from scrap materials using the scrap-EAF manufacturing method, which allows for recycling but necessitates the removal of carbon from the electricity used.',
            'Improve the energy and material efficiency of the current blast furnace and blast oxygen furnace (BF-BOF) and Direct Reduced Iron (DRI)-EAF assets in primary steel production through upgrades or replacements, while also developing and implementing innovative production methods at a larger scale.'
          ]
        },
        sort_order: 6
      },

      // STEEL MARKET
      {
        section_id: 'steel-market',
        section_type: 'heading',
        title: 'Steel Market',
        content: { level: 2 },
        sort_order: 7
      },
      {
        section_id: 'market-paragraph-1',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Based on EU Commission\'s data, European steel demand is differentiated, with distinct regional demand patterns and prices. Some steel producers act as opportunists, shifting their supplies across the globe to take advantage of price arbitrage. The level of imports is not uniform across Europe, as the majority of imported steel is of lower quality and basic grades, which does not meet the requirements of certain industries, such as the automotive industry, that require more specialized steel.'
        },
        sort_order: 8
      },
      {
        section_id: 'market-callout',
        section_type: 'callout',
        title: 'EU Steel Industry at a Glance',
        content: {
          type: 'info',
          text: 'According to EU Commission\'s 2023 data, the EU is the second largest producer after China, producing 170 million tonnes a year, equal to 1.3% of EU GDP with 500 production sites in 23 Member States with 330,000 direct jobs and 2.6 million indirect jobs. Overall the sector\'s carbon intensity in the EU is equal to 200 mill t/CO2 emissions (ca. 5% of EU emissions).'
        },
        sort_order: 9
      },
      {
        section_id: 'market-paragraph-2',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'According to Roland Berger, the construction industry comprises 38% of the total steel demand in Europe. Automotive, mechanical engineering, and metalware industries make up 16%, 15%, and 14% of the demand, respectively. The IEA estimates that demand for steel is expected to increase by one-third between 2020 and 2050.'
        },
        sort_order: 10
      },
      {
        section_id: 'market-paragraph-3',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'OECD studies estimate that profitability is still below sustainable levels for many steelmaking firms. According to McKinsey, the EU steel sector should undertake a targeted divestment of unprofitable or low-profit products and non-core assets or businesses.'
        },
        sort_order: 11
      },

      // INDUSTRY MAINSTREAM TECHNOLOGY
      {
        section_id: 'mainstream-tech',
        section_type: 'heading',
        title: 'Industry Mainstream Technology',
        content: { level: 2 },
        sort_order: 12
      },
      {
        section_id: 'production-routes',
        section_type: 'heading',
        title: 'Steel Production Routes',
        content: { level: 3 },
        sort_order: 13
      },
      {
        section_id: 'routes-paragraph-1',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'In the European Union, steel production is currently carried out through two primary methods, each characterised by distinct raw material and energy requirements.'
        },
        sort_order: 14
      },
      {
        section_id: 'routes-paragraph-2',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The first method (the integrated route) involves a Blast Furnace-Basic Oxygen Furnace (BF-BOF) utilising mined iron ore, which undergoes a sequence of energy-intensive procedures and it is transformed into iron and then, thanks to a basic oxygen converter and the addition of scrap metal, leads to the production of virgin steel.'
        },
        sort_order: 15
      },
      {
        section_id: 'routes-paragraph-3',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The second method (the recycling route) entails the utilisation of recycled steel scrap, which is directly melted into steel using an Electric Arc Furnace (EAF).'
        },
        sort_order: 16
      },
      {
        section_id: 'routes-callout',
        section_type: 'callout',
        title: 'Production Split',
        content: {
          type: 'info',
          text: 'Within the EU, the production of steel through the integrated route accounts for 60% while the electric arc furnaces route constituting the remaining 40%.'
        },
        sort_order: 17
      },

      // INTEGRATED ROUTE
      {
        section_id: 'integrated-route',
        section_type: 'heading',
        title: 'Integrated Route',
        content: { level: 3 },
        sort_order: 18
      },
      {
        section_id: 'integrated-paragraph-1',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The basic process of the integrated route consists of two primary phases, namely iron production and subsequent steel production. This is due to the fact that the extracted iron ore, chemically represented as Fe2O3, must initially undergo reduction to obtain iron (Fe). The iron ore reduction process occurs in the presence of carbon sources such as coke and coal within a blast furnace.'
        },
        sort_order: 19
      },
      {
        section_id: 'integrated-paragraph-2',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Sinter or pellets are produced through an agglomeration process (sintering and/or pelletizing). This process necessitates high temperatures of approximately 1,000 degrees Celsius, which are achieved through the utilisation of coal and natural gas. This particular stage typically necessitates an energy input of 1-2 gigajoules per metric tonne of pellets or sinter.'
        },
        sort_order: 20
      },
      {
        section_id: 'integrated-paragraph-3',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'In the process of blast furnace operation, the introduction of sinter or pellets and coke occurs, alongside the injection of hot air and pulverised coal. This combination leads to the formation of reducing gases through the reaction of coke, which then interacts with iron ore, facilitating the removal of oxygen from iron ore in the blast furnace and resulting in the production of hot metal.'
        },
        sort_order: 21
      },
      {
        section_id: 'integrated-paragraph-4',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'In the steel production process, the molten metal is introduced into the basic oxygen furnace (BOF), wherein oxygen is injected into the metal to effectively diminish its carbon content from approximately 4% to levels that conform to steel grade specifications, often below 1%.'
        },
        sort_order: 22
      },
      {
        section_id: 'bf-lifespan-callout',
        section_type: 'callout',
        title: 'Blast Furnace Transition',
        content: {
          type: 'warning',
          text: 'According to Climate Bonds Initiative, blast furnaces have a lifespan of decades. Most of the blast furnaces in operations in the EU can be in operation for at least two decades. To achieve Net Zero, 74% of existing blast furnaces need to be replaced with low-carbon alternatives by 2030. CBI estimates that EUR21-31bn in CapEX is required to transition the European steel sector and meet the 2030 climate targets.'
        },
        sort_order: 23
      },
      {
        section_id: 'co2-integrated',
        section_type: 'heading',
        title: 'CO2 Emissions in Integrated Route',
        content: { level: 4 },
        sort_order: 24
      },
      {
        section_id: 'co2-integrated-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The primary steel manufacturing pathway, which necessitates around 21 GJ/t crude steel, constituted 73% of worldwide steel production in 2020 and 56% in the European Union. In the BF-BOF steelmaking pathway, carbon serves as both an energy source and a crucial element for the purpose of binding and eliminating oxygen from iron ore, hence leading to the generation of CO2 emissions during the process. The processing stage in the blast furnace is very carbon dioxide-intensive, accounting for more than 50% of the overall carbon dioxide emissions associated with the final product. The average carbon dioxide emissions per tonne of crude steel produced using the BF-BOF pathway is approximately 1.9 tCO2/t.'
        },
        sort_order: 25
      },

      // RECYCLING ROUTE
      {
        section_id: 'recycling-route',
        section_type: 'heading',
        title: 'Recycling Route',
        content: { level: 3 },
        sort_order: 26
      },
      {
        section_id: 'recycling-paragraph-1',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The production of steel by the secondary (recycling) method involves the utilisation of an electric arc furnace to melt recycled steel scrap, iron or sponge iron: the electric arc that melts the metal when graphite electrodes make contact with the recycled metal.'
        },
        sort_order: 27
      },
      {
        section_id: 'recycling-paragraph-2',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Arc temperatures can reach even 3,500 degrees Celsius while the hot metal during the smelting process of recycled steel scrap in an electric arc furnace (EAF) reaches 1,600-1,800 degrees Celsius. Electricity serves as the primary energy source for this particular process. The secondary steelmaking route necessitates around 2.5-3 gigajoules per metric tonne of basic steel.'
        },
        sort_order: 28
      },
      {
        section_id: 'recycling-paragraph-3',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'EAFs are capable of producing all types of steel, from metal for basic products such as reinforcing bar to stainless and highly alloyed special steels, where flexibility and smaller capacities are advantageous.'
        },
        sort_order: 29
      },
      {
        section_id: 'co2-recycling',
        section_type: 'heading',
        title: 'CO2 Emissions in Recycling Route',
        content: { level: 4 },
        sort_order: 30
      },
      {
        section_id: 'co2-recycling-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The utilisation of electricity is predominant in the secondary steelmaking process. Direct emissions amount to approximately 0.06 to 0.1 tCO2/t steel. On average, an Electric Arc Furnace (EAF) consumes around 500 kilowatt-hours (kWh) of power per metric tonne of steel produced. Based on the prevailing average CO2 intensity of electricity throughout the EU, the cumulative emissions amount to around 0.2-0.3 metric tonnes of CO2 per metric tonne of steel. The mitigation of indirect emissions could be achieved through the use of renewable electricity in the EAF process.'
        },
        sort_order: 31
      },

      // BEST PRACTICES, BENCHMARKS AND BOUNDARIES
      {
        section_id: 'best-practices',
        section_type: 'heading',
        title: 'Best Practices, Benchmarks and Boundaries',
        content: { level: 2 },
        sort_order: 32
      },
      {
        section_id: 'responsible-steel',
        section_type: 'heading',
        title: 'ResponsibleSteel',
        content: { level: 3 },
        sort_order: 33
      },
      {
        section_id: 'responsible-steel-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Responsible Steel International Standard Version 2.1 requires steel businesses to set science-based GHG emission reduction objectives and implement methods to meet them. The 2.1 standard developed a unique dataset to enable the evaluation of emissions from any tonne of steel produced anywhere in the world with any level of scrap content. IIGCC recommend using the Responsible Steel emission boundary, which includes Scope 1, Scope 2 and upstream Scope 3 including emissions associated with material extraction, material preparation and processing and transportation.'
        },
        sort_order: 34
      },
      {
        section_id: 'responsible-steel-list',
        section_type: 'list',
        title: 'The standard promotes:',
        content: {
          variant: 'bullet',
          items: [
            'Adoption of energy-efficient technologies',
            'Use of renewable energy sources like low- or zero-carbon electricity',
            'Responsible input material procurement',
            'Upstream indirect GHG emission reduction'
          ]
        },
        sort_order: 35
      },
      {
        section_id: 'cbi-standard',
        section_type: 'heading',
        title: 'The Steel Climate Standard by CBI',
        content: { level: 3 },
        sort_order: 36
      },
      {
        section_id: 'cbi-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Recommends bio-based products for steelmaking decarbonization and by boosting efficiency. The Steel Climate Standard Biomass promotes replacing fossil-based carbon in the steel sector to minimise CO2 emissions. Biomass resources like straw, corn stalks, sugarcane bagasse, sawdust, bark, timber harvests, logging leftovers and industrial waste can replace coal in steelmaking with a renewable, carbon-rich alternative. Biochar-based BF ironmaking will increase gross emissions by 50% compared to current coal-based production, but net CO2 emissions might be lowered to 50 kg CO2/t molten iron due to biochar\'s burden-free classification.'
        },
        sort_order: 37
      },
      {
        section_id: 'sustainable-steel-principles',
        section_type: 'heading',
        title: 'Sustainable STEEL Principles',
        content: { level: 3 },
        sort_order: 38
      },
      {
        section_id: 'sustainable-steel-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'They do not set out best steel sector decarbonization options but are extremely useful for distinguishing emissions from primary steel manufacturing and secondary steel manufacture from scrap, making emissions comparisons fairer and for identifying benchmark emissions scenarios like the International Energy Agency Net-Zero by 2050 Scenario and the Mission Possible Partnership\'s Technology Moratorium Scenario strategies.'
        },
        sort_order: 39
      },
      {
        section_id: 'nzsi',
        section_type: 'heading',
        title: 'Net Zero Steel Initiative',
        content: { level: 3 },
        sort_order: 40
      },
      {
        section_id: 'nzsi-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Has identified four technology routes that have the potential to contribute to the decarbonization of the steel industry with the aim of doubling the recycled steel production.'
        },
        sort_order: 41
      },
      {
        section_id: 'nzsi-list',
        section_type: 'list',
        title: null,
        content: {
          variant: 'bullet',
          items: [
            'The promotion of enhanced utilisation of recycled steel',
            'Transitional technologies involving incremental changes to existing processes (BF-BOF modifications)',
            'Hydrogen-based steel production using H2-DRI-EAF',
            'Direct electrification technologies'
          ]
        },
        sort_order: 42
      },
      {
        section_id: 'steelzero',
        section_type: 'heading',
        title: 'SteelZero',
        content: { level: 3 },
        sort_order: 43
      },
      {
        section_id: 'steelzero-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'SteelZero members commit to procuring 100% net-zero steel by 2050 and to procuring at least 50% steel that meets ResponsibleSteel criteria by 2030. Members make public disclosures of Scope 3 emissions and engage with their steel supply chains to work with steelmakers to develop net zero strategies, invest in innovation and implement low-emissions projects.'
        },
        sort_order: 44
      },

      // IMPACTS
      {
        section_id: 'impacts',
        section_type: 'heading',
        title: 'Impacts',
        content: { level: 2 },
        sort_order: 45
      },
      {
        section_id: 'impacts-intro',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The steel industry has significant environmental impacts beyond climate change, including waste production, water use, air pollution, and public health concerns.'
        },
        sort_order: 46
      },
      {
        section_id: 'impacts-accordion',
        section_type: 'accordion',
        title: 'Major Industry Impacts on Environment and Climate Change',
        content: {
          items: [
            {
              title: 'Climate Change Contribution due to Excessive GHG Emissions',
              content: 'GHG emissions from steel production in Europe account for 5.7% of total emissions. The BF-BOF route is one of the most polluting industrial processes, contributing to global warming through direct CO2 emissions and through coal mining and transportation.'
            },
            {
              title: 'Excessive Waste Production and Groundwater Contamination',
              content: 'Steel production generates significant amounts of solid waste, including slag, sludge, and dust. Improper disposal can lead to groundwater contamination with heavy metals and toxic substances.'
            },
            {
              title: 'Excessive Water Use',
              content: 'Steel production requires large volumes of water for cooling, cleaning, and processing. An integrated steel plant can use 10-50 m³ of water per tonne of steel produced.'
            },
            {
              title: 'Air Pollution',
              content: 'Steel plants emit particulate matter, sulfur dioxide, nitrogen oxides, and volatile organic compounds, contributing to local air quality degradation and respiratory health issues.'
            },
            {
              title: 'Public Health Concerns',
              content: 'Communities near steel plants face elevated risks of respiratory diseases, cardiovascular problems, and cancer due to exposure to air pollutants and heavy metals.'
            }
          ]
        },
        sort_order: 47
      },

      // REGULATION AND LEGISLATION
      {
        section_id: 'regulation',
        section_type: 'heading',
        title: 'Regulation and Legislation',
        content: { level: 2 },
        sort_order: 48
      },
      {
        section_id: 'ied',
        section_type: 'heading',
        title: 'Industrial Emissions Directive',
        content: { level: 3 },
        sort_order: 49
      },
      {
        section_id: 'ied-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Directive 2010/75/EU on industrial emissions (IED) is the key EU instrument regulating pollutant emissions from industrial installations. The aim of the IED is to prevent or, where not possible, minimise pollutant emissions from various industrial sources across the EU. The IED requires the application of Best Available Techniques (BAT) as the basis for setting permit conditions for these installations.'
        },
        sort_order: 50
      },
      {
        section_id: 'circular-economy',
        section_type: 'heading',
        title: 'Circular Economy',
        content: { level: 3 },
        sort_order: 51
      },
      {
        section_id: 'circular-economy-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The EU\'s Circular Economy Action Plan promotes the transition to a circular economy, where the value of products and materials is maintained for as long as possible. For steel, this means increasing recycling rates, improving scrap quality, and designing products for easier recycling.'
        },
        sort_order: 52
      },
      {
        section_id: 'eu-taxonomy',
        section_type: 'heading',
        title: 'EU Taxonomy Regulation',
        content: { level: 3 },
        sort_order: 53
      },
      {
        section_id: 'taxonomy-callout',
        section_type: 'callout',
        title: 'EU Taxonomy Climate Mitigation Criteria for Steel',
        content: {
          type: 'info',
          text: 'Manufacturing iron and steel with Scope 1 emissions below: Hot metal ≤ 1.331 tCO2e/t; Sintered ore ≤ 0.163 tCO2e/t; Coke ≤ 0.144 tCO2e/t; Iron casting ≤ 0.299 tCO2e/t; EAF high alloy steel ≤ 0.266 tCO2e/t; EAF carbon steel ≤ 0.209 tCO2e/t.'
        },
        sort_order: 54
      },
      {
        section_id: 'taxonomy-list',
        section_type: 'list',
        title: 'DNSH Criteria for Climate Mitigation:',
        content: {
          variant: 'bullet',
          items: [
            'Hot metal = 1,443 tCO2e/t product',
            'Sintered ore = 0.242 tCO2e/t product',
            'Coke (excluding lignite coke) = 0.237 tCO2e/t product',
            'Iron casting = 0.390 tCO2e/t product',
            'Electric arc furnace (EAF) high alloy steel = 0.360 tCO2e/t product',
            'Electric arc furnace (EAF) carbon steel = 0.276 tCO2e/t product'
          ]
        },
        sort_order: 55
      },
      {
        section_id: 'waste-shipment',
        section_type: 'heading',
        title: 'Legislation on Shipment of Waste',
        content: { level: 3 },
        sort_order: 56
      },
      {
        section_id: 'waste-shipment-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The revised Regulation on shipments of waste (April 2024) has three goals: ensuring that the EU does not export its waste challenges to third countries; increasing traceability of shipments of waste and facilitating recycling and reuse in the EU; and better tackling illegal waste shipments. Under the new rules, waste exports to non-OECD countries will be restricted.'
        },
        sort_order: 57
      },
      {
        section_id: 'cpr',
        section_type: 'heading',
        title: 'Construction Products Regulation (CPR)',
        content: { level: 3 },
        sort_order: 58
      },
      {
        section_id: 'cpr-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Construction, buildings and engineering works are a major customer of the steel industry as they use around 50% of all steel consumed in Europe. Structural steel products used in construction works must comply with the provisions of Regulation (EU) No 305/2011. The Commission is reviewing the CPR to develop environmental performance requirements for construction products.'
        },
        sort_order: 59
      },
      {
        section_id: 'gfsec',
        section_type: 'heading',
        title: 'Global Forum on Steel Excess Capacity (GFSEC)',
        content: { level: 3 },
        sort_order: 60
      },
      {
        section_id: 'gfsec-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Launched by the G20 in 2016, GFSEC works to address the problem of global excess capacity by tackling distortive government policies. In its 2022 Report, GFSEC evidences that excess capacity continues to be a significant challenge for the global steel industry; therefore, tackling excess capacity is crucial to foster decarbonisation.'
        },
        sort_order: 61
      },
      {
        section_id: 'renovation-wave',
        section_type: 'heading',
        title: 'Renovation Wave Initiative',
        content: { level: 3 },
        sort_order: 62
      },
      {
        section_id: 'renovation-wave-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The European Commission\'s Renovation Wave aims to at least double the annual energy renovation rate (from 1% to 2%) of buildings. The primary objective is to reduce buildings\' GHG emissions by 60%, their final energy consumption by 14% and energy consumption for heating and cooling by 18% to achieve the 2030 target of reducing GHGs emissions by 55%.'
        },
        sort_order: 63
      },

      // DRIVERS OF CHANGE
      {
        section_id: 'drivers',
        section_type: 'heading',
        title: 'Drivers of Change',
        content: { level: 2 },
        sort_order: 64
      },
      {
        section_id: 'drivers-intro',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Four main drivers of change apply to hard to abate sectors: economy, technology, society and the environment. How a steel producer or a financial institution exposed to the sector is capable of anticipating these drivers and responding effectively defines the success of an organization.'
        },
        sort_order: 65
      },
      {
        section_id: 'drivers-list',
        section_type: 'list',
        title: 'Key Drivers of Change in the Steel Sector:',
        content: {
          variant: 'bullet',
          items: [
            'Global climate goals and adoption of target setting',
            'Technological advancements',
            'Regulatory environment',
            'Market demand and competition',
            'Breakdown of raw material and energy supply chains',
            'Steel price differentials',
            'Possibility of decreased steel consumption',
            'Increasing prices for consumers and producers',
            'Changing regional dynamics',
            'Impact of raw material prices',
            'Real estate and infrastructure sector pressures',
            'Demand for green steel',
            'Supply chain disruptions'
          ]
        },
        sort_order: 66
      },
      {
        section_id: 'drivers-accordion',
        section_type: 'accordion',
        title: 'Focus on Specific Drivers',
        content: {
          items: [
            {
              title: 'Investors\' Pressure on Steel Purchasers to Boost Demand for Green Steel',
              content: 'Financial institutions and investors are increasingly pressuring steel purchasers to source green steel, creating market pull for low-carbon steel products.'
            },
            {
              title: 'Real Estate Funds Seeking EU Taxonomy-Aligned Buildings',
              content: 'Real estate funds seeking to invest in EU Taxonomy-aligned buildings will demand green steel due to LCA requirements, driving demand for low-carbon construction materials.'
            },
            {
              title: 'Impact of Public Procurement on Steel Demand',
              content: 'Government procurement policies can significantly influence steel demand by requiring low-carbon materials in public infrastructure projects.'
            },
            {
              title: 'Importance of Steel Decarbonization for Other Industries',
              content: 'Steel decarbonization is crucial for the decarbonization of other industries that rely on steel as an input, including automotive, construction, and manufacturing.'
            }
          ]
        },
        sort_order: 67
      },

      // EXISTING AND FORTHCOMING TECHNOLOGIES
      {
        section_id: 'technologies',
        section_type: 'heading',
        title: 'Existing and Forthcoming Technologies',
        content: { level: 2 },
        sort_order: 68
      },
      {
        section_id: 'tech-intro',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Various decarbonization technologies are available or under development for the steel sector. These range from incremental improvements to existing processes to breakthrough technologies that could fundamentally transform steel production.'
        },
        sort_order: 69
      },
      {
        section_id: 'existing-tech',
        section_type: 'heading',
        title: 'Existing Decarbonisation Technologies',
        content: { level: 3 },
        sort_order: 70
      },
      {
        section_id: 'existing-tech-list',
        section_type: 'list',
        title: null,
        content: {
          variant: 'bullet',
          items: [
            'Energy efficiency improvements in existing BF-BOF plants',
            'Increased use of scrap in EAF production',
            'Biomass injection in blast furnaces',
            'Top gas recycling',
            'Heat recovery systems'
          ]
        },
        sort_order: 71
      },
      {
        section_id: 'forthcoming-tech',
        section_type: 'heading',
        title: 'Forthcoming Technologies',
        content: { level: 3 },
        sort_order: 72
      },
      {
        section_id: 'h2-dri',
        section_type: 'heading',
        title: 'Hydrogen-Based Direct Reduced Iron (H2-DRI)',
        content: { level: 4 },
        sort_order: 73
      },
      {
        section_id: 'h2-dri-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Integration of green hydrogen presents a viable approach to attaining environmentally sustainable steel production. Hydrogen exhibits promising potential as a viable alternative to coke in blast furnaces, which might potentially yield a reduction in emissions of approximately 20 percent. Hydrogen further exhibits promising potential as an alternative reductant in the manufacture of direct reduced iron, which can then be employed in the steelmaking process conducted in an electric arc furnace. The incorporation of green hydrogen in this specific process has the potential to enable the attainment of near carbon-neutral steel production.'
        },
        sort_order: 74
      },
      {
        section_id: 'h2-dri-callout',
        section_type: 'callout',
        title: 'Green Steel Premium',
        content: {
          type: 'warning',
          text: 'Based on Morgan Stanley\'s calculation, the attainment of financial equilibrium for green steel manufacturers necessitates a premium of $115 per tonne, corresponding to around 20% of the current market value for traditional steel.'
        },
        sort_order: 75
      },
      {
        section_id: 'ccus',
        section_type: 'heading',
        title: 'Carbon Capture, Utilisation and Storage (CCUS)',
        content: { level: 4 },
        sort_order: 76
      },
      {
        section_id: 'ccus-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'CCUS technologies can capture CO2 emissions from steel production processes for storage or utilisation. Norway\'s Northern Lights project can store up to 1.5 Mt carbon captured in Europe in its first phase. For CBI eligibility, CCS or CCUS should capture at least 70% of all emissions.'
        },
        sort_order: 77
      },
      {
        section_id: 'electrolysis',
        section_type: 'heading',
        title: 'Electrolytic Processes',
        content: { level: 4 },
        sort_order: 78
      },
      {
        section_id: 'electrolysis-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Two main key technologies are electrolytic processes in which iron ore is solely reduced by electricity at high temperatures (Molten Oxide Electrolysis - MOE) or low temperatures (electrowinning/Low Temperature Electrolysis - LTE). According to the IEA, LTE and MOE are promising methods for decarbonizing steel production starting from the end of this decade.'
        },
        sort_order: 79
      },
      {
        section_id: 'hydrogen-plasma',
        section_type: 'heading',
        title: 'Hydrogen Plasma',
        content: { level: 4 },
        sort_order: 80
      },
      {
        section_id: 'hydrogen-plasma-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Another technology is the reduction of iron ore to steel using inputs free of fossil fuels, such as hydrogen plasma in a single reactor which is being developed in the SuSteel project. This technology is highly integrated and has the potential to be very efficient, but it is still in the early stages of development and will not be available until 2040 to 2050.'
        },
        sort_order: 81
      },
      {
        section_id: 'tech-hindrances',
        section_type: 'heading',
        title: 'What Can Hinder Steel Decarbonization?',
        content: { level: 3 },
        sort_order: 82
      },
      {
        section_id: 'hindrances-accordion',
        section_type: 'accordion',
        title: null,
        content: {
          items: [
            {
              title: 'Technical Complexity',
              content: 'Decarbonizing steel production is technically complex, as most net zero technologies for coal-based primary steel production are either not readily available or not at a commercial scale.'
            },
            {
              title: 'Availability of Renewable Energy',
              content: 'Based on EU Commission sources, the steel industry will require about 165 TWh of electricity and 5.5 million tonnes of hydrogen annually by 2050 to make the total current volume of primary steel using hydrogen, resulting in a total electricity demand of 400 TWh – four times what the sector currently uses.'
            },
            {
              title: 'Uncertainty in Technology Adoption',
              content: 'Depending on the technology readiness level (TRL) of each production route, the success of different decarbonization strategies may vary. Some strategies may fail to deliver anticipated results.'
            },
            {
              title: 'Regional Variations',
              content: 'Steel production and decarbonization strategies will vary between nations based on regional demand and supply, energy prices, input availability, technology competitiveness, and public acceptance.'
            },
            {
              title: 'Company Variations',
              content: 'Steel market in Europe is sub-regional and lack of adaptive capacity for transition and readiness by relevant players can impact on the ability of certain sub-regions to decarbonise their steel market.'
            }
          ]
        },
        sort_order: 83
      },

      // CBI MITIGATION CRITERIA
      {
        section_id: 'cbi-criteria',
        section_type: 'heading',
        title: 'Mitigation Criteria According to CBI',
        content: { level: 2 },
        sort_order: 84
      },
      {
        section_id: 'cbi-pre-2022',
        section_type: 'heading',
        title: 'For Facilities Operational Before 2022',
        content: { level: 3 },
        sort_order: 85
      },
      {
        section_id: 'cbi-pre-2022-accordion',
        section_type: 'accordion',
        title: null,
        content: {
          items: [
            {
              title: 'Electric Arc Furnace (EAF) Optimization',
              content: 'Optimization of Electric Arc Furnace (EAF), installation and operation of other mitigation measures associated with EAF facilities: Automatically eligible.'
            },
            {
              title: 'Blast Furnace (BF) Operational in 2007 or Later',
              content: 'The investment shall not be for relining; and the decarbonization measure(s) shall reduce the facility\'s emissions intensity by: 20% if the pre-decarbonization baseline emissions intensity is ≥ 2 tCO2/t steel; OR 15% if the baseline is < 2 tCO2/t steel.'
            },
            {
              title: 'Blast Furnace (BF) Operational Prior to 2007',
              content: 'The investment shall not be for relining; and the decarbonization measure(s) shall reduce the facility\'s emissions intensity by 50% between 2022 and 2030.'
            },
            {
              title: 'Direct Reduced Iron (DRI) Production Line',
              content: 'If plant is fossil gas based: reduce emissions intensity by 20% between 2022 and 2030; OR if plant is coal based: reduce emissions intensity by 40% between 2022 and 2030.'
            }
          ]
        },
        sort_order: 86
      },
      {
        section_id: 'cbi-post-2022',
        section_type: 'heading',
        title: 'For Facilities Operational in 2022 or Thereafter',
        content: { level: 3 },
        sort_order: 87
      },
      {
        section_id: 'cbi-post-2022-list',
        section_type: 'list',
        title: null,
        content: {
          variant: 'bullet',
          items: [
            'Smelting reduction with integrated CCS/CCU: CCS or CCUS should capture at least 70% of all emissions',
            'Scrap based EAF: Needs to use 70% of scrap as total annual inputs; OR combined scrap and 100% Hydrogen based DRI should add to at least 70%',
            'Electrolysis of iron ore: Must have a plan to increase renewable energy use',
            '100% Hydrogen-based DRI-EAF: Hydrogen must follow CBI Hydrogen Production Criteria'
          ]
        },
        sort_order: 88
      },

      // TECHNOLOGY ASSESSMENT FOR FINANCIAL INSTITUTIONS
      {
        section_id: 'fi-tech-assessment',
        section_type: 'heading',
        title: 'Technology Assessment for Financial Institutions',
        content: { level: 2 },
        sort_order: 89
      },
      {
        section_id: 'fi-tech-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Financed emissions are directly linked to the emission intensity of a borrower\'s operations. In steelmaking, the majority of emissions arise from Scope 1 and Scope 2 activities, which are primarily associated with the energy and emission efficiency of machinery. A financial institution\'s ability to assess the emission intensity of financed technologies creates an opportunity to proactively mitigate risks stemming from the client\'s deviation from sectoral emission pathways.'
        },
        sort_order: 90
      },
      {
        section_id: 'fi-tech-list',
        section_type: 'list',
        title: 'Three Key Metrics for Technology Assessment:',
        content: {
          variant: 'numbered',
          items: [
            'Emission intensity: calculated by dividing the amount of CO2eq produced by the single machineries by the activity metric',
            'Type of technology: benchmark existing projects against those in portfolio and disclosed internally by clients',
            'Expected commercial availability: when the technology is expected to be commercially available for implementation'
          ]
        },
        sort_order: 91
      },
      {
        section_id: 'framework-objectives',
        section_type: 'heading',
        title: 'Framework Objectives',
        content: { level: 3 },
        sort_order: 92
      },
      {
        section_id: 'framework-list',
        section_type: 'list',
        title: 'Bank\'s Transition Finance Strategy Goals:',
        content: {
          variant: 'bullet',
          items: [
            'Support Borrowers\' Decarbonization: Facilitate access to financing that enables the adoption of low-carbon and energy-efficient technologies',
            'Protect the Bank\'s Portfolio: Mitigate financial risks stemming from non-alignment with sectoral climate targets, stranded assets, or regulatory pressures'
          ]
        },
        sort_order: 93
      },
      {
        section_id: 'framework-steps',
        section_type: 'list',
        title: 'Four Steps for Decision-Making:',
        content: {
          variant: 'numbered',
          items: [
            'Identifying Alignment with Technological Pathways: Use the tables to identify the technological pathway that most closely aligns with the borrower\'s sector',
            'Technology and Transition Plan Assessment: Evaluate the existing technologies used in the borrower\'s facilities',
            'Incorporation of Contractual Commitments: Include technology-related commitments in loan agreements',
            'Monitoring and Reporting: Establish regular monitoring and reporting mechanisms'
          ]
        },
        sort_order: 94
      },

      // TRANSITION PLAN CREDIBILITY
      {
        section_id: 'transition-plan',
        section_type: 'heading',
        title: 'Transition Plan Credibility',
        content: { level: 2 },
        sort_order: 95
      },
      {
        section_id: 'transition-plan-intro',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Evaluating the credibility of a steel company\'s transition plan is essential for financial institutions. A credible transition plan should demonstrate clear pathways to decarbonization, backed by concrete actions and investments.'
        },
        sort_order: 96
      },
      {
        section_id: 'tpt-actions',
        section_type: 'heading',
        title: 'Actions Evidencing Credibility (Based on TPT)',
        content: { level: 3 },
        sort_order: 97
      },
      {
        section_id: 'tpt-list',
        section_type: 'list',
        title: null,
        content: {
          variant: 'bullet',
          items: [
            'Clear governance structures for climate-related decision making',
            'Science-based targets aligned with 1.5°C pathways',
            'Detailed capital allocation plans for low-carbon technologies',
            'Engagement with suppliers on emissions reduction',
            'R&D investments in breakthrough technologies',
            'Transparent disclosure of progress and challenges'
          ]
        },
        sort_order: 98
      },

      // STEEL TARGET SETTING (SDA)
      {
        section_id: 'target-setting',
        section_type: 'heading',
        title: 'Steel Target Setting Following SDA Approach',
        content: { level: 2 },
        sort_order: 99
      },
      {
        section_id: 'target-setting-intro',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The specific measure of emission intensity for the steel sector is scope 1 and greenhouse gas emissions from steelmaking, per unit of crude steel produced in units of metric tonnes of CO2 equivalent per tonne of crude steel.'
        },
        sort_order: 100
      },
      {
        section_id: 'nine-criteria',
        section_type: 'heading',
        title: '9 Core Criteria for Steel Target Setting',
        content: { level: 3 },
        sort_order: 101
      },
      {
        section_id: 'nine-criteria-list',
        section_type: 'list',
        title: null,
        content: {
          variant: 'numbered',
          items: [
            'For target-setting with the iron & steel SDA, emissions must align with the defined core boundary, using hot rolled steel as the intensity denominator',
            'The iron & steel SDA covers emissions within the core boundary for steel production. If these emissions are under 95% of total scope 1 and 2, the remainder requires a separate target',
            'Companies must include upstream emissions from purchased intermediate products within the boundary',
            'Companies must include downstream emissions from processing sold intermediate products within the core boundary',
            'Near-term targets must include a scope 3 target covering all category 3 "fuel- and energy-related emissions"',
            'Companies must justify their growth projection in the target submission',
            'Target wording must mention that the calculation depends on the scrap share',
            'Annual disclosure of emissions and the scrap ratio aligned with the target boundary is mandatory',
            'Companies reducing their scrap ratio must justify this reduction during target validation'
          ]
        },
        sort_order: 102
      },
      {
        section_id: 'fi-four-steps',
        section_type: 'heading',
        title: 'Four Steps for Financial Institutions',
        content: { level: 3 },
        sort_order: 103
      },
      {
        section_id: 'fi-four-steps-accordion',
        section_type: 'accordion',
        title: null,
        content: {
          items: [
            {
              title: 'Step 1: Determine Target Boundaries, Scopes and Methods',
              content: 'Financial Institution can use the iron & steel SDA to set scope 3 category 15 targets for their investment and lending activities to steel companies by following the Financial Sector Science-Based Targets Guidance.'
            },
            {
              title: 'Step 2: Calculate Emissions Inventory',
              content: 'When calculating GHG accounting for target-setting, steel makers shall follow the SBTi Target Validation Protocol, the GHG Protocol Corporate Accounting and Reporting Standard, Scope 2 Guidance and Corporate Value Chain (Scope 3) Standard.'
            },
            {
              title: 'Step 3: Construct Targets',
              content: 'Steel makers should use the SBTi standalone Steel Science-Based Target-Setting Tool for the Near-Term. Iron and steelmakers using the SDA should use the "Iron & Steelmaker Tool" sheet.'
            },
            {
              title: 'Step 4: Submit Target to the SBTi',
              content: 'Steel makers should follow the general SBTi guidelines for submitting a target for validation, including rules for accounting for emissions associated with biomass feedstocks.'
            }
          ]
        },
        sort_order: 104
      },

      // KPIs
      {
        section_id: 'kpis',
        section_type: 'heading',
        title: 'KPIs',
        content: { level: 2 },
        sort_order: 105
      },
      {
        section_id: 'kpis-intro',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'This section provides the most pertinent key performance indicators (KPIs) for the evaluation of borrowers\' transition-related objectives. The KPIs are those most closely associated with the EU climate objectives and sustainability for the steel industry, focusing on carbon intensity, circularity and R&D.'
        },
        sort_order: 106
      },
      {
        section_id: 'physical-intensity',
        section_type: 'heading',
        title: 'Steel Physical Emission Intensity',
        content: { level: 3 },
        sort_order: 107
      },
      {
        section_id: 'physical-intensity-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Disclosing targets in emission intensity metrics provides a relative assessment of the environmental impact of different elements of the net zero transition within the steel sector. Emissions Intensity is a commonly used metric: the World Steel Association uses it as the sole CO2 indicator; Responsible Steel calls for steelmakers to report GHG Emissions Intensity for Plants; and the SBTi Sectoral Decarbonization Approach sets targets based on carbon Emissions Intensity.'
        },
        sort_order: 108
      },
      {
        section_id: 'benchmarks-table',
        section_type: 'table',
        title: 'EU Taxonomy Benchmarks for Steel',
        content: {
          caption: 'Carbon intensity benchmarks based on production process',
          columns: [
            { key: 'process', header: 'Process' },
            { key: 'benchmark', header: 'Benchmark (tCO2e/t)' }
          ],
          data: [
            { process: 'Hot metal', benchmark: '≤ 1.331' },
            { process: 'Sintered ore', benchmark: '≤ 0.163' },
            { process: 'Coke (excluding lignite)', benchmark: '≤ 0.144' },
            { process: 'Iron casting', benchmark: '≤ 0.299' },
            { process: 'EAF high alloy steel', benchmark: '≤ 0.266' },
            { process: 'EAF carbon steel', benchmark: '≤ 0.209' }
          ]
        },
        sort_order: 109
      },
      {
        section_id: 'tpi-benchmarks-table',
        section_type: 'table',
        title: 'TPI 1.5°C Scenario Benchmarks',
        content: {
          caption: 'Emissions intensity projections under 1.5°C scenario',
          columns: [
            { key: 'year', header: 'Year' },
            { key: 'combined', header: 'Combined (tCO2/t steel)' },
            { key: 'primary', header: 'Primary (tCO2/t steel)' },
            { key: 'secondary', header: 'Secondary (tCO2/t steel)' }
          ],
          data: [
            { year: '2030', combined: '0.99', primary: '1.22', secondary: '0.28' },
            { year: '2040', combined: '0.37', primary: '0.37', secondary: '0.16' },
            { year: '2050', combined: '0.12', primary: '0.05', secondary: '0.05' }
          ]
        },
        sort_order: 110
      },
      {
        section_id: 'scope12-kpi',
        section_type: 'heading',
        title: 'Alignment of Scope 1+2 Emission Reduction Targets',
        content: { level: 3 },
        sort_order: 111
      },
      {
        section_id: 'scope12-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The direct emissions from activities within the operational boundaries of the company and the emissions from the use of electricity are known as Scope 1 and 2 of a borrower. It is crucial for a financial institution to assess the congruence of scope 1 and 2 emission reduction targets to determine whether the borrower is aligning its internal operations with the climate objective.'
        },
        sort_order: 112
      },
      {
        section_id: 'scope12-benchmarks',
        section_type: 'list',
        title: 'Benchmarks:',
        content: {
          variant: 'bullet',
          items: [
            'Long-term target: achieve cuts of 80-95% CO2 emissions by 2050, compared to 1990 levels',
            'Medium target: reduce Scope 1 and 2 emissions intensity by 30% by 2030 from a 2015 baseline',
            'TPI 1.5°C scenario: By 2030 – 2083 Mt; By 2040 – 749 Mt; By 2050 – 252 Mt'
          ]
        },
        sort_order: 113
      },
      {
        section_id: 'scope3-kpi',
        section_type: 'heading',
        title: 'Trend in Past Scope 3 Emission Intensity',
        content: { level: 3 },
        sort_order: 114
      },
      {
        section_id: 'scope3-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The emissions intensity of purchased crude steel refers to the indirect emissions associated with the production of crude steel before it reaches the purchasing entity. The KPI is a measure of the alignment of the company\'s recent purchased crude steel emissions intensity trend with that of its decarbonization pathway.'
        },
        sort_order: 115
      },
      {
        section_id: 'rd-kpi',
        section_type: 'heading',
        title: 'R&D in Climate Change Mitigation Technologies',
        content: { level: 3 },
        sort_order: 116
      },
      {
        section_id: 'rd-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Investment in research and development of climate change mitigation technologies is a key indicator of a company\'s commitment to transition. This includes investments in hydrogen-based production, CCUS, electrolysis, and other breakthrough technologies.'
        },
        sort_order: 117
      },
      {
        section_id: 'scrap-kpi',
        section_type: 'heading',
        title: 'Scrap Reduction Strategy',
        content: { level: 3 },
        sort_order: 118
      },
      {
        section_id: 'scrap-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Increasing the use of scrap in steel production is one of the most effective ways to reduce emissions. A company\'s strategy for increasing scrap utilization should be evaluated as part of its overall transition plan.'
        },
        sort_order: 119
      },

      // LOCKED-IN EMISSIONS
      {
        section_id: 'locked-in',
        section_type: 'heading',
        title: 'Locked-in Emissions',
        content: { level: 2 },
        sort_order: 120
      },
      {
        section_id: 'locked-in-intro',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'Locked-in emissions refer to the future GHG emissions that are committed by existing capital stock, infrastructure, and operational decisions. For the steel sector, this is particularly relevant given the long lifespan of blast furnaces and other production assets.'
        },
        sort_order: 121
      },
      {
        section_id: 'locked-in-kpi',
        section_type: 'heading',
        title: 'Locked-in Emissions KPI',
        content: { level: 3 },
        sort_order: 122
      },
      {
        section_id: 'locked-in-paragraph',
        section_type: 'paragraph',
        title: null,
        content: {
          text: 'The locked-in emissions KPI measures the total future emissions committed by a company\'s existing assets based on their remaining operational lifetime and emission intensity. This helps financial institutions assess the carbon lock-in risk of borrowers.'
        },
        sort_order: 123
      },
      {
        section_id: 'locked-in-accordion',
        section_type: 'accordion',
        title: 'Key Questions for Financial Institutions',
        content: {
          items: [
            {
              title: 'How should financial institutions assess carbon lock-in risk of borrowers?',
              content: 'By evaluating the age and remaining lifetime of production assets, the technology used, planned investments in decarbonization, and alignment with sectoral pathways.'
            },
            {
              title: 'How to engage with locked-in emissions exceeding carbon budget?',
              content: 'Through engagement on transition plans, setting conditions for continued financing, and potentially providing transition finance for asset upgrades or replacement.'
            },
            {
              title: 'How to understand whether a borrower\'s carbon budget is credible?',
              content: 'By comparing announced targets with sectoral benchmarks, evaluating the technical feasibility of planned measures, and assessing capital allocation to transition investments.'
            },
            {
              title: 'What to do if emission intensity exceeds the carbon budget?',
              content: 'Consider enhanced engagement, conditional financing, or in extreme cases, portfolio divestment decisions based on the bank\'s transition finance framework.'
            }
          ]
        },
        sort_order: 124
      },

      // CONSOLIDATED Q&A
      {
        section_id: 'qa',
        section_type: 'heading',
        title: 'Consolidated Q&A',
        content: { level: 2 },
        sort_order: 125
      },
      {
        section_id: 'qa-accordion',
        section_type: 'accordion',
        title: null,
        content: {
          items: [
            {
              title: 'What are the main decarbonization pathways for steel?',
              content: 'The main pathways include: (1) increased recycling through EAF production, (2) hydrogen-based direct reduction (H2-DRI), (3) carbon capture and storage, and (4) electrolytic processes. Each pathway has different maturity levels and applicability depending on the type of steel production.'
            },
            {
              title: 'How can financial institutions support steel decarbonization?',
              content: 'Through transition finance mechanisms including sustainability-linked loans, green bonds, technology-specific financing, and engagement with borrowers on transition plans. Assessment of technology pathways and locked-in emissions is crucial.'
            },
            {
              title: 'What are the key benchmarks for steel emissions?',
              content: 'Key benchmarks include EU Taxonomy thresholds, TPI 1.5°C scenario pathways, and SBTi sectoral decarbonization approach targets. These vary by production process (primary vs. secondary) and year.'
            },
            {
              title: 'What role does scrap play in steel decarbonization?',
              content: 'Increasing scrap utilization in EAF production is one of the most effective near-term decarbonization measures, as secondary steel production has significantly lower emissions intensity than primary production.'
            },
            {
              title: 'When will breakthrough technologies be commercially available?',
              content: 'H2-DRI is expected to be commercially available in the late 2020s, CCUS in the early 2030s, and electrolytic processes from the late 2020s to 2030s. Hydrogen plasma technology is not expected until 2040-2050.'
            }
          ]
        },
        sort_order: 126
      },

      // SOURCES HEADING
      {
        section_id: 'sources-heading',
        section_type: 'heading',
        title: 'Sources',
        content: { level: 2 },
        sort_order: 127
      }
    ]

    // Insert all sections
    const sectionsToInsert = sections.map(s => ({
      ...s,
      page_id: pageId
    }))

    const { error: sectionsError } = await supabase
      .from('page_sections')
      .insert(sectionsToInsert)

    if (sectionsError) {
      console.error('Error inserting sections:', sectionsError)
      throw sectionsError
    }

    console.log(`Inserted ${sections.length} sections`)

    // Define sources
    const sources = [
      { source_number: 1, title: 'Roland Berger (2020) - The Future of Steel Making', author: 'Roland Berger', year: '2020', url: null },
      { source_number: 2, title: 'IEA - Iron and Steel Technology Roadmap', author: 'International Energy Agency', year: '2020', url: 'https://www.iea.org/reports/iron-and-steel-technology-roadmap' },
      { source_number: 3, title: 'EU Commission - Towards competitive and clean European steel', author: 'European Commission', year: '2021', url: null },
      { source_number: 4, title: 'McKinsey - Consolidating European steel: strategic responses to industry challenges', author: 'McKinsey & Company', year: '2021', url: null },
      { source_number: 5, title: 'Strengthening Sustainability in the Steel Industry', author: 'Paragamian M., Anagnostou J., Tu L., Schlorke S.', year: '2020', url: null },
      { source_number: 6, title: 'Decarbonization challenge for steel', author: 'Hoffmann C., Van Hoey M., Zeumer B.', year: '2020', url: null },
      { source_number: 7, title: 'European Steel in Figures 2023', author: 'EUROFER', year: '2023', url: 'https://www.eurofer.eu' },
      { source_number: 8, title: 'World Steel Association Statistical Yearbook', author: 'World Steel Association', year: '2021', url: 'https://worldsteel.org' },
      { source_number: 9, title: 'Climate Bonds Initiative - Steel Sector Criteria', author: 'Climate Bonds Initiative', year: '2023', url: 'https://www.climatebonds.net' },
      { source_number: 10, title: 'Bashmakov et al. - Industry Chapter, IPCC AR6 WGIII', author: 'Bashmakov I.A. et al.', year: '2022', url: null },
      { source_number: 11, title: 'ResponsibleSteel International Standard Version 2.1', author: 'ResponsibleSteel', year: '2023', url: 'https://www.responsiblesteel.org' },
      { source_number: 12, title: 'Sustainable STEEL Principles', author: 'Rocky Mountain Institute', year: '2022', url: null },
      { source_number: 13, title: 'Net Zero Steel Initiative', author: 'Mission Possible Partnership', year: '2022', url: null },
      { source_number: 14, title: 'SteelZero Initiative', author: 'The Climate Group', year: '2023', url: 'https://www.theclimategroup.org/steelzero' },
      { source_number: 15, title: 'Industrial Emissions Directive 2010/75/EU', author: 'European Parliament', year: '2010', url: null },
      { source_number: 16, title: 'EU Taxonomy Climate Delegated Act', author: 'European Commission', year: '2021', url: null },
      { source_number: 17, title: 'Waste Shipment Regulation (No 1013/2006)', author: 'European Parliament', year: '2024', url: null },
      { source_number: 18, title: 'Construction Products Regulation (EU) No 305/2011', author: 'European Parliament', year: '2011', url: null },
      { source_number: 19, title: 'GFSEC - Assessing steel decarbonisation progress', author: 'Global Forum on Steel Excess Capacity', year: '2022', url: null },
      { source_number: 20, title: 'A Renovation Wave for Europe - COM(2020) 662 final', author: 'European Commission', year: '2020', url: null },
      { source_number: 21, title: 'Transition Risks in the Steel Sector', author: 'Kepler Chevereux', year: '2023', url: null },
      { source_number: 22, title: 'H2 Green Steel Project', author: 'H2 Green Steel', year: '2023', url: 'https://www.h2greensteel.com' },
      { source_number: 23, title: 'HYBRIT Project', author: 'HYBRIT Development AB', year: '2023', url: 'https://www.hybritdevelopment.se' },
      { source_number: 24, title: 'Northern Lights CCS Project', author: 'Northern Lights', year: '2023', url: 'https://norlights.com' },
      { source_number: 25, title: 'SIDERWIN Project', author: 'SIDERWIN Consortium', year: '2023', url: null },
      { source_number: 26, title: 'SBTi Iron and Steel Guidance', author: 'Science Based Targets initiative', year: '2023', url: 'https://sciencebasedtargets.org' },
      { source_number: 27, title: 'TPI Steel Sector Methodology', author: 'Transition Pathway Initiative', year: '2023', url: 'https://www.transitionpathwayinitiative.org' },
      { source_number: 28, title: 'UNEP FI Target Setting for Steel', author: 'UNEP Finance Initiative', year: '2023', url: null },
      { source_number: 29, title: 'Transition Plan Taskforce Disclosure Framework', author: 'Transition Plan Taskforce', year: '2023', url: 'https://transitiontaskforce.net' },
      { source_number: 30, title: 'IIGCC Net Zero Steel Engagement', author: 'IIGCC', year: '2023', url: 'https://www.iigcc.org' },
      { source_number: 31, title: 'Morgan Stanley Green Steel Analysis', author: 'Morgan Stanley', year: '2023', url: null },
      { source_number: 32, title: 'EU Commission Steel Industry Statistics', author: 'European Commission DG GROW', year: '2023', url: null },
      { source_number: 33, title: 'ACT Initiative Steel Methodology', author: 'ACT Initiative', year: '2023', url: null },
      { source_number: 34, title: 'World Benchmarking Alliance Steel Assessment', author: 'World Benchmarking Alliance', year: '2023', url: null },
      { source_number: 35, title: 'GHG Protocol Corporate Standards', author: 'GHG Protocol', year: '2023', url: 'https://ghgprotocol.org' },
      { source_number: 36, title: 'Friege J. - Increasing homeowners\' insulation activity in Germany', author: 'Friege J.', year: '2016', url: null },
      { source_number: 37, title: 'Schoenefeld J., Stein B., Renz I. - Renovating Europe', author: 'Schoenefeld J. et al.', year: '2024', url: null },
      { source_number: 38, title: 'DG Environment - Waste shipments report', author: 'European Commission DG Environment', year: '2023', url: null },
      { source_number: 39, title: 'EUROFER - Revision of the Waste Shipment Regulation Position Paper', author: 'EUROFER', year: '2022', url: null },
      { source_number: 40, title: 'DG for Financial Stability - EU Taxonomy Compass', author: 'European Commission', year: '2023', url: 'https://ec.europa.eu/sustainable-finance-taxonomy' }
    ]

    const sourcesToInsert = sources.map(s => ({
      ...s,
      page_id: pageId
    }))

    const { error: sourcesError } = await supabase
      .from('page_sources')
      .insert(sourcesToInsert)

    if (sourcesError) {
      console.error('Error inserting sources:', sourcesError)
      throw sourcesError
    }

    console.log(`Inserted ${sources.length} sources`)

    // Update page timestamp
    await supabase
      .from('pages')
      .update({ updated_at: new Date().toISOString(), last_updated: new Date().toISOString().split('T')[0] })
      .eq('id', pageId)

    return new Response(
      JSON.stringify({
        success: true,
        message: `Successfully seeded Steel sector content with ${sections.length} sections and ${sources.length} sources`,
        pageId
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error seeding Steel content:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
