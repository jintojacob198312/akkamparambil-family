// ═══════════════════════════════════════════════════════════════════════
//  AKKAMPARAMBIL FAMILY DATA — THE ONLY FILE YOU NEED TO EDIT
//
//  This file is used by ALL pages: home, members, tree, map, gallery.
//  Edit here → every page updates automatically.
//
//  HOW TO ADD A MEMBER:
//  Copy one entry below, paste it at the end of the array (before the ]),
//  fill in the details, make sure the id is a new unique number,
//  and set parentId / spouseId correctly.
//
//  parentId  = the id of their blood parent (father or mother)
//              set to null if they married INTO the family
//  spouseId  = the id of their husband/wife (set on BOTH people)
//              set to null if not married or spouse not listed
//  generation: 1 = grandparents, 2 = parents/aunts/uncles, 3 = cousins/children
// ═══════════════════════════════════════════════════════════════════════

const FAMILY_META = {
  name: "Akkamparambil",
  established: "Kerala, India",
  description: "A family rooted in Kerala, now spread across the world — connected by heritage, love, and memory."
};

const FAMILY_MEMBERS = [
  {
    id: 1,
    name: "AC Chacko Akkamparambil",
    nickname: "Appachan",
    parentId: null,
    spouseId: 2,
    generation: 1,
    born: 1940,
    died: 2010,
    location: "Thrissur, Kerala",
    country: "India",
    profession: "Farmer",
    field: "Agriculture",
    bio: "The patriarch of our family. Known for his wisdom and warmth.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 2,
    name: "Mariamma Akkamparambil",
    nickname: "Ammachi",
    parentId: null,
    spouseId: 1,
    generation: 1,
    born: 1945,
    died: null,
    location: "Thrissur, Kerala",
    country: "India",
    profession: "Homemaker",
    field: "Family",
    bio: "The heart of our family. Her love and cooking are legendary.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 3,
    name: "Jinto Jacob Akkamparambil",
    nickname: "Jinto",
    parentId: 1,
    spouseId: 4,
    generation: 2,
    born: 1968,
    died: null,
    location: "Ernakulam, Kerala",
    country: "India",
    profession: "Civil Engineer",
    field: "Engineering",
    bio: "Built bridges — both literal and between family members.",
    photo: "",
    contact: { email: "jinto@example.com", phone: "+91-9876543210", whatsapp: "+91-9876543210" }
  },
  {
    id: 4,
    name: "Lisy Akkamparambil",
    nickname: "Lisy",
    parentId: null,
    spouseId: 3,
    generation: 2,
    born: 1972,
    died: null,
    location: "Ernakulam, Kerala",
    country: "India",
    profession: "School Teacher",
    field: "Education",
    bio: "Dedicated educator, shaping young minds for over 20 years.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 5,
    name: "Rajan Akkamparambil",
    nickname: "Raju",
    parentId: 3,
    spouseId: null,
    generation: 3,
    born: 1995,
    died: null,
    location: "Bangalore, Karnataka",
    country: "India",
    profession: "Software Engineer",
    field: "Technology",
    bio: "Full-stack developer working at a leading tech company.",
    photo: "",
    contact: { email: "rajan@example.com", phone: "", whatsapp: "" }
  },
  {
    id: 6,
    name: "Priya Akkamparambil",
    nickname: "Priya",
    parentId: 3,
    spouseId: null,
    generation: 3,
    born: 1998,
    died: null,
    location: "Thrissur, Kerala",
    country: "India",
    profession: "Medical Student",
    field: "Medicine",
    bio: "Aspiring doctor, currently in her final year of MBBS.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 7,
    name: "Mohan Akkamparambil",
    nickname: "Mohan",
    parentId: 1,
    spouseId: 8,
    generation: 2,
    born: 1971,
    died: null,
    location: "Dubai",
    country: "UAE",
    profession: "Accountant",
    field: "Finance",
    bio: "Finance professional based in Dubai for over 15 years.",
    photo: "",
    contact: { email: "mohan@example.com", phone: "+971-501234567", whatsapp: "+971-501234567" }
  },
  {
    id: 8,
    name: "Sunitha Akkamparambil",
    nickname: "Sunitha",
    parentId: null,
    spouseId: 7,
    generation: 2,
    born: 1974,
    died: null,
    location: "Dubai",
    country: "UAE",
    profession: "Nurse",
    field: "Healthcare",
    bio: "Dedicated nurse with 18 years of experience in ICU care.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 9,
    name: "Arun Akkamparambil",
    nickname: "Arun",
    parentId: 7,
    spouseId: null,
    generation: 3,
    born: 2000,
    died: null,
    location: "Toronto",
    country: "Canada",
    profession: "Business Student",
    field: "Business",
    bio: "Studying MBA at University of Toronto.",
    photo: "",
    contact: { email: "arun@example.com", phone: "", whatsapp: "" }
  },
  {
    id: 10,
    name: "Balan Akkamparambil",
    nickname: "Balan",
    parentId: 1,
    spouseId: 11,
    generation: 2,
    born: 1975,
    died: null,
    location: "London",
    country: "UK",
    profession: "Chartered Accountant",
    field: "Finance",
    bio: "CA with his own practice in East London.",
    photo: "",
    contact: { email: "balan@example.com", phone: "+44-7890123456", whatsapp: "+44-7890123456" }
  },
  {
    id: 11,
    name: "Ancy Akkamparambil",
    nickname: "Ancy",
    parentId: null,
    spouseId: 10,
    generation: 2,
    born: 1978,
    died: null,
    location: "London",
    country: "UK",
    profession: "Pharmacist",
    field: "Healthcare",
    bio: "Senior pharmacist at an NHS hospital in London.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 12,
    name: "Vijay Akkamparambil",
    nickname: "Viju",
    parentId: 10,
    spouseId: null,
    generation: 3,
    born: 2002,
    died: null,
    location: "London",
    country: "UK",
    profession: "CS Student",
    field: "Engineering",
    bio: "Studying Computer Science at Imperial College London.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  }
  // ── ADD NEW MEMBERS BELOW THIS LINE ──────────────────────────────
  // ,{
  //   id: 13,
  //   name: "New Person Name",
  //   nickname: "Nick",
  //   parentId: 3,       <- their parent's id
  //   spouseId: null,    <- spouse's id or null
  //   generation: 3,
  //   born: 1993,
  //   died: null,
  //   location: "City, State",
  //   country: "India",
  //   profession: "Doctor",
  //   field: "Medicine",
  //   bio: "Short description.",
  //   photo: "",
  //   contact: { email: "", phone: "", whatsapp: "" }
  // }
];
