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
    name: "Chacko Chacko Akkamparambil",
    nickname: "Great Great GrandFather",
    parentId: null,
    spouseId: 2,
    generation: 1,
    born: 1900,
    died: 1995,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "Entrepreneur",
    field: "Service",
    bio: "The patriarch of our family. Known for his wisdom and warmth.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 2,
    name: "Annamma Chacko Akkamparambil",
    nickname: "Great Great GrandMother",
    parentId: null,
    spouseId: 1,
    generation: 1,
    born: 1905,
    died: 2000,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "Homemaker",
    field: "Family",
    bio: "The heart of our family. Her love and cooking are legendary.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 3,
    name: "AC Chacko Akkamparambil",
    nickname: "Jinto",
    parentId: 1,
    spouseId: 4,
    generation: 2,
    born: 1950,
    died: null,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "Service Sector",
    field: "Service",
    bio: "Built bridges — both literal and between family members.",
    photo: "",
    contact: { email: "jinto@example.com", phone: "+91-9876543210", whatsapp: "+91-9876543210" }
  },
  {
    id: 4,
    name: "Mariamma Chacko Akkamparambil",
    nickname: "Kunjamma",
    parentId: null,
    spouseId: 3,
    generation: 2,
    born: 1955,
    died: 1999,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "Tailor",
    field: "Service",
    bio: "Dedicated educator, shaping young minds for over 20 years.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 5,
    name: "Mathai Chacko Akkamparambil",
    nickname: "Kunjanja",
    parentId: 3,
    spouseId: 6,
    generation: 2,
    born: 1945,
    died: 2025,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "Service Sector",
    field: "Service",
    bio: "A loving Father",
    photo: "",
    contact: { email: "rajan@example.com", phone: "", whatsapp: "" }
  },
  {
    id: 6,
    name: "Thressiamma Mathai Akkamparambil",
    nickname: "Kallarayamma",
    parentId: null,
    spouseId: 5,
    generation: 2,
    born: 1950,
    died: null,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "House Maker",
    field: "Home Maker",
    bio: "A loving Mother",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 7,
    name: "Kuriachan Chacko Akkamparambil",
    nickname: "Moolelachachan",
    parentId: 1,
    spouseId: 8,
    generation: 2,
    born: 1930,
    died: 1999,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "Accountant",
    field: "Finance",
    bio: "Finance professional based in Dubai for over 15 years.",
    photo: "",
    contact: { email: "mohan@example.com", phone: "+971-501234567", whatsapp: "+971-501234567" }
  },
  {
    id: 8,
    name: "Aliamma KurianAkkamparambil",
    nickname: "Moolelamma",
    parentId: null,
    spouseId: 7,
    generation: 2,
    born: 1940,
    died: 2010,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "Nurse",
    field: "Healthcare",
    bio: "Dedicated nurse with 18 years of experience in ICU care.",
    photo: "",
    contact: { email: "", phone: "", whatsapp: "" }
  },
  {
    id: 9,
    name: "Joseph Chacko Akkamparambil",
    nickname: "Arun",
    parentId: 7,
    spouseId: 10,
    generation: 2,
    born: 2000,
    died: 2010,
    location: "Kuruppanthara, Kerala",
    country: "India",
    profession: "Business Student",
    field: "Business",
    bio: "Studying MBA at University of Toronto.",
    photo: "",
    contact: { email: "arun@example.com", phone: "", whatsapp: "" }
  },
  {
    id: 10,
    name: "Parelamma Akkamparambil",
    nickname: "Parelamma",
    parentId: null,
    spouseId: 9,
    generation: 2,
    born: 1945,
    died: null,
    location: "Kuruppanthara, Kerala",
    country: "India",
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
