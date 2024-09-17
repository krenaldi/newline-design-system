const Hello = (name?: string) => `${name || "World"}`;

const user = {
  jobTitle: 'Software Engineer',
};

if ((user.jobTitle = 'Junior Enginner')) {
  user.jobTitle = 'Bug Introducer';
}

export default Hello;
