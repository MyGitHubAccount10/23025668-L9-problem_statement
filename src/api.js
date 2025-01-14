const diplomas = [
  {
    name: "Information Technology",
    id: "Information-Technology",
    sessions: [
      {
        name: "C218 | UI/UX Design for Apps",
        id: "C218",
        lecturer: [ {
          desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
          name: "Azhar Kamar",
          title: "Lecturer",
        
      } ],
      },
      {
        name: "C346 | Mobile App Development",
        id: "C346",
        lecturer: [ {
          desc: "In this module, students will learn the basics of creating Android Applications.",
          name: "Derek Lee",
          title: "Lecturer",
        }],
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "Financial-Technology",
    sessions: [
      {
        name: "C237 | Software Application Development",
        id: "C237",
        lecturer: [{
          desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
          name: "Hannah Lim",
          title: "Lecturer",
        }],
      },
      {
        name: "C372 | Payment Technologies",
        id: "C372",
        lecturer: [{
          desc: "This module introduces students to different payment technologies and systems.",
          name: "Magdalene Lim",
          title: "Senior Lecturer",
        }],
      },
    ],
  },
];

export function getSession({ sessionId, diplomaId }) {
  return diplomas
    .find(({ id }) => id === diplomaId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getDiploma(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}

export function getModule() {
  return diplomas.map(({ name, desc, title, id }) => ({ name, id }));
}
