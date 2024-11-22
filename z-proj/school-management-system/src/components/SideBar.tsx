import React from "react";
import {
  Bell,
  BookOpen,
  Calendar,
  ClipboardList,
  Edit,
  FileText,
  GraduationCap,
  House,
  LogOut,
  Megaphone,
  School,
  Settings,
  User,
  UserCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { GiTeacher } from "react-icons/gi";
import { RiParentLine } from "react-icons/ri";
import { PiExam } from "react-icons/pi";

const sidebar = [
  {
    title: "Menu",
    content: [
      {
        title: "Home",
        href: "/dashboard/admin",
        icon: House,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Teachers",
        href: "/list/teachers",
        icon: GiTeacher,
        visible: ["admin", "teacher"],
      },
      {
        title: "Students",
        href: "/list/students",
        icon: GraduationCap,
        visible: ["admin", "teacher"],
      },
      {
        title: "Parents",
        href: "/list/parents",
        icon: RiParentLine,
        visible: ["admin", "teacher"],
      },
      {
        title: "Classes",
        href: "/list/classes",
        icon: School,
        visible: ["admin", "teacher"],
      },

      {
        title: "Lessons",
        href: "/list/lessons",
        icon: BookOpen,
        visible: ["admin", "teacher"],
      },
      {
        title: "Exams",
        href: "/list/exams",
        icon: PiExam,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Assignments",
        href: "/list/assignments",
        icon: Edit,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Results",
        href: "/list/results",
        icon: FileText,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Attendance",
        href: "/list/attendance",
        icon: UserCheck,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Events",
        href: "/list/events",
        icon: Calendar,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Notifications",
        href: "/notifications",
        icon: Bell,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Announcements",
        href: "/announcements",
        icon: Megaphone,
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "Others",
    content: [
      {
        title: "Profile",
        href: "/profile",
        icon: User,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Logout",
        href: "/logout",
        icon: LogOut,
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

let role = "admin";

export default function Sidebar() {
  return (
    <div className="mt-4 p-0 lg:pl-1 xl:pl-2 text-base flex flex-col gap-8 lg:gap-4">
      {sidebar.map((item) => {
        return (
          <div key={item.title} className="flex flex-col gap-2">
            <span className="font-bold hidden lg:block pl-1 mb-2">
              {item.title}
            </span>
            <div className="flex flex-col gap-3 ">
              {item.content.map((icons) => {
                if (icons.visible.includes(role)) {
                  return (
                    <Link
                      key={icons.title}
                      href={icons.href}
                      className="flex justify-center lg:justify-start items-center gap-3 group "
                    >
                      <icons.icon
                        className="text-gray-400 group-hover:text-[#fafafa]"
                        size={25}
                      />
                      <span className="hidden lg:block font-normal text-[#fafafa] group-hover:underline">
                        {icons.title}
                      </span>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
