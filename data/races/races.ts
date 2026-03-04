export type RaceListItem = {
  id: string;
  name: string;
  image: string;
};

export type RaceFeature = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type SubRace = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type RaceDetail = {
  id: string;
  name: string;
  description: string;
  features: RaceFeature[];
  subraces?: SubRace[];
};

export const racesList: RaceListItem[] = [
  {
    id: "elf",
    name: "Elf",
    image: "/icons/races/elf.webp",
  },
  {
    id: "tiefling",
    name: "Tiefling",
    image: "/icons/races/tiefling.webp",
  },
  {
    id: "drow",
    name: "Drow",
    image: "/icons/races/drow.webp",
  },
  {
    id: "human",
    name: "Human",
    image: "/icons/races/human.webp",
  },
  {
    id: "githyanki",
    name: "Githyanki",
    image: "/icons/races/githyanki.webp",
  },
  {
    id: "dwarf",
    name: "Dwarf",
    image: "/icons/races/dwarf.webp",
  },
  {
    id: "half-elf",
    name: "Half-Elf",
    image: "/icons/races/half-elf.webp",
  },
  {
    id: "halfling",
    name: "Halfling",
    image: "/icons/races/halfling.webp",
  },
  {
    id: "gnome",
    name: "Gnome",
    image: "/icons/races/gnome.webp",
  },
  {
    id: "half-orc",
    name: "Half-Orc",
    image: "/icons/races/half-orc.webp",
  },
  {
    id: "dragonborn",
    name: "Dragonborn",
    image: "/icons/races/dragonborn.webp",
  },
];

