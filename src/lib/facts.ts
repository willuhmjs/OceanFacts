type Category = 'chemistry' | 'biology' | 'geology' | 'physics' | 'engineering';

interface Fact {
	Fact: string;
	Categories: Category[] | null;
}


const facts: Fact[] = [
	{
		Fact: "71% of Earth's surface is covered by water; 97% of this water is ocean water.",
		Categories: ['chemistry']
	},
	{
		Fact: 'Shark skin is made of teeth (dermal denticles).',
		Categories: ['biology']
	},
	{
		Fact: 'The ocean is technically a bowl of soup.',
		Categories: ['chemistry']
	},
	{
		Fact: 'Large baleen whales typically need 3 individuals involved to successfully reproduce.',
		Categories: ['biology']
	},
	{
		Fact: 'Pistol shrimp punches generate more heat than the sun.',
		Categories: ['biology']
	},
	{
		Fact: 'Manatees control their buoyancy through farting.',
		Categories: ['biology']
	},
	{
		Fact: 'There are lakes at the bottom of the ocean (brine).',
		Categories: ['chemistry']
	},
	{
		Fact: 'Glass sponges can live over 18,000 years.',
		Categories: ['biology']
	},
	{
		Fact: 'Turritopsis jellyfish are immortal.',
		Categories: ['biology']
	},
	{
		Fact: 'Many types of reef fish can change sex at will.',
		Categories: ['biology']
	},
	{
		Fact: 'The average ocean depth is is 3800 meters or 2.4 miles.',
		Categories: ['geology']
	},
	{
		Fact: 'The Pacific Ocean was named by Portuguese navigator Ferdinand Magellan.',
		Categories: null
	},
	{
		Fact: 'The original name for the Pacific Ocean is Tepre Pacificum, which means "peaceful sea" in English.',
		Categories: null
	},
	{
		Fact: 'The Atlantic Ocean was named after Atlas from Greek mythology.',
		Categories: ['geology']
	},
	{
		Fact: 'The Arctic Ocean is the shallowest and smallest ocean.',
		Categories: ['geology']
	},
	{
		Fact: 'The Chesapeake Bay is the largest estuary in the United States and one of the most productive bodies of water in the world.',
		Categories: ['biology']
	},
	{
		Fact: 'Atoll reefs are circular reefs with a lagoon in the center.',
		Categories: ['geology']
	},
	{
		Fact: 'Fringing reefs are shallow reefs that grow from the shore towards the ocean.',
		Categories: ['geology']
	},
	{
		Fact: 'Salt makes up 3.5% of all ocean water.',
		Categories: ['chemistry']
	},
	{
		Fact: "At least half of Earth's oxygen comes from the ocean.",
		Categories: ['chemistry']
	},
	{
		Fact: "The scientific name for sea sponges, Phylum Porifera, translates to 'pore bearers.'",
		Categories: ['biology']
	},
	{
		Fact: 'Sponges can reproduce asexually through budding or sexually through producing gametes.',
		Categories: ['biology']
	},
	{
		Fact: "The lion's mane jellyfish is the largest jellyfish species; it can grow to be 8 feet wide and 120 feet long.",
		Categories: ['biology']
	},
	{
		Fact: 'There are up to 15,000 species of roundworms.',
		Categories: ['biology']
	},
	{
		Fact: 'Octopi are a type of mollusk.',
		Categories: ['biology']
	},
	{
		Fact: 'The blue sea dragon slug steals toxins from other animal species.',
		Categories: ['biology']
	},
	{
		Fact: 'Octopi are the most intelligent invertebrates.',
		Categories: ['biology']
	},
	{
		Fact: 'Squids are the largest invertebrates.',
		Categories: ['biology']
	},
	{
		Fact: 'Cuttlefish have an internal shell called a cuttlebone.',
		Categories: ['biology']
	},
	{
		Fact: 'Nautilus shells are filled with gas for buoyancy.',
		Categories: ['biology']
	},
	{
		Fact: 'There are over 800,000 species of arthropods.',
		Categories: ['biology']
	},
	{
		Fact: 'Lamprey and hagfish are the only living jawless fish species.',
		Categories: ['biology']
	},
	{
		Fact: "A shark's liver is filled with oil.",
		Categories: ['biology']
	},
	{
		Fact: 'Sharks only attack humans when they mistake them for fish.',
		Categories: ['biology']
	},
	{
		Fact: 'Shark-finning and gill nets kill up to 250 million sharks per year.',
		Categories: ['biology']
	},
	{
		Fact: 'Top-to-bottom flat fish have a depressiform body shape.',
		Categories: ['biology']
	},
	{
		Fact: 'Side-to-side flat fish have a compressiform body shape.',
		Categories: ['biology']
	},
	{
		Fact: 'Most sharks have a heterocercal tail shape.',
		Categories: ['biology']
	},
	{
		Fact: 'Most sharks give birth to live young.',
		Categories: ['biology']
	},
	{
		Fact: 'Most marine reptiles are restricted to warmer waters in order to maintain body temperature.',
		Categories: ['biology']
	},
	{
		Fact: 'Sea turtle shells are made up of plates called scutes.',
		Categories: ['biology']
	},
	{
		Fact: 'Male sea turtles have long tails, while female sea turtles have short tails.',
		Categories: ['biology']
	},
	{
		Fact: 'Leatherback sea turtles can be up to 11 feet long and weigh 4000 pounds.',
		Categories: ['biology']
	},
	{
		Fact: "Kemp's ridley sea turtles are the smallest and most endangered sea turtles.",
		Categories: ['biology']
	},
	{
		Fact: 'Arribadas are the synchronized and large scale nesting by some sea turtles species at the shore.',
		Categories: ['biology']
	},
	{
		Fact: 'Sea turtles take between 10 and 50 years to reach sexual maturity.',
		Categories: ['biology']
	},
	{
		Fact: "Sea turtle sex is determined by the environment's temperature during development",
		Categories: ['biology']
	},
	{
		Fact: 'Marine snow is a shower of organic material that falls from the upper waters towards the deep ocean.',
		Categories: ['biology']
	},
	{
		Fact: 'Animals are considered marine animals if most of their food comes from the ocean.',
		Categories: ['biology']
	},
	{
		Fact: 'Birds use special salt glands to remove salt from the ocean water they drink.',
		Categories: ['biology']
	},
	{
		Fact: 'Whales have hair.',
		Categories: ['biology']
	},
	{
		Fact: 'Baleen whales have two blowholes.',
		Categories: ['biology']
	},
	{
		Fact: "Dolphin's echolocation bounces off the swim bladder of prey.",
		Categories: ['biology']
	},
	{
		Fact: 'Spyhopping is when a whale pokes its head out of the water and turns, usually to look around.',
		Categories: ['biology']
	},
	{
		Fact: "Lobtailing is when whales stick their tail out of the water and slap it against the water's surface.",
		Categories: ['biology']
	},
	{
		Fact: 'Whales sleep about 8 hours per day.',
		Categories: ['biology']
	},
	{
		Fact: 'Whales sleep with one-half their brain awake; this is called unihemispheric sleep.',
		Categories: ['biology']
	},
	{
		Fact: 'Most whales travel in groups called pods.',
		Categories: ['biology']
	},
	{
		Fact: 'Whale calves are typically born tail first.',
		Categories: ['biology']
	},
	{
		Fact: 'Whales can create remixes of their songs using songs from other whales.',
		Categories: ['biology']
	},
	{
		Fact: 'Manatees and Dugongs are a close relative of the elephant.',
		Categories: ['biology']
	},
	{
		Fact: 'Lamprey are parasitic fish that attach to other fish and suck their fluids like vampires.',
		Categories: ['biology']
	},
	{
		Fact: 'The Polynesians were the first to mount long-distance, open-ocean expeditions in specialized catamarans.',
		Categories: null
	},
	{
		Fact: 'The Challenger expedition (1858) was the first ocean expedition organized and funded for scientific purposes.',
		Categories: ['engineering']
	},
	{
		Fact: 'The Bathysphere was the first and most dangerous submarine ever created; it was lowered into the water via a single cable.',
		Categories: ['engineering']
	},
	{
		Fact: 'The Alvin submarine costs $30,000 dollars per day to operate.',
		Categories: ['engineering']
	},
	{
		Fact: 'The Alvin submarine aided in finding the sunken Titanic.',
		Categories: ['engineering']
	},
	{
		Fact: 'The Alvin submarine is equipped with 2 manipular arms, 5 view ports, and life support for 3 people.',
		Categories: ['engineering']
	},
	{
		Fact: "The Aquarius is the world's only underwater research lab; it is the size of a bus.",
		Categories: ['engineering']
	},
	{
		Fact: 'The blobfish only looks like a blob when brought up from the bottom of the ocean; this is due to an immense pressure difference between the two environments.',
		Categories: ['biology']
	},
	{
		Fact: 'The Woods Hole Oceanographic Institution is the largest private non-profit oceanographic institution in the world.',
		Categories: null
	},
	{
		Fact: 'The National Oceanic and Atmospheric Administration is an American federal agency focused on the oceans and the atmosphere.',
		Categories: null
	},
	{
		Fact: 'The National Oceanic and Atmospheric Administration is an American federal agency responsible for daily weather forecasts.',
		Categories: null
	},
	{
		Fact: 'Some submarines can be drones controlled by AI (autonomous underwater vehicles.)',
		Categories: ['engineering']
	},
	{
		Fact: 'SCUBA stands for Self Contained Underwater Breathing Apparatus.',
		Categories: ['engineering']
	},
	{
		Fact: 'Hydrometers are tools used to measure water salinity.',
		Categories: ['chemistry', 'engineering']
	},
	{
		Fact: 'Hydrophones are microphones used for recording sound measurements in the water.',
		Categories: ['engineering']
	},
	{
		Fact: 'Neuston nets are used to sample organisms near the surface of the water.',
		Categories: ['biology', 'engineering']
	},
	{
		Fact: 'Seine nets are flat fence-like nets used to encircle a school of fish.',
		Categories: ['biology', 'engineering']
	},
	{
		Fact: 'A Secchi disk is used to estimate the transparency of seawater.',
		Categories: ['chemistry', 'engineering']
	},
	{
		Fact: 'The Chesapeake Bay watershed covers 64,000 square miles or 165,759 square kilometers.',
		Categories: null
	},
	{
		Fact: 'The average depth of the Chesapeake Bay is 21 feet.',
		Categories: ['geology']
	},
	{
		Fact: '1.3 million acres of coastal habitats in the United States are protected by the National Estuarine Research Reserve System.',
		Categories: ['biology']
	},
	{
		Fact: 'The Benthic zone is the bottom zone of a body of water.',
		Categories: ['geology', 'biology']
	},
	{
		Fact: 'Harmful algae blooms kill fish en masse and result in large piles of dead fish on the shore.',
		Categories: ['biology']
	},
	{
		Fact: 'The Coriolis effect is not responsible for the direction toilet bowls flush.',
		Categories: ['physics']
	},
	{
		Fact: 'Most tsunamis occur due to earthquakes on convergent plate boundaries.',
		Categories: ['physics']
	},
	{
		Fact: '6 inches of fast moving water can knock an adult off their feet.',
		Categories: ['physics']
	},
	{
		Fact: '12 inches of water can carry away a small car.',
		Categories: ['physics']
	},
	{
		Fact: 'Abyssal plains cover 70% of the ocean floor.',
		Categories: ['geology']
	},
	{
		Fact: 'Sonobuoys are buoys designed to record underwater ocean sounds and send back real-time recordings.',
		Categories: ['engineering']
	},
	{
		Fact: 'Shark finning is illegal in the United States.',
		Categories: ['biology']
	},
	{
		Fact: 'All 6 species of sea turtles in the United States are protected under the Endangered Species Act of 1973.',
		Categories: ['biology']
	},
	{
		Fact: "90% of an iceberg is submerged below the water's surface.",
		Categories: null
	},
	{
		Fact: 'Red and yellow light is unseeable below 10 meters.',
		Categories: ['chemistry']
	},
	{
		Fact: 'The average depth of the ocean is 12,100 feet or 3,700 meters.',
		Categories: ['geology']
	},
	{
		Fact: '5% of the ocean floor has been mapped in detail.',
		Categories: ['geology', 'engineering']
	},
	{
		Fact: 'The great barrier reef can be seen from the moon.',
		Categories: ['geology']
	},
	{
		Fact: 'The largest recorded blue whale was 33 meters or 108 feet long.',
		Categories: ['biology']
	},
	{
		Fact: '20% of the ocean floor is covered by coral reefs.',
		Categories: ['biology']
	},
	{
		Fact: 'Hirohito of Japan was an avid marine biologist.',
		Categories: null
	},
	{
		Fact: 'Bigfin squids are deep-sea squids with long thin arms and an alien-like appearance.',
		Categories: ['biology']
	},
	{
		Fact: 'The temperature in the Marianas Trench is between -1 and 4 degrees Celsius.',
		Categories: ['physics']
	},
	{
		Fact: '14% of consumed protein comes from fish.',
		Categories: ['biology']
	},
	{
		Fact: 'Dissolved gold can be found in the ocean in small amounts.',
		Categories: ['chemistry']
	},
	{
		Fact: '15% of the oceans are covered by sea ice.',
		Categories: ['physics']
	},
	{
		Fact: 'Jellyfish may lay up to 45,000 eggs daily.',
		Categories: ['biology']
	},
	{
		Fact: 'Being stung by Portuguese Man-of-War feels like being struck by lightning.',
		Categories: ['biology']
	},
	{
		Fact: 'Seahorses can see in two directions at the same time.',
		Categories: ['biology']
	},
	{
		Fact: 'Male seahorses get pregnant instead of the females.',
		Categories: ['biology']
	},
	{
		Fact: 'Seahorses do not have stomachs.',
		Categories: ['biology']
	},
	{
		Fact: 'Seahorses eat between 30 to 50 times per day.',
		Categories: ['biology']
	},
	{
		Fact: 'Some seahorse species can change color at will.',
		Categories: ['biology']
	},
	{
		Fact: 'Shark skin feels like sandpaper.',
		Categories: ['biology']
	},
	{
		Fact: 'Great white sharks use body language to communicate with one another.',
		Categories: ['biology']
	},
	{
		Fact: 'Most deep sea fish cannot see red light.',
		Categories: ['biology']
	},
	{
		Fact: 'Some fish communicate with each other by rubbing, grinding, and snapping their bones.',
		Categories: ['biology']
	},
	{
		Fact: 'Primary coasts are young coasts shaped by land-based processes.',
		Categories: ['geology']
	},
	{
		Fact: 'The volcanic islands of Hawaii are primary coasts.',
		Categories: ['geology']
	},
	{
		Fact: 'The Great Barrier Reef is a secondary coast.',
		Categories: ['geology']
	}
];
	

export default facts