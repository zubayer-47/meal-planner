import { Flex, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { Bell, Utensils } from "lucide-react";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="p-3 bg-white">
      <Flex
        justify={"space-between"}
        align={"center"}
        className="bg-background dark:bg-foreground gap-4 items-center"
      >
        <Flex gap={10} align={"center"}>
          <Utensils />
          <Title order={3}>RecipePlanner</Title>
        </Flex>

        <div className="flex items-center gap-5">
          <Link href="/" className="">Home</Link>
          <Link href="/">Meal Planner</Link>
          <Link href="/">Favorites</Link>
          <Link href="/">Shopping List</Link>
        </div>

        <div className="flex items-center gap-2">
        <Bell size={20} />
        <Image 
          src={"https://i.pravatar.cc/150?img=56"}
          alt="profile"
          width={30}
          height={30}
          className="rounded-full"
        />
        </div>
      </Flex>
    </nav>
  );
}
