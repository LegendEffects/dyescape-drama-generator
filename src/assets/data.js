const staff = [
  'Dennis', 
  'Aekalix',
  'Aeris',
  'Euvrounin',
  'Michael',
  'Perotin'
]

const person = [
  ...staff,
  'MiniDigger',
  'Longpepe',
  'Zirker',
  'MisterErwin',
  'HittmanA',
  'Phil',
  'Kingalter',
  'Ghqst',
  'Isosceles',
  'MrIvanPlays',
  'Regice202',
  'Stefan',
  'Daan',
  'BananaPuncher',
  'Cotander',
  'Loski',
  'Extensy',

  'Songoda',
  'MD_5',
  'Aikar',
  'Choco'
];

const team = [
  'Moderators',
  'Developers',
  'Content Team',
  'Wiki Team'
]

const site = [
  'SpigotMC Forums',
  'PaperMC Discord',
  'Reddit',
  'Dyescape Discord',
  'Dyescape Subreddit'
];

const drama = [
  'bugs',
  'crashes',
  'drama',
  'lots of drama',
  'pain and suffering',
  'delays'
];

const say = [
  "says", 
  "tweets",
  "claims",
  "confirms", 
  "denies", 
  "announces", 
  "agrees", 
  "spams", 
  "declares"
];

const thing = [
  'paperclip',
  'toilet paper',
  'essentials',
  'rule engine',
  'phasing',
  'mob path api'
]

const buzzword = [
  'kubernetes',
  'software as a service',
  'microservices'
];

const sentences = [
  '{person} starts drama on {site}',
  '{person} starts drama about {person} on {site}',
  '{person} starts drama about {person}',
  '{person} does something dumb on {site}',
  'Drama on {site} is brought to Dyescape by {person}',

  '{person} recommends making {thing} use {buzzword} to avoid {drama}',
  '{person} recommends making {thing} use {buzzword} to make {drama}',

  '{person} brings up {person} on {site}',
  '{person} joins {team}',

  '{person} gets warned by {staff}',
  '{person} sends ludes to {staff}',

  '{person} decides to rewrite {thing} to be more like {thing}',
  '{person} decides to rewrite {thing} to be less like {thing}',

  '{team} is tagged by {person}',
  '{team} {say} {drama}'
];

export default { person, staff, site, say, drama, thing, buzzword, team, sentences };