type Category = 'chemistry' | 'biology' | 'geology' | 'physics' | 'engineering';

export interface Fact {
  fact: string;
  categories: Category[] | null;
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
    categories: null
  },
  {
    fact: 'The original name for the Pacific Ocean is Tepre Pacificum, which means "peaceful sea" in English.',
    categories: null
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
    categories: null
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
    categories: null
  },
  {
    fact: 'The National Oceanic and Atmospheric Administration is an American federal agency focused on the oceans and the atmosphere.',
    categories: null
  },
  {
    fact: 'The National Oceanic and Atmospheric Administration is an American federal agency responsible for daily weather forecasts.',
    categories: null
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
    categories: null
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
    categories: null
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
    categories: null
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
  }
];
