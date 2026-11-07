// Named exports. The other file imports them with curly braces.
export function greet(name) {
  return "Hello, " + name;
}

export const course = "Web Application Development";

// A file can have one default export. The importer chooses the local name.
export default function labTitle() {
  return "CSSE3143";
}
