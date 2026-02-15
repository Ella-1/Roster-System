import {
  Calendar,
  DocumentText,
  Setting2,
  Note,
  TaskSquare,
  Book,
  Document,
  Category,
  Stickynote,
  Notepad,
  MenuBoard,
  Category2
} from "iconsax-reactjs";

export type NavItem = {
  label: string;
  icon: any;
  href?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Startpagina",
    icon: Category2,
    href: "/",
  },
  {
    label: "Rooster",
    icon: TaskSquare,
    children: [
      {
        label: "Mijn Rooster",
        icon: DocumentText,
        href: "/rooster",
      },
      {
        label: "Planner",
        icon: Stickynote,
        href: "/planner",
      },
      {
        label: "Instellingen",
        icon: Stickynote,
        href: "/instellingen",
      },
    ],
  },
  {
    label: "My to do Protocols",
    icon: Stickynote,
    href: "/protocols",
  },
  {
    label: "Document Management",
    icon: Document,
    href: "/documents",
  },
  {
    label: "Department News",
    icon: Notepad,
    href: "/department-news",
  },
  {
    label: "Knowledge Base",
    icon: MenuBoard,
    href: "/knowledge",
  },
  {
    label: "General News",
    icon: DocumentText,
    href: "/news",
  },
];
