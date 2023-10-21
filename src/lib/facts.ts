type Category = 'chemistry' | 'biology' | 'geology' | 'physics' | 'engineering';

export interface Fact {
  fact: string;
  categories: Category[];
}

export const facts: Fact[] = [
  {
    fact: "71% of Earth's surface is covered by water; 97% of this water is ocean water.",
    categories: ['chemistry']
  },
  {
    fact: 'Shark skin is made of teeth (dermal denticles).',
    categories: ['biology']
  },
  {
    fact: 'The ocean is technically a bowl of soup.',
    categories: ['chemistry']
  },
  {
    fact: 'Large baleen whales typically need 3 individuals involved to successfully reproduce.',
    categories: ['biology']
  },
  {
    fact: 'Pistol shrimp punches generate more heat than the sun.',
    categories: ['biology']
  },
  {
    fact: 'Manatees control their buoyancy through farting.',
    categories: ['biology']
  },
  {
    fact: 'There are lakes at the bottom of the ocean (brine).',
    categories: ['chemistry']
  },
  {
    fact: 'Glass sponges can live over 18,000 years.',
    categories: ['biology']
  },
  {
    fact: 'Turritopsis jellyfish are immortal.',
    categories: ['biology']
  },
  {
    fact: 'Many types of reef fish can change sex at will.',
    categories: ['biology']
  },
  {
    fact: 'The average ocean depth is 3800 meters or 2.4 miles.',
    categories: ['geology']
  },
  {
    fact: 'The Pacific Ocean was named by Portuguese navigator Ferdinand Magellan.',
    categories: ['history']
  },
  {
    fact: 'The original name for the Pacific Ocean is Tepre Pacificum, which means "peaceful sea" in English.',
    categories: ['history']
  },
  {
    fact: 'The Atlantic Ocean was named after Atlas from Greek mythology.',
    categories: ['geology']
  },
  {
    fact: 'The Arctic Ocean is the shallowest and smallest ocean.',
    categories: ['geology']
  },
  {
    fact: 'The Chesapeake Bay is the largest estuary in the United States and one of the most productive bodies of water in the world.',
    categories: ['biology']
  },
  {
    fact: 'Atoll reefs are circular reefs with a lagoon in the center.',
    categories: ['geology']
  },
  {
    fact: 'Fringing reefs are shallow reefs that grow from the shore towards the ocean.',
    categories: ['geology']
  },
  {
    fact: 'Salt makes up 3.5% of all ocean water.',
    categories: ['chemistry']
  },
  {
    fact: "At least half of Earth's oxygen comes from the ocean.",
    categories: ['chemistry']
  },
  {
    fact: "The scientific name for sea sponges, Phylum Porifera, translates to 'pore bearers.'",
    categories: ['biology']
  },
  {
    fact: 'Sponges can reproduce asexually through budding or sexually through producing gametes.',
    categories: ['biology']
  },
  {
    fact: "The lion's mane jellyfish is the largest jellyfish species; it can grow to be 8 feet wide and 120 feet long.",
    categories: ['biology']
  },
  {
    fact: 'There are up to 15,000 species of roundworms.',
    categories: ['biology']
  },
  {
    fact: 'Octopi are a type of mollusk.',
    categories: ['biology']
  },
  {
    fact: 'The blue sea dragon slug steals toxins from other animal species.',
    categories: ['biology']
  },
  {
    fact: 'Octopi are the most intelligent invertebrates.',
    categories: ['biology']
  },
  {
    fact: 'Squids are the largest invertebrates.',
    categories: ['biology']
  },
  {
    fact: 'Cuttlefish have an internal shell called a cuttlebone.',
    categories: ['biology']
  },
  {
    fact: 'Nautilus shells are filled with gas for buoyancy.',
    categories: ['biology']
  },
  {
    fact: 'There are over 800,000 species of arthropods.',
    categories: ['biology']
  },
  {
    fact: 'Lamprey and hagfish are the only living jawless fish species.',
    categories: ['biology']
  },
  {
    fact: "A shark's liver is filled with oil.",
    categories: ['biology']
  },
  {
    fact: 'Sharks only attack humans when they mistake them for fish.',
    categories: ['biology']
  },
  {
    fact: 'Shark-finning and gill nets kill up to 250 million sharks per year.',
    categories: ['biology']
  },
  {
    fact: 'Top-to-bottom flat fish have a depressiform body shape.',
    categories: ['biology']
  },
  {
    fact: 'Side-to-side flat fish have a compressiform body shape.',
    categories: ['biology']
  },
  {
    fact: 'Most sharks have a heterocercal tail shape.',
    categories: ['biology']
  },
  {
    fact: 'Most sharks give birth to live young.',
    categories: ['biology']
  },
  {
    fact: 'Most marine reptiles are restricted to warmer waters in order to maintain body temperature.',
    categories: ['biology']
  },
  {
    fact: 'Sea turtle shells are made up of plates called scutes.',
    categories: ['biology']
  },
  {
    fact: 'Male sea turtles have long tails, while female sea turtles have short tails.',
    categories: ['biology']
  },
  {
    fact: 'Leatherback sea turtles can be up to 11 feet long and weigh 4000 pounds.',
    categories: ['biology']
  },
  {
    fact: "Kemp's ridley sea turtles are the smallest and most endangered sea turtles.",
    categories: ['biology']
  },
  {
    fact: 'Arribadas are the synchronized and large scale nesting by some sea turtles species at the shore.',
    categories: ['biology']
  },
  {
    fact: 'Sea turtles take between 10 and 50 years to reach sexual maturity.',
    categories: ['biology']
  },
  {
    fact: "Sea turtle sex is determined by the environment's temperature during development",
    categories: ['biology']
  },
  {
    fact: 'Marine snow is a shower of organic material that falls from the upper waters towards the deep ocean.',
    categories: ['biology']
  },
  {
    fact: 'Animals are considered marine animals if most of their food comes from the ocean.',
    categories: ['biology']
  },
  {
    fact: 'Birds use special salt glands to remove salt from the ocean water they drink.',
    categories: ['biology']
  },
  {
    fact: 'Whales have hair.',
    categories: ['biology']
  },
  {
    fact: 'Baleen whales have two blowholes.',
    categories: ['biology']
  },
  {
    fact: "Dolphin's echolocation bounces off the swim bladder of prey.",
    categories: ['biology']
  },
  {
    fact: 'Spyhopping is when a whale pokes its head out of the water and turns, usually to look around.',
    categories: ['biology']
  },
  {
    fact: "Lobtailing is when whales stick their tail out of the water and slap it against the water's surface.",
    categories: ['biology']
  },
  {
    fact: 'Whales sleep about 8 hours per day.',
    categories: ['biology']
  },
  {
    fact: 'Whales sleep with one-half their brain awake; this is called unihemispheric sleep.',
    categories: ['biology']
  },
  {
    fact: 'Most whales travel in groups called pods.',
    categories: ['biology']
  },
  {
    fact: 'Whale calves are typically born tail first.',
    categories: ['biology']
  },
  {
    fact: 'Whales can create remixes of their songs using songs from other whales.',
    categories: ['biology']
  },
  {
    fact: 'Manatees and Dugongs are a close relative of the elephant.',
    categories: ['biology']
  },
  {
    fact: 'Lamprey are parasitic fish that attach to other fish and suck their fluids like vampires.',
    categories: ['biology']
  },
  {
    fact: 'The Polynesians were the first to mount long-distance, open-ocean expeditions in specialized catamarans.',
    categories: ['history']
  },
  {
    fact: 'The Challenger expedition (1858) was the first ocean expedition organized and funded for scientific purposes.',
    categories: ['engineering']
  },
  {
    fact: 'The Bathysphere was the first and most dangerous submarine ever created; it was lowered into the water via a single cable.',
    categories: ['engineering']
  },
  {
    fact: 'The Alvin submarine costs $30,000 dollars per day to operate.',
    categories: ['engineering']
  },
  {
    fact: 'The Alvin submarine aided in finding the sunken Titanic.',
    categories: ['engineering']
  },
  {
    fact: 'The Alvin submarine is equipped with 2 manipular arms, 5 view ports, and life support for 3 people.',
    categories: ['engineering']
  },
  {
    fact: "The Aquarius is the world's only underwater research lab; it is the size of a bus.",
    categories: ['engineering']
  },
  {
    fact: 'The blobfish only looks like a blob when brought up from the bottom of the ocean; this is due to an immense pressure difference between the two environments.',
    categories: ['biology']
  },
  {
    fact: 'The Woods Hole Oceanographic Institution is the largest private non-profit oceanographic institution in the world.',
    categories: ['history']
  },
  {
    fact: 'The National Oceanic and Atmospheric Administration is an American federal agency focused on the oceans and the atmosphere.',
    categories: ['history']
  },
  {
    fact: 'The National Oceanic and Atmospheric Administration is an American federal agency responsible for daily weather forecasts.',
    categories: ['history']
  },
  {
    fact: 'Some submarines can be drones controlled by AI (autonomous underwater vehicles.)',
    categories: ['engineering']
  },
  {
    fact: 'SCUBA stands for Self Contained Underwater Breathing Apparatus.',
    categories: ['engineering']
  },
  {
    fact: 'Hydrometers are tools used to measure water salinity.',
    categories: ['chemistry', 'engineering']
  },
  {
    fact: 'Hydrophones are microphones used for recording sound measurements in the water.',
    categories: ['engineering']
  },
  {
    fact: 'Neuston nets are used to sample organisms near the surface of the water.',
    categories: ['biology', 'engineering']
  },
  {
    fact: 'Seine nets are flat fence-like nets used to encircle a school of fish.',
    categories: ['biology', 'engineering']
  },
  {
    fact: 'A Secchi disk is used to estimate the transparency of seawater.',
    categories: ['chemistry', 'engineering']
  },
  {
    fact: 'The Chesapeake Bay watershed covers 64,000 square miles or 165,759 square kilometers.',
    categories: ['geology']
  },
  {
    fact: 'The average depth of the Chesapeake Bay is 21 feet.',
    categories: ['geology']
  },
  {
    fact: '1.3 million acres of coastal habitats in the United States are protected by the National Estuarine Research Reserve System.',
    categories: ['biology']
  },
  {
    fact: 'The Benthic zone is the bottom zone of a body of water.',
    categories: ['geology', 'biology']
  },
  {
    fact: 'Harmful algae blooms kill fish en masse and result in large piles of dead fish on the shore.',
    categories: ['biology']
  },
  {
    fact: 'The Coriolis effect is not responsible for the direction toilet bowls flush.',
    categories: ['physics']
  },
  {
    fact: 'Most tsunamis occur due to earthquakes on convergent plate boundaries.',
    categories: ['physics']
  },
  {
    fact: '6 inches of fast moving water can knock an adult off their feet.',
    categories: ['physics']
  },
  {
    fact: '12 inches of water can carry away a small car.',
    categories: ['physics']
  },
  {
    fact: 'Abyssal plains cover 70% of the ocean floor.',
    categories: ['geology']
  },
  {
    fact: 'Sonobuoys are buoys designed to record underwater ocean sounds and send back real-time recordings.',
    categories: ['engineering']
  },
  {
    fact: 'Shark finning is illegal in the United States.',
    categories: ['biology']
  },
  {
    fact: 'All 6 species of sea turtles in the United States are protected under the Endangered Species Act of 1973.',
    categories: ['biology']
  },
  {
    fact: "90% of an iceberg is submerged below the water's surface.",
    categories: ['geology']
  },
  {
    fact: 'Red and yellow light is unseeable below 10 meters.',
    categories: ['chemistry']
  },
  {
    fact: 'The average depth of the ocean is 12,100 feet or 3,700 meters.',
    categories: ['geology']
  },
  {
    fact: '5% of the ocean floor has been mapped in detail.',
    categories: ['geology', 'engineering']
  },
  {
    fact: 'The Great Barrier Reef can be seen from the moon.',
    categories: ['geology']
  },
  {
    fact: 'The largest recorded blue whale was 33 meters or 108 feet long.',
    categories: ['biology']
  },
  {
    fact: '20% of the ocean floor is covered by coral reefs.',
    categories: ['biology']
  },
  {
    fact: 'Hirohito of Japan was an avid marine biologist.',
    categories: ['history']
  },
  {
    fact: 'Bigfin squids are deep-sea squids with long thin arms and an alien-like appearance.',
    categories: ['biology']
  },
  {
    fact: 'The temperature in the Marianas Trench is between -1 and 4 degrees Celsius.',
    categories: ['physics']
  },
  {
    fact: '14% of consumed protein comes from fish.',
    categories: ['biology']
  },
  {
    fact: 'Dissolved gold can be found in the ocean in small amounts.',
    categories: ['chemistry']
  },
  {
    fact: '15% of the oceans are covered by sea ice.',
    categories: ['physics']
  },
  {
    fact: 'Jellyfish may lay up to 45,000 eggs daily.',
    categories: ['biology']
  },
  {
    fact: 'Being stung by Portuguese Man-of-War feels like being struck by lightning.',
    categories: ['biology']
  },
  {
    fact: 'Seahorses can see in two directions at the same time.',
    categories: ['biology']
  },
  {
    fact: 'Male seahorses get pregnant instead of the females.',
    categories: ['biology']
  },
  {
    fact: 'Seahorses do not have stomachs.',
    categories: ['biology']
  },
  {
    fact: 'Seahorses eat between 30 to 50 times per day.',
    categories: ['biology']
  },
  {
    fact: 'Some seahorse species can change color at will.',
    categories: ['biology']
  },
  {
    fact: 'Shark skin feels like sandpaper.',
    categories: ['biology']
  },
  {
    fact: 'Great white sharks use body language to communicate with one another.',
    categories: ['biology']
  },
  {
    fact: 'Most deep sea fish cannot see red light.',
    categories: ['biology']
  },
  {
    fact: 'Some fish communicate with each other by rubbing, grinding, and snapping their bones.',
    categories: ['biology']
  },
  {
    fact: 'Primary coasts are young coasts shaped by land-based processes.',
    categories: ['geology']
  },
  {
    fact: 'The volcanic islands of Hawaii are primary coasts.',
    categories: ['geology']
  },
  {
    fact: 'The Great Barrier Reef is a secondary coast.',
    categories: ['geology']
  },
  {
    fact: 'The Mariana Trench is the deepest part of the world\'s oceans, reaching a depth of over 36,000 feet (10,972 meters).',
    categories: ['geology']
  },
  {
    fact: 'The longest mountain range on Earth is the Mid-Atlantic Ridge, which runs through the Atlantic Ocean and is more than 40,000 miles (64,000 kilometers) long.',
    categories: ['geology']
  },
  {
    fact: 'The Gulf Stream is a warm ocean current that influences the climate of the East Coast of the United States and Western Europe.',
    categories: ['physics']
  },
  {
    fact: 'Ocean currents help distribute heat around the planet, playing a critical role in regulating global climate.',
    categories: ['physics']
  },
  {
    fact: 'A tsunami is a series of large ocean waves caused by underwater earthquakes or volcanic eruptions.',
    categories: ['physics']
  },
  {
    fact: 'Tides are caused by the gravitational pull of the moon and the sun on Earth\'s oceans.',
    categories: ['physics']
  },
  {
    fact: 'Ocean acidification, a result of increased carbon dioxide in the atmosphere, is harming marine life, especially coral reefs.',
    categories: ['chemistry']
  },
  {
    fact: 'The Sargasso Sea is a unique region in the North Atlantic Ocean known for its floating mats of Sargassum seaweed.',
    categories: ['biology']
  },
  {
    fact: 'Some species of fish, like the clownfish, have a mutualistic relationship with sea anemones, where both benefit from the association.',
    categories: ['biology']
  },
  {
    fact: 'Krill, tiny shrimp-like creatures, are a vital food source for many marine animals, including whales and penguins.',
    categories: ['biology']
  },
  {
    fact: 'Many species of deep-sea creatures, such as anglerfish, have bioluminescent adaptations to attract prey or mates in the dark ocean depths.',
    categories: ['biology']
  },
  {
    fact: 'The "Blue Hole" in Belize is a famous underwater sinkhole, a popular spot for diving and exploring unique marine ecosystems.',
    categories: ['geology']
  },
  {
    fact: 'The Bermuda Triangle, located in the western part of the North Atlantic Ocean, is known for its mysterious disappearances of ships and planes.',
    categories: ['geology']
  },
  {
    fact: 'The world\'s largest coral reef system, the Great Barrier Reef, is home to an incredibly diverse range of marine species.',
    categories: ['biology']
  },
  {
    fact: 'Shipwrecks in the ocean serve as artificial reefs, providing habitats for marine life and opportunities for diving enthusiasts.',
    categories: ['biology']
  },
  {
    fact: 'The Red Sea gets its name from the occasional blooms of red-colored algae, creating stunning underwater landscapes.',
    categories: ['biology']
  },
  {
    fact: 'The Gulf of Mexico is known for its frequent hurricanes, which can have significant impacts on marine ecosystems and coastal communities.',
    categories: ['geology']
  },
  {
    fact: 'Oceanographers use submersibles and remotely operated vehicles (ROVs) to explore the ocean\'s depths and study its unique environments.',
    categories: ['engineering']
  },
  {
    fact: 'The Marlin, a popular sport fish, can swim at speeds of up to 82 miles per hour (132 kilometers per hour).',
    categories: ['biology']
  },
  {
    fact: 'The Antarctic Circumpolar Current is the largest ocean current on Earth, flowing clockwise around Antarctica and connecting all major oceans.',
    categories: ['geology']
  },
  {
    fact: 'In the deep ocean, hydrothermal vents support thriving communities of extremophiles, organisms adapted to high-temperature and high-pressure conditions.',
    categories: ['biology']
  },
  {
    fact: 'The "Bloop" was a mysterious underwater sound recorded in the Pacific Ocean, initially thought to be an unknown sea creature but later attributed to icequakes.',
    categories: ['physics']
  },
  {
    fact: 'Some species of jellyfish are virtually immortal, capable of reverting to an earlier life stage when faced with unfavorable conditions.',
    categories: ['biology']
  },
  {
    fact: 'The ocean is a vast carbon sink, absorbing and storing a significant amount of carbon dioxide from the atmosphere.',
    categories: ['chemistry']
  },
  {
    fact: 'The Southern Ocean, surrounding Antarctica, is the youngest of the world\'s oceans and was recognized as a distinct ocean only in recent decades.',
    categories: ['geology']
  },
  {
    fact: 'Mangrove forests, found in coastal regions, provide important nurseries for many marine species and protect shorelines from erosion.',
    categories: ['biology']
  },
  {
    fact: 'Some marine animals, like sea otters, use tools such as rocks to crack open shellfish for food.',
    categories: ['biology']
  },
  {
    fact: 'The Bloop" was a mysterious underwater sound recorded in the Pacific Ocean, initially thought to be an unknown sea creature but later attributed to icequakes.',
    categories: ['physics']
  },
  {
    fact: 'The Mariana Trench is the deepest part of the world\'s oceans, reaching a depth of over 36,000 feet (10,972 meters).',
    categories: ['geology']
  },
  {
    fact: 'The longest mountain range on Earth is the Mid-Atlantic Ridge, which runs through the Atlantic Ocean and is more than 40,000 miles (64,000 kilometers) long.',
    categories: ['geology']
  },
  {
    fact: 'The Gulf Stream is a warm ocean current that influences the climate of the East Coast of the United States and Western Europe.',
    categories: ['physics']
  },
  {
    fact: 'Ocean currents help distribute heat around the planet, playing a critical role in regulating global climate.',
    categories: ['physics']
  },
  {
    fact: 'A tsunami is a series of large ocean waves caused by underwater earthquakes or volcanic eruptions.',
    categories: ['physics']
  },
  {
    fact: 'Tides are caused by the gravitational pull of the moon and the sun on Earth\'s oceans.',
    categories: ['physics']
  },
  {
    fact: 'Ocean acidification, a result of increased carbon dioxide in the atmosphere, is harming marine life, especially coral reefs.',
    categories: ['chemistry']
  },
  {
    fact: 'The Sargasso Sea is a unique region in the North Atlantic Ocean known for its floating mats of Sargassum seaweed.',
    categories: ['biology']
  },
  {
    fact: 'Some species of fish, like the clownfish, have a mutualistic relationship with sea anemones, where both benefit from the association.',
    categories: ['biology']
  },
  {
    fact: 'Krill, tiny shrimp-like creatures, are a vital food source for many marine animals, including whales and penguins.',
    categories: ['biology']
  },
  {
    fact: 'Many species of deep-sea creatures, such as anglerfish, have bioluminescent adaptations to attract prey or mates in the dark ocean depths.',
    categories: ['biology']
  },
  {
    fact: 'The "Blue Hole" in Belize is a famous underwater sinkhole, a popular spot for diving and exploring unique marine ecosystems.',
    categories: ['geology']
  },
  {
    fact: 'The Bermuda Triangle, located in the western part of the North Atlantic Ocean, is known for its mysterious disappearances of ships and planes.',
    categories: ['geology']
  },
  {
    fact: 'The world\'s largest coral reef system, the Great Barrier Reef, is home to an incredibly diverse range of marine species.',
    categories: ['biology']
  },
  {
    fact: 'Shipwrecks in the ocean serve as artificial reefs, providing habitats for marine life and opportunities for diving enthusiasts.',
    categories: ['biology']
  },
  {
    fact: 'The Red Sea gets its name from the occasional blooms of red-colored algae, creating stunning underwater landscapes.',
    categories: ['biology']
  },
  {
    fact: 'The Gulf of Mexico is known for its frequent hurricanes, which can have significant impacts on marine ecosystems and coastal communities.',
    categories: ['geology']
  },
  {
    fact: 'Oceanographers use submersibles and remotely operated vehicles (ROVs) to explore the ocean\'s depths and study its unique environments.',
    categories: ['engineering']
  },
  {
    fact: 'The Marlin, a popular sport fish, can swim at speeds of up to 82 miles per hour (132 kilometers per hour).',
    categories: ['biology']
  },
  {
    fact: 'The Antarctic Circumpolar Current is the largest ocean current on Earth, flowing clockwise around Antarctica and connecting all major oceans.',
    categories: ['geology']
  },
  {
    fact: 'In the deep ocean, hydrothermal vents support thriving communities of extremophiles, organisms adapted to high-temperature and high-pressure conditions.',
    categories: ['biology']
  },
  {
    fact: 'The "Bloop" was a mysterious underwater sound recorded in the Pacific Ocean, initially thought to be an unknown sea creature but later attributed to icequakes.',
    categories: ['physics']
  },
  {
    fact: 'Some species of jellyfish are virtually immortal, capable of reverting to an earlier life stage when faced with unfavorable conditions.',
    categories: ['biology']
  },
  {
    fact: 'The ocean is a vast carbon sink, absorbing and storing a significant amount of carbon dioxide from the atmosphere.',
    categories: ['chemistry']
  },
  {
    fact: 'The Southern Ocean, surrounding Antarctica, is the youngest of the world\'s oceans and was recognized as a distinct ocean only in recent decades.',
    categories: ['geology']
  },
  {
    fact: 'Mangrove forests, found in coastal regions, provide important nurseries for many marine species and protect shorelines from erosion.',
    categories: ['biology']
  },
  {
    fact: 'Some marine animals, like sea otters, use tools such as rocks to crack open shellfish for food.',
    categories: ['biology']
  },
  {
    fact: 'The Bloop" was a mysterious underwater sound recorded in the Pacific Ocean, initially thought to be an unknown sea creature but later attributed to icequakes.',
    categories: ['physics']
  },
  {
    fact: 'The Mariana Trench is the deepest part of the world\'s oceans, reaching a depth of over 36,000 feet (10,972 meters).',
    categories: ['geology']
  },
  {
    fact: 'The longest mountain range on Earth is the Mid-Atlantic Ridge, which runs through the Atlantic Ocean and is more than 40,000 miles (64,000 kilometers) long.',
    categories: ['geology']
  },
  {
    fact: 'The Gulf Stream is a warm ocean current that influences the climate of the East Coast of the United States and Western Europe.',
    categories: ['physics']
  },
  {
    fact: 'Ocean currents help distribute heat around the planet, playing a critical role in regulating global climate.',
    categories: ['physics']
  },
  {
    fact: 'A tsunami is a series of large ocean waves caused by underwater earthquakes or volcanic eruptions.',
    categories: ['physics']
  },
  {
    fact: 'Tides are caused by the gravitational pull of the moon and the sun on Earth\'s oceans.',
    categories: ['physics']
  },
  {
    fact: 'Ocean acidification, a result of increased carbon dioxide in the atmosphere, is harming marine life, especially coral reefs.',
    categories: ['chemistry']
  },
  {
    fact: 'The Sargasso Sea is a unique region in the North Atlantic Ocean known for its floating mats of Sargassum seaweed.',
    categories: ['biology']
  },
  {
    fact: 'Some species of fish, like the clownfish, have a mutualistic relationship with sea anemones, where both benefit from the association.',
    categories: ['biology']
  },
  {
    fact: 'Krill, tiny shrimp-like creatures, are a vital food source for many marine animals, including whales and penguins.',
    categories: ['biology']
  },
  {
    fact: 'Many species of deep-sea creatures, such as anglerfish, have bioluminescent adaptations to attract prey or mates in the dark ocean depths.',
    categories: ['biology']
  },
  {
    fact: 'The "Blue Hole" in Belize is a famous underwater sinkhole, a popular spot for diving and exploring unique marine ecosystems.',
    categories: ['geology']
  },
  {
    fact: 'The Bermuda Triangle, located in the western part of the North Atlantic Ocean, is known for its mysterious disappearances of ships and planes.',
    categories: ['geology']
  },
  {
    fact: 'The world\'s largest coral reef system, the Great Barrier Reef, is home to an incredibly diverse range of marine species.',
    categories: ['biology']
  },
  {
    fact: 'Shipwrecks in the ocean serve as artificial reefs, providing habitats for marine life and opportunities for diving enthusiasts.',
    categories: ['biology']
  },
  {
    fact: 'The Red Sea gets its name from the occasional blooms of red-colored algae, creating stunning underwater landscapes.',
    categories: ['biology']
  },
  {
    fact: 'The Gulf of Mexico is known for its frequent hurricanes, which can have significant impacts on marine ecosystems and coastal communities.',
    categories: ['geology']
  },
  {
    fact: 'Oceanographers use submersibles and remotely operated vehicles (ROVs) to explore the ocean\'s depths and study its unique environments.',
    categories: ['engineering']
  },
  {
    fact: 'The Marlin, a popular sport fish, can swim at speeds of up to 82 miles per hour (132 kilometers per hour).',
    categories: ['biology']
  },
  {
    fact: 'The Antarctic Circumpolar Current is the largest ocean current on Earth, flowing clockwise around Antarctica and connecting all major oceans.',
    categories: ['geology']
  },
  {
    fact: 'In the deep ocean, hydrothermal vents support thriving communities of extremophiles, organisms adapted to high-temperature and high-pressure conditions.',
    categories: ['biology']
  },
  {
    fact: 'The "Bloop" was a mysterious underwater sound recorded in the Pacific Ocean, initially thought to be an unknown sea creature but later attributed to icequakes.',
    categories: ['physics']
  },
  {
    fact: 'Some species of jellyfish are virtually immortal, capable of reverting to an earlier life stage when faced with unfavorable conditions.',
    categories: ['biology']
  },
  {
    fact: 'The ocean is a vast carbon sink, absorbing and storing a significant amount of carbon dioxide from the atmosphere.',
    categories: ['chemistry']
  },
  {
    fact: 'The Southern Ocean, surrounding Antarctica, is the youngest of the world\'s oceans and was recognized as a distinct ocean only in recent decades.',
    categories: ['geology']
  },
  {
    fact: 'Mangrove forests, found in coastal regions, provide important nurseries for many marine species and protect shorelines from erosion.',
    categories: ['biology']
  },
  {
    fact: 'Some marine animals, like sea otters, use tools such as rocks to crack open shellfish for food.',
    categories: ['biology']
  }
];

