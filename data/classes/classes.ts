// ============ TYPES ============
export type SubClass = {
  id: string;
  title: string;
  icon: string;
  new?: boolean;
};

export type ClassData = {
  id: string;
  name: string;
  icon: string;
  description: string;
  subclasses: SubClass[];
};

// ============ DATA ============
export const classesData: ClassData[] = [
  {
    id: "barbarian",
    name: "Barbarian",
    icon: "/icons/classes/barbarian.webp",
    description:
      "The strong embrace the wild that hides inside – keen instincts, primal physicality, and most of all, an unbridled, unquenchable rage.",
    subclasses: [
      {
        id: "berserker",
        title: "Berserker",
        icon: "/icons/classes/subclasses/barbarian_berserker.webp",
      },
      {
        id: "wildheart",
        title: "Wildheart",
        icon: "/icons/classes/subclasses/barbarian_wildheart.webp",
      },
      {
        id: "wild-magic",
        title: "Wild Magic",
        icon: "/icons/classes/subclasses/barbarian_wild_magic.webp",
      },
      {
        id: "path-of-the-giant",
        title: "Path of the Giant",
        icon: "/icons/classes/subclasses/barbarian_path_of_the_giant.webp",
        new: true,
      },
    ],
  },

  {
    id: "druid",
    name: "Druid",
    icon: "/icons/classes/druid.webp",
    description:
      "Druids channel the elemental forces of nature and share a deep kinship with animals. Mastery of Wild Shape allows them to transform into beasts from all over the Realms.",
    subclasses: [
      {
        id: "land",
        title: "Land",
        icon: "/icons/classes/subclasses/druid_land.webp",
      },
      {
        id: "moon",
        title: "Moon",
        icon: "/icons/classes/subclasses/druid_moon.webp",
      },
      {
        id: "spores",
        title: "Spores",
        icon: "/icons/classes/subclasses/druid_spores.webp",
      },
      {
        id: "circle-of-stars",
        title: "Circle of Stars",
        icon: "/icons/classes/subclasses/druid_circle_of_stars.webp",
        new: true,
      },
    ],
  },

  {
    id: "fighter",
    name: "Fighter",
    icon: "/icons/classes/fighter.webp",
    description:
      "Fighters have mastered the art of combat, wielding weapons with unmatched skill and wearing armour like a second skin.",
    subclasses: [
      {
        id: "battle-master",
        title: "Battle Master",
        icon: "/icons/classes/subclasses/fighter_battle_master.webp",
      },
      {
        id: "eldritch-knight",
        title: "Eldritch Knight",
        icon: "/icons/classes/subclasses/fighter_eldritch_knight.webp",
      },
      {
        id: "champion",
        title: "Champion",
        icon: "/icons/classes/subclasses/fighter_champion.webp",
      },
      {
        id: "arcane-archer",
        title: "Arcane Archer",
        icon: "/icons/classes/subclasses/fighter_arcane_archer.webp",
        new: true,
      },
    ],
  },

  {
    id: "ranger",
    name: "Ranger",
    icon: "/icons/classes/ranger.webp",
    description:
      "Rangers are unrivalled scouts and trackers, honing a deep connection with nature in order to hunt their favoured prey.",
    subclasses: [
      {
        id: "hunter",
        title: "Hunter",
        icon: "/icons/classes/subclasses/ranger_hunter.webp",
      },
      {
        id: "beast-master",
        title: "Beast Master",
        icon: "/icons/classes/subclasses/ranger_beast-master.webp",
      },
      {
        id: "gloom-stalker",
        title: "Gloom Stalker",
        icon: "/icons/classes/subclasses/ranger_gloom-stalker.webp",
      },
      {
        id: "swarmkeeper",
        title: "Swarmkeeper",
        icon: "/icons/classes/subclasses/ranger_swarm.webp",
        new: true,
      },
    ],
  },

  {
    id: "rogue",
    name: "Rogue",
    icon: "/icons/classes/monk.webp",
    description:
      "With stealth, skill, and uncanny reflexes, rogues' versatility lets them get the upper hand in almost any situation.",
    subclasses: [
      {
        id: "arcane-trickster",
        title: "Arcane Trickster",
        icon: "/icons/classes/subclasses/rogue_arcane-trickster.webp",
      },
      {
        id: "assassin",
        title: "Assassin",
        icon: "/icons/classes/subclasses/rogue_assassin.webp",
      },
      {
        id: "thief",
        title: "Thief",
        icon: "/icons/classes/subclasses/rogue_thief.webp",
      },
      {
        id: "swashbuckler",
        title: "Swashbuckler",
        icon: "/icons/classes/subclasses/rogue_swashbuckler.webp",
        new: true,
      },
    ],
  },

  {
    id: "sorcerer",
    name: "Sorcerer",
    icon: "/icons/classes/sorcerer.webp",
    description:
      "Sorcerers are natural spellcasters, drawing on inherent magic from a gift or bloodline.",
    subclasses: [
      {
        id: "wild-magic",
        title: "Wild Magic",
        icon: "/icons/classes/subclasses/sorcerer_wild-magic.webp",
      },
      {
        id: "draconic-bloodline",
        title: "Draconic Bloodline",
        icon: "/icons/classes/subclasses/sorcerer_draconic-bloodline.webp",
      },
      {
        id: "storm-sorcery",
        title: "Storm Sorcery",
        icon: "/icons/classes/subclasses/sorcerer_storm-sorcery.webp",
      },
      {
        id: "shadow-magic",
        title: "Shadow Magic",
        icon: "/icons/classes/subclasses/sorcerer_shadow_magic.webp",
        new: true,
      },
    ],
  },

  {
    id: "bard",
    name: "Bard",
    icon: "/icons/classes/bard.webp",
    description:
      "Bards know music is more than idle fancy – it is power. Through study and adventure, these travelling troubadours master song, speech, and the magic within.",
    subclasses: [
      {
        id: "lore",
        title: "Lore",
        icon: "/icons/classes/subclasses/bard_lore.webp",
      },
      {
        id: "valor",
        title: "Valor",
        icon: "/icons/classes/subclasses/bard_valor.webp",
      },
      {
        id: "swords",
        title: "Swords",
        icon: "/icons/classes/subclasses/bard_swords.webp",
      },
      {
        id: "college-of-glamour",
        title: "College of Glamour",
        icon: "/icons/classes/subclasses/bard_college_of_glamour.webp",
        new: true,
      },
    ],
  },

  {
    id: "monk",
    name: "Monk",
    icon: "/icons/classes/monk.webp",
    description:
      "Some reach enlightenment by languid meditation – others do so in the heat of battle. Monks manipulate ki to empower their own strikes and debilitate their foes.",
    subclasses: [
      {
        id: "open-hand",
        title: "Open Hand",
        icon: "/icons/classes/subclasses/monk_open-hand.webp",
      },
      {
        id: "shadow",
        title: "Shadow",
        icon: "/icons/classes/subclasses/monk_shadow.webp",
      },
      {
        id: "four-elements",
        title: "Four Elements",
        icon: "/icons/classes/subclasses/monk_four-elements.webp",
      },
      {
        id: "way-of-the-drunken-master",
        title: "Way of the Drunken Master",
        icon: "/icons/classes/subclasses/monk_drunken_master.webp",
      },
    ],
  },

  {
    id: "warlock",
    name: "Warlock",
    icon: "/icons/classes/warlock.webp",
    description:
      "Bound by a pact to an all-powerful patron, warlocks trade their loyalty for supernatural abilities and unique magic.",
    subclasses: [
      {
        id: "archfey",
        title: "Archfey",
        icon: "/icons/classes/subclasses/warlock_archfey.webp",
      },
      {
        id: "fiend",
        title: "Fiend",
        icon: "/icons/classes/subclasses/warlock_fiend.webp",
      },
      {
        id: "great-old-one",
        title: "Great Old One",
        icon: "/icons/classes/subclasses/warlock_great_old_one.webp",
      },
      {
        id: "hexblade",
        title: "Hexblade",
        icon: "/icons/classes/subclasses/warlock_haxblade.webp",
        new: true,
      },
    ],
  },

  {
    id: "paladin",
    name: "Paladin",
    icon: "/icons/classes/paladin.webp",
    description:
      "A promise made so deeply that it becomes divine in itself flows through a paladin, burning bright enough to inspire allies and smite foes.",
    subclasses: [
      {
        id: "ancients",
        title: "Ancients",
        icon: "/icons/classes/subclasses/paladin_ancients.webp",
      },
      {
        id: "devotion",
        title: "Devotion",
        icon: "/icons/classes/subclasses/paladin_devotion.webp",
      },
      {
        id: "vengeance",
        title: "Vengeance",
        icon: "/icons/classes/subclasses/paladin_vengeance.webp",
      },
      {
        id: "oathbreaker",
        title: "Oathbreaker",
        icon: "/icons/classes/subclasses/paladin_oathbreaker.webp",
      },
      {
        id: "oath-of-the-crown",
        title: "Oath of the Crown",
        icon: "/icons/classes/subclasses/paladin_crown.webp",
        new: true,
      },
    ],
  },

  {
    id: "cleric",
    name: "Cleric",
    icon: "/icons/classes/cleric.webp",
    description:
      "Clerics are representatives of the gods they worship, wielding potent divine magic for good or ill.",
    subclasses: [
      {
        id: "knowledge",
        title: "Knowledge",
        icon: "/icons/classes/subclasses/cleric_knowledge.webp",
      },
      {
        id: "life",
        title: "Life",
        icon: "/icons/classes/subclasses/cleric_life.webp",
      },
      {
        id: "light",
        title: "Light",
        icon: "/icons/classes/subclasses/cleric_light.webp",
      },
      {
        id: "nature",
        title: "Nature",
        icon: "/icons/classes/subclasses/cleric_nature.webp",
      },
      {
        id: "tempest",
        title: "Tempest",
        icon: "/icons/classes/subclasses/cleric_tempest.webp",
      },
      {
        id: "trickery",
        title: "Trickery",
        icon: "/icons/classes/subclasses/cleric_trickery.webp",
      },
      {
        id: "war",
        title: "War",
        icon: "/icons/classes/subclasses/cleric_war.webp",
      },
      {
        id: "death-domain",
        title: "Death Domain",
        icon: "/icons/classes/subclasses/cleric_death_domain.webp",
        new: true,
      },
    ],
  },

  {
    id: "wizard",
    name: "Wizard",
    icon: "/icons/classes/Wizard.webp",
    description:
      "Wizards master the arcane by specialising in individual schools of magic, combining ancient spells with modern research.",
    subclasses: [
      {
        id: "abjuration",
        title: "Abjuration",
        icon: "/icons/classes/subclasses/wizard_abjuration.webp",
      },
      {
        id: "conjuration",
        title: "Conjuration",
        icon: "/icons/classes/subclasses/wizard_conjuration.webp",
      },
      {
        id: "divination",
        title: "Divination",
        icon: "/icons/classes/subclasses/wizard_divination.webp",
      },
      {
        id: "enchantment",
        title: "Enchantment",
        icon: "/icons/classes/subclasses/wizard_enchantment.webp",
      },
      {
        id: "evocation",
        title: "Evocation",
        icon: "/icons/classes/subclasses/wizard_evocation.webp",
      },
      {
        id: "necromancy",
        title: "Necromancy",
        icon: "/icons/classes/subclasses/wizard_necromancy.webp",
      },
      {
        id: "illusion",
        title: "Illusion",
        icon: "/icons/classes/subclasses/wizard_illusion.webp",
      },
      {
        id: "transmutation",
        title: "Transmutation",
        icon: "/icons/classes/subclasses/wizard_transmutation.webp",
      },
      {
        id: "Bladesinging",
        title: "Bladesinging",
        icon: "/icons/classes/subclasses/wizard_blade_singing.webp",
        new: true,
      },
    ],
  },
];
