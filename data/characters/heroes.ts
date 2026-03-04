export type HeroesProps = {
  avatar: string;
  title: string;
  name: string;
  textMain: string;

  textSecondary?: string;
  classIcon?: string;
  classTitle?: string;

  raceIcon?: string;
  raceTitle?: string;

  subRaceIcon?: string;
  subRaceTitle?: string;

  skillProficiencies?: string[];
  languages?: string[];
  background?: string[];

  heroBgImage: string;
  heroBgImageMobile: string;
  heroImage: string;
  heroImageMobile: string;
};

export const heroes = [
  {
    avatar: "/icons/heroes/astarion-avatar.webp",
    title: "Vampire spawn",
    name: "Astarion",
    textMain:
      "Astarion prowled the night as a vampire spawn for centuries, forced to follow the orders of his sadistic master, Cazador: seduce every fool with a pulse, and lure them back to Cazador's lair. Free for now, Astarion will do anything to keep his life in the light. He can see but one way to ensure his liberty for good: become many times more powerful than his old abuser could ever dream of being.",
    textSecondary:
      "His body is forever tainted by the intricate, patterned scarring Cazador carved upon his back, and the elder vampire seems set on sending out waves of hunters seeking to capture his lost spawn.",
    classIcon: "/icons/classes/rogue.webp",
    classTitle: "Rogue",
    raceIcon: "/icons/races/elf.webp",
    raceTitle: "Elf",
    subRaceIcon: "/icons/races/subraces/elf_high.webp",
    subRaceTitle: "High Elf",
    skillProficiencies: [
      "Acrobatics",
      "Sleight of Hand",
      "Stealth",
      "Perception",
      "Deception",
      "Performance",
      "Persuasion",
    ],
    languages: ["Common", "Elvish", "Abyssal", "Orcish", "Thieves' Cant"],
    background: ["Charlatan"],
    heroBgImageMobile: "/images/heroes/astarion/bg-hero-astarion-mobile.webp",
    heroBgImage: "/images/heroes/astarion/bg-hero-astarion.webp",
    heroImageMobile: "/images/heroes/astarion/hero-astarion-mobile.webp",
    heroImage: "/images/heroes/astarion/hero-astarion.webp",
  },
  {
    avatar: "/icons/heroes/gale-avatar.webp",
    title: "Wizard Prodigy",
    name: "Gale",
    textMain:
      "What’s a god to a world-class wizard? Gale was once a formidable archmage in Waterdeep, but pushed his relationship with the goddess Mystra too far. Not satisfied with being her lover, Gale tried to impress her further and meddled with powers beyond even his abilities, his attempt leaving him cursed with an orb of Netherese magic trapped inside his body. The cataclysmic power of the orb has turned Gale into a weapon capable of annihilating an entire city, should he fail to control himself.",
    textSecondary:
      "Wracked with shame for his hubris, Gale retreated to his tower – first out of self-pity, and then out of necessity. His research led him to a means of keeping the orb's power contained, but only temporarily. Now, with the threat of ceremorphosis looming large – can Gale see off both of the grim fates lurking within him, or is he doomed at every turn?",
    classIcon: "/icons/classes/wizard.webp",
    classTitle: "Wizard",
    raceIcon: "/icons/races/elf.webp",
    raceTitle: "Human",
    skillProficiencies: [
      "Arcana",
      "History",
      "Investigation",
      "Insight",
      "Persuasion",
    ],
    languages: ["Common", "Celestial", "Draconic", "Giant"],
    background: ["Sage"],
    heroBgImageMobile: "/images/heroes/gale/bg-hero-gale-mobile.webp",
    heroBgImage: "/images/heroes/gale/bg-hero-gale.webp",
    heroImageMobile: "/images/heroes/gale/hero-gale-mobile.webp",
    heroImage: "/images/heroes/gale/hero-gale.webp",
  },
  {
    avatar: "/icons/heroes/laezel-avatar.webp",
    title: "Ferocious warrior",
    name: "Lae'zel",
    textMain:
      "Crashed down to the Sword Coast from the stars, Lae'zel is a fierce warrior, even by the standards of militant githyanki society. When faced with the possibility of becoming a mind flayer, the monster she has dedicated her life to defeating, she must prove her worth and earn the right to rejoin her people – if they don't execute her first. Will Lae'zel's strength and determination be enough to prove herself to Queen Vlaakith, or must she walk another path in exile?",
    classIcon: "/icons/classes/fighter.webp",
    classTitle: "Fighter",
    raceIcon: "/icons/races/githyanki.webp",
    raceTitle: "Githyanki",
    skillProficiencies: ["Athletics", "Acrobatics", "Survival", "Intimidation"],
    languages: ["Gith", "Common", "Draconic"],
    background: ["Soldier"],
    heroBgImageMobile: "/images/heroes/laezel/bg-hero-laezel-mobile.webp",
    heroBgImage: "/images/heroes/laezel/bg-hero-laezel.webp",
    heroImageMobile: "/images/heroes/laezel/hero-laezel-mobile.webp",
    heroImage: "/images/heroes/laezel/hero-laezel.webp",
  },
  {
    avatar: "/icons/heroes/shadowheart-avatar.webp",
    title: "Loyal warrior",
    name: "Shadowheart",
    textMain:
      "A devoted cleric of Shar, goddess of darkness and loss, Shadowheart agreed to have her memories wiped as part of a holy mission.",
    textSecondary:
      "Now its sole survivor, she must deliver a powerful relic back to her kin in order to win Shar's love and have her memories restored – but all the while, she is tormented by strange, painful magic that she struggles to understand.",
    classIcon: "/icons/classes/cleric.webp",
    classTitle: "Cleric",
    raceIcon: "/icons/races/half-elf.webp",
    raceTitle: "Half-Elf",
    subRaceIcon: "/icons/races/subraces/high-half-elf.webp",
    subRaceTitle: "High Half - Elf",
    skillProficiencies: ["History", "Religion", "Insight", "Medicine"],
    languages: ["Celestial", "Common", "Elvish"],
    background: ["Acolyte"],
    heroBgImageMobile:
      "/images/heroes/shadowheart/bg-hero-shadowheart-mobile.webp",
    heroBgImage: "/images/heroes/shadowheart/bg-hero-shadowheart.webp",
    heroImageMobile: "/images/heroes/shadowheart/hero-shadowheart-mobile.webp",
    heroImage: "/images/heroes/shadowheart/hero-shadowheart.webp",
  },
  {
    avatar: "/icons/heroes/wyll-avatar.webp",
    title: "Living Legend",
    name: "Wyll",
    textMain:
      "From a scion of a famed Baldurian house to a life of adventure on the road, Wyll’s life as the monster hunter called the Blade of Frontiers has made him one of the beating hearts of the Sword Coast.",
    textSecondary:
      "While he has done great deeds for the Coast’s people, the source of his power remains secret. The cambion Mizora drew Wyll into a warlock’s pact in a moment with many lives at stake, and cursed him with the duty of hunting her enemies. Mizora only asks Wyll to sacrifice devilish creatures to her, but a cambion’s ambitions are ever fickle, and Wyll wishes to escape the pact before its price grows cruel.",
    classIcon: "/icons/classes/warlock.webp",
    classTitle: "Warlock",
    raceIcon: "/icons/races/human.webp",
    raceTitle: "Human",
    skillProficiencies: [
      "Arcana",
      "Animal Handling",
      "Survival",
      "Intimidation",
      "Persuasion",
    ],
    languages: ["Common", "Infernal"],
    background: ["Folk Hero"],
    heroBgImageMobile: "/images/heroes/wyll/bg-hero-wyll-mobile.webp",
    heroBgImage: "/images/heroes/wyll/bg-hero-wyll.webp",
    heroImageMobile: "/images/heroes/wyll/hero-wyll-mobile.webp",
    heroImage: "/images/heroes/wyll/hero-wyll.webp",
  },
  {
    avatar: "/icons/heroes/karlach-avatar.webp",
    title: "Fury of Avernus",
    name: "Karlach",
    textMain:
      "Fresh-escaped from Hell, Karlach is finally free of the archdevil Zariel – but not from the infernal engine Zariel planted in her chest. With her first taste of freedom in ten years, Karlach is eager to find a fix for the engine that's burning hotter and hotter before it burns her out completely. But even more premier in her mind? Exploring, finding like-minded travellers, falling in love (or lust)... and taking revenge on the man who sold her to Zariel all those years ago.",
    classIcon: "/icons/classes/barbarian.webp",
    classTitle: "Barbarian",
    raceIcon: "/icons/races/tiefling.webp",
    raceTitle: "Tiefling",
    subRaceIcon: "/icons/races/subraces/tiefling_zariel.webp",
    subRaceTitle: "Zariel Tiefling",
    skillProficiencies: ["Athletics", "Perception", "Survival", "Intimidation"],
    languages: ["Common", "Infernal"],
    background: ["Outlander"],
    heroBgImageMobile: "/images/heroes/karlach/bg-hero-karlach-mobile.webp",
    heroBgImage: "/images/heroes/karlach/bg-hero-karlach.webp",
    heroImageMobile: "/images/heroes/karlach/hero-karlach-mobile.webp",
    heroImage: "/images/heroes/karlach/hero-karlach.webp",
  },
  {
    avatar: "/icons/heroes/dark-avatar.webp",
    title: "The Dark Urge",
    name: "The Dark Urge",
    textMain:
      "You remember nothing but a path paved with blood. Unimaginable cruelty whispers to you from within. Can you escape it? Would you even want to?",
    heroBgImageMobile: "/images/heroes/dark/bg-hero-dark-mobile.webp",
    heroBgImage: "/images/heroes/dark/bg-hero-dark.webp",
    heroImageMobile: "/images/heroes/dark/hero-dark-mobile.webp",
    heroImage: "/images/heroes/dark/hero-dark.webp",
  },
] satisfies HeroesProps[];
