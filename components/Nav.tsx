import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="flex justify-between items-center">
      <h1>Recipe</h1>
      <div className="flex items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/">Meal Planner</Link>
        <Link href="/">Favorites</Link>
        <Link href="/">Shopping List</Link>
      </div>
    </div>
  );
}