export const racesDetails: Record<string, RaceDetail> = {
  elf: {
    id: "elf",
    name: "Elf",
    description:
      "With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "elven-weapon-training",
        title: "Elven Weapon Training",
        description:
          "Elven Weapon Training - You have Proficiency with the Longsword, Shortsword, Shortbow, and Longbow.",
        image:
          "/icons/races/features/PassiveFeature_Elf_WeaponTraining-min.webp",
      },
      {
        id: "darkvision",
        title: "Darkvision",
        description: "Darkvision - You can see in the dark up to 12m.",
        image: "/icons/races/features/PassiveFeature_Darkvision-min.webp",
      },
      {
        id: "fey-ancestry",
        title: "Fey Ancestry",
        description:
          "Fey Ancestry - You have Advantage on Saving Throws against being Charmed, and magic can't put you to sleep.",
        image: "/icons/races/features/PassiveFeature_FeyAncestry-min.webp",
      },
    ],
    subraces: [
      {
        id: "high-elf",
        title: "High Elf",
        description:
          "Heirs of the mystical Feywild, high elves value magic in all its forms, and even those who do not study spellcraft can manipulate the Weave.",
        image: "/icons/races/subraces/elf_high.webp",
      },
      {
        id: "wood-elf",
        title: "Wood Elf",
        description:
          "These elves spend their reclusive lives in Faerûn's forests. Decades of training in archery and camouflage are enhanced by an otherworldly swiftness.",
        image: "/icons/races/subraces/elf_wood.webp",
      },
    ],
  },

  tiefling: {
    id: "tiefling",
    name: "Tiefling",
    description:
      "Descended from devils of the Nine Hells, tieflings face constant suspicion in Faerûn. Thankfully, their arcane abilities make them natural survivors.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "darkvision",
        title: "Darkvision",
        description: "Darkvision - You can see in the dark up to 12m.",
        image: "/icons/races/features/PassiveFeature_Darkvision-min.webp",
      },
      {
        id: "hellish-resistance",
        title: "Hellish Resistance",
        description:
          "Hellish Resistance - You have Resistance to Fire damage, taking only half damage from it.",
        image:
          "/icons/races/features/PassiveFeature_Tiefling_HellishResistance-min.webp",
      },
    ],
    subraces: [
      {
        id: "asmodeus-tiefling",
        title: "Asmodeus Tiefling",
        description:
          "Bound to Nessus, the deepest layer of the Hells, these tieflings inherited the ability to wield fire and darkness from the archdevil Asmodeus' infernal bloodline.",
        image: "/icons/races/subraces/tiefling_asmodeus.webp",
      },
      {
        id: "mephistopheles-tiefling",
        title: "Mephistopheles Tiefling",
        description:
          "Descended from the archdevil Mephistopheles, these tieflings are gifted with a particular affinity for arcane magic.",
        image: "/icons/races/subraces/tiefling_mephostopheles.webp",
      },
      {
        id: "zariel-tiefling",
        title: "Zariel Tiefling",
        description:
          "Tieflings from Zariel's bloodline are empowered with martial strength, and can channel searing flame to punish their enemies.",
        image: "/icons/races/subraces/tiefling_zariel.webp",
      },
    ],
  },

  drow: {
    id: "drow",
    name: "Drow",
    description:
      "Driven to the Underdark, most drow have adopted a ruthless pragmatism. While the Lolth-sworn delight in the goddess' evil tenets, the Seldarine reject Her attempt to overthrow the leader of the elven pantheon.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "drow-weapon-training",
        title: "Drow Weapon Training",
        description:
          "Drow Weapon Training - You have Proficiency with the Rapier, Shortsword, and Hand Crossbow.",
        image:
          "/icons/races/features/PassiveFeature_Drow_DrowWeaponTraining-min.webp",
      },
      {
        id: "superior-darkvision",
        title: "Superior Darkvision",
        description: "Superior Darkvision - You can see in the dark up to 24m.",
        image:
          "/icons/races/features/PassiveFeature_SuperiorDarkvision-min.webp",
      },
      {
        id: "fey-ancestry",
        title: "Fey Ancestry",
        description:
          "Fey Ancestry - You have Advantage on Saving Throws against being Charmed, and magic can't put you to sleep.",
        image: "/icons/races/features/PassiveFeature_FeyAncestry-min.webp",
      },
    ],
    subraces: [
      {
        id: "lolth-sworn-drow",
        title: "Lolth-Sworn Drow",
        description:
          "Raised by Lolth's cult in the city of Menzoberranzan, these drow embody the virtues of their corrupt and merciless goddess. Lolth marks Her followers with bright red eyes so those in the Underdark will learn to fear them on sight.",
        image: "/icons/races/subraces/drow_lolth.webp",
      },
      {
        id: "seldarine-drow",
        title: "Seldarine Drow",
        description:
          "Seldarine drow can be found seeking allies from all over Faerûn, aiming to settle their conflict with Lolth – and each other – by any means necessary.",
        image: "/icons/races/subraces/drow_seldarine.webp",
      },
    ],
  },

  human: {
    id: "human",
    name: "Human",
    description:
      "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "civil-militia",
        title: "Civil Militia",
        description:
          "Civil Militia - You have Weapon Proficiency with Spears, Pikes, Halberds, and Glaives; and Armour Proficiency with Light Armour and Shields.",
        image: "/icons/races/features/PassiveFeature_CivilMilitia-min.webp",
      },
      {
        id: "human-versatility",
        title: "Human Versatility",
        description:
          "Human Versatility - You can select an additional Skill to be Proficient in. Your carrying capacity is also increased by a quarter.",
        image: "/icons/races/features/PassiveFeature_HumanVersatility-min.webp",
      },
    ],
  },

  githyanki: {
    id: "githyanki",
    name: "Githyanki",
    description:
      "With a ruthlessness borne from mind flayer enslavement, githyanki ride the Astral Sea atop red dragons, bringing their silver swords and psionic might to bear against any trace of the illithid menace.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "martial-prodigy",
        title: "Martial Prodigy",
        description:
          "Martial Prodigy - You have Weapon Proficiency with the Shortsword, Longsword, and Greatsword; and Armour Proficiency with Light and Medium Armour.",
        image:
          "/icons/races/features/PassiveFeature_Gith_MartialProdigy-min.webp",
      },
    ],
  },

  dwarf: {
    id: "dwarf",
    name: "Dwarf",
    description:
      "As durable and unyielding as their homes of stone, dwarves are some of the finest warriors, miners, and smiths of Faerûn.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "dwarven-combat-training",
        title: "Dwarven Combat Training",
        description:
          "Dwarven Combat Training - is a passive feature that grants Dwarves Proficiency with the Battleaxe, Handaxe, Light Hammer, and Warhammers.",
        image:
          "/icons/races/features/PassiveFeature_Dwarf_DwarvenCombatTraining-min.webp",
      },
      {
        id: "darkvision",
        title: "Darkvision",
        description: "Darkvision - You can see in the dark up to 12m.",
        image: "/icons/races/features/PassiveFeature_Darkvision-min.webp",
      },
      {
        id: "dwarven-resilience",
        title: "Dwarven Resilience",
        description:
          "Dwarven Resilience -  is a passive feature that grants Dwarves Proficiency with the Battleaxe, Handaxe, Light Hammer, and Warhammers.",
        image:
          "/icons/races/features/PassiveFeature_Duergar_DwarvenResilience-min.webp",
      },
    ],
    subraces: [
      {
        id: "gold-dwarf",
        title: "Gold Dwarf",
        description:
          "These dwarves are known for their confidence and keen intuition. The culture of their Deep Kingdom values family, ritual, and fine craftsmanship.",
        image: "/icons/races/subraces/dwarf_hill.webp",
      },
      {
        id: "shield-dwarf",
        title: "Shield Dwarf",
        description:
          "Great losses in ancient wars against goblins and orcs have led these dwarves to adopt a cynical mindset, but they will endure anything to restore their ancestral homelands.",
        image: "/icons/races/subraces/dwarf_mountain.webp",
      },
      {
        id: "duergar",
        title: "Duergar",
        description:
          "Once enslaved by the eldritch mind flayers, duergar adapted to freedom with harsh practicality. Their cold demeanours and gift of stealth are well-known throughout the Underdark.",
        image: "/icons/races/subraces/dwarf_duergar.webp",
      },
    ],
  },

  "half-elf": {
    id: "half-elf",
    name: "Half-Elf",
    description:
      "Curious, ambitious, and versatile, half-elves are welcome everywhere, but struggle without a community to call their own.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "civil-militia",
        title: "Civil Militia",
        description:
          "Civil Militia - You have Weapon Proficiency with Spears, Pikes, Halberds, and Glaives; and Armour Proficiency with Light Armour and Shields.",
        image: "/icons/races/features/PassiveFeature_CivilMilitia-min.webp",
      },
      {
        id: "darkvision",
        title: "Darkvision",
        description: "Darkvision - You can see in the dark up to 12m.",
        image: "/icons/races/features/PassiveFeature_Darkvision-min.webp",
      },
      {
        id: "fey-ancestry",
        title: "Fey Ancestry",
        description:
          "Fey Ancestry - You have Advantage on Saving Throws against being Charmed, and magic can't put you to sleep.",
        image: "/icons/races/features/PassiveFeature_FeyAncestry-min.webp",
      },
    ],
    subraces: [
      {
        id: "high-half-elf",
        title: "High Half-Elf",
        description:
          "A touch of the Feywild remains in half-elves with this bloodline, and even those untrained in magic possess a hint of wild power.",
        image: "/icons/races/subraces/high-half-elf.webp",
      },
      {
        id: "wood-half-elf",
        title: "Wood Half-Elf",
        description:
          "Like their wood elf parent, these half-elves have a quickened stride and an eye for stealth. Yet many break away from isolation in Faerûn's forests to explore the rest of the Realms.",
        image: "/icons/races/subraces/half-elf_wood.webp",
      },
      {
        id: "drow-half-elf",
        title: "Drow Half-Elf",
        description:
          "Most half-drow result from liaisons between Seldarine drow and surfacers. While half-drow inherited a few magical gifts, they aren't usually raised in the Underdark.",
        image: "/icons/races/subraces/half-elf_drow.webp",
      },
    ],
  },

  halfling: {
    id: "halfling",
    name: "Halfling",
    description:
      "Small yet capable, halflings prefer the comforts of home and hearth – but their natural luck and dexterity makes them fine adventurers.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "lucky",
        title: "Lucky",
        description:
          "Lucky - When you roll a 1 for an Attack Roll, Ability Check, or Saving Throw, you can reroll the die and must use the new roll result.",
        image: "/icons/races/features/PassiveFeature_Halfling_Lucky-min.webp",
      },
      {
        id: "brave",
        title: "Brave",
        description:
          "Brave - You have Advantage on Saving Throws against being Frightened.",
        image: "/icons/races/features/PassiveFeature_Halfling_Brave-min.webp",
      },
    ],
    subraces: [
      {
        id: "lightfoot-halfling",
        title: "Lightfoot Halfling",
        description:
          "Stealthy but social, these halflings travel all over Faerûn to make names for themselves.",
        image: "/icons/races/subraces/halfling_lightfoot.webp",
      },
      {
        id: "strongheart-halfling",
        title: "Strongheart Halfling",
        description:
          "Legend has it that dwarven blood gave stronghearts their hardiness. Resistant to poison and wellsprings of endurance, these halflings easily hold their own",
        image: "/icons/races/subraces/halffling_strongheart.webp",
      },
    ],
  },

  gnome: {
    id: "gnome",
    name: "Gnome",
    description:
      "Small, clever, and energetic, gnomes use their long lives to explore Faerûn's brightest corners and darkest depths.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "gnome-cunning",
        title: "Gnome Cunning",
        description:
          "Gnome Cunning - You have Advantage on Intelligence, Wisdom, and Charisma Saving Throws.",
        image: "/icons/races/features/PassiveFeature_Gnome_Cunning-min.webp",
      },
    ],
    subraces: [
      {
        id: "forest-gnome",
        title: "Forest Gnome",
        description:
          "Even smaller than their cousins and twice as reclusive, forest gnomes are a rare sight in Faerûn. They master magic and craftsmanship in their distant, idyllic groves.",
        image: "/icons/races/subraces/gnome_forest.webp",
      },
      {
        id: "deep-gnome",
        title: "Deep Gnome",
        description:
          "More guarded than their surface cousins, deep gnomes survive in the Underdark with darkvision and skilful stealth.",
        image: "/icons/races/subraces/gnome_deep.webp",
      },
      {
        id: "rock-gnome",
        title: "Rock Gnome",
        description:
          "The most commonly seen gnomes on Faerûn's surface, rock gnomes are named as such for their hardiness and affinity for metal.",
        image: "/icons/races/subraces/gnome_rock.webp",
      },
    ],
  },

  "half-orc": {
    id: "half-orc",
    name: "Half-Orc",
    description:
      "Creatures of intense emotion, half-orcs are more inclined to act than contemplate – whether the rage burning their bodies compels them to fight, or the love filling their hearts inspires acts of incredible kindness.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
      {
        id: "darkvision",
        title: "Darkvision",
        description: "Darkvision - You can see in the dark up to 12m.",
        image: "/icons/races/features/PassiveFeature_Darkvision-min.webp",
      },
      {
        id: "relentless-endurance",
        title: "Relentless Endurance",
        description:
          "Relentless Endurance - If you reach 0 hit points, you regain 1 hit point instead of becoming Downed.",
        image:
          "/icons/races/features/PassiveFeature_RelentlessEndurance-min.webp",
      },
      {
        id: "savage-attacks",
        title: "Savage Attacks",
        description:
          "Savage Attacks - When you land a Critical Hit with a melee weapon attack, you deal an extra die of weapon damage.",
        image: "/icons/races/features/PassiveFeature_SavageAttacks-min.webp",
      },
    ],
  },

  dragonborn: {
    id: "dragonborn",
    name: "Dragonborn",
    description:
      "A proud race that values clan and skills above all else. Once enslaved by dragons, they strive to be self-sufficient, not wanting to be beholden to anyone, not even the gods.",
    features: [
      {
        id: "base-racial-speed",
        title: "Base Racial Speed",
        description: "Base Racial Speed - You can move 9m per turn.",
        image: "/icons/races/features/speed.webp",
      },
    ],
    subraces: [
      {
        id: "black-dragonborn",
        title: "Black Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons.",
        image: "/icons/races/subraces/dragonborn_black.webp",
      },
      {
        id: "blue-dragonborn",
        title: "Blue Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the deep sapphire scales and charged, crackling breath of blue dragons.",
        image: "/icons/races/subraces/dragonborn_blue.webp",
      },
      {
        id: "brass-dragonborn",
        title: "Brass Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the burnished ochre hue and flickering, fiery breath of brass dragons.",
        image: "/icons/races/subraces/dragonborn_brass.webp",
      },
      {
        id: "bronze-dragonborn",
        title: "Bronze Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the shining sepia scales and sparking breath of bronze dragons.",
        image: "/icons/races/subraces/dragonborn_bronze.webp",
      },
      {
        id: "copper-dragonborn",
        title: "Copper Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the pink-gold colouration and corrosive breath of copper dragons.",
        image: "/icons/races/subraces/dragonborn_copper.webp",
      },
      {
        id: "gold-dragonborn",
        title: "Gold Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the resplendent shine and roiling, blazing breath of gold dragons.",
        image: "/icons/races/subraces/dragonborn_gold.webp",
      },
      {
        id: "green-dragonborn",
        title: "Green Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the brilliant emerald aspect and stinking, putrid breath of green dragons.",
        image: "/icons/races/subraces/dragonborn_green.webp",
      },
      {
        id: "red-dragonborn",
        title: "Red Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the bright scarlet likeness and roiling, burning breath of red dragons.",
        image: "/icons/races/subraces/dragonborn_red.webp",
      },
      {
        id: "silver-dragonborn",
        title: "Silver Dragonborn",
        description:
          "Despite no ancestral links to the mighty creatures, these dragonborn share the glinting shine and scorching cold breath of silver dragons.",
        image: "/icons/races/subraces/dragonborn_silver.webp",
      },
    ],
  },
};
